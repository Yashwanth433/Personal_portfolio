"use client";

import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { educations } from "@/utils/data/educations";
import { personalData } from "@/utils/data/personal-data";

const detailPages = ["profile", "education", "skills"];

function ProfileCarousel() {
  const [activePage, setActivePage] = useState(0);

  const showPrevious = () => {
    setActivePage((page) => (page - 1 + detailPages.length) % detailPages.length);
  };
  const showNext = () => {
    setActivePage((page) => (page + 1) % detailPages.length);
  };

  return (
    <section
      aria-label="Profile details"
      className="relative overflow-hidden rounded-lg border border-[#28452d] bg-gradient-to-br from-[#0a110c] to-[#101d12] shadow-[0_0_32px_rgba(57,255,20,0.08)]"
    >
      <div className="flex items-center justify-between border-b border-[#28452d] px-4 py-3 sm:px-6">
        <div className="flex gap-2" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#39ff14]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#91e83b]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#d2ff68]" />
        </div>
        <p className="font-mono text-xs text-gray-400">
          {String(activePage + 1).padStart(2, "0")} / {String(detailPages.length).padStart(2, "0")}
        </p>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-200 ease-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${activePage * 100}%)` }}
        >
          <article
            aria-label="Basic profile information"
            aria-hidden={activePage !== 0}
            className="w-full min-w-0 shrink-0 p-4 font-mono text-xs sm:p-6 sm:text-sm"
          >
            <h2 className="mb-4 text-base font-semibold text-[#39ff14] sm:text-lg">profile.js</h2>
            <p className="text-gray-400">{"const profile = {"}</p>
            <div className="ml-4 space-y-2 py-2 sm:ml-6">
              <p><span className="text-cyan-300">name</span><span className="text-gray-400">: </span><span className="text-amber-200">&quot;{personalData.name}&quot;</span><span className="text-gray-400">,</span></p>
              <p><span className="text-cyan-300">role</span><span className="text-gray-400">: </span><span className="text-amber-200">&quot;{personalData.role}&quot;</span><span className="text-gray-400">,</span></p>
              <p><span className="text-cyan-300">dateOfBirth</span><span className="text-gray-400">: </span><span className="text-amber-200">&quot;{personalData.dateOfBirth}&quot;</span><span className="text-gray-400">,</span></p>
              <p><span className="text-cyan-300">location</span><span className="text-gray-400">: </span><span className="text-amber-200">&quot;{personalData.location}&quot;</span><span className="text-gray-400">,</span></p>
              <p><span className="text-cyan-300">email</span><span className="text-gray-400">: </span><span className="break-all text-amber-200">&quot;{personalData.email}&quot;</span><span className="text-gray-400">,</span></p>
              <p><span className="text-cyan-300">phone</span><span className="text-gray-400">: </span><span className="text-amber-200">&quot;{personalData.phone}&quot;</span><span className="text-gray-400">,</span></p>
              <div>
                <p><span className="text-cyan-300">skills</span><span className="text-gray-400">: [</span></p>
                <div className="ml-4 flex flex-wrap gap-2 py-2 sm:ml-6">
                  {personalData.skills.map((skill, index) => (
                    <span key={skill} className="text-amber-200">
                      &quot;{skill}&quot;{index < personalData.skills.length - 1 ? "," : ""}
                    </span>
                  ))}
                </div>
                <p className="text-gray-400">],</p>
              </div>
            </div>
            <p className="text-gray-400">{"};"}</p>
          </article>

          <article
            aria-label="Education and schools"
            aria-hidden={activePage !== 1}
            className="w-full min-w-0 shrink-0 p-4 font-mono text-xs sm:p-6 sm:text-sm"
          >
            <h2 className="mb-4 text-base font-semibold text-[#39ff14] sm:text-lg">education.js</h2>
            <p className="text-gray-400">{"const education = ["}</p>
            <div className="ml-4 space-y-3 py-2 sm:ml-6">
              {educations.map((education, index) => (
                <div key={education.id}>
                  <p className="text-gray-400">{"{"}</p>
                  <div className="ml-3 space-y-1 sm:ml-4">
                    <p><span className="text-cyan-300">school</span><span className="text-gray-400">: </span><span className="text-amber-200">&quot;{education.institution}&quot;</span><span className="text-gray-400">,</span></p>
                    <p><span className="text-cyan-300">qualification</span><span className="text-gray-400">: </span><span className="text-amber-200">&quot;{education.title}&quot;</span><span className="text-gray-400">,</span></p>
                    <p><span className="text-cyan-300">years</span><span className="text-gray-400">: </span><span className="text-amber-200">&quot;{education.duration}&quot;</span></p>
                  </div>
                  <p className="text-gray-400">{index === educations.length - 1 ? "}" : "},"}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-400">{"];"}</p>
          </article>

          <article
            aria-label="Programming skills"
            aria-hidden={activePage !== 2}
            className="w-full min-w-0 shrink-0 p-4 font-mono text-xs sm:p-6 sm:text-sm"
          >
            <h2 className="mb-4 text-base font-semibold text-[#39ff14] sm:text-lg">techStack.js</h2>
            <p className="text-gray-400">{"const technologies = ["}</p>
            <div className="ml-4 flex flex-wrap gap-2 py-4 sm:ml-6">
              {personalData.skills.map((skill) => (
                <span key={skill} className="rounded border border-[#28452d] bg-[#0b130e] px-2 py-1 text-amber-200">
                  &quot;{skill}&quot;
                </span>
              ))}
            </div>
            <p className="text-gray-400">{"];"}</p>
          </article>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-[#28452d] px-4 py-3 sm:px-6">
        <button
          type="button"
          onClick={showPrevious}
          aria-label="Previous details"
          className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm text-[#39ff14] transition-colors hover:bg-[#39ff14]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#39ff14]"
        >
          <FiChevronLeft size={20} />
          <span className="hidden sm:inline">Previous</span>
        </button>
        <div className="flex items-center gap-2" aria-label="Choose a details page">
          {detailPages.map((page, index) => (
            <button
              key={page}
              type="button"
              onClick={() => setActivePage(index)}
              aria-label={`Show ${page} details`}
              aria-current={activePage === index ? "page" : undefined}
              className={`h-2 rounded-full transition-all ${activePage === index ? "w-6 bg-[#39ff14]" : "w-2 bg-[#54735a] hover:bg-[#91e83b]"}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={showNext}
          aria-label="Next details"
          className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm text-[#39ff14] transition-colors hover:bg-[#39ff14]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#39ff14]"
        >
          <span className="hidden sm:inline">Next</span>
          <FiChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}

export default ProfileCarousel;
