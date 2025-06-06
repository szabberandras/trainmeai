'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { Search, ChevronLeft, ChevronRight, Target, TrendingUp, Flame, Crown, MessageSquare, Sparkles } from 'lucide-react';
import LayoutClientWrapper from '@/app/components/LayoutClientWrapper';

// Type definitions
interface UserProfile {
  subscription: string;
  plansGenerated: number;
  maxPlans: number;
  programs: any[];
  preferences: any;
  workoutStreak?: number;
  totalWorkouts?: number;
}

const FEATURED_PROGRAMS = [
  {
    id: 'beginner-running',
    title: 'Beginner Running Program',
    duration: '4 weeks',
    intensity: 'Low Intensity',
    image: 'https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Hero%2Frisen-wang-20jX9b35r_M-unsplash.jpg?alt=media&token=c94ff3e1-7dbd-49b9-82a2-37d6decfd7f4'
  },
  {
    id: 'intermediate-strength',
    title: 'Intermediate Strength Training',
    duration: '6 weeks',
    intensity: 'Medium Intensity',
    image: 'https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Hero%2Fsamuel-girven-VJ2s0c20qCo-unsplash.jpg?alt=media&token=0b51bc15-a0e1-4421-b43d-5102202208b7'
  },
  {
    id: 'advanced-yoga',
    title: 'Advanced Yoga Flow',
    duration: '8 weeks',
    intensity: 'High Intensity',
    image: 'https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Hero%2Fthe-nix-company-biX8sBfNcPc-unsplash.jpg?alt=media&token=21cdc6cb-d8e9-4e8f-9d97-238b0d798427'
  },
  {
    id: 'hiit-blast',
    title: 'HIIT Blast',
    duration: '2 weeks',
    intensity: 'High Intensity',
    image: 'https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Hero%2Fcarl-barcelo-nqUHQkuVj3c-unsplash.jpg?alt=media&token=748ecbe7-224f-4aa8-ae97-bcaa0d4dc0c2'
  }
];

const PROGRAM_CATEGORIES = ['Running', 'Strength Training', 'Yoga', 'HIIT'];

