import { Metadata } from 'next';
import ConsultingNavbar from '@/components/ConsultingNavbar';
import CapabilitiesHeader from '@/components/CapabilitiesHeader';
// import CapabilitiesHeader2 from '@/components/CapabilitiesHeader2';
import CapabilitiesContent1 from '@/components/CapabilitiesContent1';
// import CapabilitiesContent2 from '@/components/CapabilitiesContent2';
import TailoredSolutions from '@/components/TailoredSolutions'
// import CapabilitiesContent3 from '@/components/CapabilitiesContent3';
// import CapabilitiesContent4 from '@/components/CapabilitiesContent4';
import Footer from '@/components/Footer';
// import vid1 from "/assets/images/Projects.mp4";
import AboutVideo from '@/components/AboutVideo';
import HelpYou from '@/components/HelpYou';
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
import BaseUrl from '@/components/BaseUrl';
import type { PageMetaDataResponse } from "@/common/types";
import FaqComponent from '@/components/FaqComponent';

type Faq = {
    question: string;
    answer: string;
};
import { getImageAltText, getWebBlogs, fetchMetaDataByPageName, getDataByPageName, filterByWebImage, getImageData, getTestimonials, getTestimonialsByPageName, getEventByPageName } from "@/common/api";
const title = "Manpower Planning";
let PageMetadata: PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
    PageMetadata = await fetchMetaDataByPageName({ pageName: "Manpower Planning" });
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
                `${BaseUrl().mainurl}manpower-planning-consulting`
        },

    };
}

