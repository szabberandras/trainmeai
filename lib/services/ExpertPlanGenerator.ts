// lib/services/ExpertPlanGenerator.ts - Expert Plan Generation with Evidence-Based Personalization

import { Exercise } from '@/types/templates';
import { OnboardingAnswers, UserPersonalization } from '@/app/components/onboarding/CinematicOnboarding';
import { EXERCISE_DATABASE } from '@/lib/exercises/categories';

export interface ExerciseHierarchy {
  exerciseId: string;
  priority: 'foundational' | 'primary' | 'secondary' | 'accessory' | 'specialized';
  effectiveness_score: number; // 1-10
  muscle_group_priority: {
    [muscleGroup: string]: number; // 1-10 for each muscle group
  };
  movement_pattern_rank: number; // 1-10 for movement quality
  beginner_friendly: boolean;
  equipment_accessibility: number; // 1-10 (higher = more accessible)
  injury_risk: 'low' | 'moderate' | 'high';
  scientific_backing: number; // 1-10 based on research
  user_preference_weight: number; // How much user preference can override science
}

export interface ExpertKnowledgeBase {
  // Universal Exercise Science Principles (Non-negotiable)
  universalPrinciples: {
    progressiveOverload: {
      required: boolean;
      methods: string[];
      timeframes: string[];
    };
    recoveryRequirements: {
      minimum_rest_days: number;
      sleep_requirements: string;
      nutrition_timing: string[];
    };
    safetyProtocols: {
      warmup_requirements: string[];
      form_priorities: string[];
      progression_limits: string[];
    };
    movementPatterns: {
      essential_patterns: string[];
      balance_requirements: string[];
      frequency_guidelines: string[];
    };
  };
  
  // Evidence-Based Exercise Selection Rules
  exerciseSelectionRules: {
    foundational_minimum: number; // % of plan that must be foundational
    primary_target: number; // % that should be primary exercises
    user_preference_allowance: number; // % that can be user preference driven
    safety_override: boolean; // Can safety concerns override user preferences
  };
  
  // Sport/Goal Specific Knowledge
  sportSpecificKnowledge: {
    [sport: string]: {
      energy_systems: string[];
      movement_priorities: string[];
      injury_prevention_focus: string[];
      performance_metrics: string[];
    };
  };
}

export interface UserPersonalizationProfile {
  // From onboarding data
  activity: string;
  fitnessLevel: string;
  timeCommitment: string;
  equipment: string[];
  goals: string;
  
  // Derived preferences
  preferredExercises: string[];
  dislikedExercises: string[];
  injuryHistory: string[];
  motivationalFactors: string[];
  
  // Contextual factors
  environment: string;
  schedule: string[];
  lifestyle_factors: string[];
}

export class ExpertPlanGenerator {
  private static knowledgeBase: ExpertKnowledgeBase = {
    universalPrinciples: {
      progressiveOverload: {
        required: true,
        methods: ['volume', 'intensity', 'frequency', 'complexity'],
        timeframes: ['weekly', 'monthly', 'quarterly']
      },
      recoveryRequirements: {
        minimum_rest_days: 1,
        sleep_requirements: '7-9 hours',
        nutrition_timing: ['pre-workout', 'post-workout', 'daily']
      },
      safetyProtocols: {
        warmup_requirements: ['dynamic_movement', 'activation', 'preparation'],
        form_priorities: ['movement_quality', 'range_of_motion', 'control'],
        progression_limits: ['10_percent_rule', 'pain_free', 'form_maintenance']
      },
      movementPatterns: {
        essential_patterns: ['squat', 'hinge', 'push', 'pull', 'carry', 'gait'],
        balance_requirements: ['bilateral', 'unilateral', 'multi_planar'],
        frequency_guidelines: ['2-3x_per_week_minimum', 'pattern_rotation']
      }
    },
    exerciseSelectionRules: {
      foundational_minimum: 60, // 60% must be foundational/primary
      primary_target: 80, // 80% should be foundational + primary
      user_preference_allowance: 20, // 20% can be pure preference
      safety_override: true // Safety always wins
    },
    sportSpecificKnowledge: {
      'running': {
        energy_systems: ['aerobic', 'lactate_threshold', 'neuromuscular'],
        movement_priorities: ['running_economy', 'injury_prevention', 'strength_endurance'],
        injury_prevention_focus: ['hip_stability', 'ankle_mobility', 'core_strength'],
        performance_metrics: ['pace', 'heart_rate', 'cadence', 'power']
      },
      'strength-training': {
        energy_systems: ['phosphocreatine', 'glycolytic'],
        movement_priorities: ['compound_movements', 'progressive_overload', 'movement_quality'],
        injury_prevention_focus: ['joint_stability', 'muscle_balance', 'mobility'],
        performance_metrics: ['1RM', 'volume', 'power_output', 'form_quality']
      }
      // Add more sports...
    }
  };

