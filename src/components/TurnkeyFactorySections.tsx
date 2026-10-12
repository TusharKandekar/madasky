"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  Cog,
  Cpu,
  Factory,
  Handshake,
  HardHat,
  Ruler,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

import Button from "@/components/Button";

type TurnkeyFactorySectionsProps = {
  projectImageUrl: string;
  projectImageAlt: string;
};

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.16 },
  transition: { duration: 0.65, ease: "easeOut" },
} as const;

const manageItems = [
  {
    icon: ClipboardList,
    title: "Project Definition & Business Case",
    text: "Product mix, capacity, phase strategy, investment logic and future expansion.",
  },
  {
    icon: Workflow,
    title: "Process Flow & Capacity Planning",
    text: "Route, takt/throughput, process capacities, buffers and bottleneck logic.",
  },
  {
    icon: Ruler,
    title: "Factory Layout & Space Planning",
    text: "Machinery, storage, movement, ergonomics, safety, utilities and expansion zones.",
  },
  {
    icon: Building2,
    title: "Architecture, Civil, Structural & MEP Coordination",
    text: "Translate manufacturing requirements into coordinated engineering packages.",
  },
  {
    icon: Zap,
    title: "Utilities & Infrastructure",
    text: "Electrical load, compressed air, HVAC/ventilation, water, drainage, fire systems and other process utilities.",
  },
  {
    icon: Cog,
    title: "Machinery & Technology Selection",
    text: "Specifications, performance requirements, automation level and technical comparisons.",
  },
  {
    icon: Handshake,
    title: "Vendor Identification & Finalization",
    text: "RFQ, techno-commercial evaluation, negotiation support and recommendation.",
  },
  {
    icon: ClipboardCheck,
    title: "PMC & Project Controls",
    text: "Schedule, dependencies, site coordination, review meetings, quality, documentation and escalation.",
  },
  {
    icon: Cpu,
    title: "Digital & AI Readiness",
    text: "Data points, network, MES/IoT requirements, planning-system interfaces and future digital architecture.",
  },
  {
    icon: Users,
    title: "Workforce Readiness",
    text: "Organization, manpower plan, critical-role support, skill requirements, training and ramp-up planning.",
  },
  {
    icon: BadgeCheck,
    title: "Commissioning & Operational Handover",
    text: "Installation readiness, trials, performance checks, SOPs, training and production stabilization.",
  },
];

const projectStages = [
  {
    number: "01",
    title: "Define",
    text: "Confirm product mix, volumes, quality expectations, process route, shift model, automation philosophy, expansion horizon and project constraints.",
  },
  {
    number: "02",
    title: "Design",
    text: "Convert the manufacturing model into capacity calculations, block layout, process flow, storage, utilities, manpower and digital requirements.",
  },
  {
    number: "03",
    title: "Engineer",
    text: "Coordinate architectural, structural, civil and MEP design around frozen manufacturing requirements. Review interfaces before drawings become construction instructions.",
  },
  {
    number: "04",
    title: "Source",
    text: "Develop specifications and RFQs, identify capable vendors, compare technical and commercial offers, clarify deviations and support final selection.",
  },
  {
    number: "05",
    title: "Execute",
    text: "Run master schedule, package dependencies, site meetings, design clarifications, vendor coordination, installation readiness and issue escalation through PMC.",
  },
  {
    number: "06",
    title: "Commission",
    text: "Check utilities, equipment, safety, systems, documentation, training and trials against agreed acceptance criteria.",
  },
  {
    number: "07",
    title: "Ramp Up & Handover",
    text: "Support initial production, identify early constraints, stabilize routines and hand over an operating factory rather than only a completed project.",
  },
];

