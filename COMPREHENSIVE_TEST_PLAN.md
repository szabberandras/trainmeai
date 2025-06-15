# 🧪 Comprehensive Test Plan - Progressive Training System

## **Phase 1: Core System Functionality**

### **1.1 Authentication & User Management**
- [ ] **New User Registration**
  - Register with email/password
  - Register with Google OAuth
  - Verify email verification flow
  - Check user profile creation in Firestore

- [ ] **Existing User Login**
  - Login with email/password
  - Login with Google OAuth
  - Test session persistence
  - Test logout functionality

- [ ] **User Profile Management**
  - View profile page
  - Update profile information
  - Check profile data persistence

### **1.2 Onboarding System**
- [ ] **Complete Onboarding Flow**
  - Start onboarding from dashboard
  - Test discipline selection (auto-advance)
  - Complete goal-focused path
  - Complete fitness-focused path
  - Verify progress saving to Firestore
  - Test resume functionality (refresh page mid-onboarding)

- [ ] **Onboarding Data Persistence**
  - Check onboarding answers saved correctly
  - Verify user redirected to dashboard after completion
  - Test onboarding skip detection

### **1.3 Navigation & Layout**
- [ ] **Navigation Functionality**
  - Test all navigation links
  - Verify settings button works on all pages
  - Check responsive navigation on mobile
  - Test navigation state persistence

- [ ] **Page Loading**
  - Dashboard loads correctly
  - Training calendar loads
  - Programs page loads
  - Profile page loads
  - All pages show proper loading states

## **Phase 2: Progressive Training System**

### **2.1 Program Creation**
- [ ] **API Endpoint Testing**
  ```bash
  # Test program creation API
  curl -X POST http://localhost:3006/api/progressive-training/create-program \
    -H "Content-Type: application/json" \
    -d '{
      "userId": "test-user-id",
      "goal": "Ironman 2026",
      "targetDate": "2026-07-15",
      "userProfile": {"experience": "intermediate"},
      "initialAssessment": {}
    }'
  ```

- [ ] **Program Framework Generation**
  - Test Ironman program creation (40-week framework)
  - Test Marathon program creation (20-week framework)
  - Test Strength program creation (12-week framework)
  - Test General Fitness program creation (8-week framework)
  - Verify only Week 1 is generated initially

### **2.2 Week Generation Logic**
- [ ] **Prerequisites Checking**
  ```bash
  # Test week generation with incomplete previous week
  curl -X POST http://localhost:3006/api/progressive-training/generate-next-week \
    -H "Content-Type: application/json" \
    -d '{
      "programId": "test-program-id",
      "userId": "test-user-id",
      "forceGenerate": false
    }'
  ```

- [ ] **AI Analysis & Adaptation**
  - Test with 90%+ completion rate (should progress normally)
  - Test with 40% completion rate (should block progression)
  - Test with missing key workouts (should require completion)
  - Test force generation override

### **2.3 Discipline-Specific Progression**
- [ ] **Marathon Progression**
  - Test existing `calculateMarathonMileageProgression`
  - Verify stepback weeks every 3rd week
  - Check long run progression (40% of weekly mileage)

- [ ] **Cycling Progression**
  - Test `calculateCyclingProgression` function
  - Verify 3:1 progression (3 build, 1 recovery)
  - Check FTP progression calculations
  - Test polarized training distribution

- [ ] **Strength Progression**
  - Test `calculateStrengthProgression` function
  - Verify 4:1 progression (4 build, 1 deload)
  - Check progressive overload calculations
  - Test experience-based adaptations

- [ ] **Swimming Progression**
  - Test `calculateSwimmingProgression` function
  - Verify technique-first approach
  - Check conservative volume increases (8%)
  - Test stroke rotation logic

- [ ] **Triathlon Progression**
  - Test `calculateTriathlonProgression` function
  - Verify sport distribution (15% swim, 50% bike, 35% run)
  - Check brick workout integration
  - Test race simulation timing

## **Phase 3: Training Calendar & Workout Display**

### **3.1 Training Calendar**
- [ ] **Calendar Views**
  - Test week view functionality
  - Test list view functionality
  - Verify program switching
  - Check empty state handling

- [ ] **Program Integration**
  - View generated weeks in calendar
  - Check placeholder future weeks
  - Test "Generate Next Week" button
  - Verify prerequisite warnings display

### **3.2 Enhanced Workout Display**
- [ ] **Workout Interface**
  - Test split-screen layout (2/3 main, 1/3 AI chat)
  - Verify AI chat panel sliding functionality
  - Check exercise card display (FitBod-style)
  - Test nutrition panel functionality

- [ ] **Exercise Management**
  - Test exercise completion tracking
  - Verify set-by-set logging
  - Check alternative exercise suggestions
  - Test coaching instructions expansion

- [ ] **AI Chat Integration**
  - Test workout modification requests
  - Verify quick action buttons
  - Check conversation persistence
  - Test exercise substitution suggestions

## **Phase 4: AI Coaching System**

### **4.1 Coach Persona Activation**
- [ ] **Experience-Based Activation**
  - Test BeginnerGuide AI for new users
  - Test FitCoach AI for intermediate users
  - Test SportSpecific AI for advanced users
  - Verify persona-specific responses