import ServerError from '@/components/ServerError';
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
        blogData = await getDataByPageName(["Manpower Planning", "blogs"]);
        videoData = await getDataByPageName(["Manpower Planning", "videos"]);
        galleryData = await getDataByPageName(["Manpower Planning", "gallery"]);
        testimonialData = await getTestimonialsByPageName("Manpower Planning");
        eventData = await getEventByPageName("Manpower Planning");

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
            question: `What are the key challenges in manpower planning for manufacturers?`,
            answer: `Key challenges include skill shortages, high employee turnover, technological adaptation, and gaps in leadership succession planning.`
        },
        {
            question: `How does manpower planning consulting help with workforce optimization?`,
            answer: `Manpower planning consulting helps by analyzing workforce skills, forecasting staffing needs, and aligning talent with future growth and innovation.`
        },
        {
            question: `How can Madasky Consulting improve talent retention in manufacturing?`,
            answer: `Madasky Consulting helps improve retention through customized recruitment strategies, skill enhancement programs, and employee engagement initiatives.`
        },
        {
            question: `What is succession planning and why is it important for manufacturing businesses?`,
            answer: `Succession planning ensures the smooth transition of leadership roles, mitigating risks associated with leadership gaps and safeguarding long-term strategic continuity.`
        },
        {
            question: `How can manpower planning consulting support workforce development for Industry 4.0?`,
            answer: `Manpower planning consulting helps upskill employees to meet Industry 4.0 demands, preparing them for automation, AI, and other technological advancements.`
        },
    ];
    return (
        <>


            <ConsultingNavbar
                url='/factory-technical-design-consulting'
                title='Project - Factory Technical Design'
                navItems={[
                    { title: 'Plant Layout', link: '/plant-layout-consulting' },
                    { title: 'Technical Consulting', link: '/technical-consulting' },
                    { title: 'Manpower Planning', link: '/manpower-planning-consulting' },
                    { title: 'Process & Material Flow', link: '/process-and-material-flow-consulting' },

                ]}
            />

            <AboutVideo vid1={"/assets/videos/Projects.mp4"} title={title} des={"Creating and accelerating critical advantages through cutting-edge strategy and operations"} h1={PageMetadata?.data?.h1tag} />

            <div className='w-[80vw] bg-white mx-auto'>

                <div className='w-full my-20'>

                    {/* <CapabilitiesHeader details1={{
                        heading1: "Manpower Planning",
                        paragraph1: "In today's dynamic manufacturing environment, effective manpower planning is not just a tool it's a cornerstone of success. With rapid technological advancements, global supply chain complexities, and shifting market demands, manufacturers face an uphill battle in ensuring their workforce is optimized for both present operations and future challenges. Without a strategic approach to manpower planning, organizations risk talent shortages, skill mismatches, and decreased productivity, which can ultimately hinder growth and profitability.",
                    



                    }} border={"border-b"} />

                    <CapabilitiesContent1 details1={{
                        heading1: "Key Challenges Faced by the Industry",
                       


                        data:
                            [
                                {
                                    data1: "Skill Shortages and Talent Gaps",
                                    data2: "The industry is grappling with an aging workforce and a lack of skilled labor to meet modern manufacturing demands. These gaps impact production timelines, innovation, and operational efficiency.",
                                },
                                {
                                    data1: "High Employee Turnover",
                                    data2: "Retaining talent in a competitive labor market is becoming increasingly difficult, leading to frequent disruptions and higher recruitment costs.",
                                },
                                {
                                    data1: "Adapting to Technological Advancements",
                                    data2: "With Industry 4.0 and automation on the rise, upskilling the workforce to handle advanced systems and processes is critical but often overlooked.",
                                },
                                {
                                    data1: "Inconsistent Workforce Planning",
                                    data2: "A lack of alignment between organizational goals and workforce capabilities results in inefficient utilization of resources and operational bottlenecks.",
                                },
                                {
                                    data1: "Leadership Pipeline Deficiencies",
                                    data2: "Succession planning is often insufficient, leaving organizations vulnerable to leadership voids and a lack of strategic continuity.",
                                },

                            ],

                        imgSrc: "Key Challenges.png",
                        altText: imgAltText[0]



                    }} border={"border-b"} />


                  

                    <CapabilitiesContent2 details1={{
                        heading1: "Tailored Solutions Offered by Madasky Consulting",
                        heading2: "At Madasky Consulting, we understand the unique challenges of manpower planning in manufacturing and deliver customized solutions to address your specific needs. Here's how we can help:",


                        data:
                            [
                                {
                                    data1: "Comprehensive Workforce Analysis",
                                    data2: "Assess your current workforce's skills, capabilities, and demographics to provide a clear picture of strengths and gaps.",
                                },
                                {
                                    data1: "Strategic Alignment of Talent",
                                    data2: "Align manpower planning with your business goals to ensure every role and employee contributes to organizational success.",
                                },

                                {
                                    data1: "Future-Focused Workforce Forecasting",
                                    data2: "Use advanced analytics and market trends to predict future staffing needs, ensuring readiness for growth and innovation.",
                                },
                                {
                                    data1: "Customized Recruitment Strategies",
                                    data2: "Develop targeted hiring plans to attract skilled professionals who align with your company's culture and objectives.",
                                },


                            ],

                        data2: [

                            {
                                data1: "Retention and Engagement Programs",
                                data2: "Design initiatives to boost employee satisfaction, reduce turnover, and foster long-term loyalty.",
                            },
                            {
                                data1: "Skill Enhancement and Training Solutions",
                                data2: "Create bespoke training programs to upskill employees, ensuring they can meet the demands of modern manufacturing.",
                            },
                            {
                                data1: "Succession Planning and Leadership Development",
                                data2: "Identify high-potential employees and craft pathways to develop them into future leaders, safeguarding organizational continuity.",
                            },
                            {
                                data1: "Performance Monitoring and Optimization",
                                data2: "Implement systems to continuously evaluate workforce strategies, adapting them based on real-time data and evolving business needs.",
                            },



                        ],





                        imgSrc: "Tailored Solutions.png",
                        altText: imgAltText[1]



                    }} border={"border-none"} /> */}



                    {/* **************************************************************************************/}
                    <CapabilitiesHeader details1={{
                        heading1: "Manpower Planning",
                        paragraph1: "In today's dynamic manufacturing environment, effective Manpower Planning Consulting is not just a tool it's a cornerstone of success. With rapid technological advancements, global supply chain complexities, and shifting market demands, manufacturers face an uphill battle in optimizing their workforce for current operations and future challenges. At Madasky Consulting, our Manpower Planning Consulting expertise ensures your organization avoids talent shortages, skill mismatches, and productivity losses while aligning with Organizational Performance Consulting goals to drive growth and profitability.",




                    }} border={"border-b"} />




                    {/* key challenges  */}
                    <CapabilitiesContent1 details1={{
                        heading1: "Key Challenges Addressed by Manpower Planning Consulting",


                        data:
                            [
                                {
                                    data1: "Skill Shortages & Talent Gaps",
                                    data2: "Aging workforces and insufficient skilled labor stall innovation and efficiency.",
                                },
                                {
                                    data1: "High Employee Turnover",
                                    data2: "Retention struggles inflate costs and disrupt operations.",
                                },
                                {
                                    data1: "Technological Adaptation",
                                    data2: "Workforce upskilling lags behind Industry 4.0 demands.",
                                },
                                {
                                    data1: "Leadership Pipeline Gaps",
                                    data2: "Weak succession planning risks strategic continuity.",
                                },


                            ],

                        imgSrc: "Key Challenges.png",
                        altText: imgAltText[0],
                        calendarButton: true,
                        btnText: "Plan Your Consultation",



                    }} border={"border-b"} />


                    <TailoredSolutions details={{
                        heading1: "Tailored Solutions by Madasky Consulting",
                        paragraph1: "Our Manpower Planning Consulting services, integrated with Organizational Performance Consulting insights, deliver actionable strategies to transform your workforce:",

                        Data1: {
                            subHeading: "Workforce Optimization",
                            subData: [
                                {
                                    data1: "Comprehensive Workforce Analysis",
                                    data2: "Assess skills, demographics, and gaps using Manpower Planning Consulting frameworks.",
                                },
                                {
                                    data1: "Future-Focused Forecasting",
                                    data2: "Predict staffing needs with analytics to align talent with growth and innovation.",
                                },

                            ]
                        },


                        Data2: {
                            subHeading: "Talent Development & Retention",
                            subData: [
                                {
                                    data1: "Customized Recruitment Strategies",
                                    data2: "Attract skilled professionals who fit your culture and goals.",
                                },
                                {
                                    data1: "Skill Enhancement Programs",
                                    data2: "Upskill employees through tailored training for modern manufacturing demands.",
                                },
                                {
                                    data1: "Retention Initiatives",
                                    data2: "Boost engagement and loyalty with Organizational Performance Consulting strategies.",
                                },
                            ]
                        },


                        Data3: {
                            subHeading: "Leadership & Succession",
                            subData: [
                                {
                                    data1: "Leadership Development Pathways",
                                    data2: "Identify and groom high-potential employees for future roles.",
                                },
                                {
                                    data1: "Succession Planning",
                                    data2: "Ensure seamless leadership transitions to safeguard continuity.",
                                },

                            ]
                        },


                        Data4: {
                            subHeading: "Alignment & Performance",
                            subData: [
                                {
                                    data1: "Strategic Talent Alignment",
                                    data2: "Sync workforce capabilities with business objectives through Organizational Performance Consulting.",
                                },
                                {
                                    data1: "Performance Monitoring",
                                    data2: "Track workforce strategies in real-time, adapting to evolving needs.",
                                },
                            ]
                        },


                        imgSrc: "Tailored Solutions.png",
                        altText: imgAltText[0],
                        calendarButton: true,
                        btnText: "Book Your Session",



                    }} border={"border-b"} />


                    {/* Why Choose Madasky Consulting  */}
                    <CapabilitiesContent1 details1={{
                        heading1: "Why Choose Madasky Consulting?",



                        data:
                            [
                                {
                                    data1: "Holistic Expertise",
                                    data2: "Combine Manpower Planning Consulting with Organizational Performance Consulting to bridge talent gaps and drive efficiency.",
                                },
                                {
                                    data1: "Data-Driven Solutions",
                                    data2: "Forecast trends, optimize recruitment, and retain talent using advanced analytics.",
                                },
                                {
                                    data1: "Future-Ready Workforce",
                                    data2: "Prepare teams for automation, AI, and Industry 4.0 challenges. Proven Results: Reduce turnover, enhance productivity, and build resilient leadership pipelines.",
                                },



                            ],



                        imgSrc: "Why Choose Madasky Consulting.png",
                        altText: imgAltText[0],
                        calendarButton: true,
                        btnText: "Schedule Expert Call",



                    }} border={"border-b"} />


                    <CapabilitiesHeader details1={{
                        heading1: "Transform your workforce into a strategic asset.",
                        paragraph1: "Leverage Madasky Consulting's Manpower Planning Consulting and Organizational Performance Consulting services to align talent with ambition, reduce risks, and achieve sustainable growth. Let's build a workforce that powers your manufacturing success.",



                    }} border={"border-0"} />


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

