# Environment Setup Guide

## Required Environment Variables

The app requires a `.env.local` file in the root directory with the following variables:

### Firebase Configuration (Required for Authentication)
```
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### App Configuration
```
APP_NAME=OptiTrain AI
APP_URL=http://localhost:3000
SUPPORT_EMAIL=support@optitrain.ai
```

### Google OAuth (for social login)
```
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### NextAuth Configuration
```
NEXTAUTH_SECRET=your_nextauth_secret_here
NEXTAUTH_URL=http://localhost:3000
```

### AI Configuration
```
GOOGLE_GEMINI_API_KEY=your_gemini_api_key_here
```

### Email Configuration (Optional)
```
SENDGRID_API_KEY=your_sendgrid_api_key
SENDGRID_FROM_EMAIL=noreply@optitrain.ai
```

### Stripe Configuration (Optional)
```
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

## How to Get Firebase Configuration

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project (trainmeai-11cf7)
3. Go to Project Settings (gear icon)
4. Scroll down to "Your apps" section
5. Click on the web app or create a new one
6. Copy the configuration values

## Current Issue

The account creation is not working because the `.env.local` file is missing. Without the Firebase configuration, the authentication system cannot connect to Firebase to create user accounts.

## Quick Fix

Create a `.env.local` file in the root directory and add the Firebase configuration values from your Firebase project. 