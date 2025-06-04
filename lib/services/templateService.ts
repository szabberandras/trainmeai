// lib/services/templateService.ts - Template selection and customization service

import { TrainingTemplate, CustomizedTemplate, Exercise, WorkoutTemplate, ExerciseBlock } from '@/types/templates';
import { OnboardingAnswers } from '@/app/components/onboarding/CinematicOnboarding';
import { EXERCISE_DATABASE, getExercisesByEquipment, getExercisesByDifficulty } from '@/lib/exercises/database';
import { generalStrengthBeginnerTemplate } from '@/lib/templates/strength/general-strength-beginner';

// Template registry - will be expanded as we add more templates
const TEMPLATE_REGISTRY: Record<string, TrainingTemplate> = {
  'general-strength-beginner': generalStrengthBeginnerTemplate,
  // Add more templates here as they're created
};

export class TemplateService {
  
  /**
   * Select the most appropriate template based on user's onboarding answers
   */
  selectOptimalTemplate(userProfile: OnboardingAnswers): TrainingTemplate | null {
    const availableTemplates = Object.values(TEMPLATE_REGISTRY);
    
    // Filter templates by user requirements
    const compatibleTemplates = availableTemplates.filter(template => {
      // Check fitness level compatibility
      const fitnessMatch = template.fitness_levels.includes(userProfile.fitnessLevel as any);
      
      // Check goal compatibility
      const goalMatch = template.goals.includes(userProfile.goal as any);
      
      // Check activity category match
      const activityMatch = this.isActivityCompatible(template, userProfile.activity);
      
      // Check time commitment compatibility
      const timeMatch = template.time_commitments.includes(parseInt(userProfile.timeCommitment));
      
      // Check frequency compatibility
      const frequencyMatch = template.weekly_frequencies.includes(userProfile.daysPerWeek);
      
      // Check equipment compatibility
      const equipmentMatch = this.isEquipmentCompatible(template, userProfile.equipment || []);
      
      return fitnessMatch && goalMatch && activityMatch && timeMatch && frequencyMatch && equipmentMatch;
    });
    
    if (compatibleTemplates.length === 0) {
      console.warn('No compatible templates found for user profile:', userProfile);
      return null;
    }
    
    // Score templates and return the best match
    const scoredTemplates = compatibleTemplates.map(template => ({
      template,
      score: this.scoreTemplate(template, userProfile)
    }));
    
    scoredTemplates.sort((a, b) => b.score - a.score);
    
    console.log('Selected template:', scoredTemplates[0].template.name, 'with score:', scoredTemplates[0].score);
    return scoredTemplates[0].template;
  }
  
  /**
   * Customize a template for a specific user
   */
  customizeTemplate(template: TrainingTemplate, userProfile: OnboardingAnswers, userId: string): CustomizedTemplate {
    const customizations = {
      exercise_substitutions: this.generateExerciseSubstitutions(template, userProfile),
      intensity_adjustments: this.generateIntensityAdjustments(template, userProfile),
      time_modifications: this.generateTimeModifications(template, userProfile),
      equipment_adaptations: userProfile.equipment || []
    };
    
    // Generate the actual weekly plans
    const generated_weeks = this.generateWeeklyPlans(template, userProfile, customizations);
    
    const customizedTemplate: CustomizedTemplate = {
      ...template,
      user_id: userId,
      customizations,
      generated_weeks,
      current_week: 1,
      progress_tracking: {
        completed_workouts: 0,
        total_workouts: generated_weeks.reduce((total, week) => total + week.workouts.length, 0),
        average_completion_rate: 0,
        performance_trends: {},
        user_feedback: [],
        adaptations_made: []
      }
    };
    
    return customizedTemplate;
  }
  
  /**
   * Check if activity is compatible with template
   */
  private isActivityCompatible(template: TrainingTemplate, activity: string): boolean {
    // Map onboarding activities to template categories
    const activityMapping: Record<string, string[]> = {
      'strength-power': ['strength'],
      'cardio-endurance': ['endurance'],
      'mind-body': ['mind-body'],
      'team-sports': ['team-sports'],
      'outdoor-adventure': ['outdoor'],
      'combat-sports': ['combat'],
      'dance-movement': ['dance'],
      'precision-skill': ['precision'],
      'multiple-activities': ['strength', 'endurance', 'mind-body'], // flexible
      'general-fitness': ['strength', 'endurance'] // most common
    };
    
    const compatibleCategories = activityMapping[activity] || ['strength']; // default to strength
    return compatibleCategories.includes(template.category);
  }
  
  /**
   * Check if user's equipment is compatible with template
   */
  private isEquipmentCompatible(template: TrainingTemplate, userEquipment: string[]): boolean {
    // Check if any of the template's equipment options are satisfied
    return template.equipment_options.some(option => 
      option.every(required => 
        required === 'none' || userEquipment.includes(required)
      )
    );
  }
  
