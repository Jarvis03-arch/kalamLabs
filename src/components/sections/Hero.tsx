"use client";

import BackgroundVideoServer from "../layouts/BackgroundVideoServer";

export default function Hero() {
  const handleVideoReady = () => {
    console.log("Hero video is ready");
  };

  return (
    <section className="relative px-[1rem] md:px-[3rem] pt-[1rem] md:pt-[2rem] h-[calc(100vh-5rem)] md:h-[calc(100vh-6rem)] 2xl:h-[calc(100vh-8rem)] scroll-snap-align-start">
      <BackgroundVideoServer
        mobileVideo="/videos/mobilevid.mp4"
        desktopVideo="/videos/HeroVideo.mp4"
        mobileFallbackImage="/images/placeholderMobile.png"
        desktopFallbackImage="/images/placeholderWeb.png"
        className="-top-[6rem] 2xl:-top-[8rem]"
        onVideoReady={handleVideoReady}
        priority={true}
      />
      <div className="relative z-10 flex gap-4 flex-col justify-start md:justify-between md:pb-[52px] h-full">
        <div className="text-[2.25rem] md:text-[4rem] 2xl:text-[6.25rem] font-space-grotesk leading-tight">
          <h1 className="bg-clip-text  max-w-[47.813rem] 2xl:max-w-[100rem]">
            Near Space Aerial Vehicle At 100,000+ Ft
          </h1>
        </div>
        <div className="flex justify-between">
          <div className="max-w-[43.125rem] 2xl:max-w-[90rem] md:text-[28px] 2xl:text-[44px] font-bold text-white leading-relaxed ">
            Full Stack Platform for deploying Aerial Vehicles in Edge of Space
            Stealth Missions
          </div>
        </div>
        <div className="max-w-[20rem] 2xl:max-w-[500px] absolute bottom-[40px] 2xl:bottom-[60px] font-bold right-4 font-space-grotesk md:text-2xl 2xl:text-4xl">
          <div className="flex justify-end items-center text-white">
            <span>Altitude:-</span>&nbsp;
            <span className="text-white">&nbsp;100,000+ ft</span>
          </div>
          <div className="flex justify-end items-center">
            <span className="text-white">Temperature:-</span>
            &nbsp;
            <span className="text-white">-70°C</span>
          </div>
          <div className="flex justify-end items-center">
            <span className="text-white">Pressure:-</span>&nbsp;
            <span className="text-white">1 kPa</span>
          </div>
        </div>
      </div>
    </section>
  );
}
