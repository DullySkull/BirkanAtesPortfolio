// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "FoxWaypoint.generated.h"

class USphereComponent;

UCLASS()
class GP4TEAM1_API AFoxWaypoint : public AActor
{
	GENERATED_BODY()

public:
	AFoxWaypoint();

	UPROPERTY(EditDefaultsOnly, Category="Bacon")
	float InteractionRadius = 160.f;

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category="Bacon")
	TObjectPtr<USphereComponent> RadiusViz;
};
