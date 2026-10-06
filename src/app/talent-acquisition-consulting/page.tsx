import { Metadata } from "next";

import ConsultingNavbar from '@/components/ConsultingNavbar';
import CapabilitiesHeader from '@/components/CapabilitiesHeader';
import Image from 'next/image';
// import CapabilitiesHeader2 from '../components/CapabilitiesHeader2.jsx';
// import CapabilitiesContent1 from '../components/CapabilitiesContent1.jsx';
import CapabilitiesContent2 from '@/components/CapabilitiesContent2';
// import CapabilitiesContent3 from '../components/CapabilitiesContent3.jsx';
// import CapabilitiesContent4 from '../components/CapabilitiesContent4.jsx';
// import CapabilitiesContent5 from '../components/CapabilitiesContent5.jsx';

import Footer from '@/components/Footer';
// import vid1 from "/assets/images/People Skilling Header Video.mp4";
import AboutVideo from '@/components/AboutVideo';
import HelpYou from '@/components/HelpYou';
import BaseUrl from '@/components/BaseUrl'
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
import { getImageAltText, fetchMetaDataByPageName, getWebBlogs, getDataByPageName, filterByWebImage, getImageData, getTestimonialsByPageName, getEventByPageName } from "@/common/api";
import type { PageMetaDataResponse } from "@/common/types";

const title = "Talent Acquisition";
let PageMetadata: PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
    PageMetadata = await fetchMetaDataByPageName({ pageName: "Talent Acquisition" });
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
                `${BaseUrl().mainurl}talent-acquisition-consulting`
        },

    };
}

