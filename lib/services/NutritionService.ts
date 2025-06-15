export interface NutritionProfile {
  bodyweight_kg: number;
  activity_level: 'sedentary' | 'light' | 'moderate' | 'high' | 'extreme';
  training_type: 'endurance' | 'strength' | 'mixed' | 'bodybuilding' | 'general';
  training_frequency: number; // sessions per week
  training_duration: number; // minutes per session
  goals: 'performance' | 'muscle_gain' | 'fat_loss' | 'maintenance' | 'body_recomp';
  dietary_restrictions?: string[];
  supplement_preferences?: 'minimal' | 'evidence_based' | 'comprehensive';
}

export interface MacronutrientTargets {
  carbohydrates: {
    grams_per_kg: number;
    total_grams: number;
    calories: number;
    percentage: number;
  };
  protein: {
    grams_per_kg: number;
    total_grams: number;
    calories: number;
    percentage: number;
  };
  fats: {
    grams_per_kg: number;
    total_grams: number;
    calories: number;
    percentage: number;
  };
  total_calories: number;
}

export interface NutrientTiming {
  pre_workout: {
    timing: string;
    carbs_g: number;
    protein_g: number;
    fluids_ml: number;
    recommendations: string[];
  };
  during_workout: {
    applicable: boolean;
    carbs_per_hour: number;
    fluids_per_15min: number;
    electrolytes_mg: number;
    recommendations: string[];
  };
  post_workout: {
    timing: string;
    protein_g: number;
    carbs_g: number;
    fluids_percentage: number;
    recommendations: string[];
  };
  daily_distribution: {
    meals_per_day: number;
    protein_per_meal: number;
    carb_timing: string[];
    hydration_baseline_ml: number;
  };
}

export interface SupplementRecommendation {
  name: string;
  dosage: string;
  timing: string;
  evidence_level: 'strong' | 'moderate' | 'limited';
  benefits: string[];
  considerations: string[];
  cost_effectiveness: 'high' | 'moderate' | 'low';
}

export class NutritionService {
  
  /**
   * Calculate precise macronutrient targets based on training and goals
   */
  static calculateMacronutrientTargets(profile: NutritionProfile): MacronutrientTargets {
    const { bodyweight_kg, training_type, goals, activity_level } = profile;
    
    // Carbohydrate targets (g/kg bodyweight)
    let carbTarget = 0;
    switch (training_type) {
      case 'endurance':
        carbTarget = activity_level === 'high' || activity_level === 'extreme' ? 8 : 6;
        break;
      case 'strength':
        carbTarget = 4;
        break;
      case 'mixed':
        carbTarget = 5;
        break;
      case 'bodybuilding':
        carbTarget = goals === 'fat_loss' ? 2 : 4;
        break;
      default:
        carbTarget = 4;
    }
    
    // Adjust for goals
    if (goals === 'fat_loss') carbTarget *= 0.7;
    if (goals === 'muscle_gain') carbTarget *= 1.2;
    
    // Protein targets (g/kg bodyweight)
    let proteinTarget = 0;
    switch (training_type) {
      case 'endurance':
        proteinTarget = 1.4;
        break;
      case 'strength':
      case 'bodybuilding':
        proteinTarget = 2.0;
        break;
      case 'mixed':
        proteinTarget = 1.7;
        break;
      default:
        proteinTarget = 1.6;
    }
    
    // Adjust for goals
    if (goals === 'fat_loss' || goals === 'body_recomp') proteinTarget *= 1.2;
    if (goals === 'muscle_gain') proteinTarget *= 1.1;
    
    // Fat targets (g/kg bodyweight)
    let fatTarget = 1.0;
    if (goals === 'fat_loss') fatTarget = 0.8;
    if (training_type === 'endurance' && goals !== 'fat_loss') fatTarget = 1.2;
    
    // Calculate totals
    const carbGrams = Math.round(carbTarget * bodyweight_kg);
    const proteinGrams = Math.round(proteinTarget * bodyweight_kg);
    const fatGrams = Math.round(fatTarget * bodyweight_kg);
    
    const carbCalories = carbGrams * 4;
    const proteinCalories = proteinGrams * 4;
    const fatCalories = fatGrams * 9;
    const totalCalories = carbCalories + proteinCalories + fatCalories;
    
    return {
      carbohydrates: {
        grams_per_kg: carbTarget,
        total_grams: carbGrams,
        calories: carbCalories,
        percentage: Math.round((carbCalories / totalCalories) * 100)
      },
      protein: {
        grams_per_kg: proteinTarget,
        total_grams: proteinGrams,
        calories: proteinCalories,
        percentage: Math.round((proteinCalories / totalCalories) * 100)
      },
      fats: {
        grams_per_kg: fatTarget,
        total_grams: fatGrams,
        calories: fatCalories,
        percentage: Math.round((fatCalories / totalCalories) * 100)
      },
      total_calories: totalCalories
    };
  }
  
