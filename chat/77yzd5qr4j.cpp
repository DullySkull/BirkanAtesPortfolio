#include "FishFlockManager.h"
#include "DrawDebugHelpers.h"
#include "Engine/World.h"
#include "Async/ParallelFor.h"
#include "CollisionQueryParams.h"
#include "Components/HierarchicalInstancedStaticMeshComponent.h"
#include "Components/InstancedStaticMeshComponent.h"

static FORCEINLINE float Clamp01(float x) { return FMath::Clamp(x, 0.f, 1.f); }

FTransform AFishFlockManager::MakeInstanceTransform(const FVector& Pos, const FVector& Vel, float YawOffsetDeg,
                                                    float Scale)
{
	const FVector Fwd = Vel.IsNearlyZero() ? FVector(1, 0, 0) : Vel.GetSafeNormal();
	const FRotator Face = FRotationMatrix::MakeFromX(Fwd).Rotator();
	const FQuat YawOffset(FVector::UpVector, FMath::DegreesToRadians(YawOffsetDeg));
	const FQuat Final = YawOffset * Face.Quaternion();
	return FTransform(Final, Pos, FVector(Scale));
}

AFishFlockManager::AFishFlockManager()
{
	PrimaryActorTick.bCanEverTick = true;
	USceneComponent* Root = CreateDefaultSubobject<USceneComponent>(TEXT("Root"));
	SetRootComponent(Root);
}

void AFishFlockManager::BeginPlay()
{
	Super::BeginPlay();

	RNG.Initialize(RandomSeed);

	if (!WaterVolume)
	{
		UE_LOG(LogTemp, Warning,
		       TEXT("FishFlockManager: WaterVolume not assigned. Falling back to SpawnBoxExtent around actor."));
	}

	// Cache cos(FOV) (avoid acos in hot path)
	CosViewAngle = FMath::Cos(FMath::DegreesToRadians(FMath::Clamp(ViewAngleDegrees, 1.f, 180.f)));

	// Spatial grid
	CellSize = FMath::Max(10.f, NeighborRadius);
	NeighborCellOffsets.Reset();
	for (int32 dx = -1; dx <= 1; ++dx)
		for (int32 dy = -1; dy <= 1; ++dy)
			for (int32 dz = -1; dz <= 1; ++dz)
				NeighborCellOffsets.Add(FIntVector(dx, dy, dz));

	// Reuse sweep params
	SweepParams = FCollisionQueryParams(SCENE_QUERY_STAT(FishAvoid), false);
	SweepParams.bReturnPhysicalMaterial = false;
	SweepParams.bFindInitialOverlaps = false;

	BuildMaterialHISMs();
	ComputeAvoidanceRays();
	InitAgents();
	SyncInstances(true);

	// Double buffers and batch buffers
	NextPos.SetNumUninitialized(Agents.Num());
	NextVel.SetNumUninitialized(Agents.Num());

	BatchInstanceIdx.SetNum(MaterialHISMs.Num());
	BatchTransforms.SetNum(MaterialHISMs.Num());
}

void AFishFlockManager::BuildMaterialHISMs()
{
	MaterialHISMs.Empty();

	auto MakeHISM = [&](UMaterialInterface* Mat) -> UHierarchicalInstancedStaticMeshComponent* {
		auto* C = NewObject<UHierarchicalInstancedStaticMeshComponent>(this);
		C->SetupAttachment(RootComponent);
		C->RegisterComponent();
		C->SetCollisionEnabled(ECollisionEnabled::NoCollision);
		if (FishMesh) C->SetStaticMesh(FishMesh);
		if (Mat) C->SetMaterial(0, Mat);
		C->NumCustomDataFloats = 0;
		return C;
	};

	if (FishMaterials.Num() > 0)
	{
		for (UMaterialInterface* Mat : FishMaterials)
			MaterialHISMs.Add(MakeHISM(Mat));
	}
	else
	{
		MaterialHISMs.Add(MakeHISM(nullptr));
	}
}

