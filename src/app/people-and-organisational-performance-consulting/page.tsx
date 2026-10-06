// import RolRespos from '../components/RolRespos.jsx';
// import PerFormanceEv from '../components/PerFormanceEv.jsx';
// import Insentives from '../components/Insentives.jsx';
// import AnnualAppraisalSystems from '../components/AnnualAppraisalSystems.jsx';
// import HrRecruitmentSystems from '../components/HrRecruitmentSystems.jsx';
// import ConsultingNavbar from '../components/ConsultingNavbar';
// import Footer from '../components/Footer.jsx';
// import KPIandKRA from '../components/KPIandKRA.jsx';
// import AboutVideo from '../components/AboutVideo.jsx';
// import vid1 from "/assets/images/People and Organisational Performance69.mp4";
// import HelpYou from '../components/HelpYou';
// import SlidingBlogs from '../components/SlidingBlogs';
// import VideoPlayer from '../components/VideoPlayer';
// import Imagetemplate from '../components/Imagesliders';

// export default function PeopleAndOrganizationalPerformance() {
//     return (
//         <>
//             <ConsultingNavbar
//                 url={'/people-and-organizational-performance'}
//                 title={'People & Organizational Performance'}
//                 navItems={[
//                     { title: 'Roles & Resposibilities ', link: '/home' },
//                     { title: "KPI's and KRA's", link: '/about' },
//                     { title: 'Performance Evaluation System', link: '/industries' },
//                     { title: 'Incentives / Variable Pay Structuring', link: '/industries' },
//                     { title: 'Annual Appraisal Systems', link: '/industries' },
//                     { title: 'HR Recruitment Systems', link: '/industries' },

//                 ]}
//             />
//             <AboutVideo vid1={vid1} title={"Madasky"} des={"Creating and accelerating critical advantages through cutting-edge strategy and operations"} pageName={"People And Organizational Performance"}
//             />

//             <RolRespos />
//             <KPIandKRA />
//             <PerFormanceEv />
//             <Insentives />
//             <AnnualAppraisalSystems />
//             <HrRecruitmentSystems />
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

// ***********************************************************************************************

import { Metadata } from "next";
import ConsultingNavbar from "@/components/ConsultingNavbar";
import Footer from "@/components/Footer";
import AboutVideo from "@/components/AboutVideo";
import CapabilitiesMainCard2 from "@/components/CapabilitiesMainCard2";
import HelpYou from "@/components/HelpYou";
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
// import { GoDotFill } from "react-icons/go";
// import { Link } from "react-router-dom"
import BaseUrl from "@/components/BaseUrl";
import type { PageMetaDataResponse } from "@/common/types";

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
const title = "People & Organisational Performance";
let PageMetadata: PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
  PageMetadata = await fetchMetaDataByPageName({
    pageName: "People & Organizational Performance",
  });
  console.log("Metaas: ", PageMetadata);

  return {
    title: PageMetadata.data.meta_title,
    description: PageMetadata.data.meta_desc,
    keywords: PageMetadata.data.meta_keyword,
    authors: {
      name: `${PageMetadata?.data?.author || "Madasky"}`,
      url: "https://madasky.com",
    },
    alternates: {
      canonical: `${BaseUrl().mainurl
        }people-and-organisational-performance-consulting`,
    },
  };
}

