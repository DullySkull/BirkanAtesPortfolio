#include "FoxCharacter.h"
#include "FoxAIController.h"
#include "GameFramework/CharacterMovementComponent.h"

AFoxCharacter::AFoxCharacter()
{
	// Make sure the AI controller actually possesses this pawn automatically.
	AIControllerClass = AFoxAIController::StaticClass();
	AutoPossessAI = EAutoPossessAI::PlacedInWorldOrSpawned;

	// Sensible movement settings for AI-driven characters.
	bUseControllerRotationYaw = false;
	if (UCharacterMovementComponent* Move = GetCharacterMovement())
	{
		Move->bOrientRotationToMovement = true;
		Move->MaxWalkSpeed = 400.f;
	}
}

void AFoxCharacter::BeginPlay()
{
	Super::BeginPlay();
	if (UCharacterMovementComponent* Move=GetCharacterMovement())
	{
		Move->SetAvoidanceEnabled(true);
	}
	//SetInitialWaypointOnController();
}

void AFoxCharacter::PossessedBy(AController* NewController)
{
	Super::PossessedBy(NewController);
	// In case the controller wasn’t ready in BeginPlay
	//SetInitialWaypointOnController();
}

//void AFoxCharacter::SetInitialWaypointOnController()
//{
//	AFoxAIController* FoxAI = Cast<AFoxAIController>(GetController());
//	if (!FoxAI) return;
//
//	const int32 FirstValid = FindNextValidIndex(0);
//	if (FirstValid == INDEX_NONE) return;
//
//	CurrentCollectableIndex = FirstValid;
//	if (AActor* First = Collectables[CurrentCollectableIndex].Get())
//	{
//		FoxAI->SetTargetWaypoint(First); // controller will handle compass/lead + waiting
//	}
//}
//
//AActor* AFoxCharacter::GetCurrentCollectable() const
//{
//	if (!Collectables.IsValidIndex(CurrentCollectableIndex)) return nullptr;
//	return Collectables[CurrentCollectableIndex].Get();
//}
//
//AActor* AFoxCharacter::GetNextValidCollectable(bool bAdvance)
//{
//	const int32 N = Collectables.Num();
//	if (N == 0) return nullptr;
//
//	const int32 Start = Collectables.IsValidIndex(CurrentCollectableIndex)
//		                    ? (CurrentCollectableIndex + 1) % N
//		                    : 0;
//
//	const int32 NextIdx = FindNextValidIndex(Start);
//	if (NextIdx == INDEX_NONE) return nullptr;
//
//	if (bAdvance)
//	{
//		CurrentCollectableIndex = NextIdx;
//	}
//	return Collectables[NextIdx].Get();
//}
//
//int32 AFoxCharacter::FindNextValidIndex(int32 Start) const
//{
//	const int32 N = Collectables.Num();
//	if (N == 0) return INDEX_NONE;
//
//	for (int32 step = 0; step < N; ++step)
//	{
//		const int32 idx = (Start + step) % N;
//		if (IsValid(Collectables[idx].Get()))
//		{
//			return idx;
//		}
//	}
//	return INDEX_NONE;
//}
