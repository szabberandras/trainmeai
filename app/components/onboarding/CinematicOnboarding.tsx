'use client';

import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '@/lib/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { Heart, Target, Clock, MapPin, MessageCircle, ArrowLeft, ArrowRight, Sparkles, Trophy, Flame, Waves, Dumbbell, Users, Mountain } from 'lucide-react';
import { AiMessage } from '@/types';

export interface OnboardingAnswers {
  activity: string;
  subcategory?: string;
  age: string;
  gender: string;
  location?: string;
  timezone?: string;
  units: string;
  // Height fields
  heightCm?: string;
  heightFeet?: string;
  heightInches?: string;
  weight?: string;
  fitnessLevel: string;
  timeCommitment: string;
  daysPerWeek: string;
  preferredDays?: string[];
  equipment: string[];
  goal: string;
  
  // Activity-specific data
  activitySpecific?: {
    // For cardio/endurance
    currentVolume?: string;
    recentDistance?: string;
    estimatedPace?: string;
    eventGoal?: string;
    eventDate?: string;
    environment?: string;
    trainingIntensity?: string;
    
    // For strength/power
    strengthExperienceLevel?: string;
    strengthTrainingFocus?: string;
    strengthPreferredStyle?: string;
    
    // For mind-body
    mindBodyPractice?: string;
    mindBodyGoals?: string[];
    practicePreferences?: string;
    currentChallenges?: string[];
    
    // For team sports
    teamSport?: string;
    position?: string;
    seasonStatus?: string;
    teamPerformanceGoals?: string[];
    teamPractices?: string;
    
    // For outdoor/adventure
    outdoorActivity?: string;
    adventureGoals?: string[];
    typicalDuration?: string;
    supportiveTraining?: string[];
    
    // For combat sports
    combatDiscipline?: string;
    combatCompetitionGoals?: string[];
    combatTrainingFocus?: string[];
    technicalSessions?: string;
    sparringSessions?: string;
    
    // For dance/movement
    danceStyle?: string;
    dancePerformanceGoals?: string[];
    danceTrainingFocus?: string[];
    danceClasses?: string;
    
    // For precision/skill
    precisionSport?: string;
    precisionFitnessGoals?: string[];
    precisionTrainingFocus?: string[];
    practiceHours?: string;
    physicalDiscomforts?: string[];
  };
  
  // Multi-sport handling
  secondaryActivities?: Array<{
    activity: string;
    subcategory?: string;
    proficiencyLevel: string;
    weeklyVolume: string;
    primaryGoal: string;
  }>;
  integrationPreference?: string;
  crossTrainingPreference?: string;
}

export interface UserPersonalization {
  visualTheme: 'calm' | 'energetic' | 'warm' | 'gentle';
  aiTone: 'supportive' | 'playful' | 'direct' | 'minimal' | 'reflective';
  motivation: string;
  preferredDuration: string;
  trainingLocation: string;
  hasCompletedOnboarding: boolean;
  completedAt: Date;
  onboardingPath?: 'goal-focused' | 'exploratory';
  onboardingAnswers?: OnboardingAnswers;
}

interface CinematicOnboardingProps {
  onComplete: (personalization: UserPersonalization) => void;
  onSkip?: () => void;
}

// Goal-focused onboarding steps
const GOAL_FOCUSED_STEPS = [
  {
    id: 'activity',
    title: 'What brings you here today?',
    subtitle: 'Choose your primary activity to get started. You can add more later.',
    type: 'activity-selection'
  },
  {
    id: 'subcategory',
    title: 'Tell us more about your focus',
    subtitle: 'Help us understand your specific interests within this activity.',
    type: 'subcategory-selection'
  },
  {
    id: 'demographics',
    title: 'Tell us about yourself',
    subtitle: 'This helps us create a personalized experience just for you.',
    type: 'demographics'
  },
  {
    id: 'fitness-level',
    title: 'What\'s your fitness level?',
    subtitle: 'Help us set the right intensity for your training.',
    type: 'fitness-level'
  },
  {
    id: 'time-availability',
    title: 'How much time do you have?',
    subtitle: 'Choose a daily commitment that feels sustainable for your lifestyle.',
    type: 'time-availability'
  },
  {
    id: 'equipment',
    title: 'What equipment do you have access to?',
    subtitle: 'Select all that apply. Don\'t worry if you don\'t have everything.',
    type: 'equipment'
  },
  {
    id: 'goals',
    title: 'What\'s your main goal?',
    subtitle: 'Choose the goal that resonates most with you right now.',
    type: 'goals'
  },
  {
    id: 'activity-specific',
    title: 'Let\'s get specific',
    subtitle: 'A few more details to create the perfect plan for you.',
    type: 'activity-specific'
  }
];

