// Fill out your copyright notice in the Description page of Project Settings.


#include "FoxAIController.h"
#include "NavigationSystem.h"
#include "GameFramework/Character.h"
#include "GameFramework/CharacterMovementComponent.h"
#include "Animation/AnimInstance.h"
#include "UABP_Fox.h"
#include "Kismet/GameplayStatics.h"

AFoxAIController::AFoxAIController()
{
	bAttachToPawn = true;
}

void AFoxAIController::BeginPlay()
{
	Super::BeginPlay();

	// Start ticking the lead behavior
	GetWorldTimerManager().SetTimer(LeadTimer, this, &AFoxAIController::TickLead, UpdateInterval, true, 0.2f);
	// Start ticking the wander behavior
	GetWorldTimerManager().SetTimer(WanderTimer, this, &AFoxAIController::PickNewWanderTarget, WanderRefreshInterval,
		true, 0.1f);
	// Start ticking the playful behavior
	GetWorldTimerManager().SetTimer(StillCheckTimer, this, &AFoxAIController::TickCheckPlayerStill, StillCheckInterval,
		true, 0.2f);
	GetWorldTimerManager().SetTimer(StuckCheckTimer, this, &AFoxAIController::CheckIfStuckOrTooFar, StuckCheckInterval, true, 1.0f);

	if (APawn* Fox = GetPawn())
	{
		if (USkeletalMeshComponent* Mesh = Fox->FindComponentByClass<USkeletalMeshComponent>())
		{
			int32 NumMaterials = Mesh->GetNumMaterials();
			for (int32 i = 0; i < NumMaterials; i++)
			{
				OriginalFoxMaterials.Add(Mesh->GetMaterial(i));
			}
		}
		LastStuckCheckPosition = Fox->GetActorLocation();
	}
}

void AFoxAIController::UpdateAnimBP()
{
	APawn* Fox = GetPawn();
	if (!Fox) return;

	USkeletalMeshComponent* Skel = Fox->FindComponentByClass<USkeletalMeshComponent>();
	if (!Skel) return;


	if (UUABP_Fox* AnimInst = Cast<UUABP_Fox>(Skel->GetAnimInstance()))
	{
		if (bIsResting)
		{
			AnimInst->bIsResting = true;
		}
		AnimInst->bIsResting = bIsResting;
		AnimInst->bIsPlayful = bIsPlayful;
		AnimInst->Speed = Fox->GetVelocity().Size2D();
		//UE_LOG(LogTemp, Warning, TEXT("AnimBP bIsResting = %s"), AnimInst->bIsResting ? TEXT("true") : TEXT("false"));
	}
	else
	{
		UE_LOG(LogTemp, Warning, TEXT("UpdateAnimBP: Cast failed"));
	}
}

void AFoxAIController::TickLead()
{
	APawn* MyPawn = GetPawn();
	if (!MyPawn) return;

	if (bIsTeleporting)
	{
		TickTeleportDissolve();
		UpdateAnimBP();
		return;
	}

	if (bMovingToRest)
	{
		float DistToTarget = FVector::Dist(MyPawn->GetActorLocation(), RestTargetLocation);
		if (DistToTarget > 100.f)
		{
			MoveToLocation(RestTargetLocation, 10.f, true);
		}
		else
		{
			ArriveAtRestTarget();
		}

		UpdateAnimBP();
		return;
	}
	if (bIsResting)
	{
		// Keep fox frozen and animation updated
		APawn* Fox = GetPawn();
		if (Fox)
		{
			if (UCharacterMovementComponent* MoveComp = Fox->FindComponentByClass<UCharacterMovementComponent>())
			{
				if (MoveComp->MovementMode != MOVE_None)
				{
					MoveComp->StopMovementImmediately();
					MoveComp->SetMovementMode(MOVE_None);
				}
			}

			UpdateAnimBP(); // update animation every tick while resting
		}

		return; // skip all other movement logic
	}

	// Smooth the wander
	CurrentWander = FMath::Vector2DInterpTo(CurrentWander, TargetWander, UpdateInterval, WanderLerpSpeed);

	FVector Dest;
	if (!ComputeLeadPoint(Dest)) return;

	MoveToLocation(Dest, AcceptableRadius, true);

	UpdateAnimBP();
}

