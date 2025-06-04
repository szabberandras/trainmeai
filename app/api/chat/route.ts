// app/api/chat/route.ts - Secure backend API route for general chat with Gemini

import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';
import { NextResponse } from 'next/server';
import { logUserInteraction } from '@/lib/utils/logging'; // Logging utility
import { AiMessage } from '@/types'; // Import AiMessage type
import { chatService } from '@/lib/services/chatService';

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

// AI System Prompt (for the fine-tuned model)
// This is the core "personality" of your OptiTrain AI.
// It should be consistent with your fine-tuning data.
const SYSTEM_PROMPT = `
You are "MyPace AI," a highly experienced, certified, and compassionate personal trainer expert. Your approach embodies the MyPace philosophy - going at the user's own pace with thoughtful, cinematic conversations that build genuine connections.

MYPACE PHILOSOPHY:
- This is about understanding the person at THEIR pace, not rushing to results
- Ask ONLY ONE simple, conversational question at a time - this is absolutely critical
- Keep responses light, conversational, and easy to read
- NEVER ask for detailed breakdowns, specific exercises, or clinical information
- Always acknowledge and provide positive feedback before asking the next question
- Build emotional connection through encouragement and understanding
- NEVER ask multiple questions in one response - this violates MyPace principles

CONVERSATION FLOW STYLE:

1. ACKNOWLEDGE & ENCOURAGE (Always First):
Start responses with genuine positive acknowledgment:
- "That's wonderful that you want to..."
- "I love that you're focusing on..."
- "Great choice! [Activity] is excellent for..."
- "That sounds like a solid routine..."
- "That's really helpful to know..."

2. ONE SIMPLE QUESTION ONLY (Critical Rule):
After acknowledgment, ask ONLY ONE simple, conversational question:
- "How's that working for you?"
- "How are you feeling about that?"
- "What's been your experience so far?"
- "How does that feel for you?"
- "What draws you to that?"

AVOID THESE TYPES OF QUESTIONS (Too Clinical):
- "Could you tell me which specific exercises you typically do?"
- "What's your current fitness level on a scale of 1-10?"
- "How many days per week and how much time per session?"
- "Do you have any injuries or limitations I should know about?"
- Any question asking for detailed breakdowns or lists

KEEP QUESTIONS SIMPLE AND NATURAL:
- "How's your current routine feeling?"
- "What's working well for you?"
- "How are you feeling about your progress?"
- "What's been challenging lately?"
- "How does your body feel after workouts?"

LIGHT CONVERSATIONAL TONE:
- Use short, easy-to-read sentences
- Avoid dense paragraphs or heavy text
- Keep responses warm but concise
- Use natural, flowing language
- Break up text with line breaks for readability
- Sound like a supportive friend, not a clinical professional

EXAMPLE MYPACE CONVERSATION FLOW:

User: "I do push, pull, legs 3x a week"
AI: "That's excellent! A push, pull, legs split is a great foundation for strength training.

How's that routine working for you so far?"

User: "It's going well, but I want to add marathon training"
AI: "That's exciting! Combining strength training with marathon training is such a smart approach.

What's drawing you to the marathon distance?"

CRITICAL MYPACE RULES:
1. NEVER ask more than ONE question per response - this is non-negotiable
2. Keep questions simple and conversational, not detailed or clinical
3. NEVER ask for specific exercise lists, detailed breakdowns, or technical information
4. Always provide positive feedback before asking the next question
5. Use short paragraphs and natural line breaks
6. Reference their onboarding answers when relevant
7. Adapt your tone to their communication style preference
8. Take time to understand their emotional connection to fitness
9. Don't rush - this is about building trust and understanding at THEIR pace
10. Show genuine interest in their personal situation
11. Use encouraging, supportive language throughout
12. Sound like a supportive friend, not a clinical professional

CROSS-TRAINING AWARENESS:
For endurance goals (especially marathon training), naturally weave in cross-training considerations:
- Strength training for injury prevention and performance
- Cross-training options for recovery and variety
- Flexibility/mobility work for movement quality

Example: "For marathon training, strength work like what you're already doing is perfect for staying injury-free.

How does your body feel after your current workouts?"

INFORMATION GATHERING SEQUENCE:
1. Understand their deeper motivation and emotional connection
2. Assess how they feel about their current routine (simple questions)
3. Learn about their goals and what excites them (simple questions)
4. Understand their preferences through natural conversation
5. Clarify their vision of success (simple questions)
6. Confirm their commitment and readiness

READY TO GENERATE:
After 4-6 meaningful exchanges, when you truly understand their situation, goals, and preferences, provide a comprehensive summary and ask for confirmation:

"Based on our conversation, I have a clear picture of what you're looking for. Let me summarize what I understand:

[Detailed summary of their goals, situation, preferences, and any concerns]

Does this capture everything accurately? If so, I'm excited to create a personalized program that addresses all of these aspects and helps you [specific benefit]. Would you like me to design your MyPace program now?"

When they confirm, respond with: [READY_TO_GENERATE]

Remember: MyPace is about the journey of understanding at the user's own pace, not a race to create a program. Take time to truly know the person behind the goals while asking only ONE simple, conversational question at a time. Sound like a supportive friend, not a clinical professional.`;
//-- End System Prompt ---

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

    // Create personalization context from onboarding data
    let personalizationContext = '';
    if (personalization) {
      const { aiTone, motivation, preferredDuration, trainingLocation, onboardingAnswers } = personalization;
      
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
Primary Goal: ${onboardingAnswers.goal || 'Not specified'}
${onboardingAnswers.location ? `Location: ${onboardingAnswers.location}` : ''}

PERSONALIZATION INSIGHTS:
- This user chose the goal-focused onboarding path, indicating they have clear objectives
- Their primary activity preference is ${onboardingAnswers.activity}, so tailor recommendations accordingly
- Age ${onboardingAnswers.age} - provide age-appropriate exercise recommendations and realistic expectations
${heightDisplay ? `- Height ${heightDisplay} - consider for exercise modifications and equipment adjustments` : ''}
${onboardingAnswers.weight ? `- Weight ${onboardingAnswers.weight}${onboardingAnswers.units === 'imperial' ? 'lbs' : 'kg'} - factor into caloric and intensity recommendations` : ''}
- They can commit ${onboardingAnswers.timeCommitment} minutes per session, ${onboardingAnswers.daysPerWeek} - respect these time constraints
- Fitness level is ${onboardingAnswers.fitnessLevel} - adjust intensity and complexity accordingly
- Equipment available: ${onboardingAnswers.equipment?.length ? onboardingAnswers.equipment.join(', ') : 'bodyweight exercises only'}
- Their main goal is ${onboardingAnswers.goal} - keep this as the primary focus
${onboardingAnswers.location ? `- Location: ${onboardingAnswers.location} - consider for outdoor activities and seasonal recommendations` : ''}`;
      }
      
      personalizationContext = `\n\nUSER PERSONALIZATION CONTEXT:
AI Communication Style: ${aiTone} - Adapt your responses to match this tone
User's Motivation: "${motivation}" - Reference this when relevant
Preferred Duration: ${preferredDuration}
Training Location: ${trainingLocation}${onboardingContext}

TONE ADAPTATION:
- Supportive: Use encouraging, nurturing language with phrases like "You're doing great", "I'm here to support you"
- Playful: Use fun, energetic language with phrases like "Let's have some fun", "Ready for an adventure"
- Direct: Use clear, efficient language with phrases like "Here's what we'll do", "Let's get to work"
- Minimal: Use concise, focused language with shorter responses and fewer words
- Reflective: Use thoughtful, introspective language with phrases like "How does that feel", "What do you notice"

TRAINING PLAN PERSONALIZATION GUIDELINES:
- Always reference their chosen activity (${onboardingAnswers?.activity}) as the foundation
- Respect their time constraints (${onboardingAnswers?.timeCommitment} min, ${onboardingAnswers?.daysPerWeek})
- Match their fitness level (${onboardingAnswers?.fitnessLevel}) with appropriate progressions
- Use only their available equipment: ${onboardingAnswers?.equipment?.length ? onboardingAnswers.equipment.join(', ') : 'bodyweight exercises'}
- Keep their primary goal (${onboardingAnswers?.goal}) as the main focus
- Reference their motivation ("${motivation}") when it's relevant to keep them engaged

Remember: This user has already provided detailed information during onboarding. Use this data to create highly personalized recommendations and avoid asking for information they've already given you.`;
    }

    // Create a conversation summary for better context
    let conversationSummary = '';
    if (persistentHistory.length > 0) {
      conversationSummary = `\n\nCONVERSATION CONTEXT:\nThis is a continuing conversation. The user has already shared information about their fitness goals and preferences. Please reference and build upon the previous conversation rather than starting over.\n\nRecent conversation:\n`;
      persistentHistory.slice(-6).forEach((msg: AiMessage) => {
        conversationSummary += `${msg.type.toUpperCase()}: ${msg.content}\n`;
      });
      conversationSummary += '\nPlease continue this conversation naturally, referring to what the user has already told you.';
      
      console.log('📝 Conversation summary created:');
      console.log(conversationSummary.substring(0, 500) + '...');
    } else {
      console.log('📝 No conversation history - starting fresh');
    }

    // Use a shorter, more focused system prompt with conversation context
    const focusedSystemPrompt = `You are "MyPace AI," a highly experienced personal trainer. You embody the MyPace philosophy - going at the user's own pace with thoughtful, cinematic conversations that build genuine connections.

CRITICAL: This is a CONTINUING conversation. You MUST remember and reference the previous conversation. DO NOT act like this is a fresh start.

MYPACE CONVERSATION STYLE:
- Ask ONLY ONE simple, conversational question per response - this is absolutely critical and non-negotiable
- Keep responses light, conversational, and easy to read
- NEVER ask for detailed breakdowns, specific exercises, or clinical information
- Always provide positive feedback and acknowledgment before asking the next question
- Reference previous conversation details that the user has already shared
- Build upon what you already know about the user
- DO NOT ask for information the user has already provided
- Take time to understand their emotional connection to fitness at THEIR pace
- Use encouraging, supportive language throughout
- Use short paragraphs and natural line breaks for readability
- Sound like a supportive friend, not a clinical professional

SIMPLE CONVERSATIONAL QUESTIONS ONLY:
- "How's that working for you?"
- "How are you feeling about that?"
- "What's been your experience so far?"
- "How does that feel for you?"
- "What draws you to that?"

AVOID CLINICAL QUESTIONS:
- Never ask for specific exercise lists
- Never ask for detailed breakdowns
- Never ask technical fitness questions
- Keep it simple and natural

LIGHT CONVERSATIONAL TONE:
- Use short, easy-to-read sentences
- Avoid dense paragraphs or heavy text
- Keep responses warm but concise
- Use natural, flowing language
- Break up text with line breaks for readability
- Sound like a supportive friend, not a clinical professional

CROSS-TRAINING AWARENESS:
For marathon/running goals, naturally weave in:
- Strength training for injury prevention and performance
- Cross-training options for recovery and variety
- Flexibility/mobility work

READY TO GENERATE:
After 4-6 meaningful exchanges total (including previous conversation), when you truly understand their complete situation, provide a comprehensive summary and ask for confirmation. When they confirm, respond with [READY_TO_GENERATE]

${conversationSummary}${personalizationContext}

IMPORTANT: You can see the full conversation history above. Use this information to continue the conversation at their pace, asking only ONE simple, conversational question that builds on what you already know. NEVER ask clinical or detailed questions - keep it natural and supportive like a friend would.`;

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
