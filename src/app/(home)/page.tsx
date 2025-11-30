import AboutFounders from "@/components/sections/AboutFounders";
import Achievements from "@/components/sections/Achievements";
import Capabilities from "@/components/sections/Capabilities";
import Firmware from "@/components/sections/Firmware";
import Hero from "@/components/sections/Hero";
import IDexAirForce from "@/components/sections/IDexAirForce";
import Map from "@/components/sections/Map";
import Media from "@/components/sections/Media";
import PerformanceCarousel from "@/components/sections/PerformanceCarousel";
import StratosphereicAirships from "@/components/sections/StratosphereicAirships";
import LogoMarquee from "@/components/shared/LogoMarquee";
import ScrollPerformance from "@/components/shared/ScrollPerformance";
import Script from "next/script";

export default function page() {
  const performanceItems = [
    {
      cardHeaderText: "Stratospheric ISR UAV",
      cardBodyText:
        "Conduct stealth high altitude surveillance of enemy targets.",
      cardBodyTextList: [
        "Loiters stealthily above INT flights at 50,000+ ft altitude",
        "AI-enabled EO/IR surveillance unit",
        "VTOL Landing in extreme high winds",
      ],
      cardFooterText:
        "Tested at rugged high altitude terrains of Indo-China LoC",
      imageSrc: "/images/performanceImage1.webp",
    },
    {
      cardHeaderText: "Stratospheric Retrievable Radiosonde",
      cardBodyText: "Autonomous high altitude weather platform.",
      cardBodyTextList: [
        "Replaces single-use traditional radiosonde",
        "Reusable platform for Meteorology & Army Artillery",
        "Saves up to ₹50,000 per launch per day",
      ],
      imageSrc: "/images/performanceImage2.webp",
    },
    {
      cardHeaderText: "Stratospheric Kamikaze UAV Swarm",
      cardBodyText:
        "Stealth UAV swarms descending from the edge of space.",
      cardBodyTextList: [
        "Deployed at 100,000+ ft altitude",
        "Radar-evasive strike capability",
      ],
      cardFooterText: "Vetted & Demonstrated for Indian Army",
      imageSrc: "/images/performanceImage3.webp",
    },
  ];

  return (
    <ScrollPerformance showFPS={process.env.NODE_ENV === "development"}>
      {/* ⭐ Breadcrumb Schema */}
      <Script
        id="breadcrumbs-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://kalamlabs.io",
              },
            ],
          }),
        }}
      />

      <Hero />
      <LogoMarquee />
      <div className="md:px-[30px] 2xl:px-[44px]">
        <Capabilities />
        <PerformanceCarousel
          headerText="Perform High Altitude Stealth Missions"
          items={performanceItems}
        />
        <Achievements />
        <Firmware />
        <AboutFounders />
        <IDexAirForce />
        <StratosphereicAirships />
        <Map />
        <Media />
      </div>
    </ScrollPerformance>
  );
}
