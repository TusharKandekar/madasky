import { Metadata } from "next";

import ConsultingNavbar2 from '@/components/ConsultingNavbar2';
import CapabilitiesHeader from '@/components/CapabilitiesHeader';
// import CapabilitiesHeader2 from '@/components/CapabilitiesHeader2';
// import CapabilitiesContent1 from '@/components/CapabilitiesContent1';
import CapabilitiesContent2 from '@/components/CapabilitiesContent2';
// import CapabilitiesContent3 from '@/components/CapabilitiesContent3';
// import CapabilitiesContent4 from '@/components/CapabilitiesContent4';
import Banner2 from "@/components/Banner2";
import Footer from '@/components/Footer';
// import vid1 from "/assets/images/GROWTH MARKETING AND SALES69.mp4";

import HelpYou from '@/components/HelpYou';
import BaseUrl from '@/components/BaseUrl'
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
import { getImageAltText,fetchMetaDataByPageName,  getWebBlogs, getDataByPageName, filterByWebImage, getImageData, getTestimonialsByPageName, getEventByPageName } from "@/common/api";
import type { PageMetaDataResponse } from "@/common/types";


const title = "Packaging and Paper";
let PageMetadata : PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
  PageMetadata = await fetchMetaDataByPageName({ pageName: "Packaging and Paper" });
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
        `${BaseUrl().mainurl}packaging-and-paper`
      },

  };
}

