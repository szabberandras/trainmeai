import { Exercise } from '../exercises/types';
import { WorkoutExercise, Workout, TrainingPlan } from '@/lib/data/reference-workouts';

export interface GenderSpecificWorkoutRequest {
  exercises: string[];
  fitnessLevel: 'beginner' | 'intermediate' | 'advanced';
  goals: string[];
  timeAvailable: number;
  equipment: string[];
  injuries?: string[];
  preferences?: string[];
  // Gender-specific parameters
  gender?: 'male' | 'female' | 'non-binary';
  age?: number;
  menstrualCyclePhase?: 'follicular' | 'ovulatory' | 'luteal' | 'menstrual';
  contraceptiveUse?: boolean;
  pregnancyStatus?: 'not-pregnant' | 'pregnant' | 'postpartum';
  menopauseStatus?: 'premenopausal' | 'perimenopausal' | 'postmenopausal';
  ironStatus?: 'deficient' | 'low' | 'normal' | 'unknown';
}

export interface GenderOptimizedExercise extends WorkoutExercise {
  aiCoaching: {
    setupTips: string[];
    executionCues: string[];
    commonMistakes: string[];
    breathing: string;
    genderSpecificTips?: string[];
  };
  progressionOptions: {
    easier: string[];
    harder: string[];
    equipment_alternatives: string[];
  };
  safetyConsiderations: string[];
  // Gender-specific modifications
  genderOptimizations?: {
    male?: {
      intensityRecommendations: string[];
      recoveryConsiderations: string[];
    };
    female?: {
      cyclePhaseModifications: {
        follicular?: string[];
        ovulatory?: string[];
        luteal?: string[];
        menstrual?: string[];
      };
      injuryPreventionFocus: string[];
      nutritionalConsiderations: string[];
    };
  };
}

export interface GenderSpecificTrainingProfile {
  gender: 'male' | 'female' | 'non-binary';
  physiologicalConsiderations: {
    hormonalProfile: string;
    muscleFiberComposition: string;
    cardiovascularCharacteristics: string;
    recoveryPatterns: string;
    boneDensity: string;
  };
  trainingAdaptations: {
    strength: string;
    endurance: string;
    power: string;
  };
  injuryRisks: string[];
  nutritionalNeeds: {
    macronutrients: string;
    micronutrients: string[];
    hydration: string;
  };
  psychologicalFactors: {
    coachingPreferences: string;
    goalPriorities: string[];
    motivationDrivers: string[];
  };
}

/**
 * Gender-Specific Training Optimization Service
 * Implements 2023-2025 research on gender-specific training protocols
 */
export class GenderSpecificTrainingService {
  
  /**
   * Generate gender-optimized workout with AI coaching
   */
  public static async generateGenderOptimizedWorkout(
    request: GenderSpecificWorkoutRequest
  ): Promise<{
    workout: Workout;
    enhancedExercises: GenderOptimizedExercise[];
    aiCoachingNotes: string[];
    genderSpecificGuidance: string[];
  }> {
    // Get gender-specific training profile
    const genderProfile = this.getGenderSpecificProfile(request);
    
    // Generate base workout structure
    const workout = await this.generateBaseWorkout(request);
    
    // Enhance exercises with gender-specific optimizations
    const enhancedExercises = await this.enhanceExercisesWithGenderOptimization(
      workout.exercises,
      request,
      genderProfile
    );
    
    // Generate AI coaching notes
    const aiCoachingNotes = this.generateAICoachingNotes(request, genderProfile);
    
    // Generate gender-specific guidance
    const genderSpecificGuidance = this.generateGenderSpecificGuidance(request, genderProfile);
    
    return {
      workout,
      enhancedExercises,
      aiCoachingNotes,
      genderSpecificGuidance
    };
  }

