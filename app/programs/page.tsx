'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { Search, ChevronLeft, ChevronRight, Target, TrendingUp, Flame, Crown, MessageSquare } from 'lucide-react';
import LayoutClientWrapper from '@/app/components/LayoutClientWrapper';

// Type definitions
interface UserProfile {
  subscription: string;
  plansGenerated: number;
  maxPlans: number;
  programs: any[];
  preferences: any;
}

const FEATURED_PROGRAMS = [
  {
    id: 'beginner-running',
    title: 'Beginner Running Program',
    duration: '4 weeks',
    intensity: 'Low Intensity',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQ1ty0wqBOD2uWIcnK7B6HwykZx9FaSTUHIP6ore4IYMt9k8splo7nRCpnFPpSksYQo3Rsrl51-99np4ADxC6vlAsCX8A4lgc1bUzJmEaJd5uqywp6Htk_UpCKMOkIk7rhr4mhpnfLFTWecCCOaU6z7oV8sMUkGBXvzNdVauf70NH_IRnP6j1j82ZGFqQFzu2unMkqwDf9olEyP6BimXGezbWON1W71UcJG2XIdau_GGDV89TlPmb0EGOVeSUNqmc-rZXTWY4-QJV6'
  },
  {
    id: 'intermediate-strength',
    title: 'Intermediate Strength Training',
    duration: '6 weeks',
    intensity: 'Medium Intensity',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC843Xs_GMixhUlRpnXtZeI06kjIWIVvZRaVb2gX__jaRXtEf7RIG2gWDUj_eFFEJfSZRgeWzPHJsKlwmwjphTQm67FnGvJa-B8Fj4RyuL8odd3PH1MAzTORZxrayvcTgDovsA1IN2gTqaw2EhLQ2AM7JYN2gj4GWP37ceBOXK8tzdWWljtLsNDaG6kAE9bOZNX-otmo77_jfJU9DNCpS8_tM8koj_iz2m402J61LnVqtVbTl95HZ_ZYA0nb6h3_bASbr_iSsOrwOZ5'
  },
  {
    id: 'advanced-yoga',
    title: 'Advanced Yoga Flow',
    duration: '8 weeks',
    intensity: 'High Intensity',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXfUH3Nd9451XwnhP6CAdS8pb0aJUSr-AipSQskPuj82Pgr7NnHJ5CEUuan_IFbyCf8cL7f9X4DaHnsK0ERsIqdul4XPZzt0rayyw06rEFsjLx4JHNctNAkEMR0GwWgLI1u3FT3tjvGtbWoqr1eyeg28RS-ozy0-vo7bOQ_QCAS4DPt111tzdj063SUqkye42Y4c0xesB-aZxbEGojnj3_Yl7VtTTwbJAvhzlqZBK6ieOQpWTnyorOgZGnSX_5zjzp3pzyhpEmuOnD'
  },
  {
    id: 'hiit-blast',
    title: 'HIIT Blast',
    duration: '2 weeks',
    intensity: 'High Intensity',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGAejcJ6CqRKbfzBwa0yUYhAfdzKVhkiqv1E338aj8OAchGw2sOCG5qe8UoqAYAHiQCjsnKzBRy7hhXPIL1V3FHPzHcCZZNxStHfL_lZhqd-YEixgeNV-_SinTge2ryALk_VIJM72a1quIbbkVvzmvmUbvMoOp1EAktAT4GlGtYRwirYdBYgv7-YiBMDJm4uoUzHNzcJbnnySy2G1vp6HXXtNdP6Vm4_8vCM5qtbSBrk_Fe3TkrSK3GGffmPIHepjV_QYp_sgKLe7N'
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
    preferences: {}
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
              preferences: userData.preferences || {}
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
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="flex flex-col max-w-[960px] flex-1">
          {/* KPIs Section */}
          <div className="flex flex-col gap-4 mb-8">
            <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">
              Your Progress
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <Target className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold text-[#111418]">Programs Created</h3>
                </div>
                <p className="text-2xl font-bold text-[#111418]">{userProfile.plansGenerated}</p>
                <p className="text-sm text-[#637088]">of {userProfile.maxPlans} {userProfile.subscription} limit</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <h3 className="font-semibold text-[#111418]">Active Programs</h3>
                </div>
                <p className="text-2xl font-bold text-[#111418]">{activePrograms.length}</p>
                <p className="text-sm text-[#637088]">Currently training</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <Flame className="w-5 h-5 text-orange-600" />
                  <h3 className="font-semibold text-[#111418]">Workout Streak</h3>
                </div>
                <p className="text-2xl font-bold text-[#111418]">7</p>
                <p className="text-sm text-[#637088]">days in a row</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <Crown className="w-5 h-5 text-yellow-600" />
                  <h3 className="font-semibold text-[#111418]">Subscription</h3>
                </div>
                <p className="text-2xl font-bold text-[#111418] capitalize">{userProfile.subscription}</p>
                <p className="text-sm text-[#637088]">
                  {userProfile.subscription === 'free' ? 'Upgrade for unlimited' : 'Unlimited plans'}
                </p>
              </div>
            </div>
          </div>

          {/* Empty State or Programs Content */}
          {!hasActivePrograms ? (
            /* Empty State CTA */
            <div className="flex flex-col items-center justify-center py-16 px-4">
              <div className="bg-[#f0f2f4] rounded-xl p-12 text-center max-w-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-[#111418] text-2xl font-bold mb-4">
                  Ready to Start Your Fitness Journey?
                </h3>
                <p className="text-[#637088] mb-8 text-lg">
                  You don&apos;t have any active training programs yet. Let our AI coach create a personalized program tailored to your goals and fitness level.
                </p>
                <button
                  onClick={() => router.push('/dashboard#ai-chat')}
                  className="flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-colors mx-auto"
                >
                  <MessageSquare className="w-5 h-5" />
                  Chat with AI Coach
                </button>
                <p className="text-sm text-[#637088] mt-4">
                  Free plan: {userProfile.plansGenerated}/{userProfile.maxPlans} programs used
                </p>
              </div>
            </div>
          ) : (
            /* Programs Content */
            <>
              {/* Header Section */}
              <div className="flex flex-wrap justify-between gap-3 p-4">
                <div className="flex min-w-72 flex-col gap-3">
                  <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight">
                    Training Programs
                  </p>
                  <p className="text-[#637088] text-sm font-normal leading-normal">
                    Explore our curated programs designed to help you achieve your fitness goals. Each program is tailored to different fitness levels and interests.
                  </p>
                </div>
              </div>

              {/* Search Bar */}
              <div className="px-4 py-3">
                <label className="flex flex-col min-w-40 h-12 w-full">
                  <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                    <div className="text-[#637088] flex border-none bg-[#f0f2f4] items-center justify-center pl-4 rounded-l-xl border-r-0">
                      <Search size={24} />
                    </div>
                    <input
                      placeholder="Search programs"
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-full placeholder:text-[#637088] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                    />
                  </div>
                </label>
              </div>

              {/* Categories */}
              <div className="flex gap-3 p-3 flex-wrap pr-4">
                {PROGRAM_CATEGORIES.map((category) => (
                  <div key={category} className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f0f2f4] px-4">
                    <p className="text-[#111418] text-sm font-medium leading-normal">{category}</p>
                  </div>
                ))}
              </div>

              {/* Program Grid */}
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                {FEATURED_PROGRAMS.map((program) => (
                  <div key={program.id} className="flex flex-col gap-3 pb-3">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                      style={{ backgroundImage: `url(${program.image})` }}
                    />
                    <div>
                      <p className="text-[#111418] text-base font-medium leading-normal">
                        {program.title}
                      </p>
                      <p className="text-[#637088] text-sm font-normal leading-normal">
                        {program.duration}, {program.intensity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center p-4">
                <a href="#" className="flex size-10 items-center justify-center">
                  <ChevronLeft size={18} className="text-[#111418]" />
                </a>
                <a className="text-sm font-bold leading-normal tracking-[0.015em] flex size-10 items-center justify-center text-[#111418] rounded-full bg-[#f0f2f4]" href="#">
                  1
                </a>
                <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#111418] rounded-full" href="#">
                  2
                </a>
                <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#111418] rounded-full" href="#">
                  3
                </a>
                <a href="#" className="flex size-10 items-center justify-center">
                  <ChevronRight size={18} className="text-[#111418]" />
                </a>
              </div>

              {/* Create Your Own Program CTA */}
              <div className="mt-8 p-4">
                <div className="bg-[#f0f2f4] rounded-xl p-8 text-center">
                  <h3 className="text-[#111418] text-xl font-bold mb-4">
                    Want a Personalized Training Program?
                  </h3>
                  <p className="text-[#637088] mb-6">
                    Let our AI coach create a custom program tailored to your specific goals and fitness level.
                  </p>
                  <button
                    onClick={() => router.push('/dashboard#ai-chat')}
                    className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Create Custom Program
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </LayoutClientWrapper>
  );
} 