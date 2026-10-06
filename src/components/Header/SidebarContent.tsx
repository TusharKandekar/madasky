// import { useState } from 'react';
// import CloseHamburgerIcon from './CloseHamburgerIcon';
// import LogoCombo2 from './LogoCombo2';
// import SidebarNav from './SidebarNav';


// export default function SidebarContent() {

//     const [sidebarVisible, setSidebarVisible] = useState(true);

//     return (
//         <div className={`fixed top-0 left-0 w-full h-screen z-[9999] bg-white flex items-start justify-start ${sidebarVisible ? 'flex' : 'hidden'}`}>
//             <div className="w-[90%] h-full flex flex-col bg-dark-blue items-center justify-center left-0">
//                 <div className="flex w-full h-20 gap-3 border-b-2">
//                     <button onClick={() => setSidebarVisible(!sidebarVisible)} className="flex items-center justify-center w-20 h-full border-r-2 cursor-pointer">
//                         <CloseHamburgerIcon color="white" />
//                     </button>
//                     <LogoCombo2 color="white" />
//                 </div>
//                 <div className="flex flex-col items-start justify-start w-full h-full p-10 gap-14">
//                     <SidebarNav title="About Us" />
//                     <SidebarNav title="Industries" />
//                     <SidebarNav title="Capabilities" />
//                     <SidebarNav title="Career" />
//                     <SidebarNav title="Insights" />

//                 </div>
//             </div>
//         </div>
//     );
// }


// ********************************************************

// import { useState } from 'react';
// import CloseHamburgerIcon from './CloseHamburgerIcon';
// import LogoCombo2 from './LogoCombo2';
// import SidebarNav from './SidebarNav';
// import SidebarNav2 from './SidebarNav2';

// export default function SidebarContent() {
//     const [sidebarVisible, setSidebarVisible] = useState(true);
//     const [currentSection, setCurrentSection] = useState(null);

//     const AboutItems = [
//         { title: 'Who we are', link: '#' },
//         { title: 'Our Leadership and People', link: '/Our-People' },
//         { title: 'Purpose, Mission, Vision and Values', link: '/purpose-vision' },
//         { title: 'Our History', link: '/history' },
//         { title: 'Our Aspiration', link: '/aspiration' },
//         { title: 'How We Work', link: '/how-we-work' }
//     ];

//     const sections = {
//         about: AboutItems,
//         industries: [
//             { title: 'Manufacturing Industries', link: '/manufacturing', img: "/assets/images/339.png" },
//             { title: 'E-Commerce Industries', link: '/e-commerce', img: "/assets/images/manufacturing.png" },
//             // Add more industries here...
//         ],
//         // Add more sections like career, insights, etc.
//     };

//     const handleNavClick = (sectionKey) => {
//         setCurrentSection(sectionKey);
//     };

//     const handleBackClick = () => {
//         setCurrentSection(null);  // Set back to null to return to the main menu
//     };

//     return (
//         <div className={`fixed top-0 left-0 w-full h-screen z-[9999] bg-white flex items-start justify-start ${sidebarVisible ? 'flex' : 'hidden'}`}>
//             <div className="w-[90%] h-full flex flex-col bg-dark-blue items-center justify-center left-0">
//                 <div className="flex w-full h-20 gap-3 border-b-2">
//                     <button onClick={() => setSidebarVisible(!sidebarVisible)} className="flex items-center justify-center w-20 h-full border-r-2 cursor-pointer">
//                         <CloseHamburgerIcon color="white" />
//                     </button>
//                     <LogoCombo2 color="white" />
//                 </div>
//                 <div className="flex flex-col items-start justify-start w-full h-full p-10 gap-14">
//                     {currentSection === null ? (
//                         <>
//                             <SidebarNav title="About Us" onClick={() => handleNavClick('about')} />
//                             <SidebarNav title="Industries" onClick={() => handleNavClick('industries')} />
//                             {/* Add more main navigation items here */}
//                         </>
//                     ) : (
//                         <>
//                         <div className='p-4 bg-black rounded-lg'>
//                         <SidebarNav  title="Back" onClick={handleBackClick} />

