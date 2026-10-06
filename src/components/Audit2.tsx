

"use client";
import React from 'react';

import {
  ArrowRight,
  TrendingUp,
  DollarSign,
  Settings,
  CornerRightUp,
} from "lucide-react";
import { 
    Search,             // Sales (Kept Search, it fits best)
    Activity,           // Health (Kept Activity, fits best)
    Banknote,           // Finance (Changed from CircleDollarSign)
    Rocket,          // Marketing (Changed from Rocket)
    Target,             // GTM (Changed from Rocket)
    Workflow,           // Automation (Changed from Bot)
    UserCog,            // People (Changed from Users)
    Gauge,              // Productivity (Changed from Zap)
    ClipboardList       // Fallback (Changed from FileText)
} from "lucide-react";
// --- Component Content Data (Using your data with icons mapped) ---
const features = [
  {
    iconKey: "sales",
    title: "Sales Process Audit",
    description: "Strengthen your sales engine and close revenue leaks",
  },
  {
    iconKey: "finance",
    title: "Finance & Cashflow Audit",
    description: "Free blocked money and improve financial control",
  },
  {
    iconKey: "operations",
    title: "Operations Excellence Audit",
    description: "Analyze systems and flow to optimize capacity and delivery.",
  },
  {
    iconKey: "marketing",
    title: "Go-to-Marketing Audit",
    description: "Sharpen positioning and route-to-market",
  },
  {
    iconKey: "sales",
    title: "Sales Strategy",
    description:
      "Review core strategy for better targeting and pipeline growth.",
  },
  {
    iconKey: "finance",
    title: "Cost Management",
    description: "Identify unnecessary expenditures and optimize spending.",
  },
  {
    iconKey: "operations",
    title: "Supply Chain",
    description: "Optimize inventory levels and logistics for efficiency.",
  },
  {
    iconKey: "marketing",
    title: "Digital Presence",
    description:
      "Ensure your brand is effectively reaching the right audience online.",
  },
];

// --- Helper component to render dynamic icons based on feature title ---
const FeatureIcon: React.FC<{ iconKey: string }> = ({ iconKey }) => {
  let IconComponent;
  let colorClass = "text-[#BA0C2F]";

  switch (iconKey) {
    case "search":
      IconComponent = Search; // Represents growth/sales trend
      break;
    case "activity":
      IconComponent = Activity; // Represents money/cashflow
      colorClass = "text-[#152869]";
      break;
    case "finance":
      IconComponent = Banknote; // Represents processes/mechanics
       colorClass = "text-[#E42806]";
      break;
    case "operations":
      IconComponent = Target; // Represents route-to-market/positioning
     colorClass = "text-[#00548F]";
      break;
    case "marketing":
      IconComponent = Rocket; // Represents people
      colorClass = "text-[#75787B]";
      break;
    case "automation":
      IconComponent = Workflow; // Represents productivity
     colorClass = "text-[#BA0C2F]";
      break;
    case "people":
      IconComponent = UserCog; // Represents productivity
      colorClass = "text-[#152869]";
      break;
    case "productivity":
      IconComponent = Gauge; // Represents productivity
       colorClass = "text-[#E42806]";
      break;
    default:
      IconComponent = ArrowRight; // Fallback
      break;
  }

  return (
    <div
      className={`
        w-full
        text-4xl font-extrabold text-gray-300
      `}
    >
      <div
        className={`
          w-max
          p-3
          bg-white/20
          rounded-lg
          shadow-inner
          ${colorClass} backdrop-blur-sm
        `}
      >
        <IconComponent size={32} />
      </div>
    </div>
  );
};

