import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase';
import { ProgramService } from '@/lib/services/program.service';
import { SportType, DifficultyLevel } from '@/lib/types/program';
import { GoalType, UserGoal } from '@/lib/types/user';

interface ProgramCreatorProps {
  onClose: () => void;
  onSuccess: (programId: string) => void;
  initialType?: string | null;
}

export default function ProgramCreator({ onClose, onSuccess, initialType }: ProgramCreatorProps) {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [type, setType] = useState(initialType || '');

  const [formData, setFormData] = useState({
    name: '',
    type: '' as SportType,
    difficulty: '' as DifficultyLevel,
    goal: {
      type: '' as GoalType,
      target: {
        value: 0,
        unit: '',
      },
      startDate: new Date(),
      currentValue: 0,
      milestones: [] as UserGoal['milestones'],
    },
    totalWeeks: 8,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleGoalChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      goal: {
        ...prev.goal,
        [name]: value
      }
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    try {
      setLoading(true);
      setError('');

      // Create initial milestone based on target
      const initialMilestone = {
        date: new Date(formData.goal.startDate),
        value: formData.goal.target.value * 0.25, // 25% of target
        achieved: false,
      };

      const midMilestone = {
        date: new Date(formData.goal.startDate),
        value: formData.goal.target.value * 0.5, // 50% of target
        achieved: false,
      };

      const finalMilestone = {
        date: new Date(formData.goal.startDate),
        value: formData.goal.target.value, // 100% of target
        achieved: false,
      };

      const programId = await ProgramService.createProgram(user.uid, {
        name: formData.name,
        type: formData.type,
        difficulty: formData.difficulty,
        goal: {
          id: Math.random().toString(36).substr(2, 9),
          type: formData.goal.type,
          target: formData.goal.target,
          startDate: formData.goal.startDate,
          currentValue: 0,
          milestones: [initialMilestone, midMilestone, finalMilestone],
        },
        totalWeeks: formData.totalWeeks,
      });

      onSuccess(programId);
      router.push(`/programs/${programId}`);
    } catch (err) {
      setError('Failed to create program. Please try again.');
      console.error('Error creating program:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-lg w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Create New Program</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 && (
            <>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Program Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Sport Type
                  </label>
                  <select
                    name="type"
                    value={type}
                    onChange={(e) => {
                      setType(e.target.value);
                      handleInputChange(e);
                    }}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select a sport</option>
                    <optgroup label="Endurance Sports">
                      <option value="running">Running</option>
                      <option value="cycling">Cycling</option>
                      <option value="swimming">Swimming</option>
                      <option value="triathlon">Triathlon</option>
                      <option value="rowing">Rowing</option>
                    </optgroup>
                    <optgroup label="Strength & Power Sports">
                      <option value="weightlifting">Weightlifting</option>
                      <option value="powerlifting">Powerlifting</option>
                      <option value="track_field">Track & Field</option>
                      <option value="rock_climbing">Rock Climbing</option>
                    </optgroup>
                    <optgroup label="Agility & Speed Sports">
                      <option value="soccer">Soccer</option>
                      <option value="basketball">Basketball</option>
                      <option value="tennis">Tennis</option>
                      <option value="boxing">Boxing</option>
                      <option value="martial_arts">Martial Arts</option>
                    </optgroup>
                    <optgroup label="Flexibility & Bodyweight">
                      <option value="yoga">Yoga</option>
                      <option value="pilates">Pilates</option>
                      <option value="calisthenics">Calisthenics</option>
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Difficulty Level
                  </label>
                  <select
                    name="difficulty"
                    value={formData.difficulty}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select difficulty</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                    <option value="elite">Elite</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                >
                  Next
                </button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Goal Type
                  </label>
                  <select
                    name="type"
                    value={formData.goal.type}
                    onChange={handleGoalChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select a goal type</option>
                    <option value="weight_loss">Weight Loss</option>
                    <option value="race">Race Preparation</option>
                    <option value="strength">Strength Building</option>
                    <option value="endurance">Endurance</option>
                    <option value="general_fitness">General Fitness</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Target Value
                  </label>
                  <input
                    type="number"
                    name="target.value"
                    value={formData.goal.target.value}
                    onChange={handleGoalChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Unit
                  </label>
                  <input
                    type="text"
                    name="target.unit"
                    value={formData.goal.target.unit}
                    onChange={handleGoalChange}
                    placeholder="e.g., kg, miles, minutes"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Program Duration (weeks)
                  </label>
                  <input
                    type="number"
                    name="totalWeeks"
                    value={formData.totalWeeks}
                    onChange={handleInputChange}
                    min="1"
                    max="52"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              {error && (
                <p className="text-red-500 text-sm mt-2">{error}</p>
              )}

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-gray-600 hover:text-gray-800"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
                >
                  {loading ? 'Creating...' : 'Create Program'}
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
} 