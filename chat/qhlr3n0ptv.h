// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "AIController.h"
#include "Perception/AIPerceptionTypes.h"
#include "Perception/AISenseConfig_Sight.h"
#include "DoeAIController.generated.h"


class UAIPerceptionComponent;
class UAISenseConfig_Sight;

/**
 * 
 */
UCLASS()
class GP4TEAM1_API ADoeAIController : public AAIController
{
	GENERATED_BODY()

public:
	ADoeAIController();

protected:
	// AIController
	virtual void OnPossess(APawn* InPawn) override;
	virtual void OnUnPossess() override;
	virtual void OnMoveCompleted(FAIRequestID RequestID, const FPathFollowingResult& Result) override;

	// Wander loop
	void StartIdleDelay(float Seconds);
	void MoveToRandomPosition();
	bool FindRandomReachablePosition(const FVector& Origin, float Radius, FVector& OutPoint) const;

	// Perception callback
	UFUNCTION()
	void OnTargetPerceptionUpdated(AActor* Actor, FAIStimulus Stimulus);

	// Flee logic
	void BeginFleeFrom(const FVector& ThreatLocation);
	void EndFlee();

	// Facing
	void FaceTowards(const FVector& WorldPoint);
	void ClearFacing();

	// GetPlayer
	AActor* GetPlayerActor() const;
	bool IsPlayerActor(const AActor* A) const;

	// Herd System
	FVector ComputeHerdBiasDirection(FVector& OutDebugCohesion, FVector& OutDebugAlign,
	                                 FVector& OutDebugSeparate) const;
	void GetNearbyDoes(TArray<APawn*>& OutNeighbors) const;
	void BroadcastPanic(const FVector& ThreatLocation);
	void ReceivePanic(const FVector& ThreatLocation);

public:
	// Roam
	UPROPERTY(EditAnywhere, Category="Roam")
	float WanderRadius = 1200.f;

	UPROPERTY(EditAnywhere, Category="Roam")
	float AcceptanceRadius = 85.f;

	UPROPERTY(EditAnywhere, Category="Roam")
	FVector2D IdleDelayRange = FVector2D(1.5f, 4.0f);

	// Flee
	UPROPERTY(EditAnywhere, Category="Flee")
	bool bEnableFlee = true;

	UPROPERTY(EditAnywhere, Category="Flee")
	float FleeDistance = 1500.f;

	UPROPERTY(EditAnywhere, Category="Flee")
	float CalmDownTime = 5.0f;

	// Backup: if perception misses, flee when player is this close (and line-of-sight holds)
	UPROPERTY(EditAnywhere, Category="Flee")
	float ProximityFleeDistance = 400.f;

	// Movement speeds
	UPROPERTY(EditAnywhere, Category="Movement")
	float WalkSpeed = 220.f;

	UPROPERTY(EditAnywhere, Category="Movement")
	float FleeSpeed = 520.f;

	// Herd
	UPROPERTY(EditAnywhere, Category="Herd")
	float HerdRadius = 1200.f;

	UPROPERTY(EditAnywhere, Category="Herd")
	float SeparationRadius = 220.f;

	UPROPERTY(EditAnywhere, Category="Herd")
	float CohesionWeight = 1.0f;

	UPROPERTY(EditAnywhere, Category="Herd")
	float AlignmentWeight = 0.8f;

	UPROPERTY(EditAnywhere, Category="Herd")
	float SeparationWeight = 1.5f;

	// How strongly the herd vector influences the next destination
	UPROPERTY(EditAnywhere, Category="Herd")
	float HerdBiasStrength = 800.f;

private:
	FTimerHandle IdleTimerHandle;
	FTimerHandle CalmDownHandle;

	UPROPERTY()
	APawn* ControlledPawn = nullptr;

	// Perception
	UPROPERTY(VisibleAnywhere, Category="AI")
	UAIPerceptionComponent* PerceptionComp;

	UPROPERTY()
	UAISenseConfig_Sight* SightConfig;

	bool bIsFleeing = false;
};
