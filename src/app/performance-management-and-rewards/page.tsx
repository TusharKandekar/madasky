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
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
import type { PageMetaDataResponse } from "@/common/types";

import { getImageAltText, getWebBlogs, fetchMetaDataByPageName, getDataByPageName, filterByWebImage, getImageData, getTestimonialsByPageName, getEventByPageName } from "@/common/api";
const title = "Performance Management & Rewards";
let PageMetadata: PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
    PageMetadata = await fetchMetaDataByPageName({ pageName: "Performance Management & Rewards" });
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
                `${BaseUrl().mainurl}performance-management-and-rewards`
        },

    };
}

// import SlidingBlogs from '@/components/SlidingBlogs';
// import VideoPlayer from '@/components/VideoPlayer';
// import Imagetemplate from '@/components/Imagesliders';
export default async function GrowthMarketingAndSales() {

    const arr = ["Key Challenges.png", "Our Approach.png"];


    let images;
    let blogData;
    let videoData;
    let galleryData;
    let testimonialData;
    let eventData;
    let serverError = false;

    try {
        images = await getImageAltText(arr);
        blogData = await getDataByPageName(["Performance Management & Rewards", "blogs"]);
        videoData = await getDataByPageName(["Performance Management & Rewards", "videos"]);
        galleryData = await getDataByPageName(["Performance Management & Rewards", "gallery"]);
        testimonialData = await getTestimonialsByPageName("Performance Management & Rewards");
        eventData = await getEventByPageName("Performance Management & Rewards");

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
                url={'/people-and-organisational-performance-consulting'}
                title={'People & Organisational Performance'}
                navItems={[
                    { title: 'Leadership Development & Talent Management', link: '/leadership-development-and-talent-management' },
                    { title: "Organization Design - Position, Reporting", link: '/organization-design' },
                    { title: 'Culture Transformation - Executive Coaching', link: '/culture-transformation' },
                    { title: 'Performance Management & Rewards', link: '/performance-management-and-rewards' },





                ]}
            />
            <AboutVideo vid1={'/assets/videos/People and Organisational Performance69.mp4'} title={title} des={"Creating and accelerating critical advantages through cutting-edge strategy and operations"} h1={PageMetadata?.data?.h1tag} />

            <div className='w-[80vw] bg-white mx-auto'>

                <div className='w-full my-20'>

                    <CapabilitiesHeader details1={{
                        heading1: "Performance Management & Rewards",
                        paragraph1: "In today's fast-evolving manufacturing landscape, performance management and rewards play a critical role in ensuring operational efficiency, employee engagement, and business success. However, many manufacturing businesses struggle with unclear role expectations, ineffective performance tracking, misaligned incentives, and outdated appraisal systems, leading to low productivity, disengagement, and high attrition rates.",
                        paragraph2: "Without a well-structured performance management system, employees often lack clarity on Key Performance Indicators (KPIs) and Key Result Areas (KRAs), making it difficult to track progress and drive accountability. Traditional appraisal systems fail to recognize high performers, while poorly structured incentive and variable pay plans lead to dissatisfaction and low motivation. Moreover, the absence of a data-driven performance evaluation framework results in biased assessments, hindering workforce optimization and overall organizational growth.",
                        paragraph3: "To remain competitive, manufacturers must adopt a structured, transparent, and data-driven approach to performance management, ensuring that employee contributions align with business goals while fostering continuous improvement and high engagement.",




                    }} border={"border-b"} />

                    {/* <CapabilitiesContent1 details1={{
                        heading1: "Key Challenges Faced by the Manufacturing Industry",
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

                        imgSrc: "/assets/images/398.png"



                    }} border={"border-b"} /> */}





                    <CapabilitiesContent2 details1={{
                        heading1: "Key Challenges Faced by the Manufacturing Industry",
                        // heading2: "Manufacturers often encounter hurdles that impede efficiency and impact overall business performance. Below are some of the most common challenges our clients face:",


                        data:
                            [
                                {
                                    data1: "Lack of Role Clarity and Accountability",
                                    data2: "Employees often struggle with unclear job roles and expectations, leading to inefficiencies and misaligned objectives.",
                                },
                                {
                                    data1: "Ineffective KPI and KRA Tracking",
                                    data2: "Many organizations fail to define and monitor the right performance metrics, making it difficult to measure individual and team contributions.",
                                },

                                {
                                    data1: "Outdated Performance Evaluation Systems",
                                    data2: "Traditional review processes lack real-time data, leading to subjective assessments and disengaged employees.",
                                },
                                {
                                    data1: "Misaligned Incentives and Pay Structures",
                                    data2: "Poorly structured incentive models fail to motivate employees or drive desired behaviors, resulting in low morale and productivity.",
                                },







                            ],

                        data2: [
                            {
                                data1: "Inefficient Annual Appraisal Systems",
                                data2: "Delayed and inconsistent performance reviews create dissatisfaction and do not provide a clear roadmap for career progression.",
                            },
                            {
                                data1: "High Employee Turnover Due to Poor Recognition",
                                data2: "A lack of performance-based rewards and recognition programs leads to disengagement and increased attrition.",
                            },




                        ],





                        imgSrc: `/Key Challenges.png`,
                        altText: `${imgAltText[0]}`,
                        calendarButton: true,
                        btnText: "Plan Your Consultation",



                    }} border={"border-b"} />


                    {/* <CapabilitiesHeader2 details1={{
                        heading1: "The Impact of These Challenges",
                        paragraph1: "These challenges can lead to reduced competitiveness, increased operational inefficiencies, delayed production timelines, and diminished profit margins. For manufacturers aiming to thrive in this dynamic environment, embracing innovative solutions is not just an option it's a necessity.",
                        imgSrc: "/assets/images/398.png",


                    }} border={"border-b"} /> */}

                    <CapabilitiesContent2 details1={{
                        heading1: "Tailored Solutions Offered by Madasky Consulting",
                        // heading2: "At Madasky Consulting, we specialize in transforming manufacturing cultures by embedding agility, innovation, and performance-driven mindsets. Our approach ensures seamless cultural evolution, fostering alignment between leadership, employees, and business objectives.",
                        // paragraph1: "Our Tailored Solutions Include:",
                        heading3: "Performance management in manufacturing is more than just tracking KPIs it's about creating a high-performance culture where employees are engaged, motivated, and aligned with organizational goals. At Madasky Consulting, we design structured, data-driven, and transparent performance management systems that drive accountability, recognize talent, and optimize workforce efficiency. Let's build a results-driven organization that thrives on performance, rewards excellence, and delivers long-term business success.",


                        data:
                            [
                                {
                                    data1: "Defining Clear Roles and Responsibilities",
                                    data2: "We create structured job descriptions and role expectations that align with business objectives, ensuring clarity and accountability at every level.",
                                },
                                {
                                    data1: "Developing KPI and KRA Frameworks",
                                    data2: "Our expertise helps define measurable and actionable KPIs and KRAs, providing a clear roadmap for individual and team success.",
                                },

                                {
                                    data1: "Implementing a Data-Driven Performance Evaluation System",
                                    data2: "We design and integrate real-time performance tracking tools that eliminate subjectivity and enable objective assessments.",
                                },
                                {
                                    data1: "Structuring Incentives and Variable Pay Models",
                                    data2: "Our customized incentive frameworks ensure that rewards align with performance, driving motivation and business growth.",
                                },




                            ],

                        data2: [

                            {
                                data1: "Optimizing Annual Appraisal Systems",
                                data2: "We revamp performance review cycles, making them structured, transparent, and future-focused for better employee engagement and career planning.",
                            },
                            {
                                data1: "Designing Reward and Recognition Programs",
                                data2: "Our tailored recognition strategies help boost morale, improve retention, and foster a high-performance culture.",
                            },
                            {
                                data1: "Enabling Continuous Feedback Mechanisms",
                                data2: "We implement real-time feedback systems that encourage continuous improvement and alignment with business goals.",
                            },
                            {
                                data1: "Training Leaders for Effective Performance Management",
                                data2: "Our leadership development programs equip managers with the skills to drive performance, provide constructive feedback, and develop high-potential talent.",
                            },
                            {
                                data1: "Integrating Digital Performance Management Tools",
                                data2: "We help organizations implement automated performance tracking and reporting systems to enhance decision-making and accountability.",
                            },
                            {
                                data1: "Building a Culture of Performance Excellence",
                                data2: "By aligning performance goals with business objectives, we help companies foster a culture of continuous improvement, innovation, and high engagement.",
                            },



                        ],





                        imgSrc: `/Tailored Solutions.png`,
                        altText: `${imgAltText[1]}`,
                        calendarButton: true,
                        btnText: "Unlock Your Next Chapter",



                    }} border={"border-none"} />



                    {/* <CapabilitiesHeader details1={{
                        heading1: "Conclusion",
                        paragraph1: "By addressing these challenges head-on, we empower manufacturers to reduce lead times, enhance asset utilization, and achieve higher order turnarounds. Let us help you redefine your sampling process to unlock unparalleled efficiency and growth. Contact us to learn how we can transform your sampling operations and drive business success.",
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

