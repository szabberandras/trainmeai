'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase';
import CinematicOnboarding, { UserPersonalization } from '@/app/components/onboarding/CinematicOnboarding';

export default function OnboardingPage() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  const handleOnboardingComplete = (personalization: UserPersonalization) => {
    // Redirect to dashboard after onboarding completion
    router.push('/dashboard');
  };

  const handleOnboardingSkip = () => {
    // Redirect to dashboard if user skips onboarding
    router.push('/dashboard');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
        <div className="text-center max-w-md p-8">
          <div className="mb-8 flex justify-center">
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Logo%2F317ecd07-214d-4ac0-99a8-4e19c2ed8ebd.png?alt=media&token=de760234-5f32-470d-b88d-d55368799d36" 
              alt="TrainMeAI Logo" 
              className="w-20 h-20 object-contain"
            />
          </div>
          <h1 className="text-2xl font-light text-gray-900 mb-2 font-sans">MyPace</h1>
          <p className="text-gray-600 mb-8 font-sans">Loading your onboarding...</p>
          <div className="w-8 h-8 border-3 border-gray-200 border-t-blue-500 rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    );
  }

  if (!user) {
    router.push('/');
    return null;
  }

  return (
    <CinematicOnboarding 
      onComplete={handleOnboardingComplete}
      onSkip={handleOnboardingSkip}
    />
  );
} 