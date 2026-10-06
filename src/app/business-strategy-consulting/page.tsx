import { Metadata } from "next";
import ConsultingNavbar2 from "@/components/ConsultingNavbar2";
import Footer from "@/components/Footer";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import BaseUrl from "@/components/BaseUrl";
// import vid1 from "/assets/images/Business Strategy.mp4";
import AboutVideo from "@/components/AboutVideo";
import HelpYou from "@/components/HelpYou";
// import SlidingBlogs from '@/components/SlidingBlogs.jsx';
// import VideoPlayer from '@/components/VideoPlayer.jsx';
// import Imagetemplate from '@/components/Imagesliders.jsx';
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
import FaqComponent from "@/components/FaqComponent";
import Button from "@/components/Button";

import {
  getImageAltText,
  fetchMetaDataByPageName,
  getWebBlogs,
  getDataByPageName,
  filterByWebImage,
  getImageData,
  getTestimonialsByPageName,
  getEventByPageName,
} from "@/common/api";
import type { PageMetaDataResponse } from "@/common/types";

const title = "Business Strategy";
let PageMetadata: PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
  PageMetadata = await fetchMetaDataByPageName({
    pageName: "Business Strategy",
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
      canonical: `${BaseUrl().mainurl}business-strategy-consulting`,
    },
  };
}

type Faq = {
  question: string;
  answer: string;
};

