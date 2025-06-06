import trainingPlansData from '../data/training-plans.json';

export interface TrainingPlan {
  plan_id: string;
  title: string;
  duration_weeks: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  average_weekly_hours: number;
  max_week_hours: number;
  description: string;
  prerequisites: {
    swim_distance: string;
    bike_duration: string;
    run_duration: string;
  };
  training_zones: {
    [key: string]: {
      name: string;
      heart_rate_percentage: string;
      description: string;
    };
  };
  phases: Array<{
    phase: string;
    weeks: number[];
    focus: string;
  }>;
  weekly_schedule?: Array<{
    week: number;
    phase: string;
    total_hours: string;
    sessions: {
      [day: string]: {
        session_1?: TrainingSession;
        session_2?: TrainingSession;
      };
    };
    training_tip?: string;
  }>;
  note?: string;
}

export interface TrainingSession {
  type: string;
  duration: string;
  intensity: string;
  workout: string;
}

export interface TrainingGlossary {
  [key: string]: string;
}

export interface TrainingTips {
  [key: string]: string;
}

class TrainingPlansService {
  private plans: TrainingPlan[];
  private glossary: TrainingGlossary;
  private trainingTips: TrainingTips;

  constructor() {
    this.plans = trainingPlansData.training_plans as TrainingPlan[];
    this.glossary = trainingPlansData.glossary;
    this.trainingTips = trainingPlansData.training_tips;
  }

  /**
   * Get all training plans
   */
  getAllPlans(): TrainingPlan[] {
    return this.plans;
  }

  /**
   * Get a specific training plan by ID
   */
  getPlanById(planId: string): TrainingPlan | undefined {
    return this.plans.find(plan => plan.plan_id === planId);
  }

  /**
   * Get plans filtered by level
   */
  getPlansByLevel(level: 'Beginner' | 'Intermediate' | 'Advanced'): TrainingPlan[] {
    return this.plans.filter(plan => plan.level === level);
  }

  /**
   * Get plans filtered by duration
   */
  getPlansByDuration(weeks: number): TrainingPlan[] {
    return this.plans.filter(plan => plan.duration_weeks === weeks);
  }

  /**
   * Get plans filtered by maximum weekly hours
   */
  getPlansByMaxHours(maxHours: number): TrainingPlan[] {
    return this.plans.filter(plan => plan.max_week_hours <= maxHours);
  }

  /**
   * Search plans by title or description
   */
  searchPlans(query: string): TrainingPlan[] {
    const lowercaseQuery = query.toLowerCase();
    return this.plans.filter(plan => 
      plan.title.toLowerCase().includes(lowercaseQuery) ||
      plan.description.toLowerCase().includes(lowercaseQuery)
    );
  }

  /**
   * Get training glossary
   */
  getGlossary(): TrainingGlossary {
    return this.glossary;
  }

  /**
   * Get training tips
   */
  getTrainingTips(): TrainingTips {
    return this.trainingTips;
  }

  /**
   * Get a specific week's training schedule
   */
  getWeekSchedule(planId: string, weekNumber: number): any {
    const plan = this.getPlanById(planId);
    if (!plan || !plan.weekly_schedule) {
      return null;
    }
    
    return plan.weekly_schedule.find(week => week.week === weekNumber);
  }

  /**
   * Get all weeks for a specific phase
   */
  getPhaseWeeks(planId: string, phaseName: string): any[] {
    const plan = this.getPlanById(planId);
    if (!plan || !plan.weekly_schedule) {
      return [];
    }
    
    return plan.weekly_schedule.filter(week => week.phase === phaseName);
  }

  /**
   * Calculate total training hours for a plan
   */
  calculateTotalHours(planId: string): number {
    const plan = this.getPlanById(planId);
    if (!plan || !plan.weekly_schedule) {
      return 0;
    }

    return plan.weekly_schedule.reduce((total, week) => {
      const [hours, minutes] = week.total_hours.split(':').map(Number);
      return total + hours + (minutes / 60);
    }, 0);
  }

  /**
   * Get recommended plans based on user profile
   */
  getRecommendedPlans(userProfile: {
    experience: 'Beginner' | 'Intermediate' | 'Advanced';
    availableHours: number;
    preferredDuration: number;
  }): TrainingPlan[] {
    let recommendations = this.getPlansByLevel(userProfile.experience);
    
    // Filter by available time
    recommendations = recommendations.filter(plan => 
      plan.average_weekly_hours <= userProfile.availableHours
    );
    
    // Sort by preferred duration (closest match first)
    recommendations.sort((a, b) => 
      Math.abs(a.duration_weeks - userProfile.preferredDuration) - 
      Math.abs(b.duration_weeks - userProfile.preferredDuration)
    );
    
    return recommendations;
  }
}

export default new TrainingPlansService(); 