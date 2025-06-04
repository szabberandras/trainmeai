import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';

const apiKey = process.env.GOOGLE_GEMINI_API_KEY;
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

// Enhanced system prompts for different contexts
const SYSTEM_PROMPTS = {
  general: `You are OptiTrain AI, a world-class personal trainer and fitness expert. You create personalized training programs and provide expert coaching advice. Be encouraging, knowledgeable, and adaptive to the user's needs.`,
  
  edit: `You are OptiTrain AI in EDITING MODE. The user wants to modify an existing workout or training plan. Analyze their request carefully and provide specific suggestions for improvements. When ready to apply changes, include "READY_TO_UPDATE_PLAN" in your response.`,
  
  'generate-next': `You are OptiTrain AI in PROGRESSION MODE. The user has completed previous weeks and wants to generate the next week of training. Consider their progress, feedback, and proper progression principles. When ready to generate, include "READY_TO_GENERATE_PLAN" in your response.`,
  
  hyrox: `You are OptiTrain AI specializing in HYROX training. Focus on functional fitness, race simulation, and the 8 HYROX stations: SkiErg, Sled Push, Sled Pull, Burpee Broad Jumps, Rowing, Farmers Carry, Sandbag Lunges, and Wall Balls, all connected by 1km runs.`,
  
  powerlifting: `You are OptiTrain AI specializing in POWERLIFTING. Focus on the big three lifts (squat, bench, deadlift), percentage-based training, progressive overload, and proper periodization.`,
  
  marathon: `You are OptiTrain AI specializing in MARATHON TRAINING. Focus on endurance building, pace work, long runs, recovery, and race preparation strategies.`
};

export async function chatWithGemini(message, context = 'general', conversationHistory = []) {
  if (!genAI) {
    throw new Error('Google AI not initialized. Please check your API key.');
  }

  try {
    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
    });

    // Build conversation context
    let systemPrompt = SYSTEM_PROMPTS[context] || SYSTEM_PROMPTS.general;
    
    // Add conversation history for context
    let conversationContext = '';
    if (conversationHistory.length > 0) {
      conversationContext = '\n\nPrevious conversation:\n';
      conversationHistory.slice(-6).forEach(msg => {
        conversationContext += `${msg.type === 'user' ? 'User' : 'AI'}: ${msg.content}\n`;
      });
    }

    const fullPrompt = `${systemPrompt}${conversationContext}\n\nUser: ${message}`;

    const result = await model.generateContent({
      contents: [{ parts: [{ text: fullPrompt }] }],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1000,
        topP: 0.8,
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
      ],
    });

    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    throw new Error(`AI service error: ${error.message}`);
  }
}

export async function generateTrainingPlan(conversationHistory) {
  if (!genAI) {
    throw new Error('Google AI not initialized. Please check your API key.');
  }

  try {
    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
    });

    // Extract conversation context
    const conversationText = conversationHistory
      .map(msg => `${msg.type === 'user' ? 'User' : 'AI'}: ${msg.content}`)
      .join('\n');

    const planPrompt = `Based on this conversation, create a structured training plan. Return ONLY valid JSON in this exact format:

{
  "name": "Training Plan Name",
  "type": "sport_type",
  "weeks": [
    {
      "weekNumber": 1,
      "startDate": "2024-01-01",
      "workouts": [
        {
          "id": 1,
          "day": "Monday",
          "type": "sport_type",
          "title": "Workout Title",
          "summary": "Brief description",
          "intensity": 75,
          "completed": false,
          "details": {
            // Sport-specific details based on the workout type
            // For running: distance_km, pace_target, intervals
            // For powerlifting: exercises array with sets, reps, weight_kg
            // For swimming: distance_m, stroke, intervals
            // etc.
          }
        }
      ]
    }
  ]
}

Conversation:
${conversationText}`;

    const result = await model.generateContent({
      contents: [{ parts: [{ text: planPrompt }] }],
      generationConfig: {
        temperature: 0.3, // Lower temperature for more structured output
        maxOutputTokens: 2000,
        topP: 0.8,
        topK: 40,
      },
    });

    const response = await result.response;
    const jsonText = response.text();
    
    // Clean up the response to extract JSON
    const jsonMatch = jsonText.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    } else {
      throw new Error('Failed to generate valid training plan structure');
    }
  } catch (error) {
    console.error('Error generating training plan:', error);
    throw new Error(`Failed to generate training plan: ${error.message}`);
  }
} 