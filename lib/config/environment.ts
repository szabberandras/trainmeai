// lib/config/environment.ts
export type Environment = 'development' | 'staging' | 'production';

export interface EnvironmentConfig {
  firebase: {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId?: string;
  };
  app: {
    name: string;
    url: string;
    supportEmail: string;
  };
  features: {
    enableAnalytics: boolean;
    enablePerformanceMonitoring: boolean;
    enableErrorLogging: boolean;
    maxFreePrograms: number;
  };
  security: {
    enableCSP: boolean;
    enableHSTS: boolean;
    cookieSecure: boolean;
  };
}

export const getEnvironment = (): Environment => {
  const env = process.env.NODE_ENV as Environment;
  return env || 'development';
};

export const isProduction = (): boolean => {
  return getEnvironment() === 'production';
};

export const isDevelopment = (): boolean => {
  return getEnvironment() === 'development';
};

export const isStaging = (): boolean => {
  return getEnvironment() === 'staging';
};

// Validate required environment variables
const validateEnvVar = (name: string, defaultValue?: string): string => {
  const value = process.env[name];
  if (!value) {
    if (defaultValue !== undefined) {
      console.warn(`Missing environment variable: ${name}, using default: ${defaultValue}`);
      return defaultValue;
    }
    // During build time, provide sensible defaults to prevent build failures
    if (process.env.NODE_ENV === 'development' || process.env.NEXT_PHASE === 'phase-production-build') {
      const defaults: Record<string, string> = {
        'APP_URL': 'http://localhost:3000',
        'SUPPORT_EMAIL': 'support@localhost',
        'NEXT_PUBLIC_FIREBASE_API_KEY': 'demo-api-key',
        'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN': 'demo.firebaseapp.com',
        'NEXT_PUBLIC_FIREBASE_PROJECT_ID': 'demo-project',
        'NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET': 'demo.appspot.com',
        'NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID': '123456789',
        'NEXT_PUBLIC_FIREBASE_APP_ID': '1:123456789:web:demo',
      };
      
      if (defaults[name]) {
        console.warn(`Missing environment variable: ${name}, using build-time default`);
        return defaults[name];
      }
    }
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
};

// Environment-specific configurations
const configs: Record<Environment, EnvironmentConfig> = {
  development: {
    firebase: {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || '',
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || '',
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || '',
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || '',
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '',
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '',
      measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
    },
    app: {
      name: process.env.APP_NAME || 'OptiTrain Dev',
      url: process.env.APP_URL || 'http://localhost:3000',
      supportEmail: process.env.SUPPORT_EMAIL || 'support@localhost',
    },
    features: {
      enableAnalytics: false,
      enablePerformanceMonitoring: true,
      enableErrorLogging: true,
      maxFreePrograms: 10, // More generous for testing
    },
    security: {
      enableCSP: false, // Easier debugging
      enableHSTS: false,
      cookieSecure: false,
    },
  },
  staging: {
    firebase: {
      apiKey: validateEnvVar('NEXT_PUBLIC_FIREBASE_API_KEY'),
      authDomain: validateEnvVar('NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN'),
      projectId: validateEnvVar('NEXT_PUBLIC_FIREBASE_PROJECT_ID'),
      storageBucket: validateEnvVar('NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET'),
      messagingSenderId: validateEnvVar('NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID'),
      appId: validateEnvVar('NEXT_PUBLIC_FIREBASE_APP_ID'),
      measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
    },
    app: {
      name: process.env.APP_NAME || 'OptiTrain Staging',
      url: validateEnvVar('APP_URL'),
      supportEmail: validateEnvVar('SUPPORT_EMAIL'),
    },
    features: {
      enableAnalytics: true,
      enablePerformanceMonitoring: true,
      enableErrorLogging: true,
      maxFreePrograms: 3,
    },
    security: {
      enableCSP: true,
      enableHSTS: true,
      cookieSecure: true,
    },
  },
  production: {
    firebase: {
      apiKey: validateEnvVar('NEXT_PUBLIC_FIREBASE_API_KEY'),
      authDomain: validateEnvVar('NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN'),
      projectId: validateEnvVar('NEXT_PUBLIC_FIREBASE_PROJECT_ID'),
      storageBucket: validateEnvVar('NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET'),
      messagingSenderId: validateEnvVar('NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID'),
      appId: validateEnvVar('NEXT_PUBLIC_FIREBASE_APP_ID'),
      measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
    },
    app: {
      name: process.env.APP_NAME || 'OptiTrain',
      url: validateEnvVar('APP_URL'),
      supportEmail: validateEnvVar('SUPPORT_EMAIL'),
    },
    features: {
      enableAnalytics: true,
      enablePerformanceMonitoring: true,
      enableErrorLogging: true,
      maxFreePrograms: 3,
    },
    security: {
      enableCSP: true,
      enableHSTS: true,
      cookieSecure: true,
    },
  },
};

export const getConfig = (): EnvironmentConfig => {
  const env = getEnvironment();
  return configs[env];
};

// Server-side only environment variables
export const getServerConfig = () => {
  if (typeof window !== 'undefined') {
    throw new Error('getServerConfig should only be called on the server side');
  }

  return {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
    nextAuth: {
      secret: process.env.NEXTAUTH_SECRET,
      url: process.env.NEXTAUTH_URL,
    },
    sendgrid: {
      apiKey: process.env.SENDGRID_API_KEY,
      fromEmail: process.env.SENDGRID_FROM_EMAIL,
    },
    ai: {
      googleApiKey: process.env.GOOGLE_GEMINI_API_KEY,
    },
    stripe: {
      publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
      secretKey: process.env.STRIPE_SECRET_KEY,
      webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
    },
  };
}; 