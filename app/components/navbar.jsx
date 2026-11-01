"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { personalData } from "@/utils/data/personal-data";

const navigationLinks = [
  ["HOME", "top"],
  ["ABOUT", "about"],
  ["EXPERIENCE", "experience"],
  ["SKILLS", "skills"],
  ["EDUCATION", "education"],
  ["PROJECTS", "projects"],
  ["CONTACT", "contact"],
];

function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="site-nav fixed inset-x-0 top-0 z-[100] border-b border-[#1e3b25] bg-[#080d0a]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[92rem] items-center justify-between px-6 py-4 sm:px-12">
        <Link href="/" className="bg-gradient-to-r from-[#39ff14] to-[#b5ff3d] bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
          {personalData.name}
        </Link>

        <button
          type="button"
          className="rounded-md p-2 text-[#39ff14] transition-colors hover:bg-[#39ff14]/10 lg:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="navbar-links"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>

        <ul
          id="navbar-links"
          className={`${isMenuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col border-b border-[#1e3b25] bg-[#080d0a]/95 px-6 py-3 text-sm shadow-lg backdrop-blur-xl lg:static lg:flex lg:flex-row lg:items-center lg:gap-1 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
        >
          {navigationLinks.map(([label, sectionId]) => (
            <li key={label}>
              {pathname === "/" ? (
                <a
                  className="block rounded-md px-4 py-3 text-white transition-colors hover:bg-[#39ff14]/10 hover:text-[#39ff14] lg:py-2"
                  href={`#${sectionId}`}
                  onClick={handleNavigation}
                >
                  {label}
                </a>
              ) : (
                <Link
                  className="block rounded-md px-4 py-3 text-white transition-colors hover:bg-[#39ff14]/10 hover:text-[#39ff14] lg:py-2"
                  href={sectionId === "top" ? "/" : `/#${sectionId}`}
                  onClick={handleNavigation}
                  prefetch
                >
                  {label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
