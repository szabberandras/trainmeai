import { randomBytes } from 'crypto';
import { NextApiRequest, NextApiResponse } from 'next';

const CSRF_TOKEN_LENGTH = 32;
const CSRF_COOKIE_NAME = 'csrf-token';
const CSRF_HEADER_NAME = 'X-CSRF-Token';

export const generateCSRFToken = (): string => {
  return randomBytes(CSRF_TOKEN_LENGTH).toString('hex');
};

export const setCSRFCookie = (token: string): void => {
  document.cookie = `${CSRF_COOKIE_NAME}=${token}; path=/; SameSite=Strict; Secure`;
};

export const getCSRFCookie = (): string | null => {
  const cookies = document.cookie.split(';');
  const csrfCookie = cookies.find(cookie => cookie.trim().startsWith(`${CSRF_COOKIE_NAME}=`));
  return csrfCookie ? csrfCookie.split('=')[1] : null;
};

export const validateCSRFToken = (token: string): boolean => {
  const storedToken = getCSRFCookie();
  return !!storedToken && token === storedToken;
};

export const getCSRFHeaders = (): HeadersInit => {
  const token = getCSRFCookie();
  return token ? { [CSRF_HEADER_NAME]: token } : {};
};

// Server-side CSRF middleware for Next.js API routes
export const csrfMiddleware = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    const token = req.headers[CSRF_HEADER_NAME.toLowerCase()] as string;
    const cookieToken = req.cookies[CSRF_COOKIE_NAME];

    if (!token || !cookieToken || token !== cookieToken) {
      res.status(403).json({ error: 'Invalid CSRF token' });
      return;
    }
  }
}; 