void AFoxAIController::TickCheckPlayerStill()
{
	UWorld* World = GetWorld();
	if (!World) return;

	ACharacter* Player = UGameplayStatics::GetPlayerCharacter(World, 0);
	if (!Player) return;

	const float Speed2D = Player->GetVelocity().Size2D();
	const bool bStanding = Speed2D < PlayerStillSpeedThreshold;

	if (bStanding)
	{
		if (!GetWorldTimerManager().IsTimerActive(StillCycleTimer))
		{
			GetWorldTimerManager().SetTimer(
				StillCycleTimer, this, &AFoxAIController::OnStillCycle,
				StillCyclePeriod, /*bLoop=*/true, /*FirstDelay=*/StillCyclePeriod);
		}
	}
	else
	{
		// Stop cycle and return to wander if currently playful
		if (GetWorldTimerManager().IsTimerActive(StillCycleTimer))
		{
			GetWorldTimerManager().ClearTimer(StillCycleTimer);
		}
		// If we want an immediate stop
		if (bIsPlayful) { EndPlayful(); }
		if (bIsResting) { WakeUpFromRest(); }
	}
	if (!bStanding)
	{
		if (GetWorldTimerManager().IsTimerActive(StillCycleTimer))
		{
			GetWorldTimerManager().ClearTimer(StillCycleTimer);
		}
		if (bIsPlayful) { EndPlayful(); }

		// Stop resting immediately
		if (bIsResting || bMovingToRest)
		{
			bMovingToRest = false;
			WakeUpFromRest();
		}
	}
}

void AFoxAIController::PickNewWanderTarget()
{
	// Split into forward (X) and lateral (Y) relative to toward waypoint
	const float Angle = FMath::FRandRange(0.f, 2.f * PI);
	const float Radius = FMath::Sqrt(FMath::FRand()) * WanderRadius;
	const float X = FMath::Cos(Angle) * Radius;
	const float Y = FMath::Sin(Angle) * Radius;

	// Forward so it hangs in front than behind
	const float ForwardBias = 0.35f * WanderRadius;
	TargetWander = FVector2D(X + ForwardBias, Y);
}

void AFoxAIController::OnStillCycle()
{
	if (bIsPlayful || bIsResting) return;

	const float Rand = FMath::FRand();
	if (Rand < 0.5f)
	{
		StartResting();
	}
	else
	{
		// Start playful burst
		bIsPlayful = true;
		OrbitAngleDeg = 0.f;

		GetWorldTimerManager().SetTimer(PlayfulTimer, this, &AFoxAIController::EndPlayful, PlayfulDuration, false);
	}
}

