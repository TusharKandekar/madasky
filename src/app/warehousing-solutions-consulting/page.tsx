// import { useState } from 'react';
import { Metadata } from "next";
import ConsultingNavbar from "@/components/ConsultingNavbar";
import Footer from "@/components/Footer";
// import vid1 from "/assets/images/Warehousing solutions.mp4";
import AboutVideo from "@/components/AboutVideo";
import CapabilitiesMainCard2 from "@/components/CapabilitiesMainCard2";
// import TechnicalConsulting from '@/components/TechnicalConsulting';
// import ManpowerPlanning from '@/components/ManpowerPlanning';
// import ProcessFlow from '@/components/ProcessFlow';
// import MaterialFlow from '@/components/MaterialFlow';
// import WarehouseSolutions from '@/components/WarehouseSolutions';
import HelpYou from "@/components/HelpYou";
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
// import { GoDotFill } from "react-icons/go";
// import { Link } from "react-router-dom"
import BaseUrl from "@/components/BaseUrl";
import type { PageMetaDataResponse } from "@/common/types";
import FaqComponent from "@/components/FaqComponent";

type Faq = {
  question: string;
  answer: string;
};
import {
  getImageAltText,
  getWebBlogs,
  fetchMetaDataByPageName,
  getDataByPageName,
  filterByWebImage,
  getImageData,
  getTestimonials,
  getTestimonialsByPageName,
  getEventByPageName,
} from "@/common/api";
import ServerError from "@/components/ServerError";

const title = "Warehousing Solutions";
let PageMetadata: PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
  PageMetadata = await fetchMetaDataByPageName({
    pageName: "Warehousing Solutions",
  });
  // console.log("Metaas: ", PageMetadata);

  return {
    title: PageMetadata.data.meta_title,
    description: PageMetadata.data.meta_desc,
    keywords: PageMetadata.data.meta_keyword,
    authors: {
      name: `${PageMetadata?.data?.author || "Madasky"}`,
      url: "https://madasky.com",
    },
    alternates: {
      canonical: `${BaseUrl().mainurl}warehousing-solutions-consulting`,
    },
  };
}