//                         </div>
//                             {sections[currentSection].map((item, index) => (
//                                 <SidebarNav2 key={index} title={item.title} link={item.link} />
//                             ))}
//                         </>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }



// ******************************************************


// import { useState } from 'react';
// import CloseHamburgerIcon from './CloseHamburgerIcon';
// import LogoCombo2 from './LogoCombo2';
// import SidebarNav from './SidebarNav';
// import SidebarNav2 from './SidebarNav2';

// export default function SidebarContent() {
//     const [sidebarVisible, setSidebarVisible] = useState(true);
//     const [currentSection, setCurrentSection] = useState(null);

//     const AboutItems = [
//         { title: 'Who we are' },  // Heading
//         { title: 'Our Leadership and People', link: '/Our-People' },
//         { title: 'Purpose, Mission, Vision and Values', link: '/purpose-vision' },
//         { title: 'Our History', link: '/history' },
//         { title: 'Our Aspiration', link: '/aspiration' },
//         { title: 'How We Work', link: '/how-we-work' },  // Heading
//     ];

//     const sections = {
//         about: AboutItems,
//         industries: [
//             { title: 'Manufacturing Industries', link: '/manufacturing', img: "/assets/images/339.png" },
//             { title: 'E-Commerce Industries', link: '/e-commerce', img: "/assets/images/manufacturing.png" },
//             { title: 'Tourism', link: '/tourisum', img: "/assets/images/manufacturing.png" },
//             { title: 'Construction', link: '/construction-consulting', img: "/assets/images/manufacturing.png" },
//             { title: 'Real Estate', link: '/real-state', img: "/assets/images/manufacturing.png" },
//             { title: 'Fashion & Jewellery', link: '/industries', img: "/assets/images/manufacturing.png" },
//             { title: 'Financial Services', link: '/financial-services-consulting', img: "/assets/images/manufacturing.png" },
//             { title: 'Trading & Wholesale', link: '/tranding-wholesale', img: "/assets/images/manufacturing.png" },
//             // Add more industries here...
//         ],
//         career: [
//             { title: 'Home', link: '/careers-home' },
//             { title: 'Explore', link: '/careers-explore' },
//             { title: 'Jobs', link: '/careers-jobs' },
//         ],
//         insights: [
//             { title: 'Blogs', link: '/blog' },
//             { title: 'Events', link: '/events' },
//             { title: 'Gallery', link: '/gallery' },
//             { title: 'Videos', link: '/video' },
//         ]
//     };

//     const handleNavClick = (sectionKey) => {
//         setCurrentSection(sectionKey);
//     };

//     const handleBackClick = () => {
//         setCurrentSection(null);  // Set back to null to return to the main menu
//     };

//     return (
//         <div className={`fixed top-0 left-0 w-full h-screen z-[9999] bg-white flex items-start justify-start ${sidebarVisible ? 'flex' : 'hidden'}`}>
//             <div className="w-[90%] h-full flex flex-col bg-dark-blue items-center justify-center left-0">
//                 <div className="flex w-full h-20 gap-3 border-b-2">
//                     <button onClick={() => setSidebarVisible(!sidebarVisible)} className="flex items-center justify-center w-20 h-full border-r-2 cursor-pointer">
//                         <CloseHamburgerIcon color="white" />
//                     </button>
//                     <LogoCombo2 color="white" />
//                 </div>
//                 <div className="flex flex-col items-start justify-start w-full h-full p-10 gap-14">
//                     {currentSection === null ? (
//                         <>
//                             <SidebarNav title="About Us" onClick={() => handleNavClick('about')} />
//                             <SidebarNav title="Industries" onClick={() => handleNavClick('industries')} />
//                             <SidebarNav title="Career" onClick={() => handleNavClick('career')} />
//                             <SidebarNav title="Insights" onClick={() => handleNavClick('insights')} />
//                             {/* Add more main navigation items here */}
//                         </>
//                     ) : (
//                         <>
//                             <SidebarNav title="Back" onClick={handleBackClick} />
//                             {sections[currentSection].map((item, index) => (
//                                 <SidebarNav2
//                                     key={index}
//                                     title={item.title}
//                                     link={item.link}
//                                     isHeading={!item.link}  // If there's no link, treat it as a heading
//                                 />
//                             ))}
//                         </>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }




