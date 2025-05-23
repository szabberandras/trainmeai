// app/layout.js
import './globals.css';
import { Inter, Sora, Space_Grotesk } from 'next/font/google'; // Import the fonts

// Define your font loaders
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // Define CSS variable for Inter
  weight: ['400', '500', '600'], // Specify weights used in your design
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora', // Define CSS variable for Sora
  weight: ['800'], // ExtraBold
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk', // Define CSS variable for Space Grotesk
  weight: ['600'], // SemiBold
});

export const metadata = {
  title: 'FitCoach AI Portal',
  description: 'Your personalized AI fitness coach.',
};

export default function RootLayout({ children }) {
  return (
    // Apply font variables to the html tag using template literals
    <html 
      lang="en" 
      className={`${inter.variable} ${sora.variable} ${spaceGrotesk.variable}`}
    >
      <body>
        {/* The overall container, header, main, and footer from previous layout */}
        <div style={styles.container}>
          <header style={styles.header}>
            <h1 style={styles.logo}>FitCoach AI</h1>
          </header>
          <main style={styles.mainContent}>
            {children} 
          </main>
          <footer style={styles.footer}>
            <p>&copy; {new Date().getFullYear()} FitCoach AI. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}

// --- Styles Object (Inline Styles for RootLayout) ---
// Updated to use CSS variables for fonts
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    fontFamily: 'var(--font-inter), sans-serif', // Use Inter for body by default
    color: '#222222', // Graphite for main text, from your palette
    backgroundColor: '#FAFAFA', // Cloud White for the page background
  },
  header: {
    backgroundColor: '#FAFAFA', // Cloud White
    color: '#222222', // Graphite
    padding: '1rem 2rem', // Adjusted padding
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    // No fixed positioning here, as it's a global layout header
  },
  logo: {
    fontFamily: 'var(--font-sora), sans-serif', // Sora for logo
    fontSize: '1.8rem',
    margin: 0,
    color: '#0047FF', // Electric Cobalt
    fontWeight: '800', // Explicitly use Sora ExtraBold weight
  },
  mainContent: {
    flexGrow: 1,
    padding: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%', // Ensure main content takes full width
  },
  footer: {
    backgroundColor: '#222222', // Graphite
    color: '#FAFAFA', // Cloud White
    padding: '1rem 2rem',
    textAlign: 'center',
    marginTop: 'auto',
    width: '100%',
  },
};