'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '@/lib/firebase';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { 
  ArrowRight, 
  ArrowLeft, 
  Heart, 
  Sparkles, 
  Send, 
  ThumbsUp, 
  ThumbsDown
} from 'lucide-react';
import { PersonaSelectionService, PersonaSelectionResult } from '@/lib/services/persona-selection.service';
import { CoachPersona } from '@/lib/types/training-system';
import { aiTrainingService, type ConversationData } from '@/lib/services/ai-training-service';

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
  currentStatus?: string; // New field for current training status
  timeCommitment: string;
  sessionLength?: string; // New field for preferred session length
  daysPerWeek: string;
  preferredDays?: string[];
  equipment: string[];
  trainingEnvironments?: string[];
  goal: string;
  
  // Enhanced injury tracking
  injuries?: string; // New field for injury history and limitations
  
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
    
    // Enhanced running-specific fields
    currentMileage?: string; // '0-5', '6-15', '16-30', '31-50', '50+'
    biggestChallenge?: string; // 'endurance', 'speed', 'injury', 'consistency', 'race-prep'
    
    // Enhanced triathlon-specific fields
    triExperience?: string; // 'never', 'sprint', 'olympic', 'half', 'full'
    weakestDiscipline?: string; // 'swimming', 'cycling', 'running', 'transitions', 'all'
    
    // Enhanced strength-specific fields
    currentAbilities?: {
      pushups?: string; // 'None', '1-10', '11-25', '25+'
      pullups?: string; // 'None', '1-5', '6-10', '10+'
      squat?: string; // 'No', 'Yes with difficulty', 'Yes easily'
      plank?: string; // '<30 sec', '30-60 sec', '1-2 min', '2+ min'
    };
    trainingStyleInterest?: string; // 'bodybuilding', 'powerlifting', 'olympic', 'functional'
    
    // Enhanced Hyrox-specific fields
    hyroxAbilities?: {
      oneKmRun?: string; // '>6 min', '5-6 min', '4-5 min', '<4 min'
      burpees?: string; // '1 min', '3 min', '5+ min'
      sled?: string; // 'Never tried', 'Light weight', 'Moderate', 'Heavy'
    };
    hyroxWeakness?: string; // 'running', 'functional', 'skills', 'pacing'
    
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

// 🎯 ENHANCED GOAL-FOCUSED STEPS - Updated structure
const GOAL_FOCUSED_STEPS = [
  { 
    type: 'activity-selection', 
    title: 'Choose Your Training Focus', 
    subtitle: 'What type of movement calls to you? This will shape your entire fitness journey.' 
  },
  { 
    type: 'subcategory-selection', 
    title: 'Get Specific', 
    subtitle: 'Let\'s dive deeper into your chosen activity to create the perfect program.' 
  },
  { 
    type: 'demographics', 
    title: 'Tell Us About Yourself', 
    subtitle: 'Understanding who you are helps us create a plan that truly fits your life and goals.' 
  },
  { 
    type: 'experience-level', 
    title: 'What\'s Your Experience Level?', 
    subtitle: 'There\'s no judgment here - just honest assessment to build the perfect starting point.' 
  },
  { 
    type: 'current-status', 
    title: 'Current Training Status', 
    subtitle: 'Where are you right now in your fitness journey? This helps us meet you where you are.' 
  },
  { 
    type: 'time-commitment', 
    title: 'Time Availability', 
    subtitle: 'The best fitness plan is one you can actually stick to. Let\'s find your sweet spot.' 
  },
  { 
    type: 'equipment-access', 
    title: 'Equipment & Training Environment', 
    subtitle: 'Amazing results don\'t require expensive equipment. Let\'s see what tools we have to work with.' 
  },
  { 
    type: 'primary-goal', 
    title: 'What\'s Your Main Goal?', 
    subtitle: 'What drives you? Understanding your deeper motivation helps us create a plan that resonates.' 
  },
  { 
    type: 'activity-specific', 
    title: 'Ready to Create Your Plan', 
    subtitle: 'Perfect! We have everything we need to create your personalized training program. Let\'s finalize the details and get started.' 
  }
];

// Activity options with comprehensive categories
const ACTIVITIES = [
  {
    id: 'cardio-endurance',
    title: 'Cardio & Endurance',
    description: 'Running, Cycling, Swimming, Triathlon, General Cardio',
    icon: '🏃‍♂️',
    gradient: 'linear-gradient(45deg, rgba(230,57,70,0.8), rgba(168,218,220,0.8))',
    heroTitle: 'Build Your Endurance',
    heroDescription: 'From 5Ks to marathons, cycling adventures to swimming laps - let\'s build your cardiovascular fitness.',
    subcategories: [
      { id: 'running', name: 'Running (Road, Trail, Track)', icon: '🏃‍♂️' },
      { id: 'cycling', name: 'Cycling (Road, Mountain, Indoor)', icon: '🚴‍♂️' },
      { id: 'swimming', name: 'Swimming (Pool, Open Water)', icon: '🏊‍♂️' },
      { id: 'triathlon', name: 'Triathlon/Duathlon', icon: '🏆' },
      { id: 'ironman', name: 'Ironman/Ultra-Distance Triathlon', icon: '🔥' },
      { id: 'general-cardio', name: 'General Cardio & Cross-training', icon: '❤️' }
    ]
  },
  {
    id: 'strength-power',
    title: 'Strength & Power',
    description: 'Weightlifting, Bodybuilding, Powerlifting, CrossFit, General Strength',
    icon: '🏋️‍♂️',
    gradient: 'linear-gradient(45deg, rgba(29,53,87,0.8), rgba(69,123,157,0.8))',
    heroTitle: 'Build Your Strength',
    heroDescription: 'From bodyweight basics to powerlifting prowess - transform your strength and confidence.',
    subcategories: [
      { id: 'general-strength', name: 'General Fitness & Toning', icon: '🏋️‍♂️' },
      { id: 'muscle-building', name: 'Muscle Building (Hypertrophy)', icon: '💪' },
      { id: 'powerlifting', name: 'Strength & Powerlifting', icon: '🏆' },
      { id: 'crossfit', name: 'Functional Fitness/CrossFit', icon: '⚡' },
      { id: 'hyrox', name: 'Hyrox/Functional Racing', icon: '🛡️' },
      { id: 'bodyweight', name: 'Bodyweight & Calisthenics', icon: '🤸‍♂️' }
    ]
  },
  {
    id: 'mind-body',
    title: 'Mind-Body & Flexibility',
    description: 'Yoga, Pilates, Barre, Flexibility, Mindfulness',
    icon: '🧘‍♀️',
    gradient: 'linear-gradient(45deg, rgba(92,112,110,0.8), rgba(241,250,238,0.8))',
    heroTitle: 'Find Your Balance',
    heroDescription: 'Discover harmony between mind and body through mindful movement and flexibility.',
    subcategories: [
      { id: 'yoga', name: 'Yoga (Hatha, Vinyasa, Power)', icon: '🧘‍♀️' },
      { id: 'pilates', name: 'Pilates (Mat, Reformer)', icon: '🤸‍♀️' },
      { id: 'barre', name: 'Barre', icon: '🩰' },
      { id: 'flexibility', name: 'General Stretching & Mobility', icon: '🤸‍♂️' },
      { id: 'mindfulness', name: 'Mindfulness & Meditation', icon: '🧠' }
    ]
  },
  {
    id: 'team-sports',
    title: 'Team Sports',
    description: 'Soccer, Basketball, Rugby, Hockey, Volleyball',
    icon: '⚽',
    gradient: 'linear-gradient(45deg, rgba(189,177,181,0.8), rgba(152,173,195,0.8))',
    heroTitle: 'Dominate Your Sport',
    heroDescription: 'Train like a pro for your favorite team sport and elevate your game.',
    subcategories: [
      { id: 'soccer', name: 'Football/Soccer', icon: '⚽' },
      { id: 'basketball', name: 'Basketball', icon: '🏀' },
      { id: 'rugby', name: 'Rugby', icon: '🏉' },
      { id: 'hockey', name: 'Hockey', icon: '🏒' },
      { id: 'volleyball', name: 'Volleyball', icon: '🏐' },
      { id: 'other-team', name: 'Other Team Sport', icon: '🏟️' }
    ]
  },
  {
    id: 'outdoor-adventure',
    title: 'Outdoor & Adventure',
    description: 'Hiking, Climbing, Skiing, Kayaking, Surfing',
    icon: '🏔️',
    gradient: 'linear-gradient(45deg, rgba(55,50,23,0.8), rgba(92,112,110,0.8))',
    heroTitle: 'Embrace Adventure',
    heroDescription: 'Prepare for outdoor adventures and build the fitness for your next expedition.',
    subcategories: [
      { id: 'hiking', name: 'Hiking/Backpacking', icon: '🥾' },
      { id: 'climbing', name: 'Rock Climbing/Bouldering', icon: '🧗‍♂️' },
      { id: 'skiing', name: 'Skiing/Snowboarding', icon: '⛷️' },
      { id: 'water-sports', name: 'Kayaking/Surfing/Paddleboarding', icon: '🏄‍♂️' },
      { id: 'other-outdoor', name: 'Other Outdoor Activity', icon: '🏕️' }
    ]
  },
  {
    id: 'combat-sports',
    title: 'Combat Sports',
    description: 'Boxing, MMA, Martial Arts, Wrestling',
    icon: '🥊',
    gradient: 'linear-gradient(45deg, rgba(230,57,70,0.8), rgba(29,53,87,0.8))',
    heroTitle: 'Master Combat Sports',
    heroDescription: 'Build the strength, conditioning, and skills for combat sports excellence.',
    subcategories: [
      { id: 'boxing', name: 'Boxing', icon: '🥊' },
      { id: 'mma', name: 'MMA (Mixed Martial Arts)', icon: '🤼‍♂️' },
      { id: 'bjj', name: 'Brazilian Jiu-Jitsu', icon: '🥋' },
      { id: 'muay-thai', name: 'Muay Thai/Kickboxing', icon: '🦵' },
      { id: 'martial-arts', name: 'Traditional Martial Arts', icon: '🥋' },
      { id: 'wrestling', name: 'Wrestling', icon: '🤼‍♂️' }
    ]
  },
  {
    id: 'multiple-activities',
    title: 'Multiple Activities',
    description: 'I engage in several different activities',
    icon: '🔄',
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
    subtitle: 'Just starting out or returning after a long break',
    icon: '🌱'
  },
  {
    id: 'some-experience',
    title: 'Some Experience',
    subtitle: 'Occasional activity but looking to be more consistent',
    icon: '🚶‍♀️'
  },
  {
    id: 'regular',
    title: 'Regular Practitioner',
    subtitle: 'Active several times per week with good base fitness',
    icon: '🏃‍♂️'
  },
  {
    id: 'advanced',
    title: 'Advanced/Competitive',
    subtitle: 'High level of fitness with structured training experience',
    icon: '🏆'
  }
];

// Time options
const TIME_OPTIONS = [
  { value: '15', label: '15 minutes', icon: '⚡' },
  { value: '30', label: '30 minutes', icon: '⏰' },
  { value: '45', label: '45 minutes', icon: '🕐' },
  { value: '60', label: '60 minutes', icon: '⏳' },
  { value: '90', label: '90+ minutes', icon: '🔥' }
];

// Equipment options
const EQUIPMENT_OPTIONS = [
  { id: 'none', name: 'None', icon: '🏠' },
  { id: 'dumbbells', name: 'Dumbbells', icon: '🏋️‍♀️' },
  { id: 'kettlebells', name: 'Kettlebells', icon: '⚫' },
  { id: 'resistance-bands', name: 'Resistance Bands', icon: '🎯' },
  { id: 'yoga-mat', name: 'Yoga Mat', icon: '🧘‍♀️' },
  { id: 'foam-roller', name: 'Foam Roller', icon: '📏' },
  { id: 'pullup-bar', name: 'Pull-up Bar', icon: '🔗' },
  { id: 'gym-access', name: 'Gym Access', icon: '🏢' }
];

