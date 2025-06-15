// lib/types/progressive-training.ts - Types for AI-driven progressive training

export type ProgramGenerationType = 'progressive' | 'full_plan';
export type WorkoutDetailLevel = 'framework' | 'detailed' | 'completed';

export interface ProgressiveProgram {
  id: string;
  userId: string;
  name: string;
  goal: string; // "Ironman 2026", "Marathon Sub-3:30"
  targetDate: Date;
  startDate: Date;
  
  // Program generation type
  generationType: ProgramGenerationType;
  
  // Progressive structure - can have framework or detailed weeks
  generatedWeeks: TrainingWeek[];
  frameworkWeeks?: FrameworkWeek[]; // High-level overview for full plans
  currentWeek: number;
  totalPlannedWeeks: number; // Estimated, can change
  
  // AI-driven framework for future weeks
  programFramework: ProgramFramework;
  
  // Export capabilities
  exportable: boolean;
  exportFormats?: ('pdf' | 'csv' | 'json')[];
  
  // Status tracking
  status: 'active' | 'paused' | 'completed' | 'archived';
  createdAt: Date;
  updatedAt: Date;
}

// Framework week - high level overview that gets detailed when accessed
export interface FrameworkWeek {
  id: string;
  weekNumber: number;
  theme: string;
  focus: string;
  phase: string;
  estimatedHours: number;
  keyWorkoutTypes: string[];
  workoutCount: number;
  detailLevel: WorkoutDetailLevel;
  canAccess: boolean; // Based on prerequisites
  generatedAt?: Date; // When detailed version was created
}

export interface ProgramFramework {
  name: string;
  estimatedWeeks: number;
  phases: TrainingPhase[];
  milestones: Milestone[];
  adaptationRules: string[];
  weeklyProgression?: WeeklyProgression[]; // For full plan generation
}

export interface WeeklyProgression {
  weekNumber: number;
  phase: string;
  volumeIncrease: number; // Percentage
  intensityFocus: string;
  keyWorkouts: string[];
  recoveryEmphasis: number; // 1-5 scale
}

export interface TrainingPhase {
  name: string; // "Base Building", "Build Phase", "Peak", "Taper"
  weeks: number;
  focus: string;
  weeklyHours?: string;
  keyWorkouts?: string[];
}

export interface Milestone {
  week: number;
  target: string;
  description?: string;
}

export interface TrainingWeek {
  id: string;
  weekNumber: number;
  theme: string;
  focus: string;
  workouts: TrainingWorkout[];
  completed: boolean;
  generatedAt: Date;
  coachingNotes?: string[];
}

export interface TrainingWorkout {
  id: string;
  title: string;
  type: string;
  description: string;
  duration: number;
  intensity: 'low' | 'moderate' | 'high';
  exercises: any[];
  completed: boolean;
  skipped?: boolean;
  isKeyWorkout?: boolean;
  feedback?: WorkoutFeedback;
}

export interface WorkoutFeedback {
  difficulty: number; // 1-5 scale
  enjoyment: number; // 1-5 scale
  rpe: number; // 1-10 scale
  notes?: string;
  completedAt: Date;
}

export interface WeekCompletionAnalysis {
  weekNumber: number;
  completionRate: number;
  workoutAnalysis: WorkoutAnalysis[];
  patterns: string[];
  adaptations: string[];
  coachingNotes: string[];
}

export interface WorkoutAnalysis {
  workoutId: string;
  completed: boolean;
  skipped: boolean;
  feedback?: WorkoutFeedback;
  type: string;
  isKeyWorkout: boolean;
}

export interface CoachingInsight {
  type: 'positive' | 'concern' | 'coaching' | 'adaptation';
  title: string;
  message: string;
  actionable: boolean;
  suggestedAction?: string;
}

export interface PrerequisiteCheck {
  canProceed: boolean;
  completionRate: number;
  missingWorkouts: string[];
  warnings: string[];
  blockers: string[];
  coachingMessage: string;
}

// AI Coaching Messages for different scenarios
export interface CoachingPrompts {
  behind_schedule: string[];
  ahead_schedule: string[];
  missing_key_workouts: string[];
  low_completion: string[];
  high_consistency: string[];
  injury_concern: string[];
  motivation_boost: string[];
}

export const AI_COACHING_PROMPTS: CoachingPrompts = {
  behind_schedule: [
    "I notice we're falling behind on our timeline for {goal}. Let's adjust our approach to get back on track without overwhelming you.",
    "Your {goal} is still achievable, but we need to be more strategic about our key workouts. I'm prioritizing the sessions that matter most.",
    "Don't worry about being behind schedule - consistency beats perfection. Let's focus on sustainable progress."
  ],
  ahead_schedule: [
    "You're ahead of schedule for {goal}! This gives us flexibility to focus on technique and injury prevention.",
    "Excellent progress toward {goal}. We can afford to emphasize quality over quantity in the coming weeks.",
    "Your consistency is paying off - we're ahead of our timeline. Let's use this buffer wisely."
  ],
  missing_key_workouts: [
    "I've noticed you've been skipping the key workouts. These are specifically designed for your {goal} - let's prioritize them.",
    "The key sessions are where the magic happens for {goal}. Everything else is supporting these crucial workouts.",
    "Missing key workouts puts your {goal} at risk. Let's simplify your schedule to ensure these happen."
  ],
  low_completion: [
    "Your completion rate suggests the current load might be too much. I'm adjusting to make this more sustainable.",
    "Quality over quantity - let's reduce the volume and focus on what matters most for {goal}.",
    "I'd rather see you complete 3 great workouts than struggle through 5. Let's right-size this program."
  ],
  high_consistency: [
    "Your consistency is outstanding! This is exactly how {goal} gets achieved - one workout at a time.",
    "You're building the habits that will carry you to {goal}. This consistency is your superpower.",
    "Excellent adherence to the program. Your body is adapting perfectly to the training stimulus."
  ],
  injury_concern: [
    "I'm seeing some patterns that concern me. Let's prioritize injury prevention - your {goal} depends on staying healthy.",
    "Your body is telling us something. Let's listen and adjust before a small issue becomes a big problem.",
    "Recovery is part of training. Let's emphasize this to keep you progressing toward {goal}."
  ],
  motivation_boost: [
    "Every workout is a step closer to {goal}. You're building something amazing.",
    "Remember why you started this journey to {goal}. You're stronger than you think.",
    "Progress isn't always linear, but you're moving in the right direction toward {goal}."
  ]
}; 