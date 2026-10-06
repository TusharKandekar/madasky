"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { IoTriangleSharp } from "react-icons/io5";
import Image from "next/image";
import {
    FileClock, ClipboardCheck, Recycle, BarChart4,
    TrendingUp,
    AlertTriangle
} from "lucide-react";

export default function CardStack3() {
    const { scrollYProgress } = useScroll();
    const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
    const y2 = useTransform(scrollYProgress, [0, 1], ["50%", "-80%"]);

    return (
        <div className="relative h-auto max-md:hidden">
            {/* Card 1 */}
            <motion.div
                style={{ y: y1 }}
                className="sticky w-3/4 p-10 mx-auto bg-[#152869] shadow-xl top-40 rounded-xl"
            >
                <h2 className="text-2xl font-bold text-white underline font-open">
                    01. Sales Process Audit
                </h2>

                <div className="flex flex-row gap-12 mt-6 mb-20">

                    <div className="w-[50%] flex flex-col gap-4">

                        <h3 className="text-xl font-semibold text-white">What We Check</h3>


                        <p className="mb-2 text-lg font-medium text-white font-open">
                            Your sales process either drives growth or holds it back. We
                            examine every stage to identify where opportunities are being lost
                            and where improvements will have the biggest impact.
                        </p>

                        <div>


                            {/* <p className="mb-2 text-lg font-medium text-white font-open">
                                <span className="font-semibold underline underline-offset-2">Our answer:</span> AquaFree™ - our proprietary waterless dyeing technology.
                            </p> */}


                            <div className="flex flex-col justify-center w-full gap-2 pl-4">

                                <div className="flex flex-row gap-4">
                                    <FaCheck className="flex-shrink-0 w-4 h-4 mt-1 text-white" />
                                    <p className="text-base font-medium leading-snug text-white font-open">
                                        Lead sources and funnel quality - where your best
                                        opportunities originate
                                    </p>
                                </div>

                                <div className="flex flex-row gap-4">
                                    <FaCheck className="flex-shrink-0 w-4 h-4 mt-1 text-white" />
                                    <p className="text-base font-medium leading-snug text-white font-open">
                                        Conversion patterns and revenue leaks - what's falling
                                        through the cracks
                                    </p>
                                </div>


                                <div className="flex flex-row gap-4">
                                    <FaCheck className="flex-shrink-0 w-4 h-4 mt-1 text-white" />
                                    <p className="text-base font-medium leading-snug text-white font-open">
                                        Pricing discipline and negotiation effectiveness
                                    </p>
                                </div>

                                <div className="flex flex-row gap-4">
                                    <FaCheck className="flex-shrink-0 w-4 h-4 mt-1 text-white" />
                                    <p className="text-base font-medium leading-snug text-white font-open">
                                        Follow-up systems and relationship management practices
                                    </p>
                                </div>



                                <div className="flex flex-row gap-4">
                                    <FaCheck className="flex-shrink-0 w-4 h-4 mt-1 text-white" />
                                    <p className="text-base font-medium leading-snug text-white font-open">
                                        Channel partner health and performance
                                    </p>
                                </div>


                                <div className="flex flex-row gap-4">
                                    <FaCheck className="flex-shrink-0 w-4 h-4 mt-1 text-white" />
                                    <p className="text-base font-medium leading-snug text-white font-open">
                                        Sales team structure, KPIs, and accountability
                                    </p>
                                </div>


                            </div>



                            <div className="pl-4 mt-10 border-l-2 border-gray-300">
                                <p className="text-lg text-white font-openleading-relaxed">

                                    Outcome: A clear view of gaps, opportunities, and practical steps to
                                    strengthen your sales engine and accelerate revenue growth.

                                </p>
                            </div>

                        </div>





                    </div>



                    <div className="w-[50%]">




                        <div className="relative w-[400px] h-[400px]">
                            <Image
                                src="/assets/images/AuditMatter.png"
                                alt=""
                                fill
                                className="object-cover"
                            />
                        </div>







                    </div>
                </div>

                {/* <div className="pl-4 mt-10 border-l-2 border-gray-300">
                    <p className="text-xl text-white font-openleading-relaxed">

                        This is not just a technology - it's a lifeline for water-scarce regions.

                    </p>
                </div> */}
            </motion.div>

            {/* Card 2 */}
            <motion.div
                style={{ y: y1 }}
                className="sticky w-3/4 p-10 mx-auto bg-gray-800 shadow-xl top-40 rounded-xl"
            >
                <h2 className="text-2xl font-bold text-white underline font-open">
                    02. Business Health Check
                </h2>

                <div className="flex flex-row-reverse gap-12 mt-6">

                    <div className="w-[50%] flex flex-col gap-4">

                        {/* <h3 className="text-xl font-semibold text-white">What We Check</h3> */}


                        <p className="mb-2 text-lg font-medium text-white font-open">
                            This comprehensive diagnostic provides a 360-degree
                            view of your entire business. It's designed for owners
                            who want to understand the full picture - not just
                            individual departments, but how everything works
                            together.
                        </p>

                        <div>


                            <p className="mb-2 text-xl font-semibold text-white font-open">
                                What This Covers
                            </p>


                            <div className="flex flex-col justify-center w-full gap-2 pl-4">

                                <div className="flex flex-row gap-4">
                                    <FaCheck className="flex-shrink-0 w-4 h-4 mt-1 text-white" />
                                    <p className="text-base font-medium leading-snug text-white font-open">
                                        Revenue trends and margin behavior over time
                                    </p>
                                </div>

                                <div className="flex flex-row gap-4">
                                    <FaCheck className="flex-shrink-0 w-4 h-4 mt-1 text-white" />
                                    <p className="text-base font-medium leading-snug text-white font-open">
                                        Cost structure analysis and efficiency ratios
                                    </p>
                                </div>


                                <div className="flex flex-row gap-4">
                                    <FaCheck className="flex-shrink-0 w-4 h-4 mt-1 text-white" />
                                    <p className="text-base font-medium leading-snug text-white font-open">
                                        Leadership alignment on strategy and priorities
                                    </p>
                                </div>

                                <div className="flex flex-row gap-4">
                                    <FaCheck className="flex-shrink-0 w-4 h-4 mt-1 text-white" />
                                    <p className="text-base font-medium leading-snug text-white font-open">
                                        Department performance and cross-functional
                                        coordination
                                    </p>
                                </div>



                                <div className="flex flex-row gap-4">
                                    <FaCheck className="flex-shrink-0 w-4 h-4 mt-1 text-white" />
                                    <p className="text-base font-medium leading-snug text-white font-open">
                                        Customer dependency risks and concentration
                                    </p>
                                </div>


                                <div className="flex flex-row gap-4">
                                    <FaCheck className="flex-shrink-0 w-4 h-4 mt-1 text-white" />
                                    <p className="text-base font-medium leading-snug text-white font-open">
                                        Overall competitive positioning and market
                                        strength
                                    </p>
                                </div>


                            </div>



                            <div className="pl-4 mt-10 border-l-2 border-gray-300">
                                <p className="text-lg text-white font-openleading-relaxed">

                                    Outcome: A complete health scorecard showing your strengths, critical gaps, hidden risks, and prioritized improvement opportunities.

                                </p>
                            </div>

                        </div>





                    </div>



                    <div className="w-[50%]">




                        <div className="relative w-[400px] h-[400px]">
                            <Image
                                src="/assets/images/AuditMatter.png"
                                alt=""
                                fill
                                className="object-cover"
                            />
                        </div>







                    </div>
                </div>


            </motion.div>

            {/* Card 3 */}
            <motion.div
                style={{ y: y1 }}
                className="sticky w-3/4 p-10 mx-auto bg-[#152869] shadow-xl top-40 rounded-xl"
            >
                <h2 className="text-2xl font-bold text-white font-open">
                    03. Finance & Cashflow Audit
                </h2>

                <div className="flex flex-row gap-12 my-20">

                    <div className="w-[100%] grid grid-cols-3 gap-4">


                        <div className="px-4 space-y-4 border-r border-white">

                            <div>
                                <FileClock size={32} color="white" />
                            </div>

                            <h4 className="text-xl font-semibold text-white">
                                Receivables Age & Overdue
                                Blocks
                            </h4>

                            <p className="text-lg leading-5 text-gray-200">Understand collection patterns and
                                recovery opportunities
                            </p>
                        </div>



                        <div className="px-4 space-y-4 border-r border-white">
                            <div>
                                <ClipboardCheck size={32} color="white" />
                            </div>

                            <h4 className="text-xl font-semibold text-white">
                                Payables Discipline
                            </h4>

                            <p className="text-lg leading-5 text-gray-200">Optimize payment timing without
                                damaging supplier relationships
                            </p>
                        </div>




                        <div className="space-y-4">
                            <div>
                                <Recycle size={32} color="white" />
                            </div>

                            <h4 className="text-xl font-semibold text-white">
                                Working Capital Cycle
                            </h4>

                            <p className="text-lg leading-5 text-gray-200">Shorten cash conversion and improve
                                liquidity
                            </p>
                        </div>


                        <div className="px-4 mt-10 space-y-4 border-r border-white">
                            <div>
                                <BarChart4 size={32} color="white" />
                            </div>
                            <h4 className="text-xl font-semibold text-white">
                                Real Cost vs Booked Cost
                            </h4>

                            <p className="text-lg leading-5 text-gray-200">Reveal hidden costs and true profitability
                                by product
                            </p>
                        </div>



                        <div className="px-4 mt-10 space-y-4 border-r border-white">
                            <div>
                                <TrendingUp size={32} color="white" />
                            </div>
                            <h4 className="text-xl font-semibold text-white">
                                Budgeting & Forecasting
                            </h4>

                            <p className="text-lg leading-5 text-gray-200">Build predictable financial planning
                                systems
                            </p>
                        </div>




                        <div className="mt-10 space-y-4">
                            <div>
                                <AlertTriangle size={32} color="white" />
                            </div>
                            <h4 className="text-xl font-semibold text-white">
                                Leakages & Duplicate Spends
                            </h4>

                            <p className="text-lg leading-5 text-gray-200">Eliminate waste and duplicate expenses
                            </p>
                        </div>









                    </div>




                </div>

                <div className="pl-4 mt-10 border-l-2 border-gray-300">
                    <p className="text-xl text-white font-openleading-relaxed">

                        A cashflow action plan that frees blocked money, eliminates waste, and strengthens financial control across the business.


                    </p>
                </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div
                style={{ y: y1 }}
                className="sticky w-3/4 p-10 mx-auto bg-gray-800 shadow-xl top-40 rounded-xl"
            >

                <div>

                    <h2 className="text-2xl font-bold text-white underline font-open">
                        04. Operations Excellence Audit
                    </h2>

                    <div className="flex flex-row-reverse gap-12 mt-6">

                        <div className="w-[50%] flex flex-col gap-4">

                            <h3 className="text-xl font-semibold text-white">What We Assess</h3>


                            <p className="mb-2 text-lg font-medium text-white font-open">
                                Operations is where plans meet reality. We dive deep
                                into your production environment to understand what's
                                working, what's causing delays, and where capacity is
                                being wasted.
                            </p>

                            <div>


                                {/* <p className="mb-2 text-xl font-semibold text-white font-open">
                                What This Covers
                            </p> */}


                                <div className="flex flex-col justify-center w-full gap-2 pl-4">

                                    <div className="flex flex-row gap-4">
                                        <FaCheck className="flex-shrink-0 w-4 h-4 mt-1 text-white" />
                                        <p className="text-base font-medium leading-snug text-white font-open">
                                            Production planning and load balancing efficiency
                                        </p>
                                    </div>

                                    <div className="flex flex-row gap-4">
                                        <FaCheck className="flex-shrink-0 w-4 h-4 mt-1 text-white" />
                                        <p className="text-base font-medium leading-snug text-white font-open">
                                            Downtime reasons - planned, unplanned, and hidden
                                        </p>
                                    </div>


                                    <div className="flex flex-row gap-4">
                                        <FaCheck className="flex-shrink-0 w-4 h-4 mt-1 text-white" />
                                        <p className="text-base font-medium leading-snug text-white font-open">
                                            Quality issues and the true cost of rework
                                        </p>
                                    </div>

                                    <div className="flex flex-row gap-4">
                                        <FaCheck className="flex-shrink-0 w-4 h-4 mt-1 text-white" />
                                        <p className="text-base font-medium leading-snug text-white font-open">
                                            Machine utilization rates and bottlenecks
                                        </p>
                                    </div>



                                    <div className="flex flex-row gap-4">
                                        <FaCheck className="flex-shrink-0 w-4 h-4 mt-1 text-white" />
                                        <p className="text-base font-medium leading-snug text-white font-open">
                                            Material flow, WIP levels, and inventory accuracy
                                        </p>
                                    </div>


                                    <div className="flex flex-row gap-4">
                                        <FaCheck className="flex-shrink-0 w-4 h-4 mt-1 text-white" />
                                        <p className="text-base font-medium leading-snug text-white font-open">
                                            Maintenance patterns and equipment reliability
                                        </p>
                                    </div>


                                </div>



                                <div className="pl-4 mt-10 border-l-2 border-gray-300">
                                    <p className="text-lg text-white font-openleading-relaxed">

                                        Outcome: A roadmap to lift output, reduce rework, stabilize operations, and improve on-time delivery performance.

                                    </p>
                                </div>

                            </div>





                        </div>



                        <div className="w-[50%]">




                            <div className="relative w-[400px] h-[400px]">
                                <Image
                                    src="/assets/images/AuditMatter.png"
                                    alt=""
                                    fill
                                    className="object-cover"
                                />
                            </div>







                        </div>
                    </div>
                </div>



            </motion.div>

            {/* Card 5  */}
            <motion.div
                style={{ y: y1 }}
                className="sticky w-3/4 p-10 mx-auto bg-[#152869] shadow-xl top-40 rounded-xl"
            >
                <h2 className="text-2xl font-bold text-white font-open">
                    05. Go-To-Market (GTM) Audit
                </h2>

                <div className="flex flex-col gap-12 mt-10 mb-20">

                    <p className="text-lg text-white">Your GTM strategy determines whether you're competing on value or just on price. We evaluate how well
                        your products align with market needs and how effectively you're reaching your best customers.</p>

                    <div className="w-[100%] grid grid-cols-3 gap-4">


                        <div className="px-4 space-y-4 border-r border-white">

                            <div>
                                <FileClock size={32} color="white" />
                            </div>

                            <h4 className="text-xl font-semibold text-white">
                                Product-Market Fit
                            </h4>

                            <p className="text-lg leading-5 text-gray-200">Are you solving the right
                                problems for the right customers?
                            </p>
                        </div>



                        <div className="px-4 space-y-4 border-r border-white">
                            <div>
                                <ClipboardCheck size={32} color="white" />
                            </div>

                            <h4 className="text-xl font-semibold text-white">
                                Customer Segments
                            </h4>

                            <p className="text-lg leading-5 text-gray-200">Which segments are most profitable and how to expand there
                            </p>
                        </div>




                        <div className="space-y-4">
                            <div>
                                <Recycle size={32} color="white" />
                            </div>

                            <h4 className="text-xl font-semibold text-white">
                                Pricing Logic
                            </h4>

                            <p className="text-lg leading-5 text-gray-200">Whether your pricing reflects value or just matches competition
                            </p>
                        </div>


                        <div className="px-4 mt-10 space-y-4 border-r border-white">
                            <div>
                                <BarChart4 size={32} color="white" />
                            </div>
                            <h4 className="text-xl font-semibold text-white">
                                Channel Structure
                            </h4>

                            <p className="text-lg leading-5 text-gray-200">How effectively your channels reach and serve target customers
                            </p>
                        </div>



                        <div className="px-4 mt-10 space-y-4 border-r border-white">
                            <div>
                                <TrendingUp size={32} color="white" />
                            </div>
                            <h4 className="text-xl font-semibold text-white">
                                Competitor Moves
                            </h4>

                            <p className="text-lg leading-5 text-gray-200">What competitors are doing and where opportunities exist
                            </p>
                        </div>




                        <div className="mt-10 space-y-4">
                            <div>
                                <AlertTriangle size={32} color="white" />
                            </div>
                            <h4 className="text-xl font-semibold text-white">
                                Brand Visibility
                            </h4>

                            <p className="text-lg leading-5 text-gray-200">How prospects perceive you
                                and discover your offerings</p>
                        </div>









                    </div>




                </div>

                <div className="pl-4 mt-10 border-l-2 border-gray-300">
                    <p className="text-xl text-white font-openleading-relaxed">

                        A sharper GTM strategy with better positioning, clearer value messaging, and a stronger route-
                        to-market that reduces dependence on price competition.


                    </p>
                </div>
            </motion.div>


            {/* Card 6  */}
            <motion.div
                style={{ y: y1 }}
                className="sticky w-3/4 p-10 mx-auto bg-gray-800 shadow-xl top-40 rounded-xl"
            >
                <h2 className="text-2xl font-bold text-white font-open">
                    06. Automation Diagnosis
                </h2>

                <div className="flex flex-col gap-12 mt-10 mb-20">

                    <p className="text-lg text-white">Automation isn't just about technology - it's about identifying where manual processes are costing you
                        time, money, and consistency. We help you find the right opportunities where automation delivers real
                        ROI.</p>

                    <div className="w-[100%] grid grid-cols-3 gap-4">


                        <div className="px-4 space-y-4 border-r border-white">

                            <div>
                                <FileClock size={32} color="white" />
                            </div>

                            <h4 className="text-xl font-semibold text-white">
                                Manual-Heavy
                                Processes
                            </h4>

                            <p className="text-lg leading-5 text-gray-200">Tasks consuming excessive
                                time and prone to errors
                            </p>
                        </div>



                        <div className="px-4 space-y-4 border-r border-white">
                            <div>
                                <ClipboardCheck size={32} color="white" />
                            </div>

                            <h4 className="text-xl font-semibold text-white">
                                Repetitive Tasks
                            </h4>

                            <p className="text-lg leading-5 text-gray-200">High-volume activities
                                perfect for automation
                            </p>
                        </div>




                        <div className="space-y-4">
                            <div>
                                <Recycle size={32} color="white" />
                            </div>

                            <h4 className="text-xl font-semibold text-white">
                                System Gaps
                            </h4>

                            <p className="text-lg leading-5 text-gray-200">Disconnected tools
                                requiring manual data

                                transfer
                            </p>
                        </div>


                        <div className="px-4 mt-10 space-y-4 border-r border-white">
                            <div>
                                <BarChart4 size={32} color="white" />
                            </div>
                            <h4 className="text-xl font-semibold text-white">
                                Data Flow Issues
                            </h4>

                            <p className="text-lg leading-5 text-gray-200">Information bottlenecks
                                slowing decisions
                            </p>
                        </div>



                        <div className="px-4 mt-10 space-y-4 border-r border-white">
                            <div>
                                <TrendingUp size={32} color="white" />
                            </div>
                            <h4 className="text-xl font-semibold text-white">
                                Team Readiness
                            </h4>

                            <p className="text-lg leading-5 text-gray-200">Capability and willingness to
                                adopt new systems
                            </p>
                        </div>




                        <div className="mt-10 space-y-4">
                            <div>
                                <AlertTriangle size={32} color="white" />
                            </div>
                            <h4 className="text-xl font-semibold text-white">
                                ROI Feasibility
                            </h4>

                            <p className="text-lg leading-5 text-gray-200">Cost-benefit analysis and
                                payback timelines</p>
                        </div>









                    </div>




                </div>

                <div className="pl-4 mt-10 border-l-2 border-gray-300">
                    <p className="text-xl text-white font-openleading-relaxed">

                        Outcome: An automation roadmap with prioritized opportunities, cost-saving projections, and a phased
                        implementation plan that fits your budget and capacity.


                    </p>
                </div>
            </motion.div>


            {/* Card 7  */}
            <motion.div
                style={{ y: y1 }}
                className="sticky w-3/4 p-10 mx-auto bg-[#152869] shadow-xl top-40 rounded-xl"
            >
                <h2 className="text-2xl font-bold text-white font-open">
                    07. People & Organization Performance Audit
                </h2>

                <div className="flex flex-col gap-12 mt-10 mb-20">
                    <div className="space-y-8">


                        <p className="mb-0 text-xl font-semibold text-white">What We Review</p>

                        <p className="text-lg text-white">Your people drive everything. When structure is unclear, roles overlap, or accountability is weak, even talented teams
                            underperform. This audit examines how your organization is structured and how effectively people work together.</p>
                    </div>


                    <div className="w-[100%] grid grid-cols-3 gap-4">


                        <div className="px-4 space-y-4 border-r border-white">

                            <div>
                                <FileClock size={32} color="white" />
                            </div>

                            <h4 className="text-xl font-semibold text-white">
                                Organisation Structure
                                & Reporting Clarity
                            </h4>

                            <p className="text-lg leading-5 text-gray-200">Who reports to whom and why
                            </p>
                        </div>



                        <div className="px-4 space-y-4 border-r border-white">
                            <div>
                                <ClipboardCheck size={32} color="white" />
                            </div>

                            <h4 className="text-xl font-semibold text-white">
                                Role Defination
                            </h4>

                            <p className="text-lg leading-5 text-gray-200">Clear responsibilities vs overlap

                                and gaps
                            </p>
                        </div>




                        <div className="space-y-4">
                            <div>
                                <Recycle size={32} color="white" />
                            </div>

                            <h4 className="text-xl font-semibold text-white">
                                KPI & Accountability

                                Systems
                            </h4>

                            <p className="text-lg leading-5 text-gray-200">What gets measured and tracked
                            </p>
                        </div>


                        <div className="px-4 mt-10 space-y-4 border-r border-white">
                            <div>
                                <BarChart4 size={32} color="white" />
                            </div>
                            <h4 className="text-xl font-semibold text-white">
                                Skill Gaps
                            </h4>

                            <p className="text-lg leading-5 text-gray-200">Where capability doesn't match

                                requirements
                            </p>
                        </div>



                        <div className="px-4 mt-10 space-y-4 border-r border-white">
                            <div>
                                <TrendingUp size={32} color="white" />
                            </div>
                            <h4 className="text-xl font-semibold text-white">
                                Culture and Motivation
                            </h4>

                            <p className="text-lg leading-5 text-gray-200">What energizes or drains your

                                teams
                            </p>
                        </div>




                        <div className="mt-10 space-y-4">
                            <div>
                                <AlertTriangle size={32} color="white" />
                            </div>
                            <h4 className="text-xl font-semibold text-white">
                                Leadership Bandwidth
                            </h4>

                            <p className="text-lg leading-5 text-gray-200">Whether leaders can focus on
                                strategy or are stuck in daily

                                firefighting</p>
                        </div>









                    </div>




                </div>

                <div className="pl-4 mt-10 border-l-2 border-gray-300">
                    <p className="text-xl text-white font-openleading-relaxed">

                        Outcome: A practical blueprint to improve team alignment, build missing capabilities, strengthen accountability, and lift
                        overall performance.


                    </p>
                </div>
            </motion.div>


            {/* Card 8  */}
            <motion.div
                style={{ y: y1 }}
                className="sticky w-3/4 p-10 mx-auto bg-gray-800 shadow-xl top-40 rounded-xl"
            >
                <h2 className="text-2xl font-bold text-white font-open">
                    08. Productivity Audit
                </h2>

                <div className="flex flex-col gap-12 mt-10 mb-20">





                    <p className="text-lg text-white">Productivity isn't just about working harder - it's about eliminating waste, improving workflow, and ensuring every shift
                        delivers consistent output. We examine the details that make the difference.</p>



                    <div className="w-[100%] grid grid-cols-3 gap-4">


                        <div className="px-4 space-y-4 border-r border-white">

                            <div>
                                <FileClock size={32} color="white" />
                            </div>

                            <h4 className="text-xl font-semibold text-white">
                                Manpower Deployment
                            </h4>

                            <p className="text-lg leading-5 text-gray-200">Whether you have the right people in
                                the right places at the right times
                            </p>
                        </div>



                        <div className="px-4 space-y-4 border-r border-white">
                            <div>
                                <ClipboardCheck size={32} color="white" />
                            </div>

                            <h4 className="text-xl font-semibold text-white">
                                Shift Output
                            </h4>

                            <p className="text-lg leading-5 text-gray-200">Performance variations between shifts
                                and why they occur
                            </p>
                        </div>




                        <div className="space-y-4">
                            <div>
                                <Recycle size={32} color="white" />
                            </div>

                            <h4 className="text-xl font-semibold text-white">
                                Time-and-Motion Analysis
                            </h4>

                            <p className="text-lg leading-5 text-gray-200">How long tasks actually take versus
                                how long they should take
                            </p>
                        </div>


                        <div className="px-4 mt-10 space-y-4 border-r border-white">
                            <div>
                                <BarChart4 size={32} color="white" />
                            </div>
                            <h4 className="text-xl font-semibold text-white">
                                Delay Hotspots
                            </h4>

                            <p className="text-lg leading-5 text-gray-200">Where work stops, slows, or waits
                                unnecessarily
                            </p>
                        </div>



                        <div className="px-4 mt-10 space-y-4 border-r border-white">
                            <div>
                                <TrendingUp size={32} color="white" />
                            </div>
                            <h4 className="text-xl font-semibold text-white">
                                Layout & Workflow
                            </h4>

                            <p className="text-lg leading-5 text-gray-200">Whether your physical setup supports
                                or hinders efficiency
                            </p>
                        </div>




                        <div className="mt-10 space-y-4">
                            <div>
                                <AlertTriangle size={32} color="white" />
                            </div>
                            <h4 className="text-xl font-semibold text-white">
                                Utilization vs Ideal Output
                            </h4>

                            <p className="text-lg leading-5 text-gray-200">Actual capacity usage compared to
                                theoretical maximum</p>
                        </div>









                    </div>




                </div>

                <div className="pl-4 mt-10 border-l-2 border-gray-300">
                    <p className="text-xl text-white font-openleading-relaxed">

                        Outcome: A detailed plan to lift productivity, reduce idle time, improve shift consistency, and increase output
                        without adding headcount.


                    </p>
                </div>
            </motion.div>





        </div>
    );
}
