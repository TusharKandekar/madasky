import { Metadata } from 'next';
import ConsultingNavbar from '@/components/ConsultingNavbar';
// import CapabilitiesHeader from '@/components/CapabilitiesHeader';
// import CapabilitiesHeader2 from '@/components/CapabilitiesHeader2';
import CapabilitiesContent1 from '@/components/CapabilitiesContent1';
// import CapabilitiesContent2 from '../components/CapabilitiesContent2';
// import CapabilitiesContent3 from '../components/CapabilitiesContent3';
// import CapabilitiesContent4 from '../components/CapabilitiesContent4';
// import CapabilitiesContent5 from '../components/CapabilitiesContent5';

import Footer from '@/components/Footer';
import AboutVideo from '@/components/AboutVideo';
import HelpYou from '@/components/HelpYou';
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
import BaseUrl from '@/components/BaseUrl';
import type { PageMetaDataResponse } from "@/common/types";


import { getImageAltText, getWebBlogs, fetchMetaDataByPageName, getDataByPageName, filterByWebImage, getImageData, getTestimonials, getTestimonialsByPageName, getEventByPageName } from "@/common/api";
import ServerError from '@/components/ServerError';

const title = "Material Handling Equipment";
let PageMetadata: PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
    PageMetadata = await fetchMetaDataByPageName({ pageName: "Material Handling Equipment" });
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
                `${BaseUrl().mainurl}material-handling-equipment`
        },

    };
}