- [ ] **Coaching Insights Generation**
  - Test performance pattern detection
  - Verify coaching message generation
  - Check goal-specific adaptations
  - Test prerequisite coaching messages

### **4.2 Performance Analysis**
- [ ] **Pattern Detection**
  - Test high consistency detection (90%+ completion)
  - Test low consistency detection (<70% completion)
  - Test key workout skipping detection
  - Test fatigue pattern recognition (high RPE)

- [ ] **Adaptive Responses**
  - Verify volume reduction for low completion
  - Check key workout emphasis for skipping
  - Test recovery addition for high fatigue
  - Verify progression maintenance for high consistency

## **Phase 5: Data Persistence & Integration**

### **5.1 Firestore Integration**
- [ ] **Program Storage**
  - Verify progressive programs save correctly
  - Check week generation updates program
  - Test program retrieval by user
  - Verify data structure integrity

- [ ] **Workout Completion Tracking**
  - Test workout completion persistence
  - Verify feedback storage (RPE, difficulty, notes)
  - Check completion rate calculations
  - Test prerequisite checking logic

### **5.2 Exercise Database Integration**
- [ ] **Exercise References**
  - Verify all exercise IDs resolve correctly
  - Test exercise detail retrieval
  - Check coaching instruction display
  - Test alternative exercise suggestions

## **Phase 6: Error Handling & Edge Cases**

### **6.1 API Error Handling**
- [ ] **Invalid Requests**
  - Test missing required parameters
  - Test invalid user IDs
  - Test non-existent program IDs
  - Verify proper error responses

- [ ] **Database Errors**
  - Test Firestore connection issues
  - Test data corruption scenarios
  - Verify graceful degradation
  - Check error message clarity

### **6.2 UI Error States**
- [ ] **Loading States**
  - Test loading spinners display
  - Verify timeout handling
  - Check retry mechanisms
  - Test offline behavior

- [ ] **Empty States**
  - Test no programs state
  - Test no workouts state
  - Test no exercises state
  - Verify helpful messaging

## **Phase 7: Performance & Optimization**

### **7.1 Load Testing**
- [ ] **Page Load Times**
  - Measure dashboard load time
  - Test training calendar performance
  - Check workout page load speed
  - Verify image optimization

- [ ] **API Performance**
  - Test program creation speed
  - Measure week generation time
  - Check database query performance
  - Verify caching effectiveness

### **7.2 Mobile Responsiveness**
- [ ] **Mobile Layout**
  - Test responsive navigation
  - Verify workout display on mobile
  - Check calendar mobile view
  - Test touch interactions

## **Phase 8: Integration Testing**

### **8.1 End-to-End User Journeys**
- [ ] **New User Complete Journey**
  1. Register new account
  2. Complete onboarding (Ironman 2026)
  3. Review generated Week 1
  4. Complete some workouts (80% completion)
  5. Generate Week 2
  6. Verify AI coaching insights

- [ ] **Existing User Journey**
  1. Login to existing account
  2. View training calendar
  3. Start today's workout
  4. Use AI chat for modifications
  5. Complete workout with feedback
  6. Check progress tracking

### **8.2 Cross-Browser Testing**
- [ ] **Browser Compatibility**
  - Test in Chrome
  - Test in Safari
  - Test in Firefox
  - Test in Edge
  - Verify consistent behavior

## **Test Execution Checklist**

### **Pre-Test Setup**
- [ ] Ensure development server is running (`npm run dev`)
- [ ] Verify Firebase connection is active
- [ ] Check all environment variables are set
- [ ] Clear browser cache and cookies

### **Test Data Preparation**
- [ ] Create test user accounts
- [ ] Prepare sample onboarding data
- [ ] Set up test program scenarios
- [ ] Prepare workout completion data

### **Post-Test Verification**
- [ ] Check Firestore for data integrity
- [ ] Verify no console errors
- [ ] Check network requests in DevTools
- [ ] Review performance metrics

## **Critical Issues to Watch For**

### **🚨 High Priority**
- [ ] User authentication failures
- [ ] Onboarding data loss
- [ ] Program creation failures
- [ ] Week generation blocking incorrectly
- [ ] Workout completion not saving

### **⚠️ Medium Priority**
- [ ] Slow page load times
- [ ] Mobile layout issues
- [ ] AI chat response delays
- [ ] Exercise reference errors
- [ ] Navigation inconsistencies

### **📝 Low Priority**
- [ ] Minor UI inconsistencies
- [ ] Non-critical console warnings
- [ ] Performance optimizations
- [ ] Feature enhancement opportunities

## **Success Criteria**

✅ **System is ready for production when:**
- All Phase 1-2 tests pass (core functionality)
- No critical issues in Phase 6 (error handling)
- End-to-end journeys complete successfully
- Performance meets acceptable thresholds
- Mobile experience is fully functional

## **Test Reporting**

Document results in format:
```
✅ PASS: Feature works as expected
❌ FAIL: Feature broken, needs immediate fix
⚠️ PARTIAL: Feature works but has issues
🔄 SKIP: Test not applicable/blocked
``` 