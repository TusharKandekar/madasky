"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'; // 🔹 for detecting route changes
import { FaArrowUp } from "react-icons/fa6";
import {
    FaWhatsapp,
    FaInstagram,
    FaFacebookF,
    FaLinkedinIn,
} from 'react-icons/fa';
import { FiYoutube } from 'react-icons/fi';
import FooterItemHeader from './FooterItemHeader';
import CustomButton from '@/components/CustomButton';
import { SiWhatsapp } from "react-icons/si";

// Approved Homepage Block 13 quick links. Keep the original 3-column footer layout.
const footerGroups = [
    { label: "Solutions", links: [
        { title: "Turnkey Factory Projects", link: "/turnkey-factory-projects" },
        { title: "Operations Excellence", link: "/operations-excellence-consulting" },
        { title: "AI-Enabled Manufacturing Intelligence", link: "/ai-manufacturing-intelligence" },
    ] },
    { label: "Intelligence Solutions", links: [
        { title: "Fabric & Raw Material Optimization", link: "/fabric-raw-material-optimization" },
        { title: "Production Planning & Scheduling", link: "/production-planning-scheduling" },
        { title: "Digital Factory & MES", link: "/digital-factory-mes" },
    ] },
    { label: "Industries", links: [
        { title: "Home Textiles", link: "/industries/home-textiles" },
        { title: "Apparel", link: "/industries/apparel" },
        { title: "Textiles", link: "/industries/textiles" },
        { title: "Technical Textiles", link: "/industries/technical-textiles" },
    ] },
    { label: "Resources", links: [
        // No standalone case-studies route in the provided source. Use existing homepage section.
        { title: "Case Studies", link: "/#case-studies" },
        { title: "Insights", link: "/blog" },
        { title: "Factory Diagnostic", link: "/factory-diagnostic" },
    ] },
    { label: "Company", links: [
        { title: "About", link: "/about" },
        { title: "Contact", link: "/contact-us" },
    ] },
];

declare global {
    interface Window {
        $zoho: {
            salesiq: {
                widgetcode: string;
                values: Record<string, unknown>;
                ready: () => void;
            };
        };
    }
}