  /**
   * Get gender-specific training profile based on latest research
   */
  private static getGenderSpecificProfile(request: GenderSpecificWorkoutRequest): GenderSpecificTrainingProfile {
    const { gender = 'non-binary', age = 30 } = request;
    
    if (gender === 'female') {
      return {
        gender: 'female',
        physiologicalConsiderations: {
          hormonalProfile: "Estrogen provides anti-inflammatory and antioxidant benefits",
          muscleFiberComposition: "44-69% Type I (slow-twitch) fibers, 25% greater Type I/II ratio",
          cardiovascularCharacteristics: "15-30% lower VO2max in untrained, superior fat oxidation during endurance",
          recoveryPatterns: "Faster recovery from muscle damage, less inflammation, longer strength recovery periods",
          boneDensity: "Lower peak bone mass, 40% lifetime fracture risk over age 50"
        },
        trainingAdaptations: {
          strength: "Respond exceptionally well to higher volume, moderate intensity (65-80% 1RM, 10-15 reps)",
          endurance: "Superior endurance capacity, can handle higher training volumes at moderate intensities",
          power: "Benefit from higher frequency, lower intensity power training sessions"
        },
        injuryRisks: [
          "2-8 fold higher ACL injury incidence",
          "Stress fracture risk 9.7% vs 6.5% in males",
          "Relative Energy Deficiency in Sport (RED-S) affects up to 60%"
        ],
        nutritionalNeeds: {
          macronutrients: "Minimum 45 kcal/kg fat-free mass daily, higher needs during luteal phase",
          micronutrients: [
            "Iron monitoring - up to 60% experience deficiency",
            "Calcium 1000-1300mg daily for bone health",
            "Vitamin D 32-50 ng/mL optimal levels",
            "Iron supplementation: 100mg daily elemental iron for 36-56 days if deficient"
          ],
          hydration: "Minimal gender-specific modifications, electrolyte adjustments during menstrual cycles"
        },
        psychologicalFactors: {
          coachingPreferences: "Collaborative, autonomy-supportive styles emphasizing emotional support and process-focused feedback",
          goalPriorities: ["Health benefits", "Social connection", "Skill development", "Positive role modeling"],
          motivationDrivers: ["Process-focused achievements", "Community support", "Personal growth"]
        }
      };
    } else if (gender === 'male') {
      return {
        gender: 'male',
        physiologicalConsiderations: {
          hormonalProfile: "Testosterone levels 10-30x higher than females",
          muscleFiberComposition: "35-48% Type I (slow-twitch) fibers",
          cardiovascularCharacteristics: "Higher VO2max baseline, greater absolute power output",
          recoveryPatterns: "Slower recovery from muscle damage, higher inflammation response",
          boneDensity: "Higher peak bone mass, 13% lifetime fracture risk"
        },
        trainingAdaptations: {
          strength: "Respond well to higher absolute loads, 85-95% 1RM for advanced athletes",
          endurance: "Standard periodization models effective",
          power: "Can handle more intensive sessions with longer recovery periods"
        },
        injuryRisks: [
          "Different injury susceptibilities requiring tailored approaches",
          "Higher inflammation response requiring longer recovery"
        ],
        nutritionalNeeds: {
          macronutrients: "Adequate fat intake (20-35% of calories) for testosterone support, 1.6-2.0g/kg protein",
          micronutrients: [
            "Post-workout carb/protein within 30 minutes for recovery",
            "Standard micronutrient requirements"
          ],
          hydration: "Standard hydration protocols effective"
        },
        psychologicalFactors: {
          coachingPreferences: "More direct, performance-focused communication with clear hierarchical structures",
          goalPriorities: ["Competition", "Performance outcomes", "Professional aspirations"],
          motivationDrivers: ["Greater intrinsic motivation for competition and challenge"]
        }
      };
    } else {
      // Non-binary - use individualized approach
      return {
        gender: 'non-binary',
        physiologicalConsiderations: {
          hormonalProfile: "Individual assessment required",
          muscleFiberComposition: "Individual assessment required",
          cardiovascularCharacteristics: "Individual assessment required",
          recoveryPatterns: "Individual assessment required",
          boneDensity: "Individual assessment required"
        },
        trainingAdaptations: {
          strength: "Individualized approach based on personal response patterns",
          endurance: "Individualized approach based on personal response patterns",
          power: "Individualized approach based on personal response patterns"
        },
        injuryRisks: ["Individual assessment and monitoring required"],
        nutritionalNeeds: {
          macronutrients: "Individual assessment based on body composition and training response",
          micronutrients: ["Individual assessment based on bloodwork and symptoms"],
          hydration: "Standard protocols with individual modifications as needed"
        },
        psychologicalFactors: {
          coachingPreferences: "Collaborative approach with individual preference assessment",
          goalPriorities: ["Individual goal exploration and prioritization"],
          motivationDrivers: ["Individual motivation pattern assessment"]
        }
      };
    }
  }

