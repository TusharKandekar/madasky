import { Metadata } from 'next';
import ConsultingNavbar from '@/components/ConsultingNavbar';
import Footer from '@/components/Footer';
import AboutVideo from '@/components/AboutVideo';
import CapabilitiesMainCard2 from '@/components/CapabilitiesMainCard2';
import HelpYou from '@/components/HelpYou';
// import SlidingBlogs from '../components/SlidingBlogs';
// import VideoPlayer from '../components/VideoPlayer';
// import Imagetemplate from '../components/Imagesliders';
// import { GoDotFill } from "react-icons/go";
// import { Link } from "react-router-dom"
import BaseUrl from '@/components/BaseUrl';
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
import type { PageMetaDataResponse } from "@/common/types";

import { getImageAltText, getWebBlogs, fetchMetaDataByPageName, getDataByPageName, filterByWebImage, getImageData, getTestimonialsByPageName, getEventByPageName } from "@/common/api";
import ServerError from '@/components/ServerError';
const title = "Financial Strategy";
let PageMetadata: PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
    PageMetadata = await fetchMetaDataByPageName({ pageName: "Financial Strategy" });
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
                `${BaseUrl().mainurl}financial-strategy-consulting`
        },

    };
}

export default async function Project() {
    const arr = ["What we do_.png", "Key Challenges.png", "Tailored Solutions.png", "Financial Strategy.png"];


    // const images = await getImageAltText(arr);

    // if (!images || !images.success) {
    //     return <ServerError />
    // }

    let images;
    let blogData;
    let videoData;
    let galleryData;
    let testimonialData;
    let eventData;
    let serverError = false;

    try {
        images = await getImageAltText(arr);
        blogData = await getDataByPageName(["Financial Strategy", "blogs"]);
        videoData = await getDataByPageName(["Financial Strategy", "videos"]);
        galleryData = await getDataByPageName(["Financial Strategy", "gallery"]);
        testimonialData = await getTestimonialsByPageName("Financial Strategy");
        eventData = await getEventByPageName("Financial Strategy");

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
                url='/financial-strategy-consulting'
                title={'Financial Strategy'}
                navItems={[
                    { title: 'Rapid Cash Generation', link: '/rapid-cash-generation-consulting' },
                    { title: 'Performance Transformation', link: '/performance-transformation-consulting' },
                    { title: 'Cost Transformation', link: '/cost-transformation-consulting' },
                    { title: 'Working Capital Optimisation', link: '/working-capital-optimisation-consulting' },



                ]}
            />
            <AboutVideo
                vid1={"/assets/videos/Financial Performance and Cash Flow Management Program6969.mp4"}
                title={title}
                des={'Creating and accelerating critical advantages through cutting-edge strategy and operations'}
                pageName={"Project"}
                h1={PageMetadata?.data?.h1tag}
            />

            <div>

                <div className="px-4 mx-auto max-w-8xl Plant-Layout">
                    <CapabilitiesMainCard2
                        details1={{

                            // title: "Productivity and Efficiency Improvement: Unleashing Operational Excellence",
                            // des: `At Madasky Consulting, we understand that in today's dynamic business landscape, organizations must constantly adapt and evolve to maintain a competitive edge. Enhancing productivity and efficiency is not just about optimizing processes; it's about creating an ecosystem where people, systems, and strategies work cohesively to deliver outstanding performance. We partner with businesses to unlock their true potential through innovative solutions, expert insights, and a relentless focus on results.`,

                            updes: [
                                <div key={1} className="text-lg">



                                    <p className='flex max-md:text-3xl max-md:flex max-md:justify-center max-md:text-center  my-5 text-[45px] leading-10 font-bold text-gray-800 text-left'>Financial Strategy</p>

                                    <p className='py-1 pl-5 text-lg font-normal text-justify text-gray-500 max-md:pl-0'>Financial Strategy for Textile and Apparel Manufacturing: Overcoming Industry Challenges
                                        The textile and apparel industry operates in a dynamic and competitive environment where financial challenges significantly influence business sustainability and growth. At our consulting firm, we understand the complexities of managing costs, optimizing operations, and ensuring consistent cash flow in this fast-evolving sector. Through our tailored financial strategies, we help companies address these challenges, improve their financial health, and achieve long-term success.
                                    </p>







                                </div>

                            ],



                            img: 'Financial Strategy.png',
                            direction: '',
                            altText: imgAltText[3],
                        }}
                    />
                </div>

                <div className="px-4 mx-auto max-w-8xl Plant-Layout">
                    <CapabilitiesMainCard2
                        details1={{


                            updes: [
                                <div key={2} className="text-lg">



                                    <p className='flex max-md:text-3xl max-md:flex max-md:justify-center max-md:text-center my-5 text-[45px] leading-10 font-bold text-gray-800'>Key Financial Challenges Faced by the Industry</p>




                                    <ul className='pl-10 mt-4 text-justify list-disc max-md:px-2'>
                                        <li className='py-1 text-lg font-normal text-gray-500'>

                                            <p><span className='font-semibold'>Rising Costs of Raw Materials: </span>The volatility in prices of key materials like cotton and polyester creates significant unpredictability, impacting profit margins and supply chain stability.</p>

                                        </li>

                                        <li className='py-1 text-lg font-normal text-gray-500'>

                                            <p><span className='font-semibold'>Labor Costs and Workforce Shortages: </span>Increasing labor costs and a shrinking pool of skilled workers result in operational inefficiencies, higher training expenses, and slower production cycles.</p>

                                        </li>

                                        <li className='py-1 text-lg font-normal text-gray-500'>

                                            <p><span className='font-semibold'>Cash Flow Constraints: </span>Delayed receivables, extended payment terms, and high inventory levels tie up capital, leaving businesses struggling to fund daily operations.</p>

                                        </li>






                                    </ul>


                                    {/* <div className='pl-5 font-normal text-justify text-gray-500'>
                                        <p>If these challenges resonate with your experience, our Delivery Performance Program is designed to transform these obstacles into opportunities for growth and excellence.</p>
                                    </div> */}



                                </div>
                            ],


                            hdes: [

                                <div key={3} className='ml-[-10px]'>

                                    <ul className='pl-[10px] text-justify list-disc'>

                                        <li className='py-1 text-lg font-normal text-gray-500'>

                                            <p><span className='font-semibold'>Price Competition and Margin Pressures: </span>Intense global competition, especially with the rise of fast fashion, forces companies to cut prices while battling shrinking profit margins.</p>

                                        </li>

                                        <li className='py-1 text-lg font-normal text-gray-500'>

                                            <p><span className='font-semibold'>Working Capital Challenges: </span>Inefficient inventory management, coupled with long payment cycles, locks up critical cash needed for growth and expansion.</p>

                                        </li>
                                        <li className='py-1 text-lg font-normal text-gray-500'>

                                            <p><span className='font-semibold'>Energy and Utility Costs: </span>Energy-intensive processes like dyeing and finishing lead to escalating production costs, eroding profitability over time.</p>

                                        </li>


                                        <li className='py-1 text-lg font-normal text-gray-500'>

                                            <p><span className='font-semibold'>Technology Investment Gaps: </span>A lack of affordable access to cutting-edge technology and digital tools hinders productivity and limits competitiveness in the global market.</p>

                                        </li>


                                    </ul>


                                   


                                </div>


                            ],
                            img: 'Key Challenges.png',
                            direction: '',
                            altText: imgAltText[1],
                            

                        }}
                    />
                </div>

                <div className="px-4 mx-auto max-w-8xl Plant-Layout">
                    <CapabilitiesMainCard2
                        details1={{

                            updes: [
                                <div key={4} className="text-lg">



                                    <p className='flex max-md:text-3xl max-md:flex max-md:justify-center max-md:text-center my-5 text-[45px] leading-10 font-bold text-gray-800'>What We Do</p>

                                    <div className='pl-10 flex flex-col w-full gap-4 max-md:text-xl text-[24px] font-normal text-[#6B7280] font-times'>

                                        <ul className='flex flex-col gap-4 list-disc'>
                                            <li>
                                                <a href="./rapid-cash-generation">
                                                    {/* <Link to='/rapid-cash-generation'> */}
                                                    <p className='flex items-center font-semibold cursor-pointer hover:underline'>Rapid Cash Generation</p>
                                                    {/* </Link> */}
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./performance-transformation">

                                                    {/* <Link to='/performance-transformation'> */}
                                                    <p className='flex items-center font-semibold cursor-pointer hover:underline'>Performance Transformation - Implement initiatives to improve operational efficiency and financial performance.</p>
                                                    {/* </Link> */}
                                                </a>


                                            </li>
                                            <li>
                                                <a href="./cost-transformation">

                                                    {/* <Link to='/cost-transformation'> */}

                                                    <p className='flex items-center font-semibold cursor-pointer hover:underline'>Cost Transformation - Optimizing procurement, manufacturing, and overhead costs.</p>
                                                    {/* </Link> */}
                                                </a>


                                            </li>
                                            <li>
                                                <a href="./working-capital-optimisation">

                                                    {/* <Link to='/working-capital-optimisation'> */}

                                                    <p className='flex items-center font-semibold cursor-pointer hover:underline'>Working Capital Optimisation</p>
                                                    {/* </Link> */}
                                                </a>


                                            </li>

                                        </ul>






                                    </div>




                                    {/* 
                                                    <div className='grid grid-cols-2 gap-4 mt-16 text-2xl text-gray-500'>
                
                                                        <Link to='/productivity-and-efficiency-improvement'>
                                                            <p className='flex items-center gap-2 font-semibold cursor-pointer hover:underline'><GoDotFill className='text-[15px]' />Productivity & Efficiency Improvement
                                                            </p>
                                                        </Link>
                
                                                        <Link to='/delivery-performance-program'>
                                                            <p className='flex items-center gap-2 font-semibold cursor-pointer hover:underline'><GoDotFill className='text-[15px]' />Delivery Performance Program
                                                            </p>
                                                        </Link>
                
                                                        <Link to='/program-benefits'>
                                                            <p className='flex items-center gap-2 font-semibold cursor-pointer hover:underline'><GoDotFill className='text-[15px]' />Program Benefits</p>
                                                        </Link>
                
                
                                                    </div> */}





                                </div>

                            ],


                            // hdes: [

                            //     <div className='ml-[-10px]'>



                            //     </div>


                            // ],
                            img: 'What we do_.png',
                            direction: '',
                            altText: imgAltText[0],

                        }}
                    />
                </div>


                <div className="px-4 mx-auto max-w-8xl Plant-Layout">
                    <CapabilitiesMainCard2
                        details1={{


                            updes: [
                                <div key={5} className="text-lg">



                                    <p className='flex max-md:text-3xl max-md:flex max-md:justify-center max-md:text-center my-5 text-[45px] leading-10 font-bold text-gray-800'>Tailored Financial Solutions Offered by Our Consulting Firm</p>

                                    <p className='py-1 pl-5 text-lg font-normal text-justify text-gray-500 max-md:pl-0'>Our consulting solutions are designed to address these pain points, enabling textile and apparel manufacturers to optimize their financial performance and unlock new opportunities. Below are some highlights of our approach:</p>


                                    <ul className='pl-10 mt-4 text-justify list-disc max-md:px-2'>
                                        <li className='py-1 text-lg font-normal text-gray-500'>

                                            <p><span className='font-semibold'>Cash Flow Optimization: </span>Identify and resolve cash flow bottlenecks with effective receivables management, payment term adjustments, and cash flow forecasting models.</p>

                                        </li>

                                        <li className='py-1 text-lg font-normal text-gray-500'>

                                            <p><span className='font-semibold'>Cost Structure Analysis: </span>Analyze cost components across procurement, manufacturing, and overhead to identify inefficiencies and unlock cost-saving opportunities.</p>

                                        </li>





                                    </ul>



                                </div>
                            ],


                            hdes: [

                                <div key={6} className='ml-[-10px]'>

                                    <ul className='pl-[10px] text-justify list-disc'>

                                        <li className='py-1 text-lg font-normal text-gray-500'>

                                            <p><span className='font-semibold'>Inventory and Supply Chain Efficiency: </span>Enhance inventory turnover and streamline supply chain processes to free up working capital and improve liquidity.</p>

                                        </li>

                                        <li className='py-1 text-lg font-normal text-gray-500'>

                                            <p><span className='font-semibold'>Profit Margin Enhancement: </span>Develop strategies to optimize pricing, reduce operational waste, and increase value-added services, improving overall profitability.</p>

                                        </li>

                                        <li className='py-1 text-lg font-normal text-gray-500'>

                                            <p><span className='font-semibold'>Energy and Utility Management: </span>Introduce energy-efficient solutions and process optimizations to reduce utility costs and improve sustainability metrics.</p>

                                        </li>


                                        <li className='py-1 text-lg font-normal text-gray-500'>

                                            <p><span className='font-semibold'>Technology Integration: </span>Facilitate the adoption of ERP systems, automation, and analytics tools to enhance operational efficiency and financial decision-making.</p>

                                        </li>

                                        <li className='py-1 text-lg font-normal text-gray-500'>

                                            <p><span className='font-semibold'>Sustainability Cost Analysis: </span>Guide businesses in implementing sustainable practices and securing relevant certifications to reduce costs and access new markets.</p>

                                        </li>

                                        <li className='py-1 text-lg font-normal text-gray-500'>

                                            <p><span className='font-semibold'>Working Capital Improvement: </span>Implement strategies to balance receivables, payables, and inventory effectively, ensuring sufficient liquidity for business growth.</p>

                                        </li>

                                        <li className='py-1 text-lg font-normal text-gray-500'>

                                            <p><span className='font-semibold'>Financial Health Monitoring: </span>Provide tools and dashboards to track KPIs, ensuring consistent oversight of financial performance and enabling proactive adjustments.</p>

                                        </li>








                                    </ul>

                                    {/* <div className='mt-4 text-lg font-normal text-gray-500'>
                                        <p>
                                            This is just a glimpse of how we can partner with your business to achieve transformative growth. Let's explore how technology can reshape your manufacturing operations and make your business future-ready.

                                        </p>

                                    </div> */}




                                </div>


                            ],
                            img: 'Tailored Solutions.png',
                            direction: '',
                            altText: imgAltText[2],

                        }}
                    />
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
    );
}
