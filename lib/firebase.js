import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; 
import { getFirestore } from 'firebase/firestore'; 
import { getStorage } from 'firebase/storage'; // Keep this import

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg1DS4oZC42xmObZDNZ7MPMpoiL0lCufk",
  authDomain: "trainmeai-11cf7.firebaseapp.com",
  projectId: "trainmeai-11cf7",
  storageBucket: "trainmeai-11cf7.firebasestorage.app", 
  messagingSenderId: "1013162884273",
  appId: "1:1013162884273:web:0bb59bbd6cb9b1df1cb690",
};

// Initialize Firebase only once
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp(); 
}

// Initialize Firebase services and export them
const auth = getAuth(app); 
const db = getFirestore(app); 
const storage = getStorage(app); // Keep this initialization

// Comment out analytics initialization if you disabled it
// const analytics = getAnalytics(app); 

export { app, auth, db, storage }; // Export all services