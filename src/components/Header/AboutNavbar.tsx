"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

import LogoCombo from "@/components/Header/LogoCombo";
import DropdownIcon from "@/components/DropdownIcon";
import Sidebar from "@/components/Header/Sidebar";
import AboutItems from "@/components/AboutItems";
import Navitem from "@/components/Header/Navitem";
import IndustriesNav from "@/components/IndustriesNav";

type NavKey = "about" | "services" | "industries" | "career" | "insights";

type NavItem = {
  title: string;
  key?: NavKey;
  href?: string;
  dropdown?: boolean;
};

type DropdownItemProps = {
  title: string;
  href: string;
  disabled?: boolean;
};

const navItems: NavItem[] = [
  { title: "Home", href: "/", dropdown: false },
  { title: "About Us", key: "about", dropdown: true },
  { title: "Services", key: "services", dropdown: true },
  { title: "Diagnostic", href: "/diagnostic", dropdown: false },
  { title: "Industries", key: "industries", dropdown: true },
  { title: "Career", key: "career", dropdown: true },
  { title: "Insights", key: "insights", dropdown: true },
];

const serviceGroups = [
  {
    title: "Operations Excellence",
    href: "/operations-excellence-consulting",
    description: "Improve factory productivity, efficiency and delivery performance.",
    links: [
      { title: "Productivity & Efficiency Improvement", href: "/productivity-and-efficiency-improvement" },
      { title: "Implementation Support", href: "/implementation-support" },
      { title: "Delivery Performance & Lead Time Reduction", href: "/delivery-performance-and-lead-time-reduction-program" },
      { title: "Sampling – Lead Time Reduction", href: "/sampling-lead-time-reduction" },
    ],
  },
  {
    title: "Turnkey Factory Projects",
    href: "/turnkey-factory-projects",
    description: "Plan and design factory facilities, layouts and material flows.",
    links: [
      { title: "Plant Layout", href: "/plant-layout-consulting" },
      { title: "Technical Consulting", href: "/technical-consulting" },
      { title: "Manpower Planning", href: "/manpower-planning-consulting" },
      { title: "Process & Material Flow", href: "/process-and-material-flow-consulting" },
    ],
  },
  {
    title: "AI-Enabled Manufacturing Intelligence",
    href: "/ai-manufacturing-intelligence",
    description: "Apply technology and automation to improve manufacturing intelligence.",
    links: [
      { title: "Fabric & Raw Material Optimization", href: "/fabric-raw-material-optimization" },
      { title: "Production Planning & Scheduling", href: "/production-planning-scheduling" },
      { title: "Digital Factory & MES", href: "/digital-factory-mes" },
    ],
  },
  {
    title: "Workforce Readiness & Key Talent Support",
    href: "/workforce-readiness-talent-support",
    description: "Build the skills, talent and organisational capabilities factories need.",
    links: [
      { title: "Talent Acquisition", href: "/talent-acquisition-consulting" },
      { title: "People Skilling", href: "/people-skilling-consulting" },
      { title: "Leadership Development & Talent Management", href: "/leadership-development-and-talent-management" },
    ],
  },
];

