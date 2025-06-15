import { 
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  getDocs, 
  query, 
  where, 
  orderBy, 
  limit,
  updateDoc,
  serverTimestamp,
  writeBatch
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { 
  WorkoutCompletion, 
  QuickWorkoutCompletion, 
  WeeklyCompletionSummary,
  PerformancePattern,
  ExerciseCompletion
} from '@/lib/types/workout-completion';

export class WorkoutCompletionService {
  private static readonly COLLECTION = 'workout_completions';
  private static readonly WEEKLY_SUMMARIES_COLLECTION = 'weekly_completion_summaries';
  private static readonly PERFORMANCE_PATTERNS_COLLECTION = 'performance_patterns';

  /**
   * Save a complete workout completion with detailed exercise data
   */
  static async saveWorkoutCompletion(completion: Omit<WorkoutCompletion, 'id'>): Promise<string> {
    try {
      const completionId = `${completion.userId}_${completion.programId}_w${completion.weekNumber}_${completion.workoutId}`;
      
      const completionData = {
        ...completion,
        id: completionId,
        completedAt: serverTimestamp(),
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      };

      await setDoc(doc(db, this.COLLECTION, completionId), completionData);
      
      // Update weekly summary
      await this.updateWeeklySummary(completion.userId, completion.programId, completion.weekNumber);
      
      // Analyze performance patterns
      await this.analyzePerformancePatterns(completion.userId, completion.programId);
      
      return completionId;
    } catch (error) {
      console.error('Error saving workout completion:', error);
      throw new Error('Failed to save workout completion');
    }
  }

  /**
   * Save a quick workout completion (minimal data)
   */
  static async saveQuickCompletion(
    userId: string,
    programId: string,
    weekNumber: number,
    workoutId: string,
    workoutType: string,
    quickCompletion: QuickWorkoutCompletion
  ): Promise<string> {
    try {
      const completionId = `${userId}_${programId}_w${weekNumber}_${workoutId}`;
      
      const fullCompletion: Omit<WorkoutCompletion, 'id'> = {
        userId,
        programId,
        weekNumber,
        workoutId,
        workoutType,
        completedAt: new Date(),
        duration: quickCompletion.duration || 0,
        plannedDuration: 0, // Will be updated if available
        rpe: quickCompletion.rpe,
        overallRating: quickCompletion.rating,
        exercises: [],
        notes: quickCompletion.notes,
        energyLevel: 'moderate', // Default
        motivation: 'moderate', // Default
        difficultyRating: 'just-right', // Default
        isComplete: quickCompletion.completed,
        completionPercentage: quickCompletion.completed ? 100 : 0
      };

      return await this.saveWorkoutCompletion(fullCompletion);
    } catch (error) {
      console.error('Error saving quick completion:', error);
      throw new Error('Failed to save quick completion');
    }
  }

  /**
   * Get workout completion by ID
   */
  static async getWorkoutCompletion(completionId: string): Promise<WorkoutCompletion | null> {
    try {
      const docRef = doc(db, this.COLLECTION, completionId);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        const data = docSnap.data();
        return {
          ...data,
          completedAt: data.completedAt?.toDate() || new Date()
        } as WorkoutCompletion;
      }
      
      return null;
    } catch (error) {
      console.error('Error getting workout completion:', error);
      return null;
    }
  }

  /**
   * Get all completions for a user's program week
   */
  static async getWeekCompletions(
    userId: string, 
    programId: string, 
    weekNumber: number
  ): Promise<WorkoutCompletion[]> {
    try {
      const q = query(
        collection(db, this.COLLECTION),
        where('userId', '==', userId),
        where('programId', '==', programId),
        where('weekNumber', '==', weekNumber),
        orderBy('completedAt', 'desc')
      );
      
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        ...doc.data(),
        completedAt: doc.data().completedAt?.toDate() || new Date()
      })) as WorkoutCompletion[];
    } catch (error) {
      console.error('Error getting week completions:', error);
      return [];
    }
  }

  /**
   * Get recent completions for performance analysis
   */
  static async getRecentCompletions(
    userId: string, 
    programId: string, 
    limitCount: number = 20
  ): Promise<WorkoutCompletion[]> {
    try {
      const q = query(
        collection(db, this.COLLECTION),
        where('userId', '==', userId),
        where('programId', '==', programId),
        orderBy('completedAt', 'desc'),
        limit(limitCount)
      );
      
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        ...doc.data(),
        completedAt: doc.data().completedAt?.toDate() || new Date()
      })) as WorkoutCompletion[];
    } catch (error) {
      console.error('Error getting recent completions:', error);
      return [];
    }
  }

  /**
   * Update or create weekly completion summary
   */
  static async updateWeeklySummary(
    userId: string, 
    programId: string, 
    weekNumber: number
  ): Promise<void> {
    try {
      const completions = await this.getWeekCompletions(userId, programId, weekNumber);
      
      if (completions.length === 0) return;

      const summary = this.calculateWeeklySummary(userId, programId, weekNumber, completions);
      const summaryId = `${userId}_${programId}_w${weekNumber}`;
      
      await setDoc(doc(db, this.WEEKLY_SUMMARIES_COLLECTION, summaryId), {
        ...summary,
        updatedAt: serverTimestamp()
      });
    } catch (error) {
      console.error('Error updating weekly summary:', error);
    }
  }

  /**
   * Calculate weekly completion summary from completions
   */
  private static calculateWeeklySummary(
    userId: string,
    programId: string,
    weekNumber: number,
    completions: WorkoutCompletion[]
  ): WeeklyCompletionSummary {
    const totalWorkouts = 7; // Assume 7 days per week
    const completedWorkouts = completions.filter(c => c.isComplete).length;
    
    const averageRPE = completions.reduce((sum, c) => sum + c.rpe, 0) / completions.length;
    const averageRating = completions.reduce((sum, c) => sum + c.overallRating, 0) / completions.length;
    const averageDuration = completions.reduce((sum, c) => sum + c.duration, 0) / completions.length;
    
    // Identify key workouts (high intensity or long duration)
    const keyWorkouts = completions.filter(c => 
      c.rpe >= 7 || c.duration >= 60 || c.workoutType === 'long-run' || c.workoutType === 'tempo'
    );
    
    const keyWorkoutsCompleted = keyWorkouts.filter(w => w.isComplete).map(w => w.workoutId);
    const keyWorkoutsMissed = keyWorkouts.filter(w => !w.isComplete).map(w => w.workoutId);
    
    // Calculate scores
    const consistencyScore = Math.round((completedWorkouts / totalWorkouts) * 100);
    const adherenceScore = this.calculateAdherenceScore(completions);
    const progressionReadiness = this.calculateProgressionReadiness(completions);
    
    // Analyze patterns
    const commonChallenges = this.identifyCommonChallenges(completions);
    const positivePatterns = this.identifyPositivePatterns(completions);
    
    // Recovery indicators
    const energyLevels = completions.map(c => this.mapEnergyToNumber(c.energyLevel));
    const stressLevels = completions.map(c => this.mapStressToNumber(c.stressLevel || 'moderate'));
    
    const averageEnergyLevel = energyLevels.reduce((sum, level) => sum + level, 0) / energyLevels.length;
    const averageStressLevel = stressLevels.reduce((sum, level) => sum + level, 0) / stressLevels.length;
    const recoveryScore = this.calculateRecoveryScore(completions);
    
    return {
      userId,
      programId,
      weekNumber,
      totalWorkouts,
      completedWorkouts,
      completionPercentage: Math.round((completedWorkouts / totalWorkouts) * 100),
      averageRPE: Math.round(averageRPE * 10) / 10,
      averageRating: Math.round(averageRating * 10) / 10,
      averageDuration: Math.round(averageDuration),
      keyWorkoutsCompleted,
      keyWorkoutsMissed,
      consistencyScore,
      adherenceScore,
      progressionReadiness,
      commonChallenges,
      positivePatterns,
      averageEnergyLevel: Math.round(averageEnergyLevel * 10) / 10,
      averageStressLevel: Math.round(averageStressLevel * 10) / 10,
      recoveryScore,
      coachingNotes: this.generateCoachingNotes(completions),
      recommendedAdjustments: this.generateRecommendedAdjustments(completions),
      completedAt: new Date()
    };
  }

  /**
   * Analyze performance patterns for AI coaching
   */
  static async analyzePerformancePatterns(userId: string, programId: string): Promise<void> {
    try {
      const recentCompletions = await this.getRecentCompletions(userId, programId, 30);
      
      if (recentCompletions.length < 5) return; // Need minimum data
      
      const patterns = this.detectPerformancePatterns(userId, programId, recentCompletions);
      
      // Save patterns to Firestore
      const batch = writeBatch(db);
      
      patterns.forEach(pattern => {
        const patternId = `${userId}_${programId}_${pattern.patternType}_${Date.now()}`;
        const patternRef = doc(db, this.PERFORMANCE_PATTERNS_COLLECTION, patternId);
        batch.set(patternRef, {
          ...pattern,
          detectedAt: serverTimestamp()
        });
      });
      
      await batch.commit();
    } catch (error) {
      console.error('Error analyzing performance patterns:', error);
    }
  }

  /**
   * Detect performance patterns from completion data
   */
  private static detectPerformancePatterns(
    userId: string,
    programId: string,
    completions: WorkoutCompletion[]
  ): PerformancePattern[] {
    const patterns: PerformancePattern[] = [];
    
    // Consistency pattern
    const consistencyPattern = this.analyzeConsistencyPattern(completions);
    if (consistencyPattern) {
      patterns.push({
        userId,
        programId,
        patternType: 'consistency',
        ...consistencyPattern,
        detectedAt: new Date()
      });
    }
    
    // Intensity pattern
    const intensityPattern = this.analyzeIntensityPattern(completions);
    if (intensityPattern) {
      patterns.push({
        userId,
        programId,
        patternType: 'intensity',
        ...intensityPattern,
        detectedAt: new Date()
      });
    }
    
    // Recovery pattern
    const recoveryPattern = this.analyzeRecoveryPattern(completions);
    if (recoveryPattern) {
      patterns.push({
        userId,
        programId,
        patternType: 'recovery',
        ...recoveryPattern,
        detectedAt: new Date()
      });
    }
    
    return patterns;
  }

  /**
   * Helper methods for pattern analysis
   */
  private static analyzeConsistencyPattern(completions: WorkoutCompletion[]) {
    const completionRate = completions.filter(c => c.isComplete).length / completions.length;
    
    if (completionRate >= 0.8) {
      return {
        pattern: 'improving' as const,
        confidence: 0.9,
        dataPoints: completions.length,
        timeframe: '30 days',
        evidence: [`High completion rate: ${Math.round(completionRate * 100)}%`],
        recommendations: ['Continue current routine', 'Consider progressive overload'],
        priority: 'low' as const
      };
    } else if (completionRate < 0.5) {
      return {
        pattern: 'concerning' as const,
        confidence: 0.8,
        dataPoints: completions.length,
        timeframe: '30 days',
        evidence: [`Low completion rate: ${Math.round(completionRate * 100)}%`],
        recommendations: ['Review schedule feasibility', 'Consider reducing volume'],
        priority: 'high' as const
      };
    }
    
    return null;
  }

  private static analyzeIntensityPattern(completions: WorkoutCompletion[]) {
    const recentRPE = completions.slice(0, 7).map(c => c.rpe);
    const olderRPE = completions.slice(7, 14).map(c => c.rpe);
    
    if (recentRPE.length < 3 || olderRPE.length < 3) return null;
    
    const recentAvg = recentRPE.reduce((sum, rpe) => sum + rpe, 0) / recentRPE.length;
    const olderAvg = olderRPE.reduce((sum, rpe) => sum + rpe, 0) / olderRPE.length;
    
    const difference = recentAvg - olderAvg;
    
    if (difference > 1) {
      return {
        pattern: 'improving' as const,
        confidence: 0.7,
        dataPoints: recentRPE.length + olderRPE.length,
        timeframe: '14 days',
        evidence: [`RPE increasing: ${olderAvg.toFixed(1)} → ${recentAvg.toFixed(1)}`],
        recommendations: ['Monitor for overreaching', 'Ensure adequate recovery'],
        priority: 'medium' as const
      };
    }
    
    return null;
  }

  private static analyzeRecoveryPattern(completions: WorkoutCompletion[]) {
    const energyLevels = completions.map(c => this.mapEnergyToNumber(c.energyLevel));
    const lowEnergyCount = energyLevels.filter(level => level <= 2).length;
    
    if (lowEnergyCount / energyLevels.length > 0.4) {
      return {
        pattern: 'concerning' as const,
        confidence: 0.8,
        dataPoints: energyLevels.length,
        timeframe: '30 days',
        evidence: [`Low energy in ${Math.round((lowEnergyCount / energyLevels.length) * 100)}% of workouts`],
        recommendations: ['Prioritize sleep quality', 'Consider deload week', 'Review nutrition'],
        priority: 'high' as const
      };
    }
    
    return null;
  }

  /**
   * Helper methods for calculations
   */
  private static calculateAdherenceScore(completions: WorkoutCompletion[]): number {
    const plannedVsActual = completions.map(c => {
      if (c.plannedDuration === 0) return 1; // No planned duration
      return Math.min(c.duration / c.plannedDuration, 1.5); // Cap at 150%
    });
    
    const averageAdherence = plannedVsActual.reduce((sum, ratio) => sum + ratio, 0) / plannedVsActual.length;
    return Math.round(Math.min(averageAdherence, 1) * 100);
  }

  private static calculateProgressionReadiness(completions: WorkoutCompletion[]): number {
    const recentCompletions = completions.slice(0, 7);
    const completionRate = recentCompletions.filter(c => c.isComplete).length / recentCompletions.length;
    const averageRPE = recentCompletions.reduce((sum, c) => sum + c.rpe, 0) / recentCompletions.length;
    const averageRating = recentCompletions.reduce((sum, c) => sum + c.overallRating, 0) / recentCompletions.length;
    
    // Readiness based on completion rate, manageable RPE, and positive ratings
    const readinessScore = (
      (completionRate * 0.4) + 
      (Math.max(0, (8 - averageRPE) / 8) * 0.3) + 
      (averageRating / 5 * 0.3)
    );
    
    return Math.round(readinessScore * 100);
  }

  private static calculateRecoveryScore(completions: WorkoutCompletion[]): number {
    const energyLevels = completions.map(c => this.mapEnergyToNumber(c.energyLevel));
    const stressLevels = completions.map(c => this.mapStressToNumber(c.stressLevel || 'moderate'));
    
    const averageEnergy = energyLevels.reduce((sum, level) => sum + level, 0) / energyLevels.length;
    const averageStress = stressLevels.reduce((sum, level) => sum + level, 0) / stressLevels.length;
    
    // Higher energy and lower stress = better recovery
    const recoveryScore = ((averageEnergy / 5) * 0.6) + ((1 - (averageStress / 5)) * 0.4);
    return Math.round(recoveryScore * 100);
  }

  private static mapEnergyToNumber(energy: string): number {
    const mapping = { 'very-low': 1, 'low': 2, 'moderate': 3, 'high': 4, 'very-high': 5 };
    return mapping[energy as keyof typeof mapping] || 3;
  }

  private static mapStressToNumber(stress: string): number {
    const mapping = { 'very-low': 1, 'low': 2, 'moderate': 3, 'high': 4, 'very-high': 5 };
    return mapping[stress as keyof typeof mapping] || 3;
  }

  private static identifyCommonChallenges(completions: WorkoutCompletion[]): string[] {
    const challenges: string[] = [];
    
    const lowEnergyCount = completions.filter(c => c.energyLevel === 'low' || c.energyLevel === 'very-low').length;
    if (lowEnergyCount / completions.length > 0.3) {
      challenges.push('Frequent low energy levels');
    }
    
    const highRPECount = completions.filter(c => c.rpe >= 8).length;
    if (highRPECount / completions.length > 0.4) {
      challenges.push('High perceived exertion');
    }
    
    const incompleteCount = completions.filter(c => !c.isComplete).length;
    if (incompleteCount / completions.length > 0.3) {
      challenges.push('Difficulty completing workouts');
    }
    
    return challenges;
  }

  private static identifyPositivePatterns(completions: WorkoutCompletion[]): string[] {
    const patterns: string[] = [];
    
    const highRatingCount = completions.filter(c => c.overallRating >= 4).length;
    if (highRatingCount / completions.length > 0.7) {
      patterns.push('Consistently positive workout experience');
    }
    
    const completionRate = completions.filter(c => c.isComplete).length / completions.length;
    if (completionRate >= 0.8) {
      patterns.push('High workout completion rate');
    }
    
    const moderateRPECount = completions.filter(c => c.rpe >= 6 && c.rpe <= 7).length;
    if (moderateRPECount / completions.length > 0.5) {
      patterns.push('Good intensity management');
    }
    
    return patterns;
  }

  private static generateCoachingNotes(completions: WorkoutCompletion[]): string[] {
    const notes: string[] = [];
    
    const averageRPE = completions.reduce((sum, c) => sum + c.rpe, 0) / completions.length;
    if (averageRPE > 7.5) {
      notes.push('Consider incorporating more recovery sessions');
    }
    
    const completionRate = completions.filter(c => c.isComplete).length / completions.length;
    if (completionRate < 0.6) {
      notes.push('Focus on consistency before increasing intensity');
    }
    
    return notes;
  }

  private static generateRecommendedAdjustments(completions: WorkoutCompletion[]): string[] {
    const adjustments: string[] = [];
    
    const lowEnergyCount = completions.filter(c => c.energyLevel === 'low' || c.energyLevel === 'very-low').length;
    if (lowEnergyCount / completions.length > 0.4) {
      adjustments.push('Reduce training volume by 15-20%');
      adjustments.push('Add extra rest day');
    }
    
    const highRPECount = completions.filter(c => c.rpe >= 8).length;
    if (highRPECount / completions.length > 0.5) {
      adjustments.push('Lower intensity for next week');
      adjustments.push('Focus on aerobic base building');
    }
    
    return adjustments;
  }

  /**
   * Get weekly summary for AI analysis
   */
  static async getWeeklySummary(
    userId: string, 
    programId: string, 
    weekNumber: number
  ): Promise<WeeklyCompletionSummary | null> {
    try {
      const summaryId = `${userId}_${programId}_w${weekNumber}`;
      const docRef = doc(db, this.WEEKLY_SUMMARIES_COLLECTION, summaryId);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        const data = docSnap.data();
        return {
          ...data,
          completedAt: data.completedAt?.toDate() || new Date()
        } as WeeklyCompletionSummary;
      }
      
      return null;
    } catch (error) {
      console.error('Error getting weekly summary:', error);
      return null;
    }
  }

  /**
   * Get performance patterns for AI analysis
   */
  static async getPerformancePatterns(
    userId: string, 
    programId: string
  ): Promise<PerformancePattern[]> {
    try {
      const q = query(
        collection(db, this.PERFORMANCE_PATTERNS_COLLECTION),
        where('userId', '==', userId),
        where('programId', '==', programId),
        orderBy('detectedAt', 'desc'),
        limit(10)
      );
      
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        ...doc.data(),
        detectedAt: doc.data().detectedAt?.toDate() || new Date()
      })) as PerformancePattern[];
    } catch (error) {
      console.error('Error getting performance patterns:', error);
      return [];
    }
  }
} 