import { 
  CoachPersona, 
  TrainingContext, 
  UserProfile, 
  CoachResponse, 
  TrainingPlan 
} from '../types/training-system';
import { CoachPersonas, FitCoachAI } from '../types/coach';
import coachPersonas from '../data/coach-personas.json';
import trainingFlows from '../data/training-flows.json';

export class TrainingService {
  private context: TrainingContext | null = null;

  constructor() {}

  public initializeContext(persona: CoachPersona, userProfile: UserProfile): void {
    this.context = {
      persona,
      userProfile,
      currentWeek: 1
    };
  }

  public async generateResponse(userMessage: string): Promise<CoachResponse> {
    if (!this.context) {
      throw new Error('Training context not initialized');
    }

    const personas = coachPersonas as CoachPersonas;
    const persona = personas[this.context.persona];
    const response: CoachResponse = {
      message: '',
      nextQuestions: []
    };

    // Analyze user message for intent
    const intent = this.analyzeUserIntent(userMessage);
    
    switch (intent) {
      case 'initial_contact':
        response.message = this.generateInitialResponse();
        response.nextQuestions = this.getInitialQuestions();
        break;
      case 'check_in':
        response.message = this.generateCheckInResponse(userMessage);
        break;
      case 'request_plan':
        response.trainingPlan = await this.generateTrainingPlan();
        response.message = this.formatPlanPresentation(response.trainingPlan);
        break;
      default:
        response.message = this.generateFollowUpResponse(userMessage);
        break;
    }

    // Add encouragement based on persona
    response.encouragement = this.getRandomEncouragement();

    return response;
  }

  private analyzeUserIntent(message: string): string {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('start') || lowerMessage.includes('begin') || lowerMessage.includes('want to')) {
      return 'initial_contact';
    }
    if (lowerMessage.includes('yesterday') || lowerMessage.includes('completed') || lowerMessage.includes('did')) {
      return 'check_in';
    }
    if (lowerMessage.includes('plan') || lowerMessage.includes('program') || lowerMessage.includes('schedule')) {
      return 'request_plan';
    }
    return 'general_query';
  }

  private generateInitialResponse(): string {
    const personas = coachPersonas as CoachPersonas;
    const persona = personas[this.context!.persona];
    
    if (this.context!.persona === 'FitCoach') {
      const fitCoach = persona as FitCoachAI;
      return `Hi! I'm ${fitCoach.name} with ${fitCoach.experience}. I'm excited to help you achieve your fitness goals. Let's start by understanding where you are and where you want to go.`;
    } else {
      return `Hey there. Let's keep this simple and focused. What's on your mind for training today?`;
    }
  }

  private getInitialQuestions(): string[] {
    if (this.context!.persona === 'FitCoach') {
      return [
        "What specific fitness goals are you working towards?",
        "How many days per week can you commit to training?",
        "Do you have any injuries or physical limitations I should know about?",
        "What equipment do you have access to?"
      ];
    } else {
      return ["How are you feeling today?"];
    }
  }

  private async generateTrainingPlan(): Promise<TrainingPlan> {
    const { userProfile } = this.context!;
    
    // Get appropriate training template based on user goals and experience
    const template = this.getTrainingTemplate(userProfile);
    
    // Customize template based on user profile
    const customizedPlan = this.customizePlan(template, userProfile);
    
    return customizedPlan;
  }

  private getTrainingTemplate(profile: UserProfile): any {
    // Implementation would match user profile to appropriate training flow
    const flows = trainingFlows as any;
    return flows.goals[profile.goals[0]];
  }

  private customizePlan(template: any, profile: UserProfile): TrainingPlan {
    // Implementation would customize template based on user profile
    return {
      name: `${profile.goals[0]} Training - Week ${this.context!.currentWeek}`,
      type: profile.goals[0],
      weeks: []
    };
  }

  private formatPlanPresentation(plan: TrainingPlan): string {
    if (this.context!.persona === 'FitCoach') {
      return `Here's your detailed training plan for Week ${this.context!.currentWeek}:\n\n` +
             `${plan.name}\n` +
             this.formatWorkouts(plan.weeks[0].workouts);
    } else {
      return `For today:\n\n` +
             this.formatWorkouts([plan.weeks[0].workouts[0]]);
    }
  }

  private formatWorkouts(workouts: any[]): string {
    return workouts.map(workout => 
      `${workout.day}: ${workout.title}\n` +
      `${workout.summary}\n` +
      (workout.details.notes ? `Notes: ${workout.details.notes}\n` : '')
    ).join('\n');
  }

  private generateCheckInResponse(message: string): string {
    // Implementation would analyze check-in message and provide appropriate response
    return this.context!.persona === 'FitCoach' 
      ? "Great job on completing your workout! Let's analyze how it went..."
      : "Solid work. How did that feel?";
  }

  private generateFollowUpResponse(message: string): string {
    // Implementation would generate contextual follow-up based on conversation flow
    return this.context!.persona === 'FitCoach'
      ? "Thanks for sharing that information. It helps me customize your plan better."
      : "Got it. Let's work with that.";
  }

  private getRandomEncouragement(): string {
    const personas = coachPersonas as CoachPersonas;
    const persona = personas[this.context!.persona];
    const encouragements = persona.responsePatterns.encouragement;
    return encouragements[Math.floor(Math.random() * encouragements.length)];
  }

  public updateProgress(metrics: Record<string, number>): void {
    if (!this.context) {
      throw new Error('Training context not initialized');
    }
    this.context.progressMetrics = {
      ...this.context.progressMetrics,
      ...metrics
    };
  }

  public recordCheckIn(feedback: string, adjustments?: string[]): void {
    if (!this.context) {
      throw new Error('Training context not initialized');
    }
    this.context.lastCheckIn = {
      date: new Date().toISOString(),
      feedback,
      adjustments
    };
  }
} 