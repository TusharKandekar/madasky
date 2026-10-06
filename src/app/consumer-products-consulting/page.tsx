import { Metadata } from "next";

import ConsultingNavbar2 from "@/components/ConsultingNavbar2";
import CapabilitiesHeader from "@/components/CapabilitiesHeader";
// import CapabilitiesHeader2 from '@/components/CapabilitiesHeader2.jsx';
import CapabilitiesContent1 from "@/components/CapabilitiesContent1";
import CapabilitiesContent2 from "@/components/CapabilitiesContent2";
// import CapabilitiesContent3 from '@/components/CapabilitiesContent3.jsx';
// import CapabilitiesContent4 from '@/components/CapabilitiesContent4.jsx';
import Banner2 from "@/components/Banner2";
import Footer from "@/components/Footer";
// import vid1 from "/assets/images/GROWTH MARKETING AND SALES69.mp4";
// import vid1 from "/assets/images/314.mp4";
// import AboutVideo from '../components/AboutVideo.jsx';
import HelpYou from "@/components/HelpYou";
// import SlidingBlogs from '@/components/SlidingBlogs.jsx';
// import VideoPlayer from '@/components/VideoPlayer.jsx';
// import Imagetemplate from '@/components/Imagesliders.jsx';
import BaseUrl from "@/components/BaseUrl";
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
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
const title = "Consumer Products";
const PageMetadata = await fetchMetaDataByPageName({
  pageName: "Consumer Products",
});

// console.log(PageMetadata);
const rawKeywords: string = PageMetadata?.data?.meta_keyword || "";
const formattedKeywords: string[] = rawKeywords
  .split(",")
  .map((kw: string) => kw.trim());

