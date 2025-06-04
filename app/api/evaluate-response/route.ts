// app/api/evaluate-response/route.ts - API endpoint for logging AI response evaluations

import { NextResponse } from 'next/server';
import { logUserInteraction } from '@/lib/utils/logging';

export async function POST(req: Request) {
  try {
    const { userId, messageIndex, evaluation, messageContent } = await req.json();

    if (!userId || !evaluation || messageIndex === undefined) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Log the evaluation for analytics
    await logUserInteraction(
      'ai_response_evaluation', 
      JSON.stringify({
        messageIndex,
        evaluation,
        messageContent: messageContent?.substring(0, 200), // Truncate for storage
        timestamp: new Date().toISOString()
      }),
      userId
    );

    console.log(`📊 AI Response Evaluation: ${evaluation} for user ${userId}`);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error logging evaluation:', error);
    return NextResponse.json(
      { error: 'Failed to log evaluation' },
      { status: 500 }
    );
  }
} 