void AFishFlockManager::ComputeAvoidanceRays()
{
	AvoidanceRays.Reset();
	AvoidanceRays.Reserve(FMath::Max(8, NumAvoidancePoints));

	const float GoldenRatio = (1.f + FMath::Sqrt(5.f)) * 0.5f;
	const float AngleInc = PI * 2.f * GoldenRatio;

	for (int32 i = 0; i < NumAvoidancePoints; ++i)
	{
		const float t = (float)i / (float)NumAvoidancePoints;
		const float incl = FMath::Acos(1.f - 2.f * t);
		const float azim = AngleInc * (float)i;

		const float sx = FMath::Sin(incl) * FMath::Cos(azim);
		const float sy = FMath::Sin(incl) * FMath::Sin(azim);
		const float sz = FMath::Cos(incl);

		// Local bias (keeps a nicer distribution for forward sampling)
		const FRotator LocalBias(-90.f, 0.f, 0.f);
		AvoidanceRays.Add(LocalBias.RotateVector(FVector(sx, sy, sz)).GetSafeNormal());
	}
}

void AFishFlockManager::InitAgents()
{
	Agents.Reset();
	Agents.SetNum(NumFish);

	FVector Pt;
	const FVector Center = GetActorLocation();
	const FVector Ext = SpawnBoxExtent; // Fallback

	for (int32 i = 0; i < NumFish; ++i)
	{
		FBoidAgent& A = Agents[i];

		if (WaterVolume && WaterVolume->GetRandomPointInVolume(Pt))
		{
			A.Pos = Pt;
		}
		else
		{
			// Fallback spawn in local box
			const FVector RandOffset(
				RNG.FRandRange(-Ext.X, Ext.X),
				RNG.FRandRange(-Ext.Y, Ext.Y),
				RNG.FRandRange(-Ext.Z, Ext.Z));
			A.Pos = Center + RandOffset;
		}

		// Random velocity
		A.Vel = FVector(RNG.FRandRange(-1, 1), RNG.FRandRange(-1, 1), RNG.FRandRange(-0.5f, 0.5f))
			.GetSafeNormal() * (MaxSpeed * 0.35f);

		// Random material
		A.MatIdx = (MaterialHISMs.Num() > 0) ? RNG.RandRange(0, MaterialHISMs.Num() - 1) : 0;
		A.InstanceIdx = -1;
	}
}

void AFishFlockManager::SyncInstances(bool bClearExisting)
{
	if (bClearExisting)
	{
		for (auto* C : MaterialHISMs) if (C) C->ClearInstances();
	}

	for (int32 i = 0; i < Agents.Num(); ++i)
	{
		const FBoidAgent& A = Agents[i];
		const int32 MatIdx = FMath::Clamp(A.MatIdx, 0, MaterialHISMs.Num() - 1);
		UHierarchicalInstancedStaticMeshComponent* C = MaterialHISMs[MatIdx];
		if (!C) continue;

		const FTransform T = MakeInstanceTransform(A.Pos, A.Vel, RotationForwardOffsetDegrees, FishScale);
		Agents[i].InstanceIdx = C->AddInstance(T, true);
	}
}

// Core math

FVector AFishFlockManager::LimitVector(const FVector& V, float MaxLen)
{
	const float L = V.Size();
	return (L > MaxLen) ? V * (MaxLen / (L + KINDA_SMALL_NUMBER)) : V;
}

FVector AFishFlockManager::BoundsPush(const FVector& P) const
{
	const FVector Ext = (WorldBoxExtent.IsNearlyZero() ? SpawnBoxExtent : WorldBoxExtent);
	if (Ext.IsNearlyZero()) return FVector::ZeroVector;

	const FVector Center = GetActorLocation();
	const FVector MinB = Center - Ext;
	const FVector MaxB = Center + Ext;

	FVector Push = FVector::ZeroVector;

	auto AxisPush = [&](float v, float Min, float Max, const FVector& Axis)
	{
		if (v < Min)
		{
			const float s = Clamp01((Min - v) / (Ext.X + Ext.Y + Ext.Z));
			Push += Axis * s;
		}
		else if (v > Max)
		{
			const float s = Clamp01((v - Max) / (Ext.X + Ext.Y + Ext.Z));
			Push -= Axis * s;
		}
	};

	AxisPush(P.X, MinB.X, MaxB.X, FVector::ForwardVector);
	AxisPush(P.Y, MinB.Y, MaxB.Y, FVector::RightVector);
	AxisPush(P.Z, MinB.Z, MaxB.Z, FVector::UpVector);

	return Push * BoundsPushWeight * MaxSpeed;
}

// Spatial grid

