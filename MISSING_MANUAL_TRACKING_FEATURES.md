# Missing Manual Tracking Features & Competition Calendar Integration

## 🎯 **COMPETITION CALENDAR INTEGRATION**

### **1. Competition/Event Management**
```typescript
interface Competition {
  id: string;
  name: string;
  type: 'marathon' | 'triathlon' | 'hyrox' | 'crossfit' | 'cycling' | 'swimming';
  date: Date;
  location: string;
  distance?: string; // "Olympic", "Half-Ironman", "Marathon", etc.
  priority: 'A' | 'B' | 'C'; // A-race = peak, B-race = tune-up, C-race = training
  status: 'planned' | 'registered' | 'completed' | 'cancelled';
  
  // Goal setting
  goalTime?: string;
  goalPlacement?: string;
  personalBest?: string;
  
  // Training integration
  peakingWeeks: number; // How many weeks to peak for this event
  taperWeeks: number; // Taper duration
  buildPhaseWeeks: number; // Build phase leading to peak
  
  // Results tracking
  actualTime?: string;
  placement?: number;
  splits?: CompetitionSplit[];
  raceReport?: string;
  photos?: string[];
}

interface CompetitionSplit {
  segment: string; // "Swim", "T1", "Bike", "T2", "Run", "Mile 1", etc.
  time: string;
  pace?: string;
  heartRate?: number;
  power?: number;
  notes?: string;
}
```

### **2. Multi-Event Periodization**
```typescript
interface SeasonPlan {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
  competitions: Competition[];
  
  // Periodization phases
  phases: PeriodizationPhase[];
  currentPhase: string;
  
  // Multi-event balancing
  primaryEvent: string; // Main goal event
  secondaryEvents: string[]; // Supporting events
  trainingDistribution: {
    aerobic: number; // percentage
    threshold: number;
    vo2max: number;
    neuromuscular: number;
  };
}

interface PeriodizationPhase {
  name: string;
  startDate: Date;
  endDate: Date;
  focus: string[];
  targetCompetitions: string[];
  trainingLoad: 'low' | 'moderate' | 'high' | 'peak' | 'recovery';
  keyWorkouts: string[];
}
```

### **3. AI Goal Completion Detection**
```typescript
interface GoalCompletionSignals {
  // Competition-based signals
  raceCompleted: boolean;
  goalTimeAchieved: boolean;
  seasonCompleted: boolean;
  
  // Training-based signals
  peakPhaseCompleted: boolean;
  fitnessTestsPassed: boolean;
  consistencyTargetMet: boolean;
  
  // Milestone signals
  distanceMilestoneReached: boolean;
  strengthMilestoneReached: boolean;
  skillMilestoneReached: boolean;
  
  // AI triggers for new goal setting
  readyForNextChallenge: boolean;
  plateauDetected: boolean;
  newInterestExpressed: boolean;
}
```

---

## 📊 **MANUAL TRACKING GAPS**

### **1. Recovery & Wellness Tracking**
```typescript
interface DailyWellness {
  date: Date;
  
  // Subjective measures (1-10 scale)
  sleepQuality: number;
  sleepDuration: number; // hours
  energyLevel: number;
  motivation: number;
  stressLevel: number;
  musclesSoreness: number;
  moodRating: number;
  
  // Objective measures (manual entry)
  restingHeartRate?: number;
  bodyWeight?: number;
  hydrationLevel: 'poor' | 'fair' | 'good' | 'excellent';
  
  // Recovery indicators
  readinessToTrain: number; // 1-10
  perceivedRecovery: number; // 1-10
  
  // Lifestyle factors
  alcoholConsumption?: number; // units
  caffeineIntake?: number; // mg
  supplementsTaken?: string[];
  
  // Notes
  notes?: string;
  symptoms?: string[]; // "headache", "joint pain", etc.
}
```

