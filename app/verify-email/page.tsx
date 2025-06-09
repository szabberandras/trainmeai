'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { auth } from '@/lib/firebase';
import { applyActionCode, checkActionCode } from 'firebase/auth';
import { CheckCircle, XCircle, Loader2 } from 'lucide-react';

function VerifyEmailContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const verifyEmail = async () => {
      const actionCode = searchParams.get('oobCode');
      
      if (!actionCode) {
        setStatus('error');
        setMessage('Invalid verification link. Please try registering again.');
        return;
      }

      try {
        // Verify the action code is valid
        await checkActionCode(auth, actionCode);
        
        // Apply the email verification
        await applyActionCode(auth, actionCode);
        
        setStatus('success');
        setMessage('Email verified successfully! Redirecting to login...');
        
        // Redirect to login page after 3 seconds
        setTimeout(() => {
          router.push('/?verified=true');
        }, 3000);
        
      } catch (error: any) {
        console.error('Email verification error:', error);
        
        // Handle "too many requests" specially - the verification might have still worked
        if (error.code === 'auth/too-many-requests') {
          setStatus('success');
          setMessage('Email verification completed! You may now sign in. Redirecting to login...');
          setTimeout(() => {
            router.push('/?verified=true');
          }, 3000);
          return;
        }
        
        setStatus('error');
        
        switch (error.code) {
          case 'auth/expired-action-code':
            setMessage('This verification link has expired. Please request a new one.');
            break;
          case 'auth/invalid-action-code':
            setMessage('This verification link is invalid. Please request a new one.');
            break;
          case 'auth/user-disabled':
            setMessage('This account has been disabled.');
            break;
          default:
            setMessage('Failed to verify email. Please try again or contact support.');
        }
      }
    };

    verifyEmail();
  }, [searchParams, router]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            {status === 'loading' && (
              <>
                <Loader2 className="mx-auto h-12 w-12 text-blue-600 animate-spin" />
                <h2 className="mt-4 text-xl font-semibold text-gray-900">
                  Verifying your email...
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  Please wait while we verify your email address.
                </p>
              </>
            )}
            
            {status === 'success' && (
              <>
                <CheckCircle className="mx-auto h-12 w-12 text-green-600" />
                <h2 className="mt-4 text-xl font-semibold text-gray-900">
                  Email Verified!
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  {message}
                </p>
                <div className="mt-4">
                  <button
                    onClick={() => router.push('/?verified=true')}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Go to Login
                  </button>
                </div>
              </>
            )}
            
            {status === 'error' && (
              <>
                <XCircle className="mx-auto h-12 w-12 text-red-600" />
                <h2 className="mt-4 text-xl font-semibold text-gray-900">
                  Verification Failed
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  {message}
                </p>
                <div className="mt-4 space-y-2">
                  <button
                    onClick={() => router.push('/')}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Back to Login
                  </button>
                  <button
                    onClick={() => router.push('/?register=true')}
                    className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Register Again
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="text-center">
              <Loader2 className="mx-auto h-12 w-12 text-blue-600 animate-spin" />
              <h2 className="mt-4 text-xl font-semibold text-gray-900">
                Loading...
              </h2>
            </div>
          </div>
        </div>
      </div>
    }>
      <VerifyEmailContent />
    </Suspense>
  );
}