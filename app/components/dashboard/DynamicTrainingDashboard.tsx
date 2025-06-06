'use client';

import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Play, 
  Pause, 
  CheckCircle, 
  Edit3, 
  TrendingUp, 
  Target,
  Clock,
  Dumbbell,
  Heart,
  Zap,
  Star,
  Plus,
  Settings,
  BarChart3
} from 'lucide-react';
import { 
  TrainingProgram, 
  DynamicWorkout, 
  DynamicExercise,
  ProgressMetrics,
  dynamicTrainingService 
} from '@/lib/services/dynamic-training.service';
import { CoachPersona, UserProfile } from '@/lib/types/training-system';

interface DynamicTrainingDashboardProps {
  userProfile: UserProfile;
  currentPersona: CoachPersona;
  onCreateProgram: () => void;
}

interface ActiveWorkout {
  program: TrainingProgram;
  workout: DynamicWorkout;
  currentExerciseIndex: number;
  currentSetIndex: number;
  startTime: Date;
  isActive: boolean;
}

export default function DynamicTrainingDashboard({ 
  userProfile, 
  currentPersona, 
  onCreateProgram 
}: DynamicTrainingDashboardProps) {
  const [programs, setPrograms] = useState<TrainingProgram[]>([]);
  const [activeWorkout, setActiveWorkout] = useState<ActiveWorkout | null>(null);
  const [selectedProgram, setSelectedProgram] = useState<TrainingProgram | null>(null);
  const [progressMetrics, setProgressMetrics] = useState<ProgressMetrics | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUserPrograms();
  }, [userProfile]);

  const loadUserPrograms = async () => {
    try {
      // In a real implementation, this would load from database
      // For now, we'll simulate with empty state
      setPrograms([]);
      setLoading(false);
    } catch (error) {
      console.error('Error loading programs:', error);
      setLoading(false);
    }
  };

  const handleStartWorkout = (program: TrainingProgram, workout: DynamicWorkout) => {
    const activeWorkout: ActiveWorkout = {
      program,
      workout,
      currentExerciseIndex: 0,
      currentSetIndex: 0,
      startTime: new Date(),
      isActive: true
    };
    setActiveWorkout(activeWorkout);
  };

  const handleCompleteSet = (exerciseIndex: number, setIndex: number, actualData: any) => {
    if (!activeWorkout) return;

    // Update the set with actual performance data
    const updatedWorkout = { ...activeWorkout.workout };
    updatedWorkout.exercises[exerciseIndex].sets[setIndex] = {
      ...updatedWorkout.exercises[exerciseIndex].sets[setIndex],
      ...actualData,
      completed: true
    };

    setActiveWorkout({
      ...activeWorkout,
      workout: updatedWorkout
    });

    // Move to next set or exercise
    const currentExercise = updatedWorkout.exercises[exerciseIndex];
    if (setIndex < currentExercise.sets.length - 1) {
      setActiveWorkout(prev => prev ? { ...prev, currentSetIndex: setIndex + 1 } : null);
    } else if (exerciseIndex < updatedWorkout.exercises.length - 1) {
      setActiveWorkout(prev => prev ? { 
        ...prev, 
        currentExerciseIndex: exerciseIndex + 1,
        currentSetIndex: 0
      } : null);
    }
  };

  const handleCompleteWorkout = (rating: number, feedback?: string) => {
    if (!activeWorkout) return;

    // Mark workout as complete
    const completedWorkout = {
      ...activeWorkout.workout,
      completed: true,
      completedAt: new Date().toISOString(),
      rating,
      feedback
    };

    // Update program
    const updatedProgram = { ...activeWorkout.program };
    const weekIndex = updatedProgram.weeks.findIndex(w => w.weekNumber === updatedProgram.currentWeek);
    if (weekIndex !== -1) {
      const workoutIndex = updatedProgram.weeks[weekIndex].workouts.findIndex(w => w.id === completedWorkout.id);
      if (workoutIndex !== -1) {
        updatedProgram.weeks[weekIndex].workouts[workoutIndex] = completedWorkout;
      }
    }

    // Update programs list
    setPrograms(prev => prev.map(p => p.id === updatedProgram.id ? updatedProgram : p));
    setActiveWorkout(null);
  };

  const handleModifyExercise = (programId: string, workoutId: string, exerciseId: string, modifications: any) => {
    // Update exercise with modifications
    setPrograms(prev => prev.map(program => {
      if (program.id !== programId) return program;
      
      return {
        ...program,
        weeks: program.weeks.map(week => ({
          ...week,
          workouts: week.workouts.map(workout => {
            if (workout.id !== workoutId) return workout;
            
            return {
              ...workout,
              exercises: workout.exercises.map(exercise => 
                exercise.id === exerciseId ? { ...exercise, ...modifications } : exercise
              )
            };
          })
        }))
      };
    }));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Training Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Track your progress across all disciplines with AI-powered insights
          </p>
        </div>
        <button
          onClick={onCreateProgram}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          New Program
        </button>
      </div>

      <div className="text-center py-12">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Dumbbell className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No Training Programs Yet</h3>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          Create your first dynamic training program to start tracking your fitness journey across all disciplines.
        </p>
        <button
          onClick={onCreateProgram}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 mx-auto"
        >
          <Plus className="w-4 h-4" />
          Create Your First Program
        </button>
      </div>
    </div>
  );
}

