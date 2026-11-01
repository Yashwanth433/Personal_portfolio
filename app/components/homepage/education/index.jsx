// @flow strict
import { educations } from "@/utils/data/educations";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import lottieFile from '../../../assets/lottie/study.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Education() {
  return (
    <div id="education" className="relative z-50 border-t my-8 lg:my-12 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10 h-auto w-full"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-8 sm:w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Educations
          </span>
          <span className="w-8 sm:w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-4">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="hidden items-start justify-center lg:flex">
            <div className="h-3/4 w-3/4">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          <div className="min-w-0">
            <div className="flex flex-col gap-6">
              {
                educations.map(education => (
                  <GlowCard key={education.id} identifier={`education-${education.id}`}>
                    <div className="relative min-w-0 p-3 text-white">
                      <Image
                        src="/blur-23.svg"
                        alt=""
                        width={1080}
                        height={200}
                        className="absolute bottom-0 left-0 h-auto w-full opacity-80"
                      />
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {education.duration}
                        </p>
                      </div>
                      <div className="flex min-w-0 items-start gap-x-3 px-1 py-4 sm:gap-x-4">
                        <div className="shrink-0 text-violet-500 transition-all duration-300 hover:scale-125">
                          <BsPersonWorkspace className="h-7 w-7 sm:h-8 sm:w-8" />
                        </div>
                        <div className="min-w-0 break-words">
                          <p className="mb-2 break-words text-sm font-medium uppercase sm:text-base">
                            {education.title}
                          </p>
                          <p className="break-words text-xs sm:text-sm">{education.institution}</p>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;