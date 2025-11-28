import { cn } from "@/lib/utils";
import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string[];
  mobileDescription?: string[]; // Add this
  image?: string;
  className?: string;
}

export function FeatureCard({
  title,
  description,
  mobileDescription,
  image,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "bg-[#FFFCF4] rounded-[.9375rem] p-4 md:p-9 shadow-lg max-w-full",
        className
      )}
    >
      <div className="flex flex-col">
        {/* Content Section */}

        <h3 className="text-2xl md:text-4xl 2xl:text-[4rem] font-space-grotesk font-bold text-[#0C0C0C] mb-4 md:mb-6 2xl:mb-8">
          {title}
        </h3>

        <div className="flex flex-col md:flex-row gap-6 md:gap-[4.188rem]">
          {/* List Section - More space on md+ */}
          <div className="flex-1 md:flex-[2]">
            <ul>
              {/* Mobile descriptions */}
              {mobileDescription && (
                <div className="block md:hidden">
                  {mobileDescription.map((item, index) => (
                    <li
                      key={`mobile-${index}`}
                      className="text-sm font-medium text-[#0C0C0C] mb-2"
                    >
                      {item}
                    </li>
                  ))}
                </div>
              )}
              
              {/* Desktop descriptions */}
              <div className={mobileDescription ? "hidden md:block" : "block"}>
                {description.map((item, index) => (
                  <li
                    key={`desktop-${index}`}
                    className="text-sm md:text-lg 2xl:text-[32px] font-medium text-[#0C0C0C] mb-4 2xl:mb-6"
                  >
                    {item}
                  </li>
                ))}
              </div>
            </ul>
          </div>

          {/* Image Section - Less space on md+ */}
          {image && (
            <div className="flex-1 md:flex-[1]">
              <div className="bg-gray-100 rounded-xl p-4 min-h-48 md:min-h-64 2xl:min-h-96 flex items-center justify-center relative">
                <Image
                  fill
                  src={image}
                  alt={title}
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
