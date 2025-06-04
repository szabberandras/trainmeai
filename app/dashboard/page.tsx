// app/dashboard/page.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { 
  Send, 
  Target, 
  Trophy, 
  Dumbbell, 
  Heart, 
  Activity,
  Calendar,
  Zap,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react';
import LayoutClientWrapper from '@/app/components/LayoutClientWrapper';
import ProgramCard from '@/app/components/programs/ProgramCard';
import ProgramCreator from '@/app/components/programs/ProgramCreator';
import CinematicOnboarding, { UserPersonalization } from '@/app/components/onboarding/CinematicOnboarding';
import { ProgramService } from '@/lib/services/program.service';
import { TrainingProgram, ProgramTemplate } from '@/lib/types/program';
import { AiMessage, GoalType } from '@/types';

// Hero image should be a high-quality fitness/workout image
const HERO_BG = "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Hero%2Falgi-vmdJ6n8PIa8-unsplash.jpg?alt=media&token=62b61f06-50d6-404e-a457-87e16d567dfa";

// Activity templates with personalization support
const ACTIVITY_TEMPLATES = [
  {
    id: 'strength',
    title: 'Strength Training',
    description: 'Build muscle and increase power',
    frequency: '3-4x per week',
    duration: '45-60 min',
    experienceLevel: 'Beginner to Advanced',
    icon: Dumbbell,
    color: 'bg-gradient-to-br from-red-50 to-orange-50',
    borderColor: 'border-red-200',
    iconColor: 'text-red-600',
    type: 'strength',
    sampleWorkout: 'Upper Body Power',
    workoutDetails: [
      'Bench Press: 4 sets x 6-8 reps',
      'Pull-ups: 3 sets x 8-10 reps',
      'Overhead Press: 3 sets x 8-10 reps',
      'Barbell Rows: 4 sets x 8-10 reps'
    ],
    initialPrompt: `That's fantastic! Strength training is one of the best investments you can make in your health and confidence. There's something truly empowering about knowing your body can handle whatever life throws at you.

What draws you to strength training specifically? Is it about feeling stronger in your daily activities, building muscle, or perhaps something deeper like confidence?`
  },
  {
    id: 'cardio',
    title: 'Cardio & Endurance',
    description: 'Improve heart health and stamina',
    frequency: '3-5x per week',
    duration: '30-45 min',
    experienceLevel: 'All Levels',
    icon: Heart,
    color: 'bg-gradient-to-br from-blue-50 to-cyan-50',
    borderColor: 'border-blue-200',
    iconColor: 'text-blue-600',
    type: 'cardio',
    sampleWorkout: 'HIIT Cardio Blast',
    workoutDetails: [
      'Warm-up: 5 minutes easy pace',
      'Intervals: 8 x 30 seconds high intensity',
      'Recovery: 90 seconds between intervals',
      'Cool-down: 5 minutes easy pace'
    ],
    initialPrompt: `Excellent choice! Cardio training is incredible for your heart, energy levels, and overall well-being. There's nothing quite like that feeling of your body moving with strength and endurance.

What's calling you to focus on cardio right now? Are you looking to boost your energy, train for something specific, or maybe just feel that amazing post-workout glow?`
  },
  {
    id: 'marathon',
    title: 'Marathon Training',
    description: 'Complete 26.2 miles with confidence',
    frequency: '4-6x per week',
    duration: '45-120 min',
    experienceLevel: 'Intermediate to Advanced',
    icon: Trophy,
    color: 'bg-gradient-to-br from-purple-50 to-pink-50',
    borderColor: 'border-purple-200',
    iconColor: 'text-purple-600',
    type: 'marathon',
    sampleWorkout: 'Long Run',
    workoutDetails: [
      'Warm-up: 10 minutes easy pace',
      'Main: 16-20 miles at conversational pace',
      'Include 2-3 fuel stops',
      'Cool-down: 10 minutes walk + stretch'
    ],
    initialPrompt: `Wow, marathon training! That's such an incredible goal - there's something truly special about committing to 26.2 miles. The journey of marathon training often transforms people in ways they never expected.

What's inspiring you to take on this marathon challenge? Is it a specific race you have in mind, or more about proving something to yourself?`
  },
  {
    id: 'flexibility',
    title: 'Flexibility & Mobility',
    description: 'Improve range of motion and recovery',
    frequency: '4-7x per week',
    duration: '20-45 min',
    experienceLevel: 'All Levels',
    icon: Zap,
    color: 'bg-gradient-to-br from-green-50 to-emerald-50',
    borderColor: 'border-green-200',
    iconColor: 'text-green-600',
    type: 'flexibility',
    sampleWorkout: 'Full Body Flow',
    workoutDetails: [
      'Dynamic warm-up: 5 minutes',
      'Hip mobility sequence: 8 minutes',
      'Spinal flow: 10 minutes',
      'Deep stretches: 12 minutes'
    ],
    initialPrompt: `Beautiful choice! Flexibility and mobility work is like giving your body a daily gift - it's amazing how much better everything feels when you move with ease and freedom.

What's drawing you to focus on flexibility right now? Are you feeling tight from other activities, looking to prevent issues, or maybe just wanting to feel more graceful in your movement?`
  },
  {
    id: 'weight-loss',
    title: 'Weight Loss',
    description: 'Sustainable fat loss and body composition',
    frequency: '4-6x per week',
    duration: '30-60 min',
    experienceLevel: 'All Levels',
    icon: Target,
    color: 'bg-gradient-to-br from-orange-50 to-red-50',
    borderColor: 'border-orange-200',
    iconColor: 'text-orange-600',
    type: 'weight-loss',
    sampleWorkout: 'Metabolic Circuit',
    workoutDetails: [
      'Warm-up: 5 minutes movement prep',
      'Circuit: 4 rounds of 6 exercises',
      'Work: 45 seconds, Rest: 15 seconds',
      'Cool-down: 10 minutes stretch'
    ],
    initialPrompt: `That's a powerful goal! Weight loss is really about so much more than the number on the scale - it's about feeling confident, energetic, and comfortable in your own skin.

What would success look like for you? Is it about feeling more confident, having more energy, or maybe fitting into clothes that make you feel amazing?`
  },
  {
    id: 'general-fitness',
    title: 'General Fitness',
    description: 'Overall health and wellness',
    frequency: '3-5x per week',
    duration: '30-60 min',
    experienceLevel: 'All Levels',
    icon: Activity,
    color: 'bg-gradient-to-br from-indigo-50 to-blue-50',
    borderColor: 'border-indigo-200',
    iconColor: 'text-indigo-600',
    type: 'general-fitness',
    sampleWorkout: 'Total Body Workout',
    workoutDetails: [
      'Warm-up: 5 minutes dynamic movement',
      'Strength: 20 minutes compound exercises',
      'Cardio: 15 minutes varied intensity',
      'Flexibility: 10 minutes cool-down'
    ],
    initialPrompt: `Perfect! General fitness is such a smart approach - it's about building a strong foundation for everything else in life. When you feel fit and healthy, everything else just feels more possible.

What does "feeling fit" mean to you? Is it about having energy for your daily activities, feeling strong and capable, or maybe just that overall sense of vitality?`
  }
];

