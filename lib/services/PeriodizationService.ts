import { CoachPersona, ExperienceLevel, EnergySystem, PeriodizationPhase } from '@/lib/types/training-system';

export interface PeriodizationPlan {
  macrocycle: MacrocyclePlan;
  currentMesocycle: MesocyclePlan;
  currentMicrocycle: MicrocyclePlan;
  nextPhaseTransition: Date;
  progressionStrategy: ProgressionStrategy;
}

export interface MacrocyclePlan {
  duration_months: number;
  goal_date?: Date;
  phases: PeriodizationPhase[];
  primary_energy_system: EnergySystem;
  sport_focus?: string;
  experience_adaptations: ExperienceAdaptations;
}

export interface MesocyclePlan {
  phase: PeriodizationPhase;
  duration_weeks: number;
  focus_areas: string[];
  overload_variables: string[];
  intensity_distribution: IntensityDistribution;
  recovery_protocols: RecoveryProtocol[];
}

export interface MicrocyclePlan {
  week_structure: WeekStructure;
  training_days: number;
  rest_days: number;
  intensity_pattern: string;
  volume_progression: VolumeProgression;
}

export interface ProgressionStrategy {
  primary_variables: string[];
  progression_rate: 'conservative' | 'moderate' | 'aggressive';
  plateau_prevention: string[];
  deload_frequency: number;
}

export interface ExperienceAdaptations {
  beginner_modifications: string[];
  safety_protocols: string[];
  confidence_building: string[];
  education_focus: string[];
}

export interface IntensityDistribution {
  zone1_percentage: number; // Recovery/Easy
  zone2_percentage: number; // Aerobic Base
  zone3_percentage: number; // Tempo/Threshold
  zone4_percentage: number; // VO2max
  zone5_percentage: number; // Neuromuscular Power
}

export interface RecoveryProtocol {
  type: 'active' | 'passive' | 'sleep' | 'nutrition';
  frequency: string;
  description: string;
}

export interface WeekStructure {
  monday: SessionType;
  tuesday: SessionType;
  wednesday: SessionType;
  thursday: SessionType;
  friday: SessionType;
  saturday: SessionType;
  sunday: SessionType;
}

export interface VolumeProgression {
  weekly_increase: number;
  deload_week_frequency: number;
  max_volume_weeks: number;
}

export type SessionType = 'training' | 'rest' | 'active_recovery' | 'cross_training';

export class PeriodizationService {
  
  /**
   * Creates a comprehensive periodization plan based on user profile and goals
   */
  static createPeriodizationPlan(
    experienceLevel: ExperienceLevel,
    primaryGoal: string,
    goalDate?: Date,
    sportFocus?: string,
    persona?: CoachPersona
  ): PeriodizationPlan {
    
    const macrocycle = this.createMacrocycle(experienceLevel, primaryGoal, goalDate, sportFocus);
    const currentMesocycle = this.createCurrentMesocycle(macrocycle, experienceLevel, persona);
    const currentMicrocycle = this.createCurrentMicrocycle(currentMesocycle, experienceLevel);
    const progressionStrategy = this.createProgressionStrategy(experienceLevel, persona);
    
    return {
      macrocycle,
      currentMesocycle,
      currentMicrocycle,
      nextPhaseTransition: this.calculateNextTransition(currentMesocycle),
      progressionStrategy
    };
  }

  /**
   * Creates macrocycle plan (6-12 month overview)
   */
  private static createMacrocycle(
    experienceLevel: ExperienceLevel,
    primaryGoal: string,
    goalDate?: Date,
    sportFocus?: string
  ): MacrocyclePlan {
    
    const duration_months = this.getMacrocycleDuration(experienceLevel, goalDate);
    const phases = this.getMacrocyclePhases(experienceLevel, primaryGoal);
    const primary_energy_system = this.getPrimaryEnergySystem(primaryGoal, sportFocus);
    const experience_adaptations = this.getExperienceAdaptations(experienceLevel);

    return {
      duration_months,
      goal_date: goalDate,
      phases,
      primary_energy_system,
      sport_focus: sportFocus,
      experience_adaptations
    };
  }

