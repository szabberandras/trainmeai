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
  signOut
} from 'firebase/auth';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(true);
  const [error, setError] = useState(null);

  const [user, loading, authError] = useAuthState(auth);
  const router = useRouter();

  console.log('HomePage Rendered. User:', user, 'Loading:', loading, 'AuthError:', authError);

  useEffect(() => {
    console.log('useEffect triggered. User:', user, 'Loading:', loading);
    if (user && !loading) {
      console.log('User detected and not loading. Preparing to redirect to /dashboard...');
      router.push('/dashboard'); 
    } else if (!user && !loading && !authError) { 
      console.log('No user, not loading, no auth error. Showing login/register form.');
    }
  }, [user, loading, router, authError]);

  const handleAuth = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      if (isRegistering) {
        await createUserWithEmailAndPassword(auth, email, password);
        alert('Registration successful! You are now logged in.');
        console.log('Auth successful (Register), user should now be populated.');
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        alert('Login successful!');
        console.log('Auth successful (Login), user should now be populated.');
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

  const formStyles = {
    card: {
      backgroundColor: '#fff',
      padding: '2.5rem',
      borderRadius: '12px', // More rounded to match brand style
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)', // Slightly softer shadow
      width: '100%',
      maxWidth: '400px',
      textAlign: 'center',
      display: 'flex', // For better alignment of content inside
      flexDirection: 'column',
      alignItems: 'center',
    },
    h2: {
      fontFamily: 'var(--font-space-grotesk), sans-serif', // Using brand font for headers
      fontWeight: '600',
      marginBottom: '1.5rem',
      color: '#222222', // Graphite for text
    },
    input: {
      width: '320px', // Fixed width to match button width visually (adjust as needed)
      padding: '12px 15px', // Larger padding for a more substantial feel
      margin: '0.6rem 0',
      border: '1px solid #ddd',
      borderRadius: '8px', // Slightly rounded corners
      fontSize: '1rem',
      fontFamily: 'var(--font-inter), sans-serif', // Using brand font
      color: '#222222', // Regular text color
      backgroundColor: '#fefefe', // Light background for inputs
    },
    // Placeholder styling for input (requires a separate CSS class or global style for full control)
    // For now, we'll try to get it visually lighter with color property
    // Future: Use CSS modules or global CSS for ::placeholder pseudo-element.
    inputPlaceholder: { 
      color: '#999', // Lighter placeholder color (visual only, not actual code property)
    },

    button: { // Base button style for Register/Login
      backgroundColor: '#0047FF', // Electric Cobalt primary color
      color: '#fff',
      padding: '12px 20px',
      border: 'none',
      borderRadius: '12px', // Rounded corners to match brand
      cursor: 'pointer',
      fontSize: '1rem',
      fontFamily: 'var(--font-space-grotesk), sans-serif', // Using brand font
      fontWeight: '600',
      marginTop: '1.5rem', // More space above
      width: '320px', // Fixed width to match inputs visually
      transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
      boxShadow: '0 4px 10px rgba(0, 71, 255, 0.2)', // Primary button shadow
    },
    googleButton: { // Adjusted for smaller, more concise look
      backgroundColor: '#4285F4', // Google blue (keep for branding)
      color: '#fff',
      padding: '8px 15px', // Smaller padding
      border: 'none',
      borderRadius: '8px', // Slightly less rounded than primary
      cursor: 'pointer',
      fontSize: '0.9rem', // Smaller font size
      fontFamily: 'var(--font-inter), sans-serif', // Inter for a standard look
      marginTop: '1rem',
      width: '250px', // Smaller width for social button
      transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)', // Lighter shadow
    },
    toggleButton: {
      backgroundColor: 'transparent',
      color: '#0047FF', // Use primary Electric Cobalt for links
      border: 'none',
      cursor: 'pointer',
      marginTop: '1.5rem', // More space
      textDecoration: 'underline',
      fontSize: '0.9rem',
      fontFamily: 'var(--font-inter), sans-serif',
    },
    logoutButton: {
      backgroundColor: '#FF4C4C', // Pulse Coral (for logout)
      color: '#fff',
      padding: '10px 15px',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '0.9rem',
      marginTop: '2rem',
      fontFamily: 'var(--font-inter), sans-serif',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    error: {
      color: '#FF4C4C', // Pulse Coral for errors
      marginTop: '1rem',
      fontWeight: 'bold',
      fontFamily: 'var(--font-inter), sans-serif',
    },
  };

  if (loading) {
    console.log('Displaying loading state...');
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <p>Loading authentication state...</p>
      </div>
    );
  }

  if (user) {
    console.log('User is present in render logic (email/google sign-in). User:', user.email);
    return (
      <div style={formStyles.card}>
        <h2 style={formStyles.h2}>Welcome, {user.email}!</h2>
        <p>You are logged in. Redirecting to your dashboard...</p>
        <button onClick={handleLogout} style={formStyles.logoutButton}>
          Logout
        </button>
      </div>
    );
  }

  console.log('User is null, not loading. Displaying login/register form.');
  return (
    <div style={formStyles.card}>
      <h2 style={formStyles.h2}>{isRegistering ? 'Register' : 'Login'}</h2>
      <form onSubmit={handleAuth}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={formStyles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={formStyles.input}
        />
        <button type="submit" style={formStyles.button}>
          {isRegistering ? 'Register' : 'Login'}
        </button>
      </form>

      <p style={{ margin: '1.5rem 0 0.5rem', color: '#777' }}>OR</p>

      <button
        onClick={handleGoogleSignIn}
        style={formStyles.googleButton}
      >
        Sign in with Google
      </button>

      {error && <p style={formStyles.error}>{error}</p>}
      <button
        onClick={() => setIsRegistering(!isRegistering)}
        style={formStyles.toggleButton}
      >
        {isRegistering ? 'Already have an account? Login' : 'Need an account? Register'}
      </button>
    </div>
  );
}