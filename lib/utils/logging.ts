// lib/utils/logging.ts - Simple server-side logging utility
import fs from 'fs/promises'; // Node.js built-in module for file system operations
import path from 'path'; // Node.js built-in module for path manipulation

// Define the directory where logs will be stored (relative to your project root)
const LOG_FILE_DIR = path.join(process.cwd(), 'logs'); // Creates a 'logs' folder in your project root
const LOG_FILE_NAME = 'ai_interaction_logs.jsonl';
const LOG_FILE_PATH = path.join(LOG_FILE_DIR, LOG_FILE_NAME);

// Function to ensure the logs directory exists
const ensureLogDir = async () => {
  try {
    // `recursive: true` ensures that parent directories are also created if they don't exist
    await fs.mkdir(LOG_FILE_DIR, { recursive: true });
  } catch (error) {
    console.error(`Error ensuring log directory exists: ${error}`);
  }
};

/**
 * Logs user and AI interactions to a JSONL file for later review and potential retraining.
 * Each entry is a JSON object on a new line.
 * In a production system, you'd use a more robust logging solution like Google Cloud Logging or a dedicated database.
 *
 * @param {string} type The type of interaction (e.g., 'user_message_chat', 'ai_response_chat', 'plan_generation_request', 'generated_plan_success', 'error_api_chat', 'malformed_json_response').
 * @param {string} content - The content of the interaction (user's message, AI's response, JSON string of plan, error message).
 * @param {string | undefined} userId - Optional user ID (e.g., from Firebase auth.uid).
 * @param {string | undefined} sessionId - Optional session ID for conversation continuity.
 */
export const logUserInteraction = async (
  type: string,
  content: string,
  userId: string | undefined = undefined,
  sessionId: string | undefined = undefined
) => {
  await ensureLogDir(); // Ensure directory exists before writing

  const logEntry = {
    timestamp: new Date().toISOString(), // ISO 8601 format for consistent timestamps
    type: type,
    content: content,
    userId: userId, // Include user ID if available from request
    sessionId: sessionId, // Include session ID if available
  };

  try {
    // Append the JSON stringified log entry followed by a newline character
    await fs.appendFile(LOG_FILE_PATH, JSON.stringify(logEntry) + '\n');
  } catch (error) {
    console.error(`Error writing to log file ${LOG_FILE_PATH}: ${error}`);
  }
};