  /**
   * Creates current mesocycle plan (2-16 week focused block)
   */
  private static createCurrentMesocycle(
    macrocycle: MacrocyclePlan,
    experienceLevel: ExperienceLevel,
    persona?: CoachPersona
  ): MesocyclePlan {
    
    const currentPhase = macrocycle.phases[0]; // Start with first phase
    const duration_weeks = this.getMesocycleDuration(currentPhase, experienceLevel);
    const focus_areas = this.getMesocycleFocus(currentPhase, macrocycle.primary_energy_system);
    const overload_variables = this.getOverloadVariables(currentPhase, experienceLevel);
    const intensity_distribution = this.getIntensityDistribution(currentPhase, macrocycle.primary_energy_system, experienceLevel);
    const recovery_protocols = this.getRecoveryProtocols(experienceLevel, persona);

    return {
      phase: currentPhase,
      duration_weeks,
      focus_areas,
      overload_variables,
      intensity_distribution,
      recovery_protocols
    };
  }

  /**
   * Creates current microcycle plan (weekly structure)
   */
  private static createCurrentMicrocycle(
    mesocycle: MesocyclePlan,
    experienceLevel: ExperienceLevel
  ): MicrocyclePlan {
    
    const week_structure = this.getWeekStructure(experienceLevel, mesocycle.phase);
    const training_days = this.getTrainingDays(experienceLevel);
    const rest_days = 7 - training_days;
    const intensity_pattern = this.getIntensityPattern(mesocycle.phase, experienceLevel);
    const volume_progression = this.getVolumeProgression(experienceLevel, mesocycle.phase);

    return {
      week_structure,
      training_days,
      rest_days,
      intensity_pattern,
      volume_progression
    };
  }

  /**
   * Creates progression strategy based on experience and persona
   */
  private static createProgressionStrategy(
    experienceLevel: ExperienceLevel,
    persona?: CoachPersona
  ): ProgressionStrategy {
    
    const strategies = {
      'complete-beginner': {
        primary_variables: ['frequency', 'duration', 'form_mastery'],
        progression_rate: 'conservative' as const,
        plateau_prevention: ['variety_introduction', 'rest_emphasis', 'form_focus'],
        deload_frequency: 3
      },
      'beginner-inconsistent': {
        primary_variables: ['consistency', 'volume', 'technique'],
        progression_rate: 'conservative' as const,
        plateau_prevention: ['habit_formation', 'gradual_intensity', 'confidence_building'],
        deload_frequency: 4
      },
      'amateur-regular': {
        primary_variables: ['volume', 'intensity', 'frequency'],
        progression_rate: 'moderate' as const,
        plateau_prevention: ['periodization_introduction', 'cross_training', 'recovery_focus'],
        deload_frequency: 4
      },
      'intermediate-structured': {
        primary_variables: ['intensity', 'volume', 'complexity', 'specificity'],
        progression_rate: 'moderate' as const,
        plateau_prevention: ['periodization_variation', 'sport_specificity', 'advanced_recovery'],
        deload_frequency: 5
      },
      'advanced-competitive': {
        primary_variables: ['intensity', 'specificity', 'power', 'technical_refinement'],
        progression_rate: 'aggressive' as const,
        plateau_prevention: ['complex_periodization', 'peak_management', 'marginal_gains'],
        deload_frequency: 6
      }
    };

    return strategies[experienceLevel] || strategies['amateur-regular'];
  }

  // Helper methods for periodization planning

  private static getMacrocycleDuration(experienceLevel: ExperienceLevel, goalDate?: Date): number {
    if (goalDate) {
      const monthsToGoal = Math.ceil((goalDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24 * 30));
      return Math.max(3, Math.min(12, monthsToGoal));
    }

    const durations = {
      'complete-beginner': 6,
      'beginner-inconsistent': 6,
      'amateur-regular': 8,
      'intermediate-structured': 10,
      'advanced-competitive': 12
    };

    return durations[experienceLevel] || 8;
  }

