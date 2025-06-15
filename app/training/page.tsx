'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  Dumbbell, 
  Clock, 
  Target, 
  CheckCircle, 
  Circle, 
  Plus, 
  Edit3, 
  Sparkles, 
  Send, 
  ChevronDown, 
  ChevronUp,
  Play,
  Pause,
  MoreVertical,
  ArrowRight,
  MessageSquare,
  Utensils,
  Info
} from 'lucide-react';

// Type definitions
interface Exercise {
  id: number;
  name: string;
  completed: boolean;
  sets?: number;
  reps?: number | string;
  duration?: string;
}

interface Day {
  day: string;
  date: string;
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
  currentWeek: number;
  totalWeeks: number;
  startDate: string;
  status: string;
  weeks: Week[];
}

interface ChatMessage {
  id: number;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

export default function TrainingPage() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const searchParams = useSearchParams();
  const chatEndRef = useRef<HTMLDivElement>(null);
  
  const [trainingPlan, setTrainingPlan] = useState<any>(null);
  const [currentWeek, setCurrentWeek] = useState(0);
  const [expandedDay, setExpandedDay] = useState<string | null>(null);
  const [chatMessage, setChatMessage] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [conversation, setConversation] = useState<any[]>([
    {
      id: 1,
      type: 'ai' as const,
      content: "Hi! I'm here to help you with your training plan. You can ask me to modify exercises, adjust intensity, skip days and regenerate the week, or generate your next week when you're ready.",
      timestamp: new Date()
    }
  ]);

  useEffect(() => {
    if (!user && !loading) {
      router.push('/');
      return;
    }
  }, [user, loading, router]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [conversation]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-gray-600">Loading your training plan...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  // Show empty state if no training plan exists
  if (!trainingPlan) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Target size={24} className="text-gray-400" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">No Training Plan Yet</h1>
          <p className="text-gray-600 mb-6">
            Start your fitness journey by chatting with our AI coach. We'll create a personalized training plan based on your goals and preferences.
          </p>
          <button
            onClick={() => router.push('/chat')}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors"
          >
            <MessageSquare size={16} />
            Start with AI Coach
          </button>
        </div>
      </div>
    );
  }

  const currentWeekData = trainingPlan.weeks[currentWeek];
  const canGenerateNext = currentWeek < trainingPlan.totalWeeks - 1;
  const canGoPrevious = currentWeek > 0;

  const handleExerciseToggle = (dayIndex: number, exerciseId: number) => {
    setTrainingPlan((prev: any) => ({
      ...prev,
      weeks: prev.weeks.map((week: any, wIndex: number) => 
        wIndex === currentWeek ? {
          ...week,
          days: week.days.map((day: any, dIndex: number) => 
            dIndex === dayIndex ? {
              ...day,
              exercises: day.exercises.map((exercise: any) => 
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
    
    setTrainingPlan((prev: any) => ({
      ...prev,
      weeks: prev.weeks.map((week: any, wIndex: number) => 
        wIndex === currentWeek ? {
          ...week,
          days: week.days.map((d: any, dIndex: number) => 
            dIndex === dayIndex ? {
              ...d,
              completed: newCompleted,
              exercises: d.exercises.map((ex: any) => ({ ...ex, completed: newCompleted }))
            } : d
          )
        } : week
      )
    }));
  };

  const handleSendMessage = async () => {
    if (!chatMessage.trim() || isGenerating) return;

    const userMessage = {
      id: Date.now(),
      type: 'user' as const,
      content: chatMessage.trim(),
      timestamp: new Date()
    };

    setConversation((prev: any[]) => [...prev, userMessage]);
    setChatMessage('');
    setIsGenerating(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage = {
        id: Date.now() + 1,
        type: 'ai' as const,
        content: "I understand your request. Let me help you with that modification to your training plan. This is a placeholder response - in the full implementation, this would connect to your AI service to provide contextual training advice.",
        timestamp: new Date()
      };
      setConversation((prev: any[]) => [...prev, aiMessage]);
      setIsGenerating(false);
    }, 1500);
  };

  const quickActions = [
    { label: 'Replace Exercise', action: () => setChatMessage('Can you replace the deadlifts with an alternative exercise?') },
    { label: 'Adjust Intensity', action: () => setChatMessage('Can you increase the intensity of today\'s workout?') },
    { label: 'Skip Day & Adjust', action: () => setChatMessage('I need to skip today\'s workout, can you adjust the rest of the week?') },
    { label: 'Generate Next Week', action: () => setChatMessage('I\'m ready to generate next week\'s training plan') }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Main Training Plan - 2/3 width */}
      <div className="w-2/3 overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{trainingPlan?.name}</h1>
                <p className="text-gray-600">{trainingPlan?.discipline} • {trainingPlan?.status}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                  Active
                </span>
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
            {currentWeekData.days.map((day: any, dayIndex: number) => (
              <div key={day.day} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
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
                        {day.exercises.filter((ex: any) => ex.completed).length}/{day.exercises.length} completed
                      </div>
                      {expandedDay === day.day ? (
                        <ChevronUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded Day Content */}
                {expandedDay === day.day && (
                  <div className="border-t border-gray-200 p-4 bg-gray-50">
                    <div className="space-y-3">
                      {day.exercises.map((exercise: any) => (
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
                              </p>
                            </div>
                          </div>
                          <button className="p-2 text-gray-400 hover:text-gray-600">
                            <MoreVertical size={16} />
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* Nutrition Guidance */}
                    <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <Utensils className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-medium text-blue-900">Nutrition Focus</span>
                      </div>
                      <p className="text-sm text-blue-800">
                        Pre-workout: Light carbs 30-60 min before • Post-workout: Protein + carbs within 30 min
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Generate Next Week Button */}
          {canGenerateNext && (
            <div className="mt-6 text-center">
              <button className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors">
                <Plus size={16} />
                Generate Next Week
              </button>
            </div>
          )}
        </div>
      </div>

      {/* AI Chat Sidebar - 1/3 width */}
      <div className="w-1/3 border-l border-gray-200 bg-white flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">AI Training Coach</h3>
              <p className="text-xs text-gray-500">Context: {trainingPlan?.name}</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="p-4 border-b border-gray-200">
          <h4 className="text-sm font-medium text-gray-700 mb-3">Quick Actions</h4>
          <div className="grid grid-cols-2 gap-2">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={action.action}
                className="p-2 text-xs bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg text-gray-700 transition-colors"
              >
                {action.label}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {conversation.map((message) => (
            <div
              key={message.id}
              className={`flex gap-2 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {message.type === 'ai' && (
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-3 h-3 text-blue-600" />
                </div>
              )}
              <div
                className={`rounded-2xl p-3 max-w-[80%] ${
                  message.type === 'user'
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                <p className="text-sm">{message.content}</p>
              </div>
            </div>
          ))}
          {isGenerating && (
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <div className="w-4 h-4 rounded-full border-2 border-t-gray-900 border-gray-200 animate-spin" />
              AI is thinking...
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex gap-2">
            <textarea
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              placeholder="Ask about your training plan..."
              className="flex-1 resize-none rounded-xl bg-gray-50 border border-gray-200 p-3 focus:outline-none focus:border-gray-400 focus:bg-white min-h-[60px] text-sm"
              onKeyPress={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
            />
            <button
              onClick={handleSendMessage}
              disabled={!chatMessage.trim() || isGenerating}
              className="flex-shrink-0 bg-gray-900 text-white rounded-xl w-12 h-12 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 transition-colors"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 