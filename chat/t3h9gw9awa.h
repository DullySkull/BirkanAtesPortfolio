// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "Components/AudioComponent.h"
#include "GameFramework/Actor.h"
#include "Sound/SoundCue.h"
#include "AudioManager.generated.h"

// For FMOD if we decide to use it (possible I think så)
class UFMODAudioComponent;
class UFMODBank;
class UFMODEvent;

UCLASS()
class GP3_TEAM03_API AAudioManager : public AActor
{
	GENERATED_BODY()
	
public:	
	// Sets default values for this actor's properties
	AAudioManager();

protected:
	// Called when the game starts or when spawned
	virtual void BeginPlay() override;

public:	
	// Called every frame
	virtual void Tick(float DeltaTime) override;

	/** Plays a sound cue (if set) */
	UFUNCTION(BlueprintCallable, Category = "Audio")
	void PlaySoundCue(USoundCue* CueToPlay);

	/** Plays an FMOD event (if used) */
	//UFUNCTION(BlueprintCallable, Category = "Audio")
	//void PlayFMODSound(UFMODEvent* EventToPlay);

	/** Stops all current audio */
	UFUNCTION(BlueprintCallable, Category = "Audio")
	void StopAllAudio();

private:
	// Native Unreal Audio Component
	UPROPERTY(VisibleAnywhere, Category = "Audio|Native")
	UAudioComponent* SoundCueAudioComponent;

	// FMOD Audio Component (optional)
	//UPROPERTY(VisibleAnywhere, Category = "Audio|FMOD")
	//UFMODAudioComponent* FMODComponent;

};
