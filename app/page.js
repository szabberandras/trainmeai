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
      console.log('User detected and not loading. Preparing to redirect to /dashboard...'); // <-- DEBUG LOG
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
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      width: '100%',
      maxWidth: '400px',
      textAlign: 'center',
    },
    h2: {
      marginBottom: '1.5rem',
      color: '#555',
    },
    input: {
      width: 'calc(100% - 20px)',
      padding: '10px',
      margin: '0.5rem 0',
      border: '1px solid #ddd',
      borderRadius: '4px',
    },
    button: {
      backgroundColor: '#333',
      color: '#fff',
      padding: '12px 20px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '1rem',
      marginTop: '1rem',
      width: '100%',
      transition: 'background-color 0.3s ease',
    },
    googleButton: {
      backgroundColor: '#4285F4',
      color: '#fff',
      padding: '12px 20px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '1rem',
      marginTop: '0.5rem',
      width: '100%',
      transition: 'background-color 0.3s ease',
    },
    toggleButton: {
      backgroundColor: 'transparent',
      color: '#555',
      border: 'none',
      cursor: 'pointer',
      marginTop: '1rem',
      textDecoration: 'underline',
      fontSize: '0.9rem',
    },
    logoutButton: { 
      backgroundColor: '#e74c3c', 
      color: '#fff',
      padding: '10px 15px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '0.9rem',
      marginTop: '2rem',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    error: {
      color: '#e74c3c',
      marginTop: '1rem',
      fontWeight: 'bold',
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