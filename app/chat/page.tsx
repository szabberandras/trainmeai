'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '@/lib/firebase';
import { doc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';
import { MessageSquare, Send, Zap } from 'lucide-react';

export default function ChatPage() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState([{
    type: 'ai',
    content: "Hi! I'm your AI fitness coach. I can help you with workout advice, form tips, nutrition guidance, and more. What would you like to know?"
  }]);
  const [isGenerating, setIsGenerating] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!user && !loading) {
      router.push('/');
      return;
    }

    // Load previous conversation
    const loadConversation = async () => {
      if (user) {
        const userRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          if (userData.conversations && userData.conversations.length > 0) {
            setConversation(userData.conversations[userData.conversations.length - 1].messages);
          }
        }
      }
    };

    loadConversation();
  }, [user, loading, router]);

  useEffect(() => {
    // Scroll to bottom when conversation updates
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [conversation]);

  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.loadingSpinner}></div>
        <p>Loading chat...</p>
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
      // TODO: Implement AI chat logic here
      // For now, just add a mock response
      setTimeout(() => {
        setConversation(prev => [...prev, {
          type: 'ai',
          content: "I understand your question. Let me help you with that. For now, this is a placeholder response as we're still implementing the AI chat functionality."
        }]);
        setIsGenerating(false);
      }, 1000);

      // Save conversation to Firestore
      const userRef = doc(db, 'users', user.uid);
      await updateDoc(userRef, {
        conversations: arrayUnion({
          timestamp: new Date(),
          messages: conversation
        })
      });
    } catch (error) {
      console.error('Error generating response:', error);
      setConversation(prev => [...prev, {
        type: 'ai',
        content: "I'm sorry, I encountered an error. Please try again."
      }]);
      setIsGenerating(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>AI Fitness Coach</h1>
        <div style={styles.subtitle}>
          <MessageSquare size={20} />
          <span>Ask me anything about fitness, nutrition, or training</span>
        </div>
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
          <div ref={chatEndRef} />
        </div>

        <div style={styles.inputContainer}>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask your fitness question..."
            style={styles.input}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            disabled={isGenerating}
          />
          <button
            onClick={handleSendMessage}
            style={styles.sendButton}
            disabled={!message.trim() || isGenerating}
          >
            <Send size={20} />
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
    marginBottom: '2rem',
  },
  title: {
    fontSize: '2rem',
    color: '#222',
    marginBottom: '0.5rem',
  },
  subtitle: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#666',
    fontSize: '1rem',
  },
  chatContainer: {
    backgroundColor: 'white',
    borderRadius: '12px',
    border: '1px solid #eee',
    overflow: 'hidden',
    height: 'calc(100vh - 200px)',
    display: 'flex',
    flexDirection: 'column' as const,
  },
  conversation: {
    flex: 1,
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