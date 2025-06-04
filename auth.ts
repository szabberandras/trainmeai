// auth.ts
import NextAuth from 'next-auth';
import type { NextAuthConfig } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { z } from 'zod';
import { signInWithEmailAndPassword } from 'firebase/auth'; // Import directly for CredentialsProvider
import { auth as firebaseAuth } from './lib/firebase'; // Import the initialized auth instance from your firebase.ts
import { getServerConfig } from './lib/config/environment';

const authConfig: NextAuthConfig = {
  pages: {
    signIn: '/login', // Your custom login page
    error: '/error', // Custom error page (optional)
  },
  callbacks: {
    // This callback is used to authorize access to pages
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user; // Check if user is logged in
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      const isOnTrainingPlans = nextUrl.pathname.startsWith('/training-plans');
      const isOnCommunity = nextUrl.pathname.startsWith('/community');
      const isOnProfile = nextUrl.pathname.startsWith('/profile');
      const isOnPrograms = nextUrl.pathname.startsWith('/programs');
      const isOnTraining = nextUrl.pathname.startsWith('/training');

      // Define protected routes
      const isOnProtectedRoute = isOnDashboard || isOnTrainingPlans || isOnCommunity || 
                                isOnProfile || isOnPrograms || isOnTraining;

      // If on a protected page and not logged in, redirect to login
      if (isOnProtectedRoute) {
        if (isLoggedIn) return true; // Allow access if logged in
        return false; // Block access if not logged in
      }
      // If logged in and on the login page, redirect to dashboard
      else if (isLoggedIn && nextUrl.pathname === '/') {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      // Allow access to other pages (e.g., login, home)
      return true;
    },
    // This callback is called when a JWT is created or updated
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
        if (account?.provider) {
          token.provider = account.provider;
        }
        // You might fetch user's subscription from Firestore here
        // For example:
        // const userDoc = await getDoc(doc(db, 'users', user.id));
        // token.subscription = userDoc.data()?.subscription;
      }
      return token;
    },
    // This callback is called when a session is checked
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        if (token.provider) {
          (session.user as any).provider = token.provider as string;
        }
        // session.user.subscription = token.subscription as 'free' | 'premium';
      }
      return session;
    },
  },
  // Configure authentication providers
  providers: [
    // Google OAuth Provider - SECURE: Using server-side only environment variables
    GoogleProvider({
      clientId: getServerConfig().google.clientId!,
      clientSecret: getServerConfig().google.clientSecret!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
    // Credentials Provider for Email/Password login
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Validate credentials using Zod
        const parsedCredentials = z
          .object({ 
            email: z.string().email('Invalid email format'), 
            password: z.string().min(6, 'Password must be at least 6 characters') 
          })
          .safeParse(credentials);

        if (!parsedCredentials.success) {
          console.error('Invalid credentials provided:', parsedCredentials.error.errors);
          return null;
        }

        const { email, password } = parsedCredentials.data;

        try {
          // Use Firebase Authentication for email/password sign-in
          const userCredential = await signInWithEmailAndPassword(
            firebaseAuth, // Use the imported Firebase auth instance
            email,
            password
          );
          const user = userCredential.user;

          if (!user) {
            console.error('No user found with provided credentials.');
            return null;
          }

          // Verify email is confirmed (security best practice)
          // DISABLED FOR DEVELOPMENT - Email verification check
          /*
          if (!user.emailVerified) {
            console.error('Email not verified for user:', email);
            throw new Error('Please verify your email before signing in.');
          }
          */

          // Return user object for NextAuth session
          return {
            id: user.uid,
            email: user.email!,
            name: user.displayName || email.split('@')[0],
            image: user.photoURL || undefined,
            emailVerified: user.emailVerified,
          };
        } catch (error: any) {
          console.error('Failed to authenticate with Firebase:', error.message);
          
          // Provide specific error messages for better UX
          if (error.code === 'auth/user-not-found') {
            throw new Error('No account found with this email address.');
          } else if (error.code === 'auth/wrong-password') {
            throw new Error('Incorrect password.');
          } else if (error.code === 'auth/user-disabled') {
            throw new Error('This account has been disabled.');
          } else if (error.code === 'auth/too-many-requests') {
            throw new Error('Too many failed attempts. Please try again later.');
          }
          
          // Return null to indicate authentication failure
          return null;
        }
      },
    }),
  ],
  // Enhanced security configuration
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  jwt: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  cookies: {
    sessionToken: {
      name: `next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === 'production', // Only secure in production
      },
    },
  },
  // Enhanced security events logging
  events: {
    async signIn({ user, account, isNewUser }) {
      console.log(`User signed in: ${user.email} via ${account?.provider}`);
      if (isNewUser) {
        console.log(`New user registered: ${user.email}`);
        // You could trigger welcome email, analytics, etc.
      }
    },
    async signOut() {
      console.log('User signed out');
    },
    async createUser({ user }) {
      console.log(`User created: ${user.email}`);
    },
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);