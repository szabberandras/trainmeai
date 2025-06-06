'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '@/lib/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import LayoutClientWrapper from '@/app/components/LayoutClientWrapper';
import PersonaCard from '@/app/components/dashboard/PersonaCard';
import PersonaSwitchModal from '@/app/components/dashboard/PersonaSwitchModal';
import { User } from 'firebase/auth';
import { cache } from '@/lib/cache';
import { logError } from '@/lib/errorLogging';
import { CoachPersona } from '@/lib/types/training-system';
import { UserPersonalization } from '@/app/components/onboarding/CinematicOnboarding';

interface UserProfile {
  name: string;
  email: string;
  height?: string;
  weight?: string;
  birthdate?: string;
  notifications: {
    workoutReminders: boolean;
    progressUpdates: boolean;
    communityMessages: boolean;
  };
  privacy: {
    showProgress: boolean;
    showWorkouts: boolean;
    publicProfile: boolean;
  };
}

const loadUserProfile = async (user: User) => {
  try {
    return await cache.get(
      `userProfile:${user.uid}`,
      async () => {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          return {
            ...userDoc.data(),
            name: user.displayName || '',
            email: user.email || ''
          };
        }
        return null;
      },
      { ttl: 60 * 1000 } // 1 minute cache
    );
  } catch (error) {
    await logError(error, {
      context: 'profile-load',
      user: user.uid,
      metadata: { email: user.email }
    });
    return null;
  }
};

