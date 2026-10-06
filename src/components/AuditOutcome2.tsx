
'use client';

import React from 'react';
import { Users, Search, BarChart, LucideIcon } from 'lucide-react';

// --- 1. Step Data (Same as before) ---
const workStepsData = [
    {
        step: 1,
        title: 'Detailed Diagnostic Report',
        description: 'Clear documentation of findings with supporting data',
        Icon: Users,
    },
    {
        step: 2,
        title: 'Strengths, Gaps, Risks & Opportunities',
        description: `Honest assessment of what's working and what isn't`,
        Icon: Search,
    },
    {
        step: 3,
        title: 'Department-Wise Recommendations',
        description: 'Specific actions for each functional area',
        Icon: BarChart,
    },
    {
        step: 4,
        title: 'Priority Improvement Roadmap',
        description: 'Sequenced plan showing what to tackle first',
        Icon: Users,
    },
    {
        step: 5,
        title: 'Quick Wins & Structural Changes',
        description: 'Immediate actions plus longer-term initiatives',
        Icon: BarChart,
    },
    {
        step: 6,
        title: 'Cost-Saving Opportunities',
        description: 'Identified waste and efficiency improvements',
        Icon: Search,
    },
    {
        step: 7,
        title: 'Revenue Unlock Opportunities',
        description: 'Growth levers and untapped potential',
        Icon: Search,
    },

    {
        step: 8,
        title: 'Productivity Insights',
        description: 'Specific ways to improve output and efficiency',
        Icon: Search,
    },
    {
        step: 9,
        title: 'Automation Feasibility',
        description: 'Where technology can reduce manual effort',
        Icon: Search,
    },

];

// --- 2. WorkStep Sub-Component (Same as before) ---
interface WorkStepProps {
    step: number;
    title: string;
    description: string;
    Icon: LucideIcon;
    isLast: boolean;
}

const WorkStep: React.FC<WorkStepProps> = ({ step, title, description, Icon, isLast }) => {
    return (
       <div className="relative flex gap-6 py-8 group isolate max-md:py-2 max-md:gap-2">
    {/* Icon & Line Column */}
    <div className="relative flex flex-col items-center justify-center flex-shrink-0  ">
        {/* The Icon Box */}
        <div className="relative z-10 flex items-center justify-center w-14 h-14 bg-[#000000] rounded-2xl shadow-lg shadow-orange-500/20 ring-4 ring-white">
            <Icon className="w-6 h-6 text-white" />
        </div>
        
        {/* The Connecting Line (Only shows if not last) */}
        {!isLast && (
            <div className="absolute top-14 bottom-[-32px] w-[2px] bg-gray-200"></div>
        )}
    </div>

    {/* Content Block */}
    <div className="relative flex-1 pt-1">
        {/* Card Container */}
        <div className="relative overflow-hidden  rounded-2xl border border-neutral-800 bg-gray-200  transition-colors duration-300 p-6 md:p-8">
            
            {/* Step Number Badge */}
            <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl text-black select-none leading-none">
                {`${step < 10 ? '0' : ''}${step}`}
            </div>

            {/* Title & Description */}
            <div className="relative z-10">
                <h3 className="mb-3 text-xl max-md:text-lg max-md:mb-2 font-bold text-[#02044eff] tracking-tight">
                    {title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    </div>
</div>
    );
};

// --- 3. Main Component (WorkProcessPage) ---
const WorkProcessPage: React.FC = () => {
    return (
        <div className="bg-orange-50 text-white">

            <div className="grid grid-cols-1 lg:grid-cols-2">

                {/* LEFT COLUMN: Scrollable Content */}
                <div className="p-8 lg:order-1 lg:p-16 max-md:p-4">
                    <div className="max-w-xl mx-auto">
                        {/* <h2 className="text-xs font-semibold tracking-widest uppercase text-[#a0a0a0] mb-1">
                            HOW WE WORK
                        </h2>
                        <h1 className="mb-10 text-3xl font-extrabold text-white lg:text-4xl">
                            Easy {workStepsData.length} Steps To Work
                        </h1> */}

                        <div className="relative">
                            {workStepsData.map((data, index) => (
                                <WorkStep
                                    key={data.step}
                                    step={data.step}
                                    title={data.title}
                                    description={data.description}
                                    Icon={data.Icon}
                                    isLast={index === workStepsData.length - 1}
                                />
                            ))}
                        </div>

                        <div className="h-24 max-md:hidden"></div>
                    </div>
                </div>

                {/* RIGHT COLUMN: Sticky Image Container */}
                <div className="lg:order-2 bg-orange-50">

                    <div className="sticky flex flex-col items-center justify-center h-screen p-6 max-md:p-2 overflow-hidden top-10 max-md:border-t max-md:border-t-[#a0a0a0]/20 max-md:top-0 max-md:relative">


                        <h2 className="mb-10 text-3xl  font-extrabold text-black lg:text-4xl">
                            What You Get as Outcome
                        </h2>


                        <div className="relative w-[80%] h-[24rem] max-md:h-[16rem] max-md:w-[90%] bg-[#2c2c2c] rounded-xl shadow-2xl border border-[#a0a0a0]/20 overflow-hidden z-10">

                            <img

                                src="/assets/images/auditoutcome2.png"
                                alt="Audit Outcome Visualization"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <p className='text-lg text-gray-800 w-[80%] max-md:w-[90%] mx-auto mt-10 text-justify'>Every audit delivers a comprehensive diagnostic report with actionable insights you can use immediately. We don't just identify problems - we show you exactly what to do about them.</p>

                        {/* Optional decorative background element behind the image box */}
                        {/* <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-30 blur-3xl"></div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkProcessPage;