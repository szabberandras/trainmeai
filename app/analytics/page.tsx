'use client';
import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '@/lib/firebase';
import { nanoid } from 'nanoid';
import { doc, getDoc, setDoc, updateDoc, collection, addDoc, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { Plus, Crown, MessageSquare, Edit3, Zap, Star, TrendingUp, Target, Dumbbell, Trophy, Clock, Flame, Waves, Mountain, Users, X, Send } from 'lucide-react';
import { chatWithGemini, generateTrainingPlan } from '@/lib/ai/gemini';
import { sampleWorkoutData } from '@/lib/data/sampleWorkouts';

// Type definitions
interface AiMessage {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

interface EditingContext {
  type: string;
  programId: string;
  workoutId?: string;
  weekNumber?: number | null;
}

interface UserProfile {
  subscription: string;
  plansGenerated: number;
  maxPlans: number;
  programs: any[];
  preferences: any;
}

function AnalyticsContent() {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  const searchParams = useSearchParams();
  const chatHistoryRef = useRef<HTMLDivElement>(null);

  // User state
  const [userProfile, setUserProfile] = useState<UserProfile>({
    subscription: 'free',
    plansGenerated: 0,
    maxPlans: 2,
    programs: [],
    preferences: {}
  });

  // UI state
  const [showAICoach, setShowAICoach] = useState(false);
  const [aiConversation, setAiConversation] = useState<AiMessage[]>([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isLoadingProfile, setIsLoadingProfile] = useState(true);
  const [isSendingMessage, setIsSendingMessage] = useState(false);
  const [isGeneratingPlan, setIsGeneratingPlan] = useState(false);
  const [initialGreetingShown, setInitialGreetingShown] = useState(false);

  // Context state for training plan editing
  const [editingContext, setEditingContext] = useState<EditingContext | null>(null);

  // Handle URL parameters for AI context
  useEffect(() => {
    const shouldShowAI = searchParams.get('showAICoach') === 'true';
    const context = searchParams.get('context');
    const programId = searchParams.get('program');
    const workoutId = searchParams.get('workout');
    const weekNum = searchParams.get('week');

    if (shouldShowAI) {
      setShowAICoach(true);
      
      // Set up editing context based on URL parameters
      if (context && programId) {
        setEditingContext({
          type: context, // 'edit', 'generate-next'
          programId,
          workoutId: workoutId || undefined,
          weekNumber: weekNum ? parseInt(weekNum) : null
        });
      }
    }
  }, [searchParams]);

  // Scroll chat to bottom on new message
  useEffect(() => {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }
  }, [aiConversation]);

  // Load user profile and conversation history
  useEffect(() => {
    const loadData = async () => {
      if (user) {
        try {
          const userDocRef = doc(db, 'users', user.uid);
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setUserProfile({
              subscription: userData.subscription || 'free',
              plansGenerated: userData.plansGenerated || 0,
              maxPlans: userData.maxPlans || 2,
              programs: userData.programs || [],
              preferences: userData.preferences || {}
            });
            
            // Load conversation history
            const conversationsRef = collection(db, 'users', user.uid, 'conversations');
            const conversationsQuery = query(conversationsRef, orderBy('timestamp', 'desc'), limit(1));
            const conversationsSnapshot = await getDocs(conversationsQuery);
            
            if (!conversationsSnapshot.empty) {
              const latestConversation = conversationsSnapshot.docs[0].data();
              setAiConversation(latestConversation.messages || []);
            }
          }
        } catch (error) {
          console.error('Error loading user data:', error);
        } finally {
          setIsLoadingProfile(false);
        }
      }
    };

    loadData();
  }, [user]);

  // Show initial greeting when AI coach opens
  useEffect(() => {
    if (showAICoach && !initialGreetingShown && aiConversation.length === 0) {
      const greeting = editingContext 
        ? getContextualGreeting(editingContext)
        : "Hello! I'm OptiTrain AI, your personal fitness coach. I can help you create training plans, modify workouts, or answer any fitness questions. What would you like to work on today?";
      
      setAiConversation([{
        id: nanoid(),
        type: 'ai',
        content: greeting,
        timestamp: new Date()
      }]);
      setInitialGreetingShown(true);
    }
  }, [showAICoach, initialGreetingShown, aiConversation.length, editingContext]);

  const getContextualGreeting = (context: EditingContext) => {
    switch (context.type) {
      case 'edit':
        return `I see you want to edit a workout! I'm here to help you modify your training plan. What changes would you like to make?`;
      case 'generate-next':
        return `Ready to plan your next week of training? I'll help you progress appropriately based on your previous workouts. How did this week go?`;
      default:
        return "Hello! I'm OptiTrain AI. How can I help you with your training today?";
    }
  };

  const sendMessage = async () => {
    if (!currentMessage.trim() || isSendingMessage) return;

    const userMessage: AiMessage = {
      id: nanoid(),
      type: 'user',
      content: currentMessage.trim(),
      timestamp: new Date()
    };

    const updatedConversation = [...aiConversation, userMessage];
    setAiConversation(updatedConversation);
    setCurrentMessage('');
    setIsSendingMessage(true);

    try {
      // Determine context for AI response
      const context = editingContext?.type || 'general';
      
      // Get AI response
      const aiResponse = await chatWithGemini(
        userMessage.content,
        context,
        updatedConversation.slice(-10) // Last 10 messages for context
      );

      const aiMessage: AiMessage = {
        id: nanoid(),
        type: 'ai',
        content: aiResponse,
        timestamp: new Date()
      };

      const finalConversation = [...updatedConversation, aiMessage];
      setAiConversation(finalConversation);

      // Check if AI is ready to generate/update plan
      if (aiResponse.includes('READY_TO_GENERATE_PLAN')) {
        await handlePlanGeneration(finalConversation);
      } else if (aiResponse.includes('READY_TO_UPDATE_PLAN')) {
        await handlePlanUpdate(finalConversation);
      }

      // Save conversation to Firestore
      await saveConversation(finalConversation);

    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: AiMessage = {
        id: nanoid(),
        type: 'ai',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date()
      };
      setAiConversation(prev => [...prev, errorMessage]);
    } finally {
      setIsSendingMessage(false);
    }
  };

  const handlePlanGeneration = async (conversation: AiMessage[]) => {
    setIsGeneratingPlan(true);
    try {
      const plan = await generateTrainingPlan(conversation);
      
      // Save plan to user's programs
      const programRef = doc(collection(db, 'users', user!.uid, 'programs'));
      await setDoc(programRef, {
        ...plan,
        id: programRef.id,
        createdAt: new Date(),
        status: 'active'
      });

      // Update user's plan count
      const userRef = doc(db, 'users', user!.uid);
      await updateDoc(userRef, {
        plansGenerated: userProfile.plansGenerated + 1
      });

      // Navigate to programs page
      router.push('/programs');
      
    } catch (error) {
      console.error('Error generating plan:', error);
    } finally {
      setIsGeneratingPlan(false);
    }
  };

  const handlePlanUpdate = async (conversation: AiMessage[]) => {
    // Implementation for updating existing plans
    console.log('Plan update requested', editingContext);
  };

  const saveConversation = async (conversation: AiMessage[]) => {
    try {
      const conversationRef = doc(collection(db, 'users', user!.uid, 'conversations'));
      await setDoc(conversationRef, {
        messages: conversation,
        timestamp: new Date(),
        context: editingContext
      });
    } catch (error) {
      console.error('Error saving conversation:', error);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (loading || isLoadingProfile) {
    return (
      <div className="min-h-screen bg-[#0d1117] flex items-center justify-center">
        <div className="text-white">Loading analytics...</div>
      </div>
    );
  }

  if (!user) {
    router.push('/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      {/* Header */}
      <div className="border-b border-gray-800 bg-[#161b22] px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Training Analytics</h1>
            <p className="text-gray-400 mt-1">Track your progress and optimize your training</p>
          </div>
          <button
            onClick={() => setShowAICoach(true)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            AI Coach
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-[#161b22] border border-gray-800 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <Target className="w-5 h-5 text-blue-500" />
              <h3 className="font-semibold">Programs Created</h3>
            </div>
            <p className="text-2xl font-bold">{userProfile.plansGenerated}</p>
            <p className="text-sm text-gray-400">of {userProfile.maxPlans} {userProfile.subscription} limit</p>
          </div>

          <div className="bg-[#161b22] border border-gray-800 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <h3 className="font-semibold">Active Programs</h3>
            </div>
            <p className="text-2xl font-bold">{userProfile.programs?.filter((p: any) => p.status === 'active').length || 0}</p>
            <p className="text-sm text-gray-400">Currently training</p>
          </div>

          <div className="bg-[#161b22] border border-gray-800 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <Flame className="w-5 h-5 text-orange-500" />
              <h3 className="font-semibold">Workout Streak</h3>
            </div>
            <p className="text-2xl font-bold">7</p>
            <p className="text-sm text-gray-400">days in a row</p>
          </div>

          <div className="bg-[#161b22] border border-gray-800 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <Crown className="w-5 h-5 text-yellow-500" />
              <h3 className="font-semibold">Subscription</h3>
            </div>
            <p className="text-2xl font-bold capitalize">{userProfile.subscription}</p>
            <p className="text-sm text-gray-400">
              {userProfile.subscription === 'free' ? 'Upgrade for unlimited' : 'Unlimited plans'}
            </p>
          </div>
        </div>

        {/* Sample Workouts Preview */}
        <div className="bg-[#161b22] border border-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Sample Workout Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(sampleWorkoutData).slice(0, 6).map(([key, workout]) => (
              <div key={key} className="bg-[#0d1117] border border-gray-700 rounded-lg p-4 hover:border-blue-500 transition-colors cursor-pointer">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-3 h-3 rounded-full ${getWorkoutColor(workout.type)}`}></div>
                  <h3 className="font-semibold capitalize">{workout.type.replace('_', ' ')}</h3>
                </div>
                <p className="text-sm text-gray-400 mb-2">{workout.title}</p>
                <p className="text-xs text-gray-500">{workout.summary}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs bg-gray-800 px-2 py-1 rounded">
                    Intensity: {workout.intensity}%
                  </span>
                  <span className="text-xs text-gray-400">{workout.day}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Coach Modal */}
      {showAICoach && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#161b22] border border-gray-800 rounded-lg w-full max-w-2xl h-[600px] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-800">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold">OptiTrain AI Coach</h3>
                  <p className="text-xs text-gray-400">
                    {editingContext ? `${editingContext.type} mode` : 'General coaching'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowAICoach(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat History */}
            <div 
              ref={chatHistoryRef}
              className="flex-1 overflow-y-auto p-4 space-y-4"
            >
              {aiConversation.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-800 text-gray-100'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {new Date(message.timestamp).toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))}
              {isSendingMessage && (
                <div className="flex justify-start">
                  <div className="bg-gray-800 p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-800">
              <div className="flex gap-2">
                <textarea
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about training, nutrition, or program modifications..."
                  className="flex-1 bg-[#0d1117] border border-gray-700 rounded-lg px-3 py-2 text-sm resize-none focus:outline-none focus:border-blue-500"
                  rows={2}
                  disabled={isSendingMessage || isGeneratingPlan}
                />
                <button
                  onClick={sendMessage}
                  disabled={!currentMessage.trim() || isSendingMessage || isGeneratingPlan}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 disabled:cursor-not-allowed px-4 py-2 rounded-lg transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              {isGeneratingPlan && (
                <p className="text-xs text-blue-400 mt-2">Generating your training plan...</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AnalyticsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#0d1117] flex items-center justify-center">
        <div className="text-white">Loading analytics...</div>
      </div>
    }>
      <AnalyticsContent />
    </Suspense>
  );
}

// Helper function to get workout type colors
function getWorkoutColor(type: string) {
  const colors: Record<string, string> = {
    hyrox: 'bg-red-500',
    crossfit: 'bg-orange-500',
    kettlebell: 'bg-yellow-500',
    powerlifting: 'bg-purple-500',
    marathon: 'bg-blue-500',
    swimming: 'bg-cyan-500',
    boxing: 'bg-red-600',
    vinyasa_yoga: 'bg-green-500',
    hiit: 'bg-pink-500',
    calisthenics: 'bg-indigo-500'
  };
  return colors[type] || 'bg-gray-500';
} 