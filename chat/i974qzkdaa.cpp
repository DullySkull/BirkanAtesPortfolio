#include "WildLifeSpawner.h"
#include "Engine/World.h"
#include "GameFramework/Pawn.h"
#include "GameFramework/PlayerController.h"
#include "DrawDebugHelpers.h"
#include "NavigationSystem.h"
#include "Components/CapsuleComponent.h"
#include "Components/PrimitiveComponent.h"
#include "GameFramework/Character.h"
#include "GameFramework/CharacterMovementComponent.h"

AWildLifeSpawner::AWildLifeSpawner()
{
	PrimaryActorTick.bCanEverTick = true;
	PrimaryActorTick.TickGroup = TG_PrePhysics;
}

void AWildLifeSpawner::BeginPlay()
{
	Super::BeginPlay();
	bIsTearingDown = false;
	RefreshPlayerPawn();
}

void AWildLifeSpawner::EndPlay(const EEndPlayReason::Type EndPlayReason)
{
	// Guard against teardown
	bIsTearingDown = true;

	// Unbind to prevent OnAnimalDestroyed during world teardown
	for (auto& Pair : Cells)
	{
		FWildlifeCellData& Cell = Pair.Value;
		for (TWeakObjectPtr<APawn> P : Cell.LiveAnimals)
		{
			if (APawn* A = P.Get())
			{
				A->OnDestroyed.RemoveDynamic(this, &AWildLifeSpawner::OnAnimalDestroyed);
			}
		}
		Cell.LiveAnimals.Empty();
		Cell.SavedAnimals.Empty();
		Cell.InitialAnimals.Empty();
	}

	Cells.Empty();
	Super::EndPlay(EndPlayReason);
}

void AWildLifeSpawner::Tick(float DeltaSeconds)
{
	Super::Tick(DeltaSeconds);

	TimeSinceLastUpdate += DeltaSeconds;
	if (TimeSinceLastUpdate < UpdateInterval) return;
	TimeSinceLastUpdate = 0.f;

	UpdateStreaming();

	for (auto& Pair : Cells)
	{
		Pair.Value.LiveAnimals.Remove(nullptr);
	}
}

void AWildLifeSpawner::RefreshPlayerPawn()
{
	if (PlayerPawn.IsValid()) return;

	if (UWorld* World = GetWorld())
	{
		if (APlayerController* PC = World->GetFirstPlayerController())
		{
			PlayerPawn = PC->GetPawn();
		}
	}
}

FCellCoord AWildLifeSpawner::WorldToCell(const FVector& WorldLoc) const
{
	FCellCoord Out;
	Out.X = FMath::FloorToInt(WorldLoc.X / CellSize);
	Out.Y = FMath::FloorToInt(WorldLoc.Y / CellSize);
	return Out;
}

FVector AWildLifeSpawner::CellToWorldCenter(const FCellCoord& C) const
{
	return FVector((static_cast<double>(C.X) + 0.5) * CellSize,
	               (static_cast<double>(C.Y) + 0.5) * CellSize,
	               0.0);
}

FBox2D AWildLifeSpawner::CellBounds2D(const FCellCoord& C) const
{
	const double MinX = static_cast<double>(C.X) * CellSize;
	const double MinY = static_cast<double>(C.Y) * CellSize;
	return FBox2D(FVector2D(MinX, MinY), FVector2D(MinX + CellSize, MinY + CellSize));
}

int32 AWildLifeSpawner::ComputeCellDistance(const FCellCoord& A, const FCellCoord& B) const
{
	return FMath::Abs(A.X - B.X) + FMath::Abs(A.Y - B.Y);
}

bool AWildLifeSpawner::IsWithinActiveRadius(const FCellCoord& PlayerCell, const FCellCoord& C) const
{
	return ComputeCellDistance(PlayerCell, C) <= ActiveRadiusCells;
}

