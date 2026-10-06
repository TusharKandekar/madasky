// "use client";

// import React from "react";
// import { TrendingUp, ListChecks, Check } from "lucide-react";

// export default function InvestmentValueUnified() {
//   // Define list items here for cleaner JSX
//   const executionSteps = [
//     "Weekly action planning",
//     "Consulting for leaders",
//     "Dashboard and KPI setup",
//     "Process standardization",
//     "Team training",
//     "Automation guidance",
//     "GTM & pipeline support",
//     "Productivity monitoring",
//     "Monthly performance reviews"
//   ];

//   return (
//     <section className="w-full px-6 py-24 font-sans bg-slate-50">
//       <div className="mx-auto max-w-7xl lg:px-8">
        
//         {/* --- Main Unified Card Container --- */}
//         <div className="flex flex-col overflow-hidden bg-white border shadow-xl rounded-3xl border-slate-100 lg:flex-row">
          
//           {/* ================= LEFT SIDE: The Real Value (White Background) ================= */}
//           <div className="p-10 lg:w-3/5 lg:p-14 lg:border-r border-slate-100">
            
//             {/* Header with Icon */}
//             <div className="flex items-center gap-3 mb-4">
//               <div className="p-2 bg-[#e63410]/10 rounded-lg">
//                 <TrendingUp className="text-[#e63410]" size={24} strokeWidth={2} />
//               </div>
//               <h6 className="text-[#e63410] font-bold uppercase tracking-wider text-sm">
//                 Strategic Impact
//               </h6>
//             </div>
            
//             <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e78] mb-6 leading-tight">
//               The Real Value
//             </h2>
            
//             <div className="space-y-6 text-lg leading-relaxed text-slate-600">
//               <p>
//                 These audits help owners see their business without filters. They bring hidden issues to the surface before they become crises. They create clarity on what to fix first, so you're not wasting energy on the wrong priorities.
//               </p>
//               <p>
//                 Good audits align teams with clear responsibilities. They improve margins and cashflow by eliminating waste. They strengthen daily decision-making with better data.
//               </p>
              
//               {/* Highlighted final paragraph */}
//               <div className="p-4 bg-slate-50 border-l-4 border-[#2c3e78] rounded-r-lg">
//                  <p className="font-semibold text-[#2c3e78]">
//                   Most importantly, they build a predictable, scalable organization that doesn't depend on the owner to solve every problem.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* ================= RIGHT SIDE: After the Audit (Navy Background) ================= */}
//           <div className="lg:w-2/5 bg-[#2c3e78] p-10 lg:p-14 text-white relative overflow-hidden">
             
//              {/* Subtle Background Accent subtly visible on navy */}
//              <div className="absolute top-0 right-0 w-64 h-64 translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none bg-white/5 blur-3xl"></div>
            
//             <div className="relative z-10">
//               {/* Header with Icon */}
//               <div className="flex items-center gap-3 mb-4">
//                  <div className="p-2 rounded-lg bg-white/10">
//                   <ListChecks className="text-white" size={24} strokeWidth={2} />
//                 </div>
//                 <h2 className="text-2xl font-bold leading-tight md:text-3xl">
//                   After the Audit
//                 </h2>
//               </div>
              
//               {/* Divider */}
//               <div className="w-12 h-1 bg-[#e63410] mb-6"></div>

//               <p className="mb-8 text-lg font-medium leading-relaxed text-slate-200">
//                 The audit is step one. Execution support follows. We provide the structure you need to drive real improvement.
//               </p>

//               {/* Clean List using map and Lucide icons */}
//               <ul className="grid grid-cols-1 gap-y-4">
//                 {executionSteps.map((item, index) => (
//                   <li key={index} className="flex items-start gap-3">
//                     <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#e63410] flex items-center justify-center">
//                       <Check size={12} className="text-white" strokeWidth={3} />
//                     </div>
//                     <span className="text-slate-100 font-medium text-[15px]">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* --- Closing Statement (Below the main card) --- */}
//         <div className="mt-10 text-center">
//           <h3 className="text-xl md:text-2xl font-medium text-[#2c3e78] leading-normal max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-sm border border-[#2c3e78]/10">
//             "You get a partner who stays with you through implementation, not just someone who delivers a report and disappears."
//           </h3>
//         </div>

//       </div>
//     </section>
//   );
// }

// *****************************************************************************



"use client";

import React from "react";
import { Check } from "lucide-react";

export default function InvestmentValueSimple() {
  return (
    <section className="w-full font-sans bg-white">
      
      {/* --- Section 1: The Real Value --- */}
      <div className="px-6 py-20 max-md:py-12 mx-auto max-w-7xl lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          
          {/* Left: Text Content */}
          <div>
            <h6 className="text-[#e63410] font-bold uppercase tracking-wider text-sm mb-2">
              Strategic Impact
            </h6>
            <h2 className="text-3xl md:text-4xl font-bold text-[#152869] mb-4 leading-tight">
              The Real Value
            </h2>
            <div className="w-16 h-1 bg-[#e63410] mb-4"></div>

            <div className="space-y-3 text-lg leading-relaxed text-slate-600">
              <p>
                These audits help owners see their business without filters. They bring hidden issues to the surface before they become crises. They create clarity on what to fix first, so you're not wasting energy on the wrong priorities.
              </p>
              <p>
                Good audits align teams with clear responsibilities. They improve margins and cashflow by eliminating waste. They strengthen daily decision-making with better data.
              </p>
              <p className="font-semibold text-[#152869]">
                Most importantly, they build a predictable, scalable organization that doesn't depend on the owner to solve every problem.
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative h-[400px] max-md:h-[300px] w-full bg-slate-100 rounded-lg overflow-hidden shadow-md">
            {/* Replace src with your actual image */}
            <img 
              src="/assets/images/realvalue.png" 
              alt="Business Clarity" 
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* --- Section 2: After the Audit (Different Background for Contrast) --- */}
      <div className="w-full px-6 py-20 max-md:py-12 bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            
            {/* Left: Image (Order swapped for visual balance) */}
            <div className="order-2 lg:order-1 relative h-[450px] max-md:h-[300px] w-full bg-white rounded-lg overflow-hidden shadow-md">
               {/* Replace src with your actual image */}
               <img 
                src="/assets/images/afteraudit.png" 
                alt="Execution Support" 
                className="object-cover w-full h-full"
              />
            </div>

            {/* Right: Text Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#152869] mb-2 leading-tight">
                After the Audit
              </h2>
              <div className="w-16 h-1 bg-[#e63410] mb-4"></div>

              <p className="mb-3 text-lg leading-relaxed text-slate-600">
                The audit is step one. Execution support follows. We provide the structure you need to drive real improvement.
              </p>

              {/* Clean List */}
              <ul className="grid grid-cols-1 gap-2">
                {[
                  "Weekly action planning",
                  "Consulting for sales and operations leaders",
                  "Dashboard and KPI setup",
                  "Process standardization",
                  "Team training",
                  "Automation implementation guidance",
                  "GTM and sales pipeline support",
                  "Productivity monitoring",
                  "Monthly performance reviews"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#e63410]/10 flex items-center justify-center">
                      <Check size={12} className="text-[#e63410]" strokeWidth={3} />
                    </div>
                    <span className="font-medium text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* --- Section 3: Closing Statement --- */}
      <div className="bg-[#152869] py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-medium leading-normal text-white md:text-3xl">
            "You get a partner who stays with you through implementation, not just someone who delivers a report and disappears."
          </h3>
        </div>
      </div>

    </section>
  );
}