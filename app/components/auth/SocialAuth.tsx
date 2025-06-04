'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/lib/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getAuthErrorMessage } from './authUtils';
import Image from 'next/image';

interface SocialAuthProps {
  onError: (error: string) => void;
  setIsAuthenticating: (value: boolean) => void;
}

export const SocialAuth: React.FC<SocialAuthProps> = ({
  onError,
  setIsAuthenticating,
}) => {
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    setIsAuthenticating(true);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push('/dashboard');
    } catch (err: any) {
      console.error('Google Sign-In Error:', err);
      onError(getAuthErrorMessage(err));
    } finally {
      setIsAuthenticating(false);
    }
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={handleGoogleSignIn}
        className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        aria-label="Sign in with Google"
      >
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/trainmeai-11cf7.firebasestorage.app/o/Login%2Fgoogle-logo.png?alt=media&token=26c72317-b9e1-4aef-ab54-a0029f156abd"
          alt="Google"
          width={48}
          height={48}
        />
      </button>
    </div>
  );
}; 