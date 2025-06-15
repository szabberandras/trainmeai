# MyPace AI - Planning Tool Implementation Plan

## 🎯 CORE VISION
MyPace AI is a **planning and coaching tool** where users create training programs through AI conversation, view weekly plans in calendar format, and continuously refine their approach through ongoing AI dialogue. **No live tracking** - focus on intelligent planning and adaptation.

## 📋 USER FLOW OVERVIEW

### Phase 1: Onboarding & Initial Planning
1. **Cinematic Onboarding** ✅ (Already implemented)
2. **Dashboard with Dynamic Hero** - Based on training discipline
3. **AI Conversation & Plan Creation** - Through chat interface

### Phase 2: Training Plan Management  
4. **Training Page - Split Screen** - 2/3 plan view, 1/3 AI chat
5. **Activity Logging** - Simple completion tracking
6. **AI Adaptation** - Plan adjustments based on logged activities

### Phase 3: Premium Features
7. **Multiple Plans** (Premium) - Run multiple plans simultaneously
8. **Advanced Features** - Plan archiving, history, advanced AI insights

## 🏗️ IMPLEMENTATION PRIORITIES

### PRIORITY 1: Dashboard Updates
- Dynamic hero images based on user's training discipline
- Current training plans section (replace "Past Training Plans")
- Weekly calendar preview
- Enhanced AI chat with training context

### PRIORITY 2: Training Page Redesign
- Split-screen layout (2/3 training plan, 1/3 AI chat)
- Weekly plan view with expandable days
- Exercise cards with completion tracking
- Week navigation (Previous/Next/Generate)

### PRIORITY 3: Activity Logging & AI Adaptation
- Simple exercise completion checkboxes
- Day-level completion tracking
- AI plan adjustments based on logged activities
- "Skip day and regenerate week" functionality

## 🎨 UI/UX SPECIFICATIONS

### Dashboard Layout
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

### Training Page Layout
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

## 📊 CURRENT STATE ANALYSIS

### What We Have ✅
- **Cinematic Onboarding**: Complete personalization system
- **418 Exercises**: Across 19 categories, fully organized
- **AI Chat System**: Google Gemini integration with context
- **Dashboard**: Basic structure with AI chat
- **Training Calendar**: Week/list view with mock data
- **Exercise Database**: Professional-grade with instructions
- **User Profiles**: Multiple persona system
- **Authentication**: Complete Firebase integration

### What We Need 🔧
- **Training Page Redesign**: Split-screen layout
- **Dynamic Hero Images**: Based on user discipline
- **Activity Logging**: Simple completion tracking
- **AI Context Enhancement**: Training plan awareness
- **Week Navigation**: Previous/Next with generation
- **Plan Management**: Pause/Complete/Archive

## 🚀 IMPLEMENTATION PHASES

### Phase 1: Core Planning Interface (2-3 weeks)
1. Dashboard hero section updates
2. Current training plans display
3. Weekly calendar preview
4. Basic training page layout

### Phase 2: AI Integration (2-3 weeks)
1. Training page split-screen layout
2. AI chat panel with context
3. Exercise modification through chat
4. Week regeneration capabilities

### Phase 3: Activity Logging (2 weeks)
1. Exercise completion tracking
2. Day-level logging
3. Adaptive plan adjustments
4. Skip day compensation

### Phase 4: Advanced Features (2-3 weeks)
1. Multiple plan support (Premium)
2. Plan archiving and history
3. Advanced AI coaching insights
4. Nutrition integration enhancement

## 🎯 IMMEDIATE NEXT STEPS

### Step 1: Update Dashboard (Priority 1)
1. Add dynamic hero images based on user's primary discipline
2. Replace "Past Training Plans" with "Current Training Plans"
3. Add weekly calendar preview section
4. Update AI chat to be training-plan aware

### Step 2: Create Training Page (Priority 2)
1. Build split-screen layout (2/3 plan, 1/3 chat)
2. Create weekly plan view with expandable days
3. Add exercise cards with completion tracking
4. Integrate AI chat with training context

### Step 3: Activity Logging (Priority 3)
1. Simple checkbox completion for exercises
2. Day-level completion tracking
3. AI adaptation based on logged activities
4. "Skip day and adjust week" functionality

This transforms MyPace AI into a sophisticated planning and coaching tool focused on intelligent program creation and continuous adaptation through AI conversation!
