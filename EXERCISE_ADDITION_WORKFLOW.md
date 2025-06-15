# Exercise Addition Workflow

## ⚠️ CRITICAL: This process MUST be followed when adding new exercises

This document outlines the complete workflow for adding new exercises to the MyPace fitness app. **This process should happen every time exercises are added initially** to ensure database consistency and AI accessibility.

## 🔄 Complete Workflow

### 1. Pre-Addition: Duplicate Detection
**ALWAYS check for duplicates first** to avoid adding exercises that already exist.

```bash
# Search for potential duplicates
grep -r "exercise-name" lib/exercises/categories/
```

**Common duplicate patterns to check:**
- Similar names (e.g., "squat" vs "bodyweight-squat")
- Variations (e.g., "push-up" vs "pushup")
- Alternative names (e.g., "plank" vs "front-plank")

### 2. Exercise Data Preparation
Ensure all new exercises follow the standard format:

```javascript
{
  id: 'exercise-id',
  name: 'Exercise Name',
  category: 'strength|core|flexibility|cardio|plyometric',
  equipment: ['Bodyweight', 'Dumbbells', etc.],
  muscleGroups: ['Primary', 'Secondary'],
  difficulty: 1-5,
  instructions: ['Step 1', 'Step 2', ...],
  safetyNotes: ['Safety note 1', ...],
  modifications: {
    beginner: 'Beginner modification',
    advanced: 'Advanced progression',
    equipment_alternatives: {}
  },
  metrics: {
    type: 'reps|time|distance',
    defaultValue: number,
    progressionRate: number,
    unit: 'repetitions|seconds|meters'
  },
  coaching: {
    setup: ['Setup instruction'],
    execution: ['Execution cue'],
    common_mistakes: ['Common mistake'],
    breathing: 'Breathing pattern'
  }
}
```

### 3. Category Assignment
Map exercises to the correct category files:

| Category | File Path | Exercise Types |
|----------|-----------|----------------|
| **Strength** | `lib/exercises/categories/strength.ts` | Weight training, bodyweight strength |
| **Core** | `lib/exercises/categories/core.ts` | Abdominal, stability exercises |
| **Flexibility** | `lib/exercises/categories/flexibility.ts` | Stretching, mobility, yoga poses |
| **Cardio** | `lib/exercises/categories/cardio.ts` | Cardiovascular exercises |
| **Plyometric** | `lib/exercises/categories/plyometric.ts` | Jump training, explosive movements |

### 4. Database Addition
Run the batch addition script:

```bash
# From project root
node scripts/add-new-exercises-batch.js
```

**Expected output:**
```
Adding new exercises to database...
Added X exercises to /path/to/strength.ts
Added X exercises to /path/to/core.ts
Added X exercises to /path/to/flexibility.ts
Finished adding new exercises!
```

### 5. Verification Steps

#### A. File Verification
Check that exercises were added correctly:

```bash
# Verify exercise was added to correct category
grep -A 5 "exercise-id" lib/exercises/categories/strength.ts
```

#### B. AI Accessibility Test
Test that the AI can access new exercises:

```bash
# Test AI connection (requires running dev server)
curl -X POST http://localhost:3001/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Can you recommend a workout with single-leg-squat?",
    "userId": "test-user",
    "personalization": {"selectedPersona": "FitCoach"}
  }'
```

#### C. Database Integration Check
Verify exercises appear in the main exercise database:

```bash
# Check if exercise is exported in main index
grep -r "single-leg-squat" lib/exercises/categories/index.ts
```

## 🚨 Common Issues & Solutions

### Issue: Exercise Not Found by AI
**Cause:** Exercise not properly added to category file
**Solution:** Re-run the batch script or manually add to the correct category

### Issue: Duplicate Exercise Error
**Cause:** Exercise already exists with different ID
**Solution:** Check existing exercises and either skip or create variation

### Issue: Category File Too Large
**Cause:** Category files can become very large (10,000+ lines)
**Solution:** Use the batch script which handles large files properly

## 📋 Post-Addition Checklist

- [ ] Exercises added to correct category files
- [ ] No duplicate exercises created
- [ ] AI can access new exercises
- [ ] Exercise format follows standard structure
- [ ] All required fields populated
- [ ] Safety notes and modifications included
- [ ] Coaching cues provided

## 🔧 Maintenance

### Regular Tasks
1. **Monthly:** Review for duplicate exercises
2. **Quarterly:** Validate exercise data completeness
3. **As needed:** Update exercise progressions and modifications

### File Size Monitoring
Monitor category file sizes to prevent performance issues:

```bash
# Check file sizes
ls -lh lib/exercises/categories/*.ts
```

## 📝 Notes for Developers

- **Always use the batch script** for adding multiple exercises
- **Test AI accessibility** after each addition
- **Document any new exercise categories** in this file
- **Keep exercise IDs consistent** with naming conventions
- **Include comprehensive coaching cues** for better AI recommendations

---

**Remember: This workflow ensures exercise database consistency and immediate AI accessibility for workout recommendations.** 