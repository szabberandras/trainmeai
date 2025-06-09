'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { UserPersonalization } from './onboarding/CinematicOnboarding';

interface FloatingAIBubbleProps {
  userPersonalization: UserPersonalization | null;
  onSendMessage?: (message: string) => void;
  isVisible?: boolean;
}

const AI_PROMPTS = {
  supportive: [
    "Hey — got 15 minutes?",
    "How are you feeling today?",
    "Ready to build on yesterday's progress?",
    "Would you like to update your week?"
  ],
  playful: [
    "Ready for some fun?",
    "Feeling energetic today?",
    "Want to try something new?",
    "How about a quick challenge?"
  ],
  direct: [
    "Time to train?",
    "What's today's focus?",
    "Ready to work?",
    "Need a plan?"
  ],
  minimal: [
    "15 minutes?",
    "Train now?",
    "Quick session?",
    "Ready?"
  ],
  reflective: [
    "How did that feel?",
    "Feeling low today? Want something lighter?",
    "What does your body need?",
    "How's your energy?"
  ]
};

export default function FloatingAIBubble({ 
  userPersonalization, 
  onSendMessage,
  isVisible = true 
}: FloatingAIBubbleProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentPrompt, setCurrentPrompt] = useState('');
  const [message, setMessage] = useState('');
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    if (!userPersonalization || !isVisible) return;

    // Show a contextual prompt after a longer delay to be less intrusive
    // Only show if user hasn't interacted with the bubble recently
    const promptTimer = setTimeout(() => {
      // Check if user has been inactive (no recent interactions)
      const lastInteraction = sessionStorage.getItem('lastAIBubbleInteraction');
      const now = Date.now();
      const fiveMinutesAgo = now - (5 * 60 * 1000);
      
      if (!lastInteraction || parseInt(lastInteraction) < fiveMinutesAgo) {
        const aiTone = userPersonalization.aiTone || 'supportive';
        const prompts = AI_PROMPTS[aiTone];
        const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
        setCurrentPrompt(randomPrompt);
        setShowPrompt(true);

        // Hide prompt after 8 seconds (longer to be less annoying)
        setTimeout(() => {
          setShowPrompt(false);
        }, 8000);
      }
    }, 10000); // Increased delay to 10 seconds

    return () => clearTimeout(promptTimer);
  }, [userPersonalization, isVisible]);

  const handleSendMessage = () => {
    if (message.trim() && onSendMessage) {
      onSendMessage(message.trim());
      setMessage('');
      setIsExpanded(false);
      // Track interaction to prevent auto-prompts
      sessionStorage.setItem('lastAIBubbleInteraction', Date.now().toString());
    }
  };

  const handlePromptClick = () => {
    if (currentPrompt && onSendMessage) {
      onSendMessage(currentPrompt);
      setShowPrompt(false);
      setIsExpanded(false);
      // Track interaction to prevent auto-prompts
      sessionStorage.setItem('lastAIBubbleInteraction', Date.now().toString());
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Prompt Bubble */}
      {showPrompt && !isExpanded && (
        <div 
          onClick={handlePromptClick}
          className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-lg border border-gray-200 p-4 max-w-xs cursor-pointer hover:shadow-xl transition-all duration-300 animate-fadeInUp"
        >
          <p className="text-sm text-gray-700 font-medium">{currentPrompt}</p>
          <div className="absolute -bottom-2 right-4 w-4 h-4 bg-white border-r border-b border-gray-200 transform rotate-45"></div>
        </div>
      )}

      {/* Expanded Chat Interface */}
      {isExpanded && (
        <div className="absolute bottom-16 right-0 w-80 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden animate-fadeInUp">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-medium">AI Coach</span>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Message Input */}
          <div className="p-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSendMessage();
                  }
                }}
                autoFocus
              />
              <button
                onClick={handleSendMessage}
                disabled={!message.trim()}
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Actions */}
            <div className="mt-3 space-y-2">
              <button
                onClick={() => onSendMessage?.("I want to start a quick workout")}
                className="w-full text-left p-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                🏃‍♂️ Quick workout
              </button>
              <button
                onClick={() => onSendMessage?.("How should I modify today's plan?")}
                className="w-full text-left p-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                ⚡ Modify today's plan
              </button>
              <button
                onClick={() => onSendMessage?.("I'm feeling low energy today")}
                className="w-full text-left p-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                😌 Low energy option
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Bubble */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="relative w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      >
        {/* Pulsing Ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-ping opacity-20"></div>
        
        {/* Icon */}
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          {isExpanded ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
          )}
        </div>

        {/* Notification Dot */}
        {showPrompt && !isExpanded && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-bounce">
            <div className="w-full h-full bg-red-500 rounded-full animate-ping"></div>
          </div>
        )}
      </button>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
} 