'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase';
import { EXERCISE_DATABASE } from '@/lib/exercises/database';
import { 
  ArrowLeft, Edit3, Save, X, Plus, Trash2, Copy, 
  MessageSquare, Clock, Target, TrendingUp, Dumbbell, 
  MapPin, Waves, Activity, Star, Timer, ChevronDown, 
  ChevronUp, Check, AlertCircle, Info, Zap, Play,
  Send, Bot, ChevronRight, Volume2, VolumeX, MoreVertical,
  Heart, Utensils, Coffee, Apple, ChevronLeft
} from 'lucide-react';
import LayoutClientWrapper from '@/app/components/LayoutClientWrapper';

// Enhanced mock workout data with nutrition focus
const mockWorkout = {
  id: 4,
  title: 'Mixed Training Session',
  type: 'hybrid',
  day: 'Thursday',
  date: '2025-01-09',
  summary: 'Strength, cardio, and endurance combination workout',
  plannedDuration: '60min',
  intensity: 75,
  isLogged: false,
  description: 'A comprehensive mixed training session combining strength training, cardio intervals, and endurance work. Perfect for overall fitness development.',
  nutritionFocus: {
    preworkout: {
      timing: '30-60 minutes before',
      recommendations: [
        'Light carbohydrates for energy (banana, oatmeal)',
        'Small amount of caffeine if tolerated',
        'Adequate hydration (16-20oz water)'
      ],
      avoid: ['Heavy meals', 'High fiber foods', 'Excessive fats']
    },
    postworkout: {
      timing: 'Within 30-60 minutes after',
      recommendations: [
        'Protein for muscle recovery (20-30g)',
        'Carbohydrates to replenish glycogen',
        'Continued hydration with electrolytes'
      ],
      examples: ['Protein shake with banana', 'Greek yogurt with berries', 'Chocolate milk']
    }
  },
  warmup: {
    duration: '10min',
    activities: ['5min dynamic stretching', '5min activation exercises']
  },
  cooldown: {
    duration: '10min', 
    activities: ['5min static stretching', '5min foam rolling']
  },
  exercises: [
    {
      id: 1,
      name: 'Push-ups',
      exerciseId: 'push-up',
      category: 'compound',
      targetMuscles: ['Chest', 'Shoulders', 'Triceps', 'Core'],
      plannedSets: 4,
      plannedReps: 12,
      plannedWeight: 0,
      restTime: 90,
      rpe: 6,
      notes: 'Focus on controlled movement and full range of motion.'
    },
    {
      id: 2,
      name: 'Lunges',
      exerciseId: 'lunge',
      category: 'compound',
      targetMuscles: ['Quadriceps', 'Glutes', 'Hamstrings'],
      plannedSets: 3,
      plannedReps: 10,
      plannedWeight: 0,
      restTime: 60,
      rpe: 5,
      notes: 'Alternate legs, focus on 90-degree angles.'
    },
    {
      id: 3,
      name: 'High Knees',
      exerciseId: 'high-knees',
      category: 'cardio',
      targetMuscles: ['Legs', 'Cardiovascular', 'Core'],
      plannedSets: 4,
      plannedTime: 30,
      restTime: 30,
      rpe: 7,
      notes: 'Drive knees high, maintain quick cadence.'
    },
    {
      id: 4,
      name: 'Plank Hold',
      exerciseId: 'plank',
      category: 'isometric',
      targetMuscles: ['Core', 'Shoulders', 'Glutes'],
      plannedSets: 3,
      plannedTime: 45,
      restTime: 60,
      rpe: 6,
      notes: 'Maintain straight line from head to heels.'
    }
  ],
  progressionNotes: 'If all sets completed with good form at target RPE, progress intensity or volume next session.',
  alternatives: {
    'Push-ups': ['Incline Push-ups', 'Knee Push-ups', 'Diamond Push-ups'],
    'Lunges': ['Reverse Lunges', 'Walking Lunges', 'Jump Lunges'],
    'High Knees': ['Butt Kicks', 'Jumping Jacks', 'Mountain Climbers'],
    'Plank Hold': ['Side Plank', 'Plank Up-Downs', 'Dead Bug']
  }
};

