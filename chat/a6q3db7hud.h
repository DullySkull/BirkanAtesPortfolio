// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "Engine/DataAsset.h"
#include "FishBoidSettings.generated.h"

/**
 * 
 */
UCLASS(BlueprintType)
class GP4TEAM1_API UFishBoidSettings : public UDataAsset
{
	GENERATED_BODY()

public:
	// Boids weights
	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category="Boids")
	float CohesionWeight = 0.8f;

	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category="Boids")
	float AlignmentWeight = 0.6f;

	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category="Boids")
	float SeparationWeight = 1.2f;

	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category="Boids")
	float SeparationRadius = 120.f;

	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category="Boids")
	float NeighborRadius = 350.f;

	// Kinematics
	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category="Kinematics")
	float MaxSpeed = 280.f;

	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category="Kinematics")
	float MaxAccel = 900.f;

	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category="Kinematics")
	float WanderJitter = 0.8f;

	// LOD distances
	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category="LOD")
	float LOD0_Distance = 3000.f;

	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category="LOD")
	float LOD1_Distance = 8000.f;

	// Feeding behavior
	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category="Feeding")
	int32 MaxFeedingFishNearPlayer = 20;

	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category="Feeding")
	float FeedingHoverDepth = 18.f; // below surface

	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category="Feeding")
	float FeedingGraceSeconds = 0.5f;

	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category="Feeding")
	float FleeSpeedMultiplier = 1.6f;

	// Budget
	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category="Perf")
	int32 MaxAgentsUpdatedPerFrame = 800;
};
