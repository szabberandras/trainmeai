// Training program type definitions
import { SportType, GoalType, UserGoal } from './user';

export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced' | 'elite';
export type GenerationSource = 'ai' | 'template' | 'user';

export type { SportType, GoalType };

export interface Exercise {
  id: string;
  name: string;
  type: SportType;
  metrics: {
    distance?: number;
    duration?: number;
    sets?: number;
    reps?: number;
    weight?: number;
    pace?: number;
  };
  instructions?: string;
  equipment?: string[];
}

export interface TrainingDay {
  id: string;
  dayNumber: number; // 1-7
  exercises: Exercise[];
  notes?: string;
  completed: boolean;
  skipped: boolean;
  feedback?: {
    difficulty: number; // 1-5
    enjoyment: number; // 1-5
    notes: string;
  };
}

export interface TrainingWeek {
  id: string;
  weekNumber: number;
  days: TrainingDay[];
  generatedBy: GenerationSource;
  generatedAt: Date;
  lastModified: Date;
  completed: boolean;
  progress: number; // 0-100
  summary?: {
    totalDistance?: number;
    totalDuration?: number;
    totalExercises: number;
  };
}

export interface TrainingProgram {
  id: string;
  userId: string;
  name: string;
  type: SportType;
  difficulty: DifficultyLevel;
  goal: UserGoal;
  weeks: TrainingWeek[];
  currentWeek: number;
  totalWeeks: number;
  createdAt: Date;
  updatedAt: Date;
  isTemplate: boolean;
  templateId?: string; // If based on a template
  shared: boolean; // If visible to community
  stats: {
    completionRate: number;
    totalDistance?: number;
    totalDuration?: number;
    totalWorkouts: number;
  };
}

export interface ProgramTemplate {
  id: string;
  name: string;
  type: SportType;
  difficulty: DifficultyLevel;
  description: string;
  duration: number; // weeks
  prerequisites?: string[];
  equipment?: string[];
  targetAudience?: string[];
  rating: number;
  usageCount: number;
  createdBy: string; // userId
  featured: boolean;
  preview?: TrainingWeek; // Example week
} 