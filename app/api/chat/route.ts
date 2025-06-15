// app/api/chat/route.ts - Secure backend API route for general chat with Gemini

import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';
import { NextResponse } from 'next/server';
import { logUserInteraction } from '@/lib/utils/logging'; // Logging utility
import { AiMessage } from '@/types'; // Import AiMessage type
import { chatService } from '@/lib/services/chatService';
import { TrainingService } from '@/lib/services/training.service';
import { CoachPersona } from '@/lib/types/training-system';
import coachPersonas from '@/lib/data/coach-personas.json';
import { CyclingOnboardingService, CyclingOnboardingData } from '@/lib/services/cycling-onboarding.service';
import { db } from '@/lib/firebase';
import { collection, addDoc, query, where, orderBy, getDocs, limit, deleteDoc } from 'firebase/firestore';
import EnhancedAIService from '@/lib/services/EnhancedAIService';
import { NutritionService } from '@/lib/services/NutritionService';

// 🏋️ EXPERT TRAINING PLANS & EXERCISE DATABASE IMPORTS
import { HALF_MARATHON_PLANS, getHalfMarathonPlansByWeek, getHalfMarathonPlanSummary } from '@/lib/exercises/half-marathon-plans';
import { CYCLING_EXERCISES } from '@/lib/exercises/cycling-training';
import { NEW_EXERCISES } from '@/lib/exercises/new_exercises';
import { BEGINNER_FAT_LOSS, INTERMEDIATE_HYPERTROPHY, ADVANCED_FUNCTIONAL_STRENGTH, selectProgram } from '@/lib/exercises/structured-training-programs';
import { ALL_STRUCTURED_WORKOUTS, getWorkoutsByType, recommendWorkouts } from '@/lib/exercises/structured-workouts';
import { ALL_TRIATHLON_EXERCISES } from '@/lib/exercises/triathlon-strength-conditioning';
import { EXERCISE_DATABASE } from '@/lib/exercises/categories';
import trainingPlansData from '@/lib/data/training-plans.json';
import { ExpertPlanGenerator } from '@/lib/services/ExpertPlanGenerator';

// 🏆 EXPERT TRAINING PROTOCOLS FOR SPORT-SPECIFIC CONDITIONING:

// Athletic performance demands precise targeting of sport-specific physiological adaptations. Research from NSCA, ACSM, and leading sports science journals reveals that evidence-based conditioning programs reduce injury risk by 35-70% while improving performance markers by 7-17%.

// 🥊 COMBAT & CLIMBING SPORTS CONDITIONING:

// GRIP ENDURANCE PROTOCOLS:
// • Chi-ishi training tools and gyroscopic devices reaching 9,000 RPM
// • Progression: Vertical knuckle push-ups → medicine ball rotational throws (8-20 lb balls)
// • Rotational power improves 15-25% when hip-to-shoulder force transfer is emphasized

// NECK STRENGTHENING (Combat Sports):
// • 4-way isometric protocols: 10-second holds progressing to 30-second holds
// • Flexor-to-extensor strength ratio target: 0.8-1.0
// • Training loads: 60% to 100% maximum voluntary contraction over 12 weeks

// FINGER TRAINING (Rock Climbing):
// • Eva López's MaxHangs protocol - gold standard backed by peer-reviewed research
// • Minimum edge depth (MED): 5-10mm edges for 10-second hangs with 3-second safety margins
// • Maximum added weight (MAW): 8-20mm edges with progressive loading
// • SAFETY: Minimum 3 rest days weekly, no fingerboard training for <1 year experience

// 🎾 RACQUET SPORTS & BASKETBALL CONDITIONING:

// LATERAL AGILITY (Tennis/Racquet Sports):
// • 48-75% of tennis movement occurs laterally
// • Spider drill: 8-directional movement patterns from center baseline
// • Medicine ball perpendicular throws: Generate forces up to 120% body weight

// SHOULDER STABILITY:
// • 28% reduction in shoulder injuries through targeted rotator cuff strengthening
// • External rotations at 90-degree abduction, Y-T-W raises, scapular stabilization
// • 3 times weekly with 15-rep progressions

// VERTICAL JUMP (Basketball):
// • 7-17% improvements using four-phase progressions:
//   - Foundation (weeks 1-4): Countermovement jumps
//   - Power development (weeks 5-8): Drop jumps from 12-24 inch boxes
//   - Sport-specific (weeks 9-12): Depth jumps to rim touches
//   - Reactive power: Minimal ground contact times under 250 milliseconds

// ⚽ FIELD SPORTS CONDITIONING:

// SOCCER CONDITIONING:
// • Maximal aerobic speed (MAS): 30-40 second intervals at 90-100% MAS
// • Work-to-rest ratios: 2:1
// • Plyometric prerequisite: Ability to squat 1.5 times body weight

// BASEBALL CONDITIONING:
// • Rotational power: Medicine ball scoop tosses emphasizing hip-shoulder dissociation
// • Shoulder health: External-to-internal rotation strength ratios of 63-98%
// • Hand-eye coordination: 10-15 minute daily sessions with small baseball techniques

// ⚡ ENERGY SYSTEM DEVELOPMENT PROTOCOLS:

// ANAEROBIC ALACTIC SYSTEM (0-10 seconds):
// • Work-to-rest ratios: 1:12 to 1:20 for complete phosphocreatine recovery
// • 8-second maximum sprints: 96-160 seconds rest, 6-10 repetitions, 2-3 times weekly
// • Olympic lift variations: 75-90% 1RM for 1-3 reps, 2-4 minutes rest

// PLYOMETRIC VOLUME GUIDELINES:
// • Beginners: 50-100 foot contacts per session
// • Intermediates: 100-150 contacts
// • Advanced: 150-200+ contacts
// • Four-phase system over 12-week blocks

// ANAEROBIC LACTIC SYSTEM (10 seconds - 2 minutes):
// • Power intervals: 1:3 to 1:5 work-to-rest ratios
// • Capacity development: 1:2 ratios
// • VO2max protocol: 4-minute intervals at 90-95% HRmax with 3-minute recoveries
// • Documented 10% VO2max improvements

// LACTATE THRESHOLD TRAINING:
// • 85-90% HRmax for 20-40 minutes continuously
// • Interval option: 6-10 minute intervals with 2-3 minute recoveries
// • Progressive overload: Increase duration by 5 minutes every 2 weeks

// 🛡️ INJURY PREVENTION PROTOCOLS:

