import Image from "next/image";

interface PerformanceProps {
  headerText: string;
  cardHeaderText: string;
  cardBodyText: string;
  cardBodyTextList: string[];
  imageSrc: string;
}

export default function Performance({
   headerText,
    cardHeaderText,
    cardBodyText,
    cardBodyTextList,
    imageSrc
}: PerformanceProps) {
  return (
    <section className="relative px-[1rem] md:px-[3rem] py-[2rem] h-screen rounded-3xl bg-[#1B1B1B]">
      <div className="flex flex-col gap-[2rem] h-full">
        <h1 className="text-4xl md:text-[3.375rem] font-space-grotesk text-center">
          {headerText}
        </h1>
        <div className="flex flex-col md:flex-row gap-[2rem] h-full">
          <div className="flex-1 flex flex-col bg-[#151515] rounded-2xl overflow-hidden">
            <div className="flex-shrink-0 p-[1rem] md:p-[2rem]">
              <h2 className="text-3xl md:text-[3.25rem] font-space-grotesk text-start">
                {cardHeaderText}
              </h2>
            </div>
            <div className="flex-1 overflow-y-auto p-[1rem] md:p-[2rem] pt-0">
              <div className="flex flex-col gap-4">
                <p className="text-start md:text-xl">
                  {cardBodyText}
                </p>
                <ul className="list-disc list-inside space-y-3 text-left marker:text-white md:text-xl">
                  {/* <li>
                    Loiters stealthily above Int flights at 50,000+ ft altitude
                  </li>
                  <li>AI-enabled EO/IR surveillance unit</li>
                  <li>VTOL Landing in extreme high winds</li> */}
                  {cardBodyTextList.map((item, index) => (
                    <li key={item + index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <Image
              fill
              src={imageSrc}
              alt="Stratospheric ISR UAV Aircraft"
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