export default function Footer() {
    const pathname = usePathname(); //  Detects route change
    const [isAtTop, setIsAtTop] = useState(true);
    const [isAtBottom, setIsAtBottom] = useState(false);

    //  Only load Zoho once
    useEffect(() => {
        if (typeof window === 'undefined') return;
        if (document.getElementById('zsiqscript')) return; // Already loaded

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.defer = true;
        script.id = 'zsiqscript';
        script.src = 'https://salesiq.zohopublic.in/widget';

        window.$zoho = window.$zoho || {};
        window.$zoho.salesiq = {
            widgetcode: 'siqa5a2740494f01eaf6db4cc65a53ef884bbf680da14b52ca7e7fe2d14dc874004',
            values: {},
            ready: function () { }
        };

        document.body.appendChild(script);

        // no need to clean it up — we want to persist it across route changes
    }, []);

    // 🔹 Fix position on route change
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const timeout = setTimeout(() => {
            window.dispatchEvent(new Event('resize')); // Force Zoho reposition
        }, 500); // Add delay to wait for DOM to render

        return () => clearTimeout(timeout);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollBottom = window.innerHeight + scrollTop >= document.documentElement.scrollHeight;

            setIsAtTop(scrollTop === 0);
            setIsAtBottom(scrollBottom);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    // window.$zoho?.salesiq?.floatwindow?.visible()


    return (
        <footer className="w-full">
            {/* Main footer content */}
            <div className="container mx-auto w-[90%] py-14 flex flex-col md:flex-row justify-between items-start">
                {/* Left */}
                <div className="w-full pr-4 mb-6 border-gray-300 md:w-1/3 md:mb-0 md:border-r">
                    <Link href={'/'} className="flex items-start justify-start w-full h-auto gap-3">
                        <div className={`relative w-[60%] max-md:w-[80%] h-16 rounded-lg mt-2`}>
                            <Image src={`/assets/images/logo2.png`} alt={"Madasky Consulting"} fill className='object-fill rounded-2xl max-md:object-fill' />
                        </div>
                    </Link>
                    <p className="mt-4 mb-6 text-lg text-gray-600">
                        At Madasky Consulting, our approach is designed to deliver exceptional value and ensure your success.
                    </p>
                    <CustomButton
                        title="READ MORE"
                        customStyles="bg-custom-gradient-3 text-white rounded-full text-sm font-bold px-6 py-2"
                    />
                </div>

                {/* Middle */}
                <div className="w-full px-4 mb-6 border-gray-300 md:w-1/3 md:mb-0 md:border-r">
                    <FooterItemHeader title="QUICK LINKS" />
                    <nav aria-label="Footer quick links" className="grid grid-cols-1 gap-x-5 gap-y-4 mt-4 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
                        {footerGroups.map((group) => (
                            <div key={group.label} className="min-w-0">
                                <h4 className="mb-2 text-sm font-bold text-[#102e55]">{group.label}</h4>
                                <ul className="space-y-1.5">
                                    {group.links.map(({ title, link }) => (
                                        <li key={title}>
                                            <Link href={link} className="flex items-start gap-2 text-sm leading-relaxed text-gray-600 hover:text-[#e1340d]">
                                                <span className="shrink-0 text-xs text-gray-500" aria-hidden="true">▶</span>
                                                <span>{title}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </nav>
                </div>

                {/* Right */}
                <div className="w-full pl-4 md:w-1/3">
                    <FooterItemHeader title="CONTACT DETAILS" />
                    <div className="mt-4 space-y-3 text-lg text-gray-600">
                        <p className="flex items-center">
                            <i className="w-5 mr-3 text-center fa-solid fa-phone"></i>
                            <a href="tel:+917304424496">+91-7304424496</a>
                        </p>
                        <p className="flex items-center">
                            <i className="w-5 mr-3 text-center fa-solid fa-envelope"></i>
                            <a href="mailto:info@madasky.com">info@madasky.com</a>
                        </p>
                        <p className="flex items-start">
                            <i className="w-5 mt-1 mr-3 text-center fa-solid fa-location-dot"></i>
                            <span>
                                Hiranandani Estate, Thane,
                                <br />
                                Maharashtra - 400607
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom strip */}
            <div className="flex items-center justify-center w-full h-16 bg-black">
                <div className="w-[85%] h-full flex items-center justify-between text-white">
                    <span>© 2025 Madasky. All rights reserved.</span>
                    <span className="flex gap-3 text-xl">
                        <a href="https://api.whatsapp.com/send/?phone=7304424496&text=Hi&type=phone_number&app_absent=0">
                            <FaWhatsapp />
                        </a>
                        <a href="https://www.instagram.com/madasky_consulting/">
                            <FaInstagram />
                        </a>
                        <a href="https://www.youtube.com/channel/UCG95pxF2SdRxLxDk_azEuIA">
                            <FiYoutube />
                        </a>
                        <a href="https://www.facebook.com/madaskyconsulting">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.linkedin.com/company/68993529/admin/dashboard/">
                            <FaLinkedinIn />
                        </a>
                    </span>
                </div>
            </div>

            {/* Scroll Buttons */}
            {!isAtTop && (
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="fixed bottom-[8vh] right-3 z-30 px-5 py-4 bg-[#152869] flex items-center rounded-[50%] justify-center max-md:text-xl"
                >
                    <FaArrowUp className='text-white' />
                </button>
            )}

            <a href="https://api.whatsapp.com/send/?phone=7304424496&text=Hi&type=phone_number&app_absent=0">
                <button
                    className="fixed bottom-[8vh] text-2xl left-3 z-30 px-[15px] py-3 bg-green-700 text-white flex items-center justify-center max-md:text-xl rounded-[60%]"
                >
                    <SiWhatsapp />
                </button>
            </a>
        </footer>
    );
}