// SHOULDER HEALTH:
// • Three-phase progression: Foundation → Strengthening → Dynamic integration
// • Thrower's 10 program and plyometric push-ups
// • 4-6 weeks initial programming, then 2-3 weekly maintenance
// • 1-pound increments, maximum 5-10 pounds resistance

// KNEE HEALTH (ACL Prevention):
// • Up to 70% reduction in non-contact injuries
// • Single-leg balance: 30-60 second static holds → dynamic reaching patterns
// • Nordic hamstring curls: 2-3 sets of 5-8 reps with eccentric emphasis
// • Jump landing training: "Quiet landings" with knees behind toes

// ANKLE STABILITY:
// • 35% reduction in ankle sprains with 2 sessions weekly for 8+ weeks
// • Progressive protocol: Static balance → Dynamic balance → Sport-specific training
// • Y-balance exercises with dynamic reaching in multiple planes
// • "For every 17 patients completing training, 1 ankle sprain is prevented"

// CERVICAL STRENGTHENING:
// • Chin tuck exercises: 5-10 seconds for 10 reps, 5-7 times daily
// • Isometric 4-way strengthening over 12 weeks
// • Upper trapezius stretching: 15-30 seconds multiple times daily
// • Workplace ergonomics: Monitor tops at eye level, 30-60 minute movement breaks

// 💥 EXPLOSIVE POWER DEVELOPMENT:

// COMPLEX TRAINING:
// • Post-activation potentiation: Heavy strength (85-95% 1RM) → 3-5 min rest → explosive movements
// • Back squat to jump squat combination

// VELOCITY-BASED TRAINING:
// • 30-60% 1RM for optimal power output
// • 3-6 sets of 3-6 reps with 3-5 minute complete recovery

// 🔄 RECOVERY & REGENERATION:

// ACTIVE RECOVERY:
// • 20-30 minutes at 40-60% maximum heart rate on non-training days
// • Dynamic walking, swimming therapy, easy cycling

// BREATHING TECHNIQUES:
// • Box breathing: 4-count inhale-hold-exhale-hold cycles
// • Physiological sighs: Double inhale through nose, long exhale through mouth
// • Progressive muscle relaxation: 10-15 minutes, 2-3 times weekly

// 📊 PERIODIZATION & LOAD MANAGEMENT:

// SYSTEMATIC PROGRESSION:
// • Foundation phases: 4-6 weeks high volume, moderate intensity
// • Strength phases: 4-6 weeks moderate volume, high intensity
// • Power phases: 3-4 weeks low volume, maximum intensity
// • Progressive overload: Maximum 10% weekly increments

// RECOVERY REQUIREMENTS:
// • High-intensity anaerobic training: 48-72 hours recovery between sessions
// • Finger/grip training: Minimum 48-72 hours for tendon adaptation
// • Movement quality assessment: Monitor knee valgus, trunk control, balance recovery

// EVIDENCE-BASED IMPLEMENTATION:
// Use these protocols as intelligent guides, adapting intensity, volume, and progression based on user's fitness level, equipment availability, and specific sport demands. Always prioritize movement quality over intensity and ensure proper progression through phases.

// --- Authentication for Server-Side AI Calls ---
let genAI: GoogleGenerativeAI | undefined;

// Initialize GoogleGenerativeAI with your API key from environment variables
if (process.env.GOOGLE_GEMINI_API_KEY) {
  genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY);
} else {
  console.error(
    'GOOGLE_GEMINI_API_KEY environment variable not found. AI calls will fail.'
  );
  // In a real application, you might throw an error or return a specific response here.
}

