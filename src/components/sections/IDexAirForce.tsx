"use client";
import Image from "next/image";
import InfoCard from "../shared/InfoCard";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function IDexAirForce() {
  const sectionRef = useRef<HTMLElement>(null);
  const card1Ref = useRef<HTMLParagraphElement>(null);
  const card2Ref = useRef<HTMLParagraphElement>(null);
  const card3Ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = [card1Ref.current, card2Ref.current, card3Ref.current];

    if (!section || cards.some((card) => !card)) return;

    // Set initial state - cards hidden with clip-path for left-to-right reveal
    gsap.set(cards, {
      opacity: 1,
      clipPath: "inset(0 100% 0 0)", // Hide by clipping from right side
      willChange: "transform, clip-path",
    });

    // Create animation timeline (paused initially)
    const tl = gsap.timeline({ paused: true });

    // Build the animation sequence
    tl.to(card1Ref.current, {
      clipPath: "inset(0 0% 0 0)", // Reveal from left to right
      duration: 1.0,
      ease: "power2.out",
    })
      .to(
        card2Ref.current,
        {
          clipPath: "inset(0 0% 0 0)", // Reveal from left to right
          duration: 1.0,
          ease: "power2.out",
        },
        "+=0.3" // Start 0.3s after previous animation ends
      )
      .to(
        card3Ref.current,
        {
          clipPath: "inset(0 0% 0 0)", // Reveal from left to right
          duration: 1.0,
          ease: "power2.out",
        },
        "+=0.3" // Start 0.3s after previous animation ends
      );

    // Create ScrollTrigger with one-time animation
    let hasAnimated = false;

    ScrollTrigger.create({
      trigger: section,
      start: "top 50%", // Trigger when section is well into view
      onEnter: () => {
        if (!hasAnimated) {
          // Add delay then play animation (only once)
          gsap.delayedCall(1.0, () => {
            tl.play();
            hasAnimated = true;
          });
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="max-h-screen md:min-h-screen p-[1rem] md:px-[6.125rem] flex flex-col gap-[2rem] 2xl:gap-[3.5rem] mb-[4rem] "
    >
      <div className="flex flex-col py-[1rem] gap-[1rem]">
        <h1 className="text-4xl md:text-[3.375rem] 2xl:text-[6rem] text-start font-space-grotesk leading-[1.2] md:leading-[1]">
          Supersonic Near Space Combat Vehicle
        </h1>
        <p className="text-sm md:text-xl 2xl:text-[36px] text-[#D7D7D7] text-start leading-[1.4] md:leading-[1.8]">
          Supersonic Cruise at Mach 2.5 to strike targets 800 kms away
        </p>
      </div>
      {/* drone section  */}
      <div className="relative min-h-[15.625rem] flex-0 md:flex-1 overflow-hidden aspect-video">
        <Image
          src="/images/droneImage.webp"
          alt="Supersonic Cruise"
          fill
          className="object-contain"
          priority
        />
        <InfoCard
          ref={card1Ref}
          text="DEPLOY AT 118,300+ FT, IGNITE RAMJET TO GO SUPERSONIC"
          className="bottom-0 md:bottom-[8.813rem] md:left-[1.813rem] max-w-[7.188rem] md:max-w-[24.563rem] 2xl:max-w-[548px] bg-[#1B1B1B]"
        />
        <InfoCard
          ref={card2Ref}
          text="STRIKE TARGETS 800+ KM AWAY AT TERMINAL SPEEDS MACH 3.0+"
          className="top-0 md:top-[7.5rem] right-4 md:right-[12.5rem] max-w-[9.313rem] md:max-w-[19.313rem] 2xl:max-w-[464px] bg-[#1B1B1B]"
        />
        <InfoCard
          ref={card3Ref}
          text="MACH 2.5+ AT 18-20 KM ALT"
          className="right-4 bottom-[2rem] md:bottom-[6.25rem] md:right-[12.5rem] max-w-[7.313rem] md:max-w-[13.188rem] 2xl:max-w-[346px] bg-[#1B1B1B]"
        />
      </div>
    </section>
  );
}
