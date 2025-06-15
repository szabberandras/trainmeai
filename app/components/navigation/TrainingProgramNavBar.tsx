'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ChevronLeft, ChevronRight, Plus, Target, Dumbbell, Heart, Zap, Trophy, Users, Calendar, MoreVertical } from 'lucide-react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase';
import ProgramActionsMenu from '../program/ProgramActionsMenu';

interface TrainingProgram {
  id: string;
  name: string;
  type: string;
  color: string;
  icon: React.ReactNode;
  status: 'active' | 'completed' | 'paused';
  progress: number;
}

interface TrainingProgramNavBarProps {
  programs?: TrainingProgram[];
  onCreateNew?: () => void;
  showEmptyState?: boolean;
}

const TrainingProgramNavBar: React.FC<TrainingProgramNavBarProps> = ({ 
  programs = [], 
  onCreateNew,
  showEmptyState = true
}) => {
  const router = useRouter();
  const params = useParams();
  const currentId = params?.id as string;
  const [user] = useAuthState(auth);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  
  // Use provided programs or mock data for demonstration
  const trainingPrograms = programs.length > 0 ? programs : [
    {
      id: 'marathon-training',
      name: 'Marathon Training',
      type: 'Endurance',
      color: 'bg-blue-500',
      icon: <Target className="w-4 h-4" />,
      status: 'active' as const,
      progress: 65
    },
    {
      id: 'strength-building',
      name: 'Strength Building',
      type: 'Strength',
      color: 'bg-red-500',
      icon: <Dumbbell className="w-4 h-4" />,
      status: 'active' as const,
      progress: 40
    },
    {
      id: 'cardio-blast',
      name: 'Cardio Blast',
      type: 'Cardio',
      color: 'bg-green-500',
      icon: <Heart className="w-4 h-4" />,
      status: 'paused' as const,
      progress: 80
    },
    {
      id: 'hiit-power',
      name: 'HIIT Power',
      type: 'HIIT',
      color: 'bg-orange-500',
      icon: <Zap className="w-4 h-4" />,
      status: 'active' as const,
      progress: 25
    },
    {
      id: 'competition-prep',
      name: 'Competition Prep',
      type: 'Sport',
      color: 'bg-purple-500',
      icon: <Trophy className="w-4 h-4" />,
      status: 'completed' as const,
      progress: 100
    }
  ];

  const scrollContainer = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    if (scrollContainer.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainer.current) {
      const scrollAmount = 200;
      const newScrollLeft = direction === 'left' 
        ? scrollContainer.current.scrollLeft - scrollAmount
        : scrollContainer.current.scrollLeft + scrollAmount;
      
      scrollContainer.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    updateScrollButtons();
    const container = scrollContainer.current;
    if (container) {
      container.addEventListener('scroll', updateScrollButtons);
      return () => container.removeEventListener('scroll', updateScrollButtons);
    }
  }, [trainingPrograms]);

  // Empty State Component
  const EmptyState = () => (
    <div className="flex items-center justify-center py-8 px-6">
      <div className="text-center">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Users className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No Training Programs</h3>
        <p className="text-gray-500 mb-4 max-w-sm">
          Create your first training program to start your fitness journey
        </p>
        <div className="flex gap-2 justify-center">
          <button
            onClick={() => router.push('/dashboard#ai-chat')}
            className="inline-flex items-center gap-2 px-3 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm"
          >
            <Plus className="w-4 h-4" />
            Chat with AI
          </button>
          <button
            onClick={onCreateNew}
            className="inline-flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
          >
            <Plus className="w-4 h-4" />
            Create Program
          </button>
        </div>
      </div>
    </div>
  );

  if (programs.length === 0 && showEmptyState) {
    return (
      <div className="bg-white/95 backdrop-blur-xl border-b border-gray-200 sticky top-0 z-40">
        <div className="px-6">
          <EmptyState />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/95 backdrop-blur-xl border-b border-gray-200 sticky top-0 z-40">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-gray-900">Training Programs</h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => router.push('/training-calendar')}
              className="inline-flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
            >
              <Calendar className="w-4 h-4" />
              Calendar View
            </button>
            <button
              onClick={onCreateNew || (() => router.push('/training-plans/new'))}
              className="inline-flex items-center gap-2 px-3 py-1.5 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Plus className="w-4 h-4" />
              New Program
            </button>
          </div>
        </div>
        
        <div className="relative">
          {/* Scroll Left Button */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center shadow-sm hover:bg-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-gray-600" />
            </button>
          )}

          {/* Navigation Items Container */}
          <div
            ref={scrollContainer}
            className="flex gap-3 overflow-x-auto scrollbar-hide pb-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {trainingPrograms.map((program) => {
              const isActive = currentId === program.id;
              const statusColor = program.status === 'active' 
                ? 'border-green-200 bg-green-50' 
                : program.status === 'completed'
                ? 'border-blue-200 bg-blue-50'
                : 'border-gray-200 bg-gray-50';

              return (
                <div
                  key={program.id}
                  onClick={() => router.push(`/training/${program.id}`)}
                  className={`
                    flex-shrink-0 w-64 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200
                    ${isActive 
                      ? 'border-blue-500 bg-blue-50 shadow-md' 
                      : `${statusColor} hover:shadow-md hover:border-gray-300`
                    }
                  `}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-lg ${program.color} flex items-center justify-center text-white`}>
                      {program.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 truncate">{program.name}</h3>
                      <p className="text-sm text-gray-600">{program.type}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`
                        px-2 py-1 rounded-full text-xs font-medium
                        ${program.status === 'active' ? 'bg-green-100 text-green-800' :
                          program.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'}
                      `}>
                        {program.status}
                      </div>
                      {user && (
                        <div onClick={(e) => e.stopPropagation()}>
                          <ProgramActionsMenu
                            program={{
                              id: program.id,
                              name: program.name,
                              status: program.status,
                              duration: 12, // Default duration
                              currentDay: Math.floor(program.progress / 100 * 84), // Estimate current day
                              type: program.type.toLowerCase() === 'endurance' ? 'cardio' : 
                                    program.type.toLowerCase() === 'strength' ? 'strength' : 'hybrid',
                              level: 'intermediate',
                              createdAt: new Date(),
                              updatedAt: new Date(),
                              userId: user.uid,
                              description: `${program.type} training program`,
                              weeklyPlans: [],
                              weeks: [],
                              progress: {
                                weeksCompleted: Math.floor(program.progress / 100 * 12),
                                workoutsCompleted: 0,
                                totalWorkouts: 0,
                                streak: 0
                              },
                              totalDays: 84,
                              dailyProgression: [],
                              lastGeneratedDay: Math.floor(program.progress / 100 * 84),
                              canGenerateNext: true
                            }}
                            userId={user.uid}
                            onProgramUpdated={() => {
                              setRefreshTrigger(prev => prev + 1);
                              // Could call a parent callback to refresh programs
                            }}
                            onProgramCompleted={(program) => {
                              console.log('Program completed:', program.name);
                              router.push('/programs');
                            }}
                            onProgramArchived={(program) => {
                              console.log('Program archived:', program.name);
                              router.push('/programs');
                            }}
                            onProgramRestarted={(newProgramId) => {
                              console.log('Program restarted with ID:', newProgramId);
                              router.push(`/programs/${newProgramId}`);
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Progress</span>
                      <span className="text-sm font-medium text-gray-900">{program.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${program.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Scroll Right Button */}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center shadow-sm hover:bg-white transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-gray-600" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrainingProgramNavBar; 