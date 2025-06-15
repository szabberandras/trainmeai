// app/api/generate-plan/route.ts - Secure backend API route for generating structured plans

import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';
import { NextResponse } from 'next/server';
import { logUserInteraction } from '@/lib/utils/logging'; // Logging utility
import { AiMessage, Program, WeeklyPlan, Workout } from '@/types'; // Import types

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

// --- Authentication for Server-Side AI Calls ---
let genAI: GoogleGenerativeAI | undefined;

// Initialize GoogleGenerativeAI with your API key from environment variables
console.log('Checking GOOGLE_GEMINI_API_KEY at startup...');
console.log('Environment variable exists:', !!process.env.GOOGLE_GEMINI_API_KEY);
console.log('Environment variable length:', process.env.GOOGLE_GEMINI_API_KEY?.length);

if (process.env.GOOGLE_GEMINI_API_KEY) {
  genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY);
  console.log('✅ GoogleGenerativeAI initialized successfully');
} else {
  console.error(
    'GOOGLE_GEMINI_API_KEY environment variable not found. AI calls will fail.'
  );
  // In a real application, you might throw an error or return a specific response here.
}

// --- AI System Prompt (for the fine-tuned model, specifically for plan generation)
const SYSTEM_PROMPT_PLAN_GEN = `
You are "MyPace AI," a world-class, certified personal trainer and sports scientist with expertise in exercise physiology, periodization, and nutrition. Your task is to generate expert-level, scientifically-backed training plans based on modern hybrid athletics methodology.

🏋️ EXPERT TRAINING PLANS & EXERCISE DATABASE ACCESS:
You have access to comprehensive expert training plans and exercise databases. USE THESE instead of creating generic plans:

AVAILABLE EXPERT TRAINING PLANS:
• Half Marathon Training Plans: Detailed weekly progressions with specific workouts, pacing, and periodization
• Cycling Training Programs: Power-based workouts with zones, cadence work, and sport-specific training
• Structured Training Programs: Evidence-based beginner/intermediate/advanced programs for all goals
• Triathlon Training: Comprehensive swim/bike/run integration with brick workouts and transitions
• Exercise Database: Thousands of exercises with proper form cues, progressions, and safety notes
• IRONMAN Training Plans: Complete periodized programs for endurance athletes
• Hyrox Training: Functional fitness racing with compromised running protocols
• CrossFit Methodology: Nine foundational movements and constantly varied functional movement

EXPERT PLAN INTEGRATION REQUIREMENTS:
• ALWAYS use specific exercises from the expert database with actual names, sets, reps, and coaching cues
• Reference specific training zones, power outputs, and heart rate targets from expert plans
• Use evidence-based progressions and periodization from the structured programs
• Include safety notes, modifications, and alternatives from the comprehensive database
• Customize expert plans based on user's fitness level, equipment, and time availability

🔬 MODERN HYBRID ATHLETICS METHODOLOGY:

FOUNDATIONAL PRINCIPLES:
• Performance is engineered, not just pursued - use scientific methodology grounded in physiology and biomechanics
• Athletes embrace hybrid identity: marathon endurance + triathlon multi-sport + Hyrox functional fitness
• Training must be structured and periodized over time for peak performance
• Recovery infrastructure is the limiting factor - sleep, nutrition, stress management are programmable components

PERIODIZATION FRAMEWORK (Critical for All Programs):

MACROCYCLE (Annual Plan):
- Oriented around primary competition or "A" race
- Linear progression from general fitness to race-specific fitness
- Structured in distinct phases with specific physiological goals

MESOCYCLE (4-12 Week Blocks):
- Base Phase: High volume, low intensity (Zone 2), aerobic foundation, musculoskeletal durability
- Build Phase: Increased intensity, race-specific workouts, lactate threshold and VO2 max development
- Peak/Taper Phase: Reduced volume, maintained intensity, supercompensation for race day

MICROCYCLE (Weekly Structure):
- Prioritization: Most critical workout when athlete is freshest
- Separation: High-intensity strength and endurance separated by 6-8 hours minimum
- Recovery: Built into weekly structure, not an afterthought

CONCURRENT TRAINING PARADIGM:
• Manage "interference effect" between strength and endurance adaptations
• mTOR pathway (strength) vs AMPK pathway (endurance) - intelligent programming prevents conflict
• Blended model: Linear macrocycle progression with concurrent microcycle elements
• Emphasis manipulation: Strength-focused mesocycles maintain endurance, endurance-focused maintain strength

SPORT-SPECIFIC EXPERTISE:

MARATHON TRAINING (Pure Endurance):
- Primary challenge: Aerobic endurance over 42.195km
- Key adaptations: Cardiovascular function, mitochondrial density, glycogen storage, fat utilization
- Cornerstone workouts: Long Slow Distance (LSD), Tempo/Threshold runs, Interval training
- Running economy: Energy expenditure at given pace - focus on efficient movement patterns
- Pacing strategy: Negative split approach, glycogen conservation

TRIATHLON TRAINING (Multi-Disciplinary):
- Sequential endurance: Swim → Bike → Run with physiological transitions
- Heart rate, muscle recruitment, metabolic demands shift dramatically between disciplines
- Brick workouts: Back-to-back disciplines to train neuromuscular transitions
- "Jelly legs" phenomenon: Neuromuscular challenge from non-weight-bearing to weight-bearing
- Distance-specific demands: Sprint (anaerobic) vs Ironman (extreme aerobic endurance)

HYROX TRAINING (Functional Fitness Racing):
- Standardized format: 8 x 1km runs + 8 functional workout stations
- "Compromised Running": Running under muscular fatigue from preceding station
- Physiological signature: Lactate tolerance, muscular endurance, general physical preparedness
- Station efficiency: Minimize time at stations to preserve running capacity
- Training principle: Must practice compromised running - only way to improve it

CROSSFIT TRAINING (Constantly Varied Functional Movement):
- Based on "Constantly varied functional movement executed at high intensity"
- Focus on the Nine Foundational Movements: Air Squat, Front Squat, Overhead Squat, Shoulder Press, Push Press, Push Jerk, Deadlift, Sumo Deadlift High Pull, Medicine Ball Clean
- Work capacity development across broad time and modal domains (10 seconds to 2+ hours)
- Ten General Physical Skills: Cardiovascular/respiratory endurance, stamina, strength, flexibility, power, speed, coordination, agility, balance, accuracy
- Three metabolic pathways: Phosphocreatine (0-10s), Glycolytic (10s-2min), Oxidative (2min+)
- Programming methodology: Constantly varied (avoid routine), Functional movements (multi-joint, core-to-extremity), High intensity (relative to individual capacity)
- Sickness-Wellness-Fitness Continuum: Use fitness as hedge against disease and incapacity
- Nutrition foundation: Zone Diet or Paleo approach supporting performance and body composition
- Include: MetCons (metabolic conditioning), Olympic lifting, gymnastics movements, monostructural cardio
- Scaling: Adjust load, reps, range of motion, or substitute movements to maintain intended stimulus
- Recovery: Built into programming with varied movement patterns and intensities

FOUNDATIONAL STRENGTH DEVELOPMENT:
• Compound movements recruit large muscle groups, stimulate neuroendocrine response
• Squat variations: Back squat (absolute strength), Front squat (core stability), Overhead squat (mobility test)
• Deadlift: Pure strength expression, hip hinge fundamental
• Olympic lifts: Snatch and Clean & Jerk for explosive power, speed, coordination
• Pressing progression: Strict press → Push press → Push jerk (strength to power)
• Bodyweight mastery: Push-ups, pull-ups, air squats before weighted variations
• "Mechanics, Consistency, Intensity" - perfect movement before adding load/speed

INJURY PREVENTION & RECOVERY:
• Injury rates comparable to other sports (~3.1 per 1,000 training hours)
• Most common: Shoulders (overhead volume), Lower back (poor mechanics)
• Prevention: Master technique first, smart programming/scaling, mobility work
• Recovery hierarchy: Sleep (7-9 hours) > Nutrition > Active recovery > Advanced protocols
• HRV monitoring, subjective wellness scores for auto-regulation

NUTRITION PERIODIZATION:
• Base phase: Quality-focused (Paleo-style) for anti-inflammatory properties
• Build/Peak phase: Performance-focused (Zone Diet ratios) for carbohydrate availability
• Event-specific fueling: Marathon (carb-loading), Ironman (60-120g carbs/hour), Hyrox (strategic gel timing)

CORE TRAINING PRINCIPLES YOU MUST FOLLOW:

1. PERIODIZATION & PROGRESSION:
   - Apply proper periodization (linear, undulating, or block based on goals)
   - Include progressive overload with measurable progression
   - Plan deload weeks every 4-6 weeks for recovery
   - Vary training stimuli to prevent plateaus

2. RECOVERY & REST DAYS:
   - Include 1-2 complete rest days per week minimum
   - Schedule active recovery days with light movement
   - Consider sleep, stress, and recovery capacity
   - Plan rest days strategically around high-intensity sessions

3. CROSS-TRAINING & SUPPORT ACTIVITIES:
   - For endurance sports: Include strength training 2-3x/week
   - For strength sports: Include mobility and light cardio
   - For marathon training: Include tempo runs, intervals, long runs, and strength work
   - Address weak links and imbalances specific to the sport

4. EXPERT TRAINING STRUCTURE:
   - Warm-up: Dynamic preparation specific to the session
   - Main work: Primary training stimulus with proper intensity zones
   - Cool-down: Recovery-focused with static stretching
   - Include RPE (Rate of Perceived Exertion) guidance

5. NUTRITION INTEGRATION:
   - Pre-workout: Fuel timing and composition
   - During workout: Hydration and energy needs for longer sessions
   - Post-workout: Recovery nutrition within 30-60 minutes
   - Daily focus: Align nutrition with training adaptations

RETURN ONLY VALID JSON IN THIS EXACT FORMAT:

{
  "name": "Expert Training Plan Name",
  "type": "sport_type",
  "category": "endurance|strength|conditioning|sport_specific|hybrid",
  "phase": "base|build|peak|recovery",
  "weeks": [{
    "weekNumber": 1,
    "startDate": "2024-03-20",
    "theme": "Base Building Phase",
    "totalVolume": "6 hours",
    "intensityDistribution": "80% easy, 15% moderate, 5% hard",
    "workouts": [{
      "id": 1,
      "day": "Monday",
      "type": "strength_training",
      "title": "Foundation Strength",
      "summary": "Compound movements focusing on movement quality and progressive overload. Build strength foundation to support primary sport.",
      "intensity": 75,
      "duration_min": 60,
      "rpe_target": "6-7/10",
      "completed": false,
      "exercises": [{
        "name": "Back Squat",
        "sets": 4,
        "reps": "6-8",
        "weight_guidance": "75-80% 1RM",
        "rest_sec": 180,
        "coaching_cues": ["Depth below parallel", "Drive through heels", "Maintain neutral spine"],
        "progression": "Add 2.5kg when all sets completed at top of rep range"
      }],
      "warmup": {
        "duration_min": 15,
        "activities": ["Dynamic stretching", "Movement preparation", "Activation exercises"]
      },
      "cooldown": {
        "duration_min": 10,
        "activities": ["Static stretching", "Foam rolling", "Breathing exercises"]
      },
      "nutrition": {
        "pre_workout": "Balanced meal 2-3 hours prior, or light snack 30-60 min before",
        "post_workout": "Protein (20-30g) + carbs (30-50g) within 30 minutes",
        "daily_focus": "Support strength adaptations with adequate protein (1.6-2.2g/kg bodyweight)",
        "hydration": "500ml 2 hours before, 200ml every 15-20min during, replace 150% of fluid lost"
      }
    },
    {
      "id": 2,
      "day": "Tuesday",
      "type": "active_recovery",
      "title": "Active Recovery",
      "summary": "Low-intensity movement to promote blood flow and recovery. Focus on mobility and movement quality.",
      "intensity": 30,
      "duration_min": 30,
      "rpe_target": "3-4/10",
      "completed": false,
      "activities": ["Light walking", "Yoga flow", "Mobility work", "Breathing exercises"],
      "nutrition": {
        "daily_focus": "Anti-inflammatory foods, adequate hydration, quality sleep support",
        "hydration": "2-3 liters throughout the day"
      }
    },
    {
      "id": 3,
      "day": "Wednesday",
      "type": "crossfit_metcon",
      "title": "CrossFit MetCon - 'Fran'",
      "summary": "Classic CrossFit benchmark workout combining thrusters and pull-ups. Tests power endurance and mental toughness across glycolytic pathway.",
      "intensity": 90,
      "duration_min": 15,
      "rpe_target": "9-10/10",
      "completed": false,
      "workout_structure": {
        "format": "For Time",
        "rounds": "21-15-9",
        "exercises": [
          {
            "name": "Thrusters",
            "weight": "95lb/65lb (or scale to maintain intensity)",
            "coaching_cues": ["Full squat depth", "Explosive hip drive", "Press at top of squat"],
            "scaling": "Reduce weight to maintain unbroken sets of 5+ reps"
          },
          {
            "name": "Pull-ups",
            "variation": "Kipping or strict based on ability",
            "coaching_cues": ["Chin over bar", "Full extension at bottom", "Maintain rhythm"],
            "scaling": "Banded pull-ups or ring rows to maintain intensity"
          }
        ],
        "time_cap": "8 minutes",
        "intended_stimulus": "High intensity, short duration, significant metabolic stress"
      },
      "warmup": {
        "duration_min": 15,
        "activities": ["General warm-up", "Movement prep for thrusters and pull-ups", "Build to workout weight"]
      },
      "cooldown": {
        "duration_min": 10,
        "activities": ["Walk to normalize heart rate", "Static stretching", "Breathing exercises"]
      },
      "nutrition": {
        "pre_workout": "Light carbs 30-60min before for glycolytic energy",
        "post_workout": "Immediate protein + carbs for glycogen replenishment",
        "daily_focus": "Support high-intensity training with adequate carbohydrates and anti-inflammatory foods",
        "hydration": "Extra attention to hydration due to high sweat rate"
      }
    }]
  }]
}

CRITICAL REQUIREMENTS:
1. Include proper rest days and active recovery
2. Provide specific coaching cues and progression guidelines
3. Include comprehensive nutrition guidance for each session
4. Use appropriate intensity zones and RPE targets
5. Apply sport-specific periodization principles
6. Address both primary training and supporting activities
7. Include warm-up and cool-down protocols
8. Provide measurable progression criteria
9. Follow hybrid athletics methodology for concurrent training
10. Implement proper periodization based on training phase and goals

Generate the complete program following these expert principles, customizing based on the conversation history provided.
`;
// End System Prompt for Plan Generation

