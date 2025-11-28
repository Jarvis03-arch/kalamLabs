import {
  HoverAccordion,
  HoverAccordionItem,
  HoverAccordionTrigger,
  HoverAccordionContent,
} from "@/components/ui/hover-accordion";
import { FeatureCard } from "@/components/shared/feature-card";

export default function Firmware() {
  const firmwareFeatures = [
    {
      id: "flight-control",
      title:
        "Custom Flight Controller @ 550 MHz,in-house firmware house firmwarehouse firmware",
      description: [
        "Near Space altitudes present unique challenges in the electronic sub-systems of a Flight Controller. Conventional FCs can't be deployed. Kalam Labs has built a Custom Flight Controller for this task.",
        "Coupled with our in-house developed firmware, which ensures UAV stability and autonomous flights in exponentially changing air pressure enviroments and extreme high winds with icing temperatures.",
      ],
      mobileDescription: [
        "Near Space altitudes present unique challenges in the electronic sub-systems of a Flight Controller. Conventional FCs can't be deployed. Kalam Labs has built a Custom Flight Controller for this task.",
      ],
      image: "/images/firmwareImage1.webp",
    },
    {
      id: "communication",
      title: "In-house CF composite Air frame fabrication",
      description: [
        "Generating lift in extreme altitudes with 1% air pressure while at high speeds is an intense engineering challenge.",
        "Our custom CF composite airframes, with in-house designed airfoils ensure smoothest autonomous flights at extreme untested altitudes",
      ],
      mobileDescription: [
        "Generating lift in extreme altitudes with 1% air pressure while at high speeds is an intense engineering challenge.",
        "Our custom CF composite airframes, with in-house designed airfoils ensure smoothest autonomous flights at extreme untested altitudes",
      ],
      image: "/images/firmwareImage2.webp",
    },
    {
      id: "sensor-integration",
      title: "Long range VTX/Telemetry System (100 km range)",
      description: [
        "Current VTX systems are limited to <20 km range. Kalam Labs in-house designed Antenna Tracking System enables us to deploy >15 dBi antennaes autonomously tracking, and pointing the Near Space UAV system for ensuring uninterrupted video transmission with the Aerial Vehicle.",
        "Extendable for long-range plasma proofed Supersonic UAV tracking, our ATS serves as a foundation for the Future Supersonic Vehicle systems",
      ],
      mobileDescription: [
        "Current VTX systems are limited to <20 km range. Kalam Labs in-house designed Antenna Tracking System enables us to deploy >15 dBi antennaes autonomously tracking, and pointing the Near Space UAV system for ensuring uninterrupted video transmission with the Aerial Vehicle.",
      ],
      image: "/images/firmwareImage3.webp",
    },
    {
      id: "power-management",
      title: "Encrypted Mission Planning GCS",
      description: [
        "Missions with Military require encrypted, specialized Ground Control Mission Management.",
        "We have built our own custom Ground Control Station for execution of these vital key missions.",
      ],
      mobileDescription: [
        "Missions with Military require encrypted, specialized Ground Control Mission Management.",
        "We have built our own custom Ground Control Station for execution of these vital key missions.",
      ],
      image: "/images/firmwareImage4.webp",
    },
  ];

  return (
    <section className="relative px-[1rem] md:px-[3rem] py-[1.5rem] 2xl:p-[6rem] rounded-3xl bg-[#1B1B1B] mb-[5.25rem]">
      <div className="flex flex-col">
        <h1 className="text-4xl md:text-[3.375rem] font-space-grotesk text-start mb-9">
          In-house developed Full Stack for Stratospheric Missions
        </h1>

        <div className="max-w-full">
          <HoverAccordion
            hoverDelay={200}
            leaveDelay={400}
            defaultValue={firmwareFeatures[0]?.id || ""}
          >
            {firmwareFeatures.map((feature) => (
              <HoverAccordionItem
                key={feature.id}
                value={feature.id}
                className="border-white border-b-1"
              >
                <HoverAccordionTrigger className="text-white text-lg 2xl:text-[48px] font-medium">
                  {feature.title}
                </HoverAccordionTrigger>
                <HoverAccordionContent className="py-4">
                  <FeatureCard
                    title={feature.title}
                    description={feature.description}
                    mobileDescription={feature.mobileDescription}
                    image={feature.image}
                  />
                </HoverAccordionContent>
              </HoverAccordionItem>
            ))}
          </HoverAccordion>
        </div>
      </div>
    </section>
  );
}
