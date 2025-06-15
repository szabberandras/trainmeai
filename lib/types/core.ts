// lib/types/core.ts - Unified Core Types (Preserves ALL functionality)
// This file consolidates all duplicate interfaces while preserving unique features

// Re-export existing types for compatibility
export type { GoalType } from './user';
export type { 
  CoachPersona, 
  ExperienceLevel, 
  EnergySystem, 
  PeriodizationPhase, 
  SafetyPriority,
  TrainingSession as TrainingSystemSession,
  TrainingWeek as TrainingSystemWeek,
  TrainingContext
} from './training-system';

// Import required types
import { GoalType, UserGoal, UserProgram, SubscriptionTier } from './user';
import { ExperienceLevel, CoachPersona, EnergySystem, PeriodizationPhase, TrainingWeek as TrainingSystemWeek } from './training-system';

// ===== UNIFIED USER PROFILE =====
// Combines ALL unique features from 8 different UserProfile definitions
export interface UserProfile {
  // Identity & Authentication (from user.ts + auth service)
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  createdAt: Date;
  lastActive: Date;
  
  // Subscription & Trial Management (from user.ts + auth service)
  subscription: 'free' | 'premium';
  subscriptionEnds?: Date;
  subscriptionExpiry?: Date | null; // alias for subscriptionEnds
  signupDate: Date;
  daysUsed: number;
  maxFreeDays: number;
  trialExpired: boolean;
  planGenerationCredits: number;
  
  // Training Profile (from training-system.ts + TrainingService.ts)
  experience: ExperienceLevel;
  goals: UserGoal[]; // Rich goal objects
  goalStrings?: string[]; // Simple goal strings for backward compatibility
  injuries?: string[];
  limitations?: string[];
  availability: number; // days per week
  availableTime: number; // hours per week
  equipment: string[];
  fitnessLevel: number;
  age?: number;
  gender?: string;
  
  // Current Fitness Stats (from training-system.ts)
  currentStats?: {
    weight?: number;
    maxLifts?: Record<string, number>;
    runningDistance?: number;
    swimmingDistance?: number;
    cyclingDistance?: number;
  };
  
  // Program & Goal Management (from user.ts)
  activePrograms: UserProgram[];
  completedPrograms: UserProgram[];
  currentGoals: UserGoal[];
  achievedGoals: UserGoal[];
  
  // User Preferences (from user.ts + auth service)
  preferences: {
    notifications: boolean;
    weeklyEmails: boolean;
    progressReminders: boolean;
    training?: string[]; // Training preferences array
    [key: string]: any; // Flexible preferences
  };
  
  // Notification Settings (from auth service)
  notifications?: boolean; // Top-level notification toggle
  emailUpdates?: boolean; // Email update preference
}

// ===== UNIFIED EXERCISE INTERFACE =====
// Combines ALL unique features from 4+ different Exercise definitions
export interface Exercise {
  // Core Identity
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  
  // Training Parameters (from TrainingService.ts)
  sets?: number;
  reps?: number | string;
  duration?: string;
  weight?: string;
  restTime?: string;
  
  // Exercise Details (from exercises/types.ts)
  equipment: string[];
  primaryMuscles: string[];
  secondaryMuscles: string[];
  targetMuscles?: string[]; // Alias for backward compatibility
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  
  // Instructions & Media
  instructions: string[];
  tips?: string[];
  modifications?: string[];
  videoUrl?: string;
  imageUrl?: string;
}

// ===== UNIFIED TRAINING PLAN INTERFACE =====
// Combines ALL unique features from 3 different TrainingPlan definitions
export interface TrainingPlan {
  // Core Identity
  id: string;
  plan_id?: string; // Alias for professional plans
  name: string;
  title?: string; // Alias for name
  description: string;
  
  // Duration & Difficulty
  duration: string;
  duration_weeks?: number; // For professional plans
  difficulty: string;
  level?: 'Beginner' | 'Intermediate' | 'Advanced'; // Alias for difficulty
  
  // Training Structure
  type: string;
  approach?: string;
  focus: string[];
  exercises?: Exercise[];
  weeks?: TrainingSystemWeek[];
  
  // Professional Features (from TrainingPlansService.ts)
  average_weekly_hours?: number;
  max_week_hours?: number;
  prerequisites?: {
    swim_distance?: string;
    bike_duration?: string;
    run_duration?: string;
  };
  training_zones?: { 
    [key: string]: { 
      name: string; 
      heart_rate_percentage: string; 
      description: string; 
    } 
  };
  phases?: Array<{ 
    phase: string; 
    weeks: number[]; 
    focus: string; 
  }>;
  weekly_schedule?: Array<{
    week: number;
    phase: string;
    total_hours: string;
    sessions: { [day: string]: any };
    training_tip?: string;
  }>;
  
