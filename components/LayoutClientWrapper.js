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

  // Updated logo URLs
  const headerLogoImageUrl = "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Logo%2F8819f3df-3241-4f21-be52-827df2f7cc25.png?alt=media&token=a017389c-c181-4143-9366-67bd70c9b6dd";
  const iconLogoUrl = "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Logo%2F317ecd07-214d-4ac0-99a8-4e19c2ed8ebd.png?alt=media&token=de760234-5f32-470d-b88d-d55368799d36";

  // Render a clean loading state that matches the dashboard design
  if (loading) {
    return (
      <div style={styles.loadingWrapper}>
        <div style={styles.loadingContent}>
          <div style={styles.logoContainer}>
            <img src={iconLogoUrl} alt="TrainMeAI Logo" style={styles.loadingLogo} />
          </div>
          <h1 style={styles.loadingTitle}>My Fitness App</h1>
          <p style={styles.loadingSubtitle}>Loading your personalized fitness experience...</p>
          <div style={styles.loadingSpinner}></div>
        </div>
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
    background: 'linear-gradient(to br, #f8fafc, #ffffff)',
    color: '#1f2937',
  },
  loadingContent: {
    textAlign: 'center',
    maxWidth: '400px',
    padding: '2rem',
  },
  logoContainer: {
    marginBottom: '2rem',
    display: 'flex',
    justifyContent: 'center',
  },
  loadingLogo: {
    width: '80px',
    height: '80px',
    objectFit: 'contain',
  },
  loadingTitle: {
    fontSize: '2rem',
    fontWeight: '300',
    color: '#1f2937',
    marginBottom: '0.5rem',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  loadingSubtitle: {
    fontSize: '1rem',
    color: '#6b7280',
    marginBottom: '2rem',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  loadingSpinner: {
    width: '32px',
    height: '32px',
    border: '3px solid #e5e7eb',
    borderTop: '3px solid #3b82f6',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    margin: '0 auto',
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
    height: '40px', // Fixed height for consistency
    width: 'auto', // Auto width to maintain aspect ratio
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
  },
  footer: {
    backgroundColor: '#ffffff',
    color: '#222222',
    textAlign: 'center',
    padding: '1rem 2rem',
    borderTop: '1px solid #e5e7eb',
    width: '100%',
  },
  footerText: {
    margin: 0,
    fontSize: '0.85rem',
    fontFamily: 'var(--font-inter), sans-serif',
  },
  fullScreenWrapper: {
    minHeight: '100vh',
    width: '100vw',
    backgroundColor: 'transparent', // Let the login page handle its own background
  },
};

// Add CSS animation for spinner
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
}