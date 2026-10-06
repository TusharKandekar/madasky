import { Metadata } from "next";
import ConsultingNavbar from "@/components/ConsultingNavbar";
import CapabilitiesHeader from "@/components/CapabilitiesHeader";

import CapabilitiesContent2 from "@/components/CapabilitiesContent2";

import Footer from "@/components/Footer";
// import vid1 from "/assets/images/People and Organisational Performance69.mp4";
import AboutVideo from "@/components/AboutVideo";
import HelpYou from "@/components/HelpYou";
import BaseUrl from "@/components/BaseUrl";
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
import type { PageMetaDataResponse } from "@/common/types";

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
const title = "Leadership Development & Talent Management";
let PageMetadata: PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
  PageMetadata = await fetchMetaDataByPageName({ pageName: "Leadership Development & Talent Management" });
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
      canonical: `${BaseUrl().mainurl}leadership-development-and-talent-management`,
    },
  };
}

// import SlidingBlogs from '@/components/SlidingBlogs';
// import VideoPlayer from '@/components/VideoPlayer';
// import Imagetemplate from '@/components/Imagesliders';
export default async function GrowthMarketingAndSales() {
  const arr = ["Key Challenges.png", "What we do_.png"];

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
      "Leadership Development & Talent Management",
      "blogs",
    ]);
    videoData = await getDataByPageName([
      "Leadership Development & Talent Management",
      "videos",
    ]);
    galleryData = await getDataByPageName([
      "Leadership Development & Talent Management",
      "gallery",
    ]);
    testimonialData = await getTestimonialsByPageName(
      "Leadership Development & Talent Management"
    );
    eventData = await getEventByPageName(
      "Leadership Development & Talent Management"
    );
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
        h1={PageMetadata?.data?.h1tag}
      />

      <div className="w-[80vw] bg-white mx-auto">
        <div className="w-full my-20">
          <CapabilitiesHeader
            details1={{
              heading1:
                "Leadership Development and Talent Management in Manufacturing",
              paragraph1:
                "In today's fast-evolving manufacturing landscape, strong leadership and effective talent management are no longer optional—they are business imperatives. The ability to drive strategy, inspire teams, and take decisive action determines whether a company thrives or struggles. However, many manufacturing businesses face leadership gaps, unclear succession plans, and talent retention issues that weaken their competitive edge. Without strong leadership and a structured approach to talent development, organizations struggle with misaligned goals, inefficiencies, and a lack of innovation.",
              paragraph2:
                "As the industry navigates digital transformation, supply chain disruptions, and increasing competition, businesses must build leaders who can anticipate challenges, make informed strategic decisions, and foster high-performing teams. Developing leadership at all levels ensures operational excellence, business resilience, and sustained growth in an unpredictable market.",
            }}
            border={"border-b"}
          />

          {/* <CapabilitiesContent1 details1={{
                        heading1: "Key Challenges Faced by the Manufacturing Industry",
                        // paragraph1: "If these challenges resonate with your experience, our Delivery Performance Program is designed to transform these obstacles into opportunities for growth and excellence.",


                        data:
                            [
                                {
                                    data1: "Prolonged Lead Times",
                                    data2: "Delayed sampling cycles reduce agility in responding to client demands, leading to missed opportunities and compromised market competitiveness.",
                                },
                                {
                                    data1: "Inconsistent Quality",
                                    data2: "Sampling errors often result in misaligned expectations between manufacturers and clients, affecting trust and order volumes.",
                                },
                                {
                                    data1: "High Costs",
                                    data2: "Inefficient sampling processes increase operational costs, eroding margins and impacting financial performance.",
                                },
                                {
                                    data1: "Underutilization of Assets",
                                    data2: "Extended sampling timelines lead to equipment and resource idleness, reducing overall asset productivity.",
                                },
                                {
                                    data1: "Limited Innovation in Design",
                                    data2: "Outdated sampling techniques often stifle innovation, leaving businesses unable to meet dynamic market trends and consumer preferences.",
                                },
                                {
                                    data1: "Missed Deadlines",
                                    data2: "Failure to deliver samples on time negatively impacts the client's production schedules and can result in order cancellations or penalties.",
                                },

                            ],

                        imgSrc: "/assets/images/398.png"



                    }} border={"border-b"} /> */}

          <CapabilitiesContent2
            details1={{
              heading1: "Key Challenges Faced by the Industry",
              // heading2: "Manufacturers often encounter hurdles that impede efficiency and impact overall business performance. Below are some of the most common challenges our clients face:",

              data: [
                {
                  data1: "Leadership Gaps and Lack of Succession Planning",
                  data2:
                    "Many organizations lack a structured pipeline for leadership development, leading to uncertainty and inefficiencies when key leaders exit.",
                },
                {
                  data1:
                    "Skill Shortages in Strategic Thinking and Decision-Making",
                  data2:
                    "Operational expertise is abundant, but strategic leadership skills such as critical thinking, problem-solving, and vision-setting are often lacking.",
                },

                {
                  data1: "Low Employee Engagement and High Turnover",
                  data2:
                    "A lack of career progression, unclear growth paths, and poor leadership result in disengaged employees and talent attrition.",
                },
                {
                  data1:
                    "Siloed Communication and Misalignment Between Departments",
                  data2:
                    "Weak leadership leads to disconnected teams, poor collaboration, and misaligned goals, impacting productivity and innovation.",
                },
              ],

              data2: [
                {
                  data1: "Resistance to Change in a Rapidly Evolving Industry",
                  data2:
                    "Traditional leadership mindsets hinder adaptability, slowing digital transformation and operational improvements.",
                },
                {
                  data1: "Lack of a Performance-Driven Culture",
                  data2:
                    "Many manufacturing businesses lack the frameworks to set clear KPIs and drive accountability at every level.",
                },
                {
                  data1: "Inadequate Leadership Coaching and Mentorship",
                  data2:
                    "Without executive coaching, emerging leaders struggle to develop the skills required for strategic decision-making and team management.",
                },
              ],

              imgSrc: `/Key Challenges.png`,
              altText: `${imgAltText[0]}`,
              calendarButton: true,
              btnText: "Plan Your Consultation",
            }}
            border={"border-b"}
          />

          {/* <CapabilitiesHeader2 details1={{
                        heading1: "The Impact of These Challenges",
                        paragraph1: "These challenges can lead to reduced competitiveness, increased operational inefficiencies, delayed production timelines, and diminished profit margins. For manufacturers aiming to thrive in this dynamic environment, embracing innovative solutions is not just an option it's a necessity.",
                        imgSrc: "/assets/images/398.png",


                    }} border={"border-b"} /> */}

          <CapabilitiesContent2
            details1={{
              heading1: "How Madasky Consulting Helps",
              heading2:
                "At Madasky Consulting, we empower manufacturing businesses with a holistic approach to leadership development and talent management through tailored coaching and strategic frameworks:",
              // heading3: "This is just a glimpse of how we can partner with your business to achieve transformative growth. Let's explore how technology can reshape your manufacturing operations and make your business future-ready.",

              data: [
                {
                  data1: "Executive Leadership Coaching",
                  data2:
                    "We develop visionary leaders through one-on-one coaching, equipping them with skills to drive strategy, foster innovation, and lead high-performing teams.",
                },
                {
                  data1: "Strategic Thinking & Decision-Making Training",
                  data2:
                    "Our programs enhance critical thinking, problem-solving, and decision-making skills to help leaders navigate uncertainty and drive business success.",
                },

                {
                  data1: "Team Alignment & Collaboration Frameworks",
                  data2:
                    "We design leadership structures that foster cross-functional collaboration, ensuring alignment between strategy, operations, and workforce objectives.",
                },
                {
                  data1:
                    "Succession Planning & Leadership Pipeline Development",
                  data2:
                    "We create structured succession plans to identify, develop, and prepare future leaders, securing long-term business continuity.",
                },
              ],

              data2: [
                {
                  data1:
                    "High-Performance Culture & Talent Retention Strategies",
                  data2:
                    "Our engagement strategies focus on career growth, motivation, and professional development to retain top talent and reduce turnover.",
                },
                {
                  data1: "Change Leadership & Adaptability Training",
                  data2:
                    "We help leaders develop agility in decision-making, ensuring they can lead digital transformation, process improvements, and operational shifts effectively.",
                },
                {
                  data1: "Performance Management & KPI-Driven Leadership",
                  data2:
                    "We implement leadership KPIs and goal-setting methodologies to drive accountability, measurable success, and continuous improvement.",
                },
                {
                  data1: "Customized Training for Emerging Leaders",
                  data2:
                    "Our structured leadership programs equip high-potential employees with essential management and leadership skills to step into key roles with confidence.",
                },
                {
                  data1: "Coaching for Manufacturing Excellence",
                  data2:
                    "We integrate lean principles, operational efficiency, and leadership best practices to align business goals with workforce performance.",
                },
              ],

              imgSrc: `/What we do_.png`,
              altText: `${imgAltText[2]}`,
              calendarButton: true,
              btnText: "Reserve Your Time",
            }}
            border={"border-b"}
          />

          {/* <CapabilitiesHeader details1={{
                        heading1: "Conclusion",
                        paragraph1: "By addressing these challenges head-on, we empower manufacturers to reduce lead times, enhance asset utilization, and achieve higher order turnarounds. Let us help you redefine your sampling process to unlock unparalleled efficiency and growth. Contact us to learn how we can transform your sampling operations and drive business success.",
                        // paragraph2: "Our expertise in material flow optimization ensures that every aspect of your operations aligns with your business goals. With a focus on measurable results, employee well-being, and sustainable practices, we deliver solutions that empower your business to thrive in an ever-competitive industry.",



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
