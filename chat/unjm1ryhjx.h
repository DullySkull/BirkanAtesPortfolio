// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "AIController.h"
#include "NiagaraSystem.h"
#include "NiagaraComponent.h"
#include "NiagaraFunctionLibrary.h"
#include "UABP_Fox.h"
#include "FoxAIController.generated.h"

class UAnimMontage;

/**
 *
 */
UCLASS()
class GP4TEAM1_API AFoxAIController : public AAIController
{
	GENERATED_BODY()

public:
	AFoxAIController();

	// Set waypoint
	UFUNCTION(BlueprintCallable, Category = "Nav")
	void SetTargetWaypoint(AActor* NewTarget) { TargetWaypoint = NewTarget; }

	// Actor to move toward
	UPROPERTY(EditInstanceOnly, BlueprintReadWrite, Category = "Nav")
	AActor* TargetWaypoint = nullptr;

	// Distance front of the player direction to the waypoint
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Nav")
	float LeadDistance = 500.f;

	// Max distance the foxs target point allowed to be from the player
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Nav")
	float MaxLeash = 800.f;

	// Acceptance radius for MoveTo
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Nav")
	float AcceptableRadius = 200.f;

	// Timer before cathc up
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Nav")
	float LeashCatchupDelay = 10.f;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Nav")
	float UpdateInterval = 0.25f;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Nav")
	FVector NavQueryExtent = FVector(200.f, 200.f, 200.f);

	// Wander around
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Wander")
	float WanderRadius = 250.f;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Wander")
	float WanderRefreshInterval = 2.0f;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Wander")
	float WanderLerpSpeed = 1.5f;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Wander")
	bool bFaceWaypoint = true;

	// Play around player
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Playful")
	bool bIsPlayful = true;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Playful")
	float PlayfulDuration = 4.0f;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Playful")
	float PlayerStillSpeedThreshold = 8.f;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Playful")
	float StillCheckInterval = 0.25f;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Playful")
	float StillCyclePeriod = 4.0f;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Playful")
	float OrbitRadius = 300.f;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Playful")
	float OrbitAngularSpeedDeg = 120.f;

	float OrbitAngleDeg = 0.f;

	UPROPERTY(EditAnywhere, Category = "Playful")
	float JumpChancePerSecond = 0.4f;

	UPROPERTY(EditAnywhere, Category = "Playful")
	float JumpStrength = 600.f;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Fox|State")
	bool bIsResting = false;

	UPROPERTY()
	FTimerHandle RestTimerHandle;
	void StartResting();
	UFUNCTION()
	//void OnGoToRestEnded();
	void WakeUpFromRest();

	UPROPERTY(EditAnywhere, Category = "Fox|Animations")
	UAnimSequence* AnimGoToRest;
	UPROPERTY(EditAnywhere, Category = "Fox|Animations")
	UAnimSequence* AnimSleeping;
	bool bMovingToRest = false;
	FVector RestTargetLocation;
	void ArriveAtRestTarget();

	void UpdateAnimBP();

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Teleport")
	UNiagaraSystem* TeleportEffect;

protected:
	// Teleport settings
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Teleport")
	float TeleportDistance = 2000.f;
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Teleport")
	float StuckCheckInterval = 2.0f;
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Teleport")
	float StuckDistanceThreshold = 50.f;
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Teleport")
	float TeleportOffsetDistance = 200.f;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Teleport")
	UMaterialInterface* DissolveMaterial;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Teleport")
	float TeleportFadeInDuration = 0.8f;

private:
	FVector LastStuckCheckPosition;
	FTimerHandle StuckCheckTimer;

	void CheckIfStuckOrTooFar();
	void TeleportToPlayer();
	bool FindTeleportLocation(FVector& OutLocation);

	bool bIsTeleporting = false;
	float TeleportDissolveTimer = 0.f;
	UMaterialInstanceDynamic* FoxDissolveMaterial = nullptr;
	TArray<UMaterialInterface*> OriginalFoxMaterials;

	void StartTeleportDissolve();
	void TickTeleportDissolve();
	void EndTeleportDissolve();


protected:
	virtual void BeginPlay() override;

	UFUNCTION()
	void TickLead();
	UFUNCTION()
	void TickCheckPlayerStill();
	UFUNCTION()
	void OnStillCycle();
	UFUNCTION()
	void PickNewWanderTarget();
	UFUNCTION()
	void EndLeashCooldown();
	UFUNCTION()
	void EndPlayful();
	UFUNCTION()
	void TryPlayfulJump();

	bool bLeashCooldownActive = false;
	bool ComputeLeadPoint(FVector& OutPoint);

private:
	FTimerHandle LeadTimer;
	FTimerHandle WanderTimer;
	FTimerHandle PlayfulTimer;
	FTimerHandle StillCheckTimer;
	FTimerHandle StillCycleTimer;
	FTimerHandle LeashCooldownTimer;

	FVector2D CurrentWander = FVector2D::ZeroVector;
	FVector2D TargetWander = FVector2D::ZeroVector;
};
