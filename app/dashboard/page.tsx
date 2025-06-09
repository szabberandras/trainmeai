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
  ThumbsDown,
  Sparkles,
  Mountain,
  Users,
  Waves,
  Plus,
  ArrowRight,
  CheckCircle,
  Clock,
  Download
} from 'lucide-react';

import ProgramCard from '@/app/components/programs/ProgramCard';
import ProgramCreator from '@/app/components/programs/ProgramCreator';
import CinematicOnboarding, { UserPersonalization } from '@/app/components/onboarding/CinematicOnboarding';
import ProgressInsights from '@/app/components/dashboard/ProgressInsights';
import ProgramCreationModal from '@/app/components/programs/ProgramCreationModal';
import WeeklyPlanExport from '@/app/components/export/WeeklyPlanExport';
import { ProgramService } from '@/lib/services/program.service';
import { TrainingProgram, ProgramTemplate } from '@/lib/types/program';
import { AiMessage, GoalType } from '@/types';

// Dynamic hero backgrounds based on training discipline
const HERO_BACKGROUNDS = {
  'cardio-endurance': {
    image: "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Hero%2Frisen-wang-20jX9b35r_M-unsplash.jpg?alt=media&token=c94ff3e1-7dbd-49b9-82a2-37d6decfd7f4",
    gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.8) 0%, rgba(16, 185, 129, 0.8) 50%, rgba(6, 182, 212, 0.8) 100%)',
    title: 'Build Your Endurance',
    subtitle: 'Every step forward is progress'
  },
  'strength-power': {
    image: "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Hero%2Fsamuel-girven-VJ2s0c20qCo-unsplash.jpg?alt=media&token=0b51bc15-a0e1-4421-b43d-5102202208b7",
    gradient: 'linear-gradient(135deg, rgba(239, 68, 68, 0.8) 0%, rgba(245, 101, 101, 0.8) 50%, rgba(251, 146, 60, 0.8) 100%)',
    title: 'Build Your Strength',
    subtitle: 'Strength is built one rep at a time'
  },
  'mind-body': {
    image: "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Hero%2Fthe-nix-company-biX8sBfNcPc-unsplash.jpg?alt=media&token=21cdc6cb-d8e9-4e8f-9d97-238b0d798427",
    gradient: 'linear-gradient(135deg, rgba(34, 197, 94, 0.8) 0%, rgba(101, 163, 13, 0.8) 50%, rgba(132, 204, 22, 0.8) 100%)',
    title: 'Find Your Balance',
    subtitle: 'Mind and body in harmony'
  },
  'team-sports': {
    image: "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Hero%2Falgi-vmdJ6n8PIa8-unsplash.jpg?alt=media&token=62b61f06-50d6-404e-a457-87e16d567dfa",
    gradient: 'linear-gradient(135deg, rgba(168, 85, 247, 0.8) 0%, rgba(139, 92, 246, 0.8) 50%, rgba(124, 58, 237, 0.8) 100%)',
    title: 'Train Like a Champion',
    subtitle: 'Excellence is a team effort'
  },
  'outdoor-adventure': {
    image: "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Hero%2Fbradley-dunn-fjpl1yrNvNQ-unsplash.jpg?alt=media&token=d8a1d533-4afe-4703-b0cb-310353c70f6f",
    gradient: 'linear-gradient(135deg, rgba(20, 184, 166, 0.8) 0%, rgba(5, 150, 105, 0.8) 50%, rgba(16, 185, 129, 0.8) 100%)',
    title: 'Embrace Adventure',
    subtitle: 'Nature is your playground'
  },
  'combat-sports': {
    image: "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Hero%2Fcarl-barcelo-nqUHQkuVj3c-unsplash.jpg?alt=media&token=748ecbe7-224f-4aa8-ae97-bcaa0d4dc0c2",
    gradient: 'linear-gradient(135deg, rgba(220, 38, 127, 0.8) 0%, rgba(190, 24, 93, 0.8) 50%, rgba(157, 23, 77, 0.8) 100%)',
    title: 'Master Your Discipline',
    subtitle: 'Precision through practice'
  },
  'dance-movement': {
    image: "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Hero%2Fthe-nix-company-biX8sBfNcPc-unsplash.jpg?alt=media&token=21cdc6cb-d8e9-4e8f-9d97-238b0d798427",
    gradient: 'linear-gradient(135deg, rgba(236, 72, 153, 0.8) 0%, rgba(219, 39, 119, 0.8) 50%, rgba(190, 24, 93, 0.8) 100%)',
    title: 'Express Through Movement',
    subtitle: 'Every movement tells a story'
  },
  'precision-skill': {
    image: "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Hero%2Falgi-vmdJ6n8PIa8-unsplash.jpg?alt=media&token=62b61f06-50d6-404e-a457-87e16d567dfa",
    gradient: 'linear-gradient(135deg, rgba(99, 102, 241, 0.8) 0%, rgba(79, 70, 229, 0.8) 50%, rgba(67, 56, 202, 0.8) 100%)',
    title: 'Perfect Your Precision',
    subtitle: 'Excellence in every detail'
  },
  'general-fitness': {
    image: "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Hero%2Falgi-vmdJ6n8PIa8-unsplash.jpg?alt=media&token=62b61f06-50d6-404e-a457-87e16d567dfa",
    gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.8) 0%, rgba(147, 51, 234, 0.8) 50%, rgba(236, 72, 153, 0.8) 100%)',
    title: 'Your Fitness Journey',
    subtitle: 'Every day is a new opportunity'
  }
};

