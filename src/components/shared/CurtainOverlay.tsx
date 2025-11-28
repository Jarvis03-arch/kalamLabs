"use client";

import { useEffect, useState } from "react";

interface CurtainOverlayProps {
  isVisible: boolean;
  onAnimationComplete?: () => void;
}

export default function CurtainOverlay({
  isVisible,
  onAnimationComplete,
}: CurtainOverlayProps) {
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    if (!isVisible) {
      // Start the curtain animation
      const timer = setTimeout(() => {
        setShouldRender(false);
        onAnimationComplete?.();
      }, 320); // Duration of the curtain animation

      return () => clearTimeout(timer);
    }
  }, [isVisible, onAnimationComplete]);

  if (!shouldRender) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Left curtain panel */}
      <div
        className="absolute top-0 left-0 w-1/2 h-full bg-black transition-all duration-[300ms]"
        style={{
          transform: isVisible ? "translateX(0)" : "translateX(-100%)",
          opacity: isVisible ? 1 : 0,
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          transitionDelay: isVisible ? "0ms" : "20ms",
        }}
      />
      {/* Right curtain panel */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-black transition-all duration-[300ms]"
        style={{
          transform: isVisible ? "translateX(0)" : "translateX(100%)",
          opacity: isVisible ? 1 : 0,
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          transitionDelay: isVisible ? "0ms" : "0ms",
        }}
      />
    </div>
  );
}