bool AWildLifeSpawner::IsBeyondDespawnRadius(const FCellCoord& PlayerCell, const FCellCoord& C) const
{
	return ComputeCellDistance(PlayerCell, C) > (ActiveRadiusCells + DespawnBufferCells);
}

FCellCoord AWildLifeSpawner::InferCellFromLocation(const FVector& WorldLoc) const
{
	return WorldToCell(WorldLoc);
}

void AWildLifeSpawner::UpdateStreaming()
{
	RefreshPlayerPawn();
	if (!PlayerPawn.IsValid() || CellSize <= 1.f) return;

	const FVector PlayerLoc = PlayerPawn->GetActorLocation();
	const FCellCoord PlayerCell = WorldToCell(PlayerLoc);

	// Active cells around the player
	TSet<FCellCoord> WantedCells;
	for (int32 dx = -ActiveRadiusCells; dx <= ActiveRadiusCells; ++dx)
	{
		for (int32 dy = -ActiveRadiusCells; dy <= ActiveRadiusCells; ++dy)
		{
			FCellCoord C(PlayerCell.X + dx, PlayerCell.Y + dy);
			if (IsWithinActiveRadius(PlayerCell, C))
			{
				WantedCells.Add(C);
			}
		}
	}

	// Spawn only wanted cells
	for (const FCellCoord& C : WantedCells)
	{
		EnsureCellInitialized(C);
		SpawnMissingForCell(C);
	}

	DespawnFarCells(WantedCells, PlayerCell);

	// Debug
	if (bDrawGrid)
	{
		for (const FCellCoord& C : WantedCells)
		{
			DrawDebugBox(GetWorld(), CellToWorldCenter(C), FVector(CellSize * 0.5f, CellSize * 0.5f, 50.f),
			             FColor::Green, false, UpdateInterval, 0, 2.f);
		}
	}
}

bool AWildLifeSpawner::HerdAllowedInSeason(const FHerdDefinition& Herd) const
{
	return Herd.AllowedSeasons.Num() == 0 || Herd.AllowedSeasons.Contains(CurrentSeason);
}

TSubclassOf<APawn> AWildLifeSpawner::PickRandomFrom(const TArray<TSubclassOf<APawn>>& Classes, FRandomStream& RNG) const
{
	return (Classes.Num() > 0) ? Classes[RNG.RandRange(0, Classes.Num() - 1)] : nullptr;
}

void AWildLifeSpawner::EnsureCellInitialized(const FCellCoord& C)
{
	FWildlifeCellData& Cell = Cells.FindOrAdd(C);
	if (Cell.bInitialized) return;

	FRandomStream RNG;
	RNG.Initialize(HashCombine(BaseSeed, HashCombine(::GetTypeHash(C.X), ::GetTypeHash(C.Y))));

	GenerateCellWithHerds(C, Cell, RNG);

	// Save from the beginning snapshot for this cell
	Cell.InitialAnimals = Cell.SavedAnimals;
	Cell.bInitialized = true;
}

