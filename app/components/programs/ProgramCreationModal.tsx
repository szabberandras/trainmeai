'use client';

import React, { useState } from 'react';
import { X, Dumbbell, Heart, Target, Zap, Activity, Trophy } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onCreateProgram: (data: any) => void;
}

export default function ProgramCreationModal({ isOpen, onClose, onCreateProgram }: Props) {
  const [step, setStep] = useState(1);
  const [programData, setProgramData] = useState({
    name: '',
    discipline: '',
    goals: [],
    duration: 8,
    frequency: 3,
    equipment: [],
    experienceLevel: 'intermediate',
    timePerSession: 45
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Create Training Program</h2>
            <p className="text-gray-600">Step {step} of 4</p>
          </div>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="text-center py-8">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Program Creation Coming Soon</h3>
            <p className="text-gray-600 mb-4">
              Dynamic program creation with AI-powered customization is being built.
            </p>
            <button
              onClick={onClose}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 