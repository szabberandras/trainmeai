'use client';

import React, { useEffect, useState } from 'react';

interface BackgroundGradientProps {
  type: 'sunrise' | 'dusk' | 'golden' | 'morning' | 'final';
  animation?: 'particles' | 'pulse' | 'wave' | 'breathe';
}

export default function BackgroundGradient({ type, animation }: BackgroundGradientProps) {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; delay: number; duration: number }>>([]);

  // Generate floating particles for the particles animation
  useEffect(() => {
    if (animation === 'particles') {
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 8,
        duration: Math.random() * 4 + 6
      }));
      setParticles(newParticles);
    }
  }, [animation]);

  const getGradientClass = () => {
    switch (type) {
      case 'sunrise':
        return 'bg-gradient-to-br from-orange-300 via-pink-300 to-purple-300';
      case 'dusk':
        return 'bg-gradient-to-br from-indigo-400 via-purple-500 to-purple-600';
      case 'golden':
        return 'bg-gradient-to-br from-yellow-300 via-orange-400 to-pink-400';
      case 'morning':
        return 'bg-gradient-to-br from-blue-300 via-cyan-300 to-teal-300';
      case 'final':
        return 'bg-gradient-to-br from-white to-gray-50';
      default:
        return 'bg-gradient-to-br from-blue-400 to-purple-500';
    }
  };

  const getAnimationClass = () => {
    switch (animation) {
      case 'pulse':
        return 'animate-pulse-slow';
      case 'wave':
        return 'animate-wave';
      case 'breathe':
        return 'animate-breathe';
      default:
        return '';
    }
  };

  return (
    <div className={`absolute inset-0 ${getGradientClass()} ${getAnimationClass()}`}>
      {/* Floating Particles */}
      {animation === 'particles' && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-1 h-1 bg-white/60 rounded-full animate-float"
              style={{
                left: `${particle.x}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`
              }}
            />
          ))}
        </div>
      )}
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/10" />
    </div>
  );
} 