const BusinessHero: React.FC = () => {
  // Mock features data if not passed in props (for preview purposes)
  const features = [
    {
      iconKey: "search",
      title: "Sales Process Audit",
      description: "Identify where opportunities are being lost.",
    },
    {
      iconKey: "activity",
      title: "Business Health Check",
      description: "A 360-degree view of your entire business.",
    },
    {
      iconKey: "finance",
      title: "Finance & Cashflow Audit",
      description: "Free blocked money and eliminate waste.",
    },
    {
      iconKey: "operations",
      title: "Operations Excellence Audit",
      description: "Lift output and reduce rework.",
    },
    {
      iconKey: "marketing",
      title: "Go-To-Market Audit",
      description: "Evaluate product-market fit and strategy.",
    },
    {
      iconKey: "automation",
      title: "Automation Diagnosis",
      description: "Find high-ROI automation opportunities.",
    },
    {
      iconKey: "people",
      title: "People & Org Audit",
      description: "Align structure and clarify roles.",
    },
    {
      iconKey: "productivity",
      title: "Productivity Audit",
      description: "Increase output without adding headcount.",
    },
  ];

  return (
    <div
      className="flex flex-col min-h-screen font-sans bg-white "
    >
      {/* --- 1. Main Hero Content Area --- */}
      <div
        className="w-full px-6 py-20 mx-auto max-w-7xl lg:px-8 max-md:py-0"
      >
        <div
          className="grid items-center gap-16 lg:grid-cols-2"
        >
          {/* Left: Text Block */}
          <div
            className="flex flex-col justify-center space-y-8 max-md:space-y-4"
          >
            <div
              className="
                inline-flex
                w-fit
                px-3 py-1
                text-sm font-semibold text-[#152869]
                bg-blue-50
                rounded-full
                items-center uppercase
              "
            >
              Business Transformation
            </div>

            <h2
              className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl"
            >
              Why These Audits{" "}
              <span
                className="text-[#152869] "
              >
                Matter
              </span>
            </h2>

            <div
              className="space-y-6 text-lg leading-relaxed text-slate-600"
            >
              <p>
                Manufacturing owners today face mounting pressure from multiple
                directions. Orders are slowing while price competition
                intensifies. Inefficiencies quietly eat away at capacity and
                margins.
              </p>
              <p>
                Teams work hard but often lack alignment on priorities.
                Productivity declines even as hours increase. Without clear
                visibility into what's working versus what's holding you back,
                it's difficult to make confident decisions.
              </p>
            </div>

            <div
              className="p-6 border-l-4 border-blue-600 rounded-r-lg bg-slate-50"
            >
              <p
                className="text-lg italic font-medium text-slate-900"
              >
                "Leaders want clarity, not assumptions. These audits give you
                that clarity."
              </p>
            </div>

            <div
              className="pt-4 "
            >
              <button
                className="
                  inline-flex
                  px-8 py-4
                  text-base font-bold text-white
                  bg-[#152869]
                  rounded-xl
                  transition-all shadow-blue-200
                  items-center justify-center duration-200 hover:bg-[#152869]/80 hover:shadow-lg hover:-translate-y-0.5
                "
              >
                <span
                  className="mr-2 "
                >
                  Get Started
                </span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Right: Image Container */}
          <div
            className="relative "
          >
            <div
              className="
                overflow-hidden
                bg-slate-50
                rounded-2xl border border-slate-100
                shadow-2xl
                relative aspect-[4/3]
              "
            >
              <img
                src="/assets/images/AuditMatter.png"
                alt="Audit Review"
                className="object-cover w-full h-full "
              />
            </div>
            {/* Decorative blob behind image */}
            <div
              className="absolute w-full h-full bg-blue-100 rounded-full opacity-30 -z-10 top-10 -right-10 blur-3xl"
            ></div>
          </div>
        </div>
      </div>

      {/* --- 2. Feature Suite Section (Redesigned) --- */}
      <div
        className="relative w-full py-24 border-t bg-slate-300 border-slate-200 max-md:py-10"
      >
        <div
          className="relative z-10 w-full px-6 mx-auto max-w-7xl lg:px-8"
        >
          {/* Section Header */}
          <div
            className="max-w-3xl mx-auto mb-20 text-center max-md:mb-10 "
          >
            <h3
              className="mb-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
            >
              Our Complete Suite of Audits
            </h3>
            <p
              className="text-lg leading-relaxed text-slate-600"
            >
              We offer eight specialized audits designed to address the specific
              challenges manufacturing companies face. Each audit provides
              actionable insights tailored to your operational reality.
            </p>
          </div>

          {/* Clean Grid Layout */}
          <div
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative flex flex-col p-8 transition-all duration-300 bg-white border shadow-sm border-slate-200 rounded-2xl group hover:shadow-xl hover:border-blue-200 hover:-translate-y-1"
              >
                {/* Icon Container - Clean & Professional */}
                <div
                  className="flex items-center justify-center mb-6 text-blue-600 transition-colors duration-300 w-14 h-14 bg-blue-50 rounded-xl group-hover:bg-blue-100 group-hover:text-white"
                >
                  <FeatureIcon iconKey={feature.iconKey} />
                </div>

                {/* Title */}
                <h4
                  className="mb-3 text-lg font-bold transition-colors text-slate-900 group-hover:text-blue-700"
                >
                  {feature.title}
                </h4>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed text-slate-500"
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessHero;