  /**
   * Generate menstrual cycle-specific training modifications
   */
  private static getMenstrualCycleModifications(
    phase: string,
    exercise: Exercise
  ): string[] {
    const modifications: string[] = [];
    
    switch (phase) {
      case 'follicular':
        modifications.push(
          "Optimal phase for strength and power training - aim for 80-95% 1RM intensities",
          "Rising estrogen creates anabolic environment - focus on progressive overload",
          "Plyometric exercises are particularly effective during this phase"
        );
        break;
        
      case 'ovulatory':
        modifications.push(
          "Highest injury risk due to ligament laxity - emphasize movement mechanics",
          "Reduce high-risk activities like aggressive cutting or jumping",
          "Focus on controlled movements and proper form over intensity"
        );
        break;
        
      case 'luteal':
        modifications.push(
          "Elevated progesterone favors endurance training at moderate intensities (65-80% 1RM)",
          "Increased metabolic rate - may feel warmer during exercise",
          "Good phase for building aerobic capacity and muscular endurance"
        );
        break;
        
      case 'menstrual':
        modifications.push(
          "Low hormone levels - focus on technique refinement and recovery",
          "Listen to your body - reduce intensity if experiencing discomfort",
          "Good time for mobility work and light movement"
        );
        break;
    }
    
    return modifications;
  }

  /**
   * Generate gender-specific injury prevention protocols
   */
  private static getInjuryPreventionProtocols(gender: string): string[] {
    if (gender === 'female') {
      return [
        "ACL injury prevention: Focus on hamstring strengthening to balance quad dominance",
        "Landing mechanics: Emphasize soft landings with knees tracking over toes",
        "Hip stability: Include lateral strengthening to address wider Q-angle",
        "Bone health: Ensure adequate weight-bearing exercise for bone density",
        "Monitor energy availability to prevent Relative Energy Deficiency in Sport (RED-S)"
      ];
    } else if (gender === 'male') {
      return [
        "Allow adequate recovery between high-intensity sessions due to higher inflammation response",
        "Focus on mobility work to counteract typical muscle tightness patterns",
        "Monitor training load to prevent overuse injuries from aggressive progression"
      ];
    } else {
      return [
        "Individual movement screening to identify specific risk factors",
        "Gradual progression with careful monitoring of response patterns",
        "Regular assessment of recovery and adaptation markers"
      ];
    }
  }

  /**
   * Generate AI coaching notes with gender-specific considerations
   */
  private static generateAICoachingNotes(
    request: GenderSpecificWorkoutRequest,
    profile: GenderSpecificTrainingProfile
  ): string[] {
    const notes: string[] = [];
    
    // Base coaching notes
    notes.push(
      `Training optimized for ${profile.gender} physiology: ${profile.physiologicalConsiderations.hormonalProfile}`,
      `Strength training approach: ${profile.trainingAdaptations.strength}`,
      `Recovery considerations: ${profile.physiologicalConsiderations.recoveryPatterns}`
    );
    
    // Gender-specific notes
    if (profile.gender === 'female') {
      if (request.menstrualCyclePhase) {
        const cycleModifications = this.getMenstrualCycleModifications(
          request.menstrualCyclePhase,
          {} as Exercise // placeholder
        );
        notes.push(...cycleModifications);
      }
      
      if (request.ironStatus === 'deficient' || request.ironStatus === 'low') {
        notes.push(
          "Iron deficiency detected - consider 100mg daily elemental iron supplementation",
          "Iron deficiency can reduce performance by 3-4% - supplementation may improve VO2max by 6-15%"
        );
      }
      
      notes.push(...this.getInjuryPreventionProtocols('female'));
    } else if (profile.gender === 'male') {
      notes.push(
        "Higher testosterone levels support strength and power development",
        "Allow adequate recovery between sessions due to higher inflammation response"
      );
      notes.push(...this.getInjuryPreventionProtocols('male'));
    }
    
    // Lifecycle-specific notes
    if (request.pregnancyStatus === 'pregnant') {
      notes.push(
        "Pregnancy modifications: Vigorous exercise safe through third trimester with medical clearance",
        "Avoid supine positions after first trimester",
        "Monitor heart rate and avoid overheating"
      );
    } else if (request.pregnancyStatus === 'postpartum') {
      notes.push(
        "Postpartum return: Focus on core rehabilitation and gradual progression",
        "Allow 6-12 weeks for low-impact activities, 3+ months before high-impact training"
      );
    }
    
    if (request.menopauseStatus === 'postmenopausal') {
      notes.push(
        "Menopause considerations: Emphasize heavy resistance training 2-3x weekly",
        "HIIT over steady-state cardio for metabolic benefits",
        "Extended recovery periods may be needed"
      );
    }
    
    return notes;
  }

