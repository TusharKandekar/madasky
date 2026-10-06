
import { Metadata } from "next";

import ConsultingNavbar3 from '@/components/ConsultingNavbar3';
import Image from 'next/image';
// import { Element } from "react-scroll";
import { Link } from 'react-scroll';
import Footer from '@/components/Footer';
import { FaArrowRight } from "react-icons/fa";
import AboutVideo from '@/components/AboutVideo';
import HelpYou from '@/components/HelpYou';
import BaseUrl from '@/components/BaseUrl'
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
import { getImageAltText, fetchMetaDataByPageName, getWebBlogs, getDataByPageName, filterByWebImage, getImageData, getTestimonialsByPageName, getEventByPageName } from "@/common/api";
import type { PageMetaDataResponse } from "@/common/types";
import Button from "@/components/Button";


const title = "Digital Transformation";
let PageMetadata: PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
    PageMetadata = await fetchMetaDataByPageName({ pageName: "Digital Transformation" });
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
                `${BaseUrl().mainurl}digital-transformation`
        },

    };
}

export default async function GrowthMarketingAndSales() {
    const arr = ["Key Challenges.png", "Madasky approach and solutions.png", "Why Choose Madasky Consulting.png", "challanges faced by non digitalise company.png", "OurApproach69.png", "Transform Your Production Floor with Digitalization1.png"];
    // const arr = ["Key Challenges.png", "Madasky approach and solutions.png", "Why Choose Madasky Consulting.png", "challanges faced by non digitalise company.png", "OurApproach69.png", "Transform Your Production Floor with Digitalization1.png"];


    let images;
    let blogData;
    let videoData;
    let galleryData;
    let testimonialData;
    let eventData;
    let serverError = false;

    try {
        images = await getImageAltText(arr);
        blogData = await getDataByPageName(["Digital Transformation", "blogs"]);
        videoData = await getDataByPageName(["Digital Transformation", "videos"]);
        galleryData = await getDataByPageName(["Digital Transformation", "gallery"]);
        testimonialData = await getTestimonialsByPageName("Digital Transformation");
        eventData = await getEventByPageName("Digital Transformation");

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


            <ConsultingNavbar3
                url={'/digital-transformation'}
                title={'Digital Transformation'}
                navItems={[
                    // { title: '', link: '/' },
                    { title: 'Generic Digital Transformation', link: 'target-section1' },
                    { title: 'Industry 4.0 - Realtime Production', link: 'target-section2' },



                ]}
            />
            <AboutVideo vid1={"/assets/videos/Digital Tansformation.mp4"} title={title} des={"Creating and accelerating critical advantages through cutting-edge strategy and operations"} h1={PageMetadata?.data?.h1tag} />




            <div className='w-[80vw] bg-white mx-auto max-md:w-full'>
                <div className='w-full my-20'>

                    {/* <Element name="genericDigitalTransformation" > */}
                    <div id='target-section1' className={`flex flex-col max-md:px-2 w-full gap-8 pb-8 mt-8 border-b border-gray-300`}>
                        <div className='text-4xl font-bold text-black max-md:text-center max-md:text-3xl'>
                            <h2>Generic Digital Transformation</h2>
                        </div>
                        {/* style={{ fontFamily: "Helvetica, Arial, sans-serif" }} */}
                        <div className='text-gray-700 text-[20px] font-extralight flex flex-col gap-4'  >

                            <p className='text-justify text-gray-700 max-md:text-justify max-md:px-2'>Digital Transformation in Manufacturing: Challenges & Madasky Consulting's Approach</p>

                            {/* Key Challenges in Digital Transformation for the Manufacturing Industry */}
                            <div className={`flex w-full pb-8 mt-4`}>

                                <div className='flex flex-col w-full gap-2'>

                                    <div className='flex gap-2 font-bold text-2xl text-gray-600 leading-[1] max-md:px-2 max-md:text-xl'>
                                        <FaArrowRight className='text-[20px] mt-[2px]' />
                                        <h2>Key Challenges in Digital Transformation for the Manufacturing Industry</h2>

                                    </div>

                                    <div className='hidden w-full max-md:block'>
                                        {/* <img
                                                src="/assets/images/Key Challenges.png"


                                                className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:mx-auto"
                                            /> */}


                                        <div className='relative h-[16rem] w-[80%] mx-auto'>

                                            <Image fill src={`${BaseUrl().imgurl}/Key Challenges.png`} alt="" className='object-fill rounded-xl' />Image

                                        </div>
                                    </div>
                                    {/* style={{ fontFamily: "Helvetica, Arial, sans-serif" }}  */}
                                    <div className='text-gray-500 text-[20px] font-extralight text-justify max-md:text-justify flex flex-col gap-4'  >

                                        <p className='pl-12 text-xl font-normal text-gray-600 max-md:px-2 max-md:text-justify'>The manufacturing sector is undergoing a paradigm shift with digital transformation, but the journey is fraught with challenges. Some of the major hurdles include:</p>

                                        <ul className='flex flex-col pl-16 list-disc max-md:px-4'>


                                            <div className='grid grid-cols-2 max-md:grid-cols-1'>

                                                <div>
                                                    <ul className='list-disc'>

                                                        <li>
                                                            <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Legacy Systems & Integration Issues: </span>Outdated infrastructure that lacks interoperability with modern digital tools.</p>
                                                        </li>

                                                        <li>
                                                            <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>High Implementation Costs: </span>The initial investment in technology, software, and infrastructure can be substantial.</p>
                                                        </li>

                                                        <li>
                                                            <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Workforce Resistance & Skills Gap: </span>Employees often resist change due to a lack of digital skills and fear of automation replacing jobs.</p>
                                                        </li>

                                                        <li>
                                                            <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Cybersecurity & Data Privacy Concerns: </span>Increased connectivity exposes businesses to cyber threats and data breaches.</p>
                                                        </li>

                                                        <li>
                                                            <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Data Management & Utilization: </span>Manufacturing companies generate vast amounts of data but struggle to derive actionable insights.</p>
                                                        </li>

                                                        <li>
                                                            <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Operational Downtime Risks: </span> Transitioning to digital solutions can temporarily disrupt production, impacting efficiency.</p>
                                                        </li>


                                                    </ul>
                                                </div>


                                                <div className='flex items-center justify-center w-full max-md:hidden'>
                                                    {/* <img
                                                        src="/assets/images/Key Challenges.png"


                                                        className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:"
                                                    /> */}

                                                    <div className='relative h-[18rem] w-[80%]'>

                                                        <Image fill src={`${BaseUrl().imgurl}/Key Challenges.png`} alt="" className='object-fill rounded-xl' />Image

                                                    </div>
                                                </div>

                                            </div>




                                            <li className=''>
                                                <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Scalability & Flexibility: </span>Digital transformation should be scalable to accommodate growth without overhauling the entire system.</p>
                                            </li>

                                            <li className=''>
                                                <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Customer Experience & Market Demands: </span>Meeting evolving customer expectations with personalized and data-driven solutions.</p>
                                            </li>




                                        </ul>




                                    </div>

                                </div>

                            </div>


                            {/* Madasky Consulting's Approach & Solutions  */}
                            <div className={`flex w-full pb-8 mt-4`}>

                                <div className='flex flex-col w-full gap-2'>

                                    <div className='flex gap-2 font-bold text-2xl text-gray-600 leading-[1] max-md:px-2 max-md:text-xl'>
                                        <FaArrowRight className='text-[20px] max-md:text-[18px] max-md:mt-[4px] mt-[2px]' />
                                        <h2>Madasky Consulting's Approach & Solutions</h2>

                                    </div>

                                    <div className='hidden w-full rounded-lg max-md:block'>
                                        {/* <img
                                            src="/assets/images/Madasky approach and solutions.png"


                                            className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:mx-auto"
                                        /> */}
                                        <div className='relative h-[16rem] w-[80%] mx-auto'>

                                            <Image fill src={`${BaseUrl().imgurl}/Madasky approach and solutions.png`} alt={`${imgAltText[1]}`} className='object-fill rounded-xl' />Image

                                        </div>
                                    </div>
                                    {/* style={{ fontFamily: "Helvetica, Arial, sans-serif" }}  */}
                                    <div className='text-gray-500 text-[20px] font-extralight text-justify max-md:text-justify flex flex-col gap-4'  >

                                        <p className='pl-12 text-xl font-normal text-gray-600 max-md:px-2 max-md:text-justify'>At Madasky Consulting, we provide a structured and scalable digital transformation framework that enables manufacturers to overcome these challenges and stay ahead in a competitive landscape.</p>

                                        <ul className='flex flex-col pl-16 list-disc max-md:px-4'>


                                            <div className='grid grid-cols-2 max-md:grid-cols-1'>

                                                <div>
                                                    <ul className='list-disc'>


                                                        <li>
                                                            <p className='font-semibold text-gray-600 text-md'>Strategy & Advisory</p>

                                                            <ul className='text-[18px] pl-5'>
                                                                <li>
                                                                    <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Digital Strategy Development: </span>We align business goals with digital transformation initiatives to create a clear roadmap.</p>
                                                                </li>

                                                                <li>
                                                                    <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Change Management & Digital Adoption: </span>Our expertise ensures a smooth transition to new digital processes with minimal disruption.</p>
                                                                </li>
                                                            </ul>

                                                        </li>

                                                        <li>
                                                            <p className='font-semibold text-gray-600 text-md'>Data & Analytics</p>

                                                            <ul className='text-[18px] pl-5'>
                                                                <li>
                                                                    <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Big Data & Advanced Analytics: </span> We leverage AI and ML to derive actionable insights from data, improving decision-making.</p>
                                                                </li>

                                                                <li>
                                                                    <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Business Intelligence (BI) & Visualization: </span>Utilizing Power BI, Tableau, and Looker to provide real-time business insights.</p>
                                                                </li>
                                                            </ul>

                                                        </li>


                                                        <li>
                                                            <p className='font-semibold text-gray-600 text-md'>AI & Automation</p>

                                                            <ul className='text-[18px] pl-5'>
                                                                <li>
                                                                    <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Artificial Intelligence & Machine Learning (AI/ML): </span>Automating complex decision-making processes to enhance efficiency.</p>
                                                                </li>

                                                                <li>
                                                                    <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Robotic Process Automation (RPA): </span>Implementing bots to streamline repetitive and manual tasks.</p>
                                                                </li>

                                                                <li>
                                                                    <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Intelligent Process Automation (IPA): </span>Integrating AI, RPA, and analytics to create intelligent workflows and improve productivity.</p>
                                                                </li>
                                                            </ul>

                                                        </li>





                                                    </ul>
                                                </div>


                                                <div className='flex items-center justify-center w-full rounded-lg max-md:hidden'>
                                                    {/* <img
                                                        src="/assets/images/Madasky approach and solutions.png"


                                                        className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:"
                                                    /> */}
                                                    <div className='relative h-[18rem] w-[80%]'>

                                                        <Image fill src={`${BaseUrl().imgurl}/Madasky approach and solutions.png`} alt="" className='object-fill rounded-xl' />Image

                                                    </div>
                                                </div>

                                            </div>




                                            <li>
                                                <p className='font-semibold text-gray-600 text-md'>Customer Experience & Digital Marketing</p>

                                                <ul className='text-[18px] pl-5'>
                                                    <li>
                                                        <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Customer Relationship Management (CRM): </span>Enhancing customer engagement through platforms like Salesforce and HubSpot.</p>
                                                    </li>

                                                    <li>
                                                        <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Omnichannel Experience: </span>Ensuring seamless integration between digital and physical customer interactions.</p>
                                                    </li>

                                                    <li>
                                                        <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>MarTech & Digital Marketing Solutions: </span>Implementing AI-driven marketing automation tools for targeted campaigns.</p>
                                                    </li>
                                                </ul>

                                            </li>

                                            <li>
                                                <p className='font-semibold text-gray-600 text-md'>Industry-Specific Digital Solutions</p>

                                                <ul className='text-[18px] pl-5'>
                                                    <li>
                                                        <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Manufacturing (Industry 4.0): </span>Implementing IoT, smart factories, and predictive maintenance to enhance production efficiency.</p>
                                                    </li>

                                                    <li>
                                                        <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Retail & E-Commerce: </span>AI-driven personalization, chatbots, and advanced digital payment solutions.</p>
                                                    </li>


                                                </ul>

                                            </li>

                                            <li>
                                                <p className='font-semibold text-gray-600 text-md'>Product & Service Innovation</p>

                                                <ul className='text-[18px] pl-5'>
                                                    <li>
                                                        <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Agile & DevOps Enablement: </span>Accelerating software development with agile methodologies and DevOps practices.</p>
                                                    </li>

                                                    <li>
                                                        <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Digital Twin & Simulation: </span>Creating digital replicas of physical systems for process optimization and efficiency.</p>
                                                    </li>

                                                    <li>
                                                        <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>IoT & Edge Computing: </span>Leveraging real-time data from connected devices for predictive analytics and automation.</p>
                                                    </li>



                                                </ul>

                                            </li>


                                            <li>
                                                <p className='font-semibold text-gray-600 text-md'>Product & Service Innovation</p>

                                                <ul className='text-[18px] pl-5'>
                                                    <li>
                                                        <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Agile & DevOps Enablement: </span>Accelerating software development with agile methodologies and DevOps practices.</p>
                                                    </li>

                                                    <li>
                                                        <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Digital Twin & Simulation: </span>Creating digital replicas of physical systems for process optimization and efficiency.</p>
                                                    </li>

                                                    <li>
                                                        <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>IoT & Edge Computing: </span>Leveraging real-time data from connected devices for predictive analytics and automation.</p>
                                                    </li>



                                                </ul>

                                            </li>


                                            <li>
                                                <p className='font-semibold text-gray-600 text-md'> Workforce & Collaboration Solutions</p>

                                                <ul className='text-[18px] pl-5'>
                                                    <li>
                                                        <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Digital Workplace Transformation: </span>Implementing remote collaboration tools such as Microsoft 365, Slack, and Zoom.</p>
                                                    </li>

                                                    <li>
                                                        <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Employee Experience Platforms (EXP): </span>Enhancing workforce engagement with AI-powered HR solutions.</p>
                                                    </li>

                                                    <li>
                                                        <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Training & Upskilling Programs: </span>AI-driven learning platforms for continuous workforce development and digital readiness.</p>
                                                    </li>



                                                </ul>

                                            </li>





                                        </ul>




                                    </div>

                                </div>

                            </div>


                            {/* Why Choose Madasky Consulting?  */}
                            <div className={`flex w-full pb-8 mt-4`}>

                                <div className='flex flex-col w-full gap-2 max-md:flex max-md:justify-center'>

                                    <div className='flex gap-2 font-bold text-2xl text-gray-600 leading-[1] max-md:px-2 max-md:text-xl'>
                                        <FaArrowRight className='text-[20px] max-md:text-[18px] max-md:mt-[4px] mt-[2px]' />
                                        <h2>Why Choose Madasky Consulting?</h2>

                                    </div>

                                    <div className='hidden w-full rounded-lg max-md:block'>
                                        {/* <img
                                            src="/assets/images/Why Choose Madasky Consulting.png"


                                            className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:mx-auto"
                                        /> */}

                                        <div className='relative h-[16rem] w-[80%] mx-auto'>

                                            <Image fill src={`${BaseUrl().imgurl}/Why Choose Madasky Consulting.png`} alt="" className='object-fill rounded-xl' />Image

                                        </div>
                                    </div>
                                    {/* style={{ fontFamily: "Helvetica, Arial, sans-serif" }}  */}
                                    <div className='text-gray-500 text-[20px] font-extralight text-justify max-md:text-justify flex flex-col gap-4'  >

                                        {/* <p className='pl-12 text-xl font-normal text-gray-600 max-md:text-left'>The manufacturing sector is undergoing a paradigm shift with digital transformation, but the journey is fraught with challenges. Some of the major hurdles include:</p> */}

                                        <ul className='flex flex-col pl-16 list-disc max-md:px-4'>


                                            <div className='grid grid-cols-2 max-md:grid-cols-1'>

                                                <div>
                                                    <ul className='list-disc'>

                                                        <li>
                                                            <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Industry Expertise: </span>With deep experience in manufacturing and digital transformation, we understand industry-specific challenges and provide tailored solutions.</p>
                                                        </li>

                                                        <li>
                                                            <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Proven Track Record: </span>Successfully enabling businesses to adopt cutting-edge digital solutions that drive efficiency and growth.</p>
                                                        </li>

                                                        <li>
                                                            <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Holistic Approach: </span> From strategy and implementation to training and scaling, we ensure a seamless digital transformation journey.</p>
                                                        </li>

                                                        <li>
                                                            <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Technology Partnerships: </span>Collaborating with leading tech providers for AI, IoT, automation, and cloud solutions.</p>
                                                        </li>

                                                        <li>
                                                            <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>End-to-End Support: </span>We guide businesses at every step, ensuring minimal disruption and maximum ROI.</p>
                                                        </li>




                                                    </ul>
                                                    {/* <p className='text-gray-700'>At Madasky Consulting, we empower manufacturers to scale, grow, and thrive in the new age of digital transformation. Contact us today to embark on your digital journey!</p> */}



                                                </div>


                                                <div className='flex items-center justify-center w-full rounded-lg max-md:hidden'>
                                                    {/* <img
                                                        src="/assets/images/Why Choose Madasky Consulting.png"


                                                        className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:"
                                                    /> */}
                                                    <div className='relative h-[18rem] w-[80%]'>

                                                        <Image fill src={`${BaseUrl().imgurl}/Why Choose Madasky Consulting.png`} alt="" className='object-fill rounded-xl' />Image

                                                    </div>
                                                </div>

                                            </div>
                                        </ul>


                                        <p className='pl-6 text-gray-700 max-md:px-2'>At Madasky Consulting, we empower manufacturers to scale, grow, and thrive in the new age of digital transformation. Contact us today to embark on your digital journey!</p>

                                    </div>


                                    <div className="mt-4">
                                        <Button text={"Book Your Session"} />
                                    </div>


                                </div>

                            </div>





                        </div>


                    </div>
                    {/* </Element> */}



                    {/* *********************************************************************************************** */}

                    {/* <Element name="industry4RealtimeProduction" > */}

                    <div id='target-section2' className={`flex flex-col w-full gap-8 pb-8 mt-8 border-b border-gray-300 max-md:px-4`}>
                        <div className='text-4xl font-bold text-black max-md:text-3xl max-md:text-center'>
                            <h2>Industry 4.0 - Realtime Production</h2>


                        </div>


                        <p className='text-justify text-gray-700 text-[20px]'>In today's fast-paced manufacturing world, efficiency, precision, and real-time decision-making are crucial for success. Yet, many manufacturers struggle with outdated processes, unplanned downtime, and a lack of real-time visibility. Manual tracking, paper-based documentation, and siloed data lead to delays, inefficiencies, and rising costs. Without centralized insights, identifying bottlenecks, optimizing workflows, and ensuring consistent product quality becomes a challenge.</p>

                        <p className='text-justify text-gray-700 text-[20px]'>As competition intensifies and operational costs rise, manufacturers must embrace digital transformation to stay ahead. Smart tracking systems, AI-driven analytics, and automated dashboards can revolutionize production, boosting efficiency and reducing waste. Our consulting firm specializes in implementing tailored digital solutions that enhance productivity, streamline operations, and drive long-term growth. Below, we explore key industry challenges and how our expertise can help solve them.</p>

                        {/* style={{ fontFamily: "Helvetica, Arial, sans-serif" }}  */}
                        <div className='text-gray-700 text-[20px] font-extralight flex flex-col gap-4'  >



                            {/* Challenges Faced by a Non-Digitalized Factory */}
                            <div className={`flex w-full pb-8 mt-4 max-md:flex max-md:justify-center`}>

                                <div className='flex flex-col w-full gap-2'>

                                    <div className='flex gap-2 font-bold text-2xl text-gray-600 leading-[1] max-md:text-xl'>
                                        <FaArrowRight className='text-[20px] max-md:text-[18px] max-md:mt-[4px] mt-[2px]' />
                                        <h2>Challenges Faced by a Non-Digitalized Factory</h2>

                                    </div>

                                    <div className='hidden w-full rounded-lg max-md:block'>
                                        {/* <img
                                                src="/assets/images/challanges faced by non digitalise company.png"


                                                className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:mx-auto"
                                            /> */}
                                        <div className='relative h-[16rem] w-[80%] mx-auto'>

                                            <Image fill src={`${BaseUrl().imgurl}/challanges faced by non digitalise company.png`} alt={`${imgAltText[2]}`} className='object-fill rounded-xl' />Image

                                        </div>

                                    </div>
                                    {/* style={{ fontFamily: "Helvetica, Arial, sans-serif" }}  */}
                                    <div className='text-gray-500 text-[20px] font-extralight text-justify max-md:text-justify flex flex-col gap-4'  >

                                        <p className='pl-12 text-xl font-normal text-gray-600 max-md:px-0 max-md:text-justify'>Manufacturers operating without digital tools face several critical inefficiencies that impact productivity, costs, and overall competitiveness. Some of the key challenges include:</p>

                                        <ul className='flex flex-col pl-16 list-disc max-md:px-2'>


                                            <div className='flex items-center max-md:grid-cols-1'>

                                                <div className='w-[70%] max-md:w-full max-md:pl-0 h-fit'>
                                                    <ul className='list-disc'>

                                                        <li>
                                                            <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Unplanned Downtime & Frequent Breakdowns: </span>Lack of predictive maintenance leads to unexpected machine failures, causing costly production halts and delays.</p>
                                                        </li>

                                                        <li>
                                                            <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Limited Visibility & Data Silos: </span>Without real-time tracking, floor managers rely on outdated reports, making it difficult to monitor production progress and react swiftly to issues.</p>
                                                        </li>

                                                        <li>
                                                            <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>High Work-in-Progress (WIP) & Bottlenecks: </span>Inefficient workflow tracking results in excessive WIP, increasing lead times and creating bottlenecks that slow down output.</p>
                                                        </li>

                                                        <li>
                                                            <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Manual Tracking & Paper-Based Processes: </span>Dependence on spreadsheets and physical documents increases errors, slows decision-making, and limits process transparency.</p>
                                                        </li>




                                                    </ul>
                                                </div>


                                                <div className='flex h-[30vh] w-[30vw] justify-center rounded-lg max-md:hidden'>
                                                    {/* <img
                                                        src="/assets/images/challanges faced by non digitalise company.png"


                                                        className="rounded-xl w-[80%] h-[100%] object-fit max-md:object-fit max-md:"
                                                    /> */}
                                                    <div className='relative h-[15rem] w-[80%]'>

                                                        <Image fill src={`${BaseUrl().imgurl}/challanges faced by non digitalise company.png`} alt="" className='object-fill rounded-xl' />Image

                                                    </div>
                                                </div>

                                            </div>




                                            <li className=''>
                                                <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Inconsistent Product Quality & High Rejection Rates: </span>Without automated quality monitoring, defects go unnoticed until the final inspection, leading to rework, material wastage, and customer dissatisfaction.</p>
                                            </li>

                                            <li className=''>
                                                <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Inefficient Resource Utilization: </span>Poor workforce allocation and lack of real-time machine monitoring result in idle time, low productivity, and increased labor costs.</p>
                                            </li>

                                            <li className=''>
                                                <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Lack of Real-Time Performance Monitoring: </span>Managers cannot track efficiency, production rates, or deviations in real-time, leading to delayed corrective actions and missed improvement opportunities.</p>
                                            </li>

                                            <li className=''>
                                                <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Difficulty in Scaling & Adapting to Market Demands: </span>Inflexible production processes make it harder to scale operations, introduce new products, or adapt to changing customer demands.</p>
                                            </li>




                                        </ul>




                                    </div>

                                </div>

                            </div>

                            {/* Our Approach */}
                            <div className={`flex w-full pb-8 mt-4`}>

                                <div className='flex flex-col w-full gap-2'>

                                    <div className='flex gap-2 font-bold text-2xl text-gray-600 leading-[1] max-md:text-xl'>
                                        <FaArrowRight className='text-[20px] max-md:[text-18px] max-md:mt-[4px] mt-[2px]' />
                                        <h2>Our Approach</h2>

                                    </div>

                                    <div className='hidden w-full rounded-lg max-md:block'>
                                        {/* <img
                                            src="/assets/images/Our Approach (1).png"


                                            className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:mx-auto"
                                        /> */}
                                        <div className='relative h-[16rem] w-[80%] mx-auto'>

                                            <Image fill src={`${BaseUrl().imgurl}OurApproach69.png`} alt={`${imgAltText[3]}`} className='object-fill rounded-xl' />Image

                                        </div>
                                    </div>
                                    {/* style={{ fontFamily: "Helvetica, Arial, sans-serif" }}  */}
                                    <div className='text-gray-500 text-[20px] font-extralight text-justify max-md:text-justify flex flex-col gap-4' >

                                        {/* <p className='pl-12 text-xl font-normal text-gray-600 max-md:text-left'>Manufacturers operating without digital tools face several critical inefficiencies that impact productivity, costs, and overall competitiveness. Some of the key challenges include:</p> */}

                                        <ul className='flex flex-col pl-16 list-disc max-md:px-2'>


                                            <div className='grid grid-cols-2 max-md:grid-cols-1'>

                                                <div>
                                                    <ul className='list-disc'>

                                                        <li>
                                                            <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Real-Time Production Tracking: </span>Gain complete visibility into your production floor with real-time monitoring of machine operations, process stages, and performance metrics.</p>
                                                        </li>

                                                        <li>
                                                            <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Downtime & Efficiency Monitoring: </span>Identify and analyze operational bottlenecks, enabling predictive maintenance and reducing unplanned downtime.</p>
                                                        </li>

                                                        <li>
                                                            <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>First-Hour Production Optimization: </span>Monitor the initial output of each shift to detect inefficiencies early and set the foundation for peak productivity.</p>
                                                        </li>

                                                        <li>
                                                            <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>AI-Driven Production Dashboards: </span> Live dashboards display key performance indicators (KPIs), alerting managers to maintenance needs, production trends, and efficiency gaps.</p>
                                                        </li>




                                                    </ul>
                                                </div>


                                                <div className='flex items-center justify-center w-full rounded-lg max-md:hidden'>
                                                    {/* <img
                                                        src="/assets/images/Our Approach (1).png"


                                                        className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:"
                                                    /> */}
                                                    <div className='relative h-[18rem] w-[80%]'>

                                                        <Image fill src={`${BaseUrl().imgurl}/OurApproach69.png`} alt="" className='object-fill rounded-xl' />Image

                                                    </div>
                                                </div>

                                            </div>




                                            <li className=''>
                                                <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Digital Workflows & Paperless Operations: </span> Eliminate manual paperwork by transitioning to digital workflows, ensuring seamless data integration across departments.</p>
                                            </li>

                                            <li className=''>
                                                <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Process Automation & Smart Scheduling: </span>Automate repetitive tasks and optimize scheduling with AI-powered insights, reducing dependency on manual interventions.</p>
                                            </li>

                                            <li className=''>
                                                <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Quality Control & Predictive Analytics: </span>Use AI-driven quality control measures and predictive analytics to minimize defects, ensuring consistent product excellence.</p>
                                            </li>

                                            <li className=''>
                                                <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Workforce Digital Enablement: </span>Equip employees with intuitive digital tools and training to enhance operator performance and productivity.</p>
                                            </li>

                                            <li className=''>
                                                <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Complete Factory Visibility & Traceability: </span> Ensure end-to-end traceability of every production process, enabling better compliance, accountability, and data-driven decision-making.</p>
                                            </li>

                                            <li className=''>
                                                <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Scalable & Future-Ready Operations: </span> Implement flexible digital solutions that adapt to business growth, allowing seamless expansion without operational disruption.
                                                </p>
                                            </li>




                                        </ul>




                                    </div>

                                </div>

                            </div>

                            {/* Transform Your Production Floor with Digitalization */}
                            <div className={`flex w-full pb-8 mt-4 max-md:flex max-md:flex-col`}>

                                <div className='flex flex-col gap-2 w-[60%] max-md:w-full'>

                                    <div className='flex gap-2 text-gray-600 font-bold text-2xl max-md:text-xl leading-[1]'>
                                        <FaArrowRight className='text-[20px] max-md:text-[18px] max-md:mt-[4px] mt-[2px]' />
                                        <h2>Transform Your Production Floor with Digitalization</h2>
                                    </div>

                                    <div className='w-[40%] max-md:w-[100%] rounded-lg hidden max-md:block'>
                                        {/* <img
                                            src="/assets/images/Transform Your Production Floor with Digitalization1.png"


                                            className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:mx-auto"
                                        /> */}
                                        <div className='relative h-[16rem] w-[80%] mx-auto'>

                                            <Image fill src={`${BaseUrl().imgurl}/Transform Your Production Floor with Digitalization1.png`} alt={`${imgAltText[4]}`} className='object-fill rounded-xl' />Image

                                        </div>
                                    </div>

                                    {/* style={{ fontFamily: "Helvetica, Arial, sans-serif" }}  */}
                                    <div className='text-gray-500 text-[20px] font-extralight flex flex-col gap-4 text-justify max-md:text-justify'  >

                                        <ul className='pl-16 list-disc max-md:px-2'>

                                            <li>
                                                <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>20% Efficiency Gains: </span>Optimize workflows and reduce waste.</p>
                                            </li>

                                            <li>
                                                <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>25% Reduction in Operating Costs: </span> Lower expenses through automation and predictive maintenance.</p>
                                            </li>

                                            <li>
                                                <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>35% Revenue Growth: </span>Enhance output and market responsiveness.</p>
                                            </li>

                                            <li>
                                                <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>100% Shop Floor Visibility: </span>Gain real-time insights for proactive decision-making.</p>
                                            </li>

                                            <li>
                                                <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Unmatched Product Quality: </span>Achieve consistency with AI-driven quality controls.</p>
                                            </li>

                                            <li>
                                                <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Go Fully Paperless: </span>Streamline documentation and eliminate manual data entry.</p>
                                            </li>




                                        </ul>

                                        <p className='text-gray-700 text-[20px] pl-6 max-md:px-2'>
                                            At Madasky Consulting, we understand that every industry has unique challenges and requirements. To address these, we have partnered with leading IT companies to provide tailored digital solutions that align with the specific needs of our clients across various sectors. Our collaborative approach ensures that our clients receive the most advanced and effective tools to enhance their operations, drive innovation, and achieve sustainable growth.
                                        </p>

                                    </div>

                                </div>

                                <div className='w-[40%] rounded-lg flex items-center justify-center max-md:hidden'>
                                    {/* <img
                                        src="/assets/images/Transform Your Production Floor with Digitalization1.png"


                                        className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:"
                                    /> */}
                                    <div className='relative h-[18rem] w-[80%]'>

                                        <Image fill src={`${BaseUrl().imgurl}/Transform Your Production Floor with Digitalization1.png`} alt="" className='object-fill rounded-xl' />Image

                                    </div>
                                </div>


                            </div>

                            {/* Comprehensive industry expertise  */}
                            <div className='flex flex-col gap-2 mt-4'>

                                <div className='flex gap-2 text-gray-600 font-bold text-2xl max-md:text-xl leading-[1]'>

                                    <FaArrowRight className='text-[20px] max-md:text-[18px] max-md:mt-[4px] mt-[2px]' />
                                    <h2>Comprehensive Industry Expertise</h2>
                                </div>

                                <p className='text-justify text-gray-700 text-[20px]'>In today's fast-paced manufacturing world, efficiency, precision, and real-time decision-making are crucial for success. Yet, many manufacturers struggle with outdated processes, unplanned downtime, and a lack of real-time visibility. Manual tracking, paper-based documentation, and siloed data lead to delays, inefficiencies, and rising costs. Without centralized insights, identifying bottlenecks, optimizing workflows, and ensuring consistent product quality becomes a challenge.</p>

                                <p className='text-justify text-gray-700 text-[20px]'>In today's fast-paced manufacturing world, efficiency, precision, and real-time decision-making are crucial for success. Yet, many manufacturers struggle with outdated processes, unplanned downtime, and a lack of real-time visibility. Manual tracking, paper-based documentation, and siloed data lead to delays, inefficiencies, and rising costs. Without centralized insights, identifying bottlenecks, optimizing workflows, and ensuring consistent product quality becomes a challenge.</p>

                                <p className='text-justify text-gray-700 text-[20px]'>In today's fast-paced manufacturing world, efficiency, precision, and real-time decision-making are crucial for success. Yet, many manufacturers struggle with outdated processes, unplanned downtime, and a lack of real-time visibility. Manual tracking, paper-based documentation, and siloed data lead to delays, inefficiencies, and rising costs. Without centralized insights, identifying bottlenecks, optimizing workflows, and ensuring consistent product quality becomes a challenge.</p>

                                <div className="mt-4">
                                    <Button text={"Plan Your Consultation"} />
                                </div>

                            </div>





                        </div>

                    </div>
                    {/* </Element> */}


                </div>
            </div>







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

