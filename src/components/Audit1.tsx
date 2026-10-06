"use client";

import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';


const socialLinksText: string[] = [
    'Facebook',
    'X',
    'LinkedIn',
    'Instagram',
];


const backgroundImages: string[] = [
    'url("/assets/images/hero-slide-1.jpg")',
    'url("/assets/images/hero-slide-2.jpg")',
    'url("/assets/images/hero-slide-3.jpg")',
];

const Audit1: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = backgroundImages.length;


    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }, 3000);

        return () => clearInterval(timer);
    }, [totalSlides]);

    const goToNext = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const goToPrev = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };


    const titles = [
        { main: 'Business Performance Audits for', short: 'Manufacturing Companies' },
        { main: 'Where Accounting Meets Innovation Build Smarter With Exrox', short: 'Smarter With Exrox' },
        { main: 'Strategic Financial Solutions For Sustainable Growth', short: 'Sustainable Growth' },
    ];

    const currentTitle = titles[0];




    return (
      <section className="relative h-[100vh] min-h-[600px] max-md:h-full  w-full overflow-hidden text-white isolate">
    {backgroundImages.map((bgUrl, index) => (
        <div
            key={index}
            // CHANGED: Removed max-md:h-[60vh] so bg covers full screen on mobile
            className={`max-md:h-[80vh] absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 -z-10'
                }`}
            style={{ backgroundImage: bgUrl }}
        >
            <div className="absolute inset-0 bg-black/50 backdrop-brightness-75"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-transparent"></div>
        </div>
    ))}

    {/* CHANGED: Added flex-col for mobile, center alignment for mobile */}
    <div className="relative z-10 flex flex-col md:flex-row w-full h-full max-md:h-4/5 px-6 py-12 max-md:pt-24 max-md:pb-32 mx-auto max-w-7xl md:py-20">

        {/* CHANGED: w-full on mobile, added vertical spacing */}
        <div className="flex flex-col justify-start md:justify-center w-full md:w-2/3 h-auto md:h-full max-w-3xl z-30">
            <h2 className="text-3xl sm:text-6xl md:text-3xl lg:text-[3.5rem] font-extrabold leading-tight tracking-tight text-left">
                Business Performance <br />Audits for
                <span className="block mt-1 text-green-200 lg-[3.8rem]">
                    {currentTitle.short}
                </span>
            </h2>
        </div>

        {/* CHANGED: 
           1. Switched from 'absolute' to 'relative' on mobile (max-md) so it stacks below text
           2. Reset coordinates (top-auto, right-auto) for mobile
           3. Full width on mobile
        */}
        <div className="flex flex-col items-start max-w-xs p-6 text-sm text-right 
                        max-md:relative max-md:w-full max-md:max-w-none max-md:px-0  max-md:transform-none
                        md:absolute md:top-1/2 md:right-6 md:-translate-y-1/2 lg:right-0 z-20">

            {/* Hidden spacer on mobile to save space */}
            <div className="w-full pb-4 text-right max-md:hidden">
                <div className="h-[100px] w-full"></div>
            </div>

            <p className="mt-2 text-lg text-left text-gray-200 max-md:text-base">
                Practical insights that drive real results in revenue,
                cash, and productivity
            </p>

            <button
                className="flex items-center justify-center mt-6 space-x-2 px-6 py-2.5 bg-white text-black font-medium rounded-full shadow-xl transition-colors duration-300 hover:bg-gray-100"
            >
                <ArrowRight size={16} className="rotate-0" />
                <span>Explore Services</span>
            </button>
        </div>

        {/* Social Links - Kept hidden on mobile as per original code */}
        <div className="absolute z-40 flex-col hidden space-y-2 text-gray-400 bottom-10 left-6 sm:flex">
            {socialLinksText.map((name) => (
                <span key={name} className="text-[16px] font-medium transition-colors cursor-pointer hover:text-white">
                    {name}
                </span>
            ))}
        </div>

        {/* CHANGED: Added max-md:w-full and justify-between for better mobile spacing */}
        <div className="absolute left-0 right-0 z-20 flex items-end justify-end px-6 mx-auto bottom-10 max-w-7xl max-md:justify-between">

            <div className="flex items-baseline mr-4 space-x-1 text-4xl font-light">
                <span className="font-semibold text-green-200">
                    {String(currentSlide + 1).padStart(2, '0')}
                </span>
                <span className="text-xl">
                    / {String(totalSlides).padStart(2, '0')}
                </span>
            </div>

            <div className="flex space-x-4">
                <button
                    onClick={goToPrev}
                    className="p-3 transition-colors border rounded-full border-white/50 hover:border-white hover:bg-white/10"
                >
                    <ChevronRight className="rotate-180" size={24} />
                </button>
                <button
                    onClick={goToNext}
                    className="p-3 transition-colors border rounded-full border-white/50 hover:border-white hover:bg-white/10"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>

    </div>
</section>
    );
};

export default Audit1;