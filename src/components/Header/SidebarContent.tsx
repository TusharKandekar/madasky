"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import CloseHamburgerIcon from "./CloseHamburgerIcon";
import LogoCombo2 from "./LogoCombo2";
import { FaArrowLeftLong } from "react-icons/fa6";

type MenuLink = {
  title: string;
  href: string;
};

type ServiceGroup = {
  title: string;
  href: string;
  links: MenuLink[];
};

type SectionKey = "about" | "services" | "industries" | "career" | "insights";

type SidebarContentProps = {
  onClose: () => void;
};

const serviceGroups: ServiceGroup[] = [
  {
    title: "Operations Excellence",
    href: "/operations-excellence-consulting",
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
    links: [
      { title: "Fabric & Raw Material Optimization", href: "/fabric-raw-material-optimization" },
      { title: "Production Planning & Scheduling", href: "/production-planning-scheduling" },
      { title: "Digital Factory & MES", href: "/digital-factory-mes" },
    ],
  },
  {
    title: "Workforce Readiness & Key Talent Support",
    href: "/workforce-readiness-talent-support",
    links: [
      { title: "Talent Acquisition", href: "/talent-acquisition-consulting" },
      { title: "People Skilling", href: "/people-skilling-consulting" },
      { title: "Leadership Development & Talent Management", href: "/leadership-development-and-talent-management" },
    ],
  },
];

const sections: Record<SectionKey, { title: string; href?: string; children?: MenuLink[] }[]> = {
  about: [
    { title: "About Madasky", href: "/about" },
    { title: "Our Leadership and People", href: "/our-people" },
    { title: "Purpose, Mission, Vision and Values", href: "/purpose-vision" },
    { title: "Our History", href: "/history" },
    { title: "Our Aspiration", href: "/aspiration" },
    { title: "How We Work", href: "/how-we-work" },
  ],
  services: serviceGroups.map((group) => ({
    title: group.title,
    href: group.href,
    children: group.links,
  })),
  industries: [
    { title: "Home Textiles", href: "/industries/home-textiles" },
    { title: "Apparel", href: "/industries/apparel" },
    { title: "Textiles", href: "/industries/textiles" },
    { title: "Technical Textiles", href: "/industries/technical-textiles" },
  ],
  career: [
    { title: "Home", href: "/careers-home" },
    { title: "Explore", href: "/careers-explore" },
    { title: "Our Experts - ProXperts", href: "/pro-experts" },
    { title: "Jobs", href: "/careers-jobs" },
  ],
  insights: [
    { title: "Insights", href: "/blog" },
    { title: "Case Studies", href: "/case-studies" },
    { title: "Factory Diagnostic", href: "/factory-diagnostic" },
    { title: "Events", href: "/events" },
    { title: "Gallery", href: "/gallery" },
    { title: "Videos", href: "/video" },
  ],
};

const mainMenu: { title: string; href?: string; section?: SectionKey }[] = [
  { title: "Home", href: "/" },
  { title: "About Us", section: "about" },
  { title: "Services", section: "services" },
  { title: "Diagnostic", href: "/diagnostic" },
  { title: "Industries", section: "industries" },
  { title: "Career", section: "career" },
  { title: "Insights", section: "insights" },
];

export default function SidebarContent({ onClose }: SidebarContentProps) {
  const [currentSection, setCurrentSection] = useState<SectionKey | null>(null);
  const [expandedService, setExpandedService] = useState<string | null>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleSectionOpen = (section: SectionKey) => {
    setCurrentSection(section);
    setExpandedService(null);
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex justify-start bg-black/45 xl:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      onClick={onClose}
    >
      <div
        className="flex h-[100dvh] w-[min(90%,420px)] flex-col bg-[#202b3b] text-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex h-20 shrink-0 items-center gap-3 border-b border-white/20 px-4">
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={onClose}
            className="flex h-12 w-12 shrink-0 items-center justify-center border-r border-white/20"
          >
            <CloseHamburgerIcon color="white" />
          </button>
          <LogoCombo2 color="white" />
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-7">
          {currentSection === null ? (
            <>
              <nav className="flex flex-col gap-1" aria-label="Main navigation">
                {mainMenu.map((item) =>
                  item.href ? (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={onClose}
                      className="flex min-h-12 items-center border-b border-white/10 py-3 text-lg font-medium text-white transition hover:text-orange-400"
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => item.section && handleSectionOpen(item.section)}
                      className="flex min-h-12 w-full items-center justify-between border-b border-white/10 py-3 text-left text-lg font-medium text-white transition hover:text-orange-400"
                    >
                      <span>{item.title}</span>
                      <span aria-hidden="true" className="text-2xl text-white/60">›</span>
                    </button>
                  )
                )}
              </nav>

              <div className="mt-7 flex flex-col gap-3">
                <Link
                  href="/contact-us"
                  onClick={onClose}
                  className="rounded-md border border-white/40 px-4 py-3 text-center font-semibold text-white"
                >
                  Contact Us
                </Link>
                <a
                  href="https://calendar.app.google/UMVkRH1hG1f5nNcV7"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="rounded-md bg-[#152869] px-4 py-3 text-center font-semibold text-white"
                >
                  Book An Appointment
                </a>
              </div>
            </>
          ) : (
            <div>
              <button
                type="button"
                onClick={() => {
                  setCurrentSection(null);
                  setExpandedService(null);
                }}
                className="mb-5 flex items-center gap-2 text-sm font-semibold text-white/75 transition hover:text-white"
              >
                <FaArrowLeftLong />
                Back to menu
              </button>

              <h2 className="mb-4 text-xl font-bold">
                {currentSection === "services"
                  ? "Services"
                  : currentSection === "about"
                    ? "About Us"
                    : currentSection.charAt(0).toUpperCase() + currentSection.slice(1)}
              </h2>

              <div className="flex flex-col">
                {sections[currentSection].map((item) => {
                  const hasChildren = Boolean(item.children?.length);
                  const isExpanded = expandedService === item.title;

                  return (
                    <div key={item.title} className="border-b border-white/10">
                      <div className="flex items-center gap-2">
                        {item.href && (
                          <Link
                            href={item.href}
                            onClick={onClose}
                            className="min-h-12 flex-1 py-3 text-base font-medium text-white transition hover:text-orange-400"
                          >
                            {item.title}
                          </Link>
                        )}
                        {hasChildren && (
                          <button
                            type="button"
                            aria-expanded={isExpanded}
                            aria-label={`${isExpanded ? "Collapse" : "Expand"} ${item.title}`}
                            onClick={() => setExpandedService(isExpanded ? null : item.title)}
                            className="flex h-11 w-11 shrink-0 items-center justify-center text-2xl text-white/70"
                          >
                            {isExpanded ? "−" : "+"}
                          </button>
                        )}
                      </div>

                      {hasChildren && isExpanded && (
                        <ul className="mb-3 ml-3 border-l border-white/20 pl-4">
                          {item.children?.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={onClose}
                                className="block py-2.5 text-sm leading-5 text-white/75 transition hover:text-orange-400"
                              >
                                {child.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        <div className="shrink-0 border-t border-white/15 px-6 py-4 text-xs text-white/55">
          © {new Date().getFullYear()}, MADASKY. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}
