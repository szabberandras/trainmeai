import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase/config';
import { doc, setDoc, getDoc, collection, addDoc } from 'firebase/firestore';

export async function POST(req: Request) {
  try {
    console.log('Testing chat database connection...');
    
    // Test 1: Try to create a chatSessions collection document
    const chatRef = doc(db, 'chatSessions', 'test_user_main');
    await setDoc(chatRef, {
      userId: 'test_user',
      title: 'Test Chat',
      lastMessage: 'Hello',
      lastUpdated: new Date(),
      isActive: true,
      messages: []
    });
    
    console.log('✅ Chat document write successful');
    
    // Test 2: Try to read it back
    const chatDoc = await getDoc(chatRef);
    if (chatDoc.exists()) {
      console.log('✅ Chat document read successful');
      
      // Test 3: Try to create a programs collection document
      const programsRef = collection(db, 'programs');
      const programDoc = await addDoc(programsRef, {
        userId: 'test_user',
        title: 'Test Program',
        sportType: 'strength',
        createdAt: new Date(),
        lastUpdated: new Date()
      });
      
      console.log('✅ Programs collection write successful');
      
      return NextResponse.json({ 
        success: true, 
        message: 'Chat database connection working!',
        chatData: chatDoc.data(),
        programId: programDoc.id
      });
    } else {
      console.log('❌ Chat document not found after write');
      return NextResponse.json({ 
        success: false, 
        error: 'Chat document not found after write' 
      }, { status: 500 });
    }
    
  } catch (error: any) {
    console.error('❌ Chat database test failed:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message,
      code: error.code 
    }, { status: 500 });
  }
} 