  /**
   * Generate gender-specific training guidance
   */
  private static generateGenderSpecificGuidance(
    request: GenderSpecificWorkoutRequest,
    profile: GenderSpecificTrainingProfile
  ): string[] {
    const guidance: string[] = [];
    
    // Psychological and motivational guidance
    guidance.push(
      `Coaching approach optimized for your preferences: ${profile.psychologicalFactors.coachingPreferences}`,
      `Your training aligns with these goal priorities: ${profile.psychologicalFactors.goalPriorities.join(', ')}`
    );
    
    // Nutritional guidance
    guidance.push(
      `Nutritional focus: ${profile.nutritionalNeeds.macronutrients}`,
      ...profile.nutritionalNeeds.micronutrients.map(nutrient => `• ${nutrient}`)
    );
    
    // Training adaptation expectations
    guidance.push(
      `Expected strength adaptations: ${profile.trainingAdaptations.strength}`,
      `Endurance training response: ${profile.trainingAdaptations.endurance}`,
      `Power development approach: ${profile.trainingAdaptations.power}`
    );
    
    return guidance;
  }

  /**
   * Enhance exercises with gender-specific optimizations
   */
  private static async enhanceExercisesWithGenderOptimization(
    exercises: WorkoutExercise[],
    request: GenderSpecificWorkoutRequest,
    profile: GenderSpecificTrainingProfile
  ): Promise<GenderOptimizedExercise[]> {
    return exercises.map(exercise => ({
      ...exercise,
      aiCoaching: {
        setupTips: ["Gender-optimized setup guidance"],
        executionCues: ["Gender-specific execution cues"],
        commonMistakes: ["Common mistakes to avoid"],
        breathing: "Breathe naturally throughout the movement",
        genderSpecificTips: this.getGenderSpecificExerciseTips(exercise, profile)
      },
      progressionOptions: {
        easier: ["Beginner modifications"],
        harder: ["Advanced progressions"],
        equipment_alternatives: ["Alternative equipment options"]
      },
      safetyConsiderations: this.getInjuryPreventionProtocols(profile.gender),
      genderOptimizations: this.getGenderOptimizations(exercise, request, profile)
    }));
  }

  /**
   * Get gender-specific exercise tips
   */
  private static getGenderSpecificExerciseTips(
    exercise: WorkoutExercise,
    profile: GenderSpecificTrainingProfile
  ): string[] {
    const tips: string[] = [];
    
    if (profile.gender === 'female') {
      tips.push(
        "Focus on higher volume, moderate intensity for optimal strength gains",
        "Your superior endurance capacity allows for higher training volumes",
        "Emphasize proper landing mechanics to prevent ACL injuries"
      );
    } else if (profile.gender === 'male') {
      tips.push(
        "Your higher testosterone levels support strength and power development",
        "Allow adequate recovery between high-intensity sessions",
        "Focus on progressive overload with heavier loads"
      );
    }
    
    return tips;
  }

  /**
   * Get gender-specific exercise optimizations
   */
  private static getGenderOptimizations(
    exercise: WorkoutExercise,
    request: GenderSpecificWorkoutRequest,
    profile: GenderSpecificTrainingProfile
  ): GenderOptimizedExercise['genderOptimizations'] {
    const optimizations: GenderOptimizedExercise['genderOptimizations'] = {};
    
    if (profile.gender === 'male') {
      optimizations.male = {
        intensityRecommendations: [
          "85-95% 1RM for advanced strength training",
          "Higher absolute loads with longer recovery periods"
        ],
        recoveryConsiderations: [
          "Allow 48-72 hours between high-intensity sessions",
          "Monitor inflammation markers and adjust accordingly"
        ]
      };
    } else if (profile.gender === 'female') {
      optimizations.female = {
        cyclePhaseModifications: {
          follicular: ["Optimal for strength and power training", "Focus on 80-95% 1RM"],
          ovulatory: ["Emphasize movement mechanics", "Reduce high-risk activities"],
          luteal: ["Endurance focus at 65-80% 1RM", "Higher training volumes"],
          menstrual: ["Technique refinement", "Recovery-focused protocols"]
        },
        injuryPreventionFocus: [
          "ACL injury prevention through hamstring strengthening",
          "Landing mechanics and knee tracking",
          "Hip stability for Q-angle compensation"
        ],
        nutritionalConsiderations: [
          "Monitor iron status for optimal performance",
          "Ensure adequate calcium for bone health",
          "Higher caloric needs during luteal phase"
        ]
      };
    }
    
    return optimizations;
  }

  /**
   * Generate base workout structure
   */
  private static async generateBaseWorkout(request: GenderSpecificWorkoutRequest): Promise<Workout> {
    return {
      id: 'gender-optimized-workout-1',
      name: 'Gender-Optimized Workout',
      focus: request.goals,
      exercises: []
    };
  }

