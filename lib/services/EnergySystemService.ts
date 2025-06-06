import { EnergySystem, CoachPersona } from '@/lib/types/training-system';

export interface EnergySystemProfile {
  dominant_system: EnergySystem;
  secondary_system: EnergySystem;
  sport_demands: SportEnergyDemands;
  training_distribution: EnergySystemDistribution;
  assessment_results: EnergySystemAssessment;
}

export interface SportEnergyDemands {
  sport_category: 'endurance' | 'strength_power' | 'combat' | 'team' | 'skill_based';
  aerobic_percentage: number;
  alactic_percentage: number;
  lactic_percentage: number;
  duration_profile: string;
  intensity_profile: string;
}

export interface EnergySystemDistribution {
  aerobic_training_percentage: number;
  alactic_training_percentage: number;
  lactic_training_percentage: number;
  recovery_percentage: number;
}

export interface EnergySystemAssessment {
  aerobic_capacity: 'low' | 'moderate' | 'high' | 'elite';
  anaerobic_power: 'low' | 'moderate' | 'high' | 'elite';
  lactate_tolerance: 'low' | 'moderate' | 'high' | 'elite';
  recovery_ability: 'poor' | 'average' | 'good' | 'excellent';
  limiting_factors: string[];
}

export interface EnergySystemWorkout {
  primary_system: EnergySystem;
  secondary_system?: EnergySystem;
  work_duration: string;
  rest_duration: string;
  intensity_target: string;
  rpe_range: string;
  adaptations_targeted: string[];
  exercise_selection: string[];
  progression_notes: string;
}

export class EnergySystemService {

  /**
   * Assesses user's energy system profile based on goals and sport
   */
  static assessEnergySystemProfile(
    primaryGoal: string,
    sportFocus?: string,
    fitnessLevel?: string,
    currentActivities?: string[]
  ): EnergySystemProfile {
    
    const sport_demands = this.determineSportEnergyDemands(primaryGoal, sportFocus);
    const dominant_system = this.determineDominantSystem(sport_demands);
    const secondary_system = this.determineSecondarySystem(sport_demands);
    const training_distribution = this.calculateTrainingDistribution(sport_demands);
    const assessment_results = this.performEnergySystemAssessment(fitnessLevel, currentActivities);

    return {
      dominant_system,
      secondary_system,
      sport_demands,
      training_distribution,
      assessment_results
    };
  }

  /**
   * Creates energy system specific workout
   */
  static createEnergySystemWorkout(
    targetSystem: EnergySystem,
    profile: EnergySystemProfile,
    sessionDuration: number,
    equipment?: string[]
  ): EnergySystemWorkout {
    
    const workoutTemplates = this.getEnergySystemTemplates();
    const template = workoutTemplates[targetSystem];
    
    return {
      primary_system: targetSystem,
      secondary_system: this.getSecondarySystemForWorkout(targetSystem, profile),
      work_duration: template.work_duration,
      rest_duration: template.rest_duration,
      intensity_target: template.intensity_target,
      rpe_range: template.rpe_range,
      adaptations_targeted: template.adaptations_targeted,
      exercise_selection: this.selectExercisesForEnergySystem(targetSystem, equipment),
      progression_notes: this.getProgressionNotes(targetSystem, profile)
    };
  }

  /**
   * Determines sport-specific energy system demands
   */
  private static determineSportEnergyDemands(primaryGoal: string, sportFocus?: string): SportEnergyDemands {
    
    // Endurance Sports (85-90% aerobic)
    if (this.isEnduranceSport(primaryGoal, sportFocus)) {
      return {
        sport_category: 'endurance',
        aerobic_percentage: 85,
        alactic_percentage: 5,
        lactic_percentage: 10,
        duration_profile: 'sustained_long_duration',
        intensity_profile: 'moderate_sustained'
      };
    }

    // Strength/Power Sports (70% alactic, 20% lactic, 10% aerobic)
    if (this.isStrengthPowerSport(primaryGoal, sportFocus)) {
      return {
        sport_category: 'strength_power',
        aerobic_percentage: 10,
        alactic_percentage: 70,
        lactic_percentage: 20,
        duration_profile: 'short_high_intensity',
        intensity_profile: 'maximal_brief'
      };
    }

    // Combat Sports (50% alactic, 30% lactic, 20% aerobic)
    if (this.isCombatSport(primaryGoal, sportFocus)) {
      return {
        sport_category: 'combat',
        aerobic_percentage: 20,
        alactic_percentage: 50,
        lactic_percentage: 30,
        duration_profile: 'intermittent_rounds',
        intensity_profile: 'high_variable'
      };
    }

    // Team Sports (40% alactic, 35% lactic, 25% aerobic)
    if (this.isTeamSport(primaryGoal, sportFocus)) {
      return {
        sport_category: 'team',
        aerobic_percentage: 25,
        alactic_percentage: 40,
        lactic_percentage: 35,
        duration_profile: 'intermittent_variable',
        intensity_profile: 'high_intermittent'
      };
    }

    // Skill-Based Sports (30% aerobic, 40% alactic, 30% lactic)
    if (this.isSkillBasedSport(primaryGoal, sportFocus)) {
      return {
        sport_category: 'skill_based',
        aerobic_percentage: 30,
        alactic_percentage: 40,
        lactic_percentage: 30,
        duration_profile: 'variable_precision',
        intensity_profile: 'moderate_precise'
      };
    }

    // General Fitness (mixed system)
    return {
      sport_category: 'endurance', // Default to endurance base
      aerobic_percentage: 60,
      alactic_percentage: 20,
      lactic_percentage: 20,
      duration_profile: 'mixed_training',
      intensity_profile: 'moderate_varied'
    };
  }

