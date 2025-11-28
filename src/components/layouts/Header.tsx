import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="relative top-0 left-0 right-0 h-[5rem] md:h-[6rem] 2xl:h-[8rem] z-50 bg-transparent  px-[1rem] py-[1rem] md:px-[3rem]">
      <div className="flex items-center justify-between h-full font-space-grotesk">
        <div className="h-full items-center">
          <Image
            src="/logos/kalamLabsLogo.png"
            alt="logo"
            width={0}
            height={0}
            sizes="100vw"
            className="h-full w-auto object-contain"
            style={{
              width: "auto",
              height: "100%",
            }}
          />
        </div>
        <div className="text-[1.5rem] hidden md:block md:text-[2rem] 2xl:text-[3rem] text-white drop-shadow-lg">
          KALAM LABS
        </div>
        <div className="hidden 2xl:flex items-center gap-[0.875rem] 2xl:gap-[2rem]">
          <Link href="https://www.linkedin.com/company/kalamlabs/">
            <Image
              src="/logos/linkedinBLackLogo.svg"
              alt="linkedin"
              width={54}
              height={54}
              className="object-contain"
            />
          </Link>
          <Link href="https://www.instagram.com/kalam_labs">
            <Image
              src="/logos/instaBlackLogo.png"
              alt="instagram"
              width={54}
              height={54}
              className="object-contain"
            />
          </Link>
          <Link href="https://x.com/kalam_labs">
            <Image
              src="/logos/twitterBlackLogo.png"
              alt="twitter"
              width={54}
              height={54}
              className="object-contain"
            />
          </Link>
        </div>

        <div className="hidden md:flex 2xl:hidden items-center gap-[0.875rem]">
          <Link href="https://www.linkedin.com/company/kalamlabs/">
            <Image
              src="/logos/linkedinBLackLogo.svg"
              alt="linkedin"
              width={24}
              height={24}
              className="object-contain"
            />
          </Link>
          <Link href="https://www.instagram.com/kalam_labs">
            <Image
              src="/logos/instaBlackLogo.png"
              alt="instagram"
              width={24}
              height={24}
              className="object-contain"
            />
          </Link>
          <Link href="https://x.com/kalam_labs">
            <Image
              src="/logos/twitterBlackLogo.png"
              alt="twitter"
              width={24}
              height={24}
              className="object-contain"
            />
          </Link>
        </div>
        <div className="md:hidden 2xl:hidden flex items-center gap-[0.875rem]">
          {/* <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link> */}
          <Link href='https://www.linkedin.com/company/kalamlabs/'>
            <Image
            src='/logos/linkedinIcon.svg'
            alt='linkedin'
            width={24}
            height={24}
            className="object-contain"
            />
          </Link>
          <Link href='https://www.instagram.com/kalam_labs'>
            <Image
            src='/logos/instaIcon.svg'
            alt='instagram'
            width={24}
            height={24}
            className="object-contain"
            />
          </Link>
          <Link href='https://x.com/kalam_labs'>
            <Image
            src='/logos/twitterIcon.svg'
            alt='twitter'
            width={24}
            height={24}
            className="object-contain"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
