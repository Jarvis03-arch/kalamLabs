import Image from "next/image";

export default function AboutFounders() {
  return (
    <section className="relative min-h-[45.813rem] md:min-h-[39.375rem] 2xl:min-h-[60rem] w-full px-[1rem] md:px-[5.75rem] py-[2.25rem] md:py-[2.75rem] flex flex-col mb-[4rem]">
      <div className="flex flex-col md:flex-row flex-1 gap-[1.5rem] md:gap-[4.75rem]">
        {/* image component */}
        <div className="flex-1 border gap-[0.6rem] border-#FFFFFF80e  p-[1rem] rounded-2xl overflow-hidden flex flex-col">
          <div className="relative flex-1 rounded-2xl overflow-hidden">
            <Image
              src="/images/foundersImage2.webp"
              alt="About Founders"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full flex flex-col gap-[0.6rem]">
            <h2 className="font-bold font-space-grotesk text-xl 2xl:text-[48px]">
              Built From BITS Pilani dormrooms
            </h2>
            <h3 className="text-[0.8rem] md:text-base 2xl:text-[28px] font-bold font-space-grotesk md:tracking-[0.25rem]">
              Founders of Kalam Labs : Harshit, Sashakt, Faraaz{" "}
            </h3>
          </div>
        </div>
        {/* text component  */}
        <div className="flex-col md:flex-1 md:h-full flex gap-4 md:gap-[1.5rem] md:py-[0rem] md:justify-evenly">
          <h1 className="text-4xl md:text-[2.75rem] 2xl:text-[72px] font-space-grotesk text-center md:text-start md:leading-[1.4]">
            Founded by Faraaz, Harshit, Sashakt
          </h1>
          <p className="text-sm text-[#D7D7D7] text-center md:text-start md:text-xl 2xl:text-[32px] md:leading-[1.8]">
            Kalam Labs is Stratospheric Aerial Research Lab. We
            are inventing futuristic technology which will enable India to not
            only just indigenize but gain 10x advantage over her adversaries.
          </p>
          <p className="text-sm text-[#D7D7D7] text-center md:text-start md:text-xl 2xl:text-[32px] md:leading-[1.8]">
            Kalam Labs with strong amnbitions, already has a manufacturing
            facility in Lucknow, with 15 membered aerospace team, ready to pull
            in sleepless nights to make India Great again!
          </p>
        </div>
      </div>
    </section>
  );
}
