/**
 * Security utilities for input sanitization and validation
 */
import DOMPurify from 'dompurify';

/**
 * Shared DOMPurify configuration for consistent HTML sanitization
 */
const SHARED_DOMPURIFY_CONFIG = {
  ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'p', 'br', 'span'],
  ALLOWED_ATTR: ['class', 'id'],
  ALLOW_DATA_ATTR: false
};

/**
 * Sanitize HTML content to prevent XSS attacks using DOMPurify
 * @param {string} html - HTML string to sanitize
 * @param {object} options - DOMPurify configuration options
 * @returns {string} - Sanitized HTML
 */
export const sanitizeHTML = (html, options = {}) => {
  if (typeof html !== 'string') return '';
  
  return DOMPurify.sanitize(html, { ...SHARED_DOMPURIFY_CONFIG, ...options });
};

/**
 * Escape HTML content to text entities (renamed from misleading sanitizeHTML)
 * @param {string} text - Text to escape
 * @returns {string} - Escaped text
 */
export const escapeHTML = (text) => {
  if (typeof text !== 'string') return '';
  
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  
  return text.replace(/[&<>"']/g, (m) => map[m]);
};

/**
 * Sanitize user input using context-aware approach
 * @param {string} input - User input to sanitize
 * @param {object} options - Sanitization options
 * @returns {string} - Sanitized input
 */
export const sanitizeInput = (input, options = {}) => {
  if (typeof input !== 'string') return '';
  
  const { maxLength = 1000, allowHTML = false } = options;
  
  let sanitized = input.trim();
  
  if (allowHTML) {
    // Use DOMPurify for HTML content with safe allowlist configuration
    sanitized = DOMPurify.sanitize(sanitized, SHARED_DOMPURIFY_CONFIG);
  } else {
    // For plain text, remove dangerous patterns more robustly
    sanitized = sanitized
      .replace(/javascript:\s*/gi, '') // Remove javascript: protocol with word boundaries
      .replace(/on\w+\s*=\s*["'][^"']*["']/gi, '') // Remove event handlers with proper attribute matching
      .replace(/data:\s*text\/html/gi, '') // Remove data URLs with HTML content
      .replace(/vbscript:/gi, '') // Remove vbscript: protocol
      .replace(/data:/gi, '') // Remove data: protocol
      .replace(/file:/gi, ''); // Remove file: protocol
  }
  
  return sanitized.substring(0, maxLength);
};

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} - Whether email is valid
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone number format
 * @param {string} phone - Phone number to validate
 * @returns {boolean} - Whether phone is valid
 */
export const isValidPhone = (phone) => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/\D/g, ''));
};

/**
 * Validate password strength
 * @param {string} password - Password to validate
 * @returns {object} - Validation result with score and feedback
 */
export const validatePassword = (password) => {
  const result = {
    isValid: false,
    score: 0,
    feedback: []
  };

  if (!password || password.length < 8) {
    result.feedback.push('Password must be at least 8 characters long');
    return result;
  }

  let score = 0;
  const feedback = [];

  // Length check
  if (password.length >= 8) score += 1;
  if (password.length >= 12) score += 1;

  // Character variety checks
  if (/[a-z]/.test(password)) score += 1;
  if (/[A-Z]/.test(password)) score += 1;
  if (/[0-9]/.test(password)) score += 1;
  if (/[^A-Za-z0-9]/.test(password)) score += 1;

  // Feedback generation
  if (password.length < 8) feedback.push('Use at least 8 characters');
  if (!/[a-z]/.test(password)) feedback.push('Add lowercase letters');
  if (!/[A-Z]/.test(password)) feedback.push('Add uppercase letters');
  if (!/[0-9]/.test(password)) feedback.push('Add numbers');
  if (!/[^A-Za-z0-9]/.test(password)) feedback.push('Add special characters');

  result.score = score;
  result.feedback = feedback;
  result.isValid = score >= 4;

  return result;
};


/**
 * Generate CSRF token
 * @returns {string} - CSRF token
 */
export const generateCSRFToken = () => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

/**
 * Constant-time string comparison to prevent timing attacks
 * @param {string} a - First string
 * @param {string} b - Second string
 * @returns {boolean} - Whether strings are equal
 */
const timingSafeCompare = (a, b) => {
  if (typeof a !== 'string' || typeof b !== 'string') return false;
  if (a.length !== b.length) return false;
  
  const encoder = new TextEncoder();
  const aBytes = encoder.encode(a);
  const bBytes = encoder.encode(b);
  
  let result = 0;
  for (let i = 0; i < aBytes.length; i++) {
    result |= aBytes[i] ^ bBytes[i];
  }
  
  return result === 0;
};

/**
 * Validate CSRF token using constant-time comparison
 * @param {string} token - Token to validate
 * @param {string} sessionToken - Session token to compare against
 * @returns {boolean} - Whether token is valid
 */
export const validateCSRFToken = (token, sessionToken) => {
  if (!token || !sessionToken) return false;
  return timingSafeCompare(token, sessionToken);
};

/**
 * Rate limiting utility with collision-resistant key handling
 */
export class RateLimiter {
  constructor(maxRequests = 100, windowMs = 60000) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
    this.requests = new Map(); // Map<identifier, timestamp[]>
  }

  isAllowed(identifier) {
    const now = Date.now();
    const windowStart = now - this.windowMs;
    
    // Get existing requests for this identifier
    const userRequests = this.requests.get(identifier) || [];
    
    // Clean old timestamps for this identifier
    const validRequests = userRequests.filter(timestamp => timestamp > windowStart);
    
    if (validRequests.length >= this.maxRequests) {
      return false;
    }
    
    // Add new request timestamp
    validRequests.push(now);
    this.requests.set(identifier, validRequests);
    
    return true;
  }
}

/**
 * Content Security Policy helper with nonce support
 * @param {string} nonce - Cryptographic nonce for inline scripts/styles
 * @returns {object} - CSP directives
 */
export const getCSPDirectives = (nonce = null) => {
  const directives = {
    'default-src': ["'self'"],
    'script-src': ["'self'"],
    'style-src': ["'self'"],
    'font-src': ["'self'", "https://fonts.gstatic.com"],
    'img-src': ["'self'", "data:", "https:", "blob:"],
    'connect-src': ["'self'", "https://api.clerk.com"],
    'frame-src': ["'self'", "https://clerk.com"],
    'object-src': ["'none'"],
    'base-uri': ["'self'"],
    'form-action': ["'self'"]
  };
  
  // Add nonce-based CSP if nonce is provided
  if (nonce) {
    directives['script-src'].push(`'nonce-${nonce}'`);
    directives['style-src'].push(`'nonce-${nonce}'`);
  } else {
    // Fallback to external scripts only (no inline)
    directives['script-src'].push("https://clerk.com");
    directives['style-src'].push("https://fonts.googleapis.com");
  }
  
  return directives;
};

/**
 * Generate a cryptographically secure nonce
 * @returns {string} - Base64-encoded nonce
 */
export const generateNonce = () => {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return btoa(String.fromCharCode.apply(null, array));
};