  /**
   * Get menstrual cycle-aware training recommendations
   */
  public static getMenstrualCycleTrainingRecommendations(
    phase: 'follicular' | 'ovulatory' | 'luteal' | 'menstrual'
  ): {
    optimalTraining: string[];
    intensityGuidance: string;
    injuryRiskLevel: 'low' | 'moderate' | 'high';
    nutritionalFocus: string[];
  } {
    switch (phase) {
      case 'follicular':
        return {
          optimalTraining: [
            "Strength and power training",
            "Progressive overload focus",
            "Plyometric exercises",
            "High-intensity intervals"
          ],
          intensityGuidance: "80-95% 1RM intensities optimal",
          injuryRiskLevel: 'low',
          nutritionalFocus: [
            "Enhanced carbohydrate utilization",
            "Standard protein requirements",
            "Maintain iron status"
          ]
        };
        
      case 'ovulatory':
        return {
          optimalTraining: [
            "Movement mechanics focus",
            "Controlled movements",
            "Technique refinement",
            "Avoid high-risk activities"
          ],
          intensityGuidance: "Moderate intensities with form emphasis",
          injuryRiskLevel: 'high',
          nutritionalFocus: [
            "Maintain energy availability",
            "Anti-inflammatory foods",
            "Adequate hydration"
          ]
        };
        
      case 'luteal':
        return {
          optimalTraining: [
            "Endurance-focused training",
            "Moderate intensity work",
            "Aerobic capacity building",
            "Higher training volumes"
          ],
          intensityGuidance: "65-80% 1RM intensities",
          injuryRiskLevel: 'moderate',
          nutritionalFocus: [
            "Higher caloric needs",
            "Complex carbohydrates",
            "Increased hydration needs"
          ]
        };
        
      case 'menstrual':
        return {
          optimalTraining: [
            "Technique refinement",
            "Recovery-focused protocols",
            "Mobility work",
            "Light movement"
          ],
          intensityGuidance: "Listen to body, reduce intensity if needed",
          injuryRiskLevel: 'low',
          nutritionalFocus: [
            "Iron-rich foods",
            "Anti-inflammatory nutrition",
            "Comfort foods in moderation"
          ]
        };
    }
  }

  /**
   * Get gender-specific injury prevention program
   */
  public static getGenderSpecificInjuryPrevention(
    gender: 'male' | 'female' | 'non-binary'
  ): {
    primaryRisks: string[];
    preventionProtocols: string[];
    screeningRecommendations: string[];
    evidenceBasedPrograms: string[];
  } {
    if (gender === 'female') {
      return {
        primaryRisks: [
          "ACL injuries (2-8x higher risk)",
          "Stress fractures (9.7% vs 6.5% in males)",
          "Relative Energy Deficiency in Sport (RED-S)"
        ],
        preventionProtocols: [
          "Hamstring strengthening to balance quad dominance",
          "Landing mechanics training",
          "Hip stability exercises",
          "Weight-bearing exercise for bone health"
        ],
        screeningRecommendations: [
          "Movement quality assessment",
          "Energy availability monitoring",
          "Menstrual cycle regularity tracking",
          "Iron status evaluation"
        ],
        evidenceBasedPrograms: [
          "FIFA 11+ (30% injury risk reduction)",
          "PEP Program (88% ACL injury reduction)",
          "15-20 minute sessions 3x weekly"
        ]
      };
    } else if (gender === 'male') {
      return {
        primaryRisks: [
          "Higher inflammation response",
          "Overuse injuries from aggressive progression",
          "Muscle tightness patterns"
        ],
        preventionProtocols: [
          "Adequate recovery between sessions",
          "Progressive loading protocols",
          "Mobility work emphasis"
        ],
        screeningRecommendations: [
          "Training load monitoring",
          "Recovery assessment",
          "Movement pattern evaluation"
        ],
        evidenceBasedPrograms: [
          "Periodized training protocols",
          "Load management systems",
          "Recovery monitoring tools"
        ]
      };
    } else {
      return {
        primaryRisks: [
          "Individual assessment required",
          "Variable risk patterns"
        ],
        preventionProtocols: [
          "Individualized movement screening",
          "Gradual progression monitoring",
          "Response pattern assessment"
        ],
        screeningRecommendations: [
          "Comprehensive movement assessment",
          "Individual risk factor identification",
          "Regular monitoring and adjustment"
        ],
        evidenceBasedPrograms: [
          "Customized prevention protocols",
          "Individual response tracking",
          "Adaptive program design"
        ]
      };
    }
  }
} 