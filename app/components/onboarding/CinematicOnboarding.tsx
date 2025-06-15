'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '@/lib/firebase';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { ArrowRight, ArrowLeft, Target, Heart, Sparkles, Send, ThumbsUp, ThumbsDown } from 'lucide-react';
import { PersonaSelectionService, PersonaSelectionResult } from '@/lib/services/persona-selection.service';
import { CoachPersona } from '@/lib/types/training-system';

interface AiMessage {
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  metadata?: {
    showGenerateButton?: boolean;
    evaluation?: 'positive' | 'negative';
  };
}

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
    
    // Simplified activity-specific fields
    cyclingFocus?: string; // 'general-fitness', 'event-prep', 'performance'
    triathlonGoal?: string; // 'fitness-testing', 'season-prep', 'race-prep'
    triathlonDistance?: string; // 'sprint', 'olympic', 'half', 'full'
    triathlonFocus?: string; // 'swimming', 'cycling', 'running', 'balanced'
    runningGoal?: string; // 'general-fitness', 'event-prep'
    runningDistance?: string; // '5k', '10k', 'half-marathon', 'marathon', 'ultramarathon'
    swimmingFocus?: string; // 'general-fitness', 'technique-focus', 'event-prep'
    swimmingEventType?: string; // 'pool-meet', 'open-water', 'triathlon-swim'
    crossTrainingFocus?: string; // 'mobility-stability', 'strength-support', 'yoga-practice', 'mental-training'
    strengthGoal?: string; // 'general-strength', 'powerlifting', 'bodybuilding', 'functional-fitness'
    strengthStyle?: string; // 'barbell-focused', 'dumbbell-bodyweight', 'machine-based', 'mixed-approach'
    teamSportsFocus?: string; // 'injury-prevention', 'performance-conditioning', 'return-to-play', 'general-fitness'
    teamSportsFrequency?: string; // 'daily', '4-6-times', '2-3-times', '1-time', 'irregular'
    
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
  // Enhanced persona selection
  selectedPersona?: CoachPersona;
  personaSelection?: PersonaSelectionResult;
  safetyPriority?: string;
  progressionRate?: string;
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
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentScreen, setCurrentScreen] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [onboardingPath, setOnboardingPath] = useState<'goal-focused' | 'exploratory' | null>(null);
  const [answers, setAnswers] = useState<Partial<OnboardingAnswers>>({});
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [offlineMode, setOfflineMode] = useState(false);
  const [connectionError, setConnectionError] = useState<string | null>(null);
  
  // 🔑 UNIQUE TOKEN SYSTEM - This token will be used across the entire app
  const [userToken, setUserToken] = useState<string | null>(null);
  
  // 💬 CONVERSATION STATE - Required for exploratory onboarding chat
  const [conversation, setConversation] = useState<AiMessage[]>([]);

  // Generate unique user token for the entire app experience
  const generateUserToken = (): string => {
    const timestamp = Date.now().toString(36);
    const randomStr = Math.random().toString(36).substring(2, 15);
    const userPart = user?.uid?.substring(0, 8) || 'anon';
    return `usr_${userPart}_${timestamp}_${randomStr}`;
  };

  // 💾 ENHANCED SAVE PROGRESS - Now includes comprehensive data structure
  const saveProgress = async (
    screen: number, 
    step: number, 
    path: 'goal-focused' | 'exploratory' | null, 
    currentAnswers: Partial<OnboardingAnswers>
  ) => {
    if (!user || offlineMode) {
      // Still update URL even in offline mode with token
      const params = new URLSearchParams();
      if (userToken) params.set('token', userToken);
      if (path) params.set('path', path);
      if (screen >= 0) params.set('screen', screen.toString());
      if (step > 0) params.set('step', step.toString());
      
      const newUrl = params.toString() ? `?${params.toString()}` : '';
      router.replace(`/onboarding${newUrl}`, { scroll: false });
      return;
    }
    
    try {
      // 🏗️ COMPREHENSIVE DATA STRUCTURE - Store everything with token
      await setDoc(doc(db, 'users', user.uid), {
        // Core user identification
        userToken: userToken,
        lastActive: new Date(),
        
        // Onboarding progress
        onboardingProgress: {
          currentScreen: screen,
          currentStep: step,
          onboardingPath: path,
          answers: currentAnswers,
          selectedActivity,
          lastUpdated: new Date(),
          token: userToken
        },
        
        // 🤖 AI Chat System - Initialize empty but ready for data
        aiChatSessions: {
          currentSessionId: null,
          totalSessions: 0,
          lastChatDate: null,
          chatHistory: [], // Will store all chat messages
          preferences: {
            aiTone: 'supportive',
            responseLength: 'medium',
            focusAreas: []
          }
        },
        
        // 🏋️ Training System - Initialize training data structure
        trainingData: {
          currentProgram: null,
          completedWorkouts: [],
          upcomingWorkouts: [],
          progressMetrics: {},
          personalRecords: {},
          preferences: {
            workoutDuration: currentAnswers.timeCommitment || '30',
            daysPerWeek: currentAnswers.daysPerWeek || '3',
            equipment: currentAnswers.equipment || []
          }
        },
        
        // 📊 Personal Info & Metrics - Comprehensive user profile
        personalProfile: {
          demographics: {
            age: currentAnswers.age,
            gender: currentAnswers.gender,
            location: currentAnswers.location,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
          },
          physicalMetrics: {
            height: currentAnswers.units === 'imperial' 
              ? { feet: currentAnswers.heightFeet, inches: currentAnswers.heightInches }
              : { cm: currentAnswers.heightCm },
            weight: currentAnswers.weight,
            units: currentAnswers.units,
            fitnessLevel: currentAnswers.fitnessLevel
          },
          goals: {
            primary: currentAnswers.goal,
            activity: currentAnswers.activity,
            subcategory: currentAnswers.subcategory,
            activitySpecific: currentAnswers.activitySpecific
          },
          preferences: {
            notifications: true,
            dataSharing: false,
            privacy: 'standard'
          }
        },
        
        // 🔐 Security & Access
        security: {
          tokenCreated: new Date(),
          lastTokenRefresh: new Date(),
          accessLevel: 'user',
          dataConsent: true
        }
      }, { merge: true });

      console.log('✅ Comprehensive progress saved with token:', userToken);

      // Update URL with token-based navigation
      const params = new URLSearchParams();
      if (userToken) params.set('token', userToken);
      if (path) params.set('path', path);
      if (screen >= 0) params.set('screen', screen.toString());
      if (step > 0) params.set('step', step.toString());
      
      const newUrl = params.toString() ? `?${params.toString()}` : '';
      router.replace(`/onboarding${newUrl}`, { scroll: false });
      
      setConnectionError(null);
    } catch (error: any) {
      console.error('❌ Error saving comprehensive progress:', error);
      
      if (error.code === 'unavailable' || 
          error.code === 'deadline-exceeded' ||
          error.message?.includes('400')) {
        console.log('Enabling offline mode due to connection issues');
        setOfflineMode(true);
        setConnectionError('Working in offline mode - progress saved locally');
      }
      
      // Still update URL for local navigation
      const params = new URLSearchParams();
      if (userToken) params.set('token', userToken);
      if (path) params.set('path', path);
      if (screen >= 0) params.set('screen', screen.toString());
      if (step > 0) params.set('step', step.toString());
      
      const newUrl = params.toString() ? `?${params.toString()}` : '';
      router.replace(`/onboarding${newUrl}`, { scroll: false });
    }
  };

  // 🔍 ENHANCED LOAD PROGRESS - Now with comprehensive token validation
  const loadProgress = async () => {
    if (!user) {
      setIsLoading(false);
      return;
    }
    
    let retryCount = 0;
    const maxRetries = 1;
    
    const attemptLoad = async (): Promise<void> => {
      try {
        console.log(`🔍 Loading comprehensive user data for: ${user.uid}`);
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        
        if (userDoc.exists()) {
          const userData = userDoc.data();
          
          // 🔑 TOKEN VALIDATION & INITIALIZATION
          let existingToken = userData.userToken;
          const urlToken = searchParams.get('token');
          
          // Validate and set token
          if (urlToken && userData.userToken === urlToken) {
            // Valid token from URL matches stored token
            setUserToken(urlToken);
            console.log('✅ Valid token found:', urlToken);
          } else if (existingToken) {
            // Use existing stored token
            setUserToken(existingToken);
            console.log('✅ Using existing token:', existingToken);
          } else {
            // Generate new token for existing user without one
            const newToken = generateUserToken();
            setUserToken(newToken);
            console.log('🆕 Generated new token for existing user:', newToken);
            
            // Save the new token
            await setDoc(doc(db, 'users', user.uid), {
              userToken: newToken,
              security: {
                tokenCreated: new Date(),
                lastTokenRefresh: new Date(),
                accessLevel: 'user',
                dataConsent: true
              }
            }, { merge: true });
          }
          
          // Check if onboarding is already completed
          if (userData.hasCompletedOnboarding === true) {
            console.log('✅ User has completed onboarding, redirecting to dashboard');
            const token = userToken || existingToken || generateUserToken();
            router.push(`/dashboard?token=${token}`);
            return;
          }

          // 📊 LOAD COMPREHENSIVE PROGRESS DATA
          const progress = userData.onboardingProgress;
          if (progress) {
            setCurrentScreen(progress.currentScreen || 0);
            setCurrentStep(progress.currentStep || 0);
            setOnboardingPath(progress.onboardingPath || null);
            setAnswers(progress.answers || {});
            setSelectedActivity(progress.selectedActivity || null);
            
            console.log('📊 Loaded existing progress:', {
              screen: progress.currentScreen,
              step: progress.currentStep,
              path: progress.onboardingPath,
              activity: progress.selectedActivity
            });
          } else {
            // 🆕 NEW USER - Initialize from URL parameters
            const urlPath = searchParams.get('path') as 'goal-focused' | 'exploratory' | null;
            const urlScreen = parseInt(searchParams.get('screen') || '0');
            const urlStep = parseInt(searchParams.get('step') || '0');
            
            if (urlPath) {
              setOnboardingPath(urlPath);
              setCurrentScreen(urlPath === 'goal-focused' ? -1 : -2);
              setCurrentStep(urlStep);
            } else {
              setCurrentScreen(urlScreen);
            }
            
            console.log('🆕 New user initialized:', { urlPath, urlScreen, urlStep });
          }
          
          // 🔄 UPDATE URL WITH CURRENT TOKEN
          const params = new URLSearchParams();
          const currentToken = userToken || existingToken;
          if (currentToken) params.set('token', currentToken);
          if (progress?.onboardingPath) params.set('path', progress.onboardingPath);
          if (progress?.currentScreen >= 0) params.set('screen', progress.currentScreen.toString());
          if (progress?.currentStep > 0) params.set('step', progress.currentStep.toString());
          
          const newUrl = params.toString() ? `?${params.toString()}` : '';
          router.replace(`/onboarding${newUrl}`, { scroll: false });
          
        } else {
          // 🆕 COMPLETELY NEW USER - Create comprehensive profile
          console.log('🆕 Creating new user profile with comprehensive data structure');
          
          const newToken = generateUserToken();
          setUserToken(newToken);
          setCurrentScreen(0);
          
          // Initialize comprehensive user data structure
          await setDoc(doc(db, 'users', user.uid), {
            // Core identification
            userToken: newToken,
            createdAt: new Date(),
            lastActive: new Date(),
            
            // Onboarding state
            hasCompletedOnboarding: false,
            onboardingProgress: {
              currentScreen: 0,
              currentStep: 0,
              onboardingPath: null,
              answers: {},
              selectedActivity: null,
              lastUpdated: new Date(),
              token: newToken
            },
            
            // 🤖 AI Chat System - Ready for future use
            aiChatSessions: {
              currentSessionId: null,
              totalSessions: 0,
              lastChatDate: null,
              chatHistory: [],
              preferences: {
                aiTone: 'supportive',
                responseLength: 'medium',
                focusAreas: []
              }
            },
            
            // 🏋️ Training System - Ready for programs
            trainingData: {
              currentProgram: null,
              completedWorkouts: [],
              upcomingWorkouts: [],
              progressMetrics: {},
              personalRecords: {},
              preferences: {}
            },
            
            // 📊 Personal Profile - Will be filled during onboarding
            personalProfile: {
              demographics: {},
              physicalMetrics: {},
              goals: {},
              preferences: {
                notifications: true,
                dataSharing: false,
                privacy: 'standard'
              }
            },
            
            // 🔐 Security
            security: {
              tokenCreated: new Date(),
              lastTokenRefresh: new Date(),
              accessLevel: 'user',
              dataConsent: true
            }
          });
          
          // Update URL with new token
          router.replace(`/onboarding?token=${newToken}`, { scroll: false });
          
          console.log('✅ New user profile created with token:', newToken);
        }
      } catch (error: any) {
        console.error('❌ Error loading user data:', error);
        
        // Retry logic
        if (retryCount < maxRetries && (
          error.code === 'unavailable' || 
          error.code === 'deadline-exceeded' ||
          error.message?.includes('400')
        )) {
          retryCount++;
          console.log(`🔄 Retrying load (attempt ${retryCount}/${maxRetries})`);
          await new Promise(resolve => setTimeout(resolve, 1000 * retryCount));
          return attemptLoad();
        }
        
        // 📴 OFFLINE MODE - Generate local token
        console.log('📴 Enabling offline mode with local token');
        setOfflineMode(true);
        setConnectionError('Working in offline mode - data will sync when online');
        
        const localToken = generateUserToken();
        setUserToken(localToken);
        
        // Use URL parameters or start fresh
        const urlPath = searchParams.get('path') as 'goal-focused' | 'exploratory' | null;
        const urlScreen = parseInt(searchParams.get('screen') || '0');
        const urlStep = parseInt(searchParams.get('step') || '0');
        
        if (urlPath) {
          setOnboardingPath(urlPath);
          setCurrentScreen(urlPath === 'goal-focused' ? -1 : -2);
          setCurrentStep(urlStep);
        } else {
          setCurrentScreen(urlScreen);
        }
        
        // Update URL with local token
        router.replace(`/onboarding?token=${localToken}`, { scroll: false });
      }
    };
    
    await attemptLoad();
    setIsLoading(false);
  };

  useEffect(() => {
    loadProgress();
  }, [user, searchParams]);

  const handleNext = async () => {
    setIsTransitioning(true);
    
    let newScreen = currentScreen;
    let newStep = currentStep;
    
    setTimeout(async () => {
      if (currentScreen < 1) {
        newScreen = currentScreen + 1;
        setCurrentScreen(newScreen);
      } else if (onboardingPath === 'goal-focused' && currentStep < GOAL_FOCUSED_STEPS.length - 1) {
        newStep = currentStep + 1;
        setCurrentStep(newStep);
      } else if (onboardingPath === 'goal-focused') {
        completeOnboarding(answers as OnboardingAnswers, 'goal-focused');
        return;
      }
      
      // Save progress after state update
      await saveProgress(newScreen, newStep, onboardingPath, answers);
      setIsTransitioning(false);
    }, 600);
  };

  const handlePrevious = async () => {
    setIsTransitioning(true);
    
    let newScreen = currentScreen;
    let newStep = currentStep;
    let newPath = onboardingPath;
    
    setTimeout(async () => {
      if (onboardingPath === 'goal-focused' && currentStep > 0) {
        newStep = currentStep - 1;
        setCurrentStep(newStep);
      } else if (onboardingPath === 'goal-focused' && currentStep === 0) {
        newScreen = 1;
        newPath = null;
        setCurrentScreen(newScreen);
        setOnboardingPath(newPath);
      } else if (currentScreen > 0) {
        newScreen = currentScreen - 1;
        setCurrentScreen(newScreen);
      }
      
      // Save progress after state update
      await saveProgress(newScreen, newStep, newPath, answers);
      setIsTransitioning(false);
    }, 600);
  };

  const handlePathChoice = async (path: 'goal-focused' | 'exploratory') => {
    setOnboardingPath(path);
    setIsTransitioning(true);
    
    setTimeout(async () => {
      let newScreen = currentScreen;
      let newStep = currentStep;
      
      if (path === 'goal-focused') {
        newScreen = -1; // Switch to step-based flow
        newStep = 0;
        setCurrentScreen(newScreen);
        setCurrentStep(newStep);
      } else {
        // For exploratory, start conversation-driven onboarding
        newScreen = -2; // Switch to conversation flow
        setCurrentScreen(newScreen);
        initializeExploratoryConversation();
      }
      
      // Save progress after state update
      await saveProgress(newScreen, newStep, path, answers);
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

  const handleAnswer = async (field: string, value: string | string[] | any) => {
    const newAnswers = { ...answers, [field]: value };
    setAnswers(newAnswers);
    
    if (field === 'activity') {
      setSelectedActivity(value as string);
    }
    
    // Save progress after answer update
    await saveProgress(currentScreen, currentStep, onboardingPath, newAnswers);
    
    // Auto-advance for subcategory selection to improve UX
    if (field === 'subcategory') {
      setTimeout(() => {
        handleNext();
      }, 300); // Small delay for visual feedback
    }
  };

  // 🎯 ENHANCED COMPLETE ONBOARDING - Now with comprehensive data structure and token system
  const completeOnboarding = async (finalAnswers: OnboardingAnswers, path: 'goal-focused' | 'exploratory'): Promise<void> => {
    if (!user) return;

    try {
      const personalization = generatePersonalization(finalAnswers, path);
      
      // 🏗️ SAVE COMPREHENSIVE USER DATA with token
      await setDoc(doc(db, 'users', user.uid), {
        // ✅ COMPLETION STATUS
        hasCompletedOnboarding: true,
        completedAt: new Date(),
        onboardingPath: path,
        onboardingAnswers: finalAnswers,
        userPersonalization: personalization,
        
        // 🔑 TOKEN SYSTEM - Maintain user token for entire app
        userToken: userToken,
        lastActive: new Date(),
        
        // 📊 ENHANCED PERSONAL PROFILE - Complete user data
        personalProfile: {
          demographics: {
            age: finalAnswers.age,
            gender: finalAnswers.gender,
            location: finalAnswers.location,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
          },
          physicalMetrics: {
            height: finalAnswers.units === 'imperial' 
              ? { feet: finalAnswers.heightFeet, inches: finalAnswers.heightInches }
              : { cm: finalAnswers.heightCm },
            weight: finalAnswers.weight,
            units: finalAnswers.units,
            fitnessLevel: finalAnswers.fitnessLevel
          },
          goals: {
            primary: finalAnswers.goal,
            activity: finalAnswers.activity,
            subcategory: finalAnswers.subcategory,
            activitySpecific: finalAnswers.activitySpecific
          },
          preferences: {
            notifications: true,
            dataSharing: false,
            privacy: 'standard',
            theme: personalization.visualTheme
          }
        },
        
        // 🏋️ TRAINING SYSTEM - Initialize with onboarding data
        trainingData: {
          currentProgram: null,
          completedWorkouts: [],
          upcomingWorkouts: [],
          progressMetrics: {
            startDate: new Date(),
            initialFitnessLevel: finalAnswers.fitnessLevel,
            targetGoal: finalAnswers.goal
          },
          personalRecords: {},
          preferences: {
            workoutDuration: finalAnswers.timeCommitment,
            daysPerWeek: finalAnswers.daysPerWeek,
            equipment: finalAnswers.equipment,
            preferredDays: finalAnswers.preferredDays || []
          }
        },
        
        // 🤖 AI CHAT SYSTEM - Initialize with persona preferences
        aiChatSessions: {
          currentSessionId: null,
          totalSessions: 0,
          lastChatDate: null,
          chatHistory: [],
          preferences: {
            aiTone: personalization.aiTone,
            responseLength: 'medium',
            focusAreas: [finalAnswers.activity, finalAnswers.goal],
            selectedPersona: personalization.selectedPersona
          }
        },
        
        // 🔐 SECURITY & ACCESS - Complete security profile
        security: {
          tokenCreated: new Date(),
          lastTokenRefresh: new Date(),
          accessLevel: 'user',
          dataConsent: true,
          onboardingCompleted: true
        },
        
        // 🗑️ CLEANUP - Clear onboarding progress since completed
        onboardingProgress: null
      }, { merge: true });

      console.log('🎉 ONBOARDING COMPLETED! Comprehensive user data saved with token:', userToken);
      console.log('📊 User Profile:', {
        activity: finalAnswers.activity,
        goal: finalAnswers.goal,
        fitnessLevel: finalAnswers.fitnessLevel,
        persona: personalization.selectedPersona,
        token: userToken
      });

      setIsTransitioning(true);
      
      setTimeout(() => {
        // 🚀 REDIRECT TO DASHBOARD with unique user token
        router.push(`/dashboard?token=${userToken}`);
        onComplete(personalization);
      }, 1000);
    } catch (error) {
      console.error('❌ Error completing onboarding:', error);
      
      // 🔄 FALLBACK - Still redirect even if save fails
      setTimeout(() => {
        router.push(`/dashboard?token=${userToken}`);
        onComplete(generatePersonalization(finalAnswers, path));
      }, 1000);
    }
  };

  const generatePersonalization = (answers: OnboardingAnswers, path: 'goal-focused' | 'exploratory'): UserPersonalization => {
    let aiTone: UserPersonalization['aiTone'] = 'supportive';
    let visualTheme: UserPersonalization['visualTheme'] = 'calm';

    // Enhanced persona selection based on user profile
    const personaSelection = PersonaSelectionService.selectPersona(answers);
    console.log('🤖 Persona Selection Result:', personaSelection);

    // Adjust UI tone based on selected persona
    switch (personaSelection.persona) {
      case 'BeginnerGuide':
        aiTone = 'supportive';
        visualTheme = 'gentle';
        break;
      case 'SportSpecific':
        aiTone = 'direct';
        visualTheme = 'energetic';
        break;
      case 'TrainingPage':
        aiTone = 'minimal';
        visualTheme = 'calm';
        break;
      default: // FitCoach
        aiTone = 'supportive';
        visualTheme = 'energetic';
        break;
    }

    // Legacy tone adjustments (fallback)
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
      onboardingAnswers: answers,
      // Enhanced persona integration
      selectedPersona: personaSelection.persona,
      personaSelection: personaSelection,
      safetyPriority: personaSelection.safetyPriority,
      progressionRate: personaSelection.progressionRate
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
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
        <div className="text-center max-w-md p-8">
          <div className="mb-8 flex justify-center">
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Logo%2F317ecd07-214d-4ac0-99a8-4e19c2ed8ebd.png?alt=media&token=de760234-5f32-470d-b88d-d55368799d36" 
              alt="TrainMeAI Logo" 
              className="w-20 h-20 object-contain"
            />
          </div>
          <h1 className="text-2xl font-light text-gray-900 mb-2 font-sans">MyPace</h1>
          <p className="text-gray-600 mb-8 font-sans">Preparing your personalized onboarding...</p>
          <div className="w-8 h-8 border-3 border-gray-200 border-t-blue-500 rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    );
  }

  // Welcome to MyPace screen
  if (currentScreen === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-teal-500 flex flex-col items-center justify-center px-8 relative">
        <div className={`text-center transition-all duration-1000 ${isTransitioning ? 'opacity-0 transform translate-y-8' : 'opacity-100 transform translate-y-0'}`}>
          <div className="mb-12">
            <div className="mb-8 flex justify-center">
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Logo%2F8819f3df-3241-4f21-be52-827df2f7cc25.png?alt=media&token=a017389c-c181-4143-9366-67bd70c9b6dd" 
                alt="TrainMeAI Logo" 
                className="h-20 w-auto object-contain"
              />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-semibold text-white tracking-tight mb-6" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
              Welcome to MyPace
            </h1>
          </div>
          
          <p className="text-xl text-white/90 mb-16 font-medium max-w-2xl mx-auto leading-relaxed">
            Your AI-powered fitness companion designed to help you achieve your goals with personalized training programs and expert guidance
          </p>
          
          <div className="flex justify-center">
            <button
              onClick={handleNext}
              className="group flex items-center gap-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl hover:bg-white/30 transition-all duration-300 font-semibold"
            >
              <span>Get Started</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Path choice screen
  if (currentScreen === 1) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-400 via-blue-500 to-cyan-500 flex flex-col items-center justify-center px-8 relative">
        <div className={`text-center transition-all duration-1000 max-w-4xl mx-auto ${isTransitioning ? 'opacity-0 transform translate-y-8' : 'opacity-100 transform translate-y-0'}`}>
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight leading-tight">
            Start your journey
          </h1>
          
          <p className="text-lg text-white/90 mb-16 font-light max-w-2xl mx-auto">
            Choose the path that feels right for you
          </p>
          
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <button
              onClick={() => handlePathChoice('goal-focused')}
              className="group flex-1 bg-white/95 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-105 text-left"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-2xl group-hover:bg-blue-200 transition-colors duration-300">
                  <Target className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    I have a goal I need help with
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    You know what you want to achieve and need a structured plan to get there
                  </p>
                </div>
              </div>
            </button>
            
            <button
              onClick={() => handlePathChoice('exploratory')}
              className="group flex-1 bg-white/95 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-105 text-left"
            >
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-2xl group-hover:bg-green-200 transition-colors duration-300">
                  <Heart className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    I'm not sure what I'd like to do
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
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

                  {/* Simplified Activity-Specific Questions */}
                  
                  {/* Cycling - Simplified */}
                  {selectedActivity === 'cardio-endurance' && answers.subcategory === 'cycling' && (
                    <div>
                      <label className="block text-base font-medium text-gray-900 mb-2">What's your main cycling focus?</label>
                      <div className="grid grid-cols-1 gap-3">
                        {[
                          { id: 'general-fitness', label: 'General Fitness & Health', description: 'Build overall cycling fitness' },
                          { id: 'event-prep', label: 'Event Preparation', description: 'Training for a specific cycling event' },
                          { id: 'performance', label: 'Performance & Power', description: 'Improve speed, power, and cycling performance' }
                        ].map((goal) => (
                          <button
                            key={goal.id}
                            onClick={() => handleAnswer('activitySpecific', { ...answers.activitySpecific, cyclingFocus: goal.id })}
                            className={`bg-white border rounded-lg p-3 text-left transition-all duration-200 hover:bg-gray-50 ${
                              answers.activitySpecific?.cyclingFocus === goal.id
                                ? 'border-blue-500 bg-blue-50' 
                                : 'border-gray-200'
                            }`}
                          >
                            <div className="font-medium text-gray-900">{goal.label}</div>
                            <div className="text-sm text-gray-600">{goal.description}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Triathlon/Multisport */}
                  {selectedActivity === 'cardio-endurance' && answers.subcategory === 'triathlon' && (
                    <>
                      <div>
                        <label className="block text-base font-medium text-gray-900 mb-2">What's your triathlon goal?</label>
                        <div className="grid grid-cols-1 gap-3">
                          {[
                            { id: 'fitness-testing', label: 'Fitness Testing', description: 'Assess current fitness levels' },
                            { id: 'season-prep', label: 'Season Preparation', description: 'Off-season training without specific event' },
                            { id: 'race-prep', label: 'Race Preparation', description: 'Training for an upcoming triathlon' }
                          ].map((goal) => (
                            <button
                              key={goal.id}
                              onClick={() => handleAnswer('activitySpecific', { ...answers.activitySpecific, triathlonGoal: goal.id })}
                              className={`bg-white border rounded-lg p-3 text-left transition-all duration-200 hover:bg-gray-50 ${
                                answers.activitySpecific?.triathlonGoal === goal.id
                                  ? 'border-blue-500 bg-blue-50' 
                                  : 'border-gray-200'
                              }`}
                            >
                              <div className="font-medium text-gray-900">{goal.label}</div>
                              <div className="text-sm text-gray-600">{goal.description}</div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {answers.activitySpecific?.triathlonGoal === 'race-prep' && (
                        <div>
                          <label className="block text-base font-medium text-gray-900 mb-2">What distance is your event?</label>
                          <div className="grid grid-cols-1 gap-3">
                            {[
                              { id: 'sprint', label: 'Sprint Distance', description: '750m swim, 20km bike, 5km run' },
                              { id: 'olympic', label: 'Olympic Distance', description: '1.5km swim, 40km bike, 10km run' },
                              { id: 'half', label: 'Half Distance', description: '1.9km swim, 90km bike, 21km run' },
                              { id: 'full', label: 'Full Distance', description: '3.8km swim, 180km bike, 42km run' }
                            ].map((distance) => (
                              <button
                                key={distance.id}
                                onClick={() => handleAnswer('activitySpecific', { ...answers.activitySpecific, triathlonDistance: distance.id })}
                                className={`bg-white border rounded-lg p-3 text-left transition-all duration-200 hover:bg-gray-50 ${
                                  answers.activitySpecific?.triathlonDistance === distance.id
                                    ? 'border-blue-500 bg-blue-50' 
                                    : 'border-gray-200'
                                }`}
                              >
                                <div className="font-medium text-gray-900">{distance.label}</div>
                                <div className="text-sm text-gray-600">{distance.description}</div>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {(answers.activitySpecific?.triathlonGoal === 'season-prep' || answers.activitySpecific?.triathlonDistance) && (
                        <div>
                          <label className="block text-base font-medium text-gray-900 mb-2">Which area needs the most improvement?</label>
                          <div className="grid grid-cols-1 gap-3">
                            {[
                              { id: 'swimming', label: 'Become a stronger swimmer', description: 'Focus on swim technique and endurance' },
                              { id: 'cycling', label: 'Become a stronger cyclist', description: 'Build cycling power and endurance' },
                              { id: 'running', label: 'Become a stronger runner', description: 'Improve running speed and endurance' },
                              { id: 'balanced', label: 'A balanced plan is best', description: 'Equal focus across all three disciplines' }
                            ].map((focus) => (
                              <button
                                key={focus.id}
                                onClick={() => handleAnswer('activitySpecific', { ...answers.activitySpecific, triathlonFocus: focus.id })}
                                className={`bg-white border rounded-lg p-3 text-left transition-all duration-200 hover:bg-gray-50 ${
                                  answers.activitySpecific?.triathlonFocus === focus.id
                                    ? 'border-blue-500 bg-blue-50' 
                                    : 'border-gray-200'
                                }`}
                              >
                                <div className="font-medium text-gray-900">{focus.label}</div>
                                <div className="text-sm text-gray-600">{focus.description}</div>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  )}

                  {/* Running */}
                  {selectedActivity === 'cardio-endurance' && answers.subcategory === 'running' && (
                    <>
                      <div>
                        <label className="block text-base font-medium text-gray-900 mb-2">What's your primary running goal?</label>
                        <div className="grid grid-cols-1 gap-3">
                          {[
                            { id: 'general-fitness', label: 'General Fitness', description: 'Build running fitness and endurance' },
                            { id: 'event-prep', label: 'Event Preparation', description: 'Training for a specific race distance' }
                          ].map((goal) => (
                            <button
                              key={goal.id}
                              onClick={() => handleAnswer('activitySpecific', { ...answers.activitySpecific, runningGoal: goal.id })}
                              className={`bg-white border rounded-lg p-3 text-left transition-all duration-200 hover:bg-gray-50 ${
                                answers.activitySpecific?.runningGoal === goal.id
                                  ? 'border-blue-500 bg-blue-50' 
                                  : 'border-gray-200'
                              }`}
                            >
                              <div className="font-medium text-gray-900">{goal.label}</div>
                              <div className="text-sm text-gray-600">{goal.description}</div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {answers.activitySpecific?.runningGoal === 'event-prep' && (
                        <div>
                          <label className="block text-base font-medium text-gray-900 mb-2">What's your target race distance?</label>
                          <div className="grid grid-cols-1 gap-3">
                            {[
                              { id: '5k', label: '5K', description: 'Short distance speed focus' },
                              { id: '10k', label: '10K', description: 'Mid-distance endurance' },
                              { id: 'half-marathon', label: 'Half Marathon', description: '21.1km / 13.1 miles' },
                              { id: 'marathon', label: 'Marathon', description: '42.2km / 26.2 miles' },
                              { id: 'ultramarathon', label: 'Ultramarathon', description: 'Beyond marathon distance' }
                            ].map((distance) => (
                              <button
                                key={distance.id}
                                onClick={() => handleAnswer('activitySpecific', { ...answers.activitySpecific, runningDistance: distance.id })}
                                className={`bg-white border rounded-lg p-3 text-left transition-all duration-200 hover:bg-gray-50 ${
                                  answers.activitySpecific?.runningDistance === distance.id
                                    ? 'border-blue-500 bg-blue-50' 
                                    : 'border-gray-200'
                                }`}
                              >
                                <div className="font-medium text-gray-900">{distance.label}</div>
                                <div className="text-sm text-gray-600">{distance.description}</div>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  )}

                  {/* Swimming */}
                  {selectedActivity === 'cardio-endurance' && answers.subcategory === 'swimming' && (
                    <>
                      <div>
                        <label className="block text-base font-medium text-gray-900 mb-2">What's your primary swimming goal?</label>
                        <div className="grid grid-cols-1 gap-3">
                          {[
                            { id: 'general-fitness', label: 'General Fitness', description: 'Build swimming fitness and endurance' },
                            { id: 'technique-focus', label: 'Technique Focus', description: 'Improve stroke technique and efficiency' },
                            { id: 'event-prep', label: 'Event Preparation', description: 'Training for swimming competitions' }
                          ].map((goal) => (
                            <button
                              key={goal.id}
                              onClick={() => handleAnswer('activitySpecific', { ...answers.activitySpecific, swimmingFocus: goal.id })}
                              className={`bg-white border rounded-lg p-3 text-left transition-all duration-200 hover:bg-gray-50 ${
                                answers.activitySpecific?.swimmingFocus === goal.id
                                  ? 'border-blue-500 bg-blue-50' 
                                  : 'border-gray-200'
                              }`}
                            >
                              <div className="font-medium text-gray-900">{goal.label}</div>
                              <div className="text-sm text-gray-600">{goal.description}</div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {answers.activitySpecific?.swimmingFocus === 'event-prep' && (
                        <div>
                          <label className="block text-base font-medium text-gray-900 mb-2">What type of event are you preparing for?</label>
                          <div className="grid grid-cols-1 gap-3">
                            {[
                              { id: 'pool-meet', label: 'Pool Meet (Masters)', description: 'Competitive pool swimming' },
                              { id: 'open-water', label: 'Open Water Race', description: 'Lake, ocean, or river swimming' },
                              { id: 'triathlon-swim', label: 'Triathlon Swim Leg', description: 'Swimming portion of triathlon' }
                            ].map((eventType) => (
                              <button
                                key={eventType.id}
                                onClick={() => handleAnswer('activitySpecific', { ...answers.activitySpecific, swimmingEventType: eventType.id })}
                                className={`bg-white border rounded-lg p-3 text-left transition-all duration-200 hover:bg-gray-50 ${
                                  answers.activitySpecific?.swimmingEventType === eventType.id
                                    ? 'border-blue-500 bg-blue-50' 
                                    : 'border-gray-200'
                                }`}
                              >
                                <div className="font-medium text-gray-900">{eventType.label}</div>
                                <div className="text-sm text-gray-600">{eventType.description}</div>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  )}

                  {/* Cross-Training Focus */}
                  {selectedActivity === 'mind-body' && (
                    <div>
                      <label className="block text-base font-medium text-gray-900 mb-2">What's your main focus?</label>
                      <div className="grid grid-cols-1 gap-3">
                        {[
                          { id: 'mobility-stability', label: 'Mobility & Stability', description: 'Improve range of motion and stability' },
                          { id: 'strength-support', label: 'Strength Support', description: 'Complement other training with strength work' },
                          { id: 'yoga-practice', label: 'Yoga Practice', description: 'Develop yoga skills and mindfulness' },
                          { id: 'mental-training', label: 'Mental Training', description: 'Focus on mental performance and mindfulness' }
                        ].map((focus) => (
                          <button
                            key={focus.id}
                            onClick={() => handleAnswer('activitySpecific', { ...answers.activitySpecific, crossTrainingFocus: focus.id })}
                            className={`bg-white border rounded-lg p-3 text-left transition-all duration-200 hover:bg-gray-50 ${
                              answers.activitySpecific?.crossTrainingFocus === focus.id
                                ? 'border-blue-500 bg-blue-50' 
                                : 'border-gray-200'
                            }`}
                          >
                            <div className="font-medium text-gray-900">{focus.label}</div>
                            <div className="text-sm text-gray-600">{focus.description}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Strength Training */}
                  {selectedActivity === 'strength-power' && (
                    <>
                      <div>
                        <label className="block text-base font-medium text-gray-900 mb-2">What's your primary strength training goal?</label>
                        <div className="grid grid-cols-1 gap-3">
                          {[
                            { id: 'general-strength', label: 'General Strength & Fitness', description: 'Build overall strength and muscle tone' },
                            { id: 'powerlifting', label: 'Powerlifting', description: 'Focus on squat, bench press, and deadlift' },
                            { id: 'bodybuilding', label: 'Bodybuilding', description: 'Muscle growth and physique development' },
                            { id: 'functional-fitness', label: 'Functional Fitness', description: 'Strength for daily activities and sports' }
                          ].map((goal) => (
                            <button
                              key={goal.id}
                              onClick={() => handleAnswer('activitySpecific', { ...answers.activitySpecific, strengthGoal: goal.id })}
                              className={`bg-white border rounded-lg p-3 text-left transition-all duration-200 hover:bg-gray-50 ${
                                answers.activitySpecific?.strengthGoal === goal.id
                                  ? 'border-blue-500 bg-blue-50' 
                                  : 'border-gray-200'
                              }`}
                            >
                              <div className="font-medium text-gray-900">{goal.label}</div>
                              <div className="text-sm text-gray-600">{goal.description}</div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {answers.activitySpecific?.strengthGoal && (
                        <div>
                          <label className="block text-base font-medium text-gray-900 mb-2">What's your preferred training style?</label>
                          <div className="grid grid-cols-1 gap-3">
                            {[
                              { id: 'barbell-focused', label: 'Barbell-Focused', description: 'Compound movements with barbells' },
                              { id: 'dumbbell-bodyweight', label: 'Dumbbell & Bodyweight', description: 'Versatile training with dumbbells and bodyweight' },
                              { id: 'machine-based', label: 'Machine-Based', description: 'Gym machines and cable systems' },
                              { id: 'mixed-approach', label: 'Mixed Approach', description: 'Combination of all equipment types' }
                            ].map((style) => (
                              <button
                                key={style.id}
                                onClick={() => handleAnswer('activitySpecific', { ...answers.activitySpecific, strengthStyle: style.id })}
                                className={`bg-white border rounded-lg p-3 text-left transition-all duration-200 hover:bg-gray-50 ${
                                  answers.activitySpecific?.strengthStyle === style.id
                                    ? 'border-blue-500 bg-blue-50' 
                                    : 'border-gray-200'
                                }`}
                              >
                                <div className="font-medium text-gray-900">{style.label}</div>
                                <div className="text-sm text-gray-600">{style.description}</div>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  )}

                  {/* Team Sports */}
                  {selectedActivity === 'team-sports' && (
                    <>
                      <div>
                        <label className="block text-base font-medium text-gray-900 mb-2">What's your current season status?</label>
                        <div className="grid grid-cols-1 gap-3">
                          {[
                            { id: 'in-season', label: 'In-Season', description: 'Currently playing/competing regularly' },
                            { id: 'off-season', label: 'Off-Season', description: 'Between seasons, building fitness' },
                            { id: 'pre-season', label: 'Pre-Season', description: 'Preparing for upcoming season' },
                            { id: 'recreational', label: 'Recreational', description: 'Playing casually year-round' }
                          ].map((status) => (
                            <button
                              key={status.id}
                              onClick={() => handleAnswer('activitySpecific', { ...answers.activitySpecific, seasonStatus: status.id })}
                              className={`bg-white border rounded-lg p-3 text-left transition-all duration-200 hover:bg-gray-50 ${
                                answers.activitySpecific?.seasonStatus === status.id
                                  ? 'border-blue-500 bg-blue-50' 
                                  : 'border-gray-200'
                              }`}
                            >
                              <div className="font-medium text-gray-900">{status.label}</div>
                              <div className="text-sm text-gray-600">{status.description}</div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {answers.activitySpecific?.seasonStatus && (
                        <div>
                          <label className="block text-base font-medium text-gray-900 mb-2">What's your primary focus?</label>
                          <div className="grid grid-cols-1 gap-3">
                            {[
                              { id: 'injury-prevention', label: 'Injury Prevention', description: 'Strengthen weak areas and prevent common injuries' },
                              { id: 'performance-conditioning', label: 'Performance Conditioning', description: 'Improve speed, agility, and sport-specific fitness' },
                              { id: 'return-to-play', label: 'Return to Play', description: 'Recovering from injury and getting back to sport' },
                              { id: 'general-fitness', label: 'General Fitness', description: 'Maintain overall fitness for recreational play' }
                            ].map((focus) => (
                              <button
                                key={focus.id}
                                onClick={() => handleAnswer('activitySpecific', { ...answers.activitySpecific, teamSportsFocus: focus.id })}
                                className={`bg-white border rounded-lg p-3 text-left transition-all duration-200 hover:bg-gray-50 ${
                                  answers.activitySpecific?.teamSportsFocus === focus.id
                                    ? 'border-blue-500 bg-blue-50' 
                                    : 'border-gray-200'
                                }`}
                              >
                                <div className="font-medium text-gray-900">{focus.label}</div>
                                <div className="text-sm text-gray-600">{focus.description}</div>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {answers.activitySpecific?.teamSportsFocus && (
                        <div>
                          <label className="block text-base font-medium text-gray-900 mb-2">How often do you currently practice/play?</label>
                          <div className="grid grid-cols-1 gap-3">
                            {[
                              { id: 'daily', label: 'Daily', description: 'Training or playing every day' },
                              { id: '4-6-times', label: '4-6 times per week', description: 'Regular training schedule' },
                              { id: '2-3-times', label: '2-3 times per week', description: 'Moderate training frequency' },
                              { id: '1-time', label: 'Once per week', description: 'Recreational or limited schedule' },
                              { id: 'irregular', label: 'Irregular/Seasonal', description: 'Varies by season or availability' }
                            ].map((frequency) => (
                              <button
                                key={frequency.id}
                                onClick={() => handleAnswer('activitySpecific', { ...answers.activitySpecific, teamSportsFrequency: frequency.id })}
                                className={`bg-white border rounded-lg p-3 text-left transition-all duration-200 hover:bg-gray-50 ${
                                  answers.activitySpecific?.teamSportsFrequency === frequency.id
                                    ? 'border-blue-500 bg-blue-50' 
                                    : 'border-gray-200'
                                }`}
                              >
                                <div className="font-medium text-gray-900">{frequency.label}</div>
                                <div className="text-sm text-gray-600">{frequency.description}</div>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  )}

                  {/* Add more activity-specific sections as needed */}
                  {!['cardio-endurance', 'strength-power', 'mind-body', 'team-sports'].includes(answers.activity || '') && (
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