import { Metadata } from 'next';
import ConsultingNavbar from '@/components/ConsultingNavbar';
import CapabilitiesHeader from '@/components/CapabilitiesHeader';
import CapabilitiesHeader2 from '@/components/CapabilitiesHeader2';
import CapabilitiesContent1 from '@/components/CapabilitiesContent1';
// import CapabilitiesContent2 from '@/components/CapabilitiesContent2';
// import CapabilitiesContent3 from '@/components/CapabilitiesContent3';
// import CapabilitiesContent4 from '@/components/CapabilitiesContent4';
import Image from 'next/image';
import Footer from '@/components/Footer';

import AboutVideo from '@/components/AboutVideo';
import HelpYou from '@/components/HelpYou';
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
import BaseUrl from '@/components/BaseUrl';
import type { PageMetaDataResponse } from "@/common/types";

import { getImageAltText, getWebBlogs, fetchMetaDataByPageName, getDataByPageName, filterByWebImage, getImageData, getTestimonials, getTestimonialsByPageName, getEventByPageName } from "@/common/api";
import FaqComponent from '@/components/FaqComponent';

type Faq = {
    question: string;
    answer: string;
};
import ServerError from '@/components/ServerError';
const title = "Process & Material Flow";
let PageMetadata: PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
    PageMetadata = await fetchMetaDataByPageName({ pageName: "Process & Material Flow" });
    //   console.log("Metaas: ", PageMetadata);

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
                `${BaseUrl().mainurl}process-and-material-flow-consulting`
        },

    };
}

