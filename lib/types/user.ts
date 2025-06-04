// User profile and related type definitions

export type SubscriptionTier = 'free' | 'premium';
export type ProgramStatus = 'active' | 'completed' | 'archived';
export type GoalType = 'weight_loss' | 'race' | 'strength' | 'endurance' | 'general_fitness';

// Endurance Focused Sports
export type EnduranceSportType = 'running' | 'cycling' | 'swimming' | 'triathlon' | 'rowing';

// Strength & Power Focused Sports
export type StrengthSportType = 'weightlifting' | 'powerlifting' | 'track_field' | 'rock_climbing';

// Agility & Speed Focused Sports
export type AgilitySportType = 'soccer' | 'basketball' | 'tennis' | 'boxing' | 'martial_arts';

// Flexibility & Bodyweight Focused Sports
export type FlexibilitySportType = 'yoga' | 'pilates' | 'calisthenics';

// Combined type for all sports
export type SportType = EnduranceSportType | StrengthSportType | AgilitySportType | FlexibilitySportType;

export interface UserGoal {
  id: string;
  type: GoalType;
  target: {
    value: number;
    unit: string;
    deadline?: Date;
  };
  startDate: Date;
  currentValue: number;
  milestones: {
    date: Date;
    value: number;
    achieved: boolean;
  }[];
}

export interface UserProgram {
  id: string;
  name: string;
  type: SportType;
  goal: UserGoal;
  status: ProgramStatus;
  createdAt: Date;
  updatedAt: Date;
  currentWeek: number;
  totalWeeks: number;
}

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  subscription: SubscriptionTier;
  subscriptionEnds?: Date;
  activePrograms: UserProgram[];
  completedPrograms: UserProgram[];
  currentGoals: UserGoal[];
  achievedGoals: UserGoal[];
  planGenerationCredits: number; // For free tier users
  lastActive: Date;
  preferences: {
    notifications: boolean;
    weeklyEmails: boolean;
    progressReminders: boolean;
  };
} 