  /**
   * Generate expert plan that balances science with user preferences
   */
  static generateExpertPlan(
    userPersonalization: UserPersonalization,
    conversationHistory: any[]
  ): ExpertPlanRecommendation {
    
    // Step 1: Extract user profile from all available data
    const userProfile = this.buildUserProfile(userPersonalization, conversationHistory);
    
    // Step 2: Apply evidence-based exercise selection
    const exerciseSelection = this.selectExercisesWithHierarchy(userProfile);
    
    // Step 3: Create personalized adaptations within scientific bounds
    const personalizedAdaptations = this.applyPersonalizedAdaptations(exerciseSelection, userProfile);
    
    // Step 4: Generate expert rationale and alternatives
    const expertRationale = this.generateExpertRationale(personalizedAdaptations, userProfile);
    
    return {
      exercises: personalizedAdaptations,
      scientificRationale: expertRationale,
      userPersonalizationFactors: this.getUserPersonalizationFactors(userProfile),
      alternatives: this.generateAlternatives(personalizedAdaptations, userProfile),
      progressionPlan: this.createProgressionPlan(personalizedAdaptations, userProfile)
    };
  }

  /**
   * Build comprehensive user profile from all available data
   */
  private static buildUserProfile(
    userPersonalization: UserPersonalization,
    conversationHistory: any[]
  ): UserPersonalizationProfile {
    
    const onboardingData = userPersonalization.onboardingAnswers;
    
    // Extract explicit preferences from conversation
    const conversationPreferences = this.extractPreferencesFromConversation(conversationHistory);
    
    // Derive implicit preferences from onboarding choices
    const implicitPreferences = this.deriveImplicitPreferences(onboardingData);
    
    return {
      // Core data
      activity: onboardingData?.activity || 'general',
      fitnessLevel: onboardingData?.fitnessLevel || 'beginner',
      timeCommitment: onboardingData?.timeCommitment || '30-45 minutes',
      equipment: onboardingData?.equipment || [],
      goals: onboardingData?.goal || 'general fitness',
      
      // Derived preferences
      preferredExercises: [...conversationPreferences.liked, ...implicitPreferences.preferred],
      dislikedExercises: [...conversationPreferences.disliked, ...implicitPreferences.avoided],
      injuryHistory: conversationPreferences.injuries || [],
      motivationalFactors: this.identifyMotivationalFactors(userPersonalization, conversationHistory),
      
      // Context
      environment: onboardingData?.location || 'gym',
      schedule: onboardingData?.preferredDays || [],
      lifestyle_factors: this.extractLifestyleFactors(conversationHistory)
    };
  }

  /**
   * Select exercises using evidence-based hierarchy with user preferences
   */
  private static selectExercisesWithHierarchy(userProfile: UserPersonalizationProfile): Exercise[] {
    const availableExercises = Object.values(EXERCISE_DATABASE);
    const exerciseHierarchy = this.getExerciseHierarchy();
    
    // Step 1: Ensure foundational exercises (non-negotiable)
    const foundationalExercises = this.selectFoundationalExercises(
      availableExercises, 
      exerciseHierarchy, 
      userProfile
    );
    
    // Step 2: Add primary exercises based on goals and preferences
    const primaryExercises = this.selectPrimaryExercises(
      availableExercises,
      exerciseHierarchy,
      userProfile,
      foundationalExercises
    );
    
    // Step 3: Fill remaining slots with user preferences (within safety bounds)
    const preferenceExercises = this.selectPreferenceExercises(
      availableExercises,
      exerciseHierarchy,
      userProfile,
      [...foundationalExercises, ...primaryExercises]
    );
    
    return [...foundationalExercises, ...primaryExercises, ...preferenceExercises];
  }

  /**
   * Apply personalized adaptations while maintaining scientific integrity
   */
  private static applyPersonalizedAdaptations(
    selectedExercises: Exercise[],
    userProfile: UserPersonalizationProfile
  ): Exercise[] {
    
    return selectedExercises.map(exercise => {
      // Adapt sets/reps based on user level and goals
      const adaptedSetsReps = this.adaptSetsReps(exercise, userProfile);
      
      // Modify intensity based on user preferences and safety
      const adaptedIntensity = this.adaptIntensity(exercise, userProfile);
      
      // Add user-specific coaching cues
      const personalizedCues = this.addPersonalizedCues(exercise, userProfile);
      
      return {
        ...exercise,
        sets: adaptedSetsReps.sets,
        reps: adaptedSetsReps.reps,
        intensity: adaptedIntensity,
        coaching_cues: [...exercise.instructions, ...personalizedCues],
        personalization_rationale: this.getPersonalizationRationale(exercise, userProfile)
      };
    });
  }