export default async function GrowthMarketingAndSales() {
    const arr = ["Key Challenges.png", "Why Choose Madasky Consulting.png", "Overcoming challanges.png", "Framework and solutions.png"];


    let images;
    let blogData;
    let videoData;
    let galleryData;
    let testimonialData;
    let eventData;
    let serverError = false;

    try {
        images = await getImageAltText(arr);
        blogData = await getDataByPageName(["Material Handling Equipment", "blogs"]);
        videoData = await getDataByPageName(["Material Handling Equipment", "videos"]);
        galleryData = await getDataByPageName(["Material Handling Equipment", "gallery"]);
        testimonialData = await getTestimonialsByPageName("Material Handling Equipment");
        eventData = await getEventByPageName("Material Handling Equipment");

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


            <ConsultingNavbar
                url='/warehousing-solutions-consulting'
                title={'Warehousing Solutions'}
                navItems={[
                    { title: 'Facility Design - Different types of Warehouses', link: '/facility-design' },
                    { title: 'Material Handling Equipment', link: '/material-handling-equipment' },
                    { title: 'Logistics and Supply Chain Services', link: '/logistics-and-supply-chain-services' },

                ]}
            />

            <AboutVideo vid1={"/assets/videos/Warehousing solutions.mp4"} title={title} des={"Creating and accelerating critical advantages through cutting-edge strategy and operations"} h1={PageMetadata?.data?.h1tag} />

            <div className='w-[80vw] bg-white mx-auto'>

                <div className='w-full my-20'>

                    {/* <CapabilitiesHeader details1={{
                        heading1: "Process & Material Flow",
                        paragraph1: "At Madasky Consulting, we specialize in providing comprehensive Process and Material Flow solutions that cater to both new factory layouts and existing factories. Our expertise lies in identifying and addressing critical inefficiencies that arise from improper material flow designs and haphazardly structured processes. Poorly planned layouts often lead to significant challenges, such as delays, longer lead times, and compromised productivity. Leveraging our in-depth understanding of diverse products and best practices in factory operations, we help businesses overcome these challenges with tailored, well-organized designs that streamline processes, optimize material movement, and drive operational excellence.",
                        // paragraph2: "At Madasky Consulting, we understand the intricacies of these challenges. Our Technical Consulting services are tailored to help manufacturers identify and overcome critical pain points, empowering them to drive operational excellence and achieve sustainable growth.",



                    }} border={"border-b"} /> */}

                    <CapabilitiesContent1 details1={{
                        heading1: "Key Challenges Faced by the Industry",
                        // paragraph2: "At Madasky Consulting, we resonate with these challenges because we've solved them time and again for our clients. Our tailored plant layout solutions are designed to address these pain points and transform manufacturing spaces into hubs of efficiency and innovation.",


                        data:
                            [
                                {
                                    data1: "Space Utilization",
                                    data2: "Inefficient storage layouts lead to underutilized warehouse capacity.",
                                },
                                {
                                    data1: "Workforce Dependency",
                                    data2: "High labor costs and dependency on manual processes slow down operations.",
                                },
                                {
                                    data1: "Inventory Accuracy",
                                    data2: "Poor material tracking results in mismanagement, increased costs, and delays.",
                                },
                                {
                                    data1: "Operational Inefficiency",
                                    data2: "Ineffective movement of goods disrupts workflow and affects productivity.",
                                },
                                {
                                    data1: "Scalability Issues",
                                    data2: "Traditional systems struggle to adapt to increased demand and market changes.",
                                },
                                {
                                    data1: "Safety Concerns",
                                    data2: "Improper handling of materials leads to workplace accidents and compliance risks.",
                                },

                            ],

                        imgSrc: "Key Challenges.png",
                        altText: imgAltText[0],
                        calendarButton: true,
                        btnText: "Plan Your Consultation",



                    }} border={"border-b"} />

                    <CapabilitiesContent1 details1={{
                        heading1: "Madasky's Approach to Overcoming Industry Challenges",
                        // paragraph2: "At Madasky Consulting, we resonate with these challenges because we've solved them time and again for our clients. Our tailored plant layout solutions are designed to address these pain points and transform manufacturing spaces into hubs of efficiency and innovation.",


                        data:
                            [
                                {
                                    data1: "End-to-End Warehouse Optimization",
                                    data2: "Workflow, storage capacity, and material flow analysis for maximum efficiency.",
                                },
                                {
                                    data1: "Automation Integration",
                                    data2: "Seamless implementation of AGVs (Automated Guided Vehicles) and AMRs (Autonomous Mobile Robots) to reduce manual intervention and improve accuracy.",
                                },
                                {
                                    data1: "Customized MHE Selection",
                                    data2: "Selecting the right material handling equipment for operational efficiency.",
                                },
                                {
                                    data1: "Technology-Driven Solutions",
                                    data2: "IoT-enabled tracking, real-time inventory monitoring, and AI-driven analytics for better control.",
                                },
                                {
                                    data1: "Cost-Effective Solutions",
                                    data2: "Solutions that maximize efficiency while optimizing cost structures and ensuring maximum ROI.",
                                },


                            ],

                        imgSrc: "Overcoming challanges.png",
                        altText: imgAltText[2],
                        calendarButton: true,
                        btnText: "Book Your Session",



                    }} border={"border-b"} />

                    <div className={`flex w-full pb-8 mt-20 border-b border-gray-300 max-md:flex max-md:flex-col`}>

                        <div className='flex flex-col w-full gap-8 max-md:w-full'>

                            <div className='text-black font-bold text-4xl max-md:text-3xl leading-[1]'>
                                <h2>Material Handling Equipment (MHE) Options</h2>
                            </div>



                            <div className='text-gray-500 text-[20px] font-extralight flex flex-col gap-4 text-justify max-md:text-justify' style={{ fontFamily: "Helvetica, Arial, sans-serif" }} >



                                <ul className='pl-5 list-disc'>



                                    <li className=''>
                                        <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Forklifts, Reach Trucks, Pallet Jacks, and Order Pickers </span>for efficient material movement.</p>
                                    </li>

                                    <li className=''>
                                        <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Narrow aisle trucks </span>for high-density storage systems.</p>
                                    </li>




                                </ul>




                            </div>

                        </div>



                    </div>

                    <div className={`flex w-full pb-8 mt-20 border-b border-gray-300 max-md:flex max-md:flex-col`}>

                        <div className='flex flex-col w-full gap-8 max-md:w-full'>

                            <div className='text-black font-bold text-4xl max-md:text-3xl leading-[1]'>
                                <h2>Automation Options</h2>
                            </div>



                            <div className='text-gray-500 text-[20px] font-extralight flex flex-col gap-4 text-justify max-md:text-justify' style={{ fontFamily: "Helvetica, Arial, sans-serif" }} >



                                <ul className='pl-5 list-disc'>



                                    <li className=''>
                                        <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>AGVs (Automated Guided Vehicles): </span>Guided vehicles for precise movement of goods within the warehouse.</p>
                                    </li>

                                    <li className=''>
                                        <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>AMRs (Autonomous Mobile Robots): </span>Intelligent robots capable of dynamic navigation and multi-tasking.</p>
                                    </li>




                                </ul>




                            </div>

                        </div>



                    </div>

                    {/* <CapabilitiesContent1 details1={{
                        heading1: "Automation Options",
                        // paragraph2: "At Madasky Consulting, we resonate with these challenges because we've solved them time and again for our clients. Our tailored plant layout solutions are designed to address these pain points and transform manufacturing spaces into hubs of efficiency and innovation.",


                        data:
                            [
                                {
                                    data1: "AGVs (Automated Guided Vehicles)",
                                    data2: "Guided vehicles for precise movement of goods within the warehouse.",
                                },
                                {
                                    data1: "AMRs (Autonomous Mobile Robots)",
                                    data2: "Intelligent robots capable of dynamic navigation and multi-tasking.",
                                },


                            ],

                        imgSrc: "/assets/images/398.png"



                    }} border={"border-b"} /> */}

                    <CapabilitiesContent1 details1={{
                        heading1: "Frameworks and Solutions We Work With",



                        data:
                            [
                                {
                                    data1: "Warehouse Automation & Robotics",
                                    data2: "AI-powered robotics and Automated Storage & Retrieval Systems (AS/RS).",
                                },
                                {
                                    data1: "Smart Material Handling Equipment",
                                    data2: "Forklifts, Reach Trucks, Narrow Aisle Trucks, and Conveyor Systems for seamless material flow.",
                                },
                                {
                                    data1: "Process Optimization & Digitalization",
                                    data2: "Warehouse Management Systems (WMS), real-time data analytics, and AI-driven insights.",
                                },
                                {
                                    data1: "Lean Logistics & Supply Chain Strategy",
                                    data2: "KPI-driven performance monitoring and end-to-end supply chain integration.",
                                },


                            ],

                        imgSrc: "Framework and solutions.png",
                        altText: imgAltText[3],



                    }} border={"border-b"} />


                    <CapabilitiesContent1 details1={{
                        heading1: "Why Choose Madasky Consulting?",
                        paragraph2: "Madasky Consulting is your partner in achieving efficient, scalable, and automated warehousing solutions. Let us transform your warehouse into a powerhouse of efficiency, driving your business toward supply chain excellence.",
                        paragraph3: "Ready to optimize your warehouse? Connect with us today!",



                        data:
                            [
                                {
                                    data1: "Industry Expertise",
                                    data2: "Decades of experience in warehouse transformation.",
                                },
                                {
                                    data1: "Customized Approach",
                                    data2: "Tailored solutions to meet unique business challenges.",
                                },
                                {
                                    data1: "Technology-First Strategy",
                                    data2: "AI, IoT, and automation for future-ready warehouses.",
                                },
                                {
                                    data1: "Proven Track Record",
                                    data2: " Successful implementation of smart warehouse solutions for global clients.",
                                },
                                {
                                    data1: "End-to-End Support",
                                    data2: "From strategy and design to execution and post-implementation support.",
                                },


                            ],

                        imgSrc: "Why Choose Madasky Consulting.png",
                        altText: imgAltText[1],
                        calendarButton: true,
                        btnText: "Lock In Your Meeting",



                    }} border={"border-none"} />

                    {/* 
                    <CapabilitiesHeader2 details1={{
                        heading1: "Impact of These Challenges",
                        paragraph1: "These challenges lead to inefficiencies, reduced profit margins, and missed revenue opportunities. Manufacturers unable to adapt risk losing market share to competitors who can better navigate the e-commerce ecosystem.",
                        imgSrc: "/assets/images/398.png",


                    }} border={"border-b"} /> */}

                    {/* <CapabilitiesContent2 details1={{
                        heading1: "Material Handling Equipment (MHE) Options",
                        // heading2: "At Madasky Consulting, we understand the unique challenges of manpower planning in manufacturing and deliver customized solutions to address your specific needs. Here's how we can help:",


                        data:
                            [
                                {
                                    data1: "Streamlined Material Flow Design",
                                    data2: "We create clear, efficient pathways for material movement to reduce transit time, eliminate bottlenecks, and enhance overall production flow.",
                                },
                                {
                                    data1: "Optimized Process Layouts",
                                    data2: "Our team re-engineers workflows to minimize redundancies, ensure smooth transitions, and achieve a logical sequence of operations.",
                                },

                                {
                                    data1: "Space Utilization Planning",
                                    data2: "By optimizing the layout, we ensure that every square meter is used effectively, creating a balance between functionality and scalability.",
                                },
                                {
                                    data1: "Automation Integration",
                                    data2: "We incorporate automation tools where necessary to synchronize material handling with production processes, reducing manual dependency and errors.",
                                },
                                {
                                    data1: "Workload Balancing",
                                    data2: "Our solutions align tasks and resources across the production line to ensure consistent workloads, reducing idle time and overburdening.",
                                },



                            ],

                        // data2: [

                        //     {
                        //         data1: "Workload Balancing",
                        //         data2: "Our solutions align tasks and resources across the production line to ensure consistent workloads, reducing idle time and overburdening.",
                        //     },


                        // ],





                        imgSrc: "/assets/images/398.png"



                    }} border={"border-b"} /> */}







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

