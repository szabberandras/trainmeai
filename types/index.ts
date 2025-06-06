// User Profile Types
export interface UserProfile {
  id: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  subscription: 'free' | 'pro';
  signupDate: Date;
  daysUsed: number;
  maxFreeDays: number;
  trialExpired: boolean;
  createdAt: Date;
  lastActive?: Date;
  preferences?: UserPreferences;
  conversations?: Conversation[];
  programs?: Program[];
}

export interface UserPreferences {
  fitnessGoals?: string[];
  equipmentAccess?: string[];
  workoutDays?: number;
  workoutDuration?: number;
  notificationSettings?: NotificationSettings;
}

export interface NotificationSettings {
  email: boolean;
  push: boolean;
  workoutReminders: boolean;
  progressUpdates: boolean;
}

// Goal Types for AI Training System
export type GoalType = 
  | 'strength'
  | 'endurance' 
  | 'weight_loss'
  | 'flexibility'
  | 'sport_specific'
  | 'general_fitness';

// AI Message Types
export interface AiMessage {
  type: 'user' | 'ai';
  content: string;
  timestamp?: Date;
  metadata?: {
    goalType?: GoalType;
    questionIndex?: number;
    intent?: string;
    confidence?: number;
    suggestions?: string[];
    showGenerateButton?: boolean;
    evaluation?: 'positive' | 'negative';
    isCheckIn?: boolean;
    isPersonalizedWelcome?: boolean;
    isPersonaSwitch?: boolean;
  };
}

// Training Program Types
export interface Program {
  id: string;
  userId: string;
  name: string;
  description?: string;
  type: 'strength' | 'cardio' | 'hybrid';
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: number; // in weeks
  createdAt: Date;
  updatedAt: Date;
  status: 'active' | 'completed' | 'paused';
  weeklyPlans: WeeklyPlan[];
  weeks: WeeklyPlan[]; // Alternative property name used in some components
  progress?: ProgramProgress;
  currentDay: number;
  totalDays: number;
  dailyProgression: DailyProgression[];
  lastGeneratedDay: number;
  canGenerateNext: boolean;
}

// Training Plan alias for backward compatibility
export type TrainingPlan = Program;

export interface WeeklyPlan {
  weekNumber: number;
  startDate: string;
  endDate: string;
  focus?: string;
  workouts: Workout[];
  notes?: string;
}

export interface Workout {
  id: string;
  day: string;
  type: WorkoutType;
  title: string;
  description?: string;
  duration: number; // in minutes
  intensity: 'low' | 'moderate' | 'high';
  exercises: Exercise[];
  warmup?: Exercise[];
  cooldown?: Exercise[];
  notes?: string;
  completed?: boolean;
  feedback?: WorkoutFeedback;
  isEditable: boolean;
  originalExercises?: Exercise[];
  substitutions?: ExerciseSubstitution[];
  restDay: boolean;
  crossTraining?: boolean;
}

export type ExerciseType = 'strength' | 'cardio' | 'bodyweight' | 'stretch' | 'flexibility' | 'balance' | 'plyometric' | 'core' | 'mobility';

export type WorkoutType = 'strength' | 'cardio' | 'flexibility' | 'sports' | 'recovery' | 'cross_training';

export interface Exercise {
  id: string;
  name: string;
  type: ExerciseType;
  sets?: number;
  reps?: number | string;
  weight?: number;
  duration?: number; // in seconds
  distance?: number; // in meters/km
  restTime?: number; // in seconds
  instructions?: string[];
  targetMuscles?: string[];
  equipment?: string[];
  isEditable: boolean;
  completed: boolean;
  actualSets?: number;
  actualReps?: number | string;
  actualWeight?: number;
  actualDuration?: number;
  rpe?: number;
  notes?: string;
  progressionHistory?: ExerciseProgression[];
}

export interface WorkoutFeedback {
  rating: 1 | 2 | 3 | 4 | 5;
  difficulty: 1 | 2 | 3 | 4 | 5;
  notes?: string;
  timestamp: Date;
}

export interface ProgramProgress {
  weeksCompleted: number;
  workoutsCompleted: number;
  totalWorkouts: number;
  streak: number;
  lastWorkout?: Date;
  personalBests?: Record<string, number>;
}

// Chat Types
export interface Conversation {
  id: string;
  userId: string;
  timestamp: Date;
  messages: Message[];
  topic?: string;
  relatedProgramId?: string;
}

export interface Message {
  type: 'user' | 'ai';
  content: string;
  timestamp?: Date;
  metadata?: {
    intent?: string;
    confidence?: number;
    suggestions?: string[];
  };
}

export interface DailyProgression {
  day: number;
  date: Date;
  workout?: Workout;
  completed: boolean;
  skipped: boolean;
  feedback?: WorkoutFeedback;
  nutritionGuidance?: NutritionGuidance;
  generatedAt: Date;
  modifiedAt?: Date;
}

export interface ExerciseSubstitution {
  originalExerciseId: string;
  newExerciseId: string;
  reason: string;
  date: Date;
}

export interface NutritionGuidance {
  preWorkout: string;
  postWorkout: string;
  dailyFocus: string;
  hydration: string;
  supplements?: string[];
}

export interface ExerciseProgression {
  date: Date;
  sets: number;
  reps: number | string;
  weight?: number;
  duration?: number;
  rpe?: number;
  notes?: string;
} 