// import SlidingBlogs from '../components/SlidingBlogs.jsx';
// import VideoPlayer from '../components/VideoPlayer.jsx';
// import Imagetemplate from '../components/Imagesliders.jsx';
export default async function GrowthMarketingAndSales() {

    const arr = ["Packaging & Paper Industry Header.png", "Key Challenges.png", "What we do_.png", "Packaging and Paper Segments We Support.png"];


   let images;
   let blogData;
    let videoData;
    let galleryData;
    let testimonialData;
    let eventData;
  let serverError = false;

  try {
    images = await getImageAltText(arr);
    blogData = await getDataByPageName(["Packaging and Paper", "blogs"]);
    videoData = await getDataByPageName(["Packaging and Paper", "videos"]);
    galleryData = await getDataByPageName(["Packaging and Paper", "gallery"]);
    testimonialData = await getTestimonialsByPageName("Packaging and Paper");
    eventData = await getEventByPageName("Packaging and Paper");

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


            <ConsultingNavbar2
                url='/packaging-and-paper'
                title={'Packaging & Paper'}

            />
            {/* <AboutVideo vid1={vid1} title={"Madasky"} des={"Creating and accelerating critical advantages through cutting-edge strategy and operations"} /> */}

            <Banner2
                // img="bg-[url('/assets/images/Solutionheader.png')]"
                img={`${BaseUrl().imgurl}/Packaging & Paper Industry Header .png`}
                altText={imgAltText[0]}
                title='Packaging & Paper'
                h1={PageMetadata?.data?.h1tag}
                // position="bg-top"
            />

            <div className='w-[80vw] bg-white mx-auto'>

                <div className='w-full my-20'>

                    <CapabilitiesHeader details1={{
                        heading1: "Packaging and Paper Industry",
                        paragraph1: "Madasky Consulting understands the dynamic and ever-evolving landscape of the packaging and paper industry. We recognize the critical importance of this sector in global supply chains, consumer engagement, and environmental sustainability. Our commitment is to help businesses in this industry navigate complex challenges and capitalize on emerging opportunities through innovation, operational excellence, and sustainable practices.",
                        // paragraph2: "As businesses expand, the complexity of managing working capital grows, leading to increased financial stress, strained vendor relationships, and missed opportunities for reinvestment. Without an optimized strategy, manufacturers may find themselves constantly firefighting liquidity issues rather than strategically driving growth.",
                        // paragraph3: "This is not just about quick fixes, it's about creating a sustainable, cash-positive business that thrives in any market condition.",




                    }} border={"border-b"} />




                    <CapabilitiesContent2 details1={{
                        heading1: "Key Challenges Faced by the Industry",
                        heading2: "Packaging and paper companies encounter numerous challenges, including:",
                        // paragraph1: "Our Expertise Areas Include:",
                        // heading3: "Partner with Madasky Consulting to turn uncertainty into strategic advantage, ensuring continued resilience and growth.",
                        // heading4: "When you partner with us, you gain more than just solutions you gain a trusted advisor committed to your success. Let's turn your financial challenges into opportunities and position your business for sustainable growth. Ready to accelerate your cash flow? Let's talk.",


                        data:
                            [
                                {
                                    data1: "Sustainability Pressures",
                                    data2: "Increasing demands for eco-friendly materials and practices driven by consumer preferences and regulatory standards.",
                                },
                                {
                                    data1: "Cost Management",
                                    data2: "Rising material and operational costs affecting profitability.",
                                },

                                {
                                    data1: "Technological Advancements",
                                    data2: "The need for continuous investment in technology to enhance efficiency, digitalization, and smart packaging solutions.",
                                },
                                {
                                    data1: "Regulatory Compliance",
                                    data2: "Strict environmental regulations requiring companies to adapt and ensure compliance.",
                                },

                                {
                                    data1: "Competitive Market",
                                    data2: "Growing competition from new entrants and alternative packaging solutions.",
                                },




                            ],

                        // data2: [



                        //     {
                        //         data1: "Operational Efficiency",
                        //         data2: "Optimizing supply chains, reducing costs, and improving production processes.",
                        //     },
                        //     {
                        //         data1: "Advanced Analytics",
                        //         data2: "Data-driven insights to forecast trends, optimize pricing, and enhance decision-making.",
                        //     },


                        // ],





                    imgSrc: `/Key Challenges.png`,
                    altText: imgAltText[1],




                    }} border={"border-b"} />

                    <CapabilitiesContent2 details1={{
                        heading1: "How We Help Our Clients",
                        heading2: "At Madasky Consulting, we offer comprehensive, customized solutions to help packaging and paper companies overcome these challenges and achieve sustained growth:",
                        // paragraph1: "Our Expertise Areas Include:",
                        // heading3: "Partner with Madasky Consulting to turn uncertainty into strategic advantage, ensuring continued resilience and growth.",
                        // heading4: "When you partner with us, you gain more than just solutions you gain a trusted advisor committed to your success. Let's turn your financial challenges into opportunities and position your business for sustainable growth. Ready to accelerate your cash flow? Let's talk.",


                        data:
                            [
                                {
                                    data1: "Sustainability Strategies",
                                    data2: "Implementing eco-friendly solutions, developing circular economy practices, and ensuring compliance with evolving environmental standards.",
                                },
                                {
                                    data1: "Operational Excellence",
                                    data2: "Enhancing production efficiency, optimizing supply chains, reducing costs, and improving overall productivity.",
                                },

                                {
                                    data1: "Digital Transformation",
                                    data2: "Integrating advanced digital technologies for smarter packaging, automation, and streamlined processes.",
                                },
                                {
                                    data1: "Market Expansion",
                                    data2: "Assisting in strategic market entry, product differentiation, and deeper consumer engagement.",
                                },

                              




                            ],

                        data2: [



                            {
                                data1: "Advanced Analytics",
                                data2: "Utilizing data-driven insights for demand forecasting, inventory optimization, and informed decision-making.",
                            },
                            {
                                data1: "Organizational Development",
                                data2: "Strengthening team structures, leadership capabilities, and cultivating a culture of continuous innovation and improvement.",
                            },


                        ],





                        imgSrc: `/What we do_.png`,
                        altText: imgAltText[2],



                    }} border={"border-b"} />


                    <CapabilitiesContent2 details1={{
                        heading1: "Packaging and Paper Segments We Support",
                        // heading2: "Partner with Madasky Consulting to effectively tackle industry challenges, drive innovation, and secure sustainable growth in the packaging and paper sector.",
                        // paragraph1: "Our Expertise Areas Include:",
                        heading3: "Partner with Madasky Consulting to effectively tackle industry challenges, drive innovation, and secure sustainable growth in the packaging and paper sector.",
                        // heading4: "When you partner with us, you gain more than just solutions you gain a trusted advisor committed to your success. Let's turn your financial challenges into opportunities and position your business for sustainable growth. Ready to accelerate your cash flow? Let's talk.",


                        data:
                            [
                                {
                                    data1: "Flexible Packaging",
                                    data2: "Sustainable materials, cost-effective solutions, and innovative design.",
                                },
                                {
                                    data1: "Corrugated Packaging",
                                    data2: "Improved strength, production efficiency, and logistics optimization.",
                                },

                                {
                                    data1: "Paperboard",
                                    data2: "Enhanced quality, lightweight innovations, and expanded market opportunities.",
                                },
                                {
                                    data1: "Recyclable and Biodegradable Packaging",
                                    data2: "Pioneering eco-friendly innovations, compliance support, and consumer education.",
                                },
                                {
                                    data1: "Specialty Papers",
                                    data2: "Focus on product innovation, niche market growth, and advancements in digital printing.",
                                },
                                {
                                    data1: "Industrial Packaging",
                                    data2: "Durable, customized solutions ensuring supply chain efficiency.",
                                },





                            ],

                        // data2: [



                        //     {
                        //         data1: "Operational Efficiency",
                        //         data2: "Optimizing supply chains, reducing costs, and improving production processes.",
                        //     },
                        //     {
                        //         data1: "Advanced Analytics",
                        //         data2: "Data-driven insights to forecast trends, optimize pricing, and enhance decision-making.",
                        //     },


                        // ],





                        imgSrc: `/Packaging and Paper Segments We Support.png`



                    }} border={"border-none"} />


                    {/* <CapabilitiesHeader2 details1={{
                        heading1: "How We Help You Navigate and Capitalize on India's Business Potential",
                        paragraph1: "Our consulting expertise ensures a structured approach to entering and scaling in the Indian manufacturing sector. We provide end-to-end strategy, market intelligence, and execution support to help businesses build a strong foundation in India.",
                        imgSrc: "/assets/images/398.png",


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

