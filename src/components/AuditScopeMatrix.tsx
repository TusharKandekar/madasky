// src/components/AuditScopeMatrix.tsx or src/app/page.tsx
'use client';

import React from 'react';
import { Check, X } from 'lucide-react'; // Using lucide-react for checkmarks/X icons

// --- 1. Audit Data Structure ---
// Defines the tiers and content for the matrix
const auditMatrixData = [
    {
        type: 'Business Health Diagnostic',
        tiers: [
            { name: 'Tier 1', content: 'Quick snapshot', included: true },
            { name: 'Tier 2', content: 'Included', included: true },
            { name: 'Tier 3', content: 'Included', included: true },
            { name: 'Tier 4', content: 'Expanded with risk modelling', included: true },
        ],
    },
    {
        type: 'Sales Audit',
        tiers: [
            { name: 'Tier 1', content: 'Basic check', included: true },
            { name: 'Tier 2', content: 'Full diagnostic', included: true },
            { name: 'Tier 3', content: 'Full diagnostic', included: true },
            { name: 'Tier 4', content: 'Advanced + GTM linkages', included: true },
        ],
    },
    {
        type: 'Finance & Cashflow Audit',
        tiers: [
            { name: 'Tier 1', content: 'High-level', included: true },
            { name: 'Tier 2', content: 'Full diagnostic', included: true },
            { name: 'Tier 3', content: 'Full diagnostic', included: true },
            { name: 'Tier 4', content: 'Working capital', included: true },
        ],
    },
    {
        type: 'Operations Excellence Audit',
        tiers: [
            { name: 'Tier 1', content: 'Walkthrough', included: true },
            { name: 'Tier 2', content: 'Detailed with tools', included: true },
            { name: 'Tier 3', content: 'Detailed with tools', included: true },
            { name: 'Tier 4', content: 'End-to-end capacity + cost study', included: true },
        ],
    },
    {
        type: 'People & Organisation Audit',
        tiers: [
            { name: 'Tier 1', content: 'Short interviews', included: true },
            { name: 'Tier 2', content: 'Structure, roles, KPIs', included: true },
            { name: 'Tier 3', content: 'Structure, roles, KPIs', included: true },
            { name: 'Tier 4', content: 'Culture, leadership, capability mapping', included: true },
        ],
    },
    {
        type: 'Productivity Audit',
        tiers: [
            { name: 'Tier 1', content: '-', included: false },
            { name: 'Tier 2', content: 'Line & manpower audit', included: true },
            { name: 'Tier 3', content: 'Line & manpower audit', included: true },
            { name: 'Tier 4', content: 'Full plant productivity mapping', included: true },
        ],
    },
    {
        type: 'GTM Strategy Audit',
        tiers: [
            { name: 'Tier 1', content: '-', included: false },
            { name: 'Tier 2', content: '-', included: false },
            { name: 'Tier 3', content: 'Optional add-on', included: true },
            { name: 'Tier 4', content: 'Included', included: true },
        ],
    },
    {
        type: 'Automation Diagnostic',
        tiers: [
            { name: 'Tier 1', content: '-', included: false },
            { name: 'Tier 2', content: '-', included: false },
            { name: 'Tier 3', content: 'Optional add-on', included: true },
            { name: 'Tier 4', content: 'Included', included: true },
        ],
    },
];

// --- 2. Reusable Icon Component ---
// Used to display a checkmark or a simple text based on inclusion
interface StatusIconProps {
    content: string;
    included: boolean;
}

const StatusIcon: React.FC<StatusIconProps> = ({ content, included }) => {
    if (content === '-') {
        return <X className="w-5 h-5 mx-auto text-gray-400" />;
    }

    // For included items, use a green checkmark
    const icon = included ? (
        <Check className="inline-block w-5 h-5 mr-1 text-green-500" />
    ) : null;

    return (
        <span className="flex items-center justify-center text-sm font-medium text-gray-700">
            {icon}
            <span className={!included ? "text-gray-500" : ""}>{content}</span>
        </span>
    );
}

// --- 3. Main Component ---
const AuditScopeMatrix: React.FC = () => {
    return (
        <div className="container p-4 mx-auto font-sans text-gray-800 bg-white max-md:py-8 lg:p-12">

            {/* Header and Introduction */}
            <div className="max-w-4xl mx-auto mb-10">
                <h2 className="mb-4 text-4xl font-semibold text-center text-gray-700 max-md:text-2xl lg:text-4xl">
                    Scope & Depth Across Tiers
                </h2>
                <p className="text-lg leading-relaxed text-center text-gray-600">
                    Understanding what each tier covers helps you choose wisely. This matrix shows how audit depth and coverage expand as you move from Rapid Diagnostic to Deep-Dive Enterprise. Notice how foundational audits like Sales and Finance appear across all tiers, while specialized assessments like GTM Strategy and Automation are reserved for higher tiers.
                </p>
            </div>


            <div className="overflow-x-auto border border-red-300 rounded-lg shadow-xl">
                <table className="min-w-full divide-y divide-red-300">


                    <thead className="sticky top-0 z-10 text-red-700 bg-red-50">
                        <tr>
                            <th scope="col" className="max-md:sticky max-md:left-0 max-md:bg-red-50 px-6 py-4 text-left text-sm font-semibold tracking-wider w-1/5 min-w-[200px] border-r border-red-300">
                                Audit Type
                            </th>
                            <th scope="col" className="px-4 py-4 text-center text-sm font-semibold tracking-wider min-w-[150px]">
                                <span className="text-base font-normal">Free Rapid Diagnostic</span>
                            </th>
                            <th scope="col" className="px-4 py-4 text-center text-sm font-semibold tracking-wider min-w-[150px]">
                                <span className="text-base font-normal">Dept Audit</span>
                            </th>
                            <th scope="col" className="px-4 py-4 text-center text-sm font-semibold tracking-wider min-w-[150px]">
                                <span className="text-base font-normal">3-Dept Bundle</span>
                            </th>
                            <th scope="col" className="px-4 py-4 text-center text-sm font-semibold tracking-wider min-w-[150px]">
                                <span className="text-base font-normal">Deep-Dive Enterprise</span>
                            </th>
                        </tr>
                    </thead>

                    {/* Table Body (Audit Types and Contents) */}
                    <tbody className="bg-white divide-y divide-red-300">
                        {auditMatrixData.map((row, rowIndex) => (
                            <tr
                                key={row.type}
                                className={rowIndex % 2 === 0 ? 'bg-white hover:bg-red-50' : 'bg-gray-50 hover:bg-red-50'}
                            >
                                {/* Audit Type Column (Sticky on scroll for better UX) */}
                                <td className="px-6 py-4 text-sm font-semibold text-gray-900 sticky left-0 bg-inherit border-r border-red-300 w-1/5 min-w-[200px]">
                                    {row.type}
                                </td>

                                {/* Tier Content Columns */}
                                {row.tiers.map((tier, colIndex) => (
                                    <td
                                        key={colIndex}
                                        className="px-4 py-4 text-sm text-center whitespace-normal border-r border-red-100 last:border-r-0"
                                    >
                                        <StatusIcon content={tier.content} included={tier.included} />
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Footer Summary */}
            {/* <footer className="max-w-4xl pt-6 mt-10 border-t">
        <p className="text-base text-gray-700">
          <span className="font-bold">The key difference isn't just what's covered—it's how deeply we go.</span> Tier 1 gives you visibility. Tier 2 gives you department-level solutions. Tier 3 connects the dots across functions. Tier 4 gives you a complete business transformation roadmap.
        </p>
      </footer> */}
        </div>
    );
};

export default AuditScopeMatrix;