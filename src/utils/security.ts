
/**
 * Security utilities for input validation and sanitization
 */

// Content Security Policy nonce generator (for future CSP implementation)
export const generateNonce = (): string => {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

// Input sanitization utilities
export const sanitizeHTML = (input: string): string => {
  return input
    .replace(/[<>]/g, '') // Remove HTML brackets
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim();
};

export const sanitizeURL = (url: string): string => {
  try {
    const parsed = new URL(url);
    // Only allow http and https protocols
    if (!['http:', 'https:'].includes(parsed.protocol)) {
      return '';
    }
    return parsed.toString();
  } catch {
    return '';
  }
};

// Validation utilities
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
};

export const validateStringLength = (str: string, min: number, max: number): boolean => {
  return str.length >= min && str.length <= max;
};

// Rate limiting utility (client-side)
export const checkRateLimit = (key: string, limitMs: number = 60000): boolean => {
  const lastRequest = localStorage.getItem(`rateLimit_${key}`);
  const now = Date.now();
  
  if (lastRequest && now - parseInt(lastRequest) < limitMs) {
    return false; // Rate limited
  }
  
  localStorage.setItem(`rateLimit_${key}`, now.toString());
  return true; // Allowed
};

// Content validation for user-generated content
export const validateContent = (content: string): { isValid: boolean; error?: string } => {
  if (!content || content.trim().length === 0) {
    return { isValid: false, error: 'Content cannot be empty' };
  }
  
  if (content.length > 10000) {
    return { isValid: false, error: 'Content too long' };
  }
  
  // Check for potential XSS patterns
  const xssPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+=/i,
    /<iframe/i,
    /<object/i,
    /<embed/i
  ];
  
  for (const pattern of xssPatterns) {
    if (pattern.test(content)) {
      return { isValid: false, error: 'Invalid content detected' };
    }
  }
  
  return { isValid: true };
};

// Secure random string generator
export const generateSecureToken = (length: number = 32): string => {
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};
