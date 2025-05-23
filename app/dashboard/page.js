// app/dashboard/page.js
'use client';

import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';

export default function DashboardPage() {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert('Logged out successfully!');
      router.push('/'); // Redirect to home/login page after logout
    } catch (err) {
      console.error('Logout Error:', err);
    }
  };

  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <p>Loading your personalized dashboard...</p>
      </div>
    );
  }

  if (error) {
    console.error("Authentication error:", error);
    return (
      <div style={styles.errorContainer}>
        <p>Error: {error.message}</p>
        <p>Please try logging in again.</p>
      </div>
    );
  }

  if (!user) {
    router.push('/'); 
    return null; 
  }

  // --- Image Strategy Placeholder Logic (Now using Firebase Storage URLs) ---
  // In a real app, this would come from Firestore based on user's first plan or current goal
  const defaultHeroImageUrl = "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Hero%2Fgabin-vallet-J154nEkpzlQ-unsplash.jpg?alt=media&token=bfcc204b-747f-494c-ac86-53b0f1f1c3b4"; 
  const heroImageForUser = defaultHeroImageUrl; // For now, always use the default hero image

  const pastPlanImages = {
    "Yoga for Beginners": "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Hero%2Fthe-nix-company-biX8sBfNcPc-unsplash.jpg?alt=media&token=21cdc6cb-d8e9-4e8f-9d97-238b0d798427",
    "Cardio Blast": "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Hero%2Frisen-wang-20jX9b35r_M-unsplash.jpg?alt=media&token=c94ff3e1-7dbd-49b9-82a2-37d6decfd7f4",
    "Strength Foundations": "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Hero%2Fsamuel-girven-VJ2s0c20qCo-unsplash.jpg?alt=media&token=0b51bc15-a0e1-4421-b43d-5102202208b7",
    "Endurance Build": "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Hero%2Fbradley-dunn-fjpl1yrNvNQ-unsplash.jpg?alt=media&token=d8a1d533-4afe-4703-b0cb-310353c70f6f",
    "Recovery & Mobility": "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Hero%2Fcarl-barcelo-nqUHQkuVj3c-unsplash.jpg?alt=media&token=748ecbe7-224f-4aa8-ae97-bcaa0d4dc0c2",
  };

  const pastPlanItemsData = [
    { title: "Yoga for Beginners", imageKey: "Yoga for Beginners" },
    { title: "Cardio Blast", imageKey: "Cardio Blast" },
    { title: "Strength Foundations", imageKey: "Strength Foundations" },
    { title: "Endurance Build", imageKey: "Endurance Build" },
    { title: "Recovery & Mobility", imageKey: "Recovery & Mobility" },
  ];

  // --- Dashboard Content (Visible after successful authentication) ---
  return (
    <div style={styles.fullPageContainer}>
      {/* Top Navigation Header - Based on Figma Design */}
      <header style={styles.header}>
        <div style={styles.headerLeft}>
          <h1 style={styles.logo}>TrainMeAI</h1>
        </div>
        <nav style={styles.navbarNav}>
          <a href="/dashboard" style={styles.navLink}>Dashboard</a>
          <a href="/training-plans" style={styles.navLink}>Training Plans</a>
          <a href="#" style={styles.navLink}>Community</a>
        </nav>
        <div style={styles.headerRight}>
          <span style={styles.searchIcon}>🔍</span> {/* Placeholder for Search */}
          <img 
            src="https://via.placeholder.com/40/222222/FAFAFA" // Placeholder for Profile Pic - Graphite background, Cloud White text
            alt="User Profile" 
            style={styles.profilePic} 
          />
          {/* Logout button can be hidden or in a dropdown, but visible for now for testing */}
          <button onClick={handleLogout} style={styles.logoutButton}>
            Logout
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main style={styles.mainContent}>
        {/* Hero Section - "Welcome back, Chloe" */}
        <section style={styles.heroSection}>
          <img 
            src={heroImageForUser} // Uses the dynamic hero image URL from Firebase Storage
            alt="Fitness journey" 
            style={styles.heroImage} 
          />
          <div style={styles.heroOverlay}>
            <h2 style={styles.heroTitle}>Welcome back, {user.displayName || user.email.split('@')[0]}</h2>
            <p style={styles.heroSubtitle}>Your fitness journey continues with us. Let's achieve your goals together.</p>
          </div>
        </section>

        {/* Overall Goal Section (Full width, no shadow/block as requested) */}
        <section style={styles.overallGoalSection}>
          <h3>Overall Goal</h3>
          <p>IronMan 2026 Copenhagen</p>
          <p style={{fontSize: '0.8em', color: '#777'}}>Target: TBA</p>
        </section>

        {/* Dashboard Layout - All remaining sections are now full width and stacked */}
        <section style={styles.dashboardLayout}>
          {/* Your AI Coach Card (Full width, with chat display) */}
          <div style={styles.cardAICoach}>
            <h3>Your AI Coach</h3>
            <div style={styles.chatDisplayArea}>
              {/* This is where the AI's conversation history will be displayed */}
              <p>FitCoach AI: How did you feel in the plan last week?</p>
              <p style={{textAlign: 'right'}}>You: I skipped some running due to lower back pain.</p>
              <p>FitCoach AI: Thanks for the honest feedback. Sorry about the lower back pain. Tell me more: where exactly is it, and when did it occur during your run?</p>
              <p style={{textAlign: 'right'}}>You: It was halfway through on the second run. It was to the left side during running.</p>
              <p>FitCoach AI: Got it. For Week 2, we'll pull back significantly on running. If pain persists, please see a doctor.</p>
              {/* More conversation lines will go here */}
            </div>
            <textarea
              placeholder="Type your message to FitCoach AI..."
              style={styles.chatInput}
              rows={3} // Start with 3 rows, user can expand
            />
            <button style={styles.sendButton}>Send</button>
          </div>

          {/* Current Training Plan Card (Full width) */}
          <div style={styles.cardCurrentPlan}>
            <h3>Current Training Plan</h3>
            <p>Strength Training Program</p>
            <p style={{fontSize: '0.8em', color: '#777'}}>Duration: 8 weeks | Focus: Strength Training | Start Date: July 15, 2025</p>
            <button style={styles.viewPlanButton}>View Plan</button>
          </div>

          {/* Past Training Plans Carousel (Full width) */}
          <div style={styles.cardPastPlansCarousel}>
            <h3>Past Training Plans</h3>
            <div style={styles.carouselContainer}>
              {pastPlanItemsData.map((item, index) => ( // Placeholder for 5 items
                <div key={index} style={styles.carouselItem}>
                  <img src={pastPlanImages[item.imageKey]} alt={item.title} style={styles.carouselImage} />
                  <p style={styles.carouselText}>{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Consistent across pages */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>&copy; {new Date().getFullYear()} FitCoach AI. All rights reserved.</p>
      </footer>
    </div>
  );
}


// --- Styles Object (Inline Styles for React Components) ---
// Using your brand identity color palette and typography
const styles = {
  // Global & Layout Styles
  fullPageContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#FAFAFA', // Cloud White for the overall page background
    color: '#222222', // Graphite for main text
  },
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    fontSize: '1.2rem',
    color: '#555',
  },
  errorContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    fontSize: '1.2rem',
    color: '#FF4C4C', // Pulse Coral for errors
  },

  // Header Styles
  header: {
    backgroundColor: '#FAFAFA', // Changed to Cloud White
    color: '#222222', // Changed to Graphite for text
    padding: '0.8rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)', // Slightly lighter shadow for white header
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000,
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    fontFamily: 'var(--font-sora), sans-serif',
    fontSize: '1.8rem',
    margin: 0,
    color: '#0047FF', // Electric Cobalt for logo highlight (contrasts on white)
  },
  navbarNav: {
    display: 'flex',
    gap: '1.5rem',
  },
  navLink: {
    color: '#222222', // Graphite
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: 'normal',
    transition: 'color 0.3s ease',
  },
  navLinkHover: {
    color: '#D1FF00', // Energy Lime
  },
  headerRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  searchIcon: {
    fontSize: '1.2rem',
    cursor: 'pointer',
    color: '#222222', // Changed to Graphite
  },
  profilePic: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#222222', // Placeholder background - Graphite
    cursor: 'pointer',
  },
  logoutButton: {
    backgroundColor: '#FF4C4C', // Pulse Coral
    color: '#FAFAFA', // Cloud White (still contrasts well on red)
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '0.85rem',
    fontFamily: 'var(--font-inter), sans-serif',
    marginLeft: '1rem',
    transition: 'background-color 0.3s ease',
  },

  // Main Content & Hero Section
  mainContent: {
    flexGrow: 1,
    width: '100%',
    paddingTop: '65px', // Offset for fixed header
    // Content will have its own padding
  },
  heroSection: {
    position: 'relative',
    width: '100%',
    height: '300px',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '2rem', // Spacing below hero
  },
  heroImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '0 2rem',
  },
  heroTitle: {
    fontFamily: 'var(--font-sora), sans-serif',
    fontSize: '3rem',
    color: '#FAFAFA',
    marginBottom: '0.5rem',
    lineHeight: '1.2',
  },
  heroSubtitle: {
    fontFamily: 'var(--font-inter), sans-serif',
    fontSize: '1.2rem',
    color: '#FAFAFA',
    maxWidth: '600px',
    lineHeight: '1.5',
  },

  // Overall Goal Section (Full width, no shadow/block)
  overallGoalSection: {
    padding: '1.5rem 2rem', // Padding within the section
    backgroundColor: '#FAFAFA', // Match page background
    color: '#222222', // Graphite for text
    fontFamily: 'var(--font-inter), sans-serif',
    maxWidth: '1200px', // Align with grid max-width
    margin: '0 auto 2rem auto', // Center and add bottom margin
    // No box-shadow or border-radius as requested "not in a block with shadows"
    borderBottom: '1px solid #eee', // Optional: subtle separator
  },

  // Dashboard Layout (CSS Grid for remaining stacked sections)
  dashboardLayout: {
    display: 'grid',
    gridTemplateColumns: '1fr', // All sections now span full width
    gap: '2rem', // Space between stacked sections
    padding: '0 2rem 2rem 2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  
  // Base Card Style (for sections that are "blocks with shadows")
  card: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '1rem',
    fontFamily: 'var(--font-inter), sans-serif',
  },

  // Specific Card Styles (Overrides/Additions to base card)
  cardAICoach: { // Full width, with chat display
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', // Align to start for text, but input/button centered
    gap: '1rem',
    fontFamily: 'var(--font-inter), sans-serif',
    width: '100%', // Ensure it takes full width of its grid column
  },
  aiCoachText: { // Text below AI Coach title
    textAlign: 'left', // Keep text left-aligned within its own p tag
    color: '#555', 
    width: '100%', // Ensure it takes full width
  },
  chatDisplayArea: { // Area where conversation history will be displayed
    height: '200px', // Fixed height for now, can be adjusted
    overflowY: 'auto', // Scrollable
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '1rem',
    backgroundColor: '#fefefe', // Slightly off-white for chat background
    width: '100%',
    display: 'flex', // For messages
    flexDirection: 'column',
    gap: '0.5rem',
  },
  chatInput: {
    width: 'calc(100% - 2rem)', // Full width minus padding
    padding: '0.8rem 1rem', // Padding inside input
    borderRadius: '8px',
    border: '1px solid #ddd',
    minHeight: '60px', // Taller default height
    resize: 'vertical', // User can resize vertically
    backgroundColor: '#f9f9f9',
    fontFamily: 'var(--font-inter), sans-serif',
    fontSize: '1rem',
    alignSelf: 'center', // Keep input centered
  },
  sendButton: {
    backgroundColor: '#0047FF', // Electric Cobalt
    color: '#FAFAFA',
    border: 'none',
    padding: '0.8rem 1.5rem',
    borderRadius: '8px',
    cursor: 'pointer',
    fontFamily: 'var(--font-space-grotesk), sans-serif',
    fontSize: '1rem',
    alignSelf: 'flex-end', // Aligned to right as per Figma
    marginTop: '0.5rem',
    transition: 'background-color 0.3s ease',
  },

  cardCurrentPlan: { // Full width
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '1rem',
    fontFamily: 'var(--font-inter), sans-serif',
    width: '100%', // Ensure it takes full width of its grid column
  },
  viewPlanButton: {
    backgroundColor: '#D1FF00', // Energy Lime
    color: '#222222', // Graphite
    border: 'none',
    padding: '0.8rem 1.5rem',
    borderRadius: '8px',
    cursor: 'pointer',
    fontFamily: 'var(--font-space-grotesk), sans-serif',
    fontSize: '1rem',
    marginTop: '1rem',
    transition: 'background-color 0.3s ease',
  },

  cardPastPlansCarousel: { // Full width
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '1rem',
    fontFamily: 'var(--font-inter), sans-serif',
    width: '100%', // Ensure it takes full width of its grid column
    overflowX: 'hidden',
  },
  carouselContainer: {
    display: 'flex',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    gap: '1rem',
    paddingBottom: '10px',
    width: '100%',
    MsOverflowStyle: 'none',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  carouselItem: {
    flex: '0 0 auto',
    width: '150px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
  },
  carouselImage: {
    width: '100%',
    height: '100px',
    borderRadius: '8px',
    objectFit: 'cover',
  },
  carouselText: {
    fontSize: '0.9em',
    color: '#555',
  },

  // Footer Styles
  footer: {
    backgroundColor: '#222222', // Graphite
    color: '#FAFAFA', // Cloud White
    padding: '1rem 2rem',
    textAlign: 'center',
    marginTop: 'auto',
    width: '100%',
  },
  footerText: {
    margin: 0,
    fontSize: '0.9rem',
  },
};