import { Metadata } from 'next';
import ConsultingNavbar from '@/components/ConsultingNavbar';
import CapabilitiesHeader from '@/components/CapabilitiesHeader';
// import CapabilitiesHeader2 from '../components/CapabilitiesHeader2';
import CapabilitiesContent1 from '@/components/CapabilitiesContent1';
import CapabilitiesContent2 from '@/components/CapabilitiesContent2';
// import CapabilitiesContent3 from '../components/CapabilitiesContent3';
// import CapabilitiesContent4 from '../components/CapabilitiesContent4';
import Footer from '@/components/Footer';
// import vid1 from "/assets/images/Financial Performance and Cash Flow Management Program6969.mp4";
import AboutVideo from '@/components/AboutVideo';
import HelpYou from '@/components/HelpYou';
import BaseUrl from '@/components/BaseUrl'
import type { PageMetaDataResponse } from "@/common/types";

import { getImageAltText, fetchMetaDataByPageName, getImageData, getDataByPageName, getTestimonialsByPageName, getEventByPageName } from "@/common/api";
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
const title = "Cost Transformation";
let PageMetadata: PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
    PageMetadata = await fetchMetaDataByPageName({ pageName: "Cost Transformation" });
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
                `${BaseUrl().mainurl}cost-transformation-consulting`
        },

    };
}


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
        blogData = await getDataByPageName(["Cost Transformation", "blogs"]);
        videoData = await getDataByPageName(["Cost Transformation", "videos"]);
        galleryData = await getDataByPageName(["Cost Transformation", "gallery"]);
        testimonialData = await getTestimonialsByPageName("Cost Transformation");
        eventData = await getEventByPageName("Cost Transformation");

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
                        heading1: "Cost Transformation",
                        paragraph1: "Manufacturers today face increasing cost pressures due to rising raw material prices, supply chain disruptions, labor costs, and operational inefficiencies. Challenges such as inefficient procurement, high production waste, escalating overhead expenses, and lack of cost visibility directly impact profitability. Addressing these issues requires a structured, data-driven approach to optimize costs without compromising quality or efficiency.",
                        // paragraph2: "Our Rapid Cash Generation Program is designed to unlock hidden cash, optimize operations, and accelerate cash flow without requiring additional investments. By streamlining processes, reducing inefficiencies, and enhancing financial strategies, we help businesses free up working capital, cut unnecessary costs, and boost profitability all while ensuring long-term financial stability and growth.",
                        // paragraph3: "This is not just about quick fixes, it's about creating a sustainable, cash-positive business that thrives in any market condition.",




                    }} border={"border-b"} />

                    <CapabilitiesContent1 details1={{
                        heading1: "Key Challenges Faced by the Industry:",
                        // paragraph1: "If these challenges resonate with your experience, our Delivery Performance Program is designed to transform these obstacles into opportunities for growth and excellence.",


                        data:
                            [
                                {
                                    data1: "Rising Raw Material Costs",
                                    data2: "Market volatility and supply chain constraints affecting margins.",
                                },
                                {
                                    data1: "Inefficient Procurement",
                                    data2: "Poor negotiations, fragmented purchasing, and high supplier costs.",
                                },
                                {
                                    data1: "High Manufacturing Expenses",
                                    data2: "Production waste, machine downtimes, and process inefficiencies.",
                                },
                                {
                                    data1: "Escalating Overhead Costs",
                                    data2: "Unoptimized resources, outdated systems, and excessive expenses.",
                                },
                                {
                                    data1: "Lack of Cost Visibility",
                                    data2: "Inadequate data-driven insights leading to uncontrolled spending.",
                                },


                            ],

                        imgSrc: `/Key Challenges.png`,
                        altText: `${imgAltText[0]}`,
                        calendarButton: true,
                        btnText: "Plan Your Consultation",




                    }} border={"border-b"} />





                    {/* <CapabilitiesContent2 details1={{
                        heading1: "Key Challenges Faced by the Industry:",
                        // heading2: "Manufacturers often encounter hurdles that impede efficiency and impact overall business performance. Below are some of the most common challenges our clients face:",


                        data:
                            [
                                {
                                    data1: "Rising Operational Costs",
                                    data2: "Increasing raw material prices, energy costs, and labor expenses squeeze profit margins.",
                                },
                                {
                                    data1: "Process Inefficiencies",
                                    data2: "Outdated processes, unoptimized workflows, and bottlenecks slow down production, leading to high cycle times and resource wastage.",
                                },

                                {
                                    data1: "Working Capital Constraints",
                                    data2: "Poor cash flow management and excessive inventory holding reduce financial flexibility.",
                                },
                                {
                                    data1: "Limited Cost Visibility",
                                    data2: "A lack of real-time data and analytics leads to poor decision-making regarding cost control and process improvements.",
                                },
                                {
                                    data1: "Inconsistent Performance Metrics",
                                    data2: "Many organizations fail to align operational KPIs with financial performance, leading to misdirected efforts.",
                                },



                            ],

                        data2: [

                            {
                                data1: "Supply Chain Disruptions",
                                data2: "Unforeseen disruptions in the supply chain cause production delays, affecting both costs and delivery commitments.",
                            },
                            {
                                data1: "Technology & Digitalization Gaps",
                                data2: "Many manufacturers struggle to leverage automation and digital tools effectively, missing out on efficiency gains.",
                            },



                        ],





                        imgSrc: "/assets/images/398.png"



                    }} border={"border-b"} /> */}


                    {/* <CapabilitiesHeader2 details1={{
                        heading1: "The Impact of These Challenges",
                        paragraph1: "These challenges can lead to reduced competitiveness, increased operational inefficiencies, delayed production timelines, and diminished profit margins. For manufacturers aiming to thrive in this dynamic environment, embracing innovative solutions is not just an option it's a necessity.",
                        imgSrc: "/assets/images/398.png",


                    }} border={"border-b"} /> */}

                    <CapabilitiesContent2 details1={{
                        heading1: "Tailored Solutions for Cost Optimization",
                        // heading2: "At Madasky Consulting, we specialize in transforming manufacturing cultures by embedding agility, innovation, and performance-driven mindsets. Our approach ensures seamless cultural evolution, fostering alignment between leadership, employees, and business objectives.",
                        // paragraph1: "Our Tailored Solutions Include:",
                        // heading3: "At Madasky Consulting, we don't just offer advice we deliver measurable results. With deep industry expertise and a hands-on approach, we help manufacturing firms unlock cash flow, optimize efficiency, and drive profitability. Our tailored strategies, data-driven insights, and proven methodologies ensure that you see immediate financial impact and long-term business resilience.",
                        // heading4: "When you partner with us, you gain more than just solutions you gain a trusted advisor committed to your success. Let's turn your financial challenges into opportunities and position your business for sustainable growth. Ready to accelerate your cash flow? Let's talk.",


                        data:
                            [
                                {
                                    data1: "Strategic Sourcing & Supplier Optimization",
                                    data2: "Improving supplier terms, sourcing strategies, and cost consolidation.",
                                },
                                {
                                    data1: "Lean Manufacturing Implementation ",
                                    data2: "Streamlining processes, reducing waste, and enhancing efficiency.",
                                },

                                {
                                    data1: "Overhead Cost Rationalization",
                                    data2: "Identifying and eliminating unnecessary expenses.",
                                },
                                {
                                    data1: "Process Automation & Digitalization",
                                    data2: "Leveraging technology to reduce operational costs.",
                                },
                                {
                                    data1: "Working Capital Optimization",
                                    data2: "Enhancing cash flow and inventory management.",
                                },

                                {
                                    data1: "Real-Time Cost Monitoring & Analytics",
                                    data2: "Implementing systems for continuous cost tracking.",
                                },




                            ],

                        data2: [

                            {
                                data1: "Make vs. Buy Cost Analysis",
                                data2: "Evaluating in-house production vs. outsourcing for cost efficiency.",
                            },

                            {
                                data1: "Energy & Utility Cost Reduction",
                                data2: "Optimizing consumption to lower utility expenses.",
                            },
                            {
                                data1: "Operational Benchmarking & Performance Metrics",
                                data2: "Aligning with industry best practices for sustained improvements.",
                            },


                        ],





                        imgSrc: `/Tailored Solutions.png`,
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