export default async function Project() {
  const arr = [
    "What we do_.png",
    "Our Approach.png",
    "People & Organisational Performance.png",
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
    blogData = await getDataByPageName([
      "People & Organizational Performance",
      "blogs",
    ]);
    videoData = await getDataByPageName([
      "People & Organizational Performance",
      "videos",
    ]);
    galleryData = await getDataByPageName([
      "People & Organizational Performance",
      "gallery",
    ]);
    testimonialData = await getTestimonialsByPageName(
      "People & Organizational Performance"
    );
    eventData = await getEventByPageName("People & Organizational Performance");
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

  return (
    <>
      <ConsultingNavbar
        url={"/people-and-organisational-performance-consulting"}
        title={"People & Organisational Performance"}
        navItems={[
          {
            title: "Leadership Development & Talent Management",
            link: "/leadership-development-and-talent-management",
          },
          {
            title: "Organization Design - Position, Reporting",
            link: "/organization-design",
          },
          {
            title: "Culture Transformation - Executive Coaching",
            link: "/culture-transformation",
          },
          {
            title: "Performance Management & Rewards",
            link: "/performance-management-and-rewards",
          },
        ]}
      />
      <AboutVideo
        vid1={"/assets/videos/People and Organisational Performance69.mp4"}
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
                  <p className="flex max-md:text-3xl max-md:flex max-md:justify-center max-md:text-center my-5 text-[45px] leading-[1] font-bold text-gray-800 text-left">
                    People & Organisational Performance
                  </p>

                  <div className="flex flex-col gap-2 font-normal text-gray-500">
                    <p>
                      The manufacturing industry is grappling with complex
                      challenges that directly impact its people and
                      organizational structures. Workforce shortages, skill
                      gaps, and high turnover rates are straining operations,
                      while misaligned goals and outdated organizational
                      frameworks hinder efficiency and innovation. Leadership
                      gaps and resistance to change further exacerbate these
                      issues, making it difficult for companies to adapt to
                      evolving market demands. Poor communication across
                      departments and inadequate succession planning only add to
                      the complexity, risking business continuity and long-term
                      growth. To navigate these challenges, manufacturers need a
                      strategic approach that aligns their people, processes,
                      and organizational goals seamlessly.
                    </p>
                  </div>
                </div>,
              ],

              // hdes: [

              //     <div className='ml-[-40px] mt-3 text-lg font-normal text-gray-500 flex flex-col gap-2 text-justify'>

              //     </div>

              // ],
              img: "People & Organisational Performance.png",
              direction: "",
              altText: imgAltText[2],
            }}
          />
        </div>

        <div className="px-4 mx-auto max-w-8xl Plant-Layout">
          <CapabilitiesMainCard2
            details1={{
              updes: [
                <div key={1} className="text-lg text-justify">
                  <p className="flex max-md:text-3xl max-md:flex max-md:justify-center max-md:text-center my-5 text-[45px] leading-10 font-bold text-gray-800 text-left">
                    Our Approach
                  </p>

                  <p className="py-1 pl-5 text-lg font-normal text-gray-500 max-md:pl-0">
                    At Madasky Consulting, we take a holistic approach to
                    organizational performance by addressing these challenges
                    head-on:
                  </p>

                  <ul className="pl-10 mt-4 text-justify list-disc max-md:px-2">
                    <li className="py-1 text-lg font-normal text-gray-500">
                      <p>
                        <span className="font-semibold">
                          Deep Business Understanding:{" "}
                        </span>{" "}
                        We start by understanding your unique business context
                        to craft precise job descriptions and design effective
                        organizational structures aligned with your strategic
                        goals.
                      </p>
                    </li>

                    <li className="py-1 text-lg font-normal text-gray-500">
                      <p>
                        <span className="font-semibold">
                          Integrated Performance Management:{" "}
                        </span>
                        Our systems incorporate actionable insights, data-driven
                        KPIs, and KRAs to track performance and drive measurable
                        outcomes.
                      </p>
                    </li>

                    <li className="py-1 text-lg font-normal text-gray-500">
                      <p>
                        <span className="font-semibold">
                          Empowering Key Staff:{" "}
                        </span>
                        We focus on skill enhancement through tailored training
                        programs and frameworks that support continuous learning
                        and professional development.
                      </p>
                    </li>
                  </ul>
                </div>,
              ],

              // hdes: [

              //     <div className='ml-[-20px]'>

              //         <p className='py-1 text-lg font-normal text-gray-500'>Additionally, our Delivery Performance Program focuses on six key areas: supplier excellence, quality assurance, seamless purchasing, superior service, performance optimization, and consistent operations. By implementing robust systems and processes, we help businesses build strong supplier relationships, ensure product quality, improve customer experience, and achieve operational consistency.</p>

              //     </div>

              // ],
              img: "Our Approach.png",
              direction: "",
              altText: imgAltText[1],
              calendarButton: true,
              btnText: "Unlock Your Next Chapter",
            }}
          />
        </div>

        <div className="px-4 mx-auto max-w-8xl Plant-Layout">
          <CapabilitiesMainCard2
            details1={{
              updes: [
                <div key={3} className="text-lg">
                  <p className="flex max-md:text-3xl max-md:flex max-md:justify-center max-md:text-center my-5 text-[45px] leading-10 font-bold text-gray-800">
                    What We Do
                  </p>

                  <div className="pl-10 max-md:px-2 flex flex-col w-full gap-4 max-md:text-xl text-[24px] font-normal text-[#6B7280] font-times">
                    <ul className="flex flex-col gap-4 list-disc">
                      <li>
                        <a href="./leadership-development-and-talent-management">
                          {/* <Link to='/leadership-development-and-talent-management'> */}
                          <p className="flex items-center font-semibold cursor-pointer hover:underline">
                            {" "}
                            Leadership Development & Talent Management
                          </p>
                          {/* </Link> */}
                        </a>
                      </li>
                      <li>
                        <a href="./organization-design">
                          {/* <Link to='/organization-design'> */}
                          <p className="flex items-center font-semibold cursor-pointer hover:underline">
                            Organization Design - Position, Reporting
                          </p>
                          {/* </Link> */}
                        </a>
                      </li>
                      <li>
                        <a href="./culture-transformation">
                          {/* <Link to='/culture-transformation'> */}

                          <p className="flex items-center font-semibold cursor-pointer hover:underline">
                            Culture Transformation - Executive Coaching
                          </p>
                          {/* </Link> */}
                        </a>
                      </li>

                      <li>
                        <a href="./performance-management-and-rewards">
                          {/* <Link to='/performance-management-and-rewards'> */}

                          <p className="flex items-center font-semibold cursor-pointer hover:underline">
                            Performance Management & Rewards - Roles &
                            Responsibilities, KPI, KRAs, Performance Evaluation
                            System, Variable pay, Incentive System, Appraisel
                            System
                          </p>
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

        {/* <div className="px-4 mx-auto max-w-8xl Plant-Layout">
                    <CapabilitiesMainCard2
                        details1={{

                            updes: [
                                <div key={1} className="text-lg">



                                    <p className='flex my-5 text-[45px] leading-10 font-bold text-gray-800'>How We Help Clients</p>

                                    <div className='grid grid-cols-2 gap-4 mt-16 text-xl text-gray-500'>

                                        <Link to='/roles-and-responsibilities'>
                                            <p className='flex items-start gap-2 font-semibold cursor-pointer hover:underline'><GoDotFill className='text-[15px] mt-[6px]' />Roles and Responsibilities</p>
                                        </Link>

                                        <Link to='/kpi-and-kra'>
                                            <p className='flex items-start gap-2 font-semibold cursor-pointer hover:underline'><GoDotFill className='text-[15px] mt-[6px]' />KPI's and KRA's</p>
                                        </Link>

                                        <Link to='/performance-evaluation-system'>
                                            <p className='flex items-start gap-2 font-semibold cursor-pointer hover:underline'><GoDotFill className='text-[15px] mt-[6px]' />Performance evaluation system</p>
                                        </Link>

                                        <Link to='/incentive-variable-pay-structuring'>
                                            <p className='flex items-start gap-2 font-semibold cursor-pointer hover:underline'><GoDotFill className='text-[15px] mt-[6px]' />Incentives / Variable Pay Structuring</p>
                                        </Link>


                                        <Link to='/annual-appraisal-systems'>
                                            <p className='flex items-start gap-2 font-semibold cursor-pointer hover:underline'><GoDotFill className='text-[15px] mt-[6px]' />Annual Appraisal Systems.</p>
                                        </Link>

                                        <Link to='/hr-recruitment-systems'>
                                            <p className='flex items-start gap-2 font-semibold cursor-pointer hover:underline'><GoDotFill className='text-[15px] mt-[6px]' />HR Recruitment Systems</p>
                                        </Link>





                                    </div>





                                </div>

                            ],


                            // hdes: [

                            //     <div key={2} className=''>





                            //     </div>


                            // ],
                            img: '/assets/images/399.png',
                            direction: '',
                        }}
                    />
                </div> */}
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
