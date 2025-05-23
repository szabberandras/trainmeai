// app/layout.js
import './globals.css'; // Your global styles

export const metadata = {
  title: 'FitCoach AI Portal',
  description: 'Your personalized AI fitness coach.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div style={styles.container}>
          <header style={styles.header}>
            <h1 style={styles.logo}>FitCoach AI</h1>
          </header>
          <main style={styles.mainContent}>
            {children} {/* This is where your page content will be rendered */}
          </main>
          <footer style={styles.footer}>
            <p>&copy; {new Date().getFullYear()} FitCoach AI. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    backgroundColor: '#f4f4f4', // Light background for the page
  },
  header: {
    backgroundColor: '#333', // Dark header
    color: '#fff',
    padding: '1rem 2rem',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  logo: {
    margin: 0,
    fontSize: '1.8rem',
    fontWeight: 'bold',
  },
  mainContent: {
    flexGrow: 1,
    padding: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', // Center content vertically and horizontally
    flexDirection: 'column',
  },
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '1rem 2rem',
    textAlign: 'center',
    marginTop: 'auto', // Pushes footer to the bottom
  },
};