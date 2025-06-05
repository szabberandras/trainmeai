export const HIP_FUNCTION_REHAB_PLANS = [
  {
    program: "Hip Function & Rehab",
    week: 1,
    day: 1,
    routine: [
      "dynamic-side-lunge",
      "tick-tocks-with-miniband",
      "single-leg-deadlift-with-miniband",
      "seated-twist",
      "superman-sequence",
      "wide-dynamic-cobra",
      "leaning-quad-stretch",
      "runners-lunge",
      "childs-pose"
    ]
  },
  {
    program: "Hip Function & Rehab",
    week: 1,
    day: 2,
    routine: [
      "upper-body-around-the-world",
      "single-leg-calf-raise",
      "single-leg-hip-flexor-extension-with-pole",
      "speed-skater-lunges",
      "seated-toe-rainbows-with-chair",
      "decline-plank-with-chair",
      "standing-quad",
      "elevated-pigeon-with-chair",
      "knee-hug-rock"
    ]
  },
  {
    program: "Hip Function & Rehab",
    week: 1,
    day: 3,
    routine: [
      "monster-walks-with-miniband",
      "single-leg-hamstring-curl-with-miniband",
      "pulsing-squat",
      "table-top-crunch",
      "supine-adductor-squeeze",
      "half-kneeling-quad-stretch",
      "dynamic-downward-dog",
      "childs-pose-twist",
      "roll-bottom-of-feet"
    ]
  },
  {
    program: "Hip Function & Rehab",
    week: 2,
    day: 1,
    routine: [
      "half-squat-semi-circles",
      "heel-toe-rocks",
      "squat-swing-with-dumbbells",
      "half-forward-fold",
      "arch-lifts",
      "kneeling-toe-stretch",
      "reverse-hyperextensions",
      "adductor-lifts",
      "runners-lunge"
    ]
  },
  {
    program: "Hip Function & Rehab",
    week: 2,
    day: 2,
    routine: [
      "half-kneeling-twist",
      "kneeling-hip-bridge",
      "speed-skater-lunges",
      "lifted-hip-flexor-stretch-with-chair",
      "standing-hamstring-stretch-with-chair",
      "leg-extensions-with-chair",
      "elevated-bridge-with-chair",
      "extended-flutter-kicks",
      "side-plank-hip-dip",
      "knee-hug-rock"
    ]
  },
  {
    program: "Hip Function & Rehab",
    week: 2,
    day: 3,
    routine: [
      "dynamic-side-lunge",
      "tick-tocks-with-miniband",
      "pulsing-squat",
      "single-leg-calf-raise",
      "fire-hydrants-with-internal-rotation",
      "prone-y-raises",
      "half-kneeling-quad-stretch",
      "dynamic-downward-dog",
      "roll-bottom-of-feet"
    ]
  },
  {
    program: "Hip Function & Rehab",
    week: 3,
    day: 1,
    routine: [
      "half-squat-semi-circles",
      "squat-swing-with-dumbbells",
      "heel-toe-rocks",
      "single-leg-hamstring-curl-with-miniband",
      "half-forward-fold",
      "standing-quad",
      "elevated-pigeon-with-chair",
      "lifted-hip-flexor-stretch-with-chair"
    ]
  },
  {
    program: "Hip Function & Rehab",
    week: 3,
    day: 2,
    routine: [
      "half-kneeling-twist",
      "single-leg-hip-flexor-extension-with-pole",
      "side-plank-hip-dip",
      "extended-flutter-kicks",
      "supine-adductor-squeeze",
      "superman-sequence",
      "leaning-quad-stretch",
      "childs-pose",
      "upper-body-around-the-world"
    ]
  },
  {
    program: "Hip Function & Rehab",
    week: 3,
    day: 3,
    routine: [
      "single-leg-deadlift-with-miniband",
      "monster-walks-with-miniband",
      "adductor-lifts",
      "seated-twist",
      "reverse-hyperextensions",
      "leg-extensions-with-chair",
      "arch-lifts",
      "standing-quad",
      "kneeling-toe-stretch"
    ]
  }
];

/**
 * Get Hip Function & Rehab training plan by week and day
 */
export function getHipFunctionRehabPlan(week: number, day: number) {
  return HIP_FUNCTION_REHAB_PLANS.find(plan => plan.week === week && plan.day === day);
}

/**
 * Get all Hip Function & Rehab training plans for a specific week
 */
export function getHipFunctionRehabWeek(week: number) {
  return HIP_FUNCTION_REHAB_PLANS.filter(plan => plan.week === week);
}

/**
 * Get all Hip Function & Rehab training plans
 */
export function getAllHipFunctionRehabPlans() {
  return HIP_FUNCTION_REHAB_PLANS;
} 