  /**
   * Score a template based on how well it matches the user
   */
  private scoreTemplate(template: TrainingTemplate, userProfile: OnboardingAnswers): number {
    let score = 0;
    
    // Exact fitness level match gets higher score
    if (template.fitness_levels.includes(userProfile.fitnessLevel as any)) {
      score += 30;
    }
    
    // Exact goal match
    if (template.goals.includes(userProfile.goal as any)) {
      score += 25;
    }
    
    // Activity compatibility
    if (this.isActivityCompatible(template, userProfile.activity)) {
      score += 20;
    }
    
    // Time commitment exact match
    if (template.time_commitments.includes(parseInt(userProfile.timeCommitment))) {
      score += 15;
    }
    
    // Equipment compatibility (prefer templates that use user's equipment)
    const userEquipment = userProfile.equipment || [];
    const templateUsesUserEquipment = template.equipment_options.some(option =>
      option.some(eq => userEquipment.includes(eq))
    );
    if (templateUsesUserEquipment) {
      score += 10;
    }
    
    return score;
  }
  
  /**
   * Generate exercise substitutions based on user constraints
   */
  private generateExerciseSubstitutions(template: TrainingTemplate, userProfile: OnboardingAnswers): Record<string, string> {
    const substitutions: Record<string, string> = {};
    const userEquipment = userProfile.equipment || [];
    const userAge = parseInt(userProfile.age);
    
    // Get all exercises used in the template
    const usedExercises = new Set<string>();
    template.weekly_structure.forEach(week => {
      week.workouts.forEach(workout => {
        [...workout.warmup, ...workout.main, ...workout.cooldown].forEach(block => {
          usedExercises.add(block.exercise_id);
        });
      });
    });
    
    // Check each exercise for needed substitutions
    usedExercises.forEach(exerciseId => {
      const exercise = EXERCISE_DATABASE[exerciseId];
      if (!exercise) return;
      
      // Equipment-based substitutions
      if (exercise.equipment.length > 0 && !exercise.equipment.some(eq => userEquipment.includes(eq))) {
        const alternatives = getExercisesByEquipment(userEquipment);
        const sameCategory = alternatives.filter(alt => alt.category === exercise.category);
        if (sameCategory.length > 0) {
          substitutions[exerciseId] = sameCategory[0].id;
        }
      }
      
      // Age-based modifications
      if (userAge >= 50 && exercise.difficulty >= 4) {
        // Find easier alternative
        const easierExercises = getExercisesByDifficulty(3).filter(alt => 
          alt.category === exercise.category && 
          alt.equipment.every(eq => userEquipment.includes(eq) || eq === 'none')
        );
        if (easierExercises.length > 0) {
          substitutions[exerciseId] = easierExercises[0].id;
        }
      }
    });
    
    return substitutions;
  }
  
  /**
   * Generate intensity adjustments based on user profile
   */
  private generateIntensityAdjustments(template: TrainingTemplate, userProfile: OnboardingAnswers): Record<string, number> {
    const adjustments: Record<string, number> = {};
    const userAge = parseInt(userProfile.age);
    const fitnessLevel = userProfile.fitnessLevel;
    
    // Age-based intensity adjustments
    if (userAge >= 60) {
      adjustments['global'] = 0.8; // 20% reduction
    } else if (userAge >= 50) {
      adjustments['global'] = 0.9; // 10% reduction
    } else if (userAge <= 25 && fitnessLevel === 'advanced') {
      adjustments['global'] = 1.1; // 10% increase
    }
    
    // Fitness level adjustments
    if (fitnessLevel === 'beginner') {
      adjustments['global'] = Math.min(adjustments['global'] || 1.0, 0.8);
    } else if (fitnessLevel === 'advanced') {
      adjustments['global'] = Math.max(adjustments['global'] || 1.0, 1.1);
    }
    
    return adjustments;
  }
  
  /**
   * Generate time-based modifications
   */
  private generateTimeModifications(template: TrainingTemplate, userProfile: OnboardingAnswers): Record<string, number> {
    const modifications: Record<string, number> = {};
    const targetTime = parseInt(userProfile.timeCommitment);
    
    // Calculate time scaling factor
    const baseTime = template.time_commitments[0]; // Use first supported time as base
    const scaleFactor = targetTime / baseTime;
    
    modifications['duration_scale'] = scaleFactor;
    modifications['rest_scale'] = Math.min(scaleFactor, 1.2); // Don't increase rest too much
    
    return modifications;
  }
  
  /**
   * Generate actual weekly plans from template
   */
  private generateWeeklyPlans(template: TrainingTemplate, userProfile: OnboardingAnswers, customizations: any): any[] {
    // This would generate the actual WeeklyPlan objects
    // For now, return empty array - will be implemented when we integrate with existing plan generation
    return [];
  }
  
  /**
   * Get all available templates
   */
  getAvailableTemplates(): TrainingTemplate[] {
    return Object.values(TEMPLATE_REGISTRY);
  }
  
  /**
   * Get template by ID
   */
  getTemplateById(id: string): TrainingTemplate | null {
    return TEMPLATE_REGISTRY[id] || null;
  }
  
  /**
   * Add new template to registry
   */
  registerTemplate(template: TrainingTemplate): void {
    TEMPLATE_REGISTRY[template.id] = template;
  }
}

// Export singleton instance
export const templateService = new TemplateService(); 