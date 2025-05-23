import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Import for Authentication
import { getFirestore } from 'firebase/firestore'; // Import for Firestore Database
// import { getAnalytics } from 'firebase/analytics'; // Only if you enabled analytics

// Your web app's Firebase configuration (pasted directly from your console)
const firebaseConfig = {
  apiKey: "AIzaSyCg1DS4oZC42xmObZDNZ7MPMpoiL0lCufk", // Your actual key
  authDomain: "trainmeai-11cf7.firebaseapp.com",
  projectId: "trainmeai-11cf7",
  storageBucket: "trainmeai-11cf7.firebasestorage.app",
  messagingSenderId: "1013162884273",
  appId: "1:1013162884273:web:0bb59bbd6cb9b1df1cb690",
  measurementId: "G-70L3HNDKTB"
};

// Initialize Firebase only once to prevent multiple app instances
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

// Initialize Firebase services and export them for use in other parts of your app
const auth = getAuth(app); // For user authentication (login/signup)
const db = getFirestore(app); // For Firestore database (storing data)
// const analytics = getAnalytics(app); // Uncomment this line ONLY if you explicitly enabled Google Analytics

export { app, auth, db }; // Export the initialized app, auth, and db instances
// If you enabled analytics: export { app, auth, db, analytics };