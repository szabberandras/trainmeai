'use client';

import React, { useState, useEffect } from 'react';
import { TrendingUp, Target, Calendar, Award, Brain, Shield, Zap } from 'lucide-react';
import { CoachPersona } from '@/lib/types/training-system';
import { PersonaSelectionResult } from '@/lib/services/persona-selection.service';

interface ProgressInsightsProps {
  selectedPersona: CoachPersona;
  personaSelection?: PersonaSelectionResult;
  userProgress?: {
    workoutsCompleted: number;
    totalWorkouts: number;
    currentStreak: number;
    weeklyGoal: number;
    completionRate: number;
  };
}

const PERSONA_PROGRESS_CONFIG = {
  FitCoach: {
    name: 'FitCoach AI',
    icon: Brain,
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    focusMetrics: ['Progressive Overload', 'Volume Progression', 'Strength Gains'],
    insightStyle: 'scientific',
    progressMessage: (stats: any) => 
      `Your training data shows ${stats.completionRate}% adherence - excellent for sustainable adaptation! Progressive overload is working.`
  },
  BeginnerGuide: {
    name: 'BeginnerGuide AI',
    icon: Shield,
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    focusMetrics: ['Consistency', 'Form Mastery', 'Confidence Building'],
    insightStyle: 'encouraging',
    progressMessage: (stats: any) => 
      `You're building something amazing! ${stats.workoutsCompleted} workouts completed - every single one makes you stronger and more confident.`
  },
  SportSpecific: {
    name: 'SportSpecific AI',
    icon: Target,
    color: 'from-purple-500 to-violet-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    focusMetrics: ['Energy System Development', 'Sport Performance', 'Periodization'],
    insightStyle: 'performance',
    progressMessage: (stats: any) => 
      `Your aerobic base is developing well with ${stats.completionRate}% training compliance. Energy system adaptations are on track.`
  },
  TrainingPage: {
    name: 'TrainingPage AI',
    icon: Zap,
    color: 'from-gray-500 to-slate-600',
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-200',
    focusMetrics: ['Daily Consistency', 'Quality Focus', 'Efficiency'],
    insightStyle: 'minimal',
    progressMessage: (stats: any) => 
      `${stats.workoutsCompleted} sessions completed. ${stats.currentStreak} day streak. Building something good.`
  }
};

const PROGRESS_INSIGHTS = {
  FitCoach: [
    "Your progressive overload is tracking well - strength adaptations typically occur in 4-6 week cycles",
    "Training volume is within optimal ranges for hypertrophy and strength development",
    "Recovery patterns suggest good adaptation to current training stimulus"
  ],
  BeginnerGuide: [
    "You're developing excellent movement patterns - form mastery is the foundation of everything!",
    "Your consistency is building the habit that will transform your life",
    "Every workout is teaching your body new skills - be proud of this progress!"
  ],
  SportSpecific: [
    "Your aerobic base development is progressing according to periodization principles",
    "Energy system adaptations are occurring - endurance improvements typically show in 3-4 weeks",
    "Training load distribution is optimized for your sport-specific demands"
  ],
  TrainingPage: [
    "Consistency beats perfection. You're building something sustainable.",
    "Quality sessions are more valuable than quantity - you're doing this right.",
    "Small daily actions compound into significant results over time."
  ]
};

export default function ProgressInsights({ 
  selectedPersona, 
  personaSelection, 
  userProgress 
}: ProgressInsightsProps) {
  const [currentInsightIndex, setCurrentInsightIndex] = useState(0);
  const config = PERSONA_PROGRESS_CONFIG[selectedPersona];
  const IconComponent = config.icon;
  const insights = PROGRESS_INSIGHTS[selectedPersona];

  // Rotate insights every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInsightIndex((prev) => (prev + 1) % insights.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [insights.length]);

  // Default progress data if none provided
  const defaultProgress = {
    workoutsCompleted: 12,
    totalWorkouts: 20,
    currentStreak: 3,
    weeklyGoal: 4,
    completionRate: 75
  };

  const progress = userProgress || defaultProgress;
  const progressPercentage = (progress.workoutsCompleted / progress.totalWorkouts) * 100;

  return (
    <div className={`${config.bgColor} ${config.borderColor} border rounded-xl p-6`}>
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6">
        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${config.color} flex items-center justify-center shadow-md`}>
          <IconComponent className="text-white" size={20} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Progress Insights</h3>
          <p className="text-sm text-gray-600">From your {config.name}</p>
        </div>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">{progress.workoutsCompleted}</div>
          <div className="text-xs text-gray-500">Workouts Done</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">{progress.currentStreak}</div>
          <div className="text-xs text-gray-500">Day Streak</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">{progress.completionRate}%</div>
          <div className="text-xs text-gray-500">Completion</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Progress to Goal</span>
          <span>{Math.round(progressPercentage)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`bg-gradient-to-r ${config.color} h-2 rounded-full transition-all duration-500`}
            style={{ width: `${Math.min(progressPercentage, 100)}%` }}
          />
        </div>
      </div>

      {/* Focus Metrics */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-900 mb-3">Focus Areas</h4>
        <div className="space-y-2">
          {config.focusMetrics.map((metric, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-green-600" />
              <span className="text-sm text-gray-700">{metric}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Persona-Specific Insight */}
      <div className="bg-white/60 rounded-lg p-4 mb-4">
        <div className="flex items-start space-x-2">
          <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${config.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
            <IconComponent className="text-white" size={12} />
          </div>
          <div>
            <p className="text-sm text-gray-700 leading-relaxed">
              {insights[currentInsightIndex]}
            </p>
          </div>
        </div>
      </div>

      {/* Progress Message */}
      <div className="border-t border-gray-200 pt-4">
        <p className="text-sm text-gray-600 italic">
          {config.progressMessage(progress)}
        </p>
      </div>

      {/* Insight Indicators */}
      <div className="flex justify-center space-x-2 mt-4">
        {insights.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentInsightIndex 
                ? `bg-gradient-to-r ${config.color}` 
                : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
} 