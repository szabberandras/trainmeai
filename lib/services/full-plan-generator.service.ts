// lib/services/full-plan-generator.service.ts - Full plan generation with framework overview

import { 
  ProgressiveProgram, 
  ProgramFramework, 
  FrameworkWeek, 
  WeeklyProgression, 
  TrainingWeek, 
  TrainingWorkout 
} from '@/lib/types/progressive-training';
import { ALL_STRUCTURED_WORKOUTS, getWorkoutsByType, recommendWorkouts } from '@/lib/exercises/structured-workouts';

export interface FullPlanRequest {
  userId: string;
  goal: string;
  targetDate: Date;
  userProfile: any;
  includeExport?: boolean;
}

export interface FullPlanResponse {
  success: boolean;
  program?: ProgressiveProgram;
  frameworkWeeks?: FrameworkWeek[];
  exportOptions?: {
    formats: string[];
    estimatedSize: string;
  };
  error?: string;
}

export class FullPlanGeneratorService {
  
  /**
   * Generate complete program with framework overview
   * User can see the full plan but details are generated on-demand
   */
  async generateFullPlan(request: FullPlanRequest): Promise<FullPlanResponse> {
    try {
      const programId = this.generateId();
      
      // Generate comprehensive framework
      const framework = await this.generateComprehensiveFramework(request);
      
      // Create framework weeks (high-level overview)
      const frameworkWeeks = await this.generateFrameworkWeeks(framework, request);
      
      // Generate detailed Week 1 (always accessible)
      const week1 = await this.generateDetailedWeek(1, framework, request);
      
      const program: ProgressiveProgram = {
        id: programId,
        userId: request.userId,
        name: framework.name,
        goal: request.goal,
        targetDate: request.targetDate,
        startDate: new Date(),
        
        // Full plan generation
        generationType: 'full_plan',
        generatedWeeks: [week1],
        frameworkWeeks,
        currentWeek: 1,
        totalPlannedWeeks: framework.estimatedWeeks,
        
        programFramework: framework,
        
        // Export capabilities
        exportable: true,
        exportFormats: ['pdf', 'csv', 'json'],
        
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      };
      
      // Save to database
      await this.saveProgram(program);
      
      const exportOptions = request.includeExport ? {
        formats: ['PDF (Complete Plan)', 'CSV (Weekly Data)', 'JSON (Full Data)'],
        estimatedSize: this.estimateExportSize(framework.estimatedWeeks)
      } : undefined;
      
      return {
        success: true,
        program,
        frameworkWeeks,
        exportOptions
      };
      
    } catch (error) {
      console.error('Error generating full plan:', error);
      return { success: false, error: 'Failed to generate full plan' };
    }
  }
  
  /**
   * Generate detailed week when user accesses it
   * Converts framework week to detailed week with exercises
   */
  async generateDetailedWeekFromFramework(
    programId: string, 
    userId: string, 
    weekNumber: number
  ): Promise<{ success: boolean; week?: TrainingWeek; error?: string }> {
    try {
      const program = await this.getProgram(programId, userId);
      if (!program) {
        return { success: false, error: 'Program not found' };
      }
      
      // Check if week is already detailed
      const existingWeek = program.generatedWeeks.find(w => w.weekNumber === weekNumber);
      if (existingWeek) {
        return { success: true, week: existingWeek };
      }
      
      // Check prerequisites for accessing this week
      const canAccess = await this.checkWeekAccess(program, weekNumber);
      if (!canAccess.allowed) {
        return { success: false, error: canAccess.reason };
      }
      
      // Generate detailed week from framework
      const detailedWeek = await this.generateDetailedWeek(weekNumber, program.programFramework, {
        userId,
        goal: program.goal,
        targetDate: program.targetDate,
        userProfile: {} // Could be enhanced with stored profile
      });
      
      // Update program
      program.generatedWeeks.push(detailedWeek);
      
      // Update framework week status
      if (program.frameworkWeeks) {
        const frameworkWeek = program.frameworkWeeks.find(w => w.weekNumber === weekNumber);
        if (frameworkWeek) {
          frameworkWeek.detailLevel = 'detailed';
          frameworkWeek.generatedAt = new Date();
        }
      }
      
      program.updatedAt = new Date();
      await this.saveProgram(program);
      
      return { success: true, week: detailedWeek };
      
    } catch (error) {
      console.error('Error generating detailed week:', error);
      return { success: false, error: 'Failed to generate detailed week' };
    }
  }
  