void AWildLifeSpawner::GenerateCellWithHerds(const FCellCoord& C, FWildlifeCellData& Cell, FRandomStream& RNG)
{
	int32 Remaining = MaxAnimalsPerCell;
	TArray<FWildlifeSavedAnimal> Generated;
	Generated.Reserve(MaxAnimalsPerCell);

	for (const FHerdDefinition& Herd : Herds)
	{
		if (!HerdAllowedInSeason(Herd) || Herd.Species.Num() == 0) continue;

		const int32 Groups = (Herd.MaxGroupsPerCell > Herd.MinGroupsPerCell)
			                     ? RNG.RandRange(Herd.MinGroupsPerCell, Herd.MaxGroupsPerCell)
			                     : Herd.MinGroupsPerCell;

		for (int32 g = 0; g < Groups && Remaining > 0; ++g)
		{
			// Group center near player but clamped inside cell
			FTransform GroupCenterXf;
			bool bHaveCenter = false;

			if (bSpawnAroundPlayer && PlayerPawn.IsValid())
			{
				bHaveCenter = FindValidSpawnNearPlayerInCell(C, SpawnPlayerMaxRadius, RNG, GroupCenterXf);
			}

			if (!bHaveCenter)
			{
				const FVector CellCenter = CellToWorldCenter(C);
				bHaveCenter = FindValidSpawnTransform(CellCenter, RNG, GroupCenterXf);
			}
			if (!bHaveCenter) continue;

			const FVector GroupCenter = GroupCenterXf.GetLocation();

			const int32 Count = (Herd.MaxGroupSize > Herd.MinGroupSize)
				                    ? RNG.RandRange(Herd.MinGroupSize, Herd.MaxGroupSize)
				                    : Herd.MinGroupSize;

			for (int32 i = 0; i < Count && Remaining > 0; ++i)
			{
				FTransform MemberXf;
				if (!FindValidSpawnNear(GroupCenter, Herd.GroupRadius, RNG, MemberXf))
				{
					MemberXf = GroupCenterXf;
				}

				if (!(WorldToCell(MemberXf.GetLocation()) == C))
				{
					continue;
				}

				FWildlifeSavedAnimal A;
				A.Class = PickRandomFrom(Herd.Species, RNG);
				A.Transform = MemberXf;
				A.Health = 100.f;
				A.LocalId = Generated.Num();

				if (IsValid(A.Class))
				{
					Generated.Add(A);
					--Remaining;
				}
			}
		}

		if (Remaining <= 0) break;
	}

	Cell.SavedAnimals = MoveTemp(Generated);
}

void AWildLifeSpawner::SpawnMissingForCell(const FCellCoord& C)
{
	FWildlifeCellData& Cell = Cells.FindOrAdd(C);
	if (Cell.SavedAnimals.Num() == 0) return;

	for (FWildlifeSavedAnimal& S : Cell.SavedAnimals)
	{
		// Spawn until live count reaches SavedAnimals.Num()
		if (Cell.LiveAnimals.Num() >= Cell.SavedAnimals.Num()) break;
		if (!IsValid(S.Class)) continue;

		// If Transform wasn’t set yet, pick one
		if (S.Transform.Equals(FTransform::Identity))
		{
			FRandomStream RNG;
			RNG.Initialize(HashCombine(BaseSeed, HashCombine(::GetTypeHash(C.X), ::GetTypeHash(C.Y))));
			FTransform Xf;

			bool bOk = (bSpawnAroundPlayer && PlayerPawn.IsValid())
				           ? FindValidSpawnNearPlayerInCell(C, SpawnPlayerMaxRadius, RNG, Xf)
				           : false;

			if (!bOk)
			{
				const FVector CellCenter = CellToWorldCenter(C);
				bOk = FindValidSpawnTransform(CellCenter, RNG, Xf);
			}
			if (bOk) S.Transform = Xf;
		}

		// Enforce min distance from player
		if (PlayerPawn.IsValid() &&
			FVector::Dist2D(PlayerPawn->GetActorLocation(), S.Transform.GetLocation()) < MinSpawnDistanceFromPlayer)
		{
			FRandomStream RNG;
			RNG.Initialize(FMath::Rand());
			FTransform Alt;
			if (FindValidSpawnNearPlayerInCell(C, SpawnPlayerMaxRadius, RNG, Alt))
				S.Transform = Alt;
		}

		// Nav projection if required
		if (bRequireNavLocation)
		{
			FVector L = S.Transform.GetLocation();
			if (NavProjectIfNeeded(L, L)) S.Transform.SetLocation(L);
		}

		// Final Z: ground + capsule (feet on ground)
		{
			const FVector XY = S.Transform.GetLocation();
			const FVector TraceStart = XY + FVector(0, 0, TraceHeight);

			FVector GroundLoc, GroundNormal;
			if (ProjectToGround(TraceStart, GroundLoc, GroundNormal))
			{
				FVector NavLoc = GroundLoc;
				if (bRequireNavLocation)
				{
					if (NavProjectIfNeeded(NavLoc, NavLoc))
					{
						GroundLoc = NavLoc;
					}
				}

				const float ClassOffset = GetClassHeightOffset(S.Class);
				GroundLoc.Z += (SpawnGroundOffset + ClassOffset);

				FRotator Rot = bAlignToGroundNormal
					               ? FRotationMatrix::MakeFromZX(GroundNormal, FVector::ForwardVector).Rotator()
					               : S.Transform.GetRotation().Rotator();

				FVector FinalLoc = bSnapToGrid ? SnapXY(GroundLoc) : GroundLoc;

				S.Transform.SetLocation(FinalLoc);
				S.Transform.SetRotation(Rot.Quaternion());
			}
		}

		// Spawn
		if (UWorld* W = GetWorld())
		{
			FActorSpawnParameters Params;
			Params.SpawnCollisionHandlingOverride = ESpawnActorCollisionHandlingMethod::AdjustIfPossibleButAlwaysSpawn;

			APawn* NewAnimal = W->SpawnActor<APawn>(S.Class, S.Transform, Params);
			if (NewAnimal)
			{
				// Ensure AI is possessed and able to move
				if (bForceSpawnDefaultController && !NewAnimal->GetController())
				{
					NewAnimal->SpawnDefaultController();
				}
				if (bForceCharacterWalking)
				{
					if (ACharacter* AsChar = Cast<ACharacter>(NewAnimal))
					{
						if (UCharacterMovementComponent* Move = AsChar->GetCharacterMovement())
						{
							if (Move->MovementMode == MOVE_None)
							{
								Move->SetMovementMode(MOVE_Walking);
							}
						}
					}
				}

				NewAnimal->OnDestroyed.AddUniqueDynamic(this, &AWildLifeSpawner::OnAnimalDestroyed);
				Cell.LiveAnimals.Add(NewAnimal);

				if (bDrawSpawnPoints)
				{
					DrawDebugSphere(W, S.Transform.GetLocation(), 60.f, 12, FColor::Cyan, false, UpdateInterval * 2.f,
					                0, 2.f);
				}
			}
		}
	}
}

