import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0C0C0C] mt-[4rem] p-5 pt-[48px] 2xl:p-[50px] flex flex-col items-center gap-[40px] 2xl:gap-[54px]">
      <h3 className="leading-[1.4] text-[2rem] 2xl:text-[3rem] font-space-grotesk">
        KALAM LABS
      </h3>
      <div className="hidden 2xl:flex items-center gap-[0.875rem] 2xl:gap-[2rem]">
          <Link href="https://www.linkedin.com/company/kalamlabs/">
            <Image
              src="/logos/linkedinIcon.svg"
              alt="linkedin"
              width={54}
              height={54}
              className="object-contain"
            />
          </Link>
          <Link href="https://www.instagram.com/kalam_labs">
            <Image
              src="/logos/instaIcon.svg"
              alt="instagram"
              width={54}
              height={54}
              className="object-contain"
            />
          </Link>
          <Link href="https://x.com/kalam_labs">
            <Image
              src="/logos/twitterIcon.svg"
              alt="twitter"
              width={54}
              height={54}
              className="object-contain"
            />
          </Link>
        </div>
      <div className="flex 2xl:hidden items-center gap-[0.875rem]">
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
        <p className="max-w-[200px] text-[13px] md:text-[20px] 2xl:text-[32px] md:max-w-[600px] text-center">Contact for queries:- 7080242444  or  9140658594</p>
      <span className="text-[#7F7F7F]">© 2025 KALAM LABS</span>
    </footer>
  );
}
