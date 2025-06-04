import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, MessageSquare } from 'lucide-react';

interface FeedbackWidgetProps {
  messageId: string;
  onFeedback: (messageId: string, type: 'thumbs_up' | 'thumbs_down' | 'detailed', content?: string) => void;
}

export default function FeedbackWidget({ messageId, onFeedback }: FeedbackWidgetProps) {
  const [showDetailedFeedback, setShowDetailedFeedback] = useState(false);
  const [detailedFeedback, setDetailedFeedback] = useState('');
  const [feedbackGiven, setFeedbackGiven] = useState<'thumbs_up' | 'thumbs_down' | null>(null);

  const handleThumbsFeedback = (type: 'thumbs_up' | 'thumbs_down') => {
    setFeedbackGiven(type);
    onFeedback(messageId, type);
  };

  const handleDetailedFeedback = () => {
    if (detailedFeedback.trim()) {
      onFeedback(messageId, 'detailed', detailedFeedback);
      setDetailedFeedback('');
      setShowDetailedFeedback(false);
    }
  };

  return (
    <div className="flex items-center gap-2 mt-2 text-xs">
      {!feedbackGiven && (
        <>
          <button
            onClick={() => handleThumbsFeedback('thumbs_up')}
            className="flex items-center gap-1 text-gray-500 hover:text-green-600 transition-colors"
          >
            <ThumbsUp size={14} />
            Helpful
          </button>
          <button
            onClick={() => handleThumbsFeedback('thumbs_down')}
            className="flex items-center gap-1 text-gray-500 hover:text-red-600 transition-colors"
          >
            <ThumbsDown size={14} />
            Not helpful
          </button>
          <button
            onClick={() => setShowDetailedFeedback(!showDetailedFeedback)}
            className="flex items-center gap-1 text-gray-500 hover:text-blue-600 transition-colors"
          >
            <MessageSquare size={14} />
            Feedback
          </button>
        </>
      )}
      
      {feedbackGiven && (
        <span className="text-gray-400 text-xs">
          Thanks for your feedback! 
          {feedbackGiven === 'thumbs_up' ? ' 👍' : ' 👎'}
        </span>
      )}

      {showDetailedFeedback && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="font-bold text-lg mb-4">How can we improve?</h3>
            <textarea
              value={detailedFeedback}
              onChange={(e) => setDetailedFeedback(e.target.value)}
              placeholder="Tell us what could be better about this response..."
              className="w-full h-32 border rounded-lg p-3 text-sm"
            />
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setShowDetailedFeedback(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleDetailedFeedback}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Send Feedback
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 