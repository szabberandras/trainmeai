'use client';

import React from 'react';

interface TransitionEffectProps {
  isActive: boolean;
}

export default function TransitionEffect({ isActive }: TransitionEffectProps) {
  if (!isActive) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black animate-fadeInOut pointer-events-none" />
  );
} 