  /**
   * Export full plan in various formats
   */
  async exportFullPlan(
    programId: string, 
    userId: string, 
    format: 'pdf' | 'csv' | 'json'
  ): Promise<{ success: boolean; data?: any; filename?: string; error?: string }> {
    try {
      const program = await this.getProgram(programId, userId);
      if (!program) {
        return { success: false, error: 'Program not found' };
      }
      
      if (!program.exportable) {
        return { success: false, error: 'Program is not exportable' };
      }
      
      const exportData = await this.generateExportData(program, format);
      const filename = `${program.name.replace(/\s+/g, '_')}_${format.toUpperCase()}_${new Date().toISOString().split('T')[0]}`;
      
      return {
        success: true,
        data: exportData,
        filename
      };
      
    } catch (error) {
      console.error('Error exporting plan:', error);
      return { success: false, error: 'Failed to export plan' };
    }
  }
  
  /**
   * Generate comprehensive framework with weekly progression
   */
  private async generateComprehensiveFramework(request: FullPlanRequest): Promise<ProgramFramework> {
    const { goal, targetDate, userProfile } = request;
    const weeksToGoal = Math.floor((targetDate.getTime() - Date.now()) / (7 * 24 * 60 * 60 * 1000));
    
    // AI determines framework based on goal
    let baseFramework: ProgramFramework;
    
    if (goal.toLowerCase().includes('ironman')) {
      baseFramework = this.generateIronmanFullFramework(targetDate, userProfile);
    } else if (goal.toLowerCase().includes('marathon')) {
      baseFramework = this.generateMarathonFullFramework(goal, targetDate, userProfile);
    } else if (goal.toLowerCase().includes('strength')) {
      baseFramework = this.generateStrengthFullFramework(goal, userProfile);
    } else {
      baseFramework = this.generateGeneralFitnessFullFramework(goal, userProfile);
    }
    
    // Add weekly progression details
    baseFramework.weeklyProgression = this.generateWeeklyProgression(baseFramework, weeksToGoal);
    
    return baseFramework;
  }
  
  /**
   * Generate framework weeks - high level overview
   */
  private async generateFrameworkWeeks(
    framework: ProgramFramework, 
    request: FullPlanRequest
  ): Promise<FrameworkWeek[]> {
    const frameworkWeeks: FrameworkWeek[] = [];
    
    for (let weekNum = 1; weekNum <= framework.estimatedWeeks; weekNum++) {
      const progression = framework.weeklyProgression?.find(w => w.weekNumber === weekNum);
      const phase = this.getCurrentPhase(weekNum, framework);
      
      frameworkWeeks.push({
        id: this.generateId(),
        weekNumber: weekNum,
        theme: this.generateWeekTheme(weekNum, phase, progression),
        focus: progression?.intensityFocus || phase.focus,
        phase: phase.name,
        estimatedHours: this.estimateWeeklyHours(weekNum, phase, progression),
        keyWorkoutTypes: progression?.keyWorkouts || phase.keyWorkouts || [],
        workoutCount: this.estimateWorkoutCount(phase, progression),
        detailLevel: weekNum === 1 ? 'detailed' : 'framework',
        canAccess: weekNum === 1, // Only Week 1 accessible initially
        generatedAt: weekNum === 1 ? new Date() : undefined
      });
    }
    
    return frameworkWeeks;
  }
  
  /**
   * Check if user can access a specific week
   */
  private async checkWeekAccess(
    program: ProgressiveProgram, 
    weekNumber: number
  ): Promise<{ allowed: boolean; reason?: string }> {
    // Week 1 is always accessible
    if (weekNumber === 1) {
      return { allowed: true };
    }
    
    // For full plans, allow access to next week if current week is 60% complete
    const previousWeek = program.generatedWeeks.find(w => w.weekNumber === weekNumber - 1);
    if (!previousWeek) {
      return { allowed: false, reason: 'Previous week not yet generated' };
    }
    
    const completionRate = this.calculateWeekCompletion(previousWeek);
    if (completionRate < 60) {
      return { 
        allowed: false, 
        reason: `Complete at least 60% of Week ${weekNumber - 1} to access Week ${weekNumber}. Current: ${Math.round(completionRate)}%` 
      };
    }
    
    return { allowed: true };
  }
  
