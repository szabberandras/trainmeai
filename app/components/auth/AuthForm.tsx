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
      {error && (
        <div className="mb-6 rounded-xl bg-red-50 p-4">
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      <div className="mb-4">
        <label htmlFor="email" className="block text-base font-medium text-[#222222] mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-14 px-4 rounded-xl border border-[#dadee7] focus:border-[#0047FF] focus:ring-1 focus:ring-[#0047FF] bg-white text-[#222222] placeholder:text-[#5e6a8d]"
          placeholder="Enter your email"
        />
        {validationErrors.email && (
          <p className="mt-1 text-sm text-[#FF4C4C]">{validationErrors.email}</p>
        )}
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <label htmlFor="password" className="block text-base font-medium text-[#222222]">
            Password
          </label>
          {!isRegistering && (
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-sm text-[#0047FF] hover:text-[#0033CC] font-medium"
            >
              Forgot password?
            </button>
          )}
        </div>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full h-14 px-4 rounded-xl border border-[#dadee7] focus:border-[#0047FF] focus:ring-1 focus:ring-[#0047FF] bg-white text-[#222222] placeholder:text-[#5e6a8d]"
          placeholder="Enter your password"
        />
        {isRegistering && <PasswordStrengthMeter password={password} />}
        {validationErrors.password && (
          <p className="mt-1 text-sm text-[#FF4C4C]">{validationErrors.password}</p>
        )}
      </div>

      {shouldShowConfirmPassword && (
        <div className={`mb-4 transition-all duration-300 ease-in-out ${shouldShowConfirmPassword ? 'opacity-100 max-h-80' : 'opacity-0 max-h-0 overflow-hidden'}`}>
          <label htmlFor="confirmPassword" className="block text-base font-medium text-[#222222] mb-2">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full h-14 px-4 rounded-xl border border-[#dadee7] focus:border-[#0047FF] focus:ring-1 focus:ring-[#0047FF] bg-white text-[#222222] placeholder:text-[#5e6a8d]"
            placeholder="Confirm your password"
          />
          {validationErrors.confirmPassword && (
            <p className="mt-1 text-sm text-[#FF4C4C]">{validationErrors.confirmPassword}</p>
          )}
        </div>
      )}

      {!isRegistering && (
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 rounded border-[#dadee7] text-[#0047FF] focus:ring-[#0047FF]"
            />
            <span className="ml-2 text-sm text-[#222222]">Remember me</span>
          </label>
        </div>
      )}

      {successMessage && (
        <div className="mb-6 rounded-xl bg-green-50 p-4">
          <p className="text-sm text-green-700">{successMessage}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isAuthenticating || isCheckingEmail}
        className={`w-full h-12 rounded-xl font-space-grotesk font-semibold text-white bg-[#0047FF] hover:bg-[#0033CC] transition-colors ${
          (isAuthenticating || isCheckingEmail) ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {isAuthenticating ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </span>
        ) : (
          isRegistering ? 'Create Account' : 'Sign in'
        )}
      </button>

      <p className="mt-2 text-center">
        <button
          type="button"
          onClick={onToggleMode}
          className="text-sm text-[#5e6a8d] hover:text-[#222222] underline"
        >
          {isRegistering
            ? 'Already have an account? Sign in'
            : "Don't have an account? Sign up"}
        </button>
      </p>
    </form>
  );
} 