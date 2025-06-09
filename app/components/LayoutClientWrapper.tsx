'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db, storage } from '@/lib/firebase';
import { ref, getDownloadURL } from 'firebase/storage';
import { signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import Navigation from '@/app/components/Navigation';
import LoadingScreen from '@/app/components/LoadingScreen';
import CinematicOnboarding, { UserPersonalization } from './onboarding/CinematicOnboarding';

interface LayoutClientWrapperProps {
  children: React.ReactNode;
}

export default function LayoutClientWrapper({ children }: LayoutClientWrapperProps) {
  const pathname = usePathname();
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [userPersonalization, setUserPersonalization] = useState<UserPersonalization | null>(null);

  useEffect(() => {
    // Only show loading screen on initial app load
    if (isInitialLoad) {
      const hasSeenLoading = sessionStorage.getItem('hasSeenLoading');
      if (hasSeenLoading) {
        setShowLoadingScreen(false);
        setIsInitialLoad(false);
      }
    } else {
      setShowLoadingScreen(false);
    }
  }, [isInitialLoad]);

  useEffect(() => {
    const checkUserOnboardingStatus = async () => {
      if (!loading && user) {
        try {
          console.log('🔍 Checking onboarding status for user:', user.uid);
          
          // Add a small delay to ensure user profile creation has completed
          await new Promise(resolve => setTimeout(resolve, 500));
          
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            console.log('📄 User document exists, hasCompletedOnboarding:', userData.hasCompletedOnboarding);
            
            if (userData.hasCompletedOnboarding === true) {
              // User has explicitly completed onboarding
              setUserPersonalization(userData as UserPersonalization);
              setShowOnboarding(false);
              console.log('✅ User has completed onboarding, skipping');
            } else {
              // User needs onboarding - redirect to onboarding page
              if (pathname !== '/onboarding') {
                console.log('🎯 User needs onboarding, redirecting to onboarding page');
                router.push('/onboarding');
                return;
              }
              setShowOnboarding(false); // Don't show inline onboarding
            }
          } else {
            // New user, redirect to onboarding page
            if (pathname !== '/onboarding') {
              console.log('🆕 New user detected, redirecting to onboarding page');
              router.push('/onboarding');
              return;
            }
            setShowOnboarding(false); // Don't show inline onboarding
          }
        } catch (error) {
          console.error('❌ Error checking onboarding status:', error);
          // On error, redirect to onboarding to be safe
          if (pathname !== '/onboarding') {
            router.push('/onboarding');
          }
        }
      }
    };

    if (!loading) {
      if (!user && pathname !== '/') {
        console.log("LayoutClientWrapper: User not logged in, redirecting to /");
        router.push('/');
      } else if (user && pathname === '/') {
        console.log("LayoutClientWrapper: User logged in, checking onboarding status");
        // Check onboarding status immediately - no need for delay
        checkUserOnboardingStatus();
      } else if (user) {
        // User is logged in and on a protected route, check onboarding
        checkUserOnboardingStatus();
      }
    }
  }, [user, loading, pathname, router]);

  const handleLoadingComplete = () => {
    setShowLoadingScreen(false);
    setIsInitialLoad(false);
    sessionStorage.setItem('hasSeenLoading', 'true');
  };

  const handleOnboardingComplete = (personalization: UserPersonalization) => {
    setUserPersonalization(personalization);
    setShowOnboarding(false);
    
    // Redirect to dashboard after onboarding
    if (pathname === '/') {
      router.push('/dashboard');
    }
  };

  const handleOnboardingSkip = () => {
    setShowOnboarding(false);
    
    // Redirect to dashboard if on login page
    if (pathname === '/') {
      router.push('/dashboard');
    }
  };

  // Show loading screen if it's the initial load and we haven't seen it yet
  if (showLoadingScreen && isInitialLoad) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  // Show cinematic onboarding for new users
  if (showOnboarding && user && !loading) {
    return (
      <CinematicOnboarding 
        onComplete={handleOnboardingComplete}
        onSkip={handleOnboardingSkip}
      />
    );
  }

  const showGlobalHeaderFooter = user && !loading && pathname !== '/' && pathname !== '/onboarding';

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen w-screen bg-[#FAFAFA] text-[#222222] gap-4">
        <div className="w-10 h-10 border-4 border-[#f3f3f3] border-t-[#0047FF] rounded-full animate-spin"></div>
        <p>Loading app...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {showGlobalHeaderFooter && <Navigation />}
      <main className={showGlobalHeaderFooter ? 'pt-16' : ''}>
        {children}
      </main>
    </div>
  );
} 