void AFishFlockManager::BuildGrid()
{
	Grid.Reset();

	// Pre-allocate some buckets to reduce allocations
	Grid.Reserve(Agents.Num());

	const float InvCell = 1.f / CellSize;

	for (int32 i = 0; i < Agents.Num(); ++i)
	{
		const FVector& P = Agents[i].Pos;
		const FIntVector Key(
			FMath::FloorToInt(P.X * InvCell),
			FMath::FloorToInt(P.Y * InvCell),
			FMath::FloorToInt(P.Z * InvCell));

		TArray<int32>& Bucket = Grid.FindOrAdd(Key);
		Bucket.Add(i);
	}
}

FVector AFishFlockManager::BoidSteer_Grid(int32 Index) const
{
	const FBoidAgent& Me = Agents[Index];

	const float NeighborR2 = FMath::Square(NeighborRadius);
	const float SepR2 = FMath::Square(SeparationRadius);

	// Find cell
	const float InvCell = 1.f / CellSize;
	const FIntVector MyKey(
		FMath::FloorToInt(Me.Pos.X * InvCell),
		FMath::FloorToInt(Me.Pos.Y * InvCell),
		FMath::FloorToInt(Me.Pos.Z * InvCell));

	int32 Count = 0;
	FVector Cohesion = FVector::ZeroVector;
	FVector Alignment = FVector::ZeroVector;
	FVector Separation = FVector::ZeroVector;

	// Search 27 neighboring cells
	for (const FIntVector& Off : NeighborCellOffsets)
	{
		const FIntVector Key = MyKey + Off;
		const TArray<int32>* Bucket = Grid.Find(Key);
		if (!Bucket) continue;

		for (int32 j : *Bucket)
		{
			if (j == Index) continue;

			const FVector To = Agents[j].Pos - Me.Pos;
			const float D2 = To.SizeSquared();
			if (D2 <= NeighborR2)
			{
				++Count;
				Cohesion += Agents[j].Pos;
				Alignment += Agents[j].Vel;

				if (D2 <= SepR2)
					Separation -= To / FMath::Max(1.f, D2);
			}
		}
	}

	FVector Accel = FVector::ZeroVector;

	if (Count > 0)
	{
		const FVector AvgPos = Cohesion / (float)Count;
		const FVector AvgVel = Alignment / (float)Count;

		Accel += (AvgPos - Me.Pos).GetSafeNormal() * CohesionWeight;
		Accel += (AvgVel.GetSafeNormal()) * AlignmentWeight;
		Accel += (Separation.GetSafeNormal()) * SeparationWeight;
	}

	// Bounds push acts like a goal bias
	Accel += (BoundsPush(Me.Pos) - Me.Vel);

	return Accel;
}

// Avoidance

FVector AFishFlockManager::ObstacleAvoidVelocity(const FBoidAgent& A) const
{
	if (AvoidanceRays.Num() == 0) return FVector::ZeroVector;

	const FVector Fwd = A.Vel.IsNearlyZero() ? FVector(1, 0, 0) : A.Vel.GetSafeNormal();

	const FVector Start = A.Pos;
	const FQuat FaceQ = FRotationMatrix::MakeFromX(Fwd).ToQuat();

	float FurthestClearDist = -1.f;
	FVector BestDir = Fwd;

	FHitResult Hit;

	for (int32 i = 0; i < AvoidanceRays.Num(); ++i)
	{
		const FVector WorldDir = FaceQ.RotateVector(AvoidanceRays[i]).GetSafeNormal();

		// FOV by dot only
		if (FVector::DotProduct(WorldDir, Fwd) < CosViewAngle) continue;

		const FVector End = Start + WorldDir * AvoidanceViewDistance;

		const bool bHit = GetWorld()->SweepSingleByChannel(
			Hit, Start, End, FQuat::Identity,
			AvoidanceTraceChannel,
			FCollisionShape::MakeSphere(AvoidanceSphereRadius),
			SweepParams);

		if (!bHit)
		{
			// Clear path found
			return WorldDir * MaxSpeed * ObstacleAvoidanceFactor;
		}
		else
		{
			if (Hit.Distance > FurthestClearDist)
			{
				FurthestClearDist = Hit.Distance;
				BestDir = WorldDir;
			}
		}
	}

	// All rays hit, pick the longest partial
	return BestDir * MaxSpeed * ObstacleAvoidanceFactor;
}

