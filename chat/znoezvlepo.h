// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "ZenStone.generated.h"

class USphereComponent;
class UStaticMeshComponent;
class AZenSnapPoint;
class AMyPlayerCharacter;

UCLASS()
class GP4TEAM1_API AZenStone : public AActor
{
	GENERATED_BODY()

public:
	AZenStone();

	UPROPERTY(BlueprintReadOnly, Category="Components")
	UStaticMeshComponent* Mesh;

	UPROPERTY(EditAnywhere, Category="StoneName")
	FName StoneTag;

	UPROPERTY(EditAnywhere, Category="Move")
	float DragMaxSpeed = 900.f;

	UPROPERTY(EditAnywhere, Category="Move")
	float DragAccel = 6000.f;

	UPROPERTY(EditAnywhere, Category="Move")
	float GroundTraceDown = 3000.f;

	UPROPERTY(EditAnywhere, Category="Move")
	float DesiredHoldDistance = 120.f;

	UPROPERTY(EditAnywhere, Category="Snap")
	float SnapProbeRadius = 160.f;

	UPROPERTY(EditAnywhere, Category="FX")
	float SnapTweenTime = 0.15f;

	UPROPERTY(EditAnywhere, Category="Snap")
	float SnapReleaseDistance = 180.f;

	void BeginGrab(AMyPlayerCharacter* ByPlayer);
	void EndGrab(bool bForceDrop = false);
	bool IsHeld() const { return bIsHeld; }

	UPROPERTY(VisibleAnywhere, Category="Components")
	USphereComponent* InteractRadius;

protected:
	virtual void BeginPlay() override;
	virtual void Tick(float DeltaSeconds) override;

private:
	UPROPERTY(VisibleAnywhere, Category="Components")
	USphereComponent* SnapProbe;

	AMyPlayerCharacter* Holder = nullptr;
	bool bIsHeld = false;
	FVector CurrentVel = FVector::ZeroVector;

	AZenSnapPoint* CandidateSocket = nullptr;
	AZenSnapPoint* OccupyingSocket = nullptr;

	bool ProjectTargetOnGround(FVector& OutTarget) const;
	void UpdateDragging(float dt);
	void FindBestSocketCandidate();
	void SnapToSocket(AZenSnapPoint* Socket);

	UFUNCTION()
	void OnInteractBegin(UPrimitiveComponent* OverlappedComp, AActor* OtherActor,
	                     UPrimitiveComponent* OtherComp, int32 OtherBodyIndex, bool bFromSweep,
	                     const FHitResult& Sweep);

	UFUNCTION()
	void OnInteractEnd(UPrimitiveComponent* OverlappedComp, AActor* OtherActor,
	                   UPrimitiveComponent* OtherComp, int32 OtherBodyIndex);

	UFUNCTION()
	void OnProbeBegin(UPrimitiveComponent* OverlappedComp, AActor* OtherActor,
	                  UPrimitiveComponent* OtherComp, int32 OtherBodyIndex, bool bFromSweep, const FHitResult& Sweep);

	UFUNCTION()
	void OnProbeEnd(UPrimitiveComponent* OverlappedComp, AActor* OtherActor,
	                UPrimitiveComponent* OtherComp, int32 OtherBodyIndex);
};
