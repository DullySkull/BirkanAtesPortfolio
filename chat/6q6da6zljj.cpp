// Fill out your copyright notice in the Description page of Project Settings.


#include "AudioManager.h"
#include "Components/AudioComponent.h"


// For FMOD
//#include "FMODAudioComponent.h"
//#include "FMODEvent.h"

// Sets default values
AAudioManager::AAudioManager()
{
 	// Set this actor to call Tick() every frame.  You can turn this off to improve performance if you don't need it.
	PrimaryActorTick.bCanEverTick = false;

	// Unreal Native Audio Component
	SoundCueAudioComponent = CreateDefaultSubobject<UAudioComponent>(TEXT("UnrealAudioComponent"));
	SoundCueAudioComponent->SetupAttachment(RootComponent);
	SoundCueAudioComponent->bAutoActivate = false;

	// FMOD Component I think this should work idk ¯\_(ツ)_/¯
	//FMODComponent = CreateDefaultSubobject<UFMODAudioComponent>(TEXT("FMODAudioComponent"));
	//FMODComponent->SetupAttachment(RootComponent);
}

// Called when the game starts or when spawned
void AAudioManager::BeginPlay()
{
	Super::BeginPlay();
	
}

// Called every frame
void AAudioManager::Tick(float DeltaTime)
{
	Super::Tick(DeltaTime);

}

void AAudioManager::PlaySoundCue(USoundCue* CueToPlay)
{
	if (SoundCueAudioComponent && CueToPlay)
	{
		SoundCueAudioComponent->SetSound(CueToPlay);
		SoundCueAudioComponent->Play();
	}
}

// FMOD Function on Event Played
/*void AAudioManager::PlayFMODSound(UFMODEvent* EventToPlay)
{
	if (FMODComponent && EventToPlay)
	{
		FMODComponent->SetEvent(EventToPlay);
		FMODComponent->Play();
	}
}*/

void AAudioManager::StopAllAudio()
{
	if (SoundCueAudioComponent)
	{
		SoundCueAudioComponent->Stop();
	}

	// For FMOD
	/*if (FMODComponent)
	{
		FMODComponent->Stop();
	}*/
}
