// app/layout.js
// IMPORTANT: No 'use client'; directive here. This is a Server Component.

import './globals.css';
import { Inter, Sora, Space_Grotesk } from 'next/font/google';
import LayoutClientWrapper from '../components/LayoutClientWrapper'; // Import the client wrapper

// Define your font loaders (these are correct, no changes here)
const inter = Inter({
  subsets: ['latin'], variable: '--font-inter', weight: ['400', '500', '600'],
});
const sora = Sora({
  subsets: ['latin'], variable: '--font-sora', weight: ['800'],
});
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'], variable: '--font-space-grotesk', weight: ['600'],
});

// Metadata is correctly exported from this Server Component
export const metadata = {
  title: 'FitCoach AI Portal',
  description: 'Your personalized AI fitness coach.',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} ${spaceGrotesk.variable}`}
    >
      <body style={styles.body}>
        {/* Animated background shapes - ALWAYS RENDERED */}
        <div style={styles.backgroundContainer}>
          <div className="gradient-background" style={styles.gradientBackground}></div>
          <div className="shape-one" style={styles.shapeOne}></div>
          <div className="shape-two" style={styles.shapeTwo}></div>
          <div className="shape-three" style={styles.shapeThree}></div>
        </div>

        {/* This wrapper contains all client-side layout logic (sidebar, conditional header/footer) */}
        <div style={styles.contentWrapper}>
          <LayoutClientWrapper> {/* Render the client wrapper */}
            {children} {/* Children (your individual pages) are passed to the wrapper */}
          </LayoutClientWrapper>
        </div>
      </body>
    </html>
  );
}

// --- Styles Object for app/layout.js (Only global layout/background styles here) ---
const styles = {
  body: {
    overflow: 'hidden',
    margin: 0,
    padding: 0,
    minHeight: '100vh',
    width: '100vw',
    position: 'relative',
  },
  backgroundContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: -1,
    overflow: 'hidden',
  },
  gradientBackground: { position: 'absolute', inset: 0 },
  shapeOne: { width: '384px', height: '384px', top: '25%', left: '25%', transform: 'translate(-50%, -50%)' },
  shapeTwo: { width: '320px', height: '320px', bottom: '25%', right: '25%', transform: 'translate(50%, 50%)' },
  shapeThree: { width: '288px', height: '288px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },

  contentWrapper: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column', // Changed to column to stack header/footer with children
    alignItems: 'center',
    justifyContent: 'flex-start', // Start content from top for header/footer
    minHeight: '100vh',
    width: '100vw', // Ensure it fills full width
    padding: '0',
    backgroundColor: 'transparent',
  },
};