import { Metadata } from 'next';
import ConsultingNavbar from '@/components/ConsultingNavbar';
import CapabilitiesHeader from '@/components/CapabilitiesHeader';
// import CapabilitiesHeader2 from '@/components/CapabilitiesHeader2';
// import CapabilitiesContent1 from '@/components/CapabilitiesContent1';
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
const title = "Productivity & Efficiency Improvement";
let PageMetadata: PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
    PageMetadata = await fetchMetaDataByPageName({ pageName: "Productivity & Efficiency Improvement" });
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
                `${BaseUrl().mainurl}productivity-and-efficiency-improvement`
        },

    };
}

export default async function GrowthMarketingAndSales() {

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
        blogData = await getDataByPageName(["Productivity & Efficiency Improvement", "blogs"]);
        videoData = await getDataByPageName(["Productivity & Efficiency Improvement", "videos"]);
        galleryData = await getDataByPageName(["Productivity & Efficiency Improvement", "gallery"]);
        testimonialData = await getTestimonialsByPageName("Productivity & Efficiency Improvement");
        eventData = await getEventByPageName("Productivity & Efficiency Improvement");

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
                        heading1: "Productivity and Efficiency Improvement",
                        paragraph1: "At Madasky Consulting, we recognize the complex challenges that manufacturers face in today's rapidly evolving market. Striving to improve productivity and efficiency is not just about saving time or cutting costs; it's about building a resilient and thriving operation. From streamlining workflows to empowering employees, we specialize in helping businesses unlock their full potential.",
                        // paragraph2: "At Madasky Consulting, we understand the intricacies of these challenges. Our Technical Consulting services are tailored to help manufacturers identify and overcome critical pain points, empowering them to drive operational excellence and achieve sustainable growth.",



                    }} border={"border-b"} />




                    <CapabilitiesContent2 details1={{
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





                        imgSrc: `/Key Challenges.png`,
                        altText: imgAltText[0],
                        calendarButton: true,
                        btnText: "Book Your Free Strategy Call",



                    }} border={"border-b"} />

                    <CapabilitiesContent2 details1={{
                        heading1: "Tailored Solutions for Productivity and Efficiency",
                        heading2: "At Madasky Consulting, we craft solutions that address these challenges head-on, ensuring measurable and sustainable improvements. Below is a preview of how we can help transform your operations:",


                        data:
                            [
                                {
                                    data1: "Comprehensive Process Audits",
                                    data2: "Analyze existing workflows to identify inefficiencies, redundancies, and bottlenecks, delivering actionable insights for optimization.",
                                },
                                {
                                    data1: "Lean Manufacturing Deployment",
                                    data2: "Implement lean principles to eliminate waste, optimize resource usage, and enhance operational flow.",
                                },

                                {
                                    data1: "Smart Automation Integration",
                                    data2: "Introduce advanced automation solutions to streamline production, minimize errors, and ensure consistent quality.",
                                },
                                {
                                    data1: "Plant Layout Revitalization",
                                    data2: "Design plant layouts that maximize space utilization and improve material flow, reducing unnecessary movement and delays.",
                                },
                                {
                                    data1: "Workforce Development Programs",
                                    data2: "Deliver targeted training sessions to enhance skills, boost morale, and foster a culture of continuous learning.",
                                },
                                {
                                    data1: "Advanced Quality Management Systems",
                                    data2: "Establish robust quality controls that ensure defect-free production and align with industry standards.",
                                },


                            ],

                        data2: [


                            {
                                data1: "Supply Chain Optimization",
                                data2: "Restructure supply chains to reduce lead times, strengthen supplier partnerships, and manage inventories effectively.",
                            },
                            {
                                data1: "Data-Driven Decision-Making",
                                data2: "Leverage analytics to develop KPIs, track performance, and pinpoint areas for growth.",
                            },
                            {
                                data1: "Change Management Strategies",
                                data2: "Engage employees at all levels to adopt new practices and align with productivity goals.",
                            },
                            {
                                data1: "Continuous Improvement Frameworks",
                                data2: "Embed a culture of innovation and provide ongoing support to maintain and scale productivity gains.",
                            },


                        ],





                        imgSrc: `/Tailored Solutions.png`,
                        altText: `${imgAltText[1]}`,
                        calendarButton: true,
                        btnText: "Unlock Your Next Chapter",



                    }} border={"border-b"} />

                    <CapabilitiesHeader details1={{
                        heading1: "Driving Sustainable Success",
                        paragraph1: "Our Productivity and Efficiency Improvement Practice goes beyond achieving short-term results. We aim to build resilient organizations that can adapt to changing circumstances, innovate continuously, and thrive in the long run. By partnering with Madasky Consulting, you're not just enhancing operations you're equipping your organization to reach its full potential.",
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