  /**
   * Generate detailed week with exercises
   */
  private async generateDetailedWeek(
    weekNumber: number, 
    framework: ProgramFramework, 
    request: Partial<FullPlanRequest>
  ): Promise<TrainingWeek> {
    const progression = framework.weeklyProgression?.find(w => w.weekNumber === weekNumber);
    const phase = this.getCurrentPhase(weekNumber, framework);
    
    // Generate workouts based on phase and progression
    const workouts = await this.generateWeekWorkouts(weekNumber, phase, progression, request.goal || '');
    
    return {
      id: this.generateId(),
      weekNumber,
      theme: this.generateWeekTheme(weekNumber, phase, progression),
      focus: progression?.intensityFocus || phase.focus,
      workouts,
      completed: false,
      generatedAt: new Date(),
      coachingNotes: this.generateWeekCoachingNotes(weekNumber, phase, progression)
    };
  }
  
  /**
   * Generate workouts for a specific week
   */
  private async generateWeekWorkouts(
    weekNumber: number,
    phase: any,
    progression: WeeklyProgression | undefined,
    goal: string
  ): Promise<TrainingWorkout[]> {
    const workouts: TrainingWorkout[] = [];
    const keyWorkouts = progression?.keyWorkouts || phase.keyWorkouts || [];
    
    // Generate based on goal type
    if (goal.toLowerCase().includes('ironman')) {
      workouts.push(...this.generateIronmanWeekWorkouts(weekNumber, phase, progression));
    } else if (goal.toLowerCase().includes('marathon')) {
      workouts.push(...this.generateMarathonWeekWorkouts(weekNumber, phase, progression));
    } else if (goal.toLowerCase().includes('strength')) {
      workouts.push(...this.generateStrengthWeekWorkouts(weekNumber, phase, progression));
    } else {
      workouts.push(...this.generateGeneralWeekWorkouts(weekNumber, phase, progression));
    }
    
    return workouts;
  }
  
  // Helper methods for different disciplines
  private generateIronmanWeekWorkouts(weekNumber: number, phase: any, progression?: WeeklyProgression): TrainingWorkout[] {
    // Implementation for Ironman workouts
    return [
      {
        id: this.generateId(),
        title: 'Long Swim',
        type: 'swimming',
        description: 'Endurance swim with technique focus',
        duration: 60 + (weekNumber * 5), // Progressive duration
        intensity: 'moderate',
        exercises: [],
        completed: false,
        isKeyWorkout: true
      },
      {
        id: this.generateId(),
        title: 'Long Bike',
        type: 'cycling',
        description: 'Aerobic base building ride',
        duration: 120 + (weekNumber * 10),
        intensity: 'low',
        exercises: [],
        completed: false,
        isKeyWorkout: true
      },
      {
        id: this.generateId(),
        title: 'Long Run',
        type: 'running',
        description: 'Easy aerobic run',
        duration: 60 + (weekNumber * 8),
        intensity: 'low',
        exercises: [],
        completed: false,
        isKeyWorkout: true
      }
    ];
  }
  
  private generateMarathonWeekWorkouts(weekNumber: number, phase: any, progression?: WeeklyProgression): TrainingWorkout[] {
    // Implementation for Marathon workouts
    return [
      {
        id: this.generateId(),
        title: 'Long Run',
        type: 'running',
        description: 'Weekly long run progression',
        duration: 60 + (weekNumber * 10),
        intensity: 'low',
        exercises: [],
        completed: false,
        isKeyWorkout: true
      },
      {
        id: this.generateId(),
        title: 'Tempo Run',
        type: 'running',
        description: 'Comfortably hard pace',
        duration: 45,
        intensity: 'high',
        exercises: [],
        completed: false,
        isKeyWorkout: true
      }
    ];
  }
  
