interface BaseCoach {
  name: string;
  style: {
    tone: string;
    communication: string;
    approach: string;
    patience: string;
    celebration: string;
  };
  responsePatterns: {
    encouragement: string[];
  };
}

export interface FitCoachAI extends BaseCoach {
  experience: string;
  questioningStyle: {
    initial: {
      type: string;
      focus: string;
      depth: string;
    };
    followUp: {
      type: string;
      grouping: string;
      explanation: string;
    };
  };
  responsePatterns: {
    planPresentation: {
      structure: string;
      explanation: string;
      modifications: string;
      nextSteps: string;
    };
    encouragement: string[];
  };
}

export interface TrainingPageCoach extends BaseCoach {
  principles: {
    simplicity: string;
    memory: string;
    flexibility: string;
    guidance: string;
  };
  responsePatterns: {
    workoutPresentation: {
      structure: string;
      detail: string;
      focus: string;
    };
    encouragement: string[];
  };
}

export interface CoachPersonas {
  FitCoach: FitCoachAI;
  TrainingPage: TrainingPageCoach;
} 