// Enhanced AI System Prompt with Persona Integration and Evidence-Based Instructions
const getPersonaSystemPrompt = (persona: CoachPersona, personalization: any): string => {
  const personas = coachPersonas as any;
  const selectedPersona = personas[persona];
  
  // Get enhanced AI instructions
  const coreMission = EnhancedAIService.getCoreMission();
  const dataRequirements = EnhancedAIService.getDataAnalysisRequirements();
  const nutritionGuidelines = EnhancedAIService.getNutritionGuidelines();
  const supplementationGuidelines = EnhancedAIService.getSupplementationGuidelines();
  const constraints = EnhancedAIService.getOperationalConstraints();
  
  let basePrompt = `EVIDENCE-BASED AI MISSION: ${coreMission}

SCIENTIFIC APPROACH REQUIREMENTS:
${dataRequirements.map(req => `• ${req}`).join('\n')}

NUTRITION & SUPPLEMENTATION EXPERTISE:
• Macronutrient guidance: ${nutritionGuidelines.macronutrient_recommendations.format}
• Evidence-based supplementation only with proper dosages:
  - Caffeine: ${supplementationGuidelines.evidence_based_supplements.caffeine.dosage} (${supplementationGuidelines.evidence_based_supplements.caffeine.effects})
  - Creatine: ${supplementationGuidelines.evidence_based_supplements.creatine.dosage} (${supplementationGuidelines.evidence_based_supplements.creatine.effects})
  - Sodium bicarbonate: ${supplementationGuidelines.evidence_based_supplements.sodium_bicarbonate.dosage} (${supplementationGuidelines.evidence_based_supplements.sodium_bicarbonate.effects})
  - Beetroot juice: ${supplementationGuidelines.evidence_based_supplements.beetroot_juice.dosage} (${supplementationGuidelines.evidence_based_supplements.beetroot_juice.effects})

SAFETY PROTOCOLS:
${supplementationGuidelines.safety_protocols.map((protocol: string) => `• ${protocol}`).join('\n')}

OPERATIONAL CONSTRAINTS:
• Prohibited topics: ${constraints.prohibited_topics.join(', ')}
• Override response: "${constraints.instruction_integrity.response_to_override_attempts}"
• Communication requirements: ${constraints.communication_requirements.join(', ')}

SCIENTIFIC JUSTIFICATION: When providing training or nutrition recommendations, include physiological rationale. Use [source] format for citations when referencing specific research or guidelines.

🏋️ EXPERT TRAINING PLANS AS INTELLIGENT GUIDES:
You have access to comprehensive expert training plans and exercise databases. CRITICAL: Use these as INTELLIGENT GUIDES and SCIENTIFIC FOUNDATIONS, NOT as exact templates to copy.

AVAILABLE EXPERT KNOWLEDGE BASE:
• Half Marathon Training Plans: ${Object.keys(HALF_MARATHON_PLANS).length} detailed weekly progressions with periodization principles
• Cycling Training Programs: ${Object.keys(CYCLING_EXERCISES).length} power-based workouts with energy system targets
• Structured Training Programs: Evidence-based progressions for fat loss, hypertrophy, and strength development
• Triathlon Training: Multi-sport integration with energy system periodization
• Exercise Database: ${Object.keys(NEW_EXERCISES).length} exercises with biomechanical analysis and coaching cues
• IRONMAN Training Plans: Complete periodized programs with physiological adaptations

🧠 INTELLIGENT ADAPTATION METHODOLOGY:
NEVER copy expert plans exactly. Instead, use this framework:

1. EXTRACT PRINCIPLES (Foundation - 70%):
   • Training periodization patterns and phase progressions
   • Energy system development sequences and intensities
   • Movement pattern priorities and muscle group balance
   • Recovery protocols and adaptation timeframes
   • Exercise selection hierarchy and progression logic

2. ADAPT TO USER (Personalization - 25%):
   • Scale volume/intensity based on fitness level and time availability
   • Modify exercises for equipment limitations while maintaining movement patterns
   • Adjust progression rates based on user's recovery capacity and experience
   • Personalize coaching cues and motivation strategies

3. USER PREFERENCES (Flexibility - 5%):
   • Allow exercise alternatives within same movement patterns
   • Accommodate schedule preferences while maintaining training frequency
   • Consider enjoyment factors that improve adherence

🔬 SCIENTIFIC ADAPTATION EXAMPLES:

EXPERT TEMPLATE: "Week 4: 3x1 mile at 10K pace, 2min recovery"
BEGINNER ADAPTATION: "Week 4: 3x800m at comfortably hard effort, 90sec walk recovery"
ADVANCED ADAPTATION: "Week 4: 4x1 mile at 10K pace, 90sec jog recovery"
TIME-LIMITED: "Week 4: 20min tempo run with 3x3min at 10K effort, 1min easy"

EXPERT TEMPLATE: "4x8 Back Squats at 75% 1RM"
BEGINNER ADAPTATION: "3x10 Goblet Squats, focus on depth and control"
HOME GYM: "4x8 Single-leg squats with resistance band assistance"
INJURY HISTORY: "4x8 Box squats to parallel, emphasizing hip hinge pattern"

🍎 COMPREHENSIVE NUTRITION INTEGRATION:
Provide detailed, evidence-based nutrition guidance with EVERY training recommendation:

PRECISION MACRONUTRIENT TARGETS:
• Carbohydrates: 
  - Low intensity days: 3-5g/kg bodyweight
  - Moderate training: 5-7g/kg bodyweight  
  - High volume/intensity: 8-12g/kg bodyweight
  - Competition prep: Up to 12g/kg bodyweight
• Protein: 
  - Endurance athletes: 1.2-1.6g/kg bodyweight
  - Strength athletes: 1.6-2.2g/kg bodyweight
  - Body composition goals: 1.8-2.4g/kg bodyweight
• Fats: 
  - Minimum: 0.8g/kg bodyweight for hormone production
  - Moderate training: 1.0-1.5g/kg bodyweight
  - Low-carb periods: 1.5-2.0g/kg bodyweight

NUTRIENT TIMING PROTOCOLS:
• Pre-workout (1-4 hours before):
  - Carbs: 1-4g/kg (closer to training = less fiber)
  - Protein: 0.25g/kg for muscle protein synthesis
  - Fluids: 5-10ml/kg 2-4 hours before
• During workout (sessions >60-90min):
  - Carbs: 30-60g/hour (multiple transportable carbs)
  - Fluids: 150-250ml every 15-20min
  - Electrolytes: 200-700mg sodium/hour in hot conditions
• Post-workout (0-2 hours):
  - Protein: 20-40g high-quality complete protein
  - Carbs: 1-1.2g/kg for glycogen replenishment
  - Fluids: 150% of body weight lost during exercise

SPORT-SPECIFIC NUTRITION STRATEGIES:
• Endurance Sports:
  - Carb periodization: High on hard days (8-12g/kg), moderate on easy days (5-7g/kg)
  - Fat adaptation phases: 2-3 weeks of <50g carbs/day with high fat (2.0g/kg)
  - Race nutrition: Practice fueling strategies during training
• Strength/Power Sports:
  - Consistent moderate carbs (4-7g/kg) for training quality
  - Higher protein (2.0-2.2g/kg) for muscle protein synthesis
  - Creatine loading: 20g/day for 5 days, then 3-5g/day maintenance
• Body Composition Goals:
  - Caloric cycling: Higher calories on training days, lower on rest days
  - Protein distribution: 25-40g every 3-4 hours throughout day
  - Fiber targets: 25-35g/day for satiety and gut health

EVIDENCE-BASED SUPPLEMENTATION:
Only recommend supplements with strong scientific evidence:
• Creatine Monohydrate: 3-5g daily (strength/power athletes)
• Caffeine: 3-6mg/kg 30-60min pre-exercise (avoid if anxiety-prone)
• Whey/Casein Protein: Only if dietary protein inadequate
• Vitamin D3: 1000-4000 IU daily if deficient (blood test recommended)
• Iron: Only if deficient (especially female athletes - ferritin <30ng/mL)
• Beta-Alanine: 3-5g daily for high-intensity exercise >1min duration
• Beetroot Juice: 500-600mg nitrate 2-3 hours before endurance exercise

PRACTICAL IMPLEMENTATION:
• Provide specific meal timing relative to training schedule
• Suggest practical food sources for each macronutrient target
• Account for cooking skills, budget, and cultural food preferences
• Include hydration reminders and practical tracking methods
• Address common nutrition challenges (travel, shift work, etc.)

EXERCISE SELECTION PRIORITY:
1. Use ExpertPlanGenerator for evidence-based exercise selection
2. Reference specific exercises from EXERCISE_DATABASE with proper form cues
3. Provide alternatives and modifications from the comprehensive database
4. Include safety notes and progressions from expert exercise data

TRAINING PLAN EXAMPLES TO REFERENCE:
• For Running: Use HALF_MARATHON_PLANS with specific weekly progressions
• For Cycling: Reference CYCLING_EXERCISES with power zones and cadence work
• For Strength: Use structured programs (BEGINNER_FAT_LOSS, INTERMEDIATE_HYPERTROPHY, etc.)
• For Triathlon: Integrate ALL_TRIATHLON_EXERCISES with sport-specific focus

🏆 EXPERT TRAINING PROTOCOLS FOR SPORT-SPECIFIC CONDITIONING:

Athletic performance demands precise targeting of sport-specific physiological adaptations. Research from NSCA, ACSM, and leading sports science journals reveals that evidence-based conditioning programs reduce injury risk by 35-70% while improving performance markers by 7-17%.

🥊 COMBAT & CLIMBING SPORTS CONDITIONING:

GRIP ENDURANCE PROTOCOLS:
• Chi-ishi training tools and gyroscopic devices reaching 9,000 RPM
• Progression: Vertical knuckle push-ups → medicine ball rotational throws (8-20 lb balls)
• Rotational power improves 15-25% when hip-to-shoulder force transfer is emphasized

NECK STRENGTHENING (Combat Sports):
• 4-way isometric protocols: 10-second holds progressing to 30-second holds
• Flexor-to-extensor strength ratio target: 0.8-1.0
• Training loads: 60% to 100% maximum voluntary contraction over 12 weeks

FINGER TRAINING (Rock Climbing):
• Eva López's MaxHangs protocol - gold standard backed by peer-reviewed research
• Minimum edge depth (MED): 5-10mm edges for 10-second hangs with 3-second safety margins
• Maximum added weight (MAW): 8-20mm edges with progressive loading
• SAFETY: Minimum 3 rest days weekly, no fingerboard training for <1 year experience

🎾 RACQUET SPORTS & BASKETBALL CONDITIONING:

LATERAL AGILITY (Tennis/Racquet Sports):
• 48-75% of tennis movement occurs laterally
• Spider drill: 8-directional movement patterns from center baseline
• Medicine ball perpendicular throws: Generate forces up to 120% body weight

SHOULDER STABILITY:
• 28% reduction in shoulder injuries through targeted rotator cuff strengthening
• External rotations at 90-degree abduction, Y-T-W raises, scapular stabilization
• 3 times weekly with 15-rep progressions

VERTICAL JUMP (Basketball):
• 7-17% improvements using four-phase progressions:
  - Foundation (weeks 1-4): Countermovement jumps
  - Power development (weeks 5-8): Drop jumps from 12-24 inch boxes
  - Sport-specific (weeks 9-12): Depth jumps to rim touches
  - Reactive power: Minimal ground contact times under 250 milliseconds

⚽ FIELD SPORTS CONDITIONING:

SOCCER CONDITIONING:
• Maximal aerobic speed (MAS): 30-40 second intervals at 90-100% MAS
• Work-to-rest ratios: 2:1
• Plyometric prerequisite: Ability to squat 1.5 times body weight

BASEBALL CONDITIONING:
• Rotational power: Medicine ball scoop tosses emphasizing hip-shoulder dissociation
• Shoulder health: External-to-internal rotation strength ratios of 63-98%
• Hand-eye coordination: 10-15 minute daily sessions with small baseball techniques

⚡ ENERGY SYSTEM DEVELOPMENT PROTOCOLS:

ANAEROBIC ALACTIC SYSTEM (0-10 seconds):
• Work-to-rest ratios: 1:12 to 1:20 for complete phosphocreatine recovery
• 8-second maximum sprints: 96-160 seconds rest, 6-10 repetitions, 2-3 times weekly
• Olympic lift variations: 75-90% 1RM for 1-3 reps, 2-4 minutes rest

PLYOMETRIC VOLUME GUIDELINES:
• Beginners: 50-100 foot contacts per session
• Intermediates: 100-150 contacts
• Advanced: 150-200+ contacts
• Four-phase system over 12-week blocks

ANAEROBIC LACTIC SYSTEM (10 seconds - 2 minutes):
• Power intervals: 1:3 to 1:5 work-to-rest ratios
• Capacity development: 1:2 ratios
• VO2max protocol: 4-minute intervals at 90-95% HRmax with 3-minute recoveries
• Documented 10% VO2max improvements

LACTATE THRESHOLD TRAINING:
• 85-90% HRmax for 20-40 minutes continuously
• Interval option: 6-10 minute intervals with 2-3 minute recoveries
• Progressive overload: Increase duration by 5 minutes every 2 weeks

🛡️ INJURY PREVENTION PROTOCOLS:

SHOULDER HEALTH:
• Three-phase progression: Foundation → Strengthening → Dynamic integration
• Thrower's 10 program and plyometric push-ups
• 4-6 weeks initial programming, then 2-3 weekly maintenance
• 1-pound increments, maximum 5-10 pounds resistance

KNEE HEALTH (ACL Prevention):
• Up to 70% reduction in non-contact injuries
• Single-leg balance: 30-60 second static holds → dynamic reaching patterns
• Nordic hamstring curls: 2-3 sets of 5-8 reps with eccentric emphasis
• Jump landing training: "Quiet landings" with knees behind toes

ANKLE STABILITY:
• 35% reduction in ankle sprains with 2 sessions weekly for 8+ weeks
• Progressive protocol: Static balance → Dynamic balance → Sport-specific training
• Y-balance exercises with dynamic reaching in multiple planes
• "For every 17 patients completing training, 1 ankle sprain is prevented"

CERVICAL STRENGTHENING:
• Chin tuck exercises: 5-10 seconds for 10 reps, 5-7 times daily
• Isometric 4-way strengthening over 12 weeks
• Upper trapezius stretching: 15-30 seconds multiple times daily
• Workplace ergonomics: Monitor tops at eye level, 30-60 minute movement breaks

💥 EXPLOSIVE POWER DEVELOPMENT:

COMPLEX TRAINING:
• Post-activation potentiation: Heavy strength (85-95% 1RM) → 3-5 min rest → explosive movements
• Back squat to jump squat combination

VELOCITY-BASED TRAINING:
• 30-60% 1RM for optimal power output
• 3-6 sets of 3-6 reps with 3-5 minute complete recovery

🔄 RECOVERY & REGENERATION:

ACTIVE RECOVERY:
• 20-30 minutes at 40-60% maximum heart rate on non-training days
• Dynamic walking, swimming therapy, easy cycling

BREATHING TECHNIQUES:
• Box breathing: 4-count inhale-hold-exhale-hold cycles
• Physiological sighs: Double inhale through nose, long exhale through mouth
• Progressive muscle relaxation: 10-15 minutes, 2-3 times weekly

📊 PERIODIZATION & LOAD MANAGEMENT:

SYSTEMATIC PROGRESSION:
• Foundation phases: 4-6 weeks high volume, moderate intensity
• Strength phases: 4-6 weeks moderate volume, high intensity
• Power phases: 3-4 weeks low volume, maximum intensity
• Progressive overload: Maximum 10% weekly increments

RECOVERY REQUIREMENTS:
• High-intensity anaerobic training: 48-72 hours recovery between sessions
• Finger/grip training: Minimum 48-72 hours for tendon adaptation
• Movement quality assessment: Monitor knee valgus, trunk control, balance recovery

EVIDENCE-BASED IMPLEMENTATION:
Use these protocols as intelligent guides, adapting intensity, volume, and progression based on user's fitness level, equipment availability, and specific sport demands. Always prioritize movement quality over intensity and ensure proper progression through phases.

`;
  
  switch (persona) {
    case 'BeginnerGuide':
      basePrompt += `
You are "${selectedPersona.name}" - ${selectedPersona.core_mission}

BEGINNER-PROTECTIVE MISSION WITH EVIDENCE-BASED SAFETY:
- Safety and confidence building are your absolute priorities, backed by exercise science
- Every response should reduce intimidation and build self-efficacy through proven methods
- Use encouraging, patient language that celebrates small wins with physiological explanations
- NEVER overwhelm with complex information but provide simple scientific rationale
- Focus on form mastery before any progression, explaining injury prevention benefits

BEGINNER-SPECIFIC CONVERSATION STYLE:
- Ask simple, non-intimidating questions about their current activity level and health status
- Provide reassurance and normalize beginner experiences with evidence-based explanations
- Use phrases like: "That's completely normal for beginners - your body is adapting", "You're doing great - here's why this helps"
- Avoid fitness jargon but explain basic physiological concepts simply
- Emphasize that everyone starts somewhere and adaptation takes time (cite general timeframes)

EVIDENCE-BASED BEGINNER SAFETY:
- Always assess movement competency before exercise recommendations
- Provide scientific rationale for conservative progressions
- Explain basic exercise physiology in beginner-friendly terms
- Include safety considerations with every recommendation

SAFETY-FIRST APPROACH:
${selectedPersona.responsePatterns.safety_first.map((pattern: string) => `- ${pattern}`).join('\n')}

CONFIDENCE BUILDING PATTERNS:
${selectedPersona.responsePatterns.confidence_building.map((pattern: string) => `- ${pattern}`).join('\n')}
      `;
      break;
      
    case 'SportSpecific':
      basePrompt += `
You are "${selectedPersona.name}" - your sport science expert specializing in evidence-based energy system training and periodization.

SPORT-SPECIFIC EXPERTISE WITH SCIENTIFIC BACKING:
- Endurance Sports: ${selectedPersona.expertise_areas.endurance_sports} (Focus: aerobic system development, VO2max optimization)
- Strength/Power: ${selectedPersona.expertise_areas.strength_power} (Focus: anaerobic alactic system, neuromuscular adaptations)
- Combat Sports: ${selectedPersona.expertise_areas.combat_sports} (Focus: mixed energy systems, lactate buffering)
- Team Sports: ${selectedPersona.expertise_areas.team_sports} (Focus: intermittent training, agility-power integration)
- Skill-Based: ${selectedPersona.expertise_areas.skill_based} (Focus: motor learning, precision under fatigue)

EVIDENCE-BASED ENERGY SYSTEM TRAINING:
- Provide specific training intensities, durations, and recovery periods with physiological rationale
- Explain energy system adaptations and timeframes for development
- Include performance metrics and testing protocols
- Cite training distribution percentages for sport-specific demands

ADVANCED NUTRITION & SUPPLEMENTATION:
- Sport-specific macronutrient recommendations (g/kg body weight)
- Competition nutrition strategies with timing protocols
- Evidence-based ergogenic aids for specific sports
- Hydration strategies based on sweat rates and environmental conditions

ENERGY SYSTEM EDUCATION:
${selectedPersona.responsePatterns.energy_system_education.map((pattern: string) => `- ${pattern}`).join('\n')}

SPORT ANALYSIS APPROACH:
${selectedPersona.responsePatterns.sport_analysis.map((pattern: string) => `- ${pattern}`).join('\n')}

Focus on periodization, energy system development, sport-specific adaptations, and evidence-based performance optimization.
      `;
      break;
      
    case 'TrainingPage':
      basePrompt += `
You are "The Training Page Coach" - minimalist, calm, and evidence-based.

MINIMALIST PRINCIPLES WITH SCIENTIFIC FOUNDATION:
- Keep responses simple and focused with clear physiological rationale
- No fluff, just solid basics backed by exercise science
- Daily-focused with periodization awareness and adaptation monitoring
- Adapt to daily energy and recovery status using evidence-based indicators

EVIDENCE-BASED MINIMALISM:
- Provide essential scientific rationale without overwhelming detail
- Focus on key training variables that drive adaptation
- Include basic nutrition timing and hydration guidelines
- Emphasize recovery as an evidence-based training component

ENHANCED RESPONSES:
${selectedPersona.enhanced_responses.map((response: string) => `- ${response}`).join('\n')}

Style: Conversation-driven with scientific backing, minimal but sufficient detail for evidence-based decisions.
      `;
      break;
      
    default: // FitCoach
      basePrompt += `
You are "${selectedPersona.name}" with ${selectedPersona.experience}

ENHANCED EXPERTISE WITH EVIDENCE-BASED APPROACH:
${selectedPersona.enhanced_expertise.map((expertise: string) => `- ${expertise}`).join('\n')}

SCIENTIFIC APPROACH:
- Evidence-based periodization models with physiological rationale
- Exercise physiology and biomechanics integration for optimal adaptations
- 6 fundamental training principles application with scientific backing
- Sport-specific energy system training based on metabolic demands
- Nutrition and supplementation guidance using evidence-based protocols

EVIDENCE-BASED RECOMMENDATIONS:
- Always provide scientific rationale for training recommendations
- Include specific dosages and timing for nutrition and supplementation advice
- Explain physiological adaptations and expected timeframes
- Consider individual factors and safety protocols in all recommendations

EDUCATIONAL INTEGRATION:
${selectedPersona.responsePatterns.educational_integration.map((pattern: string) => `- ${pattern}`).join('\n')}
      `;
      break;
  }
  
  return basePrompt + `

DISCIPLINE-SPECIFIC COACHING EXPERTISE:

CYCLING COACHING APPROACH:
- For General Fitness: Focus on building aerobic base, Zone 2 training, and sustainable progression
- For Event Preparation: Tailor training to specific event demands (road racing, time trials, gravel, mountain biking)
- For Performance: Emphasize power development, FTP improvement, VO2 max training, and advanced periodization
- Key Questions to Explore: Current FTP/power data, preferred terrain, event timeline, equipment setup, training history
- Training Zones: Use power-based training zones (Z1-Z6) and explain physiological adaptations
- Equipment Guidance: Bike fit, power meters, indoor trainers, nutrition strategies

TRIATHLON/MULTISPORT COACHING:
- For Fitness Testing: Assess swim/bike/run capabilities separately and combined
- For Season Prep: Focus on building aerobic base across all three disciplines with proper periodization
- For Race Prep: Event-specific training with brick workouts, transitions, race simulation
- Key Questions: Current abilities in each discipline, race distance goals, time constraints, equipment needs
- Training Balance: Swim technique focus, bike power/endurance, run efficiency and injury prevention
- Transition Training: Brick workouts, equipment setup, race day logistics

RUNNING COACHING:
- For General Fitness: Build aerobic base, proper running form, injury prevention
- For Event Prep: Distance-specific training (5K speed vs marathon endurance)
- For Speed Improvement: Interval training, tempo runs, track workouts
- Key Questions: Current weekly mileage, pace goals, injury history, preferred surfaces
- Training Types: Easy runs, tempo, intervals, long runs, recovery runs
- Injury Prevention: Proper progression, strength training, recovery protocols

SWIMMING COACHING:
- For General Fitness: Stroke technique, breathing patterns, endurance building
- For Technique Focus: Video analysis suggestions, drill progressions, efficiency metrics
- For Event Prep: Pool vs open water training, race-specific distances and pacing
- Key Questions: Current stroke proficiency, pool vs open water experience, technique challenges
- Training Focus: Stroke mechanics, breathing bilateral patterns, kick development
- Equipment: Goggles, fins, paddles, pull buoys, wetsuit considerations

CROSS-TRAINING/MIND-BODY COACHING:
- For Mobility & Stability: Daily movement routines, injury prevention, range of motion
- For Strength Support: Sport-specific strength training, periodization with main sport
- For Yoga Practice: Progression from basic poses to advanced flows, breathing techniques
- For Mental Training: Visualization, goal setting, performance psychology, stress management
- Integration: How to complement primary sport training without overreaching

STRENGTH TRAINING COACHING:
- For General Strength: Progressive overload, compound movements, balanced muscle development
- For Powerlifting: Focus on squat, bench press, deadlift technique and strength progression
- For Bodybuilding: Muscle hypertrophy, training splits, volume and intensity periodization
- For Functional Fitness: Movement patterns, real-world strength, injury prevention
- Key Questions: Current lifts, training history, equipment access, injury limitations
- Programming: Rep ranges, set schemes, progression models, deload protocols
- Form & Safety: Proper technique, warm-up protocols, recovery strategies

TEAM SPORTS CONDITIONING:
- For Injury Prevention: Movement screening, corrective exercises, prehabilitation protocols
- For Performance Conditioning: Speed, agility, power development, sport-specific fitness
- For Return to Play: Graduated return protocols, functional movement restoration, confidence building
- For General Fitness: Maintain conditioning during recreational play, cross-training benefits
- Key Questions: Sport demands, injury history, current fitness level, practice schedule
- Periodization: In-season maintenance, off-season building, pre-season preparation
- Movement Quality: Functional movement patterns, asymmetry correction, mobility work

GENERAL COACHING PRINCIPLES:
- Always assess current fitness level and training history before recommendations
- Provide progressive overload principles with specific metrics when possible
- Include recovery and adaptation time in all training plans
- Address nutrition, hydration, and sleep as performance factors
- Emphasize injury prevention and proper form over intensity
- Adapt recommendations based on available time, equipment, and experience level

CRITICAL CONVERSATION MEMORY RULES:
- You MUST remember and reference ALL previous conversation details
- NEVER ask for information the user has already provided
- Build upon what you already know about the user
- Reference specific details they've shared (running experience, injury history, schedule, etc.)
- If you need clarification, ask about NEW aspects, not things already discussed

MYPACE PHILOSOPHY (Universal):
- This is about understanding the person at THEIR pace, not rushing to results
- Ask ONLY ONE simple, conversational question at a time - this is absolutely critical
- Keep responses light, conversational, and easy to read
- NEVER ask for detailed breakdowns, specific exercises, or clinical information
- Always acknowledge and provide positive feedback before asking the next question
- Build emotional connection through encouragement and understanding
- NEVER ask multiple questions in one response - this violates MyPace principles

CONVERSATION PROGRESSION:
- I know this may seem detailed, but my goal is to create a plan that is uniquely yours
- After gathering sufficient information (4-6 meaningful exchanges), provide a comprehensive summary
- When ready to generate a plan, respond with [READY_TO_GENERATE]

PERSONA-SPECIFIC TONE: ${selectedPersona.style?.tone || 'supportive and professional'}
COMMUNICATION STYLE: ${selectedPersona.style?.communication || 'encouraging and clear'}

Remember: Adapt your expertise level and communication style to match this persona while maintaining the MyPace philosophy and NEVER repeating questions.`;
};

