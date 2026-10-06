import { Metadata } from 'next';
import ConsultingNavbar from '@/components/ConsultingNavbar';
import CapabilitiesHeader from '@/components/CapabilitiesHeader';
// import CapabilitiesHeader2 from '/components/CapabilitiesHeader2';
import CapabilitiesContent1 from '@/components/CapabilitiesContent1';
import CapabilitiesContent2 from '@/components/CapabilitiesContent2';
import Footer from '@/components/Footer';
import AboutVideo from '@/components/AboutVideo';
import HelpYou from '@/components/HelpYou';
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
import BaseUrl from '@/components/BaseUrl';
import type { PageMetaDataResponse } from "@/common/types";
import FaqComponent from '@/components/FaqComponent';
import { getImageAltText, fetchMetaDataByPageName, getWebBlogs, getDataByPageName, filterByWebImage, getImageData, getTestimonials, getTestimonialsByPageName, getEventByPageName } from "@/common/api";
const title = "Sales Accelerator Program";
let PageMetadata: PageMetaDataResponse;


type Faq = {
    question: string;
    answer: string;
};


export async function generateMetadata(): Promise<Metadata> {
    PageMetadata = await fetchMetaDataByPageName({ pageName: "Sales Accelerator Program" });
    //   console.log("Metaas: ", PageMetadata);

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
                `${BaseUrl().mainurl}sales-accelerator-program`
        },

    };
}

import ServerError from '@/components/ServerError';