// Activity options with comprehensive categories
const ACTIVITIES = [
  {
    id: 'cardio-endurance',
    title: 'Cardio & Endurance',
    description: 'Running, Cycling, Swimming, Triathlon, General Cardio',
    icon: '🏃‍♀️',
    gradient: 'linear-gradient(45deg, rgba(255,59,48,0.8), rgba(255,149,0,0.8))',
    heroTitle: 'Build Your Endurance',
    heroDescription: 'From 5Ks to marathons, cycling adventures to swimming laps - let\'s build your cardiovascular fitness.',
    subcategories: [
      { id: 'running', name: 'Running (Road, Trail, Track)' },
      { id: 'cycling', name: 'Cycling (Road, Mountain, Indoor)' },
      { id: 'swimming', name: 'Swimming (Pool, Open Water)' },
      { id: 'triathlon', name: 'Triathlon/Duathlon' },
      { id: 'general-cardio', name: 'General Cardio & Cross-training' }
    ]
  },
  {
    id: 'strength-power',
    title: 'Strength & Power',
    description: 'Weightlifting, Bodybuilding, Powerlifting, CrossFit, General Strength',
    icon: '🏋️‍♀️',
    gradient: 'linear-gradient(45deg, rgba(191,90,242,0.8), rgba(255,45,146,0.8))',
    heroTitle: 'Build Your Strength',
    heroDescription: 'From bodyweight basics to powerlifting prowess - transform your strength and confidence.',
    subcategories: [
      { id: 'general-strength', name: 'General Fitness & Toning' },
      { id: 'muscle-building', name: 'Muscle Building (Hypertrophy)' },
      { id: 'powerlifting', name: 'Strength & Powerlifting' },
      { id: 'crossfit', name: 'Functional Fitness/CrossFit' },
      { id: 'bodyweight', name: 'Bodyweight & Calisthenics' }
    ]
  },
  {
    id: 'mind-body',
    title: 'Mind-Body & Flexibility',
    description: 'Yoga, Pilates, Barre, Flexibility, Mindfulness',
    icon: '🧘‍♀️',
    gradient: 'linear-gradient(45deg, rgba(48,209,88,0.8), rgba(0,122,255,0.8))',
    heroTitle: 'Find Your Balance',
    heroDescription: 'Discover harmony between mind and body through mindful movement and flexibility.',
    subcategories: [
      { id: 'yoga', name: 'Yoga (Hatha, Vinyasa, Power)' },
      { id: 'pilates', name: 'Pilates (Mat, Reformer)' },
      { id: 'barre', name: 'Barre' },
      { id: 'flexibility', name: 'General Stretching & Mobility' },
      { id: 'mindfulness', name: 'Mindfulness & Meditation' }
    ]
  },
  {
    id: 'team-sports',
    title: 'Team Sports',
    description: 'Soccer, Basketball, Rugby, Hockey, Volleyball',
    icon: '⚽',
    gradient: 'linear-gradient(45deg, rgba(255,45,146,0.8), rgba(255,149,0,0.8))',
    heroTitle: 'Dominate Your Sport',
    heroDescription: 'Train like a pro for your favorite team sport and elevate your game.',
    subcategories: [
      { id: 'soccer', name: 'Football/Soccer' },
      { id: 'basketball', name: 'Basketball' },
      { id: 'rugby', name: 'Rugby' },
      { id: 'hockey', name: 'Hockey' },
      { id: 'volleyball', name: 'Volleyball' },
      { id: 'other-team', name: 'Other Team Sport' }
    ]
  },
  {
    id: 'outdoor-adventure',
    title: 'Outdoor & Adventure',
    description: 'Hiking, Climbing, Skiing, Kayaking, Surfing',
    icon: '🧗‍♀️',
    gradient: 'linear-gradient(45deg, rgba(0,122,255,0.8), rgba(48,209,88,0.8))',
    heroTitle: 'Embrace Adventure',
    heroDescription: 'Prepare for outdoor adventures and build the fitness for your next expedition.',
    subcategories: [
      { id: 'hiking', name: 'Hiking/Backpacking' },
      { id: 'climbing', name: 'Rock Climbing/Bouldering' },
      { id: 'skiing', name: 'Skiing/Snowboarding' },
      { id: 'water-sports', name: 'Kayaking/Surfing/Paddleboarding' },
      { id: 'other-outdoor', name: 'Other Outdoor Activity' }
    ]
  },
  {
    id: 'combat-sports',
    title: 'Combat Sports',
    description: 'Boxing, MMA, Martial Arts, Wrestling',
    icon: '🥊',
    gradient: 'linear-gradient(45deg, rgba(255,149,0,0.8), rgba(191,90,242,0.8))',
    heroTitle: 'Master Combat Sports',
    heroDescription: 'Build the strength, conditioning, and skills for combat sports excellence.',
    subcategories: [
      { id: 'boxing', name: 'Boxing' },
      { id: 'mma', name: 'MMA (Mixed Martial Arts)' },
      { id: 'bjj', name: 'Brazilian Jiu-Jitsu' },
      { id: 'muay-thai', name: 'Muay Thai/Kickboxing' },
      { id: 'martial-arts', name: 'Traditional Martial Arts' },
      { id: 'wrestling', name: 'Wrestling' }
    ]
  },
  {
    id: 'dance-movement',
    title: 'Dance & Movement',
    description: 'Ballet, Hip-Hop, Contemporary, Gymnastics',
    icon: '🩰',
    gradient: 'linear-gradient(45deg, rgba(255,45,146,0.8), rgba(191,90,242,0.8))',
    heroTitle: 'Express Through Movement',
    heroDescription: 'Build the strength, flexibility, and artistry for beautiful movement.',
    subcategories: [
      { id: 'ballet', name: 'Ballet' },
      { id: 'hip-hop', name: 'Hip-Hop/Street Dance' },
      { id: 'contemporary', name: 'Contemporary/Modern' },
      { id: 'jazz-tap', name: 'Jazz/Tap' },
      { id: 'gymnastics', name: 'Gymnastics/Acrobatics' }
    ]
  },
  {
    id: 'precision-skill',
    title: 'Precision & Skill Sports',
    description: 'Golf, Archery, Bowling, Darts, Esports',
    icon: '🎯',
    gradient: 'linear-gradient(45deg, rgba(0,122,255,0.8), rgba(255,149,0,0.8))',
    heroTitle: 'Perfect Your Precision',
    heroDescription: 'Build the focus, stability, and supportive fitness for precision sports.',
    subcategories: [
      { id: 'golf', name: 'Golf' },
      { id: 'archery', name: 'Archery' },
      { id: 'bowling', name: 'Bowling' },
      { id: 'darts', name: 'Darts' },
      { id: 'esports', name: 'Esports (Competitive Gaming)' }
    ]
  },
  {
    id: 'multiple-activities',
    title: 'Multiple Activities',
    description: 'I engage in several different activities',
    icon: '➕',
    gradient: 'linear-gradient(45deg, rgba(191,90,242,0.8), rgba(0,122,255,0.8))',
    heroTitle: 'Multi-Sport Athlete',
    heroDescription: 'Let\'s create a comprehensive plan that balances all your activities.',
    subcategories: []
  }
];