### **2. Training Load Management**
```typescript
interface TrainingLoadMetrics {
  // Session-level tracking
  sessionRPE: number; // 1-10
  sessionDuration: number; // minutes
  trainingStressScore: number; // RPE × duration
  
  // Weekly aggregation
  weeklyTSS: number;
  acuteTrainingLoad: number; // 7-day average
  chronicTrainingLoad: number; // 42-day average
  trainingStressBalance: number; // CTL - ATL
  
  // Auto-regulation triggers
  fatigueIndex: number;
  readinessScore: number;
  recommendedIntensity: 'low' | 'moderate' | 'high' | 'rest';
  
  // Deload recommendations
  deloadRecommended: boolean;
  deloadReason: string[];
  lastDeloadWeek: Date;
}
```

### **3. Nutrition & Hydration Tracking**
```typescript
interface NutritionLog {
  date: Date;
  
  // Macronutrients (grams)
  carbohydrates: number;
  protein: number;
  fat: number;
  fiber: number;
  
  // Calories
  totalCalories: number;
  targetCalories: number;
  
  // Hydration
  waterIntake: number; // liters
  electrolyteIntake?: number; // mg sodium
  
  // Timing
  preWorkoutNutrition?: string;
  duringWorkoutNutrition?: string;
  postWorkoutNutrition?: string;
  
  // Quality indicators
  vegetableServings: number;
  fruitServings: number;
  processedFoodScore: number; // 1-10 (10 = whole foods)
  
  // Performance correlation
  energyLevels: number; // 1-10
  digestiveComfort: number; // 1-10
  cravings: string[];
}
```

### **4. Body Composition & Measurements**
```typescript
interface BodyComposition {
  date: Date;
  
  // Basic measurements
  weight: number; // kg
  bodyFatPercentage?: number;
  muscleMass?: number; // kg
  
  // Circumferences (cm)
  waist?: number;
  chest?: number;
  arms?: number;
  thighs?: number;
  
  // Performance measurements
  vo2Max?: number;
  restingHeartRate: number;
  maxHeartRate?: number;
  
  // Strength benchmarks
  benchPress1RM?: number;
  squat1RM?: number;
  deadlift1RM?: number;
  
  // Endurance benchmarks
  ftp?: number; // cycling functional threshold power
  runningThreshold?: string; // pace per km
  swimThreshold?: string; // pace per 100m
  
  // Photos
  progressPhotos?: string[];
  notes?: string;
}
```

### **5. Injury & Pain Tracking**
```typescript
interface InjuryLog {
  id: string;
  date: Date;
  
  // Injury details
  bodyPart: string;
  injuryType: 'acute' | 'overuse' | 'chronic';
  severity: 'minor' | 'moderate' | 'severe';
  painLevel: number; // 1-10
  
  // Symptoms
  symptoms: string[]; // "swelling", "stiffness", "sharp pain"
  triggers: string[]; // "running", "squatting", "morning"
  
  // Treatment
  treatmentPlan?: string;
  medications?: string[];
  therapyType?: string;
  
  // Recovery tracking
  status: 'active' | 'healing' | 'recovered';
  returnToActivityDate?: Date;
  
  // Prevention notes
  preventionStrategies?: string[];
  modifiedExercises?: string[];
}
```

### **6. Equipment & Environment Tracking**
```typescript
interface EquipmentLog {
  // Gear tracking
  runningShoes: {
    brand: string;
    model: string;
    purchaseDate: Date;
    mileage: number;
    condition: 'new' | 'good' | 'worn' | 'replace';
  }[];
  
  bike: {
    type: string;
    lastMaintenance: Date;
    issues?: string[];
  };
  
  // Environmental conditions
  weather: {
    temperature: number;
    humidity: number;
    windSpeed?: number;
    conditions: 'sunny' | 'cloudy' | 'rainy' | 'snowy';
  };
  
  location: {
    indoor: boolean;
    altitude?: number;
    surface?: 'road' | 'trail' | 'track' | 'treadmill';
  };
}
```

