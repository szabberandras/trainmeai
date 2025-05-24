// components/LayoutClientWrapper.js
'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export default function LayoutClientWrapper({ children }) {
  const pathname = usePathname();
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  // Determine if the full app layout (header/footer/main content container) should be shown
  // This layout is shown if user is logged in AND we are NOT on the root login page ('/')
  const showAppLayout = user && !loading && pathname !== '/';

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert('Logged out successfully!');
      router.push('/'); // Redirect to login page
    } catch (err) {
      console.error('Logout Error:', err);
    }
  };

  // Image URL for the logo in the header
  const headerLogoImageUrl = "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Login%2Ftrainmeai.png?alt=media&token=a9fad87b-adbc-4530-a11c-95ed2694bdf6";

  // Render a loading state if auth status is not yet determined
  if (loading) {
    return (
      <div style={styles.loadingWrapper}>
        <p>Loading app...</p>
      </div>
    );
  }

  // If user is NOT logged in AND on a protected path (i.e., not login page), redirect to login
  if (!user && pathname !== '/') {
    router.push('/');
    return null; // Don't render content until redirected
  }

  return (
    <>
      {showAppLayout ? (
        // --- Full App Layout (Header + Main Content Area + Footer) ---
        <div style={styles.appLayout}>
          {/* Global Header */}
          <header style={styles.header}>
            <div style={styles.headerLeft}>
              <img src={headerLogoImageUrl} alt="TrainMeAI Logo" style={styles.headerLogoImage} />
            </div>
            <nav style={styles.navbarNav}>
              <a href="/dashboard" style={styles.navLink}>Dashboard</a>
              <a href="/training-plans" style={styles.navLink}>Training Programs</a>
              <a href="#" style={styles.navLink}>Community</a>
            </nav>
            <div style={styles.headerRight}>
              <span style={styles.searchIcon}>🔍</span>
              <img
                src="https://via.placeholder.com/40/222222/FAFAFA"
                alt="User Profile"
                style={styles.profilePic}
              />
              <span style={styles.userName}>{user?.email?.split('@')[0] || 'User'}</span>
              <button onClick={handleLogout} style={styles.logoutButton}>
                Logout
              </button>
            </div>
          </header>

          {/* Main Content Area (Takes remaining width and contains the actual page content) */}
          <main style={styles.mainContentArea}>
            {children} {/* This is where individual pages (Dashboard, Training Plans) render */}
          </main>

          {/* Global Footer */}
          <footer style={styles.footer}>
            <p style={styles.footerText}>&copy; {new Date().getFullYear()} FitCoach AI. All rights reserved.</p>
          </footer>
        </div>
      ) : (
        // --- Full Screen Wrapper for Login Page (when not logged in or on '/') ---
        // This ensures the login page still fills the screen and has the background
        <div style={styles.fullScreenWrapper}>
          {children} {/* This will render the login page (app/page.js) */}
        </div>
      )}
    </>
  );
}

// --- Styles for LayoutClientWrapper ---
const styles = {
  loadingWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    width: '100vw',
    backgroundColor: '#FAFAFA', // Or match your background
    color: '#222222',
  },
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    width: '100vw',
    backgroundColor: 'transparent', // Let background be handled by layout.js
  },
  // Global Header Styles
  header: {
    backgroundColor: '#ffffff', // Pure white background for header
    color: '#222222', // Graphite for text
    padding: '0.6rem 2rem', // Adjusted: Slightly reduced vertical padding
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.08)', // Adjusted: Slightly lighter shadow
    width: '100%',
    position: 'fixed', // Fixed top header
    top: 0,
    left: 0,
    zIndex: 1000,
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
  },
  headerLogoImage: { // Style for the actual logo image
    width: '80px', // Adjusted: Smaller logo width
    height: 'auto',
    objectFit: 'contain',
    marginRight: '1rem',
  },
  navbarNav: {
    display: 'flex',
    gap: '1.5rem',
  },
  navLink: {
    color: '#222222', // Graphite
    textDecoration: 'none',
    fontSize: '1rem',
    fontFamily: 'var(--font-inter), sans-serif',
    fontWeight: 'normal',
    transition: 'color 0.3s ease',
  },
  navLinkHover: { color: '#D1FF00' },
  headerRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  searchIcon: {
    fontSize: '1.2rem',
    cursor: 'pointer',
    color: '#222222',
  },
  profilePic: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#FAFAFA',
    objectFit: 'cover',
    cursor: 'pointer',
  },
  userName: {
    fontFamily: 'var(--font-inter), sans-serif',
    fontSize: '0.9rem',
    fontWeight: '600',
    color: '#222222',
    marginLeft: '0.5rem',
  },
  logoutButton: {
    backgroundColor: '#FF4C4C', // Pulse Coral
    color: '#FAFAFA',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '0.85rem',
    fontFamily: 'var(--font-inter), sans-serif',
    marginLeft: '1rem',
    transition: 'background-color 0.3s ease',
  },
  mainContentArea: {
    flexGrow: 1, // Takes remaining vertical space
    width: '100%',
    // No explicit paddingTop here; individual pages will handle their padding
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column', // Children will stack
    justifyContent: 'flex-start', // Start content from top
    alignItems: 'center', // Center content horizontally if needed
    // The paddingTop for the header will be applied by individual pages now.
    minHeight: '100vh', // Ensure content area takes full height
  },
  mainContentNoHeader: { // For login page
    flexGrow: 1,
    width: '100%',
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center content horizontally
    justifyContent: 'center', // Center content vertically
    minHeight: '100vh', // Ensure it fills the screen
  },
  footer: {
    backgroundColor: '#222222', // Graphite
    color: '#FAFAFA', // Cloud White
    padding: '1rem 2rem',
    textAlign: 'center',
    marginTop: 'auto', // Pushes footer to bottom
    width: '100%',
  },
  footerText: {
    margin: 0,
    fontSize: '0.9rem',
  },
};