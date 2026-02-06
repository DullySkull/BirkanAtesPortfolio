// Fill out your copyright notice in the Description page of Project Settings.


#include "ZenGardenPuzzle.h"

#include "Collectable.h"
#include "LevelManager.h"
#include "ZenStone.h"
#include "ZenSnapPoint.h"
#include "DrawDebugHelpers.h"
#include "Kismet/GameplayStatics.h"

AZenGardenPuzzle::AZenGardenPuzzle()
{
	PrimaryActorTick.bCanEverTick = false;
}

void AZenGardenPuzzle::BeginPlay()
{
	Super::BeginPlay();
	GatherPartsIfNeeded();
	EnsureSocketRules();

	if (AActor* Target = CollectableToReveal.Get())
	{
		const bool bSolvedNow = IsPuzzleComplete();
		Target->SetActorHiddenInGame(!bSolvedNow);
		Target->SetActorEnableCollision(bSolvedNow);
		Target->SetActorTickEnabled(bSolvedNow);
	}

	if (IsPuzzleComplete())
	{
		MarkCompleteAndNotify();
	}
}

void AZenGardenPuzzle::GatherPartsIfNeeded()
{
	if (!bAutoRegisterInRadius) return;

	const FVector C = GetActorLocation();
	const float R2 = AutoRegisterRadius * AutoRegisterRadius;

	TArray<AActor*> FoundStones;
	TArray<AActor*> FoundSockets;

	UGameplayStatics::GetAllActorsOfClass(this, AZenStone::StaticClass(), FoundStones);
	UGameplayStatics::GetAllActorsOfClass(this, AZenSnapPoint::StaticClass(), FoundSockets);

	Stones.Empty();
	Stones.Reserve(FoundStones.Num());
	for (AActor* A : FoundStones)
	{
		if (A && FVector::DistSquared(C, A->GetActorLocation()) <= R2)
		{
			if (AZenStone* S = Cast<AZenStone>(A))
			{
				Stones.Add(TWeakObjectPtr<AZenStone>(S));
			}
		}
	}

	SnapPoints.Empty();
	SnapPoints.Reserve(FoundSockets.Num());
	for (AActor* A : FoundSockets)
	{
		if (A && FVector::DistSquared(C, A->GetActorLocation()) <= R2)
		{
			if (AZenSnapPoint* SP = Cast<AZenSnapPoint>(A))
			{
				SnapPoints.Add(TWeakObjectPtr<AZenSnapPoint>(SP));
			}
		}
	}
}

void AZenGardenPuzzle::EnsureSocketRules()
{
	for (auto Sock : SnapPoints)
	{
		if (!Sock.IsValid()) continue;
		Sock->SetOwnerPuzzle(this);
	}

	if (bDebugZenPuzzle) DumpState(TEXT("After EnsureSocketRules"));
}

bool AZenGardenPuzzle::IsPuzzleComplete() const
{
	for (auto Sock : SnapPoints)
	{
		if (!Sock.IsValid() || !Sock->IsOccupied())
			return false;
	}

	if (bDebugZenPuzzle) DrawSocketDebug(1.5f);

	return true;
}

void AZenGardenPuzzle::DumpState(const TCHAR* Reason) const
{
	if (!bDebugZenPuzzle) return;
	int32 Total = 0, Filled = 0;
	UE_LOG(LogTemp, Log, TEXT("[ZenPuzzle %s] --- %s ---"), *GetName(), Reason);
	for (auto Sock : SnapPoints)
	{
		if (!Sock.IsValid()) continue;
		++Total;
		const bool bOcc = Sock->IsOccupied();
		Filled += bOcc ? 1 : 0;
		UE_LOG(LogTemp, Log, TEXT("  Socket: %s  Occupied=%s"),
		       *Sock->GetName(), bOcc ? TEXT("Yes") : TEXT("No"));
	}
	UE_LOG(LogTemp, Log, TEXT("[ZenPuzzle %s] Filled %d / %d"), *GetName(), Filled, Total);
	if (GEngine)
	{
		GEngine->AddOnScreenDebugMessage(
			-1, 2.0f, FColor::Cyan,
			FString::Printf(TEXT("ZenPuzzle %s: %d/%d filled"),
			                *GetName(), Filled, Total));
	}
}

void AZenGardenPuzzle::DrawSocketDebug(float Duration) const
{
	if (!bDebugZenPuzzle) return;
	for (auto Sock : SnapPoints)
	{
		if (!Sock.IsValid()) continue;
		const FVector P = Sock->GetActorLocation();
		const FColor Col = Sock->IsOccupied() ? FColor::Green : FColor::Red;
		DrawDebugSphere(GetWorld(), P, 35.f, 12, Col, false, Duration, 0, 2.f);
	}
}

void AZenGardenPuzzle::NotifyOccupancyChanged()
{
	if (bDebugZenPuzzle) DumpState(TEXT("NotifyOccupancyChanged"));

	if (!bPuzzleCompleted && IsPuzzleComplete())
	{
		if (bDebugZenPuzzle) UE_LOG(LogTemp, Warning, TEXT("[ZenPuzzle %s] COMPLETE -> MarkCompleteAndNotify"),
		                            *GetName());
		MarkCompleteAndNotify();
	}
}

void AZenGardenPuzzle::MarkCompleteAndNotify()
{
	bPuzzleCompleted = true;
	bIsSolved = true;
	OnSequenceComplete();
	OnPuzzleSolved.Broadcast(); // Broadcast puzzle solved

	// TODO: Fucking level manager
	//if (AActor* Target = CollectableToReveal.Get())
	//{
	//	if (ACollectable* Col = Cast<ACollectable>(Target))
	//	{
	//		Col->Reveal();
	//	}
	//	else
	//	{
	//		Target->SetActorHiddenInGame(false);
	//		Target->SetActorEnableCollision(true);
	//		Target->SetActorTickEnabled(true);
	//	}
	//}

	// Notify Level Manager
	TArray<AActor*> Managers;
	UGameplayStatics::GetAllActorsOfClass(GetWorld(), ALevelManager::StaticClass(), Managers);
	for (AActor* A : Managers)
	{
		if (ALevelManager* LM = Cast<ALevelManager>(A))
		{
			LM->OnPuzzleSolved(this);
		}
	}

	if (bDebugZenPuzzle)
	{
		DumpState(TEXT("Solved"));
		UE_LOG(LogTemp, Warning, TEXT("[ZenPuzzle %s] *** SOLVED ***"), *GetName());
		if (GEngine)
			GEngine->AddOnScreenDebugMessage(-1, 3.f, FColor::Green,
			                                 FString::Printf(TEXT("ZenPuzzle %s SOLVED!"), *GetName()));
	}
}
