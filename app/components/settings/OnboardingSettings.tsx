'use client';

import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '@/lib/firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { Play, RotateCcw } from 'lucide-react';

interface OnboardingSettingsProps {
  onRestartOnboarding?: () => void;
}

export default function OnboardingSettings({ onRestartOnboarding }: OnboardingSettingsProps) {
  const [user] = useAuthState(auth);
  const [isRestarting, setIsRestarting] = useState(false);

  const handleRestartOnboarding = async () => {
    if (!user) return;

    setIsRestarting(true);
    
    try {
      // Reset onboarding status in Firestore
      await updateDoc(doc(db, 'users', user.uid), {
        hasCompletedOnboarding: false,
        onboardingRestartedAt: new Date()
      });

      // Trigger onboarding restart
      if (onRestartOnboarding) {
        onRestartOnboarding();
      } else {
        // Reload the page to trigger onboarding check
        window.location.reload();
      }
    } catch (error) {
      console.error('Error restarting onboarding:', error);
    } finally {
      setIsRestarting(false);
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
          <Play className="w-6 h-6 text-white" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Cinematic Onboarding
          </h3>
          <p className="text-gray-600 mb-4">
            Experience the full-screen movie-like onboarding again to update your preferences and personalization settings.
          </p>
          
          <button
            onClick={handleRestartOnboarding}
            disabled={isRestarting}
            className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            {isRestarting ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Restarting...
              </>
            ) : (
              <>
                <RotateCcw className="w-4 h-4" />
                Restart Onboarding
              </>
            )}
          </button>
          
          <p className="text-xs text-gray-500 mt-2">
            This will reset your personalization and take you through the 4-step cinematic experience again.
          </p>
        </div>
      </div>
    </div>
  );
} 