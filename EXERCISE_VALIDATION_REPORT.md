# Exercise Reference Validation Report

Generated: 2025-06-08T19:34:00.649Z

## Summary Statistics

- **Total References**: 52
- **Unique References**: 52
- **Database Exercises**: 314
- **Exact Matches**: 49
- **Missing Exercises**: 3
- **Potential Matches Found**: 3

## Missing Exercises

### Exercises with Potential Matches
- **bulgarian-split-squat** → Potential matches: squat
- **incline-push-ups** → Potential matches: push-up, push-ups
- **tricep-dips-chair** → Potential matches: tricep-dips

### Exercises with No Matches


## Training Program References

### structured-training-programs.ts
- **Total References**: 52
- **Missing**: 3
- **Matched**: 49

#### Missing Exercises in this file:
- bulgarian-split-squat
- incline-push-ups
- tricep-dips-chair

### crossfit-training.ts
- **Total References**: 0
- **Missing**: 0
- **Matched**: 0

#### Missing Exercises in this file:
None

### progressive-strength-training.ts
- **Total References**: 0
- **Missing**: 0
- **Matched**: 0

#### Missing Exercises in this file:
None

### hyrox-programs.ts
- **Total References**: 0
- **Missing**: 0
- **Matched**: 0

#### Missing Exercises in this file:
None

### cycling-training.ts
- **Total References**: 0
- **Missing**: 0
- **Matched**: 0

#### Missing Exercises in this file:
None

### half-marathon-plans.ts
- **Total References**: 0
- **Missing**: 0
- **Matched**: 0

#### Missing Exercises in this file:
None


## Recommended Actions

### 1. Add Missing Exercises
The following exercises should be added to the database:


### 2. Fix Naming Inconsistencies
Update training program files to use correct exercise names:
- Replace "bulgarian-split-squat" with "squat" (best match)
- Replace "incline-push-ups" with "push-up" (best match)
- Replace "tricep-dips-chair" with "tricep-dips" (best match)

### 3. Validation System
Consider implementing:
- Automated validation in CI/CD
- TypeScript types for exercise references
- Linting rules for exercise name consistency

## Next Steps

1. Review this report
2. Add genuinely missing exercises to database
3. Update training program files with correct names
4. Implement validation system to prevent future issues
