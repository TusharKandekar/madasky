// import ProEfficient from '../components/ProEfficient';
// import DeliveryPerformance from '../components/DeliveryPerformance';
// import ConsultingNavbar from '../components/ConsultingNavbar';
// import Footer from '../components/Footer.jsx';
// import ProgramBenefits from '../components/ProgramBenefits';
// import AboutVideo from '../components/AboutVideo.jsx';
// import vid1 from "/assets/images/OPERATIONS & PRODUCTIVITY IMPROVEMENT69.mp4";
// import HelpYou from '../components/HelpYou';
// import SlidingBlogs from '../components/SlidingBlogs';
// import VideoPlayer from '../components/VideoPlayer';
// import Imagetemplate from '../components/Imagesliders';
// export default function OperationsAndProductivityImprovement() {
//     return (
//         <>
//             <ConsultingNavbar
//                 url='/operations-and-productivity-improvement'
//                 title={'Operations & Productivity Improvement'}
//                 navItems={[
//                     { title: 'Productivity & Efficiency Improvement', link: '/home' },
//                     { title: 'Delivery Performance Program', link: '/about' },
//                     { title: 'Program Benefits', link: '/industries' },

//                 ]}
//             />
//             <AboutVideo vid1={vid1} title={"Madasky"} des={"Creating and accelerating critical advantages through cutting-edge strategy and operations"} pageName={"Operations & Productivity Improvement"}
//             />

//             <ProEfficient />
//             <DeliveryPerformance />
//             <ProgramBenefits />
//             <div className="p-6 flex h-auto flex-col w-full py-[1vh] bg-[#bce1fd75] bg-[url('/assets/images/homeblogbg.png')] bg-center bg-no-repeat bg-cover  items-center justify-center">

//                 <VideoPlayer

//                 />
//                 <div className="w-[90%] h-[2px] bg-gray-300"></div>
//                 <SlidingBlogs />
//                 <div className="w-[90%] h-[2px] bg-gray-300"></div>

//                 <Imagetemplate

//                 />

//             </div>
//             <HelpYou />
//             <Footer />
//         </>
//     )
// }

// **************************************************************

// import { useState } from 'react';
import { Metadata } from "next";
import ConsultingNavbar from "@/components/ConsultingNavbar";
import Footer from "@/components/Footer";
// import vid1 from "/assets/images/OPERATIONS & PRODUCTIVITY IMPROVEMENT69.mp4";
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
const title = "Operations Excellence";
let PageMetadata: PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
  PageMetadata = await fetchMetaDataByPageName({
    pageName: "Operations Excellence",
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
      canonical: `${BaseUrl().mainurl}operations-excellence-consulting`,
    },
  };
}

