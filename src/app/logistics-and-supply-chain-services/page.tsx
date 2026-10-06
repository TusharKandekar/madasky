import { Metadata } from 'next';
import ConsultingNavbar from '@/components/ConsultingNavbar';
import CapabilitiesHeader from '@/components/CapabilitiesHeader';
// import CapabilitiesHeader2 from '@/components/CapabilitiesHeader2';
import CapabilitiesContent1 from '@/components/CapabilitiesContent1';
// import CapabilitiesContent2 from '@/components/CapabilitiesContent2';
// import CapabilitiesContent3 from '@/components/CapabilitiesContent3';
import CapabilitiesContent4 from '@/components/CapabilitiesContent4';
// import CapabilitiesContent5 from '@/components/CapabilitiesContent5';

import Footer from '@/components/Footer';
// import vid1 from "/assets/images/Warehousing solutions.mp4";
import AboutVideo from '@/components/AboutVideo';
import HelpYou from '@/components/HelpYou';
import Image from 'next/image';
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
import BaseUrl from '@/components/BaseUrl';
import type { PageMetaDataResponse } from "@/common/types";

import { getImageAltText, getWebBlogs, getDataByPageName, fetchMetaDataByPageName, filterByWebImage, getImageData, getTestimonials, getTestimonialsByPageName, getEventByPageName } from "@/common/api";
import FaqComponent from '@/components/FaqComponent';

type Faq = {
    question: string;
    answer: string;
};
const title = "Logistics and Supply Chain Services";
let PageMetadata: PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
    PageMetadata = await fetchMetaDataByPageName({ pageName: "Logistics and Supply Chain Services" });
    // console.log("Metaas: ", PageMetadata);

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
                `${BaseUrl().mainurl}logistics-and-supply-chain-services`
        },

    };
}

