import { doc, setDoc, getDoc, updateDoc, collection, query, where, orderBy, getDocs, addDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase/config';
import { AiMessage } from '@/types';

export interface ChatSession {
  id: string;
  userId: string;
  title: string;
  lastMessage: string;
  lastUpdated: Date;
  programId?: string;
  programType?: string;
  isActive: boolean;
  messages: AiMessage[];
}

export interface ProgramContext {
  id: string;
  title: string;
  type: string;
  status: 'planning' | 'active' | 'completed' | 'paused';
  lastInteraction: Date;
  summary: string;
}

class ChatService {
  // Get or create main chat session for user
  async getMainChatSession(userId: string): Promise<ChatSession> {
    console.log('🔍 Getting chat session for userId:', userId);
    const sessionRef = doc(db, 'chatSessions', `${userId}_main`);
    
    try {
      const sessionDoc = await getDoc(sessionRef);
      console.log('📄 Session document exists:', sessionDoc.exists());

      if (sessionDoc.exists()) {
        const data = sessionDoc.data();
        console.log('📊 Session data found with', data.messages?.length || 0, 'messages');
        
        // Convert Firestore timestamps to Date objects for messages
        const messages = (data.messages || []).map((msg: any) => ({
          ...msg,
          timestamp: msg.timestamp?.toDate ? msg.timestamp.toDate() : new Date(msg.timestamp || Date.now())
        }));
        
        return {
          id: sessionDoc.id,
          userId: data.userId,
          title: data.title,
          lastMessage: data.lastMessage,
          lastUpdated: data.lastUpdated.toDate(),
          programId: data.programId,
          programType: data.programType,
          isActive: data.isActive,
          messages: messages
        };
      } else {
        console.log('✨ Creating new chat session for user:', userId);
        // Create default welcome session
        const newSession: ChatSession = {
          id: `${userId}_main`,
          userId,
          title: 'OptiTrain Chat',
          lastMessage: 'Welcome to OptiTrain!',
          lastUpdated: new Date(),
          isActive: true,
          messages: [{
            type: 'ai',
            content: `Welcome back! I'm your AI fitness coach. 

I'm here to help you with your training programs. What would you like to work on today?

You can:
- Create a new training program
- Continue working on an existing program  
- Get advice on your current workouts
- Ask any fitness-related questions

What's on your mind?`,
            timestamp: new Date()
          }]
        };

        await setDoc(sessionRef, {
          ...newSession,
          lastUpdated: new Date(),
          messages: newSession.messages
        });

        console.log('💾 New session created and saved');
        return newSession;
      }
    } catch (error) {
      console.error('❌ Error in getMainChatSession:', error);
      throw error;
    }
  }

  // Save message to chat session
  async addMessageToSession(userId: string, message: AiMessage, programId?: string): Promise<void> {
    const sessionRef = doc(db, 'chatSessions', `${userId}_main`);
    const session = await this.getMainChatSession(userId);
    
    const updatedMessages = [...session.messages, message];
    
    const updateData: any = {
      messages: updatedMessages,
      lastMessage: message.content.substring(0, 100) + (message.content.length > 100 ? '...' : ''),
      lastUpdated: new Date()
    };

    // Only include programId if it's defined
    if (programId || session.programId) {
      updateData.programId = programId || session.programId;
    }
    
    await updateDoc(sessionRef, updateData);
  }

  // Get user's program contexts for AI awareness
  async getUserProgramContexts(userId: string): Promise<ProgramContext[]> {
    try {
      const programsRef = collection(db, 'programs');
      const q = query(
        programsRef,
        where('userId', '==', userId),
        orderBy('lastUpdated', 'desc')
      );
      
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          title: data.title || data.sportType || 'Untitled Program',
          type: data.sportType || data.goalType || 'general',
          status: data.status || 'active',
          lastInteraction: data.lastUpdated?.toDate() || new Date(),
          summary: this.generateProgramSummary(data)
        };
      });
    } catch (error) {
      console.error('Error fetching program contexts:', error);
      return [];
    }
  }

  // Generate contextual AI prompt based on user's programs
  async generateContextualPrompt(userId: string): Promise<string> {
    const programs = await this.getUserProgramContexts(userId);
    
    if (programs.length === 0) {
      return `This user is new to OptiTrain and doesn't have any existing programs. Focus on:
- Welcoming them warmly
- Understanding their fitness goals
- Guiding them through program creation
- Asking about their experience level and preferences`;
    }

    const activePrograms = programs.filter(p => p.status === 'active');
    const latestProgram = programs[0]; // Most recently updated

    let contextPrompt = `This user has ${programs.length} total program(s) with OptiTrain.\n\n`;
    
    if (activePrograms.length > 0) {
      contextPrompt += `ACTIVE PROGRAMS:\n`;
      activePrograms.forEach(program => {
        contextPrompt += `- "${program.title}" (${program.type}) - Last interaction: ${program.lastInteraction.toLocaleDateString()}\n`;
        contextPrompt += `  Summary: ${program.summary}\n`;
      });
    }

    contextPrompt += `\nLATEST PROGRAM: "${latestProgram.title}" (${latestProgram.type})\n`;
    contextPrompt += `Status: ${latestProgram.status}\n`;
    contextPrompt += `Summary: ${latestProgram.summary}\n\n`;

    contextPrompt += `CONVERSATION APPROACH:
- Welcome them back warmly
- Reference their latest program by name
- Ask about their progress or if they need help with next steps
- Be ready to switch context if they want to discuss a different program
- If switching programs, give a brief summary of that program before continuing

IMPORTANT: Always ask about their most recent program first, but be flexible if they want to discuss something else.`;

    return contextPrompt;
  }

  // Generate a summary of a program for context
  private generateProgramSummary(programData: any): string {
    const parts = [];
    
    if (programData.goalType) {
      parts.push(`Goal: ${programData.goalType}`);
    }
    if (programData.experienceLevel) {
      parts.push(`Level: ${programData.experienceLevel}`);
    }
    if (programData.sessionsPerWeek) {
      parts.push(`${programData.sessionsPerWeek}x/week`);
    }
    if (programData.durationWeeks) {
      parts.push(`${programData.durationWeeks} weeks`);
    }
    if (programData.currentWeek) {
      parts.push(`Currently on week ${programData.currentWeek}`);
    }

    return parts.length > 0 ? parts.join(', ') : 'Custom training program';
  }

  // Clear chat history (useful for testing)
  async clearChatHistory(userId: string): Promise<void> {
    const sessionRef = doc(db, 'chatSessions', `${userId}_main`);
    await updateDoc(sessionRef, {
      messages: [],
      lastMessage: 'Chat cleared',
      lastUpdated: new Date()
    });
  }
}

export const chatService = new ChatService(); 