export default async function Project() {
  const arr = [
    "What we do_.png",
    "Our Approach.png",
    "Operations excellence.png",
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
    blogData = await getDataByPageName(["Operations Excellence", "blogs"]);
    videoData = await getDataByPageName(["Operations Excellence", "videos"]);
    galleryData = await getDataByPageName(["Operations Excellence", "gallery"]);
    testimonialData = await getTestimonialsByPageName("Operations Excellence");
    eventData = await getEventByPageName("Operations Excellence");
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
      question: `What is Operations Excellence Consulting?`,
      answer: `Operations Excellence Consulting is a strategic approach aimed at improving the efficiency and effectiveness of manufacturing operations. It involves streamlining processes, adopting new technologies, and fostering a culture of continuous improvement to achieve sustainable growth and competitiveness.`,
    },
    {
      question: `Why is Operations Excellence important for manufacturers?`,
      answer: `In today's fast-paced market, manufacturers face challenges like rising costs, fluctuating demand, and evolving customer expectations. Operations Excellence helps businesses stay competitive by improving productivity, reducing lead times, and integrating innovative technologies to drive growth and sustainability.`,
    },
    {
      question: `How does Madasky Consulting help with Operations Excellence?`,
      answer: `At Madasky Consulting, we focus on enhancing manufacturing operations through strategies like process optimization, technology integration, and workforce empowerment. We help businesses streamline workflows, optimize production cycles, and implement new technologies such as automation, IoT, and AI to boost efficiency and consistency.`,
    },
    {
      question: `What methodologies does Madasky Consulting use for process optimization?`,
      answer: `We use proven methodologies such as Lean Manufacturing, Kaizen principles, and value stream mapping to reduce waste, improve efficiency, and enhance productivity across your operations.`,
    },
    {
      question: `How does technology play a role in Operations Excellence?`,
      answer: `Technology plays a key role by enabling automation, smart tools, and real-time data analytics. We help businesses deploy robotics and digital systems to improve precision, scalability, and performance, ensuring data-driven decision-making for continuous improvement.`,
    },
  ];

  return (
    <>
      <ConsultingNavbar
        url="/operations-excellence-consulting"
        title={"Operations Excellence"}
        navItems={[
          {
            title: "Productivity & Efficiency Improvement",
            link: "/productivity-and-efficiency-improvement",
          },
          { title: "Implementation Support", link: "/implementation-support" },
          {
            title: "Delivery Performance & Lead Time Reduction Program",
            link: "/delivery-performance-and-lead-time-reduction-program",
          },
          {
            title: "Sampling - Lead time Reduction",
            link: "/sampling-lead-time-reduction",
          },
          {
            title: "Leverage technology for Innovation and Efficiency.",
            link: "/leverage-technology-for-innovation-and-efficiency",
          },
        ]}
      />
      <AboutVideo
        vid1={"/assets/videos/OPERATIONS-PRODUCTIVITY-IMPROVEMENT69.mp4"}
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
                    Operations Excellence
                  </p>

                  <p className="py-1 pl-5 text-lg font-normal text-gray-500 max-md:px-0">
                    In today's fast-paced global market, manufacturers face
                    relentless pressure to enhance efficiency amid rising costs,
                    fluctuating demands, and evolving customer expectations.
                    Achieving Operations Excellence a core focus of our
                    Operations Excellence Consulting expertise, has become
                    critical to maintaining competitiveness and driving
                    sustainable growth. At Madasky Consulting, we specialize in
                    Operations Excellence Services that address technological
                    shifts, supply chain risks, and sustainability goals,
                    empowering businesses to thrive in volatile environments.
                  </p>
                </div>,
              ],

              hdes: [],
              img: "Operations excellence.png",
              direction: "",
              altText: imgAltText[2],
            }}
          />
        </div>

        <div className="px-4 mx-auto max-w-8xl Plant-Layout">
          <CapabilitiesMainCard2
            details1={{
              updes: [
                <div key={2} className="text-lg">
                  <p className="flex max-md:text-3xl max-md:flex max-md:justify-center max-md:text-center my-5 text-[45px] leading-10 font-bold text-gray-800">
                    What We Do
                  </p>

                  <div className="pl-10 max-md:px-6 flex flex-col w-full gap-4 max-md:text-xl text-[24px] font-normal text-[#6B7280] font-times">
                    <ul className="flex flex-col gap-4 list-disc">
                      <li>
                        <a href="./productivity-and-efficiency-improvement">
                          {/* <Link to='/productivity-and-efficiency-improvement'> */}
                          <p className="flex items-center font-semibold cursor-pointer hover:underline">
                            Productivity & Efficiency Improvement
                          </p>
                          {/* </Link> */}
                        </a>
                      </li>
                      <li>
                        <a href="./implementation-support">
                          {/* <Link to='/delivery-performance-program'> */}
                          <p className="flex items-center font-semibold cursor-pointer hover:underline">
                            {" "}
                            Implementation Support
                          </p>
                          {/* </Link> */}
                        </a>
                      </li>
                      <li>
                        <a href="./delivery-performance-and-lead-time-reduction-program">
                          {/* <Link to='/program-benefits'> */}

                          <p className="flex items-center font-semibold cursor-pointer hover:underline">
                            Deliver Performance & Lead Time Reduction
                          </p>
                          {/* </Link> */}
                        </a>
                      </li>

                      <li>
                        <a href="./sampling-lead-time-reduction">
                          {/* <Link to='/program-benefits'> */}

                          <p className="flex items-center font-semibold cursor-pointer hover:underline">
                            Sampling - Lead time Reduction
                          </p>
                          {/* </Link> */}
                        </a>
                      </li>

                      <li>
                        <a href="./leverage-technology-for-innovation-and-efficiency">
                          {/* <Link to='/program-benefits'> */}

                          <p className="flex items-center font-semibold cursor-pointer hover:underline">
                            Leverage Technology for Innovation and Efficiency
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
              calendarButton: true,
              btnText: "Unlock Your Next Chapter",
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
                    Madasky Consulting's Operational Excellence Consulting
                    framework combines strategic analysis, technology, and
                    culture-building to deliver measurable results:
                  </p>

                  <div className="pl-4 list-disc">
                    {/* <li className='text-xl font-bold text-gray-500'>Our Comprehensive Approach to Plant Layout Design</li> */}

                    <div className="pl-0 space-y-2 list-disc max-md:px-0">
                      <div>
                        <p className="text-xl text-gray-600">
                          Process Optimization
                        </p>
                        <ul className="pl-6 list-disc max-md:px-0">
                          <li className="py-1 text-lg font-normal text-gray-500">
                            <p>
                              <span className="font-semibold">
                                Lean Manufacturing:{" "}
                              </span>{" "}
                              Reduce waste and redundancies through value stream
                              mapping and Kaizen principles.
                            </p>
                          </li>

                          <li className="py-1 text-lg font-normal text-gray-500">
                            <p>
                              <span className="font-semibold">
                                Plant Layout Design{" "}
                              </span>
                              Improve material flow and space utilization for
                              faster operations.
                            </p>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <p className="text-xl text-gray-600">
                          Technology Integration
                        </p>
                        <ul className="pl-6 list-disc max-md:px-0">
                          <li className="py-1 text-lg font-normal text-gray-500">
                            <p>
                              <span className="font-semibold">
                                Automation & Smart Tools:{" "}
                              </span>{" "}
                              Deploy robotics and digital systems to enhance
                              precision and scalability.
                            </p>
                          </li>

                          <li className="py-1 text-lg font-normal text-gray-500">
                            <p>
                              <span className="font-semibold">
                                Data Analytics:{" "}
                              </span>{" "}
                              Monitor performance metrics in real-time for
                              proactive decision-making.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>,
              ],

              hdes: [
                <div
                  key={2}
                  className="ml-[-20] list-disc max-md:px-0 space-y-2 mt-2"
                >
                  <div>
                    <p className="text-xl font-semibold text-gray-600">
                      Workforce Empowerment
                    </p>
                    <ul className="pl-6 list-disc max-md:px-0">
                      <li className="py-1 text-lg font-normal text-gray-500">
                        <p>
                          <span className="font-semibold">
                            Skill Development:{" "}
                          </span>
                          Train teams to adopt new technologies and lean
                          practices.
                        </p>
                      </li>

                      <li className="py-1 text-lg font-normal text-gray-500">
                        <p>
                          <span className="font-semibold">
                            Quality Management{" "}
                          </span>
                          Embed compliance and defect-reduction strategies into
                          workflows.
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-xl font-semibold text-gray-600">
                      Supply Chain Synergy
                    </p>
                    <ul className="pl-6 list-disc max-md:px-0">
                      <li className="py-1 text-lg font-normal text-gray-500">
                        <p>
                          <span className="font-semibold">
                            End-to-End Optimization:{" "}
                          </span>
                          Align procurement, production, and logistics for
                          seamless efficiency.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>,
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
                    Why Partner with Madasky Consulting?
                  </p>

                  <ul className="pl-4 list-disc">
                    {/* <li className='text-xl font-bold text-gray-500'>Our Comprehensive Approach to Plant Layout Design</li> */}

                    <ul className="pl-5 list-disc max-md:px-0">
                      <li className="py-1 text-lg font-normal text-gray-500">
                        <p>
                          <span className="font-semibold">
                            Holistic Expertise:{" "}
                          </span>
                          Our Operations Excellence Consulting covers processes,
                          technology, and culture.
                        </p>
                      </li>

                      <li className="py-1 text-lg font-normal text-gray-500">
                        <p>
                          <span className="font-semibold">
                            Proven Frameworks:{" "}
                          </span>{" "}
                          Leverage industry-tested strategies from a leader in
                          Operations Excellence Services.
                        </p>
                      </li>

                      <li className="py-1 text-lg font-normal text-gray-500">
                        <p>
                          <span className="font-semibold">
                            Sustainable Outcomes:{" "}
                          </span>
                          Balance cost reduction with quality, compliance, and
                          scalability.
                        </p>
                      </li>

                      <li className="py-1 text-lg font-normal text-gray-500">
                        <p>
                          <span className="font-semibold">
                            End-to-End Support:{" "}
                          </span>
                          From diagnostics to implementation, we ensure lasting
                          impact.
                        </p>
                      </li>
                    </ul>
                  </ul>

                  <p className="py-1 pl-5 text-lg font-normal text-gray-500 max-md:px-0">
                    Transform your operations with Madasky's Operational
                    Excellence Consulting. Let's build a culture of continuous
                    improvement, innovation, and resilience tailored to your
                    manufacturing goals.
                  </p>
                </div>,
              ],

              hdes: [],
              img: "Why Choose Madasky Consulting.png",
              direction: "",
              altText: imgAltText[1],
              calendarButton: true,
                    btnText: "Plan Your Consultation",
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
