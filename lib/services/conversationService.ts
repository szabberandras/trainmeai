import { ChatMessage } from '@/types/chat';

export type GoalType = 'marathon' | 'muscle' | 'weight_loss' | 'general';

export interface QuestionFlow {
  marathon: string[];
  muscle: string[];
  weight_loss: string[];
  general: string[];
}

const questionFlow: QuestionFlow = {
  marathon: [
    "How many days per week do you currently run?",
    "What's your longest run distance so far?",
    "What's your typical running pace? (minutes per km/mile)",
    "Do you have any injuries or health concerns I should know about?",
    "What type of surface do you usually run on? (road, trail, treadmill)",
    "Do you have access to a gym for cross-training?"
  ],
  muscle: [
    "How many days per week do you currently work out?",
    "What type of exercises are you familiar with?",
    "Do you have any lifting experience? If yes, what are your current lifts?",
    "Do you have any injuries or health concerns I should know about?",
    "Do you have access to a gym or home equipment?",
    "What's your current diet like?"
  ],
  weight_loss: [
    "What's your current activity level?",
    "Have you tried any weight loss programs before?",
    "Do you have any dietary restrictions or preferences?",
    "What's your typical daily routine like?",
    "Do you have access to a gym or home equipment?",
    "Do you have any health conditions I should know about?"
  ],
  general: [
    "How many days per week can you commit to exercise?",
    "What types of physical activities do you enjoy?",
    "Do you have any fitness equipment available?",
    "Do you have any health concerns or limitations?",
    "What's your typical daily schedule like?",
    "Have you followed any fitness programs before?"
  ]
};

export const getNextQuestion = (goalType: keyof QuestionFlow, questionIndex: number): string | null => {
  const questions = questionFlow[goalType];
  return questionIndex < questions.length ? questions[questionIndex] : null;
};

export const formatAIResponse = (userAnswer: string, goalType: keyof QuestionFlow, questionIndex: number): string => {
  const nextQuestion = getNextQuestion(goalType, questionIndex);
  
  if (!nextQuestion) {
    return `Perfect! I have all the information I need to create your personalized program. Let me put that together for you...`;
  }

  // Add encouraging feedback based on the previous answer
  const encouragingResponses = [
    "Great, that helps me understand your current level.",
    "Thanks for sharing that information!",
    "Excellent, this will help me customize your program.",
    "Perfect, I'm getting a good picture of your situation.",
    "Thanks, this is really helpful information."
  ];

  const randomEncouragement = encouragingResponses[Math.floor(Math.random() * encouragingResponses.length)];

  return `${randomEncouragement}

${nextQuestion}`;
};

export const analyzeUserGoal = (message: string): keyof QuestionFlow => {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('marathon') || lowerMessage.includes('running') || lowerMessage.includes('run')) {
    return 'marathon';
  } else if (lowerMessage.includes('muscle') || lowerMessage.includes('strength') || lowerMessage.includes('build')) {
    return 'muscle';
  } else if (lowerMessage.includes('weight') || lowerMessage.includes('fat') || lowerMessage.includes('lose')) {
    return 'weight_loss';
  }
  return 'general';
}; 