const longFormItems = [
  {
    icon: Factory,
    eyebrow: "Greenfield",
    title: "Greenfield Factory Projects",
    text: "For greenfield projects, Madasky should be involved before the site plan and machinery list are frozen. Early work focuses on what the business must produce, in what volume, through which process route and with what future growth. This allows the building, machine plan, utility backbone, warehouse, workforce and digital architecture to follow manufacturing logic rather than force the manufacturing process to fit a predetermined shell.",
  },
  {
    icon: Building2,
    eyebrow: "Brownfield",
    title: "Brownfield Expansion & Modernization",
    text: "Brownfield projects need stronger phasing discipline because the existing factory must continue operating. We evaluate current bottlenecks, available space, structural limitations, utility headroom, material movement, shutdown windows and integration risks. The goal is not simply to add capacity but to prevent the expansion from creating new constraints in storage, movement, utilities, manpower or planning.",
  },
  {
    icon: HardHat,
    eyebrow: "Workforce",
    title: "Workforce Readiness Is Part of the Project",
    text: "A factory is not ready because the machines are commissioned. It is ready when the operating organization can run them. Madasky can support organization structure, manpower planning, critical-role definitions, technical assessment and key talent support. Where structured skilling, operator training or workforce-development programs are required, these can be delivered through Ananta Mitra Foundation under a clearly defined program.",
  },
];

const whyItems = [
  {
    title: "Manufacturing-led design",
    text: "Factory decisions are driven by process, capacity and operating economics.",
  },
  {
    title: "One client-facing project authority",
    text: "Madasky coordinates specialist architects, engineers and solution providers around one project agenda.",
  },
  {
    title: "Execution visibility",
    text: "Project controls focus on dependencies, risks, decisions and readiness, not only percentage-complete reporting.",
  },
  {
    title: "Operational handover",
    text: "The engagement can continue through trials, ramp-up and early factory stabilization.",
  },
  {
    title: "Home Textile & Apparel depth",
    text: "Layouts, storage, cutting, sewing, finishing, packing and supporting operations are approached with sector context.",
  },
];

const relatedLinks = [
  ["Plant Layout", "/plant-layout-consulting"],
  ["Process & Material Flow", "/process-and-material-flow-consulting"],
  ["Digital Factory & MES", "/digital-factory-mes"],
  ["Workforce Readiness & Key Talent Support", "/workforce-readiness-talent-support"],
  ["Home Textiles", "/industries/home-textiles"],
  ["Apparel", "/industries/apparel"],
];