export default async function GrowthMarketingAndSales() {
  const arr = [
    "Key Challenges.png",
    "What we do_.png",
    "Tailored Solutions.png",
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
    blogData = await getDataByPageName(["Business Strategy", "blogs"]);
    videoData = await getDataByPageName(["Business Strategy", "videos"]);
    galleryData = await getDataByPageName(["Business Strategy", "gallery"]);
    testimonialData = await getTestimonialsByPageName("Business Strategy");
    eventData = await getEventByPageName("Business Strategy");
  } catch (error) {
    // console.error("Server Error:", error);
    serverError = true;
  }

  // console.log("Images", images);
  if (serverError) {
    return <div>Server Error</div>;
  }

  const faqs: Faq[] = [
    {
      question: "What challenges do manufacturing companies face today?",
      answer:
        "They face issues like misjudging market trends, poor investment strategies, and regulatory compliance risks.",
    },
    {
      question: "How does Madasky Consulting support manufacturers?",
      answer:
        "We provide business consulting and research-based insights to help make data-driven, strategic decisions.",
    },
    {
      question: "What services do you offer for public market listing?",
      answer:
        "We offer financial benchmarking, competitor analysis, and market sentiment research for a smooth listing process.",
    },
    {
      question: `What are the main challenges in India's manufacturing sector?`,
      answer:
        "Key challenges include regulatory complexity, cost-quality balance, and supply chain bottlenecks.",
    },
    {
      question: "How can Madasky help companies enter the Indian market?",
      answer:
        "We provide market opportunity analysis, go-to-market customization, partnership support, and leadership workshops.",
    },
  ];

  const imgAltText = await getImageData(images);
  return (
    <>
      <ConsultingNavbar2
        url="/business-strategy-consulting"
        title={"Business Strategy"}
      />
      <AboutVideo
        vid1={`/assets/videos/Business Strategy.mp4`}
        title={title}
        des={
          "Creating and accelerating critical advantages through cutting-edge strategy and operations"
        }
        h1={PageMetadata?.data?.h1tag}
      />

      <div className="w-[80vw] bg-white mx-auto">
        <div className="w-full my-20">
          <div
            className={`flex flex-col gap-8 pb-8 mt-8 w-full border-b border-gray-300`}
          >
            <div className="text-4xl font-bold text-black max-md:text-3xl">
              <h2>Research & Business Intelligence</h2>
            </div>
            {/* style={{ fontFamily: "Helvetica, Arial, sans-serif" }}  */}
            <div className="text-gray-700 text-[20px] font-extralight flex flex-col gap-4">
              <p className="text-justify text-gray-700 text-[18px]">
                Manufacturing companies today operate in a highly dynamic and
                unpredictable environment where traditional business strategies
                are no longer sufficient. With shifting global supply chains,
                increasing regulatory demands, rapid technological advancements,
                and volatile market conditions, manufacturers must base their
                decisions on comprehensive research and data-driven insights.
              </p>

              {/* Key Challenges */}
              <div className={`flex pb-0 mt-4 w-full`}>
                <div className="flex flex-col w-full gap-2">
                  <div className="hidden ml-0 font-bold text-2xl text-gray-600 leading-[1] max-md:flex">
                    <FaArrowRight className="text-[20px] max-md:text-[20px] max-md:mt-[4px] mt-[2px]" />
                    <h2>Key Challenges</h2>
                  </div>

                  <div className="hidden w-full rounded-lg max-md:block">
                    <div className="relative h-[15rem]">
                      <Image
                        fill
                        src={`${BaseUrl().imgurl}Key Challenges.png`}
                        alt={imgAltText[0]}
                        className="object-cover rounded-2xl"
                      ></Image>
                    </div>
                  </div>
                  {/* style={{ fontFamily: "Helvetica, Arial, sans-serif" }} */}
                  <div className="text-gray-500 text-[20px] font-extralight text-justify max-md:text-justify flex flex-col gap-4">
                    <ul className="flex flex-col pl-16 list-disc max-md:px-4">
                      <div className="flex flex-row max-md:grid-cols-1">
                        <div className="w-[60%] max-md:w-full max-md:mt-2">
                          <div className="flex gap-2 -ml-16 font-bold text-2xl text-gray-600 leading-[1] max-md:hidden">
                            <FaArrowRight className="text-[20px] max-md:text-[20px] max-md:mt-[4px] mt-[2px]" />
                            <h2>Key Challenges</h2>
                          </div>
                          <ul className="list-disc text-[18px] max-md:w-full">
                            <li>
                              <p className="font-normal text-gray-700">
                                <span className="font-semibold text-gray-600">
                                  Misjudging Market Trends:{" "}
                                </span>
                                Failure to identify and respond to emerging
                                trends leads to missed opportunities and
                                stagnant growth.
                              </p>
                            </li>

                            <li>
                              <p className="font-normal text-gray-700">
                                <span className="font-semibold text-gray-600">
                                  Ineffective Investment Strategies:{" "}
                                </span>
                                Poorly planned investments in capacity
                                expansion, technology, or new markets can lead
                                to financial losses.
                              </p>
                            </li>


                            <li>
                              <p className="font-normal text-gray-700">
                                <span className="font-semibold text-gray-600">
                                  Regulatory and Compliance Risks:{" "}
                                </span>
                                Rapidly changing compliance requirements can
                                cause legal challenges, penalties, or
                                disruptions.
                              </p>
                            </li>


                          </ul>
                        </div>

                        <div className="w-[40%] flex justify-center rounded-lg max-md:hidden">
                          <div className="relative h-[16rem] w-[80%]">
                            <Image
                              fill
                              src={`${BaseUrl().imgurl}Key Challenges.png`}
                              alt={imgAltText[0]}
                              className="object-fill rounded-2xl"
                            ></Image>
                          </div>
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>

              {/* What We Do */}
              <div className={`flex pb-8 mt-4 w-full`}>
                <div className="flex flex-col w-full gap-2">
                  <div className="flex gap-2 font-bold text-2xl text-gray-600 leading-[1] max-md:text-xl">
                    <FaArrowRight className="text-[20px] max-md:text-[20px] max-md:mt-[4px] mt-[2px]" />
                    <h2>What We Do</h2>
                  </div>

                  <div className="hidden w-full rounded-lg max-md:block">
                    <div className="relative h-[15rem]">
                      <Image
                        fill
                        src={`${BaseUrl().imgurl}What we do_.png`}
                        alt={imgAltText[1]}
                        className="object-cover rounded-2xl"
                      ></Image>
                    </div>
                  </div>
                  {/* style={{ fontFamily: "Helvetica, Arial, sans-serif" }} */}
                  <div className="flex flex-col gap-4 text-justify text-gray-500 font-extralight max-md:text-justify">
                    <p className="pl-12 font-normal text-gray-600 text-[18px] max-md:text-justify max-md:px-2">
                      At Madasky Consulting, we specialize in business
                      consulting solutions tailored to the manufacturing sector,
                      combining strategy consulting expertise with actionable
                      insights to help companies make informed, data-driven
                      decisions. Our business consulting services are designed
                      to ensure resilience, competitiveness, and
                      future-readiness.
                    </p>

                    <p className="pl-12 text-2xl font-semibold text-gray-600 max-md:px-2 max-md:text-left">
                      Strategic Research & Business Intelligence Solutions:
                    </p>

                    <ul className="flex flex-col pl-16 list-disc max-md:px-4">
                      <div className="flex flex-row max-md:grid-cols-1">
                        <div className="w-[60%] max-md:w-full text-[18px]">
                          <ul className="list-disc text-md">
                            <li>
                              <p className="font-normal text-gray-700">
                                <span className="font-semibold text-gray-600">
                                  Research Support for Public Market Listing:{" "}
                                </span>
                                We provide in-depth financial benchmarking,
                                competitor analysis, and market sentiment
                                research through corporate strategy consulting
                                frameworks, ensuring a seamless public listing
                                process.
                              </p>
                            </li>

                            <li>
                              <p className="font-normal text-gray-700">
                                <span className="font-semibold text-gray-600">
                                  Investment Thesis Development:{" "}
                                </span>
                                Leveraging strategy consulting methodologies, we
                                craft compelling investment narratives backed by
                                sector analysis, financial modeling, and
                                competitive intelligence.
                              </p>
                            </li>

                            <li>
                              <p className="font-normal text-gray-700">
                                <span className="font-semibold text-gray-600">
                                  Market Opportunity Mapping:{" "}
                                </span>
                                Our business strategy consulting services
                                identify untapped markets, demand trends, and
                                competitive landscapes to guide scalable
                                expansion strategies.
                              </p>
                            </li>

                            <li>
                              <p className="font-normal text-gray-700">
                                <span className="font-semibold text-gray-600">
                                  Customer Segment Analysis:{" "}
                                </span>
                                We decode customer behaviors and preferences
                                using business consulting solutions, enabling
                                tailored product positioning and marketing
                                strategies.
                              </p>
                            </li>

                            <li>
                              <p className="font-normal text-gray-700">
                                <span className="font-semibold text-gray-600">
                                  Impact Assessment Studies:{" "}
                                </span>
                                Evaluate risks and opportunities with our
                                corporate strategy consulting insights, designed
                                to align decisions with market dynamics and
                                global trends.
                              </p>
                            </li>
                          </ul>
                        </div>

                        <div className="w-[40%] flex justify-center rounded-lg max-md:hidden">
                          <div className="relative h-[16rem] w-[80%]">
                            <Image
                              fill
                              src={`${BaseUrl().imgurl}What we do_.png`}
                              alt={imgAltText[1]}
                              className="object-fill rounded-2xl"
                            ></Image>
                          </div>
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <Button text={"Book Your Session"} />
          </div>

          {/* *********************************************************************************************** */}

          <div
            className={`flex flex-col gap-8 pb-8 mt-8 w-full border-b border-gray-300`}
          >
            <div className="text-4xl font-bold text-black max-md:text-3xl">
              <h2>India Business Strategy</h2>
            </div>

            <p className="text-justify text-gray-700 text-[18px]">
              India's manufacturing sector offers immense potential, but
              navigating its complexities requires business strategy consulting
              services that blend local expertise with global best practices.
            </p>

            {/* style={{ fontFamily: "Helvetica, Arial, sans-serif" }} */}
            <div className="text-gray-700 text-[20px] font-extralight flex flex-col gap-4">
              {/* Key Challenges */}
              <div className={`flex mt-4 w-full`}>
                <div className="flex flex-col w-full gap-2">
                  <div className="flex gap-2 font-bold text-2xl text-gray-600 leading-[1] max-md:text-xl">
                    <FaArrowRight className="text-[20px] max-md:text-[20px] max-md:mt-[4px]  mt-[2px]" />
                    <h2>Key Challenges</h2>
                  </div>

                  <div className="hidden w-full rounded-lg max-md:block">
                    <div className="relative h-[15rem]">
                      <Image
                        fill
                        src={`${BaseUrl().imgurl}Key Challenges.png`}
                        alt={imgAltText[0]}
                        className="object-cover rounded-2xl"
                      ></Image>
                    </div>
                  </div>
                  {/* style={{ fontFamily: "Helvetica, Arial, sans-serif" }} */}
                  <div className="text-gray-500 text-[18px] font-extralight text-justify max-md:text-justify flex flex-col gap-4">
                    <ul className="flex flex-col pl-16 list-disc max-md:px-6">
                      <div className="flex flex-row max-md:grid-cols-1">
                        <div className="w-[60%] max-md:w-full">
                          <ul className="list-disc">
                            <li>
                              <p className="font-normal text-gray-700">
                                <span className="font-semibold text-gray-600">
                                  Regulatory Complexity:{" "}
                                </span>{" "}
                                Frequent policy changes demand corporate
                                strategy consulting expertise to mitigate
                                compliance risks.
                              </p>
                            </li>

                            <li>
                              <p className="font-normal text-gray-700">
                                <span className="font-semibold text-gray-600">
                                  {" "}
                                  Cost vs. Quality Pressures:{" "}
                                </span>{" "}
                                Balancing price sensitivity with innovation
                                requires business consulting solutions that
                                optimize operations without compromising
                                standards.
                              </p>
                            </li>

                            <li>
                              <p className="font-normal text-gray-700">
                                <span className="font-semibold text-gray-600">
                                  Supply Chain Bottlenecks:{" "}
                                </span>{" "}
                                Our business consulting services address
                                inefficiencies in procurement, logistics, and
                                infrastructure to enhance competitiveness.
                              </p>
                            </li>
                          </ul>
                        </div>

                        <div className="w-[40%] flex items-center justify-center rounded-lg max-md:hidden">
                          <div className="relative h-[16rem] w-[80%]">
                            <Image
                              fill
                              src={`${BaseUrl().imgurl}Key Challenges.png`}
                              alt={imgAltText[0]}
                              className="object-cover rounded-2xl"
                            ></Image>
                          </div>
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Help You Navigate and Capitalize on India's Business Potential */}
              <div className={`flex mt-4 w-full`}>
                <div className="flex flex-col w-full gap-2">
                  <div className="flex gap-2 font-bold text-2xl text-gray-600 leading-[1] max-md:text-xl">
                    <FaArrowRight className="text-[20px] max-md:text-[18px] max-md:mt-[4px] mt-[2px]" />
                    <h2>
                      How We Help You Navigate and Capitalize on India's
                      Business Potential
                    </h2>
                  </div>

                  <div className="hidden w-full rounded-lg max-md:block">
                    <div className="relative h-[15rem]">
                      <Image
                        fill
                        src={`${BaseUrl().imgurl}Tailored Solutions.png`}
                        alt={
                          imgAltText[2] ? imgAltText[2] : "Tailored Solutions"
                        }
                        className="object-cover rounded-2xl"
                      ></Image>
                    </div>
                  </div>
                  {/* style={{ fontFamily: "Helvetica, Arial, sans-serif" }} */}
                  <div className="text-gray-500 text-[18px] font-extralight text-justify max-md:text-justify flex flex-col gap-4">
                    <ul className="flex flex-col pl-16 list-disc max-md:px-6">
                      <div className="flex flex-row max-md:grid-cols-1">
                        <div className="w-[60%] max-md:w-full">
                          <p className="text-justify text-gray-700 max-md:px-2 text-[18px]">
                            Our consulting expertise ensures a structured
                            approach to entering and scaling in the Indian
                            manufacturing sector. We provide end-to-end
                            strategy, market intelligence, and execution support
                            to help businesses build a strong foundation in
                            India.
                          </p>

                          <ul className="list-disc">
                            <li>
                              <p className="font-normal text-gray-700">
                                <span className="font-semibold text-gray-600">
                                  Business Opportunity Analysis:{" "}
                                </span>{" "}
                                Identify high-growth opportunities in India and
                                South Asia with strategy consulting frameworks
                                that align with government policies like PLI
                                Schemes.
                              </p>
                            </li>

                            <li>
                              <p className="font-normal text-gray-700">
                                <span className="font-semibold text-gray-600">
                                  Market Customization:{" "}
                                </span>
                                Tailor your go-to-market strategy using business
                                strategy consulting insights to align with
                                India's diverse consumer behavior and cost
                                structures.
                              </p>
                            </li>

                            <li>
                              <p className="font-normal text-gray-700">
                                <span className="font-semibold text-gray-600">
                                  Make for India & Make for World Assessment and
                                  Strategy:{" "}
                                </span>
                                Our corporate strategy consulting team evaluates
                                whether to prioritize localized production or
                                global exports, designing scalable pathways for
                                success.
                              </p>
                            </li>

                            <li>
                              <p className="font-normal text-gray-700">
                                <span className="font-semibold text-gray-600">
                                  Strategic Partnerships:{" "}
                                </span>{" "}
                                Accelerate market entry with business consulting
                                services that identify joint ventures,
                                distribution networks, and compliant
                                collaborations.
                              </p>
                            </li>

                            <li>
                              <p className="font-normal text-gray-700">
                                <span className="font-semibold text-gray-600">
                                  Leadership Workshops:{" "}
                                </span>
                                Equip teams with strategy consulting roadmaps to
                                navigate India's regulatory, operational, and
                                cultural landscape.
                              </p>
                            </li>
                          </ul>
                        </div>

                        <div className="w-[40%] flex items-center justify-center rounded-lg max-md:hidden">
                          <div className="relative h-[16rem] w-[80%]">
                            <Image
                              fill
                              src={`${BaseUrl().imgurl}Tailored Solutions.png`}
                              alt={
                                imgAltText[2]
                                  ? imgAltText[2]
                                  : "Tailored Solutions"
                              }
                              className="object-cover rounded-2xl"
                            ></Image>
                          </div>
                        </div>
                      </div>
                    </ul>

                    {/* <p className='pl-12 text-xl font-normal text-gray-700 max-md:px-0 max-md:text-justify'>By leveraging our expertise, businesses can confidently navigate India's manufacturing ecosystem, mitigate risks, and position themselves for sustained growth. Are you ready to explore India's manufacturing potential? Let's build a roadmap together!</p> */}
                  </div>
                </div>
              </div>
            </div>
            <Button text={"Schedule Expert Call"} />
          </div>

          {/* *************************************************************** */}

          <FaqComponent faqs={faqs} />
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
