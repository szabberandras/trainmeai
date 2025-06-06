import { CoachPersona, ExperienceLevel, SafetyPriority } from '../types/training-system';
import { OnboardingAnswers } from '@/app/components/onboarding/CinematicOnboarding';

export interface PersonaSelectionResult {
  persona: CoachPersona;
  safetyPriority: SafetyPriority;
  progressionRate: 'very-conservative' | 'conservative' | 'moderate' | 'aggressive' | 'periodized';
  reasoning: string;
}

export class PersonaSelectionService {
  
  /**
   * Select the most appropriate AI persona based on user profile
   */
  static selectPersona(userProfile: OnboardingAnswers): PersonaSelectionResult {
    const experienceLevel = this.assessExperienceLevel(userProfile);
    const activityType = userProfile.activity;
    
    // Beginner-focused selection (safety first)
    if (experienceLevel === 'complete-beginner' || experienceLevel === 'beginner-inconsistent') {
      return {
        persona: 'BeginnerGuide',
        safetyPriority: experienceLevel === 'complete-beginner' ? 'maximum' : 'high',
        progressionRate: experienceLevel === 'complete-beginner' ? 'very-conservative' : 'conservative',
        reasoning: `Selected BeginnerGuide AI for ${experienceLevel} to prioritize safety and confidence building`
      };
    }
    
    // Sport-specific selection for intermediate/advanced
    if (experienceLevel === 'intermediate-structured' || experienceLevel === 'advanced-competitive') {
      if (this.isSportSpecificActivity(activityType)) {
        return {
          persona: 'SportSpecific',
          safetyPriority: experienceLevel === 'advanced-competitive' ? 'athlete-managed' : 'standard',
          progressionRate: experienceLevel === 'advanced-competitive' ? 'periodized' : 'aggressive',
          reasoning: `Selected SportSpecific AI for ${experienceLevel} with ${activityType} focus for advanced programming`
        };
      }
    }
    
    // Default to FitCoach for amateur-regular or general activities
    return {
      persona: 'FitCoach',
      safetyPriority: 'moderate',
      progressionRate: 'moderate',
      reasoning: `Selected FitCoach AI for balanced approach with ${experienceLevel} experience level`
    };
  }
  
  /**
   * Assess user experience level based on onboarding answers
   */
  private static assessExperienceLevel(userProfile: OnboardingAnswers): ExperienceLevel {
    const fitnessLevel = userProfile.fitnessLevel;
    const activitySpecific = userProfile.activitySpecific;
    
    // Map onboarding fitness levels to experience levels
    switch (fitnessLevel) {
      case 'beginner':
        return 'complete-beginner';
      case 'some-experience':
        return 'beginner-inconsistent';
      case 'regular':
        return 'amateur-regular';
      case 'advanced':
        // Check for structured training experience
        if (activitySpecific?.strengthExperienceLevel === 'advanced-lifter' || 
            activitySpecific?.currentVolume) {
          return 'advanced-competitive';
        }
        return 'intermediate-structured';
      default:
        return 'amateur-regular';
    }
  }
  
  /**
   * Check if activity benefits from sport-specific programming
   */
  private static isSportSpecificActivity(activity: string): boolean {
    const sportSpecificActivities = [
      'strength-power',
      'endurance',
      'running',
      'cycling',
      'swimming',
      'combat-sports',
      'team-sports'
    ];
    
    return sportSpecificActivities.includes(activity);
  }
  
  /**
   * Get beginner safety indicators from user profile
   */
  static getBeginnerSafetyIndicators(userProfile: OnboardingAnswers): string[] {
    const indicators: string[] = [];
    
    // Check for beginner indicators from training flows
    if (userProfile.fitnessLevel === 'beginner') {
      indicators.push('No structured program experience ever');
    }
    
    if (userProfile.activitySpecific?.strengthExperienceLevel === 'never-lifted') {
      indicators.push('Cannot perform basic bodyweight movements with good form');
    }
    
    if (userProfile.age && parseInt(userProfile.age) >= 50) {
      indicators.push('Age-related safety considerations');
    }
    
    if (userProfile.activitySpecific?.physicalDiscomforts?.length) {
      indicators.push('Previous injury history requires careful progression');
    }
    
    return indicators;
  }
  
  /**
   * Determine if user needs beginner safety protocols
   */
  static needsBeginnerSafetyProtocols(userProfile: OnboardingAnswers): boolean {
    const safetyIndicators = this.getBeginnerSafetyIndicators(userProfile);
    return safetyIndicators.length > 0 || userProfile.fitnessLevel === 'beginner';
  }
} 