export default function WorkoutDetailPage({ params }: { params: { id: string } }) {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const searchParams = useSearchParams();
  const isEditMode = searchParams.get('edit') === 'true';
  const chatEndRef = useRef<HTMLDivElement>(null);
  
  const [workout, setWorkout] = useState<any>(mockWorkout);
  const [editMode, setEditMode] = useState(isEditMode);
  const [logMode, setLogMode] = useState(false);
  const [loggedData, setLoggedData] = useState<any>({});
  const [workoutNotes, setWorkoutNotes] = useState('');
  const [expandedExercise, setExpandedExercise] = useState<any>(null);
  const [expandedCoaching, setExpandedCoaching] = useState<any>({});
  const [showNutrition, setShowNutrition] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    {
      id: 1,
      type: 'ai',
      message: "Hi! I'm here to help you modify your workout. You can ask me to adjust exercises, change weights, add alternatives, or modify the entire plan.",
      timestamp: new Date()
    }
  ]);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [unsavedChanges, setUnsavedChanges] = useState(false);

  useEffect(() => {
    if (!user && !loading) {
      router.push('/');
    }
  }, [user, loading, router]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  if (loading) {
    return (
      <LayoutClientWrapper>
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </LayoutClientWrapper>
    );
  }

  if (!user) return null;

  const getWorkoutIcon = (type: string) => {
    switch (type?.toLowerCase()) {
      case 'strength': return <Dumbbell className="w-5 h-5" />;
      case 'running': return <MapPin className="w-5 h-5" />;
      case 'swimming': return <Waves className="w-5 h-5" />;
      case 'cycling': return <Activity className="w-5 h-5" />;
      case 'hybrid': return <Target className="w-5 h-5" />;
      default: return <Target className="w-5 h-5" />;
    }
  };

  const getWorkoutColor = (type: string) => {
    switch (type?.toLowerCase()) {
      case 'strength': return '#FF4C4C';
      case 'running': return '#0047FF'; 
      case 'swimming': return '#00BFFF';
      case 'cycling': return '#32CD32';
      case 'hybrid': return '#8B5CF6';
      default: return '#6B7280';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category?.toLowerCase()) {
      case 'compound': return 'bg-blue-100 text-blue-800';
      case 'isolation': return 'bg-orange-100 text-orange-800';
      case 'cardio': return 'bg-red-100 text-red-800';
      case 'endurance': return 'bg-green-100 text-green-800';
      case 'isometric': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getIntensityColor = (intensity: number) => {
    if (intensity >= 80) return '#FF4444';
    if (intensity >= 60) return '#FF8800';
    return '#44AA44';
  };

  const getExerciseDetails = (exerciseId: string) => {
    return EXERCISE_DATABASE[exerciseId] || null;
  };

  const sendMessage = () => {
    if (!chatMessage.trim()) return;
    
    const newMessage = {
      id: chatHistory.length + 1,
      type: 'user',
      message: chatMessage,
      timestamp: new Date()
    };
    
    setChatHistory(prev => [...prev, newMessage]);
    setChatMessage('');
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: chatHistory.length + 2,
        type: 'ai',
        message: "I understand you want to modify the workout. Let me help you with that adjustment. What specific changes would you like me to make?",
        timestamp: new Date()
      };
      setChatHistory(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const updateExercise = (exerciseId: number, field: string, value: any) => {
    setWorkout((prev: any) => ({
      ...prev,
      exercises: prev.exercises.map((ex: any) => 
        ex.id === exerciseId ? { ...ex, [field]: value } : ex
      )
    }));
    setUnsavedChanges(true);
  };

  const updateLoggedData = (exerciseId: number, field: string, value: any) => {
    setLoggedData((prev: any) => ({
      ...prev,
      [exerciseId]: {
        ...prev[exerciseId],
        [field]: value
      }
    }));
  };

  const renderExerciseCard = (exercise: any, index: any) => {
    const isExpanded = expandedExercise === exercise.id;
    const isCoachingExpanded = expandedCoaching[exercise.id];
    const logged = loggedData[exercise.id] || {};
    const alternatives = workout.alternatives?.[exercise.name] || [];
    const exerciseDetails = getExerciseDetails(exercise.exerciseId);

    return (
      <div key={exercise.id} className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200">
        {/* Exercise Header */}
        <div className="p-6 pb-4">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-4 flex-1">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-sm">
                {index + 1}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{exercise.name}</h3>
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(exercise.category)}`}>
                    {exercise.category}
                  </span>
                  <span className="text-sm text-gray-500 font-medium">
                    {exercise.targetMuscles?.join(' • ')}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button 
                className="p-2 text-gray-400 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setExpandedExercise(isExpanded ? null : exercise.id)}
              >
                {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Exercise Metrics - FitBod Style */}
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {/* Sets */}
              {exercise.plannedSets && (
                <div className="text-center">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Sets</div>
                  <div className="text-2xl font-bold text-gray-900">{exercise.plannedSets}</div>
                </div>
              )}
              
              {/* Reps */}
              {exercise.plannedReps && (
                <div className="text-center">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Reps</div>
                  <div className="text-2xl font-bold text-gray-900">{exercise.plannedReps}</div>
                </div>
              )}
              
              {/* Weight */}
              {exercise.plannedWeight !== undefined && (
                <div className="text-center">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Weight</div>
                  <div className="text-2xl font-bold text-gray-900">
                    {exercise.plannedWeight > 0 ? (
                      <>
                        {exercise.plannedWeight}
                        <span className="text-sm font-medium text-gray-500 ml-1">kg</span>
                      </>
                    ) : (
                      <span className="text-lg font-semibold text-blue-600">BW</span>
                    )}
                  </div>
                </div>
              )}
              
              {/* Time (for isometric/cardio exercises) */}
              {exercise.plannedTime && (
                <div className="text-center">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Time</div>
                  <div className="text-2xl font-bold text-gray-900">
                    {exercise.plannedTime}
                    <span className="text-sm font-medium text-gray-500 ml-1">s</span>
                  </div>
                </div>
              )}
              
              {/* Distance (for cardio exercises) */}
              {exercise.plannedDistance && (
                <div className="text-center">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Distance</div>
                  <div className="text-2xl font-bold text-gray-900">
                    {exercise.plannedDistance}
                    <span className="text-sm font-medium text-gray-500 ml-1">km</span>
                  </div>
                </div>
              )}
              
              {/* Pace (for running/cycling) */}
              {exercise.plannedPace && (
                <div className="text-center">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Pace</div>
                  <div className="text-xl font-bold text-gray-900">
                    {exercise.plannedPace}
                    <span className="text-xs font-medium text-gray-500 block">/km</span>
                  </div>
                </div>
              )}
              
              {/* Rest Time */}
              <div className="text-center">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Rest</div>
                <div className="text-2xl font-bold text-gray-900">
                  {Math.floor(exercise.restTime / 60)}:{(exercise.restTime % 60).toString().padStart(2, '0')}
                  <span className="text-xs font-medium text-gray-500 block">min</span>
                </div>
              </div>
              
              {/* RPE */}
              <div className="text-center">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">RPE</div>
                <div className="text-2xl font-bold text-gray-900">
                  {exercise.rpe}
                  <span className="text-sm font-medium text-gray-500">/10</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Exercise Notes */}
        {exercise.notes && (
          <div className="px-6 pb-4">
            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-blue-800 font-medium leading-relaxed">{exercise.notes}</span>
            </div>
          </div>
        )}

        {/* Expandable Coaching Instructions */}
        {exerciseDetails && (
          <div className="px-6 pb-4">
            <button
              onClick={() => setExpandedCoaching((prev: any) => ({ ...prev, [exercise.id]: !prev[exercise.id] }))}
              className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Target className="w-4 h-4" />
              <span>Coaching Instructions</span>
              {isCoachingExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            
            {isCoachingExpanded && (
              <div className="mt-4 space-y-4">
                {/* Setup */}
                {exerciseDetails.coaching?.setup && (
                  <div>
                    <h5 className="text-sm font-bold text-gray-900 mb-2">Setup</h5>
                    <ul className="space-y-1">
                      {exerciseDetails.coaching.setup.map((tip: string, idx: number) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Execution */}
                {exerciseDetails.coaching?.execution && (
                  <div>
                    <h5 className="text-sm font-bold text-gray-900 mb-2">Execution</h5>
                    <ul className="space-y-1">
                      {exerciseDetails.coaching.execution.map((tip: string, idx: number) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Common Mistakes */}
                {exerciseDetails.coaching?.common_mistakes && (
                  <div>
                    <h5 className="text-sm font-bold text-gray-900 mb-2">Avoid These Mistakes</h5>
                    <ul className="space-y-1">
                      {exerciseDetails.coaching.common_mistakes.map((mistake: string, idx: number) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          {mistake}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Breathing */}
                {exerciseDetails.coaching?.breathing && (
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <h5 className="text-sm font-bold text-gray-900 mb-1">Breathing Pattern</h5>
                    <p className="text-sm text-gray-700">{exerciseDetails.coaching.breathing}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Set-by-Set Breakdown (when expanded) */}
        {isExpanded && (
          <div className="px-6 pb-6">
            <div className="border-t border-gray-100 pt-4">
              <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">Set Breakdown</h4>
              <div className="space-y-2">
                {Array.from({ length: exercise.plannedSets || 1 }, (_, setIndex) => (
                  <div key={setIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-gray-600">{setIndex + 1}</span>
                      </div>
                      <div className="flex items-center gap-6 text-sm">
                        {exercise.plannedReps && (
                          <span className="font-semibold text-gray-700">
                            {exercise.plannedReps} reps
                          </span>
                        )}
                        {exercise.plannedWeight > 0 && (
                          <span className="font-semibold text-gray-700">
                            {exercise.plannedWeight}kg
                          </span>
                        )}
                        {exercise.plannedTime && (
                          <span className="font-semibold text-gray-700">
                            {exercise.plannedTime}s
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="w-8 h-8 bg-green-100 hover:bg-green-200 text-green-700 rounded-full flex items-center justify-center transition-colors">
                        <Check className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Alternative Exercises (when expanded) */}
        {isExpanded && alternatives.length > 0 && (
          <div className="px-6 pb-6">
            <div className="border-t border-gray-100 pt-4">
              <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">Alternative Exercises</h4>
              <div className="flex flex-wrap gap-2">
                {alternatives.map((alt: string, idx: number) => (
                  <button
                    key={idx}
                    className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors"
                    onClick={() => updateExercise(exercise.id, 'name', alt)}
                  >
                    {alt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <LayoutClientWrapper>
      <div className="min-h-screen bg-gray-50 flex">
        {/* Main Content Area */}
        <div className={`transition-all duration-300 ${isChatOpen ? 'w-2/3' : 'w-full'}`}>
          {/* Header */}
          <div className="bg-white shadow-sm border-b border-gray-200">
            <div className="max-w-6xl mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={() => router.back()}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  <div>
                    <h1 className="text-xl font-bold text-gray-900">{workout.title}</h1>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                      <div className="flex items-center space-x-1">
                        {getWorkoutIcon(workout.type)}
                        <span className="capitalize">{workout.type}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{workout.plannedDuration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Zap className="w-4 h-4" style={{ color: getIntensityColor(workout.intensity) }} />
                        <span>{workout.intensity}% Intensity</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={() => setShowNutrition(!showNutrition)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
                      showNutrition 
                        ? 'bg-green-500 text-white shadow-lg' 
                        : 'bg-green-50 text-green-600 hover:bg-green-100'
                    }`}
                  >
                    <Utensils className="w-4 h-4" />
                    <span>Nutrition</span>
                  </button>
                  <button 
                    onClick={() => setIsChatOpen(!isChatOpen)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
                      isChatOpen 
                        ? 'bg-blue-500 text-white shadow-lg' 
                        : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                    }`}
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>AI Coach</span>
                    {isChatOpen ? <X className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                  </button>
                  <button 
                    onClick={() => setSoundEnabled(!soundEnabled)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    {soundEnabled ? 
                      <Volume2 className="w-5 h-5 text-gray-600" /> : 
                      <VolumeX className="w-5 h-5 text-gray-600" />
                    }
                  </button>
                  <button 
                    onClick={() => setEditMode(!editMode)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <Edit3 className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <MoreVertical className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Nutrition Focus Panel */}
          {showNutrition && (
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-b border-green-200">
              <div className="max-w-6xl mx-auto px-4 py-6">
                <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center gap-2">
                  <Utensils className="w-5 h-5" />
                  Nutrition Focus
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Pre-Workout */}
                  <div className="bg-white rounded-lg p-4 border border-green-200">
                    <div className="flex items-center gap-2 mb-3">
                      <Coffee className="w-5 h-5 text-orange-600" />
                      <h4 className="font-bold text-gray-900">Pre-Workout</h4>
                      <span className="text-sm text-gray-500">({workout.nutritionFocus.preworkout.timing})</span>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <h5 className="text-sm font-semibold text-gray-700 mb-1">Recommended:</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {workout.nutritionFocus.preworkout.recommendations.map((rec: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                              {rec}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-gray-700 mb-1">Avoid:</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {workout.nutritionFocus.preworkout.avoid.map((avoid: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2">
                              <X className="w-3 h-3 text-red-500 mt-1 flex-shrink-0" />
                              {avoid}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Post-Workout */}
                  <div className="bg-white rounded-lg p-4 border border-green-200">
                    <div className="flex items-center gap-2 mb-3">
                      <Apple className="w-5 h-5 text-red-600" />
                      <h4 className="font-bold text-gray-900">Post-Workout</h4>
                      <span className="text-sm text-gray-500">({workout.nutritionFocus.postworkout.timing})</span>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <h5 className="text-sm font-semibold text-gray-700 mb-1">Recommended:</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {workout.nutritionFocus.postworkout.recommendations.map((rec: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                              {rec}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-gray-700 mb-1">Examples:</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {workout.nutritionFocus.postworkout.examples.map((example: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="grid lg:grid-cols-4 gap-6">
              {/* Main Content */}
              <div className="lg:col-span-3 space-y-6">
                {/* Warmup */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                    <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <Timer className="w-4 h-4 text-yellow-600" />
                    </div>
                    <span>Warmup</span>
                    <span className="text-sm text-gray-500 font-normal">({workout.warmup.duration})</span>
                  </h3>
                  <div className="grid gap-2">
                    {workout.warmup.activities.map((activity: string, index: number) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                          {index + 1}
                        </div>
                        <span className="text-gray-700">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Main Exercises */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Main Exercises</h3>
                  {workout.exercises.map((exercise: any, index: number) => renderExerciseCard(exercise, index))}
                </div>

                {/* Cooldown */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Heart className="w-4 h-4 text-blue-600" />
                    </div>
                    <span>Cooldown</span>
                    <span className="text-sm text-gray-500 font-normal">({workout.cooldown.duration})</span>
                  </h3>
                  <div className="grid gap-2">
                    {workout.cooldown.activities.map((activity: string, index: number) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                          {index + 1}
                        </div>
                        <span className="text-gray-700">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stats Sidebar (when chat is closed) */}
              {!isChatOpen && (
                <div className="space-y-6">
                  {/* Workout Stats */}
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Workout Stats</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Exercises</span>
                        <span className="font-semibold">{workout.exercises.length}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Total Sets</span>
                        <span className="font-semibold">
                          {workout.exercises.reduce((total: number, ex: any) => total + (ex.plannedSets || 0), 0)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Avg RPE</span>
                        <span className="font-semibold">
                          {Math.round(workout.exercises.reduce((total: number, ex: any) => total + ex.rpe, 0) / workout.exercises.length)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                      <button 
                        onClick={() => setLogMode(!logMode)}
                        className="w-full flex items-center space-x-2 px-4 py-3 bg-green-50 hover:bg-green-100 text-green-700 rounded-lg transition-colors"
                      >
                        <Check className="w-4 h-4" />
                        <span>Log Workout</span>
                      </button>
                      <button className="w-full flex items-center space-x-2 px-4 py-3 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition-colors">
                        <Copy className="w-4 h-4" />
                        <span>Duplicate</span>
                      </button>
                      <button className="w-full flex items-center space-x-2 px-4 py-3 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg transition-colors">
                        <Edit3 className="w-4 h-4" />
                        <span>Modify</span>
                      </button>
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Workout Notes</h3>
                    <textarea
                      value={workoutNotes}
                      onChange={(e) => setWorkoutNotes(e.target.value)}
                      placeholder="How did this workout feel? Any adjustments needed?"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                      rows={4}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* AI Chat Panel */}
        {isChatOpen && (
          <div className="w-1/3 bg-gray-900 flex flex-col transition-all duration-300">
            {/* Chat Header */}
            <div className="bg-gray-800 p-4 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">AI Coach</h3>
                    <p className="text-gray-400 text-xs">Ready to help modify your workout</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsChatOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {chatHistory.map((chat: any) => (
                <div key={chat.id} className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    chat.type === 'user' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-700 text-gray-100'
                  }`}>
                    <p className="text-sm">{chat.message}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {chat.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Chat Input */}
            <div className="p-4 bg-gray-800 border-t border-gray-700">
              <div className="flex space-x-3">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Ask me to modify your workout..."
                  className="flex-1 bg-gray-700 text-white placeholder-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                  onClick={sendMessage}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                <button 
                  onClick={() => setChatMessage('Make this exercise easier')}
                  className="text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-full hover:bg-gray-600 transition-colors"
                >
                  Make easier
                </button>
                <button 
                  onClick={() => setChatMessage('Add another set')}
                  className="text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-full hover:bg-gray-600 transition-colors"
                >
                  Add set
                </button>
                <button 
                  onClick={() => setChatMessage('Replace this exercise')}
                  className="text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-full hover:bg-gray-600 transition-colors"
                >
                  Replace exercise
                </button>
                <button 
                  onClick={() => setChatMessage('Show me alternatives')}
                  className="text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-full hover:bg-gray-600 transition-colors"
                >
                  Show alternatives
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </LayoutClientWrapper>
  );
} 