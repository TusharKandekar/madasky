// import Image from "next/image";
// export const dynamic = 'force-dynamic';

import { Metadata } from "next";
import OurClient from "@/components/OurClients";
import AboutNavbar from "@/components/Header/AboutNavbar";
import AboutVideo from "@/components/AboutVideo";
// import Industries from "@/components/Industries";
import ConsultingHome from "@/components/ConsultingHome";
import BusinessAchievements from "@/components/BusinessAcheivements";
import MeetTheFounder from "@/components/MeetTheFounder";
import HelpYou from "@/components/HelpYou";
import Footer from "@/components/Footer";
import EventComponent from "@/components/EventComponent";
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
import TestimonialSliderWrapper from "@/components/testimonialSliderWrapper";
import HomeScaleSection from "@/components/HomeScaleSection";
import BannerSlide from "@/components/BannerSlide";
import WhatWeSolve from "@/components/WhatWeSolve";
import ProofPoints from "@/components/ProofPoints";
import BaseUrl from "@/components/BaseUrl";
import OurCoreCapabilitiesImageSection from "@/components/OurCoreCapabilitiesImageSection"
// import axios from "axios";
import Button from "@/components/Button";
import FAQ from "@/components/Faq";
import Button2 from "@/components/Button2";
import Image from "next/image";
import type { PageMetaDataResponse } from "@/common/types";
import {
  getImageAltText,
  fetchMetaDataByPageName,
  getWebBlogs,
  getDataByPageName,
  getTestimonialsByPageName,
  getEventByPageName,
  filterByWebImage,
  getImageData,
} from "@/common/api";

const title = "Home";
const faqData = [
  {
    question: "What does Madasky Consulting specialize in?",
    answer:
      "Madasky specializes in manufacturing transformation for Home Textiles and Apparel, including turnkey factory projects, operations excellence, fabric and raw material optimization, production planning and scheduling, and Digital Factory/MES implementation.",
  },
  {
    question: "Does Madasky set up complete factories?",
    answer:
      "Yes. Madasky can manage the project from product mix and capacity planning through layout, engineering coordination, vendor selection, PMC, commissioning, workforce readiness and operational handover. Major supply packages can remain directly contracted between the client and approved vendors.",
  },
  {
    question: "Does Madasky provide AI solutions?",
    answer:
      "Madasky applies AI-enabled and optimization technologies where they improve a manufacturing decision, particularly fabric utilization, production planning, scheduling, exception management and shopfloor visibility.",
  },
  {
    question: "Which industries does Madasky serve?",
    answer:
      "Madasky's core industries are Home Textiles and Apparel, with extended capabilities across Textiles and Technical Textiles.",
  },
];
// const PageMetadata = await fetchMetaDataByPageName({ pageName: "Home" });

// console.log("PageMetadata", PageMetadata);

// console.log(PageMetadata);
// const rawKeywords: string = PageMetadata?.data?.meta_keyword || '';
// const formattedKeywords: string[] = rawKeywords
//   .split(',')
//   .map((kw: string) => kw.trim());

// export const metadata: Metadata = {
//   title: `${PageMetadata?.data?.meta_title || 'Consulting Experts'} | Madasky`,
//   description: `${PageMetadata?.data?.meta_desc || 'Driving transformation and innovation across industries.'}`,
//   keywords: formattedKeywords,
//   authors: {
//     name: `${PageMetadata?.data?.meta_author || 'Madasky'}`,
//     url: "https://madasky.com",
//   },

// }

// interface PageMetaDataResponse {
//   success: boolean;
//   message: string;
//   data: PageMetaData;
// }

// interface PageMetaData {
//   id: number;
//   meta_title: string;
//   meta_keyword: string;
//   author: string;
//   meta_desc: string;
//   h1tag: string;
//   selected_page: string;
//   created_date: string;
//   created_time: string;
//   created_at: string;
//   created_by: string;
//   webpage: string;
// }

let PageMetadata: PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
  PageMetadata = await fetchMetaDataByPageName({ pageName: "Home" });
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
      canonical: `${BaseUrl().mainurl}`,
    },
  };
}

