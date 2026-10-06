


import { Metadata } from 'next';
import ConsultingNavbar from '@/components/ConsultingNavbar';
import CapabilitiesHeader from '@/components/CapabilitiesHeader';
import CapabilitiesContent1 from '@/components/CapabilitiesContent1';
import CapabilitiesContent2 from '@/components/CapabilitiesContent2';
import Footer from '@/components/Footer';
import AboutVideo from '@/components/AboutVideo';
import HelpYou from '@/components/HelpYou';
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
import BaseUrl from '@/components/BaseUrl';
import FaqComponent from '@/components/FaqComponent';
import { getImageAltText, fetchMetaDataByPageName, getWebBlogs, getDataByPageName, filterByWebImage, getImageData, getTestimonials, getTestimonialsByPageName, getEventByPageName } from "@/common/api";
import ServerError from '@/components/ServerError';
import type { PageMetaDataResponse } from "@/common/types";

const title = "Go to Market Strategy";
let PageMetadata: PageMetaDataResponse;

type Faq = {
    question: string;
    answer: string;
};

export async function generateMetadata(): Promise<Metadata> {
    PageMetadata = await fetchMetaDataByPageName({ pageName: "Go to Market Strategy" });
    console.log("Metaas: ", PageMetadata);

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
                `${BaseUrl().mainurl}go-to-market-strategy`
        },

    };
}