  private generateStrengthWeekWorkouts(weekNumber: number, phase: any, progression?: WeeklyProgression): TrainingWorkout[] {
    // Implementation for Strength workouts
    return [
      {
        id: this.generateId(),
        title: 'Upper Body Strength',
        type: 'strength',
        description: 'Compound upper body movements',
        duration: 60,
        intensity: 'high',
        exercises: [],
        completed: false,
        isKeyWorkout: true
      },
      {
        id: this.generateId(),
        title: 'Lower Body Strength',
        type: 'strength',
        description: 'Compound lower body movements',
        duration: 60,
        intensity: 'high',
        exercises: [],
        completed: false,
        isKeyWorkout: true
      }
    ];
  }
  
  private generateGeneralWeekWorkouts(weekNumber: number, phase: any, progression?: WeeklyProgression): TrainingWorkout[] {
    // Implementation for General fitness workouts
    return [
      {
        id: this.generateId(),
        title: 'Cardio Session',
        type: 'cardio',
        description: 'General cardiovascular training',
        duration: 45,
        intensity: 'moderate',
        exercises: [],
        completed: false,
        isKeyWorkout: false
      },
      {
        id: this.generateId(),
        title: 'Strength Training',
        type: 'strength',
        description: 'Full body strength session',
        duration: 45,
        intensity: 'moderate',
        exercises: [],
        completed: false,
        isKeyWorkout: true
      }
    ];
  }
  
  // Framework generation methods for different disciplines
  private generateIronmanFullFramework(targetDate: Date, userProfile: any): ProgramFramework {
    const weeksToRace = Math.floor((targetDate.getTime() - Date.now()) / (7 * 24 * 60 * 60 * 1000));
    
    return {
      name: `Ironman Training Plan - ${targetDate.getFullYear()}`,
      estimatedWeeks: Math.min(weeksToRace, 40),
      phases: [
        {
          name: 'Base Building',
          weeks: Math.floor(weeksToRace * 0.4),
          focus: 'Aerobic development and technique',
          weeklyHours: '8-12 hours',
          keyWorkouts: ['Long swim', 'Long bike', 'Long run']
        },
        {
          name: 'Build Phase',
          weeks: Math.floor(weeksToRace * 0.3),
          focus: 'Race pace and brick training',
          weeklyHours: '12-16 hours',
          keyWorkouts: ['Bike-run bricks', 'Tempo sessions']
        },
        {
          name: 'Peak Phase',
          weeks: Math.floor(weeksToRace * 0.2),
          focus: 'Race specificity',
          weeklyHours: '16-20 hours',
          keyWorkouts: ['Race rehearsal', 'Peak intervals']
        },
        {
          name: 'Taper',
          weeks: Math.floor(weeksToRace * 0.1),
          focus: 'Recovery and race prep',
          weeklyHours: '6-10 hours',
          keyWorkouts: ['Short race pace', 'Easy sessions']
        }
      ],
      milestones: [
        { week: 8, target: 'Complete Olympic distance' },
        { week: 16, target: 'Complete Half Ironman' },
        { week: 24, target: 'Peak training week' }
      ],
      adaptationRules: [
        'Increase volume by 10% every 3 weeks',
        'Recovery week every 4th week',
        'Prioritize swim technique early'
      ]
    };
  }
  
  private generateMarathonFullFramework(goal: string, targetDate: Date, userProfile: any): ProgramFramework {
    const weeksToRace = Math.floor((targetDate.getTime() - Date.now()) / (7 * 24 * 60 * 60 * 1000));
    
    return {
      name: `Marathon Training - ${goal}`,
      estimatedWeeks: Math.min(weeksToRace, 20),
      phases: [
        {
          name: 'Base Building',
          weeks: Math.floor(weeksToRace * 0.5),
          focus: 'Mileage and aerobic development',
          keyWorkouts: ['Long run', 'Easy runs']
        },
        {
          name: 'Build Phase',
          weeks: Math.floor(weeksToRace * 0.3),
          focus: 'Speed and race pace',
          keyWorkouts: ['Tempo runs', 'Intervals']
        },
        {
          name: 'Taper',
          weeks: Math.floor(weeksToRace * 0.2),
          focus: 'Recovery and race prep',
          keyWorkouts: ['Short tempo', 'Easy runs']
        }
      ],
      milestones: [
        { week: 6, target: 'Complete 10K race' },
        { week: 12, target: 'Complete half marathon' }
      ],
      adaptationRules: [
        'Increase weekly mileage by 10%',
        'Step-back week every 4th week'
      ]
    };
  }
  
