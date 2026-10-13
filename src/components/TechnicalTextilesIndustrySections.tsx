"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Building2,
  CheckCircle2,
  Cpu,
  Factory,
  Gauge,
  Network,
  Settings2,
  ShieldCheck,
  UsersRound,
  Workflow,
  Wrench,
} from "lucide-react";

import Button from "@/components/Button";

type Props = {
  industryImageUrl: string;
  industryImageAlt: string;
};

const reveal = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, ease: "easeOut" },
} as const;

const challengeItems = [
  {
    title: "Specialized process requirements",
    text: "Translate application-specific manufacturing needs into a workable factory and operating model.",
    icon: Settings2,
  },
  {
    title: "Utilities & machine interfaces",
    text: "Coordinate process utilities, equipment interfaces and supporting infrastructure before packages are frozen.",
    icon: Wrench,
  },
  {
    title: "Future expansion",
    text: "Plan capacity, flow and facility decisions with realistic expansion paths rather than short-term fixes.",
    icon: Building2,
  },
  {
    title: "New-capacity commissioning",
    text: "Bring equipment, utilities, people, systems and acceptance criteria together for controlled start-up.",
    icon: Gauge,
  },
  {
    title: "Technology integration",
    text: "Build operating systems and digital visibility around specialist process technology without blurring accountability.",
    icon: Cpu,
  },
];

const solutionItems = [
  {
    title: "Turnkey Factory Projects",
    text: "Integrate facility, engineering, vendors, utilities and project execution around the manufacturing requirement.",
    href: "/turnkey-factory-projects",
    icon: Factory,
  },
  {
    title: "Project / PMC",
    text: "Coordinate project controls, specialist providers, interfaces, decisions and readiness through execution.",
    href: "/turnkey-factory-projects",
    icon: Network,
  },
  {
    title: "Operations Excellence",
    text: "Stabilize capacity, flow, productivity and operating routines as new or existing processes scale.",
    href: "/operations-excellence-consulting",
    icon: Gauge,
  },
  {
    title: "Digital Factory & MES",
    text: "Create shopfloor visibility, data capture and execution systems around the decisions plant teams need to make.",
    href: "/digital-factory-mes",
    icon: Cpu,
  },
  {
    title: "Workforce Readiness",
    text: "Align manpower, critical roles, skill requirements and ramp-up readiness with project milestones.",
    href: "/workforce-readiness-talent-support",
    icon: UsersRound,
  },
  {
    title: "Selected Planning & Automation",
    text: "Apply planning, automation and AI selectively where the process requirement and data maturity justify it.",
    href: "/ai-manufacturing-intelligence",
    icon: Bot,
  },
];

const projectLayers = [
  "Capacity & process flow",
  "Facility & layout",
  "Engineering coordination",
  "Vendor / project management",
  "Operations readiness",
  "Digital readiness",
];

const relatedLinks = [
  ["Turnkey Factory Projects", "/turnkey-factory-projects"],
  ["Operations Excellence", "/operations-excellence-consulting"],
  ["AI-Enabled Manufacturing Intelligence", "/ai-manufacturing-intelligence"],
];

