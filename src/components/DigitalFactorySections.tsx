"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Activity, AlertTriangle, BarChart3, CheckCircle2, ClipboardCheck, Gauge, Layers3, RadioTower, Settings2, ShieldCheck, Timer, Workflow } from "lucide-react";
import ShowMoreList from "@/components/ShowMoreList";
import Button from "@/components/Button";

const scope = [
  "Target vs actual production by line, process and order",
  "Downtime and reason-code capture",
  "Quality defects and rework",
  "WIP and process status",
  "Material shortage and readiness",
  "Maintenance alerts and machine status",
  "Order progress and delivery risk",
  "Supervisor, plant and management dashboards",
  "Digital work instructions where relevant",
  "Machine, sensor, barcode and RFID integration as required",
  "ERP and planning-system integration",
  "Analytics and selected AI use cases after data maturity improves",
].map((title) => ({ title }));

const rollout = [
  "Define the decisions the system must improve.",
  "Select the pilot area and establish the KPI baseline.",
  "Standardize process and data definitions.",
  "Configure data capture and integrations.",
  "Build role-based dashboards and alerts.",
  "Train users and go live.",
  "Validate data accuracy and response behaviour.",
  "Measure whether decisions happen faster and performance improves.",
  "Scale to other departments or plants only after adoption is proven.",
].map((title) => ({ title }));

const screens = [
  { icon: BarChart3, label: "SCREEN 01", title: "Output vs target", text: "See whether each line is tracking to its production plan." },
  { icon: Timer, label: "SCREEN 02", title: "Downtime and why", text: "Make recurring stoppages and their reasons visible." },
  { icon: ShieldCheck, label: "SCREEN 03", title: "Quality and rework", text: "Spot defects and rework before they compound." },
  { icon: Layers3, label: "SCREEN 04", title: "Material and WIP risk", text: "Identify shortages and work-in-progress constraints." },
  { icon: AlertTriangle, label: "SCREEN 05", title: "Orders at risk", text: "Prioritize orders that may miss delivery commitments." },
];

const reasons = [
  "Manufacturing-led requirements before software configuration.",
  "Existing MES tie-ups and technology relationships can be used without making the Madasky brand subordinate to a platform.",
  "Operations Excellence capability ensures digital visibility is connected to action.",
  "Phased implementation reduces adoption and integration risk.",
  "Architecture can remain flexible if the client already has ERP, planning or machine systems.",
];

const reveal = { initial: { opacity: 0, y: 22 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.12 }, transition: { duration: 0.55 } } as const;
const wrap = "relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10";