// Enhanced Activity-specific equipment options - focused on what's ESSENTIAL to conduct the activity
const ACTIVITY_SPECIFIC_EQUIPMENT = {
  'cardio-endurance': {
    running: [
      { id: 'treadmill', name: 'Treadmill', icon: '🏃‍♂️' },
      { id: 'track-trail', name: 'Track/Trail Access', icon: '🛤️' }
    ],
    cycling: [
      { id: 'bicycle', name: 'Bicycle', icon: '🚴‍♀️' },
      { id: 'bike-trainer', name: 'Bike Trainer/Indoor Setup', icon: '🚴‍♂️' },
      { id: 'stationary-bike', name: 'Stationary Bike', icon: '🚴‍♀️' }
    ],
    swimming: [
      { id: 'pool-access', name: 'Pool Access', icon: '🏊‍♀️' },
      { id: 'open-water', name: 'Open Water Access', icon: '🌊' }
    ],
    triathlon: [
      { id: 'bicycle', name: 'Bicycle', icon: '🚴‍♀️' },
      { id: 'pool-access', name: 'Pool Access', icon: '🏊‍♀️' },
      { id: 'bike-trainer', name: 'Bike Trainer', icon: '🚴‍♂️' },
      { id: 'treadmill', name: 'Treadmill', icon: '🏃‍♂️' }
    ]
  },
  'strength-power': {
    general: [
      { id: 'dumbbells', name: 'Dumbbells', icon: '🏋️‍♀️' },
      { id: 'barbell-plates', name: 'Barbell & Plates', icon: '🏋️‍♂️' },
      { id: 'adjustable-bench', name: 'Adjustable Bench', icon: '🪑' },
      { id: 'squat-rack', name: 'Squat Rack', icon: '🏗️' }
    ],
    'functional-fitness': [
      { id: 'kettlebells', name: 'Kettlebells', icon: '⚫' },
      { id: 'medicine-ball', name: 'Medicine Ball', icon: '⚽' },
      { id: 'jump-rope', name: 'Jump Rope', icon: '🪢' },
      { id: 'plyo-box', name: 'Plyo Box', icon: '📦' },
      { id: 'pullup-bar', name: 'Pull-up Bar', icon: '🔗' }
    ],
    'hyrox': [
      { id: 'sled', name: 'Sled for Pushing/Pulling', icon: '🛷' },
      { id: 'kettlebells', name: 'Kettlebells', icon: '⚫' },
      { id: 'wall-balls', name: 'Wall Ball', icon: '⚽' },
      { id: 'rowing-machine', name: 'Rowing Machine', icon: '🚣‍♂️' }
    ]
  },
  'team-sports': {
    'soccer-football': [
      { id: 'soccer-ball', name: 'Soccer Ball', icon: '⚽' },
      { id: 'training-cones', name: 'Training Cones', icon: '🚧' },
      { id: 'goal-target', name: 'Goal/Target', icon: '🥅' },
      { id: 'field-access', name: 'Field/Space Access', icon: '🏟️' }
    ],
    'basketball-volleyball': [
      { id: 'basketball', name: 'Basketball', icon: '🏀' },
      { id: 'hoop-access', name: 'Hoop Access', icon: '🏀' },
      { id: 'court-access', name: 'Court Access', icon: '🏟️' }
    ]
  },
  'outdoor-adventure': {
    'hiking': [
      { id: 'trail-access', name: 'Trail Access', icon: '🥾' },
      { id: 'backpack', name: 'Hiking Backpack', icon: '🎒' },
      { id: 'treadmill-alt', name: 'Treadmill (Indoor Alt)', icon: '🏃‍♂️' }
    ],
    'climbing': [
      { id: 'climbing-wall', name: 'Climbing Wall Access', icon: '🧗‍♂️' },
      { id: 'rock-access', name: 'Rock/Crag Access', icon: '🏔️' }
    ]
  },
  'combat-sports': {
    'boxing-kickboxing': [
      { id: 'heavy-bag', name: 'Heavy Bag', icon: '🥊' },
      { id: 'boxing-gloves', name: 'Boxing Gloves', icon: '🥊' },
      { id: 'training-space', name: 'Training Space', icon: '🥊' }
    ],
    'grappling': [
      { id: 'grappling-mats', name: 'Grappling Mats', icon: '🤼‍♂️' },
      { id: 'training-space', name: 'Training Space', icon: '🥊' }
    ],
    'martial-arts': [
      { id: 'dojo-access', name: 'Dojo/Training Space', icon: '🏯' },
      { id: 'heavy-bag', name: 'Heavy Bag', icon: '🥊' }
    ]
  },
  'mind-body': {
    'yoga': [
      { id: 'yoga-mat', name: 'Yoga Mat', icon: '🧘‍♀️' },
      { id: 'quiet-space', name: 'Quiet Space', icon: '🏠' }
    ],
    'pilates': [
      { id: 'exercise-mat', name: 'Exercise Mat', icon: '🧘‍♀️' },
      { id: 'pilates-reformer', name: 'Pilates Reformer', icon: '🛏️' },
      { id: 'pilates-ball', name: 'Pilates Ball', icon: '⚽' }
    ],
    'meditation': [
      { id: 'meditation-cushion', name: 'Meditation Cushion', icon: '🪑' },
      { id: 'quiet-space', name: 'Quiet Space', icon: '🏠' }
    ]
  },
  'dance-movement': {
    'dance': [
      { id: 'dance-studio', name: 'Dance Studio Access', icon: '💃' },
      { id: 'mirror-space', name: 'Mirror & Open Space', icon: '🪞' }
    ]
  },
  'precision-skill': {
    'golf': [
      { id: 'golf-clubs', name: 'Golf Clubs', icon: '🏌️‍♂️' },
      { id: 'driving-range', name: 'Driving Range Access', icon: '🏌️‍♂️' }
    ],
    'tennis': [
      { id: 'tennis-racket', name: 'Tennis Racket', icon: '🎾' },
      { id: 'tennis-court', name: 'Tennis Court Access', icon: '🎾' }
    ]
  }
};

// Enhanced training environment options
const TRAINING_ENVIRONMENT_OPTIONS = [
  { id: 'home', name: 'Home', icon: '🏠', description: 'Train in your own space' },
  { id: 'gym', name: 'Gym/Fitness Center', icon: '🏢', description: 'Access to full equipment' },
  { id: 'outdoor', name: 'Outdoor Spaces', icon: '🌳', description: 'Parks, trails, streets' },
  { id: 'studio', name: 'Specialized Studio', icon: '🏛️', description: 'Yoga, dance, martial arts studios' },
  { id: 'pool', name: 'Swimming Pool', icon: '🏊‍♀️', description: 'Pool or open water access' },
  { id: 'court-field', name: 'Courts/Fields', icon: '🏟️', description: 'Sports facilities' }
];

// Function to get relevant equipment based on activity and subcategory
const getRelevantEquipment = (activity: string, subcategory?: string) => {
  const baseEquipment = [
    { id: 'none', name: 'None', icon: '🏠' },
    { id: 'resistance-bands', name: 'Resistance Bands', icon: '🎯' },
    { id: 'foam-roller', name: 'Foam Roller', icon: '📏' },
    { id: 'gym-access', name: 'Gym Access', icon: '🏢' }
  ];

  const activityEquipment = ACTIVITY_SPECIFIC_EQUIPMENT[activity as keyof typeof ACTIVITY_SPECIFIC_EQUIPMENT];
  
  if (activityEquipment && subcategory) {
    const subcategoryEquipment = activityEquipment[subcategory as keyof typeof activityEquipment];
    if (subcategoryEquipment) {
      return [...baseEquipment, ...subcategoryEquipment];
    }
  }

  // Fallback to general equipment for the activity
  if (activityEquipment) {
    const generalKey = Object.keys(activityEquipment)[0];
    const generalEquipment = activityEquipment[generalKey as keyof typeof activityEquipment];
    if (generalEquipment) {
      return [...baseEquipment, ...generalEquipment];
    }
  }

  // Final fallback to original equipment options
  return EQUIPMENT_OPTIONS;
};

// Function to get relevant training environments based on activity and subcategory
const getRelevantEnvironments = (activity: string, subcategory?: string) => {
  const environmentMap: Record<string, Record<string, string[]>> = {
    'cardio-endurance': {
      'running': ['home', 'gym', 'outdoor'],
      'cycling': ['home', 'gym', 'outdoor'],
      'swimming': ['pool'],
      'triathlon': ['home', 'gym', 'outdoor', 'pool']
    },
    'strength-power': {
      'general': ['home', 'gym'],
      'functional-fitness': ['home', 'gym', 'outdoor'],
      'hyrox': ['gym']
    },
    'team-sports': {
      'soccer-football': ['outdoor', 'court-field'],
      'basketball-volleyball': ['gym', 'court-field']
    },
    'outdoor-adventure': {
      'hiking': ['outdoor'],
      'climbing': ['gym', 'outdoor']
    },
    'combat-sports': {
      'boxing-kickboxing': ['home', 'gym', 'studio'],
      'grappling': ['gym', 'studio'],
      'martial-arts': ['studio']
    },
    'mind-body': {
      'yoga': ['home', 'studio'],
      'pilates': ['home', 'gym', 'studio'],
      'meditation': ['home']
    },
    'dance-movement': {
      'dance': ['home', 'studio']
    },
    'precision-skill': {
      'golf': ['outdoor', 'court-field'],
      'tennis': ['court-field']
    }
  };

  const activityEnvironments = environmentMap[activity];
  let relevantEnvironmentIds: string[] = [];

  if (activityEnvironments && subcategory) {
    const subcategoryEnvironments = activityEnvironments[subcategory];
    if (subcategoryEnvironments) {
      relevantEnvironmentIds = subcategoryEnvironments;
    }
  }

  // Fallback to general environments for the activity
  if (relevantEnvironmentIds.length === 0 && activityEnvironments) {
    const generalKey = Object.keys(activityEnvironments)[0];
    const generalEnvironments = activityEnvironments[generalKey];
    if (generalEnvironments) {
      relevantEnvironmentIds = generalEnvironments;
    }
  }

  // Return filtered environment options
  return TRAINING_ENVIRONMENT_OPTIONS.filter(env => 
    relevantEnvironmentIds.includes(env.id)
  );
};

