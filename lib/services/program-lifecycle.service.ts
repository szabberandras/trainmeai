import { doc, updateDoc, getDoc, addDoc } from 'firebase/firestore';
import { programsCollection } from '../firebase/config';
import { Program } from '../../types';
import { ProgramStatus } from '../types/user';

export interface ProgramLifecycleEvent {
  id: string;
  programId: string;
  userId: string;
  action: 'completed' | 'archived' | 'restarted' | 'paused' | 'resumed';
  timestamp: Date;
  reason?: string;
  metadata?: {
    completionRate?: number;
    goalAchieved?: boolean;
    aiTriggered?: boolean;
    restartFromWeek?: number;
  };
}

export interface GoalCompletionCheck {
  goalAchieved: boolean;
  completionRate: number;
  weeksCompleted: number;
  totalWeeks: number;
  keyMetrics: {
    consistency: number; // 0-100%
    progressTrend: 'improving' | 'stable' | 'declining';
    lastWorkoutDate: Date;
  };
  aiRecommendation: {
    action: 'complete' | 'continue' | 'modify';
    reason: string;
    nextSteps: string[];
  };
}

export class ProgramLifecycleService {
  
  /**
   * Complete a program - marks as completed and moves to past programs
   */
  static async completeProgram(
    programId: string, 
    userId: string, 
    reason: 'goal_achieved' | 'manual' | 'ai_suggested' = 'manual'
  ): Promise<void> {
    try {
      const programRef = doc(programsCollection, programId);
      const programDoc = await getDoc(programRef);
      
      if (!programDoc.exists()) {
        throw new Error('Program not found');
      }

             const program = programDoc.data() as Program;
       
       // Calculate final completion rate
       const completionRate = this.calculateCompletionRate(program);
      
             await updateDoc(programRef, {
         status: 'completed' as ProgramStatus,
         completedAt: new Date(),
         updatedAt: new Date(),
         finalStats: {
           ...program.progress,
           completionRate,
           completedWeeks: program.currentDay
         }
       });

      // Log lifecycle event
      await this.logLifecycleEvent({
        programId,
        userId,
        action: 'completed',
        reason,
        metadata: {
          completionRate,
          goalAchieved: reason === 'goal_achieved'
        }
      });

    } catch (error) {
      console.error('Error completing program:', error);
      throw error;
    }
  }

  /**
   * Archive a program - removes from active view but keeps data
   */
  static async archiveProgram(
    programId: string, 
    userId: string, 
    reason?: string
  ): Promise<void> {
    try {
      const programRef = doc(programsCollection, programId);
      
      await updateDoc(programRef, {
        status: 'archived' as ProgramStatus,
        archivedAt: new Date(),
        updatedAt: new Date(),
        archiveReason: reason
      });

      await this.logLifecycleEvent({
        programId,
        userId,
        action: 'archived',
        reason
      });

    } catch (error) {
      console.error('Error archiving program:', error);
      throw error;
    }
  }

  /**
   * Restart a completed or archived program
   */
  static async restartProgram(
    programId: string, 
    userId: string,
    fromWeek: number = 1
  ): Promise<string> {
    try {
      const originalProgramDoc = await getDoc(doc(programsCollection, programId));
      
      if (!originalProgramDoc.exists()) {
        throw new Error('Original program not found');
      }

             const originalProgram = originalProgramDoc.data() as Program;
       
       // Create new program based on original
       const restartedProgram: Partial<Program> = {
        ...originalProgram,
        id: undefined, // Will be auto-generated
                 status: 'active',
         currentDay: fromWeek,
        createdAt: new Date(),
        updatedAt: new Date(),
                 progress: {
           weeksCompleted: 0,
           workoutsCompleted: 0,
           totalWorkouts: 0,
           streak: 0
         }
      };

      const docRef = await addDoc(programsCollection, restartedProgram);
      const newProgramId = docRef.id;

      await this.logLifecycleEvent({
        programId: newProgramId,
        userId,
        action: 'restarted',
        metadata: {
          restartFromWeek: fromWeek
        }
      });

      return newProgramId;

    } catch (error) {
      console.error('Error restarting program:', error);
      throw error;
    }
  }

  /**
   * Pause a program temporarily
   */
  static async pauseProgram(
    programId: string, 
    userId: string, 
    reason?: string
  ): Promise<void> {
    try {
      const programRef = doc(programsCollection, programId);
      
      await updateDoc(programRef, {
        status: 'paused' as ProgramStatus,
        pausedAt: new Date(),
        updatedAt: new Date(),
        pauseReason: reason
      });

      await this.logLifecycleEvent({
        programId,
        userId,
        action: 'paused',
        reason
      });

    } catch (error) {
      console.error('Error pausing program:', error);
      throw error;
    }
  }

