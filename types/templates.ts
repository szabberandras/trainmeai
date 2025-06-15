// types/templates.ts - Core template system types

import { WeeklyPlan } from './index';

export interface Exercise {
  id: string;
  name: string;
  category: 'strength' | 'cardio' | 'flexibility' | 'balance' | 'plyometric' | 'core' | 'mobility' | 'hyrox' | 'technique' | 'endurance' | 'agility-speed' | 'bodyweight' | 'cycling' | 'kettlebell' | 'lunge' | 'recovery-warm-up' | 'running' | 'stability' | 'swimming' | 'triathlon';
  equipment: string[];
  muscleGroups: string[];
  difficulty: 1 | 2 | 3 | 4 | 5; // 1 = beginner, 5 = expert
  instructions: string[];
  safetyNotes?: string[];
  
  // Exercise modifications for different scenarios
  modifications?: {
    beginner?: string;
    advanced?: string;
    equipment_alternatives?: Record<string, string>; // equipment -> alternative exercise
    injury_modifications?: Record<string, string>; // injury type -> modification
  };
  
  // How to measure and progress this exercise
  metrics?: {
    type: 'reps' | 'time' | 'distance' | 'weight' | 'rounds' | 'duration' | 'power' | 'sets';
    defaultValue: number;
    progressionRate?: number; // percentage increase per week
    unit?: string; // kg, lbs, seconds, meters, etc.
  };
  
  // Coaching cues and form tips
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

export interface WorkoutTemplate {
  id: string;
  day: string;
  type: string;
  title: string;
  description: string;
  duration: number; // minutes
  intensity: number; // 1-100 scale
  
  // Workout structure
  warmup: ExerciseBlock[];
  main: ExerciseBlock[];
  cooldown: ExerciseBlock[];
  
  // Workout-specific metadata
  focus: string[]; // muscle groups or skills being targeted
  equipment_required: string[];
  space_required: 'minimal' | 'moderate' | 'large';
  
  // Adaptations
  time_adaptations: {
    '15': ExerciseBlock[]; // 15-minute version
    '30': ExerciseBlock[]; // 30-minute version
    '45': ExerciseBlock[]; // 45-minute version
    '60': ExerciseBlock[]; // 60-minute version
  };
}

export interface ExerciseBlock {
  exercise_id: string;
  sets?: number;
  reps?: number | string; // can be "10-12" or "AMRAP"
  duration?: number; // seconds
  rest?: number; // seconds
  weight?: number | string; // can be "bodyweight" or percentage
  intensity?: number; // 1-100 scale
  notes?: string;
  
  // For circuit training
  superset_with?: string[]; // other exercise IDs
  circuit_rounds?: number;
}

export interface WeeklyTemplate {
  weekNumber: number;
  theme: string; // "Base Building", "Intensity Phase", etc.
  workouts: WorkoutTemplate[];
  rest_days: number[]; // day numbers (0-6, Sunday = 0)
  
  // Week-specific adaptations
  volume_adjustment: number; // percentage change from base
  intensity_adjustment: number; // percentage change from base
  
  // Progress markers for this week
  assessments?: Assessment[];
  milestones?: string[];
}

export interface Assessment {
  type: 'performance' | 'measurement' | 'subjective';
  name: string;
  description: string;
  metric: string;
  target?: number;
}

export interface ProgressionRule {
  trigger: 'weekly' | 'performance_based' | 'user_feedback';
  condition: string; // "week >= 4", "rpe < 7", "completion_rate > 90%"
  adjustment: {
    type: 'volume' | 'intensity' | 'complexity' | 'exercise_swap';
    value: number | string;
    description: string;
  };
}

export interface TrainingTemplate {
  // Template metadata
  id: string;
  name: string;
  description: string;
  category: 'endurance' | 'strength' | 'mind-body' | 'team-sports' | 'outdoor' | 'combat' | 'dance' | 'precision' | 'multi-sport';
  subcategory: string;
  
  // User requirements
  fitness_levels: ('beginner' | 'some-experience' | 'regular' | 'advanced')[];
  goals: ('fitness' | 'weight-loss' | 'strength' | 'performance' | 'wellbeing')[];
  equipment_options: string[][]; // array of equipment combinations that work
  time_commitments: number[]; // supported session durations in minutes
  weekly_frequencies: string[]; // supported frequencies like "3-4", "5-6"
  
  // Template structure
  duration_weeks: number;
  weekly_structure: WeeklyTemplate[];
  progression_rules: ProgressionRule[];
  
  // Customization rules
  adaptations: {
    age_adjustments: Record<string, any>; // age ranges -> modifications
    equipment_substitutions: Record<string, string[]>; // equipment -> alternative exercises
    time_modifications: Record<number, any>; // duration -> workout adjustments
  };
  
  // Success metrics
  expected_outcomes: string[];
  key_performance_indicators: string[];
}

export interface CustomizedTemplate extends TrainingTemplate {
  user_id: string;
  customizations: {
    exercise_substitutions: Record<string, string>;
    intensity_adjustments: Record<string, number>;
    time_modifications: Record<string, number>;
    equipment_adaptations: string[];
  };
  
  // Generated plan
  generated_weeks: WeeklyPlan[];
  current_week: number;
  progress_tracking: ProgressTracker;
}

export interface ProgressTracker {
  completed_workouts: number;
  total_workouts: number;
  average_completion_rate: number;
  performance_trends: Record<string, number[]>;
  user_feedback: WorkoutFeedback[];
  adaptations_made: AdaptationLog[];
}

export interface WorkoutFeedback {
  workout_id: string;
  date: Date;
  completion_rate: number; // 0-100%
  perceived_exertion: number; // 1-10 RPE scale
  difficulty_rating: number; // 1-5 scale
  enjoyment_rating: number; // 1-5 scale
  notes?: string;
  missed_exercises?: string[];
  time_taken?: number; // actual minutes
}

export interface AdaptationLog {
  date: Date;
  type: 'automatic' | 'user_requested' | 'ai_suggested';
  reason: string;
  changes: {
    exercise_swaps?: Record<string, string>;
    intensity_changes?: Record<string, number>;
    volume_changes?: Record<string, number>;
  };
  result?: 'improved' | 'maintained' | 'declined';
}

// Re-export existing types for compatibility
export * from './index'; 