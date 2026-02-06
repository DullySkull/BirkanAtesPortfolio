// Fill out your copyright notice in the Description page of Project Settings.

#include "DoeAIController.h"
#include "NavigationSystem.h"
#include "GameFramework/Character.h"
#include "GameFramework/CharacterMovementComponent.h"
#include "Kismet/GameplayStatics.h"
#include "Perception/AIPerceptionComponent.h"

// Added for herd neighbor query and optional debug lines (small, isolated include)
#include "Kismet/KismetSystemLibrary.h"
#include "DrawDebugHelpers.h"

ADoeAIController::ADoeAIController()
{
	PrimaryActorTick.bCanEverTick = false;

	// Build perception
	PerceptionComp = CreateDefaultSubobject<UAIPerceptionComponent>(TEXT("DoePerception"));
	SightConfig = CreateDefaultSubobject<UAISenseConfig_Sight>(TEXT("DoeSight"));

	if (SightConfig)
	{
		SightConfig->SightRadius = 1200.f;
		SightConfig->LoseSightRadius = 1500.f;
		SightConfig->PeripheralVisionAngleDegrees = 110.f;
		SightConfig->SetMaxAge(3.f);
		SightConfig->DetectionByAffiliation.bDetectEnemies = true;
		SightConfig->DetectionByAffiliation.bDetectFriendlies = true;
		SightConfig->DetectionByAffiliation.bDetectNeutrals = true;
	}
	if (PerceptionComp && SightConfig)
	{
		PerceptionComp->ConfigureSense(*SightConfig);
		PerceptionComp->SetDominantSense(SightConfig->GetSenseImplementation());
		SetPerceptionComponent(*PerceptionComp);
	}
}

void ADoeAIController::OnPossess(APawn* InPawn)
{
	Super::OnPossess(InPawn);
	ControlledPawn = InPawn;
	if (!ControlledPawn) return;

	if (ACharacter* Char = Cast<ACharacter>(ControlledPawn))
	{
		if (WalkSpeed > 0.f && Char->GetCharacterMovement())
		{
			Char->GetCharacterMovement()->MaxWalkSpeed = WalkSpeed;
			Char->GetCharacterMovement()->SetMovementMode(EMovementMode::MOVE_Walking);
			Char->GetCharacterMovement()->GravityScale = 1.0f;
			Char->GetCharacterMovement()->bUseControllerDesiredRotation = false;
			Char->GetCharacterMovement()->bOrientRotationToMovement = true;
			Char->GetCharacterMovement()->RotationRate = FRotator(0.f, 540.f, 0.f);
			Char->bUseControllerRotationYaw = false;
		}
		Char->bUseControllerRotationYaw = false;
		if (auto* Move = Char->GetCharacterMovement())
		{
			Move->bOrientRotationToMovement = true;
			Move->bUseControllerDesiredRotation = false;
			Move->RotationRate = FRotator(0.f, 540.f, 0.f);
		}
	}

	// Bind perception
	if (bEnableFlee && PerceptionComp)
	{
		PerceptionComp->OnTargetPerceptionUpdated.RemoveAll(this);
		PerceptionComp->OnTargetPerceptionUpdated.AddDynamic(this, &ADoeAIController::OnTargetPerceptionUpdated);
	}

	// Start roaming
	StartIdleDelay(FMath::FRandRange(IdleDelayRange.X, IdleDelayRange.Y));

	// Proximity backup (no tags; uses LOS)
	if (bEnableFlee)
	{
		FTimerHandle Tmp;
		GetWorld()->GetTimerManager().SetTimer(Tmp, [this]()
		{
			if (!ControlledPawn) return;
			if (AActor* Player = GetPlayerActor())
			{
				const float Dist = FVector::Dist2D(Player->GetActorLocation(), ControlledPawn->GetActorLocation());
				// Use controller LOS so we don't flee through walls
				if (Dist <= ProximityFleeDistance && LineOfSightTo(Player))
				{
					BeginFleeFrom(Player->GetActorLocation());
				}
			}
		}, 0.5f, false);
	}
}

void ADoeAIController::OnUnPossess()
{
	GetWorld()->GetTimerManager().ClearTimer(IdleTimerHandle);
	GetWorld()->GetTimerManager().ClearTimer(CalmDownHandle);
	ControlledPawn = nullptr;
	Super::OnUnPossess();
}

void ADoeAIController::OnMoveCompleted(FAIRequestID RequestID, const FPathFollowingResult& Result)
{
	Super::OnMoveCompleted(RequestID, Result);
	ClearFacing();

	if (!ControlledPawn) return;

	if (!bIsFleeing)
	{
		StartIdleDelay(FMath::FRandRange(IdleDelayRange.X, IdleDelayRange.Y));
	}
	else
	{
		if (CalmDownTime > 0.f)
			GetWorld()->GetTimerManager().SetTimer(CalmDownHandle, this, &ADoeAIController::EndFlee, CalmDownTime,
			                                       false);
		else
			EndFlee();
	}
}

