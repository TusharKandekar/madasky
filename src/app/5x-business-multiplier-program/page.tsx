import { Metadata } from 'next';
import ConsultingNavbar from '@/components/ConsultingNavbar';
import CapabilitiesHeader from '@/components/CapabilitiesHeader';

import CapabilitiesContent1 from '@/components/CapabilitiesContent1';
import Footer from '@/components/Footer';
import AboutVideo from '@/components/AboutVideo';
import HelpYou from '@/components/HelpYou';
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
import Image from 'next/image';
import BaseUrl from '@/components/BaseUrl';
import type { PageMetaDataResponse } from "@/common/types";

import { getImageAltText, getWebBlogs, fetchMetaDataByPageName, getDataByPageName, filterByWebImage, getImageData, getTestimonials, getTestimonialsByPageName, getEventByPageName } from "@/common/api";
import FaqComponent from '@/components/FaqComponent';

type Faq = {
    question: string;
    answer: string;
};

const title = "The 5X Business Multiplier Program";
let PageMetadata: PageMetaDataResponse;




export async function generateMetadata(): Promise<Metadata> {
    PageMetadata = await fetchMetaDataByPageName({ pageName: "The 5X Business Multiplier Program" });
    // console.log("Metaas: ", PageMetadata);

    return {
        title: PageMetadata.data.meta_title,
        description: PageMetadata.data.meta_desc,
        keywords: PageMetadata.data.meta_keyword,
        authors: {
            name: `${PageMetadata?.data?.author || 'Madasky'}`,
            url: "https://madasky.com",
        },
        alternates: {
            canonical:
                `${BaseUrl().mainurl}5x-business-multiplier-program`
        },

    };
}

