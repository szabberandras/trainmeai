// store.ts
import { create } from 'zustand';
import { Program, TrainingPlan } from '@/types'; // Import types

interface AppState {
  activeProgram: Program | null;
  activePlan: TrainingPlan | null;
  isLoading: boolean;
  error: string | null;
  showAiCoach: boolean; // Add showAiCoach to the store
  setActiveProgram: (program: Program | null) => void;
  setActivePlan: (plan: TrainingPlan | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setShowAiCoach: (show: boolean) => void; // Add setter for showAiCoach
}

export const useStore = create<AppState>((set) => ({
  activeProgram: null,
  activePlan: null,
  isLoading: false,
  error: null,
  showAiCoach: false, // Initialize showAiCoach
  setActiveProgram: (program) => set({ activeProgram: program }),
  setActivePlan: (plan) => set({ activePlan: plan }),
  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),
  setShowAiCoach: (show) => set({ showAiCoach: show }), // Implement setter
}));