bool AFoxAIController::ComputeLeadPoint(FVector& OutPoint)
{
	UWorld* World = GetWorld();
	if (!World) return false;

	ACharacter* Player = UGameplayStatics::GetPlayerCharacter(World, 0);
	APawn* Fox = GetPawn();
	if (!Player || !Fox) return false;

	const FVector PlayerLoc = Player->GetActorLocation();

	// Build a direction that points from the player toward the shard.
	FVector DirToGoal = Player->GetActorForwardVector();
	if (TargetWaypoint)
	{
		const FVector ToWp = TargetWaypoint->GetActorLocation() - PlayerLoc;
		if (!ToWp.IsNearlyZero())
		{
			DirToGoal = ToWp.GetSafeNormal();
		}
	}

	// Orthonormal 2D basis on the ground plane
	const FVector Up = FVector::UpVector;
	FVector Right = FVector::CrossProduct(Up, DirToGoal).GetSafeNormal();
	if (Right.IsNearlyZero()) // edge case if looking straight up/down (might add head point)
	{
		Right = FVector::RightVector;
	}

	// In front of the player to the waypoint
	FVector Desired;
	if (bIsPlayful)
	{
		OrbitAngleDeg += OrbitAngularSpeedDeg * UpdateInterval;
		const float AngleRad = FMath::DegreesToRadians(OrbitAngleDeg);

		const FVector OrbitOffset = DirToGoal * FMath::Cos(AngleRad) * OrbitRadius + Right * FMath::Sin(AngleRad) *
			OrbitRadius;

		Desired = PlayerLoc + OrbitOffset;

		TryPlayfulJump();
	}
	else
	{
		Desired = PlayerLoc + DirToGoal * LeadDistance;
		Desired += DirToGoal * CurrentWander.X;
		Desired += Right * CurrentWander.Y;
	}

	/* Clamp to leash
	const FVector OffsetFromPlayer = Desired - PlayerLoc;
	const float Dist = OffsetFromPlayer.Size();
	if (Dist > MaxLeash && Dist > KINDA_SMALL_NUMBER)
	{
		Desired = PlayerLoc + OffsetFromPlayer / Dist * MaxLeash;
	}*/

	// Clamp to leash
	const float FoxDist = FVector::Dist(Fox->GetActorLocation(), PlayerLoc);
	const bool bOutside = FoxDist > MaxLeash * 1.05f;
	{
		const FVector OffsetFromPlayer = Desired - PlayerLoc;
		const float Dist = OffsetFromPlayer.Size();
		const bool bShouldClamp = (!bLeashCooldownActive || !bOutside);

		if (bShouldClamp && Dist > MaxLeash && Dist > KINDA_SMALL_NUMBER)
		{
			Desired = PlayerLoc + (OffsetFromPlayer / Dist) * MaxLeash;
		}
	}

	// Project onto the NavMesh so MoveTo can reach it
	UNavigationSystemV1* NavSys = UNavigationSystemV1::GetCurrent(World);
	if (NavSys)
	{
		FNavLocation Projected;
		if (NavSys->ProjectPointToNavigation(Desired, Projected, NavQueryExtent))
		{
			Desired = Projected.Location;
		}
		else
		{
			//  45 degree fallback around DirToGoal
			const FVector RotA = (DirToGoal + Right).GetSafeNormal();
			const FVector RotB = (DirToGoal - Right).GetSafeNormal();

			const FVector TryA = PlayerLoc + RotA * FMath::Min(LeadDistance, MaxLeash);
			const FVector TryB = PlayerLoc + RotB * FMath::Min(LeadDistance, MaxLeash);

			if (NavSys->ProjectPointToNavigation(TryA, Projected, NavQueryExtent))
				Desired = Projected.Location;
			else if (NavSys->ProjectPointToNavigation(TryB, Projected, NavQueryExtent))
				Desired = Projected.Location;
			else
				Desired = PlayerLoc; // Stand by the player
		}
	}

	// If the fox drifted outside the leash
	if (bOutside)
	{
		if (!bLeashCooldownActive)
		{
			bLeashCooldownActive = true;
			GetWorldTimerManager().SetTimer(LeashCooldownTimer, this, &AFoxAIController::EndLeashCooldown,
				LeashCatchupDelay, false);
		}

		// Only force a catch up after the cooldown
		if (!bLeashCooldownActive)
		{
			const float Catchup = FMath::Min(LeadDistance, MaxLeash * 0.3f);
			FVector Catch = PlayerLoc + DirToGoal * Catchup;

			if (UNavigationSystemV1* Nav2 = UNavigationSystemV1::GetCurrent(World))
			{
				FNavLocation Proj;
				if (Nav2->ProjectPointToNavigation(Catch, Proj, NavQueryExtent))
				{
					Desired = Proj.Location;
				}
				else
				{
					Desired = Catch;
				}
			}
			else
			{
				Desired = Catch;
			}
		}
	}
	else
	{
		// Back inside leash
		if (bLeashCooldownActive)
		{
			GetWorldTimerManager().ClearTimer(LeashCooldownTimer);
			bLeashCooldownActive = false;
		}
	}

	OutPoint = Desired;
	return true;
}

void AFoxAIController::TryPlayfulJump()
{
	APawn* Fox = GetPawn();
	if (!Fox) return;

	UCharacterMovementComponent* MoveComp = Fox->FindComponentByClass<UCharacterMovementComponent>();

	if (MoveComp->IsFalling()) return;
	if (FMath::FRand() < JumpChancePerSecond * UpdateInterval)
	{
		FVector LaunchDir = FVector::UpVector * JumpStrength;

		if (TargetWaypoint)
		{
			FVector PlayerLoc = UGameplayStatics::GetPlayerCharacter(GetWorld(), 0)->GetActorLocation();
			FVector DirToPlayer = (PlayerLoc - Fox->GetActorLocation()).GetSafeNormal();
			FVector Right = FVector::CrossProduct(FVector::UpVector, DirToPlayer).GetSafeNormal();

			LaunchDir += DirToPlayer * 150.f + Right * 100.f;
		}

		MoveComp->AddImpulse(LaunchDir, true);
	}
}

void AFoxAIController::StartResting()
{
	APawn* Fox = GetPawn();
	if (!Fox) return;

	// Get player location
	ACharacter* Player = UGameplayStatics::GetPlayerCharacter(GetWorld(), 0);
	if (!Player) return;

	// Compute a position slightly in front of or near the player
	FVector PlayerLoc = Player->GetActorLocation();
	FVector DirToPlayer = (PlayerLoc - Fox->GetActorLocation()).GetSafeNormal();
	RestTargetLocation = PlayerLoc - DirToPlayer * 150.f; // 150 units away from player

	bMovingToRest = true; // start moving toward this rest target
}

