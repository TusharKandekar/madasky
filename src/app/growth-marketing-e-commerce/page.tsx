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
import Image from 'next/image';
import BaseUrl from '@/components/BaseUrl';
import type { PageMetaDataResponse } from "@/common/types";
import FaqComponent from '@/components/FaqComponent';

type Faq = {
    question: string;
    answer: string;
};
import { getImageAltText, getWebBlogs, fetchMetaDataByPageName, getDataByPageName, filterByWebImage, getImageData, getTestimonials, getTestimonialsByPageName, getEventByPageName } from "@/common/api";
const title = "E-Commerce";
let PageMetadata: PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
    PageMetadata = await fetchMetaDataByPageName({ pageName: "Growth Marketing E-Commerce" });
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
                `${BaseUrl().mainurl}growth-marketing-e-commerce`
        },

    };
}

export default async function GrowthMarketingAndSales() {
    const arr = ["Key Challenges.png", "Impact of a New Age Marketing Approach.png", "solutions.png"];


    let images;
    let blogData;
    let videoData;
    let galleryData;
    let testimonialData;
    let eventData;
    let serverError = false;

    try {
        images = await getImageAltText(arr);
        blogData = await getDataByPageName(["Growth Marketing E-Commerce", "blogs"]);
        videoData = await getDataByPageName(["Growth Marketing E-Commerce", "videos"]);
        galleryData = await getDataByPageName(["Growth Marketing E-Commerce", "gallery"]);
        testimonialData = await getTestimonialsByPageName("Growth Marketing E-Commerce");
        eventData = await getEventByPageName("Growth Marketing E-Commerce");

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
            question: 'What does Madasky Consulting offer for e-commerce in manufacturing?',
            answer: 'Madasky Consulting provides tailored e-commerce solutions for manufacturers, including omni-channel strategy development, digital platform integration, and logistics optimization to drive online growth and profitability.'
        },
        {
            question: 'How can e-commerce consulting help manufacturing companies grow?',
            answer: 'E-commerce consulting helps manufacturers modernize systems, improve supply chain efficiency, align online and offline channels, and create customer-centric experiences that boost conversions and long-term sales.'
        },
        {
            question: 'Can Madasky help with setting up a custom e-commerce platform for B2B or D2C?',
            answer: 'Yes, Madasky builds scalable, customized e-commerce infrastructures for B2B, B2C, and D2C manufacturing models, ensuring smooth order processing, inventory management, and logistics.'
        },
        {
            question: `Does the consulting include digital marketing and analytics support?`,
            answer: `Absolutely. Madasky's e-commerce solutions include SEO, paid ads, and analytics dashboards to improve online visibility, measure ROI, and convert leads effectively.`
        },
        {
            question: 'Why choose Madasky Consulting as your e-commerce partner?',
            answer: 'Madasky Consulting offers deep manufacturing expertise combined with e-commerce strategy, helping businesses adapt to digital demands, protect profit margins, and build in-house capabilities for sustained growth.'
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
                        heading1: "E-commerce",
                        paragraph1: "The world of e-commerce is transforming rapidly, and the manufacturing industry is at the crossroads of this digital revolution. As demand for online and omnichannel strategies grows, manufacturers face unique challenges that require E-Commerce Consulting expertise to thrive. At Madasky Consulting, a leading E-Commerce Consulting Firm, we specialize in helping manufacturing clients unlock the potential of e-commerce to drive growth, profitability, and competitive differentiation.",



                    }} border={"border-b"} />

                    <CapabilitiesContent1 details1={{
                        heading1: "Key Challenges Faced by the Industry",


                        data:
                            [
                                {
                                    data1: "Fragmented Supply Chains",
                                    data2: "Adapting B2B logistics to meet B2C/D2C expectations increases complexity.",
                                },
                                {
                                    data1: "Digital Integration",
                                    data2: "Legacy systems struggle to align with modern platforms, creating inefficiencies.",
                                },
                                {
                                    data1: "Omni-Channel Alignment",
                                    data2: "Balancing inventory and pricing across channels strains operations.",
                                },
                                {
                                    data1: "Limited Digital Expertise",
                                    data2: "Dependency on external support due to steep learning curves.",
                                },

                            ],

                        imgSrc: "Key Challenges.png",
                        altText: imgAltText[0],
                        calendarButton: true,
                        btnText: "Plan Your Consultation",



                    }} border={"border-b"} />

                    <CapabilitiesHeader2 details1={{
                        heading1: "Impact of These Challenges",
                        paragraph1: "Without E-Commerce Solutions, manufacturers risk inefficiencies, shrinking margins, and lost market share to agile competitors. Our E-Commerce Business Consultant team bridges this gap by turning challenges into growth catalysts.",
                        imgSrc: "Impact of a New Age Marketing Approach.png",
                        altText: imgAltText[1]

                    }} border={"border-b"} />

                    <CapabilitiesContent2 details1={{
                        heading1: "E-Commerce Solutions Offered by Madasky Consulting",
                        subHeading: "Strategic Frameworks for Manufacturing Success",


                        data:
                            [
                                {
                                    data1: "Omni-Channel Strategy Development",
                                    data2: "Synchronize online, offline, and distributor channels with E-Commerce Consulting insights for seamless customer experiences.",
                                },
                                {
                                    data1: "Digital Platform Integration",
                                    data2: "Modernize legacy systems using E-Commerce Solutions Services to enable real-time sales and inventory insights.",
                                },
                                {
                                    data1: "Operational Excellence",
                                    data2: "Custom E-Commerce Infrastructure Build scalable solutions tailored to your workflows, from order management to logistics.",
                                },
                                {
                                    data1: "Supply Chain Optimization",
                                    data2: "Streamline fulfillment with E-Commerce Solutions that reduce delivery times and costs.",
                                },
                                {
                                    data1: "Customer-Centric Growth",
                                    data2: "Personalized Experiences- Leverage data-driven strategies designed by E-Commerce Business Consultants to boost loyalty and conversions.",
                                },


                            ],

                        data2: [
                            {
                                data1: "Digital Marketing & Analytics",
                                data2: "Deploy SEO, targeted ads, and dashboards to convert leads and improve ROI.",
                            },
                            {
                                data1: "Sustainability & Future-Readiness",
                                data2: "Sustainable E-Commerce Practices- Align operations with environmental expectations through E-Commerce Consulting guidance.",
                            },
                            {
                                data1: "Team Upskilling",
                                data2: "Equip internal teams with skills to sustain growth independently.",
                            },

                        ],





                        imgSrc: "solutions.png",
                        altText: imgAltText[2],
                        calendarButton: true,
                        btnText: "Schedule Expert Call",



                    }} border={"border-none"} />


                    <CapabilitiesContent1 details1={{
                        heading1: "Why Partner with Us?",
                        paragraph1: "As a trusted E-Commerce Consulting Firm, Madasky Consulting combines manufacturing expertise with E-Commerce Solutions Services to deliver:",


                        data:
                            [
                                {
                                    data1: "Agile Adaptation",
                                    data2: "Navigate competitive pressures and price wars with confidence.",
                                },
                                {
                                    data1: "Profit-Driven Outcomes",
                                    data2: "Optimize pricing, costs, and inventory to protect margins.",
                                },
                                {
                                    data1: "Long-Term Capabilities",
                                    data2: "Foster internal expertise to reduce dependency on external support.",
                                },

                            ],

                        imgSrc: "Why Choose Madasky Consulting.png",
                        altText: imgAltText[0],
                        calendarButton: true,
                        btnText: "Book Your Session",



                    }} border={"border-b"} />





                    <CapabilitiesHeader details1={{
                        heading1: "Ready to lead the digital revolution?",
                        paragraph1: "Leverage Madasky Consulting's E-Commerce Solutions and E-Commerce Business Consultant expertise to transform challenges into scalable opportunities. Let's build a future-ready e-commerce strategy tailored to your manufacturing goals.",


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

