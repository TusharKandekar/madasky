"use client";
import React from 'react';
import { Search, FileText, Lightbulb, TrendingUp } from 'lucide-react'; // Icons for the steps

// ==========================================================
// 1. TYPESCRIPT INTERFACES
// ==========================================================

interface ProcessStep {
    icon: React.ReactElement;
    title: string;
    description: string;
    bgColor: string; // Tailwind class for background color
}

interface TimelineItem {
    title: string;
    duration: string;
    description: string;
}

// ==========================================================
// 2. INTERNAL DATA DEFINITION (NON-REUSABLE)
// ==========================================================

const PROCESS_STEPS: ProcessStep[] = [
    {
        icon: <Search className="w-8 h-8 text-white" />,
        title: "Discovery",
        description: "We understand your business, speak to teams across departments, walk the floor to see operations firsthand, and review your numbers to establish a baseline.",
        bgColor: "bg-blue-500", // Tailwind color for Discovery
    },
    {
        icon: <FileText className="w-8 h-8 text-white" />,
        title: "Diagnostic Study",
        description: "We use structured audit models and frameworks to systematically evaluate strengths, identify gaps, assess risks, and uncover hidden opportunities.",
        bgColor: "bg-red-500", // Tailwind color for Diagnostic Study
    },
    {
        icon: <Lightbulb className="w-8 h-8 text-white" />,
        title: "Insight Mapping",
        description: "We translate raw data into clear findings that show exactly what's working well, what's hurting performance, and where the biggest opportunities lie.",
        bgColor: "bg-gray-500", // Tailwind color for Insight Mapping
    },
    {
        icon: <FileText className="w-8 h-8 text-white" />,
        title: "Report & Discussion",
        description: "You receive a detailed report within one week, followed by a thorough discussion on priorities, quick wins, and recommended next steps.",
        bgColor: "bg-pink-600", // Tailwind color for Report & Discussion
    },
];

const TIMELINE_DETAILS: TimelineItem[] = [
    {
        title: "Standard Audit",
        duration: "2 - 3 working days",
        description: "Focused assessment of specific area",
    },
    {
        title: "Deep-Dive Audit",
        duration: "5 - 10 days",
        description: "Comprehensive analysis with detailed findings",
    },
    {
        title: "Report Delivery",
        duration: "Within 1 week",
        description: "Complete documented findings",
    },
    {
        title: "Implementation Support",
        duration: "3 - 12 months (optional)",
        description: "On-ground execution assistance",
    },
];

// ==========================================================
// 3. THE COMPONENT IMPLEMENTATION
// ==========================================================

export default function AuditProcessDisplay() {
    return (
        <div className="px-6 py-12 bg-white lg:px-12">
            
            {/* Header Section */}
            <header className="mx-auto mb-10 max-w-7xl">
                <h1 className="font-serif text-4xl font-semibold text-gray-900 lg:text-4xl">
                    Our Audit Process
                </h1>
                <p className="max-w-3xl mt-2 text-lg text-gray-600">
                    Every audit follows a structured four-step process designed to deliver clarity, not complexity. We work with your team to understand the real situation, analyze what's working and what isn't, and provide actionable recommendations.
                </p>
                {/* Placeholder for MADASKY logo/branding */}
                <div className="absolute text-sm font-semibold text-gray-400 top-8 right-8">
                    MADASKY - Redefining Excellence
                </div>
            </header>

            {/* Main Content Area: Sticky Process Steps (Left) and Scrolling Content (Right) */}
            <div className="flex flex-col gap-10 mx-auto max-w-7xl lg:flex-row">
                
                {/* LEFT SIDE: STICKY PROCESS STEPS (Simulating the overlapping boxes) */}
                <div className="space-y-4 lg:w-2/3">
                    <div className="sticky top-10 lg:h-[600px] overflow-hidden">
                        
                        {/* Vertical Line Connector */}
                        <div className="absolute top-0 bottom-0 hidden w-1 bg-gray-200 left-10 sm:block"></div>

                        {PROCESS_STEPS.map((step, index) => (
                            <div key={index} className={`flex items-start mb-8 transition-all duration-300 ${index > 0 ? 'mt-4' : ''}`}>
                                
                                {/* Icon and Color Block (Left) */}
                                <div className={`w-24 h-24 ${step.bgColor} rounded-md flex-shrink-0 flex items-center justify-center z-10 shadow-lg`}>
                                    {step.icon}
                                </div>
                                
                                {/* Step Content (Right) */}
                                <div className="py-2 ml-6">
                                    <h2 className="mb-1 text-2xl font-bold text-gray-900">{step.title}</h2>
                                    <p className="text-gray-600">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT SIDE: SCROLLING TIMELINE CONTENT (For visibility, we stack content here) */}
                <div className="lg:w-1/3 lg:h-[600px] overflow-y-auto pt-4 border-l-4 border-red-500/50 lg:pl-6">
                    <h3 className="mb-6 text-2xl font-bold text-red-700">Audit Timelines & Support</h3>
                    
                    {TIMELINE_DETAILS.map((item, index) => (
                        <div key={index} className="p-4 mb-8 transition duration-150 border border-gray-100 rounded-lg shadow-sm hover:shadow-md">
                            <h4 className="mb-1 text-xl font-bold text-gray-900">{item.title}</h4>
                            <p className="text-lg font-semibold text-red-600">{item.duration}</p>
                            <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                        </div>
                    ))}
                    
                    {/* Add extra padding/space to demonstrate scrolling effect */}
                    <div className="h-20 lg:h-32"></div> 
                </div>

            </div>

            {/* Alternative Presentation of Timelines (Matching Bottom Section of Image) */}
            <div className="pt-10 mx-auto mt-16 border-t max-w-7xl">
                <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
                    {TIMELINE_DETAILS.map((item, index) => (
                        <div key={index} className="p-4 border-r last:border-r-0">
                            <h4 className="mb-1 text-xl font-bold text-red-700">{item.title}</h4>
                            <p className="mb-2 text-2xl font-extrabold text-gray-900">{item.duration}</p>
                            <p className="text-sm text-gray-500">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}