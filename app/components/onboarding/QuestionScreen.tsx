'use client';

import React, { useState } from 'react';
import ChoiceButton from './ChoiceButton';

interface Choice {
  text: string;
  preview?: string;
}

interface QuestionScreenProps {
  step: number;
  totalSteps: number;
  title: string;
  subtitle: string;
  choices: (string | Choice)[];
  onAnswer: (answer: string) => void;
  onPrevious?: () => void;
  onSkip?: () => void;
  currentAnswer?: string;
  phaseIndicator?: string;
}

export default function QuestionScreen({
  step,
  totalSteps,
  title,
  subtitle,
  choices,
  onAnswer,
  onPrevious,
  onSkip,
  currentAnswer,
  phaseIndicator
}: QuestionScreenProps) {
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [customAnswer, setCustomAnswer] = useState('');

  const handleChoiceClick = (choice: string | Choice) => {
    const choiceText = typeof choice === 'string' ? choice : choice.text;
    
    if (choiceText === 'Type your own...') {
      setShowCustomInput(true);
      return;
    }
    
    onAnswer(choiceText);
  };

  const handleCustomSubmit = () => {
    if (customAnswer.trim()) {
      onAnswer(customAnswer.trim());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && customAnswer.trim()) {
      handleCustomSubmit();
    }
  };

  return (
    <div className="flex items-center justify-center h-full relative">
      <div className="text-center max-w-4xl px-8 z-10">
        {/* Phase Indicator */}
        {phaseIndicator && (
          <div className="mb-6 opacity-0 animate-fadeInUp">
            <div className="inline-block bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-2 text-white/90 text-sm font-medium tracking-wider">
              {phaseIndicator}
            </div>
          </div>
        )}
        
        {/* Title */}
        {title && (
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-8 opacity-0 animate-fadeInUp font-light leading-tight">
            {title}
          </h1>
        )}
        
        {/* Subtitle */}
        <h2 className="text-5xl md:text-7xl font-serif text-white mb-16 opacity-0 animate-fadeInUp animation-delay-1000 font-semibold leading-tight">
          {subtitle}
        </h2>
        
        {/* Choices */}
        <div className="flex flex-col gap-6 max-w-2xl mx-auto opacity-0 animate-fadeInUp animation-delay-2000">
          {choices.map((choice, index) => (
            <ChoiceButton
              key={index}
              choice={choice}
              onClick={() => handleChoiceClick(choice)}
              isSelected={currentAnswer === (typeof choice === 'string' ? choice : choice.text)}
              delay={index * 100}
            />
          ))}
          
          {/* Custom Input */}
          {showCustomInput && (
            <div className="mt-4 animate-fadeInUp">
              <input
                type="text"
                value={customAnswer}
                onChange={(e) => setCustomAnswer(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Tell us what brings you here..."
                className="w-full bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl px-6 py-4 text-white text-lg placeholder-white/70 focus:outline-none focus:border-white/40 focus:bg-white/20 transition-all duration-300"
                autoFocus
              />
              <button
                onClick={handleCustomSubmit}
                disabled={!customAnswer.trim()}
                className="mt-4 bg-white/20 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed border border-white/30 rounded-xl px-8 py-3 text-white font-medium transition-all duration-300"
              >
                Continue
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Step Indicator */}
      <div className="absolute bottom-8 right-8 text-white/70 text-lg font-light opacity-0 animate-fadeIn animation-delay-3000">
        {step} of {totalSteps}
      </div>
      
      {/* Navigation */}
      {onPrevious && (
        <button
          onClick={onPrevious}
          className="absolute bottom-8 left-8 bg-white/20 hover:bg-white/30 border border-white/30 rounded-full px-6 py-3 text-white font-medium transition-all duration-300 opacity-0 animate-fadeIn animation-delay-3000 hover:-translate-x-1"
        >
          ← Back
        </button>
      )}
      
      {/* Skip Option */}
      {onSkip && (
        <button
          onClick={onSkip}
          className="absolute top-8 right-8 text-white/60 hover:text-white/80 text-sm font-medium transition-colors duration-300 opacity-0 animate-fadeIn animation-delay-3000"
        >
          Skip for now
        </button>
      )}
    </div>
  );
} 