import { Metadata } from 'next';
import ConsultingNavbar from '@/components/ConsultingNavbar';
import CapabilitiesHeader from '@/components/CapabilitiesHeader';
import CapabilitiesHeader2 from '@/components/CapabilitiesHeader2';
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
const title = "Leverage technology for Innovation and Efficiency";
let PageMetadata: PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
    PageMetadata = await fetchMetaDataByPageName({ pageName: "Leverage Technology For Innovation & Efficiency" });
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
                `${BaseUrl().mainurl}leverage-technology-for-innovation-and-efficiency`
        },

    };
}

export default async function GrowthMarketingAndSales() {

    const arr = ["Key Challenges.png", "Impact of a New Age Marketing Approach.png", "Tailored Solutions.png"];


    let images;
    let blogData;
    let videoData;
    let galleryData;
    let testimonialData;
    let eventData;
    let serverError = false;

    try {
        images = await getImageAltText(arr);
        blogData = await getDataByPageName(["Leverage Technology For Innovation & Efficiency", "blogs"]);
        videoData = await getDataByPageName(["Leverage Technology For Innovation & Efficiency", "videos"]);
        galleryData = await getDataByPageName(["Leverage Technology For Innovation & Efficiency", "gallery"]);
        testimonialData = await getTestimonialsByPageName("Leverage Technology For Innovation & Efficiency");
        eventData = await getEventByPageName("Leverage Technology For Innovation & Efficiency");

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
                        heading1: "Leverage Technology For Innovation & Efficiency",
                        paragraph1: "In today's fast-evolving market landscape, manufacturing industries are at a critical crossroads. With increasing global competition, demand for customized products, and the necessity to achieve operational excellence, the stakes have never been higher. While technology offers immense opportunities to drive innovation and efficiency, many manufacturing businesses struggle to integrate and leverage it effectively.",
                        // paragraph2: "At Madasky Consulting, we understand the intricacies of these challenges. Our Technical Consulting services are tailored to help manufacturers identify and overcome critical pain points, empowering them to drive operational excellence and achieve sustainable growth.",



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
                                    data1: "Rising Operational Costs",
                                    data2: "Escalating costs of raw materials, energy, and labor pressure manufacturers to find more efficient production methods.",
                                },
                                {
                                    data1: "Demand for Customization",
                                    data2: "Consumers expect highly personalized products at competitive prices, pushing manufacturers to adopt flexible processes.",
                                },

                                {
                                    data1: "Supply Chain Disruptions",
                                    data2: "From global pandemics to geopolitical tensions, the supply chain faces frequent bottlenecks, impacting production timelines.",
                                },
                                {
                                    data1: "Lack of Real-Time Data Insights",
                                    data2: "Traditional manufacturing setups often lack the infrastructure to collect and utilize real-time data for decision-making.",
                                },
                                {
                                    data1: "Aging Workforce and Skills Gap",
                                    data2: "A shrinking pool of skilled labor in manufacturing challenges businesses to maintain productivity while adopting new technologies.",
                                },




                            ],

                        data2: [
                            {
                                data1: "Regulatory and Sustainability Pressures",
                                data2: "Adhering to stringent environmental and industry regulations requires adopting greener, more efficient technologies.",
                            },
                            {
                                data1: "Inefficient Legacy Systems",
                                data2: "Outdated machinery and IT systems limit operational efficiency and slow down innovation.",
                            },



                        ],





                        imgSrc: `/Key Challenges.png`,
                        altText: imgAltText[0],
                        calendarButton: true,
                        btnText: "Book Your Session",



                    }} border={"border-b"} />


                    <CapabilitiesHeader2 details1={{
                        heading1: "The Impact of These Challenges",
                        paragraph1: "These challenges can lead to reduced competitiveness, increased operational inefficiencies, delayed production timelines, and diminished profit margins. For manufacturers aiming to thrive in this dynamic environment, embracing innovative solutions is not just an option it's a necessity.",
                        imgSrc: `/Impact of a New Age Marketing Approach.png`,


                    }} border={"border-b"} />

                    <CapabilitiesContent2 details1={{
                        heading1: "Tailored Solutions by Our Consulting Firm",
                        heading2: "At our consulting firm, we specialize in empowering manufacturing businesses to leverage cutting-edge technology, enabling them to transform challenges into opportunities for innovation and efficiency. Here's how we can help:",
                        heading3: "This is just a glimpse of how we can partner with your business to achieve transformative growth. Let's explore how technology can reshape your manufacturing operations and make your business future-ready.",


                        data:
                            [
                                {
                                    data1: "Digital Transformation Strategy",
                                    data2: "We design tailored strategies to digitize operations, enabling seamless integration across production lines and supply chains.",
                                },
                                {
                                    data1: "Process Automation Implementation",
                                    data2: "Introduce advanced automation solutions, such as robotics and IoT, to optimize workflows and minimize manual intervention.",
                                },

                                {
                                    data1: "Real-Time Data Analytics",
                                    data2: "Develop systems to collect, analyze, and act on real-time data, improving decision-making and operational transparency.",
                                },
                                {
                                    data1: "Smart Manufacturing Integration",
                                    data2: "Implement Industry 4.0 solutions, such as digital twins and smart factories, to enhance productivity and reduce downtime.",
                                },
                                {
                                    data1: "Supply Chain Optimization",
                                    data2: "Redesign supply chain processes with predictive analytics and machine learning to mitigate disruptions and improve forecasting accuracy.",
                                },



                            ],

                        data2: [

                            {
                                data1: "Sustainability Solutions",
                                data2: "Adopt energy-efficient technologies and sustainable practices that align with global regulations and reduce operational costs.",
                            },
                            {
                                data1: "Legacy System Modernization",
                                data2: "Upgrade or replace outdated systems with scalable, cloud-based solutions to improve efficiency and scalability.",
                            },
                            {
                                data1: "Skill Development Programs",
                                data2: "Provide targeted training programs to upskill your workforce and bridge the gap between traditional manufacturing and technology-driven operations.",
                            },
                            {
                                data1: "Custom Technology Integration",
                                data2: "Tailor innovative tools, such as blockchain for traceability or AR/VR for training, to meet your unique business needs.",
                            },
                            {
                                data1: "Comprehensive Performance Monitoring",
                                data2: "Design KPIs and dashboards to continuously monitor, evaluate, and improve manufacturing performance.",
                            },


                        ],





                        imgSrc: `/Tailored Solutions.png`,
                        altText: imgAltText[2],
                        calendarButton: true,
                        btnText: "Reserve Your Time",



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

