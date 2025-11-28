"use client";

import { useEffect, useState } from "react";
import CurtainOverlay from "../shared/CurtainOverlay";

interface ResponsiveServerVideoProps {
  mobileVideo: string;
  desktopVideo: string;
  className?: string;
  mobileFallbackImage?: string; // poster for mobile
  desktopFallbackImage?: string; // poster for desktop
  onVideoReady?: () => void; // Callback when video/poster is ready
  priority?: boolean; // Whether this video should load with priority
}

// Server component: Renders two videos and relies on CSS to show/hide per breakpoint
export default function BackgroundVideoServer({
  mobileVideo,
  desktopVideo,
  className = "",
  mobileFallbackImage,
  desktopFallbackImage,
  onVideoReady,
  priority = false,
}: ResponsiveServerVideoProps) {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [showCurtain, setShowCurtain] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Handle client-side hydration and screen size detection
  useEffect(() => {
    setIsClient(true);

    const checkScreenSize = () => {
      const newIsMobile = window.innerWidth < 768;
      setIsMobile(newIsMobile);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  // Handle video/poster loading immediately
  useEffect(() => {
    const posterImage = isMobile ? mobileFallbackImage : desktopFallbackImage;

    if (posterImage) {
      // If we have a poster image, wait for it to load
      const img = new Image();
      img.onload = () => {
        setIsVideoReady(true);
        onVideoReady?.();
      };
      img.onerror = () => {
        setIsVideoReady(true);
        onVideoReady?.();
      };
      img.src = posterImage;
    } else {
      // If no poster, assume video is ready after a short delay
      const timer = setTimeout(() => {
        setIsVideoReady(true);
        onVideoReady?.();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [
    isMobile,
    mobileFallbackImage,
    desktopFallbackImage,
    onVideoReady,
    mobileVideo,
    desktopVideo,
  ]);

  const handleCurtainComplete = () => {
    setShowCurtain(false);
  };

  return (
    <>
      <CurtainOverlay
        isVisible={showCurtain && !isVideoReady}
        onAnimationComplete={handleCurtainComplete}
      />
      <div
        className={`absolute inset-0 w-full overflow-hidden z-0 ${className}`}
      >
        {/* Render only the appropriate video based on screen size - hydration safe */}

        {/* Only render videos after client-side hydration to avoid hydration mismatch */}
        {isClient && (
          <>
            {isMobile ? (
              <video
                className="w-full h-full object-cover object-center"
                autoPlay
                loop
                muted
                playsInline
                preload={priority ? "auto" : "metadata"}
                {...(mobileFallbackImage && { poster: mobileFallbackImage })}
                onError={(e) => console.error("Mobile video error:", e)}
              >
                <source src={mobileVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <video
                className="w-full h-full object-cover object-center"
                autoPlay
                loop
                muted
                playsInline
                preload={priority ? "auto" : "metadata"}
                {...(desktopFallbackImage && { poster: desktopFallbackImage })}
                onError={(e) => console.error("Desktop video error:", e)}
              >
                <source src={desktopVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </>
        )}

        {/* Show loading state during hydration */}
        {!isClient && (
          <div className="w-full h-full bg-gray-900 flex items-center justify-center">
            <div className="text-white">Loading video...</div>
          </div>
        )}
      </div>
    </>
  );
}
