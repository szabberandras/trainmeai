// app/page.tsx
'use client';

import React from 'react';
import ClientOnlyLoginPage from './components/ClientOnlyLoginPage';

export default function Page() {
  return (
    <div className="min-h-screen w-full">
      <ClientOnlyLoginPage />
    </div>
  );
}