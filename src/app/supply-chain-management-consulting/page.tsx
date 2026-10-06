import { Metadata } from 'next';
import ConsultingNavbar2 from '@/components/ConsultingNavbar2';
import CapabilitiesHeader from '@/components/CapabilitiesHeader';
import CapabilitiesContent2 from '@/components/CapabilitiesContent2';

import Footer from '@/components/Footer';
// import vid1 from "/assets/images/Supply chain management.mp4";
import AboutVideo from '@/components/AboutVideo';
import HelpYou from '@/components/HelpYou';
// import SlidingBlogs from '@/components/SlidingBlogs';
// import VideoPlayer from '@/components/VideoPlayer';
// import Imagetemplate from '@/components/Imagesliders';

import BaseUrl from '@/components/BaseUrl';
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
import { getImageAltText, getWebBlogs, fetchMetaDataByPageName, getDataByPageName, filterByWebImage, getImageData, getTestimonialsByPageName, getEventByPageName } from "@/common/api";
import type { PageMetaDataResponse } from "@/common/types";

const title = "Supply Chain Management";
let PageMetadata: PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
    PageMetadata = await fetchMetaDataByPageName({ pageName: "Supply Chain Management" });
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
                `${BaseUrl().mainurl}supply-chain-management-consulting`
        },

    };
}

