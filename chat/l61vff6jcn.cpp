// Fill out your copyright notice in the Description page of Project Settings.


#include "HoneyPuddleComponent.h"
#include "HoneyPuddle.h"

// Sets default values for this component's properties
UHoneyPuddleComponent::UHoneyPuddleComponent()
{
	PrimaryComponentTick.bCanEverTick = false;
	NumPuddles = 10;
	MinDistanceBetweenPuddles = 200.0f;
	MaxSpawnAttempts = 10;
}


// Called when the game starts
void UHoneyPuddleComponent::BeginPlay()
{
	Super::BeginPlay();
}

void UHoneyPuddleComponent::SpawnHoneyPuddles()
{
	ClearHoneyPuddles();

	if (HoneyPuddleClasses.Num() == 0)
	{
		UE_LOG(LogTemp, Warning,
		       TEXT("HoneyPuddleComponent: PuddleClasses array is empty. Add at least one subclass!"));
		return;
	}

	AActor* OwnerActor = GetOwner();
	if (!OwnerActor)
	{
		return;
	}

	UWorld* World = OwnerActor->GetWorld();
	if (!World)
	{
		return;
	}
	
	TArray<FVector> ChosenLocations;
	ChosenLocations.Reserve(NumPuddles);
	const float MinDistSq = MinDistanceBetweenPuddles * MinDistanceBetweenPuddles;
	
	for (int32 i = 0; i < NumPuddles; ++i)
	{
		bool bFoundValidLocation = false;
		FVector CandidateLocation = FVector::ZeroVector;

		for (int32 Attempt = 0; Attempt < MaxSpawnAttempts; ++Attempt)
		{
			CandidateLocation = AHoneyPuddle::GetRandomPointInActorBounds(OwnerActor);

			bool bTooClose = false;
			for (const FVector& ExistingLoc : ChosenLocations)
			{
				if (FVector::DistSquared(CandidateLocation, ExistingLoc) < MinDistSq)
				{
					bTooClose = true;
					break;
				}
			}

			if (!bTooClose)
			{
				bFoundValidLocation = true;
				break;
			}
		}

		if (!bFoundValidLocation)
		{
			UE_LOG(LogTemp, Warning, TEXT("Could not place puddle %d without overlap after %d attempts; skipping."), i,
			       MaxSpawnAttempts);
			continue;
		}

		const int32 RandomIndex = FMath::RandRange(0, HoneyPuddleClasses.Num() - 1);
		TSubclassOf<AHoneyPuddle> ChosenClass = HoneyPuddleClasses[RandomIndex];
		if (!ChosenClass)
		{
			continue;
		}

		FActorSpawnParameters SpawnParams;
		SpawnParams.Owner = OwnerActor;
		SpawnParams.SpawnCollisionHandlingOverride = ESpawnActorCollisionHandlingMethod::AlwaysSpawn;

		AHoneyPuddle* NewPuddle = World->SpawnActor<AHoneyPuddle>(
			ChosenClass,
			CandidateLocation,
			FRotator::ZeroRotator,
			SpawnParams
		);

		if (NewPuddle)
		{
			NewPuddle->AttachToActor(OwnerActor, FAttachmentTransformRules::KeepWorldTransform);

			SpawnedPuddles.Add(NewPuddle);
			ChosenLocations.Add(CandidateLocation);
		}
	}
}

void UHoneyPuddleComponent::ClearHoneyPuddles()
{
	for (AHoneyPuddle* Puddle : SpawnedPuddles)
	{
		if (Puddle && !Puddle->IsPendingKillPending())
		{
			Puddle->Destroy();
		}
	}
	SpawnedPuddles.Empty();
}