  private generateStrengthFullFramework(goal: string, userProfile: any): ProgramFramework {
    return {
      name: `Strength Training - ${goal}`,
      estimatedWeeks: 16,
      phases: [
        {
          name: 'Foundation',
          weeks: 4,
          focus: 'Movement patterns and base strength',
          keyWorkouts: ['Compound movements', 'Technique work']
        },
        {
          name: 'Strength Building',
          weeks: 8,
          focus: 'Progressive overload',
          keyWorkouts: ['Heavy compounds', 'Accessory work']
        },
        {
          name: 'Peak/Deload',
          weeks: 4,
          focus: 'Peak strength and recovery',
          keyWorkouts: ['Max effort', 'Recovery sessions']
        }
      ],
      milestones: [
        { week: 4, target: 'Master movement patterns' },
        { week: 12, target: 'Achieve strength goals' }
      ],
      adaptationRules: [
        'Progressive overload each week',
        'Deload every 4th week'
      ]
    };
  }
  
  private generateGeneralFitnessFullFramework(goal: string, userProfile: any): ProgramFramework {
    return {
      name: `General Fitness - ${goal}`,
      estimatedWeeks: 12,
      phases: [
        {
          name: 'Foundation',
          weeks: 4,
          focus: 'Building habits and base fitness',
          keyWorkouts: ['Cardio', 'Basic strength']
        },
        {
          name: 'Development',
          weeks: 6,
          focus: 'Increasing intensity and variety',
          keyWorkouts: ['HIIT', 'Strength circuits']
        },
        {
          name: 'Maintenance',
          weeks: 2,
          focus: 'Sustaining progress',
          keyWorkouts: ['Mixed training', 'Recovery']
        }
      ],
      milestones: [
        { week: 4, target: 'Establish routine' },
        { week: 8, target: 'Improve fitness markers' }
      ],
      adaptationRules: [
        'Gradual intensity increase',
        'Focus on consistency'
      ]
    };
  }
  
  /**
   * Generate weekly progression for the entire program
   */
  private generateWeeklyProgression(framework: ProgramFramework, totalWeeks: number): WeeklyProgression[] {
    const progression: WeeklyProgression[] = [];
    
    for (let week = 1; week <= totalWeeks; week++) {
      const phase = this.getCurrentPhase(week, framework);
      
      progression.push({
        weekNumber: week,
        phase: phase.name,
        volumeIncrease: this.calculateVolumeIncrease(week, phase),
        intensityFocus: this.determineIntensityFocus(week, phase),
        keyWorkouts: phase.keyWorkouts || [],
        recoveryEmphasis: this.calculateRecoveryEmphasis(week, phase)
      });
    }
    
    return progression;
  }
  
  // Helper methods
  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
  
  private getCurrentPhase(weekNumber: number, framework: ProgramFramework): any {
    let currentWeek = 0;
    for (const phase of framework.phases) {
      currentWeek += phase.weeks;
      if (weekNumber <= currentWeek) {
        return phase;
      }
    }
    return framework.phases[framework.phases.length - 1];
  }
  
  private generateWeekTheme(weekNumber: number, phase: any, progression?: WeeklyProgression): string {
    if (weekNumber % 4 === 0) return 'Recovery Week';
    if (progression?.intensityFocus === 'high') return 'High Intensity Week';
    return `${phase.name} - Week ${weekNumber}`;
  }
  
  private estimateWeeklyHours(weekNumber: number, phase: any, progression?: WeeklyProgression): number {
    const baseHours = 6;
    const phaseMultiplier = phase.name.includes('Peak') ? 1.5 : phase.name.includes('Base') ? 1.2 : 1.0;
    const weekProgression = 1 + (weekNumber * 0.05);
    return Math.round(baseHours * phaseMultiplier * weekProgression);
  }
  
  private estimateWorkoutCount(phase: any, progression?: WeeklyProgression): number {
    return phase.keyWorkouts?.length || 3;
  }
  
  private calculateWeekCompletion(week: TrainingWeek): number {
    const totalWorkouts = week.workouts.length;
    const completedWorkouts = week.workouts.filter(w => w.completed).length;
    return totalWorkouts > 0 ? (completedWorkouts / totalWorkouts) * 100 : 0;
  }
  
