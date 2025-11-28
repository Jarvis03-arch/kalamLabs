"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  getOptimizedGSAPSettings,
  getStableViewportHeight,
} from "@/lib/scroll-performance";

gsap.registerPlugin(ScrollTrigger);

interface PerformanceItem {
  cardHeaderText: string;
  cardBodyText: string;
  cardBodyTextList: string[];
  cardFooterText?: string;
  imageSrc: string;
}

interface PerformanceCarouselProps {
  headerText: string;
  items: PerformanceItem[];
}

export default function PerformanceCarousel({
  headerText,
  items,
}: PerformanceCarouselProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let currentIndex = 0;
    const optimizedSettings = getOptimizedGSAPSettings();

    // Set initial state for all except first
    contentRefs.current.forEach((content, index) => {
      if (!content) return;
      if (index > 0) {
        gsap.set(content, {
          opacity: 0,
          scale: 0.9,
          y: 100,
        });
      } else {
        gsap.set(content, {
          opacity: 1,
          scale: 1,
          y: 0,
        });
      }
    });

    const showItem = (index: number) => {
      if (index === currentIndex) return;

      const currentContent = contentRefs.current[currentIndex];
      const nextContent = contentRefs.current[index];

      if (!currentContent || !nextContent) return;

      // Animate out current
      gsap.to(currentContent, {
        opacity: 0,
        scale: 0.9,
        y: index > currentIndex ? -100 : 100,
        ...optimizedSettings,
      });

      // Animate in next
      gsap.fromTo(
        nextContent,
        {
          opacity: 0,
          scale: 0.9,
          y: index > currentIndex ? 100 : -100,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          ...optimizedSettings,
        }
      );

      currentIndex = index;
      setActiveIndex(index);
    };

    // Pin the entire section and track progress
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: `+=${(items.length - 1) * getStableViewportHeight()}`,
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      invalidateOnRefresh: true, // Recalculate on resize/orientation change
      snap: {
        snapTo: 1 / (items.length - 1),
        duration: { min: 0.2, max: 0.6 },
        ease: "power2.inOut",
        delay: 0.1, // Small delay for better UX
      },
      onUpdate: (self) => {
        const progress = self.progress;
        const newIndex = Math.round(progress * (items.length - 1));
        showItem(newIndex);
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === section || trigger.pin === section) {
          trigger.kill();
        }
      });
    };
  }, [items.length]);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 px-[1rem] pt-[2rem] pb-[1rem] md:p-[4rem] 2xl:p-[6rem] h-screen rounded-3xl mb-[4rem] bg-[#1B1B1B]"
    >
      <div className="flex flex-col gap-[2.25rem] 2xl:gap-[6rem] h-full">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl md:text-[3.375rem] 2xl:text-[6rem] font-space-grotesk text-center bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            {headerText}
          </h1>
        </div>

        <div className="relative h-full">
          {items.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                contentRefs.current[index] = el;
              }}
              className="absolute inset-0 will-change-transform"
              style={{
                zIndex: index,
              }}
            >
              <div className="flex flex-col md:flex-row gap-[2rem] h-full">
                <div className="flex-1 flex flex-col gap-[2rem] md:gap-[3.25rem] rounded-2xl overflow-hidden transition-all duration-300 bg-[#151515] p-[0.875rem] md:p-[2rem] 2xl:p-[56px]">
                  <div className="flex-shrink-0">
                    <h2 className="text-[1.75rem] md:text-[3.25rem] 2xl:text-[6rem] font-space-grotesk text-start leading-tight">
                      {item.cardHeaderText}
                    </h2>
                  </div>
                  <div className="flex-1 overflow-hidden leading-[1.3] md:leading-[1.8]">
                    <div className="flex flex-col">
                      <p className="text-start md:text-xl 2xl:text-[40px] mb-[.5rem]">
                        {item.cardBodyText}
                      </p>
                      <ul className=" text-start">
                        {item.cardBodyTextList.map((listItem, listIndex) => (
                          <li
                            key={listItem + listIndex}
                            className="flex items-start gap-3 md:text-xl 2xl:text-[40px]"
                          >
                            <span className="flex-shrink-0 w-1.5 h-1.5 2xl:w-3 2xl:h-3 rounded-full mt-3 2xl:mt-5 bg-gradient-to-br from-white to-gray-400" />
                            <span className="flex-1">{listItem}</span>
                          </li>
                        ))}
                      </ul>
                      {item?.cardFooterText && (
                        <p className="text-start mb-[1rem] mt-[1rem] md:mt-[2rem] md:text-xl 2xl:text-[40px]">
                          {item.cardFooterText}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex-1 relative rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                  <Image
                    fill
                    src={item.imageSrc}
                    alt={item.cardHeaderText}
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
