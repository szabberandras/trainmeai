'use client';

import React, { useState } from 'react';
import { X, Target, Calendar, Zap, Clock, Save, Sparkles } from 'lucide-react';

interface ProgressiveProgramModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (programData: any) => Promise<void>;
  userProfile?: any;
}

export default function ProgressiveProgramModal({
  isOpen,
  onClose,
  onSave,
  userProfile
}: ProgressiveProgramModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [programData, setProgramData] = useState({
    name: '',
    discipline: '',
    goal: '',
    targetDate: '',
    weeklyVolume: 4,
    experienceLevel: 'intermediate',
    generationType: 'progressive' as 'progressive' | 'full_plan',
    includeExport: false,
    specificGoals: [] as string[],
    constraints: [] as string[],
    preferences: {
      intensityPreference: 'moderate',
      recoveryPriority: 'balanced',
      timeFlexibility: 'moderate'
    }
  });

  const disciplines = [
    { id: 'running', name: 'Running', icon: '🏃‍♂️' },
    { id: 'cycling', name: 'Cycling', icon: '🚴‍♂️' },
    { id: 'swimming', name: 'Swimming', icon: '🏊‍♂️' },
    { id: 'triathlon', name: 'Triathlon', icon: '🏊‍♂️🚴‍♂️🏃‍♂️' },
    { id: 'strength', name: 'Strength Training', icon: '💪' },
    { id: 'general-fitness', name: 'General Fitness', icon: '🏋️‍♂️' }
  ];

  const goalsByDiscipline = {
    running: [
      'Complete first 5K',
      'Improve 10K time',
      'Train for half marathon',
      'Marathon preparation',
      'Ultra marathon training',
      'Improve speed and endurance'
    ],
    cycling: [
      'Build cycling endurance',
      'Improve FTP (power)',
      'Century ride preparation',
      'Competitive racing',
      'Mountain biking skills',
      'Commuter fitness'
    ],
    swimming: [
      'Learn proper technique',
      'Build swimming endurance',
      'Open water swimming',
      'Competitive swimming',
      'Triathlon swim preparation',
      'Master all four strokes'
    ],
    triathlon: [
      'Sprint triathlon',
      'Olympic triathlon',
      'Half Ironman (70.3)',
      'Full Ironman',
      'Improve transition times',
      'Build multi-sport endurance'
    ],
    strength: [
      'Build muscle mass',
      'Increase strength',
      'Powerlifting competition',
      'Functional fitness',
      'Body recomposition',
      'Injury prevention'
    ],
    'general-fitness': [
      'Lose weight',
      'Improve overall health',
      'Build confidence',
      'Stress management',
      'Better sleep',
      'Increase energy levels'
    ]
  };

  const commonConstraints = [
    'Limited time (busy schedule)',
    'Injury history/concerns',
    'Equipment limitations',
    'Weather dependencies',
    'Travel schedule',
    'Family commitments',
    'Budget constraints',
    'Gym access limitations'
  ];

  const handleSave = async () => {
    setIsLoading(true);
    try {
      if (!programData.name || !programData.discipline || !programData.goal) {
        alert('Please fill in all required fields');
        return;
      }

      await onSave(programData);
      onClose();
    } catch (error) {
      console.error('Error creating progressive program:', error);
      alert('Failed to create program. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const toggleSpecificGoal = (goal: string) => {
    setProgramData(prev => ({
      ...prev,
      specificGoals: prev.specificGoals.includes(goal)
        ? prev.specificGoals.filter(g => g !== goal)
        : [...prev.specificGoals, goal]
    }));
  };

  const toggleConstraint = (constraint: string) => {
    setProgramData(prev => ({
      ...prev,
      constraints: prev.constraints.includes(constraint)
        ? prev.constraints.filter(c => c !== constraint)
        : [...prev.constraints, constraint]
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Sparkles className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Create AI-Powered Training Program
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Let AI design a progressive program that adapts to your performance
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Program Basics */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
              <Target className="w-5 h-5" />
              Program Basics
            </h3>

            {/* Generation Type Selection */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700">
                Program Type *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div 
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    programData.generationType === 'progressive' 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setProgramData({ ...programData, generationType: 'progressive' })}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Zap className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Progressive AI Training</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Week-by-week generation based on your performance. AI adapts your plan as you progress.
                      </p>
                      <div className="text-xs text-green-600 mt-2 font-medium">
                        ✓ Adaptive ✓ Personalized ✓ Performance-based
                      </div>
                    </div>
                  </div>
                </div>

                <div 
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    programData.generationType === 'full_plan' 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setProgramData({ ...programData, generationType: 'full_plan' })}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Calendar className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Complete Plan Overview</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        See your entire program upfront. Export capability. Details generated on-demand.
                      </p>
                      <div className="text-xs text-purple-600 mt-2 font-medium">
                        ✓ Full visibility ✓ Exportable ✓ Offline access
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Export Options for Full Plan */}
            {programData.generationType === 'full_plan' && (
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="includeExport"
                    checked={programData.includeExport}
                    onChange={(e) => setProgramData({ ...programData, includeExport: e.target.checked })}
                    className="mt-1"
                  />
                  <div>
                    <label htmlFor="includeExport" className="text-sm font-medium text-purple-900">
                      Include Export Options
                    </label>
                    <p className="text-xs text-purple-700 mt-1">
                      Enable PDF, CSV, and JSON export. Perfect for offline training or sharing with coaches.
                      <br />
                      <span className="font-medium">Note:</span> Exported plans lose progressive AI features and become static.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Program Name */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Program Name *
                </label>
                <input
                  type="text"
                  value={programData.name}
                  onChange={(e) => setProgramData({ ...programData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Marathon 2025, Summer Fitness, Ironman Training"
                />
              </div>

              {/* Target Date */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Target Date (optional)
                </label>
                <input
                  type="date"
                  value={programData.targetDate}
                  onChange={(e) => setProgramData({ ...programData, targetDate: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>

            {/* Discipline Selection */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700">
                Primary Discipline *
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {disciplines.map((discipline) => (
                  <button
                    key={discipline.id}
                    type="button"
                    onClick={() => setProgramData({ ...programData, discipline: discipline.id, goal: '' })}
                    className={`p-4 rounded-lg border-2 transition-colors text-left ${
                      programData.discipline === discipline.id
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-2xl mb-2">{discipline.icon}</div>
                    <div className="font-medium">{discipline.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Goal Selection */}
            {programData.discipline && (
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">
                  Primary Goal *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {goalsByDiscipline[programData.discipline as keyof typeof goalsByDiscipline]?.map((goal) => (
                    <button
                      key={goal}
                      type="button"
                      onClick={() => setProgramData({ ...programData, goal })}
                      className={`p-3 rounded-lg border text-left transition-colors ${
                        programData.goal === goal
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {goal}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Training Parameters */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Training Parameters
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Weekly Volume */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">
                  Training Days per Week
                </label>
                <div className="flex gap-2">
                  {[3, 4, 5, 6, 7].map((days) => (
                    <button
                      key={days}
                      type="button"
                      onClick={() => setProgramData({ ...programData, weeklyVolume: days })}
                      className={`px-4 py-2 rounded-lg border transition-colors ${
                        programData.weeklyVolume === days
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {days} days
                    </button>
                  ))}
                </div>
              </div>

              {/* Experience Level */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">
                  Experience Level
                </label>
                <select
                  value={programData.experienceLevel}
                  onChange={(e) => setProgramData({ ...programData, experienceLevel: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="beginner">Beginner (0-1 years)</option>
                  <option value="intermediate">Intermediate (1-3 years)</option>
                  <option value="advanced">Advanced (3+ years)</option>
                  <option value="expert">Expert/Competitive</option>
                </select>
              </div>
            </div>

            {/* Training Preferences */}
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Training Preferences</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Intensity Preference
                  </label>
                  <select
                    value={programData.preferences.intensityPreference}
                    onChange={(e) => setProgramData({
                      ...programData,
                      preferences: { ...programData.preferences, intensityPreference: e.target.value }
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="conservative">Conservative</option>
                    <option value="moderate">Moderate</option>
                    <option value="aggressive">Aggressive</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Recovery Priority
                  </label>
                  <select
                    value={programData.preferences.recoveryPriority}
                    onChange={(e) => setProgramData({
                      ...programData,
                      preferences: { ...programData.preferences, recoveryPriority: e.target.value }
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="minimal">Minimal Recovery</option>
                    <option value="balanced">Balanced</option>
                    <option value="high">High Recovery</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Schedule Flexibility
                  </label>
                  <select
                    value={programData.preferences.timeFlexibility}
                    onChange={(e) => setProgramData({
                      ...programData,
                      preferences: { ...programData.preferences, timeFlexibility: e.target.value }
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="rigid">Fixed Schedule</option>
                    <option value="moderate">Some Flexibility</option>
                    <option value="flexible">Very Flexible</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* AI Preview */}
          {programData.name && programData.discipline && programData.goal && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-blue-900 mb-2">AI Program Preview</h4>
                  <p className="text-sm text-blue-800">
                    Your "{programData.name}" program will start with Week 1 focused on {programData.discipline} 
                    to help you {programData.goal.toLowerCase()}. The AI will analyze your performance after each week 
                    and generate the next week's training based on your progress, ensuring optimal adaptation and 
                    preventing overtraining.
                  </p>
                  {programData.targetDate && (
                    <p className="text-sm text-blue-700 mt-2">
                      Target date: {new Date(programData.targetDate).toLocaleDateString()} 
                      ({Math.ceil((new Date(programData.targetDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24 * 7))} weeks)
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            disabled={isLoading || !programData.name || !programData.discipline || !programData.goal}
            className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Save className="w-4 h-4" />
            {isLoading ? 'Creating...' : 'Create Program'}
          </button>
        </div>
      </div>
    </div>
  );
} 