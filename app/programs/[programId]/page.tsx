'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams, useSearchParams } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase';
import { 
  ChevronLeft, ChevronRight, Clock, Target, 
  CheckCircle, Circle, MessageSquare, Settings, Play,
  ArrowLeft, Edit3
} from 'lucide-react';
import LayoutClientWrapper from '@/app/components/LayoutClientWrapper';
import ProgramActionsMenu from '@/app/components/program/ProgramActionsMenu';

// Type definitions
interface Exercise {
  id: number;
  name: string;
  completed: boolean;
  sets?: number;
  reps?: number | string;
  duration?: string;
  distance?: string;
  pace?: string;
  weight?: number;
  intensity?: string;
}

interface Day {
  day: string;
  date: string;
  title: string;
  focus: string;
  estimatedDuration: string;
  completed: boolean;
  exercises: Exercise[];
}

interface Week {
  weekNumber: number;
  startDate: string;
  endDate: string;
  days: Day[];
}

interface TrainingPlan {
  id: string;
  name: string;
  discipline: string;
  status: string;
  totalWeeks: number;
  currentWeek: number;
  weeks: Week[];
}

interface ChatMessage {
  id: number;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

// Mock training plan data
const mockTrainingPlan: TrainingPlan = {
  id: 'program-1',
  name: 'Marathon Training - Phase 1',
  discipline: 'Running',
  status: 'Active',
  totalWeeks: 12,
  currentWeek: 3,
  weeks: [
    {
      weekNumber: 1,
      startDate: '2024-03-04',
      endDate: '2024-03-10',
      days: [
        {
          day: 'Monday',
          date: '2024-03-04',
          title: 'Base Building Run',
          focus: 'Easy aerobic development',
          estimatedDuration: '35 min',
          completed: true,
          exercises: [
            { id: 1, name: 'Easy Run', distance: '5km', pace: '5:30/km', completed: true },
            { id: 2, name: 'Dynamic Stretching', duration: '10 min', completed: true }
          ]
        },
        {
          day: 'Tuesday',
          date: '2024-03-05',
          title: 'Strength Foundation',
          focus: 'Core and leg strength',
          estimatedDuration: '45 min',
          completed: false,
          exercises: [
            { id: 1, name: 'Squats', sets: 3, reps: 12, completed: false },
            { id: 2, name: 'Lunges', sets: 3, reps: 10, completed: false },
            { id: 3, name: 'Plank', duration: '60s', sets: 3, completed: false }
          ]
        },
        {
          day: 'Wednesday',
          date: '2024-03-06',
          title: 'Recovery & Mobility',
          focus: 'Active recovery',
          estimatedDuration: '20 min',
          completed: false,
          exercises: [
            { id: 1, name: 'Light Stretching', duration: '10 min', completed: false },
            { id: 2, name: 'Foam Rolling', duration: '10 min', completed: false }
          ]
        },
        {
          day: 'Thursday',
          date: '2024-03-07',
          title: 'Tempo Training',
          focus: 'Lactate threshold development',
          estimatedDuration: '40 min',
          completed: false,
          exercises: [
            { id: 1, name: 'Warm-up Run', distance: '2km', pace: '6:00/km', completed: false },
            { id: 2, name: 'Tempo Run', distance: '3km', pace: '4:30/km', completed: false },
            { id: 3, name: 'Cool-down Run', distance: '1km', pace: '6:00/km', completed: false }
          ]
        },
        {
          day: 'Friday',
          date: '2024-03-08',
          title: 'Cross Training',
          focus: 'Cardiovascular fitness',
          estimatedDuration: '35 min',
          completed: false,
          exercises: [
            { id: 1, name: 'Cycling', duration: '30 min', intensity: 'moderate', completed: false },
            { id: 2, name: 'Core Work', duration: '5 min', completed: false }
          ]
        },
        {
          day: 'Saturday',
          date: '2024-03-09',
          title: 'Long Run',
          focus: 'Aerobic base building',
          estimatedDuration: '60 min',
          completed: false,
          exercises: [
            { id: 1, name: 'Long Steady Run', distance: '10km', pace: '5:45/km', completed: false }
          ]
        },
        {
          day: 'Sunday',
          date: '2024-03-10',
          title: 'Complete Rest',
          focus: 'Recovery and adaptation',
          estimatedDuration: '0 min',
          completed: false,
          exercises: []
        }
      ]
    },
    {
      weekNumber: 2,
      startDate: '2024-03-11',
      endDate: '2024-03-17',
      days: [
        {
          day: 'Monday',
          date: '2024-03-11',
          title: 'Progressive Base Run',
          focus: 'Aerobic development with progression',
          estimatedDuration: '40 min',
          completed: false,
          exercises: [
            { id: 1, name: 'Progressive Run', distance: '6km', pace: '5:30-5:00/km', completed: false },
            { id: 2, name: 'Dynamic Stretching', duration: '10 min', completed: false }
          ]
        },
        {
          day: 'Tuesday',
          date: '2024-03-12',
          title: 'Strength Progression',
          focus: 'Increased load and complexity',
          estimatedDuration: '50 min',
          completed: false,
          exercises: [
            { id: 1, name: 'Squats', sets: 3, reps: 15, completed: false },
            { id: 2, name: 'Single-leg Lunges', sets: 3, reps: 8, completed: false },
            { id: 3, name: 'Plank Variations', duration: '45s', sets: 4, completed: false }
          ]
        }
      ]
    },
    {
      weekNumber: 3,
      startDate: '2024-03-18',
      endDate: '2024-03-24',
      days: [
        {
          day: 'Monday',
          date: '2024-03-18',
          title: 'Interval Training',
          focus: 'VO2 max development',
          estimatedDuration: '45 min',
          completed: true,
          exercises: [
            { id: 1, name: 'Warm-up', distance: '2km', pace: '6:00/km', completed: true },
            { id: 2, name: '5x800m Intervals', distance: '4km', pace: '4:00/km', completed: true },
            { id: 3, name: 'Cool-down', distance: '1km', pace: '6:00/km', completed: true }
          ]
        }
      ]
    }
  ]
};

export default function ProgramDetailPage() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  
  const programId = params.programId as string;
  const highlightedDay = searchParams.get('day');
  const highlightedWeek = searchParams.get('week');
  
