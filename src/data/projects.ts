import queensRushImg from '../assets/images/queens-rush-new-2.png';
import queensRushHomeImg from '../assets/images/queens-rush-home.png';
import whisperImg from '../assets/images/whisper-header.png';
import whisperHomeImg from '../assets/images/whisper-home.png';
import ploraImg from '../assets/images/plora-real.png';
import ploraHomeImg from '../assets/images/plora-home.png';
import ploraHeaderImg from '../assets/images/plora-header.png';
import daggerboundImg from '../assets/images/daggerbound-new-2.png';
import comingSoonImg from '../assets/images/coming-soon.png';
import rogueCardImg from '../assets/images/rogue-card-real.png';
import towerDefenceImg from '../assets/images/tower-defence-new.png';
import queensRush1 from '../assets/images/queens-rush-1.png';
import queensRush2 from '../assets/images/queens-rush-2.png';
import queensRush3 from '../assets/images/queens-rush-3.png';
import queensRush4 from '../assets/images/queens-rush-4.png';
import queensRush5 from '../assets/images/queens-rush-5.png';
import whisperGallery1 from '../assets/images/whisper-gallery-1.png';
import whisperGallery2 from '../assets/images/whisper-gallery-2.png';
import whisperGallery3 from '../assets/images/whisper-gallery-3.png';
import whisperGallery4 from '../assets/images/whisper-gallery-4.png';
import ploraGallery1 from '../assets/images/plora-gallery-1.png';
import ploraGallery2 from '../assets/images/plora-gallery-2.png';
import ploraGallery3 from '../assets/images/plora-gallery-3.png';
import ploraGallery4 from '../assets/images/plora-gallery-4.png';
import ploraGallery5 from '../assets/images/plora-gallery-5.png';
import ploraGallery6 from '../assets/images/plora-gallery-6.png';
import ploraUI1 from '../assets/images/plora-ui-1.png';
import ploraUI2 from '../assets/images/plora-ui-2.png';
import ploraUI3 from '../assets/images/plora-ui-3.png';
import ploraUI4 from '../assets/images/plora-ui-4.png';
import ploraUIShowcase from '../assets/images/plora-ui-showcase.gif';
import daggerboundGallery1 from '../assets/images/daggerbound-gallery-1.png';
import daggerboundGallery2 from '../assets/images/daggerbound-gallery-2.png';
import daggerboundGallery3 from '../assets/images/daggerbound-gallery-3.png';
import daggerboundGallery4 from '../assets/images/daggerbound-gallery-4.png';
import daggerboundHeader from '../assets/images/daggerbound-header.png';
import daggerboundHomeImg from '../assets/images/daggerbound-home.png';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  homeImage?: string;
  time: string;
  engine: string;
  language: string;
  versionControl: string;
  contributions: string[];
  techOverview: string;
  deepDives: {
    title: string;
    content: string;
    code?: string;
    images?: string[];
  }[];
  isComingSoon?: boolean;
  externalLink?: string;
  gallery?: string[];
  video?: string;
  contributionsGif?: string;
  contributionSummary?: string;
}

