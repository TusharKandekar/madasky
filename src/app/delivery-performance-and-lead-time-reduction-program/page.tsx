import { Metadata } from 'next';
import ConsultingNavbar from '@/components/ConsultingNavbar';
import CapabilitiesHeader from '@/components/CapabilitiesHeader';
// import CapabilitiesHeader2 from '@/components/CapabilitiesHeader2';
import CapabilitiesContent1 from '@/components/CapabilitiesContent1';
import CapabilitiesContent2 from '@/components/CapabilitiesContent2';
// import CapabilitiesContent3 from '@/components/CapabilitiesContent3';
// import CapabilitiesContent4 from '@/components/CapabilitiesContent4';
import Footer from '@/components/Footer';
// import vid1 from "/assets/images/People and Organisational Performance69.mp4";
import AboutVideo from '@/components/AboutVideo';
import HelpYou from '@/components/HelpYou';
import BaseUrl from '@/components/BaseUrl'
import type { PageMetaDataResponse } from "@/common/types";

import { getImageAltText, getWebBlogs, fetchMetaDataByPageName, getDataByPageName, filterByWebImage, getImageData, getTestimonialsByPageName, getEventByPageName } from "@/common/api";
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
const title = "Delivery Performance & Lead Time Reduction Program";
let PageMetadata: PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
    PageMetadata = await fetchMetaDataByPageName({ pageName: "Delivery Performance & Lead Time Reduction Program" });
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
                `${BaseUrl().mainurl}delivery-performance-and-lead-time-reduction-program`
        },

    };
}

