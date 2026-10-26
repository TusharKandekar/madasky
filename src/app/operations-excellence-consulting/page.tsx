import type { Metadata } from "next";

import ConsultingNavbar from "@/components/ConsultingNavbar";
import AboutVideo from "@/components/AboutVideo";
import OperationsExcellenceSections from "@/components/OperationsExcellenceSections";
import LegacyInternalLinks from "@/components/LegacyInternalLinks";
import FaqComponent from "@/components/FaqComponent";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import HelpYou from "@/components/HelpYou";
import Footer from "@/components/Footer";
import BaseUrl from "@/components/BaseUrl";
import type { PageMetaDataResponse } from "@/common/types";
import FaqComponent from "@/components/FaqComponent";
import SelectedOperationsImpact from "@/components/SelectedOperationsImpact";
import LegacyInternalLinks from "@/components/LegacyInternalLinks"

import {
  fetchMetaDataByPageName,
  getDataByPageName,
  getImageAltText,
} from "@/common/api";

import type { Blog, Gallery, Video } from "@/common/types";

const pageName = "Operations Excellence";

const fallbackMeta = {
  title: "Operations Excellence for Textile & Apparel | Madasky",
  description:
    "Improve productivity, OTIF, capacity, manpower, WIP, lead time and cost in Home Textile and Apparel factories with implementation-led operations consulting.",
  keywords:
    "operations excellence textile apparel, manufacturing productivity improvement, textile productivity consultant, apparel efficiency improvement, OTIF improvement, WIP reduction",
};

export async function generateMetadata(): Promise<Metadata> {
  try {
    const response = await fetchMetaDataByPageName({ pageName });
    const meta = response?.data;

    return {
      title: meta?.meta_title || fallbackMeta.title,
      description: meta?.meta_desc || fallbackMeta.description,
      keywords: meta?.meta_keyword || fallbackMeta.keywords,
      authors: {
        name: meta?.author || "Madasky",
        url: "https://madasky.com",
      },
      alternates: {
        canonical: `${BaseUrl().mainurl}/operations-excellence-consulting`,
      },
    };
  } catch {
    return {
      title: fallbackMeta.title,
      description: fallbackMeta.description,
      keywords: fallbackMeta.keywords,
      authors: {
        name: "Madasky",
        url: "https://madasky.com",
      },
      alternates: {
        canonical: `${BaseUrl().mainurl}/operations-excellence-consulting`,
      },
    };
  }
}

const faqs = [
  {
    question: "What is Operations Excellence?",
    answer:
      "Operations Excellence is the disciplined improvement of processes, capacity, people, planning, quality and management routines so the factory produces more reliable output at lower loss.",
  },
  {
    question: "How quickly can results be seen?",
    answer:
      "Timing depends on the constraint. A diagnostic should identify priority opportunities quickly; implementation benefits are then tracked against an agreed baseline rather than promised in advance.",
  },
  {
    question: "Does Operations Excellence require new machinery?",
    answer:
      "Not necessarily. Many losses come from imbalance, planning, flow, downtime, changeovers, quality and operating routines. Capex should follow a verified need.",
  },
  {
    question: "Can Madasky work alongside our internal IE or Lean team?",
    answer:
      "Yes. Madasky can complement internal capability by providing independent diagnosis, cross-functional coordination and implementation support.",
  },
  {
    question: "How do you measure success?",
    answer:
      "KPIs are agreed at the beginning and may include output, capacity utilization, manpower productivity, OTIF, WIP, lead time, quality, downtime and financial impact.",
  },
];

type ImageAltResponse = {
  data?: Array<{ webimage?: string; alt_text?: string }>;
};