// Goals
const GOALS: Array<{
  id: string;
  title: string;
  subtitle: string;
  aspirationalFraming: string;
  icon: string;
}> = [
  {
    id: 'fitness',
    title: 'Get Fit & Healthy',
    subtitle: 'Build overall fitness and establish healthy habits',
    aspirationalFraming: 'Imagine having energy all day and feeling confident in your body',
    icon: '🎯'
  },
  {
    id: 'weight-loss',
    title: 'Lose Weight',
    subtitle: 'Burn calories and achieve a healthier body composition',
    aspirationalFraming: 'Picture yourself feeling lighter, more energetic, and loving how you look',
    icon: '⚖️'
  },
  {
    id: 'strength',
    title: 'Feel Strong & Powerful',
    subtitle: 'Build the strength to handle anything life throws at you',
    aspirationalFraming: 'Envision carrying groceries with ease, playing with kids without getting tired, and feeling unstoppable',
    icon: '💪'
  },
  {
    id: 'performance',
    title: 'Improve Performance',
    subtitle: 'Train for competitions or personal records',
    aspirationalFraming: 'See yourself crushing your goals and achieving things you never thought possible',
    icon: '🏆'
  },
  {
    id: 'wellbeing',
    title: 'Manage Stress & Wellbeing',
    subtitle: 'Focus on mental health and relaxation',
    aspirationalFraming: 'Imagine feeling calm, centered, and resilient no matter what your day brings',
    icon: '🧘‍♀️'
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
  const [sessionId, setSessionId] = useState<string>('');

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
    if (!user) {
      return;
    }
    
    if (offlineMode) {
      // Save to localStorage in offline mode
      if (typeof window !== 'undefined') {
        const offlineProgress = {
          currentScreen: screen,
          currentStep: step,
          onboardingPath: path,
          answers: currentAnswers,
          selectedActivity,
          lastUpdated: new Date().toISOString(),
          token: userToken
        };
        
        localStorage.setItem(`fitness_app_offline_progress_${user.uid}`, JSON.stringify(offlineProgress));
        console.log('📱 Saved offline progress:', offlineProgress);
      }
      
      // Still update URL even in offline mode with token
      const params = new URLSearchParams();
      if (userToken) params.set('token', userToken);
      if (path) params.set('path', path);
      if (screen >= 0) params.set('screen', screen.toString());
      if (step >= 0) params.set('step', step.toString());
      
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

      // Also save to localStorage as backup
      if (typeof window !== 'undefined') {
        const backupProgress = {
          currentScreen: screen,
          currentStep: step,
          onboardingPath: path,
          answers: currentAnswers,
          selectedActivity,
          lastUpdated: new Date().toISOString(),
          token: userToken
        };
        
        localStorage.setItem(`fitness_app_offline_progress_${user.uid}`, JSON.stringify(backupProgress));
        console.log('💾 Backup progress saved to localStorage');
      }

      // Update URL with token-based navigation
      const params = new URLSearchParams();
      if (userToken) params.set('token', userToken);
      if (path) params.set('path', path);
      if (screen >= 0) params.set('screen', screen.toString());
      if (step >= 0) params.set('step', step.toString());
      
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
        
        // Save to localStorage when going offline
        if (typeof window !== 'undefined') {
          const offlineProgress = {
            currentScreen: screen,
            currentStep: step,
            onboardingPath: path,
            answers: currentAnswers,
            selectedActivity,
            lastUpdated: new Date().toISOString(),
            token: userToken
          };
          
          localStorage.setItem(`fitness_app_offline_progress_${user.uid}`, JSON.stringify(offlineProgress));
          console.log('📱 Saved progress to localStorage due to connection error');
        }
      }
      
      // Still update URL for local navigation
      const params = new URLSearchParams();
      if (userToken) params.set('token', userToken);
      if (path) params.set('path', path);
      if (screen >= 0) params.set('screen', screen.toString());
      if (step >= 0) params.set('step', step.toString());
      
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
          
          // 🔑 SIMPLIFIED TOKEN VALIDATION - Prevent flow resets
          let activeToken = userData.userToken;
          const urlToken = searchParams.get('token');
          
          // Use existing token or URL token, only generate new if neither exists
          if (activeToken) {
            setUserToken(activeToken);
            console.log('✅ Using existing stored token:', activeToken);
          } else if (urlToken) {
            setUserToken(urlToken);
            activeToken = urlToken;
            console.log('✅ Using URL token:', urlToken);
          } else {
            // Only generate new token if neither exists
            activeToken = generateUserToken();
            setUserToken(activeToken);
            console.log('🆕 Generated new token:', activeToken);
          }
        
          // Check if onboarding is already completed
          if (userData.hasCompletedOnboarding === true) {
            console.log('✅ User has completed onboarding, redirecting to dashboard');
            setIsLoading(false);
            router.push(`/dashboard?token=${activeToken}`);
            return;
          }

          // 📊 LOAD COMPREHENSIVE PROGRESS DATA
          const progress = userData.onboardingProgress;
          
          // 🔗 ALWAYS CHECK URL PARAMETERS FIRST - They take precedence for navigation
          const urlPath = searchParams.get('path') as 'goal-focused' | 'exploratory' | null;
          const urlScreen = parseInt(searchParams.get('screen') || '0');
          const urlStep = parseInt(searchParams.get('step') || '0');
          
          if (progress && progress.answers && Object.keys(progress.answers).length > 0) {
            // EXISTING PROGRESS FOUND - Prioritize URL parameters for navigation, but restore all data
            const finalScreen = urlPath ? (urlPath === 'goal-focused' ? -1 : -2) : (progress.currentScreen || 0);
            const finalStep = (urlStep >= 0 && urlPath) ? urlStep : (progress.currentStep || 0);
            const finalPath = urlPath || (progress.onboardingPath || null);
            
            setCurrentScreen(finalScreen);
            setCurrentStep(finalStep);
            setOnboardingPath(finalPath);
            setAnswers(progress.answers || {});
            setSelectedActivity(progress.selectedActivity || null);
              
            console.log('📊 Loaded existing progress with data restoration:', {
              screen: finalScreen,
              step: finalStep,
              path: finalPath,
              activity: progress.selectedActivity,
              urlOverride: !!urlPath,
              answers: Object.keys(progress.answers || {}).length,
              answersData: progress.answers
            });
              
            // Always update URL to ensure it has the correct parameters
            const params = new URLSearchParams();
            if (activeToken) params.set('token', activeToken);
            if (finalPath) params.set('path', finalPath);
            if (finalStep >= 0 && finalPath) params.set('step', finalStep.toString());
            
            const newUrl = params.toString() ? `?${params.toString()}` : '';
            router.replace(`/onboarding${newUrl}`, { scroll: false });
          } else {
            // EXISTING USER BUT NO PROGRESS - Initialize from URL parameters or start fresh
            console.log('📊 No existing progress found, checking URL parameters');
            
            if (urlPath) {
              setOnboardingPath(urlPath);
              setCurrentScreen(urlPath === 'goal-focused' ? -1 : -2);
              setCurrentStep(urlStep);
              
              console.log('🔄 Existing user, no progress - initialized from URL:', { urlPath, urlScreen, urlStep });
            } else {
              setCurrentScreen(urlScreen);
              console.log('🔄 Existing user, no progress - initialized from screen:', urlScreen);
            }
            
            // Update URL with user's token
            const params = new URLSearchParams();
            if (activeToken) params.set('token', activeToken);
            if (urlPath) params.set('path', urlPath);
            if (urlStep >= 0 && urlPath) params.set('step', urlStep.toString());
            
            const newUrl = params.toString() ? `?${params.toString()}` : '';
            router.replace(`/onboarding${newUrl}`, { scroll: false });
          }
          
        } else {
          // 🆕 COMPLETELY NEW USER - Create comprehensive profile
          console.log('🆕 Creating new user profile with comprehensive data structure');
          
          const newToken = generateUserToken();
          setUserToken(newToken);
          
          // Check URL parameters for new user
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
          
          // Initialize comprehensive user data structure
          await setDoc(doc(db, 'users', user.uid), {
            // Core identification
            userToken: newToken,
            createdAt: new Date(),
            lastActive: new Date(),
            
            // Onboarding state
            hasCompletedOnboarding: false,
            onboardingProgress: {
              currentScreen: urlScreen,
              currentStep: urlStep,
              onboardingPath: urlPath,
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
          const params = new URLSearchParams();
          if (newToken) params.set('token', newToken);
          if (urlPath) params.set('path', urlPath);
          if (urlStep >= 0 && urlPath) params.set('step', urlStep.toString());
          
          const newUrl = params.toString() ? `?${params.toString()}` : '';
          router.replace(`/onboarding${newUrl}`, { scroll: false });
          
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
        
        // 📴 OFFLINE MODE - Generate local token and restore from localStorage
        console.log('📴 Enabling offline mode with local token');
        setOfflineMode(true);
        setConnectionError('Working in offline mode - data will sync when online');
        
        // Try to restore from localStorage first
        let localToken = '';
        let localProgress = null;
        
        if (typeof window !== 'undefined') {
          localToken = localStorage.getItem(`fitness_app_token_${user.uid}`) || '';
          const progressData = localStorage.getItem(`fitness_app_offline_progress_${user.uid}`);
          if (progressData) {
            try {
              localProgress = JSON.parse(progressData);
              console.log('📱 Restored offline progress:', localProgress);
            } catch (e) {
              console.log('⚠️ Failed to parse offline progress');
            }
          }
        }
        
        if (!localToken) {
          localToken = generateUserToken();
        }
        
        setUserToken(localToken);
        
        // Restore progress if available
        if (localProgress) {
          setCurrentScreen(localProgress.currentScreen || 0);
          setCurrentStep(localProgress.currentStep || 0);
          setOnboardingPath(localProgress.onboardingPath || null);
          setAnswers(localProgress.answers || {});
          setSelectedActivity(localProgress.selectedActivity || null);
          
          console.log('📱 Restored offline state:', {
            screen: localProgress.currentScreen,
            step: localProgress.currentStep,
            path: localProgress.onboardingPath,
            answersCount: Object.keys(localProgress.answers || {}).length
          });
        } else {
          // Check URL parameters for offline mode
          const urlPath = searchParams.get('path') as 'goal-focused' | 'exploratory' | null;
          const urlStep = parseInt(searchParams.get('step') || '0');
          
          if (urlPath) {
            setOnboardingPath(urlPath);
            setCurrentScreen(urlPath === 'goal-focused' ? -1 : -2);
            setCurrentStep(urlStep);
            console.log('📴 Offline mode initialized from URL:', { urlPath, urlStep });
          }
        }
        
        // Store token locally for offline persistence
        if (typeof window !== 'undefined') {
          localStorage.setItem(`fitness_app_token_${user.uid}`, localToken);
        }
        
        // Update URL with local token
        const urlPath = searchParams.get('path') as 'goal-focused' | 'exploratory' | null;
        const urlStep = parseInt(searchParams.get('step') || '0');
        
        const params = new URLSearchParams();
        if (localToken) params.set('token', localToken);
        if (urlPath) params.set('path', urlPath);
        if (urlStep >= 0 && urlPath) params.set('step', urlStep.toString());
        
        const newUrl = params.toString() ? `?${params.toString()}` : '';
        router.replace(`/onboarding${newUrl}`, { scroll: false });
      }
    };
    
    await attemptLoad();
    setIsLoading(false);
  };

  useEffect(() => {
    // Generate session ID for AI training
    const newSessionId = `session_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
    setSessionId(newSessionId);
    
    loadProgress();
  }, [user, searchParams]);

  const handleNext = async () => {
    setIsTransitioning(true);
    
    let newScreen = currentScreen;
    let newStep = currentStep;
    
    setTimeout(async () => {
      if (onboardingPath === 'goal-focused' && currentStep < GOAL_FOCUSED_STEPS.length - 1) {
        // Advance to next step in goal-focused flow
        newStep = currentStep + 1;
        setCurrentStep(newStep);
      } else if (onboardingPath === 'goal-focused' && currentStep === GOAL_FOCUSED_STEPS.length - 1) {
        // Complete onboarding when on the last step
        console.log('🎯 Completing goal-focused onboarding with answers:', answers);
        completeOnboarding(answers as OnboardingAnswers, 'goal-focused');
        return;
      } else if (currentScreen < 1) {
        // Only advance screen if not in goal-focused flow
        newScreen = currentScreen + 1;
        setCurrentScreen(newScreen);
      }
      
      // Save progress after state update
      await saveProgress(newScreen, newStep, onboardingPath, answers);
      
      // Scroll to top when moving to next step
      const formSection = document.querySelector('.w-1\\/2 .bg-white');
      if (formSection) {
        formSection.scrollTo({ top: 0, behavior: 'smooth' });
      }
      
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
      } else if (onboardingPath === 'exploratory' && currentScreen === -2) {
        // Go back to path selection from exploratory onboarding
        newScreen = 1;
        newPath = null;
        setCurrentScreen(newScreen);
        setOnboardingPath(newPath);
        setConversation([]); // Clear conversation when going back
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

  const handleExploratoryMessage = async (message: string) => {
    // Add user message
    const userMessage: AiMessage = {
      type: 'user',
      content: message,
      timestamp: new Date()
    };
    
    const updatedConversation = [...conversation, userMessage];
    setConversation(updatedConversation);
    
    // Save conversation immediately (for abandoned users)
    await saveExploratoryConversation(updatedConversation);
    
    // Simple conversation logic - in a real implementation, this would be more sophisticated
    setTimeout(async () => {
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
      
      const finalConversation = [...updatedConversation, aiMessage];
      setConversation(finalConversation);
      
      // Save updated conversation with AI response
      await saveExploratoryConversation(finalConversation);
      
      // If we've had enough conversation, offer to complete onboarding
      if (conversation.length >= 6) {
        setTimeout(async () => {
          const completionMessage: AiMessage = {
            type: 'ai',
            content: `Perfect! I have a great understanding of what you're looking for. Let me create a personalized fitness plan that matches your preferences and lifestyle.

Ready to see your customized recommendations?`,
            timestamp: new Date(),
            metadata: {
              showGenerateButton: true
            }
          };
          const completedConversation = [...finalConversation, completionMessage];
          setConversation(completedConversation);
          
          // Save final conversation state
          await saveExploratoryConversation(completedConversation);
        }, 2000);
      }
    }, 1000);
  };

  // 💾 SAVE EXPLORATORY CONVERSATION - Persist chat for abandoned users and analysis
  const saveExploratoryConversation = async (conversationData: AiMessage[]) => {
    if (!user || !sessionId) return;
    
    try {
      // Save to onboarding progress for abandoned users
      await setDoc(doc(db, 'users', user.uid), {
        onboardingProgress: {
          screen: currentScreen,
          step: currentStep,
          path: onboardingPath,
          answers: answers,
          conversation: conversationData,
          lastUpdated: new Date(),
          userToken: userToken
        },
        // Also save to exploratory chat history
        exploratoryConversation: {
          messages: conversationData,
          lastUpdated: new Date(),
          isCompleted: false
        }
      }, { merge: true });
      
      // 🤖 AI TRAINING DATA COLLECTION - Convert to training format
      const trainingMessages: ConversationData['messages'] = conversationData.map(msg => ({
        type: msg.type,
        content: msg.content,
        timestamp: msg.timestamp,
        metadata: msg.metadata
      }));

      // Collect conversation data for AI training
      await aiTrainingService.collectConversationData(
        user.uid,
        sessionId,
        'onboarding',
        trainingMessages,
        conversationData.length >= 6 ? 'completed' : 'abandoned',
        {
          fitnessLevel: answers.fitnessLevel || 'unknown',
          goals: [answers.goal || 'general-fitness'],
          preferences: answers.equipment || [],
          activityType: answers.activity || 'general-fitness'
        }
      );
      
      console.log('💬 Exploratory conversation saved:', conversationData.length, 'messages');
      console.log('🤖 AI training data collected for session:', sessionId);
    } catch (error) {
      console.error('❌ Error saving exploratory conversation:', error);
    }
  };

  // 🧠 ANALYZE CONVERSATION - Extract insights for training plan creation
  const analyzeConversation = (conversationData: AiMessage[]): Partial<OnboardingAnswers> => {
    const userMessages = conversationData.filter(msg => msg.type === 'user').map(msg => msg.content.toLowerCase());
    const allText = userMessages.join(' ');
    
    // Initialize with defaults
    const insights: Partial<OnboardingAnswers> = {
      activity: 'general-fitness',
      age: '30',
      gender: 'prefer-not-to-say',
      units: 'metric',
      heightCm: '170',
      fitnessLevel: 'some-experience',
      timeCommitment: '30',
      daysPerWeek: '3-4',
      equipment: [],
      goal: 'fitness'
    };
    
    // Analyze activity preferences
    if (allText.includes('strong') || allText.includes('lift') || allText.includes('muscle') || allText.includes('weight')) {
      insights.activity = 'strength-power';
      insights.goal = 'muscle-gain';
    } else if (allText.includes('calm') || allText.includes('yoga') || allText.includes('relax') || allText.includes('stress') || allText.includes('peace')) {
      insights.activity = 'mind-body';
      insights.goal = 'wellbeing';
    } else if (allText.includes('run') || allText.includes('cardio') || allText.includes('heart') || allText.includes('energy')) {
      insights.activity = 'cardio-endurance';
      insights.goal = 'fitness';
    } else if (allText.includes('sport') || allText.includes('team') || allText.includes('game')) {
      insights.activity = 'team-sports';
      insights.goal = 'performance';
    }
    
    // Analyze fitness level
    if (allText.includes('beginner') || allText.includes('new') || allText.includes('start') || allText.includes('never')) {
      insights.fitnessLevel = 'beginner';
    } else if (allText.includes('advanced') || allText.includes('experienced') || allText.includes('compete') || allText.includes('athlete')) {
      insights.fitnessLevel = 'advanced';
    } else if (allText.includes('regular') || allText.includes('consistent') || allText.includes('active')) {
      insights.fitnessLevel = 'regular';
    }
    
    // Analyze time preferences
    if (allText.includes('busy') || allText.includes('quick') || allText.includes('short') || allText.includes('15') || allText.includes('twenty')) {
      insights.timeCommitment = '15';
      insights.daysPerWeek = '2-3';
    } else if (allText.includes('hour') || allText.includes('long') || allText.includes('60') || allText.includes('90')) {
      insights.timeCommitment = '60';
      insights.daysPerWeek = '4-5';
    }
    
    // Analyze equipment preferences
    if (allText.includes('gym') || allText.includes('equipment') || allText.includes('machine')) {
      insights.equipment = ['Gym Access', 'Dumbbells'];
    } else if (allText.includes('home') || allText.includes('bodyweight') || allText.includes('no equipment')) {
      insights.equipment = ['None'];
    } else {
      insights.equipment = ['Dumbbells', 'Yoga Mat'];
    }
    
    // Analyze goals
    if (allText.includes('lose weight') || allText.includes('weight loss') || allText.includes('slim')) {
      insights.goal = 'weight-loss';
    } else if (allText.includes('muscle') || allText.includes('bulk') || allText.includes('gain')) {
      insights.goal = 'muscle-gain';
    } else if (allText.includes('stress') || allText.includes('mental') || allText.includes('wellbeing') || allText.includes('health')) {
      insights.goal = 'wellbeing';
    } else if (allText.includes('compete') || allText.includes('performance') || allText.includes('better')) {
      insights.goal = 'performance';
    }
    
    console.log('🧠 Conversation Analysis Results:', insights);
    return insights;
  };

  const initializeExploratoryConversation = async () => {
    const exploratoryMessages = [
      {
        type: 'ai' as const,
        content: `Your Fitness Discovery

Every journey begins with exploration - let's find what feels right for YOU!

Welcome! We're here to help you discover the type of movement that truly resonates with you. No pressure, no judgment, just genuine exploration of what makes you feel good.

What kind of activity appeals to you most right now?

Energizing movement - running, dancing, sports, anything that gets your heart pumping

Mindful movement - yoga, walking, stretching, activities that center and calm you  

Strength building - weights, resistance training, movements that make you feel powerful

Still exploring - and that's perfectly wonderful too!

Remember: there are no wrong answers here, only the beginning of YOUR unique fitness story.`,
        timestamp: new Date()
      }
    ];
    
    setConversation(exploratoryMessages);
    
    // Save initial conversation state
    await saveExploratoryConversation(exploratoryMessages);
  };

  const handleAnswer = async (field: string, value: string | string[] | any) => {
    const newAnswers = { ...answers, [field]: value };
    setAnswers(newAnswers);
    
    if (field === 'activity') {
      setSelectedActivity(value as string);
      
      // Auto-scroll to continue button after activity selection
      setTimeout(() => {
        const continueButton = document.querySelector('[data-continue-button]');
        if (continueButton) {
          continueButton.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
          });
        }
      }, 300); // Small delay to ensure UI has updated
    }
    
    // Save progress after answer update
    await saveProgress(currentScreen, currentStep, onboardingPath, newAnswers);
    
    // Removed auto-advance for subcategory selection - rely on Continue button for better UX
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

      // 🤖 AI TRAINING DATA COLLECTION - For goal-focused onboarding completion
      if (sessionId) {
        try {
          // Create a synthetic conversation for goal-focused path
          const syntheticMessages: ConversationData['messages'] = [
            {
              type: 'user',
              content: `I want to focus on ${finalAnswers.activity} for ${finalAnswers.goal}`,
              timestamp: new Date(),
            },
            {
              type: 'ai',
              content: `Great choice! I'll help you create a personalized ${finalAnswers.activity} program for ${finalAnswers.goal}.`,
              timestamp: new Date(),
            }
          ];

          await aiTrainingService.collectConversationData(
            user.uid,
            sessionId,
            'onboarding',
            syntheticMessages,
            'completed',
            {
              fitnessLevel: finalAnswers.fitnessLevel,
              goals: [finalAnswers.goal],
              preferences: finalAnswers.equipment,
              activityType: finalAnswers.activity
            }
          );

          console.log('🤖 AI training data collected for goal-focused onboarding');
        } catch (error) {
          console.error('❌ Error collecting AI training data:', error);
        }
      }

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
        // 🚀 REDIRECT TO AI CHAT for deep dive conversation before training plan
        router.push(`/chat?onboarding=completed&token=${userToken}`);
        onComplete(personalization);
      }, 1000);
    } catch (error) {
      console.error('❌ Error completing onboarding:', error);
      
      // 🔄 FALLBACK - Still redirect even if save fails
      setTimeout(() => {
        router.push(`/chat?onboarding=completed&token=${userToken}`);
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
      <div className="min-h-screen fullscreen-gradient-primary grainy-texture flex items-center justify-center">
        <div className="text-center max-w-md p-8">
          <div className="mb-8 flex justify-center">
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Logo%2F317ecd07-214d-4ac0-99a8-4e19c2ed8ebd.png?alt=media&token=de760234-5f32-470d-b88d-d55368799d36" 
              alt="TrainMeAI Logo" 
              className="w-20 h-20 object-contain"
            />
          </div>
          <h1 className="text-2xl font-light text-white mb-2 font-sans text-shadow-soft">MyPace</h1>
          <p className="text-white opacity-80 mb-8 font-sans text-shadow-soft">Preparing your personalized onboarding...</p>
          <div className="w-8 h-8 border-3 border-white/30 border-t-white rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    );
  }

  // Welcome to MyPace screen
  if (currentScreen === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-200 via-purple-200 to-indigo-200 flex flex-col items-center justify-center px-8 relative">
        <div className={`text-center transition-all duration-1000 ${isTransitioning ? 'opacity-0 transform translate-y-8' : 'opacity-100 transform translate-y-0'}`}>
          <div className="mb-12">
            <div className="mb-8 flex justify-center">
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Logo%2F8819f3df-3241-4f21-be52-827df2f7cc25.png?alt=media&token=a017389c-c181-4143-9366-67bd70c9b6dd" 
                alt="TrainMeAI Logo" 
                className="h-20 w-auto object-contain"
              />
            </div>
            

          </div>
          
          <p className="text-xl text-gray-800 mb-16 font-medium max-w-2xl mx-auto leading-relaxed">
            Your AI-powered fitness companion designed to help you achieve your goals with personalized training programs and expert guidance
          </p>
          
          <div className="flex justify-center">
            <button
              onClick={handleNext}
              className="group flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-white/50 text-gray-800 px-8 py-4 rounded-xl hover:bg-white/90 transition-all duration-300 font-semibold shadow-lg"
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
      <div className="min-h-screen bg-gradient-to-br from-blue-200 via-teal-200 to-green-200 flex flex-col items-center justify-center px-8 relative">
        <div className={`text-center transition-all duration-1000 max-w-4xl mx-auto ${isTransitioning ? 'opacity-0 transform translate-y-8' : 'opacity-100 transform translate-y-0'}`}>
          <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight leading-tight">
            Start your journey
          </h1>
          
          <p className="text-lg text-gray-700 mb-16 font-light max-w-2xl mx-auto">
            Choose the path that feels right for you
          </p>
          
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <button
              onClick={() => handlePathChoice('goal-focused')}
              className="group flex-1 bg-white/95 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-105 text-left"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-2xl group-hover:bg-blue-200 transition-colors duration-300">
                  <div className="text-blue-600 text-2xl">🎯</div>
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
            background: 'linear-gradient(135deg, #e0c3fc 0%, #9bb5ff 100%)'
          }}
        >
          <div className="text-center text-gray-800 z-10 p-10">
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
          {/* Back Arrow & Header */}
          <div className="p-10 pb-0">
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={handlePrevious}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                title="Choose Different Path"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Fitness Discovery Chat
            </h2>
            <p className="text-gray-600">
              Take your time - there are no wrong answers here!
            </p>
              </div>
            </div>
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
                        onClick={async () => {
                          // Analyze conversation to extract insights
                          const conversationInsights = analyzeConversation(conversation);
                          
                          // Create profile from conversation analysis
                          const exploratoryAnswers: OnboardingAnswers = {
                            activity: conversationInsights.activity || 'general-fitness',
                            age: conversationInsights.age || '30',
                            gender: conversationInsights.gender || 'prefer-not-to-say',
                            units: conversationInsights.units || 'metric',
                            heightCm: conversationInsights.heightCm || '170',
                            fitnessLevel: conversationInsights.fitnessLevel || 'some-experience',
                            timeCommitment: conversationInsights.timeCommitment || '30',
                            daysPerWeek: conversationInsights.daysPerWeek || '3-4',
                            equipment: conversationInsights.equipment || ['None'],
                            goal: conversationInsights.goal || 'fitness'
                          };
                          
                          // Mark conversation as completed
                          await setDoc(doc(db, 'users', user!.uid), {
                            exploratoryConversation: {
                              messages: conversation,
                              lastUpdated: new Date(),
                              isCompleted: true,
                              analyzedInsights: conversationInsights
                            }
                          }, { merge: true });
                          
                          console.log('🎯 Completing exploratory onboarding with insights:', exploratoryAnswers);
                          completeOnboarding(exploratoryAnswers, 'exploratory');
                        }}
                        className="mt-3 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
                        style={{
                          background: 'linear-gradient(135deg, #5c706e, #98adc3)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'linear-gradient(135deg, #373217, #5c706e)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'linear-gradient(135deg, #5c706e, #98adc3)';
                        }}
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
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-gray-900 focus:outline-0 focus:ring-0 border border-gray-200 bg-white focus:border-blue-500 h-14 placeholder:text-gray-400"
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
                className="px-6 py-4 text-white rounded-xl transition-all duration-200"
                style={{
                  background: 'linear-gradient(135deg, #5c706e, #98adc3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #373217, #5c706e)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #5c706e, #98adc3)';
                }}
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
          className="flex-1 flex items-center justify-center relative min-h-screen grainy-texture"
          style={{
            background: selectedActivityData?.gradient || 'linear-gradient(135deg, #373217 0%, #5c706e 50%, #98adc3 100%)'
          }}
        >
          <div className="text-center text-white z-10 p-10 flex flex-col items-center justify-center">
            {(() => {
              // Get selected activity data for dynamic content
              const selectedActivityData = getSelectedActivity();
              
              // Dynamic content based on selected activity and step
              const getDynamicContent = () => {
                // Use answers.activity to get the activity data for dynamic content
                const activityData = ACTIVITIES.find(activity => activity.id === answers.activity);
                
                // Step 0: Activity selection - show default or selected activity
                if (currentStep === 0) {
                  if (activityData) {
                    return {
                      title: activityData.heroTitle || activityData.title,
                      description: activityData.heroDescription || `Build the perfect ${activityData.title.toLowerCase()} program tailored just for you.`
                    };
                  }
                  return {
                  title: "Your Fitness Journey Begins",
                  description: "Every great transformation starts with a single choice. What type of movement calls to you today?"
                  };
                }
                
                // Step-specific dynamic content based on what we're collecting
                if (activityData) {
                  const activityName = activityData.title.toLowerCase();
                  
                  switch (currentStep) {
                    case 1: // Subcategory selection
                      return {
                        title: `Refine Your ${activityData.title} Focus`,
                        description: `Let's get specific about your ${activityName} goals and interests.`
                      };
                    case 2: // Demographics
                      return {
                        title: `Personalizing Your ${activityData.title} Plan`,
                        description: `Tell us about yourself so we can tailor your ${activityName} program perfectly.`
                      };
                    case 3: // Fitness level
                      return {
                        title: `Your ${activityData.title} Starting Point`,
                        description: `Understanding your current fitness level helps us create the right ${activityName} progression.`
                      };
                    case 4: // Time commitment
                      return {
                        title: `Fitting ${activityData.title} Into Your Life`,
                        description: `Let's find the perfect training schedule that works with your lifestyle.`
                      };
                    case 5: // Equipment
                      return {
                        title: `Your ${activityData.title} Setup`,
                        description: `What equipment do you have access to for your ${activityName} training?`
                      };
                    case 6: // Goals
                      return {
                        title: `Your ${activityData.title} Goals`,
                        description: `What do you want to achieve with your ${activityName} training?`
                      };
                    case 7: // Final step
                      return {
                        title: `Ready to Start Your ${activityData.title} Journey`,
                        description: `Perfect! Let's create your personalized ${activityName} program and get started.`
                      };
                    default:
                      return {
                        title: activityData.heroTitle || activityData.title,
                        description: activityData.heroDescription || `Build the perfect ${activityName} program tailored just for you.`
                      };
                  }
                }
                
                // Fallback content for other steps
                const stepContent: Record<number, { title: string; description: string }> = {
                  1: { title: "Let's Get Specific", description: "Great choice! Now let's dive deeper into what aspect of this activity excites you most." },
                  2: { title: "Getting to Know You", description: "Understanding who you are helps us create a plan that truly fits your life and goals." },
                  3: { title: "Where You Stand Today", description: "There's no judgment here - just honest assessment to build the perfect starting point for your journey." },
                  4: { title: "Making It Sustainable", description: "The best fitness plan is one you can actually stick to. Let's find your sweet spot for consistency." },
                  5: { title: "Working With What You Have", description: "Amazing results don't require expensive equipment. Let's see what tools we have to work with." },
                  6: { title: "Your Why Matters", description: "What drives you? Understanding your deeper motivation helps us create a plan that truly resonates." },
                  7: { title: "Ready to Create Your Plan", description: "Perfect! We have everything we need to create your personalized training program. Let's finalize the details and get started." }
                };
                
                return stepContent[currentStep] || { title: "Setup Your Profile", description: "Complete your profile setup" };
              };
              
              const content = getDynamicContent();
              
              return (
                <div className="max-w-lg mx-auto">
                  <h1 className="text-5xl font-semibold mb-4 tracking-tight text-center">
                    {content.title}
                  </h1>
                  <p className="text-xl opacity-90 leading-relaxed text-center mb-8">
                    {content.description}
                  </p>

                  {/* Contextual Info Sections - Moved to left side under H1/H2 */}
                  <div className="space-y-4 max-w-md mx-auto">
                    {/* Contextual Info for Triathlon/Ironman */}
                    {(answers.subcategory === 'triathlon' || answers.subcategory === 'ironman') && currentStep === 5 && (
                      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <div className="text-white/80 mt-0.5">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-white mb-1">FYI - Triathlon Training</h4>
                            <p className="text-sm text-white/80">Along with biking, running and swimming, you'll need comprehensive strength training to build the power and durability for race day success.</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Contextual Info for Strength Training */}
                    {answers.activity === 'strength-power' && currentStep === 6 && (
                      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <div className="text-white/80 mt-0.5">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-white mb-1">Strength Training Tip</h4>
                            <p className="text-sm text-white/80">Progressive overload is key - we'll start with your current abilities and gradually increase intensity to build strength safely and effectively.</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Contextual Info for Running */}
                    {answers.activity === 'cardio-endurance' && answers.subcategory === 'running' && currentStep === 6 && (
                      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <div className="text-white/80 mt-0.5">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-white mb-1">Running Success</h4>
                            <p className="text-sm text-white/80">The 80/20 rule works - 80% of your training should be at an easy, conversational pace, with 20% at higher intensities for optimal improvement.</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Contextual Info for Bodyweight Training */}
                    {answers.equipment?.includes('bodyweight-only') && currentStep === 6 && (
                      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <div className="text-white/80 mt-0.5">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-white mb-1">Bodyweight Power</h4>
                            <p className="text-sm text-white/80">No equipment? No problem! Bodyweight training can build incredible strength, endurance, and mobility - we'll show you advanced progressions.</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Contextual Info for Beginners */}
                    {answers.fitnessLevel === 'beginner' && currentStep === 2 && (
                      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <div className="text-white/80 mt-0.5">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-white mb-1">Perfect Starting Point</h4>
                            <p className="text-sm text-white/80">Everyone starts somewhere! We'll create a gentle, progressive plan that builds confidence and sustainable habits from day one.</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Contextual Info for Rehabilitation */}
                    {answers.goal === 'rehabilitation' && currentStep === 6 && (
                      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <div className="text-white/80 mt-0.5">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-white mb-1">Safety First</h4>
                            <p className="text-sm text-white/80">Recovery requires careful progression. We'll create a conservative plan, but always consult your healthcare provider before starting any new exercise program.</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })()}
          </div>
        </div>

        {/* Form Section */}
        <div className="w-1/2 bg-white flex flex-col">
          {/* Header with Progress */}
          <div className="px-6 pt-6 pb-6 border-b border-gray-100">
            {/* Back Button, Step Text, and Progress Bar in one line */}
            <div className="flex items-center gap-4">
              {currentStep > 0 && (
              <button
                onClick={handlePrevious}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 flex-shrink-0"
                  title="Go Back"
              >
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              )}
              <div className="text-sm text-gray-500 font-medium flex-shrink-0">
                Step {currentStep + 1} of {GOAL_FOCUSED_STEPS.length}
            </div>
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / GOAL_FOCUSED_STEPS.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="flex-1 px-6 py-8 overflow-y-auto">
            <div>
              {/* Step Title and Description */}
              <div className="mb-8">
                {/* Header */}
                <div className="px-4 py-6 border-b border-gray-200">
                  <div className="text-center">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      {(() => {
                        const step = GOAL_FOCUSED_STEPS[currentStep];
                        const stepTitles: { [key: string]: string } = {
                          'activity-selection': 'What moves you?',
                          'subcategory-selection': 'Let\'s get specific',
                          'demographics': 'About you',
                          'experience-level': 'Your fitness background',
                          'current-status': 'Current training status',
                          'time-commitment': 'Time & schedule',
                          'equipment-access': 'Equipment & space',
                          'primary-goal': 'Your main goal',
                          'activity-specific': 'Final details'
                        };
                        
                        // Dynamic titles for better context
                        if (step.type === 'experience-level' && answers.activity === 'cardio-endurance') {
                          if (answers.subcategory === 'triathlon' || answers.subcategory === 'ironman') {
                            return 'Triathlon & Endurance Starting Point';
                          }
                          return 'Cardio & Endurance Level';
                        }
                        
                        if (step.type === 'time-commitment' && answers.activity === 'cardio-endurance') {
                          if (answers.subcategory === 'triathlon' || answers.subcategory === 'ironman') {
                            return 'Fitting Triathlon Into Your Life';
                          }
                        }
                        
                        return stepTitles[step.type] || 'Onboarding';
                      })()}
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                      {(() => {
                        const step = GOAL_FOCUSED_STEPS[currentStep];
                        const stepDescriptions: { [key: string]: string } = {
                          'activity-selection': 'What type of movement calls to you? Choose the activity that excites you most.',
                          'subcategory-selection': 'Let\'s get more specific about your interests and goals.',
                          'demographics': 'Help us personalize your experience with some basic information.',
                          'experience-level': 'Understanding your current level helps us create the perfect starting point.',
                          'current-status': 'Where are you right now in your fitness journey? This helps us meet you where you are.',
                          'time-commitment': 'Let\'s find a schedule that works with your lifestyle.',
                          'equipment-access': 'We\'ll design your program around what you have available.',
                          'primary-goal': 'What\'s driving your fitness journey? This helps us focus your training.',
                          'activity-specific': 'Just a few more details to perfect your training plan.'
                        };
                        
                        // Dynamic descriptions for better context
                        if (step.type === 'experience-level' && answers.activity === 'cardio-endurance') {
                          return 'Understanding your current fitness level helps us create the right cardio & endurance progression.';
                        }
                        
                        if (step.type === 'time-commitment' && answers.activity === 'cardio-endurance') {
                          return 'Let\'s create a sustainable training schedule that fits your lifestyle and goals.';
                        }
                        
                        return stepDescriptions[step.type] || 'Complete your personalized fitness assessment.';
                      })()}
                    </p>
                  </div>
                </div>
              </div>

              {/* Activity Selection */}
              {step.type === 'activity-selection' && (
                <div className="space-y-6 mb-6">
                  <div className="grid grid-cols-2 gap-6">
                    {ACTIVITIES.map((activity) => {
                    const isSelected = answers.activity === activity.id;
                    return (
                    <button
                      key={activity.id}
                      onClick={() => handleAnswer('activity', activity.id)}
                          className={`bg-white rounded-xl py-4 px-4 text-left transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                          isSelected 
                              ? 'border-2 border-blue-500 shadow-xl' 
                            : 'border border-gray-200 hover:border-gray-300'
                      }`}
                    >
                          <div className="text-3xl mb-2">{activity.icon}</div>
                          <h3 className="text-base font-semibold text-gray-900 mb-2">{activity.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{activity.description}</p>
                    </button>
                    );
                  })}
                  </div>
                </div>
              )}

              {/* Subcategory Selection */}
              {step.type === 'subcategory-selection' && (
                <div className="space-y-6 mb-6">
                  {(() => {
                    const selectedActivityData = getSelectedActivity();
                    
                    // Special handling for Multiple Activities
                    if (answers.activity === 'multiple-activities') {
                      return (
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">What activities do you want to combine?</h3>
                          <p className="text-gray-600 mb-6">Select the activities you'd like to include in your training program:</p>
                          <div className="grid grid-cols-2 gap-4">
                            {ACTIVITIES.filter(activity => activity.id !== 'multiple-activities').map((activity) => {
                              const isSelected = answers.secondaryActivities?.some(sa => sa.activity === activity.id);
                              return (
                                <button
                                  key={activity.id}
                                  onClick={() => {
                                    const currentSecondary = answers.secondaryActivities || [];
                                    const newSecondary = isSelected
                                      ? currentSecondary.filter(sa => sa.activity !== activity.id)
                                      : [...currentSecondary, {
                                          activity: activity.id,
                                          proficiencyLevel: 'beginner',
                                          weeklyVolume: '1-2-hours',
                                          primaryGoal: 'general-health'
                                        }];
                                    handleAnswer('secondaryActivities', newSecondary);
                                  }}
                                  className={`bg-white rounded-xl py-4 px-4 text-left transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                                    isSelected 
                                      ? 'border-2 border-blue-500 shadow-xl' 
                                      : 'border border-gray-200 hover:border-gray-300'
                                  }`}
                                >
                                  <div className="text-2xl mb-2">{activity.icon}</div>
                                  <h3 className="text-sm font-semibold text-gray-900">{activity.title}</h3>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      );
                    }
                    
                    // Regular subcategory selection
                    if (!selectedActivityData?.subcategories?.length) {
                      return (
                        <div className="text-center py-8">
                          <p className="text-gray-600">Great choice! Let's continue setting up your {selectedActivityData?.title} program.</p>
                        </div>
                      );
                    }

                    return (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">What type of {selectedActivityData?.title.toLowerCase()} interests you most?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {selectedActivityData.subcategories.map((subcategory) => {
                        const isSelected = answers.subcategory === subcategory.id;
                        return (
                        <button
                          key={subcategory.id}
                          onClick={() => handleAnswer('subcategory', subcategory.id)}
                                className={`bg-white rounded-xl py-4 px-4 text-left transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                              isSelected 
                                ? 'border-2 border-blue-500 shadow-xl' 
                                : 'border border-gray-200 hover:border-gray-300'
                          }`}
                        >
                            <div className="text-2xl mb-3">{subcategory.icon}</div>
                            <h3 className="text-base font-semibold text-gray-900 mb-1">{subcategory.name}</h3>
                        </button>
                        );
                          })}
                        </div>
                        </div>
                      );
                  })()}
                </div>
              )}

              {/* Demographics */}
              {step.type === 'demographics' && (
                <div className="space-y-6 mb-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                      <label className="block text-base font-medium text-gray-900 mb-3">Age</label>
                    <input
                      type="number"
                      placeholder="Enter your age"
                        min="13"
                        max="120"
                        className="w-full p-4 border border-gray-300 rounded-lg text-base bg-white text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-100"
                      value={answers.age || ''}
                      onChange={(e) => handleAnswer('age', e.target.value)}
                    />
                  </div>

                  <div>
                      <label className="block text-base font-medium text-gray-900 mb-3">Gender</label>
                    <select 
                        className="w-full p-4 border border-gray-300 rounded-lg text-base bg-white text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-100"
                      value={answers.gender || ''}
                      onChange={(e) => handleAnswer('gender', e.target.value)}
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                        <option value="female">Female</option>
                      <option value="non-binary">Non-binary</option>
                      <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
                    </div>
                  </div>

                  {/* Height and Weight */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-base font-medium text-gray-900 mb-3">
                        Height (cm) <span className="text-sm text-gray-500 font-normal">(Optional)</span>
                      </label>
                          <input
                            type="number"
                          placeholder="Height in cm"
                        className="w-full p-4 border border-gray-300 rounded-lg text-base bg-white text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-100"
                          value={answers.heightCm || ''}
                          onChange={(e) => handleAnswer('heightCm', e.target.value)}
                        />
                    </div>
                    <div>
                      <label className="block text-base font-medium text-gray-900 mb-3">
                        Weight (kg) <span className="text-sm text-gray-500 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="number"
                        placeholder="Weight in kg"
                        className="w-full p-4 border border-gray-300 rounded-lg text-base bg-white text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-100"
                        value={answers.weight || ''}
                        onChange={(e) => handleAnswer('weight', e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-base font-medium text-gray-900 mb-3">
                      Location <span className="text-sm text-gray-500 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="City, Country or Timezone"
                      className="w-full p-4 border border-gray-300 rounded-lg text-base bg-white text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-100"
                      value={answers.location || ''}
                      onChange={(e) => handleAnswer('location', e.target.value)}
                    />
                    <p className="text-sm text-gray-500 mt-2">Helps us suggest local events and optimal training times</p>
                  </div>

                  {/* Units */}
                  <div>
                    <label className="block text-base font-medium text-gray-900 mb-3">
                      Units <span className="text-sm text-gray-500 font-normal">(Optional)</span>
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { id: 'metric', name: 'Metric (kg, cm)', icon: '📏' },
                        { id: 'imperial', name: 'Imperial (lbs, ft)', icon: '📐' }
                      ].map((unit) => {
                        const isSelected = answers.units === unit.id;
                      return (
                        <button
                            key={unit.id}
                            onClick={() => handleAnswer('units', unit.id)}
                            className={`bg-white rounded-lg p-3 text-left transition-all duration-300 hover:shadow-md ${
                            isSelected 
                                ? 'border-2 border-blue-500 shadow-lg bg-blue-50' 
                              : 'border border-gray-200 hover:border-gray-300'
                          }`}
                        >
                            <div className="text-lg mb-1">{unit.icon}</div>
                            <div className="text-sm font-medium text-gray-900">{unit.name}</div>
                        </button>
                      );
                      })}
                  </div>
                  </div>
                </div>
              )}

              {/* Fitness Level - Compact Layout */}
              {step.type === 'experience-level' && (
                <div className="space-y-6 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { id: 'beginner', name: 'Beginner', description: 'New to fitness or returning after a break', icon: '🌱' },
                      { id: 'some-experience', name: 'Some Experience', description: 'Occasional exercise, basic knowledge', icon: '🔄' },
                      { id: 'intermediate', name: 'Intermediate', description: 'Regular exercise routine, good form', icon: '🚶‍♂️' },
                      { id: 'advanced', name: 'Advanced', description: 'Consistent training, strong technique', icon: '🏃‍♂️' },
                      { id: 'expert', name: 'Expert', description: 'Years of experience, competition level', icon: '🔥' }
                    ].map((level) => {
                      const isSelected = answers.fitnessLevel === level.id;
                      return (
                        <button
                          key={level.id}
                          onClick={() => handleAnswer('fitnessLevel', level.id)}
                        className={`bg-white rounded-xl py-4 px-4 text-left transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                            isSelected 
                            ? 'border-2 border-blue-500 shadow-xl' 
                              : 'border border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="text-2xl mb-3">{level.icon}</div>
                          <h3 className="text-base font-semibold text-gray-900 mb-1">{level.name}</h3>
                          <p className="text-sm text-gray-600">{level.description}</p>
                        </button>
                      );
                  })}
                  </div>
                </div>
              )}

              {/* Current Status - Compact Layout */}
              {step.type === 'current-status' && (
                <div className="space-y-6 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { id: 'not-training', name: 'Not Currently Training', description: 'Taking a break or just starting', icon: '🛑' },
                      { id: 'inconsistent', name: 'Inconsistent Training', description: 'Training on and off, looking for consistency', icon: '🔄' },
                      { id: 'regular-training', name: 'Regular Training', description: 'Training consistently but want to improve', icon: '📈' },
                      { id: 'structured-program', name: 'Following a Program', description: 'Currently following a structured plan', icon: '📋' },
                      { id: 'returning-from-break', name: 'Returning from Break', description: 'Coming back after time off', icon: '🔄' },
                      { id: 'injury-recovery', name: 'Injury Recovery', description: 'Recovering from injury or setback', icon: '🩹' }
                  ].map((status) => {
                    const isSelected = answers.currentStatus === status.id;
                    return (
                      <button
                        key={status.id}
                        onClick={() => handleAnswer('currentStatus', status.id)}
                          className={`bg-white rounded-xl py-4 px-4 text-left transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                          isSelected 
                              ? 'border-2 border-blue-500 shadow-xl' 
                            : 'border border-gray-200 hover:border-gray-300'
                        }`}
                      >
                          <div className="text-2xl mb-3">{status.icon}</div>
                        <h3 className="text-base font-semibold text-gray-900 mb-1">{status.name}</h3>
                          <p className="text-sm text-gray-600">{status.description}</p>
                      </button>
                    );
                  })}
                  </div>
                </div>
              )}

              {/* Time Commitment - Compact Layout */}
              {step.type === 'time-commitment' && (
                <div className="space-y-6 mb-6">
                  {/* Session Length - Horizontal Grid */}
                  <div>
                    <label className="block text-base font-medium text-gray-900 mb-3">Preferred session length</label>
                    <div className="grid grid-cols-5 gap-3">
                      {[
                        { id: '15', name: '15', label: 'minutes', icon: '⚡' },
                        { id: '30', name: '30', label: 'minutes', icon: '⏰' },
                        { id: '45', name: '45', label: 'minutes', icon: '🕐' },
                        { id: '60', name: '60', label: 'minutes', icon: '⏳' },
                        { id: '90', name: '90+', label: 'minutes', icon: '🔥' }
                      ].map((duration) => {
                        const isSelected = answers.sessionLength === duration.id;
                        return (
                          <button
                            key={duration.id}
                            onClick={() => handleAnswer('sessionLength', duration.id)}
                            className={`bg-white rounded-lg p-3 text-center transition-all duration-300 hover:shadow-md ${
                              isSelected 
                                ? 'border-2 border-blue-500 shadow-lg bg-blue-50' 
                                : 'border border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <div className="text-lg mb-1">{duration.icon}</div>
                            <div className="text-sm font-medium text-gray-900">{duration.name}</div>
                            <div className="text-xs text-gray-600">{duration.label}</div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Days per Week - Dropdown */}
                  <div>
                    <label className="block text-base font-medium text-gray-900 mb-3">Days per week</label>
                    <select 
                      className="w-full p-4 border border-gray-300 rounded-lg text-base bg-white text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-100"
                      value={answers.daysPerWeek || ''}
                      onChange={(e) => handleAnswer('daysPerWeek', e.target.value)}
                    >
                      <option value="">Select days per week</option>
                      <option value="1">1 day per week</option>
                      <option value="2">2 days per week</option>
                      <option value="3">3 days per week</option>
                      <option value="4">4 days per week</option>
                      <option value="5">5 days per week</option>
                      <option value="6">6 days per week</option>
                      <option value="7">7 days per week</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Equipment - Simplified Layout */}
              {step.type === 'equipment-access' && (
                <div className="space-y-6 mb-6">
                  <div>
                    <label className="block text-base font-medium text-gray-900 mb-3">What equipment do you have access to?</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {(() => {
                        const baseEquipment = [
                          { id: 'gym-access', name: 'Gym Access', description: 'Full gym with weights, machines, cardio equipment', icon: '🏢' },
                          { id: 'home-setup', name: 'Home Setup', description: 'Dumbbells, resistance bands, basic equipment', icon: '🏠' },
                          { id: 'bodyweight-only', name: 'Bodyweight Only', description: 'No equipment needed, just your body', icon: '🤸‍♂️' }
                        ];

                        const activitySpecific = [];
                        if (answers.activity === 'cardio-endurance' && (answers.subcategory === 'swimming' || answers.subcategory === 'triathlon' || answers.subcategory === 'ironman')) {
                          activitySpecific.push({ id: 'pool-access', name: 'Pool Access', description: 'Swimming pool for training', icon: '🏊‍♀️' });
                        }
                        if (answers.activity === 'cardio-endurance' && (answers.subcategory === 'cycling' || answers.subcategory === 'triathlon' || answers.subcategory === 'ironman')) {
                          activitySpecific.push({ id: 'bicycle', name: 'Bicycle', description: 'Road bike, mountain bike, or trainer', icon: '🚴‍♂️' });
                        }

                        const allEquipment = [...baseEquipment, ...activitySpecific];

                        return allEquipment.map((equipment) => {
                          const isSelected = answers.equipment?.includes(equipment.id);
                    return (
                      <button
                              key={equipment.id}
                        onClick={() => {
                          const currentEquipment = answers.equipment || [];
                          const newEquipment = isSelected 
                                  ? currentEquipment.filter(e => e !== equipment.id)
                                  : [...currentEquipment, equipment.id];
                          handleAnswer('equipment', newEquipment);
                        }}
                              className={`bg-white rounded-lg p-4 text-left transition-all duration-300 hover:shadow-md ${
                          isSelected 
                                  ? 'border-2 border-blue-500 shadow-lg bg-blue-50' 
                            : 'border border-gray-200 hover:border-gray-300'
                        }`}
                      >
                              <div className="flex items-start gap-3">
                                <div className="text-2xl">{equipment.icon}</div>
                                <div>
                                  <h3 className="text-base font-semibold text-gray-900 mb-1">{equipment.name}</h3>
                                  <p className="text-sm text-gray-600">{equipment.description}</p>
                </div>
                </div>
                      </button>
                    );
                        });
                      })()}
                </div>
                      </div>
                      
                  {/* Environment Preference */}
                  <div>
                    <label className="block text-base font-medium text-gray-900 mb-3">Training environment preferences</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {(() => {
                        const getEnvironmentOptions = () => {
                          const baseOptions = [];
                          
                          // Activity-specific environment options
                          if (answers.activity === 'cardio-endurance') {
                            if (answers.subcategory === 'running') {
                              baseOptions.push(
                                { id: 'outdoor-running', name: 'Outdoor Running', description: 'Parks, trails, roads', icon: '🏃‍♂️' },
                                { id: 'indoor-running', name: 'Indoor Running', description: 'Treadmill, indoor track', icon: '🏃‍♀️' }
                              );
                            } else if (answers.subcategory === 'cycling') {
                              baseOptions.push(
                                { id: 'outdoor-cycling', name: 'Outdoor Cycling', description: 'Roads, trails, paths', icon: '🚴‍♂️' },
                                { id: 'indoor-cycling', name: 'Indoor Cycling', description: 'Trainer, spin class', icon: '🚴‍♀️' }
                              );
                            } else if (answers.subcategory === 'swimming') {
                              baseOptions.push(
                                { id: 'pool-swimming', name: 'Pool Swimming', description: 'Indoor/outdoor pools', icon: '🏊‍♂️' },
                                { id: 'open-water', name: 'Open Water', description: 'Lakes, ocean, rivers', icon: '🌊' }
                              );
                            } else if (answers.subcategory === 'triathlon' || answers.subcategory === 'ironman') {
                              baseOptions.push(
                                { id: 'pool-swimming', name: 'Pool Swimming', description: 'Indoor/outdoor pools', icon: '🏊‍♂️' },
                                { id: 'open-water', name: 'Open Water', description: 'Lakes, ocean for race prep', icon: '🌊' },
                                { id: 'outdoor-cycling', name: 'Outdoor Cycling', description: 'Roads, bike paths', icon: '🚴‍♂️' },
                                { id: 'indoor-cycling', name: 'Indoor Cycling', description: 'Trainer for bad weather', icon: '🚴‍♀️' },
                                { id: 'outdoor-running', name: 'Outdoor Running', description: 'Roads, trails', icon: '🏃‍♂️' },
                                { id: 'indoor-running', name: 'Indoor Running', description: 'Treadmill backup', icon: '🏃‍♀️' }
                              );
                            } else {
                              // General cardio options
                              baseOptions.push(
                                { id: 'outdoor', name: 'Outdoor', description: 'Parks, trails, fresh air', icon: '🌳' },
                                { id: 'gym', name: 'Gym', description: 'Cardio machines, climate control', icon: '🏢' },
                                { id: 'home', name: 'Home', description: 'Indoor workouts', icon: '🏠' }
                              );
                            }
                          } else if (answers.activity === 'strength-power') {
                            baseOptions.push(
                              { id: 'gym', name: 'Gym', description: 'Full weight room access', icon: '🏢' },
                              { id: 'home-gym', name: 'Home Gym', description: 'Personal equipment setup', icon: '🏠' },
                              { id: 'outdoor-strength', name: 'Outdoor', description: 'Parks, calisthenics areas', icon: '🌳' }
                            );
                          } else if (answers.activity === 'mind-body') {
                            baseOptions.push(
                              { id: 'studio', name: 'Studio', description: 'Yoga/pilates studios', icon: '🧘‍♀️' },
                              { id: 'home-practice', name: 'Home Practice', description: 'Personal space', icon: '🏠' },
                              { id: 'outdoor-mindful', name: 'Outdoor', description: 'Nature, peaceful settings', icon: '🌿' }
                            );
                          } else {
                            // Default options for other activities
                            baseOptions.push(
                              { id: 'gym', name: 'Gym', description: 'Full facility access', icon: '🏢' },
                              { id: 'outdoor', name: 'Outdoor', description: 'Parks, open spaces', icon: '🌳' },
                              { id: 'home', name: 'Home', description: 'Indoor workouts', icon: '🏠' },
                              { id: 'studio', name: 'Studio', description: 'Specialized facilities', icon: '🏛️' }
                            );
                          }
                          
                          return baseOptions;
                        };

                        const environmentOptions = getEnvironmentOptions();
                        
                        return environmentOptions.map((environment) => {
                          const isSelected = answers.trainingEnvironments?.includes(environment.id);
                    return (
                      <button
                              key={environment.id}
                        onClick={() => {
                                const currentEnvironments = answers.trainingEnvironments || [];
                                const newEnvironments = isSelected 
                                  ? currentEnvironments.filter(e => e !== environment.id)
                                  : [...currentEnvironments, environment.id];
                                handleAnswer('trainingEnvironments', newEnvironments);
                              }}
                              className={`bg-white rounded-lg p-4 text-left transition-all duration-300 hover:shadow-md ${
                          isSelected 
                                  ? 'border-2 border-blue-500 shadow-lg bg-blue-50' 
                            : 'border border-gray-200 hover:border-gray-300'
                        }`}
                      >
                              <div className="flex items-start gap-3">
                                <div className="text-2xl">{environment.icon}</div>
                                <div>
                                  <h3 className="text-base font-semibold text-gray-900 mb-1">{environment.name}</h3>
                                  <p className="text-sm text-gray-600">{environment.description}</p>
                </div>
                              </div>
                      </button>
                    );
                        });
                      })()}
                </div>
                      </div>
                      </div>
              )}

              {/* Primary Goal - Compact Layout */}
              {step.type === 'primary-goal' && (
                <div className="space-y-6 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { id: 'performance', name: 'Performance', description: 'Train for specific event/competition', icon: '🏆' },
                      { id: 'body-composition', name: 'Body Composition', description: 'Lose fat or gain muscle', icon: '💪' },
                      { id: 'general-health', name: 'General Health', description: 'Feel better, live healthier', icon: '❤️' },
                      { id: 'skill-development', name: 'Skill Development', description: 'Master new techniques', icon: '🎯' },
                      { id: 'stress-relief', name: 'Stress Relief', description: 'Mental wellness and relaxation', icon: '🧘‍♀️' },
                      { id: 'rehabilitation', name: 'Rehabilitation', description: 'Recover from injury or pain', icon: '🩹' }
                    ].map((goal) => {
                      const isSelected = answers.goal === goal.id;
                            return (
                            <button
                          key={goal.id}
                          onClick={() => handleAnswer('goal', goal.id)}
                                className={`bg-white rounded-xl py-4 px-4 text-left transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                                  isSelected 
                                    ? 'border-2 border-blue-500 shadow-xl' 
                                    : 'border border-gray-200 hover:border-gray-300'
                              }`}
                            >
                          <div className="text-2xl mb-3">{goal.icon}</div>
                          <h3 className="text-base font-semibold text-gray-900 mb-1">{goal.name}</h3>
                          <p className="text-sm text-gray-600">{goal.description}</p>
                            </button>
                            );
                          })}
                        </div>
                      </div>
              )}

              {/* Activity-Specific Questions */}
              {step.type === 'activity-specific' && (
                <div className="space-y-6 mb-6">
                  {answers.activity === 'cardio-endurance' && (answers.subcategory === 'triathlon' || answers.subcategory === 'ironman') && (
                    <>
                      {/* Triathlon/Ironman Experience - Always visible first */}
                      <div className="transition-all duration-500 ease-in-out">
                        <div 
                          className={`transition-all duration-300 ${
                            answers.activitySpecific?.triExperience ? 'mb-3' : 'mb-6'
                          }`}
                        >
                          {answers.activitySpecific?.triExperience ? (
                            /* Collapsed completed section */
                            <div 
                              className="bg-gray-50 border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                              onClick={() => {
                                const newActivitySpecific = { ...answers.activitySpecific };
                                delete newActivitySpecific.triExperience;
                                handleAnswer('activitySpecific', newActivitySpecific);
                              }}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                  </div>
                                  <div>
                                    <h3 className="text-base font-semibold text-gray-900">Triathlon Experience</h3>
                                    <p className="text-sm text-gray-600">
                                      {(() => {
                                        const experienceMap: { [key: string]: string } = {
                                          'never': 'First Time - New to triathlon training',
                                          'sprint': 'Sprint Distance - Standard distance experience',
                                          'olympic': 'Olympic Distance - Standard distance experience',
                                          'half': 'Half Ironman - Long course experience',
                                          'full': 'Full Ironman - Ultimate endurance experience'
                                        };
                                        return experienceMap[answers.activitySpecific?.triExperience || ''] || answers.activitySpecific?.triExperience;
                                      })()}
                                    </p>
                                  </div>
                                </div>
                                <div className="text-gray-400 text-sm">Click to change</div>
                              </div>
                            </div>
                          ) : (
                            /* Expanded selection section */
                            <div>
                              <label className="block text-base font-medium text-gray-900 mb-3">Your triathlon experience</label>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                  { id: 'never', name: 'First Time', description: 'New to triathlon training', icon: '🌱' },
                                  { id: 'sprint', name: 'Sprint Distance', description: 'Completed sprint triathlons', icon: '🏃‍♂️' },
                                  { id: 'olympic', name: 'Olympic Distance', description: 'Completed Olympic/standard distance', icon: '🏊‍♂️' },
                                  { id: 'half', name: 'Half Ironman', description: 'Completed 70.3 distance', icon: '🚴‍♂️' },
                                  { id: 'full', name: 'Full Ironman', description: 'Completed 140.6 distance', icon: '🏆' }
                                ].map((experience) => {
                                  const isSelected = answers.activitySpecific?.triExperience === experience.id;
                                  return (
                                    <button
                                      key={experience.id}
                                      onClick={() => handleAnswer('activitySpecific', { 
                                        ...answers.activitySpecific, 
                                        triExperience: experience.id 
                                      })}
                                      className={`bg-white rounded-xl py-4 px-4 text-left transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                                        isSelected 
                                          ? 'border-2 border-blue-500 shadow-xl' 
                                          : 'border border-gray-200 hover:border-gray-300'
                                      }`}
                                    >
                                      <div className="text-2xl mb-3">{experience.icon}</div>
                                      <h3 className="text-base font-semibold text-gray-900 mb-1">{experience.name}</h3>
                                      <p className="text-sm text-gray-600">{experience.description}</p>
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Target Distance - Appears after experience is selected */}
                      {answers.activitySpecific?.triExperience && (
                        <div className="animate-fade-in-up transition-all duration-500 ease-in-out">
                          <div 
                            className={`transition-all duration-300 ${
                              answers.activitySpecific?.triathlonDistance ? 'mb-3' : 'mb-6'
                            }`}
                          >
                            {answers.activitySpecific?.triathlonDistance ? (
                              /* Collapsed completed section */
                              <div 
                                className="bg-gray-50 border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                                onClick={() => {
                                  const newActivitySpecific = { ...answers.activitySpecific };
                                  delete newActivitySpecific.triathlonDistance;
                                  handleAnswer('activitySpecific', newActivitySpecific);
                                }}
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                      </svg>
                                    </div>
                                    <div>
                                      <h3 className="text-base font-semibold text-gray-900">Your target distance</h3>
                                      <p className="text-sm text-gray-600">
                                        {(() => {
                                          const distanceMap: { [key: string]: string } = {
                                            'sprint': 'Sprint - 750m swim, 20km bike, 5km run',
                                            'olympic': 'Olympic - 1.5km swim, 40km bike, 10km run',
                                            'half': 'Half Ironman - 1.9km swim, 90km bike, 21km run',
                                            'full': 'Full Ironman - 3.8km swim, 180km bike, 42km run'
                                          };
                                          return distanceMap[answers.activitySpecific?.triathlonDistance || ''] || answers.activitySpecific?.triathlonDistance;
                                        })()}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="text-gray-400 text-sm">Click to change</div>
                                </div>
                              </div>
                            ) : (
                              /* Expanded selection section */
                              <div>
                                <label className="block text-base font-medium text-gray-900 mb-3">Your target distance</label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  {[
                                    { id: 'sprint', name: 'Sprint', description: '750m swim, 20km bike, 5km run', icon: '⚡' },
                                    { id: 'olympic', name: 'Olympic', description: '1.5km swim, 40km bike, 10km run', icon: '🥇' },
                                    { id: 'half', name: 'Half Ironman', description: '1.9km swim, 90km bike, 21km run', icon: '🔥' },
                                    { id: 'full', name: 'Full Ironman', description: '3.8km swim, 180km bike, 42km run', icon: '💪' }
                                  ].map((distance) => {
                                    const isSelected = answers.activitySpecific?.triathlonDistance === distance.id;
                                    return (
                                      <button
                                        key={distance.id}
                                        onClick={() => handleAnswer('activitySpecific', { 
                                          ...answers.activitySpecific, 
                                          triathlonDistance: distance.id 
                                        })}
                                        className={`bg-white rounded-xl py-4 px-4 text-left transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                                          isSelected 
                                            ? 'border-2 border-blue-500 shadow-xl' 
                                            : 'border border-gray-200 hover:border-gray-300'
                                        }`}
                                      >
                                        <div className="text-2xl mb-3">{distance.icon}</div>
                                        <h3 className="text-base font-semibold text-gray-900 mb-1">{distance.name}</h3>
                                        <p className="text-sm text-gray-600">{distance.description}</p>
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Weakest Discipline - Appears after distance is selected */}
                      {answers.activitySpecific?.triExperience && answers.activitySpecific?.triathlonDistance && (
                        <div className="animate-fade-in-up transition-all duration-500 ease-in-out">
                          <div 
                            className={`transition-all duration-300 ${
                              answers.activitySpecific?.weakestDiscipline ? 'mb-3' : 'mb-6'
                            }`}
                          >
                            {answers.activitySpecific?.weakestDiscipline ? (
                              /* Collapsed completed section */
                              <div 
                                className="bg-gray-50 border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                                onClick={() => {
                                  const newActivitySpecific = { ...answers.activitySpecific };
                                  delete newActivitySpecific.weakestDiscipline;
                                  handleAnswer('activitySpecific', newActivitySpecific);
                                }}
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                      </svg>
                                    </div>
                                    <div>
                                      <h3 className="text-base font-semibold text-gray-900">Which discipline needs the most work?</h3>
                                      <p className="text-sm text-gray-600">
                                        {(() => {
                                          const disciplineMap: { [key: string]: string } = {
                                            'swimming': 'Swimming - Need to improve technique and endurance',
                                            'cycling': 'Cycling - Want to build bike fitness and power',
                                            'running': 'Running - Need to work on run endurance',
                                            'transitions': 'Transitions - Want to improve T1 and T2 speed',
                                            'all': 'All Equally - Balanced improvement across all three'
                                          };
                                          return disciplineMap[answers.activitySpecific?.weakestDiscipline || ''] || answers.activitySpecific?.weakestDiscipline;
                                        })()}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="text-gray-400 text-sm">Click to change</div>
                                </div>
                              </div>
                            ) : (
                              /* Expanded selection section */
                              <div>
                                <label className="block text-base font-medium text-gray-900 mb-3">Which discipline needs the most work?</label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  {[
                                    { id: 'swimming', name: 'Swimming', description: 'Need to improve technique and endurance', icon: '🏊‍♂️' },
                                    { id: 'cycling', name: 'Cycling', description: 'Want to build bike fitness and power', icon: '🚴‍♂️' },
                                    { id: 'running', name: 'Running', description: 'Need to work on run endurance', icon: '🏃‍♂️' },
                                    { id: 'transitions', name: 'Transitions', description: 'Want to improve T1 and T2 speed', icon: '⚡' },
                                    { id: 'all', name: 'All Equally', description: 'Balanced improvement across all three', icon: '⚖️' }
                                  ].map((discipline) => {
                                    const isSelected = answers.activitySpecific?.weakestDiscipline === discipline.id;
                                    return (
                                      <button
                                        key={discipline.id}
                                        onClick={() => handleAnswer('activitySpecific', { 
                                          ...answers.activitySpecific, 
                                          weakestDiscipline: discipline.id 
                                        })}
                                        className={`bg-white rounded-xl py-4 px-4 text-left transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                                          isSelected 
                                            ? 'border-2 border-blue-500 shadow-xl' 
                                            : 'border border-gray-200 hover:border-gray-300'
                                        }`}
                                      >
                                        <div className="text-2xl mb-3">{discipline.icon}</div>
                                        <h3 className="text-base font-semibold text-gray-900 mb-1">{discipline.name}</h3>
                                        <p className="text-sm text-gray-600">{discipline.description}</p>
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Completion message removed - users continue to AI chat for further personalization */}
                    </>
                  )}

                  {/* Default message for other activities or if no specific questions */}
                  {!(answers.activity === 'cardio-endurance' && (answers.subcategory === 'triathlon' || answers.subcategory === 'ironman')) && (
                    <div className="text-center py-8">
                      <p className="text-gray-600">Perfect! We have everything we need to create your personalized training program.</p>
                    </div>
                  )}
                </div>
              )}
                      </div>
            </div>

            {/* Navigation */}
          <div className="px-4 py-8 border-t border-gray-200">
            <div className="flex justify-end">
              <button
                onClick={handleNext}
                disabled={!canProceed()}
                data-continue-button
                className="py-3 px-8 text-white rounded-lg text-base font-medium disabled:opacity-40 disabled:cursor-not-allowed bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              >
                {currentStep === GOAL_FOCUSED_STEPS.length - 1 ? 'Let\'s Finalize Your Training Plan →' : 'Continue'}
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
        
        // Special handling for Multiple Activities - require at least one secondary activity
        if (answers.activity === 'multiple-activities') {
          return !!(answers.secondaryActivities && answers.secondaryActivities.length > 0);
        }
        
        return !selectedActivityData?.subcategories?.length || !!answers.subcategory;
      case 'demographics':
        // Only require age and gender, height and units are optional
        return !!(answers.age && answers.gender);
      case 'experience-level':
        return !!answers.fitnessLevel;
      case 'current-status':
        return !!answers.currentStatus;
      case 'time-commitment':
        return !!(answers.sessionLength && answers.daysPerWeek);
      case 'equipment-access':
        // Require at least one equipment selection
        return !!(answers.equipment && answers.equipment.length > 0);
      case 'primary-goal':
        return !!answers.goal;
      case 'activity-specific':
        // For triathlon/ironman, require the key selections
        if (answers.activity === 'cardio-endurance' && (answers.subcategory === 'triathlon' || answers.subcategory === 'ironman')) {
          return !!(answers.activitySpecific?.triExperience && 
                   answers.activitySpecific?.triathlonDistance && 
                   answers.activitySpecific?.weakestDiscipline);
        }
        return true; // Activity-specific questions are optional for other activities
      default:
        return true;
    }
  }

  return null;
} 