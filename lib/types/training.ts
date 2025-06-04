export type QuestionType = 'numeric' | 'text' | 'multi_select' | 'compound' | 'time' | 'duration';

export interface ValidationRules {
  min?: number;
  max?: number;
}

export interface Exercise {
  name: string;
  unit: string;
}

export interface Question {
  id: string;
  text: string;
  type: QuestionType;
  validation?: ValidationRules;
  unit?: string;
  options?: string[];
  required?: boolean;
  followUp?: Record<string, string>;
  exercises?: Exercise[];
  format?: string;
}

export interface ProgramTemplate {
  frequency?: string;
  progression?: string;
  exercises?: string[];
  duration?: string;
  peakMileage?: string;
  longRun?: string;
  workoutTypes?: string[];
}

export interface Goal {
  name: string;
  questions: Question[];
  programTemplates: {
    beginner: ProgramTemplate;
    intermediate: ProgramTemplate;
    advanced: ProgramTemplate;
  };
}

export interface TrainingFlow {
  goals: {
    strength: Goal;
    endurance: Goal;
    weight_loss: Goal;
  };
  commonQuestions: {
    injuries: Question;
    equipment: Question;
    availability: Question;
  };
} 