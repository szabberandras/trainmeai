'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

interface LoadingScreenProps {
  message?: string;
  showLogo?: boolean;
  onLoadingComplete?: () => void;
}

export default function LoadingScreen({ 
  message = "Loading...", 
  showLogo = true,
  onLoadingComplete
}: LoadingScreenProps) {
  useEffect(() => {
    if (onLoadingComplete) {
      // Auto-complete loading after 2 seconds
      const timer = setTimeout(() => {
        onLoadingComplete();
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 fullscreen-gradient-primary grainy-texture flex items-center justify-center z-50">
      <div className="text-center">
        {showLogo && (
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 glass-effect rounded-2xl p-4">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Logo%2F8819f3df-3241-4f21-be52-827df2f7cc25.png?alt=media&token=a017389c-c181-4143-9366-67bd70c9b6dd"
                alt="TrainMeAI Logo"
                width={64}
                height={64}
                className="object-contain w-full h-full"
                priority
              />
            </div>
          </div>
        )}
        
        {/* Animated Loading Spinner */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-12 h-12 border-4 border-primary-light/30 rounded-full"></div>
            <div className="absolute top-0 left-0 w-12 h-12 border-4 border-primary-light border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
        
        {/* Loading Message */}
        <p className="text-primary-light text-lg font-medium text-shadow-soft">
          {message}
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

// Specialized loading screens for different contexts
export function AuthLoadingScreen() {
  return (
    <LoadingScreen 
      message="Authenticating..." 
      showLogo={true}
    />
  );
}

export function WorkoutLoadingScreen() {
  return (
    <LoadingScreen 
      message="Generating your workout..." 
      showLogo={false}
    />
  );
}

export function ProgramLoadingScreen() {
  return (
    <LoadingScreen 
      message="Creating your training program..." 
      showLogo={false}
    />
  );
}