// Personalized AI messages based on onboarding
const getPersonalizedWelcomeMessage = (personalization: UserPersonalization | null, userName: string) => {
  if (!personalization || !personalization.motivation || !personalization.aiTone) {
    return `Hi! I'm your AI fitness coach. Let's create your personalized fitness program together.`;
  }

  const { aiTone, motivation, onboardingAnswers } = personalization;
  
  // Create goal-aware base message from motivation and onboarding data
  let goalContext = motivation.toLowerCase();
  let activityContext = '';
  let equipmentContext = '';
  
  if (onboardingAnswers) {
    if (onboardingAnswers.activity) {
      activityContext = ` with ${onboardingAnswers.activity}`;
    }
    if (onboardingAnswers.equipment && onboardingAnswers.equipment.length > 0) {
      equipmentContext = ` using your ${onboardingAnswers.equipment.join(', ').toLowerCase()}`;
    }
  }
  
  const baseMessages = {
    supportive: `Welcome back, ${userName}! I'm here to support you on your journey with ${goalContext}${activityContext}. I remember your preferences from onboarding and I'm excited to help you build on your progress${equipmentContext}. How are you feeling about your fitness journey today?`,
    playful: `Hey ${userName}! Ready to have some fun with ${goalContext}${activityContext}? I've got your onboarding info and some exciting training ideas planned for you${equipmentContext}! What sounds good today?`,
    direct: `${userName}, let's get to work on ${goalContext}${activityContext}. I have your preferences from onboarding - tell me what you need today and I'll create your plan${equipmentContext}.`,
    minimal: `${userName}. Focus: ${goalContext}${activityContext}${equipmentContext}. What's today's priority?`,
    reflective: `Hello ${userName}. I've been thinking about your journey with ${goalContext}${activityContext}. Based on what you shared during onboarding, how are you feeling about your progress${equipmentContext}? Let's check in and see what your body needs today.`
  };

  return baseMessages[aiTone] || baseMessages.supportive;
};

