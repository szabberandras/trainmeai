// app/training-plans/page.js
'use client';

// No imports for useRouter, useAuthState, auth, signOut here;
// These are now handled in LayoutClientWrapper (the global layout component).

export default function TrainingPlansPage() {
  // Dummy user for display if context is not fully wired yet
  const dummyUser = { email: "user@example.com", displayName: "Chloe" }; 
  
  // Image URL for the logo (from app/page.js)
  const headerLogoImageUrl = "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Login%2Ftrainmeai.png?alt=media&token=a9fad87b-adbc-4530-a11c-95ed2694bdf6";

  // --- Training Plan Page Content ---
  return (
    <div style={styles.trainingPlanContentWrapper}> {/* Wrapper for training plan specific content */}
      <div style={styles.container}>
          {/* Logo Section from HTML Template - Replaced interactive SVG with static image */}
          <div style={styles.logoSection}>
              {/* Using the same logo image as the global header */}
              <img src={headerLogoImageUrl} alt="TrainMeAI Logo" style={styles.brandLogoImage} /> 
              <h1 style={styles.brandName}>trainme <span style={styles.brandAccentColor}>AI</span></h1>
              <p style={styles.tagline}>Empowering movement through intelligence</p>
          </div>

          {/* Training Plan Template */}
          <div style={styles.templateSection}>
              <div style={styles.templateHeader}>
                  <h2 style={styles.planTitle}>Marathon Training Plan</h2>
                  <p style={styles.planSubtitle}>AI-Personalized 16-Week Program</p>
                  <div style={styles.planMeta}>
                      <div style={styles.metaItem}>
                          <span style={styles.metaLabel}>Duration</span>
                          <span style={styles.metaValue}>16 Weeks</span>
                      </div>
                      <div style={styles.metaItem}>
                          <span style={styles.metaLabel}>Target</span>
                          <span style={styles.metaValue}>Sub 4:00</span>
                      </div>
                      <div style={styles.metaItem}>
                          <span style={styles.metaLabel}>Experience</span>
                          <span style={styles.metaValue}>Intermediate</span>
                      </div>
                      <div style={styles.metaItem}>
                          <span style={styles.metaLabel}>Weekly Miles</span>
                          <span style={styles.metaValue}>35-55</span>
                      </div>
                  </div>
              </div>

              <div style={styles.templateBody}>
                  <h3 style={styles.weekOverviewTitle}>Week 1 Overview</h3>
                  
                  <div className="hide-scrollbar" style={styles.weekOverviewGrid}> {/* Added hide-scrollbar class */}
                      {/* Example Day Card 1 */}
                      <div style={styles.dayCard}>
                          <div style={styles.dayHeader}>
                              <span style={styles.dayName}>Monday</span>
                              <span style={styles.dayType}>Easy</span>
                          </div>
                          <div style={styles.workoutDetails}>
                              <div style={styles.workoutItem}>
                                  <span>Easy Run</span>
                                  <span>5 miles</span>
                              </div>
                              <div style={styles.workoutItem}>
                                  <span>Pace</span>
                                  <span>9:30/mile</span>
                              </div>
                          </div>
                          <div style={styles.intensityBar}>
                              <div style={{...styles.intensityFill, width: '40%'}}></div>
                          </div>
                      </div>

                      {/* Example Day Card 2 */}
                      <div style={styles.dayCard}>
                          <div style={styles.dayHeader}>
                              <span style={styles.dayName}>Tuesday</span>
                              <span style={styles.dayType}>Speed</span>
                          </div>
                          <div style={styles.workoutDetails}>
                              <div style={styles.workoutItem}>
                                  <span>Track Workout</span>
                                  <span>6x800m</span>
                              </div>
                               <div style={styles.workoutItem}>
                                  <span>Target Pace</span>
                                  <span>7:45/mile</span>
                              </div>
                          </div>
                          <div style={styles.intensityBar}>
                              <div style={{...styles.intensityFill, width: '85%'}}></div>
                          </div>
                      </div>

                      {/* More Day Cards (simplified for brevity, you'll extend this with your data) */}
                      <div style={styles.dayCard}> {/* Wednesday */}
                          <div style={styles.dayHeader}><span style={styles.dayName}>Wednesday</span><span style={styles.dayType}>Recovery</span></div>
                          <div style={styles.workoutDetails}>
                              <div style={styles.workoutItem}><span>Cross Training</span><span>45 min</span></div>
                              <div style={styles.workoutItem}><span>Activity</span><span>Cycling</span></div>
                          </div>
                          <div style={styles.intensityBar}><div style={{width: '30%'}}></div></div>
                      </div>
                      <div style={styles.dayCard}> {/* Thursday */}
                          <div style={styles.dayHeader}><span style={styles.dayName}>Thursday</span><span style={styles.dayType}>Tempo</span></div>
                          <div style={styles.workoutDetails}>
                              <div style={styles.workoutItem}><span>Tempo Run</span><span>4 miles</span></div>
                              <div style={styles.workoutItem}><span>Pace</span><span>8:15/mile</span></div>
                          </div>
                          <div style={styles.intensityBar}><div style={{width: '70%'}}></div></div>
                      </div>
                      <div style={styles.dayCard}> {/* Friday */}
                          <div style={styles.dayHeader}><span style={styles.dayName}>Friday</span><span style={styles.dayType}>Rest</span></div>
                          <div style={styles.workoutDetails}>
                              <div style={styles.workoutItem}><span>Complete Rest</span><span>Recovery</span></div>
                              <div style={styles.workoutItem}><span>Focus</span><span>Nutrition</span></div>
                          </div>
                          <div style={styles.intensityBar}><div style={{width: '0%'}}></div></div>
                      </div>
                      <div style={styles.dayCard}> {/* Saturday */}
                          <div style={styles.dayHeader}><span style={styles.dayName}>Saturday</span><span style={styles.dayType}>Easy</span></div>
                          <div style={styles.workoutDetails}>
                              <div style={styles.workoutItem}><span>Easy Run</span><span>6 miles</span></div>
                              <div style={styles.workoutItem}><span>Pace</span><span>9:45/mile</span></div>
                          </div>
                          <div style={styles.intensityBar}><div style={{width: '45%'}}></div></div>
                      </div>
                      <div style={{...styles.dayCard, ...styles.dayCardHighlight}}> {/* Sunday */}
                          <div style={styles.dayHeader}><span style={styles.dayName}>Sunday</span><span style={styles.dayTypeLongRun}>Long Run</span></div>
                          <div style={styles.workoutDetails}>
                              <div style={styles.workoutItem}><span>Long Run</span><span>12 miles</span></div>
                              <div style={styles.workoutItem}><span>Pace</span><span>9:00/mile</span></div>
                          </div>
                          <div style={styles.intensityBar}><div style={{width: '60%'}}></div></div>
                      </div>
                  </div>

                  <div style={styles.actionButtons}>
                      <button style={styles.btnPrimary} onClick={() => alert('Edit mode activated!')}>✏️ Edit Plan</button>
                      <button style={styles.btnSecondary} onClick={() => alert('Generating PDF...')}>📄 Export PDF</button>
                      <button style={styles.btnSecondary} onClick={() => alert('Week 1 activated!')}>🚀 Start Week 1</button>
                  </div>
              </div>
          </div>

          {/* Progress Section */}
          <div style={styles.progressSection}>
            <h3 style={styles.progressTitle}>Your AI-Driven Insights</h3>
            <div style={styles.progressGrid}>
              <div style={styles.progressItem}>
                  <span style={styles.progressValue}>94%</span>
                  <span style={styles.progressLabel}>Plan Compatibility</span>
              </div>
              <div style={styles.progressItem}>
                  <span style={styles.progressValue}>8.2</span>
                  <span style={styles.progressLabel}>Predicted Finish</span>
              </div>
              <div style={styles.progressItem}>
                  <span style={styles.progressValue}>76%</span>
                  <span style={styles.progressLabel}>Injury Prevention</span>
              </div>
              <div style={styles.progressItem}>
                  <span style={styles.progressValue}>3:52</span>
                  <span style={styles.progressLabel}>Target Time</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


// --- Styles Object (Inline Styles for React Components) ---
// Converted from original HTML/CSS to match React inline style conventions
const styles = {
  trainingPlanContentWrapper: { // Wrapper for training plan specific content
    width: '100%',
    padding: '2rem', // Overall padding for training plan content
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

  // Header Styles (These styles are now in LayoutClientWrapper.js for global header)
  // These are here for clarity in the template, but not directly used in this component's render
  header: { /* ... */ }, headerLeft: { /* ... */ }, logo: { /* ... */ }, brandAccentColor: { /* ... */ },
  navbarNav: { /* ... */ }, navLink: { /* ... */ }, navLinkHover: { /* ... */ }, headerRight: { /* ... */ },
  searchIcon: { /* ... */ }, profilePic: { /* ... */ }, logoutButton: { /* ... */ },

  // Main Content Area (from LayoutClientWrapper.js, adjusted for this page's specific needs)
  mainContent: {
    flexGrow: 1,
    width: '100%',
    // padding and minHeight are primarily managed by trainingPlanContentWrapper
    // Remove paddingTop here, as it's already on trainingPlanContentWrapper
  },
  container: { // Inner container for content sizing
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem', // Original padding from HTML template
    paddingTop: '4rem', // Extra padding for top margin after header
  },

  // Logo Section from HTML Template
  logoSection: {
    textAlign: 'center',
    marginBottom: '4rem',
    padding: '3rem',
    background: 'white',
    borderRadius: '24px',
    boxShadow: '0 20px 40px rgba(0, 71, 255, 0.1)',
  },
  brandLogoImage: { // Style for the actual logo image
    width: '120px', // Adjust size as needed for your logo in this section
    height: 'auto',
    objectFit: 'contain',
    marginBottom: '1rem', // Spacing below logo
  },
  brandName: {
    fontFamily: 'var(--font-space-grotesk), sans-serif',
    fontWeight: '600',
    fontSize: '2.5rem',
    color: '#0047FF', // Electric Cobalt
    marginBottom: '0.5rem',
    letterSpacing: '-0.02em',
  },
  tagline: {
    fontFamily: 'var(--font-space-grotesk), sans-serif',
    fontWeight: '600',
    color: '#666',
    fontSize: '1.1rem',
    letterSpacing: '0.5px',
  },

  // Training Plan Template Section
  templateSection: {
    background: 'white',
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0 20px 40px rgba(0, 71, 255, 0.1)',
    marginBottom: '2rem',
  },
  templateHeader: {
    background: 'linear-gradient(135deg, #0047FF 0%, #0033CC 100%)',
    color: 'white',
    padding: '2rem',
    position: 'relative',
    overflow: 'hidden',
  },
  planTitle: {
    fontFamily: 'var(--font-space-grotesk), sans-serif',
    fontWeight: '600',
    fontSize: '2rem',
    marginBottom: '0.5rem',
  },
  planSubtitle: {
    opacity: '0.9',
    fontSize: '1.1rem',
  },
  planMeta: {
    display: 'flex',
    gap: '2rem',
    marginTop: '1.5rem',
    flexWrap: 'wrap',
  },
  metaItem: {
    background: 'rgba(255, 255, 255, 0.1)',
    padding: '0.75rem 1.25rem',
    borderRadius: '12px',
    backdropFilter: 'blur(10px)', // Note: backdrop-filter needs browser prefixing or PostCSS
  },
  metaLabel: {
    fontSize: '0.8rem',
    opacity: '0.8',
    display: 'block',
  },
  metaValue: {
    fontWeight: '600',
    fontSize: '1.1rem',
  },
  templateBody: {
    padding: '2rem',
  },
  weekOverviewTitle: {
    fontFamily: 'var(--font-space-grotesk), sans-serif',
    fontWeight: '600',
    marginBottom: '1.5rem',
    color: '#0047FF', // Electric Cobalt
  },
  weekOverviewGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
    marginBottom: '2rem',
  },
  dayCard: {
    background: '#FAFAFA',
    borderRadius: '16px',
    padding: '1.5rem',
    border: '2px solid transparent',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
  },
  dayCardHighlight: { // For highlight (e.g., Sunday)
    borderColor: '#D1FF00', // Energy Lime
    background: 'linear-gradient(135deg, #D1FF00 0%, #B8E600 100%)',
  },
  dayHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  dayName: {
    fontFamily: 'var(--font-space-grotesk), sans-serif',
    fontWeight: '600',
    fontSize: '1.2rem',
    color: '#0047FF', // Electric Cobalt
  },
  dayType: {
    background: '#0047FF',
    color: 'white',
    padding: '0.25rem 0.75rem',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '600',
  },
  dayTypeLongRun: {
    background: '#222222', // Graphite
    color: '#D1FF00', // Energy Lime
    padding: '0.25rem 0.75rem',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '600',
  },
  workoutDetails: {
    marginBottom: '1rem',
  },
  workoutItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem 0',
    borderBottom: '1px solid rgba(0, 71, 255, 0.1)',
  },
  intensityBar: {
    width: '60px',
    height: '4px',
    background: '#e0e0e0',
    borderRadius: '2px',
    overflow: 'hidden',
  },
  intensityFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #D1FF00 0%, #0047FF 100%)',
    borderRadius: '2px',
    transition: 'width 0.3s ease',
  },

  // Action Buttons
  actionButtons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    marginTop: '2rem',
    flexWrap: 'wrap',
  },
  btn: {
    padding: '1rem 2rem',
    borderRadius: '12px',
    border: 'none',
    fontFamily: 'var(--font-space-grotesk), sans-serif',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
  },
  btnPrimary: {
    background: 'linear-gradient(135deg, #0047FF 0%, #0033CC 100%)',
    color: 'white',
    boxShadow: '0 8px 20px rgba(0, 71, 255, 0.3)',
  },
  btnSecondary: {
    background: 'white',
    color: '#0047FF',
    border: '2px solid #0047FF',
  },

  // Progress Section
  progressSection: {
    background: 'linear-gradient(135deg, #222222 0%, #333333 100%)',
    color: 'white',
    padding: '2rem',
    borderRadius: '16px',
    marginTop: '2rem',
  },
  progressTitle: {
    fontFamily: 'var(--font-space-grotesk), sans-serif',
    fontWeight: '600',
    fontSize: '1.5rem',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  progressGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem',
  },
  progressItem: {
    textAlign: 'center',
    padding: '1rem',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '12px',
  },
  progressValue: {
    fontSize: '2rem',
    fontWeight: '600',
    color: '#D1FF00', // Energy Lime
    display: 'block',
  },
  progressLabel: {
    opacity: '0.8',
    fontSize: '0.9rem',
  },
};