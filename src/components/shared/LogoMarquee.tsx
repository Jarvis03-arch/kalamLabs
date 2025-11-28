// components/LogoMarquee.tsx

import React from "react";
import Image from "next/image";

interface Logo {
  src: string;
  alt: string;
}

interface LogoMarqueeProps {
  logos?: Logo[];
  speed?: number; // Duration in seconds
  pauseOnHover?: boolean;
  className?: string;
}

// Default sample logo data
const defaultLogos: Logo[] = [
  { src: "/logos/marqueeLogo1.svg", alt: "Company A" },
  { src: "/logos/marqueeLogo2.svg", alt: "Company B" },
  { src: "/logos/marqueeLogo3.svg", alt: "Company C" },
  { src: "/logos/marqueeLogo4.svg", alt: "Company D" },
  { src: "/logos/marqueeLogo5.svg", alt: "Company E" },
  { src: "/logos/marqueeLogo6.svg", alt: "Company F" },
];

export default function LogoMarquee({
  logos = defaultLogos,
  speed = 20,
  pauseOnHover = true,
  className = "",
}: LogoMarqueeProps) {
  // Calculate the number of duplicates needed based on logo count
  // Minimum 6 items for smooth scrolling
  const minItems = 6;
  const duplicateCount = Math.max(2, Math.ceil(minItems / logos.length));
  const logosToDisplay = Array(duplicateCount).fill(logos).flat();

  return (
    <div
      className={`relative w-full z-10 bg-header-background overflow-hidden h-[7rem] 2xl:h-[14rem] flex items-center scroll-snap-align-start ${className}`}
    >
      <div
        className={`flex animate-marquee ${
          pauseOnHover ? "pause-on-hover" : ""
        }`}
        style={
          {
            "--marquee-duration": `${speed}s`,
          } as React.CSSProperties
        }
      >
        {logosToDisplay.map((logo, index) => (
          <div
            key={`${logo.alt}-${index}`}
            className="flex-shrink-0 mx-8 md:mx-16 2xl:mx-20 flex items-center justify-center"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={60}
              className="object-contain h-16 2xl:h-32 opacity-100 transition-all duration-300 hover:scale-110"
            />
          </div>
        ))}
        {/* Duplicate for seamless loop */}
        {logosToDisplay.map((logo, index) => (
          <div
            key={`duplicate-${logo.alt}-${index}`}
            className="flex-shrink-0 mx-8 md:mx-16 2xl:mx-20 flex items-center justify-center"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={60}
              className="object-contain md:mx-8 h-16 opacity-100 transition-all duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* Gradient overlays */}
      {/* Left and right gradients */}
      <div
        className="absolute inset-y-0 left-0 w-24 pointer-events-none z-10"
        style={{
          background: "linear-gradient(to right, #000000e5, rgba(0, 0, 0, 0))",
        }}
      />
      <div
        className="absolute inset-y-0 right-0 w-24 pointer-events-none z-10"
        style={{
          background: "linear-gradient(to left, #000000e5, rgba(0, 0, 0, 0))",
        }}
      />

      {/* Top and bottom gradients */}
      <div
        className="absolute inset-x-0 top-0 h-16 2xl:h-32 pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(to bottom, #000000e5 0%, rgba(0, 0, 0, 0.7) 30%, rgba(0, 0, 0, 0) 100%)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-16 2xl:h-32 pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(to top, #000000e5 0%, rgba(0, 0, 0, 0.7) 30%, rgba(0, 0, 0, 0) 100%)",
        }}
      />
    </div>
  );
}
