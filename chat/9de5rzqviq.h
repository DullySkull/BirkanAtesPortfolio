// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "MusicPuzzle.h"
#include "ZenGardenPuzzle.generated.h"

class AZenStone;
class AZenSnapPoint;

UCLASS()
class GP4TEAM1_API AZenGardenPuzzle : public AMusicPuzzle
{
	GENERATED_BODY()

public:
	AZenGardenPuzzle();

	UPROPERTY(EditAnywhere, Category="Setup")
	bool bAutoRegisterInRadius = true;

	UPROPERTY(EditAnywhere, Category="Setup", meta=(EditCondition="bAutoRegisterInRadius"))
	float AutoRegisterRadius = 4000.f;

	UPROPERTY(EditAnywhere, Category="Setup", meta=(EditCondition="!bAutoRegisterInRadius"))
	TArray<TWeakObjectPtr<AZenStone>> Stones;

	UPROPERTY(EditAnywhere, Category="Setup", meta=(EditCondition="!bAutoRegisterInRadius"))
	TArray<TWeakObjectPtr<AZenSnapPoint>> SnapPoints;

	UPROPERTY(EditAnywhere, Category="Rules")
	bool bRequireAllSockets = true;

	UPROPERTY(EditAnywhere, Category="Rules")
	bool bUseTagsForMatching = true;

	UPROPERTY(EditAnywhere, Category="Rules", meta=(ClampMin="0.0", ClampMax="45.0"))
	float YawToleranceDeg = 12.0f;

	UPROPERTY(EditInstanceOnly, Category="Puzzle")
	TWeakObjectPtr<AActor> CollectableToReveal;

	// Debug
	UPROPERTY(EditAnywhere, Category="Debug")
	bool bDebugZenPuzzle = true;
	void DumpState(const TCHAR* Reason) const;
	void DrawSocketDebug(float Duration = 2.f) const;

	void NotifyOccupancyChanged();

protected:
	virtual void BeginPlay() override;

private:
	bool bPuzzleCompleted = false;

	void GatherPartsIfNeeded();
	void EnsureSocketRules();
	bool IsPuzzleComplete() const;
	void MarkCompleteAndNotify();
};
