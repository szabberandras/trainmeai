// lib/services/cycling-onboarding.service.ts
// Cycling-specific onboarding logic and plan generation

export interface CyclingOnboardingData {
  // Simplified cycling-specific fields
  cyclingFocus?: string; // 'general-fitness', 'event-prep', 'performance'
  
  // General onboarding data that's still relevant
  fitnessLevel?: string;
  timeCommitment?: string;
  daysPerWeek?: string;
  equipment?: string[];
  goal?: string;
}

export interface CyclingPlanRecommendation {
  planType: string;
  focusAreas: string[];
  keyWorkouts: string[];
  trainingPhases: string[];
  equipmentRecommendations: string[];
  specializations: string[];
  recommendations: string[];
}

export class CyclingOnboardingService {
  static generateCyclingPlan(data: CyclingOnboardingData): CyclingPlanRecommendation {
    const plan: CyclingPlanRecommendation = {
      planType: 'General Cycling Plan',
      focusAreas: [],
      keyWorkouts: [],
      trainingPhases: [],
      equipmentRecommendations: [],
      specializations: [],
      recommendations: []
    };

    // Determine plan type based on cycling focus
    if (data.cyclingFocus === 'general-fitness') {
      plan.planType = 'Cycling Fitness Development';
      plan.focusAreas = [
        'Aerobic Base Building',
        'Endurance Development',
        'Basic Power Development',
        'Cycling Efficiency'
      ];
      plan.keyWorkouts = [
        'Zone 2 Endurance Rides',
        'Tempo Intervals',
        'Recovery Rides',
        'Progressive Long Rides'
      ];
      plan.trainingPhases = [
        'Base Building Phase',
        'Aerobic Development',
        'Maintenance Phase'
      ];
    } else if (data.cyclingFocus === 'event-prep') {
      plan.planType = 'Event-Specific Cycling Training';
      plan.focusAreas = [
        'Event-Specific Power',
        'Race Simulation',
        'Tactical Preparation',
        'Peak Performance'
      ];
      plan.keyWorkouts = [
        'Race Pace Intervals',
        'Event Simulation Rides',
        'High-Intensity Intervals',
        'Tapering Sessions'
      ];
      plan.trainingPhases = [
        'Base Building Phase',
        'Build Phase',
        'Peak Phase',
        'Taper Phase'
      ];
    } else if (data.cyclingFocus === 'performance') {
      plan.planType = 'Advanced Performance Development';
      plan.focusAreas = [
        'FTP Development',
        'VO2 Max Training',
        'Neuromuscular Power',
        'Advanced Periodization'
      ];
      plan.keyWorkouts = [
        'FTP Intervals',
        'VO2 Max Intervals',
        'Sprint Power Sessions',
        'Sweet Spot Training'
      ];
      plan.trainingPhases = [
        'Base Building Phase',
        'Build Phase',
        'Specialization Phase',
        'Peak Phase'
      ];
    }

    // Equipment recommendations based on focus
    plan.equipmentRecommendations = this.getEquipmentRecommendations(data);
    
    // General recommendations
    plan.recommendations = this.getGeneralRecommendations(data);
    
    // Specializations based on fitness level and goals
    plan.specializations = this.getSpecializations(data);

    return plan;
  }

  private static getEquipmentRecommendations(data: CyclingOnboardingData): string[] {
    const recommendations = ['Properly fitted bicycle', 'Helmet', 'Cycling shorts'];
    
    if (data.cyclingFocus === 'performance') {
      recommendations.push('Power meter', 'Heart rate monitor', 'Indoor trainer');
    }
    
    if (data.cyclingFocus === 'event-prep') {
      recommendations.push('Event-specific gear', 'Nutrition supplies', 'Repair kit');
    }
    
    return recommendations;
  }

  private static getGeneralRecommendations(data: CyclingOnboardingData): string[] {
    const recommendations = [
      'Start with shorter rides and gradually increase duration',
      'Focus on proper bike fit to prevent injury',
      'Include recovery days in your training schedule'
    ];
    
    if (data.fitnessLevel === 'beginner') {
      recommendations.push(
        'Begin with 2-3 rides per week',
        'Focus on building base fitness before intensity',
        'Learn basic bike handling skills'
      );
    }
    
    return recommendations;
  }

  private static getSpecializations(data: CyclingOnboardingData): string[] {
    const specializations = [];
    
    if (data.cyclingFocus === 'general-fitness') {
      specializations.push('Endurance Building', 'Health & Wellness');
    } else if (data.cyclingFocus === 'event-prep') {
      specializations.push('Race Preparation', 'Event-Specific Training');
    } else if (data.cyclingFocus === 'performance') {
      specializations.push('Power Development', 'Advanced Training');
    }
    
    return specializations;
  }

  static validateCyclingOnboarding(data: CyclingOnboardingData): { isValid: boolean; missingFields: string[] } {
    const missingFields: string[] = [];
    
    if (!data.cyclingFocus) {
      missingFields.push('Cycling Focus');
    }
    
    return {
      isValid: missingFields.length === 0,
      missingFields
    };
  }
} 