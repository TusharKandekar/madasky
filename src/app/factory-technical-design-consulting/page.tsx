import { Metadata } from "next";
import ConsultingNavbar from "@/components/ConsultingNavbar";
import Footer from "@/components/Footer";
import AboutVideo from "@/components/AboutVideo";
import CapabilitiesMainCard2 from "@/components/CapabilitiesMainCard2";
// import TechnicalConsulting from '@/components/TechnicalConsulting';
// import ManpowerPlanning from '@/components/ManpowerPlanning';
// import ProcessFlow from '@/components/ProcessFlow';
// import MaterialFlow from '@/components/MaterialFlow';
// import WarehouseSolutions from '@/components/WarehouseSolutions';
// import PlantLayout from '@/components/PlantLayout';
import HelpYou from "@/components/HelpYou";
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";
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
const title = "Project - Factory Technical Design";
let PageMetadata: PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
  PageMetadata = await fetchMetaDataByPageName({
    pageName: "Project - Factory Technical Design",
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
      canonical: `${BaseUrl().mainurl}factory-technical-design-consulting`,
    },
  };
}

import ServerError from "@/components/ServerError";
export default async function Project() {
  const arr = ["What we do_.png", "Our Approach.png", "Project.png"];

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
      "Project - Factory Technical Design",
      "blogs",
    ]);
    videoData = await getDataByPageName([
      "Project - Factory Technical Design",
      "videos",
    ]);
    galleryData = await getDataByPageName([
      "Project - Factory Technical Design",
      "gallery",
    ]);
    testimonialData = await getTestimonialsByPageName(
      "Project - Factory Technical Design"
    );
    eventData = await getEventByPageName("Project - Factory Technical Design");
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
        url="/factory-technical-design-consulting"
        title="Project - Factory Technical Design"
        navItems={[
          { title: "Plant Layout", link: "/plant-layout-consulting" },
          { title: "Technical Consulting", link: "/technical-consulting" },
          { title: "Manpower Planning", link: "/manpower-planning-consulting" },
          {
            title: "Process & Material Flow",
            link: "/process-and-material-flow-consulting",
          },
        ]}
      />
      <AboutVideo
        vid1={"/assets/videos/Projects.mp4"}
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
              // title: "Go-to-Market Strategy",
              // des: `Manufacturers today face intense financial pressures driven by fluctuating raw material costs, global competition, supply chain disruptions, and evolving customer demands. These challenges are further compounded by a need for faster innovation cycles, optimizing cost structures, and expanding into new markets without eroding profitability. The inability to address these issues can lead to missed opportunities, margin shrinkage, and diminished market relevance.`,
              updes: [
                <div key={1} className="text-lg">
                  <p className="flex my-5 max-md:text-3xl text-[45px] max-md:flex max-md:justify-center max-md:text-center leading-10 font-bold text-gray-800">
                    Projects - Factory Technical Design
                  </p>

                  <div className="flex flex-col gap-2 pl-5 font-normal text-justify text-gray-500 max-md:px-2">
                    <p>
                      At Madasky Consulting, we take immense pride in our
                      unparalleled expertise in Factory and Plant Technical
                      Design, having successfully implemented over 50 projects
                      across the industry. As the only consulting firm in the
                      Home Textile Industry with the distinction of delivering
                      such an extensive portfolio of projects, our design
                      capabilities and implementation skills have consistently
                      earned the appreciation and trust of our clients.
                    </p>

                    <p>
                      The Home Textile and Apparel Manufacturing Industry is at
                      a pivotal juncture, navigating a transformative shift
                      driven by the increasing demand for efficiency, quality,
                      and adaptability. Yet, the road to modernizing factory
                      operations is laden with challenges-be it optimizing
                      layouts, integrating automation, or streamlining
                      workflows. At Madasky Consulting, we specialize in
                      tackling these complexities with tailored solutions that
                      align seamlessly with your strategic goals, empowering
                      businesses to thrive in an ever-evolving landscape.
                    </p>
                  </div>
                </div>,
              ],

              hdes: [
                <div key={2} className="ml-[-10px] mt-2 max-md:px-6">
                  <ul className="pl-2 list-disc max-md:px-2">
                    <li className="py-1 text-xl font-bold text-gray-500">
                      <p>Key Issues with Current Factory Design</p>
                    </li>

                    <ul className="pl-10 list-disc max-md:px-4 max-md:text-justify">
                      <li className="py-1 text-lg font-normal text-gray-500">
                        <p>
                          <span className="font-semibold">
                            Unorganized Setup:{" "}
                          </span>
                          Factories often lack a structured layout, leading to
                          chaotic workflows, inefficiencies, and bottlenecks in
                          operations.
                        </p>
                      </li>

                      <li className="py-1 text-lg font-normal text-gray-500">
                        <p>
                          <span className="font-semibold">
                            Compliance Challenges:{" "}
                          </span>
                          Many factory designs fail to meet industry and
                          regulatory compliance standards, exposing businesses
                          to legal risks and potential penalties.
                        </p>
                      </li>

                      <li className="py-1 text-lg font-normal text-gray-500">
                        <p>
                          <span className="font-semibold">
                            Space Constraints:{" "}
                          </span>
                          Poor foresight in process flow planning results in
                          cramped spaces, affecting productivity and limiting
                          scalability.
                        </p>
                      </li>

                      <li className="py-1 text-lg font-normal text-gray-500">
                        <p>
                          <span className="font-semibold">
                            Work-in-Progress (WIP) Management:{" "}
                          </span>
                          Ineffective prioritization of orders and disorganized
                          WIP areas lead to delays, increased lead times, and
                          missed deadlines.
                        </p>
                      </li>

                      <li className="py-1 text-lg font-normal text-gray-500">
                        <p>
                          <span className="font-semibold">
                            Suboptimal Process Flow:{" "}
                          </span>
                          Inadequate planning results in inefficient process
                          flows, causing delays, duplication of efforts, and
                          excessive handling of materials.
                        </p>
                      </li>

                      <li className="py-1 text-lg font-normal text-gray-500">
                        <p>
                          <span className="font-semibold">
                            Improper Material Movement Planning:{" "}
                          </span>
                          Insufficiently planned material movement spaces lead
                          to higher transit times, congestion, and increased
                          risk of damage during handling.
                        </p>
                      </li>

                      <li className="py-1 text-lg font-normal text-gray-500">
                        <p>
                          <span className="font-semibold">
                            Lack of Integrated Automation:{" "}
                          </span>
                          Automation, where implemented, is often poorly
                          integrated into production processes, causing
                          disruptions instead of driving efficiency
                        </p>
                      </li>

                      <li className="py-1 text-lg font-normal text-gray-500">
                        <p>
                          <span className="font-semibold">
                            Inadequate Storage Solutions:{" "}
                          </span>
                          Storage areas are often improperly designed, leading
                          to poor inventory management, space underutilization,
                          and difficulty in accessing materials.
                        </p>
                      </li>

                      <li className="py-1 text-lg font-normal text-gray-500">
                        <p>
                          <span className="font-semibold">
                            Inappropriate Warehousing Systems:{" "}
                          </span>
                          A lack of advanced warehousing solutions results in
                          disorganized storage, inefficient retrieval systems,
                          and unnecessary time spent on inventory handling.
                        </p>
                      </li>
                    </ul>
                  </ul>

                  <p className="text-lg font-normal text-gray-500 max-md:pl-2 max-md:text-justify">
                    Addressing these critical issues with a strategic and
                    well-thought-out factory design is essential for optimizing
                    operations, ensuring compliance, and paving the way for
                    sustainable growth.
                  </p>
                </div>,
              ],
              img: "Project.png",
              direction: "",
              altText: imgAltText[0],
            }}
          />
        </div>

        <div className="px-4 mx-auto max-w-8xl Plant-Layout">
          <CapabilitiesMainCard2
            details1={{
              updes: [
                <div key={1} className="text-lg">
                  <p className="flex max-md:text-3xl max-md:flex max-md:justify-center max-md:text-center my-5 text-[45px] leading-10 font-bold text-gray-800">
                    What We Do
                  </p>

                  {/* <div className='pl-10 flex flex-col w-full gap-4 text-[24px] font-normal text-[#6B7280] font-times'>

                                        <ul className='flex flex-col gap-4 pl-3 list-disc'>
                                            <li>
                                                <Link to='/go-to-market-strategy'>
                                                    <p className='flex items-center font-semibold cursor-pointer hover:underline'>Go-To-Market Strategy</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/new-age-marketing'>
                                                    <p className='flex items-center font-semibold cursor-pointer hover:underline'>New Age Marketing</p>
                                                </Link>

                                            </li>
                                            <li>
                                                <Link to='/sales-accelerator-program'>

                                                    <p className='flex items-center font-semibold cursor-pointer hover:underline'>Sales Accelerator Program</p>
                                                </Link>

                                            </li>
                                            <li>
                                                <Link to='/5-steps-of-growth'>

                                                    <p className='flex items-center font-semibold cursor-pointer hover:underline'>The 5X Business Multiplier Program</p>
                                                </Link>

                                            </li>
                                            <li>
                                                <p className='flex items-center font-semibold cursor-pointer hover:underline'>E-commerce</p>
                                            </li>
                                        </ul>






                                    </div> */}

                  <div className="grid grid-cols-1 gap-4 mt-12 text-2xl text-gray-500 max-md:grid-cols-1">
                    <Link href="/plant-layout">
                      <p className="flex gap-2 items-center font-semibold cursor-pointer hover:underline">
                        <GoDotFill className="text-[15px]" />
                        Plant Layout
                      </p>
                    </Link>

                    <Link href="/technical-consulting">
                      <p className="flex gap-2 items-center font-semibold cursor-pointer hover:underline">
                        <GoDotFill className="text-[15px]" />
                        Technical Consulting
                      </p>
                    </Link>

                    <Link href="/manpower-planning">
                      <p className="flex gap-2 items-center font-semibold cursor-pointer hover:underline">
                        <GoDotFill className="text-[15px]" />
                        Manpower Planning
                      </p>
                    </Link>

                    <Link href="/process-and-material-flow">
                      <p className="flex gap-2 items-center font-semibold cursor-pointer hover:underline">
                        <GoDotFill className="text-[15px]" />
                        Process & Material Flow
                      </p>
                    </Link>

                    {/* <Link to='/material-flow'>
                                            <p className='flex gap-2 items-center font-semibold cursor-pointer hover:underline'><GoDotFill className='text-[15px]' />Material Flow</p>
                                        </Link> */}

                    {/* <Link to='/buildings-industrial-offices-and-worker-hostels'>
                                            <p className='flex gap-2 items-start font-semibold cursor-pointer hover:underline'><GoDotFill className='text-[25px]' />Buildings: Industrial, offices and Worker Hostels</p>
                                        </Link> */}
                  </div>
                </div>,
              ],

              // hdes: [

              //     <div className='ml-[-10px]'>

              //     </div>

              // ],
              img: "What we do_.png",
              direction: "",
              altText: imgAltText[1],
            }}
          />
        </div>

        <div className="px-4 mx-auto max-w-8xl Plant-Layout">
          <CapabilitiesMainCard2
            details1={{
              updes: [
                <div key={1} className="text-lg">
                  <p className="flex max-md:text-3xl max-md:flex max-md:justify-center max-md:text-center my-5 text-[45px] leading-10 font-bold text-gray-800">
                    Our Approach{" "}
                  </p>

                  <div className="flex flex-col gap-2 pl-5 font-normal text-justify text-gray-500 max-md:px-2">
                    <p>
                      At Madasky Consulting, our approach is driven by the
                      belief that every manufacturing operation has the
                      potential to achieve excellence through strategic design
                      and optimization. With over 50 successful projects, we
                      understand the challenges that factories face, from
                      inefficient layouts to inadequate material flow and
                      manpower mismanagement.
                    </p>

                    <p>
                      By combining technical expertise with innovative
                      strategies, we address these issues comprehensively,
                      designing tailored solutions that optimize workflows,
                      reduce costs, and integrate cutting-edge technologies.
                    </p>

                    <p>
                      Our holistic focus ensures that every aspect of your
                      operation—plant layout, process flow, manpower planning,
                      material movement, and warehousing—works seamlessly
                      together to deliver measurable results. This commitment to
                      excellence empowers businesses to thrive in a competitive
                      market while ensuring scalability, sustainability, and
                      long-term success.
                    </p>
                  </div>
                </div>,
              ],

              // hdes: [

              //     <div className='ml-[-10px] mt-2'>

              //     </div>

              // ],
              img: "Our Approach.png",
              direction: "",
              altText: imgAltText[2],
              calendarButton: true,
              btnText: "Reserve Your Time",
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