export default function AboutNavbar({ position = "fixed" }: { position?: "fixed" | "relative" }) {
  const [activeMenu, setActiveMenu] = useState<NavKey | null>(null);

  useEffect(() => {
    const handleScroll = () => setActiveMenu(null);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setActiveMenu(null);

  const renderDropdown = (key: NavKey) => {
    switch (key) {
      case "about":
        return (
          <div className="fixed left-0 top-20 z-50 flex h-auto w-screen items-center justify-center">
            <div className="flex h-[50vh] w-[50%] flex-row items-start justify-start border-2 border-slate-200 bg-white py-5 shadow-xl">
              <div className="w-[50%] px-6">
                <div className="relative flex flex-row pl-4">
                  <div className="flex flex-col items-start justify-start gap-6">
                    <div className="flex text-xl font-semibold text-center">
                      <h2>Who We Are</h2>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-3">
                      <AboutItems link="/about" title="About Madasky" />
                      <AboutItems link="/our-people" title="Our Leadership and People" />
                      <AboutItems link="/purpose-vision" title="Purpose, Mission, Vision and Values" />
                      <AboutItems link="/history" title="Our History" />
                      <AboutItems link="/aspiration" title="Our Aspiration" />
                    </div>
                  </div>
                  <div className="absolute right-0 h-auto w-px rounded-full bg-[#e9e8e8]" />
                </div>
              </div>

              <div className="h-full w-[2px] bg-slate-200" />

              <div className="w-[50%]">
                <div className="flex-col items-start justify-center pl-[2.8rem]">
                  <Link
                    href="/how-we-work"
                    className="flex items-center justify-start gap-3 text-center text-xl font-semibold"
                  >
                    <h2>How We Work</h2>
                    <FontAwesomeIcon icon={faArrowRightLong} className="mr-3 text-xl text-blue-500" />
                  </Link>
                  <span className="text-sm text-gray-400">Overview</span>
                  <Link href="/how-we-work">
                    <div className="relative mt-4 ml-[-0.5rem]">
                      <Image
                        className="mt-2 w-[70%] rounded-lg brightness-75"
                        src="/assets/images/howewoek1.png"
                        width={100}
                        height={100}
                        alt="How Madasky works"
                      />
                      <p className="mt-4 w-[90%]">
                        We work alongside manufacturing businesses to improve factory performance and deliver transformation.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );

      case "services":
        return (
          <div className="fixed left-0 top-20 z-50 flex h-auto w-screen justify-center">
            <div className="grid w-[90%] grid-cols-4 gap-6 border-2 border-slate-200 bg-white px-8 py-8 shadow-xl">
              {serviceGroups.map((group) => (
                <div key={group.href} className="min-w-0">
                  <Link
                    href={group.href}
                    className="inline-flex items-center gap-2 text-lg font-semibold text-gray-900 transition-colors hover:text-[#e33512]"
                  >
                    <span>{group.title}</span>
                    <FontAwesomeIcon icon={faArrowRightLong} className="text-sm text-blue-500" />
                  </Link>
                  <p className="mb-4 mt-2 text-sm leading-6 text-gray-500">{group.description}</p>
                  <ul className="space-y-3">
                    {group.links.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="flex items-start gap-2 text-sm leading-5 text-gray-700 transition-colors hover:text-[#e33512] hover:underline hover:underline-offset-4"
                        >
                          <span className="mt-1 text-[10px] text-blue-500">▸</span>
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );

      case "industries":
        return (
          <div className="fixed left-0 top-20 z-50 flex h-auto w-screen items-center justify-center">
            <div className="flex w-[88%] items-start justify-center border-2 border-slate-200 bg-white p-6 shadow-xl">
              <div className="flex h-full w-full items-center justify-center">
                <IndustriesNav />
              </div>
            </div>
          </div>
        );

      case "career":
        return (
          <div className="absolute left-1/2 top-full z-50 w-52 -translate-x-1/2 transform border-2 border-slate-200 bg-white shadow-xl">
            <ul className="py-2">
              <DropdownItem title="Home" href="/careers-home" />
              <DropdownItem title="Explore" href="/careers-explore" />
              <DropdownItem title="Our Experts - ProXperts" href="/pro-experts" />
              <DropdownItem title="Jobs" href="/careers-jobs" />
            </ul>
          </div>
        );

      case "insights":
        return (
          <div className="absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 transform border-2 border-slate-200 bg-white shadow-xl">
            <ul className="py-2">
              <DropdownItem title="Insights" href="/blog" />
              <DropdownItem title="Case Studies" href="/case-studies" />
              <DropdownItem title="Factory Diagnostic" href="/factory-diagnostic" />
              <DropdownItem title="Events" href="/events" />
              <DropdownItem title="Gallery" href="/gallery" />
              <DropdownItem title="Videos" href="/video" />
            </ul>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <header
      className={`flex h-20 w-full flex-col items-center justify-center shadow-lg ${
        position === "relative" ? "relative bg-white" : "fixed left-0 top-0 z-[99] bg-white"
      }`}
    >
      <nav className="relative flex h-20 w-[95%] items-center justify-between">
        <div className="flex h-full w-1/5 items-center justify-center gap-0 max-md:w-full max-xl:w-[40vw]">
          <Sidebar />
          <LogoCombo />
        </div>

        <div className="flex h-full w-fit items-center justify-evenly gap-4 px-0 max-xl:hidden">
          {navItems.map((item) => (
            <div
              key={item.title}
              className="relative flex h-full items-center justify-center"
              onMouseEnter={() => item.key && setActiveMenu(item.key)}
              onMouseLeave={closeMenu}
            >
              {item.href ? (
                <Link
                  href={item.href}
                  className="flex items-center gap-0 text-sm font-semibold text-black transition-colors hover:text-[#e33512]"
                >
                  {item.title}
                </Link>
              ) : (
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={item.key ? activeMenu === item.key : false}
                  onClick={() => item.key && setActiveMenu(activeMenu === item.key ? null : item.key)}
                  className="flex items-center gap-1 text-sm font-semibold text-black transition-colors hover:text-[#e33512]"
                >
                  {item.title}
                  {item.dropdown && <DropdownIcon />}
                </button>
              )}

              {item.key && activeMenu === item.key && renderDropdown(item.key)}
            </div>
          ))}
        </div>

        <div className="flex h-full w-fit items-center justify-end gap-2 max-xl:hidden">
          <Navitem title="Contact Us" path="/contact-us" />
          <a
            rel="noopener noreferrer"
            href="https://calendar.app.google/UMVkRH1hG1f5nNcV7"
            target="_blank"
          >
            <button className="rounded-4xl bg-[#152869] px-4 py-3 text-sm font-semibold text-white shadow transition hover:bg-[#152869]/90">
              Book An Appointment
            </button>
          </a>
        </div>
      </nav>
    </header>
  );
}

const DropdownItem = ({ title, href }: DropdownItemProps) => (
  <li>
    <Link
      href={href}
      className="block px-4 py-2 text-sm text-black transition-colors hover:bg-gray-100 hover:text-[#e33512]"
    >
      {title}
    </Link>
  </li>
);