export default async function GrowthMarketingAndSales() {
    const arr = ["What we do_.png", "Key Challenges.png"];


    let images;
    let blogData;
    let videoData;
    let galleryData;
    let testimonialData;
    let eventData;
    let serverError = false;

    try {
        images = await getImageAltText(arr);
        blogData = await getDataByPageName(["Supply Chain Management", "blogs"]);
        videoData = await getDataByPageName(["Supply Chain Management", "videos"]);
        galleryData = await getDataByPageName(["Supply Chain Management", "gallery"]);
        testimonialData = await getTestimonialsByPageName("Supply Chain Management");
        eventData = await getEventByPageName("Supply Chain Management");

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
                url='/supply-chain-management-consulting'
                title={'Supply Chain Management'}

            />
            <AboutVideo vid1={"/assets/videos/Supply chain management.mp4"} title={title} des={"Creating and accelerating critical advantages through cutting-edge strategy and operations"} h1={PageMetadata?.data?.h1tag} />

            <div className='w-[80vw] bg-white mx-auto'>

                <div className='w-full my-20'>

                    <CapabilitiesHeader details1={{
                        heading1: "Supply Chain Management",
                        paragraph1: "In today's rapidly evolving industrial landscape, the manufacturing sector in India faces unprecedented challenges. The rising complexity of supply chains, fluctuating demand patterns, cost pressures, and the need for digital transformation have forced companies to rethink their traditional strategies. To remain competitive, businesses must adopt a proactive and data-driven approach that aligns operations with strategic objectives while ensuring agility and resilience.",
                        paragraph2: "At Madasky Consulting Pvt. Ltd., we understand the pain points of manufacturers and offer tailored consulting solutions that drive efficiency, cost savings, and operational excellence. Our expertise in supply chain optimization, digital transformation, and risk management helps businesses navigate uncertainties and position themselves for sustained success.",
                        // paragraph3: "However, the path to sustainability is fraught with challenges",




                    }} border={"border-b"} />


                    <CapabilitiesContent2 details1={{
                        heading1: "Key Challenges Faced by the Manufacturing Industry:",
                        // heading2: "At Madasky Consulting, we specialize in research and business intelligence tailored to the manufacturing sector, providing critical insights to help companies make informed, strategic decisions. Our expert-driven research methodologies ensure that our clients remain resilient, competitive, and future-ready.",
                        // paragraph1: "Strategic Research & Business Intelligence Solutions:",



                        data:
                            [
                                {
                                    data1: "Supply Chain Volatility",
                                    data2: "Disruptions caused by geopolitical factors, fluctuating raw material availability, and transportation bottlenecks impact production timelines.",
                                },
                                {
                                    data1: "Rising Costs",
                                    data2: " Increasing labor, energy, and material costs put pressure on profit margins and demand smarter cost-control mechanisms.",
                                },

                                {
                                    data1: "Technology Adoption & Digitalization",
                                    data2: "Traditional manufacturing setups struggle to integrate AI, IoT, and automation for streamlined operations.",
                                },

                                {
                                    data1: "Inventory & Demand Management",
                                    data2: "Balancing production with fluctuating demand remains a persistent challenge, leading to inefficiencies.",
                                },

                                {
                                    data1: "Workforce Skill Gaps",
                                    data2: "The shortage of skilled professionals capable of managing modern supply chain technologies creates operational bottlenecks.",
                                },




                            ],

                        data2: [


                            {
                                data1: "Regulatory Compliance & Sustainability",
                                data2: "Meeting evolving environmental standards and compliance regulations while maintaining profitability is a growing concern.",
                            },
                            {
                                data1: "Operational Efficiency & Lean Practices",
                                data2: " Many companies still rely on outdated processes, leading to wastage, inefficiencies, and production delays.",
                            },
                            {
                                data1: "Global Competition & Market Uncertainty",
                                data2: "The increasing presence of global players demands agile and adaptive strategies to maintain market share.",
                            },





                        ],





                        imgSrc: "Key Challenges.png",
                        altText: imgAltText[1],
                        calendarButton: true,
                        btnText: "Reserve Your Time",



                    }} border={"border-b"} />


                    <CapabilitiesContent2 details1={{
                        heading1: "How Madasky Consulting Pvt. Ltd. Can Help:",
                        heading2: "We offer strategic, data-driven consulting services tailored to the specific needs of manufacturing businesses in India. Our solutions drive measurable results, ensuring efficiency, profitability, and long-term competitiveness.",
                        heading3: "At Madasky Consulting Pvt. Ltd., we don't just identify problems-we provide actionable, high-impact solutions that drive growth, sustainability, and profitability. If you're looking to elevate your manufacturing business to the next level, we're ready to partner with you on the journey to excellence.",



                        data:
                            [
                                {
                                    data1: "Supply Chain Resilience & Optimization",
                                    data2: "Helping manufacturers build adaptive, responsive supply chains that mitigate risks and ensure seamless operations.",
                                },
                                {
                                    data1: "Cost Efficiency & Lean Manufacturing",
                                    data2: "Identifying and eliminating inefficiencies in production processes to optimize resource utilization and reduce operational costs.",
                                },

                                {
                                    data1: "Digital Transformation & Smart Manufacturing",
                                    data2: "Guiding businesses in implementing AI, IoT, and automation to enhance productivity and decision-making capabilities.",
                                },

                                {
                                    data1: "Demand Forecasting & Inventory Management",
                                    data2: "Leveraging advanced analytics to ensure accurate demand planning, reducing stockouts and excess inventory.",
                                },





                            ],

                        data2: [

                            {
                                data1: "Workforce Upskilling & Training Programs",
                                data2: "Equipping employees with the necessary skills to handle advanced manufacturing technologies and process improvements.",
                            },

                            {
                                data1: "Regulatory Compliance & Sustainability Initiatives",
                                data2: "Assisting businesses in aligning with government regulations and implementing eco-friendly, cost-effective manufacturing solutions.",
                            },
                            {
                                data1: "Market Expansion & Competitive Positioning",
                                data2: "Developing strategic roadmaps to help manufacturers expand into new markets and stay ahead of industry trends.",
                            },
                            {
                                data1: "End-to-End Supply Chain Visibility & Transparency",
                                data2: "Integrating cloud-based solutions and blockchain to enhance real-time tracking and decision-making in supply chain management.",
                            },
                            {
                                data1: "Agile & Flexible Manufacturing Strategies",
                                data2: "Enabling manufacturers to swiftly adapt to changing market demands and maintain uninterrupted production.",
                            },
                            {
                                data1: "Risk Management & Business Continuity Planning",
                                data2: "Identifying potential disruptions and implementing contingency strategies to safeguard supply chain stability.",
                            },




                        ],





                        imgSrc: "What we do_.png",
                        altText: imgAltText[0],
                        calendarButton: true,
                        btnText: "Plan Your Consultation",



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

