// app/api/generate-next-day/route.ts - API for daily training progression

import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { dailyTrainingService } from '@/lib/services/dailyTrainingService';
import { canGenerateTrainingDay } from '@/app/components/auth/userProfileService';

let genAI: GoogleGenerativeAI | null = null;

if (process.env.GOOGLE_GEMINI_API_KEY) {
  genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY);
  console.log('✅ GoogleGenerativeAI initialized for daily training generation');
} else {
  console.error('GOOGLE_GEMINI_API_KEY environment variable not found. Daily training generation will fail.');
}

const DAILY_TRAINING_PROMPT = `
You are "MyPace AI," a world-class personal trainer generating the next day of training for a user's program.

DAILY TRAINING PRINCIPLES:
1. PROGRESSIVE OVERLOAD: Each day should build on previous sessions
2. RECOVERY INTEGRATION: Include rest days every 7th day
3. VARIETY: Rotate muscle groups and movement patterns
4. PERSONALIZATION: Adapt to user's equipment, time, and fitness level
5. EXPERT GUIDANCE: Provide coaching cues and form instructions

WORKOUT STRUCTURE:
- Warm-up: 5-10 minutes dynamic preparation
- Main work: 20-40 minutes primary training
- Cool-down: 5-10 minutes recovery and stretching

PROGRESSION RULES:
- Increase reps by 10-20% when user completes all sets
- Add weight when bodyweight becomes too easy
- Introduce exercise variations for continued challenge
- Include deload every 4th week

EQUIPMENT ADAPTATION:
- If equipment not available, provide bodyweight alternatives
- Use resistance bands as dumbbell substitutes when possible
- Modify exercises for space constraints

Return workout in this JSON format:
{
  "workout": {
    "title": "Workout Name",
    "description": "Brief description",
    "duration": 45,
    "intensity": "moderate",
    "exercises": [
      {
        "name": "Exercise Name",
        "sets": 3,
        "reps": "8-12",
        "weight": 10,
        "restTime": 60,
        "instructions": ["Step 1", "Step 2"],
        "coachingCues": ["Focus point 1", "Focus point 2"]
      }
    ]
  },
  "nutrition": {
    "preWorkout": "Pre-workout nutrition guidance",
    "postWorkout": "Post-workout nutrition guidance",
    "dailyFocus": "Daily nutrition focus"
  }
}
`;

export async function POST(req: NextRequest) {
  try {
    const { userId, programId, skipDays, makeupDays, customRequest } = await req.json();

    if (!userId || !programId) {
      return NextResponse.json(
        { error: 'User ID and Program ID are required' },
        { status: 400 }
      );
    }

    // Check if user can generate more training days
    const eligibility = await canGenerateTrainingDay(userId);
    if (!eligibility.canGenerate) {
      return NextResponse.json({
        success: false,
        error: eligibility.reason,
        daysRemaining: eligibility.daysRemaining,
        upgradeRequired: true
      }, { status: 403 });
    }

    // Generate next day using the daily training service
    const result = await dailyTrainingService.generateNextDay({
      userId,
      programId,
      skipDays,
      makeupDays,
      customRequest
    });

    if (!result.success) {
      return NextResponse.json({
        success: false,
        error: result.error
      }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      dayGenerated: result.dayGenerated,
      workout: result.workout,
      nutritionGuidance: result.nutritionGuidance,
      daysRemaining: result.daysRemaining
    });

  } catch (error: any) {
    console.error('Error in generate-next-day API:', error);
    return NextResponse.json(
      { error: 'Failed to generate next training day' },
      { status: 500 }
    );
  }
}

// GET endpoint to check eligibility without generating
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    const eligibility = await canGenerateTrainingDay(userId);
    
    return NextResponse.json({
      canGenerate: eligibility.canGenerate,
      daysRemaining: eligibility.daysRemaining,
      reason: eligibility.reason
    });

  } catch (error: any) {
    console.error('Error checking training day eligibility:', error);
    return NextResponse.json(
      { error: 'Failed to check eligibility' },
      { status: 500 }
    );
  }
} 