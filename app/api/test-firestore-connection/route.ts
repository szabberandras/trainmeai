import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { doc, setDoc, getDoc, deleteDoc, connectFirestoreEmulator } from 'firebase/firestore';

export async function GET() {
  try {
    console.log('🔍 Testing Firestore connection...');
    console.log('📋 Project ID:', process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID);
    console.log('🌐 Auth Domain:', process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN);
    
    // Test 1: Try to write a test document
    const testRef = doc(db, 'connection-test', 'test-doc');
    const testData = {
      message: 'Connection test successful!',
      timestamp: new Date(),
      test: true
    };
    
    console.log('📝 Attempting to write test document...');
    await setDoc(testRef, testData);
    console.log('✅ Write successful');
    
    // Test 2: Try to read it back
    console.log('📖 Attempting to read test document...');
    const testDoc = await getDoc(testRef);
    
    if (testDoc.exists()) {
      console.log('✅ Read successful:', testDoc.data());
      
      // Test 3: Clean up
      console.log('🧹 Cleaning up test document...');
      await deleteDoc(testRef);
      console.log('✅ Cleanup successful');
      
      return NextResponse.json({
        success: true,
        message: 'Firestore connection is working perfectly!',
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        data: testDoc.data()
      });
    } else {
      throw new Error('Document was written but could not be read back');
    }
    
  } catch (error: any) {
    console.error('❌ Firestore connection test failed:', error);
    
    // Provide detailed error information
    const errorInfo: {
      success: boolean;
      error: string;
      code: any;
      projectId: string | undefined;
      authDomain: string | undefined;
      timestamp: string;
      suggestion: string;
    } = {
      success: false,
      error: error.message,
      code: error.code,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      timestamp: new Date().toISOString(),
      suggestion: 'Unknown error. Check the Firebase Console for project status and configuration.'
    };
    
    // Check for common error patterns and update suggestion
    if (error.code === 'permission-denied') {
      errorInfo.suggestion = 'Firestore security rules are blocking access. Check your Firestore rules in the Firebase Console.';
    } else if (error.code === 'not-found') {
      errorInfo.suggestion = 'Firestore database not found. Make sure Firestore is enabled in your Firebase project.';
    } else if (error.code === 'unavailable') {
      errorInfo.suggestion = 'Firestore service is unavailable. Check your internet connection and Firebase project status.';
    } else if (error.message.includes('NOT_FOUND')) {
      errorInfo.suggestion = 'The Firestore database does not exist. You need to create a Firestore database in the Firebase Console.';
    }
    
    return NextResponse.json(errorInfo, { status: 500 });
  }
}

export async function POST() {
  return GET(); // Same test for both GET and POST
} 