"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BarChart3,
  Boxes,
  CalendarClock,
  CheckCircle2,
  Cpu,
  Factory,
  Gauge,
  Layers3,
  PackageCheck,
  Scissors,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
  Workflow,
  Wrench,
} from "lucide-react";

import Button from "@/components/Button";

type Props = {
  showValidatedProof?: boolean;
};

const reveal = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, ease: "easeOut" },
} as const;

const diagnosticAreas = [
  { title: "Capacity & utilization", icon: Gauge },
  { title: "Process flow & layout", icon: Workflow },
  { title: "Manpower productivity & skills", icon: UsersRound },
  { title: "Production planning & scheduling", icon: CalendarClock },
  { title: "Fabric / raw material utilization", icon: Scissors },
  { title: "Quality & rework", icon: CheckCircle2 },
  { title: "WIP & lead time", icon: Boxes },
  { title: "Downtime & maintenance", icon: Wrench },
  { title: "Packing & dispatch", icon: PackageCheck },
  { title: "Digital visibility, data & AI readiness", icon: Cpu },
];

const outputs = [
  {
    title: "Baseline & loss tree",
    text: "Establish the current performance baseline and make the major sources of loss visible.",
    icon: BarChart3,
  },
  {
    title: "Prioritized opportunity map",
    text: "Rank opportunities by business impact, urgency, evidence and implementation practicality.",
    icon: Target,
  },
  {
    title: "Estimated impact",
    text: "Quantify operational or financial impact where the available data supports a responsible estimate.",
    icon: Gauge,
  },
  {
    title: "90-day action roadmap",
    text: "Convert findings into a practical sequence of actions with clear priorities and ownership.",
    icon: CalendarClock,
  },
  {
    title: "No-capex vs capex actions",
    text: "Separate opportunities that need better operating discipline from those that genuinely require investment.",
    icon: Factory,
  },
  {
    title: "Pilot / deeper-study recommendations",
    text: "Identify the areas that deserve a contained pilot or a deeper technical study before a larger commitment.",
    icon: Search,
  },
  {
    title: "Digital / AI opportunity map",
    text: "Highlight where better visibility, data, automation or AI may improve a measurable manufacturing decision.",
    icon: Sparkles,
  },
];

