"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  Boxes,
  CalendarClock,
  CheckCircle2,
  Cpu,
  Factory,
  Gauge,
  Layers3,
  Scissors,
  UsersRound,
  Workflow,
} from "lucide-react";

type Props = {
  apparelImageUrl: string;
  apparelImageAlt: string;
};

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const challengeItems = [
  { title: "Cutting-room material loss", icon: Scissors },
  { title: "Unstable line output", icon: Activity },
  { title: "Low effective capacity", icon: Gauge },
  { title: "Excess WIP", icon: Boxes },
  { title: "Poor feeding", icon: Workflow },
  { title: "Planning changes", icon: CalendarClock },
  { title: "High absenteeism impact", icon: UsersRound },
  { title: "Skill mismatch", icon: UsersRound },
  { title: "Rework", icon: CheckCircle2 },
  { title: "Finishing / packing bottlenecks", icon: Layers3 },
  { title: "Limited live visibility", icon: Cpu },
];

const solutionItems = [
  {
    title: "Turnkey Factory Projects",
    href: "/turnkey-factory-projects",
    icon: Factory,
  },
  {
    title: "Operations Excellence",
    href: "/operations-excellence-consulting",
    icon: Gauge,
  },
  {
    title: "Fabric & Raw Material Optimization",
    href: "/fabric-raw-material-optimization",
    icon: Scissors,
  },
  {
    title: "Production Planning & Scheduling",
    href: "/production-planning-scheduling",
    icon: CalendarClock,
  },
  {
    title: "Digital Factory & MES",
    href: "/digital-factory-mes",
    icon: Cpu,
  },
  {
    title: "Workforce Readiness & Key Talent Support",
    href: "/workforce-readiness-talent-support",
    icon: UsersRound,
  },
];

const connectedAreas = [
  "Industrial engineering",
  "Planning",
  "Fabric",
  "Skills",
  "Digital visibility",
];


export default function ApparelIndustrySections({
  apparelImageUrl,
  apparelImageAlt,
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
          className="absolute -left-12 bottom-0 h-[280px] w-[280px] opacity-[0.08] max-md:hidden"
        >
          <Image
            src="/assets/images/shape-3.png"
            alt=""
            fill
            className="object-contain"
          />
        </motion.div>

        <div className="relative z-10 grid items-center gap-14 px-6 mx-auto max-w-7xl lg:grid-cols-2 sm:px-8 lg:px-10 max-md:gap-9">
          <div>
            <p className="mb-3 text-sm font-bold tracking-[0.18em] uppercase text-[#D72B0D]">
              Manufacturing Context
            </p>
            <h2 className="text-4xl font-bold leading-tight text-[#0E2C53] font-baskervville max-md:text-3xl">
              Apparel Performance Depends on the Whole Operations System
            </h2>
            <p className="mt-7 text-lg leading-relaxed text-gray-600 max-md:text-[17px]">
              Apparel factories operate under constant variability: style
              changes, size and colour combinations, learning curves, skill
              differences, material readiness, line balancing, pre-production
              delays and tight customer dates. As volume and product mix grow,
              individual experience and spreadsheets become harder to scale.
              Madasky combines factory engineering, Operations Excellence and
              AI-enabled manufacturing intelligence to make performance more
              predictable.
            </p>

            <div className="flex flex-wrap gap-3 mt-8 hidden">
              {["Cutting", "Sewing", "Finishing", "Packing"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#0E2C53]/15 bg-white px-4 py-2 text-sm font-semibold text-[#0E2C53] shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-xl min-h-[440px] max-md:min-h-[300px]">
            <Image
              src={apparelImageUrl}
              alt={apparelImageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E2C53]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-7 text-white max-md:p-5">
              <p className="mb-2 text-sm font-semibold tracking-[0.18em] uppercase text-white/75">
                Apparel Manufacturing
              </p>
              <p className="max-w-lg text-2xl font-bold leading-snug font-baskervville max-md:text-xl">
                Connect factory engineering, operations, planning, skills and
                digital visibility around the same manufacturing priorities.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <section
        id="apparel-challenges"
        className="relative bg-[#252638] bg-[url('/assets/images/what-we-solve-bg.jpg')] bg-cover bg-center bg-no-repeat py-20 max-md:py-14"
      >
        <div className="absolute inset-0 bg-[#10172d]/84" />
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
              Apparel factories can carry several connected constraints at the
              same time. The issue is rarely one department in isolation.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-4 mt-12 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1">
            {challengeItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.42,
                    delay: Math.min(index * 0.025, 0.18),
                  }}
                  whileHover={{ y: -4 }}
                  className="rounded-xl border border-white/10 bg-white/[0.97] p-5 shadow-lg transition-shadow hover:shadow-2xl"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#eef4fb] text-[#0E2C53]">
                    <Icon size={21} strokeWidth={1.9} />
                  </div>
                  <h3 className="mt-4 text-lg font-bold leading-snug text-[#0E2C53]">
                    {item.title}
                  </h3>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </section>

      <motion.section
        id="apparel-solutions"
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
              Madasky connects factory projects, operations, material,
              planning, digital systems and workforce readiness around the
              manufacturing problem that needs to be solved.
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
                    className="group flex h-full min-h-[190px] flex-col justify-between rounded-2xl border border-gray-200 bg-[#f8fafc] p-7 transition-all hover:-translate-y-1 hover:border-[#D72B0D]/25 hover:bg-white hover:shadow-xl max-md:p-6"
                  >
                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0E2C53] text-white transition-colors group-hover:bg-[#D72B0D]">
                        <Icon size={23} strokeWidth={1.9} />
                      </div>
                      <h3 className="mt-6 text-2xl font-bold leading-snug text-[#0E2C53] font-baskervville">
                        {item.title}
                      </h3>
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
        <div className="absolute inset-0 opacity-[0.08] bg-[url('/assets/images/homeblogbg.png')] bg-cover bg-center" />
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
              Madasky approaches Apparel as an integrated manufacturing
              system. Industrial engineering, planning, fabric, skills and
              digital visibility are connected rather than sold as separate
              initiatives.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {connectedAreas.map((item, index) => (
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
            <div className="absolute right-0 top-0 h-full w-[36%] bg-gradient-to-l from-[#e7f3fb] to-transparent max-lg:hidden" />
            <div className="relative z-10 max-w-3xl">
              <p className="mb-3 text-sm font-bold tracking-[0.18em] uppercase text-[#D72B0D]">
                Apparel Transformation
              </p>
              <h2 className="text-4xl font-bold leading-tight text-[#0E2C53] font-baskervville max-md:text-3xl">
                If growth is adding complexity faster than performance
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-gray-600 max-md:text-[17px]">
                Start with the constraint that is costing the business most -
                fabric, capacity, OTIF, manpower, planning or project
                execution.
              </p>
              <Link
                href="/contact-us"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#D72B0D] px-7 py-3.5 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#bd250b] hover:shadow-xl"
              >
                Discuss Your Manufacturing Challenge
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </motion.section>


    </div>
  );
}
