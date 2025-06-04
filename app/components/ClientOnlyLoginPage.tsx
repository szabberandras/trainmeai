/**
 * !IMPORTANT - DO NOT MODIFY THIS FILE WITHOUT EXPLICIT PERMISSION
 * This login page design has been carefully crafted with specific branding and UI requirements.
 */

'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import AuthForm from './auth/AuthForm';
import { SocialAuth } from './auth/SocialAuth';
import Image from 'next/image';

// Firebase Storage URLs for assets
const ASSETS = {
  logo: 'https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Login%2FGemini_Generated_Image_ku5fqiku5fqiku5f.jpeg?alt=media&token=25ad98ba-31c8-4c2f-b546-b3fcee287ccd',
  backgroundImage: 'https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Login%2FGemini_Generated_Image_up2hy2up2hy2up2h.jpeg?alt=media&token=cdef40b1-d94b-488d-9ab3-efed9574bf59',
  userAvatars: [
    'https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Login%2Falvito-danendra-j92WHR-KZnM-unsplash.jpg?alt=media&token=bb7a325c-d66e-4539-b784-25167de72418',
    'https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Login%2Fapril-laugh-ng6R1DHtC3M-unsplash.jpg?alt=media&token=1704be4f-4281-4798-a08a-404befefba99',
    'https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Login%2Fariungoo-batzorig-1_Y9Gp3dUEQ-unsplash.jpg?alt=media&token=ce431cfa-b5e7-4496-9c4a-85a382ed4c09',
    'https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Login%2Fjim-sung-OfB4rWCnbg4-unsplash.jpg?alt=media&token=d35588c8-8ec5-4fc4-9f59-63d64fa425ac',
    'https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Login%2Fquino-al-RAd1nIVB3_Y-unsplash.jpg?alt=media&token=3d23817e-19a0-48ef-b858-f789ff30adbd',
    'https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Login%2Frachel-mcdermott-0fN7Fxv1eWA-unsplash.jpg?alt=media&token=a284c525-4b4e-43e0-8d07-f3f522daeebf'
  ]
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
      setIsRegistering(false); // Switch to login mode
      setSuccessMessage('🎉 Email verification successful! Please enter your email and password below to sign in.');
      setError(null);
    } else if (register === 'true') {
      setIsRegistering(true); // Switch to register mode
    }
  }, [searchParams]);

  return (
    <div className="flex min-h-screen w-full">
      {/* Left Side - Login Form */}
      <div className="w-1/2 flex flex-col items-center justify-center bg-white px-8 py-12">
        <div className="w-full max-w-[512px]">
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32">
              <Image
                src={ASSETS.logo}
                alt="TrainMeAI Logo"
                width={128}
                height={128}
                className="rounded-xl object-cover"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                priority
              />
            </div>
          </div>

          <h1 className="font-sora text-[28px] font-bold text-[#222222] mb-6">
            {isRegistering ? 'Create Account' : 'Sign in'}
          </h1>

          <AuthForm 
            isRegistering={isRegistering} 
            onToggleMode={() => setIsRegistering(!isRegistering)} 
          />

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#f0f1f5]" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-[#5e6a8d]">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <SocialAuth
                onError={(errorMessage) => setError(errorMessage)}
                setIsAuthenticating={setIsAuthenticating}
              />
            </div>
          </div>

          {error && (
            <div className="mt-4 rounded-xl bg-red-50 p-4">
              <p className="text-sm text-[#FF4C4C]">{error}</p>
            </div>
          )}

          {successMessage && (
            <div className="mt-4 rounded-xl bg-green-50 p-4">
              <p className="text-sm text-green-700">{successMessage}</p>
            </div>
          )}
        </div>
      </div>

      {/* Right Side - Showcase Image */}
      <div className="w-1/2 relative bg-gradient-to-br from-[#0047FF] via-[#D1FF00] to-[#FF4C4C] flex items-center justify-center p-16">
        <div className="w-full max-w-[600px] aspect-[4/3] rounded-3xl overflow-hidden relative shadow-2xl bg-gradient-to-tr from-[#0047FF] via-[#3366FF] to-[#D1FF00]">
          <Image
            src={ASSETS.backgroundImage}
            alt="Fitness Motivation"
            fill
            style={{ objectFit: 'cover', mixBlendMode: 'overlay' }}
            priority
          />
          <div className="absolute inset-0 flex flex-col items-start justify-between p-8 bg-gradient-to-b from-transparent via-transparent to-[rgba(0,0,0,0.8)]">
            <h2 className="font-sora text-4xl font-bold text-white mb-2">
              {isRegistering ? 'Welcome to TrainMe AI' : 'Welcome back'}
            </h2>
            <div className="w-full flex flex-col items-start space-y-4">
              <p className="text-xl text-[#FAFAFA]">
                Your journey to a healthier You starts here
              </p>

              {/* User Avatars */}
              <div className="flex -space-x-3">
                {ASSETS.userAvatars.map((avatar, index) => (
                  <div
                    key={index}
                    className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                  >
                    <Image
                      src={avatar}
                      alt={`User ${index + 1}`}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 