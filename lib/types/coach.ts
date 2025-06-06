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

export interface BeginnerGuideAI extends BaseCoach {
  core_mission: string;
  expertise_areas: string[];
  personality_traits: {
    patience: string;
    safety_mindset: string;
    encouragement: string;
    education: string;
    confidence: string;
  };
  questioningStyle: {
    safety_screening: {
      priority: string;
      questions: string[];
    };
  };
  responsePatterns: {
    encouragement: string[];
    confidence_building: string[];
    safety_first: string[];
    milestone_celebrations: string[];
    approach_patterns: string[];
  };
  progression_philosophy: {
    order: string[];
    safety_gates: string;
    timeline: string;
    focus: string;
  };
}

export interface SportSpecificAI extends BaseCoach {
  expertise_areas: {
    endurance_sports: string;
    strength_power: string;
    combat_sports: string;
    team_sports: string;
    skill_based: string;
  };
  responsePatterns: {
    encouragement: string[];
    sport_analysis: string[];
    energy_system_education: string[];
  };
}

export interface CoachPersonas {
  FitCoach: FitCoachAI;
  TrainingPage: TrainingPageCoach;
  BeginnerGuide: BeginnerGuideAI;
  SportSpecific: SportSpecificAI;
} 