  /**
   * Resume a paused program
   */
  static async resumeProgram(
    programId: string, 
    userId: string
  ): Promise<void> {
    try {
      const programRef = doc(programsCollection, programId);
      
      await updateDoc(programRef, {
        status: 'active' as ProgramStatus,
        resumedAt: new Date(),
        updatedAt: new Date(),
        pausedAt: null,
        pauseReason: null
      });

      await this.logLifecycleEvent({
        programId,
        userId,
        action: 'resumed'
      });

    } catch (error) {
      console.error('Error resuming program:', error);
      throw error;
    }
  }

  /**
   * AI-powered goal completion check
   */
  static async checkGoalCompletion(
    programId: string,
    userId: string
  ): Promise<GoalCompletionCheck> {
    try {
      const programDoc = await getDoc(doc(programsCollection, programId));
      
      if (!programDoc.exists()) {
        throw new Error('Program not found');
      }

             const program = programDoc.data() as Program;
      
      // Calculate metrics
      const completionRate = this.calculateCompletionRate(program);
      const consistency = this.calculateConsistency(program);
      const progressTrend = this.analyzeProgressTrend(program);
      
      // AI logic for goal completion
      const goalAchieved = this.determineGoalAchievement(program, completionRate, consistency);
      
      let aiRecommendation;
      if (goalAchieved) {
        aiRecommendation = {
          action: 'complete' as const,
          reason: 'Congratulations! You\'ve achieved your training goals with excellent consistency.',
          nextSteps: [
            'Complete this program and celebrate your success',
            'Set new, more challenging goals',
            'Consider a different training discipline',
            'Maintain your fitness with a maintenance program'
          ]
        };
      } else if (completionRate > 80 && consistency > 70) {
        aiRecommendation = {
          action: 'continue' as const,
          reason: 'Great progress! You\'re on track to achieve your goals.',
          nextSteps: [
            'Continue with your current program',
            'Focus on consistency in the remaining weeks',
            'Consider slight intensity increases'
          ]
        };
      } else {
        aiRecommendation = {
          action: 'modify' as const,
          reason: 'Your progress suggests some adjustments might help you succeed.',
          nextSteps: [
            'Review and adjust your training schedule',
            'Consider reducing intensity or volume',
            'Focus on building consistent habits first'
          ]
        };
      }

             return {
         goalAchieved,
         completionRate,
         weeksCompleted: program.currentDay,
         totalWeeks: program.duration,
        keyMetrics: {
          consistency,
          progressTrend,
          lastWorkoutDate: new Date() // Would be calculated from actual workout logs
        },
        aiRecommendation
      };

    } catch (error) {
      console.error('Error checking goal completion:', error);
      throw error;
    }
  }

  /**
   * Get programs by status for user
   */
  static async getProgramsByStatus(
    userId: string, 
    status: ProgramStatus
  ): Promise<Program[]> {
    // This would use the existing ProgramService.getUserPrograms and filter
    // Implementation depends on how the existing service works
    return [];
  }

  // Private helper methods
  private static calculateCompletionRate(program: Program): number {
    if (!program.weeks || program.weeks.length === 0) return 0;
    
    const completedWeeks = program.weeks.filter((week: any) => week.completed).length;
    return Math.round((completedWeeks / program.weeks.length) * 100);
  }

  private static calculateConsistency(program: Program): number {
    // Calculate based on workout completion rate
    // This would analyze actual workout logs
    return 75; // Placeholder
  }

  private static analyzeProgressTrend(program: Program): 'improving' | 'stable' | 'declining' {
    // Analyze recent performance vs earlier performance
    return 'improving'; // Placeholder
  }

  private static determineGoalAchievement(
    program: Program, 
    completionRate: number, 
    consistency: number
  ): boolean {
    // AI logic to determine if goals are achieved
    // Could be based on:
    // - Program completion (>90%)
    // - Consistency (>80%)
    // - Specific goal metrics (time, distance, strength gains)
    // - Duration (completed planned weeks)
    
         return completionRate > 90 && consistency > 80 && program.currentDay >= program.duration;
  }

  private static async logLifecycleEvent(event: Omit<ProgramLifecycleEvent, 'id' | 'timestamp'>): Promise<void> {
    // Log to analytics/tracking system
    console.log('Program lifecycle event:', {
      ...event,
      timestamp: new Date()
    });
  }
} 