'use client';

import React, { useState } from 'react';
import TrainingPlansService, { TrainingPlan } from '../../lib/services/TrainingPlansService';

const TrainingPlansDisplay: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<'All' | 'Beginner' | 'Intermediate' | 'Advanced'>('All');
  const [selectedPlan, setSelectedPlan] = useState<TrainingPlan | null>(null);

  const allPlans = TrainingPlansService.getAllPlans();
  const filteredPlans = selectedLevel === 'All' 
    ? allPlans 
    : TrainingPlansService.getPlansByLevel(selectedLevel);

  const glossary = TrainingPlansService.getGlossary();
  const trainingTips = TrainingPlansService.getTrainingTips();

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Training Plans</h1>
        <p className="text-gray-600">Professional triathlon training plans for all levels</p>
      </div>

      {/* Level Filter */}
      <div className="flex justify-center space-x-4">
        {(['All', 'Beginner', 'Intermediate', 'Advanced'] as const).map((level) => (
          <button
            key={level}
            onClick={() => setSelectedLevel(level)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedLevel === level
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {level}
          </button>
        ))}
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlans.map((plan) => (
          <div
            key={plan.plan_id}
            className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setSelectedPlan(plan)}
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-semibold text-gray-900">{plan.title}</h3>
              <span className={`px-2 py-1 rounded text-xs font-medium ${
                plan.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                plan.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {plan.level}
              </span>
            </div>
            
            <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Duration:</span>
                <span className="font-medium">{plan.duration_weeks} weeks</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Avg Weekly Hours:</span>
                <span className="font-medium">{plan.average_weekly_hours}h</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Max Week Hours:</span>
                <span className="font-medium">{plan.max_week_hours}h</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Prerequisites:</h4>
              <div className="text-xs text-gray-600 space-y-1">
                <div>Swim: {plan.prerequisites.swim_distance}</div>
                <div>Bike: {plan.prerequisites.bike_duration}</div>
                <div>Run: {plan.prerequisites.run_duration}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Plan Detail Modal */}
      {selectedPlan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-gray-900">{selectedPlan.title}</h2>
              <button
                onClick={() => setSelectedPlan(null)}
                className="text-gray-500 hover:text-gray-700 text-xl"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Plan Overview</h3>
                <div className="space-y-2 text-sm">
                  <div><strong>Level:</strong> {selectedPlan.level}</div>
                  <div><strong>Duration:</strong> {selectedPlan.duration_weeks} weeks</div>
                  <div><strong>Average Weekly Hours:</strong> {selectedPlan.average_weekly_hours}</div>
                  <div><strong>Max Week Hours:</strong> {selectedPlan.max_week_hours}</div>
                </div>
                <p className="mt-3 text-gray-600">{selectedPlan.description}</p>
                {selectedPlan.note && (
                  <p className="mt-3 text-sm text-gray-500 italic">{selectedPlan.note}</p>
                )}
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Training Phases</h3>
                <div className="space-y-3">
                  {selectedPlan.phases.map((phase, index) => (
                    <div key={index} className="border border-gray-200 rounded p-3">
                      <div className="font-medium text-gray-900">{phase.phase}</div>
                      <div className="text-sm text-gray-600">Weeks: {phase.weeks.join(', ')}</div>
                      <div className="text-sm text-gray-500">{phase.focus}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Training Zones</h3>
                <div className="space-y-2">
                  {Object.entries(selectedPlan.training_zones).map(([zone, details]) => (
                    <div key={zone} className="border border-gray-200 rounded p-3">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{zone}</span>
                        <span className="text-sm text-gray-500">{details.heart_rate_percentage}</span>
                      </div>
                      <div className="text-sm text-gray-600">{details.name}</div>
                      <div className="text-xs text-gray-500">{details.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Prerequisites</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Swimming:</span>
                    <span className="font-medium">{selectedPlan.prerequisites.swim_distance}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cycling:</span>
                    <span className="font-medium">{selectedPlan.prerequisites.bike_duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Running:</span>
                    <span className="font-medium">{selectedPlan.prerequisites.run_duration}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Glossary */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Training Glossary</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(glossary).map(([term, definition]) => (
            <div key={term} className="bg-white rounded p-3">
              <div className="font-medium text-gray-900">{term}</div>
              <div className="text-sm text-gray-600">{definition}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Training Tips */}
      <div className="bg-blue-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Training Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(trainingTips).map(([category, tip]) => (
            <div key={category} className="bg-white rounded p-4">
              <div className="font-medium text-blue-900 capitalize mb-2">
                {category.replace(/_/g, ' ')}
              </div>
              <div className="text-sm text-gray-700">{tip}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainingPlansDisplay; 