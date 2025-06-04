'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { MessageSquare, Zap } from 'lucide-react';

export default function NewTrainingPlanPage() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const [userProfile, setUserProfile] = useState({
    subscription: 'free',
    plansGenerated: 0,
    maxPlans: 2
  });
  const [message, setMessage] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [programContext, setProgramContext] = useState('create-program');
  const [conversation, setConversation] = useState([{
    type: 'ai',
    content: `Hi! I'm your AI fitness coach. Let's create a personalized training program together. 

To get started, could you tell me:
1. What are your main fitness goals?
2. Do you have any specific sports or activities you enjoy?
3. What's your current fitness level and experience?

Feel free to share as much detail as you'd like, and I'll guide you through creating the perfect program.`
  }]);

  useEffect(() => {
    if (!user && !loading) {
      router.push('/');
      return;
    }

    // Load user profile
    const loadUserProfile = async () => {
      if (user) {
        const userRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          setUserProfile(userDoc.data() as any);
        }
      }
    };

    loadUserProfile();
  }, [user, loading, router]);

  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.loadingSpinner}></div>
        <p>Loading...</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const handleSendMessage = async () => {
    if (!message.trim() || isGenerating) return;

    // Add user message to conversation
    const newMessage = {
      type: 'user',
      content: message.trim()
    };
    setConversation(prev => [...prev, newMessage]);
    setMessage('');
    setIsGenerating(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message.trim(),
          context: programContext,
          history: conversation,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get AI response');
      }

      const data = await response.json();
      const aiResponse = data.response;

      // Check if the AI is ready to generate the program
      if (aiResponse.includes('[READY_TO_GENERATE]')) {
        // Extract the program profile summary (everything after [READY_TO_GENERATE])
        const summary = aiResponse.split('[READY_TO_GENERATE]')[1].trim();
        
        // Add the summary to the conversation
        setConversation(prev => [...prev, {
          type: 'ai',
          content: aiResponse.replace('[READY_TO_GENERATE]', '').trim()
        }]);

        // Generate the program
        const programResponse = await fetch('/api/generate-plan', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            conversation: [...conversation, newMessage, {
              type: 'ai',
              content: summary
            }],
          }),
        });

        if (!programResponse.ok) {
          throw new Error('Failed to generate program');
        }

        const program = await programResponse.json();
        
        // Navigate to the new program
        router.push(`/programs/${program.id}`);
      } else {
        // Add AI response to conversation
        setConversation(prev => [...prev, {
          type: 'ai',
          content: aiResponse
        }]);
      }
    } catch (error) {
      console.error('Error:', error);
      setConversation(prev => [...prev, {
        type: 'ai',
        content: "I'm sorry, I encountered an error. Please try again."
      }]);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Create New Training Plan</h1>
        {userProfile.subscription === 'free' && (
          <div style={styles.planLimitBadge}>
            {userProfile.plansGenerated}/{userProfile.maxPlans} Plans Used
          </div>
        )}
      </div>

      <div style={styles.chatContainer}>
        <div style={styles.conversation}>
          {conversation.map((msg, index) => (
            <div
              key={index}
              style={msg.type === 'user' ? styles.userMessage : styles.aiMessage}
            >
              {msg.type === 'ai' && (
                <div style={styles.aiIcon}>
                  <Zap size={16} />
                </div>
              )}
              <div style={styles.messageContent}>
                {msg.content}
              </div>
            </div>
          ))}
          {isGenerating && (
            <div style={styles.generatingMessage}>
              <div style={styles.loadingSpinner}></div>
              <p>Generating response...</p>
            </div>
          )}
        </div>

        <div style={styles.inputContainer}>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Describe your fitness goals and preferences..."
            style={styles.input}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            disabled={isGenerating}
          />
          <button
            onClick={handleSendMessage}
            style={styles.sendButton}
            disabled={!message.trim() || isGenerating}
          >
            <MessageSquare size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
  loadingContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    gap: '1rem',
  },
  loadingSpinner: {
    width: '20px',
    height: '20px',
    border: '3px solid #f3f3f3',
    borderTop: '3px solid #0047FF',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
  },
  title: {
    fontSize: '2rem',
    color: '#222',
  },
  planLimitBadge: {
    padding: '0.5rem 1rem',
    backgroundColor: '#f3f4f6',
    borderRadius: '20px',
    fontSize: '0.875rem',
    color: '#666',
  },
  chatContainer: {
    backgroundColor: 'white',
    borderRadius: '12px',
    border: '1px solid #eee',
    overflow: 'hidden',
  },
  conversation: {
    height: '500px',
    overflowY: 'auto' as const,
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1rem',
  },
  messageBase: {
    padding: '1rem',
    borderRadius: '12px',
    maxWidth: '80%',
  },
  userMessage: {
    backgroundColor: '#0047FF',
    color: 'white',
    padding: '1rem',
    borderRadius: '12px',
    maxWidth: '80%',
    alignSelf: 'flex-end' as const,
  },
  aiMessage: {
    backgroundColor: '#f3f4f6',
    color: '#222',
    padding: '1rem',
    borderRadius: '12px',
    maxWidth: '80%',
    alignSelf: 'flex-start' as const,
    display: 'flex',
    gap: '0.5rem',
  },
  aiIcon: {
    backgroundColor: '#0047FF',
    color: 'white',
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  messageContent: {
    lineHeight: '1.5',
  },
  generatingMessage: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem',
    color: '#666',
    fontSize: '0.875rem',
  },
  inputContainer: {
    display: 'flex',
    gap: '0.5rem',
    padding: '1rem',
    borderTop: '1px solid #eee',
  },
  input: {
    flex: 1,
    padding: '0.75rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontSize: '1rem',
    outline: 'none',
  },
  sendButton: {
    backgroundColor: '#0047FF',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
}; 