export default async function ProcessAndMaterialFlow() {
    const arr = ["Key Challenges.png", "Tailored Solutions.png", "Why Choose Madasky Consulting.png"];


    let images;
    let blogData;
    let videoData;
    let galleryData;
    let testimonialData;
    let eventData;
    let serverError = false;

    try {
        images = await getImageAltText(arr);
        blogData = await getDataByPageName(["Process & Material Flow", "blogs"]);
        videoData = await getDataByPageName(["Process & Material Flow", "videos"]);
        galleryData = await getDataByPageName(["Process & Material Flow", "gallery"]);
        testimonialData = await getTestimonialsByPageName("Process & Material Flow");
        eventData = await getEventByPageName("Process & Material Flow");

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
            question: `What are the key challenges in process and material flow design?`,
            answer: `Key challenges include improper material flow, haphazard process design, excessive material handling, and unbalanced workflows, which lead to delays, inefficiencies, and increased costs.`
        },
        {
            question: `How can Madasky Consulting improve material flow in a factory?`,
            answer: `Madasky Consulting designs efficient pathways to eliminate bottlenecks, reduce transit time, and synchronize material movement, optimizing production flow and reducing delays.`
        },
        {
            question: `What is process layout optimization, and how does it help?`,
            answer: ` Process layout optimization re-engineers workflows to minimize redundancies, eliminate wasted motion, and create seamless operations, which improves overall factory efficiency.`
        },
        {
            question: `How does automation improve material handling and factory efficiency?`,
            answer: `Automation reduces manual handling errors, lowers labor costs, and minimizes risks, streamlining material movement and enhancing productivity.`
        },
        {
            question: `Why is space and resource efficiency important in manufacturing?`,
            answer: ` Maximizing space utilization and balancing workloads reduces idle time, ensures scalability, and enhances overall operational efficiency in a manufacturing facility.`
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

                    <CapabilitiesHeader details1={{
                        heading1: "Process & Material Flow",
                        paragraph1: "At Madasky Consulting, we specialize in Process Material Flow Consulting and Material Handling Consulting, delivering solutions for both new and existing factories. Our expertise addresses inefficiencies caused by poor material flow designs and disorganized processes, which lead to delays, longer lead times, and productivity losses. By leveraging industry best practices, we create tailored designs that streamline workflows, optimize material movement, and drive operational excellence.",
                        // paragraph2: "At Madasky Consulting, we understand the intricacies of these challenges. Our Technical Consulting services are tailored to help manufacturers identify and overcome critical pain points, empowering them to drive operational excellence and achieve sustainable growth.",



                    }} border={"border-b"} />

                    <CapabilitiesContent1 details1={{
                        heading1: "Key Challenges Faced by Companies",
                        // paragraph2: "At Madasky Consulting, we resonate with these challenges because we've solved them time and again for our clients. Our tailored plant layout solutions are designed to address these pain points and transform manufacturing spaces into hubs of efficiency and innovation.",


                        data:
                            [
                                {
                                    data1: "Improper Material Flow",
                                    data2: "Bottlenecks and transit delays disrupt production schedules.",
                                },
                                {
                                    data1: "Haphazard Process Design",
                                    data2: "Redundant steps and wasted motion inflate costs.",
                                },
                                {
                                    data1: "Excessive Material Handling",
                                    data2: "Manual processes increase risks and labor dependency.",
                                },
                                {
                                    data1: "Unbalanced Workflows",
                                    data2: "Idle time and overburdened teams hinder efficiency.",
                                },

                            ],

                        imgSrc: "Key Challenges.png",
                        altText: imgAltText[0],
                        calendarButton: true,
                        btnText: "Unlock Your Next Chapter",



                    }} border={"border-b"} />






                    {/* Tailored Solutions by Madasky Consulting  */}
                    <div className={`flex w-full pb-8 mt-20 border-b border-gray-300`}>

                        <div className='flex flex-col w-full gap-8'>

                            <div className='text-black font-bold text-4xl max-md:text-3xl leading-[1]'>
                                <h2>Tailored Solutions by Madasky Consulting</h2>

                            </div>


                            <div className='hidden w-full rounded-lg max-md:block'>
                                <div className='relative w-[95%] mx-auto h-[15rem]'>

                                    <Image
                                        src={"/assets/images/Key Challenges.png"}


                                        fill
                                        alt={`amf`}

                                        className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:mx-auto"
                                    />
                                </div>

                            </div>
                            {/* style={{ fontFamily: "Helvetica, Arial, sans-serif" }} */}
                            <div className='text-gray-500 text-[20px] font-extralight flex flex-col gap-4'  >

                                <p className='text-gray-700'>Our Process Material Flow Consulting and Material Handling Consulting services deliver measurable improvements:</p>


                                <div className='flex flex-col pl-5 text-left list-disc max-md:p-0'>


                                    <div className='flex w-full max-md:grid-cols-1'>
                                        {/* Content  */}
                                        <div className='flex flex-col w-[60%] max-md:w-full gap-4'>

                                            <div className='flex flex-col gap-2' key='outer-list'>

                                                <div className=''>
                                                    <p className='text-2xl font-bold text-gray-800'>Streamlined Material Flow Design:</p>
                                                </div>
                                                <ul className='pl-8 leading-[24px] list-disc max-md:pl-4'>

                                                    <li className=''>
                                                        <p className='mb-2 font-normal text-gray-700'>Design efficient pathways to eliminate bottlenecks, reduce transit time, and enhance production flow.</p>

                                                    </li>

                                                    <li className=''>
                                                        <p className='mb-2 font-normal text-gray-700'>Integrate Material Handling Consulting insights to automate and synchronize material movement.</p>

                                                    </li>


                                                </ul>

                                                <div className=''>
                                                    <p className='text-2xl font-bold text-gray-800'>Optimized Process Layouts:</p>
                                                </div>
                                                <ul className='pl-8 leading-[24px] list-disc max-md:pl-4'>

                                                    <li className=''>
                                                        <p className='mb-2 font-normal text-gray-700'>Re-engineer workflows to minimize redundancies and ensure logical, seamless operations.</p>

                                                    </li>
                                                </ul>

                                                <div className='flex flex-col gap-2' key='outer-list'>

                                                    <div className='space-y-2'>


                                                        <div className=''>
                                                            <p className='text-2xl font-bold text-gray-800'>Space & Resource Efficiency:</p>
                                                        </div>
                                                        <ul className='pl-8 leading-[24px] list-disc max-md:pl-4'>

                                                            <li className=''>
                                                                <p className='mb-2 font-normal text-gray-700'>Maximize space utilization for functionality and scalability.</p>

                                                            </li>

                                                            <li className=''>
                                                                <p className='mb-2 font-normal text-gray-700'>Balance workloads to reduce idle time and overburdening.</p>

                                                            </li>


                                                        </ul>

                                                    </div>



                                                    <div className='space-y-2'>

                                                        <div className=''>
                                                            <p className='text-2xl font-bold text-gray-800'>Automation & Technology:</p>
                                                        </div>
                                                        <ul className='pl-8 leading-[24px] list-disc max-md:pl-4'>

                                                            <li className=''>
                                                                <p className='mb-2 font-normal text-gray-700'>Implement automation tools to reduce manual handling errors and labor costs.</p>

                                                            </li>
                                                        </ul>

                                                    </div>

                                                </div>
                                            </div>



                                        </div>

                                        {/* Image  */}
                                        <div className='flex w-[40%] items-start justify-center rounded-lg max-md:hidden'>
                                            <div className='relative w-[80%] min-h-[30vh] max-h-[16rem]'>

                                                <Image
                                                    fill
                                                    src={"/assets/images/Tailored Solutions.png"}
                                                    alt={`amf`}



                                                    className="object-cover rounded-xl max-md:object-fit max-md:"
                                                />
                                            </div>
                                        </div>

                                    </div>



                                    {/* <div className='flex flex-col gap-2' key='outer-list'>

                                        <div className='space-y-2'>


                                            <div className=''>
                                                <p className='text-2xl font-bold text-gray-800'>Space & Resource Efficiency:</p>
                                            </div>
                                            <ul className='pl-8 leading-[24px] list-disc'>

                                                <li className=''>
                                                    <p className='mb-2 font-normal text-gray-700'>Maximize space utilization for functionality and scalability.</p>

                                                </li>

                                                <li className=''>
                                                    <p className='mb-2 font-normal text-gray-700'>Balance workloads to reduce idle time and overburdening.</p>

                                                </li>


                                            </ul>

                                        </div>



                                        <div className='space-y-2'>

                                            <div className=''>
                                                <p className='text-2xl font-bold text-gray-800'>Automation & Technology:</p>
                                            </div>
                                            <ul className='pl-8 leading-[24px] list-disc'>

                                                <li className=''>
                                                    <p className='mb-2 font-normal text-gray-700'>Implement automation tools to reduce manual handling errors and labor costs.</p>

                                                </li>
                                            </ul>

                                        </div>

                                    </div> */}


                                </div>


                            </div>

                        </div>

                    </div>

                    <CapabilitiesContent1 details1={{
                        heading1: "Why Choose Madasky Consulting?",


                        data:
                            [
                                {
                                    data1: "End-to-End Expertise",
                                    data2: "From Process Material Flow Consulting to Material Handling Consulting, we ensure holistic solutions.",
                                },
                                {
                                    data1: "Data-Driven Strategies",
                                    data2: "Optimize workflows using analytics and industry benchmarks. Scalable Outcomes: Designs that adapt to growth, technology shifts, and evolving demands. Proven Results: Reduced lead times, lower costs, and consistent output quality.",
                                },



                            ],

                        imgSrc: "Why Choose Madasky Consulting.png",
                        altText: imgAltText[1],
                        calendarButton: true,
                        btnText: "Plan Your Consultation",



                    }} border={"border-b"} />

                    <CapabilitiesHeader details1={{
                        heading1: "Transform your factory's efficiency with Madasky Consulting",
                        paragraph1: "Our Process Material Flow Consulting and Material Handling Consulting services turn operational challenges into competitive advantages. Let's streamline your workflows, optimize material movement, and achieve lasting excellence.",





                    }} border={"border-none"} />


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

