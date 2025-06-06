// app/training-plans/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { Plus, Sparkles, MessageCircle } from 'lucide-react';

export default function TrainingPlansPage() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const [userProfile, setUserProfile] = useState({
    subscription: 'free',
    plansGenerated: 0,
    maxPlans: 2,
    programs: []
  });

  useEffect(() => {
    if (!user && !loading) {
      router.push('/');
      return;
    }

    // Load user profile
    const loadUserProfile = async () => {
      if (user) {
        const userRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userRef);
          if (userDoc.exists()) {
          setUserProfile(userDoc.data() as any);
        }
      }
    };

    loadUserProfile();
  }, [user, loading, router]);

  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.loadingSpinner}></div>
        <p>Loading your training plans...</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const hasPlans = userProfile.programs && userProfile.programs.length > 0;

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>Training Plans</h1>
              <button
          style={styles.createButton}
          onClick={() => router.push('/training-plans/new')}
        >
          <Plus />
          <span>Create New Plan</span>
            </button>
      </div>

      {/* Plans List or Empty State */}
      {hasPlans ? (
        <div style={styles.plansGrid}>
          {userProfile.programs.map((program: any) => (
            <div key={program.id} style={styles.planCard}>
              <div style={styles.planHeader}>
                <h3 style={styles.planTitle}>{program.name}</h3>
                <span style={styles.planStatus}>{program.status}</span>
              </div>
              <div style={styles.planStats}>
                <div style={styles.statItem}>
                  <span style={styles.statValue}>Week {program.weeklyPlans?.length || 1}</span>
                  <span style={styles.statLabel}>Current</span>
                </div>
                <div style={styles.statItem}>
                  <span style={styles.statValue}>{program.weeklyPlans?.[0]?.workouts?.length || 0}</span>
                  <span style={styles.statLabel}>Workouts</span>
                </div>
              </div>
                <button
                style={styles.viewButton}
                onClick={() => router.push(`/training-plans/${program.id}`)}
              >
                View Plan
                </button>
            </div>
          ))}
        </div>
      ) : (
        <div style={styles.emptyState}>
          <div style={styles.emptyIcon}>
            <Sparkles size={48} />
          </div>
          <h2>No Training Plans Yet</h2>
          <p>Start by chatting with your AI coach to create a personalized training program that fits your goals and lifestyle.</p>
          <div style={styles.emptyActions}>
            <button
              style={styles.chatButton}
              onClick={() => router.push('/dashboard')}
            >
              <MessageCircle size={20} />
              <span>Chat with AI Coach</span>
            </button>
            <button
              style={styles.createFirstButton}
              onClick={() => router.push('/training-plans/new')}
            >
              <Plus size={20} />
              <span>Create Manual Plan</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  loadingContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    gap: '1rem',
  },
  loadingSpinner: {
    width: '40px',
    height: '40px',
    border: '4px solid #f3f3f3',
    borderTop: '4px solid #0047FF',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
  },
  title: {
    fontSize: '2rem',
    color: '#222',
  },
  createButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1.5rem',
    backgroundColor: '#0047FF',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  plansGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '1.5rem',
  },
  planCard: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '12px',
    border: '1px solid #eee',
  },
  planHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '1rem',
  },
  planTitle: {
    fontSize: '1.25rem',
    color: '#222',
    margin: 0,
  },
  planStatus: {
    padding: '0.25rem 0.75rem',
    backgroundColor: '#22C55E',
    color: 'white',
    borderRadius: '20px',
    fontSize: '0.875rem',
  },
  planStats: {
    display: 'flex',
    gap: '2rem',
    marginBottom: '1.5rem',
  },
  statItem: {
    textAlign: 'center' as const,
  },
  statValue: {
    display: 'block',
    fontSize: '1.5rem',
    fontWeight: 'bold' as const,
    color: '#0047FF',
  },
  statLabel: {
    fontSize: '0.875rem',
    color: '#666',
  },
  viewButton: {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#0047FF',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  emptyState: {
    textAlign: 'center' as const,
    padding: '4rem',
    backgroundColor: 'white',
    borderRadius: '12px',
    border: '1px solid #eee',
  },
  emptyIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80px',
    height: '80px',
    backgroundColor: '#f3f4f6',
    borderRadius: '50%',
    margin: '0 auto 1.5rem',
    color: '#9ca3af',
  },
  emptyActions: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    marginTop: '1.5rem',
    flexWrap: 'wrap' as const,
  },
  chatButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1.5rem',
    backgroundColor: '#111827',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  createFirstButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1.5rem',
    backgroundColor: '#0047FF',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
};