  private static getMacrocyclePhases(experienceLevel: ExperienceLevel, primaryGoal: string): PeriodizationPhase[] {
    if (experienceLevel === 'complete-beginner' || experienceLevel === 'beginner-inconsistent') {
      return ['base', 'build', 'recovery'];
    }

    if (primaryGoal.includes('marathon') || primaryGoal.includes('endurance')) {
      return ['base', 'build', 'peak', 'recovery'];
    }

    if (primaryGoal.includes('strength') || primaryGoal.includes('power')) {
      return ['base', 'build', 'peak', 'transition'];
    }

    return ['base', 'build', 'peak', 'recovery'];
  }

  private static getPrimaryEnergySystem(primaryGoal: string, sportFocus?: string): EnergySystem {
    if (primaryGoal.includes('marathon') || primaryGoal.includes('endurance') || sportFocus?.includes('endurance')) {
      return 'aerobic';
    }

    if (primaryGoal.includes('strength') || primaryGoal.includes('power') || sportFocus?.includes('strength')) {
      return 'anaerobic-alactic';
    }

    if (primaryGoal.includes('HIIT') || sportFocus?.includes('combat') || sportFocus?.includes('team')) {
      return 'anaerobic-lactic';
    }

    return 'mixed';
  }

  private static getExperienceAdaptations(experienceLevel: ExperienceLevel): ExperienceAdaptations {
    const adaptations = {
      'complete-beginner': {
        beginner_modifications: [
          'Start with bodyweight movements only',
          'Focus on movement quality over quantity',
          'Limit sessions to 30 minutes maximum',
          'Include extensive warm-up and cool-down'
        ],
        safety_protocols: [
          'Movement screening before progression',
          'Pain monitoring at every session',
          'Conservative load progression',
          'Mandatory rest days'
        ],
        confidence_building: [
          'Celebrate small wins and consistency',
          'Process goals over outcome goals',
          'Realistic timeline expectations',
          'Positive reinforcement focus'
        ],
        education_focus: [
          'Basic movement patterns',
          'Understanding rest and recovery',
          'Nutrition fundamentals',
          'Habit formation strategies'
        ]
      },
      'beginner-inconsistent': {
        beginner_modifications: [
          'Flexible scheduling options',
          'Shorter session alternatives',
          'Home workout options',
          'Progressive complexity introduction'
        ],
        safety_protocols: [
          'Form check reminders',
          'Gradual intensity increases',
          'Injury prevention education',
          'Recovery day enforcement'
        ],
        confidence_building: [
          'Consistency tracking and rewards',
          'Achievable weekly goals',
          'Progress photo encouragement',
          'Community support integration'
        ],
        education_focus: [
          'Habit formation science',
          'Overcoming barriers',
          'Time management for fitness',
          'Sustainable lifestyle integration'
        ]
      }
    };

    return adaptations[experienceLevel as keyof typeof adaptations] || {
      beginner_modifications: [],
      safety_protocols: ['Standard safety protocols'],
      confidence_building: ['Regular progress tracking'],
      education_focus: ['Progressive overload principles']
    };
  }

  private static getMesocycleDuration(phase: PeriodizationPhase, experienceLevel: ExperienceLevel): number {
    const durations = {
      base: experienceLevel.includes('beginner') ? 6 : 4,
      build: experienceLevel.includes('beginner') ? 4 : 6,
      peak: experienceLevel.includes('beginner') ? 2 : 3,
      recovery: 2,
      transition: 2
    };

    return durations[phase] || 4;
  }

