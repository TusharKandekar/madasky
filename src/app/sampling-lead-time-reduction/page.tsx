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
const title = "Sampling - Lead time Reduction";
let PageMetadata: PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
    PageMetadata = await fetchMetaDataByPageName({ pageName: "Sampling - Lead Time Reduction" });
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
                `${BaseUrl().mainurl}sampling-lead-time-reduction`
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
        blogData = await getDataByPageName(["Sampling - Lead Time Reduction", "blogs"]);
        videoData = await getDataByPageName(["Sampling - Lead Time Reduction", "videos"]);
        galleryData = await getDataByPageName(["Sampling - Lead Time Reduction", "gallery"]);
        testimonialData = await getTestimonialsByPageName("Sampling - Lead Time Reduction");
        eventData = await getEventByPageName("Sampling - Lead Time Reduction");

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
                        heading1: "Sampling -  Lead time Reduction",
                        paragraph1: "In the fast-paced world of manufacturing, efficient product development & sampling processes can make or break a business's ability to secure and execute orders. Sampling is the gateway to client trust, operational excellence, and profitability. Yet, the manufacturing industry continues to grapple with challenges that hinder effective sampling, impacting lead times, asset utilization, and overall competitiveness.",
                        // paragraph2: "At Madasky Consulting, we understand the intricacies of these challenges. Our Technical Consulting services are tailored to help manufacturers identify and overcome critical pain points, empowering them to drive operational excellence and achieve sustainable growth.",



                    }} border={"border-b"} />

                    <CapabilitiesContent1 details1={{
                        heading1: "Key Challenges Faced by the Manufacturing Industry in Sampling",
                        // paragraph1: "If these challenges resonate with your experience, our Delivery Performance Program is designed to transform these obstacles into opportunities for growth and excellence.",


                        data:
                            [
                                {
                                    data1: "Prolonged Lead Times",
                                    data2: "Delayed sampling cycles reduce agility in responding to client demands, leading to missed opportunities and compromised market competitiveness.",
                                },
                                {
                                    data1: "Inconsistent Quality",
                                    data2: "Sampling errors often result in misaligned expectations between manufacturers and clients, affecting trust and order volumes.",
                                },
                                {
                                    data1: "High Costs",
                                    data2: "Inefficient sampling processes increase operational costs, eroding margins and impacting financial performance.",
                                },
                                {
                                    data1: "Underutilization of Assets",
                                    data2: "Extended sampling timelines lead to equipment and resource idleness, reducing overall asset productivity.",
                                },
                                {
                                    data1: "Limited Innovation in Design",
                                    data2: "Outdated sampling techniques often stifle innovation, leaving businesses unable to meet dynamic market trends and consumer preferences.",
                                },
                                {
                                    data1: "Missed Deadlines",
                                    data2: "Failure to deliver samples on time negatively impacts the client's production schedules and can result in order cancellations or penalties.",
                                },

                            ],

                        imgSrc: `/Key Challenges.png`,
                        altText: imgAltText[0],
                        calendarButton: true,
                        btnText: "Plan Your Consultation",



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
                        heading1: "Tailored Solutions Offered by Our Consulting Firm",
                        // heading2: "Our approach is holistic and deeply customized, targeting key areas of improvement to unlock your full potential. Here's an overview of how we help:",
                        // heading3: "With our deep expertise in the manufacturing industry and commitment to delivering results, we ensure that your strategies don't just stay on paper—they are implemented effectively to drive measurable growth and efficiency.",


                        data:
                            [
                                {
                                    data1: "Optimized Sampling Processes",
                                    data2: "Streamline workflows and eliminate bottlenecks through innovative sampling techniques, ensuring quicker turnarounds and enhanced responsiveness.",
                                },
                                {
                                    data1: "Digital Sampling Integration",
                                    data2: "Introduce advanced digital tools and 3D modeling to replace manual sampling, improving accuracy, speed, and client satisfaction.",
                                },

                                {
                                    data1: "Enhanced Quality Control Protocols",
                                    data2: "Implement robust quality checks at every sampling stage, ensuring client expectations are met or exceeded consistently.",
                                },
                                {
                                    data1: "Resource Allocation Strategies",
                                    data2: "Redesign resource deployment to maximize asset utilization, achieving better productivity and reducing idle time.",
                                },
                                {
                                    data1: "Lean Sampling Techniques",
                                    data2: "Employ lean methodologies to minimize waste and optimize sampling costs while maintaining output quality.",
                                },



                            ],

                        data2: [

                            {
                                data1: "Skill Development Workshops",
                                data2: "Equip teams with specialized training to adopt advanced sampling methods, fostering innovation and efficiency.",
                            },
                            {
                                data1: "Real-Time Monitoring and Analytics",
                                data2: "Leverage data-driven insights to track sampling progress, identify bottlenecks, and implement corrective actions proactively.",
                            },
                            {
                                data1: "Customized Sampling Plans",
                                data2: "Develop client-specific sampling frameworks aligned with unique requirements, ensuring relevance and effectiveness.",
                            },
                            {
                                data1: "End-to-End Sampling Management",
                                data2: "Provide comprehensive oversight from concept to delivery, guaranteeing seamless coordination and timely completion.",
                            },
                            {
                                data1: "Collaborative Design Approach",
                                data2: "Foster direct collaboration between design teams and clients to accelerate approvals and reduce iterations, enhancing order turnaround rates.",
                            },


                        ],





                        imgSrc: `/Tailored Solutions.png`,
                        altText: imgAltText[1],
                        calendarButton: true,
                        btnText: "Unlock Your Next Chapter",



                    }} border={"border-b"} />



                    <CapabilitiesHeader details1={{
                        heading1: "Conclusion",
                        paragraph1: "By addressing these challenges head-on, we empower manufacturers to reduce lead times, enhance asset utilization, and achieve higher order turnarounds. Let us help you redefine your sampling process to unlock unparalleled efficiency and growth. Contact us to learn how we can transform your sampling operations and drive business success.",
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

