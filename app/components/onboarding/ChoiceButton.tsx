'use client';

import React from 'react';

interface Choice {
  text: string;
  preview?: string;
}

interface ChoiceButtonProps {
  choice: string | Choice;
  onClick: () => void;
  isSelected?: boolean;
  delay?: number;
}

export default function ChoiceButton({ choice, onClick, isSelected, delay = 0 }: ChoiceButtonProps) {
  const choiceText = typeof choice === 'string' ? choice : choice.text;
  const choicePreview = typeof choice === 'object' ? choice.preview : undefined;

  return (
    <button
      onClick={onClick}
      className={`
        group relative overflow-hidden
        bg-white/15 backdrop-blur-md
        border-2 border-white/20
        rounded-2xl px-8 py-6
        text-white text-left
        font-medium text-lg
        transition-all duration-300 ease-out
        hover:bg-white/25 hover:border-white/40
        hover:-translate-y-1 hover:shadow-2xl
        focus:outline-none focus:ring-2 focus:ring-white/50
        ${isSelected ? 'bg-white/30 border-white/50' : ''}
        animate-fadeInUp
      `}
      style={{
        animationDelay: `${2500 + delay}ms`
      }}
    >
      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="text-lg font-medium">
          {choiceText}
        </div>
        {choicePreview && (
          <div className="text-sm text-white/80 mt-2 italic">
            {choicePreview}
          </div>
        )}
      </div>
      
      {/* Selection indicator */}
      {isSelected && (
        <div className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full opacity-80" />
      )}
    </button>
  );
} 