  private static determineDominantSystem(demands: SportEnergyDemands): EnergySystem {
    if (demands.aerobic_percentage >= 60) return 'aerobic';
    if (demands.alactic_percentage >= 40) return 'anaerobic-alactic';
    if (demands.lactic_percentage >= 30) return 'anaerobic-lactic';
    return 'mixed';
  }

  private static determineSecondarySystem(demands: SportEnergyDemands): EnergySystem {
    const systems = [
      { system: 'aerobic' as EnergySystem, percentage: demands.aerobic_percentage },
      { system: 'anaerobic-alactic' as EnergySystem, percentage: demands.alactic_percentage },
      { system: 'anaerobic-lactic' as EnergySystem, percentage: demands.lactic_percentage }
    ];
    
    systems.sort((a, b) => b.percentage - a.percentage);
    return systems[1].system; // Second highest
  }

  private static calculateTrainingDistribution(demands: SportEnergyDemands): EnergySystemDistribution {
    // Training distribution should emphasize the sport demands but include base development
    const aerobic_training = Math.max(demands.aerobic_percentage, 30); // Minimum aerobic base
    const remaining = 100 - aerobic_training;
    
    const alactic_training = (demands.alactic_percentage / (demands.alactic_percentage + demands.lactic_percentage)) * remaining;
    const lactic_training = remaining - alactic_training;

    return {
      aerobic_training_percentage: Math.round(aerobic_training * 0.8), // 80% of time for training
      alactic_training_percentage: Math.round(alactic_training * 0.8),
      lactic_training_percentage: Math.round(lactic_training * 0.8),
      recovery_percentage: 20 // 20% recovery
    };
  }

  private static performEnergySystemAssessment(
    fitnessLevel?: string,
    currentActivities?: string[]
  ): EnergySystemAssessment {
    
    // Basic assessment based on fitness level and activities
    const assessmentMap = {
      'complete-beginner': {
        aerobic_capacity: 'low' as const,
        anaerobic_power: 'low' as const,
        lactate_tolerance: 'low' as const,
        recovery_ability: 'poor' as const,
        limiting_factors: ['aerobic_base', 'movement_efficiency', 'work_capacity']
      },
      'beginner-inconsistent': {
        aerobic_capacity: 'low' as const,
        anaerobic_power: 'moderate' as const,
        lactate_tolerance: 'low' as const,
        recovery_ability: 'average' as const,
        limiting_factors: ['consistency', 'aerobic_base', 'recovery_habits']
      },
      'amateur-regular': {
        aerobic_capacity: 'moderate' as const,
        anaerobic_power: 'moderate' as const,
        lactate_tolerance: 'moderate' as const,
        recovery_ability: 'good' as const,
        limiting_factors: ['lactate_threshold', 'power_development']
      },
      'intermediate-structured': {
        aerobic_capacity: 'high' as const,
        anaerobic_power: 'high' as const,
        lactate_tolerance: 'high' as const,
        recovery_ability: 'good' as const,
        limiting_factors: ['sport_specificity', 'peak_power']
      },
      'advanced-competitive': {
        aerobic_capacity: 'elite' as const,
        anaerobic_power: 'elite' as const,
        lactate_tolerance: 'elite' as const,
        recovery_ability: 'excellent' as const,
        limiting_factors: ['marginal_gains', 'competition_readiness']
      }
    };

    return assessmentMap[fitnessLevel as keyof typeof assessmentMap] || assessmentMap['amateur-regular'];
  }

