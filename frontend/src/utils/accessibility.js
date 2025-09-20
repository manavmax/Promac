/**
 * Accessibility utilities for improved user experience
 */

/**
 * Generate unique ID for accessibility
 * @param {string} prefix - Prefix for the ID
 * @returns {string} - Unique ID
 */
export const generateAriaId = (prefix = 'element') => {
  return `${prefix}-${Math.random().toString(36).substring(2, 11)}`;
};

/**
 * Check if element is visible to screen readers
 * @param {Element} element - DOM element to check
 * @returns {boolean} - Whether element is visible to screen readers
 */
export const isVisibleToScreenReader = (element) => {
  if (!element) return false;
  
  const style = window.getComputedStyle(element);
  return (
    style.display !== 'none' &&
    style.visibility !== 'hidden' &&
    style.opacity !== '0' &&
    element.getAttribute('aria-hidden') !== 'true'
  );
};

/**
 * Get accessible text content from element
 * @param {Element} element - DOM element
 * @returns {string} - Accessible text content
 */
export const getAccessibleText = (element) => {
  if (!element) return '';
  
  // Check for aria-label first
  const ariaLabel = element.getAttribute('aria-label');
  if (ariaLabel) return ariaLabel;
  
  // Check for aria-labelledby
  const labelledBy = element.getAttribute('aria-labelledby');
  if (labelledBy) {
    const labelElement = document.getElementById(labelledBy);
    if (labelElement) return labelElement.textContent || '';
  }
  
  // Fall back to text content
  return element.textContent || '';
};

/**
 * Announce message to screen readers
 * @param {string} message - Message to announce
 * @param {string} priority - Priority level (polite, assertive, off)
 */
export const announceToScreenReader = (message, priority = 'polite') => {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  // Remove after announcement
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

/**
 * Focus management utilities
 */
export const focusManagement = {
  /**
   * Trap focus within an element
   * @param {Element} container - Container element
   * @param {Element} firstFocus - First focusable element
   * @param {Element} lastFocus - Last focusable element
   */
  trapFocus: (container, firstFocus, lastFocus) => {
    const handleTabKey = (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstFocus) {
            lastFocus.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocus) {
            firstFocus.focus();
            e.preventDefault();
          }
        }
      }
    };
    
    container.addEventListener('keydown', handleTabKey);
    
    return () => container.removeEventListener('keydown', handleTabKey);
  },
  
  /**
   * Restore focus to previous element
   * @param {Element} element - Element to restore focus to
   */
  restoreFocus: (element) => {
    if (element && typeof element.focus === 'function') {
      element.focus();
    }
  }
};

/**
 * Color contrast utilities
 */
export const colorContrast = {
  /**
   * Calculate relative luminance
   * @param {number} r - Red value (0-255)
   * @param {number} g - Green value (0-255)
   * @param {number} b - Blue value (0-255)
   * @returns {number} - Relative luminance
   */
  getLuminance: (r, g, b) => {
    const [rs, gs, bs] = [r, g, b].map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  },
  
  /**
   * Calculate contrast ratio between two colors
   * @param {string} color1 - First color (hex)
   * @param {string} color2 - Second color (hex)
   * @returns {number} - Contrast ratio
   */
  getContrastRatio: (color1, color2) => {
    const hexToRgb = (hex) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    };
    
    const rgb1 = hexToRgb(color1);
    const rgb2 = hexToRgb(color2);
    
    if (!rgb1 || !rgb2) return 0;
    
    const lum1 = colorContrast.getLuminance(rgb1.r, rgb1.g, rgb1.b);
    const lum2 = colorContrast.getLuminance(rgb2.r, rgb2.g, rgb2.b);
    
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    
    return (brightest + 0.05) / (darkest + 0.05);
  },
  
  /**
   * Check if contrast meets WCAG standards
   * @param {string} foreground - Foreground color
   * @param {string} background - Background color
   * @param {string} level - WCAG level (AA or AAA)
   * @returns {boolean} - Whether contrast meets standards
   */
  meetsWCAG: (foreground, background, level = 'AA') => {
    const ratio = colorContrast.getContrastRatio(foreground, background);
    const requirements = {
      AA: { normal: 4.5, large: 3 },
      AAA: { normal: 7, large: 4.5 }
    };
    
    return ratio >= requirements[level].normal;
  }
};

/**
 * Keyboard navigation utilities
 */
export const keyboardNavigation = {
  /**
   * Handle arrow key navigation for lists
   * @param {KeyboardEvent} e - Keyboard event
   * @param {Element[]} items - List of focusable items
   * @param {string} orientation - 'horizontal' or 'vertical'
   */
  handleArrowKeys: (e, items, orientation = 'vertical') => {
    const currentIndex = items.indexOf(document.activeElement);
    if (currentIndex === -1) return;
    
    let nextIndex = currentIndex;
    const isVertical = orientation === 'vertical';
    
    // Handle arrow keys based on orientation
    if ((isVertical && e.key === 'ArrowDown') || (!isVertical && e.key === 'ArrowRight')) {
      nextIndex = (currentIndex + 1) % items.length;
    } else if ((isVertical && e.key === 'ArrowUp') || (!isVertical && e.key === 'ArrowLeft')) {
      nextIndex = (currentIndex - 1 + items.length) % items.length;
    } else if (e.key === 'Home') {
      nextIndex = 0;
    } else if (e.key === 'End') {
      nextIndex = items.length - 1;
    } else {
      return;
    }
    
    e.preventDefault();
    items[nextIndex].focus();
  },
  
  /**
   * Handle escape key to close modals/dropdowns
   * @param {KeyboardEvent} e - Keyboard event
   * @param {Function} onClose - Close handler
   */
  handleEscape: (e, onClose) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  }
};

/**
 * Screen reader utilities
 */
export const screenReader = {
  /**
   * Hide element from screen readers
   * @param {Element} element - Element to hide
   */
  hide: (element) => {
    if (element) {
      element.setAttribute('aria-hidden', 'true');
    }
  },
  
  /**
   * Show element to screen readers
   * @param {Element} element - Element to show
   */
  show: (element) => {
    if (element) {
      element.removeAttribute('aria-hidden');
    }
  },
  
  /**
   * Check if element is hidden from screen readers
   * @param {Element} element - Element to check
   * @returns {boolean} - Whether element is hidden
   */
  isHidden: (element) => {
    return element?.getAttribute('aria-hidden') === 'true';
  }
};

/**
 * Form accessibility utilities
 */
export const formAccessibility = {
  /**
   * Associate label with form control
   * @param {string} labelId - Label element ID
   * @param {string} controlId - Form control ID
   */
  associateLabel: (labelId, controlId) => {
    const label = document.getElementById(labelId);
    const control = document.getElementById(controlId);
    
    if (label && control) {
      control.setAttribute('aria-labelledby', labelId);
    }
  },
  
  /**
   * Set up error association
   * @param {string} controlId - Form control ID
   * @param {string} errorId - Error message ID
   */
  associateError: (controlId, errorId) => {
    const control = document.getElementById(controlId);
    const error = document.getElementById(errorId);
    
    if (control && error) {
      control.setAttribute('aria-describedby', errorId);
      control.setAttribute('aria-invalid', 'true');
    }
  },
  
  /**
   * Clear error association
   * @param {string} controlId - Form control ID
   */
  clearError: (controlId) => {
    const control = document.getElementById(controlId);
    
    if (control) {
      control.removeAttribute('aria-describedby');
      control.removeAttribute('aria-invalid');
    }
  }
};
