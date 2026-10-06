// "use client";
// import { useState } from 'react';
// import HamburgerIcon from '@/components/Header/HamburgerIcon';
// import SidebarContent from './SidebarContent';
// import SidebarContent2 from './SidebarContent2';
// import SidebarContent3 from './SidebarContent3';
// import SidebarContent4 from './SidebarContent4';
// import SidebarContent5 from './SidebarContent5';
// import SidebarContent6 from './SidebarContent6';
// import SidebarContent7 from './SidebarContent7';
// import SidebarContent8 from './SidebarContent8';


// export default function Sidebar() {
//     const [sidebarOpen, setSidebarOpen] = useState(false);

//     let pageName = window.location.pathname;
//     console.log("kslkclsklklkldxksalklsakl", pageName)

//     return (
//         <div className="h-full overflow-hidden">
//             <button
//                 onClick={() => setSidebarOpen(!sidebarOpen)}
//                 className="h-full w-12 flex items-center justify-between  cursor-pointer max-xl:text-[60px]"
//             >
//                 <HamburgerIcon />
//             </button>
//             {/* {sidebarOpen ? <SidebarContent /> : null} */}

//             {sidebarOpen ?

//                 (
//                     pageName == "Growth Marketing And Sales" || pageName == "Go to Market Strategy" || pageName == "New Age Marketing" || pageName == "Sales Accelerator Program" || pageName == "The 5X Business Multiplier Program" || pageName == "E-Commerce" ? <SidebarContent2 sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> :

//                         pageName == "Project - Factory Technical Design" || pageName == "Plant Layout" || pageName == "Technical Consulting" || pageName == "Manpower Planning" || pageName == "Process & Material Flow" ? <SidebarContent3 /> :

//                             pageName == "Warehousing Solutions" || pageName == "Facility Design - Different types of Warehouses" || pageName == "Material Handling Equipment" || pageName == "Logistics and Supply Chain Services" ? <SidebarContent4 /> :

//                                 pageName == "Operations Excellence" || pageName == "Productivity & Efficiency Improvement" || pageName == "Implementation Support" || pageName == "Delivery Performance & Lead Time Reduction Program" || pageName == "Sampling - Lead Time Reduction" || pageName == "Leverage Technology For Innovation & Efficiency" ? <SidebarContent5 /> :

//                                     pageName == "People And Organizational Performance" || pageName == "Leadership Development & Talent Management" || pageName == "Organization Design - Position, Reporting" || pageName == "Culture Transformation - Executive Coaching" || pageName == "Performance Management & Rewards" ? <SidebarContent6 /> :

//                                         pageName == "Financial Strategy" || pageName == "Rapid Cash Generation" || pageName == "Performance Transformation" || pageName == "Cost Transformation" || pageName == "Working Capital Optimisation" ? <SidebarContent7 /> :

//                                             pageName == "People" || pageName == "Talent Acquisition" || pageName == "People - Skilling" ? <SidebarContent8 /> :

//                                                 <SidebarContent />
//                 )

//                 : null}


//         </div>
//     );
// }

// *****************************************************************************************




"use client";
import { useState, useEffect } from 'react';
import HamburgerIcon from '@/components/Header/HamburgerIcon';
import SidebarContent from './SidebarContent';
import SidebarContent2 from './SidebarContent2';
import SidebarContent3 from './SidebarContent3';
import SidebarContent4 from './SidebarContent4';
import SidebarContent5 from './SidebarContent5';
import SidebarContent6 from './SidebarContent6';
import SidebarContent7 from './SidebarContent7';
import SidebarContent8 from './SidebarContent8';

export default function Sidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [pageName, setPageName] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setPageName(window.location.pathname.toLowerCase());
        }
    }, []);

    const matchPath = (paths: string[]) => paths.includes(pageName);

    return (
        <div className="h-full overflow-hidden">
            <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="h-full w-8 flex items-center justify-between cursor-pointer max-xl:text-[60px]"
            >
                <HamburgerIcon />
            </button>

            {sidebarOpen && (
                matchPath([
                    '/growth-marketing-consulting',
                    '/go-to-market-strategy',
                    '/new-age-marketing',
                    '/sales-accelerator-program',
                    '/5x-business-multiplier-program',
                    '/growth-marketing-e-commerce',
                ]) ? <SidebarContent2/> :

                matchPath([
                    '/factory-technical-design-consulting',
                    '/plant-layout-consulting',
                    '/technical-consulting',
                    '/manpower-planning-consulting',
                    '/process-and-material-flow-consulting',
                ]) ? <SidebarContent3 /> :

                matchPath([
                    '/warehousing-solutions-consulting',
                    '/facility-design',
                    '/material-handling-equipment',
                    '/logistics-and-supply-chain-services',
                ]) ? <SidebarContent4 /> :

                matchPath([
                    '/operations-excellence-consulting',
                    '/productivity-and-efficiency-improvement',
                    '/implementation-support',
                    '/delivery-performance-and-lead-time-reduction-program',
                    '/sampling-lead-time-reduction',
                    '/leverage-technology-for-innovation-and-efficiency',
                ]) ? <SidebarContent5 /> :

                matchPath([
                    '/people-and-organisational-performance-consulting',
                    '/leadership-development-and-talent-management',
                    '/organization-design',
                    '/culture-transformation',
                    '/performance-management-and-rewards',
                ]) ? <SidebarContent6 /> :

                matchPath([
                    '/financial-strategy-consulting',
                    '/rapid-cash-generation-consulting',
                    '/performance-transformation-consulting',
                    '/cost-transformation-consulting',
                    '/working-capital-optimisation-consulting',
                ]) ? <SidebarContent7 /> :

                matchPath([
                    '/people',
                    '/talent-acquisition-consulting',
                    '/people-skilling-consulting',
                ]) ? <SidebarContent8 /> :

                <SidebarContent />
            )}
        </div>
    );
}