  private static getMesocycleFocus(phase: PeriodizationPhase, energySystem: EnergySystem): string[] {
    const focusMap = {
      base: {
        aerobic: ['aerobic_base_building', 'movement_efficiency', 'volume_tolerance'],
        'anaerobic-alactic': ['movement_mastery', 'strength_foundation', 'power_preparation'],
        'anaerobic-lactic': ['aerobic_base', 'lactate_buffering', 'work_capacity'],
        mixed: ['general_fitness', 'movement_quality', 'base_conditioning']
      },
      build: {
        aerobic: ['threshold_development', 'tempo_training', 'volume_progression'],
        'anaerobic-alactic': ['strength_development', 'power_introduction', 'load_progression'],
        'anaerobic-lactic': ['lactate_threshold', 'VO2max_development', 'high_intensity_tolerance'],
        mixed: ['strength_endurance', 'metabolic_conditioning', 'skill_development']
      },
      peak: {
        aerobic: ['race_pace_specificity', 'peak_volume', 'competition_preparation'],
        'anaerobic-alactic': ['maximal_strength', 'peak_power', 'competition_movements'],
        'anaerobic-lactic': ['race_pace_intervals', 'lactate_tolerance', 'peak_performance'],
        mixed: ['sport_specificity', 'peak_conditioning', 'competition_readiness']
      },
      recovery: ['active_recovery', 'regeneration', 'movement_maintenance'],
      transition: ['general_fitness', 'cross_training', 'preparation_for_next_cycle']
    };

    const phaseMap = focusMap[phase];
    if (typeof phaseMap === 'object' && !Array.isArray(phaseMap)) {
      return phaseMap[energySystem] || ['general_training'];
    }
    return Array.isArray(phaseMap) ? phaseMap : ['general_training'];
  }

  private static getOverloadVariables(phase: PeriodizationPhase, experienceLevel: ExperienceLevel): string[] {
    if (experienceLevel.includes('beginner')) {
      return {
        base: ['frequency', 'duration'],
        build: ['volume', 'consistency'],
        peak: ['intensity', 'specificity'],
        recovery: ['active_recovery'],
        transition: ['variety', 'enjoyment']
      }[phase] || ['frequency', 'duration'];
    }

    return {
      base: ['volume', 'frequency', 'duration'],
      build: ['intensity', 'volume', 'complexity'],
      peak: ['intensity', 'specificity', 'power'],
      recovery: ['active_recovery', 'regeneration'],
      transition: ['variety', 'cross_training']
    }[phase] || ['volume', 'intensity'];
  }

  private static getIntensityDistribution(
    phase: PeriodizationPhase, 
    energySystem: EnergySystem, 
    experienceLevel: ExperienceLevel
  ): IntensityDistribution {
    
    // Beginner distributions (more conservative)
    if (experienceLevel.includes('beginner')) {
      return {
        base: { zone1_percentage: 30, zone2_percentage: 60, zone3_percentage: 10, zone4_percentage: 0, zone5_percentage: 0 },
        build: { zone1_percentage: 25, zone2_percentage: 50, zone3_percentage: 20, zone4_percentage: 5, zone5_percentage: 0 },
        peak: { zone1_percentage: 20, zone2_percentage: 40, zone3_percentage: 25, zone4_percentage: 10, zone5_percentage: 5 },
        recovery: { zone1_percentage: 60, zone2_percentage: 40, zone3_percentage: 0, zone4_percentage: 0, zone5_percentage: 0 },
        transition: { zone1_percentage: 50, zone2_percentage: 40, zone3_percentage: 10, zone4_percentage: 0, zone5_percentage: 0 }
      }[phase] || { zone1_percentage: 30, zone2_percentage: 60, zone3_percentage: 10, zone4_percentage: 0, zone5_percentage: 0 };
    }

    // Advanced distributions based on energy system and phase
    const distributions: Record<EnergySystem, Record<PeriodizationPhase, IntensityDistribution>> = {
      aerobic: {
        base: { zone1_percentage: 20, zone2_percentage: 65, zone3_percentage: 15, zone4_percentage: 0, zone5_percentage: 0 },
        build: { zone1_percentage: 15, zone2_percentage: 45, zone3_percentage: 25, zone4_percentage: 10, zone5_percentage: 5 },
        peak: { zone1_percentage: 25, zone2_percentage: 35, zone3_percentage: 20, zone4_percentage: 15, zone5_percentage: 5 },
        recovery: { zone1_percentage: 60, zone2_percentage: 40, zone3_percentage: 0, zone4_percentage: 0, zone5_percentage: 0 },
        transition: { zone1_percentage: 50, zone2_percentage: 40, zone3_percentage: 10, zone4_percentage: 0, zone5_percentage: 0 }
      },
      'anaerobic-alactic': {
        base: { zone1_percentage: 40, zone2_percentage: 40, zone3_percentage: 15, zone4_percentage: 5, zone5_percentage: 0 },
        build: { zone1_percentage: 30, zone2_percentage: 30, zone3_percentage: 20, zone4_percentage: 10, zone5_percentage: 10 },
        peak: { zone1_percentage: 25, zone2_percentage: 25, zone3_percentage: 20, zone4_percentage: 15, zone5_percentage: 15 },
        recovery: { zone1_percentage: 60, zone2_percentage: 40, zone3_percentage: 0, zone4_percentage: 0, zone5_percentage: 0 },
        transition: { zone1_percentage: 50, zone2_percentage: 40, zone3_percentage: 10, zone4_percentage: 0, zone5_percentage: 0 }
      },
      'anaerobic-lactic': {
        base: { zone1_percentage: 25, zone2_percentage: 50, zone3_percentage: 20, zone4_percentage: 5, zone5_percentage: 0 },
        build: { zone1_percentage: 20, zone2_percentage: 40, zone3_percentage: 25, zone4_percentage: 10, zone5_percentage: 5 },
        peak: { zone1_percentage: 15, zone2_percentage: 30, zone3_percentage: 30, zone4_percentage: 20, zone5_percentage: 5 },
        recovery: { zone1_percentage: 60, zone2_percentage: 40, zone3_percentage: 0, zone4_percentage: 0, zone5_percentage: 0 },
        transition: { zone1_percentage: 50, zone2_percentage: 40, zone3_percentage: 10, zone4_percentage: 0, zone5_percentage: 0 }
      },
      mixed: {
        base: { zone1_percentage: 30, zone2_percentage: 50, zone3_percentage: 15, zone4_percentage: 5, zone5_percentage: 0 },
        build: { zone1_percentage: 25, zone2_percentage: 40, zone3_percentage: 20, zone4_percentage: 10, zone5_percentage: 5 },
        peak: { zone1_percentage: 20, zone2_percentage: 30, zone3_percentage: 25, zone4_percentage: 15, zone5_percentage: 10 },
        recovery: { zone1_percentage: 60, zone2_percentage: 40, zone3_percentage: 0, zone4_percentage: 0, zone5_percentage: 0 },
        transition: { zone1_percentage: 50, zone2_percentage: 40, zone3_percentage: 10, zone4_percentage: 0, zone5_percentage: 0 }
      }
    };

    return distributions[energySystem]?.[phase] || 
           { zone1_percentage: 25, zone2_percentage: 50, zone3_percentage: 20, zone4_percentage: 5, zone5_percentage: 0 };
  }