// **********************************************************

// import { useState } from 'react';
// import CloseHamburgerIcon from './CloseHamburgerIcon';
// import LogoCombo2 from './LogoCombo2';
// import SidebarNav from './SidebarNav';
// import SidebarNav2 from './SidebarNav2';

// export default function SidebarContent() {
//     const [sidebarVisible, setSidebarVisible] = useState(true);
//     const [currentSection, setCurrentSection] = useState(null);

//     const AboutItems = [
//         { title: 'Who we are' },  // Heading without link
//         { title: 'Our Leadership and People', link: '/Our-People' },
//         { title: 'Purpose, Mission, Vision and Values', link: '/purpose-vision' },
//         { title: 'Our History', link: '/history' },
//         { title: 'Our Aspiration', link: '/aspiration' },
//         { title: 'How We Work', link: '/how-we-work', isHeadingWithLink: true },  // Heading with link
//     ];

//     const CapabilitiesItems = [
//         { title: 'Advisory', link: '/advisory-consulting', isHeadingWithLink: true },  // Heading with link
//         { title: 'Consulting' },  // Heading without link
//         { title: 'Growth, Marketing And Sales', link: '/growth-marketing-sales' },
//         { title: 'Project', link: '/project' },
//         { title: 'Digitalisation And Automation', link: '/project' },
//         { title: 'Operations & Productivity Improvement', link: '/project' },
//         { title: 'People And Organizational Performance', link: '/project' },
//         { title: 'General Management & Strategy', link: '/project' },
//         { title: 'Financial Performance & Cash Flow Management', link: '/project' },
//         { title: 'Solutions', link: '/solutions', isHeadingWithLink: true },  // Heading with link
//     ];


//     const sections = {
//         about: AboutItems,
//         capabilities: CapabilitiesItems,
//         industries: [
//             { title: 'Manufacturing Industries', link: '/manufacturing', img: "/assets/images/339.png" },
//             { title: 'E-Commerce Industries', link: '/e-commerce', img: "/assets/images/manufacturing.png" },
//             { title: 'Tourism', link: '/tourisum', img: "/assets/images/manufacturing.png" },
//             { title: 'Construction', link: '/construction-consulting', img: "/assets/images/manufacturing.png" },
//             { title: 'Real Estate', link: '/real-state', img: "/assets/images/manufacturing.png" },
//             { title: 'Fashion & Jewellery', link: '/industries', img: "/assets/images/manufacturing.png" },
//             { title: 'Financial Services', link: '/financial-services-consulting', img: "/assets/images/manufacturing.png" },
//             { title: 'Trading & Wholesale', link: '/tranding-wholesale', img: "/assets/images/manufacturing.png" },

//         ],
//         career: [
//             { title: 'Home', link: '/careers-home' },
//             { title: 'Explore', link: '/careers-explores' },
//             { title: 'Jobs', link: '/careers-jobs' },
//         ],
//         insights: [
//             { title: 'Blogs', link: '/blog' },
//             { title: 'Events', link: '/events' },
//             { title: 'Gallery', link: '/gallery' },
//             { title: 'Videos', link: '/video' },
//         ]
//     };

//     const handleNavClick = (sectionKey) => {
//         setCurrentSection(sectionKey);
//     };

//     const handleBackClick = () => {
//         setCurrentSection(null);  // Set back to null to return to the main menu
//     };

