import { Metadata } from "next";
import ConsultingNavbar2 from "@/components/ConsultingNavbar2";
import CapabilitiesHeader from "@/components/CapabilitiesHeader";
import Button from "@/components/Button";
import CapabilitiesContent1 from "@/components/CapabilitiesContent1";

import Footer from "@/components/Footer";
// import vid1 from "/assets/images/Automation in Manufacturing.mp4";
import AboutVideo from "@/components/AboutVideo";
import HelpYou from "@/components/HelpYou";
// import SlidingBlogs from '../components/SlidingBlogs.jsx';
// import VideoPlayer from '../components/VideoPlayer.jsx';
// import Imagetemplate from '../components/Imagesliders.jsx';
import Image from "next/image";
import BaseUrl from "@/components/BaseUrl";
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
import {
  getImageAltText,
  getWebBlogs,
  fetchMetaDataByPageName,
  getDataByPageName,
  filterByWebImage,
  getImageData,
  getTestimonialsByPageName,
  getEventByPageName,
} from "@/common/api";
import type { PageMetaDataResponse } from "@/common/types";

const title = "Automation In Manufacturing";
let PageMetadata: PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
  PageMetadata = await fetchMetaDataByPageName({
    pageName: "Automation in Manufacturing",
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
      canonical: `${BaseUrl().mainurl}automation-in-manufacturing-consulting`,
    },
  };
}

