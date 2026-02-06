#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Character.h"
#include "FoxCharacter.generated.h"

class AFoxAIController;

/**
 * Fox character that stores references to level collectables.
 * The AI controller reads this list and moves/points toward them in order.
 */
UCLASS()
class GP4TEAM1_API AFoxCharacter : public ACharacter
{
	GENERATED_BODY()

public:
	AFoxCharacter();

	/** Ordered list of collectables (set this per-instance in the editor with the eyedropper). */
	UPROPERTY(EditInstanceOnly, BlueprintReadWrite, Category = "Collectables")
	TArray<TObjectPtr<AActor>> Collectables;

	/** Current index into Collectables. */
	UPROPERTY(VisibleInstanceOnly, BlueprintReadOnly, Category = "Collectables")
	int32 CurrentCollectableIndex = 0;

	///** Convenience getters (also callable from BP if you want). */
	//UFUNCTION(BlueprintCallable, Category="Collectables")
	//AActor* GetCurrentCollectable() const;

	///** Get next valid collectable in array order. If bAdvance is true, increments the index. */
	//UFUNCTION(BlueprintCallable, Category="Collectables")
	//AActor* GetNextValidCollectable(bool bAdvance);

protected:
	virtual void BeginPlay() override;
	virtual void PossessedBy(AController* NewController) override;

	///** Ask the controller to target the first valid collectable (if any) in array order. */
	//void SetInitialWaypointOnController();

	///** Finds next valid index starting from Start (wraps), or INDEX_NONE. */
	//int32 FindNextValidIndex(int32 Start) const;
};
