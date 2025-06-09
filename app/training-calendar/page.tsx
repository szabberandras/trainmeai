'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { 
  Calendar, ChevronLeft, ChevronRight, Plus, Edit3, 
  MessageSquare, Play, Clock, Target, Dumbbell, MapPin, 
  Waves, Activity, Star, Timer, Grid3X3, List, Check,
  TrendingUp, Settings, Save, X, Sparkles
} from 'lucide-react';

// Mock data - replace with actual data fetching
const mockPrograms = [
  {
    id: 'program-1',
    name: 'Marathon Training - Phase 1',
    type: 'running',
    startDate: '2025-01-06',
    status: 'active',
    weeklyPlans: [
      {
        weekNumber: 1,
        startDate: '2025-01-06',
        workouts: [
          {
            id: 1,
            day: 'Monday',
            type: 'running',
            title: 'Easy Run',
            summary: '5km easy pace',
            intensity: 40,
            duration: '30min',
            isLogged: false,
            exercises: [
              {
                id: 1,
                name: 'Easy Run',
                plannedDistance: 5,
                plannedPace: '5:30',
                heartRate: 'Zone 2'
              }
            ]
          },
          {
            id: 2,
            day: 'Tuesday',
            type: 'strength',
            title: 'Upper Body Strength',
            summary: 'Chest, shoulders, arms',
            intensity: 70,
            duration: '45min',
            isLogged: true,
            exercises: [
              {
                id: 1,
                name: 'Push-ups',
                plannedSets: 3,
                plannedReps: 15,
                category: 'bodyweight'
              },
              {
                id: 2,
                name: 'Pull-ups',
                plannedSets: 3,
                plannedReps: 8,
                category: 'bodyweight'
              }
            ]
          },
          {
            id: 3,
            day: 'Wednesday',
            type: 'running',
            title: 'Tempo Run',
            summary: '6km with 3km tempo',
            intensity: 80,
            duration: '35min',
            isLogged: false
          },
          {
            id: 4,
            day: 'Thursday',
            type: 'strength',
            title: 'Lower Body',
            summary: 'Legs and core',
            intensity: 75,
            duration: '50min',
            isLogged: false
          },
          {
            id: 5,
            day: 'Friday',
            type: 'rest',
            title: 'Rest Day',
            summary: 'Complete rest or light stretching',
            intensity: 0,
            duration: '0min',
            isLogged: false
          },
          {
            id: 6,
            day: 'Saturday',
            type: 'running',
            title: 'Long Run',
            summary: '12km steady pace',
            intensity: 60,
            duration: '60min',
            isLogged: false
          },
          {
            id: 7,
            day: 'Sunday',
            type: 'cross-training',
            title: 'Cross Training',
            summary: 'Cycling or swimming',
            intensity: 50,
            duration: '45min',
            isLogged: false
          }
        ]
      }
    ]
  }
];