// Default hero for users without specific discipline
const DEFAULT_HERO = HERO_BACKGROUNDS['general-fitness'];

// Past training plans images from JavaScript version
const PAST_PLAN_IMAGES = {
  "Yoga for Beginners": "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Hero%2Fthe-nix-company-biX8sBfNcPc-unsplash.jpg?alt=media&token=21cdc6cb-d8e9-4e8f-9d97-238b0d798427",
  "Cardio Blast": "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Hero%2Frisen-wang-20jX9b35r_M-unsplash.jpg?alt=media&token=c94ff3e1-7dbd-49b9-82a2-37d6decfd7f4",
  "Strength Foundations": "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Hero%2Fsamuel-girven-VJ2s0c20qCo-unsplash.jpg?alt=media&token=0b51bc15-a0e1-4421-b43d-5102202208b7",
  "Endurance Build": "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Hero%2Fbradley-dunn-fjpl1yrNvNQ-unsplash.jpg?alt=media&token=d8a1d533-4afe-4703-b0cb-310353c70f6f",
  "Recovery & Mobility": "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Hero%2Fcarl-barcelo-nqUHQkuVj3c-unsplash.jpg?alt=media&token=748ecbe7-224f-4aa8-ae97-bcaa0d4dc0c2",
};

const PAST_PLAN_ITEMS = [
  { title: "Yoga for Beginners", imageKey: "Yoga for Beginners" },
  { title: "Cardio Blast", imageKey: "Cardio Blast" },
  { title: "Strength Foundations", imageKey: "Strength Foundations" },
  { title: "Endurance Build", imageKey: "Endurance Build" },
  { title: "Recovery & Mobility", imageKey: "Recovery & Mobility" },
];

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

// Function to get dynamic hero based on user's primary activity
// Function to get dynamic hero based on user's primary activity
const getDynamicHero = (personalization: UserPersonalization | null) => {
  if (!personalization?.onboardingAnswers?.activity) {
    return DEFAULT_HERO;
  }

  const activity = personalization.onboardingAnswers.activity;
  return HERO_BACKGROUNDS[activity as keyof typeof HERO_BACKGROUNDS] || DEFAULT_HERO;
};