// Active Workout Card Component
function ActiveWorkoutCard({ 
  activeWorkout, 
  onCompleteSet, 
  onCompleteWorkout, 
  onPauseWorkout, 
  onResumeWorkout 
}: {
  activeWorkout: ActiveWorkout;
  onCompleteSet: (exerciseIndex: number, setIndex: number, actualData: any) => void;
  onCompleteWorkout: (rating: number, feedback?: string) => void;
  onPauseWorkout: () => void;
  onResumeWorkout: () => void;
}) {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [setData, setSetData] = useState<any>({});
  const [showCompleteModal, setShowCompleteModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeWorkout.isActive) {
        setElapsedTime(Date.now() - activeWorkout.startTime.getTime());
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [activeWorkout]);

  const currentExercise = activeWorkout.workout.exercises[activeWorkout.currentExerciseIndex];
  const currentSet = currentExercise?.sets[activeWorkout.currentSetIndex];
  const isLastExercise = activeWorkout.currentExerciseIndex === activeWorkout.workout.exercises.length - 1;
  const isLastSet = activeWorkout.currentSetIndex === currentExercise?.sets.length - 1;

  const formatTime = (ms: number) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    return `${hours.toString().padStart(2, '0')}:${(minutes % 60).toString().padStart(2, '0')}:${(seconds % 60).toString().padStart(2, '0')}`;
  };

  const handleCompleteSet = () => {
    onCompleteSet(activeWorkout.currentExerciseIndex, activeWorkout.currentSetIndex, setData);
    setSetData({});
    
    if (isLastExercise && isLastSet) {
      setShowCompleteModal(true);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{activeWorkout.workout.name}</h3>
          <p className="text-gray-600">{activeWorkout.program.name}</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <Clock className="w-4 h-4" />
            {formatTime(elapsedTime)}
          </div>
          {activeWorkout.isActive ? (
            <button
              onClick={onPauseWorkout}
              className="p-2 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200"
            >
              <Pause className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={onResumeWorkout}
              className="p-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200"
            >
              <Play className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {currentExercise && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-medium text-gray-900">{currentExercise.name}</h4>
            <span className="text-sm text-gray-500">
              Exercise {activeWorkout.currentExerciseIndex + 1} of {activeWorkout.workout.exercises.length}
            </span>
          </div>

          {currentSet && (
            <div className="bg-white rounded-lg p-4 border">
              <div className="flex justify-between items-center mb-3">
                <span className="font-medium">Set {currentSet.setNumber}</span>
                <span className="text-sm text-gray-500">
                  {activeWorkout.currentSetIndex + 1} of {currentExercise.sets.length}
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                {currentSet.targetReps && (
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Reps</label>
                    <input
                      type="number"
                      placeholder={`Target: ${currentSet.targetReps}`}
                      value={setData.actualReps || ''}
                      onChange={(e) => setSetData(prev => ({ ...prev, actualReps: parseInt(e.target.value) }))}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                )}
                {currentSet.targetWeight && (
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Weight (lbs)</label>
                    <input
                      type="number"
                      placeholder={`Target: ${currentSet.targetWeight}`}
                      value={setData.actualWeight || ''}
                      onChange={(e) => setSetData(prev => ({ ...prev, actualWeight: parseInt(e.target.value) }))}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                )}
                {currentSet.targetDuration && (
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Duration (sec)</label>
                    <input
                      type="number"
                      placeholder={`Target: ${currentSet.targetDuration}`}
                      value={setData.actualDuration || ''}
                      onChange={(e) => setSetData(prev => ({ ...prev, actualDuration: parseInt(e.target.value) }))}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                )}
                <div>
                  <label className="block text-sm text-gray-600 mb-1">RPE (1-10)</label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    placeholder="Rate effort"
                    value={setData.rpe || ''}
                    onChange={(e) => setSetData(prev => ({ ...prev, rpe: parseInt(e.target.value) }))}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <button
                onClick={handleCompleteSet}
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-4 h-4" />
                Complete Set
              </button>
            </div>
          )}
        </div>
      )}

      {/* Workout Complete Modal */}
      {showCompleteModal && (
        <WorkoutCompleteModal
          workout={activeWorkout.workout}
          onComplete={onCompleteWorkout}
          onClose={() => setShowCompleteModal(false)}
        />
      )}
    </div>
  );
}

// Program Card Component
function ProgramCard({ 
  program, 
  onStartWorkout, 
  onModifyExercise, 
  onSelectProgram 
}: {
  program: TrainingProgram;
  onStartWorkout: (program: TrainingProgram, workout: DynamicWorkout) => void;
  onModifyExercise: (programId: string, workoutId: string, exerciseId: string, modifications: any) => void;
  onSelectProgram: (program: TrainingProgram) => void;
}) {
  const currentWeek = program.weeks[program.currentWeek - 1];
  const nextWorkout = currentWeek?.workouts.find(w => !w.completed);
  const completionRate = (program.progressMetrics.completedWorkouts / program.progressMetrics.totalWorkouts) * 100;

  const getDisciplineIcon = (discipline: string) => {
    switch (discipline) {
      case 'strength': return Dumbbell;
      case 'cardio': return Heart;
      case 'marathon': return Target;
      case 'flexibility': return Zap;
      default: return Dumbbell;
    }
  };

  const DisciplineIcon = getDisciplineIcon(program.discipline);

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <DisciplineIcon className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{program.name}</h3>
            <p className="text-sm text-gray-600">{program.discipline}</p>
          </div>
        </div>
        <button
          onClick={() => onSelectProgram(program)}
          className="p-2 text-gray-400 hover:text-gray-600"
        >
          <Settings className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Progress</span>
          <span className="font-medium">{Math.round(completionRate)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${completionRate}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div>
          <span className="text-gray-600">Week</span>
          <p className="font-medium">{program.currentWeek} of {program.duration}</p>
        </div>
        <div>
          <span className="text-gray-600">Workouts</span>
          <p className="font-medium">{program.progressMetrics.completedWorkouts}/{program.progressMetrics.totalWorkouts}</p>
        </div>
      </div>

      {nextWorkout && (
        <button
          onClick={() => onStartWorkout(program, nextWorkout)}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
        >
          <Play className="w-4 h-4" />
          Start {nextWorkout.name}
        </button>
      )}
    </div>
  );
}

// Empty State Component
function EmptyState({ onCreateProgram }: { onCreateProgram: () => void }) {
  return (
    <div className="text-center py-12">
      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <Dumbbell className="w-8 h-8 text-gray-400" />
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">No Training Programs Yet</h3>
      <p className="text-gray-600 mb-6 max-w-md mx-auto">
        Create your first dynamic training program to start tracking your fitness journey across all disciplines.
      </p>
      <button
        onClick={onCreateProgram}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 mx-auto"
      >
        <Plus className="w-4 h-4" />
        Create Your First Program
      </button>
    </div>
  );
}

// Progress Analytics Component
function ProgressAnalytics({ metrics }: { metrics: ProgressMetrics }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-4">
        <BarChart3 className="w-5 h-5 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-900">Progress Analytics</h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">{metrics.completedWorkouts}</div>
          <div className="text-sm text-gray-600">Workouts Completed</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600">{Math.round(metrics.consistencyScore)}%</div>
          <div className="text-sm text-gray-600">Consistency Score</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-600">{metrics.averageRating.toFixed(1)}</div>
          <div className="text-sm text-gray-600">Avg Rating</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-orange-600">{Math.round(metrics.totalVolume)}</div>
          <div className="text-sm text-gray-600">Total Volume</div>
        </div>
      </div>
    </div>
  );
}

