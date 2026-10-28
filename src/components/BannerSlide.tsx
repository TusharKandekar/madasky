"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

// Homepage Block 6: titles and descriptions match the approved Word handoff.
// The document asks each tile to link to Factory Diagnostic or a relevant service page.
const diagnostics = [
  {
    title: "Operations Excellence Diagnostic",
    description: "productivity, utilization, WIP, quality, manpower, downtime and operating routines.",
    href: "/operations-excellence-consulting",
  },
  {
    title: "Factory Capacity Diagnostic",
    description: "installed vs effective capacity, bottlenecks and real need for capex.",
    href: "/factory-diagnostic",
  },
  {
    title: "Factory Layout & Flow Diagnostic",
    description: "movement, adjacency, storage, safety and expansion constraints.",
    href: "/plant-layout-consulting",
  },
  {
    title: "Fabric & Raw Material Diagnostic",
    description: "consumption, markers, widths, roll utilization, cutting losses and remnants.",
    href: "/fabric-raw-material-optimization",
  },
  {
    title: "Production Planning Health Check",
    description: "capacity logic, material readiness, line loading, schedule adherence and OTIF risk.",
    href: "/production-planning-scheduling",
  },
  {
    title: "Digital Factory / MES Diagnostic",
    description: "current data, visibility, reason codes, alerts, integrations and management use cases.",
    href: "/digital-factory-mes",
  },
  {
    title: "Turnkey Project Readiness Review",
    description: "product mix, capacity, site, utilities, project packages, schedule and risks.",
    href: "/turnkey-factory-projects",
  },
  {
    title: "Workforce Readiness Review",
    description: "organization, critical roles, manpower plan, skill matrix, ramp-up and training needs.",
    href: "/workforce-readiness-talent-support",
  },
] as const;

export default function BannerSlide() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const move = useCallback((direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector<HTMLElement>("[data-diagnostic-card]");
    const step = card?.offsetWidth ?? track.clientWidth;
    const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
    const nextPosition = track.scrollLeft + direction * step;

    if (direction === 1 && track.scrollLeft >= maxScroll - 4) {
      track.scrollTo({ left: 0, behavior: "smooth" });
    } else if (direction === -1 && track.scrollLeft <= 4) {
      track.scrollTo({ left: maxScroll, behavior: "smooth" });
    } else {
      track.scrollTo({ left: Math.max(0, Math.min(maxScroll, nextPosition)), behavior: "smooth" });
    }
  }, []);

  // Retain the original carousel's automatic progression; pause for interaction.
  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => move(1), 5000);
    return () => window.clearInterval(timer);
  }, [paused, move]);

  return (
    <section id="diagnostics" className="bg-[#f5f5f6] py-14 md:py-20" aria-labelledby="diagnostics-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 md:mb-10">
          <h2 id="diagnostics-heading" className="font-baskervville text-3xl font-bold text-[#102e55] md:text-4xl">
            Start with the Right Diagnostic
          </h2>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous diagnostics"
              onClick={() => move(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#102e55] shadow-sm transition hover:border-[#102e55] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#102e55]"
            >
              <ChevronLeft size={21} aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next diagnostics"
              onClick={() => move(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#102e55] shadow-sm transition hover:border-[#102e55] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#102e55]"
            >
              <ChevronRight size={21} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
          className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth pb-4"
          aria-label="Manufacturing diagnostic services"
        >
          {diagnostics.map((diagnostic, index) => (
            <div
              key={diagnostic.title}
              data-diagnostic-card
              className="w-full shrink-0 snap-start px-2 sm:w-1/2 lg:w-1/3"
            >
              <Link
                href={diagnostic.href}
                className="group flex h-full min-h-[265px] flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#d6a093] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#102e55] sm:p-7"
              >
                <span className="mb-6 text-sm font-bold tracking-[0.16em] text-[#d93616]">
                  {String(index + 1).padStart(2, "0")} / 08
                </span>
                <h3 className="mb-3 font-baskervville text-[23px] font-bold leading-snug text-[#102e55]">
                  {diagnostic.title}
                </h3>
                <p className="mb-6 flex-1 text-base leading-relaxed text-slate-600">
                  {diagnostic.description}
                </p>
                <span className="inline-flex items-center gap-2 self-start text-sm font-semibold text-[#d93616] group-hover:underline">
                  Explore Diagnostic <ArrowUpRight size={17} aria-hidden="true" />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
