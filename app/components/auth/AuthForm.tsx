'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/lib/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  fetchSignInMethodsForEmail,
  sendPasswordResetEmail,
  sendEmailVerification,
  browserLocalPersistence,
  browserSessionPersistence,
  setPersistence
} from 'firebase/auth';
import { createUserProfile } from './userProfileService';
import { validateEmail, handleAuthError, checkRateLimit, recordFailedAttempt, formatTimeLeft } from './authUtils';
import { SocialAuth } from './SocialAuth';
import { generateCSRFToken, setCSRFCookie, getCSRFHeaders } from '@/lib/security';
import { logError } from '@/lib/errorLogging';
import PasswordStrengthMeter from './PasswordStrengthMeter';

interface ValidationErrors {
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

interface AuthFormProps {
  isRegistering: boolean;
  onToggleMode: () => void;
}

export default function AuthForm({ isRegistering, onToggleMode }: AuthFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});
  const [isCheckingEmail, setIsCheckingEmail] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [csrfToken, setCsrfToken] = useState<string>('');

  const router = useRouter();

  // Determine if we should show confirm password field
  const shouldShowConfirmPassword = isRegistering;

  // Reset confirm password when switching modes or when password changes
  React.useEffect(() => {
    setConfirmPassword('');
  }, [isRegistering, password]);

  // Generate CSRF token on mount
  useEffect(() => {
    const token = generateCSRFToken();
    setCSRFCookie(token);
    setCsrfToken(token);

    // Check Firebase configuration
    console.log('🔥 Firebase Auth initialized:', !!auth);
  }, []);

  // Check if email already exists
  const checkEmailExists = async (email: string) => {
    if (!validateEmail(email)) return false;
    
    setIsCheckingEmail(true);
    try {
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);
      return signInMethods.length > 0;
    } catch (error) {
      console.error('Error checking email:', error);
      return false;
    } finally {
      setIsCheckingEmail(false);
    }
  };

  // Validate form for registration
  const validateForm = async () => {
    const errors: ValidationErrors = {};

    if (!email) {
      errors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      errors.email = 'Please enter a valid email address';
    } else if (isRegistering) {
      const emailExists = await checkEmailExists(email);
      if (emailExists) {
        errors.email = 'This email is already registered. Please use a different email or try logging in.';
      }
    }

    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    // For registration, always require confirm password
    if (isRegistering) {
      if (!confirmPassword) {
        errors.confirmPassword = 'Please confirm your password';
      } else if (password !== confirmPassword) {
        errors.confirmPassword = 'Passwords do not match';
      }
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    console.log('🔐 Auth attempt:', { isRegistering, email: email ? 'provided' : 'missing', password: password ? 'provided' : 'missing' });

    if (isRegistering) {
      const isValid = await validateForm();
      console.log('✅ Form validation result:', isValid);
      if (!isValid) {
        console.log('❌ Form validation failed:', validationErrors);
        return;
      }
    }

    setIsAuthenticating(true);
    console.log('🚀 Starting authentication process...');

    try {
      // Set persistence before authentication
      await setPersistence(auth, rememberMe ? browserLocalPersistence : browserSessionPersistence);

      if (isRegistering) {
        console.log('📝 Creating new user account...');
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        console.log('✅ User created successfully:', user.uid);
        
        // Create user profile in Firestore
        console.log('📄 Creating user profile...');
        await createUserProfile(user);
        console.log('✅ User profile created successfully');
        
        // DISABLED FOR DEVELOPMENT - Email verification sending
        /*
        console.log('📧 Sending email verification...');
        await sendEmailVerification(user);
        console.log('✅ Email verification sent');
        
        setSuccessMessage('Registration successful! Please check your email to verify your account. Redirecting to login...');
        
        // Auto-redirect to login after showing success message
        setTimeout(() => {
          onToggleMode(); // Switch to login mode
          setSuccessMessage('Please check your email and verify your account, then sign in below.');
        }, 3000);
        */
        
        // Direct redirect to dashboard for development
        setSuccessMessage('Registration successful! Redirecting to dashboard...');
        setTimeout(() => {
          router.push('/dashboard');
        }, 1500);
      } else {
        console.log('🔑 Signing in existing user...');
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        
        // DISABLED FOR DEVELOPMENT - Email verification check
        /*
        if (!user.emailVerified) {
          console.log('⚠️ User email not verified, sending new verification email...');
          await sendEmailVerification(user);
          setError(null); // Clear any previous errors
          setSuccessMessage('Please verify your email before signing in. A new verification email has been sent to your inbox.');
          return;
        }
        */

        console.log('✅ Sign in successful, redirecting to dashboard...');
        router.push('/dashboard');
      }
    } catch (err: any) {
      console.error('❌ Authentication error:', err);
      console.error('Error code:', err.code);
      console.error('Error message:', err.message);
      
      // Only record failed attempts for actual authentication failures
      if (!isRegistering && err.code !== 'auth/too-many-requests') {
        recordFailedAttempt(email);
      }
      
      await logError(err, {
        context: isRegistering ? 'registration' : 'login',
        metadata: { email }
      });
      
      const errorMessage = handleAuthError(err);
      setError(errorMessage);
    } finally {
      setIsAuthenticating(false);
      console.log('🏁 Authentication process completed');
    }
  };

  const handleForgotPassword = async (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Confirm the user actually wants to reset their password
    const confirmed = window.confirm('Are you sure you want to reset your password? A password reset link will be sent to your email.');
    if (!confirmed) {
      return;
    }
    
    if (!email) {
      setError('Please enter your email address first, then click "Forgot password?"');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsAuthenticating(true);
    setError(null);
    setSuccessMessage(null);

    try {
      await sendPasswordResetEmail(auth, email);
      setSuccessMessage('Password reset link has been sent to your email');
    } catch (err: any) {
      const errorMessage = handleAuthError(err);
      setError(errorMessage);
    } finally {
      setIsAuthenticating(false);
    }
  };

  return (
    <form onSubmit={handleAuth} className="space-y-4">
      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-primary-dark mb-1">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white text-gray-900 placeholder-gray-400"
          placeholder="Enter your email"
          disabled={isAuthenticating}
          style={{
            color: '#111827',
            backgroundColor: 'white',
            fontSize: '14px'
          }}
        />
        {validationErrors.email && (
          <p className="mt-1 text-sm text-red-600">{validationErrors.email}</p>
        )}
        {isCheckingEmail && (
          <p className="mt-1 text-sm text-accent">Checking email availability...</p>
        )}
      </div>

      {/* Password Field */}
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-primary-dark mb-1">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete={isRegistering ? "new-password" : "current-password"}
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white text-gray-900 placeholder-gray-400"
          placeholder="Enter your password"
          disabled={isAuthenticating}
          style={{
            color: '#111827',
            backgroundColor: 'white',
            fontSize: '14px'
          }}
        />
        {validationErrors.password && (
          <p className="mt-1 text-sm text-red-600">{validationErrors.password}</p>
        )}
        {isRegistering && password && (
          <div className="mt-2">
            <PasswordStrengthMeter password={password} />
          </div>
        )}
      </div>

      {/* Confirm Password Field - Only for Registration */}
      {shouldShowConfirmPassword && (
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-primary-dark mb-1">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white text-gray-900 placeholder-gray-400"
            placeholder="Confirm your password"
            disabled={isAuthenticating}
            style={{
              color: '#111827',
              backgroundColor: 'white',
              fontSize: '14px'
            }}
          />
          {validationErrors.confirmPassword && (
            <p className="mt-1 text-sm text-red-600">{validationErrors.confirmPassword}</p>
          )}
        </div>
      )}

      {/* Remember Me - Only for Login */}
      {!isRegistering && (
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="h-4 w-4 text-midnight-green focus:ring-slate-gray border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-accent">
            Remember me
          </label>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isAuthenticating}
        className="w-full btn-primary-gradient py-2.5 px-4 rounded-xl font-medium text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-gray disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isAuthenticating ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
            {isRegistering ? 'Creating Account...' : 'Signing In...'}
          </div>
        ) : (
          isRegistering ? 'Create Account' : 'Sign In'
        )}
      </button>

      {/* Toggle Mode */}
      <div className="text-center">
        <button
          type="button"
          onClick={onToggleMode}
          className="text-sm text-accent hover:text-primary-dark transition-colors"
          disabled={isAuthenticating}
        >
          {isRegistering 
            ? 'Already have an account? Sign in' 
            : "Don't have an account? Create one"
          }
        </button>
      </div>

      {/* Forgot Password - Only for Login */}
      {!isRegistering && (
        <div className="text-center">
          <button
            type="button"
            onClick={handleForgotPassword}
            className="text-sm text-accent hover:text-primary-dark transition-colors"
            disabled={isAuthenticating}
          >
            Forgot your password?
          </button>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="rounded-xl bg-red-50 p-4">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      {/* Success Message */}
      {successMessage && (
        <div className="rounded-xl bg-green-50 p-4">
          <p className="text-sm text-green-700">{successMessage}</p>
        </div>
      )}
    </form>
  );
} 