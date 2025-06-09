// app/page.tsx
'use client';

import React, { Suspense } from 'react';
import ClientOnlyLoginPage from './components/ClientOnlyLoginPage';

function LoginPageWithSuspense() {
  return (
    <Suspense fallback={
      <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <ClientOnlyLoginPage />
    </Suspense>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen w-full">
      <LoginPageWithSuspense />
    </div>
  );
}