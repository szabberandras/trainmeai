'use client';

import React, { useState } from 'react';
import { X, Brain, Shield, Target, Zap, Check, ArrowRight } from 'lucide-react';
import { CoachPersona } from '@/lib/types/training-system';

interface PersonaSwitchModalProps {
  isOpen: boolean;
  currentPersona: CoachPersona;
  onClose: () => void;
  onPersonaSelect: (persona: CoachPersona) => void;
}

const PERSONA_DETAILS = {
  FitCoach: {
    name: 'FitCoach AI',
    icon: Brain,
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    description: 'Your comprehensive science-based training expert',
    longDescription: 'Perfect for those who want detailed, evidence-based programming with scientific explanations.',
    strengths: [
      'Evidence-based exercise selection and programming',
      'Detailed explanations of training principles',
      'Progressive overload and periodization expertise'
    ],
    bestFor: [
      'General fitness enthusiasts',
      'Those who enjoy learning the "why" behind exercises',
      'People wanting structured, scientific programming'
    ],
    sampleResponse: '"Great choice on squats! This compound movement targets your quadriceps, glutes, and core while applying progressive overload principles."',
    intensity: 'Moderate to High',
    complexity: 'Medium',
    safetyFocus: 'Standard'
  },
  BeginnerGuide: {
    name: 'BeginnerGuide AI',
    icon: Shield,
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    description: 'Your protective guide for safe fitness beginnings',
    longDescription: 'Designed specifically for complete beginners or those returning to fitness.',
    strengths: [
      'Maximum safety and injury prevention focus',
      'Confidence-building approach with small wins',
      'Form mastery before progression'
    ],
    bestFor: [
      'Complete fitness beginners',
      'Those returning after injury or long break',
      'People who feel intimidated by fitness'
    ],
    sampleResponse: '"Perfect! Let\'s start with bodyweight squats - you\'re taking such a smart approach by focusing on form first."',
    intensity: 'Low to Moderate',
    complexity: 'Low',
    safetyFocus: 'Maximum'
  },
  SportSpecific: {
    name: 'SportSpecific AI',
    icon: Target,
    color: 'from-purple-500 to-violet-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    description: 'Your energy system and sport performance expert',
    longDescription: 'Specialized in sport-specific training, energy system development, and performance optimization.',
    strengths: [
      'Energy system training expertise (aerobic, anaerobic)',
      'Sport-specific periodization and programming',
      'Performance optimization focus'
    ],
    bestFor: [
      'Athletes training for specific sports',
      'Endurance event participants (marathons, cycling)',
      'Those wanting performance optimization'
    ],
    sampleResponse: '"Excellent! For marathon training, we\'ll target your aerobic system with 80% of training volume."',
    intensity: 'High',
    complexity: 'High',
    safetyFocus: 'Athlete-Managed'
  },
  TrainingPage: {
    name: 'TrainingPage AI',
    icon: Zap,
    color: 'from-gray-500 to-slate-600',
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-200',
    description: 'Your minimalist, daily-focused training coach',
    longDescription: 'Clean, simple, and effective. TrainingPage cuts through the noise to deliver focused daily guidance.',
    strengths: [
      'Minimalist, clutter-free approach',
      'Daily-focused training guidance',
      'Efficient, time-conscious programming'
    ],
    bestFor: [
      'Busy professionals with limited time',
      'Those who prefer minimal complexity',
      'Users wanting focused, daily guidance'
    ],
    sampleResponse: '"Squats today. 3 sets. Focus on depth and control. Build something good."',
    intensity: 'Moderate',
    complexity: 'Low',
    safetyFocus: 'Standard'
  }
};

