import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
// Use the staging database to match the main config
const db = getFirestore(app, 'staging');
const storage = getStorage(app);

// Collection references
const usersCollection = collection(db, 'users');
const programsCollection = collection(db, 'programs');
const templatesCollection = collection(db, 'templates');
const exercisesCollection = collection(db, 'exercises');
const equipmentCollection = collection(db, 'equipment');

export {
  app,
  auth,
  db,
  storage,
  usersCollection,
  programsCollection,
  templatesCollection,
  exercisesCollection,
  equipmentCollection,
}; 