export default async function GoToMarketStrategy() {
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
        blogData = await getDataByPageName(["Go to Market Strategy", "blogs"]);
        videoData = await getDataByPageName(["Go to Market Strategy", "videos"]);
        galleryData = await getDataByPageName(["Go to Market Strategy", "gallery"]);
        testimonialData = await getTestimonialsByPageName("Go to Market Strategy");
        eventData = await getEventByPageName("Go to Market Strategy");

    }
    catch (error) {
        // console.error("Server Error:", error);
        serverError = true;
    }

    // console.log("Images", images);
    if (serverError) {
        return <div>Server Error</div>
    }

    const faqs: Faq[] = [
        {
            question: 'What is Go-To-Market Strategy Consulting for manufacturers?',
            answer: 'It helps manufacturers plan and execute market entry, business expansion, pricing, and sales strategies to grow profitably and reduce risks.'
        },
        {
            question: 'What financial challenges do manufacturers face that the Go-To-Market strategy can solve?',
            answer: 'Manufacturers face rising operational costs, supply chain volatility, pricing pressures, limited market insights, and low gross margins.'
        },
        {
            question: 'How does Madasky Consulting help optimize revenue for manufacturers?',
            answer: 'We develop competitive pricing models, improve gross margins through cost-saving strategies, and create sales roadmaps to increase revenue and loyalty.'
        },
        {
            question: `What market intelligence services are included in your
Go-To-Market strategy?`,
            answer: 'We offer market research, customer segmentation, demand forecasting, and brand positioning to help manufacturers stand out.'
        },
        {
            question: 'Why choose Madasky for Go-To-Market Strategy Consulting?',
            answer: 'We provide risk mitigation, profitability focus, and scalable growth strategies tailored specifically for the manufacturing sector.'
        },
    ];


    const imgAltText = await getImageData(images);
    // console.log("Image Alt Text", imgAltText);
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
                        heading1: "Go-To-Market Strategy",
                        paragraph1: "Manufacturers today face intense financial pressures driven by fluctuating raw material costs, global competition, supply chain disruptions, and evolving customer demands. These challenges are further compounded by a need for faster innovation cycles, optimizing cost structures, and expanding into new markets without eroding profitability. The inability to address these issues can lead to missed opportunities, margin shrinkage, and diminished market relevance.",


                    }} border={'border-b'} />

                    <CapabilitiesContent1 details1={{
                        heading1: "Key Financial Challenges Faced by the Industry",


                        data:
                            [
                                {
                                    data1: "Rising Operational Costs",
                                    data2: "Increasing raw material and energy prices erode profitability.",
                                },
                                {
                                    data1: "Supply Chain Volatility",
                                    data2: "Uncertainty in sourcing and logistics creates inefficiencies.",
                                },
                                {
                                    data1: "Competitive Pricing Pressure",
                                    data2: "Global and low-cost competitors disrupt local markets.",
                                },
                                {
                                    data1: "Limited Market Insights",
                                    data2: "Poor data-driven decision-making hampers expansion opportunities.",
                                },
                                {
                                    data1: "Low Gross Margins",
                                    data2: "Inability to optimize costs or pricing strategies.",
                                },
                            ],

                        imgSrc: "Key Challenges.png",
                        altText: imgAltText[0],
                        calendarButton: true,
                        btnText: "Plan Your Consultation",



                    }} border={"border-b"} />


                    <div className="max-w-6xl px-4 py-12 mx-auto text-gray-800">
                        <h1 className="mb-6 text-3xl font-bold text-center md:text-4xl">
                            Tailored Go-To-Market Strategy Consulting Solutions
                        </h1>
                        <p className="mb-12 text-lg text-center">
                            At <strong>Madasky Consulting</strong>, we specialize in Go-To-Market Strategy Consulting
                            designed to help manufacturing businesses overcome challenges and thrive in competitive
                            markets. Our solutions include:
                        </p>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                            {/* Strategic Planning & Execution */}
                            <div className="p-6 text-black bg-white shadow-lg rounded-2xl">
                                <h2 className="mb-4 text-xl font-semibold">Strategic Planning & Execution</h2>
                                <ul className="space-y-2 list-disc">
                                    <li className='!text-gray-700'><strong>Market Entry Strategy:</strong> Identify low-risk, high-reward entry points for new geographies with data-backed Go-To-Market Strategy Consulting.</li>
                                    <li className='!text-gray-700'><strong>Business Expansion:</strong> Scale operations sustainably using frameworks that balance resource allocation and growth objectives.</li>
                                    <li className='!text-gray-700'><strong>Make-or-Buy Decisions:</strong> Analytical models to optimize manufacturing and sourcing for cost efficiency.</li>
                                </ul>
                            </div>

                            {/* Revenue Optimization */}
                            <div className="p-6 text-black bg-white shadow-lg rounded-2xl">
                                <h2 className="mb-4 text-xl font-semibold">Revenue Optimization</h2>
                                <ul className="space-y-2 list-disc list-inside">
                                    <li className='!text-gray-700'><strong>Pricing Strategy:</strong> Develop competitive pricing models that maximize revenue without compromising perceived value.</li>
                                    <li className='!text-gray-700'><strong>Gross Margin Improvement:</strong> Pinpoint cost-saving opportunities and pricing adjustments to boost profitability.</li>
                                    <li className='!text-gray-700'><strong>Sales Strategy:</strong> Actionable roadmaps to drive revenue, market share, and customer loyalty.</li>
                                </ul>
                            </div>

                            {/* Market Intelligence & Positioning */}
                            <div className="p-6 text-black bg-white shadow-lg rounded-2xl">
                                <h2 className="mb-4 text-xl font-semibold">Market Intelligence & Positioning</h2>
                                <ul className="space-y-2 list-disc list-inside">
                                    <li className='!text-gray-700'><strong>Market Research:</strong> Insights on trends, competitors, and customer behavior to guide decisions.</li>
                                    <li className='!text-gray-700'><strong>Segmentation & Sizing:</strong> Identify high-potential customer segments and forecast demand.</li>
                                    <li className='!text-gray-700'><strong>Brand Positioning:</strong> Craft unique selling propositions that differentiate your offerings.</li>
                                </ul>
                            </div>

                            {/* Operational Efficiency */}
                            <div className="p-6 text-black bg-white shadow-lg rounded-2xl">
                                <h2 className="mb-4 text-xl font-semibold">Operational Efficiency</h2>
                                <ul className="space-y-2 list-disc list-inside">
                                    <li className='!text-gray-700'><strong>Channel Optimization:</strong> Evaluate and streamline sales channels to enhance reach and reduce costs.</li>
                                    <li className='!text-gray-700'><strong>Distribution & Logistics:</strong> Improve last-mile delivery and supply chain resilience.</li>
                                    <li className='!text-gray-700'><strong>Customer Experience:</strong> Build loyalty through service enhancements and retention strategies.</li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <CapabilitiesContent1 details1={{
                        heading1: "Why Partner with Madasky Consulting?",
                        paragraph1: "Our Go-To-Market Strategy Consulting combines industry expertise with actionable frameworks to address manufacturing's unique challenges. We focus on delivering:",


                        data:
                            [
                                {
                                    data1: "Risk Mitigation",
                                    data2: " Minimize uncertainties in new markets or product launches.",
                                },
                                {
                                    data1: "Profitability Focus",
                                    data2: "Align pricing, costs, and operations to protect margins.",
                                },
                                {
                                    data1: "Scalable Growth",
                                    data2: "Strategies that adapt to market shifts and customer demands.",
                                },

                            ],

                        imgSrc: "Why Choose Madasky Consulting.png",
                        altText: imgAltText[0],
                        calendarButton: true,
                        btnText: "Schedule Expert Call",



                    }} border={"border-b"} />





                    <CapabilitiesHeader details1={{
                        heading1: "Ready to redefine your go-to-market approach ?",
                        paragraph1: "Madasky Consulting's Go-To-Market Strategy Consulting services deliver actionable insights and transformative strategies tailored to the manufacturing sector. Let's craft solutions that drive growth, improve margins, and create lasting impact.",


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