// Personalized AI messages based on onboarding
const getPersonalizedWelcomeMessage = (personalization: UserPersonalization | null, userName: string) => {
  if (!personalization || !personalization.motivation || !personalization.aiTone) {
    return `Hi! I'm your AI fitness coach. Let's create your personalized fitness program together.`;
  }

  const tone = personalization.aiTone;
  const motivation = personalization.motivation;
  
  const toneMessages = {
    supportive: `I'm here to support you every step of the way on your fitness journey. Together, we'll create something amazing that fits perfectly with your ${motivation} goals.`,
    playful: `Hey there, fitness adventurer! 🎯 Ready to have some fun while crushing your ${motivation} goals? Let's make this journey exciting!`,
    direct: `Let's get straight to it - you're here for ${motivation}, and I'm here to help you achieve it efficiently. What's your priority today?`,
    minimal: `Ready to work on ${motivation}? Let's build your program.`,
    reflective: `Your journey toward ${motivation} is deeply personal. I'm here to help you discover what truly works for your unique path.`
  };

  return toneMessages[tone] || toneMessages.supportive;
};

const getPersonalizedHeroMessage = (personalization: UserPersonalization | null) => {
  if (!personalization?.onboardingAnswers) {
    return "Ready to start your fitness journey? Let's create something amazing together.";
  }

  const answers = personalization.onboardingAnswers;
  const activity = answers.activity;
  const goal = answers.goal;
  const timeCommitment = answers.timeCommitment;
  
  // Create personalized message based on their choices
  const activityMessages = {
    'cardio-endurance': 'Your cardiovascular journey awaits',
    'strength-power': 'Time to build that strength you\'ve been dreaming of',
    'mind-body': 'Find your center and embrace the flow',
    'team-sports': 'Train like the champion you are',
    'outdoor-adventure': 'Adventure is calling - are you ready?',
    'combat-sports': 'Discipline, focus, and power await',
    'dance-movement': 'Express yourself through movement',
    'precision-skill': 'Perfect your craft with focused training'
  };

  const baseMessage = activityMessages[activity as keyof typeof activityMessages] || 'Your fitness journey starts here';
  
  if (timeCommitment && parseInt(timeCommitment) <= 30) {
    return `${baseMessage} - even ${timeCommitment} minutes can transform your day`;
  }
  
  return `${baseMessage} - let's make every session count`;
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
  const [conversation, setConversation] = useState<AiMessage[]>([
    {
      type: 'ai',
      content: `Welcome back! I'm your AI fitness coach. 

I'm here to help you with your training programs. What would you like to work on today?

You can:
- Create a new training program
- Continue working on an existing program  
- Get advice on your current workouts
- Ask any fitness-related questions

What's on your mind?`,
      timestamp: new Date(),
      metadata: {
        isInitialWelcome: true
      }
    }
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentGoalType, setCurrentGoalType] = useState<GoalType | null>(null);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);
  const [showProgramCreationModal, setShowProgramCreationModal] = useState(false);
  const [showExport, setShowExport] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll chat to bottom when new messages are added
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [conversation, isGenerating]);

  // Initialize conversation if empty and user is loaded
  useEffect(() => {
    if (user && hasCompletedOnboarding && conversation.length === 0) {
      const userName = user.displayName || user.email?.split('@')[0] || 'there';
      let initialMessage;
      
      if (userPersonalization && userPersonalization.onboardingAnswers) {
        const { onboardingAnswers } = userPersonalization;
        const { activity, goal, timeCommitment, daysPerWeek, fitnessLevel, equipment } = onboardingAnswers;
        
        const personalizedWelcome = `Hello ${userName}! 👋 I'm your AI fitness coach, and I'm excited to work with you on your ${goal} journey.

Based on your profile, I see you're focused on ${activity} at a ${fitnessLevel} level, with ${timeCommitment} minutes available ${daysPerWeek}. ${equipment && equipment.length > 0 ? `I also have your equipment preferences: ${equipment.join(', ')}.` : 'I know you prefer bodyweight exercises.'}

What would you like to work on today? I can help you:
• Create a personalized training plan
• Adjust your current routine
• Answer specific fitness questions
• Plan your weekly schedule

What sounds most helpful right now?`;

        initialMessage = {
          type: 'ai' as const,
          content: personalizedWelcome,
          timestamp: new Date(),
          metadata: {
            isPersonalizedWelcome: true
          }
        };
      } else {
        const genericWelcome = `Hello ${userName}! 👋 I'm your AI fitness coach, and I'm here to help you achieve your fitness goals.

I can assist you with:
• Creating personalized training plans
• Answering fitness and nutrition questions  
• Helping you stay motivated and on track
• Adjusting workouts based on your progress

What would you like to work on today? Feel free to tell me about your fitness goals, current activity level, or any specific questions you have!`;

        initialMessage = {
          type: 'ai' as const,
          content: genericWelcome,
          timestamp: new Date(),
          metadata: {
            isPersonalizedWelcome: false
          }
        };
      }
      
      setConversation([initialMessage]);
    }
  }, [user, hasCompletedOnboarding, userPersonalization, conversation.length]);

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
        // Set initial welcome message if no conversation exists
        console.log('💬 No existing conversation, creating welcome message');
        const userName = user.displayName || user.email?.split('@')[0] || 'there';
        let initialMessage;
        
        if (userPersonalization && userPersonalization.onboardingAnswers) {
          // Create a highly personalized welcome message based on onboarding data
          const { onboardingAnswers, aiTone } = userPersonalization;
          const { activity, goal, timeCommitment, daysPerWeek, fitnessLevel, equipment } = onboardingAnswers;
          
          const personalizedWelcome = `Welcome back, ${userName}! 👋 I'm your AI fitness coach.

I see you're focused on ${goal} with ${activity} training at a ${fitnessLevel} level. You have ${timeCommitment} minutes available ${daysPerWeek} days per week. ${equipment && equipment.length > 0 ? `I also have your equipment preferences: ${equipment.join(', ')}.` : 'I know you prefer bodyweight exercises.'}

I'm here to help you with your training programs. What would you like to work on today?

You can:
- Create a new training program
- Continue working on an existing program  
- Get advice on your current workouts
- Ask any fitness-related questions

What's on your mind?`;

          initialMessage = {
            type: 'ai' as const,
            content: personalizedWelcome,
            timestamp: new Date(),
            metadata: {
              isPersonalizedWelcome: true,
              isInitialWelcome: true
            }
          };
        } else {
          // Welcome message for users without complete onboarding
          const genericWelcome = `Welcome back! I'm your AI fitness coach. 

I'm here to help you with your training programs. What would you like to work on today?

You can:
- Create a new training program
- Continue working on an existing program  
- Get advice on your current workouts
- Ask any fitness-related questions

What's on your mind?`;

          initialMessage = {
            type: 'ai' as const,
            content: genericWelcome,
            timestamp: new Date(),
            metadata: {
              isPersonalizedWelcome: false,
              isInitialWelcome: true
            }
          };
        }
        
        setConversation([initialMessage]);
        console.log('✅ Initial welcome message set');
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

    // Prevent multiple executions if onboarding is already being shown
    if (showOnboarding) {
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
            console.log('📋 User data found:', {
              hasCompletedOnboarding: userData.hasCompletedOnboarding,
              hasOnboardingAnswers: !!userData.onboardingAnswers,
              userCreatedAt: userData.createdAt
            });
            
            // Check if user has completed onboarding - use a more lenient approach
            // Only force onboarding if explicitly marked as incomplete or missing critical data
            const hasBasicOnboarding = userData.hasCompletedOnboarding === true;
            
            if (hasBasicOnboarding) {
              console.log('✅ User has completed onboarding, loading dashboard');
              setUserPersonalization(userData as UserPersonalization);
              setHasCompletedOnboarding(true);
              setShowOnboarding(false);
              // Load the rest of the data
              await loadUserData();
            } else if (userData.hasCompletedOnboarding === false) {
              // Only show onboarding if explicitly marked as incomplete
              console.log('⚠️ User has explicitly incomplete onboarding, showing onboarding');
              setShowOnboarding(true);
              setHasCompletedOnboarding(false);
              return; // Don't load other data until onboarding is complete
            } else {
              // User data exists but onboarding status is unclear - allow dashboard access
              // This prevents the automatic onboarding trigger for existing users
              console.log('📋 User data exists, allowing dashboard access without forcing onboarding');
              setUserPersonalization(userData as UserPersonalization);
              setHasCompletedOnboarding(true);
              setShowOnboarding(false);
              await loadUserData();
            }
          } else {
            // New user, show onboarding
            console.log('🆕 New user detected, showing onboarding');
            setShowOnboarding(true);
            setHasCompletedOnboarding(false);
            return; // Don't load other data until onboarding is complete
          }
        } catch (error) {
          console.error('❌ Error loading user data:', error);
          // On error, default to showing onboarding to be safe
          setShowOnboarding(true);
          setHasCompletedOnboarding(false);
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

  const handleCreateDynamicProgram = (programData: any) => {
    console.log('Creating dynamic program:', programData);
    // TODO: Integrate with DynamicTrainingService
    setShowProgramCreationModal(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-gray-600">Loading your dashboard...</div>
      </div>
    );
  }

  if (!user) {
    router.push('/');
    return null;
  }

  // Show onboarding if user hasn't completed it
  if (showOnboarding) {
    return (
      <CinematicOnboarding onComplete={handleOnboardingComplete} />
    );
  }

  const userName = user.displayName || user.email?.split('@')[0] || 'there';
  const heroMessage = getPersonalizedHeroMessage(userPersonalization);
  const dynamicHero = getDynamicHero(userPersonalization);

  return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="flex flex-col max-w-[960px] flex-1">
            {/* Dynamic Hero Section */}
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="relative flex min-h-[500px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 rounded-3xl items-start justify-end px-6 pb-12 @[480px]:px-12 overflow-hidden shadow-2xl"
                  style={{
                    backgroundImage: `url(${dynamicHero.image})`
                  }}
                >
                  {/* Improved overlay for better text visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col gap-4 text-left max-w-4xl">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/50 shadow-lg">
                        <Sparkles className="text-gray-700" size={20} />
                      </div>
                      <div className="text-white text-sm font-medium tracking-wide">
                        {dynamicHero.subtitle}
                      </div>
                    </div>
                    
                    <h1 className="text-white text-4xl font-light leading-tight tracking-tight @[480px]:text-6xl mb-2" 
                        style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                      {dynamicHero.title}
                    </h1>
                    
                    <h2 className="text-white text-lg font-light leading-relaxed @[480px]:text-xl max-w-3xl">
                      Welcome back, {userName}. {heroMessage}
                    </h2>
                    
                    {/* Daily Focus Card */}
                    <div className="mt-6 bg-white/95 backdrop-blur-xl border border-white/50 rounded-2xl p-4 max-w-md shadow-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <Target className="text-gray-600" size={16} />
                        <span className="text-gray-700 text-sm font-medium">Today's Focus</span>
                      </div>
                      <div className="text-gray-800 text-sm mb-3">
                        {userPersonalization?.onboardingAnswers?.activity === 'cardio-endurance' ? 
                          'Endurance base building - steady pace run' :
                        userPersonalization?.onboardingAnswers?.activity === 'strength-power' ?
                          'Upper body strength - compound movements' :
                        userPersonalization?.onboardingAnswers?.activity === 'mind-body' ?
                          'Flexibility and mindfulness practice' :
                          'Full body movement and mobility'
                        }
                      </div>
                      
                      {/* CTA Buttons */}
                      <div className="flex gap-2">
                        <button
                          onClick={() => router.push('/training-plans')}
                          className="flex items-center gap-2 bg-gray-900 text-white px-3 py-2 rounded-xl text-xs font-medium hover:bg-gray-800 transition-colors"
                        >
                          <CheckCircle size={14} />
                          Log Activity
                        </button>
                        <button
                          onClick={() => router.push('/training-plans')}
                          className="flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-2 rounded-xl text-xs font-medium hover:bg-gray-200 transition-colors"
                        >
                          <Clock size={14} />
                          Review Today
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Active Program Progress */}
            <div className="mt-8">
              <h2 className="text-gray-900 text-[22px] font-light leading-tight tracking-wide mb-6">
                Your Progress
              </h2>
              {userPersonalization?.onboardingAnswers && programs.length > 0 ? (
                <div className="bg-white/95 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-2xl flex items-center justify-center">
                        <Trophy className="text-blue-600" size={20} />
                      </div>
                      <div>
                        <h3 className="text-gray-900 font-medium">
                          {userPersonalization.onboardingAnswers.activity === 'cardio-endurance' ? 'Marathon Training Program' :
                           userPersonalization.onboardingAnswers.activity === 'strength-power' ? 'Strength Building Program' :
                           userPersonalization.onboardingAnswers.activity === 'mind-body' ? 'Mindfulness & Flexibility Program' :
                           'General Fitness Program'}
                        </h3>
                        <p className="text-gray-500 text-sm">8-week program • Week 3 of 8</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-light text-gray-900">37%</div>
                      <div className="text-xs text-gray-500">Complete</div>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500" style={{ width: '37%' }}></div>
                  </div>
                  
                  {/* Weekly Stats */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-medium text-gray-900">12</div>
                      <div className="text-xs text-gray-500">Workouts Done</div>
                    </div>
                    <div>
                      <div className="text-lg font-medium text-gray-900">5</div>
                      <div className="text-xs text-gray-500">This Week</div>
                    </div>
                    <div>
                      <div className="text-lg font-medium text-gray-900">3</div>
                      <div className="text-xs text-gray-500">Streak Days</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white/95 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 shadow-lg text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="text-gray-400" size={24} />
                  </div>
                  <h3 className="text-gray-900 font-medium mb-2">No Active Programs Yet</h3>
                  <p className="text-gray-500 text-sm mb-4 max-w-md mx-auto">
                    Start a conversation with your AI coach below to create your first personalized training program.
                  </p>
                  <button
                    onClick={() => document.getElementById('ai-chat')?.scrollIntoView({ behavior: 'smooth' })}
                    className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors mx-auto"
                  >
                    <Sparkles size={16} />
                    Chat with AI Coach
                  </button>
                </div>
              )}
            </div>

            {/* AI Chat Section */}
            <div id="ai-chat" className="mt-8">
              <h2 className="text-gray-900 text-[22px] font-light leading-tight tracking-wide mb-6">
                AI Training Assistant
              </h2>
              <div className="bg-white/95 backdrop-blur-xl border border-gray-200 rounded-3xl overflow-hidden shadow-lg">
                <div 
                  ref={chatContainerRef}
                  className="h-[400px] overflow-y-auto p-6 flex flex-col gap-4"
                >
                  {conversation.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-center">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <Sparkles className="text-gray-400" size={24} />
                      </div>
                      <h3 className="text-gray-900 font-medium mb-2">Welcome to your AI Coach!</h3>
                      <p className="text-gray-500 text-sm max-w-md">
                        I&apos;m here to help you with personalized training plans, workout advice, and fitness guidance. 
                        Start by asking me anything about your fitness journey!
                      </p>
                    </div>
                  ) : (
                    conversation.map((message, index) => {
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
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 border border-gray-200 text-gray-600 flex items-center justify-center shadow-sm">
                          <Sparkles size={16} />
                        </div>
                      )}
                      <div className="flex flex-col gap-2">
                        <div
                          className={`rounded-2xl p-4 max-w-[80%] border shadow-sm ${
                            message.type === 'user'
                              ? 'bg-gray-900 text-white border-gray-800'
                              : 'bg-gray-50 text-gray-900 border-gray-200'
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
                                    content: 'Perfect! I&apos;m now generating your personalized training program based on our conversation. This may take a moment...',
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
                              className="mt-3 bg-gray-900 border border-gray-800 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-gray-800 transition-all duration-300 shadow-sm"
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
                              className="p-2 rounded-full bg-gray-100 border border-gray-200 hover:bg-green-50 hover:border-green-200 transition-all duration-300"
                              title="Thumbs up"
                            >
                              <ThumbsUp size={14} className="text-gray-500 hover:text-green-600" />
                            </button>
                            <button
                              onClick={() => handleEvaluateResponse(index, false)}
                              className="p-2 rounded-full bg-gray-100 border border-gray-200 hover:bg-red-50 hover:border-red-200 transition-all duration-300"
                              title="Thumbs down"
                            >
                              <ThumbsDown size={14} className="text-gray-500 hover:text-red-600" />
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
                            <div className={`p-2 rounded-full border ${
                              message.metadata.evaluation === 'positive'
                                ? 'bg-green-50 border-green-200 text-green-600'
                                : 'bg-red-50 border-red-200 text-red-600'
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
                  }))}
                  {isGenerating && (
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <div className="w-5 h-5 rounded-full border-2 border-t-gray-900 border-gray-200 animate-spin" />
                      Generating response...
                    </div>
                  )}
                </div>
                <div className="border-t border-gray-200 p-4 flex gap-2">
                  <textarea
                    value={aiMessage}
                    onChange={(e) => setAiMessage(e.target.value)}
                    placeholder="Ask me anything about your fitness journey..."
                    className="flex-1 resize-none rounded-2xl bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-gray-400 focus:bg-white min-h-[100px] text-gray-900 placeholder:text-gray-500"
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
                    className="flex-shrink-0 bg-gray-900 border border-gray-800 text-white rounded-full w-12 h-12 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 transition-all duration-300 shadow-sm"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Progress Insights Section */}
            {userPersonalization?.selectedPersona && (
              <div className="mt-8">
                <h2 className="text-gray-900 text-[22px] font-light leading-tight tracking-wide mb-6">
                  Your Progress Insights
                </h2>
                <div className="max-w-[600px]">
                  <ProgressInsights
                    selectedPersona={userPersonalization.selectedPersona}
                    personaSelection={userPersonalization.personaSelection}
                  />
                </div>
              </div>
            )}

            {/* Past Training Plans Carousel */}
            <div className="mt-8">
              <h2 className="text-gray-900 text-[22px] font-light leading-tight tracking-wide mb-6">
                Past Training Plans
              </h2>
              {programs.length > 0 ? (
                <div className="bg-white/95 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 shadow-lg">
                  <div className="flex gap-4 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    {PAST_PLAN_ITEMS.map((item, index) => (
                      <div key={index} className="flex-shrink-0 w-40 text-center">
                        <div className="w-full h-24 rounded-2xl overflow-hidden mb-2 border border-gray-200 shadow-sm">
                          <img 
                            src={PAST_PLAN_IMAGES[item.imageKey as keyof typeof PAST_PLAN_IMAGES]} 
                            alt={item.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-sm text-gray-700 font-medium">{item.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="bg-white/95 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 shadow-lg text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="text-gray-400" size={24} />
                  </div>
                  <h3 className="text-gray-900 font-medium mb-2">No Past Programs</h3>
                  <p className="text-gray-500 text-sm max-w-md mx-auto">
                    Your completed training programs will appear here once you finish them.
                  </p>
                </div>
              )}
            </div>

            {/* Activity Templates Section */}
            <div className="mt-8">
              <h2 className="text-gray-900 text-[22px] font-light leading-tight tracking-wide mb-6">
                Training Templates
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ACTIVITY_TEMPLATES.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => handleActivitySelect(template)}
                    className="bg-white/95 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 text-left transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-gray-300 shadow-lg"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-gray-700 p-3 rounded-2xl bg-gray-100 border border-gray-200 shadow-sm">
                        <template.icon size={24} />
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-xs text-gray-500 mb-1">
                          <Target size={12} />
                          {template.experienceLevel}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Calendar size={12} />
                          {template.duration}
                        </div>
                      </div>
                    </div>

                    {/* Title and Description */}
                    <h3 className="font-light text-gray-900 text-lg mb-2">
                      {template.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {template.description} • {template.frequency}
                    </p>

                    {/* Sample Workout */}
                    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Target size={14} className="text-gray-500" />
                        <span className="text-xs font-medium text-gray-700 uppercase tracking-wide">
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
                <h2 className="text-gray-900 text-lg font-light leading-tight tracking-wide">
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

          {showProgramCreationModal && (
            <ProgramCreationModal
              isOpen={showProgramCreationModal}
              onClose={() => setShowProgramCreationModal(false)}
              onCreateProgram={handleCreateDynamicProgram}
            />
          )}


        </div>
      </div>
  );
}
