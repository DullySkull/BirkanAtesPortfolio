// Fill out your copyright notice in the Description page of Project Settings.


#include "FoxWaypoint.h"

#include "Components/SphereComponent.h"


AFoxWaypoint::AFoxWaypoint()
{
	PrimaryActorTick.bCanEverTick = false;

	RadiusViz = CreateDefaultSubobject<USphereComponent>(TEXT("SphereComponent"));
	SetRootComponent(RadiusViz);
	RadiusViz->ShapeColor = FColor(0, 200, 255, 64);
	RadiusViz->InitSphereRadius(InteractionRadius);
	RadiusViz->SetCollisionEnabled(ECollisionEnabled::NoCollision);
}
