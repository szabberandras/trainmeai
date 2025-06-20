'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase';
import CinematicOnboarding, { UserPersonalization } from '@/app/components/onboarding/CinematicOnboarding';

export default function OnboardingPage() {
  const [user, loading, error] = useAuthState(auth);
  const [forceLoad, setForceLoad] = useState(false);
  const router = useRouter();

  // Force load after 3 seconds if still loading
  useEffect(() => {
    const timer = setTimeout(() => {
      if (loading) {
        console.log('Auth loading timeout, forcing onboarding to load');
        setForceLoad(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [loading]);

  const handleOnboardingComplete = (personalization: UserPersonalization) => {
    // Redirect to dashboard after onboarding completion
    router.push('/dashboard');
  };

  const handleOnboardingSkip = () => {
    // Redirect to dashboard if user skips onboarding
    router.push('/dashboard');
  };

  // Show loading only if we're actually loading and haven't forced load yet
  if (loading && !forceLoad) {
    return (
      <div className="fixed inset-0 fullscreen-gradient-primary grainy-texture flex items-center justify-center z-50">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 glass-effect rounded-2xl p-4">
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Logo%2F8819f3df-3241-4f21-be52-827df2f7cc25.png?alt=media&token=a017389c-c181-4143-9366-67bd70c9b6dd" 
              alt="MyPace Logo" 
                className="object-contain w-full h-full"
              />
            </div>
          </div>
          
          {/* Animated Loading Spinner */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-12 h-12 border-4 border-primary-light/30 rounded-full"></div>
              <div className="absolute top-0 left-0 w-12 h-12 border-4 border-primary-light border-t-transparent rounded-full animate-spin"></div>
            </div>
          </div>
          
          {/* Loading Message */}
          <p className="text-primary-light text-lg font-medium text-shadow-soft">
            Loading your onboarding...
          </p>
          
          {/* Animated Dots */}
          <div className="flex justify-center mt-4 space-x-1">
            <div className="w-2 h-2 bg-primary-light rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-primary-light rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-primary-light rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    );
  }

  // If there's an error or no user and we're not loading, redirect to login
  if (error || (!user && !loading)) {
    console.log('Auth error or no user, redirecting to login:', error);
    router.push('/');
    return null;
  }

  // Show onboarding regardless of auth state if forced or if we have a user
  return (
    <CinematicOnboarding 
      onComplete={handleOnboardingComplete}
      onSkip={handleOnboardingSkip}
    />
  );
} 