export default async function GrowthMarketingAndSales() {
    const arr = ["Key Challenges.png", "5 ways to grow .png"];


    let images;
    let blogData;
    let videoData;
    let galleryData;
    let testimonialData;
    let eventData;
    let serverError = false;

    try {
        images = await getImageAltText(arr);
        blogData = await getDataByPageName(["The 5X Business Multiplier Program", "blogs"]);
        videoData = await getDataByPageName(["The 5X Business Multiplier Program", "videos"]);
        galleryData = await getDataByPageName(["The 5X Business Multiplier Program", "gallery"]);
        testimonialData = await getTestimonialsByPageName("The 5X Business Multiplier Program");
        eventData = await getEventByPageName("The 5X Business Multiplier Program");

    }
    catch (error) {
        // console.error("Server Error:", error);
        serverError = true;
    }

    // console.log("Images", images);
    if (serverError) {
        return <div>Server Error</div>
    }

    const imgAltText = await getImageData(images);
    // console.log("Image Alt Text", imgAltText);

    const faqs: Faq[] = [
        {
            question: 'What is the 5X Business Multiplier Program by Madasky Consulting?',
            answer: 'The 5X Business Multiplier Program is a strategic growth initiative that helps manufacturing companies overcome financial challenges and scale profitability using expert business coaching and customized process optimization.'
        },
        {
            question: 'How does Madasky Consulting help increase business profitability?',
            answer: `Madasky's 5X Program focuses on improving margins, optimizing workflows, and tapping into new revenue streams through guidance from professional business coaches and entrepreneur coaching services.`
        },
        {
            question: 'Can this program help my manufacturing company improve cash flow and sales conversions?',
            answer: 'Yes, the program includes strategies to fix inefficient sales pipelines, boost lead conversion, and implement recurring revenue models for stable and predictable cash flow.'
        },
        {
            question: `Who leads the 5X Business Multiplier Program at Madasky Consulting?`,
            answer: 'The program is led by experienced business development coaches and professional business coaches who specialize in solving growth and profitability issues in the manufacturing sector.'
        },
        {
            question: `Why should I choose Madasky Consulting's 5X Program for my business?`,
            answer: `You should choose it because it offers industry-specific strategies, leadership development, and revenue diversification - ensuring sustainable growth and financial stability in today's competitive market.`
        },
    ];

    return (
        <>


            <ConsultingNavbar
                url={'/growth-marketing-and-sales'}
                title={'Growth Marketing & Sales'}
                navItems={[
                    { title: 'Go to Market Strategy', link: '/go-to-market-strategy' },
                    { title: 'New Age Marketing', link: '/new-age-marketing' },
                    { title: 'Sales Accelerator Program', link: '/sales-accelerator-program' },
                    { title: 'The 5X Business Multiplier Program', link: '/5x-business-multiplier-program' },
                    { title: 'E-Commerce', link: '/growth-marketing-e-commerce' },


                ]}
            />

            <AboutVideo vid1={"/assets/videos/GROWTH MARKETING AND SALES69.mp4"} title={title} des={"Creating and accelerating critical advantages through cutting-edge strategy and operations"} h1={PageMetadata?.data?.h1tag} />

            <div className='w-[80vw] bg-white mx-auto'>

                <div className='w-full my-20'>

                    <CapabilitiesHeader details1={{
                        heading1: "The 5x Business Multiplier Program",
                        paragraph1: "In the dynamic and ever-evolving manufacturing sector, financial challenges often bottleneck growth and profitability. Fluctuating raw material costs, global competition, innovation demands, and compliance pressures erode margins and disrupt strategic goals. At Madasky Consulting, our 5X Business Multiplier Program merges industry expertise with Entrepreneur Coaching Services to transform these challenges into scalable, profit-driven opportunities.",
                        // paragraph2: `At Madasky Consulting, we understand these pain points deeply. Our 5X approach is designed to provide practical, actionable solutions, allowing manufacturers to tackle these challenges head-on while unlocking significant profit opportunities.`,


                    }} border={"border-b"} />

                    <CapabilitiesContent1 details1={{

                        heading1: "Key Financial Challenges",
                        data:
                            [
                                {
                                    data1: "Rising Costs",
                                    data2: "Volatile supply chains and input prices squeeze margins.",
                                },
                                {
                                    data1: "Inefficient Sales Pipelines",
                                    data2: "Poor lead conversion and unpredictable cash flow.",
                                },
                                {
                                    data1: "Low Profitability",
                                    data2: "Unoptimized pricing and processes diminish net gains.",
                                },
                                {
                                    data1: "Untapped Revenue Streams",
                                    data2: "Missed cross-selling, upselling, and service opportunities.",
                                },

                            ],



                        imgSrc: "Key Challenges.png",
                        altText: imgAltText[0],
                        calendarButton: true,
                        btnText: "Unlock Your Next Chapter",



                    }} border={"border-b"} />

                    <CapabilitiesContent1 details1={{
                        heading1: "The Growth Formula: 5 Steps to Accelerate Growth",
                        paragraph1: `Our program, guided by Professional Business Coach methodologies, addresses manufacturing's unique hurdles through actionable strategies:`,


                        data:
                            [
                                {
                                    data1: "Process Optimization & Alignment",
                                    data2: "Redesign fragmented workflows with a Business Development Coach to align sales, production, and compliance teams, reducing delays and costs.",
                                },
                                {
                                    data1: "Customer Retention & Expansion",
                                    data2: "Shift from transactional sales to recurring revenue models using Entrepreneur Coaching Services frameworks for loyalty and long-term growth.",
                                },
                                {
                                    data1: "Margin Maximization",
                                    data2: "Refine pricing strategies and operational efficiency with a Professional Business Coach, targeting hidden cost-saving and value-creation opportunities.",
                                },
                                {
                                    data1: "Revenue Stream Diversification",
                                    data2: "Identify untapped markets, cross-sell strategies, and value-added services through Business Development Coach insights.",
                                },
                                {
                                    data1: "Leadership & Skill Development",
                                    data2: "Equip teams with negotiation, ROI articulation, and CRM adoption skills, supported by Entrepreneur Coaching Services to foster agility and innovation.",
                                },
                            ],

                        imgSrc: "5 ways to grow .png",
                        altText: imgAltText[1],
                        calendarButton: true,
                        btnText: "Lock In Your Meeting",



                    }} border={"border-b"} />


                    <CapabilitiesContent1 details1={{
                        heading1: "Why Partner with Madasky Consulting?",
                        paragraph1: "Our 5X Business Multiplier Program combines Professional Business Coach expertise with manufacturing-specific strategies to deliver:",


                        data:
                            [
                                {
                                    data1: "Scalable Processes",
                                    data2: "Streamline operations to handle global competition and complex buying cycles.",
                                },
                                {
                                    data1: "Profit-Driven Decisions",
                                    data2: "Align pricing, costs, and investments to protect margins.",
                                },
                                {
                                    data1: "Future-Ready Teams",
                                    data2: " Build a culture of innovation and resilience through Entrepreneur Coaching Services.",
                                },

                            ],

                        imgSrc: "Why Choose Madasky Consulting.png",
                        altText: imgAltText[0],
                        calendarButton: true,
                        btnText: "Plan Your Consultation",



                    }} border={"border-b"} />



                    <CapabilitiesHeader details1={{
                        heading1: "Ready to 5X Your Growth?",
                        paragraph1: "Transform financial challenges into opportunities with Madasky Consulting's 5X Business Multiplier Program, powered by Business Development Coaches and Entrepreneur Coaching Experts. Let's unlock sustainable profitability, stability, and market leadership tailored to your goals.",


                    }} border={'border-none'} />

                    <div className='border border-gray-300 w-full h-[1px]'></div>


                    <FaqComponent faqs={faqs} />






                </div>







            </div >





            <div className="p-6 flex h-auto flex-col w-full py-[1vh] bg-[#bce1fd75] bg-[url('/assets/images/homeblogbg.png')] bg-center bg-no-repeat bg-cover  items-center justify-center">

                <VideoSliderWrapper videos={videoData.data} />
                <div className="w-[90%] h-[2px] bg-gray-300"></div>

                <BlogSliderWrapper blogs={blogData.data} />
                <div className="w-[90%] h-[2px] bg-gray-300"></div>

                <GallerySliderWrapper gallery={galleryData.data} />




            </div>
            <HelpYou />
            <Footer />
        </>
    )
}

