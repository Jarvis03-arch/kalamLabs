import { forwardRef } from "react";

interface InfoCardProps {
  text: string;
  className?: string;
}

const InfoCard = forwardRef<HTMLParagraphElement, InfoCardProps>(
  ({ text, className }, ref) => {
    return (
      <p
        ref={ref}
        className={`absolute text-xs md:text-2xl 2xl:text-[36px] text-start p-2 md:p-4 2xl:p-6 rounded-md  z-20 ${className}`}
      >
        {text}
      </p>
    );
  }
);

InfoCard.displayName = "InfoCard";

export default InfoCard;
