import { db } from '@/lib/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';

export interface UserProfile {
  displayName: string;
  email: string;
  photoURL: string;
  createdAt: Date;
  subscription: 'free' | 'premium';
  signupDate: Date;
  daysUsed: number;
  maxFreeDays: number;
  trialExpired: boolean;
  subscriptionExpiry: Date | null;
  preferences: Record<string, any>;
  notifications: boolean;
  emailUpdates: boolean;
}

export const createUserProfile = async (
  user: any,
  additionalData: Partial<UserProfile> = {}
): Promise<void> => {
  if (!user) return;

  const userRef = doc(db, 'users', user.uid);
  try {
    const userDoc = await getDoc(userRef);

    if (!userDoc.exists()) {
      const { displayName, email: userEmail, photoURL } = user;
      const createdAt = new Date();
      const signupDate = new Date();

      const userData: UserProfile = {
        displayName: displayName || additionalData.displayName || '',
        email: userEmail,
        photoURL: photoURL || '',
        createdAt,
        subscription: 'free',
        signupDate,
        daysUsed: 0,
        maxFreeDays: 14,
        trialExpired: false,
        subscriptionExpiry: null,
        preferences: {},
        notifications: true,
        emailUpdates: true,
        ...additionalData,
      };

      await setDoc(userRef, userData);
      console.log('User profile created successfully with 14-day trial');
    }
  } catch (error) {
    console.error('Error creating user profile:', error);
    throw error;
  }
};

export const canGenerateTrainingDay = async (userId: string): Promise<{ canGenerate: boolean; daysRemaining: number; reason?: string }> => {
  try {
    const userRef = doc(db, 'users', userId);
    const userDoc = await getDoc(userRef);
    
    if (!userDoc.exists()) {
      return { canGenerate: false, daysRemaining: 0, reason: 'User profile not found' };
    }
    
    const userData = userDoc.data() as UserProfile;
    
    if (userData.subscription === 'premium') {
      return { canGenerate: true, daysRemaining: -1 };
    }
    
    const daysSinceSignup = Math.floor((Date.now() - userData.signupDate.getTime()) / (1000 * 60 * 60 * 24));
    if (daysSinceSignup > 14) {
      return { canGenerate: false, daysRemaining: 0, reason: '14-day trial expired' };
    }
    
    const daysRemaining = userData.maxFreeDays - userData.daysUsed;
    if (daysRemaining <= 0) {
      return { canGenerate: false, daysRemaining: 0, reason: 'All 14 trial days used' };
    }
    
    return { canGenerate: true, daysRemaining };
  } catch (error) {
    console.error('Error checking training day generation eligibility:', error);
    return { canGenerate: false, daysRemaining: 0, reason: 'Error checking eligibility' };
  }
};

export const incrementDaysUsed = async (userId: string): Promise<void> => {
  try {
    const userRef = doc(db, 'users', userId);
    const userDoc = await getDoc(userRef);
    
    if (userDoc.exists()) {
      const userData = userDoc.data() as UserProfile;
      await setDoc(userRef, {
        ...userData,
        daysUsed: userData.daysUsed + 1,
        trialExpired: userData.daysUsed + 1 >= userData.maxFreeDays
      }, { merge: true });
    }
  } catch (error) {
    console.error('Error incrementing days used:', error);
    throw error;
  }
}; 