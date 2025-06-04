# MyPace AI Fitness App

A comprehensive AI-powered fitness training platform that provides personalized workout plans, HYROX training programs, and marathon coaching.

## 🏋️‍♂️ Features

### Core Functionality
- **AI-Powered Coaching**: Personalized workout recommendations and real-time guidance
- **Comprehensive Exercise Database**: 80+ exercises with detailed instructions, safety notes, and modifications
- **HYROX Training**: Specialized functional fitness programs with race simulation workouts
- **Marathon Training**: Progressive training programs from Novice to Advanced levels
- **Multi-Unit Support**: Seamless conversion between miles/kilometers and pace formats

### Exercise Database
- **Categories**: Strength, Core, Cardio, Plyometric, Mobility, Flexibility
- **Equipment Range**: From bodyweight to specialized HYROX equipment
- **Detailed Guidance**: Instructions, safety notes, modifications, metrics, and coaching cues
- **Progressive Difficulty**: Beginner to advanced variations for all exercises

### Training Programs

#### HYROX Training
- Race simulation workouts (8-station format)
- Performance standards for all levels
- Equipment alternatives and substitutions
- World record benchmarks
- Progressive training structure

#### Marathon Training
- **5 Program Levels**: Novice 1 & 2, Intermediate 1, Advanced 1, Personal Best
- **Weekly Structure**: Long runs, midweek training, cross-training, rest days
- **Pace Guidance**: From conversational to race pace training
- **Mileage Progression**: 6-20 mile long runs with strategic stepback weeks
- **Speedwork**: Advanced interval and tempo training

## 🚀 Technology Stack

- **Frontend**: Next.js 14.2.29, React, TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Firebase Firestore
- **Authentication**: NextAuth.js
- **AI Integration**: Google Gemini API
- **Development**: ESLint, PostCSS

## 📊 Database Statistics

- **Total Lines**: ~4,880 lines of comprehensive exercise data
- **Exercise Count**: 80+ professionally detailed exercises
- **Training Data**: HYROX and Marathon programs with helper functions
- **Utility Functions**: Distance conversions, pace calculations, program recommendations

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Firebase account
- Google Gemini API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/andrasbereczki/my-fitness-app.git
   cd my-fitness-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp env.example .env.local
   ```
   
   Fill in your environment variables:
   ```env
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   
   # Firebase Configuration
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   
   # Google Gemini API
   GEMINI_API_KEY=your_gemini_api_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000` (or the port shown in terminal)

## 🏃‍♀️ Usage

### Getting Started
1. **Sign Up/Login**: Create an account or sign in
2. **Onboarding**: Complete the cinematic onboarding flow
3. **Choose Program**: Select from HYROX, Marathon, or General Fitness
4. **Start Training**: Follow AI-guided workouts and track progress

### Key Features
- **Dashboard**: Overview of your training progress and upcoming workouts
- **AI Chat**: Real-time coaching and exercise guidance
- **Program Creator**: Build custom training plans
- **Analytics**: Track performance metrics and improvements
- **Settings**: Customize preferences and units (miles/km)

## 📁 Project Structure

```
my-fitness-app/
├── app/                          # Next.js app directory
│   ├── api/                      # API routes
│   ├── components/               # React components
│   ├── dashboard/                # Dashboard pages
│   └── training-plans/           # Training plan pages
├── lib/                          # Utility libraries
│   ├── exercises/                # Exercise database
│   ├── services/                 # Business logic services
│   └── types/                    # TypeScript type definitions
├── public/                       # Static assets
└── types/                        # Global type definitions
```

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Key Components
- **Exercise Database** (`lib/exercises/database.ts`): Comprehensive exercise data with helper functions
- **Training Services** (`lib/services/`): Business logic for program management
- **AI Integration** (`lib/ai/gemini.js`): Google Gemini API integration
- **Authentication** (`auth.ts`): NextAuth.js configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Exercise data compiled from professional fitness sources
- HYROX training methodology based on official standards
- Marathon training programs inspired by proven coaching methods
- UI/UX design following modern fitness app best practices

## 📞 Support

For support, email support@mypace-ai.com or create an issue in this repository.

---

**MyPace AI** - Your Personal Fitness Journey, Powered by AI 🚀