export const projectsData: Project[] = [
  {
    id: 'queens-rush',
    title: 'Queens Rush',
    description: 'Queens Rush is a third-person melee boss rush. You play as a fabulously buff drag queen invited to take part in the yearly Queens Rush Tournament. Fight themed bosses with mechanics inspired by Final Fantasy XIV, learn combo-based combat, and earn your place as the Ultimate Queen.',
    contributionSummary: 'Gameplay Programmer – GameState, Cinematic tool, environment hazards, tutorial systems',
    image: queensRushImg,
    homeImage: queensRushHomeImg,
    time: '7 weeks',
    engine: 'Unreal Engine 5.4',
    language: 'C++',
    versionControl: 'Perforce',
    externalLink: 'https://futuregames.itch.io/queens-rush',
    gallery: [queensRush1, queensRush2, queensRush3, queensRush4, queensRush5],
    video: 'https://www.youtube.com/embed/gtPgqS8e6O4',
    contributions: [
      'Game flow / state tracking: UGameStateManager',
      'Cinematics pipeline: UCinematicManagerComponent',
      'Tutorial system: UTutorialManagerComponent',
      'Training dummy: ATrainingDummy',
      'Environment switching: AEnvironmentManager',
      'Boss hazards: Chess barrier activation + Bee honey puddles',
      'Boss throwables: AThrowableSpawner'
    ],
    techOverview: 'Built in Unreal Engine 5.4, using C++ for core gameplay systems and Blueprint/UMG for designer-facing interaction. My work focused on game flow, cinematic transitions, tutorial structure, and boss-specific environment systems (hazards + throwables) to make each boss arena feel mechanically distinct.',
    deepDives: [
      {
        title: 'Game Manager (GameStateManager)',
        content: 'I implemented a lightweight UGameStateManager to track global game flow and provide a clean API for state transitions. It prevents duplicate transitions and logs state changes for debugging.',
        code: `void UGameStateManager::SetGameState(EGameState NewState)
{
    if (CurrentState != NewState)
    {
        CurrentState = NewState;
        UE_LOG(LogTemp, Log, TEXT("Game State changed to: %s"),
            *UEnum::GetValueAsString(NewState));
    }
}

EGameState UGameStateManager::GetCurrentState() const
{
    return CurrentState;
}`
      },
      {
        title: 'CinematicManagerComponent',
        content: 'I built UCinematicManagerComponent to handle boss intro cinematics, including skip support (keyboard + controller), disabling player input during playback, and cleanly handing off to environment + boss start.',
        code: `void UCinematicManagerComponent::SetupSkipInput()
{
    if (APlayerController* PC = UGameplayStatics::GetPlayerController(this, 0))
    {
        if (!PC->InputComponent)
        {
            PC->InputComponent = NewObject<UInputComponent>(PC, TEXT("CinematicSkipInputComp"));
            PC->InputComponent->RegisterComponent();
            PC->PushInputComponent(PC->InputComponent);
        }

        PC->InputComponent->BindKey(EKeys::Enter, IE_Pressed, this,
            &UCinematicManagerComponent::SkipCinematic);
        PC->InputComponent->BindKey(EKeys::Gamepad_FaceButton_Right, IE_Pressed, this,
            &UCinematicManagerComponent::SkipCinematic);
    }
}

void UCinematicManagerComponent::OnSequenceFinished()
{
    if (SequenceActor) { SequenceActor->Destroy(); SequenceActor = nullptr; }
    SequencePlayer = nullptr;

    if (APlayerController* PC = UGameplayStatics::GetPlayerController(GetWorld(), 0))
    {
        PC->SetCinematicMode(false, false, false, false, false);
        PC->SetInputMode(FInputModeGameOnly());
        PC->bShowMouseCursor = false;

        if (APawn* Pawn = PC->GetPawn()) { Pawn->EnableInput(PC); }
    }

    if (EnvironmentManager) { EnvironmentManager->ActivateEnvironmentForBoss(PendingBossIndex); }
    if (BossManager) { BossManager->StartBossByIndex(PendingBossIndex); }
}`
      },
      {
        title: 'TutorialManagerComponent',
        content: 'I built a step-based tutorial manager that drives UI instructions, tracks completion per step, and spawns throwables so the player can practice pickup/throw and combo interactions.',
        code: `void UTutorialManagerComponent::ShowNextInstruction()
{
    for (int32 i = 0; i < StepInstructions.Num(); ++i)
    {
        if (!bStepCompleted[i])
        {
            CurrentStep = static_cast<ETutorialStep>(i);
            if (TutorialWidget)
                TutorialWidget->SetInstructionText(StepInstructions[i]);
            return;
        }
    }

    CurrentStep = ETutorialStep::None;
    if (TutorialWidget)
    {
        TutorialWidget->SetInstructionText(FText::GetEmpty());
        TutorialWidget->EnableFinishButton();
    }
}

void UTutorialManagerComponent::OnThrowableDestroyed(AActor* DestroyedActor)
{
    ActiveThrowables.Remove(DestroyedActor);

    FTimerHandle TimerHandle;
    GetWorld()->GetTimerManager().SetTimer(
        TimerHandle, this,
        &UTutorialManagerComponent::SpawnOneThrowable,
        ThrowableRespawnDelay, false);
}`
      },
      {
        title: 'Training Dummy (TrainingDummy)',
        content: 'I created a training dummy that integrates with the tutorial system by detecting damage events and notifying the tutorial manager when the player completes the relevant combat step.',
        code: `void ATrainingDummy::OnTakeDamage(AActor* DamagedActor, float Damage,
    const UDamageType* DamageType, AController* InstigatedBy, AActor* DamageCauser)
{
    if (Damage <= 0.f || currentHealth <= 0.f) return;

    currentHealth -= Damage;

    if (TutorialManager)
    {
        const ETutorialStep Step = TutorialManager->GetCurrentStep();
        if (Step == ETutorialStep::Attack || Step == ETutorialStep::Throw)
        {
            TutorialManager->NotifyAttackDone();
        }
    }

    if (currentHealth <= 0.f)
    {
        HitCapsule->SetCollisionEnabled(ECollisionEnabled::NoCollision);
        GetWorldTimerManager().SetTimer(TimerHandle_ResetHP, this,
            &ATrainingDummy::ResetHealth, 3.0f, false);
    }
}`
      },
      {
        title: 'EnvironmentManager',
        content: 'I implemented AEnvironmentManager to activate arena visuals and hazards per boss index. This keeps hazards decoupled from boss AI and ensures each arena resets cleanly when switching bosses.',
        code: `void AEnvironmentManager::ActivateEnvironmentForBoss(int32 BossIndex)
{
    DeactivateAllEnvironments();

    switch (BossIndex)
    {
    case 0: // Chess
        SetActorsVisibility(ChessEnvironmentActors, true);
        SetPostProcessVolumesActive(ChessPostProcessVolumes, true);
        if (IsValid(ChessQueenSpawner)) { ChessQueenSpawner->SpawnBarrier(); }
        break;

    case 1: // Bee
        SetActorsVisibility(BeeEnvironmentActors, true);
        SetPostProcessVolumesActive(BeePostProcessVolumes, true);
        for (UHoneyPuddleComponent* Comp : CachedHoneyPuddleComponents)
            if (IsValid(Comp)) { Comp->SpawnHoneyPuddles(); }
        break;
    }
}`
      },
      {
        title: 'ThrowableSpawner',
        content: 'I built AThrowableSpawner to spawn boss-specific throwable sets using a map keyed by boss index. It controls spawn timing, maximum concurrent items, and cleans up throwables when switching fights.',
        code: `void AThrowableSpawner::SetThrowableClassesForBoss(int32 BossIndex)
{
    ClearSpawnedThrowables();

    if (BossThrowableClasses.Contains(BossIndex))
    {
        CurrentThrowableClasses = BossThrowableClasses[BossIndex].Throwables;
        UE_LOG(LogTemp, Log, TEXT("ThrowableSpawner: Updated throwable classes for BossIndex %d"), BossIndex);
        ResetSpawnTimer();
    }
}

void AThrowableSpawner::SpawnThrowable()
{
    if (SpawnedThrowables.Num() >= MaxConcurrentThrowables)
    {
        ResetSpawnTimer();
        return;
    }

    const int32 RandomIndex = FMath::RandRange(0, CurrentThrowableClasses.Num() - 1);
    TSubclassOf<AActor> SelectedClass = CurrentThrowableClasses[RandomIndex];

    AActor* Spawned = GetWorld()->SpawnActor<AActor>(
        SelectedClass, GetRandomSpawnLocation(), FRotator::ZeroRotator);

    if (Spawned)
    {
        SpawnedThrowables.Add(Spawned);
        Spawned->OnDestroyed.AddDynamic(this, &AThrowableSpawner::OnThrowableDestroyed);
    }

    ResetSpawnTimer();
}`
      },
      {
        title: 'Level Hazards (Honey Puddle)',
        content: 'For the Bee Queen arena, I implemented honey puddles that slow the player on overlap. The system tracks original speeds per character and restores them safely on exit and on actor cleanup.',
        code: `void AHoneyPuddle::OnOverlapBegin(UPrimitiveComponent*, AActor* OtherActor,
    UPrimitiveComponent*, int32, bool, const FHitResult&)
{
    if (ACharacter* Char = Cast<ACharacter>(OtherActor))
    {
        if (UCharacterMovementComponent* MoveComp = Char->GetCharacterMovement())
        {
            if (!OverlappingCharacters.Contains(Char))
            {
                const float OriginalSpeed = MoveComp->MaxWalkSpeed;
                OverlappingCharacters.Add(Char, OriginalSpeed);
                MoveComp->MaxWalkSpeed = OriginalSpeed * SlowSpeedMultiplier;
            }
        }
    }
}

void AHoneyPuddle::EndPlay(const EEndPlayReason::Type EndPlayReason)
{
    for (auto& Elem : OverlappingCharacters)
    {
        if (ACharacter* Char = Elem.Key)
            if (auto* MoveComp = Char->GetCharacterMovement())
                MoveComp->MaxWalkSpeed = Elem.Value;
    }
    OverlappingCharacters.Empty();

    Super::EndPlay(EndPlayReason);
}`
      }
    ]
  },
  {
    id: 'whisper-of-seasons',
    title: 'Whisper of Seasons',
    description: 'Whisper of Seasons is a serene adventure game about harmony, connection, and the beauty of a world discovering its voice once more.',
    contributionSummary: 'Gameplay & Systems Programmer – AI behaviours, gameplay tools, Puzzle',
    image: whisperImg,
    homeImage: whisperHomeImg,
    time: '4 weeks',
    engine: 'Unreal Engine 5.4',
    language: 'C++',
    versionControl: 'Perforce',
    externalLink: 'https://dullyskull.itch.io/whisper-of-seasons',
    gallery: [whisperGallery1, whisperGallery2, whisperGallery3, whisperGallery4],
    video: 'https://www.youtube.com/embed/QwHXWaCSoDk',
    contributions: [
      'Modular environmental puzzle system (Zen Garden)',
      'Dynamic wildlife spawning & AI',
      'Boids-based flocking simulation (Fish)',
      'Companion AI system (Fox)',
      'Procedural-content-aware design'
    ],
    techOverview: 'Built in Unreal Engine 5.4, using C++ for all core gameplay, AI, and simulation systems, with Blueprints used only for designer-facing configuration and iteration. My work focused on procedural gameplay systems, environmental puzzles, wildlife AI, boids-based flocking simulation, and companion AI, all designed to work reliably in a procedurally generated world.',
    deepDives: [
      {
        title: 'Zen Garden Puzzle System',
        content: 'I implemented a modular environmental puzzle system inspired by Zen garden mechanics. The puzzle is designed to function independently of level layout, making it safe to use in procedurally generated environments.',
        code: `// ZenGardenPuzzle.cpp
// The puzzle actor acts as the single source of truth.
// It auto-registers nearby stones and snap points so the puzzle
// can be placed safely in procedurally generated areas.

void AZenGardenPuzzle::GatherPartsIfNeeded()
{
    if (!bAutoRegisterInRadius) return;

    const FVector Center = GetActorLocation();
    const float RadiusSq = AutoRegisterRadius * AutoRegisterRadius;

    TArray<AActor*> FoundStones;
    TArray<AActor*> FoundSockets;

    UGameplayStatics::GetAllActorsOfClass(this, AZenStone::StaticClass(), FoundStones);
    UGameplayStatics::GetAllActorsOfClass(this, AZenSnapPoint::StaticClass(), FoundSockets);

    Stones.Empty();
    for (AActor* A : FoundStones)
        if (A && FVector::DistSquared(Center, A->GetActorLocation()) <= RadiusSq)
            Stones.Add(Cast<AZenStone>(A));

    SnapPoints.Empty();
    for (AActor* A : FoundSockets)
        if (A && FVector::DistSquared(Center, A->GetActorLocation()) <= RadiusSq)
            SnapPoints.Add(Cast<AZenSnapPoint>(A));
}

// ZenGardenPuzzle.cpp
// Puzzle completion is validated by checking the occupancy
// state of each snap point. No stone logic is handled here,
// keeping responsibilities clearly separated.

bool AZenGardenPuzzle::IsPuzzleComplete() const
{
    for (auto Sock : SnapPoints)
        if (!Sock.IsValid() || !Sock->IsOccupied())
            return false;

    return true;
}

// ZenSnapPoint.cpp
// Snap points are responsible for validating and tracking
// whether a stone is placed correctly. Once occupied, they
// notify the owning puzzle to re-check completion state.

void AZenSnapPoint::Occupy(AZenStone* Stone)
{
    Occupant = Stone;
    NotifyPuzzle();
}

// ZenStone.cpp
// When the player releases a stone, it evaluates all nearby
// snap points and chooses the closest valid one within range.
// The stone never decides puzzle completion — it only snaps.

void AZenStone::EndGrab(bool bForceDrop)
{
    if (!bIsHeld) return;

    AZenSnapPoint* Target = nullptr;
    TArray<AActor*> Overlaps;
    SnapProbe->GetOverlappingActors(Overlaps, AZenSnapPoint::StaticClass());

    float BestDistanceSq = TNumericLimits<float>::Max();
    for (AActor* A : Overlaps)
    {
        AZenSnapPoint* S = Cast<AZenSnapPoint>(A);
        if (S && S->CanAcceptStone(this))
        {
            float DistSq = FVector::DistSquared(GetActorLocation(), S->GetAnchorLocation());
            if (DistSq < BestDistanceSq)
            {
                BestDistanceSq = DistSq;
                Target = S;
            }
        }
    }

    if (Target)
        SnapToSocket(Target);

    bIsHeld = false;
    SetActorTickEnabled(false);
}`
      },
      {
        title: 'Wildlife Spawning & Animal AI',
        content: 'I implemented a dynamic wildlife system that populates the world without relying on hand-placed actors. It includes a WildLifeSpawner for population logic and specific AI controllers for different animals.',
        code: `// WILDLIFE SPAWNING & ANIMAL AI

// STREAMING: Only keep nearby cells active (scales to large worlds)
void AWildLifeSpawner::Tick(float DeltaSeconds)
{
	// Update at fixed intervals to avoid heavy work every frame.
	TimeSinceLastUpdate += DeltaSeconds;
	if (TimeSinceLastUpdate < UpdateInterval) return;
	TimeSinceLastUpdate = 0.f;

	UpdateStreaming();
}

void AWildLifeSpawner::UpdateStreaming()
{
	// Convert player position to a grid cell.
	const FCellCoord PlayerCell = WorldToCell(PlayerPawn->GetActorLocation());

	// Build the set of "wanted" cells in range of the player.
	TSet<FCellCoord> WantedCells;
	for (int32 dx = -ActiveRadiusCells; dx <= ActiveRadiusCells; ++dx)
	for (int32 dy = -ActiveRadiusCells; dy <= ActiveRadiusCells; ++dy)
	{
		const FCellCoord C(PlayerCell.X + dx, PlayerCell.Y + dy);
		if (IsWithinActiveRadius(PlayerCell, C))
			WantedCells.Add(C);
	}

	// Ensure wanted cells exist + have animals.
	for (const FCellCoord& C : WantedCells)
	{
		EnsureCellInitialized(C);
		SpawnMissingForCell(C);
	}

	// Despawn cells far away and save their state.
	DespawnFarCells(WantedCells, PlayerCell);
}

// DETERMINISTIC CELL GENERATION: Herds/groups are generated from Seed + Cell
void AWildLifeSpawner::EnsureCellInitialized(const FCellCoord& C)
{
	FWildlifeCellData& Cell = Cells.FindOrAdd(C);
	if (Cell.bInitialized) return;

	// Deterministic RNG per cell => stable PCG behavior.
	FRandomStream RNG;
	RNG.Initialize(HashCombine(BaseSeed, HashCombine(::GetTypeHash(C.X), ::GetTypeHash(C.Y))));

	GenerateCellWithHerds(C, Cell, RNG);

	// Save the initial snapshot so re-enter behavior is consistent.
	Cell.InitialAnimals = Cell.SavedAnimals;
	Cell.bInitialized = true;
}

void AWildLifeSpawner::GenerateCellWithHerds(const FCellCoord& C, FWildlifeCellData& Cell, FRandomStream& RNG)
{
	// Herd system:
	// - Season filtering
	// - Group count per cell
	// - Group center + members spread in radius
	int32 Remaining = MaxAnimalsPerCell;
	TArray<FWildlifeSavedAnimal> Generated;

	for (const FHerdDefinition& Herd : Herds)
	{
		if (!HerdAllowedInSeason(Herd) || Herd.Species.Num() == 0) continue;

		const int32 Groups = RNG.RandRange(Herd.MinGroupsPerCell, Herd.MaxGroupsPerCell);

		for (int32 g = 0; g < Groups && Remaining > 0; ++g)
		{
			FTransform GroupCenterXf;
			if (!FindValidSpawnTransform(CellToWorldCenter(C), RNG, GroupCenterXf))
				continue;

			const int32 Count = RNG.RandRange(Herd.MinGroupSize, Herd.MaxGroupSize);

			for (int32 i = 0; i < Count && Remaining > 0; ++i)
			{
				FTransform MemberXf;
				FindValidSpawnNear(GroupCenterXf.GetLocation(), Herd.GroupRadius, RNG, MemberXf);

				// Guarantee the member stays in the intended cell.
				if (!(WorldToCell(MemberXf.GetLocation()) == C)) continue;

				FWildlifeSavedAnimal A;
				A.Class = PickRandomFrom(Herd.Species, RNG);
				A.Transform = MemberXf;
				A.LocalId = Generated.Num();

				if (IsValid(A.Class))
				{
					Generated.Add(A);
					--Remaining;
				}
			}
		}
	}

	Cell.SavedAnimals = MoveTemp(Generated);
}

// PLACEMENT VALIDATION: Ground trace + slope limit + optional nav projection
bool AWildLifeSpawner::FindValidSpawnTransform(const FVector& CellCenter, FRandomStream& RNG, FTransform& OutXform) const
{
	// Tries multiple candidates inside the cell until we find valid ground.
	for (int32 i = 0; i < MaxLocationTries; ++i)
	{
		FVector Candidate(CellCenter.X + RNG.FRandRange(-CellSize * 0.5f, CellSize * 0.5f),
		                  CellCenter.Y + RNG.FRandRange(-CellSize * 0.5f, CellSize * 0.5f),
		                  CellCenter.Z + TraceHeight);

		FVector GroundLoc, GroundNormal;
		if (!ProjectToGround(Candidate, GroundLoc, GroundNormal)) continue;

		// Reject steep slopes.
		if (GroundNormal.Z < MinGroundNormalZ) continue;

		// Ensure reachable nav location (optional).
		FVector FinalLoc = GroundLoc;
		if (bRequireNavLocation && !NavProjectIfNeeded(FinalLoc, FinalLoc)) continue;

		OutXform = FTransform(FRotator::ZeroRotator, FinalLoc);
		return true;
	}
	return false;
}

// SPAWN + AI SAFETY: Ensure controller + movement mode after spawn
void AWildLifeSpawner::SpawnMissingForCell(const FCellCoord& C)
{
	FWildlifeCellData& Cell = Cells.FindOrAdd(C);

	for (FWildlifeSavedAnimal& S : Cell.SavedAnimals)
	{
		// Spawn until Live count matches saved data for the cell.
		if (Cell.LiveAnimals.Num() >= Cell.SavedAnimals.Num()) break;
		if (!IsValid(S.Class)) continue;

		FActorSpawnParameters Params;
		Params.SpawnCollisionHandlingOverride =
			ESpawnActorCollisionHandlingMethod::AdjustIfPossibleButAlwaysSpawn;

		APawn* NewAnimal = GetWorld()->SpawnActor<APawn>(S.Class, S.Transform, Params);
		if (!NewAnimal) continue;

		// Ensure the pawn is possessed and can move right away.
		if (bForceSpawnDefaultController && !NewAnimal->GetController())
			NewAnimal->SpawnDefaultController();

		if (bForceCharacterWalking)
			if (ACharacter* AsChar = Cast<ACharacter>(NewAnimal))
				if (UCharacterMovementComponent* Move = AsChar->GetCharacterMovement())
					if (Move->MovementMode == MOVE_None)
						Move->SetMovementMode(MOVE_Walking);

		// Track in live set; removed on destroy.
		NewAnimal->OnDestroyed.AddUniqueDynamic(this, &AWildLifeSpawner::OnAnimalDestroyed);
		Cell.LiveAnimals.Add(NewAnimal);
	}
}

// ANIMAL AI EXAMPLE A: Bunny “brain” state machine + threat reaction
void ABunnyAIController::Tick(float dt)
{
	// Bunny AI is a lightweight state machine:
	// Idle -> Explore -> Forage -> Sleep, with interrupt to Flee when threatened.
	UpdateStateFromThreat(dt);
	DriveState(dt);
}

void ABunnyAIController::OnPerceptionUpdated(AActor* Actor, FAIStimulus Stimulus)
{
	// Treat actors tagged "Predator" as threats.
	if (Actor && Actor->ActorHasTag(TEXT("Predator")) && Stimulus.WasSuccessfullySensed())
	{
		LastThreat = Actor;
		ThreatLevel = 1.f;
	}
}

void ABunnyAIController::MoveSmartTo(const FVector& Target, float dt)
{
	// Hybrid movement:
	// - NavMesh pathing when possible
	// - Fallback steering when off-nav (keeps behavior stable in uneven terrain/PCG)
	FNavLocation OnNav;
	const UNavigationSystemV1* Nav = UNavigationSystemV1::GetCurrent(GetWorld());

	if (Nav && Nav->ProjectPointToNavigation(Target, OnNav))
	{
		MoveToLocation(OnNav.Location, 50.f, true, true, true, false, 0);
	}
	else if (Bunny)
	{
		Bunny->SteeringFallbackTo(Target, dt);
	}
}

// ANIMAL AI EXAMPLE B: Doe perception flee + herd panic propagation
void ADoeAIController::OnTargetPerceptionUpdated(AActor* Actor, FAIStimulus Stimulus)
{
	// Doe flees from the player when sight senses the player successfully.
	if (!Stimulus.WasSuccessfullySensed()) return;
	if (!IsPlayerActor(Actor)) return;

	BeginFleeFrom(Actor->GetActorLocation());
}

void ADoeAIController::BeginFleeFrom(const FVector& ThreatLocation)
{
	// Run away + alert nearby does so they flee too.
	const FVector SelfLoc = ControlledPawn->GetActorLocation();
	const FVector AwayDir = (SelfLoc - ThreatLocation).GetSafeNormal2D();
	const FVector Desired = SelfLoc + AwayDir * FleeDistance;

	FVector Dest;
	if (!FindRandomReachablePosition(Desired, 400.f, Dest)) return;

	BroadcastPanic(ThreatLocation);
	MoveToLocation(Dest, AcceptanceRadius, true, true, true, false, nullptr, true);
}`
      },
      {
        title: 'Boids & Flocking Simulation',
        content: 'I implemented a boid-based flocking system for aquatic life, creating emergent behavior rather than scripted paths. It includes a FishFlockManager, FishBoidSettings, and WaterFlockVolume.',
        code: `// BOIDS & FLOCKING SIMULATION

// DATA MODEL: Each fish is a lightweight agent + HISM instance bookkeeping
USTRUCT()
struct FBoidAgent
{
	// Each fish has only what the simulation needs (position + velocity).
	// Rendering is done via instancing (InstanceIdx + MatIdx), not individual actors.
	FVector Pos = FVector::ZeroVector;
	FVector Vel = FVector::ZeroVector;

	int32 InstanceIdx = -1;
	int32 MatIdx = 0;
};

// PERFORMANCE: Spatial hash grid for neighbors (fast flocking at 500+ agents)
void AFishFlockManager::BuildGrid()
{
	// Grid maps cell coord -> list of agent indices.
	// CellSize ~= NeighborRadius so we only check local cells (27 offsets).
	Grid.Reset();

	for (int32 i = 0; i < Agents.Num(); ++i)
	{
		const FVector P = Agents[i].Pos;
		const FIntVector Cell(
			FMath::FloorToInt(P.X / CellSize),
			FMath::FloorToInt(P.Y / CellSize),
			FMath::FloorToInt(P.Z / CellSize)
		);

		Grid.FindOrAdd(Cell).Add(i);
	}
}

// BOID STEERING: Cohesion + Alignment + Separation (emergent movement)
FVector AFishFlockManager::BoidSteer_Grid(int32 Index) const
{
	const FBoidAgent& A = Agents[Index];

	// Accumulate neighbor info from nearby grid cells instead of scanning every fish.
	FVector CohesionSum = FVector::ZeroVector;
	FVector AlignmentSum = FVector::ZeroVector;
	FVector SeparationSum = FVector::ZeroVector;
	int32 NeighborCount = 0;

	const FIntVector MyCell(
		FMath::FloorToInt(A.Pos.X / CellSize),
		FMath::FloorToInt(A.Pos.Y / CellSize),
		FMath::FloorToInt(A.Pos.Z / CellSize)
	);

	for (const FIntVector& Off : NeighborCellOffsets) // 27 cells
	{
		const FIntVector C = MyCell + Off;
		const TArray<int32>* Indices = Grid.Find(C);
		if (!Indices) continue;

		for (int32 j : *Indices)
		{
			if (j == Index) continue;
			const FBoidAgent& B = Agents[j];

			const FVector To = B.Pos - A.Pos;
			const float DistSq = To.SizeSquared();
			if (DistSq > NeighborRadius * NeighborRadius) continue;

			// Cohesion: steer toward center of neighbors
			CohesionSum += B.Pos;

			// Alignment: steer toward average neighbor velocity
			AlignmentSum += B.Vel;

			// Separation: push away from very close neighbors
			if (DistSq < SeparationRadius * SeparationRadius && DistSq > 1.f)
				SeparationSum -= To / FMath::Sqrt(DistSq);

			NeighborCount++;
		}
	}

	if (NeighborCount <= 0)
	{
		// No neighbors nearby => wander/goal or bounds is what drives motion.
		return FVector::ZeroVector;
	}

	const FVector CohesionDir = ((CohesionSum / NeighborCount) - A.Pos).GetSafeNormal();
	const FVector AlignmentDir = (AlignmentSum / NeighborCount).GetSafeNormal();
	const FVector SeparationDir = SeparationSum.GetSafeNormal();

	// Combine weighted steering.
	FVector Steer =
		CohesionDir * CohesionWeight +
		AlignmentDir * AlignmentWeight +
		SeparationDir * SeparationWeight;

	return Steer;
}

// KINEMATICS: Clamp acceleration + speed to keep fish motion stable
FVector AFishFlockManager::LimitVector(const FVector& V, float MaxLen)
{
	// Utility used to clamp acceleration and velocity magnitudes.
	const float LenSq = V.SizeSquared();
	if (LenSq <= MaxLen * MaxLen) return V;
	return V.GetSafeNormal() * MaxLen;
}

// WORLD CONSTRAINTS: Water volume clamp (keeps fish inside playable water)
bool AWaterFlockVolume::ConstrainInside(FVector& InOutPoint) const
{
	// Keeps simulated fish inside a water box (expanded inward to avoid edge jitter).
	const FBox Box = Bounds->Bounds.GetBox().ExpandBy(FVector(-10.f));

	InOutPoint.X = FMath::Clamp(InOutPoint.X, Box.Min.X, Box.Max.X);
	InOutPoint.Y = FMath::Clamp(InOutPoint.Y, Box.Min.Y, Box.Max.Y);
	InOutPoint.Z = FMath::Clamp(InOutPoint.Z, Box.Min.Z, Box.Max.Z);

	return true;
}

float AWaterFlockVolume::GetSurfaceZ() const
{
	// Supports fixed water surface height (designer control).
	if (bUseFixedSurfaceZ) return SurfaceZ;
	return Bounds ? Bounds->GetComponentLocation().Z : 0.f;
}

// DESIGNER-FACING SETTINGS: Boid tuning as a DataAsset
UCLASS(BlueprintType)
class UFishBoidSettings : public UDataAsset
{
	// Settings object allows designers to tune flock feel without touching code.
	// Also supports performance limits (MaxAgentsUpdatedPerFrame) and LOD distances.
public:
	float CohesionWeight = 0.8f;
	float AlignmentWeight = 0.6f;
	float SeparationWeight = 1.2f;
	float NeighborRadius = 350.f;
	float MaxSpeed = 280.f;

	int32 MaxAgentsUpdatedPerFrame = 800;
};

// TOOLING: Editor marker generation along water edge spline
#if WITH_EDITOR
void AWaterEdgePath::BuildMarkers()
{
	// Generates evenly spaced marker points along a spline (with jitter + bank offset).
	// Used for debugging / placement / potential fish feeding or boundary logic.
	MarkerPoints.Reset();
	MarkerViz->ClearInstances();

	const float SplineLen = Spline->GetSplineLength();
	const int32 Steps = FMath::Max(1, FMath::FloorToInt(SplineLen / FMath::Max(PointSpacing, 5.f)));

	for (int32 i = 0; i <= Steps; i++)
	{
		const float Dist = (SplineLen * i) / Steps;
		const FVector Pos = Spline->GetLocationAtDistanceAlongSpline(Dist, ESplineCoordinateSpace::World);

		const FVector Tangent = Spline->GetTangentAtDistanceAlongSpline(Dist, ESplineCoordinateSpace::World).GetSafeNormal();
		const FVector Right = FVector(-Tangent.Y, Tangent.X, 0.f).GetSafeNormal();

		// BankOffset pushes points slightly into the water + jitter adds organic variation.
		const FVector J(FMath::FRandRange(-Jitter, Jitter), FMath::FRandRange(-Jitter, Jitter), 0.f);
		const FVector P = Pos + Right * BankOffset + J;

		MarkerPoints.Add(P);

		if (MarkerMesh)
			MarkerViz->AddInstance(FTransform(FRotator::ZeroRotator, P, FVector(0.25f)));
	}

	MarkerViz->MarkRenderStateDirty();
}
#endif`
      },
      {
        title: 'Companion AI System (Fox)',
        content: 'I implemented a companion AI system designed to feel alive and supportive without requiring direct player control. It features clear separation between character and AI logic, waypoint-based navigation, and predictable behavior.',
        code: `// COMPANION AI SYSTEM (FOX)

// FoxWaypoint: simple “interaction radius” marker used as world guidance points
AFoxWaypoint::AFoxWaypoint()
{
	PrimaryActorTick.bCanEverTick = false;

	// Visual-only sphere so designers can see the waypoint radius in editor.
	RadiusViz = CreateDefaultSubobject<USphereComponent>(TEXT("SphereComponent"));
	SetRootComponent(RadiusViz);

	RadiusViz->InitSphereRadius(InteractionRadius);
	RadiusViz->SetCollisionEnabled(ECollisionEnabled::NoCollision);
}

// FoxCharacter: character holds designer-set collectables list, AI auto-possesses
AFoxCharacter::AFoxCharacter()
{
	// Guarantees the FoxAIController possesses the fox when placed/spawned.
	AIControllerClass = AFoxAIController::StaticClass();
	AutoPossessAI = EAutoPossessAI::PlacedInWorldOrSpawned;

	// Movement tuned for AI-driven companion movement (smooth + non-snappy).
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

	// Enables local avoidance so the fox slides around obstacles/characters.
	if (UCharacterMovementComponent* Move = GetCharacterMovement())
	{
		Move->SetAvoidanceEnabled(true);
	}
}

// FoxAIController: main behavior loop via timers (cheap + predictable)
void AFoxAIController::BeginPlay()
{
	Super::BeginPlay();

	// Timer-driven updates keep behavior consistent and avoid heavy Tick logic.
	GetWorldTimerManager().SetTimer(LeadTimer,  this, &AFoxAIController::TickLead,             UpdateInterval, true, 0.2f);
	GetWorldTimerManager().SetTimer(WanderTimer,this, &AFoxAIController::PickNewWanderTarget,  WanderRefreshInterval, true, 0.1f);
	GetWorldTimerManager().SetTimer(StillCheckTimer,this,&AFoxAIController::TickCheckPlayerStill, StillCheckInterval, true, 0.2f);
	GetWorldTimerManager().SetTimer(StuckCheckTimer,this,&AFoxAIController::CheckIfStuckOrTooFar, StuckCheckInterval, true, 1.0f);

	// Cache original materials so teleport dissolve can temporarily override them.
	if (APawn* Fox = GetPawn())
	{
		if (USkeletalMeshComponent* Mesh = Fox->FindComponentByClass<USkeletalMeshComponent>())
		{
			for (int32 i = 0; i < Mesh->GetNumMaterials(); i++)
				OriginalFoxMaterials.Add(Mesh->GetMaterial(i));
		}
		LastStuckCheckPosition = Fox->GetActorLocation();
	}
}

// Lead Behavior: compute a destination in front of player toward waypoint + wander offset
void AFoxAIController::TickLead()
{
	APawn* Fox = GetPawn();
	if (!Fox) return;

	// When teleporting, we only drive dissolve + anim updates (no movement).
	if (bIsTeleporting)
	{
		TickTeleportDissolve();
		UpdateAnimBP();
		return;
	}

	// Rest flow overrides normal movement until we reach the rest spot.
	if (bMovingToRest)
	{
		const float Dist = FVector::Dist(Fox->GetActorLocation(), RestTargetLocation);
		if (Dist > 100.f) MoveToLocation(RestTargetLocation, 10.f, true);
		else ArriveAtRestTarget();

		UpdateAnimBP();
		return;
	}

	// Fully resting = freeze movement, keep animations updated.
	if (bIsResting)
	{
		if (UCharacterMovementComponent* Move = Fox->FindComponentByClass<UCharacterMovementComponent>())
		{
			Move->StopMovementImmediately();
			Move->SetMovementMode(MOVE_None);
		}
		UpdateAnimBP();
		return;
	}

	// Smooth wander offset so companion doesn’t jitter side-to-side.
	CurrentWander = FMath::Vector2DInterpTo(CurrentWander, TargetWander, UpdateInterval, WanderLerpSpeed);

	FVector Dest;
	if (!ComputeLeadPoint(Dest)) return;

	// MoveTo keeps navigation robust, AcceptableRadius prevents micro-corrections.
	MoveToLocation(Dest, AcceptableRadius, true);

	UpdateAnimBP();
}

bool AFoxAIController::ComputeLeadPoint(FVector& OutPoint)
{
	ACharacter* Player = UGameplayStatics::GetPlayerCharacter(GetWorld(), 0);
	APawn* Fox = GetPawn();
	if (!Player || !Fox) return false;

	const FVector PlayerLoc = Player->GetActorLocation();

	// Default lead direction = player forward.
	// If we have a waypoint, lead direction becomes "player -> waypoint".
	FVector DirToGoal = Player->GetActorForwardVector();
	if (TargetWaypoint)
	{
		const FVector ToWp = TargetWaypoint->GetActorLocation() - PlayerLoc;
		if (!ToWp.IsNearlyZero()) DirToGoal = ToWp.GetSafeNormal();
	}

	// Build a stable right vector on ground plane for lateral offsets.
	const FVector Up = FVector::UpVector;
	FVector Right = FVector::CrossProduct(Up, DirToGoal).GetSafeNormal();
	if (Right.IsNearlyZero()) Right = FVector::RightVector;

	FVector Desired;

	// Playful mode = orbit around player to add personality.
	if (bIsPlayful)
	{
		OrbitAngleDeg += OrbitAngularSpeedDeg * UpdateInterval;
		const float A = FMath::DegreesToRadians(OrbitAngleDeg);

		const FVector OrbitOffset =
			DirToGoal * FMath::Cos(A) * OrbitRadius +
			Right     * FMath::Sin(A) * OrbitRadius;

		Desired = PlayerLoc + OrbitOffset;
		TryPlayfulJump();
	}
	else
	{
		// Normal mode = stay in front of player, plus smoothed wander offsets.
		Desired = PlayerLoc + DirToGoal * LeadDistance;
		Desired += DirToGoal * CurrentWander.X;
		Desired += Right     * CurrentWander.Y;
	}

	// Leash keeps fox from drifting too far from player (avoids losing companion).
	{
		const FVector Offset = Desired - PlayerLoc;
		const float Dist = Offset.Size();
		if (Dist > MaxLeash && Dist > KINDA_SMALL_NUMBER)
			Desired = PlayerLoc + (Offset / Dist) * MaxLeash;
	}

	// Project to NavMesh so MoveTo always gets a valid reachable point.
	if (UNavigationSystemV1* Nav = UNavigationSystemV1::GetCurrent(GetWorld()))
	{
		FNavLocation Projected;
		if (Nav->ProjectPointToNavigation(Desired, Projected, NavQueryExtent))
		{
			Desired = Projected.Location;
		}
		else
		{
			// Fallback around the goal direction if projection fails.
			const FVector TryA = PlayerLoc + (DirToGoal + Right).GetSafeNormal() * FMath::Min(LeadDistance, MaxLeash);
			const FVector TryB = PlayerLoc + (DirToGoal - Right).GetSafeNormal() * FMath::Min(LeadDistance, MaxLeash);

			if (Nav->ProjectPointToNavigation(TryA, Projected, NavQueryExtent)) Desired = Projected.Location;
			else if (Nav->ProjectPointToNavigation(TryB, Projected, NavQueryExtent)) Desired = Projected.Location;
			else Desired = PlayerLoc; // stand by player as last resort
		}
	}

	OutPoint = Desired;
	return true;
}

// Player-idle personality: cycle into Rest or Playful if player stands still
void AFoxAIController::TickCheckPlayerStill()
{
	ACharacter* Player = UGameplayStatics::GetPlayerCharacter(GetWorld(), 0);
	if (!Player) return;

	const bool bStanding = Player->GetVelocity().Size2D() < PlayerStillSpeedThreshold;

	// When player is idle, we start a periodic “still cycle” (rest or playful).
	if (bStanding)
	{
		if (!GetWorldTimerManager().IsTimerActive(StillCycleTimer))
		{
			GetWorldTimerManager().SetTimer(
				StillCycleTimer, this, &AFoxAIController::OnStillCycle,
				StillCyclePeriod, true, StillCyclePeriod);
		}
	}
	else
	{
		// Player moved => stop idle behavior immediately.
		GetWorldTimerManager().ClearTimer(StillCycleTimer);
		if (bIsPlayful) EndPlayful();
		if (bIsResting || bMovingToRest) { bMovingToRest = false; WakeUpFromRest(); }
	}
}

void AFoxAIController::OnStillCycle()
{
	if (bIsPlayful || bIsResting) return;

	// Randomize between resting and playful burst for variety.
	if (FMath::FRand() < 0.5f)
	{
		StartResting();
	}
	else
	{
		bIsPlayful = true;
		OrbitAngleDeg = 0.f;
		GetWorldTimerManager().SetTimer(PlayfulTimer, this, &AFoxAIController::EndPlayful, PlayfulDuration, false);
	}
}

// Self-recovery: teleport if too far or stuck + dissolve FX for polish
void AFoxAIController::CheckIfStuckOrTooFar()
{
	APawn* Fox = GetPawn();
	ACharacter* Player = UGameplayStatics::GetPlayerCharacter(GetWorld(), 0);
	if (!Fox || !Player) return;

	const float DistToPlayer = FVector::Dist(Fox->GetActorLocation(), Player->GetActorLocation());

	// Hard fail-safe if companion falls behind or gets blocked.
	if (DistToPlayer > TeleportDistance)
	{
		TeleportToPlayer();
		return;
	}

	// Detect “stuck” when player moves but fox position barely changes.
	const float Moved = FVector::Dist(Fox->GetActorLocation(), LastStuckCheckPosition);
	const bool bPlayerMoving = Player->GetVelocity().Size2D() > PlayerStillSpeedThreshold;

	if (bPlayerMoving && Moved < StuckDistanceThreshold && DistToPlayer > AcceptableRadius * 2.0f)
	{
		TeleportToPlayer();
		return;
	}

	LastStuckCheckPosition = Fox->GetActorLocation();
}

void AFoxAIController::TeleportToPlayer()
{
	APawn* Fox = GetPawn();
	if (!Fox) return;

	FVector TeleportLoc;
	if (!FindTeleportLocation(TeleportLoc)) return;

	// Spawn VFX at old + new positions for readability.
	if (TeleportEffect)
		UNiagaraFunctionLibrary::SpawnSystemAtLocation(GetWorld(), TeleportEffect, Fox->GetActorLocation());

	Fox->SetActorLocation(TeleportLoc);

	if (TeleportEffect)
		UNiagaraFunctionLibrary::SpawnSystemAtLocation(GetWorld(), TeleportEffect, TeleportLoc);

	// Reset movement + cancel “cute states” so we re-sync cleanly post-teleport.
	if (UCharacterMovementComponent* Move = Fox->FindComponentByClass<UCharacterMovementComponent>())
		Move->StopMovementImmediately();

	if (bIsResting || bMovingToRest) { bMovingToRest = false; WakeUpFromRest(); }
	if (bIsPlayful) EndPlayful();

	StartTeleportDissolve();
}

void AFoxAIController::StartTeleportDissolve()
{
	APawn* Fox = GetPawn();
	if (!Fox || !DissolveMaterial) return;

	USkeletalMeshComponent* Mesh = Fox->FindComponentByClass<USkeletalMeshComponent>();
	if (!Mesh) return;

	// Swap to a dynamic dissolve material, then animate DissolveAmount back to visible.
	FoxDissolveMaterial = UMaterialInstanceDynamic::Create(DissolveMaterial, this);
	for (int32 i = 0; i < Mesh->GetNumMaterials(); i++)
		Mesh->SetMaterial(i, FoxDissolveMaterial);

	FoxDissolveMaterial->SetScalarParameterValue(FName("DissolveAmount"), 1.0f); // start invisible
	bIsTeleporting = true;
	TeleportDissolveTimer = 0.f;
}`
      }
    ]
  },
  {
    id: 'plora',
    title: 'Plora',
    description: 'Plora is an endless-diver game where you pilot a repair drone to try to keep your spaceship-turned-submarine fueled and in good repair while you explore the depths of the ocean planet.',
    contributionSummary: 'UI Programmer – Gameplay UI systems, HUD logic, menu flow and feedback',
    image: ploraHeaderImg,
    homeImage: ploraHomeImg,
    time: '3 weeks',
    engine: 'Unity',
    language: 'C#',
    versionControl: 'GitHub',
    externalLink: 'https://futuregames.itch.io/plora',
    video: 'https://www.youtube.com/embed/1oeAm2Fegz4',
    gallery: [ploraGallery1, ploraGallery2, ploraGallery3, ploraGallery4, ploraGallery5, ploraGallery6],
    contributions: [
      'UI Navigation & Interaction System',
      'Dialogue System',
      'Responsive and smooth UI interactions',
      'Clear separation between UI logic and presentation',
      'Player-friendly navigation across multiple UI categories',
      'Dialogue systems designed for easy iteration and narrative expansion'
    ],
    contributionsGif: ploraUIShowcase,
    techOverview: 'Built in Unity using C# for all UI logic and dialogue flow systems, with Unity UI (UGUI) used for layout and visual presentation. My work focused exclusively on UI systems and dialogue mechanics, with a strong emphasis on responsive interactions and clear separation of concerns.',
    deepDives: [
      {
        title: 'UI Navigation & Interaction System',
        content: 'I designed and implemented the entire UI flow for the game, focusing on making all menus and screens feel responsive, readable, and smooth to navigate. The goal was to ensure that the player could move seamlessly between different UI categories without friction, confusion, or visual stutter. A central UI Manager controls which screens are active, while individual UI panels handle their own visuals and input states.',
        images: [ploraUI1, ploraUI2, ploraUI3, ploraUI4],
        code: `// --- MainMenu.cs ---
using System;
using System.Collections.Generic;
using DG.Tweening;
using Lumina.Essentials.Modules;
using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;

public class MainMenu : MonoBehaviour
{
    HighScoreManager highScoreManager;

    [Header("UI Elements")]
    [SerializeField]
    GameObject mainMenuPanel;
    public GameObject MainMenuPanel => mainMenuPanel;

    [SerializeField]
    GameObject pausePanel;
    public GameObject PausePanel => pausePanel;

    [SerializeField]
    GameObject gameOverPanel;
    public TextMeshProUGUI GameOverReasonText => gameOverReasonText;

    [SerializeField]
    TextMeshProUGUI gameOverReasonText;
    public GameObject GameOverPanel => gameOverPanel;

    [SerializeField]
    GameObject skipTutorialButton;


    [SerializeField]
    GameObject gradient;
    public GameObject Gradient => gradient;

    [SerializeField]
    GameObject scoreUI;
    public GameObject ScoreUI => scoreUI;

    [Header("Pause UIs")]
    [SerializeField]
    List<GameObject> pauseUIs;
    public List<GameObject> PauseUIs => pauseUIs;


    public GameObject SkipTutorialButton => skipTutorialButton;

    public void SetGameOverReason(string reason = "Hull Destroyed")
    {
        if (gameOverReasonText != null)
        {
            gameOverReasonText.text = reason;
        }
        else
        {
            Debug.LogWarning("GameOverReasonText is not assigned in the MainMenu!");
        }
    }

    public void OnBackButtonPressed()
    {
        switch (GameManager.Instance.state)
        {
            case GameManager.GameState.Menu:
                Debug.Log("Back button pressed in Menu state");
                mainMenuPanel.SetActive(true);
                pausePanel.SetActive(false);
                break;

            case GameManager.GameState.Pause:
                Debug.Log("Back button pressed in Play state");
                pausePanel.SetActive(true);
                mainMenuPanel.SetActive(false);
                GameManager.Instance.GameStateChanger(GameManager.GameState.Pause);
                break;

            default:
                break;
        }
    }
}

// --- OptionsMenu.cs ---
using UnityEngine;
using UnityEngine.Audio;
using UnityEngine.UI;
using TMPro;
using System.Collections.Generic;

public class OptionsMenu : MonoBehaviour
{ 
    //Audio
    [Header("Audio")]
    public TMP_Text masterLabel, musicLabel, sfxLabel;
    public Slider masterSlider, musicSlider, sfxSlider;

    //Resolution
    public List<Resolution> resolutions;

    [Header("Resolution")]
    public TMP_Dropdown resolutionDropdown;
    public Toggle fullscreenToggle;
    public Toggle vsyncToggle;

    //Graphics
    [Header("Graphics")]
    public TMP_Dropdown graphicsDropdown;
    public Slider brightnessSlider;
    public Toggle shadowsToggle;

    // UI Contexts
    [Header("Settings UI Contexts")]
    [SerializeField] GameObject mainMenuSettingsUI;
    [SerializeField] GameObject pauseMenuSettingsUI;

    private GameObject currentSettingsUI;

    void Start()
    {
        InitializeSettings();
    }

    void InitializeSettings()
    {
        // Audio Settings
        // Master Volume
        masterSlider.value = PlayerPrefs.GetFloat("MasterVol");
        masterLabel.text = Mathf.RoundToInt(masterSlider.value * 100).ToString();
        SetMasterMixerVolume(masterSlider.value);

        // Music Volume
        musicSlider.value = PlayerPrefs.GetFloat("MusicVol");
        musicLabel.text = Mathf.RoundToInt(musicSlider.value * 100).ToString();
        SetMusicMixerVolume(musicSlider.value);

        // SFX Volume
        sfxSlider.value = PlayerPrefs.GetFloat("SFXVol");
        sfxLabel.text = Mathf.RoundToInt(sfxSlider.value * 100).ToString();
        SetSFXMixerVolume(sfxSlider.value);

        // Resolution Settings
        resolutions = new List<Resolution>(Screen.resolutions);
        resolutionDropdown.ClearOptions();

        List<string> options = new List<string>();
        int currentResolutionIndex = 0;

        for (int i = 0; i < resolutions.Count; i++)
        {
            string option = resolutions[i].width + " x " + resolutions[i].height;
            options.Add(option);

            if (resolutions[i].width == Screen.currentResolution.width &&
                resolutions[i].height == Screen.currentResolution.height)
            {
                currentResolutionIndex = i;
            }
        }

        resolutionDropdown.AddOptions(options);
        resolutionDropdown.value = PlayerPrefs.GetInt("ResolutionIndex", currentResolutionIndex);
        resolutionDropdown.RefreshShownValue();
    }
    // ... (rest of implementation)
}

// --- ButtonHoverEffect.cs ---
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;
using TMPro;
using Unity.VisualScripting;

public class ButtonHoverEffect : MonoBehaviour, IPointerEnterHandler, IPointerExitHandler, IPointerClickHandler
{
    public TextMeshProUGUI buttonText;
    public Image leftArrow;
    public Image rightArrow;
    public Color normalColor;
    public Color hoverColor;

    bool isHovering = false;

    void Start()
    {
        leftArrow.enabled = false;
        rightArrow.enabled = false;
    }

    public void OnPointerEnter(PointerEventData eventData)
    {
        isHovering = true;
        SetHoverState(true);
    }

    public void OnPointerExit(PointerEventData eventData)
    {
        isHovering = false;
        SetHoverState(false);
    }

    public void OnPointerClick(PointerEventData eventData)
    {
        isHovering = false;
        SetHoverState(false);
    }

    void SetHoverState(bool isHovered)
    {
        buttonText.color = isHovered ? hoverColor : normalColor;
        leftArrow.enabled = isHovered;
        rightArrow.enabled = isHovered;
    }
}`
      },
      {
        title: 'Dialogue System',
        content: 'I implemented the game’s dialogue system, responsible for presenting narrative content to the player in a clear, engaging, and readable way. The system was built to support smooth text progression, clean transitions, and future narrative expansion without rewriting core logic. Dialogue data is structured separately from UI logic, ensuring that narrative logic and presentation never overlap unnecessarily.',
        code: `// --- DialogueSO.cs ---
using UnityEngine;

[CreateAssetMenu(fileName = "NewDialogue", menuName = "Scriptable Objects/DialogueSO")]
public class Dialogue : ScriptableObject
{
    [Tooltip("Array of all dialogue lines for this dialogue sequence")]
    public DialogueLine[] dialogueLines;
}

[System.Serializable]
public class DialogueLine
{
    [Tooltip("Name of the speaker for this line of dialogue")]
    public string speakerName; // Name of the speaker

    [Tooltip("Profile picture of the speaker (optional)")]
    public Texture speakerProfilePicture; // Profile picture of the speaker (optional)

    [Tooltip("The text to display for this line of dialogue")]
    [TextArea(3, 10)]
    public string dialogueText; // The text for the dialogue line

    [Tooltip("Voice-over audio clip for this line (optional)")]
    public AudioClip voiceOverClip; // VO line file (AudioClip)

    [Tooltip("Time in seconds to display this line")]
    public float timing; // Time in seconds to display this line
}

// --- DialogueManager.cs ---
using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEditor;
using UnityEngine;
using UnityEngine.UI;

public class DialogueManager : MonoBehaviour
{
    [Header("UI References")]
    [Tooltip("The entire UI panel for the dialogue system")]
    public GameObject dialogueUIPanel;

    [Tooltip("The text component where dialogue lines will be displayed")]
    public TMP_Text dialogueText;

    [Tooltip("The image component where the speaker's profile picture will be displayed")]
    public RawImage profileImage;

    [Tooltip("The audio source for playing voice-over clips")]
    public AudioSource dialogueAudioSource;

    [Tooltip("The image used to display static noise over the profile image")]
    public Image staticOverlayImage;

    [Tooltip("Static effect intensity")]
    [Range(0, 1)]
    public float staticIntensity = 0.5f;

    [Tooltip("Static effect duration in seconds")]
    public float staticEffectDuration = 0.2f;

    [Tooltip("The duration each glitch frame lasts")]
    public float glitchFrameDuration = 0.05f;

    [Tooltip("Typing duration modifier (0 = instant, 1 = full duration)")]
    [Range(0, 1)]
    public float typingDuration = 0.5f;

    private Queue<Dialogue> dialogueQueue = new Queue<Dialogue>();
    private Dialogue currentDialogue;
    private int currentLineIndex;
    private GameObject highlightedObject;

    [SerializeField]
    private Dialogue testDialogue;

    private void Start()
    {
        // Ensure the static overlay image is initially hidden
        if (staticOverlayImage != null)
        {
            Color initialOverlayColor = staticOverlayImage.color;
            initialOverlayColor.a = 0f;
            staticOverlayImage.color = initialOverlayColor;
            staticOverlayImage.gameObject.SetActive(true);
        }

        if (testDialogue != null)
        {
            StartDialogue(testDialogue);
        }
    }

    private void Update()
    {
        // Skip the current dialogue line when 'G' is pressed, but only in editor
        if (Application.isEditor && Input.GetKeyDown(KeyCode.G))
        {
            SkipDialogueLine();
        }
    }

    // Function to start dialogue
    public void StartDialogue(Dialogue dialogue, GameObject highlightTarget = null)
    {
        if (currentDialogue != null)
        {
            // If there's already a dialogue running, queue the new one
            dialogueQueue.Enqueue(dialogue);
        }
    }
}

// --- DialogueEvents.cs ---
using UnityEngine;

public class DialogueEvents : MonoBehaviour
{
    [SerializeField]
    private DialogueManager dialogueManager;

    // Dialogue SO for each sequence
    [SerializeField]
    private Dialogue introDialogue;

    [SerializeField]
    private Dialogue gameStartedDialogue;

    [SerializeField]
    private Dialogue firstPlayDialogue;

    [SerializeField]
    private Dialogue firstKelpDialogue;

    [SerializeField]
    private Dialogue firstRockDialogue;

    [SerializeField]
    private Dialogue rockHitsShipDialogue;

    [SerializeField]
    private Dialogue hullBreachPressureDialogue;

    [SerializeField]
    private Dialogue criticalHullDamageDialogue;

    [SerializeField]
    private Dialogue criticalFuelLevelDialogue;

    [SerializeField]
    private Dialogue criticalBatteryChargeLevelDialogue;

    [SerializeField]
    private Dialogue deathFromRunningOutOfFuelDialogue;

    [SerializeField]
    private Dialogue deathFromHullDestroyedDialogue;

    [SerializeField]
    private Dialogue lightsOutDialogue;

    [SerializeField]
    private Dialogue enterTheDeepDialogue;

    [SerializeField]
    private Dialogue hullRepairDialogue;

    [SerializeField]
    private Dialogue fuelRefillDialogue;

    [SerializeField]
    private Dialogue batteryChargeDialogue;

    [SerializeField]
    private Dialogue playerStunDialogue;

    [SerializeField]
    private Dialogue electricFishOnScreenDialogue;

    private void Awake()
    {
        if (dialogueManager == null)
        {
            dialogueManager = GetComponent<DialogueManager>();
        }
    }

    private void OnDestroy()
    {
        // Unsubscribe from GameManager events
        if (GameManager.Instance != null)
        {
            GameManager.Instance.OnIntro -= TriggerIntroDialogue;
            GameManager.Instance.OnPlay -= TriggerFirstPlayDialogue;
        }
    }
}`
      },
      {
        title: 'Game Systems (Controls & Audio)',
        content: 'I implemented robust systems for input management and audio control. The ControlManager handles key rebinding and persistence, while the AudioManager manages mixer groups and volume settings, ensuring a polished player experience.',
        code: `// --- ControlManager.cs ---
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class ControlManager : MonoBehaviour
{
    public TMP_Text downKeyText, upKeyText, rightKeyText, leftKeyText, dashKeyText, grabKeyText, repairKeyText;
    public Button downKeyButton, upKeyButton, rightKeyButton, leftKeyButton, dashKeyButton, grabKeyButton, repairKeyButton;

    Dictionary<string, KeyCode> keys = new Dictionary<string, KeyCode>();

    string keyRebind = null;

    Dictionary<string, KeyCode> defaultKeys = new Dictionary<string, KeyCode>
    {
        { "Up", KeyCode.W },
        { "Down", KeyCode.S },
        { "Left", KeyCode.A },
        { "Right", KeyCode.D },
        { "Dash", KeyCode.LeftShift },
        { "Grab", KeyCode.E },
        { "Repair", KeyCode.Space }
    };

    void Start()
    {
        // Load saved key bindings
        keys["Up"] = (KeyCode)System.Enum.Parse(typeof(KeyCode), PlayerPrefs.GetString("Up", KeyCode.W.ToString()));
        keys["Down"] = (KeyCode)System.Enum.Parse(typeof(KeyCode), PlayerPrefs.GetString("Down", KeyCode.S.ToString()));
        keys["Left"] = (KeyCode)System.Enum.Parse(typeof(KeyCode), PlayerPrefs.GetString("Left", KeyCode.A.ToString()));
        keys["Right"] = (KeyCode)System.Enum.Parse(typeof(KeyCode), PlayerPrefs.GetString("Right", KeyCode.D.ToString()));
        keys["Dash"] = (KeyCode)System.Enum.Parse(typeof(KeyCode), PlayerPrefs.GetString("Dash", KeyCode.LeftShift.ToString()));
        keys["Grab"] = (KeyCode)System.Enum.Parse(typeof(KeyCode), PlayerPrefs.GetString("Grab", KeyCode.E.ToString()));
        keys["Repair"] = (KeyCode)System.Enum.Parse(typeof(KeyCode), PlayerPrefs.GetString("Repair", KeyCode.Space.ToString()));

        downKeyButton.onClick.AddListener(() => RebindKey("Down"));
        upKeyButton.onClick.AddListener(() => RebindKey("Up"));
        leftKeyButton.onClick.AddListener(() => RebindKey("Left"));
        rightKeyButton.onClick.AddListener(() => RebindKey("Right"));
        dashKeyButton.onClick.AddListener(() => RebindKey("Dash"));
        grabKeyButton.onClick.AddListener(() => RebindKey("Grab"));
        repairKeyButton.onClick.AddListener(() => RebindKey("Repair"));

        UpdateUI();
    }

    void Update()
    {
        if (keyRebind != null && Input.anyKeyDown)
        {
            foreach (KeyCode key in System.Enum.GetValues(typeof(KeyCode)))
            {
                if (Input.GetKeyDown(key))
                {
                    keys[keyRebind] = key;
                    PlayerPrefs.SetString(keyRebind, key.ToString());
                    keyRebind = null;
                    UpdateUI();
                    break;
                }
            }
        }
    }

    void RebindKey(string action)
    {
        keyRebind = action;
    }

    void UpdateUI()
    {
        downKeyText.text = keys["Down"].ToString();
        upKeyText.text = keys["Up"].ToString();
        rightKeyText.text = keys["Right"].ToString();
        leftKeyText.text = keys["Left"].ToString();
        dashKeyText.text = keys["Dash"].ToString();
        grabKeyText.text = keys["Grab"].ToString();
        repairKeyText.text = keys["Repair"].ToString();
    }
}

// --- AudioManager.cs ---
using UnityEngine;
using UnityEngine.Audio;

public class AudioManager : MonoBehaviour
{
    public AudioMixer audioMixer;

    void Start()
    {
        if (PlayerPrefs.HasKey("MasterVol"))
        {
            audioMixer.SetFloat("MasterVol", PlayerPrefs.GetFloat("MasterVol"));
        }
        if (PlayerPrefs.HasKey("MusicVol"))
        {
            audioMixer.SetFloat("MusicVol", PlayerPrefs.GetFloat("MusicVol"));
        }
        if (PlayerPrefs.HasKey("SFXVol"))
        {
            audioMixer.SetFloat("SFXVol", PlayerPrefs.GetFloat("SFXVol"));
        }
    }
}`
      },
      {
        title: 'Progression & Scoring',
        content: 'I developed the scoring and high-score systems to track player progress across multiple metrics (depth, algae, repairs, etc.). The system uses PlayerPrefs for persistence and updates the UI in real-time.',
        code: `// --- ScoreManager.cs ---
using Lumina.Essentials.Modules;
using TMPro;
using UnityEngine;

public class ScoreManager : MonoBehaviour
{
    [Header("Current UI Elements")]
    [SerializeField] TextMeshProUGUI currentDepthScore;
    [SerializeField] TextMeshProUGUI currentAlgaeCollected;
    [SerializeField] TextMeshProUGUI currentHolesRepaired;
    [SerializeField] TextMeshProUGUI currentJellyfishCollected;
    [SerializeField] TextMeshProUGUI currentLifeformsScanned;

    [Header("Current Scores")]
    [SerializeField] int depthScore;
    public int DepthScore => depthScore;

    [SerializeField] int algaeCollected;
    public int AlgaeCollected => algaeCollected;

    [SerializeField] int holesRepaired;
    public int HolesRepaired => holesRepaired;

    [SerializeField] int jellyfishCollected;
    public int JellyfishCollected => jellyfishCollected;

    [SerializeField] int lifeformsScanned;
    public int LifeformsScanned => lifeformsScanned;

    public void Update()
    {
        currentDepthScore.text         = Train.Instance.DepthString;
        currentAlgaeCollected.text     = algaeCollected.ToString();
        currentHolesRepaired.text      = holesRepaired.ToString();
        currentJellyfishCollected.text = jellyfishCollected.ToString();
        currentLifeformsScanned.text   = lifeformsScanned.ToString();
    }

    public void AddDepthScore(int amount)
    {
        depthScore += amount;
    }

    public void AddAlgaeCollected(int amount)
    {
        algaeCollected += amount;
    }

    public void AddHolesRepaired(int amount)
    {
        holesRepaired += amount;
    }

    public void AddJellyfishCollected(int amount)
    {
        jellyfishCollected += amount;
    }

    public void AddLifeformsScanned(int amount)
    {
        lifeformsScanned += amount;
    }

    public void ResetGame()
    {
        depthScore = 0;
        algaeCollected = 0;
        holesRepaired = 0;
        jellyfishCollected = 0;
        lifeformsScanned = 0;
    }
}

// --- HighScoreManager.cs ---
using Lumina.Essentials.Modules;
using TMPro;
using UnityEngine;

public class HighScoreManager : MonoBehaviour
{
    ScoreManager scoreManager;

    [Header("High Score Text")]
    [SerializeField] TextMeshProUGUI highScoreDepthText;
    [SerializeField] TextMeshProUGUI highScoreAlgaeText;
    [SerializeField] TextMeshProUGUI highScoreRepairText;
    [SerializeField] TextMeshProUGUI highScoreJellyFishText;
    [SerializeField] TextMeshProUGUI highScoreLifeFormText;

    [Header("High Score Values")]
    [SerializeField] int highScoreDepth;

    [SerializeField] int highScoreAlgae;
    public int HighAlgaeCollected => highScoreAlgae;

    [SerializeField] int highScoreRepair;
    public int HighHolesRepaired => highScoreRepair;

    [SerializeField] int highScoreJellyFish;
    public int HighJellyfishCollected => highScoreJellyFish;

    [SerializeField] int highScoreLifeForm;
    public int HighLifeformsScanned => highScoreLifeForm;

    void Start()
    {
        scoreManager = GetComponent<ScoreManager>();
        LoadHighScores();
        highScoreDepthText.text     = highScoreDepthText.ToString();
        highScoreAlgaeText.text     = highScoreAlgae.ToString();
        highScoreRepairText.text    = highScoreRepair.ToString();
        highScoreJellyFishText.text = highScoreJellyFish.ToString();
        highScoreLifeFormText.text  = highScoreLifeForm.ToString();
    }

    public void SaveHighScores()
    {
        if (scoreManager.DepthScore > highScoreDepth) highScoreDepth = scoreManager.DepthScore;
        if (scoreManager.AlgaeCollected > highScoreAlgae) highScoreAlgae = scoreManager.AlgaeCollected;
        if (scoreManager.HolesRepaired > highScoreRepair) highScoreRepair = scoreManager.HolesRepaired;
        if (scoreManager.JellyfishCollected > highScoreJellyFish) highScoreJellyFish = scoreManager.JellyfishCollected;
        if (scoreManager.LifeformsScanned > highScoreLifeForm) highScoreLifeForm = scoreManager.LifeformsScanned;

        PlayerPrefs.SetInt("HighDepthScore", highScoreDepth);
        PlayerPrefs.SetInt("HighAlgaeCollected", highScoreAlgae);
        PlayerPrefs.SetInt("HighHolesRepaired", highScoreRepair);
        PlayerPrefs.SetInt("HighJellyfishCollected", highScoreJellyFish);
        PlayerPrefs.SetInt("HighLifeformsScanned", highScoreLifeForm);

        PlayerPrefs.Save();
    }
    private void LoadHighScores()
    {
        if (PlayerPrefs.HasKey("HighDepthScore")) { highScoreDepth = PlayerPrefs.GetInt("HighDepthScore", 0); }
        if (PlayerPrefs.HasKey("HighAlgaeCollected")) { highScoreAlgae = PlayerPrefs.GetInt("HighAlgaeCollected", 0); }
        if (PlayerPrefs.HasKey("HighHolesRepaired")) { highScoreRepair = PlayerPrefs.GetInt("HighHolesRepaired", 0); }
        if (PlayerPrefs.HasKey("HighJellyfishCollected")) { highScoreJellyFish = PlayerPrefs.GetInt("HighJellyfishCollected", 0); }
        if (PlayerPrefs.HasKey("HighLifeformsScanned")) { highScoreLifeForm = PlayerPrefs.GetInt("HighLifeformsScanned", 0); }
    }
}`
      }
    ]
  },
  {
    id: 'daggerbound',
    title: 'Daggerbound',
    description: 'Fast-paced rogue-like dungeon crawler.',
    contributionSummary: 'Gameplay Programmer – Character movement systems and animation state integration',
    image: daggerboundHeader,
    homeImage: daggerboundHomeImg,
    time: '4 weeks',
    engine: 'Unity',
    language: 'C#',
    versionControl: 'Perforce',
    externalLink: 'https://shahmuradov.itch.io/daggerbound',
    video: 'https://www.youtube.com/embed/j9DEZIbw0ys',
    gallery: [daggerboundGallery1, daggerboundGallery2, daggerboundGallery3, daggerboundGallery4],
    contributions: [
      'Modular architecture & Clear system ownership',
      'Gameplay-driven animation logic',
      'Scalable stat and progression systems',
      'XP and leveling system implementation',
      'Responsive player movement system',
      'Animation system integration'
    ],
    techOverview: 'Built in Unity using C# for all core gameplay systems, with Unity’s Animator and Inspector used for designer-facing configuration and rapid iteration.\n\nMy work focused on player-centric gameplay systems, with a strong emphasis on:\n• Modular architecture\n• Clear system ownership\n• Gameplay-driven animation logic\n• Scalable stat and progression systems\n\nThis project was developed over 4 weeks, using an iterative team workflow with Perforce for version control.',
    deepDives: [
      {
        title: 'Player Experience & Progression System (XPManager, PlayerStats)',
        content: 'I built a complete XP and leveling system to control player progression. It tracks XP from combat, handles level-ups, and scales stats like strength and health. The system is designed to be data-driven via the Inspector, making it easy for designers to tune the balance without touching code.',
        code: `public void AddXP(int amount)
{
    currentXP += amount;

    if (currentXP >= xpToNextLevel)
    {
        LevelUp();
    }
}

void LevelUp()
{
    level++;
    strength += strengthIncrease;
    maxHealth += healthIncrease;
}`
      },
      {
        title: 'Player Movement System (PlayerMovement)',
        content: 'I implemented a responsive movement system that prioritizes game feel. It reads input every frame and synchronizes directly with the Animator to ensure the character\'s visuals match their velocity, creating a smooth and grounded experience.',
        code: `Vector3 movement = new Vector3(inputX, 0, inputZ);
transform.Translate(movement * speed * Time.deltaTime);`
      },
      {
        title: 'Animation System Integration (Animator Controller Setup)',
        content: 'I set up the entire Animator Controller for players and enemies. This involved defining states, transitions, and parameters to ensure that every gameplay action—from attacking to taking damage—had clear, responsive visual feedback.'
      },
      {
        title: 'Combat System Prototyping (CombatManager – Early Prototype)',
        content: 'I prototyped the early combat manager to test different initiation styles. I experimented with scene-based versus in-world combat triggers to help the team decide on the best direction for the game\'s flow. Although this system was later refined, the prototype was crucial for establishing our combat direction.'
      },
      {
        title: 'Camera Prototyping (Camera Controller)',
        content: 'I created the initial camera controller to establish the game\'s top-down perspective. I iterated on angle and distance to find the sweet spot between visual clarity and atmosphere.'
      }
    ]
  },
  {
    id: 'tower-defence',
    title: 'Tower Defence Project',
    description: 'A Resource Management RTS Tower Defence game where you build and defend against nightly monster attacks.',
    contributionSummary: 'Gameplay Programmer – Grid PCG (Perlin noise), resource management, and systemic gameplay logic',
    image: towerDefenceImg,
    time: 'In Progress',
    engine: 'Unreal Engine 5.7',
    language: 'C++',
    versionControl: 'GitHub',
    contributions: [
      'PCG Grid System with Perlin Noise',
      'Grid-based Building System',
      'Resource Management Mechanics',
      'RTS Combat & Wave System'
    ],
    techOverview: 'Built in Unreal Engine 5.7 using C++. The project focuses on procedural generation, grid-based interaction, and RTS mechanics.',
    deepDives: [
      {
        title: 'PCG Grid System',
        content: 'I implemented a procedural grid system that uses Perlin noise to generate diverse terrain features, including water bodies and mountain ranges. This ensures that every map offers a unique strategic challenge.',
        code: '// Code coming soon!'
      },
      {
        title: 'Building System',
        content: 'I designed a robust grid-based building system that allows players to select from a list of structures (walls, towers, resource collectors) and place them on valid grid tiles. The system handles collision checking and resource costs.',
        code: '// Code coming soon!'
      },
      {
        title: 'RTS & Resource Management',
        content: 'The game combines Tower Defence with RTS elements. Players must manage resources during the day to build defenses, as they are attacked by waves of monsters every night. This cycle creates a compelling loop of expansion and defense.',
        code: '// Code coming soon!'
      }
    ]
  },
  {
    id: 'rogue-card',
    title: 'Rogue Card Project',
    description: 'A deck-building rogue-like with card-based combat.',
    contributionSummary: 'Gameplay Programmer – PCG systems, data-driven cards, and AI behavior tree implementation',
    image: rogueCardImg,
    time: 'In Progress',
    engine: 'Unreal Engine 5.6',
    language: 'C++ & Blueprint',
    versionControl: 'GitHub',
    contributions: [
      'Player Deck Component',
      'Enemy Deck Component',
      'AI System',
      'PCG Dungeon Build',
      'Phase Manager'
    ],
    techOverview: 'Built in Unreal Engine 5.6 using a hybrid C++ and Blueprint approach. I am responsible for all core systems, focusing on the card mechanics, AI logic, and procedural generation.',
    deepDives: [
      {
        title: 'Player Deck Component',
        content: 'I am developing a flexible deck component that handles card drawing, shuffling, and discarding. It supports dynamic deck modification during runtime.',
        code: '// Code coming soon!'
      },
      {
        title: 'Enemy Deck Component',
        content: 'Similar to the player deck, this component manages enemy actions. It is designed to be predictable yet challenging, with specific patterns for different enemy types.',
        code: '// Code coming soon!'
      },
      {
        title: 'AI System',
        content: 'The AI system evaluates the current board state to make intelligent decisions. It considers player health, card availability, and future turns.',
        code: '// Code coming soon!'
      },
      {
        title: 'PCG Dungeon Build',
        content: 'I am implementing a Procedural Content Generation system to create unique dungeon layouts for every run, ensuring high replayability.',
        code: '// Code coming soon!'
      },
      {
        title: 'Phase Manager',
        content: 'The Phase Manager controls the flow of combat, handling turn transitions, effect resolution, and win/loss conditions.',
        code: '// Code coming soon!'
      }
    ]
  }
];
