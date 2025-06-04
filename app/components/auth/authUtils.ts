import { auth } from '@/lib/firebase';
import { fetchSignInMethodsForEmail } from 'firebase/auth';

// Rate limiting configuration
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const MAX_ATTEMPTS = 5;

interface RateLimitEntry {
  attempts: number;
  firstAttempt: number;
  lastAttempt: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const checkEmailExists = async (email: string): Promise<boolean> => {
  if (!validateEmail(email)) return false;

  try {
    const signInMethods = await fetchSignInMethodsForEmail(auth, email);
    return signInMethods.length > 0;
  } catch (error) {
    console.error('Error checking email:', error);
    return false;
  }
};

export const checkRateLimit = (identifier: string): { allowed: boolean; timeLeft?: number } => {
  const now = Date.now();
  const entry = rateLimitStore.get(identifier);

  if (!entry) {
    // First attempt
    rateLimitStore.set(identifier, {
      attempts: 1,
      firstAttempt: now,
      lastAttempt: now,
    });
    return { allowed: true };
  }

  // Check if we should reset the window
  if (now - entry.firstAttempt > RATE_LIMIT_WINDOW) {
    rateLimitStore.set(identifier, {
      attempts: 1,
      firstAttempt: now,
      lastAttempt: now,
    });
    return { allowed: true };
  }

  // Check if max attempts reached
  if (entry.attempts >= MAX_ATTEMPTS) {
    const timeLeft = RATE_LIMIT_WINDOW - (now - entry.firstAttempt);
    return { 
      allowed: false,
      timeLeft: Math.ceil(timeLeft / 1000) // Convert to seconds
    };
  }

  // Increment attempts
  entry.attempts += 1;
  entry.lastAttempt = now;
  rateLimitStore.set(identifier, entry);
  return { allowed: true };
};

export const recordFailedAttempt = (identifier: string): void => {
  const now = Date.now();
  const entry = rateLimitStore.get(identifier);

  if (!entry) {
    rateLimitStore.set(identifier, {
      attempts: 1,
      firstAttempt: now,
      lastAttempt: now,
    });
    return;
  }

  // If window expired, start new window
  if (now - entry.firstAttempt > RATE_LIMIT_WINDOW) {
    rateLimitStore.set(identifier, {
      attempts: 1,
      firstAttempt: now,
      lastAttempt: now,
    });
    return;
  }

  // Increment attempts
  entry.attempts += 1;
  entry.lastAttempt = now;
  rateLimitStore.set(identifier, entry);
};

export const formatTimeLeft = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  
  if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? 's' : ''} and ${remainingSeconds} second${remainingSeconds !== 1 ? 's' : ''}`;
  }
  return `${seconds} second${seconds !== 1 ? 's' : ''}`;
};

export const getAuthErrorMessage = (error: any): string => {
  let errorMessage = 'An unknown error occurred.';
  const code = error?.code || '';

  switch (code) {
    case 'auth/invalid-email':
      errorMessage = 'Invalid email address format.';
      break;
    case 'auth/user-disabled':
      errorMessage = 'This user account has been disabled.';
      break;
    case 'auth/user-not-found':
    case 'auth/wrong-password':
    case 'auth/invalid-credential':
      errorMessage = 'Invalid email or password.';
      break;
    case 'auth/email-already-in-use':
      errorMessage = 'This email is already registered. Please login or use a different email.';
      break;
    case 'auth/weak-password':
      errorMessage = 'Password should be at least 6 characters.';
      break;
    case 'auth/network-request-failed':
      errorMessage = 'Network error. Please check your internet connection.';
      break;
    case 'auth/too-many-requests':
      errorMessage = 'Too many failed attempts. Please try again later.';
      break;
    case 'auth/popup-closed-by-user':
      errorMessage = 'Sign-in cancelled. Please try again.';
      break;
    case 'auth/popup-blocked':
      errorMessage = 'Pop-up was blocked by your browser. Please allow pop-ups for this site and try again.';
      break;
    case 'auth/cancelled-popup-request':
      errorMessage = 'Sign-in was cancelled. Please try again.';
      break;
    case 'auth/operation-not-allowed':
      errorMessage = 'This sign-in method is not enabled. Please contact support.';
      break;
    case 'auth/account-exists-with-different-credential':
      errorMessage = 'An account already exists with this email using a different sign-in method.';
      break;
    default:
      errorMessage = error?.message || 'Authentication failed. Please try again.';
  }
  return errorMessage;
};

export const handleAuthError = (err: any): string => {
  console.error('Authentication Error:', err);
  
  switch (err.code) {
    case 'auth/invalid-email':
      return 'Invalid email address format.';
    case 'auth/user-disabled':
      return 'This user account has been disabled.';
    case 'auth/user-not-found':
    case 'auth/wrong-password':
    case 'auth/invalid-credential':
      return 'Invalid email or password.';
    case 'auth/email-already-in-use':
      return 'This email is already registered. Please login or use a different email.';
    case 'auth/weak-password':
      return 'Password should be at least 6 characters.';
    case 'auth/network-request-failed':
      return 'Network error. Please check your internet connection.';
    case 'auth/too-many-requests':
      return 'Too many failed attempts. Please try again later.';
    default:
      return err.message || 'An unknown error occurred.';
  }
}; 