// Get personalized hero message
const getPersonalizedHeroMessage = (personalization: UserPersonalization | null) => {
  if (!personalization || !personalization.motivation) {
    return "Your fitness journey continues with us. Let's achieve your goals together.";
  }

  const { motivation, onboardingAnswers } = personalization;
  
  if (onboardingAnswers) {
    const { activity, goal, timeCommitment, daysPerWeek, fitnessLevel } = onboardingAnswers;
    
    // Create activity-specific messages
    const activityMessages = {
      'running': `Your running journey continues! Ready for ${timeCommitment}-minute sessions, ${daysPerWeek}?`,
      'cycling': `Time to get those wheels spinning! Your ${timeCommitment}-minute cycling sessions await.`,
      'strength': `Let's build that strength! Your ${timeCommitment}-minute power sessions are ready.`,
      'mindfulness': `Find your center with ${timeCommitment} minutes of mindful movement, ${daysPerWeek}.`,
      'swimming': `Dive into your aquatic training! ${timeCommitment} minutes of pool perfection ahead.`,
      'team-sports': `Game time! Your ${timeCommitment}-minute sport-specific training is ready.`
    };
    
    // Create goal-specific messages
    const goalMessages = {
      'fitness': `Building overall fitness with ${activity} - your ${fitnessLevel} level journey continues!`,
      'weight-loss': `Transforming your body with ${activity} - sustainable progress, ${timeCommitment} minutes at a time.`,
      'strength': `Power building through ${activity} - your ${fitnessLevel} strength journey evolves!`,
      'performance': `Performance optimization with ${activity} - training like the ${fitnessLevel} athlete you are!`,
      'wellbeing': `Wellness through ${activity} - nurturing your mind and body, ${timeCommitment} minutes daily.`
    };
    
    // Return activity-specific message if available, otherwise goal-specific
    if (activity && activityMessages[activity as keyof typeof activityMessages]) {
      return activityMessages[activity as keyof typeof activityMessages];
    } else if (goal && goalMessages[goal as keyof typeof goalMessages]) {
      return goalMessages[goal as keyof typeof goalMessages];
    }
  }
  
  return `Your ${motivation.toLowerCase()} journey continues. Let's make today count!`;
};

