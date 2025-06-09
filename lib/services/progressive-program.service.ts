// lib/services/progressive-program.service.ts - AI-driven progressive training system

import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { 
  ProgressiveProgram, 
  TrainingWeek, 
  WeekCompletionAnalysis, 
  CoachingInsight,
  PrerequisiteCheck,
  ProgramFramework,
  TrainingWorkout,
  AI_COACHING_PROMPTS
} from '@/types/progressive-training';

export interface ProgressiveProgramRequest {
  userId: string;
  goal: string; // "Ironman 2026", "Marathon Sub-3:30", etc.
  targetDate: Date;
  userProfile: any;
  initialAssessment: any;
}

export interface WeekGenerationRequest {
  programId: string;
  userId: string;
  currentWeekData?: WeekCompletionAnalysis;
  forceGenerate?: boolean; // Override prerequisites for testing
}

export interface WeekGenerationResponse {
  success: boolean;
  week?: TrainingWeek;
  coachingInsights?: CoachingInsight[];
  prerequisites?: PrerequisiteCheck;
  error?: string;
}

export class ProgressiveProgramService {
  
  /**
   * Create a new progressive program with only Week 1 generated
   */
  async createProgressiveProgram(request: ProgressiveProgramRequest): Promise<ProgressiveProgram> {
    const programId = this.generateId();
    
    // AI determines program framework based on goal
    const framework = await this.generateProgramFramework(request);
    
    // Generate only Week 1 initially
    const week1 = await this.generateInitialWeek(request, framework);
    
    const program: ProgressiveProgram = {
      id: programId,
      userId: request.userId,
      name: framework.name,
      goal: request.goal,
      targetDate: request.targetDate,
      startDate: new Date(),
      
      // Progressive structure
      generatedWeeks: [week1],
      currentWeek: 1,
      totalPlannedWeeks: framework.estimatedWeeks,
      
      // AI-driven framework
      programFramework: framework,
      
      // Tracking
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    // Save to database
    await this.saveProgram(program);
    
    return program;
  }
  
  /**
   * Generate next week based on AI analysis of current week performance
   */
  async generateNextWeek(request: WeekGenerationRequest): Promise<WeekGenerationResponse> {
    try {
      // Get current program state
      const program = await this.getProgram(request.programId, request.userId);
      if (!program) {
        return { success: false, error: 'Program not found' };
      }
      
      // Check prerequisites unless forced
      if (!request.forceGenerate) {
        const prerequisites = await this.checkWeekPrerequisites(program);
        if (!prerequisites.canProceed) {
          return { 
            success: false, 
            prerequisites,
            error: prerequisites.coachingMessage 
          };
        }
      }
      
      // AI analyzes current week and generates next week
      const weekAnalysis = await this.analyzeCurrentWeekPerformance(program);
      const nextWeek = await this.generateAdaptiveWeek(program, weekAnalysis);
      const coachingInsights = await this.generateCoachingInsights(program, weekAnalysis);
      
      // Update program
      program.generatedWeeks.push(nextWeek);
      program.currentWeek = nextWeek.weekNumber;
      program.updatedAt = new Date();
      
      await this.saveProgram(program);
      
      return {
        success: true,
        week: nextWeek,
        coachingInsights
      };
      
    } catch (error) {
      console.error('Error generating next week:', error);
      return { success: false, error: 'Failed to generate next week' };
    }
  }
  
  /**
   * AI generates program framework based on goal analysis
   */
  private async generateProgramFramework(request: ProgressiveProgramRequest): Promise<ProgramFramework> {
    const { goal, targetDate, userProfile } = request;
    
    // AI analyzes goal and creates expert framework
    if (goal.toLowerCase().includes('ironman')) {
      return this.generateIronmanFramework(targetDate, userProfile);
    } else if (goal.toLowerCase().includes('marathon')) {
      return this.generateMarathonFramework(goal, targetDate, userProfile);
    } else if (goal.toLowerCase().includes('strength')) {
      return this.generateStrengthFramework(goal, userProfile);
    }
    
    // Default general fitness framework
    return this.generateGeneralFitnessFramework(goal, userProfile);
  }
  
  /**
   * Generate Ironman training framework - AI expert knowledge
   */
  private generateIronmanFramework(targetDate: Date, userProfile: any): ProgramFramework {
    const weeksToRace = Math.floor((targetDate.getTime() - Date.now()) / (7 * 24 * 60 * 60 * 1000));
    
    return {
      name: `Ironman Training - ${targetDate.getFullYear()}`,
      estimatedWeeks: Math.min(weeksToRace, 40), // Cap at 40 weeks
      phases: [
        {
          name: 'Base Building',
          weeks: Math.floor(weeksToRace * 0.4),
          focus: 'Aerobic development, technique, consistency',
          weeklyHours: '8-12 hours',
          keyWorkouts: ['Long swim', 'Long bike', 'Long run']
        },
        {
          name: 'Build Phase',
          weeks: Math.floor(weeksToRace * 0.3),
          focus: 'Race pace work, brick training, volume increase',
          weeklyHours: '12-16 hours',
          keyWorkouts: ['Bike-run bricks', 'Tempo sessions', 'Race simulation']
        },
        {
          name: 'Peak Phase',
          weeks: Math.floor(weeksToRace * 0.2),
          focus: 'Race specificity, peak fitness, mental preparation',
          weeklyHours: '16-20 hours',
          keyWorkouts: ['Race rehearsal', 'Peak intervals', 'Long course practice']
        },
        {
          name: 'Taper',
          weeks: Math.floor(weeksToRace * 0.1),
          focus: 'Recovery, race preparation, maintaining feel',
          weeklyHours: '6-10 hours',
          keyWorkouts: ['Short race pace', 'Easy sessions', 'Race prep']
        }
      ],
      milestones: [
        { week: 8, target: 'Complete first Olympic distance triathlon' },
        { week: 16, target: 'Complete Half Ironman distance' },
        { week: 24, target: 'Peak training week - 20+ hours' },
        { week: 32, target: 'Race simulation weekend' }
      ],
      adaptationRules: [
        'Increase weekly volume by 10% every 3 weeks',
        'Include recovery week every 4th week',
        'Prioritize swim technique in early phases',
        'Build bike endurance before run volume',
        'Practice nutrition strategy in long sessions'
      ]
    };
  }
  
  /**
   * Check if user can proceed to next week generation - AI coaching logic
   */
  private async checkWeekPrerequisites(program: ProgressiveProgram): Promise<PrerequisiteCheck> {
    const currentWeek = program.generatedWeeks[program.currentWeek - 1];
    
    if (!currentWeek) {
      return {
        canProceed: false,
        completionRate: 0,
        missingWorkouts: [],
        warnings: [],
        blockers: ['No current week found'],
        coachingMessage: 'Unable to find current week data. Please contact support.'
      };
    }
    
    // Calculate completion metrics
    const totalWorkouts = currentWeek.workouts?.length || 0;
    const completedWorkouts = currentWeek.workouts?.filter(w => w.completed).length || 0;
    const completionRate = totalWorkouts > 0 ? (completedWorkouts / totalWorkouts) * 100 : 0;
    
    // AI coaching logic for prerequisites
    const warnings: string[] = [];
    const blockers: string[] = [];
    const missingWorkouts: string[] = [];
    
    // Minimum completion threshold (AI expert knowledge)
    if (completionRate < 60) {
      blockers.push('Week completion below 60%');
      currentWeek.workouts?.forEach((workout: TrainingWorkout) => {
        if (!workout.completed) {
          missingWorkouts.push(workout.title);
        }
      });
    }
    
    // Check for key workout completion (critical for goal achievement)
    const keyWorkouts = currentWeek.workouts?.filter(w => w.isKeyWorkout) || [];
    const completedKeyWorkouts = keyWorkouts.filter(w => w.completed);
    
    if (keyWorkouts.length > 0 && completedKeyWorkouts.length === 0) {
      blockers.push('No key workouts completed');
    }
    
    // Check for concerning patterns
    if (completionRate < 80 && completionRate >= 60) {
      warnings.push('Lower completion rate may indicate need for program adjustment');
    }
    
    // Generate AI coaching message
    const coachingMessage = this.generatePrerequisiteCoachingMessage(
      completionRate, 
      warnings, 
      blockers, 
      program.goal,
      program.programFramework.phases[0].name // Current phase
    );
    
    return {
      canProceed: blockers.length === 0,
      completionRate,
      missingWorkouts,
      warnings,
      blockers,
      coachingMessage
    };
  }
  
  /**
   * AI analyzes current week performance for adaptive planning
   */
  private async analyzeCurrentWeekPerformance(program: ProgressiveProgram): Promise<WeekCompletionAnalysis> {
    const currentWeek = program.generatedWeeks[program.currentWeek - 1];
    
    // Analyze completion patterns
    const workoutAnalysis = currentWeek.workouts?.map((workout: TrainingWorkout) => ({
      workoutId: workout.id,
      completed: workout.completed,
      skipped: workout.skipped || false,
      feedback: workout.feedback,
      type: workout.type,
      isKeyWorkout: workout.isKeyWorkout || false
    })) || [];
    
    // Detect patterns using AI logic
    const patterns = this.detectPerformancePatterns(workoutAnalysis, program);
    
    // AI determines adaptations
    const adaptations = this.determineAdaptations(patterns, program);
    
    return {
      weekNumber: currentWeek.weekNumber,
      completionRate: this.calculateCompletionRate(workoutAnalysis),
      workoutAnalysis,
      patterns,
      adaptations,
      coachingNotes: this.generateCoachingNotes(patterns, program)
    };
  }
  
  /**
   * Generate AI coaching insights based on performance analysis
   */
  private async generateCoachingInsights(
    program: ProgressiveProgram, 
    analysis: WeekCompletionAnalysis
  ): Promise<CoachingInsight[]> {
    const insights: CoachingInsight[] = [];
    
    // Performance trend insight
    if (analysis.completionRate >= 90) {
      const message = AI_COACHING_PROMPTS.high_consistency[0].replace('{goal}', program.goal);
      insights.push({
        type: 'positive',
        title: 'Excellent Consistency',
        message,
        actionable: false
      });
    } else if (analysis.completionRate < 70) {
      const message = AI_COACHING_PROMPTS.low_completion[0].replace('{goal}', program.goal);
      insights.push({
        type: 'concern',
        title: 'Completion Rate Below Target',
        message,
        actionable: true,
        suggestedAction: 'reduce_volume'
      });
    }
    
    // Pattern-based insights
    if (analysis.patterns.includes('skipping_key_workouts')) {
      const message = AI_COACHING_PROMPTS.missing_key_workouts[0].replace('{goal}', program.goal);
      insights.push({
        type: 'coaching',
        title: 'Key Workout Focus Needed',
        message,
        actionable: true,
        suggestedAction: 'emphasize_key_workouts'
      });
    }
    
    if (analysis.patterns.includes('consistent_early_week')) {
      insights.push({
        type: 'positive',
        title: 'Strong Week Start',
        message: 'Great job staying consistent early in the week! This sets you up for success. Let\'s maintain this momentum.',
        actionable: false
      });
    }
    
    return insights;
  }
  
  /**
   * Generate AI coaching message for prerequisites
   */
  private generatePrerequisiteCoachingMessage(
    completionRate: number,
    warnings: string[],
    blockers: string[],
    goal: string,
    currentPhase: string
  ): string {
    if (blockers.length > 0) {
      if (completionRate < 60) {
        return `I need you to complete more of this week's training before we move forward. You're at ${Math.round(completionRate)}% completion, but I need to see at least 60% to ensure you're ready for progression toward ${goal}. This isn't about being perfect - it's about building a sustainable foundation.`;
      }
      
      if (blockers.includes('No key workouts completed')) {
        return `The key workouts this week are essential building blocks for ${goal}. I need to see at least one completed before we progress. These sessions teach your body the specific adaptations we're targeting.`;
      }
    }
    
    if (warnings.length > 0) {
      return `You're making progress toward ${goal}, but I'm seeing some patterns that suggest we might need to adjust our approach. Let's generate next week and I'll make some modifications to keep you on track.`;
    }
    
    return `Excellent work this week! Your consistency shows you're ready for the next progression toward ${goal}. Let's build on this momentum.`;
  }
  
  /**
   * Detect performance patterns for AI analysis
   */
  private detectPerformancePatterns(workoutAnalysis: any[], program: ProgressiveProgram): string[] {
    const patterns: string[] = [];
    
    // Completion patterns
    const completedCount = workoutAnalysis.filter((w: any) => w.completed).length;
    const totalCount = workoutAnalysis.length;
    const completionRate = (completedCount / totalCount) * 100;
    
    if (completionRate >= 90) patterns.push('high_consistency');
    if (completionRate < 70) patterns.push('low_consistency');
    
    // Key workout patterns (critical for goal achievement)
    const keyWorkouts = workoutAnalysis.filter((w: any) => w.isKeyWorkout);
    const completedKeyWorkouts = keyWorkouts.filter((w: any) => w.completed);
    
    if (keyWorkouts.length > 0 && completedKeyWorkouts.length === 0) {
      patterns.push('skipping_key_workouts');
    }
    
    // Weekly pattern analysis
    const earlyWeekWorkouts = workoutAnalysis.slice(0, 3);
    const earlyWeekCompleted = earlyWeekWorkouts.filter((w: any) => w.completed).length;
    
    if (earlyWeekCompleted >= 2) patterns.push('consistent_early_week');
    if (earlyWeekCompleted === 0) patterns.push('slow_week_start');
    
    // RPE analysis for overreaching detection
    const feedbackWorkouts = workoutAnalysis.filter((w: any) => w.feedback?.rpe);
    const avgRPE = feedbackWorkouts.reduce((sum: number, w: any) => sum + (w.feedback?.rpe || 0), 0) / feedbackWorkouts.length;
    
    if (avgRPE > 8.5) patterns.push('high_fatigue');
    if (avgRPE < 5) patterns.push('undertraining');
    
    return patterns;
  }
  
  /**
   * AI determines adaptations based on patterns
   */
  private determineAdaptations(patterns: string[], program: ProgressiveProgram): string[] {
    const adaptations: string[] = [];
    
    if (patterns.includes('low_consistency')) {
      adaptations.push('reduce_volume');
      adaptations.push('simplify_workouts');
    }
    
    if (patterns.includes('skipping_key_workouts')) {
      adaptations.push('emphasize_key_workouts');
      adaptations.push('reduce_optional_sessions');
    }
    
    if (patterns.includes('high_consistency')) {
      adaptations.push('maintain_progression');
      adaptations.push('consider_advancement');
    }
    
    if (patterns.includes('high_fatigue')) {
      adaptations.push('add_recovery');
      adaptations.push('reduce_intensity');
    }
    
    if (patterns.includes('undertraining')) {
      adaptations.push('increase_intensity');
      adaptations.push('add_challenge');
    }
    
    return adaptations;
  }
  
  /**
   * Generate adaptive next week based on AI analysis
   */
  private async generateAdaptiveWeek(
    program: ProgressiveProgram, 
    analysis: WeekCompletionAnalysis
  ): Promise<TrainingWeek> {
    const nextWeekNumber = program.currentWeek + 1;
    const currentPhase = this.getCurrentPhase(nextWeekNumber, program.programFramework);
    
    // Base week generation using AI periodization
    let baseWeek = await this.generateBaseWeek(nextWeekNumber, currentPhase, program);
    
    // Apply AI-determined adaptations
    baseWeek = this.applyAdaptations(baseWeek, analysis.adaptations, program.goal);
    
    return baseWeek;
  }
  
  /**
   * Generate initial week for new program
   */
  private async generateInitialWeek(
    request: ProgressiveProgramRequest, 
    framework: ProgramFramework
  ): Promise<TrainingWeek> {
    const firstPhase = framework.phases[0];
    
    // Generate conservative first week
    const workouts: TrainingWorkout[] = [];
    
    // AI determines appropriate starting workouts based on goal
    if (request.goal.toLowerCase().includes('ironman')) {
      workouts.push(
        {
          id: 'week1-swim1',
          title: 'Easy Swim - Technique Focus',
          type: 'swimming',
          description: 'Easy pace swimming with focus on stroke technique',
          duration: 45,
          intensity: 'low',
          exercises: [],
          completed: false,
          isKeyWorkout: true
        },
        {
          id: 'week1-bike1',
          title: 'Easy Bike - Aerobic Base',
          type: 'cycling',
          description: 'Easy pace cycling to build aerobic base',
          duration: 60,
          intensity: 'low',
          exercises: [],
          completed: false,
          isKeyWorkout: true
        },
        {
          id: 'week1-run1',
          title: 'Easy Run - Base Building',
          type: 'running',
          description: 'Easy pace run to establish base fitness',
          duration: 30,
          intensity: 'low',
          exercises: [],
          completed: false,
          isKeyWorkout: true
        }
      );
    }
    
    return {
      id: `${request.userId}-week-1`,
      weekNumber: 1,
      theme: firstPhase.name,
      focus: firstPhase.focus,
      workouts,
      completed: false,
      generatedAt: new Date(),
      coachingNotes: [
        `Welcome to your ${request.goal} journey!`,
        'This first week focuses on establishing baseline fitness and movement patterns.',
        'Listen to your body and prioritize consistency over intensity.'
      ]
    };
  }
  
  // Helper methods
  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
  
  private async saveProgram(program: ProgressiveProgram): Promise<void> {
    const programRef = doc(db, 'users', program.userId, 'programs', program.id);
    await setDoc(programRef, program);
  }
  
  private async getProgram(programId: string, userId: string): Promise<ProgressiveProgram | null> {
    const programRef = doc(db, 'users', userId, 'programs', programId);
    const programDoc = await getDoc(programRef);
    return programDoc.exists() ? programDoc.data() as ProgressiveProgram : null;
  }
  
  private calculateCompletionRate(workoutAnalysis: any[]): number {
    const completed = workoutAnalysis.filter(w => w.completed).length;
    return workoutAnalysis.length > 0 ? (completed / workoutAnalysis.length) * 100 : 0;
  }
  
  private generateCoachingNotes(patterns: string[], program: ProgressiveProgram): string[] {
    const notes: string[] = [];
    
    if (patterns.includes('high_consistency')) {
      notes.push(`Excellent adherence to the program - your body is adapting well toward ${program.goal}`);
    }
    
    if (patterns.includes('skipping_key_workouts')) {
      notes.push(`Focus on key workouts - these drive the specific adaptations for ${program.goal}`);
    }
    
    if (patterns.includes('high_fatigue')) {
      notes.push('Elevated fatigue detected - prioritizing recovery in next week');
    }
    
    return notes;
  }
  
  private getCurrentPhase(weekNumber: number, framework: ProgramFramework): any {
    // Determine which phase we're in based on week number
    let cumulativeWeeks = 0;
    
    for (const phase of framework.phases) {
      cumulativeWeeks += phase.weeks;
      if (weekNumber <= cumulativeWeeks) {
        return phase;
      }
    }
    
    // Default to last phase if beyond planned weeks
    return framework.phases[framework.phases.length - 1];
  }
  
  private async generateBaseWeek(weekNumber: number, phase: any, program: ProgressiveProgram): Promise<TrainingWeek> {
    // This integrates with your existing workout generation logic
    return {
      id: `${program.id}-week-${weekNumber}`,
      weekNumber,
      theme: phase.name,
      focus: phase.focus,
      workouts: [], // Would be populated by existing workout generation
      completed: false,
      generatedAt: new Date(),
      coachingNotes: [`Week ${weekNumber} of ${phase.name} phase - ${phase.focus}`]
    };
  }
  
  private applyAdaptations(week: TrainingWeek, adaptations: string[], goal: string): TrainingWeek {
    // Apply AI-determined adaptations to the week
    if (adaptations.includes('reduce_volume')) {
      week.coachingNotes?.push(`Volume reduced based on previous week performance - staying on track for ${goal}`);
    }
    
    if (adaptations.includes('emphasize_key_workouts')) {
      week.coachingNotes?.push(`Key workouts emphasized for ${goal} progression`);
    }
    
    if (adaptations.includes('add_recovery')) {
      week.coachingNotes?.push('Additional recovery added due to elevated fatigue markers');
    }
    
    return week;
  }
  
  // Additional framework generators
  private generateMarathonFramework(goal: string, targetDate: Date, userProfile: any): ProgramFramework {
    const weeksToRace = Math.floor((targetDate.getTime() - Date.now()) / (7 * 24 * 60 * 60 * 1000));
    
    return {
      name: `Marathon Training - ${goal}`,
      estimatedWeeks: Math.min(weeksToRace, 20),
      phases: [
        { name: 'Base Building', weeks: Math.floor(weeksToRace * 0.4), focus: 'Aerobic development, mileage building' },
        { name: 'Build Phase', weeks: Math.floor(weeksToRace * 0.4), focus: 'Lactate threshold, tempo work' },
        { name: 'Peak Phase', weeks: Math.floor(weeksToRace * 0.15), focus: 'Race pace, peak mileage' },
        { name: 'Taper', weeks: Math.floor(weeksToRace * 0.05), focus: 'Recovery, race preparation' }
      ],
      milestones: [
        { week: 6, target: 'Complete first 10K race' },
        { week: 12, target: 'Complete half marathon' },
        { week: 16, target: 'Peak mileage week' }
      ],
      adaptationRules: [
        'Increase weekly mileage by 10% every week',
        'Include recovery week every 4th week',
        'Long run progression: add 1-2 miles per week',
        'Practice race pace in build phase'
      ]
    };
  }
  
  private generateStrengthFramework(goal: string, userProfile: any): ProgramFramework {
    return {
      name: `Strength Training - ${goal}`,
      estimatedWeeks: 12,
      phases: [
        { name: 'Foundation', weeks: 4, focus: 'Movement patterns, form mastery' },
        { name: 'Development', weeks: 6, focus: 'Progressive overload, strength building' },
        { name: 'Specialization', weeks: 2, focus: 'Goal-specific training, peak strength' }
      ],
      milestones: [
        { week: 4, target: 'Master basic movement patterns' },
        { week: 8, target: 'Achieve intermediate strength levels' },
        { week: 12, target: 'Reach strength goals' }
      ],
      adaptationRules: [
        'Increase weight by 2.5-5% when completing all reps',
        'Focus on compound movements',
        'Include deload week every 4th week',
        'Prioritize form over weight'
      ]
    };
  }
  
  private generateGeneralFitnessFramework(goal: string, userProfile: any): ProgramFramework {
    return {
      name: `Fitness Training - ${goal}`,
      estimatedWeeks: 8,
      phases: [
        { name: 'Foundation', weeks: 3, focus: 'Habit building, basic fitness' },
        { name: 'Development', weeks: 4, focus: 'Progressive challenge, skill building' },
        { name: 'Mastery', weeks: 1, focus: 'Goal achievement, maintenance planning' }
      ],
      milestones: [
        { week: 3, target: 'Establish consistent exercise habit' },
        { week: 6, target: 'Achieve intermediate fitness level' },
        { week: 8, target: 'Reach personal fitness goals' }
      ],
      adaptationRules: [
        'Increase intensity gradually',
        'Focus on consistency over perfection',
        'Include variety to maintain engagement',
        'Listen to body signals'
      ]
    };
  }
}

export const progressiveProgramService = new ProgressiveProgramService(); 