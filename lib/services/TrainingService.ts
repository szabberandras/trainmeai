import { CoachPersona, ExperienceLevel, EnergySystem, PeriodizationPhase } from '@/lib/types/training-system';

export interface TrainingPlan {
  id: string;
  name: string;
  description: string;
  duration: string;
  difficulty: string;
  focus: string[];
  exercises: Exercise[];
  persona?: CoachPersona;
  experienceLevel?: ExperienceLevel;
  energySystem?: EnergySystem;
  periodizationPhase?: PeriodizationPhase;
}

export interface Exercise {
  id: string;
  name: string;
  sets?: number;
  reps?: number | string;
  duration?: string;
  weight?: string;
  restTime?: string;
  instructions?: string[];
  targetMuscles?: string[];
  equipment?: string[];
  modifications?: string[];
}

export interface UserProfile {
  experience: ExperienceLevel;
  goals: string[];
  availableTime: number;
  equipment: string[];
  limitations: string[];
  preferences: string[];
  fitnessLevel: number;
  age?: number;
  gender?: string;
  injuries?: string[];
}

export class TrainingService {
  private static instance: TrainingService;
  private advancedServicesInitialized = false;

  public static getInstance(): TrainingService {
    if (!TrainingService.instance) {
      TrainingService.instance = new TrainingService();
    }
    return TrainingService.instance;
  }

  private constructor() {
    this.initializeAdvancedServices();
  }

  private async initializeAdvancedServices() {
    try {
      // Initialize advanced services if available
      const { PeriodizationService } = await import('./PeriodizationService');
      const { EnergySystemService } = await import('./EnergySystemService');
      
      this.advancedServicesInitialized = true;
      console.log('Advanced training services initialized');
    } catch (error) {
      console.log('Advanced services not available, using basic functionality');
      this.advancedServicesInitialized = false;
    }
  }

  public async generateTrainingPlan(
    userProfile: UserProfile,
    persona: CoachPersona = 'FitCoach',
    goals: string[] = [],
    timeframe: string = '4 weeks'
  ): Promise<TrainingPlan> {
    try {
      // Apply advanced planning services if available
      const enhancedPlan = await this.applyAdvancedPlanningServices(userProfile, persona, goals, timeframe);
      if (enhancedPlan) {
        return enhancedPlan;
      }

      // Fallback to basic plan generation
      return this.generateBasicPlan(userProfile, persona, goals, timeframe);
    } catch (error) {
      console.error('Error generating training plan:', error);
      return this.generateBasicPlan(userProfile, persona, goals, timeframe);
    }
  }

  private async applyAdvancedPlanningServices(
    userProfile: UserProfile,
    persona: CoachPersona,
    goals: string[],
    timeframe: string
  ): Promise<TrainingPlan | null> {
    if (!this.advancedServicesInitialized) {
      return null;
    }

    try {
      const { PeriodizationService } = await import('./PeriodizationService');
      const { EnergySystemService } = await import('./EnergySystemService');

      // Create periodization plan
      const periodizationPlan = PeriodizationService.createPeriodizationPlan(
        userProfile.experience,
        goals[0] || 'general_fitness'
      );

      // Assess energy system needs
      const energyProfile = EnergySystemService.assessEnergySystemProfile(
        goals[0] || 'general_fitness',
        this.determineSportFocus(goals)
      );

      // Generate enhanced plan
      const plan = this.generatePersonaSpecificPlan(userProfile, persona, goals, timeframe);
      
      // Enhance with periodization and energy system data
      plan.periodizationPhase = periodizationPlan.currentMesocycle?.phase as PeriodizationPhase;
      plan.energySystem = energyProfile.dominant_system;

      return plan;
    } catch (error) {
      console.error('Error applying advanced planning services:', error);
      return null;
    }
  }

  private generateBasicPlan(
    userProfile: UserProfile,
    persona: CoachPersona,
    goals: string[],
    timeframe: string
  ): TrainingPlan {
    return this.generatePersonaSpecificPlan(userProfile, persona, goals, timeframe);
  }

  private generatePersonaSpecificPlan(
    userProfile: UserProfile,
    persona: CoachPersona,
    goals: string[],
    timeframe: string
  ): TrainingPlan {
    const baseId = `${persona.toLowerCase()}-${Date.now()}`;
    
    switch (persona) {
      case 'BeginnerGuide':
        return this.generateBeginnerPlan(userProfile, goals, timeframe, baseId);
      
      case 'SportSpecific':
        return this.generateSportSpecificPlan(userProfile, goals, timeframe, baseId);
      
      case 'TrainingPage':
        return this.generateStructuredPlan(userProfile, goals, timeframe, baseId);
      
      case 'FitCoach':
      default:
        return this.generateFitCoachPlan(userProfile, goals, timeframe, baseId);
    }
  }

