'use client';

import React, { useState } from 'react';
import { X, Star, Clock, Zap, Heart, MessageSquare, Save, CheckCircle } from 'lucide-react';

interface WorkoutCompletionModalProps {
  isOpen: boolean;
  onClose: () => void;
  workout: {
    id: string;
    title: string;
    type: string;
    plannedDuration?: number;
    exercises?: any[];
  };
  programId: string;
  weekNumber: number;
  onSave: (completionData: any) => Promise<void>;
}

export default function WorkoutCompletionModal({
  isOpen,
  onClose,
  workout,
  programId,
  weekNumber,
  onSave
}: WorkoutCompletionModalProps) {
  const [completionType, setCompletionType] = useState<'quick' | 'detailed'>('quick');
  const [isLoading, setIsLoading] = useState(false);
  
  // Quick completion data
  const [quickData, setQuickData] = useState({
    completed: true,
    rpe: 5,
    rating: 3,
    duration: workout.plannedDuration || 30,
    notes: ''
  });

  // Detailed completion data
  const [detailedData, setDetailedData] = useState({
    completed: true,
    duration: workout.plannedDuration || 30,
    plannedDuration: workout.plannedDuration || 30,
    rpe: 5,
    overallRating: 3,
    energyLevel: 'moderate' as const,
    motivation: 'moderate' as const,
    difficultyRating: 'just-right' as const,
    sleepQuality: 'good' as const,
    stressLevel: 'moderate' as const,
    notes: '',
    weather: '',
    location: '',
    musclesSore: [] as string[]
  });

  const handleSave = async () => {
    setIsLoading(true);
    try {
      const completionData = completionType === 'quick' ? quickData : detailedData;
      
      await onSave({
        type: completionType,
        programId,
        weekNumber,
        workoutId: workout.id,
        workoutType: workout.type,
        completionData
      });
      
      onClose();
    } catch (error) {
      console.error('Error saving workout completion:', error);
      // Handle error (show toast, etc.)
    } finally {
      setIsLoading(false);
    }
  };

  const renderStarRating = (value: number, onChange: (value: number) => void, max: number = 5) => (
    <div className="flex gap-1">
      {[...Array(max)].map((_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => onChange(i + 1)}
          className={`p-1 transition-colors ${
            i < value ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-200'
          }`}
        >
          <Star className="w-5 h-5 fill-current" />
        </button>
      ))}
    </div>
  );

  const renderRPEScale = (value: number, onChange: (value: number) => void) => (
    <div className="space-y-2">
      <div className="flex justify-between text-sm text-gray-600">
        <span>Very Easy</span>
        <span>Moderate</span>
        <span>Very Hard</span>
      </div>
      <div className="flex gap-1">
        {[...Array(10)].map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onChange(i + 1)}
            className={`w-8 h-8 rounded text-sm font-medium transition-colors ${
              i + 1 === value
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );

  const renderQuickCompletion = () => (
    <div className="space-y-6">
      {/* Completion Status */}
      <div className="space-y-3">
        <label className="block text-sm font-medium text-gray-700">
          Did you complete this workout?
        </label>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => setQuickData({ ...quickData, completed: true })}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
              quickData.completed
                ? 'border-green-500 bg-green-50 text-green-700'
                : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <CheckCircle className="w-4 h-4" />
            Yes, completed
          </button>
          <button
            type="button"
            onClick={() => setQuickData({ ...quickData, completed: false })}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
              !quickData.completed
                ? 'border-orange-500 bg-orange-50 text-orange-700'
                : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <X className="w-4 h-4" />
            Partially/Not completed
          </button>
        </div>
      </div>

      {/* Duration */}
      <div className="space-y-3">
        <label className="block text-sm font-medium text-gray-700">
          <Clock className="w-4 h-4 inline mr-2" />
          Duration (minutes)
        </label>
        <input
          type="number"
          value={quickData.duration}
          onChange={(e) => setQuickData({ ...quickData, duration: parseInt(e.target.value) || 0 })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          min="0"
          max="300"
        />
      </div>

      {/* RPE */}
      <div className="space-y-3">
        <label className="block text-sm font-medium text-gray-700">
          <Zap className="w-4 h-4 inline mr-2" />
          How hard did it feel? (RPE: {quickData.rpe}/10)
        </label>
        {renderRPEScale(quickData.rpe, (value) => setQuickData({ ...quickData, rpe: value }))}
      </div>

      {/* Overall Rating */}
      <div className="space-y-3">
        <label className="block text-sm font-medium text-gray-700">
          <Heart className="w-4 h-4 inline mr-2" />
          How did you feel about this workout?
        </label>
        {renderStarRating(quickData.rating, (value) => setQuickData({ ...quickData, rating: value }))}
      </div>

      {/* Notes */}
      <div className="space-y-3">
        <label className="block text-sm font-medium text-gray-700">
          <MessageSquare className="w-4 h-4 inline mr-2" />
          Notes (optional)
        </label>
        <textarea
          value={quickData.notes}
          onChange={(e) => setQuickData({ ...quickData, notes: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={3}
          placeholder="How did the workout go? Any challenges or wins?"
        />
      </div>
    </div>
  );

  const renderDetailedCompletion = () => (
    <div className="space-y-6">
      {/* Basic completion info */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">
            Duration (minutes)
          </label>
          <input
            type="number"
            value={detailedData.duration}
            onChange={(e) => setDetailedData({ ...detailedData, duration: parseInt(e.target.value) || 0 })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            min="0"
            max="300"
          />
        </div>
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">
            RPE ({detailedData.rpe}/10)
          </label>
          <input
            type="range"
            min="1"
            max="10"
            value={detailedData.rpe}
            onChange={(e) => setDetailedData({ ...detailedData, rpe: parseInt(e.target.value) })}
            className="w-full"
          />
        </div>
      </div>

      {/* Energy and Motivation */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">
            Energy Level
          </label>
          <select
            value={detailedData.energyLevel}
            onChange={(e) => setDetailedData({ ...detailedData, energyLevel: e.target.value as any })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="very-low">Very Low</option>
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
            <option value="very-high">Very High</option>
          </select>
        </div>
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">
            Motivation
          </label>
          <select
            value={detailedData.motivation}
            onChange={(e) => setDetailedData({ ...detailedData, motivation: e.target.value as any })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="very-low">Very Low</option>
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
            <option value="very-high">Very High</option>
          </select>
        </div>
      </div>

      {/* Difficulty and Sleep */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">
            Difficulty Rating
          </label>
          <select
            value={detailedData.difficultyRating}
            onChange={(e) => setDetailedData({ ...detailedData, difficultyRating: e.target.value as any })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="too-easy">Too Easy</option>
            <option value="easy">Easy</option>
            <option value="just-right">Just Right</option>
            <option value="hard">Hard</option>
            <option value="too-hard">Too Hard</option>
          </select>
        </div>
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">
            Sleep Quality (last night)
          </label>
          <select
            value={detailedData.sleepQuality}
            onChange={(e) => setDetailedData({ ...detailedData, sleepQuality: e.target.value as any })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="poor">Poor</option>
            <option value="fair">Fair</option>
            <option value="good">Good</option>
            <option value="excellent">Excellent</option>
          </select>
        </div>
      </div>

      {/* Overall Rating */}
      <div className="space-y-3">
        <label className="block text-sm font-medium text-gray-700">
          Overall Workout Rating
        </label>
        {renderStarRating(detailedData.overallRating, (value) => setDetailedData({ ...detailedData, overallRating: value }))}
      </div>

      {/* Notes */}
      <div className="space-y-3">
        <label className="block text-sm font-medium text-gray-700">
          Notes
        </label>
        <textarea
          value={detailedData.notes}
          onChange={(e) => setDetailedData({ ...detailedData, notes: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={3}
          placeholder="How did the workout go? Any observations, challenges, or wins?"
        />
      </div>
    </div>
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Log Workout
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              {workout.title} • {workout.type}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Completion Type Toggle */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
            <button
              type="button"
              onClick={() => setCompletionType('quick')}
              className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                completionType === 'quick'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Quick Log
            </button>
            <button
              type="button"
              onClick={() => setCompletionType('detailed')}
              className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                completionType === 'detailed'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Detailed Log
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            {completionType === 'quick' 
              ? 'Quick logging for basic tracking'
              : 'Detailed logging helps AI provide better coaching'
            }
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {completionType === 'quick' ? renderQuickCompletion() : renderDetailedCompletion()}
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
            disabled={isLoading}
            className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Save className="w-4 h-4" />
            {isLoading ? 'Saving...' : 'Save Workout'}
          </button>
        </div>
      </div>
    </div>
  );
} 