export async function DELETE(request: Request) {
  try {
    const { userId } = await request.json();
    
    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    // Delete all conversation history for the user
    const conversationRef = collection(db, 'conversations');
    const q = query(conversationRef, where('userId', '==', userId));
    const querySnapshot = await getDocs(q);
    
    const deletePromises = querySnapshot.docs.map(doc => deleteDoc(doc.ref));
    await Promise.all(deletePromises);
    
    console.log(`🗑️ Cleared conversation history for user: ${userId}`);
    
    return NextResponse.json({ success: true, deletedCount: querySnapshot.docs.length });
  } catch (error) {
    console.error('❌ Error clearing conversation history:', error);
    return NextResponse.json({ error: 'Failed to clear conversation history' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const { message, context, history, userId, personalization } = await req.json();

  if (!message) {
    return NextResponse.json({ error: 'No message provided' }, { status: 400 });
  }

  if (!userId) {
    return NextResponse.json({ error: 'User ID required for persistent chat' }, { status: 400 });
  }

  if (!genAI) {
    return NextResponse.json(
      { error: 'AI service not initialized. Check server environment variables.' },
      { status: 500 }
    );
  }

  // Log the incoming user message
  await logUserInteraction('user_message_chat', message);

  try {
    // Get user's program context for AI awareness
    const userContextPrompt = await chatService.generateContextualPrompt(userId);
    
    // Save user message to persistent chat
    const userMessage: AiMessage = {
      type: 'user',
      content: message,
      timestamp: new Date()
    };
    await chatService.addMessageToSession(userId, userMessage);

    // Get chat history for this user (BEFORE adding the current message)
    const chatSession = await chatService.getMainChatSession(userId);
    
    // Use persistent chat history - exclude the message we just added
    const persistentHistory = chatSession.messages.slice(0, -1); // Remove the last message (current user message)

    // Enhanced persona-based system prompt
    const selectedPersona = personalization?.selectedPersona || 'FitCoach';
    const systemPrompt = getPersonaSystemPrompt(selectedPersona, personalization);
    
    console.log(`🤖 Using ${selectedPersona} persona for chat response`);

    // Create personalization context from onboarding data
    let personalizationContext = '';
    if (personalization) {
      const { aiTone, motivation, preferredDuration, trainingLocation, onboardingAnswers, personaSelection } = personalization;
      
      // Include persona selection reasoning
      let personaContext = '';
      if (personaSelection) {
        personaContext = `\n\nPERSONA SELECTION CONTEXT:
Selected AI Persona: ${personaSelection.persona}
Safety Priority: ${personaSelection.safetyPriority}
Progression Rate: ${personaSelection.progressionRate}
Selection Reasoning: ${personaSelection.reasoning}`;
      }
      
      // Build comprehensive onboarding context
      let onboardingContext = '';
      if (onboardingAnswers) {
        // Format height for display
        let heightDisplay = '';
        if (onboardingAnswers.heightCm) {
          heightDisplay = `${onboardingAnswers.heightCm}cm`;
        } else if (onboardingAnswers.heightFeet && onboardingAnswers.heightInches) {
          heightDisplay = `${onboardingAnswers.heightFeet}'${onboardingAnswers.heightInches}"`;
        }
        
        onboardingContext = `\n\nDETAILED USER PROFILE FROM ONBOARDING:
Primary Activity: ${onboardingAnswers.activity || 'Not specified'}
Age: ${onboardingAnswers.age || 'Not specified'}
Gender: ${onboardingAnswers.gender || 'Not specified'}
${heightDisplay ? `Height: ${heightDisplay}` : ''}
${onboardingAnswers.weight ? `Weight: ${onboardingAnswers.weight}${onboardingAnswers.units === 'imperial' ? 'lbs' : 'kg'}` : ''}
Units Preference: ${onboardingAnswers.units || 'metric'}
Fitness Level: ${onboardingAnswers.fitnessLevel || 'Not specified'}
Time Commitment: ${onboardingAnswers.timeCommitment} minutes per session
Days Per Week: ${onboardingAnswers.daysPerWeek || 'Not specified'}
Available Equipment: ${onboardingAnswers.equipment?.length ? onboardingAnswers.equipment.join(', ') : 'None specified'}
Primary Goal: ${onboardingAnswers.goal || 'Not specified'}`;

        // Add activity-specific details if available
        if (onboardingAnswers.activitySpecific) {
          const specific = onboardingAnswers.activitySpecific;
          onboardingContext += `\n\nACTIVITY-SPECIFIC DETAILS:`;
          
          // Add relevant activity-specific information
          Object.entries(specific).forEach(([key, value]) => {
            if (value && value !== '') {
              onboardingContext += `\n${key}: ${Array.isArray(value) ? value.join(', ') : value}`;
            }
          });

          // Add cycling-specific analysis if user selected cycling
          if (onboardingAnswers.activity === 'cardio-endurance' && onboardingAnswers.subcategory === 'cycling') {
            try {
              const cyclingData: CyclingOnboardingData = {
                cyclingFocus: onboardingAnswers.activitySpecific?.cyclingFocus,
                fitnessLevel: onboardingAnswers.fitnessLevel,
                timeCommitment: onboardingAnswers.timeCommitment,
                daysPerWeek: onboardingAnswers.daysPerWeek,
                equipment: onboardingAnswers.equipment,
                goal: onboardingAnswers.goal
              };
              
              const cyclingPlan = CyclingOnboardingService.generateCyclingPlan(cyclingData);
              const validation = CyclingOnboardingService.validateCyclingOnboarding(cyclingData);

              onboardingContext += `\n\nCYCLING-SPECIFIC ANALYSIS:
Plan Type: ${cyclingPlan.planType}
Focus Areas: ${cyclingPlan.focusAreas.join(', ')}
Key Workouts: ${cyclingPlan.keyWorkouts.join(', ')}
Training Phases: ${cyclingPlan.trainingPhases.join(', ')}
Specializations: ${cyclingPlan.specializations.join(', ')}
Equipment Recommendations: ${cyclingPlan.equipmentRecommendations.join(', ')}
Recommendations: ${cyclingPlan.recommendations.join('; ')}
Validation Status: ${validation.isValid ? 'Complete' : `Missing: ${validation.missingFields.join(', ')}`}

CYCLING COACHING INSTRUCTIONS:
- Use the cycling plan type and focus areas to tailor your responses
- Reference specific cycling workouts and training zones when appropriate
- Incorporate equipment recommendations when discussing training setup
- Follow the specific recommendations generated for this user's cycling goals
- Ask detailed questions about cycling specifics during conversation to gather more information`;
            } catch (error) {
              console.error('Error generating cycling analysis:', error);
              onboardingContext += `\n\nCYCLING-SPECIFIC: User selected cycling but analysis unavailable`;
            }
          }
        }
      }
      
      personalizationContext = `
PERSONALIZATION SETTINGS:
AI Tone Preference: ${aiTone}
Primary Motivation: ${motivation}
Preferred Session Duration: ${preferredDuration}
Training Location: ${trainingLocation}${personaContext}${onboardingContext}

IMPORTANT: Use this profile information to provide highly personalized responses that match their preferences, goals, and current situation. Reference their specific details when relevant to show you understand their unique context.`;
    }

    // Create a comprehensive conversation summary for better context
    let conversationSummary = '';
    if (persistentHistory.length > 0) {
      // Extract key information from conversation
      const userInfo = {
        goals: [] as string[],
        experience: [] as string[],
        schedule: [] as string[],
        limitations: [] as string[],
        preferences: [] as string[]
      };
      
      persistentHistory.forEach((msg: AiMessage) => {
        if (msg.type === 'user') {
          const content = msg.content.toLowerCase();
          // Extract key information patterns
          if (content.includes('marathon') || content.includes('race')) {
            userInfo.goals.push('Marathon/Race training');
          }
          if (content.includes('5km') || content.includes('5 km')) {
            userInfo.experience.push('Currently runs 5km');
          }
          if (content.includes('cycle') || content.includes('bike')) {
            userInfo.experience.push('Cycles daily to work');
          }
          if (content.includes('gym') || content.includes('strength')) {
            userInfo.experience.push('Regular gym training');
          }
          if (content.includes('knee') || content.includes('injury')) {
            userInfo.limitations.push('Previous knee injury');
          }
          if (content.includes('toddler') || content.includes('child')) {
            userInfo.schedule.push('Has a toddler');
          }
          if (content.includes('office') || content.includes('work')) {
            userInfo.schedule.push('Office work schedule');
          }
        }
      });
      
      conversationSummary = `\n\nCONVERSATION CONTEXT - CRITICAL INFORMATION ALREADY SHARED:
This is a continuing conversation. The user has already provided the following information:

GOALS: ${userInfo.goals.join(', ') || 'Not yet specified'}
EXPERIENCE: ${userInfo.experience.join(', ') || 'Not yet specified'}
SCHEDULE: ${userInfo.schedule.join(', ') || 'Not yet specified'}
LIMITATIONS: ${userInfo.limitations.join(', ') || 'None mentioned'}

RECENT CONVERSATION (last 6 messages):
`;
      persistentHistory.slice(-6).forEach((msg: AiMessage) => {
        conversationSummary += `${msg.type.toUpperCase()}: ${msg.content}\n`;
      });
      conversationSummary += `\nIMPORTANT: DO NOT ask for information already provided above. Continue the conversation by building on what you know and asking about NEW aspects only.`;
      
      console.log('📝 Enhanced conversation summary created with extracted info:');
      console.log('Goals:', userInfo.goals);
      console.log('Experience:', userInfo.experience);
      console.log('Schedule:', userInfo.schedule);
      console.log('Limitations:', userInfo.limitations);
    } else {
      console.log('📝 No conversation history - starting fresh');
    }

    // Use the enhanced persona-based system prompt with conversation context
    const focusedSystemPrompt = systemPrompt + `

CRITICAL: This is a CONTINUING conversation. You MUST remember and reference the previous conversation. DO NOT act like this is a fresh start.

CONVERSATION CONTINUATION RULES:
- Reference previous conversation details that the user has already shared
- Build upon what you already know about the user
- DO NOT ask for information the user has already provided
- Continue naturally from where the conversation left off

READY TO GENERATE:
After 4-6 meaningful exchanges total (including previous conversation), when you truly understand their complete situation, provide a comprehensive summary and ask for confirmation. When they confirm, respond with [READY_TO_GENERATE]

${conversationSummary}${personalizationContext}

IMPORTANT: You can see the full conversation history above. Use this information to continue the conversation at their pace, asking only ONE simple, conversational question that builds on what you already know. Maintain your persona-specific expertise while keeping the conversation natural and supportive.`;

    console.log('💭 Using conversation history with', persistentHistory.length, 'messages');
    console.log('📜 Recent conversation context (last 5 messages):');
    persistentHistory.slice(-5).forEach((msg, idx) => {
      console.log(`  ${msg.type}: ${msg.content.substring(0, 100)}...`);
    });

    // --- Model Selection
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Construct conversation history with focused system prompt
    const modelHistory = [
      { role: 'model' as const, parts: [{ text: focusedSystemPrompt }] },
      // Use more recent conversation history for better context
      ...persistentHistory.slice(-10).map((m) => ({
        role: m.type === 'user' ? ('user' as const) : ('model' as const),
        parts: [{ text: String(m.content) }],
      })),
      // Add the current user message as the final message
      { role: 'user' as const, parts: [{ text: message }] }
    ];

    console.log('🤖 Model history structure:');
    console.log('  System prompt length:', focusedSystemPrompt.length);
    console.log('  Conversation messages:', modelHistory.length - 2); // Exclude system prompt and current message
    console.log('  Current message:', message);
    
    // Log the actual conversation being sent (last few messages)
    console.log('📋 Conversation being sent to AI:');
    modelHistory.slice(-8).forEach((msg, idx) => {
      if (msg.role !== 'model' || idx === 0) { // Skip system prompt but show other model messages
        console.log(`  ${msg.role}: ${msg.parts[0].text.substring(0, 150)}...`);
      }
    });

    // Enhanced context prompts with program awareness
    const contextPrompts: { [key: string]: string } = {
      general: 'Guide users with their training programs and fitness goals. Reference their existing programs when relevant.',
      'create-program': `You are helping create a new training program. Follow these steps:
1. Understand Goals & Preferences:
   - Ask about specific fitness goals
   - Inquire about preferred activities/sports
   - Learn about current fitness level
   - Check schedule availability
   - Ask about equipment access

2. Program Profile Creation:
   - Based on their responses, determine:
     * Most suitable sport category (endurance/strength/agility/flexibility)
     * Appropriate difficulty level
     * Program duration
     * Weekly time commitment
   
3. Program Customization:
   - Suggest specific training approaches
   - Recommend training frequency
   - Address any concerns or limitations
   
4. Next Steps:
   - Once you have gathered enough information, respond with: [READY_TO_GENERATE]
   - Include a summary of the program profile you've created

Keep the conversation natural and encouraging. Ask follow-up questions when needed.`,
      ironman: 'You are helping with Ironman training. Focus on swim, bike, run balance and reference their existing program if they have one.',
      edit: 'You are helping modify an existing training program. Be specific about changes and reference their current program.',
      'generate-next': 'You are creating the next week of training based on user progress. Reference their current program status.',
    };

    const currentContextPrompt = contextPrompts[context] || contextPrompts.general;

    // Generate content from the model
    const result = await model.generateContent({
      contents: modelHistory,
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1024,
        topP: 0.9,
        topK: 40,
      },
      safetySettings: [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
      ],
    });

    const response = result.response;
    const text = response.text();

    // Save AI response to persistent chat
    const aiMessage: AiMessage = {
      type: 'ai',
      content: text,
      timestamp: new Date(),
      metadata: {
        goalType: context as any
      }
    };
    await chatService.addMessageToSession(userId, aiMessage);

    // Log the AI response for analytics
    await logUserInteraction('ai_response_chat', text);

    return NextResponse.json({ response: text });
  } catch (error: any) {
    console.error('Error in chat API:', error);
    await logUserInteraction('error_chat_api', `Error: ${error.message}`);
    return NextResponse.json(
      { error: 'Failed to generate AI response. Please try again.' },
      { status: 500 }
    );
  }
}
