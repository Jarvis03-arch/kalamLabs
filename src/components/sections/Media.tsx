"use client";

// import { div } from "framer-motion/client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const mediaImages = [
  "/images/mediaImage1.webp",
  "/images/mediaImage2.webp",
  "/images/mediaImage3.webp",
  "/images/mediaImage4.webp",
];

export default function Media() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const container = marquee.parentElement;
    if (!container) return;

    const pauseAnimation = () => {
      if (marquee) {
        marquee.style.animationPlayState = "paused";
      }
    };

    const playAnimation = () => {
      if (marquee) {
        marquee.style.animationPlayState = "running";
      }
    };

    container.addEventListener("touchstart", pauseAnimation, { passive: true });
    container.addEventListener("touchend", playAnimation);
    container.addEventListener("touchcancel", playAnimation);

    // Add mouse events for desktop hover
    container.addEventListener("mouseenter", pauseAnimation);
    container.addEventListener("mouseleave", playAnimation);

    return () => {
      container.removeEventListener("touchstart", pauseAnimation);
      container.removeEventListener("touchend", playAnimation);
      container.removeEventListener("touchcancel", playAnimation);
      container.removeEventListener("mouseenter", pauseAnimation);
      container.removeEventListener("mouseleave", playAnimation);
    };
  }, []);

  return (
    <section className="px-[1rem] md:px-[44px] py-[2rem] md:py-[44px] bg-[#E9D59914] max-h-[500px] 2xl:max-h-[700px] overflow-hidden rounded-2xl 2xl:rounded-3xl">
      <h2 className="text-4xl md:text-[3.375rem] 2xl:text-[6rem] font-space-grotesk text-center mb-[44px]">
        What the Media Says About Us
      </h2>
      <div
        className="relative h-[300px] 2xl:h-[450px] max-w-[1000px] 2xl:max-w-[1700px] overflow-hidden pause-on-hover mx-auto"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 35%, black 65%, transparent 100%)",
        }}
      >
        <div ref={marqueeRef} className="animate-marquee-y mb-[1rem]">
          {mediaImages.map((src, index) => (
            <div key={index} className="mb-8">
              <Image
                src={src}
                alt={`Media image ${index + 1}`}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
          ))}
          {mediaImages.map((src, index) => (
            <div key={`duplicate-${index}`} className="mb-8">
              <Image
                src={src}
                alt={`Media image ${index + 1}`}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
