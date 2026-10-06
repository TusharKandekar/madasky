import React from "react";
import AboutNavbar from "@/components/Header/AboutNavbar";
import HelpYou from "@/components/HelpYou";
import Footer from "@/components/Footer";
import Audit1 from "@/components/Audit1";
import Audit2 from "@/components/Audit2";
import AuditTypes from "@/components/AuditTypes";
import CardStack3 from "@/components/CardStack3";
import NewCard from "@/components/NewCard";
import InvestmentPayoff from "@/components/InvestmentPayoff";
import BannerSlide from "@/components/BannerSlide";
import GetStarted from "@/components/GetStarted";
import AuditProcess from "@/components/AuditProcess";
import AuditOutcome from "@/components/AuditOutcome";
import AuditOutcome2 from "@/components/AuditOutcome2";
import AuditScopeMatrix from "@/components/AuditScopeMatrix";
import Image from "next/image";

// Data object reflecting the Sales Process Audit image and your new prop structure
const salesProcessData = {
  title: "Sales Process Audit",
  heading: `Your sales process either drives growth or holds it back. We examine every stage to identify where opportunities are being lost and where improvements will have the biggest impact.`,
  imgSrc: "/assets/images/sales_process_audit.png", // Use your actual image path
  list: [
    {
      data1:
        "Lead sources and funnel quality — where your best opportunities originate",
    },
    {
      data1:
        "Conversion patterns and revenue leaks — what's falling through the cracks",
    },
    { data1: "Pricing discipline and negotiation effectiveness" },
    { data1: "Follow-up systems and relationship management practices" },
    { data1: "Channel partner health and performance" },
    { data1: "Sales team structure, KPIs, and accountability" },
  ],
  outcome: `A clear view of gaps, opportunities, and practical steps to strengthen your sales engine and accelerate revenue growth.`,
  // Optional custom styling for the Sales Audit card
  layoutClass: "max-w-5xl mx-auto shadow-lg border-t-4 border-red-600",
  outcomeClass: "bg-red-50 p-4 border-l-4 border-red-600 text-red-800",
};
const page = () => {
  return (
    <div>
      <AboutNavbar />

      <div
        className="mt-10 "
      >
        <Audit1></Audit1>
        <Audit2></Audit2>

       

        <div
          className="flex flex-col py-0"
        >
          <h2 className="my-20 text-4xl font-semibold text-center text-gray-800 max-md:mt-10">Audit Series</h2>

          <NewCard></NewCard>
        </div>

        {/* <AuditProcess/> */}

        <AuditOutcome />

        <AuditOutcome2 />

        <AuditScopeMatrix />

        <section
          className="bg-gray-200 max-md:pt-6"
        >
          {/* Mobile Heading */}
          <h2
            className="hidden mt-20 text-4xl font-bold leading-tight text-gray-900 max-md:block max-md:text-3xl max-xl:text-4xl max-lg:text-center max-md:mt-10 font-baskervville"
          >
            Your Next Strategic Move
          </h2>

          <div
            className="relative flex items-start justify-between h-auto px-6 py-20 mx-auto max-w-7xl max-md:py-10 max-lg:flex-col max-lg:gap-12 gap-14"
          >
            {/* LEFT SIDE — STICKY */}
            <div
              className="sticky flex flex-col self-start w-1/2 max-lg:static max-lg:w-full top-24"
            >
              <h2
                className="max-w-xl mb-6 text-4xl font-medium leading-tight text-gray-900 max-md:hidden max-xl:text-4xl"
              >
                Ready to Strengthen Your Business? Here's What Happens Next
              </h2>

              {/* <p className="max-w-xl mb-8 text-xl leading-relaxed text-gray-600">
                                Getting started is simple and designed to fit your schedule. We've kept the process straightforward so you can move quickly
                                from decision to action. Within weeks, you'll have the clarity and roadmap you need to drive real improvement.
                            </p> */}

              <div
                className="
                  flex
                  w-[100%] h-[30rem] max-md:h-[18rem]
                  mx-auto
                  border border-gray-400
                  relative items-center justify-start
                "
              >
                <Image
                  src="/assets/images/auditreport.png"
                  alt="Project"
                  fill
                  className="object-cover w-full rounded-lg "
                />
              </div>
            </div>

            {/* RIGHT SIDE — SCROLLABLE */}
            <div
              className="w-1/2 max-lg:w-full"
            >
              <p
                className="max-w-xl mb-8 text-xl leading-relaxed text-gray-600 "
              >
                Getting started is simple and designed to fit your schedule.
                We've kept the process straightforward so you can move quickly
                from decision to action. Within weeks, you'll have the clarity
                and roadmap you need to drive real improvement.
              </p>

              <div
                className="relative pl-8 mb-10 space-y-8 border-l border-gray-300 "
              >
                {/* Step 1 */}
                <div
                  className="relative "
                >
                  <div
                    className="
                      flex
                      w-8 h-8
                      text-white font-semibold
                      bg-gray-900
                      rounded-sm
                      absolute -left-[46px] top-1 items-center justify-center
                    "
                  >
                    1
                  </div>
                  <h3
                    className="mb-2 text-lg font-semibold text-gray-900 "
                  >
                    Choose Your Audit Tier
                  </h3>
                  <p
                    className="text-lg leading-relaxed text-gray-600 max-md:text-justify"
                  >
                    Pick the tier that fits your current stage and needs.
                    Whether it's a Rapid Diagnostic, Single-Department review,
                    3-Department Bundle, or Full Deep-Dive, we'll tailor the
                    approach to your business reality.
                  </p>
                </div>

                {/* Step 2 */}
                <div
                  className="relative "
                >
                  <div
                    className="
                      flex
                      w-8 h-8
                      text-white font-semibold
                      bg-[#D72B0D]
                      rounded-sm
                      absolute -left-[46px] top-1 items-center justify-center
                    "
                  >
                    2
                  </div>
                  <h3
                    className="mb-2 text-lg font-semibold text-gray-900 "
                  >
                    Schedule a Discovery Call
                  </h3>
                  <p
                    className="text-lg leading-relaxed text-gray-600 max-md:text-justify"
                  >
                    We'll have a brief conversation to understand your business
                    goals, current challenges, and desired outcomes. This helps
                    us confirm the right scope and prepare our team for maximum
                    impact during the audit.
                  </p>
                </div>

                {/* Step 3 */}
                <div
                  className="relative "
                >
                  <div
                    className="
                      flex
                      w-8 h-8
                      text-white font-semibold
                      bg-[#6B6B6B]
                      rounded-sm
                      absolute -left-[46px] top-1 items-center justify-center
                    "
                  >
                    3
                  </div>
                  <h3
                    className="mb-2 text-lg font-semibold text-gray-900 "
                  >
                    Start the Audit Within 7–10 Days
                  </h3>
                  <p
                    className="text-lg leading-relaxed text-gray-600 max-md:text-justify"
                  >
                    Our experienced consultants visit your facility, review your
                    operations and numbers, interview your team, and begin the
                    comprehensive assessment.
                  </p>
                </div>

                {/* Step 4 */}
                <div
                  className="relative "
                >
                  <div
                    className="
                      flex
                      w-8 h-8
                      text-white font-semibold
                      bg-[#152869]
                      rounded-sm
                      absolute -left-[46px] top-1 items-center justify-center
                    "
                  >
                    4
                  </div>
                  <h3
                    className="mb-2 text-lg font-semibold text-gray-900 "
                  >
                    Receive Your Actionable Report
                  </h3>
                  <p
                    className="text-lg leading-relaxed text-gray-600 max-md:text-justify"
                  >
                    Within one week of completing the audit, you'll receive a
                    clear, practical report that identifies strengths, gaps,
                    opportunities, and priorities.
                  </p>
                </div>
              </div>

              <p
                className="max-w-xl mb-8 text-lg leading-relaxed text-gray-600 max-md:text-justify"
              >
                Let's give you the clarity, confidence, and control your
                business deserves.
              </p>

              {/* <Button text="Unlock Your Next Chapter" /> */}
            </div>
          </div>
        </section>
      </div>

      <InvestmentPayoff />
      <GetStarted />
      {/* <BannerSlide /> */}

      <HelpYou />

      <Footer />
    </div>
  );
};

export default page;
