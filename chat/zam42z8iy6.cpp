// Fill out your copyright notice in the Description page of Project Settings.


#include "BunnyAIController.h"

#include "NavigationSystem.h"
#include "Kismet/GameplayStatics.h"
#include "Perception/AIPerceptionComponent.h"
#include "Perception/AISenseConfig_Sight.h"

ABunnyAIController::ABunnyAIController()
{
	PrimaryActorTick.bCanEverTick = true;

	// Perception setup
	UAIPerceptionComponent* Perception = CreateDefaultSubobject<UAIPerceptionComponent>(TEXT("Perception"));
	SetPerceptionComponent(*Perception);

	SightConfig = CreateDefaultSubobject<UAISenseConfig_Sight>(TEXT("SightConfig"));
	SightConfig->SightRadius = 1800.f;
	SightConfig->LoseSightRadius = 2200.f;
	SightConfig->PeripheralVisionAngleDegrees = 110.f;
	SightConfig->DetectionByAffiliation.bDetectEnemies = true;
	SightConfig->DetectionByAffiliation.bDetectFriendlies = true;
	SightConfig->DetectionByAffiliation.bDetectNeutrals = true;

	Perception->ConfigureSense(*SightConfig);
	Perception->SetDominantSense(SightConfig->GetSenseImplementation());
	Perception->OnTargetPerceptionUpdated.AddDynamic(this, &ABunnyAIController::OnPerceptionUpdated);
}

void ABunnyAIController::OnPossess(APawn* InPawn)
{
	Super::OnPossess(InPawn);
	Bunny = Cast<ABunnyCharacter>(InPawn);

	// BT
	if (BehaviorTreeAsset)
	{
		RunBehaviorTree(BehaviorTreeAsset);
		BB = GetBlackboardComponent();
	}

	SetRandomWanderTarget();
	GotoState(EBunnyBrainState::Idle, FMath::RandRange(IdleMin, IdleMax));
}

void ABunnyAIController::OnPerceptionUpdated(AActor* Actor, FAIStimulus Stimulus)
{
	// Treat everything with Predator tag as threat
	if (!Actor) return;
	if (Actor->ActorHasTag(TEXT("Predator")))
	{
		if (Stimulus.WasSuccessfullySensed())
		{
			LastThreat = Actor;
			ThreatLevel = 1.f; // spike
		}
	}
}

void ABunnyAIController::Tick(float dt)
{
	Super::Tick(dt);

	UpdateStateFromThreat(dt);
	DriveState(dt);
}

void ABunnyAIController::UpdateStateFromThreat(float dt)
{
	// Decay threat
	ThreatLevel = FMath::Clamp(ThreatLevel - dt * 0.25f, 0.f, 1.f);

	const bool bShouldFlee = (ThreatLevel > 0.4f) && LastThreat.IsValid();
	if (Bunny) Bunny->SetIsFleeing(bShouldFlee);

	SetFocalPoint(WanderTarget);
	if (Bunny) { Bunny->FaceTowards(WanderTarget, dt, 900.f); }

	// Ear controll
	if (Bunny)
	{
		if (bShouldFlee) Bunny->SetEarState(EEarState::NervousAggressive);
		else if (ThreatLevel > 0.2f) Bunny->SetEarState(EEarState::Alert);
		else
			switch (BrainState)
			{
			case EBunnyBrainState::Sleep: Bunny->SetEarState(EEarState::RelaxedSleepy);
				break;
			case EBunnyBrainState::Forage: Bunny->SetEarState(EEarState::Relaxed);
				break;
			case EBunnyBrainState::Explore: Bunny->SetEarState(EEarState::Curious);
				break;
			default: Bunny->SetEarState(EEarState::Relaxed);
				break;
			}
	}

	// Flee from threat
	if (bShouldFlee)
	{
		const FVector My = GetPawn()->GetActorLocation();
		const FVector ThreatLoc = LastThreat->GetActorLocation();
		FVector Away = (My - ThreatLoc).GetSafeNormal();
		WanderTarget = My + Away.RotateAngleAxis(FMath::RandRange(-25.f, 25.f), FVector::UpVector) * 900.f;

		// Enter flee
		if (BrainState != EBunnyBrainState::Flee)
			GotoState(EBunnyBrainState::Flee, FMath::FRandRange(1.2f, 2.0f));

		MoveSmartTo(WanderTarget, dt);
	}
}

