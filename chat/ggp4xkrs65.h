#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "WildLifeSpawner.generated.h"

class APawn;

// Seasons
UENUM(BlueprintType)
enum class ESeasonType : uint8
{
	Spring UMETA(DisplayName="Spring"),
	Summer UMETA(DisplayName="Summer"),
	Autumn UMETA(DisplayName="Autumn"),
	Winter UMETA(DisplayName="Winter")
};

// Herd & Save Data
USTRUCT(BlueprintType)
struct GP4TEAM1_API FHerdDefinition
{
	GENERATED_BODY()

	UPROPERTY(EditAnywhere, Category="Herd")
	FName Name = "Herd";

	UPROPERTY(EditAnywhere, Category="Herd")
	TArray<TSubclassOf<APawn>> Species;

	UPROPERTY(EditAnywhere, Category="Herd", meta=(ClampMin="0"))
	int32 MinGroupSize = 3;

	UPROPERTY(EditAnywhere, Category="Herd", meta=(ClampMin="0"))
	int32 MaxGroupSize = 7;

	UPROPERTY(EditAnywhere, Category="Herd", meta=(ClampMin="0"))
	int32 MinGroupsPerCell = 1;

	UPROPERTY(EditAnywhere, Category="Herd", meta=(ClampMin="0"))
	int32 MaxGroupsPerCell = 2;

	/** Members placed within this radius around a group center */
	UPROPERTY(EditAnywhere, Category="Herd", meta=(ClampMin="0.0"))
	float GroupRadius = 800.f;

	/** Empty = all seasons */
	UPROPERTY(EditAnywhere, Category="Herd")
	TArray<ESeasonType> AllowedSeasons;

	UPROPERTY(EditAnywhere, Category="Herd", meta=(ClampMin="1"))
	int32 Weight = 1;
};

USTRUCT(BlueprintType)
struct GP4TEAM1_API FWildlifeClassEntry
{
	GENERATED_BODY()

	UPROPERTY(EditAnywhere, Category="Species")
	TSubclassOf<APawn> Class = nullptr;

	UPROPERTY(EditAnywhere, Category="Species", meta=(ClampMin="1"))
	int32 Weight = 1;

	UPROPERTY(EditAnywhere, Category="Species", meta=(ClampMin="0"))
	int32 MinPerCell = 0;

	UPROPERTY(EditAnywhere, Category="Species", meta=(ClampMin="0"))
	int32 MaxPerCell = 3;
};

USTRUCT()
struct GP4TEAM1_API FWildlifeSavedAnimal
{
	GENERATED_BODY()

	UPROPERTY()
	TSubclassOf<APawn> Class = nullptr;
	UPROPERTY()
	FTransform Transform;
	UPROPERTY()
	float Health = 100.f;
	UPROPERTY()
	int32 LocalId = 0;
};

USTRUCT()
struct GP4TEAM1_API FWildlifeCellData
{
	GENERATED_BODY()

	UPROPERTY(Transient)
	TSet<TWeakObjectPtr<APawn>> LiveAnimals;
	UPROPERTY()
	TArray<FWildlifeSavedAnimal> SavedAnimals;
	/** Snapshot for this cell */
	UPROPERTY()
	TArray<FWildlifeSavedAnimal> InitialAnimals;
	UPROPERTY()
	bool bInitialized = false;
};

USTRUCT(BlueprintType)
struct GP4TEAM1_API FCellCoord
{
	GENERATED_BODY()

	UPROPERTY()
	int32 X = 0;
	UPROPERTY()
	int32 Y = 0;

	FORCEINLINE FCellCoord() = default;
	FORCEINLINE FCellCoord(int32 InX, int32 InY) : X(InX), Y(InY)
	{
	}

	FORCEINLINE bool operator==(const FCellCoord& Other) const { return X == Other.X && Y == Other.Y; }
};

