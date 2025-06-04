interface ErrorLogOptions {
  context: string;
  user?: string;
  metadata?: Record<string, any>;
}

interface SanitizedError {
  message: string;
  code?: string;
  context: string;
  timestamp: string;
  metadata?: Record<string, any>;
}

const sensitiveFields = ['password', 'token', 'secret', 'key', 'auth', 'credential'];

const sanitizeError = (error: any, options: ErrorLogOptions): SanitizedError => {
  // Extract basic error info
  const sanitized: SanitizedError = {
    message: error.message || 'Unknown error',
    context: options.context,
    timestamp: new Date().toISOString(),
  };

  // Add error code if available
  if (error.code) {
    sanitized.code = error.code;
  }

  // Add sanitized metadata
  if (options.metadata) {
    sanitized.metadata = Object.entries(options.metadata).reduce((acc, [key, value]) => {
      // Skip sensitive fields
      if (sensitiveFields.some(field => key.toLowerCase().includes(field))) {
        return acc;
      }
      // Sanitize values
      acc[key] = typeof value === 'string' ? value.replace(/[^\w\s-]/g, '') : value;
      return acc;
    }, {} as Record<string, any>);
  }

  return sanitized;
};

export const logError = async (error: Error | any, options: ErrorLogOptions) => {
  const sanitizedError = sanitizeError(error, options);
  
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.error('[Error Log]', sanitizedError);
  }

  // In production, you would send this to your logging service
  // Example with error monitoring service:
  // await errorMonitoringService.log(sanitizedError);
  
  // For now, just console.error in production too
  console.error('[Error Log]', sanitizedError);

  return sanitizedError;
}; 