// Fitness levels
const FITNESS_LEVELS = [
  {
    id: 'beginner',
    title: 'Complete Beginner',
    subtitle: 'Just starting out or returning after a long break'
  },
  {
    id: 'some-experience',
    title: 'Some Experience',
    subtitle: 'Occasional activity but looking to be more consistent'
  },
  {
    id: 'regular',
    title: 'Regular Practitioner',
    subtitle: 'Active several times per week with good base fitness'
  },
  {
    id: 'advanced',
    title: 'Advanced/Competitive',
    subtitle: 'High level of fitness with structured training experience'
  }
];

// Time options
const TIME_OPTIONS = [
  { value: '15', label: '15 minutes' },
  { value: '30', label: '30 minutes' },
  { value: '45', label: '45 minutes' },
  { value: '60', label: '60 minutes' },
  { value: '90', label: '90+ minutes' }
];

// Equipment options
const EQUIPMENT_OPTIONS = [
  'None', 'Dumbbells', 'Kettlebells', 'Resistance Bands', 
  'Yoga Mat', 'Foam Roller', 'Pull-up Bar', 'Gym Access'
];

// Goals
const GOALS: Array<{
  id: string;
  title: string;
  subtitle: string;
  aspirationalFraming: string;
}> = [
  {
    id: 'fitness',
    title: '🎯 Get Fit & Healthy',
    subtitle: 'Build overall fitness and establish healthy habits',
    aspirationalFraming: 'Imagine having energy all day and feeling confident in your body'
  },
  {
    id: 'weight-loss',
    title: '⚖️ Lose Weight',
    subtitle: 'Burn calories and achieve a healthier body composition',
    aspirationalFraming: 'Picture yourself feeling lighter, more energetic, and loving how you look'
  },
  {
    id: 'strength',
    title: '💪 Feel Strong & Powerful',
    subtitle: 'Build the strength to handle anything life throws at you',
    aspirationalFraming: 'Envision carrying groceries with ease, playing with kids without getting tired, and feeling unstoppable'
  },
  {
    id: 'performance',
    title: '🏆 Improve Performance',
    subtitle: 'Train for competitions or personal records',
    aspirationalFraming: 'See yourself crushing your goals and achieving things you never thought possible'
  },
  {
    id: 'wellbeing',
    title: '🧘‍♀️ Manage Stress & Wellbeing',
    subtitle: 'Focus on mental health and relaxation',
    aspirationalFraming: 'Imagine feeling calm, centered, and resilient no matter what your day brings'
  }
];

