"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  Factory,
  GraduationCap,
  Network,
  Route,
  Settings2,
  ShieldCheck,
  Users,
  UserRoundCheck,
  Workflow,
} from "lucide-react";

import Button from "@/components/Button";

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.16 },
  transition: { duration: 0.65, ease: "easeOut" },
} as const;

type Props = {
  introImageUrl: string;
  introImageAlt: string;
  turnkeyImageUrl: string;
  turnkeyImageAlt: string;
  existingFactoryImageUrl: string;
  existingFactoryImageAlt: string;
};

const supportItems = [
  {
    icon: Network,
    title: "Organization Structure",
    text: "Organization structure for new facilities or transformed operations.",
  },
  {
    icon: Users,
    title: "Manpower Planning",
    text: "Manpower planning by process, role and shift.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Critical Roles",
    text: "Critical-role definition and job descriptions.",
  },
  {
    icon: UserRoundCheck,
    title: "Technical Assessment",
    text: "Technical interview and assessment support for key factory positions.",
  },
  {
    icon: BadgeCheck,
    title: "Skill & Competency Mapping",
    text: "Skill matrix and competency mapping aligned to actual job requirements.",
  },
  {
    icon: Workflow,
    title: "Multi-Skilling Design",
    text: "Multi-skilling and manpower-flexibility design for changing demand.",
  },
  {
    icon: Settings2,
    title: "Supervisor Routines",
    text: "Supervisor role clarity and practical daily operating routines.",
  },
  {
    icon: Route,
    title: "Ramp-Up Manpower Plan",
    text: "Ramp-up manpower plan linked to commissioning and production-start milestones.",
  },
  {
    icon: ShieldCheck,
    title: "Workforce Productivity",
    text: "Workforce productivity and staffing analysis before simply adding headcount.",
  },
  {
    icon: GraduationCap,
    title: "Structured Skilling",
    text: "Coordination of structured skilling programs where the manufacturing requirement justifies them.",
  },
];

const whyItems = [
  {
    title: "Manufacturing-linked roles",
    text: "Roles and manpower are linked to process and capacity rather than generic recruitment norms.",
  },
  {
    title: "Part of the project critical path",
    text: "Workforce readiness is planned alongside equipment, construction and commissioning milestones.",
  },
  {
    title: "Skills tied to actual work",
    text: "Skill development can be connected directly to process requirements and operating roles.",
  },
  {
    title: "Performance outcomes",
    text: "Operations Excellence links training and capability building to measurable productivity and quality outcomes.",
  },
];


