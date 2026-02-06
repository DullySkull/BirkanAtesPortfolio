// Fill out your copyright notice in the Description page of Project Settings.


#include "WaterFlockVolume.h"

AWaterFlockVolume::AWaterFlockVolume()
{
	PrimaryActorTick.bCanEverTick = false;
	Bounds = CreateDefaultSubobject<UBoxComponent>(TEXT("Bounds"));
	SetRootComponent(Bounds);
	Bounds->SetBoxExtent(FVector(2000, 2000, 500));
	Bounds->SetCollisionEnabled(ECollisionEnabled::NoCollision);
}

bool AWaterFlockVolume::GetRandomPointInVolume(FVector& OutPoint) const
{
	if (!Bounds) return false;
	const FBox Box = Bounds->Bounds.GetBox();
	const FVector Rand(
		FMath::FRandRange(Box.Min.X, Box.Max.X),
		FMath::FRandRange(Box.Min.Y, Box.Max.Y),
		FMath::FRandRange(Box.Min.Z, Box.Max.Z)
	);
	OutPoint = Rand;
	return true;
}

bool AWaterFlockVolume::ConstrainInside(FVector& InOutPoint) const
{
	if (!Bounds) return false;
	const FBox Box = Bounds->Bounds.GetBox().ExpandBy(FVector(-10.f));
	InOutPoint.X = FMath::Clamp(InOutPoint.X, Box.Min.X, Box.Max.X);
	InOutPoint.Y = FMath::Clamp(InOutPoint.Y, Box.Min.Y, Box.Max.Y);
	InOutPoint.Z = FMath::Clamp(InOutPoint.Z, Box.Min.Z, Box.Max.Z);
	return true;
}

float AWaterFlockVolume::GetSurfaceZ() const
{
	if (bUseFixedSurfaceZ) return SurfaceZ;
	return Bounds ? Bounds->GetComponentLocation().Z : 0.f;
}