export default async function Project() {
  const arr = [
    "What we do_.png",
    "Our Approach.png",
    "Warehousing solutions.png",
    "Poor warehousing challanges.png",
  ];

  let images;
  let blogData;
  let videoData;
  let galleryData;
  let testimonialData;
  let eventData;
  let serverError = false;

  try {
    images = await getImageAltText(arr);
    blogData = await getDataByPageName(["Warehousing Solutions", "blogs"]);
    videoData = await getDataByPageName(["Warehousing Solutions", "videos"]);
    galleryData = await getDataByPageName(["Warehousing Solutions", "gallery"]);
    testimonialData = await getTestimonialsByPageName("Warehousing Solutions");
    eventData = await getEventByPageName("Warehousing Solutions");
  } catch (error) {
    // console.error("Server Error:", error);
    serverError = true;
  }

  // console.log("Images", images);
  if (serverError) {
    return <div>Server Error</div>;
  }

  const imgAltText = await getImageData(images);
  // console.log("Image Alt Text", imgAltText);

  const faqs: Faq[] = [
    {
      question: `What are the common challenges of poor warehouse design?`,
      answer: `Poor warehouse design leads to inefficient space utilization, inventory mismanagement, delays in inbound/outbound processes, and limited scalability.`,
    },
    {
      question: `How can Madasky Consulting help optimize warehouse space?`,
      answer: `Madasky Consulting helps optimize warehouse space through custom facility layouts, maximizing vertical and horizontal space, and selecting the right material handling equipment.`,
    },
    {
      question: `What is a Warehouse Management System (WMS) and why is it important?`,
      answer: `A Warehouse Management System (WMS) helps manage inventory in real-time, improves order accuracy, and automates workflows to streamline warehouse operations.`,
    },
    {
      question: `How can automation improve warehouse efficiency?`,
      answer: `Automation tools like ASRS and AGVs integrate with warehouse management systems to enhance precision, speed, and overall operational efficiency.`,
    },
    {
      question: `How does Madasky Consulting ensure warehouse scalability?`,
      answer: `Madasky Consulting designs adaptable warehouse layouts that can accommodate future growth, ensuring smooth expansion without operational disruptions.`,
    },
  ];

  return (
    <>
      <ConsultingNavbar
        url="/warehousing-solutions-consulting"
        title={"Warehousing Solutions"}
        navItems={[
          {
            title: "Facility Design - Different types of Warehouses",
            link: "/facility-design",
          },
          {
            title: "Material Handling Equipment",
            link: "/material-handling-equipment",
          },
          {
            title: "Logistics and Supply Chain Services",
            link: "/logistics-and-supply-chain-services",
          },
        ]}
      />
      <AboutVideo
        vid1={"/assets/videos/Warehousing solutions.mp4"}
        title={title}
        des={
          "Creating and accelerating critical advantages through cutting-edge strategy and operations"
        }
        pageName={"Project"}
        h1={PageMetadata?.data?.h1tag}
      />

      <div>
        <div className="px-4 mx-auto max-w-8xl Plant-Layout">
          <CapabilitiesMainCard2
            details1={{
              updes: [
                <div key={1} className="text-lg text-justify">
                  <p className="flex max-md:text-3xl max-md:flex max-md:justify-center max-md:text-center my-5 text-[45px] leading-10 font-bold text-gray-800 text-left">
                    Warehousing Solutions
                  </p>

                  <p className="py-1 pl-5 text-lg font-normal text-gray-500 max-md:px-0">
                    Efficient Warehousing Solutions are the backbone of a
                    streamlined supply chain. Poorly designed warehouses lead to
                    bottlenecks, inefficiencies, and increased costs, disrupting
                    your business's growth. At Madasky Consulting, we specialize
                    in Warehousing Solutions that maximize space utilization,
                    integrate advanced Warehouse Management Systems, and enhance
                    operational efficiency through automation tailored to your
                    needs.
                  </p>
                </div>,
              ],

              // hdes: [

              //     <div className='ml-[-10px]'>

              //         <ul className="pl-7 list-disc">
              //             <li className='py-1 text-lg font-normal text-gray-500'>

              //                 <p><span className='font-semibold'>Storage and Inventory Management: </span>Optimizing storage areas and inventory processes to lower costs, improve accessibility, and prevent overstocking or shortages.</p>

              //             </li>

              //             <li className='py-1 text-lg font-normal text-gray-500'>

              //                 <p><span className='font-semibold'>Traffic Flow and Aisle Design: </span>Designing clear and organized pathways to eliminate congestion and improve overall movement within the facility.</p>

              //             </li>

              //             <li className='py-1 text-lg font-normal text-gray-500'>

              //                 <p><span className='font-semibold'>Material Flow Analysis: </span>Conducting regular assessments to identify inefficiencies and provide actionable insights for continuous improvement.</p>

              //             </li>

              //             <li className='py-1 text-lg font-normal text-gray-500'>

              //                 <p><span className='font-semibold'>Ergonomics and Safety Integration: </span>Prioritizing worker safety and comfort by incorporating ergonomic principles into the material flow design.</p>

              //             </li>

              //             <li className='py-1 text-lg font-normal text-gray-500'>

              //                 <p><span className='font-semibold'>Lean Manufacturing Principles: </span>Applying lean methodologies to eliminate waste, enhance resource utilization, and increase efficiency.</p>

              //             </li>

              //             <li className='py-1 text-lg font-normal text-gray-500'>

              //                 <p><span className='font-semibold'>Flexibility and Scalability: </span>Designing layouts that accommodate future expansion and adapt to changing business needs.</p>

              //             </li>

              //             <li className='py-1 text-lg font-normal text-gray-500'>

              //                 <p><span className='font-semibold'>Feedback and Continuous Improvement: </span>Engaging employees and supervisors to gather insights, monitor progress, and implement necessary adjustments for sustained optimization.</p>

              //             </li>

              //         </ul>

              //     </div>

              // ],
              img: "Warehousing solutions.png",
              direction: "",
              altText: imgAltText[2],
            }}
          />
        </div>

        <div className="px-4 mx-auto max-w-8xl Plant-Layout">
          <CapabilitiesMainCard2
            details1={{
              updes: [
                <div key={2} className="text-lg text-justify">
                  <p className="flex max-md:flex max-md:justify-center max-md:text-center max-md:text-3xl my-5 text-[45px] leading-10 font-bold text-gray-800 text-left">
                    Challenges of Poor Warehouse Design
                  </p>

                  {/* <p className='py-1 pl-5 text-lg font-normal text-gray-500'>Efficient warehousing is the backbone of a streamlined supply chain. Poorly designed warehouses lead to bottlenecks, inefficiencies, and increased costs, disrupting your business's growth. At Madasky Consulting, we specialize in designing tailored warehousing solutions that maximize space utilization, enhance efficiency, and seamlessly integrate automation to meet your business needs.</p> */}

                  <ul className="pl-4 list-disc max-md:px-0">
                    {/* <li className='text-xl font-bold text-gray-500'>Our Comprehensive Approach to Plant Layout Design</li> */}

                    <ul className="pl-5 list-disc max-md:px-2">
                      <li className="py-1 text-lg font-normal text-gray-500">
                        <p>
                          <span className="font-semibold">
                            Inefficient Space Utilization:{" "}
                          </span>
                          Wasted vertical/horizontal space inflates storage
                          costs.
                        </p>
                      </li>

                      <li className="py-1 text-lg font-normal text-gray-500">
                        <p>
                          <span className="font-semibold">
                            Inventory Mismanagement:{" "}
                          </span>
                          Lack of a Warehouse Management Solution leads to
                          misplaced stock and delayed orders.
                        </p>
                      </li>

                      <li className="py-1 text-lg font-normal text-gray-500">
                        <p>
                          <span className="font-semibold">
                            Inbound/Outbound Delays:{" "}
                          </span>
                          Unoptimized docking areas slow loading/unloading.
                        </p>
                      </li>

                      <li className="py-1 text-lg font-normal text-gray-500">
                        <p>
                          <span className="font-semibold">
                            Inadequate Scalability:{" "}
                          </span>
                          Inflexible layouts hinder growth.
                        </p>
                      </li>
                    </ul>
                  </ul>
                </div>,
              ],

              // hdes: [

              //     <div className='ml-[-10px]'>

              //         <ul className="pl-7 list-disc">
              //             <li className='py-1 text-lg font-normal text-gray-500'>

              //                 <p><span className='font-semibold'>Storage and Inventory Management: </span>Optimizing storage areas and inventory processes to lower costs, improve accessibility, and prevent overstocking or shortages.</p>

              //             </li>

              //             <li className='py-1 text-lg font-normal text-gray-500'>

              //                 <p><span className='font-semibold'>Traffic Flow and Aisle Design: </span>Designing clear and organized pathways to eliminate congestion and improve overall movement within the facility.</p>

              //             </li>

              //             <li className='py-1 text-lg font-normal text-gray-500'>

              //                 <p><span className='font-semibold'>Material Flow Analysis: </span>Conducting regular assessments to identify inefficiencies and provide actionable insights for continuous improvement.</p>

              //             </li>

              //             <li className='py-1 text-lg font-normal text-gray-500'>

              //                 <p><span className='font-semibold'>Ergonomics and Safety Integration: </span>Prioritizing worker safety and comfort by incorporating ergonomic principles into the material flow design.</p>

              //             </li>

              //             <li className='py-1 text-lg font-normal text-gray-500'>

              //                 <p><span className='font-semibold'>Lean Manufacturing Principles: </span>Applying lean methodologies to eliminate waste, enhance resource utilization, and increase efficiency.</p>

              //             </li>

              //             <li className='py-1 text-lg font-normal text-gray-500'>

              //                 <p><span className='font-semibold'>Flexibility and Scalability: </span>Designing layouts that accommodate future expansion and adapt to changing business needs.</p>

              //             </li>

              //             <li className='py-1 text-lg font-normal text-gray-500'>

              //                 <p><span className='font-semibold'>Feedback and Continuous Improvement: </span>Engaging employees and supervisors to gather insights, monitor progress, and implement necessary adjustments for sustained optimization.</p>

              //             </li>

              //         </ul>

              //     </div>

              // ],
              img: "Poor warehousing challanges.png",
              direction: "",
              altText: imgAltText[3],
              calendarButton: true,
              btnText: "Plan Your Consultation",
            }}
          />
        </div>

        <div className="px-4 mx-auto max-w-8xl Plant-Layout">
          <CapabilitiesMainCard2
            details1={{
              updes: [
                <div key={1} className="text-lg">
                  <p className="flex max-md:flex max-md:justify-center max-md:text-center max-md:text-3xl my-5 text-[45px] leading-10 font-bold text-gray-800">
                    What We Do
                  </p>

                  <div className="pl-10 max-md:px-6 flex flex-col w-full gap-4 max-md:text-xl text-[24px] font-normal text-[#6B7280] font-times">
                    <ul className="flex flex-col gap-4 list-disc">
                      <li>
                        <a href="./facility-design">
                          {/* <Link to='/facility-design'> */}
                          <p className="flex items-center font-semibold cursor-pointer hover:underline">
                            Facility Design - Different types of Warehouses
                          </p>
                          {/* </Link> */}
                        </a>
                      </li>
                      <li>
                        <a href="./delivery-material-handling-equipment">
                          {/* <Link to='/delivery-material-handling-equipment'> */}
                          <p className="flex items-center font-semibold cursor-pointer hover:underline">
                            Delivery Material Handling Equipment
                          </p>
                          {/* </Link> */}
                        </a>
                      </li>
                      <li>
                        <a href="./logistics-and-supply-chain-services">
                          {/* <Link to='/logistics-and-supply-chain-services'> */}

                          <p className="flex items-center font-semibold cursor-pointer hover:underline">
                            Logistics and Supply Chain Services
                          </p>
                          {/* </Link> */}
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* 
                                    <div className='grid grid-cols-2 gap-4 mt-16 text-2xl text-gray-500'>

                                        <Link to='/productivity-and-efficiency-improvement'>
                                            <p className='flex gap-2 items-center font-semibold cursor-pointer hover:underline'><GoDotFill className='text-[15px]' />Productivity & Efficiency Improvement
                                            </p>
                                        </Link>

                                        <Link to='/delivery-performance-program'>
                                            <p className='flex gap-2 items-center font-semibold cursor-pointer hover:underline'><GoDotFill className='text-[15px]' />Delivery Performance Program
                                            </p>
                                        </Link>

                                        <Link to='/program-benefits'>
                                            <p className='flex gap-2 items-center font-semibold cursor-pointer hover:underline'><GoDotFill className='text-[15px]' />Program Benefits</p>
                                        </Link>


                                    </div> */}
                </div>,
              ],

              // hdes: [

              //     <div className='ml-[-10px]'>

              //     </div>

              // ],
              img: "What we do_.png",
              direction: "",
              altText: imgAltText[0],
            }}
          />
        </div>

        <div className="px-4 mx-auto max-w-8xl Plant-Layout">
          <CapabilitiesMainCard2
            details1={{
              updes: [
                <div key={2} className="text-lg text-justify">
                  <p className="flex max-md:flex max-md:justify-center max-md:text-center max-md:text-3xl my-5 text-[45px] leading-10 font-bold text-gray-800 text-left">
                    Our Approach
                  </p>

                  <p className="py-1 pl-5 text-lg font-normal text-gray-500 max-md:px-0">
                    We design Warehousing Solutions that prioritize efficiency,
                    scalability, and technology:
                  </p>

                  <ul className="pl-4 list-disc">
                    {/* <li className='text-xl font-bold text-gray-500'>Our Comprehensive Approach to Plant Layout Design</li> */}

                    <ul className="pl-5 list-disc max-md:px-0">
                      <li className="py-1 text-lg font-normal text-gray-500">
                        <p>
                          <span className="font-semibold">
                            Layout Planning:{" "}
                          </span>
                          Optimize dock positions, aisle configurations, and
                          zoning for seamless flow.
                        </p>
                      </li>

                      <li className="py-1 text-lg font-normal text-gray-500">
                        <p>
                          <span className="font-semibold">
                            Storage Solutions:{" "}
                          </span>
                          Select racks and bins based on product specs,
                          supported by Warehouse Management System insights.
                        </p>
                      </li>

                      <li className="py-1 text-lg font-normal text-gray-500">
                        <p>
                          <span className="font-semibold">
                            Automation Integration:{" "}
                          </span>
                          Future-proof operations with ASRS, AGVs, and Warehouse
                          Management Solutions for precision and speed.
                        </p>
                      </li>

                      <li className="py-1 text-lg font-normal text-gray-500">
                        <p>
                          <span className="font-semibold">Scalability: </span>
                          Design adaptable layouts to support business growth.
                        </p>
                      </li>

                      <li className="py-1 text-lg font-normal text-gray-500">
                        <p>
                          <span className="font-semibold">
                            Height & Aisle Optimization:{" "}
                          </span>
                          Maximize vertical storage while ensuring smooth
                          equipment movement.
                        </p>
                      </li>
                    </ul>
                  </ul>
                </div>,
              ],

              hdes: [
                // <div key={1} className='ml-[-5px] max-md:ml-6'>
                //     <ul className="list-disc max-md:px-2">
                //         <li className='py-1 text-lg font-normal text-gray-500'>
                //             <p><span className='font-semibold'>Inbound and Outbound Inventory Flow: </span>Creating efficient zoning for quicker access and reduced downtime.
                //             </p>
                //         </li>
                //         <li className='py-1 text-lg font-normal text-gray-500'>
                //             <p><span className='font-semibold'>Custom Solutions: </span>Proposing solutions tailored to your business requirements, product demands, and throughput needs.</p>
                //         </li>
                //         <li className='py-1 text-lg font-normal text-gray-500'>
                //             <p><span className='font-semibold'>Environmental Considerations: </span>Planning for energy efficiency and compliance with safety standards.</p>
                //         </li>
                //     </ul>
                // </div>
              ],
              img: "Our Approach.png",
              direction: "",
              altText: imgAltText[1],
            }}
          />
        </div>

        <div className="px-4 mx-auto max-w-8xl Plant-Layout">
          <CapabilitiesMainCard2
            details1={{
              updes: [
                <div key={2} className="text-lg text-justify">
                  <p className="flex max-md:flex max-md:justify-center max-md:text-center max-md:text-3xl my-5 text-[45px] leading-10 font-bold text-gray-800 text-left">
                    Why Choose Madasky Consulting?
                  </p>

                  <ul className="pl-4 list-disc">
                    {/* <li className='text-xl font-bold text-gray-500'>Our Comprehensive Approach to Plant Layout Design</li> */}

                    <ul className="pl-5 list-disc max-md:px-0">
                      <li className="py-1 text-lg font-normal text-gray-500">
                        <p>
                          <span className="font-semibold">
                            End-to-End Expertise:{" "}
                          </span>
                          From Warehousing Solutions design to Warehouse
                          Management System integration, we ensure holistic
                          results.
                        </p>
                      </li>

                      <li className="py-1 text-lg font-normal text-gray-500">
                        <p>
                          <span className="font-semibold">
                            Technology-Driven:{" "}
                          </span>
                          Leverage data and automation to reduce errors and
                          costs.
                        </p>
                      </li>

                      <li className="py-1 text-lg font-normal text-gray-500">
                        <p>
                          <span className="font-semibold">
                            Proven Outcomes:{" "}
                          </span>
                          Faster order fulfillment, reduced operational
                          expenses, and scalable growth.
                        </p>
                      </li>
                    </ul>
                  </ul>

                  <p className="py-1 pl-5 text-lg font-normal text-gray-500 max-md:px-0">
                    Transform your warehouse into a competitive asset. Partner
                    with Madasky Consulting's Warehousing Solutions experts to
                    implement Warehouse Management Systems that streamline
                    operations, boost accuracy, and drive profitability. Let's
                    build a warehouse designed for efficiency today and growth
                    tomorrow.
                  </p>
                </div>,
              ],

              hdes: [],
              img: "Why Choose Madasky Consulting.png",
              direction: "",
              altText: imgAltText[1],
              calendarButton: true,
              btnText: "Unlock Your Next Chapter",
            }}
          />
        </div>

        <FaqComponent faqs={faqs} />
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