import ServerError from '@/components/ServerError';
export default async function GrowthMarketingAndSales() {
    const arr = ["Key Challenges.png", "Why Choose Madasky Consulting.png", "Our 4-Step Engagement Process.png", "SolutionsWeWorkWith.png"];


    let images;
    let blogData;
    let videoData;
    let galleryData;
    let testimonialData;
    let eventData;
    let serverError = false;

    try {
        images = await getImageAltText(arr);
        blogData = await getDataByPageName(["Logistics and Supply Chain Services", "blogs"]);
        videoData = await getDataByPageName(["Logistics and Supply Chain Services", "videos"]);
        galleryData = await getDataByPageName(["Logistics and Supply Chain Services", "gallery"]);
        testimonialData = await getTestimonialsByPageName("Logistics and Supply Chain Services");
        eventData = await getEventByPageName("Logistics and Supply Chain Services");

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
            question: `How can I make my supply chain more resilient to global disruptions?`,
            answer: `You can build a more resilient supply chain by using risk management strategies, diversifying suppliers, and integrating tools like AI and blockchain. Madasky Consulting helps you design custom frameworks to handle disruptions effectively.`
        },
        {
            question: `What is supply chain risk management and why do manufacturers need it?`,
            answer: `Supply chain risk management identifies and addresses potential disruptions like material shortages or geopolitical issues to keep production running smoothly. It's essential for maintaining efficiency and customer trust.`
        },
        {
            question: `How does logistics supply chain consulting improve business performance?`,
            answer: `Logistics supply chain consulting helps businesses streamline operations, improve delivery speed, manage inventory better, and adapt to demand changes leading to higher efficiency and customer satisfaction.`
        },
        {
            question: `What are the benefits of using AI and blockchain in supply chain management?`,
            answer: `AI improves forecasting accuracy and planning, while blockchain adds transparency and traceability. Madasky Consulting uses both to future-proof your logistics and supply chain systems.`
        },
        {
            question: `How can manufacturers make their supply chains more sustainable?`,
            answer: `Manufacturers can adopt eco-friendly practices like optimized transport routes, waste reduction, and greener sourcing. Madasky Consulting offers sustainability roadmaps aligned with modern supply chain goals.`
        },
    ];
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

                    <CapabilitiesHeader details1={{
                        heading1: "Supply Chain and Logistics Transformation",
                        paragraph1: "In the ever-evolving manufacturing industry, supply chain and logistics operations play a critical role in determining business success. With global disruptions, rising customer expectations, and increasing complexities, companies face significant challenges in maintaining efficiency, resilience, and profitability. Supply Chain Consulting Firms like Madasky Consulting specialize in turning these challenges into opportunities through Logistics Supply Chain Consulting expertise and Supply Chain Risk Management strategies.",




                    }} border={"border-b"} />




                    {/* Key Challenges Faced by the Manufacturing Industry  */}
                    <div className={`flex w-full pb-8 mt-20 border-b border-gray-300`}>

                        <div className='flex flex-col w-full gap-8'>

                            <div className='text-black font-bold text-4xl max-md:text-3xl leading-[1]'>
                                <h2>Key Challenges Faced by the Manufacturing Industry</h2>

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

                                {/* <p className='text-gray-700'>heading2w22</p> */}


                                <ul className='flex flex-col pl-5 text-left list-disc'>


                                    <div className='grid grid-cols-2 max-md:grid-cols-1'>

                                        <div className='flex flex-col gap-4'>

                                            <div className='flex flex-col gap-2' key='outer-list'>

                                                <div className=''>
                                                    <p className='text-2xl font-bold text-gray-800'>From the Supplier's Perspective:</p>

                                                    {/* <p className='font-normal text-gray-700'>mainSubheading1</p> */}


                                                </div>
                                                <ul className='pl-8 leading-[24px] list-disc'>

                                                    <li className=''>
                                                        <p className='mb-2 font-normal text-gray-700'><span className='font-semibold text-gray-600'>Raw Material Availability: </span>Supply chain disruptions require robust Supply Chain Risk Management to stabilize production.</p>

                                                    </li>

                                                    <li className=''>
                                                        <p className='mb-2 font-normal text-gray-700'><span className='font-semibold text-gray-600'>Global Dependencies: </span>Mitigate geopolitical risks with frameworks from Supply Chain Consulting experts.</p>

                                                    </li>


                                                </ul>

                                                <div className=''>
                                                    <p className='text-2xl font-bold text-gray-800'>From the Customer's Perspective::</p>

                                                    {/* <p className='font-normal text-gray-700'>mainSubheading1</p> */}


                                                </div>
                                                <ul className='pl-8 leading-[24px] list-disc'>

                                                    <li className=''>
                                                        <p className='mb-2 font-normal text-gray-700'><span className='font-semibold text-gray-600'>Demand Fluctuations: </span>Logistics Supply Chain Consulting enables agile responses to volatile markets.</p>

                                                    </li>

                                                    <li className=''>
                                                        <p className='mb-2 font-normal text-gray-700'><span className='font-semibold text-gray-600'>Sustainability Demands: </span>Align operations with eco-friendly practices through Supply Chain Consulting roadmaps.
                                                        </p>
                                                    </li>


                                                </ul>
                                            </div>

                                        </div>




                                        <div className='flex items-center justify-center w-full rounded-lg max-md:hidden'>
                                            <div className='relative w-[65%] min-h-[30vh] max-h-[16rem]'>

                                                <Image
                                                    fill
                                                    src={"/assets/images/Key Challenges.png"}
                                                    alt={`amf`}



                                                    className="object-cover rounded-xl max-md:object-fit max-md:"
                                                />
                                            </div>
                                        </div>

                                    </div>










                                </ul>


                            </div>

                        </div>

                    </div>




                    {/* Madasky Consulting's Approach to Overcome Challenges  */}
                    <div className={`flex w-full leading-[24px] pb-8 mt-20 border-b border-gray-300`}>

                        <div className='flex flex-col w-full gap-8'>

                            <div className='text-black font-bold text-4xl max-md:text-3xl leading-[1]'>
                                <h2>Madasky Consulting's Approach to Overcome Challenges</h2>

                            </div>
                            {/* style={{ fontFamily: "Helvetica, Arial, sans-serif" }} */}
                            <div className='text-gray-500 text-[20px] font-extralight text-justify flex flex-col gap-4'  >

                                <div className='hidden w-full rounded-lg max-md:block'>
                                    {/* <img
                                        src='/assets/images/tempImage2.png'


                                        className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:mx-auto"
                                    /> */}

                                    <div className='relative w-[80%] h-[15rem] mx-auto'>

                                        <Image
                                            fill
                                            src={`${BaseUrl().imgurl}Our 4-Step Engagement Process.png` ? `${BaseUrl().imgurl}Our 4-Step Engagement Process.png` : "/assets/images/default-featured-image.jpg"}
                                            alt={`${imgAltText[2] ? imgAltText[2] : "Madasky Consulting"}`}



                                            className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:"
                                        />
                                    </div>
                                </div>

                                <p className='text-gray-700'>Our Supply Chain Consulting methodology blends industry expertise with innovative tools to drive resilience and growth:</p>




                                <ul className='flex flex-col pl-5 text-justify list-disc'>


                                    <div className='grid grid-cols-2 max-md:grid-cols-1'>

                                        <div className='flex flex-col gap-4'>

                                            <ul className='flex flex-col gap-2'>

                                                <li className=''>
                                                    <p className='text-2xl font-semibold text-gray-800'>4-Step Engagement Process:</p>
                                                </li>
                                                <ul className='flex flex-col gap-2 pl-8 list-disc'>

                                                    <li className=''>
                                                        <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Diagnostic Analysis: </span>Identify inefficiencies in logistics, procurement, and Supply Chain Risk Management.</p>
                                                    </li>


                                                    <li className=''>
                                                        <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Customized Framework Development: </span>Deploy solutions like supplier performance metrics and inventory segmentation models.</p>
                                                    </li>

                                                    <li className=''>
                                                        <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Implementation Facilitation: </span>Integrate AI, IoT, and blockchain with Logistics Supply Chain Consulting support.</p>
                                                    </li>

                                                    <li className=''>
                                                        <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Performance Monitoring: </span>Ensure continuous improvement through adaptive strategies.</p>
                                                    </li>




                                                </ul>
                                            </ul>





                                        </div>




                                        <div className='flex items-center justify-center w-full rounded-lg max-md:hidden'>
                                            {/* <img
                                                src='/assets/images/Our 4-Step Engagement Process.png'


                                                className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:"
                                            /> */}

                                            <div className='relative w-[80%] h-[40vh]'>

                                                <Image
                                                    fill
                                                    src={`${BaseUrl().imgurl}Our 4-Step Engagement Process.png` ? `${BaseUrl().imgurl}Our 4-Step Engagement Process.png` : "/assets/images/default-featured-image.jpg"}
                                                    alt={`${imgAltText[2] ? imgAltText[2] : "Madasky Consulting"}`}



                                                    className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:"
                                                />
                                            </div>
                                        </div>

                                    </div>


                                    <div>



                                        {/* {
                                            details1.mainHeading2 &&
                                            <ul className='mt' key='outer-list'>

                                                <li className=''>
                                                    <p className='text-2xl font-semibold text-gray-600'>{details1.mainHeading2}</p>
                                                    {
                                                        details1.mainSubheading2 &&
                                                        <p className='font-normal text-gray-700'>{details1.mainSubheading2}</p>

                                                    }
                                                </li>
                                                <ul className='pl-8 list-disc'>
                                                    {
                                                        details1.data2.map((item, index) => (
                                                            <li className='' key={index}>
                                                                <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>{item.data1}: </span>{item.data2}</p>
                                                            </li>
                                                        )
                                                        )}

                                                </ul>
                                            </ul>

                                        } */}

                                    </div>








                                </ul>


                            </div>

                        </div>

                    </div>


                    <CapabilitiesContent1 details1={{
                        heading1: "Frameworks and Solutions We Work With",
                        // paragraph2: "At Madasky Consulting, we resonate with these challenges because we've solved them time and again for our clients. Our tailored plant layout solutions are designed to address these pain points and transform manufacturing spaces into hubs of efficiency and innovation.",


                        data:
                            [
                                {
                                    data1: "End-to-End Visibility",
                                    data2: "Real-time monitoring tools for transparency, a hallmark of leading Supply Chain Consulting Firms.",
                                },
                                {
                                    data1: "Lean & Agile Frameworks",
                                    data2: "Reduce waste and enhance flexibility using Logistics Supply Chain Consulting insights.",
                                },
                                {
                                    data1: "Digital Transformation",
                                    data2: "AI-driven forecasting and blockchain traceability.",
                                },
                                {
                                    data1: "Sustainability Roadmaps",
                                    data2: "Eco-friendly practices aligned with Supply Chain Risk Management goals.",
                                },



                            ],

                        imgSrc: "SolutionsWeWorkWith.png",
                        altText: imgAltText[3],




                    }} border={"border-b"} />


                    <CapabilitiesContent1 details1={{
                        heading1: "Why Choose Madasky Consulting as Your Supply Chain Partner?",
                        // paragraph2: "At Madasky Consulting, we resonate with these challenges because we've solved them time and again for our clients. Our tailored plant layout solutions are designed to address these pain points and transform manufacturing spaces into hubs of efficiency and innovation.",


                        data:
                            [
                                {
                                    data1: "Proven Expertise",
                                    data2: "As trusted Supply Chain Consulting advisors, we deliver cost savings, efficiency, and customer satisfaction.",
                                },
                                {
                                    data1: "Risk Mitigation",
                                    data2: "Strengthen resilience with Supply Chain Risk Management strategies for supplier dependencies and disruptions.",
                                },
                                {
                                    data1: "Tailored Solutions",
                                    data2: "Custom frameworks designed by Logistics Supply Chain Consulting experts.",
                                },
                                {
                                    data1: "Sustainability & Innovation",
                                    data2: "Future-proof operations with cutting-edge tools and green practices.",
                                },



                            ],

                        imgSrc: "Why Choose Madasky Consulting.png",
                        altText: imgAltText[1],
                        calendarButton: true,
                        btnText: "Book Your Free Strategy Call",



                    }} border={"border-b"} />


                    <CapabilitiesHeader details1={{
                        heading1: "Transform Your Supply Chain Today",
                        paragraph1: "Partner with Madasky Consulting, a leader among Supply Chain Consulting Firms, to build a resilient, agile, and customer-centric supply chain. Our Logistics Supply Chain Consulting and Supply Chain Risk Management expertise will help you reduce costs, meet evolving demands, and achieve sustainable growth.",
                        paragraph2: "Let's future-proof your supply chain connect with us now!",




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

