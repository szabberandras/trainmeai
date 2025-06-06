'use client';

import React, { useState } from 'react';
import { Brain, Shield, Target, Zap, Info, Settings, ChevronRight } from 'lucide-react';
import { CoachPersona } from '@/lib/types/training-system';
import { PersonaSelectionResult } from '@/lib/services/persona-selection.service';

interface PersonaCardProps {
  selectedPersona: CoachPersona;
  personaSelection?: PersonaSelectionResult;
  onPersonaChange?: (newPersona: CoachPersona) => void;
  onLearnMore?: () => void;
}

const PERSONA_CONFIG = {
  FitCoach: {
    name: 'FitCoach AI',
    icon: Brain,
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    description: 'Comprehensive science-based training',
    expertise: ['Exercise Physiology', 'Periodization', 'Progressive Overload'],
    approach: 'Evidence-based programming with detailed explanations',
    bestFor: 'General fitness enthusiasts who want scientific backing'
  },
  BeginnerGuide: {
    name: 'BeginnerGuide AI',
    icon: Shield,
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    description: 'Safety-first guidance for newcomers',
    expertise: ['Injury Prevention', 'Form Mastery', 'Confidence Building'],
    approach: 'Protective progression with encouraging support',
    bestFor: 'Complete beginners or those returning after a break'
  },
  SportSpecific: {
    name: 'SportSpecific AI',
    icon: Target,
    color: 'from-purple-500 to-violet-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    description: 'Energy system & sport performance expert',
    expertise: ['Energy Systems', 'Periodization', 'Sport Science'],
    approach: 'Technical training with performance optimization',
    bestFor: 'Athletes and sport-specific training goals'
  },
  TrainingPage: {
    name: 'TrainingPage AI',
    icon: Zap,
    color: 'from-gray-500 to-slate-600',
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-200',
    description: 'Minimalist daily-focused approach',
    expertise: ['Simplicity', 'Consistency', 'Efficiency'],
    approach: 'Clean, focused guidance without overwhelm',
    bestFor: 'Busy individuals who prefer minimal complexity'
  }
};

const SAFETY_PRIORITY_COLORS = {
  'maximum': 'text-red-600 bg-red-100',
  'high': 'text-orange-600 bg-orange-100',
  'moderate': 'text-yellow-600 bg-yellow-100',
  'standard': 'text-blue-600 bg-blue-100',
  'athlete-managed': 'text-purple-600 bg-purple-100'
};

const PROGRESSION_RATE_COLORS = {
  'very-conservative': 'text-green-600 bg-green-100',
  'conservative': 'text-blue-600 bg-blue-100',
  'moderate': 'text-yellow-600 bg-yellow-100',
  'aggressive': 'text-orange-600 bg-orange-100',
  'periodized': 'text-purple-600 bg-purple-100'
};

export default function PersonaCard({ 
  selectedPersona, 
  personaSelection, 
  onPersonaChange, 
  onLearnMore 
}: PersonaCardProps) {
  const [showDetails, setShowDetails] = useState(false);
  const config = PERSONA_CONFIG[selectedPersona];
  const IconComponent = config.icon;

  return (
    <div className={`${config.bgColor} ${config.borderColor} border rounded-xl p-6 transition-all duration-300 hover:shadow-lg`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${config.color} flex items-center justify-center shadow-lg`}>
            <IconComponent className="text-white" size={24} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{config.name}</h3>
            <p className="text-sm text-gray-600">Your AI Training Coach</p>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            title="View details"
          >
            <Info size={18} />
          </button>
          {onPersonaChange && (
            <button
              onClick={() => onLearnMore?.()}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              title="Change persona"
            >
              <Settings size={18} />
            </button>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 mb-4">{config.description}</p>

      {/* Key Stats */}
      {personaSelection && (
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="text-center">
            <div className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${SAFETY_PRIORITY_COLORS[personaSelection.safetyPriority as keyof typeof SAFETY_PRIORITY_COLORS]}`}>
              {personaSelection.safetyPriority.replace('-', ' ')}
            </div>
            <p className="text-xs text-gray-500 mt-1">Safety Priority</p>
          </div>
          <div className="text-center">
            <div className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${PROGRESSION_RATE_COLORS[personaSelection.progressionRate as keyof typeof PROGRESSION_RATE_COLORS]}`}>
              {personaSelection.progressionRate.replace('-', ' ')}
            </div>
            <p className="text-xs text-gray-500 mt-1">Progression Rate</p>
          </div>
        </div>
      )}

      {/* Expandable Details */}
      {showDetails && (
        <div className="border-t border-gray-200 pt-4 mt-4 space-y-4">
          {/* Expertise Areas */}
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-2">Expertise Areas</h4>
            <div className="flex flex-wrap gap-2">
              {config.expertise.map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-white border border-gray-200 rounded-md text-xs text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Approach */}
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-2">Training Approach</h4>
            <p className="text-sm text-gray-600">{config.approach}</p>
          </div>

          {/* Best For */}
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-2">Best For</h4>
            <p className="text-sm text-gray-600">{config.bestFor}</p>
          </div>

          {/* Selection Reasoning */}
          {personaSelection?.reasoning && (
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">Why This Persona?</h4>
              <p className="text-sm text-gray-600 italic">"{personaSelection.reasoning}"</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex space-x-3 pt-2">
            {onLearnMore && (
              <button
                onClick={onLearnMore}
                className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <span>Learn More</span>
                <ChevronRight size={16} />
              </button>
            )}
            {onPersonaChange && (
              <button
                onClick={() => onLearnMore?.()}
                className={`flex-1 px-4 py-2 bg-gradient-to-r ${config.color} text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all`}
              >
                Switch Persona
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 