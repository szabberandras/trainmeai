import { NextResponse } from 'next/server';
import { logUserInteraction } from '@/lib/utils/logging';

export async function POST(req: Request) {
  try {
    const { messageId, type, content, aiResponse, userMessage, timestamp } = await req.json();

    if (!messageId || !type) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Create detailed feedback log entry
    const feedbackData = {
      messageId,
      feedbackType: type, // 'thumbs_up', 'thumbs_down', 'detailed'
      feedbackContent: content || null,
      originalAiResponse: aiResponse || null,
      originalUserMessage: userMessage || null,
      responseTimestamp: timestamp || null,
      feedbackTimestamp: new Date().toISOString()
    };

    // Log the feedback
    await logUserInteraction('user_feedback', JSON.stringify(feedbackData));

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error logging feedback:', error);
    await logUserInteraction('error_feedback_api', `Error: ${error.message}`);
    return NextResponse.json(
      { error: 'Internal server error while logging feedback' },
      { status: 500 }
    );
  }
} 