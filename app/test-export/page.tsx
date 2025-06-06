'use client';

import React from 'react';
import LayoutClientWrapper from '@/app/components/LayoutClientWrapper';
import TrainingProgramNavBar from '@/app/components/navigation/TrainingProgramNavBar';
import { useRouter } from 'next/navigation';

export default function TestExportPage() {
  const router = useRouter();

  return (
    <LayoutClientWrapper>
      <div className="min-h-screen bg-white">
        {/* Test Empty State Navigation */}
        <TrainingProgramNavBar 
          programs={[]} // Empty array to show empty state
          onCreateNew={() => router.push('/training-plans/new')}
          showEmptyState={true}
        />
        
        <div className="px-40 py-5">
          <div className="max-w-[960px] mx-auto">
            <h1 className="text-[32px] font-bold text-[#111418] mb-4">
              Navigation Bar Test - Empty State
            </h1>
            <p className="text-[#637088] mb-8">
              This page demonstrates the training program navigation bar in empty state.
            </p>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4">Test Features:</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Empty state with call-to-action</li>
                <li>• Responsive design</li>
                <li>• Smooth animations</li>
                <li>• Create new program button</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </LayoutClientWrapper>
  );
} 