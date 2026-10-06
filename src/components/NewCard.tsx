"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";
// Importing a wide variety of specific icons for each context
import {
  // Finance Icons
  TbClockDollar,
  TbFileInvoice,
  TbRefresh,
  TbChartPie,
  TbTrendingUp,
  TbDropletOff,
  // GTM Icons
  TbPuzzle,
  TbUsersGroup,
  TbTag,
  TbSitemap,
  TbTelescope,
  TbBroadcast,
  // Automation Icons
  TbHandStop,
  TbRepeat,
  TbPlugX,
  TbArrowsDiff,
  TbUserCheck,
  TbCalculator,
  // People Icons
  TbHierarchy,
  TbId,
  TbTargetArrow,
  TbSchool,
  TbHeartHandshake,
  TbCrown,
  // Productivity Icons
  TbUsers,
  TbClock24,
  TbStopwatch,
  TbHourglassLow,
  TbLayout2,
  TbGauge,
} from "react-icons/tb";

export default function NewCard() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  // Unused y2 variable kept to preserve logic structure
  const y2 = useTransform(scrollYProgress, [0, 1], ["50%", "-80%"]);

  const y3 = useTransform(scrollYProgress, [0, 1], ["50%", "-40%"]);

  return (
    <>
      <div
        className="relative h-auto pt-20 max-md:hidden"
      >
        {/* Card 1: Sales Process Audit */}

        <motion.div
          style={{ y: y1 }}
          className="sticky top-0 w-3/4 p-12 mx-auto bg-white border border-gray-200 shadow-2xl to-gray-200 rounded-2xl"
        >
          <span
            id="automation-audit"
            className="
              absolute -top-[600px] left-0
            "
          ></span>
          <h2
            className="
              text-3xl font-bold text-[#152869] font-open
              decoration-[#152869] underline-offset-4
            "
          >
            <span
              className="
                mr-2
                text-[#152869]
              "
            >
              01.
            </span>{" "}
            Sales Process Audit
          </h2>

          <div
            className="flex flex-row gap-12 mt-8 mb-20 "
          >
            <div className="flex flex-col w-[60%] gap-6">
              <h3 className="text-xl font-semibold text-slate-800">
                What We Check
              </h3>
              <p className="mb-2 text-lg font-medium leading-relaxed text-slate-600 font-open">
                Your sales process either drives growth or holds it back. We
                examine every stage to identify where opportunities are being lost
                and where improvements will have the biggest impact.
              </p>

              <div>
                <div
                  className="flex flex-col justify-center w-full gap-3 pl-4 "
                >
                  <div
                    className="flex flex-row gap-4 "
                  >
                    <div
                      className="p-1 mt-1 bg-blue-100 rounded-full h-fit"
                    >
                      <FaCheck
                        className="
                          flex-shrink-0
                          w-3 h-3
                          text-[#152869]
                        "
                      />
                    </div>
                    <p
                      className="text-base font-medium leading-snug text-slate-700 font-open"
                    >
                      Lead sources and funnel quality - where your best
                      opportunities originate
                    </p>
                  </div>
                  <div
                    className="flex flex-row gap-4 "
                  >
                    <div
                      className="p-1 mt-1 bg-blue-100 rounded-full h-fit"
                    >
                      <FaCheck
                        className="
                          flex-shrink-0
                          w-3 h-3
                          text-[#152869]
                        "
                      />
                    </div>
                    <p
                      className="text-base font-medium leading-snug text-slate-700 font-open"
                    >
                      Conversion patterns and revenue leaks - what's falling
                      through the cracks
                    </p>
                  </div>
                  <div
                    className="flex flex-row gap-4 "
                  >
                    <div
                      className="p-1 mt-1 bg-blue-100 rounded-full h-fit"
                    >
                      <FaCheck
                        className="
                          flex-shrink-0
                          w-3 h-3
                          text-[#152869]
                        "
                      />
                    </div>
                    <p
                      className="text-base font-medium leading-snug text-slate-700 font-open"
                    >
                      Pricing discipline and negotiation effectiveness
                    </p>
                  </div>
                  <div
                    className="flex flex-row gap-4 "
                  >
                    <div
                      className="p-1 mt-1 bg-blue-100 rounded-full h-fit"
                    >
                      <FaCheck
                        className="
                          flex-shrink-0
                          w-3 h-3
                          text-[#152869]
                        "
                      />
                    </div>
                    <p
                      className="text-base font-medium leading-snug text-slate-700 font-open"
                    >
                      Follow-up systems and relationship management practices
                    </p>
                  </div>
                  <div
                    className="flex flex-row gap-4 "
                  >
                    <div
                      className="p-1 mt-1 bg-blue-100 rounded-full h-fit"
                    >
                      <FaCheck
                        className="
                          flex-shrink-0
                          w-3 h-3
                          text-[#152869]
                        "
                      />
                    </div>
                    <p
                      className="text-base font-medium leading-snug text-slate-700 font-open"
                    >
                      Channel partner health and performance
                    </p>
                  </div>
                  <div
                    className="flex flex-row gap-4 "
                  >
                    <div
                      className="p-1 mt-1 bg-blue-100 rounded-full h-fit"
                    >
                      <FaCheck
                        className="
                          flex-shrink-0
                          w-3 h-3
                          text-[#152869]
                        "
                      />
                    </div>
                    <p
                      className="text-base font-medium leading-snug text-slate-700 font-open"
                    >
                      Sales team structure, KPIs, and accountability
                    </p>
                  </div>
                </div>
                <div
                  className="
                    py-4 pl-6 pr-4 mt-10
                    bg-blue-50
                    border-l-4 border-[#152869] rounded-r-lg
                  "
                >
                  <p
                    className="text-lg leading-relaxed text-slate-800 font-open"
                  >
                    <span
                      className="font-bold "
                    >
                      Outcome:
                    </span>{" "}
                    A clear view of gaps, opportunities, and practical steps to
                    strengthen your sales engine and accelerate revenue growth.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="
                w-[40%]
              "
            >
              <div
                className="relative w-[95%] h-[95%] p-4 overflow-hidden rounded-xl"
              >
                <Image
                  src="/assets/images/banner/Sales Process Audit.png"
                  alt=""
                  fill
                  className="bg-white object-fit "
                />
              </div>
              <div className="flex items-center justify-center w-full mt-8">
                <button
                  onClick={() =>
                    window.open("https://forms.gle/8KtDGCwVx9hPWDtM8", "_blank")
                  }
                  className="
                        px-6 py-2
                        text-white
                        bg-[#152869]
                        rounded-lg w-fit
                      "
                >
                  Free Audit
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Business Health Check */}

        <motion.div
          style={{ y: y1 }}
          className="sticky top-0 w-3/4 p-12 mx-auto bg-white border border-gray-200 shadow-2xl rounded-2xl scroll-mt-80"
        >
          <span
            id="business-health"
            className="
           absolute -top-[400px] left-0
         "
          ></span>

          <h2
            className="
              text-3xl font-bold text-[#152869] font-open
            "
          >
            <span
              className="
                mr-2
                text-[#152869]
              "
            >
              02.
            </span>{" "}
            Business Health Check
          </h2>

          <div
            className="flex flex-row-reverse gap-12 mt-0 "
          >
            <div
              className="
                flex flex-col
                w-[60%]
                gap-6
              "
            >
              <p
                className="mb-2 text-lg font-medium leading-relaxed text-slate-600 font-open"
              >
                This comprehensive diagnostic provides a 360-degree view of your
                entire business. It's designed for owners who want to understand
                the full picture - not just individual departments, but how
                everything works together.
              </p>
              <div>
                <p
                  className="mb-4 text-xl font-semibold text-slate-800 font-open"
                >
                  What This Covers
                </p>
                <div
                  className="flex flex-col justify-center w-full gap-3 pl-4 "
                >
                  <div
                    className="flex flex-row gap-4 "
                  >
                    <div
                      className="p-1 mt-1 bg-blue-100 rounded-full h-fit"
                    >
                      <FaCheck
                        className="
                          flex-shrink-0
                          w-3 h-3
                          text-[#152869]
                        "
                      />
                    </div>
                    <p
                      className="text-base font-medium leading-snug text-slate-700 font-open"
                    >
                      Revenue trends and margin behavior over time
                    </p>
                  </div>
                  <div
                    className="flex flex-row gap-4 "
                  >
                    <div
                      className="p-1 mt-1 bg-blue-100 rounded-full h-fit"
                    >
                      <FaCheck
                        className="
                          flex-shrink-0
                          w-3 h-3
                          text-[#152869]
                        "
                      />
                    </div>
                    <p
                      className="text-base font-medium leading-snug text-slate-700 font-open"
                    >
                      Cost structure analysis and efficiency ratios
                    </p>
                  </div>
                  <div
                    className="flex flex-row gap-4 "
                  >
                    <div
                      className="p-1 mt-1 bg-blue-100 rounded-full h-fit"
                    >
                      <FaCheck
                        className="
                          flex-shrink-0
                          w-3 h-3
                          text-[#152869]
                        "
                      />
                    </div>
                    <p
                      className="text-base font-medium leading-snug text-slate-700 font-open"
                    >
                      Leadership alignment on strategy and priorities
                    </p>
                  </div>
                  <div
                    className="flex flex-row gap-4 "
                  >
                    <div
                      className="p-1 mt-1 bg-blue-100 rounded-full h-fit"
                    >
                      <FaCheck
                        className="
                          flex-shrink-0
                          w-3 h-3
                          text-[#152869]
                        "
                      />
                    </div>
                    <p
                      className="text-base font-medium leading-snug text-slate-700 font-open"
                    >
                      Department performance and cross-functional coordination
                    </p>
                  </div>
                  <div
                    className="flex flex-row gap-4 "
                  >
                    <div
                      className="p-1 mt-1 bg-blue-100 rounded-full h-fit"
                    >
                      <FaCheck
                        className="
                          flex-shrink-0
                          w-3 h-3
                          text-[#152869]
                        "
                      />
                    </div>
                    <p
                      className="text-base font-medium leading-snug text-slate-700 font-open"
                    >
                      Customer dependency risks and concentration
                    </p>
                  </div>
                  <div
                    className="flex flex-row gap-4 "
                  >
                    <div
                      className="p-1 mt-1 bg-blue-100 rounded-full h-fit"
                    >
                      <FaCheck
                        className="
                          flex-shrink-0
                          w-3 h-3
                          text-[#152869]
                        "
                      />
                    </div>
                    <p
                      className="text-base font-medium leading-snug text-slate-700 font-open"
                    >
                      Overall competitive positioning and market strength
                    </p>
                  </div>
                </div>
                <div
                  className="
                    py-4 pl-6 pr-4 mt-10
                    bg-blue-50
                    border-l-4 border-[#152869] rounded-r-lg
                  "
                >
                  <p
                    className="text-lg leading-relaxed text-slate-800 font-open"
                  >
                    <span
                      className="font-bold "
                    >
                      Outcome:
                    </span>{" "}
                    A complete health scorecard showing your strengths, critical
                    gaps, hidden risks, and prioritized improvement opportunities.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="
                w-[40%]
              "
            >
              <div
                className="relative w-[95%] h-[95%] p-2 overflow-hidden "
              >
                <Image
                  src="/assets/images/banner/Bisiness Health Chck.png"
                  alt=""
                  fill
                  className="object-contain bg-white "
                />
              </div>
              <div className="flex items-center justify-center w-full mt-8">
                <button
                  onClick={() =>
                    window.open("https://forms.gle/wCL27o9zYgMJ9mjw9", "_blank")
                  }
                  className="
                        px-6 py-2
                        text-white
                        bg-[#152869]
                        rounded-lg w-fit
                      "
                >
                  Free Audit
                </button>
              </div>
            </div>

          </div>

        </motion.div>

        {/* Card 3: Finance & Cashflow Audit */}

        <motion.div
          style={{ y: y1 }}
          className="sticky top-0 w-3/4 p-6 mx-auto bg-white border border-gray-200 shadow-2xl rounded-2xl"
        >
          <span
            id="finance-cashflow"
            className="
            absolute -top-[400px] left-0
          "
          ></span>
          <h2
            className="
            text-3xl font-bold text-[#152869] font-open
          "
          >
            <span
              className="
              mr-2
              text-[#152869]
            "
            >
              03.
            </span>{" "}
            Finance & Cashflow Audit
          </h2>

          <div
            className="w-[100%] flex gap-4 mt-4 "
          >

            <div className="w-[60%]">

              <div
                className="
              grid grid-cols-2
              w-[100%]
              col-span-2 gap-2
            "
              >
                {/* Receivables - Clock + Dollar */}
                <div
                  className="px-3 py-2 space-y-2 border-r border-gray-200 "
                >
                  <div>
                    <TbClockDollar
                      size={32}
                      className="
                    text-[#152869]
                  "
                    />
                  </div>
                  <h4
                    className="
                  text-lg font-bold text-[#152869]
                "
                  >
                    Receivables Age & Overdue Blocks
                  </h4>
                  <p
                    className="text-sm leading-snug text-slate-600"
                  >
                    Understand collection patterns and recovery opportunities
                  </p>
                </div>

                {/* Payables - Invoice */}
                <div
                  className="px-3 py-2 space-y-2 border-r border-gray-200 "
                >
                  <div>
                    <TbFileInvoice
                      size={32}
                      className="
                    text-[#152869]
                  "
                    />
                  </div>
                  <h4
                    className="
                  text-lg font-bold text-[#152869]
                "
                  >
                    Payables Discipline
                  </h4>
                  <p
                    className="text-sm leading-snug text-slate-600"
                  >
                    Optimize payment timing without damaging supplier relationships
                  </p>
                </div>

                {/* Working Capital - Cycle/Refresh */}
                <div
                  className="px-3 py-2 space-y-2 border-t border-r border-gray-200 "
                >
                  <div>
                    <TbRefresh
                      size={32}
                      className="
                    text-[#152869]
                  "
                    />
                  </div>
                  <h4
                    className="
                  text-lg font-bold text-[#152869]
                "
                  >
                    Working Capital Cycle
                  </h4>
                  <p
                    className="text-sm leading-snug text-slate-600"
                  >
                    Shorten cash conversion and improve liquidity
                  </p>
                </div>

                {/* Real Cost - Pie Chart */}
                <div
                  className="px-3 py-2 space-y-2 border-t border-r border-gray-200 "
                >
                  <div>
                    <TbChartPie
                      size={32}
                      className="
                    text-[#152869]
                  "
                    />
                  </div>
                  <h4
                    className="
                  text-lg font-bold text-[#152869]
                "
                  >
                    Real Cost vs Booked Cost
                  </h4>
                  <p
                    className="text-sm leading-snug text-slate-600"
                  >
                    Reveal hidden costs and true profitability by product
                  </p>
                </div>

                {/* Budgeting - Trending Up */}
                <div
                  className="px-3 py-2 space-y-2 border-t border-r border-gray-200 "
                >
                  <div>
                    <TbTrendingUp
                      size={32}
                      className="
                    text-[#152869]
                  "
                    />
                  </div>
                  <h4
                    className="
                  text-lg font-bold text-[#152869]
                "
                  >
                    Budgeting & Forecasting
                  </h4>
                  <p
                    className="text-sm leading-snug text-slate-600"
                  >
                    Build predictable financial planning systems
                  </p>
                </div>

                {/* Leakages - Droplet Off */}
                <div
                  className="px-3 py-2 space-y-2 border-t border-r border-gray-200 "
                >
                  <div>
                    <TbDropletOff
                      size={32}
                      className="
                    text-[#152869]
                  "
                    />
                  </div>
                  <h4
                    className="
                  text-lg font-bold text-[#152869]
                "
                  >
                    Leakages & Duplicate Spends
                  </h4>
                  <p
                    className="text-sm leading-snug text-slate-600"
                  >
                    Eliminate waste and duplicate expenses
                  </p>
                </div>

              </div>

            </div>



            <div className="w-[40%]">
              <div
                className="
                w-[100%] h-[100%]
              "
              >
                <div
                  className="
                  overflow-hidden
                  w-[80%] h-[110%]
                  p-2
                  rounded-xl
                  relative
                "
                >
                  <Image
                    src="/assets/images/banner/FinanceCashflowAudit.png"
                    alt=""
                    fill
                    className="bg-white object-fit "
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className="
            py-4 pl-6 pr-4 mt-10
            bg-blue-50
            border-l-4 border-[#152869] rounded-r-lg
          "
          >
            <p
              className="text-lg leading-relaxed text-slate-800 font-open"
            >
              <span
                className="font-bold "
              >
                Outcome:
              </span>{" "}
              A cashflow action plan that frees blocked money, eliminates waste,
              and strengthens financial control across the business.
            </p>
          </div>

          <button
            onClick={() =>
              window.open("https://forms.gle/Zdz2CDrV3qnGQrcL6", "_blank")
            }
            className="
                  px-6 py-2 mt-4
                  text-white
                  bg-[#152869]
                  rounded-lg
                "
          >
            Free Audit
          </button>
        </motion.div>

        {/* Card 4: Operations Excellence Audit */}
        <motion.div
          style={{ y: y1 }}
          className="sticky top-0 w-3/4 p-12 mx-auto bg-white border border-gray-200 shadow-2xl rounded-2xl"
        >
          <span
            id="operations-excellence"
            className="
            absolute -top-[400px] left-0
          "
          ></span>
          <div>
            <h2
              className="
              text-3xl font-bold text-[#152869] font-open
              decoration-[#152869] underline-offset-4
            "
            >
              <span
                className="
                mr-2
                text-[#152869]
              "
              >
                04.
              </span>{" "}
              Operations Excellence Audit
            </h2>

            <div
              className="flex flex-row-reverse gap-12 mt-0"
            >
              <div
                className="
                flex flex-col
                w-[60%]
                gap-6
              "
              >
                <h3
                  className="text-xl font-semibold text-slate-800"
                >
                  What We Assess
                </h3>
                <p
                  className="mb-2 text-lg font-medium leading-relaxed text-slate-600 font-open"
                >
                  Operations is where plans meet reality. We dive deep into your
                  production environment to understand what's working, what's
                  causing delays, and where capacity is being wasted.
                </p>
                <div>
                  <div
                    className="flex flex-col justify-center w-full gap-3 pl-4 "
                  >
                    <div
                      className="flex flex-row gap-4 "
                    >
                      <div
                        className="p-1 mt-1 bg-blue-100 rounded-full h-fit"
                      >
                        <FaCheck
                          className="
                          flex-shrink-0
                          w-3 h-3
                          text-[#152869]
                        "
                        />
                      </div>
                      <p
                        className="text-base font-medium leading-snug text-slate-700 font-open"
                      >
                        Production planning and load balancing efficiency
                      </p>
                    </div>
                    <div
                      className="flex flex-row gap-4 "
                    >
                      <div
                        className="p-1 mt-1 bg-blue-100 rounded-full h-fit"
                      >
                        <FaCheck
                          className="
                          flex-shrink-0
                          w-3 h-3
                          text-[#152869]
                        "
                        />
                      </div>
                      <p
                        className="text-base font-medium leading-snug text-slate-700 font-open"
                      >
                        Downtime reasons - planned, unplanned, and hidden
                      </p>
                    </div>
                    <div
                      className="flex flex-row gap-4 "
                    >
                      <div
                        className="p-1 mt-1 bg-blue-100 rounded-full h-fit"
                      >
                        <FaCheck
                          className="
                          flex-shrink-0
                          w-3 h-3
                          text-[#152869]
                        "
                        />
                      </div>
                      <p
                        className="text-base font-medium leading-snug text-slate-700 font-open"
                      >
                        Quality issues and the true cost of rework
                      </p>
                    </div>
                    <div
                      className="flex flex-row gap-4 "
                    >
                      <div
                        className="p-1 mt-1 bg-blue-100 rounded-full h-fit"
                      >
                        <FaCheck
                          className="
                          flex-shrink-0
                          w-3 h-3
                          text-[#152869]
                        "
                        />
                      </div>
                      <p
                        className="text-base font-medium leading-snug text-slate-700 font-open"
                      >
                        Machine utilization rates and bottlenecks
                      </p>
                    </div>
                    <div
                      className="flex flex-row gap-4 "
                    >
                      <div
                        className="p-1 mt-1 bg-blue-100 rounded-full h-fit"
                      >
                        <FaCheck
                          className="
                          flex-shrink-0
                          w-3 h-3
                          text-[#152869]
                        "
                        />
                      </div>
                      <p
                        className="text-base font-medium leading-snug text-slate-700 font-open"
                      >
                        Material flow, WIP levels, and inventory accuracy
                      </p>
                    </div>
                    <div
                      className="flex flex-row gap-4 "
                    >
                      <div
                        className="p-1 mt-1 bg-blue-100 rounded-full h-fit"
                      >
                        <FaCheck
                          className="
                          flex-shrink-0
                          w-3 h-3
                          text-[#152869]
                        "
                        />
                      </div>
                      <p
                        className="text-base font-medium leading-snug text-slate-700 font-open"
                      >
                        Maintenance patterns and equipment reliability
                      </p>
                    </div>
                  </div>
                  <div
                    className="
                    py-4 pl-6 pr-4 mt-10
                    bg-blue-50
                    border-l-4 border-[#152869] rounded-r-lg
                  "
                  >
                    <p
                      className="text-lg leading-relaxed text-slate-800 font-open"
                    >
                      <span
                        className="font-bold "
                      >
                        Outcome:
                      </span>{" "}
                      A roadmap to lift output, reduce rework, stabilize
                      operations, and improve on-time delivery performance.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="
                w-[40%]
              "
              >
                <div
                  className="
                  overflow-hidden
                  w-[95%] h-[90%]
                  rounded-xl
                  relative
                "
                >
                  <Image
                    src="/assets/images/banner/Operations Excellence Audits.png"
                    alt=""
                    fill
                    className="object-contain bg-white "
                  />
                </div>
                <div
                  className="flex items-center justify-center w-full mt-8 "
                >
                  <button
                    onClick={() =>
                      window.open("https://forms.gle/mmzNqBKKk8ruHy9C9", "_blank")
                    }
                    className="
                       w-fit
                       px-6 py-2 
                       text-white
                       bg-[#152869]
                       rounded-lg
                     "
                  >
                    Free Audit
                  </button>
                </div>
              </div>
            </div>
          </div>


        </motion.div>

        {/* Card 5: Go-To-Market (GTM) Audit */}
        <motion.div
          style={{ y: y1 }}
          className="sticky top-0 w-3/4 p-12 mx-auto bg-white border border-gray-200 shadow-2xl rounded-2xl"
        >
          <span
            id="go-to-market"
            className="
            absolute -top-[400px] left-0
          "
          ></span>
          <h2
            className="
            text-3xl font-bold text-[#152869] font-open
          "
          >
            <span
              className="
              mr-2
              text-[#152869]
            "
            >
              05.
            </span>{" "}
            Go-To-Market (GTM) Audit
          </h2>

          <div
            className="flex flex-col gap-10 mt-10 mb-20 "
          >
            <p
              className="text-lg leading-relaxed text-slate-600"
            >
              Your GTM strategy determines whether you're competing on value or
              just on price. We evaluate how well your products align with market
              needs and how effectively you're reaching your best customers.
            </p>

            <div
              className="w-[100%] flex gap-4 mt-4 "
            >

              <div className="w-[60%]">

                <div
                  className="
                grid grid-cols-2
                w-[100%]
                col-span-2 gap-4
              "
                >
                  {/* Product Market Fit - Puzzle */}
                  <div
                    className="px-4 py-2 space-y-2 border-r border-gray-200 "
                  >
                    <div>
                      <TbPuzzle
                        size={32}
                        className="
                      text-[#152869]
                    "
                      />
                    </div>
                    <h4
                      className="
                    text-lg font-bold text-[#152869]
                  "
                    >
                      Product-Market Fit
                    </h4>
                    <p
                      className="text-sm leading-snug text-slate-600"
                    >
                      Are you solving the right problems for the right customers?
                    </p>
                  </div>

                  {/* Segments - User Group */}
                  <div
                    className="px-4 py-2 space-y-2 border-r border-gray-200 "
                  >
                    <div>
                      <TbUsersGroup
                        size={32}
                        className="
                      text-[#152869]
                    "
                      />
                    </div>
                    <h4
                      className="
                    text-lg font-bold text-[#152869]
                  "
                    >
                      Customer Segments
                    </h4>
                    <p
                      className="text-sm leading-snug text-slate-600"
                    >
                      Which segments are most profitable and how to expand there
                    </p>
                  </div>

                  {/* Pricing - Tag */}
                  <div
                    className="px-4 py-2 space-y-2 border-t border-r border-gray-200 "
                  >
                    <div>
                      <TbTag
                        size={32}
                        className="
                      text-[#152869]
                    "
                      />
                    </div>
                    <h4
                      className="
                    text-lg font-bold text-[#152869]
                  "
                    >
                      Pricing Logic
                    </h4>
                    <p
                      className="text-sm leading-snug text-slate-600"
                    >
                      Whether your pricing reflects value or just matches
                      competition
                    </p>
                  </div>

                  {/* Channel - Sitemap */}
                  <div
                    className="px-4 py-2 space-y-2 border-t border-r border-gray-200 "
                  >
                    <div>
                      <TbSitemap
                        size={32}
                        className="
                      text-[#152869]
                    "
                      />
                    </div>
                    <h4
                      className="
                    text-lg font-bold text-[#152869]
                  "
                    >
                      Channel Structure
                    </h4>
                    <p
                      className="text-sm leading-snug text-slate-600"
                    >
                      How effectively your channels reach and serve target customers
                    </p>
                  </div>

                  {/* Competitor - Telescope */}
                  <div
                    className="px-4 py-2 space-y-2 border-t border-r border-gray-200 "
                  >
                    <div>
                      <TbTelescope
                        size={32}
                        className="
                      text-[#152869]
                    "
                      />
                    </div>
                    <h4
                      className="
                    text-lg font-bold text-[#152869]
                  "
                    >
                      Competitor Moves
                    </h4>
                    <p
                      className="text-sm leading-snug text-slate-600"
                    >
                      What competitors are doing and where opportunities exist
                    </p>
                  </div>

                  {/* Brand Visibility - Broadcast */}
                  <div
                    className="px-4 py-2 space-y-2 border-t border-r border-gray-200 "
                  >
                    <div>
                      <TbBroadcast
                        size={32}
                        className="
                      text-[#152869]
                    "
                      />
                    </div>
                    <h4
                      className="
                    text-lg font-bold text-[#152869]
                  "
                    >
                      Brand Visibility
                    </h4>
                    <p
                      className="text-sm leading-snug text-slate-600"
                    >
                      How prospects perceive you and discover your offerings
                    </p>
                  </div>
                </div>





              </div>

              <div className="w-[40%]">


                <div
                  className="
                w-[100%] h-[100%]
              "
                >
                  <div
                    className="
                  overflow-hidden
                  w-[80%] h-[110%]
                  rounded-xl
                  relative
                "
                  >
                    <Image
                      src="/assets/images/banner/Go-To-Market Audit.png"
                      alt=""
                      fill
                      className="bg-white object-fit "
                    />
                  </div>
                </div>



              </div>
            </div>
          </div>

          <div
            className="
            py-4 pl-6 pr-4 mt-10
            bg-blue-50
            border-l-4 border-[#152869] rounded-r-lg
          "
          >
            <p
              className="text-lg leading-relaxed text-slate-800 font-open"
            >
              <span
                className="font-bold "
              >
                Outcome:
              </span>{" "}
              A sharper GTM strategy with better positioning, clearer value
              messaging, and a stronger route-to-market that reduces dependence on
              price competition.
            </p>
          </div>


          <button
            onClick={() =>
              window.open("https://calendar.app.google/c3QrzXirHFAa3SdQA", "_blank")
            }
            className="
                  px-6 py-2 mt-4
                  text-white
                  bg-[#152869]
                  rounded-lg
                "
          >
            Discovery Call
          </button>
        </motion.div>

        {/* Card 6: Automation Diagnosis */}
        <motion.div
          style={{ y: y1 }}
          className="sticky top-0 w-3/4 p-12 mx-auto bg-white border border-gray-200 shadow-2xl rounded-2xl"
        >
          <span
            id="people-performance"
            className="
            absolute -top-[400px] left-0
          "
          ></span>
          <h2
            className="
            text-3xl font-bold text-[#152869] font-open
          "
          >
            <span
              className="
              mr-2
              text-[#152869]
            "
            >
              06.
            </span>{" "}
            Automation Diagnosis
          </h2>

          <div
            className="flex flex-col gap-10 mt-10 mb-20 "
          >
            <p
              className="text-lg leading-relaxed text-slate-600"
            >
              Automation isn't just about technology - it's about identifying
              where manual processes are costing you time, money, and consistency.
              We help you find the right opportunities where automation delivers
              real ROI.
            </p>

            <div
              className="w-[100%] flex gap-4 mt-4 "
            >
              <div className="w-[60%]">


                <div
                  className="
                grid grid-cols-2
                w-[100%]
                col-span-2 gap-4
              "
                >
                  {/* Manual - Hand Stop */}
                  <div
                    className="px-4 py-2 space-y-2 border-r border-gray-200 "
                  >
                    <div>
                      <TbHandStop
                        size={32}
                        className="
                      text-[#152869]
                    "
                      />
                    </div>
                    <h4
                      className="
                    text-lg font-bold text-[#152869]
                  "
                    >
                      Manual-Heavy Processes
                    </h4>
                    <p
                      className="text-sm leading-snug text-slate-600"
                    >
                      Tasks consuming excessive time and prone to errors
                    </p>
                  </div>

                  {/* Repetitive - Repeat */}
                  <div
                    className="px-4 py-2 space-y-2 border-r border-gray-200 "
                  >
                    <div>
                      <TbRepeat
                        size={32}
                        className="
                      text-[#152869]
                    "
                      />
                    </div>
                    <h4
                      className="
                    text-lg font-bold text-[#152869]
                  "
                    >
                      Repetitive Tasks
                    </h4>
                    <p
                      className="text-sm leading-snug text-slate-600"
                    >
                      High-volume activities perfect for automation
                    </p>
                  </div>

                  {/* System Gaps - Plug X */}
                  <div
                    className="px-4 py-2 space-y-2 border-t border-r border-gray-200 "
                  >
                    <div>
                      <TbPlugX
                        size={32}
                        className="
                      text-[#152869]
                    "
                      />
                    </div>
                    <h4
                      className="
                    text-lg font-bold text-[#152869]
                  "
                    >
                      System Gaps
                    </h4>
                    <p
                      className="text-sm leading-snug text-slate-600"
                    >
                      Disconnected tools requiring manual data transfer
                    </p>
                  </div>

                  {/* Data Flow - Arrows Diff */}
                  <div
                    className="px-4 py-2 space-y-2 border-t border-r border-gray-200 "
                  >
                    <div>
                      <TbArrowsDiff
                        size={32}
                        className="
                      text-[#152869]
                    "
                      />
                    </div>
                    <h4
                      className="
                    text-lg font-bold text-[#152869]
                  "
                    >
                      Data Flow Issues
                    </h4>
                    <p
                      className="text-sm leading-snug text-slate-600"
                    >
                      Information bottlenecks slowing decisions
                    </p>
                  </div>

                  {/* Readiness - User Check */}
                  <div
                    className="px-4 py-2 space-y-2 border-t border-r border-gray-200 "
                  >
                    <div>
                      <TbUserCheck
                        size={32}
                        className="
                      text-[#152869]
                    "
                      />
                    </div>
                    <h4
                      className="
                    text-lg font-bold text-[#152869]
                  "
                    >
                      Team Readiness
                    </h4>
                    <p
                      className="text-sm leading-snug text-slate-600"
                    >
                      Capability and willingness to adopt new systems
                    </p>
                  </div>

                  {/* ROI - Calculator */}
                  <div
                    className="px-4 py-2 space-y-2 border-t border-r border-gray-200 "
                  >
                    <div>
                      <TbCalculator
                        size={32}
                        className="
                      text-[#152869]
                    "
                      />
                    </div>
                    <h4
                      className="
                    text-lg font-bold text-[#152869]
                  "
                    >
                      ROI Feasibility
                    </h4>
                    <p
                      className="text-sm leading-snug text-slate-600"
                    >
                      Cost-benefit analysis and payback timelines
                    </p>
                  </div>
                </div>


                <button
                  onClick={() =>
                    window.open("https://calendar.app.google/c3QrzXirHFAa3SdQA", "_blank")
                  }
                  className="
                  px-6 py-2 mt-4
                  text-white
                  bg-[#152869]
                  rounded-lg
                "
                >
                  Discovery Call
                </button>

              </div>

              <div className="w-[40%]">

                <div
                  className="
                w-[100%] h-[100%]
              "
                >
                  <div
                    className="
                  overflow-hidden
                  w-[80%] h-[110%]
                  rounded-xl
                  relative
                "
                  >
                    <Image
                      src="/assets/images/banner/Automation Audit (1).png"
                      alt=""
                      fill
                      className="bg-white object-fit "
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>



          <div
            className="
            py-4 pl-6 pr-4
            bg-blue-50
            border-l-4 border-[#152869] rounded-r-lg
          "
          >
            <p
              className="text-lg leading-relaxed text-slate-800 font-open"
            >
              <span
                className="font-bold "
              >
                Outcome:
              </span>{" "}
              An automation roadmap with prioritized opportunities, cost-saving
              projections, and a phased implementation plan that fits your budget
              and capacity.
            </p>
          </div>






        </motion.div>

        {/* Card 7: People & Organization Performance Audit */}
        <motion.div
          style={{ y: y1 }}
          className="sticky top-0 w-3/4 p-12 mx-auto bg-white border border-gray-200 shadow-2xl rounded-2xl"
        >
          <span
            id="productivity"
            className="
            absolute -top-[400px] left-0
          "
          ></span>
          <h2
            className="
            text-3xl font-bold text-[#152869] font-open
          "
          >
            <span
              className="
              mr-2
              text-[#152869]
            "
            >
              07.
            </span>{" "}
            People & Organization Performance Audit
          </h2>

          <div
            className="flex flex-col gap-10 mt-10 mb-20 "
          >
            <div
              className="space-y-2 "
            >
              <p
                className="mb-0 text-xl font-semibold text-slate-800"
              >
                What We Review
              </p>
              <p
                className="text-lg leading-relaxed text-slate-600"
              >
                Your people drive everything. When structure is unclear, roles
                overlap, or accountability is weak, even talented teams
                underperform. This audit examines how your organization is
                structured and how effectively people work together.
              </p>
            </div>

            <div
              className="w-[100%] flex gap-4 mt-4 "
            >

              <div className="w-[60%]">
                <div
                  className="
                grid grid-cols-2
                w-[100%]
                col-span-2 gap-4
              "
                >
                  {/* Org Structure - Hierarchy */}
                  <div
                    className="px-4 py-2 space-y-2 border-r border-gray-200 "
                  >
                    <div>
                      <TbHierarchy
                        size={32}
                        className="
                      text-[#152869]
                    "
                      />
                    </div>
                    <h4
                      className="
                    text-lg font-bold text-[#152869]
                  "
                    >
                      Organisation Structure & Reporting Clarity
                    </h4>
                    <p
                      className="text-sm leading-snug text-slate-600"
                    >
                      Who reports to whom and why
                    </p>
                  </div>

                  {/* Role - ID Card */}
                  <div
                    className="px-4 py-2 space-y-2 border-r border-gray-200 "
                  >
                    <div>
                      <TbId
                        size={32}
                        className="
                      text-[#152869]
                    "
                      />
                    </div>
                    <h4
                      className="
                    text-lg font-bold text-[#152869]
                  "
                    >
                      Role Defination
                    </h4>
                    <p
                      className="text-sm leading-snug text-slate-600"
                    >
                      Clear responsibilities vs overlap and gaps
                    </p>
                  </div>

                  {/* KPI - Target */}
                  <div
                    className="px-4 py-2 space-y-2 border-t border-r border-gray-200 "
                  >
                    <div>
                      <TbTargetArrow
                        size={32}
                        className="
                      text-[#152869]
                    "
                      />
                    </div>
                    <h4
                      className="
                    text-lg font-bold text-[#152869]
                  "
                    >
                      KPI & Accountability Systems
                    </h4>
                    <p
                      className="text-sm leading-snug text-slate-600"
                    >
                      What gets measured and tracked
                    </p>
                  </div>

                  {/* Skills - School/Book */}
                  <div
                    className="px-4 py-2 space-y-2 border-t border-r border-gray-200 "
                  >
                    <div>
                      <TbSchool
                        size={32}
                        className="
                      text-[#152869]
                    "
                      />
                    </div>
                    <h4
                      className="
                    text-lg font-bold text-[#152869]
                  "
                    >
                      Skill Gaps
                    </h4>
                    <p
                      className="text-sm leading-snug text-slate-600"
                    >
                      Where capability doesn't match requirements
                    </p>
                  </div>

                  {/* Culture - Heart Handshake */}
                  <div
                    className="px-4 py-2 mt-6 space-y-2 border-t border-r border-gray-200 "
                  >
                    <div>
                      <TbHeartHandshake
                        size={32}
                        className="
                      text-[#152869]
                    "
                      />
                    </div>
                    <h4
                      className="
                    text-lg font-bold text-[#152869]
                  "
                    >
                      Culture and Motivation
                    </h4>
                    <p
                      className="text-sm leading-snug text-slate-600"
                    >
                      What energizes or drains your teams
                    </p>
                  </div>

                  {/* Leadership - Crown */}
                  <div
                    className="px-4 py-2 mt-6 space-y-2 border-t border-r border-gray-200 "
                  >
                    <div>
                      <TbCrown
                        size={32}
                        className="
                      text-[#152869]
                    "
                      />
                    </div>
                    <h4
                      className="
                    text-lg font-bold text-[#152869]
                  "
                    >
                      Leadership Bandwidth
                    </h4>
                    <p
                      className="text-sm leading-snug text-slate-600"
                    >
                      Whether leaders can focus on strategy or are stuck in daily
                      firefighting
                    </p>
                  </div>
                </div>

                <button
                  onClick={() =>
                    window.open("https://calendar.app.google/c3QrzXirHFAa3SdQA", "_blank")
                  }
                  className="
                  px-6 py-2 mt-4
                  text-white
                  bg-[#152869]
                  rounded-lg
                "
                >
                  Discovery Call
                </button>
              </div>


              <div
                className="
                w-[40%]
              "
              >


                <div
                  className="
                w-[100%] h-[100%]
              "
                >

                  <div
                    className="
                  overflow-hidden
                  w-[90%] h-[100%]
                  rounded-xl
                  relative
                "
                  >
                    <Image
                      src="/assets/images/banner/People Organisational Performance Audit.png"
                      alt=""
                      fill
                      className="bg-white object-fit "
                    />
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div
            className="
            py-4 pl-6 pr-4 mt-10
            bg-blue-50
            border-l-4 border-[#152869] rounded-r-lg
          "
          >
            <p
              className="text-lg leading-relaxed text-slate-800 font-open"
            >
              <span
                className="font-bold "
              >
                Outcome:
              </span>{" "}
              A practical blueprint to improve team alignment, build missing
              capabilities, strengthen accountability, and lift overall
              performance.
            </p>
          </div>
        </motion.div>

        {/* Card 8: Productivity Audit */}
        <motion.div
          style={{ y: y3 }}
          className="sticky top-0 w-3/4 p-12 mx-auto bg-white border border-gray-200 shadow-2xl rounded-2xl"
        >
          <span
            id="sales-process"
            className="
            absolute -top-[500px] left-0
          "
          ></span>
          <h2
            className="
            text-3xl font-bold text-[#152869] font-open
          "
          >
            <span
              className="
              mr-2
              text-[#152869]
            "
            >
              08.
            </span>{" "}
            Productivity Audit
          </h2>

          <div
            className="flex flex-col gap-10 mt-10 mb-10 "
          >
            <p
              className="text-lg leading-relaxed text-slate-600"
            >
              Productivity isn't just about working harder - it's about
              eliminating waste, improving workflow, and ensuring every shift
              delivers consistent output. We examine the details that make the
              difference.
            </p>

            <div
              className="w-[100%] flex gap-4 mt-4 "
            >

              <div className="w-[60%]">



                <div
                  className="
                grid grid-cols-2
                w-[100%]
                col-span-2 gap-4
              "
                >
                  {/* Manpower - Users */}
                  <div
                    className="px-4 py-2 space-y-2 border-r border-gray-200 "
                  >
                    <div>
                      <TbUsers
                        size={32}
                        className="
                      text-[#152869]
                    "
                      />
                    </div>
                    <h4
                      className="
                    text-lg font-bold text-[#152869]
                  "
                    >
                      Manpower Deployment
                    </h4>
                    <p
                      className="text-sm leading-snug text-slate-600"
                    >
                      Whether you have the right people in the right places at the
                      right times
                    </p>
                  </div>

                  {/* Shift - Clock 24 */}
                  <div
                    className="px-4 py-2 space-y-2 border-r border-gray-200 "
                  >
                    <div>
                      <TbClock24
                        size={32}
                        className="
                      text-[#152869]
                    "
                      />
                    </div>
                    <h4
                      className="
                    text-lg font-bold text-[#152869]
                  "
                    >
                      Shift Output
                    </h4>
                    <p
                      className="text-sm leading-snug text-slate-600"
                    >
                      Performance variations between shifts and why they occur
                    </p>
                  </div>

                  {/* Time Motion - Stopwatch */}
                  <div
                    className="px-4 py-2 space-y-2 border-t border-r border-gray-200 "
                  >
                    <div>
                      <TbStopwatch
                        size={32}
                        className="
                      text-[#152869]
                    "
                      />
                    </div>
                    <h4
                      className="
                    text-lg font-bold text-[#152869]
                  "
                    >
                      Time-and-Motion Analysis
                    </h4>
                    <p
                      className="text-sm leading-snug text-slate-600"
                    >
                      How long tasks actually take versus how long they should take
                    </p>
                  </div>

                  {/* Delays - Hourglass */}
                  <div
                    className="px-4 py-2 space-y-2 border-t border-r border-gray-200 "
                  >
                    <div>
                      <TbHourglassLow
                        size={32}
                        className="
                      text-[#152869]
                    "
                      />
                    </div>
                    <h4
                      className="
                    text-lg font-bold text-[#152869]
                  "
                    >
                      Delay Hotspots
                    </h4>
                    <p
                      className="text-sm leading-snug text-slate-600"
                    >
                      Where work stops, slows, or waits unnecessarily
                    </p>
                  </div>

                  {/* Layout - Layout */}
                  <div
                    className="px-4 py-2 mt-6 space-y-2 border-t border-r border-gray-200 "
                  >
                    <div>
                      <TbLayout2
                        size={32}
                        className="
                      text-[#152869]
                    "
                      />
                    </div>
                    <h4
                      className="
                    text-lg font-bold text-[#152869]
                  "
                    >
                      Layout & Workflow
                    </h4>
                    <p
                      className="text-sm leading-snug text-slate-600"
                    >
                      Whether your physical setup supports or hinders efficiency
                    </p>
                  </div>

                  {/* Utilization - Gauge */}
                  <div
                    className="px-4 py-2 mt-6 space-y-2 border-t border-r border-gray-200 "
                  >
                    <div>
                      <TbGauge
                        size={32}
                        className="
                      text-[#152869]
                    "
                      />
                    </div>
                    <h4
                      className="
                    text-lg font-bold text-[#152869]
                  "
                    >
                      Utilization vs Ideal Output
                    </h4>
                    <p
                      className="text-sm leading-snug text-slate-600"
                    >
                      Actual capacity usage compared to theoretical maximum
                    </p>
                  </div>
                </div>


                 <button
                  onClick={() =>
                    window.open("https://calendar.app.google/c3QrzXirHFAa3SdQA", "_blank")
                  }
                  className="
                  px-6 py-2 mt-4
                  text-white
                  bg-[#152869]
                  rounded-lg
                "
                >
                  Discovery Call
                </button>

              </div>

              
              <div
                className="
                w-[40%]
              "
              >

                 <div
                  className="
                w-[100%] h-[100%]
              "
                >
                <div
                  className="
                  overflow-hidden
                  w-[90%] h-[110%]
                  rounded-xl
                  relative
                "
                >
                  <Image
                    src="/assets/images/banner/Productivity Audit.png"
                    alt=""
                    fill
                    className="object-contain bg-white "
                  />
                </div>
                </div>
                
              </div>
            </div>
          </div>

          <div
            className="
            py-4 pl-6 pr-4
            bg-blue-50
            border-l-4 border-[#152869] rounded-r-lg
          "
          >
            <p
              className="text-lg leading-relaxed text-slate-800 font-open"
            >
              <span
                className="font-bold "
              >
                Outcome:
              </span>{" "}
              A detailed plan to lift productivity, reduce idle time, improve
              shift consistency, and increase output without adding headcount.
            </p>
          </div>
        </motion.div>
      </div>

      {/* ================= MOBILE VIEW (Visible only on small screens) ================= */}
      <div className="flex flex-col w-full px-4 py-12 space-y-8 bg-gray-100 max-md:space-y-2 max-md:p-6 max-md:bg-transparent md:hidden">

        {/* Mobile Card 1: Sales Process Audit */}
        <div className="overflow-hidden bg-white border border-gray-200 shadow-lg rounded-xl">
          <div className="relative w-full h-48 bg-gray-50 max-md:hidden">
            <Image
              src="/assets/images/banner/Sales Process Audit.png"
              alt="Sales Audit"
              fill
              className="object-contain p-4"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-[#152869] font-open mb-3">
              <span className="mr-2 opacity-80">01.</span> Sales Process Audit
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-slate-600">
              We examine every stage to identify where opportunities are being lost and where improvements will have the biggest impact.
            </p>

            {/* Checklist */}
            <div className="mb-6 space-y-3">
              {[
                "Lead sources and funnel quality",
                "Conversion patterns and revenue leaks",
                "Pricing discipline & negotiation",
                "Follow-up & relationship management",
                "Channel partner health",
                "Sales team structure & KPIs"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="p-1 mt-0.5 bg-blue-100 rounded-full shrink-0">
                    <FaCheck className="w-2.5 h-2.5 text-[#152869]" />
                  </div>
                  <p className="text-sm font-medium text-slate-700">{item}</p>
                </div>
              ))}
            </div>

            {/* Outcome Box */}
            <div className="bg-blue-50 border-l-4 border-[#152869] p-4 rounded-r-lg mb-6">
              <p className="text-sm text-slate-800">
                <span className="font-bold">Outcome:</span> A clear view of gaps and practical steps to accelerate revenue growth.
              </p>
            </div>

            <button
              onClick={() => window.open("https://forms.gle/8KtDGCwVx9hPWDtM8", "_blank")}
              className="w-full py-3 text-white bg-[#152869] rounded-lg font-medium shadow-md active:scale-95 transition-transform"
            >
              Free Audit
            </button>
          </div>
        </div>

        {/* Mobile Card 2: Business Health Check */}
        <div className="overflow-hidden bg-white border border-gray-200 shadow-lg rounded-xl">
          <div className="relative w-full h-48 bg-gray-50 max-md:hidden">
            <Image
              src="/assets/images/banner/Bisiness Health Chck.png"
              alt="Business Health"
              fill
              className="object-contain p-4 "
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-[#152869] font-open mb-3">
              <span className="mr-2 opacity-80">02.</span> Business Health Check
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-slate-600">
              A 360-degree view of your entire business to understand how everything works together.
            </p>

            {/* Checklist */}
            <div className="mb-6 space-y-3">
              {[
                "Revenue trends & margin behavior",
                "Cost structure & efficiency",
                "Leadership alignment",
                "Department performance",
                "Customer dependency risks",
                "Competitive positioning"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="p-1 mt-0.5 bg-blue-100 rounded-full shrink-0">
                    <FaCheck className="w-2.5 h-2.5 text-[#152869]" />
                  </div>
                  <p className="text-sm font-medium text-slate-700">{item}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-[#152869] p-4 rounded-r-lg mb-6">
              <p className="text-sm text-slate-800">
                <span className="font-bold">Outcome:</span> A complete scorecard showing strengths, gaps, risks, and opportunities.
              </p>
            </div>

            <button
              onClick={() => window.open("https://forms.gle/wCL27o9zYgMJ9mjw9", "_blank")}
              className="w-full py-3 text-white bg-[#152869] rounded-lg font-medium shadow-md active:scale-95 transition-transform"
            >
              Free Audit
            </button>
          </div>
        </div>

        {/* Mobile Card 3: Finance & Cashflow */}
        <div className="overflow-hidden bg-white border border-gray-200 shadow-lg rounded-xl">
          <div className="relative w-full h-48 bg-gray-50 max-md:hidden">
            <Image
              src="/assets/images/banner/FinanceCashflowAudit.png"
              alt="Finance Audit"
              fill
              className="object-contain p-4"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-[#152869] font-open mb-3">
              <span className="mr-2 opacity-80">03.</span> Finance & Cashflow
            </h2>

            {/* Vertical Icon List for Mobile */}
            <div className="mt-4 mb-6 space-y-4">
              <div className="flex items-start gap-4">
                <TbClockDollar size={24} className="text-[#152869] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#152869] text-sm">Receivables</h4>
                  <p className="text-xs text-slate-600">Collection patterns & recovery</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <TbFileInvoice size={24} className="text-[#152869] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#152869] text-sm">Payables</h4>
                  <p className="text-xs text-slate-600">Optimize payment timing</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <TbRefresh size={24} className="text-[#152869] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#152869] text-sm">Working Capital</h4>
                  <p className="text-xs text-slate-600">Shorten cash conversion</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <TbChartPie size={24} className="text-[#152869] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#152869] text-sm">Real vs Booked Cost</h4>
                  <p className="text-xs text-slate-600">Reveal true profitability</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <TbDropletOff size={24} className="text-[#152869] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#152869] text-sm">Leakages</h4>
                  <p className="text-xs text-slate-600">Eliminate waste & duplicates</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-[#152869] p-4 rounded-r-lg mb-6">
              <p className="text-sm text-slate-800">
                <span className="font-bold">Outcome:</span> A cashflow action plan that frees blocked money and strengthens control.
              </p>
            </div>

            <button
              onClick={() => window.open("https://forms.gle/Zdz2CDrV3qnGQrcL6", "_blank")}
              className="w-full py-3 text-white bg-[#152869] rounded-lg font-medium shadow-md active:scale-95 transition-transform"
            >
              Free Audit
            </button>
          </div>
        </div>

        {/* Mobile Card 4: Operations Excellence */}
        <div className="overflow-hidden bg-white border border-gray-200 shadow-lg rounded-xl">
          <div className="relative w-full h-48 bg-gray-50 max-md:hidden">
            <Image
              src="/assets/images/banner/Operations Excellence Audits.png"
              alt="Operations Audit"
              fill
              className="object-contain p-4"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-[#152869] font-open mb-3">
              <span className="mr-2 opacity-80">04.</span> Operations Excellence
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-slate-600">
              We dive deep into your production environment to understand what's causing delays and where capacity is wasted.
            </p>

            <div className="mb-6 space-y-3">
              {[
                "Production planning efficiency",
                "Downtime reasons (planned/unplanned)",
                "Quality issues & rework costs",
                "Machine utilization rates",
                "Material flow & inventory accuracy",
                "Maintenance & reliability"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="p-1 mt-0.5 bg-blue-100 rounded-full shrink-0">
                    <FaCheck className="w-2.5 h-2.5 text-[#152869]" />
                  </div>
                  <p className="text-sm font-medium text-slate-700">{item}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-[#152869] p-4 rounded-r-lg mb-6">
              <p className="text-sm text-slate-800">
                <span className="font-bold">Outcome:</span> A roadmap to lift output, reduce rework, and improve on-time delivery.
              </p>
            </div>

            <button
              onClick={() => window.open("https://forms.gle/mmzNqBKKk8ruHy9C9", "_blank")}
              className="w-full py-3 text-white bg-[#152869] rounded-lg font-medium shadow-md active:scale-95 transition-transform"
            >
              Free Audit
            </button>
          </div>
        </div>

        {/* Mobile Card 5: GTM Audit */}
        <div className="overflow-hidden bg-white border border-gray-200 shadow-lg rounded-xl">
          <div className="relative w-full h-48 bg-gray-50 max-md:hidden" >
            <Image
              src="/assets/images/banner/Go-To-Market Audit.png"
              alt="GTM Audit"
              fill
              className="object-contain p-4"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-[#152869] font-open mb-3">
              <span className="mr-2 opacity-80">05.</span> Go-To-Market Audit
            </h2>

            <div className="mt-4 mb-6 space-y-4">
              <div className="flex items-start gap-4">
                <TbPuzzle size={24} className="text-[#152869] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#152869] text-sm">Product-Market Fit</h4>
                  <p className="text-xs text-slate-600">Solving the right problems?</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <TbUsersGroup size={24} className="text-[#152869] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#152869] text-sm">Customer Segments</h4>
                  <p className="text-xs text-slate-600">Most profitable targets</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <TbTag size={24} className="text-[#152869] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#152869] text-sm">Pricing Logic</h4>
                  <p className="text-xs text-slate-600">Value vs. Competition</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <TbSitemap size={24} className="text-[#152869] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#152869] text-sm">Channel Structure</h4>
                  <p className="text-xs text-slate-600">Reach effectiveness</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-[#152869] p-4 rounded-r-lg mb-6">
              <p className="text-sm text-slate-800">
                <span className="font-bold">Outcome:</span> A sharper GTM strategy with better positioning and stronger route-to-market.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Card 6: Automation Diagnosis */}
        <div className="overflow-hidden bg-white border border-gray-200 shadow-lg rounded-xl">
          <div className="relative w-full h-48 bg-gray-50 max-md:hidden">
            <Image
              src="/assets/images/banner/Automation Audit (1).png"
              alt="Automation Audit"
              fill
              className="object-contain p-4"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-[#152869] font-open mb-3">
              <span className="mr-2 opacity-80">06.</span> Automation Diagnosis
            </h2>

            <div className="mt-4 mb-6 space-y-4">
              <div className="flex items-start gap-4">
                <TbHandStop size={24} className="text-[#152869] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#152869] text-sm">Manual Processes</h4>
                  <p className="text-xs text-slate-600">Time-consuming tasks</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <TbRepeat size={24} className="text-[#152869] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#152869] text-sm">Repetitive Tasks</h4>
                  <p className="text-xs text-slate-600">High-volume activities</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <TbPlugX size={24} className="text-[#152869] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#152869] text-sm">System Gaps</h4>
                  <p className="text-xs text-slate-600">Disconnected tools</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <TbCalculator size={24} className="text-[#152869] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#152869] text-sm">ROI Feasibility</h4>
                  <p className="text-xs text-slate-600">Cost-benefit analysis</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-[#152869] p-4 rounded-r-lg mb-6">
              <p className="text-sm text-slate-800">
                <span className="font-bold">Outcome:</span> An automation roadmap with prioritized opportunities and cost-savings.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Card 7: People & Org */}
        <div className="overflow-hidden bg-white border border-gray-200 shadow-lg rounded-xl">
          <div className="relative w-full h-48 bg-gray-50 max-md:hidden">
            <Image
              src="/assets/images/banner/People Organisational Performance Audit.png"
              alt="People Audit"
              fill
              className="object-contain p-4"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-[#152869] font-open mb-3">
              <span className="mr-2 opacity-80">07.</span> People & Organization
            </h2>

            <div className="mt-4 mb-6 space-y-4">
              <div className="flex items-start gap-4">
                <TbHierarchy size={24} className="text-[#152869] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#152869] text-sm">Org Structure</h4>
                  <p className="text-xs text-slate-600">Reporting clarity</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <TbId size={24} className="text-[#152869] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#152869] text-sm">Role Definition</h4>
                  <p className="text-xs text-slate-600">Responsibility vs Gaps</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <TbTargetArrow size={24} className="text-[#152869] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#152869] text-sm">KPIs</h4>
                  <p className="text-xs text-slate-600">Tracking accountability</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <TbHeartHandshake size={24} className="text-[#152869] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#152869] text-sm">Culture</h4>
                  <p className="text-xs text-slate-600">Team motivation</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-[#152869] p-4 rounded-r-lg mb-6">
              <p className="text-sm text-slate-800">
                <span className="font-bold">Outcome:</span> A blueprint to build capabilities, strengthen accountability, and lift performance.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Card 8: Productivity Audit */}
        <div className="overflow-hidden bg-white border border-gray-200 shadow-lg rounded-xl">
          <div className="relative w-full h-48 bg-gray-50 max-md:hidden">
            <Image
              src="/assets/images/banner/Productivity Audit.png"
              alt="Productivity Audit"
              fill
              className="object-contain p-4"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-[#152869] font-open mb-3">
              <span className="mr-2 opacity-80">08.</span> Productivity Audit
            </h2>

            <div className="mt-4 mb-6 space-y-4">
              <div className="flex items-start gap-4">
                <TbUsers size={24} className="text-[#152869] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#152869] text-sm">Manpower</h4>
                  <p className="text-xs text-slate-600">Deployment efficiency</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <TbClock24 size={24} className="text-[#152869] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#152869] text-sm">Shift Output</h4>
                  <p className="text-xs text-slate-600">Consistency across shifts</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <TbStopwatch size={24} className="text-[#152869] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#152869] text-sm">Time-Motion</h4>
                  <p className="text-xs text-slate-600">Task duration analysis</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <TbGauge size={24} className="text-[#152869] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#152869] text-sm">Utilization</h4>
                  <p className="text-xs text-slate-600">Actual vs Ideal output</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-[#152869] p-4 rounded-r-lg mb-6">
              <p className="text-sm text-slate-800">
                <span className="font-bold">Outcome:</span> A detailed plan to lift productivity and output without adding headcount.
              </p>
            </div>
          </div>
        </div>

      </div>
    </>


  );



}