export default function TrainingCalendarPage() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const [userProfile, setUserProfile] = useState<any>(null);
  const [activeProgram, setActiveProgram] = useState(0);
  const [currentWeek, setCurrentWeek] = useState(0);
  const [viewMode, setViewMode] = useState('week'); // 'week', 'month', 'list'
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedWorkout, setSelectedWorkout] = useState<any>(null);
  const [loggingWorkout, setLoggingWorkout] = useState<any>(null);
  const [loggedData, setLoggedData] = useState<Record<string, any>>({});
  const [workoutNotes, setWorkoutNotes] = useState('');
  const [workoutRating, setWorkoutRating] = useState(0);

  useEffect(() => {
    if (!user && !loading) {
      router.push('/');
    }
  }, [user, loading, router]);

  // Load user profile and programs
  useEffect(() => {
    const loadUserProfile = async () => {
      if (user) {
        try {
          const userRef = doc(db, 'users', user.uid);
          const userDoc = await getDoc(userRef);
          if (userDoc.exists()) {
            setUserProfile(userDoc.data());
          }
        } catch (error) {
          console.error('Error loading user profile:', error);
        }
      }
    };

    loadUserProfile();
  }, [user]);

  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.loadingSpinner}></div>
        <p>Loading your training calendar...</p>
      </div>
    );
  }

  if (!user) return null;

  // In real implementation, this would come from user's actual programs
  const userPrograms = userProfile?.programs || mockPrograms;
  const hasPrograms = userPrograms && userPrograms.length > 0;
  const currentProgram = hasPrograms ? userPrograms[activeProgram] : null;
  const currentWeekData = currentProgram?.weeklyPlans?.[currentWeek];

  const getWorkoutIcon = (type: string) => {
    const iconStyle = { width: '20px', height: '20px' };
    switch (type?.toLowerCase()) {
      case 'running': return <MapPin style={iconStyle} />;
      case 'strength': return <Dumbbell style={iconStyle} />;
      case 'swimming': return <Waves style={iconStyle} />;
      case 'cycling': return <Activity style={iconStyle} />;
      case 'cross-training': return <Target style={iconStyle} />;
      case 'rest': return <Star style={iconStyle} />;
      default: return <Target style={iconStyle} />;
    }
  };

  const getWorkoutColor = (type: string) => {
    switch (type?.toLowerCase()) {
      case 'running': return '#0047FF';
      case 'strength': return '#FF4C4C';
      case 'swimming': return '#00BFFF';
      case 'cycling': return '#32CD32';
      case 'cross-training': return '#FFA500';
      case 'rest': return '#6B7280';
      default: return '#6B7280';
    }
  };

  const generateWeekDates = (startDate?: string, weekNumber: number = 0) => {
    const start = startDate ? new Date(startDate) : new Date();
    start.setDate(start.getDate() + (weekNumber * 7));
    return Array.from({ length: 7 }, (_, i) => {
      const date = new Date(start);
      date.setDate(start.getDate() + i);
      return date;
    });
  };

  const startLogging = (workout: any) => {
    setLoggingWorkout(workout);
    setLoggedData({});
    setWorkoutNotes('');
    setWorkoutRating(0);
  };

  const updateLoggedData = (exerciseId: string, field: string, value: any) => {
    setLoggedData(prev => ({
      ...prev,
      [exerciseId]: {
        ...prev[exerciseId],
        [field]: value
      }
    }));
  };

  const saveWorkoutLog = () => {
    if (!loggingWorkout) return;
    
    console.log('Saving workout log:', {
      workoutId: loggingWorkout.id,
      loggedData,
      notes: workoutNotes,
      rating: workoutRating
    });
    setLoggingWorkout(null);
    // Update workout as logged in real implementation
  };

  const renderWorkoutCard = (workout: any, isCompact = false) => (
    <div 
      key={workout.id}
      style={{
        ...styles.workoutCard,
        ...(workout.isLogged ? styles.workoutCardLogged : {}),
        marginBottom: isCompact ? '0.5rem' : '1rem'
      }}
      onClick={() => !isCompact && router.push(`/training/${workout.id}`)}
    >
      <div style={styles.workoutCardContent}>
        <div 
          style={{
            ...styles.workoutIcon,
            backgroundColor: getWorkoutColor(workout.type)
          }}
        >
          {getWorkoutIcon(workout.type)}
        </div>
        <div style={styles.workoutInfo}>
          <div style={styles.workoutTitleRow}>
            <h3 style={styles.workoutTitle}>{workout.title}</h3>
            {workout.isLogged && <Check style={styles.checkIcon} />}
          </div>
          {!isCompact && <p style={styles.workoutDay}>{workout.day}</p>}
          <p style={styles.workoutSummary}>{workout.summary}</p>
        </div>
        <div style={styles.workoutMeta}>
          {workout.duration && (
            <div style={styles.durationContainer}>
              <Timer style={styles.timerIcon} />
              <span style={styles.durationText}>{workout.duration}</span>
            </div>
          )}
          {workout.intensity > 0 && (
            <div style={styles.intensityBadge}>
              {workout.intensity}/100
            </div>
          )}
        </div>
      </div>
      
      {!isCompact && (
        <div style={styles.workoutActions}>
          <button 
            style={styles.editButton}
            onClick={(e) => {
              e.stopPropagation();
              router.push(`/training/${workout.id}?edit=true`);
            }}
          >
            <Edit3 style={styles.buttonIcon} />
            <span>Edit</span>
          </button>
          <button 
            style={{
              ...styles.logButton,
              ...(workout.isLogged ? styles.logButtonLogged : styles.logButtonDefault)
            }}
            onClick={(e) => {
              e.stopPropagation();
              startLogging(workout);
            }}
          >
            {workout.isLogged ? (
              <>
                <Edit3 style={styles.buttonIcon} />
                <span>Update Log</span>
              </>
            ) : (
              <>
                <Plus style={styles.buttonIcon} />
                <span>Log Workout</span>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );

  // Empty state calendar with placeholder structure
  const renderEmptyCalendar = () => {
    return (
      <div style={styles.emptyState}>
        <div style={styles.emptyIcon}>
          <Sparkles size={48} />
        </div>
        <h2 style={styles.emptyTitle}>No Training Programs Yet</h2>
        <p style={styles.emptyDescription}>
          Start by chatting with your AI coach to create a personalized training program that fits your goals and lifestyle.
        </p>
        <div style={styles.emptyActions}>
          <button
            style={styles.chatButton}
            onClick={() => router.push('/dashboard#ai-chat')}
          >
            <MessageSquare size={20} />
            <span>Chat with AI Coach</span>
          </button>
          <button
            style={styles.createFirstButton}
            onClick={() => router.push('/training-plans/new')}
          >
            <Plus size={20} />
            <span>Create Manual Plan</span>
          </button>
        </div>
      </div>
    );
  };

  const renderWeekView = () => {
    if (!hasPrograms) {
      return renderEmptyCalendar();
    }

    if (!currentWeekData) return null;
    
    const weekDates = generateWeekDates(currentProgram.startDate, currentWeek);
    
    return (
      <div style={styles.calendarContainer}>
        <div style={styles.calendarGrid}>
          {weekDates.map((date, index) => (
            <div key={index} style={styles.calendarDay}>
              <div style={styles.dayHeader}>
                <div style={styles.dayName}>
                  {date.toLocaleDateString('en-US', { weekday: 'short' })}
                </div>
                <div style={styles.dayNumber}>
                  {date.getDate()}
                </div>
              </div>
              <div style={styles.dayContent}>
                {currentWeekData.workouts
                  ?.filter((workout: any) => {
                    const workoutDay = date.toLocaleDateString('en-US', { weekday: 'long' });
                    return workout.day?.toLowerCase() === workoutDay.toLowerCase();
                  })
                  .map((workout: any) => renderWorkoutCard(workout, true))
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderListView = () => {
    if (!hasPrograms) {
      return (
        <div style={styles.emptyState}>
          <div style={styles.emptyIcon}>
            <List size={48} />
          </div>
          <h2 style={styles.emptyTitle}>No Training Programs</h2>
          <p style={styles.emptyDescription}>
            Create your first training program to see your workouts in list view.
          </p>
          <div style={styles.emptyActions}>
            <button
              style={styles.chatButton}
              onClick={() => router.push('/dashboard#ai-chat')}
            >
              <MessageSquare size={20} />
              <span>Chat with AI Coach</span>
            </button>
            <button
              style={styles.createFirstButton}
              onClick={() => router.push('/training-plans/new')}
            >
              <Plus size={20} />
              <span>Create Program</span>
            </button>
          </div>
        </div>
      );
    }

    return (
      <div style={styles.listContainer}>
        {currentProgram?.weeklyPlans?.map((week: any, weekIndex: number) => (
          <div key={weekIndex} style={styles.weekCard}>
            <div style={styles.weekHeader}>
              <h3 style={styles.listWeekTitle}>
                Week {week.weekNumber || weekIndex + 1}
              </h3>
              <span style={styles.weekDate}>
                {week.startDate}
              </span>
            </div>
            <div style={styles.workoutsList}>
              {week.workouts?.map((workout: any) => renderWorkoutCard(workout))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>Training Calendar</h1>
          {currentProgram && (
            <div style={styles.subtitle}>
              <span style={styles.programName}>{currentProgram.name}</span>
              <span style={styles.programInfo}>
                {currentProgram.weeklyPlans?.length || 0} weeks • {currentProgram.type}
              </span>
            </div>
          )}
          {!hasPrograms && (
            <p style={styles.emptySubtitle}>Create your first training program to get started</p>
          )}
        </div>
        
        <div style={styles.headerActions}>
          <div style={styles.viewToggle}>
            <button
              style={{
                ...styles.viewButton,
                ...(viewMode === 'list' ? styles.viewButtonActive : {})
              }}
              onClick={() => setViewMode('list')}
            >
              <List className="w-4 h-4" />
            </button>
            <button
              style={{
                ...styles.viewButton,
                ...(viewMode === 'week' ? styles.viewButtonActive : {})
              }}
              onClick={() => setViewMode('week')}
            >
              <Calendar className="w-4 h-4" />
            </button>
          </div>
          
          <button 
            style={styles.aiButton}
            onClick={() => router.push('/dashboard#ai-chat')}
          >
            <MessageSquare className="w-4 h-4" />
            <span>AI Coach</span>
          </button>
        </div>
      </div>

      {/* Navigation */}
      {viewMode !== 'list' && hasPrograms && (
        <div style={styles.navigation}>
          <button
            style={styles.navButton}
            onClick={() => setCurrentWeek(Math.max(0, currentWeek - 1))}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>
          
          <div style={styles.weekTitle}>
            Week {currentWeekData?.weekNumber || currentWeek + 1} - {currentWeekData?.startDate || ''}
          </div>
          
          <button
            style={styles.navButton}
            onClick={() => {
              const maxWeek = (currentProgram?.weeklyPlans?.length || 1) - 1;
              setCurrentWeek(Math.min(maxWeek, currentWeek + 1));
            }}
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Main Content */}
      <div style={styles.mainContent}>
        <div style={styles.contentArea}>
          {viewMode === 'week' && renderWeekView()}
          {viewMode === 'list' && renderListView()}
        </div>

        {/* Sidebar */}
        {hasPrograms && (
          <div style={styles.sidebar}>
            <div style={styles.sidebarCard}>
              <h3 style={styles.sidebarTitle}>Training Summary</h3>
              <div style={styles.statsContainer}>
                <div style={styles.statRow}>
                  <span style={styles.statLabel}>Total Weeks</span>
                  <span style={styles.statValue}>{currentProgram?.weeklyPlans?.length || 0}</span>
                </div>
                <div style={styles.statRow}>
                  <span style={styles.statLabel}>This Week</span>
                  <span style={styles.statValue}>
                    {currentWeekData?.workouts?.filter((w: any) => w.isLogged).length || 0}/{currentWeekData?.workouts?.length || 0} logged
                  </span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarCard}>
              <h3 style={styles.sidebarTitle}>Quick Actions</h3>
              <div style={styles.actionsList}>
                <button style={styles.actionButton}>Generate Next Week</button>
                <button style={styles.actionButton}>View Progress</button>
                <button style={styles.actionButton}>Export Plan</button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Workout Logging Modal */}
      {loggingWorkout && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>Log Workout: {loggingWorkout.title}</h2>
              <button onClick={() => setLoggingWorkout(null)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div style={styles.modalContent}>
              {/* Exercise Logging */}
              {loggingWorkout.exercises && (
                <div>
                  <h3 style={styles.sectionTitle}>Exercises</h3>
                  {loggingWorkout.exercises.map((exercise: any) => {
                    const logged = loggedData[exercise.id] || {};
                    return (
                      <div key={exercise.id} style={styles.exerciseCard}>
                        <h4 style={styles.exerciseTitle}>{exercise.name}</h4>
                        <div style={styles.exerciseInputs}>
                          {exercise.plannedSets && (
                            <div>
                              <label style={styles.inputLabel}>Sets</label>
                              <input
                                type="number"
                                value={logged.sets || ''}
                                onChange={(e) => updateLoggedData(exercise.id.toString(), 'sets', parseInt(e.target.value) || 0)}
                                style={styles.input}
                                placeholder={exercise.plannedSets.toString()}
                              />
                            </div>
                          )}
                          {exercise.plannedReps && (
                            <div>
                              <label style={styles.inputLabel}>Reps</label>
                              <input
                                type="number"
                                value={logged.reps || ''}
                                onChange={(e) => updateLoggedData(exercise.id.toString(), 'reps', parseInt(e.target.value) || 0)}
                                style={styles.input}
                                placeholder={exercise.plannedReps.toString()}
                              />
                            </div>
                          )}
                          <div style={styles.fullWidth}>
                            <label style={styles.inputLabel}>Notes</label>
                            <textarea
                              value={logged.notes || ''}
                              onChange={(e) => updateLoggedData(exercise.id.toString(), 'notes', e.target.value)}
                              style={styles.textarea}
                              placeholder="How did this exercise feel?"
                              rows={2}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
              
              {/* Workout Summary */}
              <div>
                <h3 style={styles.sectionTitle}>Workout Summary</h3>
                <div style={styles.summarySection}>
                  <div>
                    <label style={styles.inputLabel}>Overall Rating</label>
                    <div style={styles.starRating}>
                      {[1, 2, 3, 4, 5].map(star => (
                        <Star
                          key={star}
                          className={`w-6 h-6 cursor-pointer ${
                            star <= workoutRating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                          onClick={() => setWorkoutRating(star)}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label style={styles.inputLabel}>Workout Notes</label>
                    <textarea
                      value={workoutNotes}
                      onChange={(e) => setWorkoutNotes(e.target.value)}
                      style={styles.textarea}
                      placeholder="How did the workout feel overall?"
                      rows={3}
                    />
                  </div>
                </div>
              </div>
              
              {/* Save Button */}
              <div style={styles.modalActions}>
                <button 
                  style={styles.cancelButton}
                  onClick={() => setLoggingWorkout(null)}
                >
                  Cancel
                </button>
                <button 
                  style={styles.saveButton}
                  onClick={saveWorkoutLog}
                >
                  <Save className="w-4 h-4" />
                  <span>Save Log</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '1400px',
    margin: '0 auto',
    background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)',
    minHeight: '100vh',
  },
  loadingContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    gap: '1rem',
  },
  loadingSpinner: {
    width: '40px',
    height: '40px',
    border: '4px solid #f3f3f3',
    borderTop: '4px solid #0047FF',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '2rem',
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '12px',
    border: '1px solid #e5e7eb',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold' as const,
    color: '#111827',
    margin: 0,
  },
  subtitle: {
    marginTop: '0.5rem',
  },
  programName: {
    fontSize: '1.125rem',
    fontWeight: '500' as const,
    color: '#0047FF',
  },
  programInfo: {
    color: '#6b7280',
    marginLeft: '0.5rem',
  },
  emptySubtitle: {
    color: '#6b7280',
    marginTop: '0.5rem',
    margin: 0,
  },
  headerActions: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  viewToggle: {
    display: 'flex',
    backgroundColor: '#f3f4f6',
    borderRadius: '8px',
    padding: '4px',
  },
  viewButton: {
    padding: '8px 12px',
    border: 'none',
    backgroundColor: 'transparent',
    borderRadius: '6px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewButtonActive: {
    backgroundColor: 'white',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  },
  aiButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1.5rem',
    backgroundColor: '#0047FF',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  navigation: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.5rem',
    backgroundColor: 'white',
    padding: '1rem 1.5rem',
    borderRadius: '12px',
    border: '1px solid #e5e7eb',
  },
  navButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
    border: '1px solid #d1d5db',
    backgroundColor: 'white',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.875rem',
  },
  weekTitle: {
    fontWeight: '600' as const,
    color: '#111827',
    fontSize: '1.125rem',
  },
  mainContent: {
    display: 'flex',
    gap: '1.5rem',
  },
  contentArea: {
    flex: 1,
  },
  sidebar: {
    width: '320px',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1.5rem',
  },
  sidebarCard: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '12px',
    border: '1px solid #e5e7eb',
  },
  sidebarTitle: {
    fontSize: '1.125rem',
    fontWeight: '600' as const,
    color: '#111827',
    marginBottom: '1rem',
    margin: 0,
  },
  statsContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.75rem',
  },
  statRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statLabel: {
    color: '#6b7280',
    fontSize: '0.875rem',
  },
  statValue: {
    fontWeight: '600' as const,
    color: '#111827',
  },
  actionsList: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.5rem',
  },
  actionButton: {
    width: '100%',
    textAlign: 'left' as const,
    padding: '0.75rem',
    border: '1px solid #e5e7eb',
    backgroundColor: 'white',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.875rem',
    color: '#374151',
  },
  modalOverlay: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 50,
    padding: '1rem',
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: '12px',
    maxWidth: '32rem',
    width: '100%',
    maxHeight: '90vh',
    overflowY: 'auto' as const,
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.5rem',
    borderBottom: '1px solid #e5e7eb',
  },
  modalTitle: {
    fontSize: '1.25rem',
    fontWeight: '600' as const,
    color: '#111827',
    margin: 0,
  },
  modalContent: {
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1.5rem',
  },
  sectionTitle: {
    fontSize: '1.125rem',
    fontWeight: '600' as const,
    color: '#111827',
    marginBottom: '1rem',
    margin: 0,
  },
  exerciseCard: {
    backgroundColor: '#f9fafb',
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '1rem',
  },
  exerciseTitle: {
    fontWeight: '600' as const,
    color: '#111827',
    marginBottom: '0.75rem',
    margin: 0,
  },
  exerciseInputs: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
  },
  fullWidth: {
    gridColumn: '1 / -1',
  },
  inputLabel: {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: '500' as const,
    color: '#374151',
    marginBottom: '0.25rem',
  },
  input: {
    width: '100%',
    padding: '0.5rem 0.75rem',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    fontSize: '0.875rem',
  },
  textarea: {
    width: '100%',
    padding: '0.5rem 0.75rem',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    fontSize: '0.875rem',
    resize: 'vertical' as const,
  },
  summarySection: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1rem',
  },
  starRating: {
    display: 'flex',
    gap: '0.25rem',
  },
  modalActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '0.75rem',
    paddingTop: '1rem',
    borderTop: '1px solid #e5e7eb',
  },
  cancelButton: {
    padding: '0.5rem 1rem',
    border: '1px solid #d1d5db',
    backgroundColor: 'white',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.875rem',
    color: '#374151',
  },
  saveButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#10b981',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.875rem',
  },
  emptyState: {
    textAlign: 'center' as const,
    padding: '4rem',
    backgroundColor: 'white',
    borderRadius: '12px',
    border: '1px solid #e5e7eb',
  },
  emptyIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80px',
    height: '80px',
    backgroundColor: '#f3f4f6',
    borderRadius: '50%',
    margin: '0 auto 1.5rem',
    color: '#9ca3af',
  },
  emptyTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold' as const,
    color: '#111827',
    marginBottom: '1rem',
    margin: 0,
  },
  emptyDescription: {
    color: '#6b7280',
    marginBottom: '2rem',
    lineHeight: '1.6',
  },
  emptyActions: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    marginTop: '1.5rem',
    flexWrap: 'wrap' as const,
  },
  chatButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1.5rem',
    backgroundColor: '#111827',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  createFirstButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1.5rem',
    backgroundColor: '#0047FF',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  calendarContainer: {
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
  },
  calendarGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '1px',
    backgroundColor: '#e5e7eb',
  },
  calendarDay: {
    backgroundColor: 'white',
    minHeight: '384px',
  },
  dayHeader: {
    padding: '0.75rem',
    textAlign: 'center' as const,
    borderBottom: '1px solid #f3f4f6',
  },
  dayName: {
    fontSize: '0.875rem',
    fontWeight: '500' as const,
    color: '#6b7280',
  },
  dayNumber: {
    fontSize: '1.125rem',
    fontWeight: '600' as const,
    color: '#111827',
    marginTop: '0.25rem',
  },
  dayContent: {
    padding: '0.5rem',
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1.5rem',
  },
  weekCard: {
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    padding: '1.5rem',
  },
  weekHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
    paddingBottom: '1rem',
    borderBottom: '1px solid #f3f4f6',
  },
  listWeekTitle: {
    fontSize: '1.25rem',
    fontWeight: '600' as const,
    color: '#111827',
    margin: 0,
  },
  weekDate: {
    fontSize: '0.875rem',
    color: '#6b7280',
  },
  workoutsList: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1rem',
  },
  workoutCard: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '1rem',
  },
  workoutCardContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  workoutIcon: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  workoutInfo: {
    flex: 1,
  },
  workoutTitleRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  workoutTitle: {
    fontSize: '1rem',
    fontWeight: '600' as const,
    color: '#111827',
    margin: 0,
  },
  workoutDay: {
    fontSize: '0.875rem',
    color: '#6b7280',
  },
  workoutSummary: {
    fontSize: '0.875rem',
    color: '#6b7280',
  },
  workoutMeta: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  durationContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
  },
  timerIcon: {
    width: '16px',
    height: '16px',
  },
  durationText: {
    fontSize: '0.875rem',
    color: '#6b7280',
  },
  intensityBadge: {
    padding: '0.25rem 0.5rem',
    backgroundColor: '#f3f4f6',
    borderRadius: '6px',
    fontSize: '0.875rem',
    color: '#6b7280',
  },
  workoutActions: {
    display: 'flex',
    gap: '0.5rem',
  },
  editButton: {
    padding: '0.5rem 1rem',
    border: '1px solid #d1d5db',
    backgroundColor: 'white',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.875rem',
  },
  buttonIcon: {
    width: '16px',
    height: '16px',
    marginRight: '0.25rem',
  },
  logButton: {
    padding: '0.5rem 1rem',
    border: '1px solid #d1d5db',
    backgroundColor: 'white',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.875rem',
  },
  logButtonLogged: {
    backgroundColor: '#d1d5db',
  },
  logButtonDefault: {
    backgroundColor: '#0047FF',
    color: 'white',
  },
  workoutCardLogged: {
    backgroundColor: '#f0fdf4',
    border: '1px solid #bbf7d0',
  },
  checkIcon: {
    width: '16px',
    height: '16px',
    color: '#10b981',
  },
}; 