export default function ProgramsPage() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const [userProfile, setUserProfile] = useState<UserProfile>({
    subscription: 'free',
    plansGenerated: 0,
    maxPlans: 2,
    programs: [],
    preferences: {},
    workoutStreak: 0,
    totalWorkouts: 0
  });
  const [isLoadingProfile, setIsLoadingProfile] = useState(true);

  useEffect(() => {
    if (!user && !loading) {
      router.push('/');
      return;
    }

    const loadUserProfile = async () => {
      if (user) {
        try {
          const userDocRef = doc(db, 'users', user.uid);
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setUserProfile({
              subscription: userData.subscription || 'free',
              plansGenerated: userData.plansGenerated || 0,
              maxPlans: userData.maxPlans || 2,
              programs: userData.programs || [],
              preferences: userData.preferences || {},
              workoutStreak: userData.workoutStreak || 0,
              totalWorkouts: userData.totalWorkouts || 0
            });
          }
        } catch (error) {
          console.error('Error loading user profile:', error);
        } finally {
          setIsLoadingProfile(false);
        }
      }
    };

    loadUserProfile();
  }, [user, loading, router]);

  if (loading || isLoadingProfile) {
    return (
      <LayoutClientWrapper>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-gray-600">Loading...</div>
        </div>
      </LayoutClientWrapper>
    );
  }

  if (!user) {
    return null;
  }

  const activePrograms = userProfile.programs?.filter((p: any) => p.status === 'active') || [];
  const hasActivePrograms = activePrograms.length > 0;

  return (
    <LayoutClientWrapper>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="flex flex-col max-w-[960px] flex-1">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-gray-900 text-[32px] font-light leading-tight tracking-wide mb-2">
                Training Programs
              </h1>
              <p className="text-gray-600 text-lg">
                Discover and manage your personalized fitness programs
              </p>
            </div>

            {/* KPIs Section */}
            <div className="mb-8">
              <h2 className="text-gray-900 text-[22px] font-light leading-tight tracking-wide mb-6">
                Your Progress
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white/95 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-blue-100 rounded-2xl flex items-center justify-center">
                      <Target className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="font-medium text-gray-900">Programs Created</h3>
                  </div>
                  <p className="text-2xl font-light text-gray-900">{userProfile.plansGenerated}</p>
                  <p className="text-sm text-gray-500">of {userProfile.maxPlans} {userProfile.subscription} limit</p>
                </div>

                <div className="bg-white/95 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-green-100 rounded-2xl flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                    </div>
                    <h3 className="font-medium text-gray-900">Active Programs</h3>
                  </div>
                  <p className="text-2xl font-light text-gray-900">{activePrograms.length}</p>
                  <p className="text-sm text-gray-500">Currently training</p>
                </div>

                <div className="bg-white/95 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-orange-100 rounded-2xl flex items-center justify-center">
                      <Flame className="w-5 h-5 text-orange-600" />
                    </div>
                    <h3 className="font-medium text-gray-900">Workout Streak</h3>
                  </div>
                  <p className="text-2xl font-light text-gray-900">{userProfile.workoutStreak}</p>
                  <p className="text-sm text-gray-500">
                    {userProfile.workoutStreak === 0 ? 'Start your first workout!' : 'days in a row'}
                  </p>
                </div>

                <div className="bg-white/95 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-yellow-100 rounded-2xl flex items-center justify-center">
                      <Crown className="w-5 h-5 text-yellow-600" />
                    </div>
                    <h3 className="font-medium text-gray-900">Total Workouts</h3>
                  </div>
                  <p className="text-2xl font-light text-gray-900">{userProfile.totalWorkouts}</p>
                  <p className="text-sm text-gray-500">
                    {userProfile.totalWorkouts === 0 ? 'Ready to start!' : 'completed'}
                  </p>
                </div>
              </div>
            </div>

            {/* Empty State or Programs Content */}
            {!hasActivePrograms ? (
              /* Empty State CTA */
              <div className="bg-white/95 backdrop-blur-xl border border-gray-200 rounded-3xl p-12 shadow-lg text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="text-gray-400" size={24} />
                </div>
                <h3 className="text-gray-900 font-medium text-2xl mb-4">
                  Ready to Start Your Fitness Journey?
                </h3>
                <p className="text-gray-500 mb-8 text-lg max-w-2xl mx-auto">
                  You don&apos;t have any active training programs yet. Let our AI coach create a personalized program tailored to your goals and fitness level.
                </p>
                <div className="flex gap-4 justify-center">
                  <button
                    onClick={() => router.push('/dashboard#ai-chat')}
                    className="flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-gray-800 transition-colors"
                  >
                    <MessageSquare className="w-5 h-5" />
                    Chat with AI Coach
                  </button>
                  <button
                    onClick={() => router.push('/training-plans/new')}
                    className="flex items-center gap-3 bg-gray-100 text-gray-700 px-8 py-4 rounded-xl text-lg font-medium hover:bg-gray-200 transition-colors"
                  >
                    <Target className="w-5 h-5" />
                    Browse Templates
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-6">
                  Free plan: {userProfile.plansGenerated}/{userProfile.maxPlans} programs used
                </p>
              </div>
            ) : (
              /* Programs Content */
              <>
                {/* Search Bar */}
                <div className="mb-6">
                  <div className="bg-white/95 backdrop-blur-xl border border-gray-200 rounded-2xl p-4 shadow-lg">
                    <div className="flex items-center gap-3">
                      <Search className="text-gray-400" size={20} />
                      <input
                        placeholder="Search programs..."
                        className="flex-1 bg-transparent border-none outline-none text-gray-900 placeholder:text-gray-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Categories */}
                <div className="flex gap-3 mb-6 flex-wrap">
                  {PROGRAM_CATEGORIES.map((category) => (
                    <div key={category} className="bg-white/95 backdrop-blur-xl border border-gray-200 rounded-full px-4 py-2 shadow-sm">
                      <p className="text-gray-700 text-sm font-medium">{category}</p>
                    </div>
                  ))}
                </div>

                {/* Program Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {FEATURED_PROGRAMS.map((program) => (
                    <div key={program.id} className="bg-white/95 backdrop-blur-xl border border-gray-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                      <div
                        className="w-full h-48 bg-center bg-cover"
                        style={{ backgroundImage: `url(${program.image})` }}
                      />
                      <div className="p-6">
                        <h3 className="text-gray-900 font-medium text-lg mb-2">
                          {program.title}
                        </h3>
                        <p className="text-gray-500 text-sm mb-4">
                          {program.duration} • {program.intensity}
                        </p>
                        <button className="w-full bg-gray-900 text-white py-2 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors">
                          Start Program
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Create Your Own Program CTA */}
                <div className="bg-white/95 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 shadow-lg text-center">
                  <h3 className="text-gray-900 font-medium text-xl mb-4">
                    Want a Personalized Training Program?
                  </h3>
                  <p className="text-gray-500 mb-6">
                    Let our AI coach create a custom program tailored to your specific goals and fitness level.
                  </p>
                  <button
                    onClick={() => router.push('/dashboard#ai-chat')}
                    className="bg-gray-900 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors"
                  >
                    Create Custom Program
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </LayoutClientWrapper>
  );
} 