export default function PersonaSwitchModal({ 
  isOpen, 
  currentPersona, 
  onClose, 
  onPersonaSelect 
}: PersonaSwitchModalProps) {
  const [selectedPersona, setSelectedPersona] = useState<CoachPersona>(currentPersona);
  const [showPreview, setShowPreview] = useState(false);

  if (!isOpen) return null;

  const handlePersonaSelect = (persona: CoachPersona) => {
    setSelectedPersona(persona);
    setShowPreview(true);
  };

  const handleConfirm = () => {
    onPersonaSelect(selectedPersona);
    onClose();
  };

  const selectedConfig = PERSONA_DETAILS[selectedPersona];
  const IconComponent = selectedConfig.icon;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Choose Your AI Coach</h2>
            <p className="text-gray-600 mt-1">Select the coaching style that matches your needs</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex h-[600px]">
          {/* Persona Selection */}
          <div className="w-1/2 p-6 border-r border-gray-200 overflow-y-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Coaches</h3>
            <div className="space-y-4">
              {(Object.keys(PERSONA_DETAILS) as CoachPersona[]).map((persona) => {
                const config = PERSONA_DETAILS[persona];
                const PersonaIcon = config.icon;
                const isSelected = selectedPersona === persona;
                const isCurrent = currentPersona === persona;

                return (
                  <div
                    key={persona}
                    onClick={() => handlePersonaSelect(persona)}
                    className={`
                      relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-200
                      ${isSelected 
                        ? `${config.borderColor} ${config.bgColor} shadow-lg` 
                        : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                      }
                    `}
                  >
                    {isCurrent && (
                      <div className="absolute top-2 right-2">
                        <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                          Current
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-start space-x-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${config.color} flex items-center justify-center shadow-md`}>
                        <PersonaIcon className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{config.name}</h4>
                        <p className="text-sm text-gray-600 mt-1">{config.description}</p>
                        
                        <div className="flex items-center space-x-4 mt-3 text-xs text-gray-500">
                          <span>Intensity: {config.intensity}</span>
                          <span>•</span>
                          <span>Complexity: {config.complexity}</span>
                        </div>
                      </div>
                      
                      {isSelected && (
                        <div className="text-blue-600">
                          <Check size={20} />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Preview Panel */}
          <div className="w-1/2 p-6 overflow-y-auto">
            {showPreview ? (
              <div className="space-y-6">
                {/* Preview Header */}
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${selectedConfig.color} flex items-center justify-center shadow-lg`}>
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{selectedConfig.name}</h3>
                    <p className="text-gray-600">{selectedConfig.description}</p>
                  </div>
                </div>

                {/* Long Description */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">About This Coach</h4>
                  <p className="text-gray-700">{selectedConfig.longDescription}</p>
                </div>

                {/* Key Strengths */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Strengths</h4>
                  <ul className="space-y-2">
                    {selectedConfig.strengths.map((strength, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Check className="text-green-600 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-sm text-gray-700">{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Best For */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Best For</h4>
                  <ul className="space-y-2">
                    {selectedConfig.bestFor.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <ArrowRight className="text-blue-600 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sample Response */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Sample Response</h4>
                  <div className={`p-4 ${selectedConfig.bgColor} border ${selectedConfig.borderColor} rounded-lg`}>
                    <p className="text-sm text-gray-700 italic">{selectedConfig.sampleResponse}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500">
                <div className="text-center">
                  <Brain className="mx-auto mb-4 text-gray-300" size={48} />
                  <p>Select a coach to see details</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50">
          <div className="text-sm text-gray-600">
            {selectedPersona !== currentPersona ? (
              <span>Switching to <strong>{selectedConfig.name}</strong></span>
            ) : (
              <span>Currently using <strong>{selectedConfig.name}</strong></span>
            )}
          </div>
          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              disabled={selectedPersona === currentPersona}
              className={`
                px-6 py-2 rounded-lg font-medium transition-all
                ${selectedPersona !== currentPersona
                  ? `bg-gradient-to-r ${selectedConfig.color} text-white hover:shadow-lg`
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }
              `}
            >
              {selectedPersona !== currentPersona ? 'Switch Coach' : 'Current Coach'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 