export default function TechnicalTextilesIndustrySections({
  industryImageUrl,
  industryImageAlt,
}: Props) {
  return (
    <div className="overflow-hidden bg-white">
      <motion.section
        id="manufacturing-context"
        {...reveal}
        className="relative overflow-hidden bg-[#f5f5f6] py-20 max-md:py-14"
      >
        <motion.div
          aria-hidden="true"
          animate={{ y: [0, 16, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-10 bottom-0 h-[280px] w-[280px] opacity-[0.075] max-md:hidden"
        >
          <Image
            src="/assets/images/shape-3.png"
            alt=""
            fill
            className="object-contain"
          />
        </motion.div>

        <div className="relative z-10 grid items-center gap-14 px-6 mx-auto max-w-7xl lg:grid-cols-[1.04fr_0.96fr] sm:px-8 lg:px-10 max-md:gap-9">
          <div>
            <p className="mb-3 text-sm font-bold tracking-[0.18em] uppercase text-[#D72B0D]">
              Manufacturing Context
            </p>
            <h2 className="text-4xl font-bold leading-tight text-[#0E2C53] font-baskervville max-md:text-3xl">
              Specialized Processes Need Disciplined Project Integration
            </h2>
            <div className="mt-7 space-y-5 text-lg leading-relaxed text-gray-600 max-md:text-[17px]">
              <p>
                Technical Textile categories vary widely in machinery, quality,
                utilities, automation and compliance. Madasky therefore
                approaches these projects through disciplined scope definition.
              </p>
              <p>
                We focus on the manufacturing and project layers - capacity,
                flow, facility, engineering coordination, vendor/project
                management, operations and digital readiness - while integrating
                process specialists where the application requires them.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              {["Capacity", "Flow", "Facility", "Engineering", "Digital"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#0E2C53]/15 bg-white px-4 py-2 text-sm font-semibold text-[#0E2C53] shadow-sm"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="relative min-h-[440px] overflow-hidden rounded-2xl bg-[#e9eef4] shadow-xl max-md:min-h-[300px]">
            <Image
              src={industryImageUrl}
              alt={industryImageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07182e]/82 via-[#07182e]/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-7 text-white max-md:p-5">
              <p className="mb-2 text-sm font-semibold tracking-[0.18em] uppercase text-white/75">
                Technical Textile Manufacturing
              </p>
              <p className="max-w-lg text-2xl font-bold leading-snug font-baskervville max-md:text-xl">
                Keep specialist process ownership clear while integrating the
                complete factory and project system around it.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <section
        id="technical-textile-challenges"
        className="relative bg-[#252638] bg-[url('/assets/images/what-we-solve-bg.jpg')] bg-cover bg-center bg-no-repeat py-20 max-md:py-14"
      >
        <div className="absolute inset-0 bg-[#10172d]/85" />
        <motion.div
          {...reveal}
          className="relative z-10 px-6 mx-auto max-w-7xl sm:px-8 lg:px-10"
        >
          <div className="max-w-3xl mx-auto text-center">
            <p className="mb-3 text-sm font-bold tracking-[0.18em] uppercase text-[#ff6a49]">
              Key Challenges
            </p>
            <h2 className="text-4xl font-bold text-white font-baskervville max-md:text-3xl">
              Common Manufacturing Challenges
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/75 max-md:text-[17px]">
              Technical Textile projects often fail at interfaces - where
              specialist process technology meets building, utilities,
              operations, people and future expansion.
            </p>
          </div>

          <div className="grid gap-5 mt-12 md:grid-cols-2 xl:grid-cols-5">
            {challengeItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.45,
                    delay: Math.min(index * 0.05, 0.18),
                  }}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl border border-white/10 bg-white p-6 shadow-lg transition-shadow hover:shadow-2xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eef4fb] text-[#0E2C53]">
                    <Icon size={23} strokeWidth={1.9} />
                  </div>
                  <h3 className="mt-5 text-xl font-bold leading-snug text-[#0E2C53] font-baskervville">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15.5px] leading-relaxed text-gray-600">
                    {item.text}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </section>

      <motion.section
        id="technical-textile-solutions"
        {...reveal}
        className="relative overflow-hidden bg-white py-20 max-md:py-14"
      >
        <motion.div
          aria-hidden="true"
          animate={{ y: [0, -15, 0], rotate: [0, -4, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-8 -top-10 h-[240px] w-[190px] opacity-[0.08] max-md:hidden"
        >
          <Image
            src="/assets/images/shape-2.png"
            alt=""
            fill
            className="object-contain"
          />
        </motion.div>

        <div className="relative z-10 px-6 mx-auto max-w-7xl sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold tracking-[0.18em] uppercase text-[#D72B0D]">
              Relevant Solutions
            </p>
            <h2 className="text-4xl font-bold leading-tight text-[#0E2C53] font-baskervville max-md:text-3xl">
              How Madasky Helps
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600 max-md:text-[17px]">
              Madasky provides one manufacturing/project interface and brings
              specialist capability into the delivery model where the process
              requirement demands it.
            </p>
          </div>

          <div className="grid gap-5 mt-12 md:grid-cols-2 xl:grid-cols-3">
            {solutionItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.45,
                    delay: Math.min(index * 0.04, 0.2),
                  }}
                >
                  <Link
                    href={item.href}
                    className="group flex h-full min-h-[250px] flex-col justify-between rounded-2xl border border-gray-200 bg-[#f8fafc] p-7 transition-all hover:-translate-y-1 hover:border-[#D72B0D]/25 hover:bg-white hover:shadow-xl max-md:p-6"
                  >
                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0E2C53] text-white transition-colors group-hover:bg-[#D72B0D]">
                        <Icon size={23} strokeWidth={1.9} />
                      </div>
                      <h3 className="mt-6 text-2xl font-bold leading-snug text-[#0E2C53] font-baskervville">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-[16px] leading-relaxed text-gray-600">
                        {item.text}
                      </p>
                    </div>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#D72B0D]">
                      Explore capability
                      <ArrowUpRight
                        size={17}
                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      <section className="relative overflow-hidden bg-[#0E2C53] py-20 text-white max-md:py-14">
        <div className="absolute inset-0 bg-[url('/assets/images/homeblogbg.png')] bg-cover bg-center opacity-[0.08]" />
        <motion.div
          {...reveal}
          className="relative z-10 grid gap-12 px-6 mx-auto max-w-7xl lg:grid-cols-[1.05fr_0.95fr] sm:px-8 lg:px-10"
        >
          <div>
            <p className="mb-3 text-sm font-bold tracking-[0.18em] uppercase text-[#ff8b72]">
              Why Madasky
            </p>
            <h2 className="text-4xl font-bold leading-tight text-white font-baskervville max-md:text-3xl">
              Why Madasky in This Industry
            </h2>
            <p className="mt-7 text-xl leading-relaxed text-white/80 max-md:text-lg">
              Madasky provides one manufacturing/project interface while
              remaining transparent about specialist process responsibilities.
            </p>
            <p className="mt-5 text-[17px] leading-relaxed text-white/70">
              The objective is not to claim equal depth in every Technical
              Textile process. It is to define the manufacturing scope clearly,
              integrate the right process expertise and keep facility,
              engineering, project and operating decisions coordinated.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {projectLayers.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] p-4"
              >
                <CheckCircle2
                  size={20}
                  className="shrink-0 text-[#ff8b72]"
                  strokeWidth={2}
                />
                <span className="font-semibold text-white/90">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <motion.section
        {...reveal}
        className="relative overflow-hidden bg-[#f5f5f6] py-20 max-md:py-14"
      >
        <div className="px-6 mx-auto max-w-7xl sm:px-8 lg:px-10">
          <div className="relative overflow-hidden rounded-3xl bg-white p-12 shadow-xl max-md:p-7">
            <div className="absolute right-0 top-0 h-full w-[38%] bg-gradient-to-l from-[#e7f3fb] to-transparent max-lg:hidden" />
            <motion.div
              aria-hidden="true"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-7 -top-8 h-52 w-52 opacity-[0.07] max-lg:hidden"
            >
              <Image
                src="/assets/images/shape-3.png"
                alt=""
                fill
                className="object-contain"
              />
            </motion.div>

            <div className="relative z-10 max-w-3xl">
              <p className="mb-3 text-sm font-bold tracking-[0.18em] uppercase text-[#D72B0D]">
                Technical Textile Projects
              </p>
              <h2 className="text-4xl font-bold leading-tight text-[#0E2C53] font-baskervville max-md:text-3xl">
                Planning a Technical Textile project?
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-gray-600 max-md:text-[17px]">
                Bring manufacturing, building, utilities and operating-readiness
                decisions together before packages are independently frozen.
              </p>
              <div className="mt-8 w-fit">
                <Button text="Discuss Your Manufacturing Challenge" />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        {...reveal}
        className="relative bg-white py-16 max-md:py-12"
      >
        <div className="px-6 mx-auto max-w-7xl sm:px-8 lg:px-10">
          <div className="rounded-2xl border border-gray-200 bg-[#fafbfc] p-8 max-md:p-6">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-[#D72B0D]" size={26} />
              <h2 className="text-3xl font-bold text-[#0E2C53] font-baskervville max-md:text-2xl">
                Connected Manufacturing Capabilities
              </h2>
            </div>
            <div className="grid gap-4 mt-7 md:grid-cols-3">
              {relatedLinks.map(([title, href]) => (
                <Link
                  key={title}
                  href={href}
                  className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white px-5 py-4 font-bold text-[#0E2C53] transition-all hover:-translate-y-0.5 hover:border-[#D72B0D]/30 hover:shadow-md"
                >
                  <span>{title}</span>
                  <ArrowUpRight
                    size={18}
                    className="text-[#D72B0D] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
