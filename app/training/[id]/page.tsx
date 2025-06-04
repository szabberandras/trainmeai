'use client';

import { useEffect, useState } from 'react';
import { Download, Edit } from 'lucide-react';
import DayWorkoutCard from '@/app/components/workouts/DayWorkoutCard';
import LayoutClientWrapper from '@/app/components/LayoutClientWrapper';

interface TrainingPlan {
  name: string;
  week: number;
  totalWeeks: number;
  days: {
    day: string;
    workoutType: string;
    metrics: {
      distance?: string;
      duration?: string;
      pace?: string;
      sets?: number;
      reps?: number;
      weight?: string;
      intensity?: string;
    };
    nutritionTip: string;
    isRestDay?: boolean;
  }[];
}

export default function TrainingPlanPage({ params }: { params: { id: string } }) {
  const [plan, setPlan] = useState<TrainingPlan | null>(null);

  useEffect(() => {
    // TODO: Fetch actual plan data from your backend
    setPlan({
      name: "Marathon Training Plan",
      week: 1,
      totalWeeks: 16,
      days: [
        {
          day: "Monday",
          workoutType: "Easy Run",
          metrics: {
            distance: "5 miles",
            pace: "9:30/mile",
            duration: "60 minutes"
          },
          nutritionTip: "Focus on complex carbs like oatmeal and whole grain toast before your run. Post-run, include protein for muscle recovery."
        },
        {
          day: "Tuesday",
          workoutType: "Strength",
          metrics: {
            sets: 3,
            reps: 12,
            duration: "45 minutes"
          },
          nutritionTip: "Increase protein intake today. Aim for lean meats, legumes, and consider a protein shake post-workout."
        },
        {
          day: "Wednesday",
          workoutType: "Cross Training",
          metrics: {
            duration: "45 minutes",
            intensity: "Moderate"
          },
          nutritionTip: "Maintain balanced meals with emphasis on recovery nutrients. Include anti-inflammatory foods like berries and leafy greens."
        },
        {
          day: "Thursday",
          workoutType: "Tempo Run",
          metrics: {
            distance: "4 miles",
            pace: "8:15/mile",
            duration: "45 minutes"
          },
          nutritionTip: "Pre-run snack should be easily digestible carbs. Stay hydrated throughout the day."
        },
        {
          day: "Friday",
          workoutType: "Rest",
          metrics: {},
          nutritionTip: "Focus on recovery nutrition. Ensure adequate protein and healthy fats. Stay hydrated.",
          isRestDay: true
        },
        {
          day: "Saturday",
          workoutType: "Long Run",
          metrics: {
            distance: "12 miles",
            pace: "9:00/mile",
            duration: "2 hours"
          },
          nutritionTip: "Carb-load the night before. During the run, take energy gels every 45 minutes. Post-run recovery meal within 30 minutes."
        },
        {
          day: "Sunday",
          workoutType: "Recovery",
          metrics: {
            duration: "30 minutes",
            intensity: "Light"
          },
          nutritionTip: "Light, balanced meals. Focus on nutrient-rich foods to support recovery."
        }
      ]
    });
  }, []);

  if (!plan) {
    return (
      <LayoutClientWrapper>
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </LayoutClientWrapper>
    );
  }

  return (
    <LayoutClientWrapper>
      <div className="min-h-screen bg-white">
        <div className="px-40 py-5">
          <div className="max-w-[960px] mx-auto">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-[32px] font-bold text-[#111418] mb-2">{plan.name}</h1>
                <p className="text-[#637088]">Week {plan.week} of {plan.totalWeeks}</p>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#f0f2f4] text-[#111418]">
                  <Edit size={18} />
                  <span>Edit Plan</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white">
                  <Download size={18} />
                  <span>Export PDF</span>
                </button>
              </div>
            </div>

            <div className="space-y-6">
              {plan.days.map((day, index) => (
                <DayWorkoutCard
                  key={index}
                  day={day.day}
                  workoutType={day.workoutType}
                  metrics={day.metrics}
                  nutritionTip={day.nutritionTip}
                  isRestDay={day.isRestDay}
                />
              ))}
            </div>

            <div className="mt-8 bg-[#111418] text-white rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4">AI-Driven Insights</h2>
              <div className="grid grid-cols-4 gap-6">
                <div>
                  <p className="text-3xl font-bold text-green-400">94%</p>
                  <p className="text-sm text-gray-300">Plan Compatibility</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-yellow-400">8.2</p>
                  <p className="text-sm text-gray-300">Predicted Finish</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-400">76%</p>
                  <p className="text-sm text-gray-300">Injury Prevention</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-purple-400">3:52</p>
                  <p className="text-sm text-gray-300">Target Time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutClientWrapper>
  );
} 