export default function FactoryDiagnosticSections({
  showValidatedProof = false,
}: Props) {
  return (
    <main className="overflow-hidden bg-white">
      <motion.section
        id="diagnostic-intro"
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

        <div className="relative z-10 grid items-center gap-14 px-6 mx-auto max-w-7xl lg:grid-cols-[1.05fr_0.95fr] sm:px-8 lg:px-10 max-md:gap-9">
          <div>
            <p className="mb-3 text-sm font-bold tracking-[0.18em] uppercase text-[#D72B0D]">
              Factory Performance Diagnostic
            </p>
            <h2 className="text-4xl font-bold leading-tight text-[#0E2C53] font-baskervville max-md:text-3xl">
              When the Symptom Is Clear but the Cause Is Not
            </h2>
            <div className="mt-7 space-y-5 text-lg leading-relaxed text-gray-600 max-md:text-[17px]">
              <p>
                Factories often know that something is wrong: output is below
                plan, OTIF is weak, overtime is high, fabric variance is growing
                or the team keeps asking for more machines and people. The risk
                is solving the visible symptom instead of the underlying
                constraint.
              </p>
              <p>
                The Madasky Factory Performance Diagnostic creates a fact base
                before management commits to a larger transformation or capex
                decision.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              {["Capacity", "Cost", "Fabric", "Planning", "Manpower", "Digital"].map(
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

          <div className="relative min-h-[440px] overflow-hidden rounded-2xl bg-[#e8eef4] shadow-xl max-md:min-h-[300px]">
            <Image
              src="/assets/images/auditreport.png"
              alt="Factory diagnostic analysis and action report"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07182e]/85 via-[#07182e]/15 to-transparent" />
            <div className="absolute bottom-0 left-0 p-7 text-white max-md:p-5">
              <p className="mb-2 text-sm font-semibold tracking-[0.18em] uppercase text-white/75">
                Diagnose before you invest
              </p>
              <p className="max-w-lg text-2xl font-bold leading-snug font-baskervville max-md:text-xl">
                Build the fact base first. Then decide what deserves action,
                investment or deeper study.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <section
        id="diagnostic-areas"
        className="relative bg-[#252638] bg-[url('/assets/images/what-we-solve-bg.jpg')] bg-cover bg-center bg-no-repeat py-20 max-md:py-14"
      >
        <div className="absolute inset-0 bg-[#10172d]/85" />
        <motion.div
          {...reveal}
          className="relative z-10 px-6 mx-auto max-w-7xl sm:px-8 lg:px-10"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white font-baskervville max-md:text-3xl">
              Diagnostic Areas
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/75 max-md:text-[17px]">
              The diagnostic looks across the manufacturing system so the root
              constraint is not mistaken for the most visible symptom.
            </p>
          </div>

          <div className="grid gap-4 mt-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {diagnosticAreas.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.42,
                    delay: Math.min(index * 0.035, 0.2),
                  }}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl border border-white/10 bg-white p-5 shadow-lg transition-shadow hover:shadow-2xl"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eef4fb] text-[#0E2C53]">
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
        id="diagnostic-outputs"
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
            <p className="mb-3 hidden text-sm font-bold tracking-[0.18em] uppercase text-[#D72B0D]">
              What You Receive
            </p>
            <h2 className="text-4xl font-bold leading-tight text-[#0E2C53] font-baskervville max-md:text-3xl">
              Outputs That Turn Diagnosis Into Action
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600 max-md:text-[17px]">
              The output is not a generic audit report. It is a prioritized fact
              base that helps management decide what to fix first and what not
              to invest in yet.
            </p>
          </div>

          <div className="grid gap-5 mt-12 md:grid-cols-2 xl:grid-cols-3">
            {outputs.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.45,
                    delay: Math.min(index * 0.04, 0.2),
                  }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-gray-200 bg-[#f8fafc] p-7 transition-all hover:border-[#D72B0D]/25 hover:bg-white hover:shadow-xl max-md:p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0E2C53] text-white">
                    <Icon size={23} strokeWidth={1.9} />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold leading-snug text-[#0E2C53] font-baskervville">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[16px] leading-relaxed text-gray-600">
                    {item.text}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </motion.section>

      <section
        id="diagnosis-matters"
        className="relative overflow-hidden bg-[#0E2C53] py-20 text-white max-md:py-14"
      >
        <div className="absolute inset-0 bg-[url('/assets/images/homeblogbg.png')] bg-cover bg-center opacity-[0.08]" />
        <motion.div
          {...reveal}
          className="relative z-10 grid items-center gap-12 px-6 mx-auto max-w-7xl lg:grid-cols-[1.05fr_0.95fr] sm:px-8 lg:px-10"
        >
          <div>
            <p className="mb-3 hidden text-sm font-bold tracking-[0.18em] uppercase text-[#ff8b72]">
              Proof / Decision Clarity
            </p>
            <h2 className="text-4xl font-bold leading-tight text-white font-baskervville max-md:text-3xl">
              Why Diagnosis Matters
            </h2>
            <p className="mt-7 text-xl leading-relaxed text-white/80 max-md:text-lg">
              The value of a diagnostic is not a long list of observations. It
              is the sequence it gives management: what to solve first, what
              requires deeper work and what does not justify immediate
              investment.
            </p>
            {showValidatedProof && (
              <p className="mt-6 text-[17px] leading-relaxed text-white/75">
                In one Home Textile diagnostic, multiple losses across the
                operation were quantified into approximately ₹145 lakh of
                avoidable opportunity.
              </p>
            )}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["01", "See the baseline", "Separate perception from measured performance."],
              ["02", "Find the constraint", "Identify the few losses controlling the economics."],
              ["03", "Sequence the response", "Prioritize no-capex, pilot and investment actions."],
              ["04", "Decide with evidence", "Commit resources only after the opportunity is clear."],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-2xl border border-white/12 bg-white/[0.08] p-6 backdrop-blur-sm"
              >
                <span className="text-sm font-bold tracking-[0.16em] text-[#ff8b72]">
                  {number}
                </span>
                <h3 className="mt-3 text-xl font-bold font-baskervville">
                  {title}
                </h3>
                <p className="mt-3 text-[15.5px] leading-relaxed text-white/70">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <motion.section
        {...reveal}
        className="relative overflow-hidden bg-[#f5f5f6] py-20 max-md:py-14"
      >
        <div className="px-6 mx-auto max-w-7xl sm:px-8 lg:px-10">
          <div className="relative overflow-hidden rounded-3xl border border-[#0E2C53]/10 bg-white px-8 py-12 shadow-xl md:px-12 lg:px-14">
            <div className="absolute right-0 top-0 h-full w-[38%] bg-gradient-to-l from-[#dfeeff] to-transparent opacity-80 max-lg:w-[55%]" />
            <div className="relative z-10 max-w-3xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eef4fb] text-[#0E2C53]">
                <ShieldCheck size={24} strokeWidth={1.9} />
              </div>
              <p className="mt-6 text-sm font-bold tracking-[0.18em] uppercase text-[#D72B0D]">
                Request a Diagnostic
              </p>
              <h2 className="mt-2 text-4xl font-bold leading-tight text-[#0E2C53] font-baskervville max-md:text-3xl">
                Start with the Factory Performance Concern That Matters Most
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600 max-md:text-[17px]">
                Share the factory, current performance concern and the business
                outcome you want to improve. Madasky will recommend the right
                diagnostic scope.
              </p>
              <div className="mt-8 [&_button]:ml-0">
                <Button text="Request a Factory Diagnostic" />
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