  // AI Features (from TrainingService.ts)
  persona?: CoachPersona;
  experienceLevel?: ExperienceLevel;
  energySystem?: EnergySystem;
  periodizationPhase?: PeriodizationPhase;
  
  // Metadata
  note?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// ===== TRAINING SESSION INTERFACE =====
// Unified from TrainingPlansService.ts
export interface TrainingSession {
  type: string;
  duration: string;
  intensity: string;
  workout: string;
}

// ===== BACKWARD COMPATIBILITY TYPES =====
// These ensure existing code continues to work

// Simple UserProfile for training context (backward compatibility)
export interface TrainingUserProfile {
  experience: 'beginner' | 'intermediate' | 'advanced';
  goals: GoalType[];
  injuries?: string[];
  availability: number;
  equipment: string[];
  currentStats?: {
    weight?: number;
    maxLifts?: Record<string, number>;
    runningDistance?: number;
    swimmingDistance?: number;
    cyclingDistance?: number;
  };
}

// Auth UserProfile (backward compatibility)
export interface AuthUserProfile {
  displayName: string;
  email: string;
  photoURL: string;
  createdAt: Date;
  subscription: 'free' | 'premium';
  signupDate: Date;
  daysUsed: number;
  maxFreeDays: number;
  trialExpired: boolean;
  subscriptionExpiry: Date | null;
  preferences: Record<string, any>;
  notifications: boolean;
  emailUpdates: boolean;
}

// Training Generation UserProfile (backward compatibility)
export interface TrainingGenerationUserProfile {
  experience: ExperienceLevel;
  goals: string[];
  availableTime: number;
  equipment: string[];
  limitations: string[];
  preferences: string[];
  fitnessLevel: number;
  age?: number;
  gender?: string;
  injuries?: string[];
}

// ===== UTILITY FUNCTIONS =====
// Helper functions to convert between different UserProfile formats

export function toTrainingUserProfile(profile: UserProfile): TrainingUserProfile {
  return {
    experience: profile.experience === 'complete-beginner' ? 'beginner' : 
                profile.experience === 'advanced-competitive' ? 'advanced' : 'intermediate',
    goals: profile.currentGoals?.map(g => g.type) || [],
    injuries: profile.injuries,
    availability: profile.availability,
    equipment: profile.equipment,
    currentStats: profile.currentStats
  };
}

export function toAuthUserProfile(profile: UserProfile): AuthUserProfile {
  return {
    displayName: profile.displayName,
    email: profile.email,
    photoURL: profile.photoURL || '',
    createdAt: profile.createdAt,
    subscription: profile.subscription,
    signupDate: profile.signupDate,
    daysUsed: profile.daysUsed,
    maxFreeDays: profile.maxFreeDays,
    trialExpired: profile.trialExpired,
    subscriptionExpiry: profile.subscriptionExpiry ?? null,
    preferences: profile.preferences,
    notifications: profile.notifications || profile.preferences.notifications,
    emailUpdates: profile.emailUpdates || profile.preferences.weeklyEmails
  };
}

export function toTrainingGenerationUserProfile(profile: UserProfile): TrainingGenerationUserProfile {
  return {
    experience: profile.experience,
    goals: profile.goalStrings || profile.currentGoals?.map(g => g.type) || [],
    availableTime: profile.availableTime,
    equipment: profile.equipment,
    limitations: profile.limitations || [],
    preferences: profile.preferences.training || [],
    fitnessLevel: profile.fitnessLevel,
    age: profile.age,
    gender: profile.gender,
    injuries: profile.injuries
  };
}

// ===== DEPRECATION WARNINGS =====
// These will help developers migrate to the new unified types

/**
 * @deprecated Use UserProfile from lib/types/core.ts instead
 * This type will be removed in a future version
 */
export type DeprecatedUserProfile = UserProfile;

/**
 * @deprecated Use Exercise from lib/types/core.ts instead
 * This type will be removed in a future version
 */
export type DeprecatedExercise = Exercise;

/**
 * @deprecated Use TrainingPlan from lib/types/core.ts instead
 * This type will be removed in a future version
 */
export type DeprecatedTrainingPlan = TrainingPlan;