// import SlidingBlogs from '../components/SlidingBlogs.jsx';
// import VideoPlayer from '../components/VideoPlayer.jsx';
// import Imagetemplate from '../components/Imagesliders.jsx';
export default async function GrowthMarketingAndSales() {
    const arr = ["Why Choose Madasky Consulting.png", "Our Talent Acquisition Process.png", "Industry we serve.png"];


    let images;
    let blogData;
    let videoData;
    let galleryData;
    let testimonialData;
    let eventData;
    let serverError = false;

    try {
        images = await getImageAltText(arr);
        blogData = await getDataByPageName(["Talent Acquisition", "blogs"]);
        videoData = await getDataByPageName(["Talent Acquisition", "videos"]);
        galleryData = await getDataByPageName(["Talent Acquisition", "gallery"]);
        testimonialData = await getTestimonialsByPageName("Talent Acquisition");
        eventData = await getEventByPageName("Talent Acquisition");

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
                url='/people'
                title={'People'}
                navItems={[
                    { title: 'Talent Acquisition', link: '/talent-acquisition-consulting' },
                    { title: 'People - Skilling', link: '/people-skilling-consulting' },



                ]}
            />

            <AboutVideo vid1={"/assets/videos/People Skilling Header Video.mp4"} title={title} des={"Creating and accelerating critical advantages through cutting-edge strategy and operations"} h1={PageMetadata?.data?.h1tag} />



            <div className='w-[80vw] bg-white mx-auto'>

                <div className='w-full my-20'>

                    <CapabilitiesHeader details1={{
                        heading1: "Talent Acquisition",
                        paragraph1: "Powering Your Business with the Right Talent",
                        paragraph2: "At Madasky Consulting, we understand that the right people drive business success. With our deep industry expertise, global talent network, and data-driven recruitment approach, we help organizations attract, hire, and retain high-performing professionals who align with their vision and business goals.",
                        paragraph3: "Our People - Talent Acquisition vertical is designed to cater to companies across diverse industries, ensuring they have access to top-tier talent with the right skills, experience, and cultural fit. Whether you need executives, mid-level professionals, or specialized experts, we bridge the gap between high-potential candidates and organizations striving for growth and innovation.",



                    }} border={"border-b"} />



                    <CapabilitiesContent2 details1={{
                        heading1: "Why Choose Madasky Consulting for Talent Acquisition?",
                        // heading2: "At Madasky Consulting, we understand the unique challenges of manpower planning in manufacturing and deliver customized solutions to address your specific needs. Here's how we can help:",


                        data:
                            [
                                {
                                    data1: "Industry-Specific Expertise",
                                    data2: "We leverage our deep-rooted experience across manufacturing, e-commerce, fashion & jewelry, construction real estate, tourism, and IT to find candidates who not only meet the job criteria but thrive in the industry's unique demands.",
                                },
                                {
                                    data1: "Extensive Talent Database & Network",
                                    data2: "Our rich talent pool includes pre-vetted, experienced professionals who are either actively seeking opportunities or open to the right offer.",
                                },

                                {
                                    data1: "Proven Recruitment Framework",
                                    data2: "From role profiling to onboarding, we ensure a structured, transparent, and result-driven hiring process that minimizes time-to-hire while maximizing quality.",
                                },



                            ],

                        data2: [
                            {
                                data1: " Customized Talent Solutions",
                                data2: "Every business is unique, and so are its hiring needs. We tailor our approach based on your organizational goals, growth stage, and workforce strategy.",
                            },
                            {
                                data1: "End-to-End Talent Lifecycle Management",
                                data2: "Beyond recruitment, we support organizations with induction, training, performance evaluation, and retention strategies to help talent deliver measurable business impact.",
                            },



                        ],





                        imgSrc: `Why Choose Madasky Consulting.png`,
                        altText: imgAltText[0],
                        calendarButton: true,
                        btnText: "Plan Your Consultation",



                    }} border={"border-b"} />


                    <div className={`flex w-full pb-8 mt-20 border-b border-gray-300`}>

                        <div className='flex flex-col w-full gap-8'>

                            <div className='text-black font-bold text-4xl max-md:text-3xl leading-[1]'>
                                <h2>Our Talent Acquisition Process</h2>

                            </div>


                            <div className='hidden w-full rounded-lg max-md:block'>
                                {/* <img
                                    src="/assets/images/Our Talent Acquisition Process.png"


                                    className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:mx-auto"
                                /> */}
                                <div className='relative w-[100%] min-h-[15rem]'>


                                    <Image
                                        fill
                                        alt=''
                                        src={`${BaseUrl().imgurl}/Our Talent Acquisition Process.png`}


                                        className="object-fill rounded-xl max-md:object-fit max-md:"
                                    />
                                </div>
                            </div>
                            {/* style={{ fontFamily: "Helvetica, Arial, sans-serif" }} */}
                            <div className='text-gray-500 text-[20px] font-extralight flex flex-col gap-4'  >

                                <p className='text-gray-700 max-md:text-justify'>We follow a strategic and data-backed approach to ensure you get the right people at the right time.</p>


                                <ul className='flex flex-col pl-5 text-justify list-disc'>


                                    <div className='grid grid-cols-2 max-md:grid-cols-1'>

                                        <div className='flex flex-col gap-4'>

                                            <ul className='list-disc'>

                                                <li className=''>
                                                    <p className='text-2xl font-semibold text-gray-600 max-md:text-xl'>Skill Requirement & Role Definition</p>

                                                    {/* <p className='font-normal text-gray-700'>Why Choose Madasky Consulting for Talent Acquisition</p> */}


                                                </li>
                                                <ul className='pl-8 list-disc max-md:px-6'>

                                                    <li className=''>
                                                        <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Understanding Business Needs: </span>We work closely with stakeholders to define the role, map key responsibilities, and establish success criteria.</p>
                                                    </li>

                                                    <li className=''>
                                                        <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Competency Framework: </span>We develop a detailed skills matrix covering technical expertise, leadership capabilities, and cultural fit.</p>
                                                    </li>


                                                </ul>
                                            </ul>

                                            <ul className='list-disc'>

                                                <li className=''>
                                                    <p className='text-2xl font-semibold text-gray-600 max-md:text-xl'>Talent Sourcing & Screening</p>

                                                    {/* <p className='font-normal text-gray-700'>Why Choose Madasky Consulting for Talent Acquisition</p> */}


                                                </li>
                                                <ul className='pl-8 list-disc max-md:px-6'>

                                                    <li className=''>
                                                        <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Multi-Channel Recruitment: </span>Leveraging our vast database, industry connections, targeted job postings, and AI-driven matching, we identify the best candidates.</p>
                                                    </li>

                                                    <li className=''>
                                                        <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Initial Screening & Evaluation: </span> We conduct structured interviews, skill assessments, and behavioral analysis to shortlist top contenders.</p>
                                                    </li>


                                                </ul>
                                            </ul>





                                        </div>




                                        <div className='flex items-center justify-center w-full rounded-lg max-md:hidden'>
                                            {/* <img
                                                src="/assets/images/Our Talent Acquisition Process.png"


                                                className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:"
                                            /> */}
                                            <div className='relative w-[80%] min-h-[15rem]'>


                                                <Image
                                                    fill
                                                    alt=''
                                                    src={`${BaseUrl().imgurl}/Our Talent Acquisition Process.png`}


                                                    className="object-cover rounded-xl max-md:object-fit max-md:"
                                                />
                                            </div>
                                        </div>

                                    </div>


                                    <div className='flex flex-col gap-4 mt-4'>




                                        <ul className='list-disc'>

                                            <li className=''>
                                                <p className='text-2xl font-semibold text-gray-600 max-md:text-xl'>Selection & Assessment</p>

                                                {/* <p className='font-normal text-gray-700'>Why Choose Madasky Consulting for Talent Acquisition</p> */}


                                            </li>
                                            <ul className='pl-8 list-disc max-md:px-6'>

                                                <li className=''>
                                                    <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Comprehensive Candidate Evaluation: </span> We ensure alignment with technical proficiency, role expectations, soft skills, and long-term organizational goals.</p>
                                                </li>

                                                <li className=''>
                                                    <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Client Interviews & Feedback Loop: </span>We coordinate with hiring teams, gather feedback, and refine selections for a perfect match.</p>
                                                </li>


                                            </ul>
                                        </ul>


                                        <ul className='list-disc'>

                                            <li className=''>
                                                <p className='text-2xl font-semibold text-gray-600 max-md:text-xl'>Offer Management & Onboarding</p>

                                                {/* <p className='font-normal text-gray-700'>Why Choose Madasky Consulting for Talent Acquisition</p> */}


                                            </li>
                                            <ul className='pl-8 list-disc max-md:px-6'>

                                                <li className=''>
                                                    <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Seamless Offer Negotiation: </span>We handle compensation discussions, expectations alignment, and final offer closures efficiently.</p>
                                                </li>

                                                <li className=''>
                                                    <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Induction & Integration Support: </span>From documentation to cultural assimilation, we ensure a smooth onboarding experience, setting up employees for success.</p>
                                                </li>


                                            </ul>
                                        </ul>


                                        <ul className='list-disc'>

                                            <li className=''>
                                                <p className='text-2xl font-semibold text-gray-600 max-md:text-xl'>Performance Monitoring & Retention</p>

                                                {/* <p className='font-normal text-gray-700'>Why Choose Madasky Consulting for Talent Acquisition</p> */}


                                            </li>
                                            <ul className='pl-8 list-disc max-md:px-6'>

                                                <li className=''>
                                                    <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Ongoing Performance Review: </span>We provide insights, training resources, and coaching support to ensure talent productivity.</p>
                                                </li>

                                                <li className=''>
                                                    <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Engagement & Retention Strategies: </span>We help businesses nurture talent through structured career progression plans, reducing attrition risks.</p>
                                                </li>


                                            </ul>
                                        </ul>



                                    </div>

                                </ul>


                            </div>

                            
                            <a rel="noopener noreferrer" href="https://calendar.app.google/UMVkRH1hG1f5nNcV7" target="_blank">
                                <button className="bg-[#E1340D] hover:bg-[#C02A0B] transition text-lg text-white font-semibold px-6 py-3 rounded-md shadow max-md:ml-6 max-md:text-base">
                                    Reserve Your Time
                                </button>
                            </a>

                        </div>

                    </div>


                    <CapabilitiesContent2 details1={{
                        heading1: "Industries We Serve",
                        heading2: "We specialize in sourcing, screening, and placing top talent across various industries, including:",


                        data:
                            [
                                {
                                    data1: "Manufacturing & Supply Chain",
                                    data2: "Engineers, production managers, quality control specialists, procurement experts.",
                                },
                                {
                                    data1: "E-commerce & Retail",
                                    data2: "Digital marketers, category managers, supply chain professionals.",
                                },

                                {
                                    data1: "IT & Digital Transformation",
                                    data2: "Software developers, data analysts, cybersecurity experts, cloud architects.",
                                },

                                {
                                    data1: "Fashion & Lifestyle",
                                    data2: "Brand managers, designers, merchandisers, retail strategists.",
                                },

                                {
                                    data1: "Construction & Real Estate",
                                    data2: "Project managers, architects, civil engineers, real estate consultants.",
                                },

                                {
                                    data1: "Tourism & Hospitality",
                                    data2: "Operations managers, sales leaders, customer experience professionals.",
                                },



                            ],

                        // data2: [
                        //     {
                        //         data1: " Customized Talent Solutions",
                        //         data2: "Every business is unique, and so are its hiring needs. We tailor our approach based on your organizational goals, growth stage, and workforce strategy.",
                        //     },
                        //     {
                        //         data1: "End-to-End Talent Lifecycle Management",
                        //         data2: "Beyond recruitment, we support organizations with induction, training, performance evaluation, and retention strategies to help talent deliver measurable business impact.",
                        //     },



                        // ],





                        imgSrc: `Industry we serve.png`,
                        altText: `${imgAltText[2]}`,
                        calendarButton: true,
                        btnText: "Book Your Session",



                    }} border={"border-b"} />





                    <CapabilitiesHeader details1={{
                        heading1: "Let's Build Your Dream Team",
                        paragraph1: "At Madasky Consulting, we don't just fill positions, we connect you with professionals who drive business excellence. Whether you're scaling operations, launching a new division, or seeking a transformational leader, we have the expertise and network to deliver.",
                        paragraph2: "Looking for top-tier talent? Let's talk!",
                        paragraph3: "Contact us today to start hiring.",




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