export default function TurnkeyFactorySections({
  projectImageUrl,
  projectImageAlt,
}: TurnkeyFactorySectionsProps) {
  return (
    <div className="overflow-hidden bg-white">
      <motion.section
        {...reveal}
        className="relative py-20 bg-[#f5f5f6] max-md:py-14"
      >
        <motion.div
          aria-hidden="true"
          animate={{ y: [0, 14, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-14 bottom-0 h-[280px] w-[280px] opacity-[0.09] max-md:hidden"
        >
          <Image
            src="/assets/images/shape-3.png"
            alt=""
            fill
            className="object-contain"
          />
        </motion.div>

        <div className="relative z-10 grid items-center gap-14 px-6 mx-auto max-w-7xl lg:grid-cols-2 sm:px-8 lg:px-10 max-md:gap-9">
          <div className="relative overflow-hidden rounded-2xl shadow-xl min-h-[430px] max-md:min-h-[270px]">
            <Image
              src={projectImageUrl}
              alt={projectImageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e2c53]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-7 text-white max-md:p-5">
              <p className="mb-2 text-sm font-semibold tracking-[0.18em] uppercase text-white/75">
                Turnkey Factory Projects
              </p>
              <p className="max-w-lg text-2xl font-bold leading-snug font-baskervville max-md:text-xl">
                One manufacturing-led team from concept to production ramp-up.
              </p>
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-bold tracking-[0.18em] uppercase text-[#D72B0D]">
              Integrated Project Delivery
            </p>
            <h2 className="text-4xl font-bold leading-tight text-[#0E2C53] font-baskervville max-md:text-3xl">
              One Team from Factory Concept to Production Ramp-Up
            </h2>
            <div className="mt-7 space-y-5 text-lg leading-relaxed text-gray-600 max-md:text-[17px]">
              <p>
                A new manufacturing facility starts making expensive decisions
                long before construction begins. Product mix determines process.
                Process determines capacity. Capacity shapes machinery,
                utilities, storage, manpower and space. Layout decisions
                influence material movement and productivity for years. If these
                decisions are taken independently, the factory may be completed
                on schedule yet still enter production with avoidable
                constraints.
              </p>
              <p>
                Madasky’s Turnkey Factory Projects offering is designed for
                manufacturers who want a single manufacturing-led team to
                coordinate the complete journey. We take responsibility for the
                project logic, integrate architects, engineers and specialist
                providers, support vendor finalization, manage project execution
                and stay through commissioning and operational handover.
              </p>
              <p>
                Our preferred model is turnkey project management and
                integration rather than balance-sheet-heavy EPC. Major machinery,
                civil, PEB, utilities or technology packages can remain
                contracted directly between the client and selected vendors while
                Madasky remains the manufacturing design authority and project
                integrator.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <section className="relative py-20 bg-[#252638] bg-[url('/assets/images/what-we-solve-bg.jpg')] bg-cover bg-center bg-no-repeat max-md:py-14">
        <div className="absolute inset-0 bg-[#10172d]/80" />
        <motion.div {...reveal} className="relative z-10 px-6 mx-auto max-w-7xl sm:px-8 lg:px-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="mb-3 text-sm font-bold tracking-[0.18em] uppercase text-[#ff6a49]">
              Complete Project Scope
            </p>
            <h2 className="text-4xl font-bold text-white font-baskervville max-md:text-3xl">
              What We Manage
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/75 max-md:text-[17px]">
              One integrated project view across manufacturing, engineering,
              infrastructure, technology, people and commissioning.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-5 mt-12 max-lg:grid-cols-2 max-md:grid-cols-1">
            {manageItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: Math.min(index * 0.035, 0.2) }}
                  whileHover={{ y: -5 }}
                  className="group rounded-xl border border-white/10 bg-white/[0.96] p-6 shadow-lg transition-shadow hover:shadow-2xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#eef4fb] text-[#0E2C53] transition-colors group-hover:bg-[#D72B0D] group-hover:text-white">
                    <Icon size={23} strokeWidth={1.9} />
                  </div>
                  <h3 className="mt-5 text-xl font-bold leading-snug text-[#0E2C53]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[16px] leading-relaxed text-gray-600">
                    {item.text}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </section>

      <motion.section
        {...reveal}
        className="relative py-20 overflow-hidden bg-white max-md:py-14"
      >
        <motion.div
          aria-hidden="true"
          animate={{ y: [0, -18, 0], rotate: [0, -4, 0] }}
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
              Delivery Method
            </p>
            <h2 className="text-4xl font-bold leading-tight text-[#0E2C53] font-baskervville max-md:text-3xl">
              How the Turnkey Project Runs
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600 max-md:text-[17px]">
              The project moves through seven controlled stages, with decisions
              frozen in the right sequence so downstream execution does not have
              to correct upstream design mistakes.
            </p>
          </div>

          <div className="relative grid gap-x-8 gap-y-6 mt-12 lg:grid-cols-2">
            <div className="absolute left-[31px] top-8 bottom-8 w-px bg-[#d9e2ec] max-lg:hidden" />
            {projectStages.map((stage, index) => (
              <motion.article
                key={stage.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -22 : 22 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="relative flex gap-5 rounded-xl border border-gray-200 bg-[#fafbfc] p-6 transition-all hover:border-[#b8c8da] hover:bg-white hover:shadow-lg"
              >
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#0E2C53] text-base font-bold text-white shadow-md">
                  {stage.number}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0E2C53] font-baskervville">
                    {stage.title}
                  </h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-gray-600">
                    {stage.text}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <section className="relative py-20 bg-[#f5f5f6] max-md:py-14">
        <div className="absolute inset-0 bg-[url('/assets/images/industrybg.png')] bg-cover bg-center opacity-[0.06]" />
        <motion.div {...reveal} className="relative z-10 px-6 mx-auto max-w-7xl sm:px-8 lg:px-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="mb-3 text-sm font-bold tracking-[0.18em] uppercase text-[#D72B0D]">
              Project Context
            </p>
            <h2 className="text-4xl font-bold text-[#0E2C53] font-baskervville max-md:text-3xl">
              Different Project Conditions. One Integrated Logic.
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-12 max-lg:grid-cols-1">
            {longFormItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl max-md:p-6"
                >
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-[#eef4fb]" />
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-lg bg-[#0E2C53] text-white">
                    <Icon size={23} strokeWidth={1.9} />
                  </div>
                  <p className="relative z-10 mt-6 text-xs font-bold tracking-[0.17em] uppercase text-[#D72B0D]">
                    {item.eyebrow}
                  </p>
                  <h3 className="relative z-10 mt-2 text-2xl font-bold leading-snug text-[#0E2C53] font-baskervville">
                    {item.title}
                  </h3>
                  <p className="relative z-10 mt-4 text-[16px] leading-relaxed text-gray-600">
                    {item.text}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </section>

      <section className="relative py-20 overflow-hidden bg-[#0e2c53] bg-[url('/assets/images/what-we-solve-bg.jpg')] bg-cover bg-center max-md:py-14">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E2C53]/95 via-[#152869]/92 to-[#07182d]/92" />
        <motion.div {...reveal} className="relative z-10 grid gap-12 px-6 mx-auto max-w-7xl lg:grid-cols-[0.8fr_1.2fr] sm:px-8 lg:px-10">
          <div>
            <p className="mb-3 text-sm font-bold tracking-[0.18em] uppercase text-[#ff7b5e]">
              Why Madasky
            </p>
            <h2 className="text-4xl font-bold leading-tight text-white font-baskervville max-md:text-3xl">
              Why Madasky for Turnkey Factory Projects
            </h2>
            <p className="max-w-xl mt-6 text-lg leading-relaxed text-white/75 max-md:text-[17px]">
              Turnkey value comes from making factory design, engineering,
              execution and operating readiness work as one system rather than
              separate consulting packages.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {whyItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="rounded-xl border border-white/15 bg-white/[0.08] p-6 backdrop-blur-sm"
              >
                <CheckCircle2 className="text-[#ff6a49]" size={25} />
                <h3 className="mt-4 text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-[16px] leading-relaxed text-white/70">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <motion.section
        {...reveal}
        className="relative py-20 overflow-hidden bg-white max-md:py-14"
      >
        <div className="absolute inset-0 bg-[url('/assets/images/industrybg.png')] bg-cover bg-center opacity-[0.05]" />
        <div className="relative z-10 px-6 mx-auto max-w-7xl sm:px-8 lg:px-10">
          <div className="grid items-center gap-10 rounded-2xl bg-[#f5f5f6] px-10 py-12 shadow-sm lg:grid-cols-[1fr_auto] max-md:px-6 max-md:py-9">
            <div>
              <p className="mb-3 text-sm font-bold tracking-[0.18em] uppercase text-[#D72B0D]">
                Start Before Decisions Are Frozen
              </p>
              <h2 className="text-4xl font-bold leading-tight text-[#0E2C53] font-baskervville max-md:text-3xl">
                Planning a New Factory or Major Expansion?
              </h2>
              <p className="max-w-3xl mt-5 text-lg leading-relaxed text-gray-600 max-md:text-[17px]">
                Engage Madasky before machinery, civil design and layout are
                frozen. Early manufacturing decisions have the highest leverage
                and are the least expensive to change.
              </p>
            </div>
            <div className="lg:pl-4">
              <Button text="Discuss Your Factory Project" />
            </div>
          </div>
        </div>
      </motion.section>

      <section className="py-16 bg-white max-md:py-12">
        <div className="px-6 mx-auto max-w-7xl sm:px-8 lg:px-10">
          <div className="flex items-end justify-between gap-8 mb-8 max-md:flex-col max-md:items-start">
            <div>
              <p className="mb-2 text-sm font-bold tracking-[0.18em] uppercase text-[#D72B0D]">
                Explore More
              </p>
              <h2 className="text-3xl font-bold text-[#0E2C53] font-baskervville max-md:text-2xl">
                Related Capabilities & Industries
              </h2>
            </div>
            <p className="max-w-xl text-[16px] leading-relaxed text-gray-600">
              Continue into the specialist capability or industry page most
              relevant to your project requirement.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedLinks.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="group flex items-center justify-between rounded-lg border border-gray-200 bg-white px-5 py-4 text-[17px] font-semibold text-[#0E2C53] transition-all hover:-translate-y-0.5 hover:border-[#9fb4ca] hover:shadow-md"
              >
                <span>{label}</span>
                <ArrowUpRight
                  size={19}
                  className="text-[#D72B0D] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
