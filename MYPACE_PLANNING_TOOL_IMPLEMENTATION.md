# MyPace AI - Planning Tool Implementation Plan

## 🎯 **CORE VISION**
MyPace AI is a **planning and coaching tool** where users create training programs through AI conversation, view weekly plans in calendar format, and continuously refine their approach through ongoing AI dialogue. **No live tracking** - focus on intelligent planning and adaptation.

## 📋 **USER FLOW OVERVIEW**

### **Phase 1: Onboarding & Initial Planning**
1. **Cinematic Onboarding** ✅ (Already implemented)
   - Collects motivation, vision, time, communication style
   - Creates personalized AI tone and visual theme

2. **Dashboard Redirect** 
   - User lands on dashboard with personalized hero image based on training discipline
   - Shows current training plans section (empty initially)
   - Weekly calendar preview (empty initially)
   - AI chat window for conversation

3. **AI Conversation & Plan Creation**
   - User chats with AI to define goals, preferences, constraints
   - AI gathers fundamental information through natural conversation
   - Once ready, AI creates first training program
   - Training page gets populated with weekly plan

### **Phase 2: Training Plan Management**
4. **Training Page - Weekly View**
   - Default weekly plan displayed by day
   - Dynamic exercise display (name, reps, duration, weight, etc.)
   - Daily plans expandable for detailed instructions
   - High-level nutrition suggestions per day
   - Split-screen: 2/3 training plan, 1/3 AI chat

5. **Activity Logging & Adaptation**
   - Users log activities at day/exercise level
   - Mark exercises as completed or skipped
   - AI adapts future plans based on logged data
   - "I skipped today, regenerate the rest of the week"

6. **Navigation & History**
   - Navigate backwards to see previous weeks
   - Generate next week when ready
   - Add new days to running week (if Tuesday, add Wednesday+)
   - Pause, complete, or archive training plans

### **Phase 3: Premium Features**
7. **Multiple Plans** (Premium)
   - Run multiple training plans simultaneously
   - Always generate max 2 weeks in advance
   
8. **Freemium Limits**
   - Free users: 14 days total
   - Premium: Unlimited

## 🏗️ **TECHNICAL IMPLEMENTATION PLAN**

### **PRIORITY 1: Dashboard Updates**

#### **1.1 Dynamic Hero Section**
```typescript
// Update app/dashboard/page.tsx
const getHeroImageByDiscipline = (discipline: string) => {
  const images = {
    'running': '/images/hero-running.jpg',
    'strength': '/images/hero-strength.jpg',
    'cycling': '/images/hero-cycling.jpg',
    'swimming': '/images/hero-swimming.jpg',
    'yoga': '/images/hero-yoga.jpg',
    'general': '/images/hero-general.jpg'
  };
  return images[discipline] || images.general;
};
```

#### **1.2 Current Training Plans Section**
- Replace "Past Training Plans" with "Current Training Plans"
- Show active programs with progress indicators
- Quick actions: "View Plan", "Chat with AI", "Generate Next Week"

