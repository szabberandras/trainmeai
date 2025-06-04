// Type definition for goal types
type GoalType = 'marathon' | 'muscle' | 'weight_loss' | 'general' | 'strength' | 'endurance' | 'flexibility' | 'sport_specific';

export interface ChatMessage {
  type: 'user' | 'ai';
  content: string;
  metadata?: {
    goalType?: GoalType;
    questionIndex?: number;
    isReadyToGenerate?: boolean;
    showGenerateButton?: boolean;
  };
} 