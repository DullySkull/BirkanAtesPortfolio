// Fill out your copyright notice in the Description page of Project Settings.


#include "ZenSnapPoint.h"
#include "Components/SphereComponent.h"
#include "Components/BillboardComponent.h"
#include "ZenStone.h"
#include "ZenGardenPuzzle.h"
#include "Kismet/GameplayStatics.h"

AZenSnapPoint::AZenSnapPoint()
{
	PrimaryActorTick.bCanEverTick = false;
	Root = CreateDefaultSubobject<USceneComponent>(TEXT("Root"));
	SetRootComponent(Root);
	Visual = CreateDefaultSubobject<UBillboardComponent>(TEXT("Billboard"));
	Visual->SetupAttachment(Root);
	CaptureZone = CreateDefaultSubobject<USphereComponent>(TEXT("CaptureZone"));
	CaptureZone->InitSphereRadius(140.f);
	CaptureZone->SetupAttachment(Root);
	CaptureZone->SetCollisionEnabled(ECollisionEnabled::QueryOnly);
	CaptureZone->SetCollisionObjectType(ECC_WorldDynamic);
	CaptureZone->SetCollisionResponseToAllChannels(ECR_Ignore);
	CaptureZone->SetCollisionResponseToChannel(ECC_WorldDynamic, ECR_Overlap);
}

void AZenSnapPoint::BeginPlay()
{
	Super::BeginPlay();
}

FVector AZenSnapPoint::GetAnchorLocation() const { return GetActorLocation(); }
FRotator AZenSnapPoint::GetAnchorRotation() const { return GetActorRotation(); }

bool AZenSnapPoint::CanAcceptStone(const AZenStone* Stone) const
{
	if (IsOccupied() || !Stone) return false;
	if (bUseTagMatching && !AllowedTag.IsNone())
		if (Stone->StoneTag != AllowedTag) return false;
	return true;
}

void AZenSnapPoint::Occupy(AZenStone* Stone)
{
	Occupant = Stone;
	UE_LOG(LogTemp, Log, TEXT("[SnapPoint %s] OCCUPY by %s"), *GetName(), Stone ? *Stone->GetName() : TEXT("None"));
	NotifyPuzzle();
}

void AZenSnapPoint::Vacate(AZenStone* Stone)
{
	if (Occupant.Get() == Stone)
	{
		UE_LOG(LogTemp, Log, TEXT("[SnapPoint %s] VACATE by %s"), *GetName(), Stone ? *Stone->GetName() : TEXT("None"));
		Occupant.Reset();
		NotifyPuzzle();
	}
}

void AZenSnapPoint::SetOwnerPuzzle(class AZenGardenPuzzle* InOwner)
{
	OwnerPuzzle = InOwner;
}

void AZenSnapPoint::NotifyPuzzle()
{
	if (OwnerPuzzle.IsValid())
	{
		UE_LOG(LogTemp, Verbose, TEXT("[SnapPoint %s] Notify owner puzzle %s"), *GetName(), *OwnerPuzzle->GetName());
		OwnerPuzzle.Get()->NotifyOccupancyChanged(); // notify puzzle
		return;
	}

	TArray<AActor*> Puzzles;
	UGameplayStatics::GetAllActorsOfClass(GetWorld(), AZenGardenPuzzle::StaticClass(), Puzzles);
	for (AActor* A : Puzzles)
		if (AZenGardenPuzzle* P = Cast<AZenGardenPuzzle>(A))
			P->NotifyOccupancyChanged();
}
