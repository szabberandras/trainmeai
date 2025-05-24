// app/dashboard/page.js
'use client';

// No direct imports for useRouter, useAuthState, auth, signOut here;
// These are now handled in LayoutClientWrapper (the global layout component).

export default function DashboardPage() {
  // Dummy user for display if context is not fully wired yet
  // In a real app, you'd get the actual user from LayoutClientWrapper context or prop drilling.
  const dummyUser = { email: "user@example.com", displayName: "Chloe" }; 
  
  // --- Image Strategy Placeholder Logic (Using Firebase Storage URLs) ---
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

  // --- Dashboard Content ---
  return (
    <div style={styles.dashboardContentWrapper}> {/* Wrapper for dashboard specific content */}
      {/* Hero Section - "Welcome back, Chloe" */}
      <section style={styles.heroSection}>
        <img
          src={heroImageForUser} // Uses the dynamic hero image URL from Firebase Storage
          alt="Fitness journey"
          style={styles.heroImage}
        />
        <div style={styles.heroOverlay}>
          <h2 style={styles.heroTitle}>Welcome back, {dummyUser.displayName || dummyUser.email.split('@')[0]}</h2> {/* Using dummyUser for now */}
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
          <div className="hide-scrollbar" style={styles.chatDisplayArea}> {/* Added class */}
            {/* This is where the AI's conversation history will be displayed */}
            <p>FitCoach AI: How did you feel in the plan last week?</p>
            <p style={{textAlign: 'right'}}>You: I skipped some running due to lower back pain.</p>
            <p>FitCoach AI: Thanks for the honest feedback. Sorry about the lower back pain. Tell me more: where exactly is it, and when did it occur during your run?</p>
            <p>FitCoach AI: Got it. For Week 2, we'll pull back significantly on running. If pain persists, please see a doctor.</p>
            {/* More conversation lines will go here */}
          </div>
          <textarea
            placeholder="Type your message to FitCoach AI..."
            style={styles.chatInput}
            rows={3}
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
        <div className="hide-scrollbar" style={styles.cardPastPlansCarousel}> {/* Added class */}
          <h3>Past Training Plans</h3>
          <div style={styles.carouselContainer}>
            {pastPlanItemsData.map((item, index) => (
              <div key={index} style={styles.carouselItem}>
                <img src={pastPlanImages[item.imageKey]} alt={item.title} style={styles.carouselImage} />
                <p style={styles.carouselText}>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


// --- Styles Object (Inline Styles for React Components) ---
// Note: Global layout styles like fullPageContainer and mainContent are now in app/layout.js
const styles = {
  dashboardContentWrapper: { // Wrapper for dashboard specific content
    width: '100%',
    padding: '2rem', // Overall padding for dashboard content
    paddingTop: '65px', // Offset for global fixed header from layout.js
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

  // Hero Section
  heroSection: {
    position: 'relative',
    width: '100%',
    height: '300px',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '2rem', // Spacing below hero
    borderRadius: '12px', // Match card borders
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
    color: 'white',
    fontFamily: 'var(--font-inter), sans-serif',
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

  // Overall Goal Section
  overallGoalSection: {
    padding: '1.5rem', // Padding within the section
    backgroundColor: '#FAFAFA', // Match page background
    color: '#222222', // Graphite for text
    fontFamily: 'var(--font-inter), sans-serif',
    maxWidth: '1200px', // Align with grid max-width
    margin: '0 auto 2rem auto', // Center and add bottom margin
    borderBottom: '1px solid #eee', // Optional: subtle separator
  },

  // Dashboard Layout (CSS Grid for remaining stacked sections)
  dashboardLayout: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '2rem',
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
  cardAICoach: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '1rem',
    fontFamily: 'var(--font-inter), sans-serif',
    width: '100%',
  },
  aiCoachText: {
    textAlign: 'left',
    color: '#555',
    width: '100%',
  },
  chatDisplayArea: {
    height: '200px',
    overflowY: 'auto',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '1rem',
    backgroundColor: '#fefefe',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  chatInput: {
    width: 'calc(100% - 2rem)',
    padding: '0.8rem 1rem',
    borderRadius: '8px',
    border: '1px solid #ddd',
    minHeight: '60px',
    resize: 'vertical',
    backgroundColor: '#f9f9f9',
    fontFamily: 'var(--font-inter), sans-serif',
    fontSize: '1rem',
    alignSelf: 'center',
  },
  sendButton: {
    backgroundColor: '#0047FF',
    color: '#FAFAFA',
    border: 'none',
    padding: '0.8rem 1.5rem',
    borderRadius: '8px',
    cursor: 'pointer',
    fontFamily: 'var(--font-space-grotesk), sans-serif',
    fontSize: '1rem',
    alignSelf: 'flex-end',
    marginTop: '0.5rem',
    transition: 'background-color 0.3s ease',
  },

  cardCurrentPlan: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '1rem',
    fontFamily: 'var(--font-inter), sans-serif',
    width: '100%',
  },
  viewPlanButton: {
    backgroundColor: '#D1FF00',
    color: '#222222',
    border: 'none',
    padding: '0.8rem 1.5rem',
    borderRadius: '8px',
    cursor: 'pointer',
    fontFamily: 'var(--font-space-grotesk), sans-serif',
    fontSize: '1rem',
    marginTop: '1rem',
    transition: 'background-color 0.3s ease',
  },

  cardPastPlansCarousel: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '1rem',
    fontFamily: 'var(--font-inter), sans-serif',
    width: '100%',
    overflowX: 'hidden',
  },
  carouselContainer: {
    display: 'flex',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    gap: '1rem',
    paddingBottom: '10px',
    width: '100%',
    // Scrollbar hiding styles are now in app/globals.css via class
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