import { Metadata } from 'next';
import ConsultingNavbar2 from '@/components/ConsultingNavbar2';
import CapabilitiesHeader from '@/components/CapabilitiesHeader';
import CapabilitiesHeader2 from '@/components/CapabilitiesHeader2';
import CapabilitiesContent1 from '@/components/CapabilitiesContent1';
import CapabilitiesContent2 from '@/components/CapabilitiesContent2';
import CapabilitiesContent6 from '@/components/CapabilitiesContent6';
import CapabilitiesContent7 from '@/components/CapabilitiesContent7';

import Footer from '@/components/Footer';
import AboutVideo from '@/components/AboutVideo';
import HelpYou from '@/components/HelpYou';
// import SlidingBlogs from '../components/SlidingBlogs';
// import VideoPlayer from '../components/VideoPlayer';
// import Imagetemplate from '../components/Imagesliders';
import BaseUrl from '@/components/BaseUrl';
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
import { getImageAltText, getWebBlogs, fetchMetaDataByPageName, getDataByPageName, filterByWebImage, getImageData, getTestimonials, getTestimonialsByPageName, getEventByPageName } from "@/common/api";
import type { PageMetaDataResponse } from "@/common/types";

const title = "MSME GrowX";
let PageMetadata: PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
    PageMetadata = await fetchMetaDataByPageName({ pageName: "MSME Grow X" });
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
                `${BaseUrl().mainurl}msme-growx-consulting`
        },

    };
}

