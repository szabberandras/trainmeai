import { GoalType } from '@/types';

// Updated to include all 4 AI personas
export type CoachPersona = 'FitCoach' | 'TrainingPage' | 'BeginnerGuide' | 'SportSpecific';

// Experience level mapping for persona selection
export type ExperienceLevel = 'complete-beginner' | 'beginner-inconsistent' | 'amateur-regular' | 'intermediate-structured' | 'advanced-competitive';

// Energy system types for sport-specific training
export type EnergySystem = 'aerobic' | 'anaerobic-alactic' | 'anaerobic-lactic' | 'mixed';

// Periodization phases
export type PeriodizationPhase = 'base' | 'build' | 'peak' | 'recovery' | 'transition';

// Safety priority levels for beginner protection
export type SafetyPriority = 'maximum' | 'high' | 'moderate' | 'standard' | 'athlete-managed';

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