export default function WorkforceReadinessSections({
  introImageUrl,
  introImageAlt,
  turnkeyImageUrl,
  turnkeyImageAlt,
  existingFactoryImageUrl,
  existingFactoryImageAlt,
}: Props) {
  return (
    <div className="overflow-hidden bg-white">
      <motion.section
        {...reveal}
        className="relative overflow-hidden bg-[#f5f5f6] py-20 max-md:py-14"
      >
        <motion.div
          aria-hidden="true"
          animate={{ y: [0, 14, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
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
          <div className="relative overflow-hidden rounded-2xl shadow-xl min-h-[430px] max-md:min-h-[280px]">
            <Image
              src="/assets/images/Garment Factory Production Floor.png"
              alt={introImageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e2c53]/85 via-[#0e2c53]/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-7 text-white max-md:p-5">
              <p className="mb-2 text-sm font-semibold tracking-[0.18em] uppercase text-white/75">
                Manufacturing Workforce
              </p>
              <p className="max-w-lg text-2xl font-bold leading-snug font-baskervville max-md:text-xl">
                People readiness has to move in step with factory readiness.
              </p>
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-bold tracking-[0.18em] uppercase text-[#D72B0D]">
              Workforce Readiness
            </p>
            <h2 className="text-4xl font-bold leading-tight text-[#0E2C53] font-baskervville max-md:text-3xl">
              People Are Part of the Manufacturing System
            </h2>
            <div className="mt-7 space-y-5 text-lg leading-relaxed text-gray-600 max-md:text-[17px]">
              <p>
                New factories often track machines, civil work and utilities in
                detail while workforce planning begins too late. Existing
                factories may respond to shortages by adding headcount without
                understanding skill mix, single-skill dependency, supervisor
                capability or work-content balance.
              </p>
              <p>
                Madasky approaches workforce from a manufacturing perspective:
                what roles are required, what capability must exist by each
                project stage, how many people are needed by process/shift,
                which skills are scarce and which roles are critical to ramp-up.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <section className="relative bg-[#252638] bg-[url('/assets/images/what-we-solve-bg.jpg')] bg-cover bg-center bg-no-repeat py-20 max-md:py-14">
        <div className="absolute inset-0 bg-[#10172d]/82" />
        <motion.div
          {...reveal}
          className="relative z-10 px-6 mx-auto max-w-7xl sm:px-8 lg:px-10"
        >
          <div className="max-w-3xl mx-auto text-center">
            <p className="mb-3 text-sm font-bold tracking-[0.18em] uppercase text-[#ff6a49]">
              What We Do
            </p>
            <h2 className="text-4xl font-bold text-white font-baskervville max-md:text-3xl">
              Madasky Workforce Support
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/75 max-md:text-[17px]">
              Workforce planning is connected to factory design, capacity,
              operating roles, commissioning and the performance the business
              expects after start-up.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-5 mt-12 max-lg:grid-cols-2 max-md:grid-cols-1">
            {supportItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.45,
                    delay: Math.min(index * 0.035, 0.2),
                  }}
                  whileHover={{ y: -5 }}
                  className="group rounded-xl border border-white/10 bg-white/[0.97] p-6 shadow-lg transition-shadow hover:shadow-2xl"
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
        className="relative overflow-hidden bg-white py-20 max-md:py-14"
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
              Delivery Model
            </p>
            <h2 className="text-4xl font-bold leading-tight text-[#0E2C53] font-baskervville max-md:text-3xl">
              Madasky + Ananta Mitra Foundation
            </h2>
          </div>

          <div className="grid gap-6 mt-10 lg:grid-cols-2">
            <motion.article
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.55 }}
              className="relative overflow-hidden rounded-2xl border border-gray-200 bg-[#f8fafc] p-8 max-md:p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0E2C53] text-white">
                <Factory size={23} strokeWidth={1.9} />
              </div>
              <p className="mt-6 text-xs font-bold tracking-[0.17em] uppercase text-[#D72B0D]">
                Madasky Consulting
              </p>
              <h3 className="mt-2 text-2xl font-bold text-[#0E2C53] font-baskervville">
                Manufacturing Requirement & Project Readiness
              </h3>
              <p className="mt-4 text-[17px] leading-relaxed text-gray-600">
                Madasky Consulting remains responsible for the manufacturing
                workforce requirement: organization, manpower, roles,
                competency and project readiness.
              </p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.55 }}
              className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm max-md:p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#D72B0D] text-white">
                <GraduationCap size={23} strokeWidth={1.9} />
              </div>
              <p className="mt-6 text-xs font-bold tracking-[0.17em] uppercase text-[#D72B0D]">
                Structured Skilling
              </p>
              <h3 className="mt-2 text-2xl font-bold text-[#0E2C53] font-baskervville">
                Ananta Mitra Foundation Where Required
              </h3>
              <div className="mt-4 space-y-4 text-[17px] leading-relaxed text-gray-600">
                <p>
                  Where structured skill development, operator training, bridge
                  programs or workforce-development programs are required,
                  these may be designed and delivered through Ananta Mitra
                  Foundation under a separate and clearly defined scope.
                </p>
                
              </div>
            </motion.article>
          </div>
        </div>
      </motion.section>

      <section className="relative bg-[#f5f5f6] py-20 max-md:py-14">
        <div className="absolute inset-0 bg-[url('/assets/images/industrybg.png')] bg-cover bg-center opacity-[0.055]" />
        <div className="relative z-10 px-6 mx-auto max-w-7xl sm:px-8 lg:px-10">
          <motion.div
            {...reveal}
            className="grid items-center gap-12 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm lg:grid-cols-2 max-md:p-6"
          >
            <div className="relative overflow-hidden rounded-xl min-h-[380px] max-md:min-h-[260px]">
              <Image
                src={turnkeyImageUrl}
                alt={turnkeyImageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E2C53]/35 to-transparent" />
            </div>
            <div>
              <p className="mb-3 text-sm font-bold tracking-[0.18em] uppercase text-[#D72B0D]">
                New Factory Readiness
              </p>
              <h2 className="text-4xl font-bold leading-tight text-[#0E2C53] font-baskervville max-md:text-3xl">
                For Turnkey Factory Projects
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600 max-md:text-[17px]">
                Workforce readiness should run in parallel with equipment and
                construction milestones. Key leaders need to join early enough
                to absorb process, systems and supplier knowledge. Supervisors
                and technical staff need training before trial production.
                Operators need skill development and line allocation before
                commercial ramp-up. Madasky can build the manpower readiness
                plan backward from the production start date.
              </p>
            </div>
          </motion.div>

          <motion.div
            {...reveal}
            className="grid items-center gap-12 mt-8 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm lg:grid-cols-2 max-md:p-6"
          >
            <div className="order-2 lg:order-1">
              <p className="mb-3 text-sm font-bold tracking-[0.18em] uppercase text-[#D72B0D]">
                Existing Operations
              </p>
              <h2 className="text-4xl font-bold leading-tight text-[#0E2C53] font-baskervville max-md:text-3xl">
                For Existing Factories
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600 max-md:text-[17px]">
                Skill shortage and poor productivity are not the same problem.
                A factory may need recruitment, but it may also need better
                skill visibility, multi-skilling, line balance, methods,
                training and supervisor management. Madasky separates manpower
                quantity from capability so action is based on evidence.
              </p>
            </div>
            <div className="relative order-1 overflow-hidden rounded-xl min-h-[380px] lg:order-2 max-md:min-h-[260px]">
              <Image
                src={existingFactoryImageUrl}
                alt={existingFactoryImageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E2C53]/35 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0E2C53] bg-[url('/assets/images/what-we-solve-bg.jpg')] bg-cover bg-center py-20 max-md:py-14">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E2C53]/96 via-[#152869]/93 to-[#07182d]/92" />
        <motion.div
          {...reveal}
          className="relative z-10 grid gap-12 px-6 mx-auto max-w-7xl lg:grid-cols-[0.8fr_1.2fr] sm:px-8 lg:px-10"
        >
          <div>
            <p className="mb-3 text-sm font-bold tracking-[0.18em] uppercase text-[#ff7b5e]">
              Why Madasky
            </p>
            <h2 className="text-4xl font-bold leading-tight text-white font-baskervville max-md:text-3xl">
              Why This Sits Inside Manufacturing Transformation
            </h2>
            <p className="max-w-xl mt-6 text-lg leading-relaxed text-white/75 max-md:text-[17px]">
              Workforce decisions work better when they are made from the same
              process, capacity and operating logic used to design and improve
              the factory itself.
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
        className="relative overflow-hidden bg-white py-20 max-md:py-14"
      >
        <div className="absolute inset-0 bg-[url('/assets/images/industrybg.png')] bg-cover bg-center opacity-[0.05]" />
        <div className="relative z-10 px-6 mx-auto max-w-7xl sm:px-8 lg:px-10">
          <div className="grid items-center gap-10 rounded-2xl bg-[#f5f5f6] px-10 py-12 shadow-sm lg:grid-cols-[1fr_auto] max-md:px-6 max-md:py-9">
            <div>
              <p className="mb-3 text-sm font-bold tracking-[0.18em] uppercase text-[#D72B0D]">
                Plan the People Before Ramp-Up
              </p>
              <h2 className="text-4xl font-bold leading-tight text-[#0E2C53] font-baskervville max-md:text-3xl">
                Building a Factory or Facing a Skill Constraint?
              </h2>
              <p className="max-w-3xl mt-5 text-lg leading-relaxed text-gray-600 max-md:text-[17px]">
                Include workforce readiness early enough to influence
                organization, hiring, training and ramp-up - not after the
                equipment is installed.
              </p>
            </div>
            <div className="lg:pl-4">
              <Button text="Discuss Workforce Readiness" />
            </div>
          </div>
        </div>
      </motion.section>


    </div>
  );
}
