export interface WorkoutCompletion {
  id: string;
  userId: string;
  programId: string;
  weekNumber: number;
  workoutId: string;
  workoutType: string;
  completedAt: Date;
  
  // Performance metrics
  duration: number; // actual duration in minutes
  plannedDuration: number; // planned duration in minutes
  rpe: number; // Rate of Perceived Exertion (1-10)
  overallRating: number; // 1-5 stars
  
  // Exercise-specific completions
  exercises: ExerciseCompletion[];
  
  // Subjective feedback
  notes?: string;
  energyLevel: 'very-low' | 'low' | 'moderate' | 'high' | 'very-high';
  motivation: 'very-low' | 'low' | 'moderate' | 'high' | 'very-high';
  difficultyRating: 'too-easy' | 'easy' | 'just-right' | 'hard' | 'too-hard';
  
  // Environmental factors
  weather?: string;
  location?: string;
  equipment?: string[];
  
  // Recovery indicators
  sleepQuality?: 'poor' | 'fair' | 'good' | 'excellent';
  stressLevel?: 'very-low' | 'low' | 'moderate' | 'high' | 'very-high';
  musclesSore?: string[]; // body parts that are sore
  
  // Completion status
  isComplete: boolean;
  completionPercentage: number; // 0-100
  skippedExercises?: string[];
  modifiedExercises?: ExerciseModification[];
}

export interface ExerciseCompletion {
  exerciseId: string;
  exerciseName: string;
  exerciseType: string;
  
  // Planned vs Actual
  planned: ExercisePlanned;
  actual: ExerciseActual;
  
  // Performance indicators
  completed: boolean;
  skipped?: boolean;
  modified?: boolean;
  modificationReason?: string;
  
  // Exercise-specific RPE
  rpe?: number;
  notes?: string;
}

export interface ExercisePlanned {
  // Strength/Resistance
  sets?: number;
  reps?: number;
  weight?: number;
  restTime?: number;
  
  // Cardio/Endurance
  distance?: number;
  duration?: number;
  pace?: string;
  heartRateZone?: string;
  
  // Swimming
  strokes?: number;
  strokeType?: string;
  
  // Cycling
  power?: number;
  cadence?: number;
  
  // General
  intensity?: number; // 1-10 scale
}

export interface ExerciseActual {
  // Strength/Resistance
  sets?: number;
  reps?: number[];
  weight?: number[];
  restTime?: number[];
  
  // Cardio/Endurance
  distance?: number;
  duration?: number;
  averagePace?: string;
  averageHeartRate?: number;
  maxHeartRate?: number;
  
  // Swimming
  strokes?: number;
  strokeType?: string;
  
  // Cycling
  averagePower?: number;
  maxPower?: number;
  averageCadence?: number;
  
  // General
  perceivedIntensity?: number; // 1-10 scale
}

export interface ExerciseModification {
  exerciseId: string;
  originalExercise: string;
  modifiedExercise: string;
  reason: 'equipment' | 'injury' | 'difficulty' | 'time' | 'preference' | 'other';
  description?: string;
}

// Weekly completion summary for AI analysis
export interface WeeklyCompletionSummary {
  userId: string;
  programId: string;
  weekNumber: number;
  
  // Completion metrics
  totalWorkouts: number;
  completedWorkouts: number;
  completionPercentage: number;
  
  // Performance trends
  averageRPE: number;
  averageRating: number;
  averageDuration: number;
  
  // Key workout completion
  keyWorkoutsCompleted: string[];
  keyWorkoutsMissed: string[];
  
  // Patterns
  consistencyScore: number; // 0-100
  adherenceScore: number; // 0-100
  progressionReadiness: number; // 0-100
  
  // Feedback themes
  commonChallenges: string[];
  positivePatterns: string[];
  
  // Recovery indicators
  averageEnergyLevel: number;
  averageStressLevel: number;
  recoveryScore: number;
  
  // AI coaching insights
  coachingNotes: string[];
  recommendedAdjustments: string[];
  
  completedAt: Date;
}

// For AI performance analysis
export interface PerformancePattern {
  userId: string;
  programId: string;
  patternType: 'consistency' | 'intensity' | 'volume' | 'recovery' | 'progression';
  
  // Pattern identification
  pattern: 'improving' | 'declining' | 'stable' | 'inconsistent' | 'concerning';
  confidence: number; // 0-1
  
  // Supporting data
  dataPoints: number;
  timeframe: string;
  evidence: string[];
  
  // Recommendations
  recommendations: string[];
  priority: 'low' | 'medium' | 'high' | 'critical';
  
  detectedAt: Date;
}

// Quick completion for simple workouts
export interface QuickWorkoutCompletion {
  workoutId: string;
  completed: boolean;
  rpe: number;
  rating: number;
  duration?: number;
  notes?: string;
  completedAt: Date;
} 