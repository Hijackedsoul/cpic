
/**
 * Security headers configuration for future server-side implementation
 * These headers should be implemented at the server level (e.g., via Vercel, Netlify, or CDN)
 */

export const securityHeaders = {
  // Content Security Policy
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' https://cdn.gpteng.co",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https:",
    "connect-src 'self' https:",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'"
  ].join('; '),
  
  // XSS Protection
  'X-XSS-Protection': '1; mode=block',
  
  // Content Type Options
  'X-Content-Type-Options': 'nosniff',
  
  // Frame Options
  'X-Frame-Options': 'DENY',
  
  // Referrer Policy
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  
  // Permissions Policy
  'Permissions-Policy': [
    'camera=()',
    'microphone=()',
    'geolocation=()',
    'interest-cohort=()'
  ].join(', '),
  
  // HTTP Strict Transport Security (HTTPS only)
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload'
};

/**
 * Meta tags for additional security
 */
export const securityMetaTags = [
  {
    name: 'robots',
    content: 'index, follow'
  },
  {
    'http-equiv': 'X-Content-Type-Options',
    content: 'nosniff'
  },
  {
    'http-equiv': 'X-Frame-Options',
    content: 'DENY'
  },
  {
    'http-equiv': 'X-XSS-Protection',
    content: '1; mode=block'
  }
];

/**
 * Instructions for implementing these headers:
 * 
 * 1. For Vercel: Add to vercel.json
 * 2. For Netlify: Add to _headers file
 * 3. For Apache: Add to .htaccess
 * 4. For Nginx: Add to server configuration
 * 
 * Example for Vercel (vercel.json):
 * {
 *   "headers": [
 *     {
 *       "source": "/(.*)",
 *       "headers": [
 *         {
 *           "key": "Content-Security-Policy",
 *           "value": "default-src 'self'; ..."
 *         }
 *       ]
 *     }
 *   ]
 * }
 */
