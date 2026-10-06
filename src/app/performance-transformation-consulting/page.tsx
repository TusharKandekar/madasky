import { Metadata } from 'next';
import ConsultingNavbar from '@/components/ConsultingNavbar';
import CapabilitiesHeader from '@/components/CapabilitiesHeader';
import CapabilitiesContent2 from '@/components/CapabilitiesContent2';
import Footer from '@/components/Footer';
// import vid1 from "/assets/images/Financial Performance and Cash Flow Management Program6969.mp4";
import AboutVideo from '@/components/AboutVideo';
import HelpYou from '@/components/HelpYou';
import BaseUrl from '@/components/BaseUrl'
import type { PageMetaDataResponse } from "@/common/types";

import { getImageAltText, getWebBlogs, fetchMetaDataByPageName, getDataByPageName, filterByWebImage, getImageData, getTestimonialsByPageName, getEventByPageName } from "@/common/api";
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
const title = "Performance Transformation";
let PageMetadata: PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
    PageMetadata = await fetchMetaDataByPageName({ pageName: "Performance Transformation" });
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
                `${BaseUrl().mainurl}performance-transformation-consulting`
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
        blogData = await getDataByPageName(["Performance Transformation", "blogs"]);
        videoData = await getDataByPageName(["Performance Transformation", "videos"]);
        galleryData = await getDataByPageName(["Performance Transformation", "gallery"]);
        testimonialData = await getTestimonialsByPageName("Performance Transformation");
        eventData = await getEventByPageName("Performance Transformation");

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
                        heading1: "Performance Transformation",
                        paragraph1: "Manufacturing businesses operate in a highly competitive landscape, where cost pressures, operational inefficiencies, and financial constraints can significantly impact profitability and growth. Despite implementing various strategies, many manufacturers struggle with optimizing workflows, reducing waste, and improving financial outcomes. The disconnect between operational efficiency and financial performance often leads to missed opportunities, lower margins, and stagnant growth.",
                        // paragraph2: "Our Rapid Cash Generation Program is designed to unlock hidden cash, optimize operations, and accelerate cash flow without requiring additional investments. By streamlining processes, reducing inefficiencies, and enhancing financial strategies, we help businesses free up working capital, cut unnecessary costs, and boost profitability all while ensuring long-term financial stability and growth.",
                        // paragraph3: "This is not just about quick fixes, it's about creating a sustainable, cash-positive business that thrives in any market condition.",




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
                        heading1: "Key Challenges Faced by the Manufacturing Industry:",
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





                        imgSrc: `/Key Challenges.png`,
                        altText: `${imgAltText[0]}`,
                        calendarButton: true,
                        btnText: "Unlock Your Next Chapter",




                    }} border={"border-b"} />


                    {/* <CapabilitiesHeader2 details1={{
                        heading1: "The Impact of These Challenges",
                        paragraph1: "These challenges can lead to reduced competitiveness, increased operational inefficiencies, delayed production timelines, and diminished profit margins. For manufacturers aiming to thrive in this dynamic environment, embracing innovative solutions is not just an option it's a necessity.",
                        imgSrc: "/assets/images/398.png",


                    }} border={"border-b"} /> */}

                    <CapabilitiesContent2 details1={{
                        heading1: "Tailored Solutions by Our Consulting Firm",
                        // heading2: "At Madasky Consulting, we specialize in transforming manufacturing cultures by embedding agility, innovation, and performance-driven mindsets. Our approach ensures seamless cultural evolution, fostering alignment between leadership, employees, and business objectives.",
                        // paragraph1: "Our Tailored Solutions Include:",
                        // heading3: "At Madasky Consulting, we don't just offer advice we deliver measurable results. With deep industry expertise and a hands-on approach, we help manufacturing firms unlock cash flow, optimize efficiency, and drive profitability. Our tailored strategies, data-driven insights, and proven methodologies ensure that you see immediate financial impact and long-term business resilience.",
                        // heading4: "When you partner with us, you gain more than just solutions you gain a trusted advisor committed to your success. Let's turn your financial challenges into opportunities and position your business for sustainable growth. Ready to accelerate your cash flow? Let's talk.",


                        data:
                            [
                                {
                                    data1: "Operational Efficiency Diagnostics",
                                    data2: "A deep-dive analysis into existing workflows, bottlenecks, and inefficiencies to identify areas for improvement and cost optimization.",
                                },
                                {
                                    data1: "Lean Process Implementation",
                                    data2: "Deploying lean methodologies to streamline production, eliminate waste, and enhance productivity without increasing operational costs.",
                                },

                                {
                                    data1: "Data-Driven Cost Optimization",
                                    data2: "Leveraging real-time analytics and AI-driven insights to provide actionable cost-saving strategies across various production stages.",
                                },
                                {
                                    data1: "Strategic Cash Flow Management",
                                    data2: "Identifying key areas of cash leakage and improving working capital cycles to strengthen financial stability and operational resilience.",
                                },





                            ],

                        data2: [
                            {
                                data1: "Integrated Performance Dashboards",
                                data2: "Developing custom dashboards that align financial metrics with operational KPIs for real-time performance tracking and smarter decision-making.",
                            },

                            {
                                data1: "Supply Chain Risk Mitigation",
                                data2: "Implementing robust contingency plans, supplier diversification strategies, and predictive analytics to minimize disruptions.",
                            },
                            {
                                data1: "Technology & Automation Adoption",
                                data2: "Helping manufacturers integrate advanced automation, IoT, and AI-based solutions to boost efficiency, reduce downtime, and enhance profitability.",
                            },
                            {
                                data1: "Sustainable Cost Reduction Strategies",
                                data2: "Focusing on long-term, value-driven cost reduction techniques without compromising productivity, quality, or workforce efficiency.",
                            },


                        ],





                        imgSrc: `/Tailored Solutions.png`,
                        altText: `${imgAltText[1]}`,
                        calendarButton: true,
                        btnText: "Lock In Your Meeting",




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

