// app/page.js
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false); // Start with login view
  const [error, setError] = useState(null);

  const [user, loading, authError] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (user && !loading) {
      router.push('/dashboard');
    }
  }, [user, loading, router]);

  const handleAuth = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      if (isRegistering) {
        await createUserWithEmailAndPassword(auth, email, password);
        alert('Registration successful! You are now logged in.');
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        alert('Login successful!');
      }
    } catch (err) {
      console.error('Authentication Error:', err);
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    setError(null);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      alert('Signed in with Google successfully!');
    } catch (err) {
      console.error('Google Sign-In Error:', err);
      if (err.code === 'auth/popup-closed-by-user') {
        setError('Sign-in cancelled by user.');
      } else {
        setError(err.message);
      }
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert('Logged out successfully!');
    } catch (err) {
      console.error('Logout Error:', err);
      setError(err.message);
    }
  };

  // --- Image URLs from Firebase Storage ---
  const actualLogoImageUrl = "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Login%2Ftrainmeai.png?alt=media&token=a9fad87b-adbc-4530-a11c-95ed2694bdf6"; // New logo image URL
  const mainLoginImageUrl = "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Login%2FGemini_Generated_Image_up2hy2up2hy2up2h.jpeg?alt=media&token=cdef40b1-d94b-488d-9ab3-efed9574bf59"; // Main login image URL
  const gmailLogoUrl = "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Login%2Fgoogle-logo.png?alt=media&token=26c72317-b9e1-4aef-ab54-a0029f156abd";

  const userIconUrls = [
    "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Login%2Falvito-danendra-j92WHR-KZnM-unsplash.jpg?alt=media&token=bb7a325c-d66e-4539-b784-25167de72418",
    "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Login%2Fapril-laugh-ng6R1DHtC3M-unsplash.jpg?alt=media&token=1704be4f-4281-4798-a08a-404befefba99",
    "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Login%2Fariungoo-batzorig-1_Y9Gp3dUEQ-unsplash.jpg?alt=media&token=ce431cfa-b5e7-4496-9c4a-85a382ed4c09",
    "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Login%2Fjim-sung-OfB4rWCnbg4-unsplash.jpg?alt=media&token=d35588c8-8ec5-4fc4-9f59-63d64fa425ac",
    "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Login%2Fquino-al-RAd1nIVB3_Y-unsplash.jpg?alt=media&token=3d23817e-19a0-48ef-b858-f789ff30adbd",
    "https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Login%2Frachel-mcdermott-0fN7Fxv1eWA-unsplash.jpg?alt=media&token=a284c525-4b4e-43e0-8d07-f3f522daeebf",
  ];

  return (
    <div style={styles.pageContainer}>
      {/* Left side: Login/Register Form */}
      <div style={styles.loginContent}>
        <img src={actualLogoImageUrl} alt="TrainMeAI Logo" style={styles.logoImage} /> {/* Image Logo */}
        <h2 style={styles.formHeader}>{isRegistering ? 'Register' : 'Login'}</h2>
        <form onSubmit={handleAuth} style={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
          <button type="submit" style={styles.buttonPrimary}>
            {isRegistering ? 'Register' : 'Login'}
          </button>
        </form>

        <div className="or-separator" style={styles.orSeparator}>OR</div>

        <button onClick={handleGoogleSignIn} style={styles.googleButton}>
          <img src={gmailLogoUrl} alt="Google Logo" style={styles.googleLogo} />
          Sign in with Google
        </button>

        {error && <p style={styles.error}>{error}</p>}
        <button
          type="button"
          onClick={() => setIsRegistering(!isRegistering)}
          style={styles.toggleButton}
        >
          {isRegistering ? 'Already have an account? Login' : 'Need an account? Register'}
        </button>
      </div>

      {/* Right side: Design Showcase with Image and User Icons */}
      <div style={styles.designShowcase}>
        <div style={styles.imageFrame}>
          <img
            src={mainLoginImageUrl} // Main login image URL
            alt="Fitness Motivation"
            style={styles.showcaseImage}
          />
          <div style={styles.imageOverlay}>
            <h2 style={styles.overlayTitle}>Welcome Back</h2>
            <p style={styles.overlayText}>Your journey to a healthier You starts here.</p>
          </div>
        </div>
        {/* User Icons positioned over the image */}
        <div style={styles.userIconsContainer}>
          {userIconUrls.map((url, index) => (
            <img key={index} src={url} alt={`User ${index + 1}`} style={{
                ...styles.userIcon,
                zIndex: userIconUrls.length - index, // Ensure overlap order
                left: `${index * 20}px`, // Staggering effect
                transform: `translateY(${index % 2 === 0 ? '-10px' : '10px'})`, // Slight vertical stagger
            }} />
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  pageContainer: {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: 'transparent', // CORRECTED: Set background to transparent
    color: '#222222', // Graphite
    fontFamily: 'var(--font-inter), sans-serif',
    alignItems: 'center',
    justifyContent: 'center', // Center content horizontally
    padding: '2rem',
    gap: '4rem', // Space between left and right sections
  },
  loginContent: {
    flex: '1 1 45%', // Take up ~45% of space on left
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center content within the left half
    maxWidth: '450px', // Max width for login form
    padding: '2rem',
    backgroundColor: 'white', // Card background
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    zIndex: 2, // Ensure it's above background elements
  },
    logoImage: {
        width: '150px', // Adjust size as needed for your logo
        marginBottom: '2rem',
    },
    formHeader: {
        fontFamily: 'var(--font-sora), sans-serif',
        fontWeight: '600',
        fontSize: '2rem',
        marginBottom: '1.5rem',
        color: '#222222', // Graphite
    },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '100%', // Make form elements full width of its container
  },
  input: {
    padding: '1rem', // Larger padding for a more substantial feel
    borderRadius: '8px',
    border: '1px solid #eee', // Subtle border
    backgroundColor: '#fefefe', // Very light background
    fontSize: '1rem',
    fontFamily: 'var(--font-inter), sans-serif',
    color: '#222222',
    width: '100%', // Ensure full width within form
    // Note: ::placeholder pseudo-element styling is in app/globals.css
  },
  buttonPrimary: {
    backgroundColor: '#0047FF', // Electric Cobalt
    color: 'white',
    padding: '1rem 1.5rem',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'var(--font-space-grotesk), sans-serif',
    fontSize: '1rem',
    fontWeight: '600',
    marginTop: '0.5rem',
    width: '100%', // Full width
    transition: 'background-color 0.3s ease',
    // Note: :hover style for buttons should be in app/globals.css for consistency
  },
  orSeparator: {
    textAlign: 'center',
    margin: '1.5rem 0',
    color: '#999',
    width: '100%',
    position: 'relative', // Keep position relative here for line positioning
    // Note: ::before and ::after pseudo-elements for lines are in app/globals.css
  },
  googleButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.8rem',
    backgroundColor: 'white',
    color: '#222222', // Graphite text
    padding: '0.8rem 1.5rem',
    borderRadius: '8px',
    border: '1px solid #ddd', // Subtle border
    cursor: 'pointer',
    fontFamily: 'var(--font-inter), sans-serif',
    fontSize: '1rem',
    width: '100%', // Full width
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
  },
    googleLogo: {
        width: '24px',
        height: '24px',
    },
  toggleText: {
    fontSize: '0.9rem',
    color: '#555',
    textAlign: 'center',
    marginTop: '1.5rem', // Adjust this for more spacing if needed
    width: '100%',
  },
  toggleButton: {
    background: 'none',
    border: 'none',
    color: '#0047FF', // Electric Cobalt
    cursor: 'pointer',
    padding: 0,
    fontFamily: 'var(--font-inter), sans-serif',
    textDecoration: 'underline',
  },
  error: {
    color: '#FF4C4C', // Pulse Coral
    marginTop: '1rem',
    textAlign: 'center',
    width: '100%',
  },
  designShowcase: {
    flex: '1 1 55%', // Take up ~55% of space on right
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', // Center content vertically
    position: 'relative', // For absolute positioning of user icons
    padding: '2rem',
    // Media queries for responsiveness will be needed here for mobile
  },
  imageFrame: {
    borderRadius: '20px', // More rounded
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
    height: 'auto', // Adjust based on image aspect ratio
    maxWidth: '550px', // Max width for image frame
    boxShadow: '0 15px 30px rgba(0, 71, 255, 0.2)', // Stronger shadow
    display: 'flex', 
  },
  showcaseImage: {
    width: '100%',
    height: '100%', // Ensure image fills frame
    objectFit: 'cover', // Cover the area
    display: 'block',
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.25)', // Darker overlay for text readability
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
    padding: '1rem',
    fontFamily: 'var(--font-inter), sans-serif',
  },
  overlayTitle: {
    fontFamily: 'var(--font-sora), sans-serif',
    fontSize: '2.5rem', // Larger title
    marginBottom: '0.5rem',
    fontWeight: '800',
  },
  overlayText: {
    fontSize: '1.1rem',
    lineHeight: '1.5',
    maxWidth: '80%', // Constrain text width
  },
  userIconsContainer: {
    position: 'absolute', // Position relative to designShowcase
    bottom: '20px', // Adjust as needed
    left: '50%',
    transform: 'translateX(-50%)', // Center horizontally
    display: 'flex',
    gap: '-10px', // Overlapping effect (negative margin)
    zIndex: 3, // Ensure icons are above image/overlay
  },
  userIcon: {
    width: '40px', // Larger icons
    height: '40px',
    borderRadius: '50%',
    border: '3px solid white', // White border
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)', // Subtle shadow
  },
};