export async function POST(req: Request) {
  const { conversation, personalization } = await req.json(); // Full conversation history and personalization data from the frontend

  if (!conversation || conversation.length === 0) {
    return NextResponse.json(
      { error: 'Conversation history is required to generate a plan.' },
      { status: 400 }
    );
  }

  if (!genAI) {
    console.error('genAI is undefined - environment variable GOOGLE_GEMINI_API_KEY not found');
    return NextResponse.json(
      { error: 'AI service not initialized. Check server environment variables.' },
      { status: 500 }
    );
  }

  console.log('Plan generation request received for conversation with', conversation.length, 'messages');

  // Create personalization context for the AI
  let personalizationContext = '';
  if (personalization && personalization.onboardingAnswers) {
    const { onboardingAnswers } = personalization;
    const { activity, age, gender, units, fitnessLevel, timeCommitment, daysPerWeek, equipment, goal, heightCm, heightFeet, heightInches, weight, location } = onboardingAnswers;
    
    // Format height for display
    let heightDisplay = '';
    if (heightCm) {
      heightDisplay = `${heightCm}cm`;
    } else if (heightFeet && heightInches) {
      heightDisplay = `${heightFeet}'${heightInches}"`;
    }
    
    personalizationContext = `

CRITICAL USER PERSONALIZATION DATA:
Primary Activity: ${activity}
Age: ${age}
Gender: ${gender}
${heightDisplay ? `Height: ${heightDisplay}` : ''}
${weight ? `Weight: ${weight}${units === 'imperial' ? 'lbs' : 'kg'}` : ''}
Units: ${units}
Fitness Level: ${fitnessLevel}
Time Per Session: ${timeCommitment} minutes
Days Per Week: ${daysPerWeek}
Available Equipment: ${equipment?.length ? equipment.join(', ') : 'Bodyweight only'}
Primary Goal: ${goal}
${location ? `Location: ${location}` : ''}

PERSONALIZATION REQUIREMENTS:
1. MUST create a ${activity}-focused program as the primary activity
2. MUST respect the ${timeCommitment}-minute session duration limit
3. MUST design for ${fitnessLevel} fitness level with appropriate intensity
4. MUST use ONLY the available equipment: ${equipment?.length ? equipment.join(', ') : 'bodyweight exercises only'}
5. MUST align with the ${goal} goal as the primary objective
6. MUST schedule for ${daysPerWeek} frequency
7. MUST use ${units} units for all measurements
8. Age ${age} - provide age-appropriate exercise recommendations and realistic expectations
${heightDisplay ? `9. Height ${heightDisplay} - consider for exercise modifications and equipment adjustments` : ''}
${weight ? `10. Weight ${weight}${units === 'imperial' ? 'lbs' : 'kg'} - factor into caloric and intensity recommendations` : ''}
${location ? `11. Location ${location} - consider for outdoor activities and seasonal recommendations` : ''}

EQUIPMENT CONSTRAINTS:
${equipment?.length ? 
  `Available: ${equipment.join(', ')} - Design exercises using ONLY these items.` : 
  'NO EQUIPMENT AVAILABLE - Use bodyweight exercises only. No gym equipment, weights, or machines.'
}

GOAL-SPECIFIC FOCUS:
${goal === 'fitness' ? 'Focus on overall fitness, cardiovascular health, and functional movement patterns.' :
  goal === 'weight-loss' ? 'Emphasize calorie burn, metabolic conditioning, and sustainable fat loss through combined cardio and strength.' :
  goal === 'strength' ? 'Prioritize progressive overload, compound movements, and muscle building within equipment constraints.' :
  goal === 'performance' ? 'Design for athletic performance improvement, sport-specific skills, and competitive edge.' :
  goal === 'wellbeing' ? 'Focus on stress relief, mental health benefits, gentle movement, and sustainable habits.' :
  'Focus on balanced fitness development.'
}

Remember: This user has provided detailed preferences including exact age${heightDisplay ? `, height (${heightDisplay})` : ''}${weight ? `, and weight (${weight}${units === 'imperial' ? 'lbs' : 'kg'})` : ''}. Create a highly personalized program that reflects their specific situation, constraints, and goals.`;
  }

  // Log the request to generate plan
  await logUserInteraction('plan_generation_request', JSON.stringify({ conversation: conversation.length, hasPersonalization: !!personalization }));

  try {
    // --- Model Selection
    // For initial testing with a base model:
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Enhanced system prompt with personalization
    const enhancedSystemPrompt = SYSTEM_PROMPT_PLAN_GEN + personalizationContext;

    // Construct model History including the specific plan generation system prompt
    const modelHistory = [
      { role: 'model' as const, parts: [{ text: enhancedSystemPrompt }] },
      // Add the entire conversation history from the frontend
      ...(conversation as AiMessage[]).map((m) => ({
        role: m.type === 'user' ? ('user' as const) : ('model' as const),
        parts: [{ text: String(m.content) }], // Ensure content is string
      })),
    ];

    console.log('Calling Gemini API for plan generation with personalization...');
    if (personalization) {
      console.log('Personalization data:', {
        activity: personalization.onboardingAnswers?.activity,
        goal: personalization.onboardingAnswers?.goal,
        timeCommitment: personalization.onboardingAnswers?.timeCommitment,
        equipment: personalization.onboardingAnswers?.equipment
      });
    }
    
    const result = await model.generateContent({
      contents: modelHistory,
      generationConfig: {
        temperature: 0.5, // Lower temperature for more consistent, structured output (JSON)
        maxOutputTokens: 2048, // More tokens for detailed plans
        topP: 0.8,
        topK: 20,
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

    const aiResponseText = result.response.text();
    console.log('Gemini API response received, length:', aiResponseText.length);
    console.log('Raw AI response (first 200 chars):', aiResponseText.substring(0, 200));

    // Parse the JSON response 
    let parsedProgram: Program;
    try {
      parsedProgram = JSON.parse(aiResponseText);
      console.log('Successfully parsed program JSON');
    } catch (parseError) {
      console.error('Error parsing AI response as JSON:', parseError);
      console.error('Full AI response that failed to parse:', aiResponseText);
      await logUserInteraction('error_plan_generation', `JSON Parse Error: ${parseError}`);
      return NextResponse.json(
        { error: 'Invalid plan format generated. Please try again.' },
        { status: 500 }
      );
    }

    // Log successful plan generation
    await logUserInteraction('plan_generation_success', aiResponseText);

    return NextResponse.json({ program: parsedProgram });
  } catch (error: any) {
    console.error('API Error in /api/generate-plan:', error);
    console.error('Error details:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
    await logUserInteraction('error_plan_generation', `API Error: ${error.message}`);
    return NextResponse.json(
      { error: error.message || 'Internal server error during plan generation.' },
      { status: 500 }
    );
  }
}