void AFoxAIController::WakeUpFromRest()
{
	APawn* Fox = GetPawn();
	if (!Fox) return;

	bIsResting = false;

	if (UCharacterMovementComponent* MoveComp = Fox->FindComponentByClass<UCharacterMovementComponent>())
	{
		MoveComp->SetMovementMode(MOVE_Walking); // resume walking
	}

	GetWorldTimerManager().ClearTimer(RestTimerHandle);
}

void AFoxAIController::ArriveAtRestTarget()
{
	APawn* Fox = GetPawn();
	if (!Fox) return;

	if (UCharacterMovementComponent* MoveComp = Fox->FindComponentByClass<UCharacterMovementComponent>())
	{
		MoveComp->StopMovementImmediately();
		MoveComp->Velocity = FVector::ZeroVector;
		MoveComp->SetMovementMode(MOVE_None);
	}

	bMovingToRest = false;
	bIsResting = true;
	//UE_LOG(LogTemp, Warning, TEXT("ArriveAtRestTarget1: Setting bIsResting=%s"), bIsResting ? TEXT("true") : TEXT("false"));
	UpdateAnimBP();
	//UE_LOG(LogTemp, Warning, TEXT("ArriveAtRestTarget2: Setting bIsResting=%s"), bIsResting ? TEXT("true") : TEXT("false"));
	const float SleepDuration = FMath::FRandRange(5.f, 15.f);
	GetWorldTimerManager().SetTimer(RestTimerHandle, this, &AFoxAIController::WakeUpFromRest, SleepDuration, false);
}


void AFoxAIController::EndLeashCooldown()
{
	bLeashCooldownActive = false;
}

void AFoxAIController::EndPlayful()
{
	bIsPlayful = false;
}

void AFoxAIController::CheckIfStuckOrTooFar()
{
	APawn* Fox = GetPawn();
	if (!Fox) return;

	ACharacter* Player = UGameplayStatics::GetPlayerCharacter(GetWorld(), 0);
	if (!Player) return;

	FVector FoxLoc = Fox->GetActorLocation();
	FVector PlayerLoc = Player->GetActorLocation();
	float DistToPlayer = FVector::Dist(FoxLoc, PlayerLoc);

	if (DistToPlayer > TeleportDistance)
	{
		UE_LOG(LogTemp, Warning, TEXT("Fox too far from player (%.1f units), teleporting!"), DistToPlayer);
		TeleportToPlayer();
		return;
	}

	float MovedDistance = FVector::Dist(FoxLoc, LastStuckCheckPosition);

	float PlayerSpeed = Player->GetVelocity().Size2D();
	bool bPlayerMoving = PlayerSpeed > PlayerStillSpeedThreshold;

	if (bPlayerMoving && MovedDistance < StuckDistanceThreshold && DistToPlayer > AcceptableRadius * 2.0f)
	{
		UE_LOG(LogTemp, Warning, TEXT("Fox appears stuck (moved only %.1f units), teleporting!"), MovedDistance);
		TeleportToPlayer();
		return;
	}

	LastStuckCheckPosition = FoxLoc;
}

void AFoxAIController::TeleportToPlayer()
{
	APawn* Fox = GetPawn();
	if (!Fox) return;

	FVector TeleportLoc;
	if (FindTeleportLocation(TeleportLoc))
	{
		if (TeleportEffect)
		{
			UNiagaraFunctionLibrary::SpawnSystemAtLocation(
				GetWorld(),
				TeleportEffect,
				Fox->GetActorLocation(),
				FRotator::ZeroRotator,
				FVector(1.f),
				true,
				true,
				ENCPoolMethod::AutoRelease
			);
		}

		Fox->SetActorLocation(TeleportLoc);

		if (TeleportEffect)
		{
			UNiagaraFunctionLibrary::SpawnSystemAtLocation(
				GetWorld(),
				TeleportEffect,
				TeleportLoc,
				FRotator::ZeroRotator,
				FVector(1.f),
				true,
				true,
				ENCPoolMethod::AutoRelease
			);
		}

		if (UCharacterMovementComponent* MoveComp = Fox->FindComponentByClass<UCharacterMovementComponent>())
		{
			MoveComp->StopMovementImmediately();
			MoveComp->Velocity = FVector::ZeroVector;
		}

		LastStuckCheckPosition = TeleportLoc;

		if (bIsResting || bMovingToRest)
		{
			bMovingToRest = false;
			WakeUpFromRest();
		}
		if (bIsPlayful)
		{
			EndPlayful();
		}

		StartTeleportDissolve();

		UE_LOG(LogTemp, Log, TEXT("Fox teleported to player"));
	}
	else
	{
		UE_LOG(LogTemp, Warning, TEXT("Failed to find valid teleport location"));
	}
}