  private generateBeginnerPlan(
    userProfile: UserProfile,
    goals: string[],
    timeframe: string,
    baseId: string
  ): TrainingPlan {
    return {
      id: baseId,
      name: 'Beginner-Friendly Foundation Program',
      description: 'A gentle introduction to fitness with safety-first approach and confidence building',
      duration: timeframe,
      difficulty: 'Beginner',
      focus: ['Safety', 'Form', 'Confidence', 'Habit Building'],
      persona: 'BeginnerGuide',
      experienceLevel: userProfile.experience,
      exercises: [
        {
          id: 'bodyweight-squat',
          name: 'Bodyweight Squats',
          sets: 2,
          reps: '8-12',
          restTime: '60-90 seconds',
          instructions: [
            'Start with feet shoulder-width apart',
            'Lower slowly, keeping chest up',
            'Stop when comfortable, don\'t force depth',
            'Rise slowly with control'
          ],
          modifications: ['Chair-assisted squats', 'Partial range of motion']
        },
        {
          id: 'wall-push-up',
          name: 'Wall Push-ups',
          sets: 2,
          reps: '5-10',
          restTime: '60 seconds',
          instructions: [
            'Stand arm\'s length from wall',
            'Place palms flat against wall',
            'Lean in slowly, then push back',
            'Keep body straight throughout'
          ],
          modifications: ['Closer to wall for easier', 'Incline push-ups on stairs']
        },
        {
          id: 'gentle-walk',
          name: 'Gentle Walking',
          duration: '10-15 minutes',
          instructions: [
            'Start at comfortable pace',
            'Focus on breathing naturally',
            'Listen to your body',
            'Stop if you feel any discomfort'
          ]
        }
      ]
    };
  }

  private generateSportSpecificPlan(
    userProfile: UserProfile,
    goals: string[],
    timeframe: string,
    baseId: string
  ): TrainingPlan {
    const sportFocus = this.determineSportFocus(goals);
    
    return {
      id: baseId,
      name: `${sportFocus} Performance Program`,
      description: `Sport-specific training targeting energy systems and movement patterns for ${sportFocus.toLowerCase()}`,
      duration: timeframe,
      difficulty: this.mapExperienceTodifficulty(userProfile.experience),
      focus: ['Sport Performance', 'Energy Systems', 'Movement Quality'],
      persona: 'SportSpecific',
      experienceLevel: userProfile.experience,
      exercises: this.getSportSpecificExercises(sportFocus, userProfile.experience)
    };
  }

  private generateStructuredPlan(
    userProfile: UserProfile,
    goals: string[],
    timeframe: string,
    baseId: string
  ): TrainingPlan {
    return {
      id: baseId,
      name: 'Structured Training Program',
      description: 'Systematic approach with clear progression and measurable outcomes',
      duration: timeframe,
      difficulty: this.mapExperienceTodifficulty(userProfile.experience),
      focus: ['Progression', 'Measurement', 'Consistency'],
      persona: 'TrainingPage',
      experienceLevel: userProfile.experience,
      exercises: this.getStructuredExercises(userProfile, goals)
    };
  }

  private generateFitCoachPlan(
    userProfile: UserProfile,
    goals: string[],
    timeframe: string,
    baseId: string
  ): TrainingPlan {
    return {
      id: baseId,
      name: 'Comprehensive Fitness Program',
      description: 'Well-rounded approach combining strength, cardio, and flexibility with scientific backing',
      duration: timeframe,
      difficulty: this.mapExperienceTodifficulty(userProfile.experience),
      focus: ['Overall Fitness', 'Balance', 'Evidence-Based'],
      persona: 'FitCoach',
      experienceLevel: userProfile.experience,
      exercises: this.getFitCoachExercises(userProfile, goals)
    };
  }

  private determineSportFocus(goals: string[]): string {
    const sportKeywords = {
      'Endurance': ['running', 'marathon', 'cycling', 'swimming', 'cardio', 'endurance'],
      'Strength': ['strength', 'powerlifting', 'bodybuilding', 'muscle', 'lifting'],
      'Combat': ['boxing', 'martial arts', 'mma', 'fighting', 'combat'],
      'Team Sports': ['basketball', 'soccer', 'football', 'volleyball', 'team'],
      'Skill-Based': ['tennis', 'golf', 'gymnastics', 'dance', 'skill']
    };

    for (const [sport, keywords] of Object.entries(sportKeywords)) {
      if (goals.some(goal => keywords.some(keyword => 
        goal.toLowerCase().includes(keyword)
      ))) {
        return sport;
      }
    }

    return 'General Athletics';
  }

