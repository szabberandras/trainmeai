// app/api/chat/route.ts - Secure backend API route for general chat with Gemini

import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';
import { NextResponse } from 'next/server';
import { logUserInteraction } from '@/lib/utils/logging'; // Logging utility
import { AiMessage } from '@/types'; // Import AiMessage type
import { chatService } from '@/lib/services/chatService';
import { TrainingService } from '@/lib/services/training.service';
import { CoachPersona } from '@/lib/types/training-system';
import coachPersonas from '@/lib/data/coach-personas.json';
import { db } from '@/lib/firebase';
import { collection, addDoc, query, where, orderBy, getDocs, limit, deleteDoc } from 'firebase/firestore';
import EnhancedAIService from '@/lib/services/EnhancedAIService';

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