---

## 🤖 **AI INTEGRATION POINTS**

### **1. Adaptive Programming**
```typescript
interface AIAdaptations {
  // Auto-regulation based on wellness
  intensityAdjustments: {
    recommended: 'increase' | 'maintain' | 'decrease' | 'rest';
    reason: string;
    confidence: number;
  };
  
  // Recovery recommendations
  recoveryProtocols: {
    sleepRecommendation: string;
    nutritionFocus: string[];
    activeRecoveryType: string;
    stressManagement: string[];
  };
  
  // Competition preparation
  peakingStrategy: {
    taperRecommendations: string[];
    raceStrategy: string[];
    nutritionPlan: string[];
  };
  
  // Goal progression
  nextGoalSuggestions: {
    shortTerm: string[];
    longTerm: string[];
    skillDevelopment: string[];
  };
}
```

### **2. Pattern Recognition**
```typescript
interface PerformancePatterns {
  // Training patterns
  optimalTrainingDays: string[]; // "Monday", "Wednesday"
  bestPerformanceTime: string; // "morning", "evening"
  recoveryPatterns: string[];
  
  // Nutrition patterns
  optimalPreWorkoutMeals: string[];
  energyDips: string[]; // times of day
  hydrationNeeds: number; // liters per training hour
  
  // Wellness patterns
  sleepRequirements: number; // hours for optimal performance
  stressImpactLevel: 'low' | 'moderate' | 'high';
  recoveryTimeNeeded: number; // hours between sessions
  
  // Performance predictors
  readinessIndicators: string[];
  fatigueWarnings: string[];
  peakPerformanceSignals: string[];
}
```

---

## 🎯 **IMPLEMENTATION PRIORITY**

### **Phase 1: Core Manual Tracking (Week 1-2)**
1. **Daily Wellness Check-in** - Simple 5-question morning survey
2. **Session RPE & Duration** - Post-workout quick log
3. **Basic Competition Calendar** - Add events, set goals
4. **Simple Recovery Tracking** - Sleep, energy, soreness

### **Phase 2: Advanced Tracking (Week 3-4)**
1. **Training Load Management** - TSS calculation and trends
2. **Nutrition Logging** - Macro tracking with performance correlation
3. **Body Composition Tracking** - Progress photos and measurements
4. **Equipment & Environment** - Gear tracking and conditions

### **Phase 3: AI Integration (Week 5-6)**
1. **Auto-regulation** - AI adjusts training based on wellness
2. **Pattern Recognition** - AI identifies optimal training conditions
3. **Competition Preparation** - AI creates peaking and taper plans
4. **Goal Completion Detection** - AI suggests new challenges

### **Phase 4: External Integration Prep (Week 7-8)**
1. **Data Export/Import** - Prepare for Polar, iPhone Health sync
2. **API Endpoints** - Create integration points for external data
3. **Data Validation** - Ensure manual data quality before automation
4. **User Preference Settings** - Manual vs automatic data preferences

---

## 🔗 **EXTERNAL INTEGRATION READINESS**

### **Polar Integration Points**
- HRV data → Daily wellness scores
- Training load → TSS calculations  
- Sleep data → Recovery recommendations
- Heart rate zones → Intensity distribution

### **iPhone Health Integration Points**
- Steps/activity → Daily movement tracking
- Sleep data → Recovery analysis
- Heart rate → Resting HR trends
- Workout data → Session correlation

### **Competition Calendar Sync**
- Strava events → Competition calendar
- TrainingPeaks races → Goal setting
- Local race calendars → Event discovery
- Club events → Team challenges

This comprehensive manual tracking system would create a complete hybrid athletics platform that could then seamlessly integrate with external devices and services while maintaining full functionality for users who prefer manual entry or don't have access to advanced tracking devices. 