void ADoeAIController::StartIdleDelay(float Seconds)
{
	if (!ensure(GetWorld())) return;
	GetWorld()->GetTimerManager().ClearTimer(IdleTimerHandle);
	GetWorld()->GetTimerManager().SetTimer(
		IdleTimerHandle, this, &ADoeAIController::MoveToRandomPosition,
		FMath::Max(0.01f, Seconds), false
	);
}

void ADoeAIController::MoveToRandomPosition()
{
	if (!ControlledPawn) return;

	const FVector Origin = ControlledPawn->GetActorLocation();

	// Base random reachable point
	FVector BaseDest;
	const bool bHasBase = FindRandomReachablePosition(Origin, WanderRadius, BaseDest);

	// Herd bias
	FVector Coh, Align, Sep;
	const FVector HerdDir = ComputeHerdBiasDirection(Coh, Align, Sep); // returns a (possibly zero) direction

	FVector FinalDir = FVector::ZeroVector;
	if (bHasBase)
	{
		FinalDir += (BaseDest - Origin).GetSafeNormal2D();
	}
	if (!HerdDir.IsNearlyZero() && HerdBiasStrength > 0.f)
	{
		FinalDir += HerdDir.GetSafeNormal2D() * (HerdBiasStrength / FMath::Max(WanderRadius, 1.f));
	}

	FVector Dest = BaseDest;

	// Revalidate on NavMesh
	if (!FinalDir.IsNearlyZero())
	{
		const FVector Preferred = Origin + FinalDir.GetSafeNormal2D() * WanderRadius;
		if (!FindRandomReachablePosition(Preferred, 400.f, Dest))
		{
			// fall back to base random or another nearby random around self
			if (!bHasBase && !FindRandomReachablePosition(Origin, WanderRadius, Dest))
			{
				StartIdleDelay(1.0f);
				return;
			}
		}
	}
	else
	{
		// No herd, no base… try again shortly
		if (!bHasBase)
		{
			StartIdleDelay(1.0f);
			return;
		}
		Dest = BaseDest;
	}

	FaceTowards(Dest);
	MoveToLocation(Dest, AcceptanceRadius, true, true,
	               true, false, nullptr, true);
}

bool ADoeAIController::FindRandomReachablePosition(const FVector& Origin, float Radius, FVector& OutPoint) const
{
	if (const UNavigationSystemV1* NavSys = FNavigationSystem::GetCurrent<UNavigationSystemV1>(GetWorld()))
	{
		FNavLocation Res;
		if (NavSys->GetRandomReachablePointInRadius(Origin, Radius, Res))
		{
			OutPoint = Res.Location;
			return true;
		}
	}
	return false;
}

void ADoeAIController::OnTargetPerceptionUpdated(AActor* Actor, FAIStimulus Stimulus)
{
	if (!bEnableFlee || !ControlledPawn || !Actor) return;

	// React if the sensed actor is the player
	if (!Stimulus.WasSuccessfullySensed()) return;
	if (!IsPlayerActor(Actor)) return;

	BeginFleeFrom(Actor->GetActorLocation());
}

void ADoeAIController::BeginFleeFrom(const FVector& ThreatLocation)
{
	if (!ControlledPawn) return;
	bIsFleeing = true;

	// Boost speed
	if (ACharacter* Char = Cast<ACharacter>(ControlledPawn))
	{
		if (FleeSpeed > 0.f)
			if (auto* Move = Char->GetCharacterMovement())
				Move->MaxWalkSpeed = FleeSpeed;

		// Face velocity during the run
		Char->bUseControllerRotationYaw = false;
		if (auto* Move = Char->GetCharacterMovement())
		{
			Move->bOrientRotationToMovement = true;
			Move->bUseControllerDesiredRotation = false;
		}
	}

	// Pick an away destination
	const FVector SelfLoc = ControlledPawn->GetActorLocation();
	const FVector AwayDir = (SelfLoc - ThreatLocation).GetSafeNormal2D();
	const FVector Desired = SelfLoc + AwayDir * FleeDistance;

	FVector Dest;
	if (!FindRandomReachablePosition(Desired, 400.f, Dest))
	{
		if (!FindRandomReachablePosition(SelfLoc, FleeDistance, Dest))
			return; // no path found
	}

	// Alert neighbors so they run too
	BroadcastPanic(ThreatLocation);

	FaceTowards(Dest);
	MoveToLocation(Dest, AcceptanceRadius, true, true, true, false, nullptr, true);
}

void ADoeAIController::EndFlee()
{
	if (!ControlledPawn) return;
	bIsFleeing = false;

	if (ACharacter* Char = Cast<ACharacter>(ControlledPawn))
	{
		if (WalkSpeed > 0.f)
			if (auto* Move = Char->GetCharacterMovement())
				Move->MaxWalkSpeed = WalkSpeed;

		Char->bUseControllerRotationYaw = false;
		if (auto* Move = Char->GetCharacterMovement())
		{
			Move->bOrientRotationToMovement = true;
			Move->bUseControllerDesiredRotation = false;
		}
	}

	StartIdleDelay(FMath::FRandRange(IdleDelayRange.X, IdleDelayRange.Y));
}