export default async function Home() {
  const arr = ["Industryhome.jpg", "capabilityhome.png", "amitmittal69.png"];

  let images;
  let blogData;
  let videoData;
  let galleryData;
  let testimonialData;
  let eventData;

  let serverError = false;

  try {
    images = await getImageAltText(arr);
    blogData = await getDataByPageName(["Home", "blogs"]);
    videoData = await getDataByPageName(["Home", "videos"]);
    galleryData = await getDataByPageName(["Home", "gallery"]);
    testimonialData = await getTestimonialsByPageName("Home");
    eventData = await getEventByPageName("Home");

    // console.log("blogData", blogData);
    // console.log("videoData", videoData);
    // console.log("galleryData", galleryData);
    // console.log("Testimonial", testimonialData);
    // console.log("Event", eventData);
  } catch (error) {
    // console.error("Server Error:", error);
    serverError = true;
  }

  // console.log("Images", images);
  if (serverError) {
    return <div>Server Error</div>;
  }

  // if (!images.success) {
  //   return <div>Server Error</div>
  // }

  const imgAltText = await getImageData(images);
  // console.log("imgAltText", imgAltText);

  const steps = [
    {
      number: "01/",
      title: "Business Health Insights",
      description:
        "Uncover the true health of your business in just a few clicks. This executive business report pinpoints hidden friction across capital, operations, and growth initiatives. Completing this quick scan opens direct scheduling with a senior consultant for a 15-minute opportunity mapping session-designed to reveal what's slowing growth and where your next performance boost lies.",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfnp6RAyZqotE5wLbFUEaNjYnfk-u-MsLeDIVMHbTcXFFNcoA/viewform?usp=header"
    },
    {
      number: "02/",
      title: "Sales Quick Sprint",
      description:
        "Reignite your revenue engine for scalable growth. This sprint aligns your sales strategy with your delivery capacity and reveals pipeline gaps and conversion accelerators. You'll also explore real case studies and receive a tactical sales realignment plan to drive consistent results through an exclusive report and 15 minutes opportunity mapping session.",
      link: "https://forms.gle/vHm46D53kn37GUNh6"
    },
    {
      number: "03/",
      title: "Cash and Finance Quick Sprint",
      description:
        "Your business may have ₹1-5 crore in trapped capital-let's help you find it. This focused sprint analyzes your cash flow systems, working capital cycles, and financial rhythms. Start with a simple revenue intake and receive a clear map of cash unlock opportunities in the form of an exclusive report and 15 minutes opportunity mapping session.",
      link: "https://forms.gle/CoYj2ZfUcEYmqybD8"
    },
    {
      number: "04/",
      title: "Operations Quick Sprint",
      description:
        "Identify every delay, waste point, and capacity gap that's limiting throughput. This rapid diagnostic visualizes your end-to-end process efficiency and creates an action-ready blueprint to enhance performance. It's not just analysis-it's a direct path to leaner operations in a form of an exclusive report and 15 minutes opportunity mapping session.",
      link: "https://forms.gle/cq7cB4wjaAM5EksP8"
    },
  ];

  return (
    <div className="w-full">
      <AboutNavbar />
      <AboutVideo
        vid1={"/assets/videos/HomePageWebsite.mp4"}
        title={"Madasky"}
        des={
          "Madasky Consulting helps Home Textile and Apparel manufacturers build, improve and digitally transform factories from turnkey project delivery and operations excellence to Al-enabled manufacturing intelligence."
        }
        color={""}
        h1={PageMetadata.data.h1tag}
      />
      <h2 className="bg-[#f5f5f6] w-full text-4xl font-bold max-md:text-3xl font-baskervville max-md:block text-center py-10">Trusted across manufacturing and industry</h2>
      <OurClient />

      {/* Industries Component */}
      {/* <Industries
        image="/Industryhome.jpg"
        altText={imgAltText[0]}
        title="Our Industries"
        titletext="We deliver exceptional results through advanced technology and innovative solutions. Our expertise enables us to tackle complex challenges and meet client needs effectively."
        order="flex-row"
        subtitle={[
          "Manufacturing Industries",
          "Fashion and Jewellery",
          "E-commerce Industry",
          "Construction",
          "Packaging & Paper",
          "Tourism",
          "Consumer Products",
          "Financial Services",
        ]}
        link={[
          "./manufacturing",
          "./industries",
          "./e-commerce",
          "./construction",
          "./packaging-and-paper",
          "./tourism",
          "./consumer-products",
          "./financial-services",
        ]}
      /> */}

      <HomeScaleSection />
      <WhatWeSolve />

      <ProofPoints />

      {/* Programs Built for Scale  */}
      {/* <section className="bg-[#f5f5f6] py-16  max-md:py-0 relative">
        <h2 className="hidden text-4xl font-bold leading-tight text-gray-900 max-md:pt-20 max-md:block font-baskervville max-md:text-3xl max-xl:text-4xl max-lg:text-center">
          Programs Built for Scale
        </h2>
        <div className="grid grid-cols-2 gap-12 px-6 mx-auto max-w-7xl max-lg:grid-cols-1 max-md:p-8">
          
          <div className="flex flex-col items-center justify-center order-1 max-md:order-2">
            <h2 className="mb-8 font-serif text-4xl font-bold text-gray-900 max-md:hidden font-baskervville">
              Programs Built for Scale
            </h2>

            <div className="space-y-6 max-md:mt-0">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-6 pb-4 border-b border-gray-300 group"
                >
                  <div className="text-4xl group-hover:scale-[2] transform transition-transform duration-500 ease-in-out font-bold text-[var(--bodyContent)] font-serif min-w-[70px]">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold">{step.title}</h3>
                    <p className="text-lg text-gray-700">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <Button text={"Lock In Your Meeting"} />
            </div>
          </div>

          
          <div className="relative w-full max-md:mt-0 h-[90vh] max-lg:h-[18rem] order-2 max-md:order-1">
            <Image
              src="/assets/images/program-build-for-scale-image.png"
              alt="Textile Work"
              fill
              className="z-10 object-fill rounded-xl max-md:rounded-2xl"
            />


          </div>
        </div>

        
      </section> */}

      <BannerSlide />

      {/* 
      <section className="bg-[#f5f5f6] py-16  overflow-hidden max-md:py-0 relative">

        <div className="container mx-auto">

          <h2 className="hidden text-4xl font-bold leading-tight text-gray-900 max-md:pt-20 max-md:block font-baskervville max-md:text-3xl max-xl:text-4xl max-lg:text-center">
            Programs Built for Scale
          </h2>
          <h2 className="mb-8 font-serif text-4xl font-bold text-center text-gray-900 max-md:hidden font-baskervville">
            Programs Built for Scale
          </h2>
          <div className="grid grid-cols-1 gap-12 px-6 mx-auto mt-10 max-w-7xl max-lg:grid-cols-1 max-md:p-8">

            <div className="flex flex-col items-center justify-center order-1 max-md:order-2">


              <div className="space-y-6 max-md:mt-0">
                {steps.slice(0, 4).map((step, idx) => (
                  <div key={idx} className="flex flex-col pb-4 border-b border-gray-300">

                    <div

                      className="flex flex-row items-center gap-6 pb-4 group"
                    >


                      <div className="text-4xl group-hover:scale-[2] transform transition-transform duration-500 ease-in-out font-bold text-[var(--bodyContent)] font-serif min-w-[70px]">
                        {step.number}
                      </div>
                      <div className="w-[80%]">
                        <h3 className="mb-1 text-lg font-semibold">{step.title}</h3>
                        <p className="text-lg text-justify text-gray-700">{step.description}</p>
                      </div>

                      <div className="relative mt-4 w-fit">
                        <Button2 text="Free Report" link={step.link} />
                      </div>
                    </div>


                  </div>
                ))}
              </div>


            </div>







          </div>
      
        </div>



      </section> */}

      <div className="w-full">
        <ConsultingHome image={"/capabilityhome.png"} altText={imgAltText[1]} />
      </div>

      {/* Who We Partner With  */}
      <section className="py-20 bg-white">
        <h2 className="hidden mt-0 text-4xl font-bold leading-tight text-gray-900 max-md:block font-baskervville max-md:text-3xl max-xl:text-4xl max-lg:text-center">
          Industries We Focus On
        </h2>
        {/* Outer wrapper uses grid so each column has its own height context */}
        <div className="grid grid-cols-2 gap-10 px-6 mx-auto max-w-7xl max-lg:grid-cols-1">
          {/* LEFT = Sticky Image */}
          <div className="relative w-full max-lg:mt-12">
            <div className="sticky top-20 w-full h-[28rem] max-md:h-[18rem]">
              <Image
                src="/assets/images/who-we-partner-with.png" // replace with your image
                alt="Business partnership"
                fill
                className="object-cover w-full h-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* RIGHT = Scrollable long content */}
          <div className="flex flex-col gap-12 max-md:items-center">
            {/* Heading */}
            <div>
              <h2 className=" text-4xl font-semibold leading-snug text-gray-900 max-md:hidden max-xl:text-4xl">
                Industries We Focus On
              </h2>
              <p className="hidden max-w-xl text-lg leading-relaxed text-gray-600 max-md:text-justify">
                You're not a startup struggling with basics. You lead an established company that has achieved growth, now faces complexity, and demands sustainable high performance. We partner with organizations that understand scale brings both opportunity and unique challenges.              </p>
            </div>

            {/* PARTNERS LIST (tall content for scrolling) */}
            <div className="space-y-8">
              {/* 1️⃣ Scale Requirements */}
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-[#004A92] rounded-sm mt-1 flex-shrink-0" />
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    Home Textiles
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-600 max-md:text-justify">
                    Core industry: bedding, made-ups, towels, furnishings, quilts, comforters and integrated operations.
                  </p>
                </div>
              </div>

              {/* 2️⃣ Complexity Management */}
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-[#D72B0D] rounded-sm mt-1 flex-shrink-0" />
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    Apparel
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-600 max-md:text-justify">
                    Core industry: cutting, sewing, finishing, packing and complete garment manufacturing systems.
                  </p>
                </div>
              </div>

              {/* 3️⃣ Leadership Relief */}
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-[#6B6B6B] rounded-sm mt-1 flex-shrink-0" />
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    Extended Textiles & Technical Textiles
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-600 max-md:text-justify">
                    Selected manufacturing, factory project, operations and digital assignments where
                    process requirements fit Madasky's capabilities.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional text & CTA */}
            <p className="max-w-xl mt-6 text-lg leading-relaxed text-gray-600 max-md:text-justify">
              We've delivered results for export houses, pharmaceutical
              manufacturers, fast‑growing retail chains, and multi‑unit
              operations where scale creates both challenges and competitive
              advantages.
            </p>

            {/* <button className="bg-[#E1340D] hover:bg-[#C02A0B] text-white font-bold px-6 py-3 rounded-md shadow self-start transition">
              Book Your Free Strategy Call
            </button> */}

            <Button text={"Book Your Free Strategy Call"} />
          </div>
        </div>
      </section>

      {/* Client Success Stories  */}
      <div className="bg-[#9a9a9a] w-full h-[40vh] mt-60 relative max-md:mt-20">

        <div className="relative -top-40">

          <OurCoreCapabilitiesImageSection />
        </div>

      </div>

      {/* Your Next Strategic Move  */}
      <section className="bg-[#f5f5f6] ">
        <h2 className="hidden mt-20 text-4xl font-bold leading-tight text-gray-900 max-md:block font-baskervville max-md:text-3xl max-xl:text-4xl max-lg:text-center">
          Why Madasky
        </h2>
        <div className="relative max-md:mt-24 flex items-center justify-between h-auto gap-10 px-6 py-20 mx-auto overflow-hidden max-w-7xl max-md:py-10 max-lg:flex-col max-lg:gap-12">
          {/* LEFT IMAGE SIDE */}
          <div className="flex relative items-center justify-start w-[40%] h-[30rem] max-md:h-[18rem] max-lg:w-full">
            <Image
              src="/assets/images/project-phoenix.png"
              alt="Project"
              fill
              className="object-cover w-full h-[60%] rounded-lg"
            />
          </div>

          {/* RIGHT CONTENT SIDE */}
          <div className="w-1/2 max-lg:w-full">
            <h2 className="mb-6 text-4xl font-semibold leading-snug text-gray-900 max-md:hidden max-xl:text-4xl">
              Why Madasky
            </h2>

            <p className="hidden max-w-xl mb-8 text-xl leading-relaxed text-gray-600">
              You already possess the numbers, understand the challenges, and
              hold the strategic vision. A focused conversation can map exactly
              where growth potential is constrained and demonstrate what
              systematic unlocking looks like in practice.
            </p>

            {/* Three key points (vertical timeline style) */}
            <div className="relative pl-8 mb-10 space-y-8 border-l border-gray-300">
              {/* #1 */}
              <div className="relative">
                <div className="absolute -left-[46px] top-1 flex items-center justify-center w-8 h-8 bg-gray-900 text-white font-semibold rounded-sm">
                  1
                </div>

                <p className="text-lg leading-relaxed text-gray-600 max-md:text-justify">
                  We Execute, Not Just Recommend - Our work continues into implementation, project coordination, operating routines,
                  commissioning or benefit tracking depending on the assignment.
                </p>
              </div>

              {/* #2 */}
              <div className="relative">
                <div className="absolute -left-[46px] top-1 flex items-center justify-center w-8 h-8 bg-[#D72B0D] text-white font-semibold rounded-sm">
                  2
                </div>

                <p className="text-lg leading-relaxed text-gray-600 max-md:text-justify">
                  Manufacturing Problem First - We do not begin with a software product or a machine. We begin with the constraint, economics
                  and operating requirement.

                </p>
              </div>

              {/* #3 */}
              <div className="relative max-md:w-full">
                <div className="absolute -left-[46px] top-1 flex items-center justify-center w-8 h-8 bg-[#6B6B6B] text-white font-semibold rounded-sm">
                  3
                </div>
                <h3 className=" hidden mb-2 text-lg font-semibold text-gray-900">
                  Leadership Reality
                </h3>
                <p className="text-lg leading-relaxed text-gray-600 max-md:text-justify">
                  One Integrated View - Factory design, flow, planning, material, people and digital systems are treated as one manufacturing
                  system rather than separate consulting topics.                </p>
              </div>
            </div>

            <p className="max-w-xl mb-8 text-lg leading-relaxed text-gray-600 max-md:text-justify">
              Ready to transform growth constraints into competitive advantages?
              Let’s map your path to predictable, scalable performance.
            </p>

            <Button text={"Unlock Your Next Chapter"} />
          </div>
        </div>
      </section>











      {/* Meet the founder */}
      <MeetTheFounder image={"/Untitled design (2).png"} altText={imgAltText[2]} />

      <BusinessAchievements />

      <div className="p-6 flex h-auto flex-col w-full py-[1vh] bg-[#bce1fd75] bg-[url('/assets/images/homeblogbg.png')] bg-center bg-no-repeat bg-cover  items-center justify-center">
        <VideoSliderWrapper videos={videoData.data} />
        <div className="w-[90%] h-[2px] bg-gray-300"></div>

        <BlogSliderWrapper blogs={blogData.data} />
        <div className="w-[90%] h-[2px] bg-gray-300"></div>

        <GallerySliderWrapper gallery={galleryData.data} />

        <EventComponent eventData={eventData.data} />
      </div>

      {/* Words from Our Clients & Testimonials  */}
      {/* <div className="flex items-center justify-center w-full">
        <div className="p-6 flex w-[90%] flex-col   items-center justify-center max-md:flex-col max-md:py-[5vh]">
          <div className="w-full flex flex-col items-center justify-center max-md:w-full pb-[8vh]">
            <h2 className="text-6xl font-bold text-center width-full max-md:text-4xl max-md:text-center">
              Words from Our Clients
            </h2>
            <p className="text-center text-xl text-gray-500 py-4 w-[80%]  max-md:w-full max-md:text-justify">
              Discover how we've made a difference through the voices of those
              who matter most—our clients. Here, you'll find heartfelt
              testimonials and feedback that showcase our commitment to
              excellence and the positive impact we've had on their businesses.
              Their stories are a testament to the quality of our services and
              our dedication to client satisfaction.
            </p>
          </div>
          <div className="flex flex-col items-end justify-end w-full max-md:w-full">
            <TestimonialSliderWrapper testimonials={testimonialData.data} />
          </div>
        </div>
      </div> */}

      {/* HelpYou  */}
      <HelpYou />
<FAQ questions={faqData} />
      {/* Footer  */}
      <Footer />
    </div>
  );
}
