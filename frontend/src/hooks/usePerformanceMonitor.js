import { useLayoutEffect, useEffect, useRef } from 'react';

/**
 * Custom hook for monitoring component performance
 * @param {string} componentName - Name of the component being monitored
 * @param {boolean} enabled - Whether monitoring is enabled
 */
export const usePerformanceMonitor = (componentName, enabled = true) => {
  const renderStartTime = useRef(null);
  const renderCount = useRef(0);

  useLayoutEffect(() => {
    if (!enabled) return;

    renderStartTime.current = performance.now();
    renderCount.current += 1;

    return () => {
      if (renderStartTime.current) {
        const renderTime = performance.now() - renderStartTime.current;
        
        // Log performance metrics in development
        if (process.env.NODE_ENV === 'development') {
          console.log(`[Performance] ${componentName}:`, {
            renderTime: `${renderTime.toFixed(2)}ms`,
            renderCount: renderCount.current,
            timestamp: new Date().toISOString()
          });
        }

        // Warn about slow renders
        if (renderTime > 16) { // More than one frame at 60fps
          console.warn(`[Performance Warning] ${componentName} took ${renderTime.toFixed(2)}ms to render`);
        }
      }
    };
  });
};

/**
 * Hook for monitoring memory usage
 */
export const useMemoryMonitor = (componentName, enabled = true) => {
  useEffect(() => {
    if (!enabled || !performance.memory) return;

    const logMemoryUsage = () => {
      const memory = performance.memory;
      console.log(`[Memory] ${componentName}:`, {
        used: `${(memory.usedJSHeapSize / 1024 / 1024).toFixed(2)}MB`,
        total: `${(memory.totalJSHeapSize / 1024 / 1024).toFixed(2)}MB`,
        limit: `${(memory.jsHeapSizeLimit / 1024 / 1024).toFixed(2)}MB`
      });
    };

    // Log memory usage every 30 seconds
    const interval = setInterval(logMemoryUsage, 30000);
    
    return () => clearInterval(interval);
  }, [componentName, enabled]);
};

/**
 * Hook for monitoring bundle size and loading performance
 */
export const useBundleMonitor = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      // Monitor resource loading times
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'resource') {
            const loadTime = entry.responseEnd - entry.startTime;
            if (loadTime > 1000) { // More than 1 second
              console.warn(`[Bundle Warning] Slow resource load: ${entry.name} took ${loadTime.toFixed(2)}ms`);
            }
          }
        });
      });

      observer.observe({ entryTypes: ['resource'] });

      return () => observer.disconnect();
    }
  }, []);
};
