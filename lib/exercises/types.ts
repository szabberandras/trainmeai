// Exercise Types and Interfaces
export interface Exercise {
  id: string;
  name: string;
  category: 'strength' | 'cardio' | 'flexibility' | 'balance' | 'plyometric' | 'core' | 'mobility' | 'hyrox' | 'technique' | 'endurance' | 'agility-speed' | 'bodyweight' | 'cycling' | 'kettlebell' | 'lunge' | 'recovery-warm-up' | 'running' | 'stability' | 'swimming' | 'triathlon' | 'crossfit';
  equipment: string[];
  muscleGroups: string[];
  difficulty: 1 | 2 | 3 | 4 | 5; // 1 = beginner, 5 = expert
  instructions: string[];
  safetyNotes?: string[];
  modifications?: {
    beginner?: string;
    advanced?: string;
    equipment_alternatives?: Record<string, string>; // equipment -> alternative exercise
    injury_modifications?: Record<string, string>; // injury type -> modification
  };
  metrics?: {
    type: 'reps' | 'time' | 'distance' | 'weight' | 'rounds' | 'duration' | 'power' | 'sets';
    defaultValue: number;
    progressionRate?: number; // percentage increase per week
    unit?: string; // kg, lbs, seconds, meters, etc.
  };
  coaching?: {
    setup: string[];
    execution: string[];
    common_mistakes: string[];
    breathing?: string;
  };
  
  // Additional properties that might exist at top level
  equipment_alternatives?: string[];
  progressionRate?: number;
  exercise_categories?: string[];
}

export type ExerciseCategory = 
  | 'strength'
  | 'cardio'
  | 'flexibility'
  | 'plyometric'
  | 'crossfit'
  | 'hyrox'
  | 'olympic-lifting'
  | 'powerlifting'
  | 'bodyweight'
  | 'rehabilitation'
  | 'sport-specific';

export interface ExerciseDatabase {
  [key: string]: Exercise;
}

export interface CategoryExercises {
  [category: string]: string[];
} 