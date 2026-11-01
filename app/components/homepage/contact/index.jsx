// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from './contact-form';

const contactItems = [
  {
    label: "Email",
    value: personalData.email,
    href: `mailto:${personalData.email}`,
    icon: MdAlternateEmail,
  },
  {
    label: "Phone",
    value: personalData.phone,
    href: `tel:${personalData.phone}`,
    icon: IoMdCall,
  },
  {
    label: "Location",
    value: personalData.address,
    icon: CiLocationOn,
  },
];

function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">
      <div className="hidden lg:flex flex-col items-center absolute top-24 right-0">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid min-w-0 grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-10">
        <ContactForm />
        <aside className="min-w-0 rounded-xl border border-[#28452d] bg-gradient-to-br from-[#0a110c] to-[#101d12] p-4 shadow-[0_0_32px_rgba(57,255,20,0.08)] sm:p-6">
          <h2 className="mb-4 text-base font-semibold text-[#39ff14] sm:text-lg">Contact details</h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {contactItems.map(({ label, value, href, icon: Icon }) => {
              const content = (
                <>
                  <Icon className="h-10 w-10 shrink-0 rounded-lg bg-[#203726] p-2.5 text-[#39ff14]" aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-wider text-gray-400">{label}</span>
                    <span className="mt-1 block break-all text-sm font-medium text-white">{value}</span>
                  </span>
                </>
              );

              return href ? (
                <a
                  key={label}
                  href={href}
                  className="flex min-h-[76px] items-center gap-3 rounded-lg border border-[#28452d] bg-[#080e09]/70 p-3 transition-colors hover:border-[#39ff14]/70 hover:bg-[#39ff14]/5"
                >
                  {content}
                </a>
              ) : (
                <div key={label} className="flex min-h-[76px] items-center gap-3 rounded-lg border border-[#28452d] bg-[#080e09]/70 p-3">
                  {content}
                </div>
              );
            })}
            {personalData.linkedIn && (
              <Link
                target="_blank"
                rel="noreferrer"
                href={personalData.linkedIn}
                className="flex min-h-[76px] items-center gap-3 rounded-lg border border-[#28452d] bg-[#080e09]/70 p-3 transition-colors hover:border-[#39ff14]/70 hover:bg-[#39ff14]/5"
              >
                <BiLogoLinkedin className="h-10 w-10 shrink-0 rounded-lg bg-[#203726] p-2.5 text-[#39ff14]" aria-hidden="true" />
                <span>
                  <span className="block text-xs uppercase tracking-wider text-gray-400">LinkedIn</span>
                  <span className="mt-1 block text-sm font-medium text-white">View LinkedIn profile</span>
                </span>
              </Link>
            )}
            {personalData.github && (
              <Link
                target="_blank"
                rel="noreferrer"
                href={personalData.github}
                className="flex min-h-[76px] items-center gap-3 rounded-lg border border-[#28452d] bg-[#080e09]/70 p-3 transition-colors hover:border-[#39ff14]/70 hover:bg-[#39ff14]/5"
              >
                <IoLogoGithub className="h-10 w-10 shrink-0 rounded-lg bg-[#203726] p-2.5 text-[#39ff14]" aria-hidden="true" />
                <span>
                  <span className="block text-xs uppercase tracking-wider text-gray-400">GitHub</span>
                  <span className="mt-1 block text-sm font-medium text-white">View GitHub profile</span>
                </span>
              </Link>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ContactSection;