  private static getEnergySystemTemplates() {
    return {
      aerobic: {
        work_duration: '20-60 minutes continuous or 3-8 minute intervals',
        rest_duration: '1:1 work:rest for intervals, continuous for base',
        intensity_target: '60-85% max HR, conversational to tempo pace',
        rpe_range: '5-7/10',
        adaptations_targeted: ['VO2max', 'mitochondrial_density', 'cardiac_output', 'fat_oxidation'],
      },
      'anaerobic-alactic': {
        work_duration: '5-15 seconds maximum effort',
        rest_duration: '2-5 minutes complete recovery',
        intensity_target: '95-100% maximum effort',
        rpe_range: '9-10/10',
        adaptations_targeted: ['phosphocreatine_system', 'neuromuscular_power', 'rate_coding', 'explosive_strength'],
      },
      'anaerobic-lactic': {
        work_duration: '30 seconds to 2 minutes high intensity',
        rest_duration: '1:1 to 1:3 work:rest ratio',
        intensity_target: '85-95% maximum effort',
        rpe_range: '8-9/10',
        adaptations_targeted: ['lactate_buffering', 'glycolytic_power', 'lactate_tolerance', 'anaerobic_capacity'],
      },
      mixed: {
        work_duration: 'Variable based on sport demands',
        rest_duration: 'Variable based on work duration',
        intensity_target: '70-90% effort with variation',
        rpe_range: '6-8/10',
        adaptations_targeted: ['multi_system_integration', 'metabolic_flexibility', 'sport_specificity'],
      }
    };
  }

  private static getSecondarySystemForWorkout(primary: EnergySystem, profile: EnergySystemProfile): EnergySystem | undefined {
    if (primary === profile.dominant_system) {
      return profile.secondary_system;
    }
    return undefined;
  }

  private static selectExercisesForEnergySystem(system: EnergySystem, equipment?: string[]): string[] {
    const exerciseMap = {
      aerobic: [
        'long-run', 'tempo-run', 'fartlek-run', 'cycling-endurance',
        'rowing-steady-state', 'swimming-continuous', 'elliptical-intervals'
      ],
      'anaerobic-alactic': [
        'sprint-intervals', 'plyometric-jumps', 'olympic-lifts', 'medicine-ball-throws',
        'kettlebell-swings', 'box-jumps', 'explosive-push-ups'
      ],
      'anaerobic-lactic': [
        'hill-repeats', 'lactate-threshold-intervals', 'vo2max-intervals',
        'circuit-training', 'tabata-intervals', 'bike-intervals'
      ],
      mixed: [
        'circuit-training', 'crossfit-wods', 'sport-specific-drills',
        'interval-training', 'fartlek-training', 'game-simulation'
      ]
    };

    return exerciseMap[system] || exerciseMap.mixed;
  }

  private static getProgressionNotes(system: EnergySystem, profile: EnergySystemProfile): string {
    const progressionMap = {
      aerobic: 'Progress by increasing duration first, then intensity. Build aerobic base before adding high-intensity work.',
      'anaerobic-alactic': 'Progress by increasing power output and complexity. Ensure complete recovery between efforts.',
      'anaerobic-lactic': 'Progress gradually due to high metabolic stress. Monitor recovery and adaptation carefully.',
      mixed: 'Progress by varying training stimuli and increasing sport-specific demands.'
    };

    return progressionMap[system];
  }

  // Sport classification helpers
  private static isEnduranceSport(goal: string, sport?: string): boolean {
    const enduranceKeywords = ['marathon', 'running', 'cycling', 'triathlon', 'swimming', 'endurance'];
    return enduranceKeywords.some(keyword => 
      goal.toLowerCase().includes(keyword) || sport?.toLowerCase().includes(keyword)
    );
  }

  private static isStrengthPowerSport(goal: string, sport?: string): boolean {
    const strengthKeywords = ['strength', 'powerlifting', 'weightlifting', 'bodybuilding', 'muscle', 'power'];
    return strengthKeywords.some(keyword => 
      goal.toLowerCase().includes(keyword) || sport?.toLowerCase().includes(keyword)
    );
  }

  private static isCombatSport(goal: string, sport?: string): boolean {
    const combatKeywords = ['boxing', 'mma', 'martial arts', 'wrestling', 'judo', 'karate', 'combat'];
    return combatKeywords.some(keyword => 
      goal.toLowerCase().includes(keyword) || sport?.toLowerCase().includes(keyword)
    );
  }

  private static isTeamSport(goal: string, sport?: string): boolean {
    const teamKeywords = ['soccer', 'football', 'basketball', 'hockey', 'volleyball', 'rugby', 'team'];
    return teamKeywords.some(keyword => 
      goal.toLowerCase().includes(keyword) || sport?.toLowerCase().includes(keyword)
    );
  }