void ADoeAIController::FaceTowards(const FVector& WorldPoint)
{
	SetFocalPoint(WorldPoint);
}

void ADoeAIController::ClearFacing()
{
	ClearFocus(EAIFocusPriority::Default);
}

AActor* ADoeAIController::GetPlayerActor() const
{
	if (!GetWorld()) return nullptr;
	APawn* PlayerPawn = UGameplayStatics::GetPlayerPawn(GetWorld(), 0);
	return PlayerPawn;
}

bool ADoeAIController::IsPlayerActor(const AActor* A) const
{
	const AActor* Player = GetPlayerActor();
	return (A && Player && A == Player);
}

void ADoeAIController::GetNearbyDoes(TArray<APawn*>& OutNeighbors) const
{
	OutNeighbors.Reset();
	if (!ControlledPawn || !GetWorld()) return;

	TArray<AActor*> Hits;
	TArray<TEnumAsByte<EObjectTypeQuery>> ObjTypes;
	ObjTypes.Add(UEngineTypes::ConvertToObjectType(ECollisionChannel::ECC_Pawn));

	UKismetSystemLibrary::SphereOverlapActors(GetWorld(), ControlledPawn->GetActorLocation(), HerdRadius, ObjTypes,
	                                          APawn::StaticClass(), {ControlledPawn}, Hits
	);

	for (AActor* A : Hits)
	{
		APawn* P = Cast<APawn>(A);
		if (!P) continue;

		// Only include other does (anything currently possessed by a DoeAIController)
		if (P->GetController() && P->GetController()->IsA(StaticClass()))
		{
			OutNeighbors.Add(P);
		}
	}
}

FVector ADoeAIController::ComputeHerdBiasDirection(FVector& OutDebugCohesion, FVector& OutDebugAlign,
                                                   FVector& OutDebugSeparate) const
{
	OutDebugCohesion = FVector::ZeroVector;
	OutDebugAlign = FVector::ZeroVector;
	OutDebugSeparate = FVector::ZeroVector;

	if (!ControlledPawn) return FVector::ZeroVector;

	TArray<APawn*> Neighbors;
	GetNearbyDoes(Neighbors);
	if (Neighbors.Num() == 0) return FVector::ZeroVector;

	const FVector SelfLoc = ControlledPawn->GetActorLocation();

	// Cohesion toward a nearby does
	FVector Center = FVector::ZeroVector;

	// Alignment of neighbors move direction
	FVector AvgDir = FVector::ZeroVector;

	// Separate away from too close neighbors
	FVector Sep = FVector::ZeroVector;

	for (APawn* N : Neighbors)
	{
		const FVector NLoc = N->GetActorLocation();
		Center += NLoc;

		// Approximate neighbors travel direction
		FVector Dir = FVector::ZeroVector;
		if (const AAIController* NC = Cast<AAIController>(N->GetController()))
		{
			const FVector Focus = NC->GetFocalPoint();
			if (!Focus.IsNearlyZero())
			{
				Dir = (Focus - NLoc).GetSafeNormal2D();
			}
		}
		if (Dir.IsNearlyZero())
		{
			Dir = N->GetVelocity().GetSafeNormal2D();
		}
		AvgDir += Dir;

		// Separation
		const FVector ToSelf = SelfLoc - NLoc;
		const float Dist = FMath::Max(ToSelf.Size2D(), 1.f);
		if (Dist < SeparationRadius)
		{
			Sep += ToSelf / Dist;
		}
	}

	Center /= Neighbors.Num();
	AvgDir = AvgDir.IsNearlyZero() ? FVector::ZeroVector : AvgDir.GetSafeNormal2D();

	const FVector Coh = (Center - SelfLoc).GetSafeNormal2D();
	const FVector Align = AvgDir;
	const FVector Separate = Sep.GetSafeNormal2D();

	OutDebugCohesion = Coh;
	OutDebugAlign = Align;
	OutDebugSeparate = Separate;

	// Blend weights
	FVector HerdDir = Coh * CohesionWeight + Align * AlignmentWeight + Separate * SeparationWeight;
	return HerdDir;
}

void ADoeAIController::BroadcastPanic(const FVector& ThreatLocation)
{
	TArray<APawn*> Neighbors;
	GetNearbyDoes(Neighbors);
	for (APawn* N : Neighbors)
	{
		if (ADoeAIController* NC = Cast<ADoeAIController>(N->GetController()))
		{
			NC->ReceivePanic(ThreatLocation);
		}
	}
}

void ADoeAIController::ReceivePanic(const FVector& ThreatLocation)
{
	if (bIsFleeing) return; // already running
	BeginFleeFrom(ThreatLocation);
}
