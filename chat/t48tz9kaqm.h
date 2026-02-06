// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "AIController.h"
#include "Perception/AIPerceptionTypes.h"
#include "BunnyCharacter.h"
#include "BunnyAIController.generated.h"

class UAISenseConfig_Sight;
class UBehaviorTree;
class UBlackboardComponent;

UENUM(BlueprintType)
enum class EBunnyBrainState: uint8
{
	Idle UMETA(DisplayName="Idle"),
	Explore UMETA(DisplayName="Explore"),
	Forage UMETA(DisplayName="Forage"),
	Alert UMETA(DisplayName="Alert"),
	Flee UMETA(DisplayName="Flee"),
	Sleep UMETA(DisplayName="Sleep")
};

UCLASS()
class GP4TEAM1_API ABunnyAIController : public AAIController
{
	GENERATED_BODY()

public:
	ABunnyAIController();

	virtual void OnPossess(APawn* InPawn) override;
	virtual void Tick(float DeltaSeconds) override;

	// BehaviorTree (might not use?)
	UPROPERTY(EditDefaultsOnly, Category="AI")
	UBehaviorTree* BehaviorTreeAsset;

protected:
	// Perception
	UPROPERTY()
	UAISenseConfig_Sight* SightConfig;
	UFUNCTION()
	void OnPerceptionUpdated(AActor* Actor, FAIStimulus Stimulus);

private:
	UPROPERTY()
	UBlackboardComponent* BB = nullptr;
	UPROPERTY()
	ABunnyCharacter* Bunny = nullptr;

	// Wandering target, no BT/EQS
	FVector WanderTarget = FVector::ZeroVector;
	float WanderCooldown = 0.f;

	// Behavior settings
	UPROPERTY(EditAnywhere, Category="Settings")
	float IdleMin = 2.0f;
	UPROPERTY(EditAnywhere, Category="Settings")
	float IdleMax = 4.0f;
	UPROPERTY(EditAnywhere, Category="Settings")
	float ExploreMin = 3.5f;
	UPROPERTY(EditAnywhere, Category="Settings")
	float ExploreMax = 6.0f;
	UPROPERTY(EditAnywhere, Category="Settings")
	float EatTimeMin = 2.2f;
	UPROPERTY(EditAnywhere, Category="Settings")
	float EatTimeMax = 4.0f;
	UPROPERTY(EditAnywhere, Category="Settings")
	float SleepTimeMin = 5.0f;
	UPROPERTY(EditAnywhere, Category="Settings")
	float SleepTimeMax = 9.0f;
	UPROPERTY(EditAnywhere, Category="Settings")
	float AlertTimeMin = 1.2f;
	UPROPERTY(EditAnywhere, Category="Settings")
	float AlertTimeMax = 2.2f;

	// Random states routine
	UPROPERTY(EditAnywhere, Category="Settings")
	float ChanceSleepAfterEat = 0.25f;
	UPROPERTY(EditAnywhere, Category="Settings")
	float ChanceRandomAlert = 0.10f;

	EBunnyBrainState BrainState = EBunnyBrainState::Idle;
	float StateTimeLeft = 0.f;

	// Threat
	UPROPERTY()
	TWeakObjectPtr<AActor> LastThreat;
	float ThreatLevel = 0.f;

	// Helpers
	void SetRandomWanderTarget();
	void UpdateStateFromThreat(float dt);
	void MoveSmartTo(const FVector& Target, float dt);
	void GotoState(EBunnyBrainState NewState, float Duration = -1.f);
	void DriveState(float dt);
	bool Reached(const FVector& P, float Tol = 120.f) const;

	// Forage helpers
	AActor* FindNearbyFood() const; // looks for actors tagged "Forage" or "Food"?
};
