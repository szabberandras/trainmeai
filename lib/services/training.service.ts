import { 
  CoachPersona, 
  TrainingContext, 
  UserProfile, 
  CoachResponse, 
  TrainingPlan,
  ExperienceLevel 
} from '../types/training-system';
import { CoachPersonas, FitCoachAI, BeginnerGuideAI, SportSpecificAI, TrainingPageCoach } from '../types/coach';
import { PersonaSelectionService, PersonaSelectionResult } from './persona-selection.service';
import { OnboardingAnswers } from '@/app/components/onboarding/CinematicOnboarding';
import coachPersonas from '../data/coach-personas.json';
import trainingFlows from '../data/training-flows.json';
import trainingPrinciples from '../data/training-principles.json';

// PHASE 3: Import advanced services
import { PeriodizationService, PeriodizationPlan } from './PeriodizationService';
import { EnergySystemService, EnergySystemProfile } from './EnergySystemService';

export class TrainingService {
  private context: TrainingContext | null = null;
  private personaSelection: PersonaSelectionResult | null = null;
  // PHASE 3: Add advanced service state
  private periodizationPlan: PeriodizationPlan | null = null;
  private energySystemProfile: EnergySystemProfile | null = null;

  constructor() {}

  /**
   * Initialize context with automatic persona selection
   */
  public initializeContext(userProfile: UserProfile, onboardingAnswers?: OnboardingAnswers): void {
    // Auto-select persona if onboarding answers available
    if (onboardingAnswers) {
      this.personaSelection = PersonaSelectionService.selectPersona(onboardingAnswers);
      console.log('🤖 Persona Selection:', this.personaSelection);
    }

    this.context = {
      persona: this.personaSelection?.persona || 'FitCoach', // Default fallback
      userProfile,
      currentWeek: 1
    };

    // PHASE 3: Initialize advanced services
    this.initializeAdvancedServices(userProfile, onboardingAnswers);
  }

  /**
   * Initialize with specific persona (backward compatibility)
   */
  public initializeContextWithPersona(persona: CoachPersona, userProfile: UserProfile): void {
    this.context = {
      persona,
      userProfile,
      currentWeek: 1
    };

    // PHASE 3: Initialize advanced services
    this.initializeAdvancedServices(userProfile);
  }

  /**
   * PHASE 3: Initialize advanced periodization and energy system services
   */
  private initializeAdvancedServices(userProfile: UserProfile, onboardingAnswers?: OnboardingAnswers): void {
    try {
      // Extract experience level from persona selection or user profile
      const experienceLevel = this.getExperienceLevel(userProfile, onboardingAnswers);
      const primaryGoal = userProfile.goals[0] || 'general_fitness';
      const sportFocus = onboardingAnswers?.activity; // Use activity from onboarding
      const goalDate = onboardingAnswers?.activitySpecific?.eventDate ? new Date(onboardingAnswers.activitySpecific.eventDate) : undefined;

      // Create periodization plan
      this.periodizationPlan = PeriodizationService.createPeriodizationPlan(
        experienceLevel,
        primaryGoal,
        goalDate,
        sportFocus,
        this.context?.persona
      );

      // Create energy system profile
      this.energySystemProfile = EnergySystemService.assessEnergySystemProfile(
        primaryGoal,
        sportFocus,
        userProfile.experience, // Use experience from UserProfile
        [] // currentActivities - not available in current UserProfile type
      );

      console.log('🔬 Phase 3 Services Initialized:', {
        periodization: this.periodizationPlan?.macrocycle.phases,
        energySystem: this.energySystemProfile?.dominant_system
      });
    } catch (error) {
      console.warn('⚠️ Phase 3 services initialization failed:', error);
      // Continue without advanced services - graceful degradation
    }
  }

