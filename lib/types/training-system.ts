import { GoalType } from '@/types';

export type CoachPersona = 'FitCoach' | 'TrainingPage';

export interface TrainingSession {
  id: number;
  day: string;
  type: string;
  title: string;
  summary: string;
  intensity: number;
  details: {
    duration_minutes?: number;
    distance_miles?: number;
    pace_guidance?: string;
    notes?: string;
    activities?: string[];
    exercises?: Array<{
      name: string;
      sets?: string;
      reps?: string;
      notes?: string;
    }>;
  };
}

export interface TrainingWeek {
  weekNumber: number;
  startDate: string;
  dailyCheck?: boolean;
  workouts: TrainingSession[];
}

export interface TrainingPlan {
  name: string;
  type: string;
  approach?: string;
  weeks: TrainingWeek[];
}

export interface CoachResponse {
  message: string;
  trainingPlan?: TrainingPlan;
  nextQuestions?: string[];
  encouragement?: string;
}

export interface UserProfile {
  experience: 'beginner' | 'intermediate' | 'advanced';
  goals: GoalType[];
  injuries?: string[];
  availability: number; // days per week
  equipment: string[];
  currentStats?: {
    weight?: number;
    maxLifts?: Record<string, number>;
    runningDistance?: number;
    swimmingDistance?: number;
    cyclingDistance?: number;
  };
}

export interface TrainingContext {
  persona: CoachPersona;
  userProfile: UserProfile;
  currentWeek: number;
  progressMetrics?: Record<string, number>;
  lastCheckIn?: {
    date: string;
    feedback: string;
    adjustments?: string[];
  };
} 