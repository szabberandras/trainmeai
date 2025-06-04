# OptiTrain - AI-Powered Fitness Training App

OptiTrain is a modern fitness application that uses AI to create personalized training plans and provide real-time fitness guidance. Built with Next.js 14, TypeScript, Firebase, and AI integration.

## Features

- 🔐 **Secure Authentication**
  - Email/password login
  - Google OAuth integration
  - Protected routes and user sessions

- 🤖 **AI Fitness Coach**
  - Personalized training plan generation
  - Real-time workout advice
  - Form tips and technique guidance
  - Nutrition recommendations

- 📊 **Training Management**
  - Custom workout plans
  - Progress tracking
  - Exercise library
  - Workout scheduling

- 👤 **User Profiles**
  - Fitness goals tracking
  - Equipment preferences
  - Progress history
  - Personal bests

## Tech Stack

- **Frontend**: Next.js 14, TypeScript, React
- **Backend**: Firebase (Auth, Firestore, Storage)
- **AI**: Custom AI integration
- **Styling**: CSS-in-JS with TypeScript
- **Icons**: Lucide React

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/optitrain.git
   cd optitrain
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory with your Firebase configuration:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
optitrain/
├── app/                    # Next.js app directory
│   ├── chat/              # AI coach chat interface
│   ├── dashboard/         # User dashboard
│   ├── training-plans/    # Training plan management
│   └── layout.tsx         # Root layout with auth wrapper
├── components/            # Reusable React components
├── lib/                   # Utility functions and configs
│   └── firebase.ts        # Firebase initialization
├── public/               # Static assets
├── styles/               # Global styles
└── types/                # TypeScript type definitions
```

## Authentication Flow

1. Users can sign up/login with email/password or Google
2. On successful auth, user profile is created in Firestore
3. Protected routes check auth state
4. User sessions are managed with Firebase Auth

## Development Guidelines

- Use TypeScript for all new files
- Follow the existing component structure
- Add proper types for all props and functions
- Keep components modular and reusable
- Add comments for complex logic
- Use proper error handling

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
