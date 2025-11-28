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

export default function page() {
  const performanceItems = [
    {
      cardHeaderText: "Stratospheric ISR UAV",
      cardBodyText:
        "Conduct Stealth High Altitude Surveillance of Enemy Targets",
      cardBodyTextList: [
        "Loiters stealthily above Int flights at 50,000+ ft altitude",
        "AI-enabled EO/IR surveillance unit",
        "VTOL Landing in extreme high winds",
      ],
      cardFooterText:
        "Tested at rugged high altitude terrains of Indo-China LoC",
      imageSrc: "/images/performanceImage1.webp",
    },
    {
      cardHeaderText: "Stratospheric Retrievable Radiosonde",
      cardBodyText: "Autonomous High Altitude Weather Platform",
      cardBodyTextList: [
        "Replaces single-use traditional radiosonde",
        "Enables Meteorology and Artillery Divisions to reuse radiosondes",
        "Saves upto Rs.50,000/launch per day.",
      ],
      imageSrc: "/images/performanceImage2.webp",
    },
    {
      cardHeaderText: "Stratospheric Kamikaze UAV Swarm",
      cardBodyText:
        "Stealth Swarms of UAVs descending upon adversaries from the Edge of Space",
      cardBodyTextList: [
        "Deployed @ 100,000+ ft altitude",
        "Stealth Radar-evasive strikes on key targets",
      ],
      cardFooterText: "Vetted & Demonstrated for Indian Army",
      imageSrc: "/images/performanceImage3.webp",
    },
  ];

  return (
    <ScrollPerformance showFPS={process.env.NODE_ENV === "development"}>
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
