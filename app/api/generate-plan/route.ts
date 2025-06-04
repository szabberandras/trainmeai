// app/api/generate-plan/route.ts - Secure backend API route for generating structured plans

import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';
import { NextResponse } from 'next/server';
import { logUserInteraction } from '@/lib/utils/logging'; // Logging utility
import { AiMessage, Program, WeeklyPlan, Workout } from '@/types'; // Import types

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
You are "MyPace AI," a world-class, certified personal trainer and sports scientist with expertise in exercise physiology, periodization, and nutrition. Your task is to generate expert-level, scientifically-backed training plans.

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

SPORT-SPECIFIC EXPERTISE:

MARATHON TRAINING:
- Base building phase (aerobic development)
- Build phase (lactate threshold work)
- Peak phase (race-specific pace work)
- Taper phase (volume reduction, intensity maintenance)
- Include: Easy runs (70-80%), tempo runs, intervals, long runs
- Strength training: 2x/week focusing on running economy
- Cross-training: Swimming, cycling for active recovery

STRENGTH TRAINING:
- Anatomical adaptation → Hypertrophy → Strength → Power phases
- Compound movements as foundation
- Progressive overload through volume, intensity, or complexity
- Include: Mobility work, corrective exercises
- Periodize intensity: 65-85% 1RM for strength, 85-95% for power

HIIT/CONDITIONING:
- Work:rest ratios based on energy system targets
- Phosphocreatine (10-15s work, 1:3-1:5 rest)
- Glycolytic (30s-2min work, 1:1-1:3 rest)
- Aerobic power (3-8min work, 1:1 rest)

RETURN ONLY VALID JSON IN THIS EXACT FORMAT:

{
  "name": "Expert Training Plan Name",
  "type": "sport_type",
  "category": "endurance|strength|conditioning|sport_specific",
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