void AWildLifeSpawner::DespawnFarCells(const TSet<FCellCoord>& WantedCells, const FCellCoord& PlayerCell)
{
	TArray<FCellCoord> ToDespawn;
	ToDespawn.Reserve(Cells.Num());

	for (const auto& Pair : Cells)
	{
		if (!WantedCells.Contains(Pair.Key) && IsBeyondDespawnRadius(PlayerCell, Pair.Key))
		{
			ToDespawn.Add(Pair.Key);
		}
	}

	for (const FCellCoord& C : ToDespawn)
	{
		if (FWildlifeCellData* Cell = Cells.Find(C))
		{
			// Save/restore
			if (bRestoreInitialPopulationOnReenter)
			{
				Cell->SavedAnimals = Cell->InitialAnimals; // restore original
			}
			else
			{
				SaveLiveAnimalsInCell(*Cell); // snapshot current
			}

			// Now clean up live actors
			for (auto It = Cell->LiveAnimals.CreateIterator(); It; ++It)
			{
				if (APawn* A = It->Get())
				{
					A->OnDestroyed.RemoveDynamic(this, &AWildLifeSpawner::OnAnimalDestroyed);
					if (IsValid(A))
					{
						A->Destroy();
					}
				}
			}
			Cell->LiveAnimals.Empty();
		}
	}
}

void AWildLifeSpawner::SaveLiveAnimalsInCell(FWildlifeCellData& Cell)
{
	TArray<FWildlifeSavedAnimal> Snapshot;
	Snapshot.Reserve(Cell.LiveAnimals.Num());

	int32 NextId = 0;
	for (TWeakObjectPtr<APawn> P : Cell.LiveAnimals)
	{
		if (APawn* A = P.Get())
		{
			FWildlifeSavedAnimal S;
			S.Class = A->GetClass();
			S.Transform = A->GetActorTransform();
			S.Health = 100.f;
			S.LocalId = NextId++;
			Snapshot.Add(S);
		}
	}

	Cell.SavedAnimals = MoveTemp(Snapshot);
}

