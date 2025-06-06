'use client';

import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Import Google Font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Wait for fade out animation to complete
      setTimeout(onLoadingComplete, 500);
    }, 2500);

    return () => {
      clearTimeout(timer);
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, [onLoadingComplete]);

  if (!isVisible) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-gray-50 to-white flex items-center justify-center z-50 opacity-0 transition-opacity duration-500 pointer-events-none">
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-50 to-white flex items-center justify-center z-50 transition-opacity duration-500">
      <div className="relative">
        {/* Circular rotating text */}
        <div className="relative w-96 h-96 flex items-center justify-center">
          {/* SVG for circular text */}
          <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 400 400">
            <defs>
              <path
                id="circle-path"
                d="M 200, 200 m -180, 0 a 180,180 0 1,1 360,0 a 180,180 0 1,1 -360,0"
              />
            </defs>
            <text 
              className="fill-gray-400 text-sm font-bold tracking-widest font-space-grotesk"
            >
              <textPath href="#circle-path" startOffset="0%">
                MY FITNESS APP • YOUR AI-POWERED FITNESS COMPANION • MY FITNESS APP • 
              </textPath>
            </text>
          </svg>
          
          {/* Center logo/text */}
          <div className="relative z-10 text-center">
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Logo%2F317ecd07-214d-4ac0-99a8-4e19c2ed8ebd.png?alt=media&token=de760234-5f32-470d-b88d-d55368799d36" 
              alt="My Fitness App Logo" 
              className="w-16 h-16 mx-auto mb-3 animate-pulse-slow"
            />
            <h1 
              className="text-gray-900 font-semibold animate-pulse-slow tracking-tight font-space-grotesk"
              style={{ 
                fontSize: '24px',
                lineHeight: '1'
              }}
            >
              My Fitness App
            </h1>
            <div className="w-8 h-0.5 bg-blue-600 mx-auto rounded-full animate-pulse mt-2"></div>
          </div>
        </div>

        {/* Loading dots */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
} 