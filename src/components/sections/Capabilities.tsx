"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getStableViewportHeight } from "@/lib/scroll-performance";
import BackgroundVideoServer from "../layouts/BackgroundVideoServer";

gsap.registerPlugin(ScrollTrigger);

export default function Capabilities() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Calculate the performance carousel pin duration
    const performanceItems = 3; // Number of items in performance carousel
    const performanceCarouselDuration =
      (performanceItems - 1) * getStableViewportHeight();

    // The capabilities should be sticky from when it reaches the top
    // until the performance carousel finishes its sequence
    // This means it should be pinned for: its own height + performance carousel duration
    const totalPinDuration =
      performanceCarouselDuration + getStableViewportHeight();

    // Create ScrollTrigger for Capabilities section
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: `+=${totalPinDuration}`,
      pin: true,
      pinSpacing: false, // This is key - don't add extra spacing
      anticipatePin: 1,
      invalidateOnRefresh: true, // Recalculate on resize automatically
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === section) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-[1] px-[1.188rem] md:px-[3rem] 2xl:px-[6rem] pt-[1.625rem] md:pt-[1.813rem] 2xl:pt-[2.813rem] pb-[3.625rem] h-screen rounded-3xl scroll-snap-align-start"
    >
      <BackgroundVideoServer
        desktopVideo="/videos/capabilityVideo.mp4"
        mobileVideo="/videos/capabilityVideoMobile.mp4"
        mobileFallbackImage="/images/placeholderMobile.png"
        desktopFallbackImage="/images/placeholderWeb.png"
        className="rounded-3xl"
        priority={false}
      />
      <div className="flex relative flex-col justify-between h-full ">
        <div className="font-space-grotesk">
          <div className="flex flex-col md:flex-row md:items-baseline md:gap-4">
            <h1 className="text-4xl md:text-[3.375rem] 2xl:text-[6rem] font-medium">
              Strike Undetected From
            </h1>
            <span className="font-bold text-[3.375rem] md:text-[5.125rem] 2xl:text-[8.125rem]">
              100,000+ Ft
            </span>
          </div>
        </div>
        <div className="text-sm align-middle text-center md:text-[28px] 2xl:text-[48px] leading-relaxed max-w-4xl 2xl:max-w-[90rem] mx-auto">
          <p>
            Kalam Labs patented Hydrogen LTA-based Deployment ensures stealth,
            long-range missions 10x higher than conventional UAVs, at the Edge
            of Space.
          </p>
        </div>
      </div>
    </section>
  );
}
