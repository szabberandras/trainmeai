// Exercise Types and Interfaces
export interface Exercise {
  id: string;
  name: string;
  category: 'strength' | 'core' | 'cardio' | 'plyometric' | 'mobility' | 'flexibility' | 'technique' | 'endurance' | 'triathlon' | 'crossfit' | 'none';
  equipment: string[];
  muscleGroups: string[];
  difficulty: number; // 1-5 scale
  instructions: string[];
  safetyNotes: string[];
  modifications: {
    beginner: string;
    advanced: string;
    equipment_alternatives?: Record<string, string>;
  };
  metrics: {
    type: 'reps' | 'time' | 'distance' | 'weight' | 'rounds' | 'duration';
    defaultValue: number;
    progressionRate: number;
    unit?: string;
  };
  coaching: {
    setup: string[];
    execution: string[];
    common_mistakes: string[];
    breathing: string;
  };
  exercise_categories?: string[];
}

export type ExerciseCategory = 
  | 'strength' 
  | 'core' 
  | 'cardio' 
  | 'plyometric' 
  | 'mobility' 
  | 'flexibility' 
  | 'technique' 
  | 'endurance' 
  | 'triathlon' 
  | 'crossfit' 
  | 'none';

export interface ExerciseDatabase {
  [key: string]: Exercise;
}

export interface CategoryExercises {
  [category: string]: string[];
} 