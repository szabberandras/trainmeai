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
      <div className="fixed inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center z-50 opacity-0 transition-opacity duration-500 pointer-events-none">
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center z-50 transition-opacity duration-500">
      <div className="relative">
        {/* Circular rotating text */}
        <div className="relative w-80 h-80 flex items-center justify-center">
          {/* SVG for circular text */}
          <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 400 400">
            <defs>
              <path
                id="circle-path"
                d="M 200, 200 m -150, 0 a 150,150 0 1,1 300,0 a 150,150 0 1,1 -300,0"
              />
            </defs>
            <text 
              className="fill-white/80 text-lg font-bold tracking-widest font-space-grotesk"
            >
              <textPath href="#circle-path" startOffset="0%">
                MYPACE • YOUR PACE TO A BETTER SELF • MYPACE • YOUR PACE TO A BETTER SELF • 
              </textPath>
            </text>
          </svg>
          
          {/* Center logo/text */}
          <div className="relative z-10 text-center">
            <h1 
              className="text-white font-black animate-pulse-slow tracking-tight font-space-grotesk"
              style={{ 
                fontSize: '64px',
                lineHeight: '1',
                textShadow: '0 0 30px rgba(255,255,255,0.3)'
              }}
            >
              MyPace
            </h1>
            <div className="w-12 h-1 bg-white mx-auto rounded-full animate-pulse mt-2"></div>
          </div>
        </div>

        {/* Loading dots */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
} 