//     return (
//         <div className={`fixed top-0 left-0 w-full h-screen z-[9999] bg-white flex items-start justify-start ${sidebarVisible ? 'flex' : 'hidden'}`}>
//             <div className="w-[90%] h-full flex flex-col bg-gray-800 items-center justify-center left-0">
//                 <div className="flex w-full h-20 gap-3 border-b-2">
//                     <button onClick={() => setSidebarVisible(!sidebarVisible)} className="flex items-center justify-center w-20 h-full border-r-2 cursor-pointer">
//                         <CloseHamburgerIcon color="white" />
//                     </button>
//                     <LogoCombo2 color="white" />
//                 </div>
//                 <div className="flex flex-col items-start justify-start w-full h-full p-10 gap-14">
//                     {currentSection === null ? (
//                         <>
//                             <SidebarNav title="About Us" onClick={() => handleNavClick('about')} />
//                             <SidebarNav title="Capabilities" onClick={() => handleNavClick('capabilities')} />
//                             <SidebarNav title="Industries" onClick={() => handleNavClick('industries')} />
//                             <SidebarNav title="Career" onClick={() => handleNavClick('career')} />
//                             <SidebarNav title="Insights" onClick={() => handleNavClick('insights')} />
//                             {/* Add more main navigation items here */}
//                         </>
//                     ) : (
//                         <>
//                             <SidebarNav title="Back" onClick={handleBackClick} />
//                             {sections[currentSection].map((item, index) => (
//                                 <SidebarNav2
//                                     key={index}
//                                     title={item.title}
//                                     link={item.link}
//                                     isHeading={!item.link}  // If there's no link, treat it as a heading
//                                     isHeadingWithLink={item.isHeadingWithLink}  // Heading with a link
//                                 />
//                             ))}
//                         </>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }


// ***************************************
"use client";
import { useState } from 'react';
import CloseHamburgerIcon from './CloseHamburgerIcon';
import LogoCombo2 from './LogoCombo2';
import SidebarNav from './SidebarNav';
import SidebarNav2 from './SidebarNav2';
// import { Link } from "react-router-dom";
import Link from 'next/link';
import { RiArrowDownSLine } from "react-icons/ri";

type SubItem = {
  title: string;
  link: string;
};

type SectionItem = {
  title: string;
  link?: string;
  subItems?: SubItem[];
  isHeadingWithLink?: boolean;
  img?: string;
};

type SectionsType = {
  [key: string]: SectionItem[];
};

