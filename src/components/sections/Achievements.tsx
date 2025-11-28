"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AchievementsOriginal() {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const background = backgroundRef.current;
    const title = titleRef.current;
    const description = descriptionRef.current;
    const paragraph = paragraphRef.current;

    if (!section || !background || !title || !description || !paragraph) return;

    // Set initial state - optimized for performance
    gsap.set(section, { transformPerspective: 800 });
    gsap.set(background, {
      scale: 1.3,
      opacity: 1,
      willChange: "transform, opacity",
    });
    gsap.set(title, {
      opacity: 0,
      scale: 1.5,
      y: 80,
      rotationX: 15,
      willChange: "transform, opacity",
    }); // Enhanced with more dramatic scale and rotation
    gsap.set(description, {
      opacity: 0,
      scale: 1.3,
      y: 60,
      rotationY: 10,
      willChange: "transform, opacity",
    });
    gsap.set(paragraph, {
      opacity: 0,
      scale: 1.4,
      y: 100,
      rotationX: -20,
      willChange: "transform, opacity",
    });

    // Create a timeline for the animation sequence
    const tl = gsap.timeline({ paused: true });

    tl.to(background, {
      scale: 1,
      opacity: 0.4,
      duration: 1,
      ease: "power2.inOut",
    })
      .to(
        title,
        {
          opacity: 1,
          scale: 1,
          y: 0,
          rotationX: 0,
          duration: 1.8,
          ease: "power3.out", // Smooth easing without bounce
        },
        "-=0.6"
      )
      .to(
        description,
        {
          opacity: 1,
          scale: 1,
          y: 0,
          rotationY: 0,
          duration: 1.6,
          ease: "power3.out", // Smooth easing without elastic bounce
        },
        "-=1.2"
      )
      .to(
        description,
        {
          opacity: 0,
          scale: 0.8,
          y: -40,
          rotationY: -15,
          duration: 1.2,
          ease: "power3.in",
        },
        "-=0.3"
      )
      .to(
        paragraph,
        {
          opacity: 1,
          scale: 1,
          y: 0,
          rotationX: 0,
          duration: 1.8,
          ease: "power3.out", // Smooth easing without bounce
        },
        "+=0.5" // Changed from "-=0.8" to "+=0.5" to add more gap between description fade-out and paragraph fade-in
      );

    // Create the scroll-triggered animation
    const st = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=200%", // Increased from 150% to 200% for more scroll distance
      pin: true,
      pinSpacing: true,
      animation: tl,
      scrub: 0.5, // Smoother scroll responsiveness - lower value = more responsive
    });

    return () => {
      st.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative px-[1rem] md:px-[3rem] py-[3.875rem] h-screen rounded-3xl scroll-snap-align-start overflow-hidden mb-[4rem]"
    >
      {/* Background with zoom effect */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: 'url("/images/foundersImage.JPG")',
          transformOrigin: "center center",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between items-center h-full text-center">
        <h1
          ref={titleRef}
          className="text-4xl md:text-[4rem] 2xl:text-[6rem] font-space-grotesk bg-gradient-to-r bg-clip-text will-change-transform"
        >
          Built In India - Flown In Edge of Space
        </h1>
        <div
          ref={descriptionRef}
          className="w-full max-w-4xl 2xl:max-w-[90rem] mx-auto text-lg md:text-[28px] 2xl:text-[48px]"
        >
          <p>
          Kalam Labs is a team of crazy young engineers who are obsessed about pushing boundaries in Edge of Space Aerial Warfare.
          </p>
          <p>
          We have in-house end-to-end airplane manufacturing, leased airstrip, and a cool hanger filled with insane aerial inventions and toys
          </p>
        </div>
        <p
          ref={paragraphRef}
          className="absolute bottom-0 w-full max-w-4xl 2xl:max-w-[90rem] mx-auto text-lg md:text-[28px] 2xl:text-[48px] will-change-transform"
        >
          Join Us to Build Near Space Aerial Dominance as a Service :)
        </p>
      </div>
    </section>
  );
}
