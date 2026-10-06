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
const title = "Organization Design - Position Reporting";
let PageMetadata: PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
    PageMetadata = await fetchMetaDataByPageName({ pageName: "Organization Design - Position Reporting" });
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
                `${BaseUrl().mainurl}organization-design`
        },

    };
}

// import SlidingBlogs from '@/components/SlidingBlogs';
// import VideoPlayer from '@/components/VideoPlayer';
// import Imagetemplate from '@/components/Imagesliders';
export default async function GrowthMarketingAndSales() {

    const arr = ["Key Challenges.png", "What we do_.png"];


    let images;
    let blogData;
    let videoData;
    let galleryData;
    let testimonialData;
    let eventData;
    let serverError = false;

    try {
        images = await getImageAltText(arr);
        blogData = await getDataByPageName(["Organization Design - Position Reporting", "blogs"]);
        videoData = await getDataByPageName(["Organization Design - Position Reporting", "videos"]);
        galleryData = await getDataByPageName(["Organization Design - Position Reporting", "gallery"]);
        testimonialData = await getTestimonialsByPageName("Organization Design - Position Reporting");
        eventData = await getEventByPageName("Organization Design - Position Reporting");

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
                        heading1: "Organizational Design",
                        paragraph1: "In today's dynamic manufacturing landscape, efficiency, agility, and accountability are critical to success. However, many organizations struggle with ineffective positioning, reporting structures, and role clarity, leading to bottlenecks, miscommunication, and decision-making delays. Without a well-defined organizational design, companies face overlapping responsibilities, leadership gaps, and inefficient workflows, ultimately impacting productivity, cost efficiency, and overall business performance.",
                        paragraph2: "An unoptimized structure not only limits growth but also leads to confusion in reporting hierarchies, slowing down response times and reducing operational agility. Lack of clear role definitions results in low employee engagement, duplicated efforts, and strategic misalignment. These challenges create inefficiencies, internal friction, and disengagement, making it harder for manufacturing businesses to scale, innovate, and maintain a competitive edge.",
                        paragraph3: "A well-structured organization empowers teams with clarity, accountability, and seamless collaboration, enabling faster decision-making and a performance driven culture. This is where strategic organizational design comes into play ensuring that positions, reporting structures, and workflows align with business objectives, drive efficiency, and foster sustainable growth.",



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
                        heading1: "Key Challenges in Organizational Design for Manufacturing",
                        // heading2: "Manufacturers often encounter hurdles that impede efficiency and impact overall business performance. Below are some of the most common challenges our clients face:",


                        data:
                            [
                                {
                                    data1: "Unclear Role Definitions & Overlapping Responsibilities",
                                    data2: "Lack of well-defined job roles and accountability leads to inefficiencies, duplication of work, and operational confusion.",
                                },
                                {
                                    data1: "Ineffective Reporting Structures & Decision Bottlenecks",
                                    data2: "Poorly structured reporting lines slow down decision-making, creating delays in operations and reducing responsiveness to challenges.",
                                },

                                {
                                    data1: "Misalignment Between Organizational Structure & Business Goals",
                                    data2: "Rigid or outdated structures fail to support business expansion, innovation, and changing market demands, causing inefficiencies.",
                                },
                                {
                                    data1: "Limited Leadership Visibility & Accountability Gaps",
                                    data2: "A lack of clear leadership roles and reporting frameworks results in poor oversight, weak decision-making, and reduced strategic direction.",
                                },






                            ],

                        data2: [
                            {
                                data1: "Siloed Departments & Poor Cross-Functional Collaboration",
                                data2: "Inefficient team coordination and lack of communication between departments reduce agility and slow down manufacturing processes.",
                            },
                            {
                                data1: "High Turnover & Low Employee Engagement Due to Structural Gaps",
                                data2: "Poor role clarity and career progression opportunities lead to dissatisfaction, disengagement, and higher attrition rates.",
                            },
                            {
                                data1: "Scalability Issues & Lack of Agile Workforce Structures",
                                data2: "Companies struggle to adapt their organizational design to scale operations, integrate new technologies, or expand into new markets.",
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
                        heading1: "How Madasky Consulting Helps You Build an Optimized Organizational Structure",
                        heading2: "At Madasky Consulting, we transform manufacturing organizations by designing high-performance structures that align with business goals, enhance decision-making, and foster accountability. Our approach ensures efficient positioning, optimized reporting hierarchies, and seamless workflows, unlocking productivity and agility.",
                        paragraph1: "Our Tailored Solutions Include:",
                        // heading3: "This is just a glimpse of how we can partner with your business to achieve transformative growth. Let's explore how technology can reshape your manufacturing operations and make your business future-ready.",


                        data:
                            [
                                {
                                    data1: "Precision Role Definition & Job Structuring",
                                    data2: "We develop clear job descriptions, responsibilities, and KPIs to eliminate overlap, improve efficiency, and enhance individual accountability.",
                                },
                                {
                                    data1: "Optimized Reporting Hierarchies & Decision Flows",
                                    data2: "We design lean reporting structures that eliminate bottlenecks, enhance leadership visibility, and accelerate decision-making across teams.",
                                },

                                {
                                    data1: "Strategic Organizational Alignment with Business Goals",
                                    data2: "Our framework ensures organizational agility, enabling companies to scale, adapt, and respond effectively to evolving market conditions.",
                                },
                                {
                                    data1: "Leadership & Management Structure Optimization",
                                    data2: "We create a well-defined leadership framework with transparent reporting lines that enhance accountability and drive business success.",
                                },




                            ],

                        data2: [

                            {
                                data1: "Cross-Functional Collaboration Frameworks",
                                data2: "We break down silos by structuring teams for seamless coordination, enabling faster response times and improved operational efficiency.",
                            },
                            {
                                data1: "Succession Planning & Talent Mobility Strategies",
                                data2: "We build a future-ready workforce by creating structured career paths, ensuring leadership continuity, and reducing turnover.",
                            },
                            {
                                data1: "Scalable Workforce Models for Growth & Expansion",
                                data2: "Our flexible organizational designs help manufacturers scale operations, integrate new technologies, and expand into new markets seamlessly.",
                            },
                            {
                                data1: "Data-Driven Performance & Reporting Systems",
                                data2: "We implement KPI-based tracking and performance dashboards that provide real-time insights for strategic decision-making.",
                            },



                        ],





                        imgSrc: `/What we do_.png`,
                        altText: `${imgAltText[1]}`,
                        calendarButton: true,
                        btnText: "Book Your Free Strategy Call",




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

