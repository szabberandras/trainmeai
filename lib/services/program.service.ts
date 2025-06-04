import { 
  doc, 
  getDoc, 
  getDocs, 
  addDoc, 
  updateDoc, 
  query, 
  where,
  orderBy,
  limit as firestoreLimit
} from 'firebase/firestore';
import { programsCollection, templatesCollection } from '../firebase/config';
import { TrainingProgram, ProgramTemplate } from '../types/program';
import { UserProfile } from '../types/user';

export class ProgramService {
  static async createProgram(userId: string, program: Partial<TrainingProgram>): Promise<string> {
    try {
      const newProgram: Partial<TrainingProgram> = {
        ...program,
        userId,
        createdAt: new Date(),
        updatedAt: new Date(),
        currentWeek: 1,
        stats: {
          completionRate: 0,
          totalWorkouts: 0
        }
      };

      const docRef = await addDoc(programsCollection, newProgram);
      return docRef.id;
    } catch (error) {
      console.error('Error creating program:', error);
      throw error;
    }
  }

  static async getProgram(programId: string): Promise<TrainingProgram | null> {
    try {
      const programDoc = await getDoc(doc(programsCollection, programId));
      return programDoc.exists() ? programDoc.data() as TrainingProgram : null;
    } catch (error) {
      console.error('Error getting program:', error);
      throw error;
    }
  }

  static async getUserPrograms(userId: string): Promise<TrainingProgram[]> {
    try {
      const q = query(
        programsCollection,
        where('userId', '==', userId),
        orderBy('updatedAt', 'desc')
      );
      
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) as TrainingProgram);
    } catch (error) {
      console.error('Error getting user programs:', error);
      throw error;
    }
  }

  static async updateProgram(programId: string, updates: Partial<TrainingProgram>): Promise<void> {
    try {
      const programRef = doc(programsCollection, programId);
      await updateDoc(programRef, {
        ...updates,
        updatedAt: new Date()
      });
    } catch (error) {
      console.error('Error updating program:', error);
      throw error;
    }
  }

  static async getTemplates(type?: string, difficulty?: string, limitCount = 10): Promise<ProgramTemplate[]> {
    try {
      let q = query(templatesCollection);

      if (type) {
        q = query(q, where('type', '==', type));
      }

      if (difficulty) {
        q = query(q, where('difficulty', '==', difficulty));
      }

      q = query(q, orderBy('usageCount', 'desc'), firestoreLimit(limitCount));

      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) as ProgramTemplate);
    } catch (error) {
      console.error('Error getting templates:', error);
      throw error;
    }
  }

  static async getFeaturedTemplates(): Promise<ProgramTemplate[]> {
    try {
      const q = query(
        templatesCollection,
        where('featured', '==', true),
        firestoreLimit(5)
      );

      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) as ProgramTemplate);
    } catch (error) {
      console.error('Error getting featured templates:', error);
      throw error;
    }
  }

  static async createProgramFromTemplate(
    userId: string, 
    templateId: string, 
    customizations: Partial<TrainingProgram>
  ): Promise<string> {
    try {
      const templateDoc = await getDoc(doc(templatesCollection, templateId));
      
      if (!templateDoc.exists()) {
        throw new Error('Template not found');
      }

      const template = templateDoc.data() as ProgramTemplate;
      
      const newProgram: Partial<TrainingProgram> = {
        ...customizations,
        userId,
        templateId,
        type: template.type,
        difficulty: template.difficulty,
        totalWeeks: template.duration,
        isTemplate: false,
        shared: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        currentWeek: 1,
        stats: {
          completionRate: 0,
          totalWorkouts: 0
        }
      };

      return await this.createProgram(userId, newProgram);
    } catch (error) {
      console.error('Error creating program from template:', error);
      throw error;
    }
  }
} 