FORCEINLINE uint32 GetTypeHash(const FCellCoord& C)
{
	return HashCombine(::GetTypeHash(C.X), ::GetTypeHash(C.Y));
}

UCLASS()
class GP4TEAM1_API AWildLifeSpawner : public AActor
{
	GENERATED_BODY()

public:
	AWildLifeSpawner();

protected:
	virtual void BeginPlay() override;
	virtual void EndPlay(const EEndPlayReason::Type EndPlayReason) override;

public:
	virtual void Tick(float DeltaSeconds) override;

	// Herd system
	UPROPERTY(EditAnywhere, Category="Spawner|Herds")
	TArray<FHerdDefinition> Herds;

	// Single species entries (legacy)
	UPROPERTY(EditAnywhere, Category="Spawner|Species (Legacy)")
	TArray<FWildlifeClassEntry> Species;

	// Grid / streaming
	UPROPERTY(EditAnywhere, Category="Spawner|Grid", meta=(ClampMin="100.0"))
	float CellSize = 8000.f;

	/** Manhattan radius; 2 => 5x5 diamond of active cells */
	UPROPERTY(EditAnywhere, Category="Spawner|Grid", meta=(ClampMin="1"))
	int32 ActiveRadiusCells = 2;

	/** Cells beyond ActiveRadius+Buffer are despawned */
	UPROPERTY(EditAnywhere, Category="Spawner|Grid", meta=(ClampMin="0"))
	int32 DespawnBufferCells = 1;

	// Limits
	UPROPERTY(EditAnywhere, Category="Spawner|Limits", meta=(ClampMin="0"))
	int32 MaxAnimalsPerCell = 24;

	/** Keep spawns away from player by at least this distance */
	UPROPERTY(EditAnywhere, Category="Spawner|Limits", meta=(ClampMin="0.0"))
	float MinSpawnDistanceFromPlayer = 300.f;

	/** Keep spawns *near* the player within this max distance (ring: [Min, Max]) */
	UPROPERTY(EditAnywhere, Category="Spawner|Limits", meta=(ClampMin="200.0"))
	float SpawnPlayerMaxRadius = 1000.f;

	/** Try to place group centers around player */
	UPROPERTY(EditAnywhere, Category="Spawner|Limits")
	bool bSpawnAroundPlayer = true;

	/** Snap XY of spawn locations to a grid step for a clean, on grid look */
	UPROPERTY(EditAnywhere, Category="Spawner|Placement")
	bool bSnapToGrid = false;

	UPROPERTY(EditAnywhere, Category="Spawner|Placement", meta=(ClampMin="1.0"))
	float GridSnapSize = 100.f;

	/** Add vertical offset on top of hit ground so they never clip */
	UPROPERTY(EditAnywhere, Category="Spawner|Placement")
	float SpawnGroundOffset = 0.f; // feet-on-ground by default (capsule handles height)

	/** Rotate to ground normal for slopes */
	UPROPERTY(EditAnywhere, Category="Spawner|Placement")
	bool bAlignToGroundNormal = false;

	// Placement
	UPROPERTY(EditAnywhere, Category="Spawner|Placement", meta=(ClampMin="0.0", ClampMax="1.0"))
	float MinGroundNormalZ = 0.6f;

	UPROPERTY(EditAnywhere, Category="Spawner|Placement", meta=(ClampMin="1"))
	int32 MaxLocationTries = 24;

	/** Upward start for traces and total downward distance is 2x this value */
	UPROPERTY(EditAnywhere, Category="Spawner|Placement", meta=(ClampMin="100"))
	float TraceHeight = 2000.f;

	UPROPERTY(EditAnywhere, Category="Spawner|Placement")
	bool bRequireNavLocation = true;

	UPROPERTY(EditAnywhere, Category="Spawner|Placement", meta=(EditCondition="bRequireNavLocation", ClampMin="0.0"))
	float NavProjectionRadius = 300.f;

	// Random / Perf
	UPROPERTY(EditAnywhere, Category="Spawner|Random")
	int32 BaseSeed = 1337;

