import { Metadata } from "next";

import ConsultingNavbar from '@/components/ConsultingNavbar';
import CapabilitiesHeader from '@/components/CapabilitiesHeader';
import CapabilitiesHeader2 from '@/components/CapabilitiesHeader2';
import CapabilitiesContent1 from '@/components/CapabilitiesContent1';
import CapabilitiesContent2 from '@/components/CapabilitiesContent2';
import CapabilitiesContent3 from '@/components/CapabilitiesContent3';
import CapabilitiesContent4 from '@/components/CapabilitiesContent4';
import CapabilitiesContent5 from '@/components/CapabilitiesContent5';
import Image from 'next/image';
import Footer from '@/components/Footer';
// import vid1 from "/assets/images/People Skilling Header Video.mp4";
import AboutVideo from '@/components/AboutVideo';
import HelpYou from '@/components/HelpYou';
// import SlidingBlogs from '@/components/SlidingBlogs.jsx';
// import VideoPlayer from '@/components/VideoPlayer.jsx';
// import Imagetemplate from '@/components/Imagesliders.jsx';
import BaseUrl from '@/components/BaseUrl'
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
import { getImageAltText, fetchMetaDataByPageName, getWebBlogs, getDataByPageName, filterByWebImage, getImageData, getTestimonialsByPageName, getEventByPageName } from "@/common/api";
import type { PageMetaDataResponse } from "@/common/types";

const title = "People-Skilling";
let PageMetadata : PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
  PageMetadata = await fetchMetaDataByPageName({ pageName: "People - Skilling" });
  console.log("Metaas: ", PageMetadata);

  return {
    title: PageMetadata.data.meta_title,
    description: PageMetadata.data.meta_desc,
    keywords: PageMetadata.data.meta_keyword,
    authors: {
      name: `${PageMetadata?.data?.author || 'Madasky'}`,
      url: "https://madasky.com",
    },
    alternates:{
        canonical:
        `${BaseUrl().mainurl}people-skilling-consulting`
      },

  };
}