  private static getRecoveryProtocols(experienceLevel: ExperienceLevel, persona?: CoachPersona): RecoveryProtocol[] {
    const baseProtocols = [
      { type: 'sleep' as const, frequency: 'daily', description: '7-9 hours quality sleep' },
      { type: 'nutrition' as const, frequency: 'daily', description: 'Adequate protein and hydration' }
    ];

    if (experienceLevel.includes('beginner')) {
      return [
        ...baseProtocols,
        { type: 'passive' as const, frequency: 'daily', description: 'Complete rest days mandatory' },
        { type: 'active' as const, frequency: 'weekly', description: 'Light walking or stretching' }
      ];
    }

    if (persona === 'SportSpecific') {
      return [
        ...baseProtocols,
        { type: 'active' as const, frequency: 'daily', description: 'Dynamic warm-up and cool-down' },
        { type: 'passive' as const, frequency: 'weekly', description: 'Massage or foam rolling' }
      ];
    }

    return [
      ...baseProtocols,
      { type: 'active' as const, frequency: 'weekly', description: 'Light cross-training or yoga' }
    ];
  }

  private static getWeekStructure(experienceLevel: ExperienceLevel, phase: PeriodizationPhase): WeekStructure {
    if (experienceLevel.includes('beginner')) {
      return {
        monday: 'training',
        tuesday: 'rest',
        wednesday: 'training',
        thursday: 'rest',
        friday: 'training',
        saturday: 'rest',
        sunday: 'rest'
      };
    }

    if (phase === 'peak') {
      return {
        monday: 'training',
        tuesday: 'training',
        wednesday: 'active_recovery',
        thursday: 'training',
        friday: 'training',
        saturday: 'training',
        sunday: 'rest'
      };
    }

    return {
      monday: 'training',
      tuesday: 'training',
      wednesday: 'rest',
      thursday: 'training',
      friday: 'training',
      saturday: 'cross_training',
      sunday: 'rest'
    };
  }