  /**
   * Generate nutrient timing recommendations
   */
  static generateNutrientTiming(profile: NutritionProfile, macros: MacronutrientTargets): NutrientTiming {
    const { bodyweight_kg, training_duration } = profile;
    
    // Pre-workout timing
    const preWorkoutCarbs = Math.round(1 * bodyweight_kg); // 1g/kg
    const preWorkoutProtein = Math.round(0.25 * bodyweight_kg); // 0.25g/kg
    const preWorkoutFluids = Math.round(7 * bodyweight_kg); // 7ml/kg
    
    // During workout (for sessions >60min)
    const duringWorkoutApplicable = training_duration > 60;
    const carbsPerHour = duringWorkoutApplicable ? 45 : 0;
    const fluidsPerQuarter = duringWorkoutApplicable ? 200 : 0;
    
    // Post-workout
    const postWorkoutProtein = Math.min(40, Math.round(0.4 * bodyweight_kg)); // 0.4g/kg, max 40g
    const postWorkoutCarbs = Math.round(1.2 * bodyweight_kg); // 1.2g/kg
    
    // Daily distribution
    const mealsPerDay = 4;
    const proteinPerMeal = Math.round(macros.protein.total_grams / mealsPerDay);
    const baselineHydration = Math.round(35 * bodyweight_kg); // 35ml/kg
    
    return {
      pre_workout: {
        timing: "1-4 hours before training",
        carbs_g: preWorkoutCarbs,
        protein_g: preWorkoutProtein,
        fluids_ml: preWorkoutFluids,
        recommendations: [
          "Choose easily digestible carbs (banana, oats, toast)",
          "Include lean protein source (Greek yogurt, protein shake)",
          "Avoid high fiber/fat foods close to training",
          "Hydrate gradually over 2-4 hours"
        ]
      },
      during_workout: {
        applicable: duringWorkoutApplicable,
        carbs_per_hour: carbsPerHour,
        fluids_per_15min: fluidsPerQuarter,
        electrolytes_mg: 400,
        recommendations: duringWorkoutApplicable ? [
          "Use sports drinks or diluted fruit juice",
          "Aim for 30-60g carbs per hour after first hour",
          "Sip fluids regularly, don't wait until thirsty",
          "Add electrolytes in hot/humid conditions"
        ] : ["Not needed for sessions under 60 minutes"]
      },
      post_workout: {
        timing: "Within 2 hours (ideally 30-60 minutes)",
        protein_g: postWorkoutProtein,
        carbs_g: postWorkoutCarbs,
        fluids_percentage: 150,
        recommendations: [
          "Prioritize high-quality complete protein",
          "Include fast-digesting carbs for glycogen replenishment",
          "Rehydrate with 150% of fluid lost during exercise",
          "Consider chocolate milk, protein shake, or whole food meal"
        ]
      },
      daily_distribution: {
        meals_per_day: mealsPerDay,
        protein_per_meal: proteinPerMeal,
        carb_timing: [
          "Higher carbs around training sessions",
          "Moderate carbs with breakfast",
          "Lower carbs in evening if fat loss goal"
        ],
        hydration_baseline_ml: baselineHydration
      }
    };
  }
  