  private calculateVolumeIncrease(weekNumber: number, phase: any): number {
    if (weekNumber % 4 === 0) return -20; // Recovery week
    return phase.name.includes('Build') ? 10 : 5;
  }
  
  private determineIntensityFocus(weekNumber: number, phase: any): string {
    if (weekNumber % 4 === 0) return 'recovery';
    if (phase.name.includes('Peak')) return 'high';
    if (phase.name.includes('Base')) return 'low';
    return 'moderate';
  }
  
  private calculateRecoveryEmphasis(weekNumber: number, phase: any): number {
    if (weekNumber % 4 === 0) return 5; // High recovery
    return phase.name.includes('Peak') ? 3 : 2;
  }
  
  private generateWeekCoachingNotes(weekNumber: number, phase: any, progression?: WeeklyProgression): string[] {
    const notes = [`Week ${weekNumber} of ${phase.name} phase`];
    
    if (weekNumber % 4 === 0) {
      notes.push('Recovery week - focus on rest and easy sessions');
    }
    
    if (progression?.intensityFocus === 'high') {
      notes.push('High intensity week - prioritize key workouts');
    }
    
    return notes;
  }
  
  private estimateExportSize(weeks: number): string {
    const sizeKB = weeks * 50; // Rough estimate
    return sizeKB > 1000 ? `${Math.round(sizeKB / 1000)}MB` : `${sizeKB}KB`;
  }
  
  private async generateExportData(program: ProgressiveProgram, format: string): Promise<any> {
    // Implementation would depend on format
    if (format === 'json') {
      return {
        program: program,
        exportedAt: new Date(),
        note: 'Progressive features disabled in exported version'
      };
    }
    
    // CSV and PDF would need specific formatting
    return program;
  }
  
  private async saveProgram(program: ProgressiveProgram): Promise<void> {
    // Implementation would save to Firestore
    console.log('Saving full plan program:', program.id);
  }
  
  private async getProgram(programId: string, userId: string): Promise<ProgressiveProgram | null> {
    // Implementation would fetch from Firestore
    console.log('Getting program:', programId);
    return null;
  }

  /**
   * Generate detailed workout from framework using structured templates
   */
  private generateDetailedWorkout(workoutTemplate: any, weekNumber: number): TrainingWorkout {
    // Try to find appropriate structured workout
    if (workoutTemplate.type === 'swimming' || workoutTemplate.type === 'running') {
      const workoutType = workoutTemplate.type === 'swimming' ? 'swim' : 'run';
      const structuredWorkouts = getWorkoutsByType(workoutType);
      
      if (structuredWorkouts.length > 0) {
        // Select workout based on intensity and week number
        const difficulty = this.getDifficultyFromIntensity(workoutTemplate.intensity, weekNumber);
        const appropriateWorkouts = structuredWorkouts.filter(w => w.difficulty === difficulty);
        
        if (appropriateWorkouts.length > 0) {
          const selectedWorkout = appropriateWorkouts[Math.floor(Math.random() * appropriateWorkouts.length)];
          
          return {
            id: this.generateId(),
            title: selectedWorkout.title,
            type: workoutTemplate.type,
            description: selectedWorkout.focus,
            duration: this.parseDurationToMinutes(selectedWorkout.duration || workoutTemplate.duration.toString()),
            intensity: workoutTemplate.intensity,
            exercises: this.convertStructuredWorkoutToExercises(selectedWorkout),
            completed: false,
            isKeyWorkout: workoutTemplate.isKeyWorkout
          };
        }
      }
    }

    // Handle brick workouts
    if (workoutTemplate.type === 'brick') {
      const brickWorkouts = getWorkoutsByType('brick');
      if (brickWorkouts.length > 0) {
        const selectedWorkout = brickWorkouts[0]; // Use the 10 Hour Triathlete brick workout
        
        return {
          id: this.generateId(),
          title: selectedWorkout.title,
          type: 'brick',
          description: selectedWorkout.focus,
          duration: this.parseDurationToMinutes(selectedWorkout.duration || workoutTemplate.duration.toString()),
          intensity: workoutTemplate.intensity,
          exercises: this.convertStructuredWorkoutToExercises(selectedWorkout),
          completed: false,
          isKeyWorkout: workoutTemplate.isKeyWorkout
        };
      }
    }

    // Fallback to basic workout generation
    return {
      id: this.generateId(),
      title: workoutTemplate.title,
      type: workoutTemplate.type,
      description: workoutTemplate.description,
      duration: workoutTemplate.duration,
      intensity: workoutTemplate.intensity,
      exercises: this.generateBasicExercises(workoutTemplate.type, workoutTemplate.intensity),
      completed: false,
      isKeyWorkout: workoutTemplate.isKeyWorkout
    };
  }

