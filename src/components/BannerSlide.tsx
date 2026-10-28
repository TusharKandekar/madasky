"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Word handoff: Homepage Block 6 — original Audit Series carousel experience,
// with the eight approved diagnostic names and descriptions.
const diagnostics = [
  { title: "Operations Excellence Diagnostic", description: "productivity, utilization, WIP, quality, manpower, downtime and operating routines.", href: "/operations-excellence-consulting" },
  { title: "Factory Capacity Diagnostic", description: "installed vs effective capacity, bottlenecks and real need for capex.", href: "/factory-diagnostic" },
  { title: "Factory Layout & Flow Diagnostic", description: "movement, adjacency, storage, safety and expansion constraints.", href: "/plant-layout-consulting" },
  { title: "Fabric & Raw Material Diagnostic", description: "consumption, markers, widths, roll utilization, cutting losses and remnants.", href: "/fabric-raw-material-optimization" },
  { title: "Production Planning Health Check", description: "capacity logic, material readiness, line loading, schedule adherence and OTIF risk.", href: "/production-planning-scheduling" },
  { title: "Digital Factory / MES Diagnostic", description: "current data, visibility, reason codes, alerts, integrations and management use cases.", href: "/digital-factory-mes" },
  { title: "Turnkey Project Readiness Review", description: "product mix, capacity, site, utilities, project packages, schedule and risks.", href: "/turnkey-factory-projects" },
  { title: "Workforce Readiness Review", description: "organization, critical roles, manpower plan, skill matrix, ramp-up and training needs.", href: "/workforce-readiness-talent-support" },
] as const;

export default function BannerSlide() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(3);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      setVisible(width >= 1024 ? 3 : width >= 768 ? 2 : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const lastIndex = Math.max(0, diagnostics.length - visible);
  const next = useCallback(() => setActive(index => index >= lastIndex ? 0 : index + 1), [lastIndex]);
  const prev = useCallback(() => setActive(index => index <= 0 ? lastIndex : index - 1), [lastIndex]);

  useEffect(() => setActive(index => Math.min(index, lastIndex)), [lastIndex]);
  useEffect(() => {
    if (paused) return;
    const interval = window.setInterval(next, 3000);
    return () => window.clearInterval(interval);
  }, [next, paused]);

  return (
    <section id="diagnostics" className="overflow-hidden bg-[#f5f5f6] py-14 md:py-20" aria-labelledby="diagnostic-title">
      <div className="mx-auto mb-10 max-w-7xl px-6 text-center">
        <h2 id="diagnostic-title" className="font-baskervville text-3xl font-bold text-[#102e55] md:text-4xl">
          Start with the Right Diagnostic
        </h2>
      </div>
      <div
        className="group relative mx-auto max-w-7xl px-6"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={event => {
          if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
        }}
      >
        <button
          type="button" onClick={prev} aria-label="Previous diagnostics"
          className="absolute left-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#102e55] shadow-md transition hover:bg-[#152869] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#152869] lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-within:opacity-100"
        >
          <ChevronLeft size={24} aria-hidden="true" />
        </button>
        <button
          type="button" onClick={next} aria-label="Next diagnostics"
          className="absolute right-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#102e55] shadow-md transition hover:bg-[#152869] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#152869] lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-within:opacity-100"
        >
          <ChevronRight size={24} aria-hidden="true" />
        </button>

        {/* Original carousel is transform-based, not overflow-scroll based: no scrollbar. */}
        <div className="overflow-hidden rounded-2xl pb-4">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${active * (100 / visible)}%)` }}
            aria-label="Manufacturing diagnostics carousel"
          >
            {diagnostics.map((item, index) => (
              <div key={item.title} className="w-full shrink-0 px-3 md:w-1/2 lg:w-1/3">
                <Link
                  href={item.href}
                  className="group/card block h-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#152869]"
                >
                  <div className="relative flex h-full min-h-[278px] flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-md transition-shadow duration-300 group-hover/card:shadow-xl sm:p-7">
                    <span className="mb-3 text-xs font-bold tracking-widest text-[#e1340d]">{String(index + 1).padStart(2, "0")} / 08</span>
                    <h3 className="mb-3 font-baskervville text-xl font-bold leading-snug text-[#102e55] sm:text-2xl">{item.title}</h3>
                    <p className="text-[15px] leading-6 text-slate-600">{item.description}</p>
                    <div className="mt-auto flex justify-center pt-5">
                      <span className="inline-flex rounded-full bg-[#152869] px-5 py-2.5 text-sm font-semibold text-white transition-colors group-hover/card:bg-[#e1340d]">
                        Explore Diagnostic
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