  private static isSkillBasedSport(goal: string, sport?: string): boolean {
    const skillKeywords = ['golf', 'tennis', 'gymnastics', 'dance', 'yoga', 'pilates', 'balance'];
    return skillKeywords.some(keyword => 
      goal.toLowerCase().includes(keyword) || sport?.toLowerCase().includes(keyword)
    );
  }

  /**
   * Analyzes energy system progress and provides recommendations
   */
  static analyzeEnergySystemProgress(
    profile: EnergySystemProfile,
    recentWorkouts: any[],
    userFeedback: any
  ): {
    progress_summary: string;
    adaptations_occurring: string[];
    recommendations: string[];
    next_focus: EnergySystem;
  } {
    
    // Analyze recent training distribution
    const recentSystems = recentWorkouts.map(w => w.primary_system);
    const systemCounts = recentSystems.reduce((acc, system) => {
      acc[system] = (acc[system] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    // Determine progress and recommendations
    const dominantRecentSystem = Object.keys(systemCounts).reduce((a, b) => 
      systemCounts[a] > systemCounts[b] ? a : b
    ) as EnergySystem;
    
    return {
      progress_summary: this.generateProgressSummary(profile, dominantRecentSystem),
      adaptations_occurring: this.identifyAdaptations(profile, dominantRecentSystem),
      recommendations: this.generateRecommendations(profile, systemCounts),
      next_focus: this.determineNextFocus(profile, systemCounts)
    };
  }

  private static generateProgressSummary(profile: EnergySystemProfile, recentFocus: EnergySystem): string {
    const systemNames = {
      aerobic: 'aerobic capacity',
      'anaerobic-alactic': 'power and strength',
      'anaerobic-lactic': 'lactate tolerance',
      mixed: 'overall conditioning'
    };
    
    return `Recent focus on ${systemNames[recentFocus]} training is building ${profile.sport_demands.sport_category}-specific adaptations.`;
  }

  private static identifyAdaptations(profile: EnergySystemProfile, recentFocus: EnergySystem): string[] {
    const adaptationMap = {
      aerobic: ['Improved oxygen delivery', 'Enhanced fat oxidation', 'Increased mitochondrial density'],
      'anaerobic-alactic': ['Greater explosive power', 'Enhanced neuromuscular coordination', 'Improved phosphocreatine system'],
      'anaerobic-lactic': ['Better lactate buffering', 'Increased glycolytic capacity', 'Enhanced lactate tolerance'],
      mixed: ['Improved metabolic flexibility', 'Better energy system integration', 'Enhanced sport-specific fitness']
    };
    
    return adaptationMap[recentFocus] || adaptationMap.mixed;
  }

  private static generateRecommendations(profile: EnergySystemProfile, systemCounts: Record<string, number>): string[] {
    const recommendations = [];
    
    // Check if training distribution matches sport demands
    const totalSessions = Object.values(systemCounts).reduce((a, b) => a + b, 0);
    const aerobicPercentage = (systemCounts.aerobic || 0) / totalSessions * 100;
    
    if (profile.sport_demands.aerobic_percentage > 60 && aerobicPercentage < 50) {
      recommendations.push('Increase aerobic base training to match sport demands');
    }
    
    if (profile.sport_demands.alactic_percentage > 40 && (systemCounts['anaerobic-alactic'] || 0) < 2) {
      recommendations.push('Add more power and explosive training sessions');
    }
    
    if (profile.assessment_results.recovery_ability === 'poor') {
      recommendations.push('Focus on recovery protocols and reduce training intensity');
    }
    
    return recommendations.length > 0 ? recommendations : ['Continue current training distribution'];
  }

  private static determineNextFocus(profile: EnergySystemProfile, systemCounts: Record<string, number>): EnergySystem {
    // Determine which system needs more attention based on sport demands and recent training
    const totalSessions = Object.values(systemCounts).reduce((a, b) => a + b, 0);
    
    if (totalSessions === 0) return profile.dominant_system;
    
    const aerobicPercentage = (systemCounts.aerobic || 0) / totalSessions * 100;
    const alacticPercentage = (systemCounts['anaerobic-alactic'] || 0) / totalSessions * 100;
    const lacticPercentage = (systemCounts['anaerobic-lactic'] || 0) / totalSessions * 100;
    
    // Find the system that's most under-trained relative to sport demands
    const deficits = {
      aerobic: profile.sport_demands.aerobic_percentage - aerobicPercentage,
      'anaerobic-alactic': profile.sport_demands.alactic_percentage - alacticPercentage,
      'anaerobic-lactic': profile.sport_demands.lactic_percentage - lacticPercentage
    };
    
    const maxDeficit = Math.max(...Object.values(deficits));
    const nextFocus = Object.keys(deficits).find(key => deficits[key as keyof typeof deficits] === maxDeficit) as EnergySystem;
    
    return nextFocus || profile.dominant_system;
  }
} 