  /**
   * Convert structured workout to exercise format
   */
  private convertStructuredWorkoutToExercises(structuredWorkout: any): any[] {
    return structuredWorkout.structure.map((phase: any) => ({
      id: this.generateId(),
      name: phase.phase,
      category: 'structured',
      instructions: phase.steps.map((step: any) => 
        `${step.effort || ''} ${step.details || ''} ${step.note || ''}`.trim()
      ),
      duration: phase.steps[0]?.duration || '',
      sets: phase.steps[0]?.sets?.toString() || '1',
      reps: phase.steps[0]?.distance || phase.steps[0]?.interval_distance || '',
      rest: phase.steps[0]?.rest || phase.steps[0]?.recovery || '',
      source: structuredWorkout.source,
      scalingOptions: structuredWorkout.scalingOptions
    }));
  }

  /**
   * Get difficulty level from intensity and week number
   */
  private getDifficultyFromIntensity(intensity: string, weekNumber: number): 'beginner' | 'intermediate' | 'advanced' {
    if (intensity === 'low') {
      return 'beginner';
    } else if (intensity === 'moderate') {
      return weekNumber <= 8 ? 'intermediate' : 'advanced';
    } else { // high intensity
      return 'advanced';
    }
  }

  /**
   * Parse duration string to minutes
   */
  private parseDurationToMinutes(duration: string | number): number {
    if (typeof duration === 'number') {
      return duration;
    }
    
    const durationLower = duration.toLowerCase();
    
    if (durationLower.includes('hour')) {
      const hours = parseFloat(durationLower.match(/(\d+\.?\d*)/)?.[0] || '1');
      return Math.round(hours * 60);
    }
    
    if (durationLower.includes('min')) {
      const minutes = parseFloat(durationLower.match(/(\d+)/)?.[0] || '45');
      return minutes;
    }
    
    // Handle ranges like "30-50 minutes"
    if (durationLower.includes('-')) {
      const range = durationLower.match(/(\d+)-(\d+)/);
      if (range) {
        const min = parseInt(range[1]);
        const max = parseInt(range[2]);
        return Math.round((min + max) / 2);
      }
    }
    
    return 45; // Default fallback
  }

  /**
   * Generate basic exercises for fallback
   */
  private generateBasicExercises(type: string, intensity: string): any[] {
    const baseExercise = {
      id: this.generateId(),
      category: 'basic',
      sets: '1',
      rest: '0',
      source: 'Generated'
    };

    switch (type) {
      case 'swimming':
        return [{
          ...baseExercise,
          name: 'Swim Training',
          instructions: [`${intensity} intensity swimming session`],
          duration: '45-60 minutes',
          reps: 'Continuous'
        }];
      
      case 'cycling':
        return [{
          ...baseExercise,
          name: 'Bike Training',
          instructions: [`${intensity} intensity cycling session`],
          duration: '60-90 minutes',
          reps: 'Continuous'
        }];
      
      case 'running':
        return [{
          ...baseExercise,
          name: 'Run Training',
          instructions: [`${intensity} intensity running session`],
          duration: '30-60 minutes',
          reps: 'Continuous'
        }];
      
      case 'brick':
        return [
          {
            ...baseExercise,
            name: 'Bike Portion',
            instructions: ['Bike portion of brick workout'],
            duration: '45 minutes',
            reps: 'Continuous'
          },
          {
            ...baseExercise,
            name: 'Run Portion',
            instructions: ['Run portion immediately after bike'],
            duration: '15 minutes',
            reps: 'Continuous'
          }
        ];
      
      default:
        return [{
          ...baseExercise,
          name: 'Training Session',
          instructions: [`${intensity} intensity training`],
          duration: '45 minutes',
          reps: 'As prescribed'
        }];
    }
  }
}