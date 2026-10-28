"use client";

import Image from "next/image";
import Link from "next/link";
import BaseUrl from "@/components/BaseUrl";
import { ArrowUpRight } from "lucide-react";

interface ConsultingHomeProps {
  image: string;
  altText?: string;
}

// Homepage Block 7: approved names, in document order. Existing right-hand image retained.
// Routes point to the closest existing service page; no new URLs are introduced.
const capabilities = [
  { title: "Greenfield & Brownfield Factory Setup", href: "/turnkey-factory-projects" },
  { title: "Capacity Planning & Factory Layout", href: "/plant-layout-consulting" },
  { title: "Architecture, Engineering & Utilities Coordination", href: "/turnkey-factory-projects" },
  { title: "Vendor Selection & Project Management", href: "/turnkey-factory-projects" },
  { title: "Productivity & Operations Excellence", href: "/operations-excellence-consulting" },
  { title: "Fabric & Raw Material Optimization", href: "/fabric-raw-material-optimization" },
  { title: "Production Planning & Scheduling", href: "/production-planning-scheduling" },
  { title: "Digital Factory, MES & IoT", href: "/digital-factory-mes" },
  { title: "Workforce Readiness & Key Talent Support", href: "/workforce-readiness-talent-support" },
  { title: "Commissioning, Ramp-up & Handover", href: "/turnkey-factory-projects" },
] as const;

export default function ConsultingHome({ image, altText }: ConsultingHomeProps) {
  return (
    <section className="bg-[#f5f5f6] py-14 md:py-20" aria-labelledby="manufacturing-capabilities-heading">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <h2
            id="manufacturing-capabilities-heading"
            className="mb-8 font-baskervville text-3xl font-bold text-[#102e55] md:text-4xl"
          >
            Manufacturing Capabilities
          </h2>
          <ul className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
            {capabilities.map((capability) => (
              <li key={capability.title} className="min-w-0">
                <Link
                  href={capability.href}
                  className="group flex h-full items-start justify-between gap-2 border-b border-slate-200 py-2 text-base font-medium leading-relaxed text-slate-700 transition-colors hover:text-[#d93616] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#102e55]"
                >
                  <span>{capability.title}</span>
                  <ArrowUpRight size={17} className="mt-1 shrink-0 text-[#d93616] opacity-70 transition group-hover:opacity-100" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative min-h-[300px] overflow-hidden rounded-xl sm:min-h-[400px] lg:min-h-[510px]">
          <Image
            src={`${BaseUrl().imgurl}${image}`}
            alt={altText || "Madasky Consulting manufacturing capabilities"}
            fill
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
