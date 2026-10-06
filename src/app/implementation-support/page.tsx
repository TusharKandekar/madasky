
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
const title = "Implementation Support";
let PageMetadata: PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
    PageMetadata = await fetchMetaDataByPageName({ pageName: "Implementation Support" });
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
                `${BaseUrl().mainurl}implementation-support`
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
        blogData = await getDataByPageName(["Implementation Support", "blogs"]);
        videoData = await getDataByPageName(["Implementation Support", "videos"]);
        galleryData = await getDataByPageName(["Implementation Support", "gallery"]);
        testimonialData = await getTestimonialsByPageName("Implementation Support");
        eventData = await getEventByPageName("Implementation Support");

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
                        heading1: "Implementation Support",
                        paragraph1: "The manufacturing sector is the backbone of many economies, but it faces evolving challenges that can hinder growth and operational efficiency. From navigating the complexities of automation to addressing skill gaps in the workforce, manufacturers are often burdened by a combination of industry-wide disruptions and unique organizational constraints.",
                        // paragraph2: "At Madasky Consulting, we understand the intricacies of these challenges. Our Technical Consulting services are tailored to help manufacturers identify and overcome critical pain points, empowering them to drive operational excellence and achieve sustainable growth.",



                    }} border={"border-b"} />

                    <CapabilitiesContent1 details1={{
                        heading1: "Key Challenges Faced by the Manufacturing Industry",
                        // paragraph1: "Manufacturers often encounter hurdles that impede efficiency and impact overall business performance. Below are some of the most common challenges our clients face:",


                        data:
                            [
                                {
                                    data1: "Strategy-Execution Gap",
                                    data2: "Many companies struggle to bridge the gap between well-crafted strategies and their execution, leading to missed opportunities and stagnant growth.",
                                },
                                {
                                    data1: "Rapid Technological Advancements",
                                    data2: "The pressure to adopt and integrate automation, IoT, and advanced manufacturing techniques often overwhelms teams unprepared for the transition.",
                                },
                                {
                                    data1: "Operational Inefficiencies",
                                    data2: "Ineffective workflows, poorly planned resource utilization, and outdated processes can reduce productivity and increase operational costs.",
                                },
                                {
                                    data1: "Workforce Skill Gaps",
                                    data2: "A lack of training and upskilling programs leaves employees ill-equipped to handle modern manufacturing demands.",
                                },
                                {
                                    data1: "Inconsistent Monitoring and Feedback Loops",
                                    data2: "Without robust monitoring and review mechanisms, companies often miss early indicators of potential issues, leading to larger problems down the line.",
                                },

                            ],

                        imgSrc: `/Key Challenges.png`,
                        altText: imgAltText[0],
                        calendarButton: true,
                        btnText: "Book Your Session",



                    }} border={"border-b"} />



                    <CapabilitiesContent2 details1={{
                        heading1: "Tailored Solutions from Our Consulting Firm",
                        heading2: "To address these challenges and help your organization thrive, our consulting firm offers comprehensive Implementation Support tailored to the unique needs of manufacturers. Below is a glimpse of what we can do for your business:",
                        heading3: "With our deep expertise in the manufacturing industry and commitment to delivering results, we ensure that your strategies don't just stay on paper—they are implemented effectively to drive measurable growth and efficiency.",


                        data:
                            [
                                {
                                    data1: "Converting Strategies into Actionable Plans",
                                    data2: "We transform your high-level strategies into detailed, practical action plans that align with your operational capabilities and goals.",
                                },
                                {
                                    data1: "Seamless Technology Integration",
                                    data2: "Our experts guide you through adopting new technologies, ensuring they are seamlessly integrated without disrupting ongoing operations.",
                                },

                                {
                                    data1: "Workflow Optimization",
                                    data2: "We analyze your current workflows and processes, redesigning them to maximize efficiency, reduce downtime, and optimize resource utilization.",
                                },
                                {
                                    data1: "Targeted Workforce Upskilling",
                                    data2: "We provide customized training programs to empower your workforce with the skills needed to excel in modern manufacturing environments.",
                                },
                                {
                                    data1: "Implementation Monitoring and Support",
                                    data2: "Through real-time monitoring tools and consistent feedback, we ensure the execution stays on track, making necessary adjustments along the way.",
                                },



                            ],

                        data2: [

                            {
                                data1: "Performance Tracking and Adjustments",
                                data2: "Our team sets up performance metrics and dashboards, enabling you to track progress and refine strategies based on actionable insights.",
                            },
                            {
                                data1: "Sustainability and Long-Term Impact",
                                data2: "We help implement environmentally and financially sustainable practices to future-proof your manufacturing operations.",
                            },
                            {
                                data1: "Cross-Functional Collaboration",
                                data2: "We facilitate coordination across departments to ensure all stakeholders are aligned during the implementation process.",
                            },
                            {
                                data1: "End-to-End Execution Support",
                                data2: "From planning to execution and review, we remain your partner, ensuring every step contributes to measurable success.",
                            },



                        ],





                        imgSrc: `/Tailored Solutions.png`,
                        altText: imgAltText[1],
                        calendarButton: true,
                        btnText: "Lock In Your Meeting",



                    }} border={"border-none"} />

                    {/* <CapabilitiesHeader details1={{
                        heading1: "Driving Sustainable Success",
                        paragraph1: "Our Productivity and Efficiency Improvement Practice goes beyond achieving short-term results. We aim to build resilient organizations that can adapt to changing circumstances, innovate continuously, and thrive in the long run. By partnering with Madasky Consulting, you're not just enhancing operations you're equipping your organization to reach its full potential.",
                        // paragraph2: "Our expertise in material flow optimization ensures that every aspect of your operations aligns with your business goals. With a focus on measurable results, employee well-being, and sustainable practices, we deliver solutions that empower your business to thrive in an ever-competitive industry.",



                    }} border={"border-none"} /> */}





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

