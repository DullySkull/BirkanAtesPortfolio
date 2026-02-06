// Fill out your copyright notice in the Description page of Project Settings.


#include "ZenStone.h"
#include "Components/StaticMeshComponent.h"
#include "Components/SphereComponent.h"
#include "Kismet/GameplayStatics.h"
#include "ZenSnapPoint.h"
#include "MyPlayerCharacter.h"

AZenStone::AZenStone()
{
	PrimaryActorTick.bCanEverTick = true;
	SetActorTickEnabled(false);

	Mesh = CreateDefaultSubobject<UStaticMeshComponent>(TEXT("Mesh"));
	Mesh->SetMobility(EComponentMobility::Movable);
	Mesh->SetSimulatePhysics(false);
	RootComponent = Mesh;

	InteractRadius = CreateDefaultSubobject<USphereComponent>(TEXT("InteractRadius"));
	InteractRadius->InitSphereRadius(120.f);
	InteractRadius->SetCollisionEnabled(ECollisionEnabled::QueryOnly);
	InteractRadius->SetCollisionObjectType(ECC_WorldDynamic);
	InteractRadius->SetCollisionResponseToAllChannels(ECR_Ignore);
	InteractRadius->SetCollisionResponseToChannel(ECC_Pawn, ECR_Overlap);
	InteractRadius->SetupAttachment(RootComponent);

	SnapProbe = CreateDefaultSubobject<USphereComponent>(TEXT("SnapProbe"));
	SnapProbe->InitSphereRadius(SnapProbeRadius);
	SnapProbe->SetCollisionEnabled(ECollisionEnabled::NoCollision);
	SnapProbe->SetCollisionObjectType(ECC_WorldDynamic);
	SnapProbe->SetCollisionResponseToAllChannels(ECR_Ignore);
	SnapProbe->SetCollisionResponseToChannel(ECC_WorldDynamic, ECR_Overlap);
	SnapProbe->SetupAttachment(RootComponent);
}

void AZenStone::BeginPlay()
{
	Super::BeginPlay();

	InteractRadius->OnComponentBeginOverlap.AddDynamic(this, &AZenStone::OnInteractBegin);
	InteractRadius->OnComponentEndOverlap.AddDynamic(this, &AZenStone::OnInteractEnd);

	SnapProbe->OnComponentBeginOverlap.AddDynamic(this, &AZenStone::OnProbeBegin);
	SnapProbe->OnComponentEndOverlap.AddDynamic(this, &AZenStone::OnProbeEnd);
}

void AZenStone::Tick(float DeltaSeconds)
{
	Super::Tick(DeltaSeconds);
	if (bIsHeld) UpdateDragging(DeltaSeconds);
}

void AZenStone::BeginGrab(AMyPlayerCharacter* ByPlayer)
{
	if (bIsHeld || !ByPlayer) return;

	if (OccupyingSocket)
	{
		OccupyingSocket->Vacate(this);
		OccupyingSocket = nullptr;
	}

	Holder = ByPlayer;
	bIsHeld = true;
	CurrentVel = FVector::ZeroVector;
	SnapProbe->SetCollisionEnabled(ECollisionEnabled::QueryOnly);
	SetActorTickEnabled(true);
}

void AZenStone::EndGrab(bool bForceDrop)
{
	if (!bIsHeld) return;

	AZenSnapPoint* Target = nullptr;

	if (!bForceDrop)
	{
		// Re-evaluate RIGHT NOW using current overlaps,
		// so dragging out of the zone clears the target.
		TArray<AActor*> Overlaps;
		SnapProbe->GetOverlappingActors(Overlaps, AZenSnapPoint::StaticClass());

		float BestD2 = TNumericLimits<float>::Max();
		for (AActor* A : Overlaps)
		{
			if (AZenSnapPoint* S = Cast<AZenSnapPoint>(A))
			{
				if (!S->CanAcceptStone(this)) continue;

				const float d2 = FVector::DistSquared(GetActorLocation(), S->GetAnchorLocation());
				if (d2 < BestD2 && d2 <= SnapReleaseDistance * SnapReleaseDistance)
				{
					BestD2 = d2;
					Target = S;
				}
			}
		}
	}

	if (Target) { SnapToSocket(Target); }

	Holder = nullptr;
	bIsHeld = false;
	CandidateSocket = nullptr;
	SnapProbe->SetCollisionEnabled(ECollisionEnabled::NoCollision);
	SetActorTickEnabled(false);
}