void AWildLifeSpawner::OnAnimalDestroyed(AActor* DestroyedActor)
{
	if (bIsTearingDown || !DestroyedActor) return;

	const FCellCoord C = InferCellFromLocation(DestroyedActor->GetActorLocation());
	if (FWildlifeCellData* Cell = Cells.Find(C))
	{
		for (auto It = Cell->LiveAnimals.CreateIterator(); It; ++It)
		{
			if (It->Get() == DestroyedActor)
			{
				It.RemoveCurrent();
				break;
			}
		}
	}
}

// Placement helpers
bool AWildLifeSpawner::FindValidSpawnTransform(const FVector& CellCenter, FRandomStream& RNG,
                                               FTransform& OutXform) const
{
	if (UWorld* W = GetWorld())
	{
		const float Half = CellSize * 0.5f;

		for (int32 i = 0; i < MaxLocationTries; ++i)
		{
			FVector Candidate(CellCenter.X + RNG.FRandRange(-Half, Half),
			                  CellCenter.Y + RNG.FRandRange(-Half, Half),
			                  CellCenter.Z + TraceHeight);

			FVector GroundLoc, GroundNormal;
			if (!ProjectToGround(Candidate, GroundLoc, GroundNormal)) continue;
			if (GroundNormal.Z < MinGroundNormalZ) continue;

			if (bSnapToGrid) GroundLoc = SnapXY(GroundLoc);

			FVector FinalLoc = GroundLoc;
			if (bRequireNavLocation && !NavProjectIfNeeded(FinalLoc, FinalLoc)) continue;

			FRotator Rot = bAlignToGroundNormal
				               ? FRotationMatrix::MakeFromZX(GroundNormal, FVector::ForwardVector).Rotator()
				               : FRotator::ZeroRotator;

			OutXform = FTransform(Rot, FinalLoc);
			return true;
		}
	}
	return false;
}

bool AWildLifeSpawner::FindValidSpawnNear(const FVector& Origin, float Radius, FRandomStream& RNG,
                                          FTransform& OutXform) const
{
	if (UWorld* W = GetWorld())
	{
		for (int32 i = 0; i < MaxLocationTries; ++i)
		{
			FVector Candidate(Origin.X + RNG.FRandRange(-Radius, Radius),
			                  Origin.Y + RNG.FRandRange(-Radius, Radius),
			                  Origin.Z + TraceHeight);

			FVector GroundLoc, GroundNormal;
			if (!ProjectToGround(Candidate, GroundLoc, GroundNormal)) continue;
			if (GroundNormal.Z < MinGroundNormalZ) continue;

			if (PlayerPawn.IsValid() &&
				FVector::Dist2D(PlayerPawn->GetActorLocation(), GroundLoc) < MinSpawnDistanceFromPlayer)
			{
				continue;
			}

			if (bSnapToGrid) GroundLoc = SnapXY(GroundLoc);

			FVector FinalLoc = GroundLoc;
			if (bRequireNavLocation && !NavProjectIfNeeded(FinalLoc, FinalLoc)) continue;

			FRotator Rot = bAlignToGroundNormal
				               ? FRotationMatrix::MakeFromZX(GroundNormal, FVector::ForwardVector).Rotator()
				               : FRotator::ZeroRotator;

			OutXform = FTransform(Rot, FinalLoc);
			return true;
		}
	}
	return false;
}

