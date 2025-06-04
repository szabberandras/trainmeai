import { LucideIcon, Timer, Dumbbell, Bike, Bed } from 'lucide-react';

interface WorkoutMetrics {
  distance?: string;
  duration?: string;
  pace?: string;
  sets?: number;
  reps?: number;
  weight?: string;
  intensity?: string;
}

interface DayWorkoutCardProps {
  day: string;
  workoutType: string;
  metrics: WorkoutMetrics;
  nutritionTip: string;
  isRestDay?: boolean;
}

const getWorkoutIcon = (type: string): LucideIcon => {
  switch (type.toLowerCase()) {
    case 'run':
    case 'running':
      return Timer;
    case 'strength':
    case 'weights':
      return Dumbbell;
    case 'cycling':
    case 'bike':
      return Bike;
    default:
      return Bed;
  }
};

const getMetricsDisplay = (metrics: WorkoutMetrics, type: string) => {
  if (type.toLowerCase().includes('run')) {
    return [
      metrics.distance && `Distance: ${metrics.distance}`,
      metrics.pace && `Pace: ${metrics.pace}`,
      metrics.duration && `Duration: ${metrics.duration}`,
    ].filter(Boolean);
  }

  if (type.toLowerCase().includes('strength')) {
    return [
      metrics.sets && `Sets: ${metrics.sets}`,
      metrics.reps && `Reps: ${metrics.reps}`,
      metrics.weight && `Weight: ${metrics.weight}`,
    ].filter(Boolean);
  }

  return [
    metrics.duration && `Duration: ${metrics.duration}`,
    metrics.intensity && `Intensity: ${metrics.intensity}`,
  ].filter(Boolean);
};

export default function DayWorkoutCard({
  day,
  workoutType,
  metrics,
  nutritionTip,
  isRestDay = false,
}: DayWorkoutCardProps) {
  const Icon = getWorkoutIcon(workoutType);
  const metricsDisplay = getMetricsDisplay(metrics, workoutType);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-[#f0f2f4] overflow-hidden mb-4">
      <div className="px-6 py-4">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0">
            <div className="bg-[#f0f2f4] rounded-xl p-3">
              <Icon size={24} className="text-[#111418]" />
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="text-lg font-bold text-[#111418] mb-1">{day}</h3>
            <p className="text-[#637088] text-sm">{workoutType}</p>
          </div>
        </div>

        {!isRestDay && (
          <div className="mt-4">
            <div className="grid grid-cols-2 gap-4">
              {metricsDisplay.map((metric, index) => (
                <div key={index} className="bg-[#f8f9fa] rounded-lg p-3">
                  <p className="text-sm text-[#111418]">{metric}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-4 border-t border-[#f0f2f4] pt-4">
          <div className="bg-[#f8f9fa] rounded-lg p-4">
            <h4 className="text-sm font-semibold text-[#111418] mb-2">Nutrition Tip</h4>
            <p className="text-sm text-[#637088]">{nutritionTip}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 