export default async function SalesAcceleratorProgram() {
    const arr = ["Key Challenges.png", "Tailored Solutions.png"];


    let images;
    let blogData;
    let videoData;
    let galleryData;
    let testimonialData;
    let eventData;
    let serverError = false;

    try {
        images = await getImageAltText(arr);
        blogData = await getDataByPageName(["Sales Accelerator Program", "blogs"]);
        videoData = await getDataByPageName(["Sales Accelerator Program", "videos"]);
        galleryData = await getDataByPageName(["Sales Accelerator Program", "gallery"]);
        testimonialData = await getTestimonialsByPageName("Sales Accelerator Program");
        eventData = await getEventByPageName("Sales Accelerator Program");

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
            question: 'What is the Sales Accelerator Program offered by Madasky Consulting?',
            answer: 'The Sales Accelerator Program is a specialized consulting solution designed to boost sales performance for manufacturing companies by aligning sales processes, enhancing CRM adoption, and equipping teams with value-based selling skills.'
        },
        {
            question: 'How does the Sales Accelerator Program help manufacturing sales teams?',
            answer: 'This program addresses key challenges like fragmented processes, long buying cycles, and global competition by offering CRM training, localized sales playbooks, and strategic alignment across departments.'
        },
        {
            question: `Who can benefit from Madasky's Sales and Marketing Consulting services?`,
            answer: 'Manufacturing businesses looking to improve sales efficiency, train their teams in ROI-based selling, and compete effectively in global markets can benefit from the Sales Accelerator Program.'
        },
        {
            question: `Does this program include CRM and data analytics support?`,
            answer: `Yes, Madasky Consulting's Sales Accelerator Program helps teams fully utilize CRM tools and marketing analytics to make informed, data-driven sales decisions.`
        },
        {
            question: 'Why choose Madasky Consulting for sales transformation?',
            answer: 'Madasky Consulting combines strategic insight with hands-on marketing and sales consulting, delivering a customized, results-driven program that boosts sales, strengthens negotiations, and supports sustainable growth.'
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
                        heading1: "Sales Accelerator Program",
                        paragraph1: "In the fast-paced manufacturing sector, achieving consistent sales growth requires a blend of strategic insight and executional excellence. As market dynamics evolve, businesses face challenges like shorter product lifecycles, global competition, and the need for tailored customer solutions. Sales and Marketing Consulting Firms like Madasky Consulting design programs that transform these challenges into opportunities, ensuring your team leads rather than follows.",


                    }} border={"border-b"} />



                    <CapabilitiesContent1 details1={{
                        heading1: "Key Challenges Faced by Sales Teams",


                        data:
                            [
                                {
                                    data1: "Fragmented Sales Processes",
                                    data2: "Misalignment between sales, production, and marketing teams leads to delays and missed opportunities.",
                                },
                                {
                                    data1: "Complex Buying Cycles",
                                    data2: "Difficulty navigating multi-stakeholder decision-making processes.",
                                },
                                {
                                    data1: "Technology Resistance",
                                    data2: "Underutilized CRM tools despite advancements in Marketing Sales Consulting insights.",
                                },
                                {
                                    data1: "Global Competition",
                                    data2: "Price wars and competitive offers erode margins.",
                                },

                            ],

                        imgSrc: "Key Challenges.png",
                        altText: imgAltText[0],
                        calendarButton: true,
                        btnText: "Book Your Session",



                    }} border={"border-b"} />





                    <CapabilitiesContent2 details1={{
                        heading1: "Tailored Solutions: Your Path to Sales Excellence",
                        heading2: "Madasky Consulting's Sales Accelerator Program, backed by Sales and Marketing Consultancy Services, addresses manufacturing-specific challenges with precision:",
                        subHeading: "Strategic Alignment & Process Optimization",

                        data:
                            [
                                {
                                    data1: "Integrated Sales Process Redesign",
                                    data2: `Align sales, production, and marketing workflows for seamless lead-to-order execution.`,
                                },
                                {
                                    data1: "CRM Adoption & Analytics",
                                    data2: "Leverage Marketing Consulting Services to drive tool utilization and data-driven decisions.",
                                },
                                {
                                    data1: "Skill Development & Differentiation",
                                    data2: "Value Selling Frameworks: Shift from price-based pitches to ROI-focused conversations, supported by Sales and Marketing Consulting methodologies.",
                                },
                                {
                                    data1: "Product Expertise Training",
                                    data2: "Equip teams to articulate technical specifications and long-term benefits confidently.",
                                },
                                {
                                    data1: "Global & Local Agility",
                                    data2: "Stakeholder Influence Strategies: Train teams to engage decision-makers in complex buying cycles.",
                                },
                                {
                                    data1: "Localized Sales Playbooks",
                                    data2: "Counter global competition with strategies refined by Sales and Marketing Consulting Firms.",
                                },
                            ],

                        data2:
                            [
                                // {
                                //     data1: "Salesforce Training on Advanced Negotiation",
                                //     data2: "Build robust skills to handle objections, navigate price-sensitive discussions, and close high-value deals.",
                                // },
                                // {
                                //     data1: "Global Sales Strategy Development",
                                //     data2: "Empower your team to adapt to global market pressures by creating localized approaches to resonate with diverse audiences.",
                                // },



                            ],

                        imgSrc: "Tailored Solutions.png",
                        altText: imgAltText[1],
                        calendarButton: true,
                        btnText: "Reserve Your Time",



                    }} border={'border-b'} />


                    <CapabilitiesContent1 details1={{
                        heading1: "The Impact of the Sales Accelerator Program",
                        paragraph1: "Our program, powered by Sales and Marketing Consultancy Services, delivers transformative outcomes:",


                        data:
                            [
                                {
                                    data1: "Streamlined Processes",
                                    data2: "Eliminate inefficiencies by aligning sales, marketing, and operations.",
                                },
                                {
                                    data1: "Data-Driven Decisions",
                                    data2: "Integrate CRM insights and Marketing Sales Consulting analytics to prioritize high-value opportunities.",
                                },
                                {
                                    data1: "Confident Negotiations",
                                    data2: "Close deals faster with advanced objection-handling and value-based positioning.",
                                },
                                {
                                    data1: "Global Readiness",
                                    data2: "Equip teams to adapt strategies for diverse markets while maintaining brand consistency.",
                                },

                            ],

                        paragraph2: "By combining Marketing Consulting Services with sales excellence frameworks, we foster a culture of high performance, agility, and sustained growth. The result? Teams that lead with innovation, trust, and measurable results in an evolving manufacturing landscape.",

                        imgSrc: "Impact of a New Age Marketing Approach.png",
                        altText: imgAltText[0],
                        calendarButton: true,
                        btnText: "Book Your Free Strategy Call",



                    }} border={"border-b"} />





                    <CapabilitiesHeader details1={{
                        heading1: "Ready to accelerate your sales performance?",
                        paragraph1: "Partner with Madasky Consulting's Sales and Marketing Consulting experts to build a resilient, future-ready sales force.",



                    }} border={"border-none"} />

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