// Workout Complete Modal Component
function WorkoutCompleteModal({ 
  workout, 
  onComplete, 
  onClose 
}: {
  workout: DynamicWorkout;
  onComplete: (rating: number, feedback?: string) => void;
  onClose: () => void;
}) {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Workout Complete! 🎉</h3>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            How did this workout feel?
          </label>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map(star => (
              <button
                key={star}
                onClick={() => setRating(star)}
                className={`p-1 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
              >
                <Star className="w-6 h-6 fill-current" />
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Any notes about this workout? (optional)
          </label>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            rows={3}
            placeholder="How did you feel? Any exercises that were particularly challenging or easy?"
          />
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={() => onComplete(rating, feedback)}
            disabled={rating === 0}
            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Complete Workout
          </button>
        </div>
      </div>
    </div>
  );
}

// Program Detail Modal Component (placeholder)
function ProgramDetailModal({ 
  program, 
  onClose, 
  onStartWorkout, 
  onModifyExercise 
}: {
  program: TrainingProgram;
  onClose: () => void;
  onStartWorkout: (program: TrainingProgram, workout: DynamicWorkout) => void;
  onModifyExercise: (programId: string, workoutId: string, exerciseId: string, modifications: any) => void;
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">{program.name}</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>
        
        {/* Program details would go here */}
        <div className="text-center py-8 text-gray-500">
          Program details and week-by-week breakdown coming soon...
        </div>
      </div>
    </div>
  );
} 