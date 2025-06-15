// lib/exercises/swimming-workouts-consolidated.ts - Consolidated Professional Swimming Workouts
// This file combines all unique swimming workouts from multiple scattered files

import { Exercise } from '@/types/templates';

// Import all existing swimming workout collections
import { ADDITIONAL_SWIMMING_WORKOUTS } from './swimming-workouts-additional';
import { SWIMMING_WORKOUTS_BATCH2 } from './swimming-workouts-batch2';
import { SWIMMING_WORKOUTS_BATCH3 } from './swimming-workouts-batch3';
import { SWIMMING_WORKOUT_EXERCISES } from './swimming-workouts-converted';

// ===== CONSOLIDATED SWIMMING WORKOUTS =====
// Combines all unique swimming workouts while preserving functionality

export const CONSOLIDATED_SWIMMING_WORKOUTS: Record<string, Exercise> = {
  // From swimming-workouts-additional.ts
  ...ADDITIONAL_SWIMMING_WORKOUTS,
  
  // From swimming-workouts-batch2.ts
  ...SWIMMING_WORKOUTS_BATCH2,
  
  // From swimming-workouts-batch3.ts
  ...SWIMMING_WORKOUTS_BATCH3,
  
  // From swimming-workouts-converted.ts
  ...SWIMMING_WORKOUT_EXERCISES,
};

// ===== SWIMMING WORKOUT CATEGORIES =====
// Organized by training focus for easy selection

export const SWIMMING_WORKOUTS_BY_CATEGORY = {
  endurance: Object.values(CONSOLIDATED_SWIMMING_WORKOUTS).filter(
    workout => workout.category === 'endurance'
  ),
  
  cardio: Object.values(CONSOLIDATED_SWIMMING_WORKOUTS).filter(
    workout => workout.category === 'cardio'
  ),
  
  speed: Object.values(CONSOLIDATED_SWIMMING_WORKOUTS).filter(
    workout => workout.name.toLowerCase().includes('speed') || 
               workout.name.toLowerCase().includes('sprint')
  ),
  
  technique: Object.values(CONSOLIDATED_SWIMMING_WORKOUTS).filter(
    workout => workout.name.toLowerCase().includes('drill') || 
               workout.name.toLowerCase().includes('technique')
  ),
  
  test: Object.values(CONSOLIDATED_SWIMMING_WORKOUTS).filter(
    workout => workout.name.toLowerCase().includes('test') || 
               workout.name.toLowerCase().includes('assessment')
  )
};

// ===== SWIMMING WORKOUTS BY DIFFICULTY =====
// Organized by difficulty level for progression

export const SWIMMING_WORKOUTS_BY_DIFFICULTY = {
  beginner: Object.values(CONSOLIDATED_SWIMMING_WORKOUTS).filter(
    workout => workout.difficulty <= 2
  ),
  
  intermediate: Object.values(CONSOLIDATED_SWIMMING_WORKOUTS).filter(
    workout => workout.difficulty === 3 || workout.difficulty === 4
  ),
  
  advanced: Object.values(CONSOLIDATED_SWIMMING_WORKOUTS).filter(
    workout => workout.difficulty >= 5
  )
};

// ===== SWIMMING WORKOUT UTILITIES =====
// Helper functions for workout selection and management

export class SwimmingWorkoutService {
  /**
   * Get workout by ID
   */
  static getWorkoutById(id: string): Exercise | undefined {
    return CONSOLIDATED_SWIMMING_WORKOUTS[id];
  }

  /**
   * Get workouts by category
   */
  static getWorkoutsByCategory(category: keyof typeof SWIMMING_WORKOUTS_BY_CATEGORY): Exercise[] {
    return SWIMMING_WORKOUTS_BY_CATEGORY[category] || [];
  }

  /**
   * Get workouts by difficulty
   */
  static getWorkoutsByDifficulty(difficulty: keyof typeof SWIMMING_WORKOUTS_BY_DIFFICULTY): Exercise[] {
    return SWIMMING_WORKOUTS_BY_DIFFICULTY[difficulty] || [];
  }

  /**
   * Get recommended workouts based on user profile
   */
  static getRecommendedWorkouts(userProfile: {
    experience: 'beginner' | 'intermediate' | 'advanced';
    goals: string[];
    availableTime: number; // minutes
  }): Exercise[] {
    let workouts = this.getWorkoutsByDifficulty(userProfile.experience);
    
    // Filter by goals
    if (userProfile.goals.includes('endurance')) {
      workouts = workouts.filter(w => w.category === 'endurance');
    } else if (userProfile.goals.includes('speed')) {
      workouts = workouts.filter(w => 
        w.name.toLowerCase().includes('speed') || 
        w.name.toLowerCase().includes('sprint')
      );
    }
    
    // Filter by available time (rough estimate based on workout complexity)
    workouts = workouts.filter(w => {
      const estimatedTime = this.estimateWorkoutDuration(w);
      return estimatedTime <= userProfile.availableTime;
    });
    
    return workouts.slice(0, 5); // Return top 5 recommendations
  }

  /**
   * Estimate workout duration based on workout structure
   */
  private static estimateWorkoutDuration(workout: Exercise): number {
    // Simple estimation based on workout complexity and distance
    const baseTime = 45; // Base workout time in minutes
    const difficultyMultiplier = workout.difficulty * 5;
    const instructionComplexity = workout.instructions.length * 2;
    
    return baseTime + difficultyMultiplier + instructionComplexity;
  }

  /**
   * Get all workout IDs
   */
  static getAllWorkoutIds(): string[] {
    return Object.keys(CONSOLIDATED_SWIMMING_WORKOUTS);
  }

  /**
   * Get total number of workouts
   */
  static getTotalWorkoutCount(): number {
    return Object.keys(CONSOLIDATED_SWIMMING_WORKOUTS).length;
  }

  /**
   * Search workouts by name or description
   */
  static searchWorkouts(query: string): Exercise[] {
    const lowercaseQuery = query.toLowerCase();
    return Object.values(CONSOLIDATED_SWIMMING_WORKOUTS).filter(workout =>
      workout.name.toLowerCase().includes(lowercaseQuery) ||
      workout.instructions.some(instruction => 
        instruction.toLowerCase().includes(lowercaseQuery)
      )
    );
  }
}

// ===== BACKWARD COMPATIBILITY =====
// Export individual collections for existing code

export { ADDITIONAL_SWIMMING_WORKOUTS } from './swimming-workouts-additional';
export { SWIMMING_WORKOUTS_BATCH2 } from './swimming-workouts-batch2';
export { SWIMMING_WORKOUTS_BATCH3 } from './swimming-workouts-batch3';
export { SWIMMING_WORKOUT_EXERCISES as SWIMMING_WORKOUTS_CONVERTED } from './swimming-workouts-converted';

// Default export for easy importing
export default CONSOLIDATED_SWIMMING_WORKOUTS;