bool AZenStone::ProjectTargetOnGround(FVector& OutTarget) const
{
	if (!Holder) return false;
	FVector Origin = Holder->GetActorLocation() + Holder->GetActorForwardVector() * DesiredHoldDistance;
	FHitResult Hit;
	FCollisionQueryParams Params;
	Params.AddIgnoredActor(this);
	Params.AddIgnoredActor(Holder);
	if (GetWorld()->LineTraceSingleByChannel(Hit, Origin + FVector(0, 0, 500), Origin - FVector(0, 0, GroundTraceDown),
	                                         ECC_Visibility, Params))
	{
		OutTarget = Hit.ImpactPoint + Hit.ImpactNormal * 2.f;
		return true;
	}
	return false;
}

void AZenStone::UpdateDragging(float dt)
{
	FVector Target;
	if (!ProjectTargetOnGround(Target)) return;
	FVector ToTarget = Target - GetActorLocation();
	FVector DesiredVel = ToTarget.GetClampedToMaxSize(DragMaxSpeed);
	CurrentVel = FMath::VInterpTo(CurrentVel, DesiredVel, dt, DragAccel);
	AddActorWorldOffset(CurrentVel * dt, true);
	FindBestSocketCandidate();
}

void AZenStone::FindBestSocketCandidate()
{
	AZenSnapPoint* Best = nullptr;
	float BestScore = TNumericLimits<float>::Max();
	TArray<AActor*> Overlaps;
	SnapProbe->GetOverlappingActors(Overlaps, AZenSnapPoint::StaticClass());
	for (AActor* A : Overlaps)
	{
		AZenSnapPoint* S = Cast<AZenSnapPoint>(A);
		if (S && S->CanAcceptStone(this))
		{
			float d = FVector::DistSquared(GetActorLocation(), S->GetAnchorLocation());
			if (d < BestScore)
			{
				BestScore = d;
				Best = S;
			}
		}
	}
	CandidateSocket = Best;
}

void AZenStone::SnapToSocket(AZenSnapPoint* Socket)
{
	if (!Socket) return;
	SetActorLocation(Socket->GetAnchorLocation());
	SetActorRotation(Socket->GetAnchorRotation());
	
	OccupyingSocket = Socket;
	Socket->Occupy(this);
}

void AZenStone::OnInteractBegin(UPrimitiveComponent*, AActor* OtherActor,
                                UPrimitiveComponent*, int32, bool, const FHitResult&)
{
	if (AMyPlayerCharacter* PC = Cast<AMyPlayerCharacter>(OtherActor))
	{
		if (!PC->HeldStone)
		{
			PC->NearbyStone = this;
		}
	}
}

void AZenStone::OnInteractEnd(UPrimitiveComponent*, AActor* OtherActor,
                              UPrimitiveComponent*, int32)
{
	if (AMyPlayerCharacter* PC = Cast<AMyPlayerCharacter>(OtherActor))
		if (PC->NearbyStone == this) PC->NearbyStone = nullptr;
}

void AZenStone::OnProbeBegin(UPrimitiveComponent*, AActor*, UPrimitiveComponent*, int32, bool, const FHitResult&)
{
}

void AZenStone::OnProbeEnd(UPrimitiveComponent*, AActor*, UPrimitiveComponent*, int32)
{
	CandidateSocket = nullptr;
}
