"use client";
import React from 'react';
// 1. Import professional Tabler icons
import { 
    TbTelescope, 
    TbStethoscope, 
    TbBulb, 
    TbFileAnalytics 
} from "react-icons/tb";

// 2. Define the type to accept a React Component (IconType) instead of a string
type Feature = {
    id: number;
    icon: React.ElementType; // Changed from string to React Component
    title: string;
    description: string;
};

// 3. Map the icons to the data
const features: Feature[] = [
    {
        id: 1,
        icon: TbTelescope,
        title: 'Discovery',
        description:
            'We understand your business, speak to teams across departments, walk the floor to see operations firsthand, and review your numbers to establish a baseline.',
    },
    {
        id: 2,
        icon: TbStethoscope,
        title: 'Diagnostic Study',
        description:
            `We use structured audit models and frameworks to systematically evaluate strengths, identify gaps, assess risks, and uncover hidden opportunities.`,
    },
    {
        id: 3,
        icon: TbBulb,
        title: 'Insight Mapping',
        description:
            `We translate raw data into clear findings that show exactly what's working well, what's hurting performance, and where the biggest opportunities lie.`,
    },
    {
        id: 4,
        icon: TbFileAnalytics,
        title: 'Report & Discussion',
        description:
            'You receive a detailed report within one week, followed by a thorough discussion on priorities, quick wins, and recommended next steps.',
    },
];
const FeatureItem: React.FC<{ feature: Feature }> = ({ feature }) => (
    <div className="flex flex-col mb-8 space-y-3">
        {/* Icon Area - Changed from Green to Blue, removed the CSS Filter */}
        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-orange-50 rounded-xl">
            {/* Render the icon component directly with blue color */}
            <feature.icon className="text-3xl text-orange-600" strokeWidth={1.5} />
        </div>

        {/* Content Area */}
        <div>
            <h3 className="text-xl font-bold text-slate-900">
                {feature.title}
            </h3>
            <p className="mt-2 text-base leading-relaxed text-slate-600">
                {feature.description}
            </p>
        </div>
    </div>
);


const LimpaSection: React.FC = () => {
    return (

        <div className=" p-6 bg-white sm:p-8 md:p-12 lg:p-16 ">
            <div className="mx-auto max-w-7xl">


                <div className="grid gap-12 md:grid-cols-2 lg:gap-0">


                    <div className="flex flex-col justify-center md:sticky md:top-0 md:h-screen md:py-0">

                        <div className="md:w-[80%]">
                            <p className="mb-2 text-4xl max-md:text-2xl font-semibold tracking-wider text-gray-800 uppercase">
                                Our Audit Process
                            </p>
                            <h2 className="mb-8 text-4xl max-md:text-lg font-medium leading-tight text-gray-900 sm:text-lg">
                                Every audit delivers a comprehensive diagnostic report with actionable insights you can use immediately. We don't just
                                identify problems - we show you exactly what to do about them.
                            </h2>


                            <div className="flex space-x-4 h-96 max-md:h-48">

                                <div
                                    className="flex-1 bg-gray-300 rounded-lg shadow-xl"
                                    style={{ backgroundImage: "url('/assets/images/AuditMatter.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
                                >

                                </div>


                                <div
                                    className="flex-1 bg-gray-400 rounded-lg shadow-xl"
                                    style={{ backgroundImage: "url('/assets/images/AuditMatter.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
                                >

                                </div>
                            </div>



                        </div>
                    </div>

                    {/* RIGHT COLUMN: Scrollable Features List */}
                    <div className="md:py-16 md:overflow-y-auto">
                        {/* <h2 className="pt-4 mb-8 text-2xl font-bold text-gray-900 md:pt-0">
                            What Sets Us Apart
                        </h2> */}

                        <div className="space-y-6">
                            {features.map((feature) => (
                                <FeatureItem key={feature.id} feature={feature} />
                            ))}
                        </div>

{/* 
                        <div className="w-[100%] grid grid-cols-2 gap-4">


                            <div className="px-4 space-y-4 border-r border-gray-700">

                                <div>
                                    <FileClock size={32} color="white" />
                                </div>

                                <h4 className="text-xl font-semibold text-gray-700">
                                    Product-Market Fit
                                </h4>

                                <p className="text-lg leading-5 text-gray-700">Are you solving the right
                                    problems for the right customers?
                                </p>
                            </div>



                            <div className="px-4 space-y-4">
                                <div>
                                    <ClipboardCheck size={32} color="white" />
                                </div>

                                <h4 className="text-xl font-semibold text-gray-700">
                                    Customer Segments
                                </h4>

                                <p className="text-lg leading-5 text-gray-700">Which segments are most profitable and how to expand there
                                </p>
                            </div>




                            <div className="px-4 space-y-4 border-r border-gray-700">
                                <div>
                                    <Recycle size={32} color="white" />
                                </div>

                                <h4 className="text-xl font-semibold text-gray-700">
                                    Pricing Logic
                                </h4>

                                <p className="text-lg leading-5 text-gray-700">Whether your pricing reflects value or just matches competition
                                </p>
                            </div>


                            <div className="px-4 mt-10 space-y-4 ">
                                <div>
                                    <BarChart4 size={32} color="white" />
                                </div>
                                <h4 className="text-xl font-semibold text-gray-700">
                                    Channel Structure
                                </h4>

                                <p className="text-lg leading-5 text-gray-700">How effectively your channels reach and serve target customers
                                </p>
                            </div>


                        </div> */}
                    </div>

                </div>

            </div>
        </div>
    );
};

export default LimpaSection;