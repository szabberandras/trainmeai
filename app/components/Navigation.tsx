'use client';

import { Bell, Settings, LogOut } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';
import { useState, useRef, useEffect } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [user] = useAuthState(auth);
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => {
    return pathname === path;
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50">
      <div className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#f0f2f4] px-10 py-3 max-w-[1440px] mx-auto">
        <div className="flex items-center gap-4 text-[#111418]">
          <div className="size-4">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path>
            </svg>
          </div>
          <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">FitAI</h2>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <nav className="flex items-center gap-9">
            <Link 
              href="/dashboard" 
              className={`text-sm font-medium leading-normal ${
                isActive('/dashboard') ? 'text-blue-600' : 'text-[#111418]'
              }`}
            >
              Dashboard
            </Link>
            <Link 
              href="/training-calendar" 
              className={`text-sm font-medium leading-normal ${
                isActive('/training-calendar') ? 'text-blue-600' : 'text-[#111418]'
              }`}
            >
              Training
            </Link>
            <Link 
              href="/programs" 
              className={`text-sm font-medium leading-normal ${
                isActive('/programs') ? 'text-blue-600' : 'text-[#111418]'
              }`}
            >
              Programs
            </Link>
            <Link 
              href="/community" 
              className={`text-sm font-medium leading-normal ${
                isActive('/community') ? 'text-blue-600' : 'text-[#111418]'
              }`}
            >
              Community
            </Link>
          </nav>
          <button className="flex items-center justify-center rounded-full h-10 bg-[#f0f2f4] text-[#111418] px-2.5">
            <Bell size={20} />
          </button>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 hover:ring-2 hover:ring-blue-600 transition-all flex items-center justify-center text-white font-semibold text-sm"
              style={{ 
                backgroundImage: user?.photoURL ? `url(${user.photoURL})` : 'none',
                backgroundColor: user?.photoURL ? 'transparent' : '#3B82F6'
              }}
            >
              {!user?.photoURL && (
                <span className="text-white font-semibold text-sm">
                  {user?.displayName 
                    ? user.displayName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
                    : user?.email?.[0]?.toUpperCase() || 'U'
                  }
                </span>
              )}
            </button>
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 border border-gray-100">
                <Link
                  href="/profile"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  onClick={() => setShowDropdown(false)}
                >
                  <Settings size={16} />
                  Profile Settings
                </Link>
                <button
                  onClick={() => {
                    setShowDropdown(false);
                    handleLogout();
                  }}
                  className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-gray-50 w-full"
                >
                  <LogOut size={16} />
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
} 