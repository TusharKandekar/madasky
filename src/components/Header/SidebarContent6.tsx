"use client";
/* eslint-disable @next/next/no-html-link-for-pages */

import { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
import Link from 'next/link';

import CloseHamburgerIcon from './CloseHamburgerIcon';
import LogoCombo2 from './LogoCombo2';
import SidebarNav from './SidebarNav';
import SidebarNav2 from './SidebarNav2';
import { RiArrowDownSLine } from "react-icons/ri";
// import { getPageName, getBlogsByPage, formatDate, getBaseURL, getImagesAltText3 } from '../components/CommonData';
import { FaArrowLeftLong } from "react-icons/fa6";


export default function SidebarContent2() {
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [currentSection, setCurrentSection] = useState<string | null>(null);



    const AboutItems = [
        {
            title: 'Who we are',
            subItems: [
                { title: 'Our Leadership and People', link: '/Our-People' },
                { title: 'Purpose, Mission, Vision and Values', link: '/purpose-vision' },
                { title: 'Our History', link: '/history' },
                { title: 'Our Aspiration', link: '/aspiration' }
            ]
        },
        { title: 'How We Work', link: '/how-we-work', isHeadingWithLink: true },
    ];

    const CapabilitiesItems = [
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
    ];

    const sections = {
        about: AboutItems,
        capabilities: CapabilitiesItems,
        industries: [
            { title: 'Manufacturing', link: '/manufacturing', img: "/assets/images/339.png" },
            { title: 'Fashion & Jewellery', link: '/fashion-jewellery', img: "/assets/images/manufacturing.png" },
            { title: 'E-Commerce', link: '/e-commerce-consulting', img: "/assets/images/manufacturing.png" },
            { title: 'Construction', link: '/construction-consulting', img: "/assets/images/manufacturing.png" },
            { title: 'Trading & Wholesale', link: '/tranding-wholesale', img: "/assets/images/manufacturing.png" },
            { title: 'Tourism', link: '/tourism', img: "/assets/images/manufacturing.png" },
            { title: 'Real Estate', link: '/real-state', img: "/assets/images/manufacturing.png" },
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


             

                <div className="flex flex-col items-start justify-start w-full h-full gap-6 p-10">

                    <div className=''>

                        <ul className='flex flex-col gap-4 list-disc'>


                            <a href="/">
                                <li className='flex gap-2 text-white'><FaArrowLeftLong />Back</li>
                            </a>

                            <a href="/leadership-development-and-talent-management">
                                <li className='text-xl text-white border-b border-gray-500 text-md'>Leadership Development & Talent Management</li>
                            </a>

                            <a href="/organization-design">
                                <li className='text-xl text-white border-b border-gray-500'>Organization Design - Position, Reporting</li>
                            </a>

                            <a href="/culture-transformation">
                                <li className='text-xl text-white border-b border-gray-500'>Culture Transformation - Executive Coaching</li>
                            </a>

                            <a href="/performance-management-and-rewards">
                                <li className='text-xl text-white border-b border-gray-500'>Performance Management & Rewards</li>
                            </a>

                                           


                        </ul>



                    </div>



                </div>


            </div>

        </div>
    );
}