export default function CinematicOnboarding({ onComplete, onSkip }: CinematicOnboardingProps) {
  const [user] = useAuthState(auth);
  const [currentScreen, setCurrentScreen] = useState(0); // Start with welcome screen
  const [currentStep, setCurrentStep] = useState(0); // For goal-focused flow
  const [onboardingPath, setOnboardingPath] = useState<'goal-focused' | 'exploratory' | null>(null);
  const [answers, setAnswers] = useState<Partial<OnboardingAnswers>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);
  const [conversation, setConversation] = useState<AiMessage[]>([]);

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      if (!user) return;
      
      try {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists() && userDoc.data().hasCompletedOnboarding) {
          window.location.href = '/dashboard';
          return;
        }
      } catch (error) {
        console.error('Error checking onboarding status:', error);
      }
      
      setIsLoading(false);
    };

    checkOnboardingStatus();
  }, [user]);

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      if (currentScreen < 1) {
        setCurrentScreen(currentScreen + 1);
      } else if (onboardingPath === 'goal-focused' && currentStep < GOAL_FOCUSED_STEPS.length - 1) {
        setCurrentStep(currentStep + 1);
      } else if (onboardingPath === 'goal-focused') {
        completeOnboarding(answers as OnboardingAnswers, 'goal-focused');
      }
      setIsTransitioning(false);
    }, 600);
  };

  const handlePrevious = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      if (onboardingPath === 'goal-focused' && currentStep > 0) {
        setCurrentStep(currentStep - 1);
      } else if (onboardingPath === 'goal-focused' && currentStep === 0) {
        setCurrentScreen(1);
        setOnboardingPath(null);
      } else if (currentScreen > 0) {
        setCurrentScreen(currentScreen - 1);
      }
      setIsTransitioning(false);
    }, 600);
  };

  const handlePathChoice = (path: 'goal-focused' | 'exploratory') => {
    setOnboardingPath(path);
    setIsTransitioning(true);
    
    setTimeout(() => {
      if (path === 'goal-focused') {
        setCurrentScreen(-1); // Switch to step-based flow
        setCurrentStep(0);
      } else {
        // For exploratory, start conversation-driven onboarding
        setCurrentScreen(-2); // Switch to conversation flow
        initializeExploratoryConversation();
      }
      setIsTransitioning(false);
    }, 600);
  };

  const handleExploratoryMessage = (message: string) => {
    // Add user message
    const userMessage: AiMessage = {
      type: 'user',
      content: message,
      timestamp: new Date()
    };
    
    setConversation(prev => [...prev, userMessage]);
    
    // Simple conversation logic - in a real implementation, this would be more sophisticated
    setTimeout(() => {
      let aiResponse = '';
      
      // Basic conversation flow based on message content
      if (conversation.length === 1) {
        // First response
        if (message.toLowerCase().includes('not sure') || message.toLowerCase().includes('don\'t know')) {
          aiResponse = `That's completely normal! Let's explore this together.

What does a typical day look like for you? Are you someone who's always on the go, or do you prefer a more relaxed pace?`;
        } else if (message.toLowerCase().includes('strong') || message.toLowerCase().includes('lift') || message.toLowerCase().includes('muscle')) {
          aiResponse = `I love that you're drawn to feeling strong! There's something really empowering about building physical strength.

Have you done any strength training before, or would this be a new adventure for you?`;
        } else if (message.toLowerCase().includes('calm') || message.toLowerCase().includes('yoga') || message.toLowerCase().includes('relax')) {
          aiResponse = `That sounds wonderful - finding calm and peace through movement is so valuable, especially in our busy world.

What draws you to calmer activities? Is it stress relief, better sleep, or just wanting to feel more centered?`;
        } else {
          aiResponse = `That's great to hear! I can sense you have some ideas about what might appeal to you.

Tell me a bit about your lifestyle - are you someone who loves routine, or do you prefer mixing things up and trying new activities?`;
        }
      } else {
        // Continue the conversation based on previous context
        aiResponse = `Thank you for sharing that! Based on what you've told me, I'm getting a good sense of what might work well for you.

Let me ask you this: when you imagine yourself being more active, what would success look like? Is it having more energy, feeling stronger, reducing stress, or something else entirely?`;
        
        // After a few exchanges, offer to create a plan
        if (conversation.length >= 5) {
          aiResponse += `

I think I have enough information to create a personalized plan that fits your lifestyle and preferences. Would you like me to put together some recommendations for you?`;
        }
      }
      
      const aiMessage: AiMessage = {
        type: 'ai',
        content: aiResponse,
        timestamp: new Date()
      };
      
      setConversation(prev => [...prev, aiMessage]);
      
      // If we've had enough conversation, offer to complete onboarding
      if (conversation.length >= 6) {
        setTimeout(() => {
          const completionMessage: AiMessage = {
            type: 'ai',
            content: `Perfect! I have a great understanding of what you're looking for. Let me create a personalized fitness plan that matches your preferences and lifestyle.

Ready to see your customized recommendations?`,
            timestamp: new Date(),
            metadata: {
              showGenerateButton: true
            }
          };
          setConversation(prev => [...prev, completionMessage]);
        }, 2000);
      }
    }, 1000);
  };

  const initializeExploratoryConversation = () => {
    const exploratoryMessages = [
      {
        type: 'ai' as const,
        content: `Hi there! I love that you're open to exploring what might work best for you. That's actually a really smart approach - fitness should feel right for YOU.

Let's start simple: when you think about moving your body or being active, what sounds most appealing to you right now?

Maybe it's something energizing like dancing or running, something calming like yoga or walking, something that makes you feel strong like lifting weights, or maybe you're not sure yet - and that's totally okay too!`,
        timestamp: new Date()
      }
    ];
    
    setConversation(exploratoryMessages);
  };

  const handleAnswer = (field: string, value: string | string[] | any) => {
    setAnswers(prev => ({ ...prev, [field]: value }));
    
    if (field === 'activity') {
      setSelectedActivity(value as string);
    }
  };

  const completeOnboarding = async (finalAnswers: OnboardingAnswers, path: 'goal-focused' | 'exploratory'): Promise<void> => {
    if (!user) return;

    try {
      const personalization = generatePersonalization(finalAnswers, path);
      
      await setDoc(doc(db, 'users', user.uid), {
        hasCompletedOnboarding: true,
        onboardingAnswers: finalAnswers,
        personalization,
        onboardingPath: path,
        completedAt: new Date()
      }, { merge: true });

      setIsTransitioning(true);
      setTimeout(() => {
        onComplete(personalization);
      }, 1000);
    } catch (error) {
      console.error('Error completing onboarding:', error);
    }
  };

  const generatePersonalization = (answers: OnboardingAnswers, path: 'goal-focused' | 'exploratory'): UserPersonalization => {
    let aiTone: UserPersonalization['aiTone'] = 'supportive';
    let visualTheme: UserPersonalization['visualTheme'] = 'calm';

    if (answers.goal === 'performance') aiTone = 'direct';
    else if (answers.goal === 'wellbeing') aiTone = 'reflective';
    else if (answers.fitnessLevel === 'beginner') aiTone = 'supportive';

    if (answers.activity === 'strength') visualTheme = 'energetic';
    else if (answers.activity === 'mindfulness') visualTheme = 'gentle';
    else if (answers.goal === 'weight-loss') visualTheme = 'warm';

    return {
      visualTheme,
      aiTone,
      motivation: answers.goal || 'General wellness',
      preferredDuration: `${answers.timeCommitment} minutes`,
      trainingLocation: answers.equipment?.includes('Gym Access') ? 'Gym' : 'Home',
      hasCompletedOnboarding: true,
      completedAt: new Date(),
      onboardingPath: path,
      onboardingAnswers: answers
    };
  };

  const getCurrentProgress = () => {
    if (onboardingPath === 'goal-focused') {
      return ((currentStep + 1) / GOAL_FOCUSED_STEPS.length) * 100;
    }
    return 50;
  };

  const getSelectedActivity = () => {
    return ACTIVITIES.find(activity => activity.id === selectedActivity);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-pulse text-gray-400">Loading...</div>
      </div>
    );
  }

  // Welcome to MyPace screen
  if (currentScreen === 0) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-blue-600 via-emerald-500 to-cyan-500 opacity-85" />
        <div className="absolute inset-0 bg-gradient-to-tl from-blue-500 via-teal-500 to-emerald-600 opacity-75 animate-pulse" />
        
        <div className={`relative z-10 text-center transition-all duration-1000 ${isTransitioning ? 'opacity-0 transform translate-y-8' : 'opacity-100 transform translate-y-0'}`}>
          <div className="mb-12">
            <div className="w-20 h-20 mx-auto mb-8 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
              <Sparkles className="text-white" size={28} />
            </div>
            
            <h1 className="text-6xl md:text-7xl font-light text-white tracking-tight mb-6 animate-handwrite" style={{ fontFamily: 'Brush Script MT, cursive' }}>
              Welcome to MyPace
            </h1>
          </div>
          
          <p className="text-xl text-white/80 mb-16 font-light max-w-2xl mx-auto leading-relaxed">
            A tool designed to help you take charge of your wellbeing,
            <br />
            one step at a time, at your own pace
          </p>
          
          <div className="flex justify-center">
            <button
              onClick={handleNext}
              className="group flex flex-col items-center text-white hover:text-white transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-full border-2 border-white/80 flex items-center justify-center mb-2 group-hover:border-white transition-colors duration-300">
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-300" />
              </div>
              <span className="text-sm font-medium">Let's begin</span>
            </button>
          </div>
        </div>

        <style jsx>{`
          @keyframes handwrite {
            0% { opacity: 0; transform: translateY(30px) scale(0.9); }
            50% { opacity: 0.8; }
            100% { opacity: 1; transform: translateY(0) scale(1); }
          }
          .animate-handwrite { animation: handwrite 2.5s ease-out forwards; }
        `}</style>
      </div>
    );
  }

  // Path choice screen
  if (currentScreen === 1) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-blue-600 via-purple-500 to-pink-500 opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-tl from-orange-400 via-pink-500 to-purple-600 opacity-70 animate-pulse" />
        
        <div className={`relative z-10 text-center transition-all duration-1000 ${isTransitioning ? 'opacity-0 transform translate-y-8' : 'opacity-100 transform translate-y-0'}`}>
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight max-w-4xl mx-auto leading-tight">
            Start your journey
          </h1>
          
          <p className="text-lg text-white/80 mb-16 font-light max-w-2xl mx-auto">
            Choose the path that feels right for you
          </p>
          
          <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto mb-12">
            <button
              onClick={() => handlePathChoice('goal-focused')}
              className="group flex-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-105 text-left"
            >
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-2xl group-hover:bg-white/30 transition-colors duration-300">
                  <Target className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    I have a goal I need help with
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    You know what you want to achieve and need a structured plan to get there
                  </p>
                </div>
              </div>
            </button>
            
            <button
              onClick={() => handlePathChoice('exploratory')}
              className="group flex-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-105 text-left"
            >
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-2xl group-hover:bg-white/30 transition-colors duration-300">
                  <Heart className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    I'm not sure what I'd like to do
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    You're open to exploring and want guidance on what might work best for you
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Conversation-driven exploratory onboarding
  if (currentScreen === -2 && onboardingPath === 'exploratory') {
    return (
      <div className="min-h-screen flex">
        {/* Hero Section */}
        <div 
          className="flex-1 flex items-center justify-center relative min-h-screen"
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
          }}
        >
          <div className="text-center text-white z-10 p-10">
            <h1 className="text-5xl font-semibold mb-4 tracking-tight">
              Let's Explore Together
            </h1>
            <p className="text-xl opacity-90 max-w-md leading-relaxed">
              We'll have a friendly conversation to discover what type of fitness journey feels right for you.
            </p>
          </div>
        </div>

        {/* Conversation Section */}
        <div className="flex-1 bg-white/95 backdrop-blur-xl flex flex-col min-h-screen">
          {/* Header */}
          <div className="p-10 pb-0">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Fitness Discovery Chat
            </h2>
            <p className="text-gray-600">
              Take your time - there are no wrong answers here!
            </p>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-10 overflow-y-auto">
            <div className="space-y-6">
              {conversation.map((message, index) => (
                <div
                  key={index}
                  className={`flex gap-3 ${
                    message.type === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {message.type === 'ai' && (
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center">
                      <Sparkles size={16} />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-2xl p-4 ${
                      message.type === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
                    {message.metadata?.showGenerateButton && (
                      <button
                        onClick={() => {
                          // Create a basic profile from the conversation
                          const exploratoryAnswers: OnboardingAnswers = {
                            activity: 'general-fitness', // Default for exploratory
                            age: '30', // Default
                            gender: 'prefer-not-to-say', // Default
                            units: 'metric', // Default
                            heightCm: '170', // Default height
                            fitnessLevel: 'some-experience', // Default
                            timeCommitment: '30', // Default
                            daysPerWeek: '3-4', // Default
                            equipment: [], // Default to bodyweight
                            goal: 'fitness' // Default
                          };
                          
                          completeOnboarding(exploratoryAnswers, 'exploratory');
                        }}
                        className="mt-3 bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-700 transition-colors"
                      >
                        Create My Plan
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Input */}
          <div className="p-10 pt-0">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Share your thoughts..."
                className="flex-1 p-4 border border-gray-300 rounded-xl text-base focus:outline-none focus:border-purple-500 focus:ring-3 focus:ring-purple-100"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    const input = e.target as HTMLInputElement;
                    if (input.value.trim()) {
                      handleExploratoryMessage(input.value.trim());
                      input.value = '';
                    }
                  }
                }}
              />
              <button
                onClick={() => {
                  const input = document.querySelector('input[placeholder="Share your thoughts..."]') as HTMLInputElement;
                  if (input?.value.trim()) {
                    handleExploratoryMessage(input.value.trim());
                    input.value = '';
                  }
                }}
                className="px-6 py-4 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Goal-focused onboarding flow
  if (currentScreen === -1 && onboardingPath === 'goal-focused') {
    const step = GOAL_FOCUSED_STEPS[currentStep];
    const selectedActivityData = getSelectedActivity();

    return (
      <div className="min-h-screen flex">
        {/* Hero Section */}
        <div 
          className="flex-1 flex items-center justify-center relative min-h-screen"
          style={{
            background: selectedActivityData?.gradient || 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
          }}
        >
          <div className="text-center text-white z-10 p-10">
            <h1 className="text-5xl font-semibold mb-4 tracking-tight">
              {selectedActivityData?.heroTitle || 'Welcome to MyPace'}
            </h1>
            <p className="text-xl opacity-90 max-w-md leading-relaxed">
              {selectedActivityData?.heroDescription || 'Your personalized journey to better health and fitness starts here.'}
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 bg-white/95 backdrop-blur-xl flex flex-col min-h-screen">
          {/* Progress Header */}
          <div className="flex items-center justify-between p-10 pb-0">
            <span className="text-sm font-medium text-gray-500">
              Step {currentStep + 1} of {GOAL_FOCUSED_STEPS.length}
            </span>
            <div className="flex-1 h-1 bg-gray-200 rounded-full mx-5 overflow-hidden">
              <div 
                className="h-full bg-blue-500 rounded-full transition-all duration-500"
                style={{ width: `${getCurrentProgress()}%` }}
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-10 flex flex-col">
            <div className={`transition-all duration-1000 ${isTransitioning ? 'opacity-0 transform translate-y-5' : 'opacity-100 transform translate-y-0'}`}>
              <h2 className="text-3xl font-semibold mb-2 text-gray-900 tracking-tight">
                {step.title}
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                {step.subtitle}
              </p>

              {/* Activity Selection */}
              {step.type === 'activity-selection' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {ACTIVITIES.map((activity) => (
                    <button
                      key={activity.id}
                      onClick={() => handleAnswer('activity', activity.id)}
                      className={`bg-white border-2 rounded-xl p-6 text-left transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                        answers.activity === activity.id 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-3xl mb-4">{activity.icon}</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{activity.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{activity.description}</p>
                    </button>
                  ))}
                </div>
              )}

              {/* Subcategory Selection */}
              {step.type === 'subcategory-selection' && selectedActivity && (
                <div className="space-y-4 mb-10">
                  {(() => {
                    const selectedActivityData = getSelectedActivity();
                    const subcategories = selectedActivityData?.subcategories;
                    
                    if (subcategories && subcategories.length > 0) {
                      return subcategories.map((subcategory) => (
                        <button
                          key={subcategory.id}
                          onClick={() => handleAnswer('subcategory', subcategory.id)}
                          className={`w-full bg-white border rounded-lg p-4 text-left transition-all duration-200 hover:bg-gray-50 flex items-center justify-between ${
                            answers.subcategory === subcategory.id 
                              ? 'border-blue-500 bg-blue-50' 
                              : 'border-gray-200'
                          }`}
                        >
                          <div>
                            <div className="text-base font-medium text-gray-900">{subcategory.name}</div>
                          </div>
                          <div className={`w-5 h-5 border-2 rounded-full flex items-center justify-center ${
                            answers.subcategory === subcategory.id 
                              ? 'border-blue-500 bg-blue-500' 
                              : 'border-gray-300'
                          }`}>
                            {answers.subcategory === subcategory.id && (
                              <div className="w-2 h-2 bg-white rounded-full" />
                            )}
                          </div>
                        </button>
                      ));
                    } else {
                      return (
                        <div className="text-center py-8">
                          <p className="text-gray-600">Perfect! Let's continue with your {selectedActivityData?.title} journey.</p>
                        </div>
                      );
                    }
                  })()}
                </div>
              )}

              {/* Demographics */}
              {step.type === 'demographics' && (
                <div className="space-y-6 mb-10">
                  <div>
                    <label className="block text-base font-medium text-gray-900 mb-2">Age</label>
                    <input
                      type="number"
                      min="13"
                      max="100"
                      placeholder="Enter your age"
                      className="w-full p-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-100"
                      value={answers.age || ''}
                      onChange={(e) => handleAnswer('age', e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-base font-medium text-gray-900 mb-2">Gender</label>
                    <select 
                      className="w-full p-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-100"
                      value={answers.gender || ''}
                      onChange={(e) => handleAnswer('gender', e.target.value)}
                    >
                      <option value="">Select gender</option>
                      <option value="female">Female</option>
                      <option value="male">Male</option>
                      <option value="non-binary">Non-binary</option>
                      <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-base font-medium text-gray-900 mb-2">
                        Height {answers.units === 'imperial' ? '(ft/in)' : '(cm)'}
                      </label>
                      {answers.units === 'imperial' ? (
                        <div className="flex gap-2">
                          <input
                            type="number"
                            min="3"
                            max="8"
                            placeholder="Feet"
                            className="flex-1 p-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-100"
                            value={answers.heightFeet || ''}
                            onChange={(e) => handleAnswer('heightFeet', e.target.value)}
                          />
                          <input
                            type="number"
                            min="0"
                            max="11"
                            placeholder="Inches"
                            className="flex-1 p-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-100"
                            value={answers.heightInches || ''}
                            onChange={(e) => handleAnswer('heightInches', e.target.value)}
                          />
                        </div>
                      ) : (
                        <input
                          type="number"
                          min="100"
                          max="250"
                          placeholder="Enter height in cm"
                          className="w-full p-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-100"
                          value={answers.heightCm || ''}
                          onChange={(e) => handleAnswer('heightCm', e.target.value)}
                        />
                      )}
                    </div>

                    <div>
                      <label className="block text-base font-medium text-gray-900 mb-2">
                        Weight {answers.units === 'imperial' ? '(lbs)' : '(kg)'} <span className="text-gray-500 text-sm">(Optional)</span>
                      </label>
                      <input
                        type="number"
                        min={answers.units === 'imperial' ? '50' : '20'}
                        max={answers.units === 'imperial' ? '500' : '200'}
                        placeholder={`Enter weight in ${answers.units === 'imperial' ? 'lbs' : 'kg'}`}
                        className="w-full p-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-100"
                        value={answers.weight || ''}
                        onChange={(e) => handleAnswer('weight', e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-base font-medium text-gray-900 mb-2">Location (Optional)</label>
                    <input
                      type="text"
                      placeholder="City, Country or Timezone"
                      className="w-full p-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-100"
                      value={answers.location || ''}
                      onChange={(e) => handleAnswer('location', e.target.value)}
                    />
                    <p className="text-sm text-gray-500 mt-1">Helps us suggest local events and optimal training times</p>
                  </div>

                  <div>
                    <label className="block text-base font-medium text-gray-900 mb-2">Units</label>
                    <select 
                      className="w-full p-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-100"
                      value={answers.units || 'metric'}
                      onChange={(e) => handleAnswer('units', e.target.value)}
                    >
                      <option value="metric">Metric (km, kg, cm)</option>
                      <option value="imperial">Imperial (miles, lbs, ft)</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Fitness Level */}
              {step.type === 'fitness-level' && (
                <div className="space-y-3 mb-10">
                  {FITNESS_LEVELS.map((level) => (
                    <button
                      key={level.id}
                      onClick={() => handleAnswer('fitnessLevel', level.id)}
                      className={`w-full bg-white border rounded-lg p-4 text-left transition-all duration-200 hover:bg-gray-50 flex items-center justify-between ${
                        answers.fitnessLevel === level.id 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-200'
                      }`}
                    >
                      <div>
                        <div className="text-base font-medium text-gray-900 mb-1">{level.title}</div>
                        <div className="text-sm text-gray-600">{level.subtitle}</div>
                      </div>
                      <div className={`w-5 h-5 border-2 rounded-full flex items-center justify-center ${
                        answers.fitnessLevel === level.id 
                          ? 'border-blue-500 bg-blue-500' 
                          : 'border-gray-300'
                      }`}>
                        {answers.fitnessLevel === level.id && (
                          <div className="w-2 h-2 bg-white rounded-full" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {/* Time Availability */}
              {step.type === 'time-availability' && (
                <div className="space-y-6 mb-10">
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {TIME_OPTIONS.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleAnswer('timeCommitment', option.value)}
                        className={`bg-white border rounded-lg p-5 text-center transition-all duration-200 hover:bg-gray-50 ${
                          answers.timeCommitment === option.value 
                            ? 'border-blue-500 bg-blue-50' 
                            : 'border-gray-200'
                        }`}
                      >
                        <div className="text-2xl font-semibold text-gray-900 mb-1">
                          {option.value === '90' ? '90+' : option.value}
                        </div>
                        <div className="text-xs text-gray-600 font-medium">minutes</div>
                      </button>
                    ))}
                  </div>

                  <div>
                    <label className="block text-base font-medium text-gray-900 mb-2">Days per week</label>
                    <select 
                      className="w-full p-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-100"
                      value={answers.daysPerWeek || ''}
                      onChange={(e) => handleAnswer('daysPerWeek', e.target.value)}
                    >
                      <option value="">How many days can you commit?</option>
                      <option value="2-3">2-3 days</option>
                      <option value="3-4">3-4 days</option>
                      <option value="4-5">4-5 days</option>
                      <option value="5-6">5-6 days</option>
                      <option value="daily">Daily</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Equipment */}
              {step.type === 'equipment' && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
                  {EQUIPMENT_OPTIONS.map((equipment) => (
                    <button
                      key={equipment}
                      onClick={() => {
                        const currentEquipment = answers.equipment || [];
                        const newEquipment = currentEquipment.includes(equipment)
                          ? currentEquipment.filter(e => e !== equipment)
                          : [...currentEquipment, equipment];
                        handleAnswer('equipment', newEquipment);
                      }}
                      className={`bg-white border rounded-lg p-4 text-center transition-all duration-200 hover:bg-gray-50 text-base font-medium ${
                        (answers.equipment || []).includes(equipment)
                          ? 'border-blue-500 bg-blue-50 text-blue-700' 
                          : 'border-gray-200 text-gray-900'
                      }`}
                    >
                      {equipment}
                    </button>
                  ))}
                </div>
              )}

              {/* Goals */}
              {step.type === 'goals' && (
                <div className="space-y-3 mb-10">
                  {GOALS.map((goal) => (
                    <button
                      key={goal.id}
                      onClick={() => handleAnswer('goal', goal.id)}
                      className={`w-full bg-white border rounded-lg p-4 text-left transition-all duration-200 hover:bg-gray-50 flex items-center justify-between ${
                        answers.goal === goal.id 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-200'
                      }`}
                    >
                      <div>
                        <div className="text-base font-medium text-gray-900 mb-1">{goal.title}</div>
                        <div className="text-sm text-gray-600 mb-2">{goal.subtitle}</div>
                        <div className="text-xs text-blue-600 italic">{goal.aspirationalFraming}</div>
                      </div>
                      <div className={`w-5 h-5 border-2 rounded-full flex items-center justify-center ${
                        answers.goal === goal.id 
                          ? 'border-blue-500 bg-blue-500' 
                          : 'border-gray-300'
                      }`}>
                        {answers.goal === goal.id && (
                          <div className="w-2 h-2 bg-white rounded-full" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {/* Activity-Specific Questions */}
              {step.type === 'activity-specific' && (
                <div className="space-y-6 mb-10">
                  {answers.activity === 'cardio-endurance' && (
                    <>
                      <div>
                        <label className="block text-base font-medium text-gray-900 mb-2">Current weekly volume</label>
                        <select 
                          className="w-full p-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-100"
                          value={answers.activitySpecific?.currentVolume || ''}
                          onChange={(e) => handleAnswer('activitySpecific', { ...answers.activitySpecific, currentVolume: e.target.value })}
                        >
                          <option value="">Select your typical weekly activity</option>
                          <option value="1-2-hours">1-2 hours per week</option>
                          <option value="3-5-hours">3-5 hours per week</option>
                          <option value="6-8-hours">6-8 hours per week</option>
                          <option value="9-plus-hours">9+ hours per week</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-base font-medium text-gray-900 mb-2">Training environment preference</label>
                        <select 
                          className="w-full p-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-100"
                          value={answers.activitySpecific?.environment || ''}
                          onChange={(e) => handleAnswer('activitySpecific', { ...answers.activitySpecific, environment: e.target.value })}
                        >
                          <option value="">Select preference</option>
                          <option value="indoor">Indoor (gym, treadmill, trainer)</option>
                          <option value="outdoor">Outdoor (roads, trails, open water)</option>
                          <option value="both">Both indoor and outdoor</option>
                        </select>
                      </div>
                    </>
                  )}

                  {answers.activity === 'strength-power' && (
                    <>
                      <div>
                        <label className="block text-base font-medium text-gray-900 mb-2">Strength training experience</label>
                        <div className="space-y-3">
                          {[
                            { id: 'never-lifted', title: 'Never lifted weights / Bodyweight only' },
                            { id: 'some-experience', title: 'Some gym experience / Basic lifts' },
                            { id: 'regular-gym', title: 'Regular gym-goer / Intermediate lifts' },
                            { id: 'advanced-lifter', title: 'Advanced lifter / Specific programming knowledge' }
                          ].map((level) => (
                            <button
                              key={level.id}
                              onClick={() => handleAnswer('activitySpecific', { ...answers.activitySpecific, strengthExperienceLevel: level.id })}
                              className={`w-full bg-white border rounded-lg p-4 text-left transition-all duration-200 hover:bg-gray-50 flex items-center justify-between ${
                                answers.activitySpecific?.strengthExperienceLevel === level.id 
                                  ? 'border-blue-500 bg-blue-50' 
                                  : 'border-gray-200'
                              }`}
                            >
                              <div className="text-base font-medium text-gray-900">{level.title}</div>
                              <div className={`w-5 h-5 border-2 rounded-full flex items-center justify-center ${
                                answers.activitySpecific?.strengthExperienceLevel === level.id 
                                  ? 'border-blue-500 bg-blue-500' 
                                  : 'border-gray-300'
                              }`}>
                                {answers.activitySpecific?.strengthExperienceLevel === level.id && (
                                  <div className="w-2 h-2 bg-white rounded-full" />
                                )}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {answers.activity === 'mind-body' && (
                    <>
                      <div>
                        <label className="block text-base font-medium text-gray-900 mb-2">What draws you to mind-body practices?</label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {[
                            'Reduce stress & anxiety',
                            'Improve sleep quality', 
                            'Enhance focus & concentration',
                            'Increase physical flexibility',
                            'Improve balance & posture',
                            'Build core strength'
                          ].map((goal) => (
                            <button
                              key={goal}
                              onClick={() => {
                                const currentGoals = answers.activitySpecific?.mindBodyGoals || [];
                                const newGoals = currentGoals.includes(goal)
                                  ? currentGoals.filter(g => g !== goal)
                                  : [...currentGoals, goal];
                                handleAnswer('activitySpecific', { ...answers.activitySpecific, mindBodyGoals: newGoals });
                              }}
                              className={`bg-white border rounded-lg p-3 text-center transition-all duration-200 hover:bg-gray-50 text-sm font-medium ${
                                (answers.activitySpecific?.mindBodyGoals || []).includes(goal)
                                  ? 'border-blue-500 bg-blue-50 text-blue-700' 
                                  : 'border-gray-200 text-gray-900'
                              }`}
                            >
                              {goal}
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {/* Add more activity-specific sections as needed */}
                  {!['cardio-endurance', 'strength-power', 'mind-body'].includes(answers.activity || '') && (
                    <div className="text-center py-8">
                      <p className="text-gray-600">Great choice! We'll create a personalized plan for your {getSelectedActivity()?.title} journey.</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="flex gap-4 mt-auto">
              {currentStep > 0 && (
                <button
                  onClick={handlePrevious}
                  className="flex-1 py-3 px-6 bg-gray-100 text-gray-700 rounded-lg text-base font-medium hover:bg-gray-200 transition-colors duration-200"
                >
                  Back
                </button>
              )}
              <button
                onClick={handleNext}
                disabled={!canProceed()}
                className="flex-1 py-3 px-6 bg-blue-500 text-white rounded-lg text-base font-medium hover:bg-blue-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-200"
              >
                {currentStep === GOAL_FOCUSED_STEPS.length - 1 ? 'Complete Setup' : 'Continue'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function canProceed() {
    const step = GOAL_FOCUSED_STEPS[currentStep];
    switch (step.type) {
      case 'activity-selection':
        return !!answers.activity;
      case 'subcategory-selection':
        // Allow proceeding if no subcategories exist or one is selected
        const selectedActivityData = getSelectedActivity();
        return !selectedActivityData?.subcategories?.length || !!answers.subcategory;
      case 'demographics':
        const hasHeight = answers.units === 'imperial' 
          ? !!(answers.heightFeet && answers.heightInches)
          : !!answers.heightCm;
        return !!(answers.age && answers.gender && answers.units && hasHeight);
      case 'fitness-level':
        return !!answers.fitnessLevel;
      case 'time-availability':
        return !!(answers.timeCommitment && answers.daysPerWeek);
      case 'equipment':
        return true; // Equipment is optional
      case 'goals':
        return !!answers.goal;
      case 'activity-specific':
        return true; // Activity-specific questions are optional for now
      default:
        return true;
    }
  }

  return null;
} 