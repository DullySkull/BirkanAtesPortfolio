// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "ZenSnapPoint.generated.h"

class USphereComponent;
class UBillboardComponent;
class AZenStone;
class AZenGardenPuzzle;

UCLASS()
class GP4TEAM1_API AZenSnapPoint : public AActor
{
	GENERATED_BODY()

public:
	AZenSnapPoint();

	UPROPERTY(EditAnywhere, Category="Snap")
	FName AllowedTag;

	UPROPERTY(EditAnywhere, Category="Snap")
	bool bUseTagMatching = true;

	UPROPERTY(EditAnywhere, Category="Snap")
	float YawToleranceDeg = 10.f;

	bool CanAcceptStone(const AZenStone* Stone) const;
	bool IsOccupied() const { return Occupant.IsValid(); }

	void Occupy(AZenStone* Stone);
	void Vacate(AZenStone* Stone);
	
	void SetOwnerPuzzle(class AZenGardenPuzzle* InOwner);

	FVector GetAnchorLocation() const;
	FRotator GetAnchorRotation() const;

protected:
	virtual void BeginPlay() override;

private:
	UPROPERTY(VisibleAnywhere)
	USceneComponent* Root;

	TWeakObjectPtr<class AZenGardenPuzzle> OwnerPuzzle;

	UPROPERTY(VisibleAnywhere)
	UBillboardComponent* Visual;

	UPROPERTY(VisibleAnywhere)
	USphereComponent* CaptureZone;

	TWeakObjectPtr<AZenStone> Occupant;
	void NotifyPuzzle();
};