void AFishFlockManager::Tick(float Dt)
{
	Super::Tick(Dt);
	if (Agents.Num() == 0 || FishMesh == nullptr)
		return;

	// Build spatial grid
	BuildGrid();

	// Parallel simulation
	ParallelFor(Agents.Num(), [&](int32 i)
	{
		const FBoidAgent& A = Agents[i];

		// Boids steering
		FVector Accel = BoidSteer_Grid(i);

		// Wander bias toward forward desired speed
		const FVector DesiredFwd = (A.Vel.IsNearlyZero() ? FVector(1, 0, 0) : A.Vel.GetSafeNormal()) * MaxSpeed;
		Accel += (DesiredFwd - A.Vel) * WanderAttractGain;

		// Obstacle avoidance
		const FVector AvoidVel = ObstacleAvoidVelocity(A);
		if (!AvoidVel.IsNearlyZero())
			Accel += (AvoidVel - A.Vel);

		// Clamp accel
		if (Accel.Size() > MaxAccel)
			Accel = Accel.GetSafeNormal() * MaxAccel;

		// Desired velocity (speed limited)
		const FVector DesiredVel = LimitVector(A.Vel + Accel * Dt, MaxSpeed);

		// Turn rate limit without acos:
		FVector NewVel;
		if (!A.Vel.IsNearlyZero())
		{
			const float MaxAngle = FMath::DegreesToRadians(MaxTurnDegPerSec * Dt);
			const FVector From = A.Vel.GetSafeNormal();
			const FVector To = DesiredVel.IsNearlyZero() ? From : DesiredVel.GetSafeNormal();

			// If angle is bigger than cap, rotate by MaxAngle around axis
			const float Dot = FMath::Clamp(FVector::DotProduct(From, To), -1.f, 1.f);
			if (Dot < FMath::Cos(MaxAngle))
			{
				const FVector Axis = FVector::CrossProduct(From, To).GetSafeNormal();
				const FQuat dq(Axis, MaxAngle);
				NewVel = LimitVector(dq.RotateVector(A.Vel), MaxSpeed);
			}
			else
			{
				NewVel = DesiredVel;
			}
		}
		else
		{
			NewVel = DesiredVel;
		}

		NextVel[i] = NewVel;
		NextPos[i] = A.Pos + NewVel * Dt;
	});

	// Commit + constrain (sequential) and prepare batched transforms
	for (int32 m = 0; m < MaterialHISMs.Num(); ++m)
	{
		BatchInstanceIdx[m].Reset();
		BatchTransforms[m].Reset();
	}

	for (int32 i = 0; i < Agents.Num(); ++i)
	{
		FBoidAgent& A = Agents[i];
		A.Vel = NextVel[i];
		A.Pos = NextPos[i];

		// Constrain to WaterVolume if present
		if (WaterVolume)
		{
			FVector P = A.Pos;
			WaterVolume->ConstrainInside(P);
			A.Pos = P;
		}

		// Collect batched transform for the agent's HISM
		const int32 MatIdx = FMath::Clamp(A.MatIdx, 0, MaterialHISMs.Num() - 1);
		if (UHierarchicalInstancedStaticMeshComponent* C = MaterialHISMs[MatIdx])
		{
			if (A.InstanceIdx >= 0)
			{
				BatchInstanceIdx[MatIdx].Add(A.InstanceIdx);
				BatchTransforms[MatIdx].Add(
					MakeInstanceTransform(A.Pos, A.Vel, RotationForwardOffsetDegrees, FishScale));
			}
		}

		if (bDrawDebug)
		{
			DrawDebugPoint(GetWorld(), A.Pos, 3.f, FColor::Cyan, false, 0.f);
		}
	}

	// Issue a single batched update per material + mark dirty once
	for (int32 m = 0; m < MaterialHISMs.Num(); ++m)
	{
		if (UHierarchicalInstancedStaticMeshComponent* C = MaterialHISMs[m])
		{
			if (BatchInstanceIdx[m].Num() > 0)
			{
				const int32 Start = BatchInstanceIdx[m][0];
				C->BatchUpdateInstancesTransforms(Start, BatchTransforms[m], true, false, true);
				C->MarkRenderStateDirty();
			}
			C->MarkRenderStateDirty();
		}
	}

	// Optional debug bounds when no WaterVolume is assigned
	if (bDrawDebug && !WaterVolume)
	{
		const FVector Center = GetActorLocation();
		const FVector Ext = (WorldBoxExtent.IsNearlyZero() ? SpawnBoxExtent : WorldBoxExtent);
		DrawDebugBox(GetWorld(), Center, Ext, FColor::Blue, false, 0.f, 0, 1.f);
	}
}
