import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Rate limiting storage (in production, use Redis or similar)
const rateLimit = new Map<string, { count: number; resetTime: number }>();

function getRateLimitKey(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0] : request.ip;
  return ip || 'anonymous';
}

function checkRateLimit(key: string, maxRequests: number, windowMs: number): boolean {
  const now = Date.now();
  const userLimit = rateLimit.get(key);

  if (!userLimit || now > userLimit.resetTime) {
    rateLimit.set(key, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (userLimit.count >= maxRequests) {
    return false;
  }

  userLimit.count++;
  return true;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Rate limiting for API routes
  if (pathname.startsWith('/api/')) {
    const key = getRateLimitKey(request);
    const isAllowed = checkRateLimit(key, 100, 60000); // 100 requests per minute

    if (!isAllowed) {
      return new NextResponse('Too Many Requests', { 
        status: 429,
        headers: {
          'Retry-After': '60',
          'Content-Type': 'application/json'
        }
      });
    }

    // Special rate limiting for sensitive endpoints
    if (pathname.includes('/auth/') || pathname.includes('/payment/')) {
      const strictKey = `strict_${key}`;
      const isStrictAllowed = checkRateLimit(strictKey, 10, 60000); // 10 requests per minute

      if (!isStrictAllowed) {
        return new NextResponse('Rate limit exceeded for sensitive endpoint', { 
          status: 429,
          headers: {
            'Retry-After': '60',
            'Content-Type': 'application/json'
          }
        });
      }
    }
  }

  // Block common attack vectors
  const suspiciousPatterns = [
    /\.\./,  // Path traversal
    /<script/i,  // XSS attempts
    /javascript:/i,  // JavaScript protocol
    /vbscript:/i,   // VBScript protocol
    /onload=/i,     // Event handlers
    /onerror=/i,    // Event handlers
  ];

  const url = request.url;
  const userAgent = request.headers.get('user-agent') || '';
  
  for (const pattern of suspiciousPatterns) {
    if (pattern.test(url) || pattern.test(userAgent)) {
      console.warn(`Suspicious request blocked: ${url} from ${getRateLimitKey(request)}`);
      return new NextResponse('Forbidden', { status: 403 });
    }
  }

  // Validate Content-Type for POST/PUT requests
  if (['POST', 'PUT', 'PATCH'].includes(request.method)) {
    const contentType = request.headers.get('content-type');
    if (contentType && !contentType.includes('application/json') && 
        !contentType.includes('application/x-www-form-urlencoded') &&
        !contentType.includes('multipart/form-data')) {
      return new NextResponse('Invalid Content-Type', { status: 400 });
    }
  }

  // Security headers for all responses
  const response = NextResponse.next();
  response.headers.set('X-DNS-Prefetch-Control', 'off');
  response.headers.set('X-Download-Options', 'noopen');
  response.headers.set('X-Permitted-Cross-Domain-Policies', 'none');
  
  // Additional security for API routes
  if (pathname.startsWith('/api/')) {
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
    response.headers.set('Surrogate-Control', 'no-store');
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public (public files)
     */
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
}; 