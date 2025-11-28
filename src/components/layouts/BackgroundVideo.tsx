"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface ResponsiveVideoProps {
  mobileVideo: string;
  desktopVideo: string;
  className?: string;
  fallbackImage?: string;
  placeholderImage?: string;
  mobilePlaceholderImage?: string;
  desktopPlaceholderImage?: string;
}

export default function HeroBackgroundVideo({
  mobileVideo,
  desktopVideo,
  className = "",
  fallbackImage,
  placeholderImage = "",
  mobilePlaceholderImage,
  desktopPlaceholderImage,
}: ResponsiveVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  // Handle video switching based on screen size
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768;
      const newVideo = mobile ? mobileVideo : desktopVideo;

      if (newVideo !== currentVideo) {
        setCurrentVideo(newVideo);
        setIsVideoLoaded(false);

        if (videoRef.current) {
          videoRef.current.src = newVideo;
          videoRef.current.load();
        }
      }
    };

    checkScreenSize();

    let timeoutId: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkScreenSize, 150);
    };

    window.addEventListener("resize", debouncedResize);
    return () => {
      window.removeEventListener("resize", debouncedResize);
      clearTimeout(timeoutId);
    };
  }, [mobileVideo, desktopVideo, currentVideo]);

  const handleVideoLoadedData = () => {
    console.log("Video loaded successfully:", currentVideo);
    setIsVideoLoaded(true);
  };

  const handleVideoError = (
    e: React.SyntheticEvent<HTMLVideoElement, Event>
  ) => {
    console.error("Video failed to load:", currentVideo, e);
  };

  const handleVideoCanPlay = () => {
    console.log("Video can play:", currentVideo);
  };

  return (
    <div className={`absolute inset-0 w-full overflow-hidden z-0 ${className}`}>
      {/* Mobile Placeholder Image - CSS handles visibility */}
      {mobilePlaceholderImage && (
        <div
          className={`block md:hidden absolute inset-0 transition-opacity duration-500 z-20 ${
            isVideoLoaded ? "opacity-0" : "opacity-100"
          }`}
        >
          <Image
            src={mobilePlaceholderImage}
            alt="Loading background"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      )}

      {/* Desktop Placeholder Image - CSS handles visibility */}
      {desktopPlaceholderImage && (
        <div
          className={`hidden md:block absolute inset-0 transition-opacity duration-500 z-20 ${
            isVideoLoaded ? "opacity-0" : "opacity-100"
          }`}
        >
          <Image
            src={desktopPlaceholderImage}
            alt="Loading background"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      )}

      {/* Fallback Placeholder Image - Shows when no specific mobile/desktop image */}
      {!mobilePlaceholderImage &&
        !desktopPlaceholderImage &&
        placeholderImage && (
          <div
            className={`absolute inset-0 transition-opacity duration-500 z-20 ${
              isVideoLoaded ? "opacity-0" : "opacity-100"
            }`}
          >
            <Image
              src={placeholderImage}
              alt="Loading background"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        )}

      {/* Video - Shows after video loads */}
      <video
        ref={videoRef}
        src={currentVideo || desktopVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        controls={false}
        {...(fallbackImage && { poster: fallbackImage })}
        onLoadedData={handleVideoLoadedData}
        onError={handleVideoError}
        onCanPlay={handleVideoCanPlay}
        className={`w-full h-full object-cover object-center transition-opacity duration-700 z-10 ${
          isVideoLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundColor: "transparent" }}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

// Legacy component for backward compatibility
export function HeroBackgroundVideoLegacy({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  return (
    <HeroBackgroundVideo
      mobileVideo={src}
      desktopVideo={src}
      className={className}
    />
  );
}