export default function DashboardPage() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const [showProgramCreator, setShowProgramCreator] = useState(false);
  const [programs, setPrograms] = useState<TrainingProgram[]>([]);
  const [templates, setTemplates] = useState<ProgramTemplate[]>([]);
  const [aiMessage, setAiMessage] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [userPersonalization, setUserPersonalization] = useState<UserPersonalization | null>(null);
  const [conversation, setConversation] = useState<AiMessage[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentGoalType, setCurrentGoalType] = useState<GoalType | null>(null);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll chat to bottom when new messages are added
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [conversation, isGenerating]);

  const loadUserData = async () => {
    if (!user) return;
    
    try {
      // Load user programs
      const userPrograms = await ProgramService.getUserPrograms(user.uid);
      setPrograms(userPrograms);

      if (userPrograms.length === 0) {
        const featuredTemplates = await ProgramService.getFeaturedTemplates();
        setTemplates(featuredTemplates);
      }

      // Load persistent chat history
      console.log('📞 Calling chat history API...');
      const chatResponse = await fetch(`/api/chat/history?userId=${user.uid}`);
      console.log('📨 Chat response status:', chatResponse.status);
      
      if (chatResponse.ok) {
        const chatData = await chatResponse.json();
        console.log('💬 Chat data received:', chatData);
        console.log('📋 Messages count:', chatData.messages?.length || 0);
        
        const messages = chatData.messages || [];
        console.log('📝 First few messages:', messages.slice(0, 2));
        
        // If there are existing messages, add a check-in message when user returns
        if (messages.length > 1) {
          try {
            const lastMessage = messages[messages.length - 1];
            console.log('🕐 Last message timestamp:', lastMessage.timestamp);
            
            let lastMessageTime;
            if (lastMessage.timestamp) {
              // Handle different timestamp formats
              if (typeof lastMessage.timestamp === 'object' && 'toDate' in lastMessage.timestamp) {
                lastMessageTime = lastMessage.timestamp.toDate();
              } else if (lastMessage.timestamp instanceof Date) {
                lastMessageTime = lastMessage.timestamp;
              } else {
                lastMessageTime = new Date(lastMessage.timestamp);
              }
            } else {
              lastMessageTime = new Date(0); // Very old date as fallback
            }
            
            const timeSinceLastMessage = new Date().getTime() - lastMessageTime.getTime();
            const hoursSinceLastMessage = timeSinceLastMessage / (1000 * 60 * 60);
            
            console.log('⏰ Hours since last message:', hoursSinceLastMessage);
            
            // If it's been more than 1 hour since last message, add a check-in
            if (hoursSinceLastMessage > 1) {
              console.log('✨ Adding check-in message');
              const checkInMessage = {
                type: 'ai' as const,
                content: `Welcome back! I see we were working on your fitness goals together.

How are you feeling about everything we discussed?`,
                timestamp: new Date(),
                metadata: {
                  isCheckIn: true
                }
              };
              messages.push(checkInMessage);
            }
          } catch (timestampError) {
            console.error('❌ Error processing timestamp:', timestampError);
            // Continue without check-in if timestamp processing fails
          }
        }
        
        // Check if the last AI message contains [READY_TO_GENERATE] and add button if missing
        const lastAiMessage = [...messages].reverse().find(m => m.type === 'ai');
        
        if (lastAiMessage?.content?.includes('[READY_TO_GENERATE]') && 
            !lastAiMessage?.metadata?.showGenerateButton) {
          // Add the generate button message if it's missing
          const generateButtonMessage = {
            type: 'ai' as const,
            content: "Perfect! I have all the information needed to create your personalized program. Would you like me to generate it now?",
            timestamp: new Date(),
            metadata: {
              showGenerateButton: true
            }
          };
          messages.push(generateButtonMessage);
        }
        
        setConversation(messages);
        console.log('✅ Conversation state updated with', messages.length, 'messages');
      } else {
        console.error('❌ Chat response not ok:', chatResponse.status);
        console.log('🔍 Response details:', await chatResponse.text());
        // Only set initial message if no conversation exists
        if (conversation.length === 0) {
          const userName = user.displayName || user.email?.split('@')[0] || 'there';
          let initialMessage;
          
          if (userPersonalization && userPersonalization.onboardingAnswers) {
            // Create a highly personalized welcome message based on onboarding data
            const { onboardingAnswers, aiTone } = userPersonalization;
            const { activity, goal, timeCommitment, daysPerWeek, fitnessLevel, equipment } = onboardingAnswers;
            
            const personalizedWelcome = `Welcome back, ${userName}! I'm excited to work with you on your ${goal} journey through ${activity}.

I remember from our onboarding that you're at a ${fitnessLevel} level and can commit ${timeCommitment} minutes, ${daysPerWeek}. ${equipment && equipment.length > 0 ? `I also have your equipment list: ${equipment.join(', ')}.` : 'I know you prefer bodyweight exercises.'}

What would you like to focus on today? I can help you create a personalized training plan, adjust your current routine, or answer any fitness questions you have.`;

            initialMessage = {
              type: 'ai' as const,
              content: personalizedWelcome,
              timestamp: new Date(),
              metadata: {
                isPersonalizedWelcome: true
              }
            };
          } else {
            // Fallback to generic welcome if no onboarding data
            initialMessage = {
              type: 'ai' as const,
              content: getPersonalizedWelcomeMessage(userPersonalization, userName),
              timestamp: new Date()
            };
          }
          
          setConversation([initialMessage]);
        }
      }
    } catch (error) {
      console.error('Error loading user data:', error);
    }
  };

  useEffect(() => {
    if (!user && !loading) {
      router.push('/');
      return;
    }

    const loadUserDataEffect = async () => {
      if (user) {
        console.log('🚀 Loading user data for:', user.uid);
        try {
          // Load user personalization
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            if (userData.hasCompletedOnboarding) {
              setUserPersonalization(userData as UserPersonalization);
              setHasCompletedOnboarding(true);
              // Load the rest of the data
              await loadUserData();
            } else {
              // User hasn't completed onboarding, show it
              setShowOnboarding(true);
              return; // Don't load other data until onboarding is complete
            }
          } else {
            // New user, show onboarding
            setShowOnboarding(true);
            return; // Don't load other data until onboarding is complete
          }
        } catch (error) {
          console.error('Error loading user data:', error);
        }
      }
    };

    loadUserDataEffect();
  }, [user, loading, router]);

  const handleProgramCreated = (programId: string) => {
    setShowProgramCreator(false);
    router.push(`/programs/${programId}`);
  };

  const handleUserResponse = async (message: string) => {
    if (!message.trim() || !user) return;
    
    // Immediately add user message to conversation for instant feedback
    const userMessage = {
      type: 'user' as const,
      content: message.trim(),
      timestamp: new Date()
    };
    setConversation(prev => [...prev, userMessage]);
    
    setAiMessage(''); // Clear input
    
    // Start generating AI response
    setIsGenerating(true);
    
    try {
      // Call the chat API with userId for persistent storage
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message.trim(),
          context: currentGoalType || 'general',
          userId: user.uid,
          history: conversation, // Pass for context
          personalization: userPersonalization // Pass personalization for AI tone
        })
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }

      // Reload chat history to get the latest messages from persistent storage
      const chatResponse = await fetch(`/api/chat/history?userId=${user.uid}`);
      if (chatResponse.ok) {
        const chatData = await chatResponse.json();
        setConversation(chatData.messages);
      }
      
      // Check if AI is ready to generate a program (look for the [READY_TO_GENERATE] tag)
      if (data.response.includes('[READY_TO_GENERATE]')) {
        setTimeout(() => {
          // Add the generate button message
          const generateButtonMessage = {
            type: 'ai' as const,
            content: "Perfect! I have all the information needed to create your personalized program. Would you like me to generate it now?",
            timestamp: new Date(),
            metadata: {
              showGenerateButton: true
            }
          };
          
          setConversation(prev => [...prev, generateButtonMessage]);
        }, 1000);
      }
      
      setIsGenerating(false);
      
    } catch (error) {
      console.error('Error calling chat API:', error);
      setConversation(prev => [...prev, {
        type: 'ai',
        content: 'Sorry, I encountered an error connecting to the AI service. Please try again in a moment.',
        timestamp: new Date()
      }]);
      setIsGenerating(false);
    }
  };

  // Handle AI response evaluation
  const handleEvaluateResponse = async (messageIndex: number, isPositive: boolean) => {
    try {
      // Update the message with evaluation
      setConversation(prev => prev.map((msg, idx) => 
        idx === messageIndex 
          ? { ...msg, metadata: { ...msg.metadata, evaluation: isPositive ? 'positive' : 'negative' } }
          : msg
      ));

      // Log the evaluation for analytics
      await fetch('/api/evaluate-response', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user?.uid,
          messageIndex,
          evaluation: isPositive ? 'positive' : 'negative',
          messageContent: conversation[messageIndex]?.content
        })
      });
    } catch (error) {
      console.error('Error evaluating response:', error);
    }
  };

  const handleActivitySelect = (activity: typeof ACTIVITY_TEMPLATES[0]) => {
    // Add activity selection to conversation
    setConversation(prev => [...prev, 
      { type: 'user', content: `I want to start ${activity.title.toLowerCase()}`, timestamp: new Date() },
      { type: 'ai', content: activity.initialPrompt, timestamp: new Date() }
    ]);
    setCurrentGoalType(activity.type as GoalType);
    setCurrentQuestionIndex(1);

    // Scroll to the chat section for immediate interaction
    setTimeout(() => {
      const chatSection = document.getElementById('ai-chat');
      if (chatSection) {
        chatSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
      // Focus on the textarea for immediate typing
      const textarea = document.querySelector('textarea[placeholder*="Ask me anything"]') as HTMLTextAreaElement;
      if (textarea) {
        textarea.focus();
      }
    }, 100);
  };

  const handleOnboardingComplete = (personalization: UserPersonalization) => {
    setUserPersonalization(personalization);
    setHasCompletedOnboarding(true);
    setShowOnboarding(false);
    
    // Reload the page data now that onboarding is complete
    if (user) {
      loadUserData();
    }
  };

  if (loading) {
    return (
      <LayoutClientWrapper>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-gray-600">Loading your dashboard...</div>
        </div>
      </LayoutClientWrapper>
    );
  }

  if (!user) {
    router.push('/');
    return null;
  }

  // Show onboarding if user hasn't completed it
  if (showOnboarding) {
    return (
      <LayoutClientWrapper>
        <CinematicOnboarding onComplete={handleOnboardingComplete} />
      </LayoutClientWrapper>
    );
  }

  const userName = user.displayName || user.email?.split('@')[0] || 'there';
  const heroMessage = getPersonalizedHeroMessage(userPersonalization);

  return (
    <LayoutClientWrapper>
      <div className="min-h-screen bg-white">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="flex flex-col max-w-[960px] flex-1">
            {/* Hero Section */}
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url(${HERO_BG})`
                  }}
                >
                  <div className="flex flex-col gap-2 text-left">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
                      Welcome back, {userName}
                    </h1>
                    <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base">
                      {heroMessage}
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Chat Section */}
            <div id="ai-chat" className="mt-8">
              <h2 className="text-[#111318] text-[22px] font-bold leading-tight tracking-[-0.015em] mb-4">
                AI Training Assistant
              </h2>
              <div className="bg-white rounded-xl border border-[#eee] overflow-hidden">
                <div 
                  ref={chatContainerRef}
                  className="h-[400px] overflow-y-auto p-6 flex flex-col gap-4"
                >
                  {conversation.map((message, index) => {
                    // Safely handle timestamp - it might be a Date, Firestore Timestamp, string, or undefined
                    let timestampKey;
                    try {
                      if (message.timestamp && typeof message.timestamp === 'object' && 'getTime' in message.timestamp) {
                        timestampKey = message.timestamp.getTime();
                      } else if (message.timestamp && typeof message.timestamp === 'object' && 'toDate' in message.timestamp) {
                        // Firestore Timestamp
                        timestampKey = (message.timestamp as any).toDate().getTime();
                      } else if (message.timestamp) {
                        // String timestamp
                        timestampKey = new Date(message.timestamp).getTime();
                      } else {
                        timestampKey = Date.now() + index;
                      }
                    } catch (error) {
                      timestampKey = Date.now() + index;
                    }

                    return (
                    <div
                      key={`${timestampKey}-${index}`}
                      className={`flex gap-2 ${
                        message.type === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      {message.type === 'ai' && (
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center">
                          <Send size={14} />
                        </div>
                      )}
                      <div className="flex flex-col gap-2">
                        <div
                          className={`rounded-xl p-4 max-w-[80%] ${
                            message.type === 'user'
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 text-gray-900'
                          }`}
                        >
                          <p className="whitespace-pre-wrap">{message.content}</p>
                          {message.metadata?.showGenerateButton && (
                            <button
                              onClick={async () => {
                                try {
                                  setIsGenerating(true);
                                  setConversation(prev => [...prev, {
                                    type: 'ai',
                                    content: 'Perfect! I\'m now generating your personalized training program based on our conversation. This may take a moment...',
                                    timestamp: new Date()
                                  }]);

                                  // Call the generate-plan API with the conversation history
                                  const response = await fetch('/api/generate-plan', {
                                    method: 'POST',
                                    headers: {
                                      'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify({
                                      conversation: conversation,
                                      personalization: userPersonalization
                                    })
                                  });

                                  if (!response.ok) {
                                    throw new Error(`API Error: ${response.status}`);
                                  }

                                  const data = await response.json();
                                  
                                  if (data.error) {
                                    throw new Error(data.error);
                                  }

                                  // Success! The program was generated
                                  setConversation(prev => [...prev, {
                                    type: 'ai',
                                    content: `Excellent! I've created your personalized "${data.program.name}" training program. It includes detailed workouts for ${data.program.weeks?.[0]?.workouts?.length || 7} days with specific exercises, sets, reps, and progression guidelines tailored to your goals and fitness level.

Your program is now being saved and you'll be redirected to view the full details in a moment!`,
                                    timestamp: new Date()
                                  }]);

                                  // Store the program and redirect
                                  setTimeout(() => {
                                    // Here you would typically save to your database and redirect
                                    // For now, let's just show the program creator as a fallback
                                    setShowProgramCreator(true);
                                  }, 2000);

                                } catch (error) {
                                  console.error('Error generating program:', error);
                                  setConversation(prev => [...prev, {
                                    type: 'ai',
                                    content: 'Sorry, I encountered an error while generating your program. Please try again or use the manual program creator as an alternative.',
                                    timestamp: new Date()
                                  }]);
                                } finally {
                                  setIsGenerating(false);
                                }
                              }}
                              className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
                            >
                              Generate My Program
                            </button>
                          )}
                        </div>
                        
                        {/* AI Response Evaluation - Only show for AI messages without special buttons and not already evaluated */}
                        {message.type === 'ai' && 
                         !message.metadata?.showGenerateButton && 
                         !message.metadata?.evaluation && (
                          <div className="flex items-center gap-2 ml-8">
                            <span className="text-xs text-gray-500">Was this helpful?</span>
                            <button
                              onClick={() => handleEvaluateResponse(index, true)}
                              className="p-1 rounded-full transition-colors text-gray-400 hover:text-green-600 hover:bg-green-50"
                              title="Thumbs up"
                            >
                              <ThumbsUp size={14} />
                            </button>
                            <button
                              onClick={() => handleEvaluateResponse(index, false)}
                              className="p-1 rounded-full transition-colors text-gray-400 hover:text-red-600 hover:bg-red-50"
                              title="Thumbs down"
                            >
                              <ThumbsDown size={14} />
                            </button>
                          </div>
                        )}
                        
                        {/* Show evaluation result if already evaluated */}
                        {message.type === 'ai' && 
                         message.metadata?.evaluation && (
                          <div className="flex items-center gap-2 ml-8">
                            <span className="text-xs text-gray-500">
                              {message.metadata.evaluation === 'positive' ? 'Marked as helpful' : 'Feedback received'}
                            </span>
                            <div className={`p-1 rounded-full ${
                              message.metadata.evaluation === 'positive'
                                ? 'bg-green-100 text-green-600'
                                : 'bg-red-100 text-red-600'
                            }`}>
                              {message.metadata.evaluation === 'positive' ? 
                                <ThumbsUp size={14} /> : 
                                <ThumbsDown size={14} />
                              }
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    );
                  })}
                  {isGenerating && (
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <div className="w-5 h-5 rounded-full border-2 border-t-blue-600 animate-spin" />
                      Generating response...
                    </div>
                  )}
                </div>
                <div className="border-t border-[#eee] p-4 flex gap-2">
                  <textarea
                    value={aiMessage}
                    onChange={(e) => setAiMessage(e.target.value)}
                    placeholder="Ask me anything about your fitness journey..."
                    className="flex-1 resize-none rounded-xl bg-white border border-[#dbdfe6] p-4 focus:outline-none focus:border-blue-600 min-h-[100px] text-[#111418] placeholder:text-[#637088]"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleUserResponse(aiMessage.trim());
                      }
                    }}
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleUserResponse(aiMessage.trim());
                    }}
                    disabled={!aiMessage.trim() || isGenerating}
                    className="flex-shrink-0 bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Activity Templates Section */}
            <div className="mt-8">
              <h2 className="text-[#111318] text-[22px] font-bold leading-tight tracking-[-0.015em] mb-6">
                Training Templates
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ACTIVITY_TEMPLATES.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => handleActivitySelect(template)}
                    className={`${template.color} border ${template.borderColor} rounded-xl p-6 text-left transition-all hover:scale-[1.02] hover:shadow-lg`}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`${template.iconColor} p-2 rounded-lg bg-white/50`}>
                        <template.icon size={24} />
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-xs text-gray-600 mb-1">
                          <Target size={12} />
                          {template.experienceLevel}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-600">
                          <Calendar size={12} />
                          {template.duration}
                        </div>
                      </div>
                    </div>

                    {/* Title and Description */}
                    <h3 className="font-bold text-gray-900 text-lg mb-2">
                      {template.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {template.description} • {template.frequency}
                    </p>

                    {/* Sample Workout */}
                    <div className="bg-white/60 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Target size={14} className="text-gray-500" />
                        <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                          {template.sampleWorkout}
                        </span>
                      </div>
                      <div className="space-y-1">
                        {template.workoutDetails.slice(0, 2).map((detail, index) => (
                          <div key={index} className="text-xs text-gray-600">
                            {detail}
                          </div>
                        ))}
                        {template.workoutDetails.length > 2 && (
                          <div className="text-xs text-gray-500">
                            +{template.workoutDetails.length - 2} more exercises
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Existing Programs */}
            {programs.length > 0 && (
              <div className="flex flex-col gap-3 p-4 mt-8">
                <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">
                  Your Programs
                </h2>
                <div className="grid grid-cols-1 gap-3 @container">
                  {programs.map((program) => (
                    <ProgramCard key={program.id} program={program} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {showProgramCreator && (
            <ProgramCreator
              onClose={() => setShowProgramCreator(false)}
              onSuccess={handleProgramCreated}
              initialType={currentGoalType}
            />
          )}
        </div>
      </div>
    </LayoutClientWrapper>
  );
}
