'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { 
  Calendar, 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Grid3X3,
  List,
  Clock,
  CheckCircle
} from 'lucide-react';
import LayoutClientWrapper from '@/app/components/LayoutClientWrapper';

export default function CalendarPage() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const [currentDate, setCurrentDate] = useState(new Date(2025, 5, 9)); // June 2025
  const [selectedWorkout, setSelectedWorkout] = useState<any>(null);

  // Mock data matching the screenshot
  const mockWorkouts = [
    { 
      id: 1, 
      day: 'Monday', 
      date: 9,
      type: 'strength', 
      title: 'Full Body 09', 
      duration: '28:09', 
      completed: false,
      icons: ['💪', '🚶']
    },
    { 
      id: 2, 
      day: 'Monday', 
      date: 9,
      type: 'cycling', 
      title: 'Cadence Builds', 
      duration: '32:53', 
      completed: false,
      icons: ['💪', '🚴']
    },
    { 
      id: 3, 
      day: 'Tuesday', 
      date: 10,
      type: 'cycling', 
      title: 'Tasmania: Cygnet Coast Road', 
      duration: '49:50', 
      completed: false,
      icons: ['🏔️', '🚴']
    },
    { 
      id: 4, 
      day: 'Wednesday', 
      date: 11,
      type: 'cycling', 
      title: 'London-Edinburgh-London', 
      duration: '54:32', 
      completed: false,
      icons: ['🎯', '🚴']
    },
    { 
      id: 5, 
      day: 'Thursday', 
      date: 12,
      type: 'strength', 
      title: 'Posterior Chain Focus 01', 
      duration: '16:43', 
      completed: false,
      icons: ['💪', '🚶']
    },
    { 
      id: 6, 
      day: 'Thursday', 
      date: 12,
      type: 'cycling', 
      title: 'Across the Mountains', 
      duration: '38:07', 
      completed: false,
      icons: ['🎯', '🚴']
    },
    { 
      id: 7, 
      day: 'Friday', 
      date: 13,
      type: 'cycling', 
      title: 'Look For Things Where You Can Find Them', 
      duration: '42:29', 
      completed: false,
      icons: ['🎯', '🚴']
    },
    { 
      id: 8, 
      day: 'Saturday', 
      date: 14,
      type: 'cycling', 
      title: 'Blender', 
      duration: '1:41:47', 
      completed: false,
      icons: ['⚡', '🚴']
    }
  ];

  useEffect(() => {
    if (!user && !loading) {
      router.push('/');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <LayoutClientWrapper>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-gray-600">Loading your training calendar...</div>
        </div>
      </LayoutClientWrapper>
    );
  }

  if (!user) return null;

  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const days = [];
    const current = new Date(startDate);
    
    for (let i = 0; i < 42; i++) {
      days.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
    
    return days;
  };

  const getWorkoutsForDate = (date: Date) => {
    return mockWorkouts.filter(w => w.date === date.getDate());
  };

  const renderMonthView = () => {
    const days = generateCalendarDays();
    const today = new Date();
    const currentMonth = currentDate.getMonth();
    
    return (
      <div className="flex gap-6">
        {/* Main Calendar */}
        <div className="flex-1">
          <div className="bg-gray-900 text-white rounded-lg overflow-hidden">
            {/* Calendar Header */}
            <div className="grid grid-cols-7 bg-gray-800">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                <div key={day} className="p-3 text-center text-sm font-medium text-gray-300">
                  {day}
                </div>
              ))}
            </div>
            
            {/* Calendar Grid */}
            <div className="grid grid-cols-7">
              {days.map((day, index) => {
                const isCurrentMonth = day.getMonth() === currentMonth;
                const isToday = day.getDate() === 9 && day.getMonth() === 5; // June 9th highlighted
                const workouts = getWorkoutsForDate(day);
                
                return (
                  <div
                    key={index}
                    className={`min-h-[140px] p-2 border-r border-b border-gray-700 ${
                      !isCurrentMonth ? 'bg-gray-800/50' : 'bg-gray-900'
                    }`}
                  >
                    <div className={`text-sm font-medium mb-2 ${
                      !isCurrentMonth ? 'text-gray-500' : 
                      isToday ? 'bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center' : 
                      'text-white'
                    }`}>
                      {day.getDate()}
                    </div>
                    
                    <div className="space-y-1">
                      {workouts.map((workout, wIndex) => (
                        <div
                          key={wIndex}
                          className="text-xs p-2 rounded bg-gray-700 hover:bg-gray-600 cursor-pointer transition-colors"
                          onClick={() => router.push(`/programs/program-1?day=${workout.day}&week=1`)}
                        >
                          <div className="flex items-center gap-1 mb-1">
                            {workout.icons?.map((icon: string, i: number) => (
                              <span key={i} className="text-xs">{icon}</span>
                            ))}
                            <span className="text-gray-300 text-xs">All Purpose</span>
                          </div>
                          <div className="text-white font-medium truncate">
                            {workout.title}
                          </div>
                          <div className="text-gray-400 text-xs mt-1">
                            {workout.duration}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-80 space-y-4">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-medium text-gray-900">Week 24</h3>
              <button className="text-blue-600 text-sm">View</button>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Training</span>
                <div className="text-right">
                  <div className="font-medium">Planned</div>
                  <div className="font-medium">Actual</div>
                </div>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-gray-900">Total</span>
                <div className="text-right">
                  <div>6:04:30</div>
                  <div className="text-gray-500">-</div>
                </div>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-gray-900">Cycling</span>
                <div className="text-right">
                  <div>5:19:38</div>
                  <div className="text-gray-500">-</div>
                </div>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-gray-900">Strength & Mobility</span>
                <div className="text-right">
                  <div>44:52</div>
                  <div className="text-gray-500">-</div>
                </div>
              </div>
            </div>
            
            <div className="mt-3 pt-3 border-t border-gray-200">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" className="rounded" defaultChecked />
                <span>All Purpose</span>
                <button className="ml-auto text-blue-600">View</button>
              </div>
            </div>
          </div>

          {/* Week 25 Stats */}
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-medium text-gray-900">Week 25</h3>
              <button className="text-blue-600 text-sm">View</button>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Training</span>
                <div className="text-right">
                  <div className="font-medium">Planned</div>
                  <div className="font-medium">Actual</div>
                </div>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-gray-900">Total</span>
                <div className="text-right">
                  <div>6:38:24</div>
                  <div className="text-gray-500">-</div>
                </div>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-gray-900">Cycling</span>
                <div className="text-right">
                  <div>5:57:03</div>
                  <div className="text-gray-500">-</div>
                </div>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-gray-900">Strength & Mobility</span>
                <div className="text-right">
                  <div>41:21</div>
                  <div className="text-gray-500">-</div>
                </div>
              </div>
            </div>
            
            <div className="mt-3 pt-3 border-t border-gray-200">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" className="rounded" defaultChecked />
                <span>All Purpose</span>
                <button className="ml-auto text-blue-600">View</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <LayoutClientWrapper>
      <div className="min-h-screen bg-gray-50">
        <div className="px-6 py-8 max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-semibold text-gray-900">
                {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </h1>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const newDate = new Date(currentDate);
                    newDate.setMonth(newDate.getMonth() - 1);
                    setCurrentDate(newDate);
                  }}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <button
                  onClick={() => {
                    const newDate = new Date(currentDate);
                    newDate.setMonth(newDate.getMonth() + 1);
                    setCurrentDate(newDate);
                  }}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button className="p-2 rounded-md bg-white shadow-sm">
                  <Grid3X3 size={16} />
                </button>
                <button className="p-2 rounded-md text-gray-500">
                  <List size={16} />
                </button>
              </div>
              
              <button 
                onClick={() => router.push('/programs')}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                + Plan
              </button>
            </div>
          </div>

          {renderMonthView()}

          {/* Workout Detail Modal */}
          {selectedWorkout && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1">
                      {selectedWorkout.icons?.map((icon: string, i: number) => (
                        <span key={i} className="text-lg">{icon}</span>
                      ))}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{selectedWorkout.title}</h3>
                      <p className="text-sm text-gray-500">All Purpose</p>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setSelectedWorkout(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock size={16} />
                    <span>Duration: {selectedWorkout.duration}</span>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <button
                      onClick={() => {
                        router.push(`/training`);
                        setSelectedWorkout(null);
                      }}
                      className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                      View Full Workout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </LayoutClientWrapper>
  );
}