	UPROPERTY(EditAnywhere, Category="Spawner|Perf", meta=(ClampMin="0.05"))
	float UpdateInterval = 0.2f;

	// Debug
	UPROPERTY(EditAnywhere, Category="Spawner|Debug")
	bool bDrawGrid = false;

	UPROPERTY(EditAnywhere, Category="Spawner|Debug")
	bool bDrawSpawnPoints = false;

	// AI safety toggles
	UPROPERTY(EditAnywhere, Category="Spawner|AI")
	bool bForceSpawnDefaultController = true;

	UPROPERTY(EditAnywhere, Category="Spawner|AI")
	bool bForceCharacterWalking = true;

	// Season control
	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category="Spawner|Season")
	ESeasonType CurrentSeason = ESeasonType::Spring;

	UFUNCTION(BlueprintCallable, Category="Spawner|Season")
	void SetCurrentSeason(ESeasonType NewSeason) { CurrentSeason = NewSeason; }

	// Which “state” should be restored when you re-enter a cell?
	UPROPERTY(EditAnywhere, Category="Spawner|Respawn")
	bool bRestoreInitialPopulationOnReenter = true;

private:
	// Memory of cells
	UPROPERTY(Transient)
	TMap<FCellCoord, FWildlifeCellData> Cells;

	// Set when the spawner is shutting down
	bool bIsTearingDown = false;

	float TimeSinceLastUpdate = 0.f;
	TWeakObjectPtr<APawn> PlayerPawn;

	// Core
	void RefreshPlayerPawn();
	FCellCoord WorldToCell(const FVector& WorldLoc) const;
	FVector CellToWorldCenter(const FCellCoord& C) const;
	FBox2D CellBounds2D(const FCellCoord& C) const;

	void UpdateStreaming();
	void EnsureCellInitialized(const FCellCoord& C);
	void SpawnMissingForCell(const FCellCoord& C);
	void DespawnFarCells(const TSet<FCellCoord>& WantedCells, const FCellCoord& PlayerCell);

	// Placement helpers
	bool FindValidSpawnTransform(const FVector& CellCenter, FRandomStream& RNG, FTransform& OutXform) const;
	bool FindValidSpawnNear(const FVector& Origin, float Radius, FRandomStream& RNG, FTransform& OutXform) const;
	bool FindValidSpawnNearPlayerInCell(const FCellCoord& C, float Radius, FRandomStream& RNG,
	                                    FTransform& OutXform) const;
	bool ProjectToGround(const FVector& TestPoint, FVector& OutLocation, FVector& OutNormal) const;
	bool NavProjectIfNeeded(const FVector& InLoc, FVector& OutLoc) const;

	// Utility
	FORCEINLINE FVector SnapXY(const FVector& In) const;

	// Get vertical offset from pawn collision
	float GetClassHeightOffset(TSubclassOf<APawn> PawnClass) const;

	// Herd helpers
	bool HerdAllowedInSeason(const FHerdDefinition& Herd) const;
	TSubclassOf<APawn> PickRandomFrom(const TArray<TSubclassOf<APawn>>& Classes, FRandomStream& RNG) const;
	void GenerateCellWithHerds(const FCellCoord& C, FWildlifeCellData& Cell, FRandomStream& RNG);

	// Save/restore
	void SaveLiveAnimalsInCell(FWildlifeCellData& Cell);

	UFUNCTION()
	void OnAnimalDestroyed(AActor* DestroyedActor);

	// Distance helpers
	int32 ComputeCellDistance(const FCellCoord& A, const FCellCoord& B) const;
	bool IsWithinActiveRadius(const FCellCoord& PlayerCell, const FCellCoord& C) const;
	bool IsBeyondDespawnRadius(const FCellCoord& PlayerCell, const FCellCoord& C) const;
	FCellCoord InferCellFromLocation(const FVector& WorldLoc) const;
};
