// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "HoneyPuddle.generated.h"

class UBoxComponent;
class UStaticMeshComponent;
class ACharacter;

UCLASS()
class GP3_TEAM03_API AHoneyPuddle : public AActor
{
	GENERATED_BODY()
	
public:	
	// Sets default values for this actor's properties
	AHoneyPuddle();

protected:
	// Called when the game starts or when spawned
	virtual void BeginPlay() override;
	virtual void EndPlay(const EEndPlayReason::Type EndPlayReason) override;
	
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Components")
	UBoxComponent* OverlapComponent;
	
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Components")
	UStaticMeshComponent* MeshComponent;
	
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "HoneyPuddle")
	float SlowSpeedMultiplier;
	
	UPROPERTY()
	TMap<ACharacter*, float> OverlappingCharacters;

	UFUNCTION()
	void OnOverlapBegin(
		UPrimitiveComponent* OverlappedComp,
		AActor* OtherActor,
		UPrimitiveComponent* OtherComp,
		int32 OtherBodyIndex,
		bool bFromSweep,
		const FHitResult& SweepResult
	);

	UFUNCTION()
	void OnOverlapEnd(
		UPrimitiveComponent* OverlappedComp,
		AActor* OtherActor,
		UPrimitiveComponent* OtherComp,
		int32 OtherBodyIndex
	);

public:
	UFUNCTION(BlueprintCallable, Category = "HoneyPuddle")
	static FVector GetRandomPointInActorBounds(AActor* TargetActor);

	UFUNCTION(BlueprintCallable, Category = "HoneyPuddle")
	void ClearHoneyPuddle();
	
	UFUNCTION(BlueprintCallable, Category = "Honey")
    static void ApplySlowToCharacter(ACharacter* Character, float SlowMultiplier);
    
    UFUNCTION(BlueprintCallable, Category = "Honey")
    static void RemoveSlowFromCharacter(ACharacter* Character);
};