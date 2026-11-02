// import Image from "next/image";
// export const dynamic = 'force-dynamic';

import { Metadata } from "next";
import OurClient from "@/components/OurClients";
import AboutNavbar from "@/components/Header/AboutNavbar";
import AboutVideo from "@/components/AboutVideo";
// import Industries from "@/components/Industries";
import ConsultingHome from "@/components/ConsultingHome";
import HomepageExperience from "@/components/HomepageExperience";
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
import FaqComponent from "@/components/FaqComponent";
import WhyMadaskySection from "@/components/WhyMadaskySection";
import LegacyInternalLinks from "@/components/LegacyInternalLinks";
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
    title: "Home Textile & Apparel Manufacturing Consultants | Madasky",
    description: "Madasky helps Home Textile and Apparel manufacturers with turnkey factory projects, operations excellence, AI-enabled planning, fabric optimization and MES.",
    keywords:"home textile and apparel manufacturing consultants, textile factory setup consultant, apparel manufacturing consultant, home textile consultant, operations excellence, AI in textile manufacturing",
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
      {/* Homepage hero retains the approved headline and CTAs. Supporting copy appears below the video. */}
      <AboutVideo
        vid1="/assets/videos/HomePageWebsite.mp4"
        title="Madasky"
        des=""
        h1="Build Better Factories. Run Them Smarter."
        consistentHero
        alignContentToBottom
      >
        <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
          <a
            href="https://calendar.app.google/UMVkRH1hG1f5nNcV7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#E1340D] px-5 py-3 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#C02A0B] sm:px-6 sm:text-base"
          >
            Book a Factory Diagnostic
          </a>
          <a
            href="#solutions"
            className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/80 bg-white/10 px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#0E2C53] sm:px-6 sm:text-base"
          >
            Explore Our Solutions
          </a>
        </div>
      </AboutVideo>

      {/* Approved homepage paragraphs are placed immediately below the hero, matching Production Planning. */}
      <section className="relative overflow-hidden border-b border-[#e1e8ef] bg-gradient-to-br from-[#f5f8fc] via-white to-[#edf3f9] py-12 sm:py-16">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[40px] border-[#0E2C53]/[0.035]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="max-w-5xl border-l-4 border-[#D72B0D] pl-5 sm:pl-8">
            <p className="font-baskervville text-[clamp(1.4rem,2.5vw,2.1rem)] font-semibold leading-snug text-[#0E2C53]">
              Madasky Consulting helps Home Textile and Apparel manufacturers build, improve and digitally transform factories - from turnkey project delivery and operations excellence to AI-enabled manufacturing intelligence.
            </p>
            <p className="mt-5 text-[17px] leading-relaxed text-[#42536a] sm:text-lg">
              We work with promoters, CEOs, COOs and plant leaders on the manufacturing decisions that directly affect capacity, cost, fabric utilization, delivery, manpower and future scalability.
            </p>
          </div>
        </div>
      </section>

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
      <div id="solutions" className="scroll-mt-24">
        <WhatWeSolve />
      </div>

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


          </div>
        </div>
      </section>

      {/* Client review: stories stay in normal document flow without an offset overlay. */}
      <section id="case-studies" className="w-full bg-[#f5f5f6] py-12 sm:py-16">
        <OurCoreCapabilitiesImageSection />
      </section>

      {/* Consistent Why Madasky presentation; approved copy preserved. */}
      <WhyMadaskySection
        title="Why Madasky"
        items={[
          { title: "We Execute, Not Just Recommend", text: "Our work continues into implementation, project coordination, operating routines, commissioning or benefit tracking depending on the assignment." },
          { title: "Manufacturing Problem First", text: "We do not begin with a software product or a machine. We begin with the constraint, economics and operating requirement." },
          { title: "One Integrated View", text: "Factory design, flow, planning, material, people and digital systems are treated as one manufacturing system rather than separate consulting topics." },
        ]}
      />
      <section className="bg-[#f5f5f6] py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 sm:px-8 lg:px-10">
          <p className="max-w-3xl text-lg leading-relaxed text-[#0E2C53]">Ready to transform growth constraints into competitive advantages? Let’s map your path to predictable, scalable performance.</p>
          <Button text="Unlock Your Next Chapter" />
        </div>
      </section>











      {/* Meet the founder */}
      <HomepageExperience image={"/Untitled design (2).png"} altText={imgAltText[2]} />

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
      <HelpYou showDiagnosticCTA />
      <LegacyInternalLinks
        links={[
          { label: "Turnkey Factory Projects", href: "/turnkey-factory-projects" },
          { label: "Operations Excellence", href: "/operations-excellence-consulting" },
          { label: "AI-Enabled Manufacturing Intelligence", href: "/ai-manufacturing-intelligence" },
          { label: "Home Textiles", href: "/industries/home-textiles" },
          { label: "Apparel", href: "/industries/apparel" },
          { label: "Factory Diagnostic", href: "/factory-diagnostic" },
        ]}
      />
      <FaqComponent faqs={faqData} />
      {/* Footer  */}
      <Footer />
    </div>
  );
}