export default function SidebarContent() {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [currentSection, setCurrentSection] = useState<string | null>(null);

  const AboutItems: SectionItem[] = [
    {
      title: 'Who we are',
      subItems: [
        { title: 'Our Leadership and People', link: '/our-people' },
        { title: 'Purpose, Mission, Vision and Values', link: '/purpose-vision' },
        { title: 'Our History', link: '/history' },
        { title: 'Our Aspiration', link: '/aspiration' }
      ]
    },
    { title: 'How We Work', link: '/how-we-work', isHeadingWithLink: true },
  ];

  const CapabilitiesItems: SectionItem[] = [
    { title: 'Advisory', link: '/advisory-consulting', isHeadingWithLink: true },
    {
      title: 'Consulting ',
      subItems: [
        { title: 'Business Strategy', link: '/business-strategy-consulting' },
        { title: 'Growth, Marketing & Sales', link: '/growth-marketing-consulting' },
        { title: 'Project - Factory Technical Design', link: '/factory-technical-design-consulting' },
        { title: 'Warehousing Solutions', link: '/warehousing-solutions-consulting' },
        { title: 'Operations Excellence', link: '/operations-excellence-consulting' },
        { title: ' Automation In Manufacturing', link: '/automation-in-manufacturing-consulting' },
        { title: 'Supply Chain Management', link: '/supply-chain-management-consulting' },
        { title: 'People & Organisational Performance', link: '/people-and-organisational-performance-consulting' },
        { title: 'Sustainability', link: '/sustainability-consulting' },
        { title: 'Financial Strategy', link: '/financial-strategy-consulting' },
        { title: 'MSME GrowX', link: '/msme-growx-consulting' },
      ]
    },
    { title: 'Digital Transformation', link: '/digital-transformation', isHeadingWithLink: true },
    { title: 'People', link: '/people', isHeadingWithLink: true },
  ];

  const sections: SectionsType = {
    about: AboutItems,
    capabilities: CapabilitiesItems,
    industries: [
      { title: 'Manufacturing', link: '/manufacturing', img: "/assets/images/339.png" },
      { title: 'Fashion & Jewellery', link: '/fashion-jewellery', img: "/assets/images/manufacturing.png" },
      { title: 'E-Commerce', link: '/e-commerce-consulting', img: "/assets/images/manufacturing.png" },
      { title: 'Construction', link: '/construction-consulting', img: "/assets/images/manufacturing.png" },
      { title: 'Packaging & Paper', link: '/packaging-and-paper', img: "/assets/images/manufacturing.png" },
      { title: 'Tourism', link: '/tourism', img: "/assets/images/manufacturing.png" },
      { title: 'Consumer Products', link: '/consumer-products-consulting', img: "/assets/images/manufacturing.png" },
      { title: 'Financial Services', link: '/financial-services-consulting', img: "/assets/images/manufacturing.png" },
    ],
    career: [
      { title: 'Home', link: '/careers-home' },
      { title: 'Explore', link: '/careers-explore' },
      { title: 'Our Experts - ProXperts', link: '/pro-experts' },
      { title: 'Jobs', link: '/careers-jobs' },
    ],
    insights: [
      { title: 'Blogs', link: '/blog' },
      { title: 'Events', link: '/events' },
      { title: 'Gallery', link: '/gallery' },
      { title: 'Videos', link: '/video' },
    ]
  };

  const handleNavClick = (sectionKey: string) => {
    setCurrentSection(sectionKey);
  };

  const handleBackClick = () => {
    setCurrentSection(null);
  };

  return (
    <div className={`fixed top-0 left-0 w-full h-screen z-[9999] bg-white flex items-start justify-start ${sidebarVisible ? 'flex' : 'hidden'}`}>
      <div className="w-[90%] h-full flex flex-col bg-gray-800 items-center justify-center left-0">
        <div className="flex w-full h-20 gap-3 border-b-2 border-white">
          <button onClick={() => setSidebarVisible(!sidebarVisible)} className="flex items-center justify-center w-20 h-full border-r-2 border-white cursor-pointer">
            <CloseHamburgerIcon color="white" />
          </button>
          <LogoCombo2 color="white" />
        </div>

        <div className="flex flex-col items-start justify-start w-full h-full gap-6 p-10 overflow-y-scroll">
          {currentSection === null ? (
            <>
              <SidebarNav title="Home" onClick={() => window.location.href = '/'} />
              <SidebarNav title="About Us" onClick={() => handleNavClick('about')} />
              <SidebarNav title="Capabilities" onClick={() => handleNavClick('capabilities')} />
              <SidebarNav title="Audit Series" onClick={() => window.location.href = '/audit'} />
              <SidebarNav title="Industries" onClick={() => handleNavClick('industries')} />

              <SidebarNav title="Career" onClick={() => handleNavClick('career')} />
              <SidebarNav title="Insights" onClick={() => handleNavClick('insights')} />
            </>
          ) : (
            <>
              <SidebarNav title="Back" onClick={handleBackClick} />
              {sections[currentSection]?.map((item, index) => (
                <SidebarNav2
                  key={index}
                  title={item.title}
                  link={item.link}
                  isHeading={!item.link}
                  subItems={item.subItems}
                />
              ))}
            </>
          )}

          {currentSection === null && (
            <div className='text-[#ffffffb5] max-md:mb-16 max-md:ml-1 max-md:mt-8'>
              <p>&copy; 2024, MADASKY. All Rights Reserved.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