export default function ProfilePage() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);
  const [isResettingOnboarding, setIsResettingOnboarding] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const [showPersonaSwitchModal, setShowPersonaSwitchModal] = useState(false);
  const [userPersonalization, setUserPersonalization] = useState<UserPersonalization | null>(null);
  const [profile, setProfile] = useState<UserProfile>({
    name: '',
    email: '',
    notifications: {
      workoutReminders: true,
      progressUpdates: true,
      communityMessages: true
    },
    privacy: {
      showProgress: true,
      showWorkouts: true,
      publicProfile: true
    }
  });

  useEffect(() => {
    if (!user && !loading) {
      router.push('/');
      return;
    }

    const fetchProfile = async () => {
      if (user) {
        const profileData = await loadUserProfile(user);
        if (profileData) {
          setProfile(prevProfile => ({
            ...prevProfile,
            ...profileData
          }));
          
          // Load personalization data for persona settings
          if ((profileData as any).hasCompletedOnboarding) {
            setUserPersonalization(profileData as any);
          }
        }
      }
    };

    fetchProfile();
  }, [user, loading, router]);

  const handleSave = async () => {
    if (!user) return;
    
    setIsSaving(true);
    try {
      await updateDoc(doc(db, 'users', user.uid), {
        height: profile.height,
        weight: profile.weight,
        birthdate: profile.birthdate,
        notifications: profile.notifications,
        privacy: profile.privacy,
        updatedAt: new Date()
      });
      
      // Invalidate cache after update
      cache.invalidate(`userProfile:${user.uid}`);
    } catch (error) {
      await logError(error, {
        context: 'profile-save',
        user: user.uid,
        metadata: { email: user.email }
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleResetOnboarding = async () => {
    if (!user) return;
    
    setIsResettingOnboarding(true);
    try {
      // Clear ALL onboarding-related data to force fresh start
      await updateDoc(doc(db, 'users', user.uid), {
        hasCompletedOnboarding: false,
        onboardingAnswers: null,
        onboardingPath: null,
        selectedPersona: null,
        personaSelection: null,
        // Clear personalization data to start fresh
        motivation: null,
        vision: null,
        timeAvailable: null,
        trainingLocation: null,
        communicationStyle: null,
        visualTheme: null,
        aiTone: null,
        preferredDuration: null,
        safetyPriority: null,
        progressionRate: null,
        completedAt: null,
        updatedAt: new Date()
      });
      
      // Clear conversation history to start fresh
      try {
        await fetch('/api/chat', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId: user.uid })
        });
      } catch (chatError) {
        console.warn('Could not clear chat history:', chatError);
      }
      
      // Invalidate cache after update
      cache.invalidate(`userProfile:${user.uid}`);
      
      // Force reload to ensure clean state
      window.location.href = '/dashboard';
    } catch (error) {
      await logError(error, {
        context: 'onboarding-reset',
        user: user.uid,
        metadata: { email: user.email }
      });
    } finally {
      setIsResettingOnboarding(false);
    }
  };

  const handlePersonaSwitch = async (newPersona: CoachPersona) => {
    if (!user || !userPersonalization) return;

    try {
      // Update the user's personalization with the new persona
      const updatedPersonalization = {
        ...userPersonalization,
        selectedPersona: newPersona,
      };

      // Save to Firebase
      await updateDoc(doc(db, 'users', user.uid), {
        selectedPersona: newPersona,
        updatedAt: new Date()
      });

      // Update local state
      setUserPersonalization(updatedPersonalization);
      
      // Invalidate cache
      cache.invalidate(`userProfile:${user.uid}`);
      
      console.log(`🤖 Switched to ${newPersona} persona`);
    } catch (error) {
      await logError(error, {
        context: 'persona-switch',
        user: user.uid,
        metadata: { newPersona }
      });
    }
  };

  if (loading) {
    return (
      <LayoutClientWrapper>
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
          <p className="ml-3">Loading profile...</p>
        </div>
      </LayoutClientWrapper>
    );
  }

  if (!user) return null;

  return (
    <LayoutClientWrapper>
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="flex flex-col max-w-[960px] flex-1">
          <div className="pb-3">
            <div className="flex border-b border-[#dbdfe6] px-4 gap-8">
              <button
                onClick={() => setActiveTab('profile')}
                className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${
                  activeTab === 'profile'
                    ? 'border-b-[#111318] text-[#111318]'
                    : 'border-b-transparent text-[#617089]'
                }`}
              >
                <p className="text-sm font-bold leading-normal tracking-[0.015em]">Profile</p>
              </button>
              <button
                onClick={() => setActiveTab('notifications')}
                className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${
                  activeTab === 'notifications'
                    ? 'border-b-[#111318] text-[#111318]'
                    : 'border-b-transparent text-[#617089]'
                }`}
              >
                <p className="text-sm font-bold leading-normal tracking-[0.015em]">Notifications</p>
              </button>
              <button
                onClick={() => setActiveTab('coach')}
                className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${
                  activeTab === 'coach'
                    ? 'border-b-[#111318] text-[#111318]'
                    : 'border-b-transparent text-[#617089]'
                }`}
              >
                <p className="text-sm font-bold leading-normal tracking-[0.015em]">Coach Settings</p>
              </button>
              <button
                onClick={() => setActiveTab('privacy')}
                className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${
                  activeTab === 'privacy'
                    ? 'border-b-[#111318] text-[#111318]'
                    : 'border-b-transparent text-[#617089]'
                }`}
              >
                <p className="text-sm font-bold leading-normal tracking-[0.015em]">Privacy</p>
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${
                  activeTab === 'settings'
                    ? 'border-b-[#111318] text-[#111318]'
                    : 'border-b-transparent text-[#617089]'
                }`}
              >
                <p className="text-sm font-bold leading-normal tracking-[0.015em]">Settings</p>
              </button>
            </div>
          </div>

          <h2 className="text-[#111318] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            {activeTab === 'profile' && 'Profile Information'}
            {activeTab === 'notifications' && 'Notification Settings'}
            {activeTab === 'coach' && 'AI Coach Settings'}
            {activeTab === 'privacy' && 'Privacy Settings'}
            {activeTab === 'settings' && 'App Settings'}
          </h2>

          {activeTab === 'profile' && (
            <>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#111318] text-base font-medium leading-normal pb-2">Name</p>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111318] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#617089] p-4 text-base font-normal leading-normal"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  />
                </label>
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#111318] text-base font-medium leading-normal pb-2">Email</p>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111318] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#617089] p-4 text-base font-normal leading-normal"
                    value={profile.email}
                    disabled
                  />
                </label>
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#111318] text-base font-medium leading-normal pb-2">Height</p>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111318] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#617089] p-4 text-base font-normal leading-normal"
                    value={profile.height}
                    onChange={(e) => setProfile({ ...profile, height: e.target.value })}
                    placeholder="e.g. 175 cm"
                  />
                </label>
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#111318] text-base font-medium leading-normal pb-2">Weight</p>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111318] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#617089] p-4 text-base font-normal leading-normal"
                    value={profile.weight}
                    onChange={(e) => setProfile({ ...profile, weight: e.target.value })}
                    placeholder="e.g. 70 kg"
                  />
                </label>
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#111318] text-base font-medium leading-normal pb-2">Birth Date</p>
                  <input
                    type="date"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111318] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#617089] p-4 text-base font-normal leading-normal"
                    value={profile.birthdate}
                    onChange={(e) => setProfile({ ...profile, birthdate: e.target.value })}
                  />
                </label>
              </div>
            </>
          )}

          {activeTab === 'notifications' && (
            <div className="px-4 py-3">
              <div className="flex max-w-[480px] flex-col gap-4">
                <label className="flex items-center justify-between">
                  <span className="text-[#111318] text-base font-medium">Workout Reminders</span>
                  <input
                    type="checkbox"
                    checked={profile.notifications.workoutReminders}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        notifications: { ...profile.notifications, workoutReminders: e.target.checked }
                      })
                    }
                    className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                </label>
                <label className="flex items-center justify-between">
                  <span className="text-[#111318] text-base font-medium">Progress Updates</span>
                  <input
                    type="checkbox"
                    checked={profile.notifications.progressUpdates}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        notifications: { ...profile.notifications, progressUpdates: e.target.checked }
                      })
                    }
                    className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                </label>
                <label className="flex items-center justify-between">
                  <span className="text-[#111318] text-base font-medium">Community Messages</span>
                  <input
                    type="checkbox"
                    checked={profile.notifications.communityMessages}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        notifications: { ...profile.notifications, communityMessages: e.target.checked }
                      })
                    }
                    className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                </label>
              </div>
            </div>
          )}

          {activeTab === 'coach' && userPersonalization?.selectedPersona && (
            <div className="px-4 py-3">
              <div className="max-w-[600px]">
                <div className="mb-6">
                  <p className="text-[#617089] text-sm leading-normal mb-4">
                    Your AI coach adapts its communication style and training approach based on your selected persona. 
                    You can switch between different coaching styles at any time.
                  </p>
                </div>
                
                <PersonaCard
                  selectedPersona={userPersonalization.selectedPersona}
                  personaSelection={userPersonalization.personaSelection}
                  onPersonaChange={() => setShowPersonaSwitchModal(true)}
                  onLearnMore={() => setShowPersonaSwitchModal(true)}
                />
              </div>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="px-4 py-3">
              <div className="flex max-w-[480px] flex-col gap-4">
                <label className="flex items-center justify-between">
                  <span className="text-[#111318] text-base font-medium">Show Progress to Community</span>
                  <input
                    type="checkbox"
                    checked={profile.privacy.showProgress}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        privacy: { ...profile.privacy, showProgress: e.target.checked }
                      })
                    }
                    className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                </label>
                <label className="flex items-center justify-between">
                  <span className="text-[#111318] text-base font-medium">Share Workouts</span>
                  <input
                    type="checkbox"
                    checked={profile.privacy.showWorkouts}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        privacy: { ...profile.privacy, showWorkouts: e.target.checked }
                      })
                    }
                    className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                </label>
                <label className="flex items-center justify-between">
                  <span className="text-[#111318] text-base font-medium">Public Profile</span>
                  <input
                    type="checkbox"
                    checked={profile.privacy.publicProfile}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        privacy: { ...profile.privacy, publicProfile: e.target.checked }
                      })
                    }
                    className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                </label>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="px-4 py-3">
              <div className="flex max-w-[480px] flex-col gap-6">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">✨</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Reset Onboarding</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Go through the beautiful Apple-style onboarding experience again to update your preferences and goals. This will clear your current personalization settings.
                      </p>
                      <button
                        onClick={handleResetOnboarding}
                        disabled={isResettingOnboarding}
                        className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isResettingOnboarding ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></div>
                            Resetting...
                          </>
                        ) : (
                          'Start Fresh Onboarding'
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex px-4 py-3 justify-end">
            {activeTab !== 'settings' && (
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-blue-600 text-white text-sm font-bold leading-normal tracking-[0.015em] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
              >
                <span className="truncate">{isSaving ? 'Saving...' : 'Save Changes'}</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Persona Switch Modal */}
      {userPersonalization?.selectedPersona && (
        <PersonaSwitchModal
          isOpen={showPersonaSwitchModal}
          currentPersona={userPersonalization.selectedPersona}
          onClose={() => setShowPersonaSwitchModal(false)}
          onPersonaSelect={handlePersonaSwitch}
        />
      )}
    </LayoutClientWrapper>
  );
} 