bool AWildLifeSpawner::FindValidSpawnNearPlayerInCell(const FCellCoord& C, float Radius, FRandomStream& RNG,
                                                      FTransform& OutXform) const
{
	if (!PlayerPawn.IsValid()) return false;

	const FVector PlayerLoc = PlayerPawn->GetActorLocation();
	const FBox2D Bounds = CellBounds2D(C);
	const float MinR = FMath::Max(1.f, MinSpawnDistanceFromPlayer);
	const float MaxR = FMath::Max(MinR + 1.f, Radius);

	if (UWorld* W = GetWorld())
	{
		for (int32 i = 0; i < MaxLocationTries * 2; ++i)
		{
			const float R = RNG.FRandRange(MinR, MaxR);
			const float A = RNG.FRandRange(0.f, 2.f * PI);

			FVector Candidate(PlayerLoc.X + R * FMath::Cos(A),
			                  PlayerLoc.Y + R * FMath::Sin(A),
			                  PlayerLoc.Z + TraceHeight);

			// Clamp XY inside this cell
			const FVector2D Min = Bounds.Min;
			const FVector2D Max = Bounds.Max;
			Candidate.X = FMath::Clamp(Candidate.X, Min.X + 5.f, Max.X - 5.f);
			Candidate.Y = FMath::Clamp(Candidate.Y, Min.Y + 5.f, Max.Y - 5.f);

			FVector GroundLoc, GroundNormal;
			if (!ProjectToGround(Candidate, GroundLoc, GroundNormal)) continue;
			if (GroundNormal.Z < MinGroundNormalZ) continue;

			if (bSnapToGrid) GroundLoc = SnapXY(GroundLoc);

			FVector FinalLoc = GroundLoc;
			if (bRequireNavLocation && !NavProjectIfNeeded(FinalLoc, FinalLoc)) continue;

			FRotator Rot = bAlignToGroundNormal
				               ? FRotationMatrix::MakeFromZX(GroundNormal, FVector::ForwardVector).Rotator()
				               : FRotator::ZeroRotator;

			OutXform = FTransform(Rot, FinalLoc);
			return true;
		}
	}
	return false;
}

bool AWildLifeSpawner::ProjectToGround(const FVector& TestPoint, FVector& OutLocation, FVector& OutNormal) const
{
	if (UWorld* W = GetWorld())
	{
		FHitResult Hit;
		if (W->LineTraceSingleByChannel(Hit, TestPoint, TestPoint - FVector(0, 0, TraceHeight * 2.f), ECC_WorldStatic))
		{
			OutLocation = Hit.ImpactPoint;
			OutNormal = Hit.ImpactNormal.GetSafeNormal();
			return true;
		}
	}
	return false;
}

bool AWildLifeSpawner::NavProjectIfNeeded(const FVector& InLoc, FVector& OutLoc) const
{
	if (!bRequireNavLocation)
	{
		OutLoc = InLoc;
		return true;
	}

	if (UWorld* W = GetWorld())
	{
		if (UNavigationSystemV1* Nav = UNavigationSystemV1::GetCurrent(W))
		{
			FNavLocation Proj;
			if (Nav->ProjectPointToNavigation(InLoc, Proj, FVector(NavProjectionRadius)))
			{
				OutLoc = Proj.Location;
				return true;
			}
		}
	}
	return false;
}

FORCEINLINE FVector AWildLifeSpawner::SnapXY(const FVector& In) const
{
	if (!bSnapToGrid || GridSnapSize <= 1.f) return In;
	FVector Out = In;
	Out.X = FMath::GridSnap(Out.X, GridSnapSize);
	Out.Y = FMath::GridSnap(Out.Y, GridSnapSize);
	return Out;
}

float AWildLifeSpawner::GetClassHeightOffset(TSubclassOf<APawn> PawnClass) const
{
	float Out = 0.f;
	if (!*PawnClass) return Out;

	const APawn* CDO = Cast<APawn>(PawnClass->GetDefaultObject());
	if (!CDO) return Out;

	if (const UCapsuleComponent* Capsule = CDO->FindComponentByClass<UCapsuleComponent>())
	{
		Out += Capsule->GetScaledCapsuleHalfHeight();
	}
	else if (const UPrimitiveComponent* Prim = Cast<UPrimitiveComponent>(CDO->GetRootComponent()))
	{
		Out += Prim->Bounds.BoxExtent.Z;
	}

	return Out;
}
