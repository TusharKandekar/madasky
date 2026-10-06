import { Metadata } from 'next';
import ConsultingNavbar from '@/components/ConsultingNavbar';
import CapabilitiesHeader from '@/components/CapabilitiesHeader';
import CapabilitiesContent2 from '@/components/CapabilitiesContent2';
// import vid1 from "/assets/images/Financial Performance and Cash Flow Management Program6969.mp4";
import AboutVideo from '@/components/AboutVideo';
import HelpYou from '@/components/HelpYou';
import Footer from '@/components/Footer';
import BaseUrl from '@/components/BaseUrl'
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
import type { PageMetaDataResponse } from "@/common/types";

import { getImageAltText, getWebBlogs, fetchMetaDataByPageName, getDataByPageName, filterByWebImage, getImageData, getTestimonialsByPageName, getEventByPageName } from "@/common/api";
const title = "Rapid Cash Generation";
let PageMetadata: PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
    PageMetadata = await fetchMetaDataByPageName({ pageName: "Rapid Cash Generation" });
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
                `${BaseUrl().mainurl}rapid-cash-generation`
        },

    };
}


// import SlidingBlogs from '@/components/SlidingBlogs.jsx';
// import VideoPlayer from '@/components/VideoPlayer.jsx';
// import Imagetemplate from '@/components/Imagesliders.jsx';
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
        blogData = await getDataByPageName(["Rapid Cash Generation", "blogs"]);
        videoData = await getDataByPageName(["Rapid Cash Generation", "videos"]);
        galleryData = await getDataByPageName(["Rapid Cash Generation", "gallery"]);
        testimonialData = await getTestimonialsByPageName("Rapid Cash Generation");
        eventData = await getEventByPageName("Rapid Cash Generation");

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
                url='/financial-strategy-consulting'
                title={'Financial Strategy'}
                navItems={[
                    { title: 'Rapid Cash Generation', link: '/rapid-cash-generation-consulting' },
                    { title: 'Performance Transformation', link: '/performance-transformation-consulting' },
                    { title: 'Cost Transformation', link: '/cost-transformation-consulting' },
                    { title: 'Working Capital Optimisation', link: '/working-capital-optimisation-consulting' },



                ]}
            />
            <AboutVideo vid1={'/assets/videos/Financial Performance and Cash Flow Management Program6969.mp4'} title={title} des={"Creating and accelerating critical advantages through cutting-edge strategy and operations"} h1={PageMetadata?.data?.h1tag} />

            <div className='w-[80vw] bg-white mx-auto'>

                <div className='w-full my-20'>

                    <CapabilitiesHeader details1={{
                        heading1: "Rapid Cash Generation",
                        paragraph1: "Cash flow is the backbone of any manufacturing business, yet many struggle with liquidity due to excess inventory, delayed receivables, and rising costs. Without steady cash inflow, growth stalls, risks increase, and financial agility weakens.",
                        paragraph2: "Our Rapid Cash Generation Program is designed to unlock hidden cash, optimize operations, and accelerate cash flow without requiring additional investments. By streamlining processes, reducing inefficiencies, and enhancing financial strategies, we help businesses free up working capital, cut unnecessary costs, and boost profitability all while ensuring long-term financial stability and growth.",
                        paragraph3: "This is not just about quick fixes, it's about creating a sustainable, cash-positive business that thrives in any market condition.",




                    }} border={"border-b"} />




                    <CapabilitiesContent2 details1={{
                        heading1: "Key Challenges Faced by Manufacturers",
                        // heading2: "Manufacturers often encounter hurdles that impede efficiency and impact overall business performance. Below are some of the most common challenges our clients face:",


                        data:
                            [
                                {
                                    data1: "Excess Inventory Holding Costs",
                                    data2: "Capital remains locked in unsold stock, increasing warehousing and financial strain.",
                                },
                                {
                                    data1: "Delayed Receivables & Long Payment Cycles",
                                    data2: "Cash inflow is slowed by overdue invoices and extended credit terms.",
                                },

                                {
                                    data1: "Inefficient Production & High Wastage",
                                    data2: "Poor planning leads to material loss, excess costs, and reduced profitability.",
                                },
                                {
                                    data1: "Underutilized Assets & Machinery Downtime",
                                    data2: "Idle equipment and inefficient asset use limit revenue potential.",
                                },
                                {
                                    data1: "Expensive Procurement & Supplier Terms",
                                    data2: "High raw material costs and weak supplier negotiations drain cash reserves.",
                                },
                                {
                                    data1: "High Fixed Costs & Overheads",
                                    data2: "Rising labor, energy, and operational expenses put pressure on working capital.",
                                },


                            ],

                        data2: [


                            {
                                data1: "Slow Order-to-Cash Process",
                                data2: " Delays in order fulfillment and invoicing slow down revenue generation.",
                            },



                        ],





                        imgSrc: `/Key Challenges.png`,
                        altText: `${imgAltText[0]}`,
                        calendarButton: true,
                        btnText: "Book Your Session",




                    }} border={"border-b"} />


                    {/* <CapabilitiesHeader2 details1={{
                        heading1: "The Impact of These Challenges",
                        paragraph1: "These challenges can lead to reduced competitiveness, increased operational inefficiencies, delayed production timelines, and diminished profit margins. For manufacturers aiming to thrive in this dynamic environment, embracing innovative solutions is not just an option it's a necessity.",
                        imgSrc: "/assets/images/398.png",


                    }} border={"border-b"} /> */}

                    <CapabilitiesContent2 details1={{
                        heading1: "Our Approach to Rapid Cash Generation",
                        // heading2: "At Madasky Consulting, we specialize in transforming manufacturing cultures by embedding agility, innovation, and performance-driven mindsets. Our approach ensures seamless cultural evolution, fostering alignment between leadership, employees, and business objectives.",
                        // paragraph1: "Our Tailored Solutions Include:",
                        heading3: "At Madasky Consulting, we don't just offer advice we deliver measurable results. With deep industry expertise and a hands-on approach, we help manufacturing firms unlock cash flow, optimize efficiency, and drive profitability. Our tailored strategies, data-driven insights, and proven methodologies ensure that you see immediate financial impact and long-term business resilience.",
                        heading4: "When you partner with us, you gain more than just solutions you gain a trusted advisor committed to your success. Let's turn your financial challenges into opportunities and position your business for sustainable growth. Ready to accelerate your cash flow? Let's talk.",


                        data:
                            [
                                {
                                    data1: "Optimizing Inventory & Demand Forecasting",
                                    data2: "Aligning stock levels with market needs to reduce excess and unlock capital.",
                                },
                                {
                                    data1: "Accelerating Receivables & Payment Cycles",
                                    data2: "Structuring invoicing and collections for faster cash recovery.",
                                },

                                {
                                    data1: "Enhancing Production Efficiency",
                                    data2: "Streamlining operations to minimize waste and improve output.",
                                },
                                {
                                    data1: "Maximizing Asset Utilization ",
                                    data2: "Ensuring equipment and resources generate the highest possible returns.",
                                },
                                {
                                    data1: "Strengthening Supplier & Cost Management",
                                    data2: "Reducing procurement costs and securing better financial terms.",
                                },

                                {
                                    data1: "Reducing Overheads & Fixed Costs",
                                    data2: "Identifying inefficiencies to lower expenses without compromising output.",
                                },




                            ],

                        data2: [

                            {
                                data1: "Improving Order-to-Cash Workflow",
                                data2: "Speeding up sales, fulfillment, and revenue realization.",
                            },
                            {
                                data1: "Quick Wins for Immediate Cash Flow",
                                data2: "Implementing rapid-impact strategies to boost liquidity.",
                            },


                        ],





                        imgSrc: `/Our Approach.png`,
                        altText: `${imgAltText[1]}`,
                        calendarButton: true,
                        btnText: "Plan Your Consultation",




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