export default function DigitalFactorySections({ imageAlt }: { imageAlt?: string }) {
  return (
    <main className="overflow-hidden bg-white">
      <section className="relative py-20 max-md:py-14">
        <motion.div {...reveal} className={`${wrap} grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]`}>
          <div className="relative min-h-[350px] overflow-hidden rounded-2xl bg-[#eef4fb] shadow-xl lg:min-h-[470px]">
            <Image src="/assets/images/digital-factory-mes.png" alt={imageAlt || "Digital factory production control room and manufacturing dashboard"} fill sizes="(max-width:1024px) 100vw,45vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07182e]/75 via-[#07182e]/10 to-transparent" />
            <p className="absolute bottom-6 left-6 right-6 font-baskervville text-2xl font-bold text-white">Turn shopfloor signals into faster, better production decisions.</p>
          </div>
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#D72B0D]">Manufacturing problem first</p>
            <h2 className="font-baskervville text-4xl font-bold leading-tight text-[#0E2C53] max-md:text-3xl">If You See the Problem Tomorrow, You Cannot Recover Today</h2>
            <div className="mt-7 space-y-5 text-lg leading-relaxed text-gray-600">
              <p>ERP remains critical for business transactions, but plant leaders often need a different level of operational visibility. They need to know whether the shift is on plan, where the gap is developing, why a machine or line is down, whether quality is drifting, whether material is blocking production and which order is at risk now.</p>
              <p>Madasky designs the decision process first and the dashboard second. We define data ownership, reason codes, alerts, escalation and management routines, then configure an appropriate MES/IoT platform to support them.</p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="relative bg-[#f5f7fa] py-20 max-md:py-14">
        <motion.div {...reveal} className={wrap}>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#D72B0D]">What we do</p>
          <h2 className="mb-10 font-baskervville text-4xl font-bold text-[#0E2C53] max-md:text-3xl">Typical Digital Factory Scope</h2>
          <ShowMoreList items={scope} visibleCount={5} image="/assets/images/digital-factory-mes.png" imageAlt="Digital manufacturing systems and production monitoring" />
        </motion.div>
      </section>

      <section className="py-20 max-md:py-14">
        <motion.div {...reveal} className={wrap}>
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#D72B0D]">Our approach</p>
            <h2 className="font-baskervville text-4xl font-bold text-[#0E2C53] max-md:text-3xl">Pilot Before Plant-Wide Rollout</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">Start with a focused use case, validate adoption and measurable outcomes, then expand with evidence.</p>
          </div>
          <ShowMoreList items={rollout} visibleCount={5} className="mx-auto max-w-4xl" />
        </motion.div>
      </section>

      <section className="relative bg-[#f5f5f6] py-20 max-md:py-14">
        <motion.div {...reveal} className={wrap}>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#D72B0D]">Decision-ready visibility</p>
            <h2 className="font-baskervville text-4xl font-bold text-[#0E2C53] max-md:text-3xl">The Five Screens a Plant Head Should See</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {screens.map(({ icon: Icon, label, title, text }) => <article key={label} className="rounded-2xl border border-[#dbe4ee] bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0E2C53] text-white"><Icon size={23} /></div>
              <p className="mt-5 text-xs font-bold tracking-[0.15em] text-[#D72B0D]">{label}</p>
              <h3 className="mt-2 text-xl font-bold text-[#0E2C53]">{title}</h3>
              <p className="mt-3 leading-relaxed text-gray-600">{text}</p>
            </article>)}
          </div>
          <p className="mt-8 text-center text-lg leading-relaxed text-gray-600">The dashboard should not display everything the system can collect. It should make deviation visible and trigger action.</p>
        </motion.div>
      </section>

      <section className="py-20 max-md:py-14">
        <motion.div {...reveal} className={`${wrap} grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]`}>
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#D72B0D]">Technology with discipline</p>
            <h2 className="font-baskervville text-4xl font-bold text-[#0E2C53] max-md:text-3xl">MES Is Not a Substitute for Process Discipline</h2>
          </div>
          <div className="rounded-2xl border border-[#dbe4ee] bg-white p-8 shadow-lg">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#eef4fb] text-[#0E2C53]"><Workflow size={25} /></div>
            <p className="text-lg leading-relaxed text-gray-600">If reason codes are inconsistent, supervisors do not respond to alerts, targets are unreliable or master data changes without control, digitalization can simply make poor processes more visible. Madasky combines MES implementation with operating routines so the information changes behaviour.</p>
          </div>
        </motion.div>
      </section>

      <section className="relative bg-[#0E2C53] bg-[url('/assets/images/what-we-solve-bg.jpg')] bg-cover bg-center py-20 max-md:py-14">
        <div className="absolute inset-0 bg-[#081b34]/90" />
        <motion.div {...reveal} className={`${wrap} grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]`}>
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#ff6a49]">Why Madasky</p>
            <h2 className="font-baskervville text-4xl font-bold text-white max-md:text-3xl">Digital Factory Built Around Manufacturing Decisions</h2>
          </div>
          <div className="grid gap-4">{reasons.map((reason) => <div key={reason} className="flex gap-4 rounded-xl border border-white/15 bg-white/[0.12] p-5 backdrop-blur-sm"><CheckCircle2 className="mt-0.5 shrink-0 text-[#ff6a49]" size={22} /><p className="text-[16px] leading-relaxed text-white/90">{reason}</p></div>)}</div>
        </motion.div>
      </section>

      <section className="relative bg-white py-20 max-md:py-14">
        <motion.div {...reveal} className={`${wrap} max-w-6xl`}>
          <div className="rounded-3xl border border-[#dbe4ee] bg-white p-10 shadow-xl max-md:p-6">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#D72B0D]">Digital factory diagnostic</p>
                <h2 className="font-baskervville text-4xl font-bold text-[#0E2C53] max-md:text-3xl">Start with the Few Decisions That Need Real-Time Visibility</h2>
                <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-600">A Digital Factory Diagnostic can map current data, decision delays, integrations and the pilot use case with the strongest business case.</p>
              </div>
              <div className="shrink-0"><Button text="Book a Digital Factory Diagnostic" /></div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
