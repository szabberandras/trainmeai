// types/index.d.ts

// Extend NextAuth's Session and JWT types to include custom fields
import 'next-auth';
import 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      subscription?: 'free' | 'premium' | 'yearly' | 'monthly'; // Adjust as per your types
      email?: string | null;
      name?: string | null;
      image?: string | null;
    };
  }

  interface User {
    id: string;
    subscription?: 'free' | 'premium'; // Add your custom user properties
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    subscription?: 'free' | 'premium'; // Add your custom user properties
  }
}

// Define types for your application's data structures
export interface Program {
  id: string;
  name: string;
  type: string; // e.g., 'running', 'strength', 'triathlon'
  startDate: string; // YYYY-MM-DD
  status: 'active' | 'completed' | 'paused';
  weeklyPlans: WeeklyPlan[];
  conversation?: any; // The conversation history that led to this plan
}

export interface WeeklyPlan {
  weekNumber: number;
  startDate: string; // YYYY-MM-DD
  workouts: Workout[];
}

export interface Workout {
  id: number;
  day: string; // e.g., 'Monday', 'Tuesday'
  type: string; // e.g., 'running', 'strength', 'cardio', 'rest'
  title: string;
  summary: string;
  intensity: number; // 0-100
  details?: {
    [key: string]: any; // Flexible for various workout details (distance, sets, reps, notes)
  };
}

export interface AiMessage {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: string; // ISO string
}

// Extend the global process.env for environment variables
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_FIREBASE_API_KEY: string;
      NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: string;
      NEXT_PUBLIC_FIREBASE_PROJECT_ID: string;
      NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: string;
      NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: string;
      NEXT_PUBLIC_FIREBASE_APP_ID: string;
      NEXT_PUBLIC_GOOGLE_CLIENT_ID: string;
      NEXT_PUBLIC_GOOGLE_CLIENT_SECRET: string;
      GEMINI_API_KEY_SERVER: string;
      AUTH_SECRET: string; // NextAuth secret
    }
  }
}