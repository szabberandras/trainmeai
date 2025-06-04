import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';

export async function POST(req: Request) {
  try {
    console.log('Testing Firestore connection...');
    
    // Try to write a test document
    const testRef = doc(db, 'test', 'connection');
    await setDoc(testRef, {
      message: 'Hello Firestore!',
      timestamp: new Date(),
      test: true
    });
    
    console.log('✅ Write successful');
    
    // Try to read it back
    const testDoc = await getDoc(testRef);
    if (testDoc.exists()) {
      console.log('✅ Read successful');
      const data = testDoc.data();
      return NextResponse.json({ 
        success: true, 
        message: 'Firestore connection working!',
        data: data
      });
    } else {
      console.log('❌ Document not found after write');
      return NextResponse.json({ 
        success: false, 
        error: 'Document not found after write' 
      }, { status: 500 });
    }
    
  } catch (error: any) {
    console.error('❌ Firestore test failed:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message,
      code: error.code 
    }, { status: 500 });
  }
} 