  const [trainingPlan, setTrainingPlan] = useState<TrainingPlan>(mockTrainingPlan);
  const [currentWeek, setCurrentWeek] = useState(
    highlightedWeek ? parseInt(highlightedWeek) - 1 : 0
  );
  const [expandedDay, setExpandedDay] = useState<string | null>(highlightedDay);
  const [conversation, setConversation] = useState<ChatMessage[]>([]);
  const [chatMessage, setChatMessage] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    if (!user && !loading) {
      router.push('/');
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (highlightedDay) {
      setExpandedDay(highlightedDay);
    }
  }, [highlightedDay]);

  if (loading) {
    return (
      <LayoutClientWrapper>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-gray-600">Loading program...</div>
        </div>
      </LayoutClientWrapper>
    );
  }

  if (!user) return null;

  const currentWeekData = trainingPlan.weeks[currentWeek];
  const canGenerateNext = currentWeek < trainingPlan.totalWeeks - 1;
  const canGoPrevious = currentWeek > 0;

  const handleExerciseToggle = (dayIndex: number, exerciseId: number) => {
    setTrainingPlan(prev => ({
      ...prev,
      weeks: prev.weeks.map((week, wIndex) => 
        wIndex === currentWeek ? {
          ...week,
          days: week.days.map((day, dIndex) => 
            dIndex === dayIndex ? {
              ...day,
              exercises: day.exercises.map(exercise => 
                exercise.id === exerciseId ? { ...exercise, completed: !exercise.completed } : exercise
              )
            } : day
          )
        } : week
      )
    }));
  };

  const handleDayToggle = (dayIndex: number) => {
    const day = currentWeekData.days[dayIndex];
    const newCompleted = !day.completed;
    
    setTrainingPlan(prev => ({
      ...prev,
      weeks: prev.weeks.map((week, wIndex) => 
        wIndex === currentWeek ? {
          ...week,
          days: week.days.map((d, dIndex) => 
            dIndex === dayIndex ? {
              ...d,
              completed: newCompleted,
              exercises: d.exercises.map(ex => ({ ...ex, completed: newCompleted }))
            } : d
          )
        } : week
      )
    }));
  };

  const handleSendMessage = async () => {
    if (!chatMessage.trim() || isGenerating) return;

    const userMessage: ChatMessage = {
      id: Date.now(),
      type: 'user',
      content: chatMessage.trim(),
      timestamp: new Date()
    };

    setConversation(prev => [...prev, userMessage]);
    setChatMessage('');
    setIsGenerating(true);

    setTimeout(() => {
      const aiMessage: ChatMessage = {
        id: Date.now() + 1,
        type: 'ai',
        content: "I understand your request. Let me help you with that modification to your training plan. This is a placeholder response - in the full implementation, this would connect to your AI service to provide contextual training advice.",
        timestamp: new Date()
      };
      setConversation(prev => [...prev, aiMessage]);
      setIsGenerating(false);
    }, 1500);
  };

  const quickActions = [
    { label: 'Replace Exercise', action: () => setChatMessage('Can you replace this exercise with an alternative?') },
    { label: 'Adjust Intensity', action: () => setChatMessage('Can you increase the intensity of this workout?') },
    { label: 'Skip Day & Adjust', action: () => setChatMessage('I need to skip this workout, can you adjust the rest of the week?') },
    { label: 'Generate Next Week', action: () => setChatMessage('I\'m ready to generate next week\'s training plan') }
  ];

  return (
    <LayoutClientWrapper>
      <div className="flex h-screen bg-gray-50">
        {/* Main Training Plan - 2/3 width */}
        <div className="w-2/3 overflow-y-auto">
          <div className="p-6">
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-4 mb-4">
                <button
                  onClick={() => router.push('/programs')}
                  className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <div className="flex-1">
                  <h1 className="text-2xl font-bold text-gray-900">{trainingPlan.name}</h1>
                  <p className="text-gray-600">{trainingPlan.discipline} • {trainingPlan.status}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                    trainingPlan.status === 'Active' ? 'bg-green-100 text-green-700' :
                    trainingPlan.status === 'Completed' ? 'bg-blue-100 text-blue-700' :
                    trainingPlan.status === 'Paused' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {trainingPlan.status}
                  </span>
                  {user && (
                    <ProgramActionsMenu
                      program={{
                        id: trainingPlan.id,
                        name: trainingPlan.name,
                        status: trainingPlan.status.toLowerCase() as 'active' | 'completed' | 'paused',
                        duration: trainingPlan.totalWeeks,
                        currentDay: trainingPlan.currentWeek,
                                                 type: trainingPlan.discipline.toLowerCase() === 'running' ? 'cardio' : 
                               trainingPlan.discipline.toLowerCase() === 'strength' ? 'strength' : 'hybrid',
                        level: 'intermediate',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        userId: user.uid,
                        description: `${trainingPlan.discipline} training program`,
                        weeklyPlans: [],
                        weeks: [],
                        progress: {
                          weeksCompleted: trainingPlan.currentWeek - 1,
                          workoutsCompleted: 0,
                          totalWorkouts: 0,
                          streak: 0
                        },
                        totalDays: trainingPlan.totalWeeks * 7,
                        dailyProgression: [],
                        lastGeneratedDay: trainingPlan.currentWeek * 7,
                        canGenerateNext: true
                      }}
                      userId={user.uid}
                      onProgramUpdated={() => {
                        // Refresh the program data
                        console.log('Program updated, refreshing...');
                      }}
                      onProgramCompleted={(program) => {
                        console.log('Program completed:', program.name);
                        // Could redirect to programs page or show success message
                      }}
                      onProgramArchived={(program) => {
                        console.log('Program archived:', program.name);
                        // Could redirect to programs page
                      }}
                      onProgramRestarted={(newProgramId) => {
                        console.log('Program restarted with ID:', newProgramId);
                        // Could redirect to new program
                        router.push(`/programs/${newProgramId}`);
                      }}
                    />
                  )}
                </div>
              </div>

              {/* Week Navigation */}
              <div className="flex items-center justify-between bg-white rounded-2xl p-4 border border-gray-200 shadow-sm">
                <button
                  onClick={() => setCurrentWeek(Math.max(0, currentWeek - 1))}
                  disabled={!canGoPrevious}
                  className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={16} />
                  Previous Week
                </button>
                
                <div className="text-center">
                  <h2 className="font-semibold text-gray-900">
                    Week {currentWeekData.weekNumber} of {trainingPlan.totalWeeks}
                  </h2>
                  <p className="text-sm text-gray-600">
                    {currentWeekData.startDate} - {currentWeekData.endDate}
                  </p>
                </div>
                
                <button
                  onClick={() => setCurrentWeek(Math.min(trainingPlan.weeks.length - 1, currentWeek + 1))}
                  disabled={!canGenerateNext}
                  className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next Week
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Weekly Plan */}
            <div className="space-y-4">
              {currentWeekData.days.map((day, dayIndex) => (
                <div 
                  key={day.day} 
                  className={`bg-white rounded-2xl border shadow-sm overflow-hidden transition-all duration-200 ${
                    highlightedDay === day.day ? 'border-blue-500 ring-2 ring-blue-100' : 'border-gray-200'
                  }`}
                >
                  {/* Day Header */}
                  <div 
                    className="p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDayToggle(dayIndex);
                          }}
                          className="flex-shrink-0"
                        >
                          {day.completed ? (
                            <CheckCircle className="w-6 h-6 text-green-600" />
                          ) : (
                            <Circle className="w-6 h-6 text-gray-400" />
                          )}
                        </button>
                        <div>
                          <h3 className="font-semibold text-gray-900">{day.day}</h3>
                          <h4 className="font-medium text-blue-600">{day.title}</h4>
                          <p className="text-sm text-gray-600">{day.focus}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Clock size={14} />
                          {day.estimatedDuration}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Target size={14} />
                          {day.exercises.filter(ex => ex.completed).length}/{day.exercises.length} completed
                        </div>
                        {expandedDay === day.day ? (
                          <ChevronLeft className="w-5 h-5 text-gray-400 rotate-90" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Day Content */}
                  {expandedDay === day.day && (
                    <div className="border-t border-gray-200 p-4 bg-gray-50">
                      <div className="space-y-3">
                        {day.exercises.map((exercise) => (
                          <div key={exercise.id} className="flex items-center justify-between bg-white rounded-xl p-3 border border-gray-200">
                            <div className="flex items-center gap-3">
                              <button
                                onClick={() => handleExerciseToggle(dayIndex, exercise.id)}
                                className="flex-shrink-0"
                              >
                                {exercise.completed ? (
                                  <CheckCircle className="w-5 h-5 text-green-600" />
                                ) : (
                                  <Circle className="w-5 h-5 text-gray-400" />
                                )}
                              </button>
                              <div>
                                <h4 className="font-medium text-gray-900">{exercise.name}</h4>
                                <p className="text-sm text-gray-600">
                                  {exercise.sets && `${exercise.sets} sets`}
                                  {exercise.reps && ` × ${exercise.reps} reps`}
                                  {exercise.duration && ` × ${exercise.duration}`}
                                  {exercise.distance && ` × ${exercise.distance}`}
                                  {exercise.pace && ` @ ${exercise.pace}`}
                                  {exercise.weight && ` @ ${exercise.weight}kg`}
                                  {exercise.intensity && ` (${exercise.intensity})`}
                                </p>
                              </div>
                            </div>
                            <button className="p-2 text-gray-400 hover:text-gray-600">
                              <Edit3 className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                      
                      {day.exercises.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                            <Play className="w-4 h-4" />
                            Start {day.title}
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Chat Sidebar - 1/3 width */}
        <div className="w-1/3 bg-white border-l border-gray-200 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">AI Training Coach</h3>
                <p className="text-sm text-gray-500">Ask me anything about your training</p>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {conversation.length === 0 ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-6 h-6 text-gray-400" />
                </div>
                <p className="text-gray-500 text-sm mb-4">
                  I'm here to help you with your training plan. Ask me anything!
                </p>
                <div className="space-y-2">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      onClick={action.action}
                      className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              conversation.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              ))
            )}
            
            {isGenerating && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-2xl">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about your training..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={isGenerating}
              />
              <button
                onClick={handleSendMessage}
                disabled={!chatMessage.trim() || isGenerating}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </LayoutClientWrapper>
  );
} 