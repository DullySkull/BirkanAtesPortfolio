#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "Components/HierarchicalInstancedStaticMeshComponent.h"
#include "WaterFlockVolume.h" // for WaterVolume spawn & constrain
#include "FishFlockManager.generated.h"

// One fish/boid agent
USTRUCT()
struct FBoidAgent
{
	GENERATED_BODY()

	UPROPERTY()
	FVector Pos = FVector::ZeroVector;
	UPROPERTY()
	FVector Vel = FVector::ZeroVector;

	// Render bookkeeping
	UPROPERTY()
	int32 InstanceIdx = -1;
	UPROPERTY()
	int32 MatIdx = 0;
};

UCLASS()
class GP4TEAM1_API AFishFlockManager : public AActor
{
	GENERATED_BODY()

public:
	AFishFlockManager();

	// Rendering
	UPROPERTY(EditAnywhere, Category="Render")
	UStaticMesh* FishMesh = nullptr;

	UPROPERTY(EditAnywhere, Category="Render")
	TArray<UMaterialInterface*> FishMaterials;

	UPROPERTY(EditAnywhere, Category="Render", meta=(ClampMin=0.01))
	float FishScale = 0.6f;

	// Fish rotation because not facing straight
	UPROPERTY(EditAnywhere, Category="Render")
	float RotationForwardOffsetDegrees = 0.f;

	// Spawn
	UPROPERTY(EditAnywhere, Category="Spawn", meta=(ClampMin=1))
	int32 NumFish = 500;

	// If WaterVolume is not assigned, we fall back to this local box
	UPROPERTY(EditAnywhere, Category="Spawn")
	FVector SpawnBoxExtent = FVector(3000.f, 3000.f, 1000.f);

	UPROPERTY(EditAnywhere, Category="Spawn")
	int32 RandomSeed = 1337;

	// Spawn & constrain inside this water volume
	UPROPERTY(EditInstanceOnly, Category="Spawn")
	AWaterFlockVolume* WaterVolume = nullptr;

	// Boids
	UPROPERTY(EditAnywhere, Category="Boids", meta=(ClampMin=0))
	float MaxSpeed = 600.f;

	UPROPERTY(EditAnywhere, Category="Boids", meta=(ClampMin=0))
	float MaxAccel = 900.f;

	UPROPERTY(EditAnywhere, Category="Boids", meta=(ClampMin=0))
	float NeighborRadius = 500.f;

	UPROPERTY(EditAnywhere, Category="Boids", meta=(ClampMin=0))
	float SeparationRadius = 160.f;

	UPROPERTY(EditAnywhere, Category="Boids", meta=(ClampMin=0))
	float CohesionWeight = 1.0f;

	UPROPERTY(EditAnywhere, Category="Boids", meta=(ClampMin=0))
	float AlignmentWeight = 1.2f;

	UPROPERTY(EditAnywhere, Category="Boids", meta=(ClampMin=0))
	float SeparationWeight = 1.6f;

	// Max turning rate (deg/sec) to keep motion smooth
	UPROPERTY(EditAnywhere, Category="Boids", meta=(ClampMin=0))
	float MaxTurnDegPerSec = 110.f;

	// Wander / goal drift
	UPROPERTY(EditAnywhere, Category="Wander", meta=(ClampMin=0))
	float WanderAttractGain = 1.5f;

	// World bounds
	UPROPERTY(EditAnywhere, Category="Bounds")
	FVector WorldBoxExtent = FVector::ZeroVector;

	UPROPERTY(EditAnywhere, Category="Bounds")
	float BoundsPushWeight = 2.0f;

	// Obstacle avoidance
	UPROPERTY(EditAnywhere, Category="Avoidance", meta=(ClampMin=8, ClampMax=4096))
	int32 NumAvoidancePoints = 256;

	UPROPERTY(EditAnywhere, Category="Avoidance", meta=(ClampMin=1, ClampMax=180))
	float ViewAngleDegrees = 110.f;

	UPROPERTY(EditAnywhere, Category="Avoidance", meta=(ClampMin=10))
	float AvoidanceViewDistance = 1200.f;

	UPROPERTY(EditAnywhere, Category="Avoidance", meta=(ClampMin=1))
	float AvoidanceSphereRadius = 50.f;

	UPROPERTY(EditAnywhere, Category="Avoidance")
	TEnumAsByte<ECollisionChannel> AvoidanceTraceChannel = ECC_WorldStatic;

	UPROPERTY(EditAnywhere, Category="Avoidance", meta=(ClampMin=0))
	float ObstacleAvoidanceFactor = 1.5f;

	// Debug
	UPROPERTY(EditAnywhere, Category="Debug")
	bool bDrawDebug = false;

protected:
	virtual void BeginPlay() override;
	virtual void Tick(float DeltaSeconds) override;

private:
	// Agents and rendering
	UPROPERTY()
	TArray<FBoidAgent> Agents;
	UPROPERTY()
	TArray<UHierarchicalInstancedStaticMeshComponent*> MaterialHISMs;

	// Precomputed local-space avoidance rays (unit vectors)
	UPROPERTY()
	TArray<FVector> AvoidanceRays;

	FRandomStream RNG;

	// Optimization
	// Spatial grid (hash): cell -> indices
	TMap<FIntVector, TArray<int32>> Grid;
	// 27 neighbor offsets around a cell
	TArray<FIntVector> NeighborCellOffsets;
	// Grid cell size (≈ NeighborRadius)
	float CellSize = 500.f;

	// Double buffers for next state
	TArray<FVector> NextPos;
	TArray<FVector> NextVel;

	// Cached cosines to avoid acos
	float CosViewAngle = 0.f;

	// Reusable collision params for sweeps
	FCollisionQueryParams SweepParams;

	// Reusable per-material batch buffers
	TArray<TArray<int32>> BatchInstanceIdx;
	TArray<TArray<FTransform>> BatchTransforms;

	// Helpers
	void BuildMaterialHISMs();
	void InitAgents();
	void SyncInstances(bool bClearExisting = true);
	void ComputeAvoidanceRays();
	void BuildGrid();

	// Steering
	FVector BoidSteer_Grid(int32 Index) const;
	FVector ObstacleAvoidVelocity(const FBoidAgent& A) const;
	FVector BoundsPush(const FVector& P) const;

	// Math
	static FVector LimitVector(const FVector& V, float MaxLen);

	// Instance batching helper
	static FTransform MakeInstanceTransform(const FVector& Pos, const FVector& Vel, float YawOffsetDeg, float Scale);
};