export default async function GrowthMarketingAndSales() {
    const arr = ["Key Challenges.png", "Why Choose Madasky Consulting.png", "Introducing MSME GrowX.png", "MSME.png", "MSME 3.png", "MSME 2.png"];


    let images;
    let blogData;
    let videoData;
    let galleryData;
    let testimonialData;
    let eventData;
    let serverError = false;

    try {
        images = await getImageAltText(arr);
        blogData = await getDataByPageName(["MSME Grow X", "blogs"]);
        videoData = await getDataByPageName(["MSME Grow X", "videos"]);
        galleryData = await getDataByPageName(["MSME Grow X", "gallery"]);
        testimonialData = await getTestimonialsByPageName("MSME Grow X");
        eventData = await getEventByPageName("MSME Grow X");

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
    return (
        <>


            <ConsultingNavbar2
                url='/msme-growx-consulting'
                title={'MSME GrowX'}

            />
            <AboutVideo vid1={`/assets/videos/MSMEGrowX.mp4`} title={title} des={"Creating and accelerating critical advantages through cutting-edge strategy and operations"} h1={PageMetadata?.data?.h1tag} />

            <div className='w-[80vw] bg-white mx-auto'>

                <div className='w-full my-20'>

                    <CapabilitiesHeader details1={{
                        heading1: "MSME GrowX",
                        paragraph1: "MSME GrowX Program: Transforming MSMEs into scalable & high-performance businesses unlocking the full potential of MSMEs in india's manufacturing landscape micro, small, and medium enterprises (MSMEs) form the backbone of india's manufacturing industry, contributing significantly to employment, exports, and economic development. Despite their critical role, many MSMEs struggle with scalability, financial stability, operational efficiency, workforce management, and digital transformation.Unlike large corporations with deep pockets and structured processes, MSMEs often face resource constraints, lack of strategic planning, and inconsistent business performance. Without proper guidance, many fail to achieve sustainable growth, despite having high-quality products and market demand.",
                        paragraph2: "At Madasky Consulting, we recognize these challenges and offer MSME GrowX, a comprehensive consulting program designed to help MSMEs navigate these obstacles and scale effectively. Our approach focuses on equipping MSMEs with proven strategies, streamlined operations, and expert-driven business insights to drive revenue, optimize productivity, and build resilient organizations.",
                        // paragraph3: "However, the path to sustainability is fraught with challenges",




                    }} border={"border-b"} />


                    <CapabilitiesContent2 details1={{
                        heading1: "Key Challenges Faced by MSMEs in Manufacturing:",
                        // heading2: "At Madasky Consulting, we specialize in research and business intelligence tailored to the manufacturing sector, providing critical insights to help companies make informed, strategic decisions. Our expert-driven research methodologies ensure that our clients remain resilient, competitive, and future-ready.",
                        // paragraph1: "Strategic Research & Business Intelligence Solutions:",
                        // heading3: "At Madasky Consulting, we don't just offer advice we deliver measurable results. With deep industry expertise and a hands-on approach, we help manufacturing firms unlock cash flow, optimize efficiency, and drive profitability. Our tailored strategies, data-driven insights, and proven methodologies ensure that you see immediate financial impact and long-term business resilience.",
                        // heading4: "When you partner with us, you gain more than just solutions you gain a trusted advisor committed to your success. Let's turn your financial challenges into opportunities and position your business for sustainable growth. Ready to accelerate your cash flow? Let's talk.",


                        data:
                            [
                                {
                                    data1: " Struggles with Sales Growth & Market Expansion",
                                    data2: "Many MSMEs struggle to break into new markets due to limited marketing knowledge, lack of brand positioning, and inconsistent sales processes. They often rely on referrals and existing networks rather than implementing a structured sales and marketing strategy.",
                                },
                                {
                                    data1: "Operational Inefficiencies Leading to High Costs",
                                    data2: "Unoptimized processes, inefficient workflows, manual operations, and inadequate production planning result in higher operational costs, reducing overall profitability. Many MSMEs operate without lean manufacturing principles or automation, leading to wasted resources and reduced competitiveness.",
                                },

                                {
                                    data1: "Workforce Management & Employee Retention",
                                    data2: "A lack of well-defined KPIs (Key Performance Indicators), KRAs (Key Result Areas), structured incentives, and employee engagement strategies makes it difficult for MSMEs to retain talent and boost productivity. Without a performance-driven culture, businesses often experience low employee morale and high attrition rates.",
                                },




                            ],

                        data2: [


                            {
                                data1: "Financial Instability & Cash Flow Crunch",
                                data2: "Delayed payments, ineffective credit control, and poor financial planning put significant strain on cash flow, making it difficult for MSMEs to invest in growth, technology, and workforce expansion. Without structured financial management, many businesses struggle to stay afloat during economic downturns.",
                            },
                            {
                                data1: "Lack of Strategic Leadership & Vision",
                                data2: "Many MSME business owners are caught up in day-to-day operations, leaving little time for long-term strategy. The absence of clear business goals, growth plans, and scalability frameworks makes it challenging for MSMEs to transition from survival mode to growth mode.",
                            },
                            {
                                data1: "Limited Adoption of Technology & Digitalization",
                                data2: "With increasing competition, digital transformation is no longer optional but a necessity. However, many MSMEs hesitate to adopt ERP solutions, automation, CRM tools, and data-driven decision-making, missing out on efficiency and scalability advantages.",
                            },
                            {
                                data1: "Weak Business Culture & Ineffective HR Practices",
                                data2: "A lack of structured HR policies, leadership training, and incentive structures results in poor workplace culture, affecting employee motivation, performance, and retention. Many businesses fail to align their employees with the organization's mission, vision, and long-term objectives.",
                            },




                        ],





                        imgSrc: "Key Challenges.png",
                        altText: imgAltText[0],
                        calendarButton: true,
                        btnText: "Schedule Expert Call",



                    }} border={"border-b"} />

                    <CapabilitiesHeader2 details1={{
                        heading1: "Introducing MSME GrowX: A Tailored Consulting Program for MSME Growth & Excellence",
                        paragraph1: "To address these challenges, Madasky Consulting presents MSME GrowX, a high-impact consulting framework that enables MSMEs to scale efficiently, drive profitability, and build high-performance teams. Our consulting services provide a structured roadmap to enhance every aspect of your business, ensuring long-term sustainability and market competitiveness.",
                        imgSrc: "Introducing MSME GrowX.png",
                        altText: imgAltText[2]

                    }} border={"border-b"} />



                    <CapabilitiesContent7 details1={{
                        heading1: "Key Focus Areas of MSME GrowX Program Marketing & Sales Growth Program:",
                        paragraph1: "We help MSMEs develop a strong brand presence, create a structured sales funnel, and optimize pricing strategies to maximize demand and revenue. Our experts focus on:",
                        // paragraph2: "Crafting a Sustainable Growth Blueprint. We specialize in developing robust ESG-compliant business strategies, enabling manufacturers to integrate sustainability into their operational frameworks effectively.",


                        data:
                            [
                                {
                                    data1: "Building an effective",
                                    data2: "Go-To-Market (GTM) strategy",
                                },
                                {
                                    data1: "Strengthening",
                                    data2: "customer acquisition and retention",
                                },

                                {
                                    data1: "Implementing",
                                    data2: "digital marketing & social media strategies",
                                },


                            ],



                    }} border={"border-b"} />

                    <CapabilitiesContent6 details1={{
                        heading1: "Operations & Process Optimization Program:",
                        paragraph1: "Operational efficiency is crucial for cost reduction and productivity improvement. We assist MSMEs in:",
                        // paragraph2: "Crafting a Sustainable Growth Blueprint. We specialize in developing robust ESG-compliant business strategies, enabling manufacturers to integrate sustainability into their operational frameworks effectively.",


                        data:
                            [
                                {
                                    data1: "Implementing Lean Manufacturing",
                                    data2: "& Six Sigma techniques",
                                },
                                {
                                    data1: "Improving supply chain efficiency",
                                    data2: "& vendor management",
                                },

                                {
                                    data1: "Introducing automation",
                                    data2: "& workflow standardization",
                                },


                            ],

                        imgSrc: "MSME.png",
                        altText: imgAltText[3]




                    }} border={"border-b"} />

                    <CapabilitiesContent7 details1={{
                        heading1: "HR Excellence Program (KPI, KRA, Culture & Incentives):",
                        paragraph1: "A strong workforce is the backbone of a thriving business. We focus on:",
                        // paragraph2: "Crafting a Sustainable Growth Blueprint. We specialize in developing robust ESG-compliant business strategies, enabling manufacturers to integrate sustainability into their operational frameworks effectively.",


                        data:
                            [
                                {
                                    data1: "Establishing",
                                    data2: "clear KPIs & KRAs for each role",
                                },
                                {
                                    data1: "Designing",
                                    data2: "performance-based incentive structures",
                                },

                                {
                                    data1: "Building",
                                    data2: "a strong workplace culture for motivation & retention",
                                },


                            ],





                    }} border={"border-b"} />

                    <CapabilitiesContent6 details1={{
                        heading1: "Finance & Cash Flow Management Program:",
                        paragraph1: "A business with cash flow issues cannot sustain growth. Our financial experts assist in:",
                        // paragraph2: "Crafting a Sustainable Growth Blueprint. We specialize in developing robust ESG-compliant business strategies, enabling manufacturers to integrate sustainability into their operational frameworks effectively.",


                        data:
                            [
                                {
                                    data1: "Optimizing",
                                    data2: "working capital & credit management",
                                },
                                {
                                    data1: "Implementing",
                                    data2: "cash flow forecasting tools",
                                },

                                {
                                    data1: "Structuring",
                                    data2: "better payment cycles & financial controls",
                                },


                            ],

                        imgSrc: "MSME 3.png",
                        altText: imgAltText[4]



                    }} border={"border-b"} />

                    <CapabilitiesContent7 details1={{
                        heading1: "Business Strategy Program: From Dream to Success:",
                        paragraph1: "Many MSMEs fail due to the absence of a structured business roadmap. We guide businesses in:",
                        // paragraph2: "Crafting a Sustainable Growth Blueprint. We specialize in developing robust ESG-compliant business strategies, enabling manufacturers to integrate sustainability into their operational frameworks effectively.",


                        data:
                            [
                                {
                                    data1: "Defining",
                                    data2: "core business objectives & mission",
                                },
                                {
                                    data1: "Developing",
                                    data2: "scalability and growth frameworks",
                                },

                                {
                                    data1: "Implementing",
                                    data2: "long-term business strategies",
                                },


                            ],





                    }} border={"border-b"} />

                    <CapabilitiesContent6 details1={{
                        heading1: "Time Management for MSME Leaders:",
                        paragraph1: "Leadership effectiveness is crucial for business growth. We assist in:",
                        // paragraph2: "Crafting a Sustainable Growth Blueprint. We specialize in developing robust ESG-compliant business strategies, enabling manufacturers to integrate sustainability into their operational frameworks effectively.",


                        data:
                            [
                                {
                                    data1: "Time-blocking",
                                    data2: "techniques for MSME founders",
                                },
                                {
                                    data1: "Strategic",
                                    data2: "delegation & workflow automation",
                                },

                                {
                                    data1: "Optimizing",
                                    data2: "daily operations to reduce inefficiencies",
                                },


                            ],

                        imgSrc: "MSME 2.png",
                        altText: imgAltText[5]



                    }} border={"border-b"} />

                    <CapabilitiesContent7 details1={{
                        heading1: "The Art of Leading: Management Development Program:",
                        paragraph1: "Leadership skills define the future of any organization. Our experts help MSME leaders in:",
                        // paragraph2: "Crafting a Sustainable Growth Blueprint. We specialize in developing robust ESG-compliant business strategies, enabling manufacturers to integrate sustainability into their operational frameworks effectively.",


                        data:
                            [
                                {
                                    data1: "Strengthening",
                                    data2: "decision-making & critical thinking",
                                },
                                {
                                    data1: "Building",
                                    data2: "high-performance leadership teams",
                                },

                                {
                                    data1: "Developing",
                                    data2: "long-term business vision & resilience",
                                },


                            ],





                    }} border={"border-b"} />


                    <CapabilitiesContent1 details1={{
                        heading1: "Why Choose MSME GrowX by Madasky Consulting?",
                        // paragraph1: "Structuring Transparent & Impactful Sustainability Disclosures. We assist manufacturing companies in establishing structured ESG reporting frameworks, ensuring compliance with national and international sustainability reporting standards.",
                        // paragraph2: "Structuring Transparent & Impactful Sustainability Disclosures. We assist manufacturing companies in establishing structured ESG reporting frameworks, ensuring compliance with national and international sustainability reporting standards.",


                        data:
                            [
                                {
                                    data1: "Proven Frameworks",
                                    data2: "We implement industry-leading strategies tailored to MSMEs.",
                                },
                                {
                                    data1: "Result-Oriented Consulting",
                                    data2: "Every intervention is designed for measurable impact.",
                                },

                                {
                                    data1: "Expert-Led Execution",
                                    data2: "Our consultants bring years of manufacturing & business expertise.",
                                },
                                {
                                    data1: "End-to-End Business Transformation",
                                    data2: "From sales & marketing to finance & HR, we cover it all.",
                                },


                            ],

                        imgSrc: "Why Choose Madasky Consulting.png",
                        altText: imgAltText[1],
                        calendarButton: true,
                        btnText: "Lock In Your Meeting",



                    }} border={"border-b"} />

                    <CapabilitiesHeader details1={{
                        heading1: "Are You Ready to Scale Your MSME?",
                        paragraph1: "Let's unlock new opportunities for sustained growth, profitability, and operational efficiency. Contact Us Today to Get Started with MSME GrowX!",




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

