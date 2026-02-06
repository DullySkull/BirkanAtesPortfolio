// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "Components/ActorComponent.h"
#include "HoneyPuddle.h"
#include "HoneyPuddleComponent.generated.h"

class AHoneyPuddle;

UCLASS( ClassGroup=(Custom), meta=(BlueprintSpawnableComponent) )
class GP3_TEAM03_API UHoneyPuddleComponent : public UActorComponent
{
	GENERATED_BODY()

public:	
	// Sets default values for this component's properties
	UHoneyPuddleComponent();

protected:
	// Called when the game starts
	virtual void BeginPlay() override;

public:
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "HoneyPuddle")
	int32 NumPuddles;
	
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "HoneyPuddle")
	TArray<TSubclassOf<AHoneyPuddle>> HoneyPuddleClasses;
	
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "HoneyPuddle")
	float MinDistanceBetweenPuddles;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "HoneyPuddle")
	int32 MaxSpawnAttempts;

	UFUNCTION(BlueprintCallable, Category = "HoneyPuddle")
	void SpawnHoneyPuddles();
	
	UFUNCTION(BlueprintCallable, Category = "HoneyPuddle")
	void ClearHoneyPuddles();
	
	UPROPERTY()
	TArray<AHoneyPuddle*> SpawnedPuddles;
};