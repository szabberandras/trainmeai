# Cinematic Onboarding Mockup - OptiTrain AI

## Visual Design Concept

### Overall Aesthetic
- **Full-screen immersive experience** - no navigation, no distractions
- **Warm gradient backgrounds** - sunrise/sunset colors (soft oranges, pinks, purples)
- **Elegant typography** - Large, readable serif or clean sans-serif
- **Smooth transitions** - Fade to black between questions, gentle animations
- **Ambient feel** - Floating particles, subtle motion, calming atmosphere

---

## Screen Flow Sequence

### Screen 1: Welcome
```
Background: Soft sunrise gradient (warm orange to pink)
Animation: Gentle floating particles

[Center of screen, large elegant text]
"Before we begin your journey..."

[Fade in after 2 seconds]
"What brings you here today?"

[Choice buttons appear with gentle fade-in]
○ I want to move without pain
○ I want to feel stronger  
○ I want to have more energy for my family
○ I'm not sure, but I need a change
○ [Type your own...]

[Bottom right corner, subtle]
1 of 4
```

### Screen 2: Vision
```
Background: Soft dusk gradient (purple to deep blue)
Animation: Slow pulsing light effect

[Fade in from black]
"What does a good day feel like to you?"

[Choice buttons with warm glow effect]
○ I feel calm and centered
○ I feel light in my body
○ I laugh and play easily
○ I finish what I started
○ I move with confidence
○ [Type your own...]

[Bottom right corner]
2 of 4
```

### Screen 3: Rhythm
```
Background: Golden hour gradient (warm yellow to soft orange)
Animation: Gentle wave motion

[Fade in]
"How much time do you have most days?"

[Choice buttons in clean cards]
○ 10-15 minutes (Quick sessions)
○ 20-30 minutes (Focused training)  
○ 40+ minutes (Full workouts)
○ It varies day to day

[Bottom right corner]
3 of 4
```

### Screen 4: Connection
```
Background: Soft morning gradient (light blue to warm white)
Animation: Subtle breathing effect

[Fade in]
"How would you like me to speak to you?"

[Choice buttons with personality preview]
○ Supportive ("You're doing great, let's keep building")
○ Playful ("Ready to have some fun with this?")
○ Direct ("Here's what we're doing today")
○ Minimal ("3 exercises. 20 minutes. Let's go.")
○ Reflective ("How did that feel for you?")

[Bottom right corner]
4 of 4
```

### Screen 5: Transition
```
Background: Pure white with soft glow
Animation: Gentle fade-in

[Center text, elegant]
"Let's build something that fits your life."

[Pause for 2 seconds]

[Fade to dashboard with personalized elements]
```

---

## Personalization Results

Based on the onboarding responses, the dashboard adapts:

### Visual Theme
- **Calm/Centered** → Soft blues and whites, minimal design
- **Strong/Confident** → Bold colors, energetic gradients  
- **Family/Energy** → Warm colors, friendly illustrations
- **Pain-free** → Gentle greens, soothing tones

### AI Tone
- **Supportive** → "You're making great progress! Let's build on yesterday's success."
- **Playful** → "Ready to shake things up today? I've got something fun planned!"
- **Direct** → "Today: 3 exercises, 25 minutes. Here's your plan."
- **Minimal** → "Upper body. 20 min. Start when ready."
- **Reflective** → "How are you feeling today? Let's adjust based on your energy."

### Template Curation
- **Pain-free** → Gentle mobility, corrective exercises, low-impact options
- **Strength** → Progressive overload, compound movements, power training
- **Energy** → Cardio intervals, energizing flows, morning routines
- **Family** → Quick sessions, playground workouts, family activities

### Dashboard Welcome Message
Instead of generic "Welcome back," show their personalized intention:
- "Training this week to move without pain"
- "Building strength to feel confident" 
- "Creating energy for your family"

---

## Technical Implementation Notes

### Component Structure
```
CinematicOnboarding/
├── OnboardingScreen.tsx (main container)
├── QuestionScreen.tsx (individual question component)
├── BackgroundGradient.tsx (animated backgrounds)
├── ChoiceButton.tsx (answer options)
└── TransitionEffect.tsx (fade animations)
```

### State Management
```typescript
interface OnboardingState {
  currentStep: number;
  answers: {
    motivation: string;
    vision: string; 
    timeAvailable: string;
    communicationStyle: string;
  };
  isComplete: boolean;
}
```

### Personalization Storage
```typescript
interface UserPersonalization {
  visualTheme: 'calm' | 'energetic' | 'warm' | 'gentle';
  aiTone: 'supportive' | 'playful' | 'direct' | 'minimal' | 'reflective';
  motivation: string;
  preferredDuration: string;
  hasCompletedOnboarding: boolean;
}
```

---

## User Experience Flow

1. **Trigger**: First login OR manual trigger from settings
2. **Experience**: 4 thoughtful questions with cinematic presentation
3. **Duration**: ~2-3 minutes (user-paced, no rush)
4. **Result**: Personalized dashboard that reflects their answers
5. **Memory**: System remembers preferences, can be reset from settings

This creates an emotional investment before showing any interface, making users feel seen and understood from the very beginning. 