  /**
   * Generate expert rationale explaining the science behind selections
   */
  private static generateExpertRationale(
    exercises: Exercise[],
    userProfile: UserPersonalizationProfile
  ): string {
    
    const scientificPrinciples = this.identifyAppliedPrinciples(exercises);
    const userAdaptations = this.identifyUserAdaptations(exercises, userProfile);
    const safetyConsiderations = this.identifySafetyConsiderations(exercises, userProfile);
    
    return `
EXPERT PLAN RATIONALE:

SCIENTIFIC FOUNDATION:
${scientificPrinciples.map(principle => `• ${principle}`).join('\n')}

USER-SPECIFIC ADAPTATIONS:
${userAdaptations.map(adaptation => `• ${adaptation}`).join('\n')}

SAFETY CONSIDERATIONS:
${safetyConsiderations.map(safety => `• ${safety}`).join('\n')}

This plan balances evidence-based exercise selection with your specific preferences, 
ensuring optimal results while maintaining safety and adherence.
    `;
  }

  // Helper methods would be implemented here...
  private static extractPreferencesFromConversation(conversationHistory: any[]): any {
    // Analyze conversation for exercise preferences, dislikes, injuries, etc.
    return {
      liked: [],
      disliked: [],
      injuries: []
    };
  }

  private static deriveImplicitPreferences(onboardingData: any): any {
    // Derive preferences from onboarding choices
    return {
      preferred: [],
      avoided: []
    };
  }

  private static identifyMotivationalFactors(userPersonalization: any, conversationHistory: any[]): string[] {
    // Identify what motivates the user based on their responses
    return [];
  }

  private static extractLifestyleFactors(conversationHistory: any[]): string[] {
    // Extract lifestyle factors that affect training
    return [];
  }

  private static getExerciseHierarchy(): { [exerciseId: string]: ExerciseHierarchy } {
    // Return the exercise hierarchy mapping
    return {};
  }

  private static selectFoundationalExercises(exercises: Exercise[], hierarchy: any, userProfile: any): Exercise[] {
    // Select foundational exercises based on hierarchy and user profile
    return [];
  }

  private static selectPrimaryExercises(exercises: Exercise[], hierarchy: any, userProfile: any, existing: Exercise[]): Exercise[] {
    // Select primary exercises
    return [];
  }

  private static selectPreferenceExercises(exercises: Exercise[], hierarchy: any, userProfile: any, existing: Exercise[]): Exercise[] {
    // Select preference-based exercises
    return [];
  }

  private static adaptSetsReps(exercise: Exercise, userProfile: any): { sets: number; reps: string } {
    // Adapt sets and reps based on user profile
    return { sets: 3, reps: '8-12' };
  }

  private static adaptIntensity(exercise: Exercise, userProfile: any): string {
    // Adapt intensity based on user profile
    return 'moderate';
  }

  private static addPersonalizedCues(exercise: Exercise, userProfile: any): string[] {
    // Add personalized coaching cues
    return [];
  }

  private static getPersonalizationRationale(exercise: Exercise, userProfile: any): string {
    // Explain why this exercise was personalized this way
    return '';
  }

  private static identifyAppliedPrinciples(exercises: Exercise[]): string[] {
    // Identify which scientific principles are applied
    return [];
  }

  private static identifyUserAdaptations(exercises: Exercise[], userProfile: any): string[] {
    // Identify user-specific adaptations made
    return [];
  }

  private static identifySafetyConsiderations(exercises: Exercise[], userProfile: any): string[] {
    // Identify safety considerations applied
    return [];
  }

  private static getUserPersonalizationFactors(userProfile: any): string[] {
    // Get factors that influenced personalization
    return [];
  }

  private static generateAlternatives(exercises: Exercise[], userProfile: any): Exercise[] {
    // Generate alternative exercises
    return [];
  }

  private static createProgressionPlan(exercises: Exercise[], userProfile: any): any {
    // Create progression plan
    return {};
  }
}

export interface ExpertPlanRecommendation {
  exercises: Exercise[];
  scientificRationale: string;
  userPersonalizationFactors: string[];
  alternatives: Exercise[];
  progressionPlan: any;
} 