import { Metadata } from 'next';
import ConsultingNavbar from '@/components/ConsultingNavbar';
import CapabilitiesHeader from '@/components/CapabilitiesHeader';
import CapabilitiesHeader2 from '@/components/CapabilitiesHeader2';
import CapabilitiesContent1 from '@/components/CapabilitiesContent1';
import CapabilitiesContent2 from '@/components/CapabilitiesContent2';
import Footer from '@/components/Footer';
import AboutVideo from '@/components/AboutVideo';
import HelpYou from '@/components/HelpYou';
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
import BaseUrl from '@/components/BaseUrl';
import { getImageAltText, fetchMetaDataByPageName, getWebBlogs, getDataByPageName, filterByWebImage, getImageData, getTestimonials, getTestimonialsByPageName, getEventByPageName } from "@/common/api";
import ServerError from '@/components/ServerError';
import type { PageMetaDataResponse } from "@/common/types";
import FaqComponent from '@/components/FaqComponent';

type Faq = {
    question: string;
    answer: string;
};


const title = "New Age Marketing";
let PageMetadata: PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
    PageMetadata = await fetchMetaDataByPageName({ pageName: "New Age Marketing" });
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
                `${BaseUrl().mainurl}new-age-marketing`
        },

    };
}




export default async function GrowthMarketingAndSales() {
    const arr = ["Key Challenges.png", "Tailored Solutions.png", "Impact of a New Age Marketing Approach.png"];


    let images;
    let blogData;
    let videoData;
    let galleryData;
    let testimonialData;
    let eventData;
    let serverError = false;

    try {
        images = await getImageAltText(arr);
        blogData = await getDataByPageName(["New Age Marketing", "blogs"]);
        videoData = await getDataByPageName(["New Age Marketing", "videos"]);
        galleryData = await getDataByPageName(["New Age Marketing", "gallery"]);
        testimonialData = await getTestimonialsByPageName("New Age Marketing");
        eventData = await getEventByPageName("New Age Marketing");

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
            question: 'What is the New Age Marketing Program at Madasky Consulting?',
            answer: 'The New Age Marketing Program is a strategic solution designed by Madasky Consulting to help manufacturing businesses improve branding, customer engagement, and digital marketing performance using modern tools and expert consultants.'
        },
        {
            question: 'How does Madasky Consulting help with digital marketing for manufacturing companies?',
            answer: 'Madasky Consulting provides expert guidance through digital marketing consultants, helping manufacturers adopt CRM systems, analyze customer journeys, optimize budgets, and run omni-channel campaigns for better reach and ROI.'
        },
        {
            question: 'Can this marketing program help small businesses grow online?',
            answer: 'Yes, the New Age Marketing Program includes tailored strategies for small businesses with help from small business marketing consultants, focusing on short-term wins, funnel optimization, and skill-building for internal teams.'
        },
        {
            question: `What kind of experts are involved in the New Age Marketing Program?`,
            answer: 'The program is supported by digital marketing consultants, branding consultants, and social media marketing consultants who work together to build unified brand messaging and data-driven campaigns.'
        },
        {
            question: 'Why should I choose Madasky Consulting for marketing strategy?',
            answer: 'Madasky Consulting offers a results-oriented approach with personalized marketing strategies, real-time analytics, and industry-specific insights to help businesses scale efficiently and achieve measurable marketing success.'
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
                        heading1: "New Age Marketing Program",
                        paragraph1: "In today's rapidly evolving manufacturing sector, companies face the challenge of connecting meaningfully with their markets while maintaining operational excellence. Traditional strategies are no longer sufficient in the face of shifting customer expectations, technological advancements, and heightened competition. A robust New Age Marketing Program, guided by Digital Marketing Consultant expertise, is essential to navigate these complexities and drive impactful outcomes.",


                    }} border={"border-b"} />



                    <CapabilitiesContent1 details1={{
                        heading1: "Key Challenges Faced by the Industry",


                        data:
                            [
                                {
                                    data1: "Fragmented Customer Journeys",
                                    data2: "Digital platforms complicate the mapping of interactions across touchpoints.",
                                },
                                {
                                    data1: "Inconsistent Brand Positioning",
                                    data2: "Struggles to unify messaging for B2B and B2C audiences.",
                                },
                                {
                                    data1: "Limited Digital Adoption",
                                    data2: "Lagging use of CRM systems and analytics tools.",
                                },
                                {
                                    data1: "Inefficient Budget Allocation",
                                    data2: "Missed opportunities in high-potential channels.",
                                },

                            ],

                        imgSrc: "Key Challenges.png",
                        altText: imgAltText[0],
                        calendarButton: true,
                        btnText: "Unlock Your Next Chapter",



                    }} border={"border-b"} />

                    <CapabilitiesHeader2 details1={{
                        heading1: "Impact of a New Age Marketing Approach",
                        paragraph1: "A New Age Marketing Program transforms challenges into opportunities by aligning organizational purpose, leveraging modern tools, and fostering customer-centric strategies. For Small Business Marketing Consultants, this approach ensures scalability, while Online Marketing Consultants drive precision through data and technology.",
                        imgSrc: "Impact of a New Age Marketing Approach.png",
                        altText: imgAltText[2]


                    }} border={"border-b"} />



                    <CapabilitiesContent2 details1={{
                        heading1: "Tailored Solutions Offered by Madasky Consulting",
                        heading2: "Our New Age Marketing Program blends innovation with practicality, offering manufacturing businesses solutions such as:",
                        subHeading: "Strategic Branding & Positioning",


                        data:
                            [
                                {
                                    data1: "Core Purpose Development",
                                    data2: `Define your brand's “why” with a Branding Consultant to inspire teams and resonate with audiences.`,
                                },
                                {
                                    data1: "SMART Marketing Objectives",
                                    data2: "Set measurable goals aligned with business outcomes, supported by Social Media Consultant insights for cohesive campaigns.",
                                },
                                {
                                    data1: "Digital & Omni-Channel Excellence",
                                    data2: "Customer Journey Mapping: Streamline interactions across channels with Online Marketing Consultant frameworks.",
                                },
                                {
                                    data1: "Advanced CRM & Analytics",
                                    data2: "Implement tools for data-driven decisions, guided by Digital Marketing Consultant expertise.",
                                },
                                {
                                    data1: "Omni-Channel Engagement",
                                    data2: "Maximize reach through strategies designed by Social Media Marketing Consultants, integrating platforms like LinkedIn and industry forums.",
                                },


                            ],

                        data2:
                            [
                                {
                                    data1: "Execution & Optimization",
                                    data2: "90-Day Execution Plans: Achieve short-term wins while advancing long-term goals with Small Business Marketing Consultant support.",
                                },
                                {
                                    data1: "Marketing Funnel Optimization",
                                    data2: "Improve conversions with insights from Social Media Marketing Consultants and analytics experts.",
                                },
                                {
                                    data1: "Budget Optimization",
                                    data2: "Allocate resources to high-impact areas with strategies refined by Online Marketing Consultants.",
                                },
                                {
                                    data1: "Team & Resource Empowerment",
                                    data2: "Time Management & Skill Building: Equip teams to balance creativity, analytics, and promotions.",
                                },
                                {
                                    data1: "Branding & Messaging",
                                    data2: "Craft compelling narratives with a Branding Consultant to differentiate your offerings.",
                                },



                            ],

                        imgSrc: "Tailored Solutions.png",
                        altText: imgAltText[1],
                        calendarButton: true,
                        btnText: "Schedule Expert Call",



                    }} border={'border-b'} />



                    <CapabilitiesContent1 details1={{
                        heading1: "Why Partner with Us?",
                        paragraph1: "Madasky Consulting combines Digital Marketing Consultant precision with Social Media Consultant creativity to deliver:",


                        data:
                            [
                                {
                                    data1: "Unified Brand Stories",
                                    data2: "Align messaging across B2B and B2C audiences.",
                                },
                                {
                                    data1: "Data-Driven Agility",
                                    data2: "Adapt strategies in real-time using advanced analytics.",
                                },
                                {
                                    data1: "Scalable ROI",
                                    data2: "Optimize budgets for maximum impact, whether you're a startup or an enterprise.",
                                },

                            ],

                        imgSrc: "Why Choose Madasky Consulting.png",
                        altText: imgAltText[0],
                        calendarButton: true,
                        btnText: "Book Your Session",



                    }} border={"border-b"} />





                    <CapabilitiesHeader details1={{
                        heading1: "Ready to redefine your marketing strategy?",
                        paragraph1: "Leverage Madasky Consulting's New Age Marketing Program powered by Branding Consultants, Social Media Marketing Consultants, and Digital Marketing Experts to drive growth, loyalty, and market leadership.",


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