  /**
   * PHASE 3: Extract experience level from various sources
   */
  private getExperienceLevel(userProfile: UserProfile, onboardingAnswers?: OnboardingAnswers): ExperienceLevel {
    // From persona selection
    if (this.personaSelection?.safetyPriority) {
      // Map safety priority to experience level
      const safetyMap: Record<string, ExperienceLevel> = {
        'maximum': 'complete-beginner',
        'high': 'beginner-inconsistent',
        'moderate': 'amateur-regular',
        'standard': 'intermediate-structured',
        'athlete-managed': 'advanced-competitive'
      };
      return safetyMap[this.personaSelection.safetyPriority] || 'amateur-regular';
    }

    // From onboarding answers
    if (onboardingAnswers?.fitnessLevel) {
      const experienceMap: Record<string, ExperienceLevel> = {
        'beginner': 'complete-beginner',
        'some-experience': 'beginner-inconsistent',
        'regular': 'amateur-regular',
        'advanced': 'intermediate-structured'
      };
      return experienceMap[onboardingAnswers.fitnessLevel] || 'amateur-regular';
    }

    // From user profile fitness level
    if (userProfile.experience) {
      const fitnessMap: Record<string, ExperienceLevel> = {
        'beginner': 'complete-beginner',
        'intermediate': 'amateur-regular',
        'advanced': 'intermediate-structured'
      };
      return fitnessMap[userProfile.experience] || 'amateur-regular';
    }

    return 'amateur-regular'; // Safe default
  }

  public async generateResponse(userMessage: string): Promise<CoachResponse> {
    if (!this.context) {
      throw new Error('Training context not initialized');
    }

    const personas = coachPersonas as CoachPersonas;
    const persona = personas[this.context.persona];
    const response: CoachResponse = {
      message: '',
      nextQuestions: []
    };

    // Analyze user message for intent
    const intent = this.analyzeUserIntent(userMessage);
    
    switch (intent) {
      case 'initial_contact':
        response.message = this.generateInitialResponse();
        response.nextQuestions = this.getInitialQuestions();
        break;
      case 'check_in':
        response.message = this.generateCheckInResponse(userMessage);
        break;
      case 'request_plan':
        response.trainingPlan = await this.generateTrainingPlan();
        response.message = this.formatPlanPresentation(response.trainingPlan);
        break;
      default:
        response.message = this.generateFollowUpResponse(userMessage);
        break;
    }

    // Add persona-specific encouragement
    response.encouragement = this.getPersonaSpecificEncouragement();

    return response;
  }

  private analyzeUserIntent(message: string): string {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('start')) {
      return 'initial_contact';
    }
    if (lowerMessage.includes('plan') || lowerMessage.includes('program') || lowerMessage.includes('workout')) {
      return 'request_plan';
    }
    if (lowerMessage.includes('completed') || lowerMessage.includes('finished') || lowerMessage.includes('done')) {
      return 'check_in';
    }
    
