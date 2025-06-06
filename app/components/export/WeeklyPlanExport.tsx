'use client';

import React, { useState } from 'react';
import { Download, Settings, CheckSquare, Square, FileText, Dumbbell, Apple, MessageCircle, X, Sparkles } from 'lucide-react';

interface ExportOptions {
  basicPlan: boolean;
  instructions: boolean;
  exerciseDetails: boolean;
  nutrition: boolean;
  chatSummary: boolean;
}

interface Exercise {
  name: string;
  sets?: number;
  reps?: number | string;
  weight?: string;
  duration?: string;
  instructions?: string[];
}

interface DayPlan {
  day: string;
  focus: string;
  duration: string;
  exercises: Exercise[];
}

interface WeeklyPlan {
  programName: string;
  weekNumber: number;
  totalWeeks: number;
  userGoal: string;
  chatSummary?: string;
  days: DayPlan[];
  nutrition?: {
    preWorkout: string;
    postWorkout: string;
    daily: string;
    hydration: string;
  };
}

interface WeeklyPlanExportProps {
  weeklyPlan: WeeklyPlan;
  onClose?: () => void;
}

const WeeklyPlanExport: React.FC<WeeklyPlanExportProps> = ({ weeklyPlan, onClose }) => {
  const [showExportModal, setShowExportModal] = useState(false);
  const [exportOptions, setExportOptions] = useState<ExportOptions>({
    basicPlan: true,
    instructions: false,
    exerciseDetails: false,
    nutrition: false,
    chatSummary: false
  });
  const [previewMode, setPreviewMode] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  const toggleOption = (option: keyof ExportOptions) => {
    setExportOptions(prev => ({
      ...prev,
      [option]: !prev[option]
    }));
  };

  const generateExport = async () => {
    setIsExporting(true);
    try {
      // Simulate export generation
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In real implementation, this would generate PDF/document
      console.log('Generating export with options:', exportOptions);
      
      setPreviewMode(true);
      setShowExportModal(false);
    } catch (error) {
      console.error('Export failed:', error);
    } finally {
      setIsExporting(false);
    }
  };

  const ExportModal = () => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white/95 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 w-[500px] max-w-[90vw] shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-gray-900 text-xl font-medium flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-2xl flex items-center justify-center">
              <Settings className="w-5 h-5 text-blue-600" />
            </div>
            Export Options
          </h3>
          <button
            onClick={() => setShowExportModal(false)}
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <X className="w-4 h-4 text-gray-600" />
          </button>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-blue-50 border border-blue-200 rounded-2xl">
            <CheckSquare className="w-5 h-5 text-blue-600" />
            <div className="flex-1">
              <h4 className="font-medium text-gray-900">Basic Weekly Plan</h4>
              <p className="text-sm text-gray-600">Days, exercises, sets, reps, weights</p>
            </div>
          </div>

          {[
            {
              key: 'instructions' as keyof ExportOptions,
              title: 'Exercise Instructions',
              description: 'Step-by-step how-to guides',
              icon: FileText
            },
            {
              key: 'exerciseDetails' as keyof ExportOptions,
              title: 'Detailed Exercise Info',
              description: 'Muscle groups, safety notes, modifications',
              icon: Dumbbell
            },
            {
              key: 'nutrition' as keyof ExportOptions,
              title: 'Nutrition Recommendations',
              description: 'Pre/post workout and daily nutrition guidance',
              icon: Apple
            },
            {
              key: 'chatSummary' as keyof ExportOptions,
              title: 'Chat Summary',
              description: 'Key points from your conversation with the AI trainer',
              icon: MessageCircle
            }
          ].map(({ key, title, description, icon: Icon }) => (
            <div 
              key={key}
              className="flex items-center gap-4 p-4 border border-gray-200 rounded-2xl cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => toggleOption(key)}
            >
              {exportOptions[key] ? 
                <CheckSquare className="w-5 h-5 text-blue-600" /> : 
                <Square className="w-5 h-5 text-gray-400" />
              }
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">{title}</h4>
                <p className="text-sm text-gray-600">{description}</p>
              </div>
              <Icon className="w-4 h-4 text-gray-400" />
            </div>
          ))}
        </div>

        <div className="flex gap-3 mt-8">
          <button
            onClick={() => setShowExportModal(false)}
            className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-medium"
          >
            Cancel
          </button>
          <button
            onClick={generateExport}
            disabled={isExporting}
            className="flex-1 px-4 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 font-medium disabled:opacity-50"
          >
            {isExporting ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Exporting...
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                Export
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );

  const ExportTemplate = () => (
    <div className="max-w-4xl mx-auto bg-white" id="export-template">
      {/* Header Section */}
      <div className="border-b-4 border-gray-900 pb-6 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-light text-gray-900">{weeklyPlan.programName}</h1>
            <p className="text-lg text-gray-600 mt-2">
              Week {weeklyPlan.weekNumber} of {weeklyPlan.totalWeeks}
            </p>
            <div className="flex items-center gap-4 mt-4">
              <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-xl text-sm font-medium">
                Goal: {weeklyPlan.userGoal}
              </span>
            </div>
          </div>
          <div className="w-24 h-24 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl flex items-center justify-center shadow-lg">
            <Dumbbell className="w-12 h-12 text-white" />
          </div>
        </div>
      </div>

      {/* Chat Summary Section */}
      {exportOptions.chatSummary && weeklyPlan.chatSummary && (
        <div className="mb-8 p-6 bg-gray-50 rounded-3xl border border-gray-200">
          <h2 className="text-xl font-medium mb-4 flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-2xl flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-blue-600" />
            </div>
            Conversation Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">{weeklyPlan.chatSummary}</p>
        </div>
      )}

      {/* Weekly Schedule */}
      <div className="mb-8">
        <h2 className="text-2xl font-light mb-6 text-gray-900">Weekly Schedule</h2>
        <div className="space-y-6">
          {weeklyPlan.days.map((day, dayIndex) => (
            <div key={dayIndex} className="bg-white/95 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-medium text-gray-900">{day.day}</h3>
                <div className="text-right">
                  <p className="font-medium text-gray-700">{day.focus}</p>
                  <p className="text-sm text-gray-500">{day.duration}</p>
                </div>
              </div>

              <div className="space-y-6">
                {day.exercises.map((exercise, exerciseIndex) => (
                  <div key={exerciseIndex} className="border-l-4 border-gray-300 pl-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-lg text-gray-900">{exercise.name}</h4>
                      <div className="flex gap-4 text-sm text-gray-600">
                        {exercise.sets && <span>Sets: {exercise.sets}</span>}
                        {exercise.reps && <span>Reps: {exercise.reps}</span>}
                        {exercise.weight && <span>Weight: {exercise.weight}</span>}
                        {exercise.duration && <span>Duration: {exercise.duration}</span>}
                      </div>
                    </div>

                    {exportOptions.instructions && exercise.instructions && (
                      <div className="mt-4">
                        <h5 className="font-medium mb-3 text-gray-900">Instructions:</h5>
                        <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                          {exercise.instructions.map((instruction, i) => (
                            <li key={i}>{instruction}</li>
                          ))}
                        </ol>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Nutrition Section */}
      {exportOptions.nutrition && weeklyPlan.nutrition && (
        <div className="mb-8">
          <h2 className="text-2xl font-light mb-6 flex items-center gap-3 text-gray-900">
            <div className="w-8 h-8 bg-green-100 rounded-2xl flex items-center justify-center">
              <Apple className="w-4 h-4 text-green-600" />
            </div>
            Nutrition Recommendations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-green-50 border border-green-200 rounded-3xl">
              <h3 className="font-medium mb-3 text-gray-900">Pre-Workout</h3>
              <p className="text-gray-700">{weeklyPlan.nutrition.preWorkout}</p>
            </div>
            <div className="p-6 bg-blue-50 border border-blue-200 rounded-3xl">
              <h3 className="font-medium mb-3 text-gray-900">Post-Workout</h3>
              <p className="text-gray-700">{weeklyPlan.nutrition.postWorkout}</p>
            </div>
            <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-3xl">
              <h3 className="font-medium mb-3 text-gray-900">Daily Nutrition</h3>
              <p className="text-gray-700">{weeklyPlan.nutrition.daily}</p>
            </div>
            <div className="p-6 bg-cyan-50 border border-cyan-200 rounded-3xl">
              <h3 className="font-medium mb-3 text-gray-900">Hydration</h3>
              <p className="text-gray-700">{weeklyPlan.nutrition.hydration}</p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="border-t border-gray-200 pt-6 mt-8 text-center text-gray-500">
        <p className="flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4" />
          Generated by OptiTrain AI • {new Date().toLocaleDateString()}
        </p>
        <p className="text-sm mt-2">Always consult with a healthcare provider before starting any new exercise program</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="flex flex-col max-w-[960px] flex-1">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-gray-900 text-[32px] font-light leading-tight tracking-wide mb-2">
                Weekly Plan Export
              </h1>
              <p className="text-gray-600 text-lg">
                Export your personalized training plan
              </p>
            </div>
            <div className="flex gap-3">
              {onClose && (
                <button
                  onClick={onClose}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-medium"
                >
                  Close
                </button>
              )}
              <button
                onClick={() => setPreviewMode(!previewMode)}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors flex items-center gap-2 font-medium"
              >
                <FileText className="w-4 h-4" />
                {previewMode ? 'Hide Preview' : 'Show Preview'}
              </button>
              <button
                onClick={() => setShowExportModal(true)}
                className="px-4 py-2 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors flex items-center gap-2 font-medium"
              >
                <Download className="w-4 h-4" />
                Export Plan
              </button>
            </div>
          </div>

          {previewMode && (
            <div className="bg-white/95 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 shadow-lg mb-8">
              <h2 className="text-lg font-medium mb-6 text-gray-900">Export Preview</h2>
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <ExportTemplate />
              </div>
            </div>
          )}

          {!previewMode && (
            <div className="bg-white/95 backdrop-blur-xl border border-gray-200 rounded-3xl p-12 shadow-lg text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="text-gray-400" size={24} />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Ready to Export Your Weekly Plan</h3>
              <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
                Choose what to include in your personalized training plan export. Create a comprehensive guide you can take anywhere.
              </p>
              <button
                onClick={() => setShowExportModal(true)}
                className="px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors flex items-center gap-3 mx-auto font-medium"
              >
                <Settings className="w-5 h-5" />
                Configure Export
              </button>
            </div>
          )}

          {showExportModal && <ExportModal />}
        </div>
      </div>
    </div>
  );
};

export default WeeklyPlanExport; 