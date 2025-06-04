import { NextResponse } from 'next/server';
import { chatService } from '@/lib/services/chatService';

export async function GET(req: Request) {
  try {
    console.log('🔍 Chat history API called');
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');
    console.log('👤 User ID:', userId);

    if (!userId) {
      console.log('❌ No user ID provided');
      return NextResponse.json({ error: 'User ID required' }, { status: 400 });
    }

    console.log('📞 Calling chatService.getMainChatSession...');
    const chatSession = await chatService.getMainChatSession(userId);
    console.log('✅ Chat session retrieved:', {
      id: chatSession.id,
      messageCount: chatSession.messages.length,
      lastUpdated: chatSession.lastUpdated
    });
    
    return NextResponse.json({
      messages: chatSession.messages,
      lastUpdated: chatSession.lastUpdated
    });
  } catch (error: any) {
    console.error('❌ Error fetching chat history:', error);
    console.error('📋 Error details:', {
      message: error.message,
      stack: error.stack
    });
    return NextResponse.json(
      { error: 'Failed to fetch chat history', details: error.message },
      { status: 500 }
    );
  }
} 