  private static getTrainingDays(experienceLevel: ExperienceLevel): number {
    const days = {
      'complete-beginner': 3,
      'beginner-inconsistent': 3,
      'amateur-regular': 4,
      'intermediate-structured': 5,
      'advanced-competitive': 6
    };

    return days[experienceLevel] || 4;
  }

  private static getIntensityPattern(phase: PeriodizationPhase, experienceLevel: ExperienceLevel): string {
    if (experienceLevel.includes('beginner')) {
      return 'easy-moderate-easy';
    }

    return {
      base: 'easy-moderate-easy-moderate',
      build: 'easy-moderate-hard-easy',
      peak: 'easy-hard-easy-hard',
      recovery: 'easy-easy-easy',
      transition: 'easy-moderate-easy'
    }[phase] || 'easy-moderate-easy';
  }

  private static getVolumeProgression(experienceLevel: ExperienceLevel, phase: PeriodizationPhase): VolumeProgression {
    if (experienceLevel.includes('beginner')) {
      return {
        weekly_increase: 5, // 5% per week
        deload_week_frequency: 3,
        max_volume_weeks: 2
      };
    }

    return {
      base: { weekly_increase: 10, deload_week_frequency: 4, max_volume_weeks: 3 },
      build: { weekly_increase: 8, deload_week_frequency: 4, max_volume_weeks: 2 },
      peak: { weekly_increase: 5, deload_week_frequency: 3, max_volume_weeks: 1 },
      recovery: { weekly_increase: 0, deload_week_frequency: 1, max_volume_weeks: 0 },
      transition: { weekly_increase: 5, deload_week_frequency: 2, max_volume_weeks: 1 }
    }[phase] || { weekly_increase: 8, deload_week_frequency: 4, max_volume_weeks: 2 };
  }

  private static calculateNextTransition(mesocycle: MesocyclePlan): Date {
    const weeksToTransition = mesocycle.duration_weeks;
    const nextTransition = new Date();
    nextTransition.setDate(nextTransition.getDate() + (weeksToTransition * 7));
    return nextTransition;
  }

  /**
   * Gets current training recommendations based on periodization plan
   */
  static getCurrentTrainingRecommendations(plan: PeriodizationPlan): {
    intensity_target: string;
    volume_target: string;
    focus_areas: string[];
    recovery_emphasis: string;
  } {
    const { currentMesocycle, currentMicrocycle } = plan;
    
    return {
      intensity_target: this.getIntensityTarget(currentMesocycle.intensity_distribution),
      volume_target: this.getVolumeTarget(currentMicrocycle.volume_progression),
      focus_areas: currentMesocycle.focus_areas,
      recovery_emphasis: this.getRecoveryEmphasis(currentMesocycle.recovery_protocols)
    };
  }

  private static getIntensityTarget(distribution: IntensityDistribution): string {
    if (distribution.zone1_percentage > 50) return 'Easy/Recovery focus';
    if (distribution.zone2_percentage > 40) return 'Aerobic base building';
    if (distribution.zone3_percentage > 25) return 'Tempo/Threshold work';
    if (distribution.zone4_percentage > 15) return 'VO2max intervals';
    return 'Mixed intensity training';
  }

  private static getVolumeTarget(progression: VolumeProgression): string {
    if (progression.weekly_increase > 8) return 'Volume building phase';
    if (progression.weekly_increase > 5) return 'Moderate volume progression';
    if (progression.weekly_increase > 0) return 'Conservative volume increase';
    return 'Volume maintenance';
  }

  private static getRecoveryEmphasis(protocols: RecoveryProtocol[]): string {
    const activeRecovery = protocols.some(p => p.type === 'active');
    const passiveRecovery = protocols.some(p => p.type === 'passive');
    
    if (activeRecovery && passiveRecovery) return 'Comprehensive recovery protocol';
    if (activeRecovery) return 'Active recovery emphasis';
    if (passiveRecovery) return 'Passive recovery emphasis';
    return 'Basic recovery protocol';
  }
} 