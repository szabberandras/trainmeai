import React from 'react';
import Link from 'next/link';
import { TrainingProgram, ProgramTemplate } from '@/lib/types/program';

interface ProgramCardProps {
  program: TrainingProgram | ProgramTemplate;
  isTemplate?: boolean;
}

const sportImages = {
  // Endurance Sports
  running: "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/sports%2Frunning.jpg",
  cycling: "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/sports%2Fcycling.jpg",
  swimming: "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/sports%2Fswimming.jpg",
  triathlon: "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/sports%2Ftriathlon.jpg",
  rowing: "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/sports%2Frowing.jpg",
  
  // Strength & Power Sports
  weightlifting: "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/sports%2Fweightlifting.jpg",
  powerlifting: "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/sports%2Fpowerlifting.jpg",
  track_field: "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/sports%2Ftrack_field.jpg",
  rock_climbing: "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/sports%2Frock_climbing.jpg",
  
  // Agility & Speed Sports
  soccer: "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/sports%2Fsoccer.jpg",
  basketball: "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/sports%2Fbasketball.jpg",
  tennis: "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/sports%2Ftennis.jpg",
  boxing: "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/sports%2Fboxing.jpg",
  martial_arts: "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/sports%2Fmartial_arts.jpg",
  
  // Flexibility & Bodyweight Sports
  yoga: "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/sports%2Fyoga.jpg",
  pilates: "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/sports%2Fpilates.jpg",
  calisthenics: "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/sports%2Fcalisthenics.jpg",
  
  // Default/Combination
  combination: "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/sports%2Fcombination.jpg"
};

export default function ProgramCard({ program, isTemplate = false }: ProgramCardProps) {
  const totalWeeks = isTemplate ? (program as ProgramTemplate).duration : (program as TrainingProgram).totalWeeks;
  const progressPercentage = isTemplate ? 0 : ((program as TrainingProgram).currentWeek / totalWeeks) * 100;
  const imageUrl = sportImages[program.type] || sportImages.combination;

  const Card = () => (
    <div className="group relative overflow-hidden rounded-xl bg-white transition-all hover:shadow-lg cursor-pointer">
      <div 
        className="aspect-video w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col justify-end">
          <h3 className="text-xl font-bold text-white mb-1">
            {program.name}
          </h3>
          <div className="flex items-center gap-2 text-white/90 text-sm">
            <span className="capitalize">{program.type}</span>
            <span>•</span>
            <span className="capitalize">{program.difficulty}</span>
          </div>
        </div>
      </div>

      <div className="p-4">
        {!isTemplate && (
          <>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">
                Week {(program as TrainingProgram).currentWeek} of {totalWeeks}
              </span>
              <span className="text-sm font-medium text-blue-600">
                {Math.round(progressPercentage)}% Complete
              </span>
            </div>

            <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-600 rounded-full transition-all"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>

            {(program as TrainingProgram).goal && (
              <div className="mt-4 pt-4 border-t">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Goal Progress</span>
                  <span className="font-medium text-gray-900">
                    {(program as TrainingProgram).goal.currentValue} / {(program as TrainingProgram).goal.target.value} {(program as TrainingProgram).goal.target.unit}
                  </span>
                </div>
              </div>
            )}
          </>
        )}

        {isTemplate && (
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">★ {(program as ProgramTemplate).rating}</span>
              <span className="text-sm text-gray-600">• {totalWeeks} weeks</span>
            </div>
            <span className="text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
              Customize Template
            </span>
          </div>
        )}
      </div>
    </div>
  );

  return isTemplate ? (
    <Card />
  ) : (
    <Link href={`/programs/${program.id}`}>
      <Card />
    </Link>
  );
} 