void ABunnyAIController::DriveState(float dt)
{
	// Update threat
	if (BrainState == EBunnyBrainState::Flee)
	{
		StateTimeLeft -= dt;
		if (StateTimeLeft <= 0.f)
		{
			// after flee be alert
			GotoState(EBunnyBrainState::Alert, FMath::RandRange(AlertTimeMin, AlertTimeMax));
		}
		return;
	}

	StateTimeLeft -= dt;

	switch (BrainState)
	{
	case EBunnyBrainState::Idle:
		// Try being alart
		if (FMath::FRand() < ChanceRandomAlert * dt * 2.f)
		{
			GotoState(EBunnyBrainState::Alert, FMath::RandRange(AlertTimeMin, AlertTimeMax));
			return;
		}
	// Explore when curious
		if (StateTimeLeft <= 0.f)
		{
			GotoState(EBunnyBrainState::Explore, FMath::RandRange(ExploreMin, ExploreMax));
			SetRandomWanderTarget();
		}
		break;

	case EBunnyBrainState::Explore:
		// Wander around
		if (WanderCooldown <= 0.f || Reached(WanderTarget))
		{
			SetRandomWanderTarget();
			WanderCooldown = 2.2f;
		}
		else
		{
			WanderCooldown -= dt;
		}
		MoveSmartTo(WanderTarget, dt);

	// Stop to look around
		if (FMath::FRand() < ChanceRandomAlert * dt)
		{
			GotoState(EBunnyBrainState::Alert, FMath::RandRange(AlertTimeMin, AlertTimeMax));
			return;
		}

	// Look for food after looking around
		if (StateTimeLeft <= 0.f)
		{
			GotoState(EBunnyBrainState::Forage, FMath::RandRange(EatTimeMin, EatTimeMax));
			// Pick a nearby "food" spot if available, else eat in place
			if (AActor* Food = FindNearbyFood())
			{
				WanderTarget = Food->GetActorLocation();
			}
		}
		break;

	case EBunnyBrainState::Forage:
		// Move to food and "eat"
		if (!Reached(WanderTarget, 90.f))
		{
			MoveSmartTo(WanderTarget, dt);
		}

		if (StateTimeLeft <= 0.f)
		{
			// Zzz
			if (FMath::FRand() < ChanceSleepAfterEat)
			{
				GotoState(EBunnyBrainState::Sleep, FMath::RandRange(SleepTimeMin, SleepTimeMax));
			}
			else
			{
				GotoState(EBunnyBrainState::Idle, FMath::RandRange(IdleMin, IdleMax));
			}
		}
		break;

	case EBunnyBrainState::Sleep:
		// Sleep
		if (StateTimeLeft <= 0.f)
		{
			GotoState(EBunnyBrainState::Idle, FMath::RandRange(IdleMin, IdleMax));
		}
		break;

	case EBunnyBrainState::Alert:
		// Hold still and scan, then wander
		if (StateTimeLeft <= 0.f)
		{
			GotoState(EBunnyBrainState::Explore, FMath::RandRange(ExploreMin, ExploreMax));
			SetRandomWanderTarget();
		}
		break;

	default: break;
	}
}

void ABunnyAIController::GotoState(EBunnyBrainState NewState, float Duration)
{
	BrainState = NewState;
	if (Bunny) Bunny->SetIsFleeing(BrainState == EBunnyBrainState::Flee);

	switch (BrainState)
	{
	case EBunnyBrainState::Idle:
		// stand still; let hop cadence idle naturally
		break;
	case EBunnyBrainState::Explore:
		break;
	case EBunnyBrainState::Forage:
		// stop hopping once close
		break;
	case EBunnyBrainState::Sleep:
		// stop and lay down
		break;
	case EBunnyBrainState::Alert:
		// face a random spot
		if (APawn* P = GetPawn())
		{
			const FRotator NewRot(0, FMath::FRandRange(0, 360.f), 0);
			P->SetActorRotation(NewRot);
		}
		break;
	case EBunnyBrainState::Flee:
		break;
	}

	if (Duration < 0.f)
	{
		// fallback durations
		switch (BrainState)
		{
		case EBunnyBrainState::Idle: StateTimeLeft = 3.f;
			break;
		case EBunnyBrainState::Explore: StateTimeLeft = 5.f;
			break;
		case EBunnyBrainState::Forage: StateTimeLeft = 3.f;
			break;
		case EBunnyBrainState::Sleep: StateTimeLeft = 7.f;
			break;
		case EBunnyBrainState::Alert: StateTimeLeft = 1.6f;
			break;
		case EBunnyBrainState::Flee: StateTimeLeft = 1.6f;
			break;
		default: StateTimeLeft = 2.f;
			break;
		}
	}
	else
	{
		StateTimeLeft = Duration;
	}
}

bool ABunnyAIController::Reached(const FVector& P, float Tol) const
{
	const APawn* Me = GetPawn();
	return Me ? FVector::Dist2D(Me->GetActorLocation(), P) <= Tol : true;
}

void ABunnyAIController::SetRandomWanderTarget()
{
	if (!GetPawn()) return;
	const FVector Origin = GetPawn()->GetActorLocation();
	const float R = FMath::RandRange(500.f, 1100.f);
	const float Yaw = FMath::RandRange(0.f, 360.f);
	const FVector Dir = FRotator(0, Yaw, 0).Vector();
	WanderTarget = Origin + Dir * R;
}

void ABunnyAIController::MoveSmartTo(const FVector& Target, float dt)
{
	FNavLocation OnNav;
	const UNavigationSystemV1* Nav = UNavigationSystemV1::GetCurrent(GetWorld());
	const bool bHasNav = Nav && Nav->ProjectPointToNavigation(Target, OnNav);

	SetFocalPoint(Target);
	if (Bunny) { Bunny->FaceTowards(Target, dt, 720.f); }

	if (bHasNav)
	{
		// Regular pathing
		MoveToLocation(OnNav.Location, 50.f, true, true, true, false, 0);
	}
	else if (Bunny)
	{
		// Fallback off nav
		Bunny->SteeringFallbackTo(Target, dt);
	}
}

AActor* ABunnyAIController::FindNearbyFood() const
{
	if (!GetWorld() || !GetPawn()) return nullptr;

	TArray<AActor*> Candidates;
	UGameplayStatics::GetAllActorsWithTag(GetWorld(), TEXT("Forage"), Candidates);
	if (Candidates.Num() == 0)
	{
		UGameplayStatics::GetAllActorsWithTag(GetWorld(), TEXT("Food"), Candidates);
	}
	// pick nearest
	AActor* Best = nullptr;
	float BestD2 = TNumericLimits<float>::Max();
	const FVector My = GetPawn()->GetActorLocation();
	for (AActor* A : Candidates)
	{
		const float D2 = FVector::DistSquared2D(My, A->GetActorLocation());
		if (D2 < BestD2)
		{
			BestD2 = D2;
			Best = A;
		}
	}
	return Best;
}