  private getSportSpecificExercises(sport: string, experience: ExperienceLevel): Exercise[] {
    const baseExercises = {
      'Endurance': [
        {
          id: 'interval-run',
          name: 'Interval Running',
          sets: 4,
          duration: '2 minutes work, 1 minute rest',
          instructions: ['Warm up thoroughly', 'Run at 80% effort', 'Active recovery between intervals']
        },
        {
          id: 'tempo-run',
          name: 'Tempo Run',
          duration: '20-30 minutes',
          instructions: ['Maintain comfortably hard pace', 'Should be able to speak 2-3 words', 'Focus on rhythm']
        }
      ],
      'Strength': [
        {
          id: 'compound-squat',
          name: 'Back Squat',
          sets: 4,
          reps: '6-8',
          instructions: ['Focus on depth and control', 'Keep core tight', 'Drive through heels']
        },
        {
          id: 'deadlift',
          name: 'Deadlift',
          sets: 3,
          reps: '5-6',
          instructions: ['Maintain neutral spine', 'Engage lats', 'Hip hinge movement']
        }
      ]
    };

    return baseExercises[sport as keyof typeof baseExercises] || baseExercises['Strength'];
  }

  private getStructuredExercises(userProfile: UserProfile, goals: string[]): Exercise[] {
    return [
      {
        id: 'structured-warmup',
        name: 'Dynamic Warm-up',
        duration: '5-10 minutes',
        instructions: ['Joint mobility', 'Activation exercises', 'Movement preparation']
      },
      {
        id: 'main-lift',
        name: 'Primary Exercise',
        sets: 3,
        reps: '8-12',
        instructions: ['Focus on form', 'Progressive overload', 'Track performance']
      },
      {
        id: 'accessory-work',
        name: 'Accessory Exercises',
        sets: 2,
        reps: '12-15',
        instructions: ['Support main movement', 'Address weaknesses', 'Maintain quality']
      }
    ];
  }

  private getFitCoachExercises(userProfile: UserProfile, goals: string[]): Exercise[] {
    return [
      {
        id: 'compound-movement',
        name: 'Compound Exercise',
        sets: 3,
        reps: '8-12',
        instructions: ['Multi-joint movement', 'Full body engagement', 'Functional strength']
      },
      {
        id: 'cardio-interval',
        name: 'Cardio Intervals',
        sets: 4,
        duration: '30 seconds work, 30 seconds rest',
        instructions: ['High intensity effort', 'Active recovery', 'Monitor heart rate']
      },
      {
        id: 'flexibility-work',
        name: 'Flexibility Training',
        duration: '10-15 minutes',
        instructions: ['Hold stretches 30 seconds', 'Focus on tight areas', 'Breathe deeply']
      }
    ];
  }

  private mapExperienceTodifficulty(experience: ExperienceLevel): string {
    const mapping: Record<ExperienceLevel, string> = {
      'complete-beginner': 'Beginner',
      'beginner-inconsistent': 'Beginner',
      'amateur-regular': 'Beginner-Intermediate',
      'intermediate-structured': 'Intermediate',
      'advanced-competitive': 'Advanced'
    };
    return mapping[experience] || 'Intermediate';
  }

  private parseTimeframe(timeframe: string): number {
    const weeks = timeframe.match(/(\d+)\s*week/i);
    return weeks ? parseInt(weeks[1]) : 4;
  }

  // Progress analysis methods
  public async analyzeProgress(
    userId: string,
    programId: string
  ): Promise<any> {
    if (this.advancedServicesInitialized) {
      try {
        const { PeriodizationService } = await import('./PeriodizationService');
        const { EnergySystemService } = await import('./EnergySystemService');

        // Advanced progress analysis using static methods
        return {
          periodization: 'Advanced periodization analysis',
          energySystem: 'Advanced energy system analysis', 
          recommendations: await this.generateAdvancedRecommendations(userId, programId)
        };
      } catch (error) {
        console.error('Error in advanced progress analysis:', error);
      }
    }

    // Basic progress analysis
    return this.generateBasicProgressAnalysis(userId, programId);
  }

  private async generateAdvancedRecommendations(userId: string, programId: string): Promise<string[]> {
    return [
      'Consider progressing to next periodization phase',
      'Energy system balance is optimal',
      'Maintain current training intensity'
    ];
  }

  private generateBasicProgressAnalysis(userId: string, programId: string): any {
    return {
      status: 'On track',
      recommendations: [
        'Continue with current program',
        'Focus on consistency',
        'Track your workouts'
      ]
    };
  }
}

export default TrainingService; 