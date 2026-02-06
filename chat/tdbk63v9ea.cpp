// Fill out your copyright notice in the Description page of Project Settings.


#include "HoneyPuddle.h"

#include "Components/BoxComponent.h"
#include "GameFramework/Character.h"
#include "GameFramework/CharacterMovementComponent.h"

// Sets default values
AHoneyPuddle::AHoneyPuddle()
{
	// Set this actor to call Tick() every frame.  You can turn this off to improve performance if you don't need it.
	PrimaryActorTick.bCanEverTick = false;

	OverlapComponent = CreateDefaultSubobject<UBoxComponent>(TEXT("OverlapComponent"));
	RootComponent = OverlapComponent;
	OverlapComponent->SetCollisionEnabled(ECollisionEnabled::QueryOnly);
	OverlapComponent->SetCollisionResponseToAllChannels(ECollisionResponse::ECR_Overlap);
	OverlapComponent->SetGenerateOverlapEvents(true);
	OverlapComponent->SetBoxExtent(FVector(100.f, 100.f, 10.f));
	OverlapComponent->OnComponentBeginOverlap.AddDynamic(this, &AHoneyPuddle::OnOverlapBegin);
	OverlapComponent->OnComponentEndOverlap.AddDynamic(this, &AHoneyPuddle::OnOverlapEnd);

	MeshComponent = CreateDefaultSubobject<UStaticMeshComponent>(TEXT("MeshComponent"));
	MeshComponent->SetupAttachment(RootComponent);
	MeshComponent->SetCollisionEnabled(ECollisionEnabled::NoCollision);

	SlowSpeedMultiplier = 0.5f;
}

// Called when the game starts or when spawned
void AHoneyPuddle::BeginPlay()
{
	Super::BeginPlay();
}

void AHoneyPuddle::EndPlay(const EEndPlayReason::Type EndPlayReason)
{
	for (auto& Elem : OverlappingCharacters)
	{
		if (ACharacter* Char = Elem.Key)
		{
			if (auto* MoveComp = Char->GetCharacterMovement())
			{
				MoveComp->MaxWalkSpeed = Elem.Value;
			}
		}
	}
	OverlappingCharacters.Empty();
	
	Super::EndPlay(EndPlayReason);
}

void AHoneyPuddle::OnOverlapBegin(
	UPrimitiveComponent* OverlappedComp,
	AActor* OtherActor,
	UPrimitiveComponent* OtherComp,
	int32 OtherBodyIndex,
	bool bFromSweep,
	const FHitResult& SweepResult
)
{
	if (ACharacter* Char = Cast<ACharacter>(OtherActor))
	{
		if (UCharacterMovementComponent* MoveComp = Char->GetCharacterMovement())
		{
			if (!OverlappingCharacters.Contains(Char))
			{
				float OriginalSpeed = MoveComp->MaxWalkSpeed;
				OverlappingCharacters.Add(Char, OriginalSpeed);
				MoveComp->MaxWalkSpeed = OriginalSpeed * SlowSpeedMultiplier;
			}
		}
	}
}

void AHoneyPuddle::OnOverlapEnd(
	UPrimitiveComponent* OverlappedComp,
	AActor* OtherActor,
	UPrimitiveComponent* OtherComp,
	int32 OtherBodyIndex
)
{
	if (ACharacter* Char = Cast<ACharacter>(OtherActor))
	{
		if (UCharacterMovementComponent* MoveComp = Char->GetCharacterMovement())
		{
			if (OverlappingCharacters.Contains(Char))
			{
				float OriginalSpeed = OverlappingCharacters[Char];
				MoveComp->MaxWalkSpeed = OriginalSpeed;
				OverlappingCharacters.Remove(Char);
			}
		}
	}
}

FVector AHoneyPuddle::GetRandomPointInActorBounds(AActor* TargetActor)
{
	if (!TargetActor)
	{
		return FVector::ZeroVector;
	}

	FVector Origin, BoxExtent;
	TargetActor->GetActorBounds(false, Origin, BoxExtent);

	float RandX = FMath::FRandRange(Origin.X - BoxExtent.X, Origin.X + BoxExtent.X);
	float RandY = FMath::FRandRange(Origin.Y - BoxExtent.Y, Origin.Y + BoxExtent.Y);
	float RandZ = Origin.Z + BoxExtent.Z;

	return FVector(RandX, RandY, RandZ);
}

void AHoneyPuddle::ClearHoneyPuddle()
{
	for (auto& Pair : OverlappingCharacters)
	{
		ACharacter* Char = Pair.Key;
		float OriginalSpeed = Pair.Value;

		if (IsValid(Char))
		{
			if (UCharacterMovementComponent* MoveComp = Char->GetCharacterMovement())
			{
				MoveComp->MaxWalkSpeed = OriginalSpeed;
			}
		}
	}
	OverlappingCharacters.Empty();
	Destroy();
}

void AHoneyPuddle::ApplySlowToCharacter(ACharacter* Character, float SlowMultiplier)
{
	if (Character && Character->GetCharacterMovement())
	{
		float CurrentSpeed = Character->GetCharacterMovement()->MaxWalkSpeed;
		Character->GetCharacterMovement()->MaxWalkSpeed = CurrentSpeed * SlowMultiplier;
	}
}

void AHoneyPuddle::RemoveSlowFromCharacter(ACharacter* Character)
{
	if (Character && Character->GetCharacterMovement())
	{
		Character->GetCharacterMovement()->MaxWalkSpeed = 600.f;
	}
}