export default async function OperationsExcellencePage() {
  let productionImageAlt = "Operations excellence on the manufacturing floor";
  let blogs: Blog[] = [];
  let videos: Video[] = [];
  let gallery: Gallery[] = [];

  try {
    const imageResponse = (await getImageAltText([
      "Operations excellence.png",
    ])) as ImageAltResponse | null;

    const image = (imageResponse?.data || []).find(
      (item) => item.webimage === "Operations excellence.png"
    );
    productionImageAlt = image?.alt_text || productionImageAlt;
  } catch {
    // Keep useful fallback alt text when image metadata is unavailable.
  }

  try {
    const [blogResponse, videoResponse, galleryResponse] = await Promise.all([
      getDataByPageName([pageName, "blogs"]),
      getDataByPageName([pageName, "videos"]),
      getDataByPageName([pageName, "gallery"]),
    ]);

    blogs = Array.isArray(blogResponse?.data) ? blogResponse.data : [];
    videos = Array.isArray(videoResponse?.data) ? videoResponse.data : [];
    gallery = Array.isArray(galleryResponse?.data) ? galleryResponse.data : [];
  } catch {
    blogs = [];
    videos = [];
    gallery = [];
  }

  return (
    <>
      <ConsultingNavbar
        url="/operations-excellence-consulting"
        title={pageName}
        navItems={[
          {
            title: "Productivity & Efficiency Improvement",
            link: "/productivity-and-efficiency-improvement",
          },
          { title: "Implementation Support", link: "/implementation-support" },
          {
            title: "Delivery Performance & Lead Time Reduction",
            link: "/delivery-performance-and-lead-time-reduction-program",
          },
          {
            title: "Sampling Lead Time Reduction",
            link: "/sampling-lead-time-reduction",
          },
        ]}
      />

      <AboutVideo
        vid1={"/assets/videos/OPERATIONS-PRODUCTIVITY-IMPROVEMENT69.mp4"}
        title={"Improve the performance of the factory you already own."}
        des={
          "Madasky helps Home Textile and Apparel manufacturers increase output, improve OTIF, reduce WIP and lead time, strengthen manpower productivity and remove operational losses - with implementation on the factory floor."
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
                    Busy Is Not the Same as Productive
                  </p>

                  <p className="py-1 pl-5 text-lg font-normal text-gray-500 max-md:px-0">

                    Most factories do not lose performance through one dramatic failure. They lose it through waiting, imbalanced work,
                    weak scheduling, material delays, changeovers, rework, downtime, excess WIP, poor daily routines and decisions that
                    arrive too late. Overtime and additional manpower can temporarily hide these losses, but they rarely remove the cause.
                  </p>
                  <p className="py-1 pl-5 text-lg font-normal text-gray-500 max-md:px-0">
                    Madasky begins by establishing the baseline: what the factory should be capable of, what it is actually delivering and
                    where the gap is created. We then rank opportunities by financial impact, implementation effort and speed. The
                    objective is not to apply a standard lean toolkit. It is to remove the constraints that matter to that factory.

                  </p>
                </div>,
              ],

              hdes: [],
              img: "factory-floor.png",
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
                    What We Improve
                  </p>

                  <div className="pl-10 max-md:px-6 flex flex-col w-full gap-4 max-md:text-xl font-normal text-[#6B7280] font-times">
                    <ul className="flex flex-col gap-4 list-disc">
                      <li>
                        <a href="./productivity-and-efficiency-improvement">
                          {/* <Link to='/productivity-and-efficiency-improvement'> */}
                          <p className="flex items-center font-semibold cursor-pointer hover:underline">
                            Productivity & Output - process capacity, line balance, methods, standard work and constraint removal.
                          </p>
                          {/* </Link> */}
                        </a>
                      </li>
                      <li>
                        <a href="./implementation-support">
                          {/* <Link to='/delivery-performance-program'> */}
                          <p className="flex items-center font-semibold cursor-pointer hover:underline">
                            {" "}
                            Capacity Utilization - identify hidden capacity before approving new machines or people.
                          </p>
                          {/* </Link> */}
                        </a>
                      </li>
                      <li>
                        <a href="./delivery-performance-and-lead-time-reduction-program">
                          {/* <Link to='/program-benefits'> */}

                          <p className="flex items-center font-semibold cursor-pointer hover:underline">
                            Manpower Productivity - skill mix, staffing, work content, multi-skilling and supervisor routines.
                          </p>
                          {/* </Link> */}
                        </a>
                      </li>

                      <li>
                        <a href="./sampling-lead-time-reduction">
                          {/* <Link to='/program-benefits'> */}

                          <p className="flex items-center font-semibold cursor-pointer hover:underline">
                            Lead Time & WIP - flow, batch logic, waiting, prioritization and handoffs between departments.
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
              hdes: [
                <div
                  key={2}
                  className=" list-disc max-md:px-0 space-y-2 mt-2"
                >


                  <li>
                    <a href="./leverage-technology-for-innovation-and-efficiency">
                      {/* <Link to='/program-benefits'> */}

                      <p className="flex items-center font-semibold cursor-pointer hover:underline">
                        OTIF & Delivery Reliability - connect material, planning, production, packing and dispatch risk.
                      </p>
                      {/* </Link> */}
                    </a>
                  </li>
                  <li>
                    <a href="./leverage-technology-for-innovation-and-efficiency">
                      {/* <Link to='/program-benefits'> */}

                      <p className="flex items-center font-semibold cursor-pointer hover:underline">
                        Quality & Rework - defect loops, first-time-right performance and feedback to root cause.
                      </p>
                      {/* </Link> */}
                    </a>
                  </li>
                  <li>
                    <a href="./leverage-technology-for-innovation-and-efficiency">
                      {/* <Link to='/program-benefits'> */}

                      <p className="flex items-center font-semibold cursor-pointer hover:underline">
                        Layout & Material Movement - reduce unnecessary travel, congestion and poor adjacency.
                      </p>
                      {/* </Link> */}
                    </a>
                  </li>
                  <li>
                    <a href="./leverage-technology-for-innovation-and-efficiency">
                      {/* <Link to='/program-benefits'> */}

                      <p className="flex items-center font-semibold cursor-pointer hover:underline">
                        Daily Management - target vs actual, short-interval control, escalation, ownership and review cadence.
                        {/* </Link> */}
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="./leverage-technology-for-innovation-and-efficiency">
                      {/* <Link to='/program-benefits'> */}

                      <p className="flex items-center font-semibold cursor-pointer hover:underline">
                        Digital Visibility - add dashboards and alerts after process logic and data ownership are clear.


                      </p>
                      {/* </Link> */}
                    </a>
                  </li>

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
                    Our Operations Excellence Method
                  </p>

                  <p className="py-1 pl-5 text-lg font-normal text-gray-500 max-md:px-0">
                    1. Baseline the economics. Translate production loss into capacity, cost, delivery, overtime, WIP or margin.

                  </p>
                  <p className="py-1 pl-5 text-lg font-normal text-gray-500 max-md:px-0">
                    2. Observe the work. Use floor observation, data and operator/supervisor inputs to understand the actual system rather
                    than only SOPs.
                  </p>
                  <p className="py-1 pl-5 text-lg font-normal text-gray-500 max-md:px-0">
                    3. Build the loss tree. Separate symptoms from causes and quantify where time, material and capacity are lost.

                  </p> <p className="py-1 pl-5 text-lg font-normal text-gray-500 max-md:px-0">
                    4. Prioritize. Focus first on the few constraints that control output or cost. Not every inefficiency deserves a project.

                  </p>

                </div>,
              ],

              hdes: [
                <div
                  key={2}
                  className=" list-disc max-md:px-0 space-y-2 mt-2"
                >


                  <p className="py-1 text-lg font-normal text-gray-500 max-md:px-0">
                    5. Implement. Redesign methods, balance work, change planning rules, improve visual control, train teams and
                    introduce technology only where useful.
                  </p> <p className="py-1 text-lg font-normal text-gray-500 max-md:px-0">
                    6. Stabilize. Build ownership into supervisor routines, KPI reviews, standard work and escalation.

                  </p> <p className="py-1 text-lg font-normal text-gray-500 max-md:px-0">
                    7. Measure the benefit. Compare the agreed baseline with sustained post-implementation performance.

                  </p>

                </div>,
              ],
              img: "Our Approach.png",
              direction: "",
              altText: imgAltText[1],
            }}
          />
        </div>
        <SelectedOperationsImpact />
        <div className="px-4 mx-auto max-w-8xl Plant-Layout">
          <CapabilitiesMainCard2
            details1={{
              updes: [
                <div key={2} className="text-lg text-justify">
                  <p className="flex max-md:flex max-md:justify-center max-md:text-center max-md:text-xl my-5  leading-10 font-bold text-gray-800 text-left">
                    Before You Add Capex, Find the Missing Capacity
                  </p>

                  <p className="py-1 pl-5 text-lg font-normal text-gray-500 max-md:px-0">
                    Installed capacity is what machines can theoretically produce. Effective capacity is what the complete operating system
                    can reliably deliver after downtime, changeovers, manpower, quality, material and planning constraints. If a factory is
                    using only part of its effective potential, buying more equipment may add depreciation without solving the real
                    bottleneck. Madasky's capacity work separates equipment limitation from operating loss so management can decide
                    where capital is genuinely required.
                  </p>


                </div>,
              ],

              hdes: [
                <div
                  key={2}
                  className=" max-md:px-0 space-y-2 mt-2"
                >


                  <p className="flex max-md:flex max-md:justify-center max-md:text-center max-md:text-xl my-5  leading-10 font-bold text-gray-800 text-left">
                    Operations Excellence for Home Textiles

                  </p>
                  <p className="py-1 pl-5 text-lg font-normal text-gray-500 max-md:px-0">
                    Home Textile operations often carry complexity across cutting, quilting, stitching, finishing, packing, style/size variety,
                    customer-specific packaging and export dispatch. Improvements frequently require coordination across departments
                    rather than isolated line efficiency. Madasky evaluates the complete flow from material readiness through shipment.
                  </p>
                  <p className="flex max-md:flex max-md:justify-center max-md:text-center max-md:text-xl my-5  leading-10 font-bold text-gray-800 text-left">
                    Operations Excellence for Apparel

                  </p>
                  <p className="py-1 pl-5 text-lg font-normal text-gray-500 max-md:px-0">

                    Apparel performance is sensitive to style change, line skill, learning curve, feeding, cutting readiness, WIP and daily line
                    management. Madasky combines industrial-engineering logic with planning, supervisor routines and digital visibility so
                    improvements remain practical at line level.
                  </p>

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
                    Why Partner with Madasky ?
                  </p>

                  <ul className="pl-4 list-disc">
                    {/* <li className='text-xl font-bold text-gray-500'>Our Comprehensive Approach to Plant Layout Design</li> */}

                    <ul className="pl-5 list-disc max-md:px-0">


                      <li className="py-1 text-lg font-normal text-gray-500">
                        <p>
                          <span className="font-semibold">
                            Proven Frameworks:{" "}
                          </span>{" "}
                          recommendations are converted into changed operating routines and measurable results.
                        </p>
                      </li>

                      <li className="py-1 text-lg font-normal text-gray-500">
                        <p>
                          <span className="font-semibold">
                            Sector context:{" "}
                          </span>
                          Home Textiles and Apparel are core industries, not occasional projects.
                        </p>
                      </li>


                    </ul>
                  </ul>


                </div>,
              ],

              hdes: [
                <div
                  key={2}
                  className=" list-disc max-md:px-0 space-y-2 mt-2"
                >

                  <li className="py-1 text-lg font-normal text-gray-500">
                    <p>
                      <span className="font-semibold">
                        Business outcome focus:{" "}
                      </span>
                      output, OTIF, cost, capacity, fabric, manpower and lead time are more important than tool deployment
                    </p>
                  </li>
                  <li className="py-1 text-lg font-normal text-gray-500">
                    <p>
                      <span className="font-semibold">
                        Technology-neutral:{" "}
                      </span>
                      digital systems support the operating model rather than define it.                        </p>
                  </li>
                  <li className="py-1 text-lg font-normal text-gray-500">
                    <p>
                      <span className="font-semibold">
                        Diagnostic-first :{" "}
                      </span>
                      management sees the size of the opportunity before committing to a larger transformation.                        </p>
                  </li>

                  <p className="py-1 text-lg font-normal text-gray-500 max-md:px-0">
                    Transform your operations with Madasky's Operational
                    Excellence Consulting. Let's build a culture of continuous
                    improvement, innovation, and resilience tailored to your
                    manufacturing goals.
                  </p>
                </div>
                ,
              ],
              img: "Why Choose Madasky Consulting.png",
              direction: "",
              altText: imgAltText[1],
              calendarButton: true,
              btnText: "Plan Your Consultation",
            }}
          />

        </div>
<LegacyInternalLinks
        title="Explore Related Services"
        links={[
          { label: 'Factory Diagnostic', href: '/factory-diagnostic' },
          { label: 'Production Planning & Scheduling', href: '/production-planning-scheduling' },
          { label: 'Digital Factory & MES', href: '/digital-factory-mes' },
          { label: 'Plant Layout', href: '/plant-layout-consulting' },
          { label: 'Home Textiles', href: '/industries/home-textiles' },
          { label: 'Apparel', href: '/industries/apparel' },
        ]}
      />
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