export default async function GrowthMarketingAndSales() {
  const arr = [
    "Key Challenges.png",
    "Automation is important.png",
    "Key Areas of Automation Expertise.png",
    "Why Choose Madasky Consulting.png",
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
      "Automation in Manufacturing",
      "blogs",
    ]);
    videoData = await getDataByPageName([
      "Automation in Manufacturing",
      "videos",
    ]);
    galleryData = await getDataByPageName([
      "Automation in Manufacturing",
      "gallery",
    ]);
    testimonialData = await getTestimonialsByPageName(
      "Automation in Manufacturing"
    );
    eventData = await getEventByPageName("Automation in Manufacturing");
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
      <ConsultingNavbar2
        url="/automation-in-manufacturing-consulting"
        title={"Automation In Manufacturing"}
      />
      <AboutVideo
        vid1={"/assets/videos/Automation in Manufacturing.mp4"}
        title={title}
        des={
          "Creating and accelerating critical advantages through cutting-edge strategy and operations"
        }
        h1={PageMetadata?.data?.h1tag}
      />

      <div className="w-[80vw] bg-white mx-auto">
        <div className="w-full my-20">
          <CapabilitiesHeader
            details1={{
              heading1: "Automation In Manufacturing",
              paragraph1:
                "In today's fast-paced and competitive landscape, manufacturing companies face multiple challenges in optimizing production efficiency, reducing costs, and maintaining consistent product quality. The increasing shortage of skilled labor, rising operational costs, and demand for faster turnaround times make automation a crucial factor in sustaining growth and profitability.",
              // paragraph2: "As businesses expand, the complexity of managing working capital grows, leading to increased financial stress, strained vendor relationships, and missed opportunities for reinvestment. Without an optimized strategy, manufacturers may find themselves constantly firefighting liquidity issues rather than strategically driving growth.",
              // paragraph3: "This is not just about quick fixes, it's about creating a sustainable, cash-positive business that thrives in any market condition.",
            }}
            border={"border-b"}
          />

          <CapabilitiesContent1
            details1={{
              heading1: "Key Challenges:",
              // paragraph1: "If these challenges resonate with your experience, our Delivery Performance Program is designed to transform these obstacles into opportunities for growth and excellence.",

              data: [
                {
                  data1: "Skilled Workforce Shortage",
                  data2:
                    "Finding and retaining trained workers is becoming increasingly difficult, leading to production delays and quality inconsistencies.",
                },
                {
                  data1: "Rising Labor Costs",
                  data2:
                    "As wages increase, dependency on manual labor impacts profitability.",
                },

                {
                  data1: "Production Inefficiencies",
                  data2:
                    "Manual processes slow down production cycles, increase human errors, and create bottlenecks.",
                },
                {
                  data1: "Scalability Issues",
                  data2:
                    "Traditional manufacturing processes struggle to meet growing market demands and fluctuating order volumes.",
                },
                {
                  data1: "Inventory & Logistics Management",
                  data2:
                    "Inefficient warehouse operations and material movement impact supply chain effectiveness.",
                },
                {
                  data1: "Quality Control Challenges",
                  data2:
                    "Manual inspection methods result in higher defect rates and inconsistencies in production.",
                },
              ],

              imgSrc: "Key Challenges.png",
              altText: imgAltText[0],
              calendarButton: true,
              btnText: "Book Your Free Strategy Call",
            }}
            border={"border-b"}
          />

          <div className={`flex pb-8 mt-20 w-full border-b border-gray-300`}>
            <div className="flex flex-col w-full gap-8">
              <div className="text-black font-bold text-4xl max-md:text-3xl leading-[1]">
                <h2>Madasky Consulting's Approach to Automation</h2>
              </div>

              <div className="hidden w-full rounded-lg max-md:block">

                <div className="relative h-[15rem]">
                  <Image
                    fill
                    src={`${BaseUrl().imgurl}Automation is important.png`}
                    alt={imgAltText[1] ? imgAltText[1] : "Madasky Consulting"}
                    className="object-cover rounded-2xl"
                  ></Image>
                </div>
              </div>

              <div
                className="text-gray-500 text-[20px] text-justify font-extralight flex flex-col gap-4"
              // style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
              >
                <p className="text-gray-700">
                  At Madasky Consulting, we specialize in designing and
                  implementing intelligent automation solutions to enhance
                  manufacturing efficiency, minimize human dependency, and
                  optimize operational costs. Our approach integrates
                  cutting-edge automation, robotics, AI-driven analytics, and
                  Industry 4.0 technologies to deliver scalable and future-proof
                  solutions.
                </p>



                <ul className="flex flex-col pl-5 text-justify list-disc max-md:px-0">
                  <div className="grid grid-cols-2 max-md:grid-cols-1">
                    <div className="flex flex-col gap-2">
                      <p className="text-2xl font-semibold text-gray-600">
                        How We Help:
                      </p>
                      <ul className="pl-5 list-disc">
                        <li className="">
                          <p className="font-normal text-gray-700">
                            <span className="font-semibold text-gray-600">
                              End-to-End Automation Strategy:{" "}
                            </span>
                            Assessing your current processes, identifying
                            automation opportunities, and developing a
                            customized roadmap.
                          </p>
                        </li>

                        <li className="">
                          <p className="font-normal text-gray-700">
                            <span className="font-semibold text-gray-600">
                              Process Optimization & Digital Transformation:{" "}
                            </span>
                            Implementing automation technologies tailored to
                            your industry and specific needs.
                          </p>
                        </li>

                        <li className="">
                          <p className="font-normal text-gray-700">
                            <span className="font-semibold text-gray-600">
                              Technology Integration & Deployment:{" "}
                            </span>
                            Leveraging robotics, AI, IoT, and data-driven
                            decision-making to enhance manufacturing
                            performance.
                          </p>
                        </li>

                        <li className="">
                          <p className="font-normal text-gray-700">
                            <span className="font-semibold text-gray-600">
                              Performance Monitoring & Continuous Improvement:{" "}
                            </span>
                            Ensuring automation solutions deliver long-term
                            efficiency and ROI.
                          </p>
                        </li>
                      </ul>

                      <div className="mt-4">
                        <Button text={"Plan Your Consultation"}></Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-center w-full rounded-lg max-md:hidden">

                      <div className="relative h-[18rem] w-[80%]">
                        <Image
                          fill
                          src={`${BaseUrl().imgurl}Automation is important.png`}
                          alt={
                            imgAltText[1] ? imgAltText[1] : "Madasky Consulting"
                          }
                          className="object-cover rounded-2xl"
                        ></Image>
                      </div>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>

          <div className={`flex pb-8 mt-20 w-full border-b border-gray-300`}>
            <div className="flex flex-col w-full gap-8">
              <div className="text-black font-bold text-4xl max-md:text-3xl leading-[1]">
                <h2>Key Areas of Automation Expertise</h2>
              </div>

              <div className="hidden w-full rounded-lg max-md:block">

                <div className="relative h-[15rem]">
                  <Image
                    fill
                    src={`${BaseUrl().imgurl
                      }Key Areas of Automation Expertise.png`}
                    alt={imgAltText[1] ? imgAltText[1] : "Madasky Consulting"}
                    className="object-fill rounded-2xl"
                  ></Image>
                </div>
              </div>

              <div
                className="text-gray-500 text-[20px] font-extralight flex flex-col gap-2"
              // style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
              >
                <ul className="flex flex-col pl-5 text-justify list-disc">
                  <div className="grid grid-cols-2 max-md:grid-cols-1">
                    <div className="flex flex-col gap-2">
                      <div className="">
                        <ul className="list-disc">
                          <li>
                            <p className="text-2xl font-semibold text-left text-gray-600 max-md:text-xl">
                              Customized Automated Solutions for Various
                              Manufacturing Processes:
                            </p>
                          </li>
                        </ul>

                        <p className="font-normal text-gray-700">
                          We help manufacturing organizations transition from
                          manual to automated or semi-automated workflows,
                          ensuring improved productivity and quality. Our
                          solutions focus on.
                        </p>

                        <ul className="pl-8 list-disc max-md:px-6">
                          <li className="">
                            <p className="font-normal text-gray-700">
                              <span className="font-semibold text-gray-600">
                                Material handling and movement automation{" "}
                              </span>{" "}
                              to minimize waste and maximize efficiency.
                            </p>
                          </li>

                          <li className="">
                            <p className="font-normal text-gray-700">
                              <span className="font-semibold text-gray-600">
                                Process automation{" "}
                              </span>
                              for assembly lines, packaging, and inspection.
                            </p>
                          </li>

                          <li className="">
                            <p className="font-normal text-gray-700">
                              <span className="font-semibold text-gray-600">
                                Integration of IoT sensors{" "}
                              </span>
                              to monitor real-time production data and
                              predictive maintenance.
                            </p>
                          </li>
                        </ul>
                      </div>

                      <div className="">
                        <ul className="list-disc">
                          <li>
                            <p className="text-2xl font-semibold text-left text-gray-600 max-md:text-xl">
                              Automated and Semi-Automated Sewing Solutions:
                            </p>
                          </li>
                        </ul>

                        <p className="font-normal text-gray-700">
                          For the textile and apparel industries, we offer
                          specialized automation solutions to enhance sewing and
                          stitching efficiency.
                        </p>

                        <ul className="pl-8 list-disc max-md:px-6">
                          <li className="">
                            <p className="font-normal text-gray-700">
                              <span className="font-semibold text-gray-600">
                                Automated sewing machines{" "}
                              </span>
                              with AI-powered stitching precision.
                            </p>
                          </li>

                          <li className="">
                            <p className="font-normal text-gray-700">
                              <span className="font-semibold text-gray-600">
                                Semi-automated setups{" "}
                              </span>
                              that reduce operator workload and increase output.
                            </p>
                          </li>

                          <li className="">
                            <p className="font-normal text-gray-700">
                              <span className="font-semibold text-gray-600">
                                Workflow automation{" "}
                              </span>
                              to streamline production and reduce material
                              wastage.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-center justify-center w-full rounded-lg max-md:hidden">


                      <div className="relative h-[18rem] w-[80%]">
                        <Image
                          fill
                          src={`${BaseUrl().imgurl
                            }Key Areas of Automation Expertise.png`}
                          alt={
                            imgAltText[2] ? imgAltText[2] : "Madasky Consulting"
                          }
                          className="object-cover rounded-2xl"
                        ></Image>
                      </div>
                    </div>
                  </div>
                </ul>

                <div className="pl-5">
                  <ul className="list-disc">
                    <li>
                      <p className="text-2xl font-semibold text-left text-gray-600 max-md:text-xl">
                        Evaluation & Implementation of Robotics (e.g., AGVs,
                        Cobots, AI-Driven Machines):
                      </p>
                    </li>
                  </ul>

                  <p className="font-normal text-gray-700 max-md:text-justify">
                    We analyze and implement robotics-driven solutions to
                    replace manual material handling and repetitive tasks.
                  </p>

                  <ul className="pl-8 list-disc max-md:px-6 max-md:text-justify">
                    <li className="">
                      <p className="font-normal text-gray-700">
                        <span className="font-semibold text-gray-600">
                          Automated Guided Vehicles (AGVs):{" "}
                        </span>{" "}
                        For material transport within production facilities,
                        reducing dependency on forklifts and manual labor.
                      </p>
                    </li>

                    <li className="">
                      <p className="font-normal text-gray-700">
                        <span className="font-semibold text-gray-600">
                          Collaborative Robots (Cobots):{" "}
                        </span>
                        Designed to work alongside human operators, improving
                        accuracy and consistency in manufacturing tasks.
                      </p>
                    </li>

                    <li className="">
                      <p className="font-normal text-gray-700">
                        <span className="font-semibold text-gray-600">
                          AI-powered robotic arms:{" "}
                        </span>
                        For assembly, welding, and quality inspection.
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="pl-5">
                  <ul className="list-disc">
                    <li>
                      <p className="text-2xl font-semibold text-left text-gray-600 max-md:text-xl">
                        Planning and Implementing Automated Warehouses &
                        Logistical Solutions:
                      </p>
                    </li>
                  </ul>

                  <p className="font-normal text-gray-700 max-md:text-justify">
                    Warehousing and logistics play a crucial role in supply
                    chain efficiency. We assist in.
                  </p>

                  <ul className="pl-8 list-disc max-md:px-6 max-md:text-justify">
                    <li className="">
                      <p className="font-normal text-gray-700">
                        <span className="font-semibold text-gray-600">
                          Automated storage and retrieval systems (ASRS){" "}
                        </span>
                        to optimize warehouse space and reduce operational
                        costs.
                      </p>
                    </li>

                    <li className="">
                      <p className="font-normal text-gray-700">
                        <span className="font-semibold text-gray-600">
                          Smart conveyors & sorting systems{" "}
                        </span>
                        for streamlined material flow.
                      </p>
                    </li>

                    <li className="">
                      <p className="font-normal text-gray-700">
                        <span className="font-semibold text-gray-600">
                          AI-based inventory management{" "}
                        </span>
                        for real-time tracking and predictive stock
                        replenishment.
                      </p>
                    </li>

                    <li className="">
                      <p className="font-normal text-gray-700">
                        <span className="font-semibold text-gray-600">
                          Robotic palletizing & de-palletizing solutions{" "}
                        </span>
                        for handling bulk inventory with precision.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <CapabilitiesContent1
            details1={{
              heading1:
                "Why Choose Madasky Consulting for Manufacturing Automation?",
              // paragraph1: "If these challenges resonate with your experience, our Delivery Performance Program is designed to transform these obstacles into opportunities for growth and excellence.",

              data: [
                {
                  data1: "Industry Expertise",
                  data2:
                    " Deep knowledge across textiles, home furnishings, automotive, and other manufacturing sectors.",
                },
                {
                  data1: "Bespoke Automation Strategies",
                  data2:
                    "Tailored solutions to align with business objectives and scalability.",
                },

                {
                  data1: "End-to-End Implementation Support",
                  data2:
                    "From planning to execution and performance monitoring.",
                },
                {
                  data1: "Proven Track Record",
                  data2:
                    "Successfully implemented automation solutions across mid to large-sized factories.",
                },
                {
                  data1: "Global Perspective",
                  data2:
                    "Leveraging international best practices for optimized manufacturing automation.",
                },
              ],

              imgSrc: "Why Choose Madasky Consulting.png",
              altText: imgAltText[3],
              calendarButton: true,
              btnText: "Unlock Your Next Chapter",
            }}
            border={"border-b"}
          />

          <CapabilitiesHeader
            details1={{
              heading1: "Get Started With Smart Manufacturing Today",
              paragraph1:
                "Madasky Consulting is committed to helping manufacturers transition into the future of smart factories with automation, robotics, and digital transformation.",
              paragraph2:
                "Contact us today to explore how automation can enhance your manufacturing efficiency, reduce costs, and drive long-term profitability.",
              // paragraph3: "This is not just about quick fixes, it's about creating a sustainable, cash-positive business that thrives in any market condition.",
            }}
            border={"border-none"}
          />

          {/* <CapabilitiesContent2 details1={{
                        heading1: "Key Challenges:",
                        // heading2: "At Madasky Consulting, we specialize in research and business intelligence tailored to the manufacturing sector, providing critical insights to help companies make informed, strategic decisions. Our expert-driven research methodologies ensure that our clients remain resilient, competitive, and future-ready.",
                        // paragraph1: "Strategic Research & Business Intelligence Solutions:",
                        // heading3: "At Madasky Consulting, we don't just offer advice we deliver measurable results. With deep industry expertise and a hands-on approach, we help manufacturing firms unlock cash flow, optimize efficiency, and drive profitability. Our tailored strategies, data-driven insights, and proven methodologies ensure that you see immediate financial impact and long-term business resilience.",
                        // heading4: "When you partner with us, you gain more than just solutions you gain a trusted advisor committed to your success. Let's turn your financial challenges into opportunities and position your business for sustainable growth. Ready to accelerate your cash flow? Let's talk.",


                        data:
                            [
                                {
                                    data1: "Skilled Workforce Shortage",
                                    data2: "Finding and retaining trained workers is becoming increasingly difficult, leading to production delays and quality inconsistencies.",
                                },
                                {
                                    data1: "Rising Labor Costs",
                                    data2: "As wages increase, dependency on manual labor impacts profitability.",
                                },

                                {
                                    data1: "Production Inefficiencies",
                                    data2: "Manual processes slow down production cycles, increase human errors, and create bottlenecks.",
                                },
                                {
                                    data1: "Scalability Issues",
                                    data2: "Traditional manufacturing processes struggle to meet growing market demands and fluctuating order volumes.",
                                },
                                {
                                    data1: "Inventory & Logistics Management",
                                    data2: "Inefficient warehouse operations and material movement impact supply chain effectiveness.",
                                },
                                {
                                    data1: "Quality Control Challenges",
                                    data2: "Manual inspection methods result in higher defect rates and inconsistencies in production.",
                                },


                            ],

                        data2: [





                        ],





                        imgSrc: "/assets/images/398.png"



                    }} border={"border-b"} /> */}

          {/* <CapabilitiesHeader2 details1={{
                        heading1: "How We Help You Navigate and Capitalize on India's Business Potential",
                        paragraph1: "Our consulting expertise ensures a structured approach to entering and scaling in the Indian manufacturing sector. We provide end-to-end strategy, market intelligence, and execution support to help businesses build a strong foundation in India.",
                        imgSrc: "/assets/images/398.png",


                    }} border={"border-b"} /> */}

          {/* 
                    <CapabilitiesContent2 details1={{
                        heading1: "Tailored Solutions for Manufacturing Success in India:",
                        // heading2: "At Madasky Consulting, we specialize in research and business intelligence tailored to the manufacturing sector, providing critical insights to help companies make informed, strategic decisions. Our expert-driven research methodologies ensure that our clients remain resilient, competitive, and future-ready.",
                        // paragraph1: "Strategic Research & Business Intelligence Solutions:",
                        heading3: "By leveraging our expertise, businesses can confidently navigate India's manufacturing ecosystem, mitigate risks, and position themselves for sustained growth. Are you ready to explore India's manufacturing potential? Let's build a roadmap together!",
                        // heading4: "When you partner with us, you gain more than just solutions you gain a trusted advisor committed to your success. Let's turn your financial challenges into opportunities and position your business for sustainable growth. Ready to accelerate your cash flow? Let's talk.",


                        data:
                            [
                                {
                                    data1: "Business Opportunity in India and South Asia",
                                    data2: "We analyze industry trends, government policies, and competitive landscapes to identify high-growth opportunities in India's manufacturing sector and emerging South Asian markets.",
                                },
                                {
                                    data1: "Aligning and Customizing for the Market",
                                    data2: "We tailor your go-to-market strategy by localizing pricing, branding, and operational frameworks to align with India's consumer behavior, industrial policies, and cost structures.",
                                },

                                {
                                    data1: "Make for India & Make for World Assessment and Strategy",
                                    data2: `We assess whether your business should focus on "Make for India" (localized production and consumption) or "Make for World" (leveraging India as a global manufacturing hub), and design a scalable strategy accordingly.`,
                                },



                            ],

                        data2: [
                            {
                                data1: "Partnerships and Alliances",
                                data2: "We identify potential joint ventures, distribution networks, and supply chain collaborations to accelerate your market entry while ensuring regulatory and operational efficiency.",
                            },
                            {
                                data1: "Workshops on India Opportunity",
                                data2: "We conduct executive workshops to equip leadership teams with in-depth knowledge of India’s business landscape, policy frameworks, and strategic roadmaps for long-term success.",
                            },




                        ],





                        imgSrc: "/assets/images/398.png"



                    }} border={"border-none"} /> */}
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
