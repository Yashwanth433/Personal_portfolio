// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import ProfileCarousel from "./profile-carousel";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

function HeroSection() {
  return (
    <section id="top" className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10 h-auto w-full"
      />

      <div className="grid min-w-0 grid-cols-1 items-start gap-y-8 lg:grid-cols-2 lg:gap-12">
        <div className="order-1 flex flex-col items-start justify-center p-2 pb-8 md:pb-10 lg:order-1 lg:pt-10">
          <div className="hero-identity mb-8 flex items-center gap-4 sm:gap-6">
            <Image
              src={personalData.profile}
              alt={`${personalData.name} profile`}
              width={240}
              height={240}
              priority
              className="h-32 w-32 max-w-full shrink-0 rounded-full border-2 border-[#39ff14] object-cover shadow-[0_0_28px_rgba(57,255,20,0.3)] sm:h-48 sm:w-48"
            />
            <div>
              <p className="text-sm text-gray-300 sm:text-base">Hello, I&apos;m</p>
              <h1 className="mt-1 text-2xl font-bold leading-tight text-white sm:text-3xl">
                {personalData.name}
              </h1>
              <p className="role-animate mt-1 text-lg font-semibold sm:text-xl">
                {personalData.designation}
              </p>
            </div>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-gray-200 sm:text-lg">
            I build reliable web applications and thoughtful digital experiences.
          </p>

          <div className="my-12 flex items-center gap-5">
            {personalData.github && <Link
              href={personalData.github}
              target='_blank'
              aria-label="GitHub"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </Link>}
            {personalData.linkedIn && <Link
              href={personalData.linkedIn}
              target='_blank'
              aria-label="LinkedIn"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </Link>}
            {personalData.facebook && <Link
              href={personalData.facebook}
              target='_blank'
              aria-label="Facebook"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaFacebook size={30} />
            </Link>}
            {personalData.leetcode && <Link
              href={personalData.leetcode}
              target='_blank'
              aria-label="LeetCode"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <SiLeetcode size={30} />
            </Link>}
            {personalData.twitter && <Link
              href={personalData.twitter}
              target='_blank'
              aria-label="Twitter"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaTwitterSquare size={30} />
            </Link>}
          </div>

          <div className="hero-actions flex flex-wrap items-center gap-3">
            <Link href="#contact" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button" target="_blank" href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>

        </div>
        <div className="order-2 min-w-0 lg:order-2">
          <ProfileCarousel />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;