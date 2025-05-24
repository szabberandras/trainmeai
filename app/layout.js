// app/layout.js
import './globals.css';
import { Inter, Sora, Space_Grotesk } from 'next/font/google';

// Define your font loaders
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600'],
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['800'], // ExtraBold
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['600'], // SemiBold
});

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
      <body style={styles.body}> {/* Apply body styles */}
        {/* Animated background shapes */}
        <div style={styles.backgroundContainer}>
          <div className="gradient-background" style={styles.gradientBackground}></div>
          <div className="shape-one" style={styles.shapeOne}></div>
          <div className="shape-two" style={styles.shapeTwo}></div>
          <div className="shape-three" style={styles.shapeThree}></div>
        </div>

        {/* Main content wrapper where all pages (login, dashboard, etc.) will render */}
        <div style={styles.contentWrapper}>
          {children}
        </div>
      </body>
    </html>
  );
}

// --- Styles Object for app/layout.js ---
const styles = {
  body: {
    overflow: 'hidden', // Prevent scrollbars from showing due to large shapes
    margin: 0,
    padding: 0,
    minHeight: '100vh',
    width: '100vw',
    position: 'relative', // Ensure body is positioned for absolute children
  },
  backgroundContainer: {
    position: 'fixed', // Fixed to cover entire viewport
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: -1, // Send to background
    overflow: 'hidden', // Hide overflow from shapes
  },
  gradientBackground: {
    position: 'absolute',
    inset: 0, // Top, right, bottom, left 0
    // background handled by CSS class gradient-background in globals.css
  },
  // Shape positioning and sizing (animated via CSS keyframes in globals.css)
  shapeOne: {
    width: '384px', // w-96 = 384px
    height: '384px', // h-96 = 384px
    top: '25%', // top-1/4
    left: '25%', // left-1/4
    transform: 'translate(-50%, -50%)', // -translate-x-1/2 -translate-y-1/2
  },
  shapeTwo: {
    width: '320px', // w-80 = 320px
    height: '320px', // h-80 = 320px
    bottom: '25%', // bottom-1/4
    right: '25%', // right-1/4
    transform: 'translate(50%, 50%)', // translate-x-1/2 translate-y-1/2
  },
  shapeThree: {
    width: '288px', // w-72 = 288px
    height: '288px', // h-72 = 288px
    top: '50%', // top-1/2
    left: '50%', // left-1/2
    transform: 'translate(-50%, -50%)', // -translate-x-1/2 -translate-y-1/2
  },
  contentWrapper: {
    position: 'relative', // Ensure content is above the background
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    width: '100%',
    padding: '0', // Changed padding from 2rem to 0
    backgroundColor: 'transparent', // Make the wrapper transparent
  },
};