export const metadata: Metadata = {
  title: `Madasky | ${PageMetadata?.data?.meta_title || "Consumer Products"}`,
  description: `${
    PageMetadata?.data?.meta_desc ||
    "Driving transformation and innovation across industries."
  }`,
  keywords: formattedKeywords,
  authors: {
    name: `${PageMetadata?.data?.meta_author || "Madasky"}`,
    url: "https://madasky.com",
  },
  alternates: {
    canonical: `${BaseUrl().mainurl}consumer-products-consulting`,
  },
};
export default async function GrowthMarketingAndSales() {
  const arr = [
    "Consumer Products Industry Header .png",
    "What we do_.png",
    "Consumer Products Industry Comprehensive Solutions for Every Challenge.png",
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
    blogData = await getDataByPageName(["Consumer Products", "blogs"]);
    videoData = await getDataByPageName(["Consumer Products", "videos"]);
    galleryData = await getDataByPageName(["Consumer Products", "gallery"]);
    testimonialData = await getTestimonialsByPageName("Consumer Products");
    eventData = await getEventByPageName("Consumer Products");
  } catch (error) {
    // console.error("Server Error:", error);
    serverError = true;
  }

  // console.log("Images", images);
  if (serverError) {
    return <div>Server Error</div>;
  }

  const imgAltText = await getImageData(images);
  return (
    <>
      <ConsultingNavbar2 url="/consumer-products-consulting" title={"Consumer Products"} />
      <Banner2
        // img="bg-[url('/assets/images/Solutionheader.png')]"
        img={`${BaseUrl().imgurl}/Consumer Products Industry Header .png`} ///Consumer Products Industry Header .png'
        title={title}
        altText={`${imgAltText[0]}`}
        h1={PageMetadata?.data?.h1tag}
      />
      {/* <AboutVideo vid1={vid1} title={"Madasky"} des={"Creating and accelerating critical advantages through cutting-edge strategy and operations"} /> */}

      <div className="w-[80vw] bg-white mx-auto">
        <div className="w-full my-20">
          <CapabilitiesHeader
            details1={{
              heading1: "Consumer Products Industry",
              paragraph1:
                "Today's consumer products companies face constant disruptions, shifting consumer demands, technological advances, and fierce competition. Challenges like digital transformation, sustainability, regulatory changes, and global uncertainties require agility and innovation. At Madasky Consulting, we help companies turn these disruptions into opportunities for sustainable growth and success.",
              // paragraph2: "As businesses expand, the complexity of managing working capital grows, leading to increased financial stress, strained vendor relationships, and missed opportunities for reinvestment. Without an optimized strategy, manufacturers may find themselves constantly firefighting liquidity issues rather than strategically driving growth.",
              // paragraph3: "This is not just about quick fixes, it's about creating a sustainable, cash-positive business that thrives in any market condition.",
            }}
            border={"border-b"}
          />

          <CapabilitiesContent1
            details1={{
              heading1: "How We Help Consumer Products Companies",
              paragraph1:
                "Madasky Consulting offers tailored solutions to help consumer products companies build lasting value. Our experienced team combines strategic insight with operational expertise, enabling clients to turn challenges into competitive advantages.",

              data: [
                {
                  data1: "Practical Results, Real Impact",
                  data2:
                    "We deliver actionable solutions and measurable outcomes, emphasizing immediate and lasting improvements through rigorous execution.",
                },
                {
                  data1: "End-to-End Transformation",
                  data2:
                    "We provide comprehensive transformation services covering strategy, operations, digital capabilities, organization, and customer-centric marketing.",
                },

                {
                  data1: "Mutual Success through Collaboration",
                  data2:
                    "We build partnerships based on shared success, aligning closely with client's goals through innovative commercial models.",
                },
              ],

              imgSrc: `/What we do_.png`,
              altText: `${imgAltText[1]}`,
            }}
            border={"border-b"}
          />

          <CapabilitiesContent2
            details1={{
              heading1: "Comprehensive Solutions for Every Challenge",
              heading2:
                "Madasky Consulting offers deep expertise tailored to your unique needs, enabling rapid growth, improved profitability, and stronger cash flow.",
              paragraph1: "Our Expertise Areas Include:",
              heading3:
                "Partner with Madasky Consulting to turn uncertainty into strategic advantage, ensuring continued resilience and growth.",
              // heading4: "When you partner with us, you gain more than just solutions you gain a trusted advisor committed to your success. Let's turn your financial challenges into opportunities and position your business for sustainable growth. Ready to accelerate your cash flow? Let's talk.",

              data: [
                {
                  data1: "Digital Transformation",
                  data2:
                    "Embracing digital technologies, optimizing e-commerce, enhancing customer engagement, and streamlining operations.",
                },
                {
                  data1: "Marketing Excellence",
                  data2:
                    "Data-driven strategies to boost brand positioning, customer value, and market share.",
                },

                {
                  data1: "Growth Strategy Development",
                  data2:
                    "Actionable growth plans based on market analysis and consumer insights.",
                },
                {
                  data1: "Organizational Optimization",
                  data2:
                    "Improving structures, leadership, talent development, and culture for high performance.",
                },
              ],

              data2: [
                {
                  data1: "Operational Efficiency",
                  data2:
                    "Optimizing supply chains, reducing costs, and improving production processes.",
                },
                {
                  data1: "Advanced Analytics",
                  data2:
                    "Data-driven insights to forecast trends, optimize pricing, and enhance decision-making.",
                },
              ],

              imgSrc: `/Consumer Products Industry Comprehensive Solutions for Every Challenge.png`,
              altText: `${imgAltText[2]}`,
            }}
            border={"border-none"}
          />

          {/* <CapabilitiesHeader2 details1={{
                        heading1: "How We Help You Navigate and Capitalize on India's Business Potential",
                        paragraph1: "Our consulting expertise ensures a structured approach to entering and scaling in the Indian manufacturing sector. We provide end-to-end strategy, market intelligence, and execution support to help businesses build a strong foundation in India.",
                        imgSrc: "/assets/images/398.png",


                    }} border={"border-b"} /> */}
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