    return 'general';
  }

  private async generateTrainingPlan(): Promise<TrainingPlan> {
    // Enhanced plan generation with persona-specific approach
    const baseTemplate = this.getTrainingTemplate(this.context!.userProfile);
    
    // PHASE 3: Apply advanced periodization and energy system planning
    const enhancedPlan = this.applyAdvancedPlanningServices(baseTemplate);
    
    // Apply persona-specific modifications
    const finalPlan = this.applyPersonaSpecificEnhancements(enhancedPlan);
    
    return finalPlan;
  }

  /**
   * PHASE 3: Apply advanced periodization and energy system services to training plan
   */
  private applyAdvancedPlanningServices(basePlan: any): any {
    if (!this.periodizationPlan || !this.energySystemProfile) {
      console.log('📋 Using basic plan generation (Phase 3 services not available)');
      return basePlan;
    }

    console.log('🔬 Applying Phase 3 advanced planning services');

    // Get current training recommendations from periodization
    const periodizationRecommendations = PeriodizationService.getCurrentTrainingRecommendations(this.periodizationPlan);
    
    // Create energy system specific workout
    const energySystemWorkout = EnergySystemService.createEnergySystemWorkout(
      this.energySystemProfile.dominant_system,
      this.energySystemProfile,
      45 // Default session duration
    );

    // Enhanced plan with Phase 3 intelligence
    return {
      ...basePlan,
      name: `${basePlan.name || 'Training Plan'} - ${this.periodizationPlan.currentMesocycle.phase.charAt(0).toUpperCase() + this.periodizationPlan.currentMesocycle.phase.slice(1)} Phase`,
      periodization_phase: this.periodizationPlan.currentMesocycle.phase,
      energy_system_focus: this.energySystemProfile.dominant_system,
      intensity_distribution: this.periodizationPlan.currentMesocycle.intensity_distribution,
      training_recommendations: periodizationRecommendations,
      energy_system_workout: energySystemWorkout,
      progression_strategy: this.periodizationPlan.progressionStrategy,
      recovery_protocols: this.periodizationPlan.currentMesocycle.recovery_protocols
    };
  }

  private applyPersonaSpecificEnhancements(basePlan: any): TrainingPlan {
    const persona = this.context!.persona;
    
    switch (persona) {
      case 'BeginnerGuide':
        return this.applyBeginnerSafetyEnhancements(basePlan);
      case 'SportSpecific':
        return this.applySportSpecificEnhancements(basePlan);
      case 'TrainingPage':
        return this.applyMinimalistEnhancements(basePlan);
      default:
        return this.applyFitCoachEnhancements(basePlan);
    }
  }

  private applyBeginnerSafetyEnhancements(basePlan: any): TrainingPlan {
    // Apply beginner safety protocols from training principles
    const beginnerPrinciples = (trainingPrinciples as any).beginner_specific_principles;
    
    return {
      name: `Beginner-Safe ${basePlan.name || 'Training Plan'}`,
      type: 'beginner_focused',
      approach: 'safety_first_progression',
      weeks: [{
        weekNumber: 1,
        startDate: new Date().toISOString().split('T')[0],
        workouts: [{
          id: 1,
          day: 'Monday',
          type: 'movement_foundation',
          title: 'Movement Foundation',
          summary: 'Focus on form mastery and building confidence. Every expert was once a beginner!',
          intensity: 50, // Conservative intensity
          details: {
            duration_minutes: 30,
            notes: 'Form first, weight second - always!',
            exercises: [
              {
                name: 'Bodyweight Squats',
                sets: '2',
                reps: '8-10',
                notes: 'Master form before adding complexity'
              }
            ]
          }
        }]
      }]
    };
  }

  private applySportSpecificEnhancements(basePlan: any): TrainingPlan {
    // Apply sport-specific programming with energy system focus
    const sportApplications = (trainingPrinciples as any).sport_specific_applications;
    
    return {
      name: `Sport-Specific ${basePlan.name || 'Training Plan'}`,
      type: 'sport_specific',
      approach: 'energy_system_focused',
      weeks: [{
        weekNumber: 1,
        startDate: new Date().toISOString().split('T')[0],
        workouts: [{
          id: 1,
          day: 'Monday',
          type: 'energy_system_training',
          title: 'Aerobic Base Development',
          summary: 'Building your aerobic foundation - this is where champions are made.',
          intensity: 70,
          details: {
            duration_minutes: 45,
            pace_guidance: 'Conversational pace',
            notes: 'Build aerobic base - increase duration by 10% weekly',
            exercises: [
              {
                name: 'Long Run',
                sets: '1',
                reps: '30 minutes',
                notes: 'Conversational pace, build aerobic base'
              }
            ]
          }
        }]
      }]
    };
  }

  private applyMinimalistEnhancements(basePlan: any): TrainingPlan {
    return {
      name: `Daily Focus ${basePlan.name || 'Training'}`,
      type: 'minimalist',
      approach: 'daily_focused',
      weeks: [{
        weekNumber: 1,
        startDate: new Date().toISOString().split('T')[0],
        workouts: [{
          id: 1,
          day: 'Monday',
          type: 'focused_training',
          title: 'Daily Focus',
          summary: 'Simple. Effective. Consistent.',
          intensity: 65,
          details: {
            duration_minutes: 20,
            notes: 'Quality over quantity. Build something good.',
            exercises: [
              {
                name: 'Squats',
                sets: '3',
                reps: '10',
                notes: 'Focus on depth and control'
              }
            ]
          }
        }]
      }]
    };
  }

  private applyFitCoachEnhancements(basePlan: any): TrainingPlan {
    return {
      name: `Comprehensive ${basePlan.name || 'Training Plan'}`,
      type: 'comprehensive',
      approach: 'science_based_progression',
      weeks: [{
        weekNumber: 1,
        startDate: new Date().toISOString().split('T')[0],
        workouts: [{
          id: 1,
          day: 'Monday',
          type: 'strength_training',
          title: 'Foundation Strength',
          summary: 'Building strength through progressive overload and scientific principles.',
          intensity: 75,
          details: {
            duration_minutes: 45,
            notes: 'Progressive overload with proper form',
            exercises: [
              {
                name: 'Squats',
                sets: '3',
                reps: '8-12',
                notes: 'Increase weight when all reps completed'
              }
            ]
          }
        }]
      }]
    };
  }

  private generateInitialResponse(): string {
    const personas = coachPersonas as CoachPersonas;
    const persona = personas[this.context!.persona];
    
    switch (this.context!.persona) {
      case 'BeginnerGuide':
        const beginnerGuide = persona as BeginnerGuideAI;
        return `Hi there! I'm ${beginnerGuide.name}, and I'm here to be your protective guide on this fitness journey. ${beginnerGuide.core_mission} Let's start exactly where you are - that takes real courage!`;
        
      case 'SportSpecific':
        const sportSpecific = persona as SportSpecificAI;
        return `Hello! I'm ${sportSpecific.name}, your sport science expert. I specialize in energy system training and periodization. Let's optimize your performance with precision and science.`;
        
      case 'TrainingPage':
        const trainingPage = persona as TrainingPageCoach;
        return `Hey. Let's keep this simple and focused. What's on your mind for training today?`;
        
      default: // FitCoach
        const fitCoach = persona as FitCoachAI;
        return `Hi! I'm ${fitCoach.name} with ${fitCoach.experience}. I'm excited to help you achieve your fitness goals with science-backed programming. Let's start by understanding where you are and where you want to go.`;
    }
  }

  private getInitialQuestions(): string[] {
    switch (this.context!.persona) {
      case 'BeginnerGuide':
        return [
          "Have you done any structured exercise before?",
          "Any previous injuries or current pain we should know about?",
          "What does 'getting in shape' mean to you?",
          "How much time can you realistically commit?"
        ];
        
      case 'SportSpecific':
        return [
          "What's your primary sport or activity?",
          "What training phase are you currently in?",
          "What are your specific performance goals?",
          "How many days per week can you train?"
        ];
        
      case 'TrainingPage':
        return ["How are you feeling today?"];
        
      default: // FitCoach
        return [
          "What specific fitness goals are you working towards?",
          "How many days per week can you commit to training?",
          "Do you have any injuries or physical limitations I should know about?",
          "What equipment do you have access to?"
        ];
    }
  }

  private getTrainingTemplate(profile: UserProfile): any {
    // Implementation would match user profile to appropriate training flow
    const flows = trainingFlows as any;
    return flows.goals[profile.goals[0]];
  }

  private formatPlanPresentation(plan: TrainingPlan): string {
    switch (this.context!.persona) {
      case 'BeginnerGuide':
        return `🌱 Here's your beginner-safe plan:\n\n${plan.name}\n\nRemember: Form first, weight second - always! We're building a foundation that will last.`;
        
      case 'SportSpecific':
        return `🎯 Here's your sport-specific training plan:\n\n${plan.name}\n\nThis targets your specific energy systems and performance demands.`;
        
      case 'TrainingPage':
        return `For today:\n\n${plan.name}\n\nSimple. Effective.`;
        
      default: // FitCoach
        return `Here's your detailed training plan for Week ${this.context!.currentWeek}:\n\n${plan.name}\n\nThis program applies progressive overload and periodization principles.`;
    }
  }

  private generateCheckInResponse(message: string): string {
    switch (this.context!.persona) {
      case 'BeginnerGuide':
        return "Amazing work completing your session! Every workout makes you stronger. How did that feel for you?";
        
      case 'SportSpecific':
        return "Excellent work! Your body is adapting to the training stimulus. Let's analyze your performance data.";
        
      case 'TrainingPage':
        return "Solid work. How did that feel?";
        
      default: // FitCoach
        return "Great job on completing your workout! Let's analyze how it went and plan your next session.";
    }
  }

  private generateFollowUpResponse(message: string): string {
    switch (this.context!.persona) {
      case 'BeginnerGuide':
        return "Thanks for sharing that! I'm here to support you every step of the way. Safety and progress go hand in hand.";
        
      case 'SportSpecific':
        return "Excellent feedback. This information helps me optimize your energy system training and periodization.";
        
      case 'TrainingPage':
        return "Got it. Let's work with that.";
        
      default: // FitCoach
        return "Thanks for sharing that information. It helps me customize your program with better scientific precision.";
    }
  }

  private getPersonaSpecificEncouragement(): string {
    const personas = coachPersonas as CoachPersonas;
    const persona = personas[this.context!.persona];
    
    // Get encouragement based on persona type
    let encouragements: string[] = [];
    
    switch (this.context!.persona) {
      case 'BeginnerGuide':
        const beginnerGuide = persona as BeginnerGuideAI;
        encouragements = beginnerGuide.responsePatterns.confidence_building;
        break;
        
      case 'SportSpecific':
        const sportSpecific = persona as SportSpecificAI;
        encouragements = sportSpecific.responsePatterns.sport_analysis;
        break;
        
      default:
        encouragements = persona.responsePatterns.encouragement;
        break;
    }
    
    return encouragements[Math.floor(Math.random() * encouragements.length)];
  }

  private formatWorkouts(workouts: any[]): string {
    return workouts.map(workout => `${workout.day}: ${workout.title}`).join('\n');
  }

  public updateProgress(metrics: Record<string, number>): void {
    if (!this.context) {
      throw new Error('Training context not initialized');
    }
    this.context.progressMetrics = {
      ...this.context.progressMetrics,
      ...metrics
    };
  }

  public recordCheckIn(feedback: string, adjustments?: string[]): void {
    if (!this.context) {
      throw new Error('Training context not initialized');
    }
    this.context.lastCheckIn = {
      date: new Date().toISOString(),
      feedback,
      adjustments
    };
  }

  /**
   * PHASE 3: Analyze progress using advanced energy system analysis
   */
  public analyzeProgressWithAdvancedServices(recentWorkouts: any[], userFeedback: any): any {
    if (!this.energySystemProfile) {
      console.log('📊 Using basic progress analysis (Phase 3 services not available)');
      return this.getBasicProgressAnalysis(userFeedback);
    }

    console.log('🔬 Analyzing progress with Phase 3 energy system intelligence');
    
    return EnergySystemService.analyzeEnergySystemProgress(
      this.energySystemProfile,
      recentWorkouts,
      userFeedback
    );
  }

  /**
   * PHASE 3: Get current periodization recommendations
   */
  public getCurrentPeriodizationGuidance(): any {
    if (!this.periodizationPlan) {
      return {
        phase: 'general',
        focus: 'balanced_training',
        intensity_guidance: 'moderate',
        volume_guidance: 'progressive'
      };
    }

    return PeriodizationService.getCurrentTrainingRecommendations(this.periodizationPlan);
  }

  /**
   * PHASE 3: Update training plan based on progress and periodization
   */
  public updateTrainingPlanWithAdvancedServices(progressData: any): TrainingPlan | null {
    if (!this.periodizationPlan || !this.energySystemProfile) {
      console.log('📋 Using basic plan updates (Phase 3 services not available)');
      return null;
    }

    // This would implement plan updates based on periodization phase transitions
    // and energy system progress analysis
    console.log('🔄 Updating plan with Phase 3 advanced services');
    
    // For now, return null to indicate advanced update is available but not implemented
    // This would be expanded in a full implementation
    return null;
  }

  /**
   * Basic progress analysis fallback
   */
  private getBasicProgressAnalysis(userFeedback: any): any {
    return {
      progress_summary: 'Making steady progress with current training approach',
      adaptations_occurring: ['general_fitness_improvement'],
      recommendations: ['continue_current_program', 'focus_on_consistency'],
      next_focus: 'mixed'
    };
  }

  /**
   * PHASE 3: Get advanced training insights for dashboard
   */
  public getAdvancedTrainingInsights(): any {
    if (!this.periodizationPlan || !this.energySystemProfile) {
      return {
        current_phase: 'General Training',
        energy_focus: 'Mixed Systems',
        next_milestone: 'Continue building fitness base',
        periodization_status: 'Basic progression'
      };
    }

    return {
      current_phase: `${this.periodizationPlan.currentMesocycle.phase.charAt(0).toUpperCase() + this.periodizationPlan.currentMesocycle.phase.slice(1)} Phase`,
      energy_focus: `${this.energySystemProfile.dominant_system.charAt(0).toUpperCase() + this.energySystemProfile.dominant_system.slice(1)} System`,
      next_milestone: `Phase transition in ${this.periodizationPlan.currentMesocycle.duration_weeks} weeks`,
      periodization_status: `Week ${this.context?.currentWeek || 1} of ${this.periodizationPlan.currentMesocycle.duration_weeks}`,
      intensity_distribution: this.periodizationPlan.currentMesocycle.intensity_distribution,
      recovery_protocols: this.periodizationPlan.currentMesocycle.recovery_protocols.map(p => p.type).join(', ')
    };
  }
} 