export default async function GrowthMarketingAndSales() {

    const arr = ["Key Challenges.png", "Tailored Solutions.png", "Prgram benefits - Delivery performance.png"];


    let images;
    let blogData;
    let videoData;
    let galleryData;
    let testimonialData;
    let eventData;
    let serverError = false;

    try {
        images = await getImageAltText(arr);
        blogData = await getDataByPageName(["Delivery Performance & Lead Time Reduction Program", "blogs"]);
        videoData = await getDataByPageName(["Delivery Performance & Lead Time Reduction Program", "videos"]);
        galleryData = await getDataByPageName(["Delivery Performance & Lead Time Reduction Program", "gallery"]);
        testimonialData = await getTestimonialsByPageName("Delivery Performance & Lead Time Reduction Program");
        eventData = await getEventByPageName("Delivery Performance & Lead Time Reduction Program");

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
    return (
        <>


            <ConsultingNavbar
                url='/operations-excellence-consulting'
                title={'Operations Excellence'}
                navItems={[
                    { title: 'Productivity & Efficiency Improvement', link: '/productivity-and-efficiency-improvement' },
                    { title: 'Implementation Support', link: '/implementation-support' },
                    { title: 'Delivery Performance & Lead Time Reduction Program', link: '/delivery-performance-and-lead-time-reduction-program' },
                    { title: 'Sampling - Lead Time Reduction', link: '/sampling-lead-time-reduction' },
                    { title: 'Leverage Technology For Innovation & Efficiency', link: '/leverage-technology-for-innovation-and-efficiency' },


                ]}
            />

            <AboutVideo vid1={'/assets/videos/OPERATIONS-PRODUCTIVITY-IMPROVEMENT69.mp4'} title={title} des={"Creating and accelerating critical advantages through cutting-edge strategy and operations"} h1={PageMetadata?.data?.h1tag} />

            <div className='w-[80vw] bg-white mx-auto'>

                <div className='w-full my-20'>

                    <CapabilitiesHeader details1={{
                        heading1: "Delivery Performance & Lead Time Reduction Program",
                        paragraph1: "In today's dynamic manufacturing landscape, maintaining top-notch delivery performance is essential yet increasingly challenging. From supply chain disruptions to heightened customer expectations, manufacturers face significant hurdles that can impact their ability to deliver consistent results.",
                        // paragraph2: "At Madasky Consulting, we understand the intricacies of these challenges. Our Technical Consulting services are tailored to help manufacturers identify and overcome critical pain points, empowering them to drive operational excellence and achieve sustainable growth.",



                    }} border={"border-b"} />

                    <CapabilitiesContent1 details1={{
                        heading1: "Key Industry Challenges",
                        paragraph1: "If these challenges resonate with your experience, our Delivery Performance Program is designed to transform these obstacles into opportunities for growth and excellence.",


                        data:
                            [
                                {
                                    data1: "Supply Chain Disruptions",
                                    data2: "Frequent delays in material sourcing and fluctuating demand strain operations and affect delivery timelines.",
                                },
                                {
                                    data1: "Inconsistent Product Quality",
                                    data2: "A lack of robust quality systems often leads to defects, damaging trust and increasing costs through returns or rework.",
                                },
                                {
                                    data1: "Operational Inefficiencies",
                                    data2: "Fragmented workflows and unreliable processes slow production and compromise productivity.",
                                },
                                {
                                    data1: "Customer Expectations",
                                    data2: "Rising demand for seamless, on-time delivery challenges traditional approaches, pushing businesses to innovate.",
                                },
                                {
                                    data1: "Data Gaps",
                                    data2: "Limited access to actionable insights hinders decision-making and restricts opportunities for improvement.",
                                },

                            ],

                        imgSrc: `/Key Challenges.png`,
                        altText: imgAltText[0],
                        calendarButton: true,
                        btnText: "Reserve Your Time",



                    }} border={"border-b"} />


                    {/* 
                    <CapabilitiesHeader2 details1={{
                        heading1: "Impact of These Challenges",
                        paragraph1: "These challenges lead to inefficiencies, reduced profit margins, and missed revenue opportunities. Manufacturers unable to adapt risk losing market share to competitors who can better navigate the e-commerce ecosystem.",
                        imgSrc: "/assets/images/398.png",


                    }} border={"border-b"} /> */}


                    {/* <CapabilitiesContent2 details1={{
                        heading1: "Key Challenges in the Manufacturing Industry",
                        heading2: "Manufacturers often encounter hurdles that impede efficiency and impact overall business performance. Below are some of the most common challenges our clients face:",


                        data:
                            [
                                {
                                    data1: "Inefficient Processes and Bottlenecks",
                                    data2: "Disorganized workflows, redundant steps, and unclear responsibilities often cause delays, increased costs, and reduced throughout.",
                                },
                                {
                                    data1: "Underutilized Resources",
                                    data2: "Inefficient use of manpower, machinery, and materials results in wasted potential and inflated operational costs.",
                                },

                                {
                                    data1: "High Operational Costs",
                                    data2: "Rising energy costs, unoptimized supply chains, and excessive downtime eat into profit margins.",
                                },
                                {
                                    data1: "Quality Inconsistencies",
                                    data2: "Defective outputs or non-compliance with quality standards damage reputations and erode customer trust.",
                                },
                                {
                                    data1: "Lack of Skilled Workforce",
                                    data2: "Gaps in employee skills and resistance to change hinder the adoption of new technologies and practices.",
                                },
                                {
                                    data1: "Supply Chain Disruptions",
                                    data2: "Fluctuating supplier reliability, unpredictable demand, and inventory mismanagement lead to delayed deliveries and missed opportunities.",
                                },



                            ],

                        data2: [

                            {
                                data1: "Limited Data Utilization",
                                data2: "Manufacturers struggle to extract actionable insights from operational data, missing opportunities for informed decision-making.",
                            },
                            {
                                data1: "Resistance to Change",
                                data2: "Organizational inertia and employee reluctance can slow down the implementation of process improvements or new technologies.",
                            },


                        ],





                        imgSrc: "/assets/images/398.png"



                    }} border={"border-b"} /> */}

                    <CapabilitiesContent2 details1={{
                        heading1: "Tailored Solutions: How We Help",
                        heading2: "Our approach is holistic and deeply customized, targeting key areas of improvement to unlock your full potential. Here's an overview of how we help:",
                        // heading3: "With our deep expertise in the manufacturing industry and commitment to delivering results, we ensure that your strategies don't just stay on paper—they are implemented effectively to drive measurable growth and efficiency.",


                        data:
                            [
                                {
                                    data1: "Comprehensive Delivery Assessment",
                                    data2: "We analyze your existing delivery framework, uncovering bottlenecks and identifying actionable strategies tailored to your unique challenges.",
                                },
                                {
                                    data1: "People-Centric Empowerment",
                                    data2: "From suppliers to frontline teams, we enhance skills and capabilities, creating a culture of excellence across your delivery operations.",
                                },

                                {
                                    data1: "Data-Driven Insights",
                                    data2: "Leveraging advanced tools and benchmarks, we provide clear, actionable insights to drive smarter decisions and sustained improvements.",
                                },
                                {
                                    data1: "Resilience and Adaptability",
                                    data2: "Our strategies are designed to not only address current challenges but also future-proof your operations, ensuring they adapt to evolving market demands.",
                                },
                                {
                                    data1: "End-to-End Performance Optimization",
                                    data2: "We refine workflows, integrate cutting-edge technology, and implement systems that promote consistency, efficiency, and excellence at every level.",
                                },



                            ],

                        // data2: [

                        //     {
                        //         data1: "Performance Tracking and Adjustments",
                        //         data2: "Our team sets up performance metrics and dashboards, enabling you to track progress and refine strategies based on actionable insights.",
                        //     },
                        //     {
                        //         data1: "Sustainability and Long-Term Impact",
                        //         data2: "We help implement environmentally and financially sustainable practices to future-proof your manufacturing operations.",
                        //     },
                        //     {
                        //         data1: "Cross-Functional Collaboration",
                        //         data2: "We facilitate coordination across departments to ensure all stakeholders are aligned during the implementation process.",
                        //     },
                        //     {
                        //         data1: "End-to-End Execution Support",
                        //         data2: "From planning to execution and review, we remain your partner, ensuring every step contributes to measurable success.",
                        //     },



                        // ],





                        imgSrc: `/Tailored Solutions.png`,
                        altText: `${imgAltText[1]}`,
                        calendarButton: true,
                        btnText: "Book Your Free Strategy Call",



                    }} border={"border-b"} />

                    <CapabilitiesContent1 details1={{
                        heading1: "Program Benefits",
                        paragraph1: "By partnering with us, you can expect transformative results:",


                        data:
                            [
                                {
                                    data1: "Reliable Delivery Processes",
                                    data2: "Strengthen operations to ensure on-time and consistent deliveries.",
                                },
                                {
                                    data1: "Enhanced Product Quality",
                                    data2: " Build trust with customers through dependable quality assurance systems.",
                                },
                                {
                                    data1: "Streamlined Operations",
                                    data2: "Achieve higher efficiency by eliminating delays and redundancies.",
                                },
                                {
                                    data1: "Increased Customer Satisfaction",
                                    data2: "Exceed expectations with seamless and dependable service.",
                                },
                                {
                                    data1: "Sustainable Growth",
                                    data2: "Establish systems that adapt and thrive in changing environments.",
                                },

                            ],

                        imgSrc: `/Prgram benefits - Delivery performance.png`,
                        altText: `${imgAltText[2]}`,
                        calendarButton: true,
                        btnText: "Schedule Expert Call",



                    }} border={"border-b"} />

                    <CapabilitiesHeader details1={{
                        heading1: "Sustaining Performance for the Future",
                        paragraph1: "With the Delivery Performance Program, your organization will be equipped to navigate today's challenges while preparing for tomorrow's opportunities. From building supplier partnerships to optimizing internal processes, we ensure every component of your delivery chain works harmoniously to drive sustained success. Let us help you unleash your full potential and achieve operational excellence.",
                        // paragraph2: "Our expertise in material flow optimization ensures that every aspect of your operations aligns with your business goals. With a focus on measurable results, employee well-being, and sustainable practices, we deliver solutions that empower your business to thrive in an ever-competitive industry.",



                    }} border={"border-none"} />





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

