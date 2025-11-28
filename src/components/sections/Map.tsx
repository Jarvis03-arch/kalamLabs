import Image from "next/image";

export default function Map() {
 
  return (
    <section
      className="px-[1rem] md:px-[4rem] py-[2rem] md:py-[4rem] h-[40.625rem] md:h-screen bg-[#0C0C0C] md:bg-[url('/images/mapWeb.svg')] md:bg-cover md:bg-center md:bg-no-repeat mb-[4rem]"
    >
      <div className="h-full flex flex-col justify-between md:relative">
        {/* Heading element */}
        <h2
          id="map-heading"
          className="text-4xl md:text-[3.375rem] 2xl:text-[6rem] md:max-w-[742px] 2xl:max-w-[80rem] font-space-grotesk text-end md:absolute md:top-[0px] md:right-[64px]"
        >
          Vetted by Armed Forces in Deserts, Mountains and Borders
        </h2>

        {/* Map container with InfoCards positioned on white dots */}
        <div className="relative w-auto h-[300px] md:h-[350px] md:hidden ">
          <Image
            src="/images/mapMobile.svg"
            alt="Map showing military deployment locations"
            fill
            className="object-cover"
            priority
          />
        </div>

        <p className="text-[#D7D7D7] max-w-[274px] text-sm md:text-lg 2xl:text-[36px] text-start leading-[1.4] md:absolute md:bottom-[0px] md:right-[64px] md:max-w-[581px] 2xl:max-w-[1200px] md:leading-[1.8]">
          Kalam Labs ruggedized Near Space Aerial UAV systems have been tested
          in all terrains, and consistently perform essential high altitude
          stealth missions for the Military
        </p>
      </div>
    </section>
  );
}