bool AFoxAIController::FindTeleportLocation(FVector& OutLocation)
{
	UWorld* World = GetWorld();
	if (!World) return false;

	ACharacter* Player = UGameplayStatics::GetPlayerCharacter(World, 0);
	if (!Player) return false;

	FVector PlayerLoc = Player->GetActorLocation();
	FVector PlayerForward = Player->GetActorForwardVector();

	FVector DesiredLoc = PlayerLoc - PlayerForward * TeleportOffsetDistance;

	UNavigationSystemV1* NavSys = UNavigationSystemV1::GetCurrent(World);
	if (!NavSys)
	{
		OutLocation = DesiredLoc;
		return true;
	}

	FNavLocation NavLoc;
	if (NavSys->ProjectPointToNavigation(DesiredLoc, NavLoc, NavQueryExtent))
	{
		OutLocation = NavLoc.Location;
		return true;
	}

	const float Angles[] = { 180.f, 135.f, 225.f, 90.f, 270.f, 45.f, 315.f, 0.f };

	for (float Angle : Angles)
	{
		float AngleRad = FMath::DegreesToRadians(Angle);
		FVector Right = FVector::CrossProduct(FVector::UpVector, PlayerForward).GetSafeNormal();
		FVector Dir = (PlayerForward * FMath::Cos(AngleRad) + Right * FMath::Sin(AngleRad)).GetSafeNormal();

		FVector TryLoc = PlayerLoc + Dir * TeleportOffsetDistance;

		if (NavSys->ProjectPointToNavigation(TryLoc, NavLoc, NavQueryExtent))
		{
			OutLocation = NavLoc.Location;
			return true;
		}
	}

	if (NavSys->ProjectPointToNavigation(PlayerLoc, NavLoc, NavQueryExtent))
	{
		OutLocation = NavLoc.Location;
		return true;
	}

	return false;
}

void AFoxAIController::StartTeleportDissolve()
{
	APawn* Fox = GetPawn();
	if (!Fox || !DissolveMaterial) return;

	USkeletalMeshComponent* Mesh = Fox->FindComponentByClass<USkeletalMeshComponent>();
	if (!Mesh) return;

	// Create dynamic material instance
	FoxDissolveMaterial = UMaterialInstanceDynamic::Create(DissolveMaterial, this);
	if (!FoxDissolveMaterial) return;

	// Apply dissolve material to all material slots
	int32 NumMaterials = Mesh->GetNumMaterials();
	for (int32 i = 0; i < NumMaterials; i++)
	{
		Mesh->SetMaterial(i, FoxDissolveMaterial);
	}

	// Start fully dissolved (invisible)
	FoxDissolveMaterial->SetScalarParameterValue(FName("DissolveAmount"), 1.0f);

	bIsTeleporting = true;
	TeleportDissolveTimer = 0.f;
}

void AFoxAIController::TickTeleportDissolve()
{
	if (!bIsTeleporting) return;

	TeleportDissolveTimer += UpdateInterval;
	float Progress = FMath::Clamp(TeleportDissolveTimer / TeleportFadeInDuration, 0.f, 1.f);

	// Reverse: Start at 1.0 (invisible), go to 0.0 (visible)
	float DissolveValue = 1.0f - Progress;

	if (FoxDissolveMaterial)
	{
		FoxDissolveMaterial->SetScalarParameterValue(FName("DissolveAmount"), DissolveValue);
	}

	// End when fully visible
	if (Progress >= 1.0f)
	{
		EndTeleportDissolve();
	}
}

void AFoxAIController::EndTeleportDissolve()
{
	bIsTeleporting = false;
	TeleportDissolveTimer = 0.f;

	// Restore original materials
	APawn* Fox = GetPawn();
	if (!Fox) return;

	USkeletalMeshComponent* Mesh = Fox->FindComponentByClass<USkeletalMeshComponent>();
	if (!Mesh) return;

	for (int32 i = 0; i < OriginalFoxMaterials.Num(); i++)
	{
		if (OriginalFoxMaterials[i])
		{
			Mesh->SetMaterial(i, OriginalFoxMaterials[i]);
		}
	}

	FoxDissolveMaterial = nullptr;
}
