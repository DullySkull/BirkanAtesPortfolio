// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "Components/BoxComponent.h"
#include "GameFramework/Actor.h"
#include "WaterFlockVolume.generated.h"

UCLASS(BlueprintType)
class GP4TEAM1_API AWaterFlockVolume : public AActor
{
	GENERATED_BODY()

public:
	AWaterFlockVolume();

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category="Water")
	UBoxComponent* Bounds;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category="Water")
	bool bUseFixedSurfaceZ = true;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category="Water", meta=(EditCondition="bUseFixedSurfaceZ"))
	float SurfaceZ = 100.f;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category="Water")
	float MinDepth = 80.f;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category="Water")
	float MaxDepth = 600.f;

	UFUNCTION(BlueprintCallable, Category="Water")
	bool GetRandomPointInVolume(FVector& OutPoint) const;

	UFUNCTION(BlueprintCallable, Category="Water")
	bool ConstrainInside(FVector& InOutPoint) const;

	UFUNCTION(BlueprintCallable, Category="Water")
	float GetSurfaceZ() const;
};
