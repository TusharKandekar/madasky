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
import type { PageMetaDataResponse } from "@/common/types";

import { getImageAltText, getWebBlogs, fetchMetaDataByPageName, getDataByPageName, filterByWebImage, getImageData, getTestimonialsByPageName, getEventByPageName } from "@/common/api";
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
const title = "Culture Transformation - Executive Coaching";
let PageMetadata: PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
    PageMetadata = await fetchMetaDataByPageName({ pageName: "Culture Transformation - Executive Coaching" });
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
                `${BaseUrl().mainurl}culture-transformation`
        },

    };
}

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
        blogData = await getDataByPageName(["Culture Transformation - Executive Coaching", "blogs"]);
        videoData = await getDataByPageName(["Culture Transformation - Executive Coaching", "videos"]);
        galleryData = await getDataByPageName(["Culture Transformation - Executive Coaching", "gallery"]);
        testimonialData = await getTestimonialsByPageName("Culture Transformation - Executive Coaching");
        eventData = await getEventByPageName("Culture Transformation - Executive Coaching");

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
                        heading1: "Culture Transformation",
                        paragraph1: "In today's fast-evolving manufacturing landscape, operational efficiency alone is not enough—success depends on a strong, adaptable, and high-performance culture. Many companies struggle with resistance to change, disengaged employees, siloed operations, and outdated leadership approaches, leading to inefficiencies and stagnation. Without a culture that fosters innovation, accountability, and collaboration, businesses risk losing their competitive edge. Transforming workplace culture isn't just about policies it's about shifting mindsets, empowering employees, and creating an environment where growth and performance thrive.",




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
                        heading1: "Key Challenges Faced by the Industry",
                        // heading2: "Manufacturers often encounter hurdles that impede efficiency and impact overall business performance. Below are some of the most common challenges our clients face:",


                        data:
                            [
                                {
                                    data1: "Resistance to Change",
                                    data2: "A deeply ingrained traditional mindset slows the adoption of new technologies, automation, and process improvements.",
                                },
                                {
                                    data1: "Lack of Employee Engagement",
                                    data2: "Disengaged employees lead to decreased efficiency, higher absenteeism, and lower retention rates.",
                                },

                                {
                                    data1: "Siloed Work Environments",
                                    data2: "Poor interdepartmental collaboration hinders productivity and disrupts the flow of critical operations.",
                                },
                                {
                                    data1: "Weak Leadership and Accountability",
                                    data2: "Ineffective leadership leads to unclear expectations, poor decision-making, and a lack of ownership among employees.",
                                },
                                {
                                    data1: "Lack of Innovation and Continuous Improvement",
                                    data2: "A stagnant culture fails to encourage proactive problem-solving and prevents businesses from staying ahead of market demands.",
                                },






                            ],

                        data2: [

                            {
                                data1: "Inconsistent Performance Standards",
                                data2: "A lack of clear cultural values and expectations leads to inconsistent work ethics, quality issues, and operational inefficiencies.",
                            },
                            {
                                data1: "High Turnover and Talent Retention Issues",
                                data2: "Without a strong culture, companies struggle to attract and retain skilled talent, increasing recruitment costs and operational disruptions.",
                            },



                        ],





                        imgSrc: `/Key Challenges.png`,
                        altText: `${imgAltText[0]}`,
                        calendarButton: true,
                        btnText: "Schedule Expert Call",




                    }} border={"border-b"} />


                    {/* <CapabilitiesHeader2 details1={{
                        heading1: "The Impact of These Challenges",
                        paragraph1: "These challenges can lead to reduced competitiveness, increased operational inefficiencies, delayed production timelines, and diminished profit margins. For manufacturers aiming to thrive in this dynamic environment, embracing innovative solutions is not just an option it's a necessity.",
                        imgSrc: "/assets/images/398.png",


                    }} border={"border-b"} /> */}

                    <CapabilitiesContent2 details1={{
                        heading1: "How We Help at Madasky Consulting",
                        heading2: "At Madasky Consulting, we specialize in transforming manufacturing cultures by embedding agility, innovation, and performance-driven mindsets. Our approach ensures seamless cultural evolution, fostering alignment between leadership, employees, and business objectives.",
                        // paragraph1: "Our Tailored Solutions Include:",
                        // heading3: "This is just a glimpse of how we can partner with your business to achieve transformative growth. Let's explore how technology can reshape your manufacturing operations and make your business future-ready.",


                        data:
                            [
                                {
                                    data1: "Cultural Diagnosis & Strategy Alignment",
                                    data2: "We assess the current cultural landscape and align it with strategic business goals to drive sustainable transformation.",
                                },
                                {
                                    data1: "Leadership Mindset Shift & Capability Building",
                                    data2: "Empower leaders with modern management practices, fostering a culture of accountability, innovation, and high performance.",
                                },

                                {
                                    data1: "Employee Engagement & Motivation Strategies",
                                    data2: "Develop tailored engagement programs to boost morale, encourage participation, and enhance workforce commitment.",
                                },
                                {
                                    data1: "Breaking Silos & Enhancing Collaboration",
                                    data2: "Implement cross-functional initiatives and frameworks that drive seamless collaboration and knowledge sharing.",
                                },




                            ],

                        data2: [

                            {
                                data1: "Embedding Continuous Improvement Practices",
                                data2: "Introduce lean methodologies and problem-solving techniques to instill a culture of efficiency and ongoing development.",
                            },
                            {
                                data1: "Defining Clear Performance Expectations & Accountability",
                                data2: "Establish cultural values and performance standards that drive consistency and operational excellence.",
                            },
                            {
                                data1: "Talent Retention & Growth-Oriented Work Environment",
                                data2: "Create a people-centric culture that attracts top talent and fosters long-term employee growth and loyalty.",
                            },
                            {
                                data1: "Change Management & Adoption Frameworks",
                                data2: "Guide teams through cultural transitions with structured programs that minimize resistance and maximize adoption.",
                            },



                        ],





                        imgSrc: `/What we do_.png`,
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

