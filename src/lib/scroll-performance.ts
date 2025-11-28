/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Scroll Performance Utilities
 * Helps optimize scrolling animations and detect performance issues
 */

export class ScrollPerformanceMonitor {
  private frameCount = 0;
  private lastTime = 0;
  private fps = 0;
  private isMonitoring = false;

  constructor() {
    this.measureFPS = this.measureFPS.bind(this);
  }

  startMonitoring() {
    if (this.isMonitoring) return;
    this.isMonitoring = true;
    this.lastTime = performance.now();
    this.measureFPS();
  }

  stopMonitoring() {
    this.isMonitoring = false;
  }

  private measureFPS() {
    if (!this.isMonitoring) return;

    const currentTime = performance.now();
    this.frameCount++;

    if (currentTime >= this.lastTime + 1000) {
      this.fps = Math.round(
        (this.frameCount * 1000) / (currentTime - this.lastTime)
      );
      this.frameCount = 0;
      this.lastTime = currentTime;

      // Log performance warnings
      if (this.fps < 30) {
        console.warn(
          `Low FPS detected: ${this.fps}fps. Consider optimizing animations.`
        );
      }
    }

    requestAnimationFrame(this.measureFPS);
  }

  getCurrentFPS() {
    return this.fps;
  }
}

/**
 * Detects if user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

/**
 * Gets stable viewport height for mobile devices
 */
export const getStableViewportHeight = (): number => {
  if (typeof window === "undefined") return 0;
  return window.visualViewport?.height || window.innerHeight;
};

/**
 * Throttle function for scroll events
 */
export const throttle = (func: (...args: any[]) => void, limit: number) => {
  let inThrottle: boolean;
  return function (this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Debounce function for resize events
 */
export const debounce = (func: (...args: any[]) => void, wait: number) => {
  let timeout: NodeJS.Timeout;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

/**
 * Check if device is mobile/touch
 */
export const isMobileDevice = (): boolean => {
  if (typeof window === "undefined") return false;
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
};

/**
 * Optimized GSAP settings for better performance
 */
export const getOptimizedGSAPSettings = () => {
  const isReducedMotion = prefersReducedMotion();
  const isMobile = isMobileDevice();

  return {
    duration: isReducedMotion ? 0.01 : isMobile ? 0.4 : 0.6,
    ease: isReducedMotion ? "none" : "power2.out",
    force3D: !isMobile, // Disable 3D transforms on mobile for better performance
    willChange: "transform, opacity",
  };
};
