/**
 * Updated Login Page with Clean Mac-like Design
 */

'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import AuthForm from './auth/AuthForm';
import { SocialAuth } from './auth/SocialAuth';
import Image from 'next/image';

// Firebase Storage URLs for assets
const ASSETS = {
  logo: 'https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Logo%2F8819f3df-3241-4f21-be52-827df2f7cc25.png?alt=media&token=a017389c-c181-4143-9366-67bd70c9b6dd'
};

export default function ClientOnlyLoginPage() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const verified = searchParams.get('verified');
    const register = searchParams.get('register');
    
    if (verified === 'true') {
      setIsRegistering(false);
      setSuccessMessage('🎉 Email verification successful! Please enter your email and password below to sign in.');
      setError(null);
    } else if (register === 'true') {
      setIsRegistering(true);
    }
  }, [searchParams]);

  return (
    <>
      <style jsx global>{`
        input::placeholder {
          font-size: 14px !important;
          color: #9CA3AF !important;
        }
      `}</style>
      <div className="flex min-h-screen w-full">
        {/* Left Side - Login Form */}
        <div className="w-1/2 flex flex-col items-center justify-center bg-white px-8 py-6 relative z-10">
          <div className="w-full max-w-[400px]">
            <div className="flex justify-center mb-1">
              <div className="w-40 h-40">
                <Image
                  src={ASSETS.logo}
                  alt="MyPace Logo"
                  width={160}
                  height={160}
                  className="object-contain"
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
            </div>

            <h2 className="font-sora text-[20px] font-medium text-primary-dark mb-4 text-left">
              {isRegistering ? 'Create your account' : 'Sign in to your account'}
            </h2>

            <AuthForm 
              isRegistering={isRegistering} 
              onToggleMode={() => setIsRegistering(!isRegistering)} 
            />

            <div className="mt-2">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-accent">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-2 flex justify-center">
                <SocialAuth
                  onError={(errorMessage) => setError(errorMessage)}
                  setIsAuthenticating={setIsAuthenticating}
                />
              </div>
            </div>

            {error && (
              <div className="mt-2 rounded-xl bg-red-50 p-3">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            {successMessage && (
              <div className="mt-2 rounded-xl bg-green-50 p-3">
                <p className="text-sm text-green-700">{successMessage}</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Side - Clean Gradient Background */}
        <div className="w-1/2 relative fullscreen-gradient-primary grainy-texture flex items-center justify-center p-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6 text-shadow-soft">
              {isRegistering ? 'Welcome' : 'Welcome back'}
            </h1>
            
            <h3 className="text-2xl font-semibold text-white mb-4 text-shadow-soft">
              Your AI Coach. Your Goals. Your Pace.
            </h3>
            
            <p className="text-lg text-white opacity-80 text-shadow-soft">
              Whether you're taking your first steps or chasing podium finishes, our AI adapts to YOUR journey.
            </p>
          </div>
        </div>
      </div>
    </>
  );
} 