#### **1.3 Weekly Calendar Preview**
- Mini calendar showing current week's training schedule
- Exercise names only (no details - that's for training page)
- Click to navigate to full training page

### **PRIORITY 2: Training Page Redesign**

#### **2.1 Split-Screen Layout**
```typescript
// Create app/training/page.tsx
<div className="flex h-screen">
  {/* Main Training Plan - 2/3 width */}
  <div className="w-2/3 overflow-y-auto">
    <WeeklyPlanView />
  </div>
  
  {/* AI Chat Sidebar - 1/3 width */}
  <div className="w-1/3 border-l border-gray-200">
    <AIChatPanel />
  </div>
</div>
```

#### **2.2 Weekly Plan Component**
```typescript
// Components needed:
- WeeklyPlanView: Shows 7 days with exercises
- DayCard: Expandable day view with exercises
- ExerciseCard: Individual exercise with reps/weight/duration
- NutritionPanel: Daily nutrition suggestions
- WeekNavigation: Previous/Next week, Generate Next Week
```

#### **2.3 Exercise Display (FitBod-style)**
```typescript
interface ExerciseDisplay {
  name: string;
  sets?: number;
  reps?: number;
  weight?: string;
  duration?: string;
  distance?: string;
  instructions: string[];
  coachingTips: string[];
  alternatives: string[];
  completed: boolean;
  skipped: boolean;
  notes?: string;
}
```

### **PRIORITY 3: AI Chat Integration**

#### **3.1 Training Page Chat Panel**
- Persistent chat history
- Context-aware of current training plan
- Quick action buttons:
  - "Replace this exercise"
  - "I skipped today, adjust the week"
  - "Increase/decrease intensity"
  - "Generate next week"

#### **3.2 AI Context Enhancement**
```typescript
// Update lib/ai/gemini.js system prompts
const TRAINING_CONTEXT_PROMPT = `
You are viewing the user's current training plan. You can:
1. Modify individual exercises
2. Adjust weekly structure
3. Regenerate remaining days
4. Provide coaching guidance
5. Suggest alternatives

Current plan context: {planData}
User's logged activities: {activityLog}
`;
```

### **PRIORITY 4: Activity Logging System**

#### **4.1 Logging Interface**
```typescript
// Create components/ActivityLogger.tsx
interface ActivityLog {
  date: string;
  exercises: {
    exerciseId: string;
    completed: boolean;
    skipped: boolean;
    actualSets?: number;
    actualReps?: number;
    actualWeight?: string;
    actualDuration?: string;
    notes?: string;
    rpe?: number; // Rate of Perceived Exertion
  }[];
  dayCompleted: boolean;
  daySkipped: boolean;
  dayNotes?: string;
}
```

#### **4.2 Adaptive AI Responses**
```typescript
// lib/services/adaptiveTraining.service.ts
class AdaptiveTrainingService {
  analyzeActivityPattern(logs: ActivityLog[]): TrainingAdjustment {
    // Analyze completion rates, skipped exercises, RPE patterns
    // Return recommendations for plan adjustments
  }
  
  regenerateWeekBasedOnSkippedDay(
    currentWeek: WeekPlan, 
    skippedDay: string
  ): WeekPlan {
    // Redistribute skipped exercises across remaining days
    // Adjust intensity to compensate
  }
}
```

### **PRIORITY 5: Navigation & History**

#### **5.1 Week Navigation**
```typescript
// components/WeekNavigation.tsx
interface WeekNavigationProps {
  currentWeek: number;
  totalWeeks: number;
  canGenerateNext: boolean;
  onPreviousWeek: () => void;
  onNextWeek: () => void;
  onGenerateNextWeek: () => void;
}
```

#### **5.2 Plan Management**
```typescript
// lib/services/planManagement.service.ts
class PlanManagementService {
  pausePlan(planId: string): void;
  completePlan(planId: string): void;
  archivePlan(planId: string): void;
  generateNextWeek(planId: string): Promise<WeekPlan>;
  addDayToCurrentWeek(planId: string, day: string): Promise<DayPlan>;
}
```

## 🎨 **UI/UX SPECIFICATIONS**

### **Dashboard Layout**
```
┌─────────────────────────────────────────────────────────┐
│ Dynamic Hero (based on training discipline)            │
├─────────────────────────────────────────────────────────┤
│ Current Training Plans                                  │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐        │
│ │ Plan 1      │ │ Plan 2      │ │ + New Plan  │        │
│ │ Week 3/12   │ │ Week 1/8    │ │             │        │
│ │ [View Plan] │ │ [View Plan] │ │             │        │
│ └─────────────┘ └─────────────┘ └─────────────┘        │
├─────────────────────────────────────────────────────────┤
│ This Week Preview                                       │
│ Mon: Upper Body | Tue: Cardio | Wed: Rest | ...        │
├─────────────────────────────────────────────────────────┤
│ AI Chat Window                                          │
│ [Conversation continues here...]                        │
└─────────────────────────────────────────────────────────┘
```

### **Training Page Layout**
```
┌─────────────────────────────────┬─────────────────────────┐
│ WEEKLY TRAINING PLAN (2/3)      │ AI CHAT (1/3)          │
├─────────────────────────────────┼─────────────────────────┤
│ Week 3 of 12 - March 4-10      │ Chat History            │
│ ┌─ Monday ─────────────────────┐ │ [Previous messages...]  │
│ │ ✓ Push-ups: 3x12            │ │                         │
│ │ ○ Pull-ups: 3x8             │ │ Quick Actions:          │
│ │ ○ Plank: 3x30s              │ │ [Replace Exercise]      │
│ │ [Expand for details]        │ │ [Adjust Intensity]      │
│ └─────────────────────────────┘ │ [Skip Day & Adjust]     │
│ ┌─ Tuesday ────────────────────┐ │                         │
│ │ Cardio Day                  │ │ Message Input:          │
│ │ [Click to expand]           │ │ [Text input field]      │
│ └─────────────────────────────┘ │ [Send Button]           │
│ [Previous Week] [Next Week]     │                         │
│ [Generate Next Week]            │                         │
└─────────────────────────────────┴─────────────────────────┘
```

## 📊 **DATA MODELS**

### **Enhanced Training Plan Structure**
```typescript
interface TrainingPlan {
  id: string;
  name: string;
  discipline: string;
  status: 'active' | 'paused' | 'completed' | 'archived';
  createdAt: Date;
  startDate: Date;
  currentWeek: number;
  totalWeeks: number;
  weeks: WeekPlan[];
  activityLogs: ActivityLog[];
  aiConversationId: string;
}

interface WeekPlan {
  weekNumber: number;
  startDate: string;
  days: DayPlan[];
  nutritionGuidance: NutritionGuidance;
  weeklyGoals: string[];
  generated: boolean;
}

interface DayPlan {
  day: string;
  date: string;
  exercises: Exercise[];
  focus: string;
  estimatedDuration: string;
  completed: boolean;
  skipped: boolean;
  notes?: string;
}
```

## 🚀 **IMPLEMENTATION PHASES**

### **Phase 1: Core Planning Interface (2-3 weeks)**
1. Dashboard hero section updates
2. Current training plans display
3. Weekly calendar preview
4. Basic training page layout

### **Phase 2: AI Integration (2-3 weeks)**
1. Training page split-screen layout
2. AI chat panel with context
3. Exercise modification through chat
4. Week regeneration capabilities

### **Phase 3: Activity Logging (2 weeks)**
1. Exercise completion tracking
2. Day-level logging
3. Adaptive plan adjustments
4. Skip day compensation

### **Phase 4: Advanced Features (2-3 weeks)**
1. Multiple plan support (Premium)
2. Plan archiving and history
3. Advanced AI coaching insights
4. Nutrition integration enhancement

## 🎯 **SUCCESS METRICS**

### **User Engagement**
- Time spent in AI conversation before first plan creation
- Number of plan modifications through AI chat
- Weekly plan completion rates
- User retention after first month

### **AI Effectiveness**
- Plan modification success rate
- User satisfaction with AI suggestions
- Conversation length before plan generation
- Exercise substitution acceptance rate

### **Business Metrics**
- Free to premium conversion rate
- Average plan duration
- Multiple plan usage (premium feature)
- User lifetime value

## 🔧 **TECHNICAL REQUIREMENTS**

### **Database Schema Updates**
```sql
-- Add to existing user profiles
ALTER TABLE users ADD COLUMN current_discipline VARCHAR(50);
ALTER TABLE users ADD COLUMN hero_image_preference VARCHAR(100);

-- Training plans table
CREATE TABLE training_plans (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  name VARCHAR(255),
  discipline VARCHAR(50),
  status VARCHAR(20),
  current_week INTEGER,
  total_weeks INTEGER,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

-- Activity logs table
CREATE TABLE activity_logs (
  id UUID PRIMARY KEY,
  plan_id UUID REFERENCES training_plans(id),
  date DATE,
  exercise_data JSONB,
  day_completed BOOLEAN,
  day_skipped BOOLEAN,
  notes TEXT,
  logged_at TIMESTAMP
);
```

### **API Endpoints Needed**
```typescript
// New API routes
POST /api/training-plans/create
GET /api/training-plans/:id
PUT /api/training-plans/:id/week/:weekNumber
POST /api/training-plans/:id/generate-next-week
POST /api/training-plans/:id/log-activity
PUT /api/training-plans/:id/modify-exercise
POST /api/ai-chat/training-context
```

## 📱 **MOBILE CONSIDERATIONS**

### **Responsive Design**
- Training page: Stack layout on mobile (plan on top, chat below)
- Swipe gestures for week navigation
- Collapsible exercise details
- Touch-friendly logging interface

### **Progressive Web App**
- Offline plan viewing
- Background sync for activity logs
- Push notifications for workout reminders
- Home screen installation

This implementation plan transforms MyPace AI into a sophisticated planning and coaching tool that focuses on intelligent program creation and continuous adaptation through AI conversation, exactly as you envisioned! 