  /**
   * Generate evidence-based supplement recommendations
   */
  static generateSupplementRecommendations(profile: NutritionProfile): SupplementRecommendation[] {
    const recommendations: SupplementRecommendation[] = [];
    
    // Creatine - for strength/power athletes
    if (['strength', 'mixed', 'bodybuilding'].includes(profile.training_type)) {
      recommendations.push({
        name: "Creatine Monohydrate",
        dosage: "3-5g daily",
        timing: "Any time (timing doesn't matter)",
        evidence_level: "strong",
        benefits: [
          "Improved high-intensity exercise performance",
          "Increased muscle mass and strength",
          "Enhanced recovery between sets"
        ],
        considerations: [
          "May cause initial water weight gain",
          "Ensure adequate hydration",
          "Loading phase optional (20g/day for 5 days)"
        ],
        cost_effectiveness: "high"
      });
    }
    
    // Caffeine - for most athletes
    if (profile.supplement_preferences !== 'minimal') {
      recommendations.push({
        name: "Caffeine",
        dosage: `${Math.round(3 * profile.bodyweight_kg)}-${Math.round(6 * profile.bodyweight_kg)}mg`,
        timing: "30-60 minutes before exercise",
        evidence_level: "strong",
        benefits: [
          "Enhanced alertness and focus",
          "Reduced perceived exertion",
          "Improved endurance performance"
        ],
        considerations: [
          "Individual tolerance varies",
          "Avoid if anxiety-prone or late training",
          "Cycle usage to prevent tolerance"
        ],
        cost_effectiveness: "high"
      });
    }
    
    // Protein powder - if dietary protein inadequate
    const dailyProteinNeeds = Math.round(profile.bodyweight_kg * 1.8);
    recommendations.push({
      name: "Whey/Plant Protein Powder",
      dosage: "20-40g per serving",
      timing: "Post-workout or between meals",
      evidence_level: "strong",
      benefits: [
        "Convenient protein source",
        "Complete amino acid profile",
        "Supports muscle protein synthesis"
      ],
      considerations: [
        `Only if struggling to reach ${dailyProteinNeeds}g protein daily`,
        "Whole foods preferred when possible",
        "Choose third-party tested products"
      ],
      cost_effectiveness: "moderate"
    });
    
    // Vitamin D - universal recommendation
    recommendations.push({
      name: "Vitamin D3",
      dosage: "1000-4000 IU daily",
      timing: "With fat-containing meal",
      evidence_level: "strong",
      benefits: [
        "Bone health and immune function",
        "Potential performance benefits",
        "Mood and energy support"
      ],
      considerations: [
        "Blood test recommended to assess status",
        "Higher doses may be needed in winter",
        "Fat-soluble vitamin - take with meals"
      ],
      cost_effectiveness: "high"
    });
    
    return recommendations.filter(rec => 
      profile.supplement_preferences === 'comprehensive' || 
      rec.evidence_level === 'strong' ||
      (profile.supplement_preferences === 'evidence_based' && rec.cost_effectiveness === 'high')
    );
  }
  
  /**
   * Generate complete nutrition plan
   */
  static generateComprehensiveNutritionPlan(profile: NutritionProfile) {
    const macros = this.calculateMacronutrientTargets(profile);
    const timing = this.generateNutrientTiming(profile, macros);
    const supplements = this.generateSupplementRecommendations(profile);
    
    return {
      profile,
      macronutrient_targets: macros,
      nutrient_timing: timing,
      supplement_recommendations: supplements,
      key_principles: [
        "Consistency over perfection - aim for 80% adherence",
        "Adjust based on training demands and recovery",
        "Prioritize whole foods over supplements",
        "Stay hydrated throughout the day",
        "Monitor progress and adjust as needed"
      ]
    };
  }
} 