export default async function GrowthMarketingAndSales() {

    const arr = ["Why skilling matters.png", "Our Skilling Solution.png", "Key benefits Madasky skilling.png", "Industry we serve.png", "Success Stories.png"];


    let images;
    let blogData;
    let videoData;
    let galleryData;
    let testimonialData;
    let eventData;
    let serverError = false;

    try {
        images = await getImageAltText(arr);
        blogData = await getDataByPageName(["People - Skilling", "blogs"]);
        videoData = await getDataByPageName(["People - Skilling", "videos"]);
        galleryData = await getDataByPageName(["People - Skilling", "gallery"]);
        testimonialData = await getTestimonialsByPageName("People - Skilling");
        eventData = await getEventByPageName("People - Skilling");

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

            <AboutVideo vid1={"/assets/videos/People Skilling Header Video.mp4"} title={title} des={"Creating and accelerating critical advantages through cutting-edge strategy and operations"} h1={PageMetadata?.data?.h1tag}/>



            <div className='w-[80vw] bg-white mx-auto'>

                <div className='w-full my-20'>

                    <CapabilitiesHeader details1={{
                        heading1: "Madasky People - Skilling",
                        paragraph1: "Empowering the Workforce, Transforming the Future",
                        paragraph2: "At Madasky People - Skilling, we are committed to shaping a future-ready workforce through vocational training, upskilling, and workforce development programs. In today's fast-evolving global economy, organizations need skilled talent to stay competitive, and individuals require industry-relevant expertise to secure sustainable careers. We partner with governments, corporations, and educational institutions to design and implement high-impact skilling solutions that drive economic growth, job creation, and enterprise success.",
                        paragraph3: "With a focus on technical skills, soft skills, and digital learning, our programs bridge the gap between education and employment, ensuring that both employers and job seekers benefit from structured, hands-on training. Whether you are a corporate entity aiming to enhance employee efficiency or a government agency focused on large-scale workforce skilling, we deliver tailored solutions that yield measurable results. Our expertise in setting up skilling centers, designing industry-aligned training, and facilitating job placements makes us a trusted partner in nation-building and business transformation.",



                    }} border={"border-b"} />


                    <CapabilitiesHeader2 details1={{
                        heading1: "Why Skilling Matters?",
                        paragraph1: "In today's fast-evolving industries, skill gaps hinder growth. To remain competitive, organizations need a skilled and adaptable workforce. Our industry-driven skilling programs provide technical, vocational, and soft skills training, ensuring job readiness and career progression for individuals while enhancing operational efficiency for businesses.",
                        imgSrc: `Why skilling matters.png`,
                        altText: `${imgAltText[0]}`



                    }} border={"border-b"} />

                    <div className={`flex w-full pb-8 mt-20 border-b border-gray-300`}>

                        <div className='flex flex-col w-full gap-8'>

                            <div className='text-black font-bold text-4xl max-md:text-3xl leading-[1]'>
                                <h2>Our Skilling Solutions</h2>

                            </div>


                            {/* <div className='hidden w-full rounded-lg max-md:block'>
                                <img
                                    src="/assets/images/Our Skilling Solution.png"


                                    className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:mx-auto"
                                />
                            </div> */}

                            <div className='relative hidden max-md:block w-[80%] max-md:w-[100%] min-h-[15rem]'>

                                <Image
                                    fill
                                    alt={`${imgAltText[1]}`}
                                    src={`${BaseUrl().imgurl}/Our Skilling Solution.png`}


                                    className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:mx-auto"
                                />
                            </div>
                            {/* style={{ fontFamily: "Helvetica, Arial, sans-serif" }} */}
                            <div className='text-gray-500 text-[20px] font-extralight flex flex-col gap-4'  >

                                <p className='text-gray-700 max-md:text-justify'>We offer comprehensive skilling programs tailored for governments, corporates, and educational institutions:</p>


                                <ul className='flex flex-col pl-5 text-justify list-disc'>


                                    <div className='grid grid-cols-2 max-md:grid-cols-1'>

                                        <div className='flex flex-col gap-4'>

                                            <ul className='list-disc'>

                                                <li className=''>
                                                    <p className='text-2xl font-semibold text-gray-600 max-md:text-xl'>Workforce Development for Corporates</p>

                                                    {/* <p className='font-normal text-gray-700'>Why Choose Madasky Consulting for Talent Acquisition</p> */}


                                                </li>
                                                <ul className='pl-8 list-disc'>

                                                    <li className=''>
                                                        <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Customized Training Programs </span>aligned with industry demands</p>
                                                    </li>

                                                    <li className=''>
                                                        <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>On-the-job training </span>to improve workforce efficiency</p>
                                                    </li>

                                                    <li className=''>
                                                        <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Upskilling & reskilling initiatives </span>for digital transformation</p>
                                                    </li>

                                                    <li className=''>
                                                        <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Soft skills training </span>- communication, leadership, and teamwork</p>
                                                    </li>


                                                </ul>
                                            </ul>

                                            <ul className='list-disc'>

                                                <li className=''>
                                                    <p className='text-2xl font-semibold text-gray-600 max-md:text-xl'>Government Skilling & Vocational Training Initiatives</p>

                                                    {/* <p className='font-normal text-gray-700'>Why Choose Madasky Consulting for Talent Acquisition</p> */}


                                                </li>
                                                <ul className='pl-8 list-disc'>

                                                    <li className=''>
                                                        <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Public-Private Partnerships (PPPs) </span>for large-scale workforce development</p>
                                                    </li>

                                                    <li className=''>
                                                        <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Vocational training centers </span>for rural and urban employment generation</p>
                                                    </li>

                                                    <li className=''>
                                                        <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Industry-aligned certification programs </span>for better employability</p>
                                                    </li>

                                                    <li className=''>
                                                        <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Skill development </span>for marginalized communities</p>
                                                    </li>


                                                </ul>
                                            </ul>





                                        </div>




                                        <div className='flex items-center justify-center w-full rounded-lg max-md:hidden'>
                                            {/* <img
                                                src="/assets/images/Our Skilling Solution.png"


                                                className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:"
                                            /> */}
                                            <div className='relative w-[80%] min-h-[15rem]'>


                                                <Image
                                                    fill
                                                    alt=''
                                                    src={`${BaseUrl().imgurl}/Our Skilling Solution.png`}


                                                    className="object-cover rounded-xl max-md:object-fit max-md:"
                                                />
                                            </div>
                                        </div>

                                    </div>


                                    <div className='flex flex-col gap-4 mt-4'>




                                        <ul className='list-disc'>

                                            <li className=''>
                                                <p className='text-2xl font-semibold text-gray-600 max-md:text-xl'>Vocational Training & Skill Excellence Centers</p>

                                                {/* <p className='font-normal text-gray-700'>Why Choose Madasky Consulting for Talent Acquisition</p> */}


                                            </li>
                                            <ul className='pl-8 list-disc'>

                                                <li className=''>
                                                    <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Setting up </span>state-of-the-art skilling centers</p>
                                                </li>

                                                <li className=''>
                                                    <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Courses in </span>technical trades, including electrical, plumbing, automotive, and beauty therapy</p>
                                                </li>

                                                <li className=''>
                                                    <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Smart learning  </span>with digital tools & simulation-based training</p>
                                                </li>

                                                <li className=''>
                                                    <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Job placement </span>assistance & entrepreneurial mentoring</p>
                                                </li>


                                            </ul>
                                        </ul>

                                    </div>

                                </ul>


                            </div>

                        </div>

                    </div>


                    <CapabilitiesContent1 details1={{
                        heading1: "Key Benefits of Madasky People - Skilling",
                        // paragraph1: "If these challenges resonate with your experience, our Delivery Performance Program is designed to transform these obstacles into opportunities for growth and excellence.",


                        data:
                            [
                                {
                                    data1: "Industry-Relevant Training",
                                    data2: "Developed in collaboration with leading businesses",
                                },
                                {
                                    data1: "Certifications & Placement Support",
                                    data2: "Enabling career growth",
                                },
                                {
                                    data1: "Digital & Smart Learning",
                                    data2: "LMS, AR/VR-based immersive training",
                                },
                                {
                                    data1: "Monitoring & Evaluation",
                                    data2: "Data-driven performance tracking",
                                },
                                {
                                    data1: " Sustainability & Scalability",
                                    data2: "Designed for long-term impact",
                                },


                            ],

                        imgSrc: `Key benefits Madasky skilling.png`,
                        altText: `${imgAltText[2]}`



                    }} border={"border-b"} />


                    <div className={`flex w-full pb-8 mt-20 border-b border-gray-300 max-md:flex max-md:flex-col`}>

                        <div className='flex flex-col gap-8 w-[60%] max-md:w-full'>

                            <div className='text-black font-bold text-4xl max-md:text-3xl leading-[1]'>
                                <h2>Industries We Serve</h2>
                            </div>

                            <div className='w-[40%] max-md:w-[100%] rounded-lg hidden max-md:block'>
                                {/* <img
                                    src="/assets/images/Industry we serve.png"


                                    className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:mx-auto"
                                /> */}

                                <div className='relative w-[80%] max-md:w-[100%] min-h-[15rem]'>


                                    <Image
                                        fill
                                        alt=''
                                        src={`${BaseUrl().imgurl}/Industry we serve.png`}


                                        className="object-cover rounded-xl max-md:object-fit max-md:"
                                    />
                                </div>
                            </div>


                            <div className='text-gray-500 text-[20px] font-extralight flex flex-col gap-4 text-justify max-md:text-justify' style={{ fontFamily: "Helvetica, Arial, sans-serif" }} >


                                {/* <p className='text-gray-700'>Developed in collaboration with leading businesses</p> */}




                                <ul className='pl-5 list-disc'>



                                    <div className='grid grid-cols-2 max-md:grid-cols-1'>

                                        <div className='flex flex-col gap-4'>
                                            <li className=''>
                                                <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Manufacturing & Engineering</span></p>
                                            </li>

                                            <li className=''>
                                                <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Healthcare & Wellness</span></p>
                                            </li>

                                            <li className=''>
                                                <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Construction & Real Estate</span></p>
                                            </li>

                                            <li className=''>
                                                <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Financial Services</span></p>
                                            </li>

                                        </div>

                                        <div className='flex flex-col gap-4'>

                                            <li className=''>
                                                <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Retail & E-commerce</span></p>
                                            </li>

                                            <li className=''>
                                                <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Hospitality & Tourism</span></p>
                                            </li>

                                            <li className=''>
                                                <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'> Information Technology (IT)</span></p>
                                            </li>

                                        </div>

                                    </div>







                                </ul>


                                {/* <p className='text-gray-700'>{details1.paragraph2}</p>
                                    <p className='text-gray-700 mt-[-2vh]'>{details1.paragraph3}</p> */}



                            </div>

                        </div>

                        <div className='w-[40%] rounded-lg flex items-center justify-center max-md:hidden'>
                            {/* <img
                                src="/assets/images/Industry we serve.png"


                                className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:"
                            /> */}

                            <div className='relative w-[80%] min-h-[15rem]'>


                                <Image
                                    fill
                                    alt=''
                                    src={`${BaseUrl().imgurl}/Industry we serve.png`}


                                    className="object-fill rounded-xl max-md:object-fit max-md:"
                                />
                            </div>
                        </div>


                    </div>


                    <CapabilitiesContent5 details1={{
                        heading1: "Success Stories & Impact",
                        // paragraph1: "If these challenges resonate with your experience, our Delivery Performance Program is designed to transform these obstacles into opportunities for growth and excellence.",


                        data:
                            [
                                {
                                    data2: "100,000+ individuals trained across various industries",

                                },
                                {
                                    data2: "100% placement support for skill program graduates",

                                },
                                {
                                    data2: "Sustainable Growth for corporate partners investing in skilling",

                                },
                                {
                                    data2: "Increased workforce productivity through structured training",

                                },



                            ],

                        imgSrc: `${BaseUrl().imgurl}/Success Stories.png`,
                        altText: `${imgAltText[3]}`,



                    }} border={"border-b"} />


                    <CapabilitiesHeader details1={{
                        heading1: "Partner With Us for Workforce Transformation",
                        paragraph1: "We work with governments, businesses, and industry leaders to create future-ready talent. Whether you're looking to set up a vocational training center, upskill your employees, or implement large-scale workforce initiatives, Madasky People - Skilling has the expertise to deliver results.",
                        paragraph2: "Get in touch with us today to build a skilled, future-ready workforce.",
                        paragraph3: "Contact Us | info@madasky.com | www.madasky.com",




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

