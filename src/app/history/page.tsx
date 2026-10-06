
import Footer from '@/components/Footer';
import AboutNavbar from '@/components/Header/AboutNavbar';
import HistoryAnimation from "@/components/HistoryAnimation"
import { SlArrowDown } from "react-icons/sl";
import HelpYou from '@/components/HelpYou';
import { Metadata } from "next";

import ShortScreenHistory from '@/components/ShortScreenHistory';
import AboutVideo from '@/components/AboutVideo';
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
import { getImageAltText, fetchMetaDataByPageName, getWebBlogs, getDataByPageName, filterByWebImage, getImageData, getTestimonialsByPageName, getEventByPageName } from "@/common/api";
import BaseUrl from '@/components/BaseUrl';

// import vid1 from "@/assets/images/Historyheader.mp4";
// import SlidingBlogs from '../components/SlidingBlogs';
// import VideoPlayer from '../components/VideoPlayer';.
// import Imagetemplate from '../components/Imagesliders';
const title = "Our History";
const PageMetadata = await fetchMetaDataByPageName({ pageName: "Our History" });


// console.log(PageMetadata);
const rawKeywords: string = PageMetadata?.data?.meta_keyword || '';
const formattedKeywords: string[] = rawKeywords
  .split(',')
  .map((kw: string) => kw.trim());



export const metadata: Metadata = {
  title: `Madasky | ${PageMetadata?.data?.meta_title || 'Consulting Experts'}`,
  description: `${PageMetadata?.data?.meta_desc || 'Driving transformation and innovation across industries.'}`,
  keywords: formattedKeywords,
  authors: {
    name: `${PageMetadata?.data?.meta_author || 'Madasky'}`,
    url: "https://madasky.com",
  },
  alternates:{
    canonical:
    `${BaseUrl().mainurl}history`
  },
  

}



export default async function OurHistory() {

  const arr = ["History6.png", "2019.jpg", "History2.png", "History8.png", "History7.png", "Expanding services6969.png", "2018.png", "2018-2013.png"];


  let images;
  let blogData;
  let videoData;
  let galleryData;
  let testimonialData;
  let eventData;
  let serverError = false;

  try {
    images = await getImageAltText(arr);
    blogData = await getDataByPageName(["Our History", "blogs"]);
    videoData = await getDataByPageName(["Our History", "videos"]);
    galleryData = await getDataByPageName(["Our History", "gallery"]);
    testimonialData = await getTestimonialsByPageName("Our History");
    eventData = await getEventByPageName("Our History");

  }
  catch (error) {
    // console.error("Server Error:", error);
    serverError = true;
  }

  // console.log("Images", images);
  if (serverError) {
    return <div>Server Error</div>
  }





  const imgAltText = await getImageData(images);
  const timelineData = [
    {
      title: ' Becoming a Private Limited Company and Team Growth',
      description:
        'In 2024, Madasky Consulting evolved into a Private Limited Company with a presence in eight countries. The firm continued to drive innovation and excellence globally, solidifying its position as a leader in the consulting industry. Madasky Consulting grew into a large team comprising experts from various fields, dedicated to delivering high-impact solutions to clients. Amit’s journey from a classroom vision to a global consulting firm stands as a testament to the power of dedication and transformative impact.',
      // image: "assets/History/6.png",
      image: "/History6.png",
      altText: imgAltText[0],
      backgroundColor: '#ffffff',
      date: '2024',
    },
    {
      title: ' Geographic Expansion',
      description:
        `By 2023, Madasky Consulting had expanded its presence beyond India to several other countries.This expansion was driven by the growing demand for Madasky Consulting's services worldwide, further establishing its international footprint.`,
      image: "/2019.jpg",
      // image: "assets/images/History6.png",
      altText: imgAltText[1],
      backgroundColor: '#ffffff',
      date: '2023',
    },
    {
      title: 'Enhancing Client Solutions',
      description:
        'Throughout 2022, Madasky Consulting focused on enhancing its client solutions. The firm introduced new services, including plant design, material flow optimization, and warehousing solutions. These additions helped clients achieve greater efficiency and productivity in their operations. The firm also started implementing various sales programs, KPI tracking systems, cost optimization strategies, and management programs to support client growth.',
      // image: "assets/History/2.png",
      image: "/History2.png",
      altText: imgAltText[2],
      backgroundColor: '#ffffff',
      date: '2022',
    },
    {
      title: 'Global Recognition and Team Expansion',
      description:
        "In 2021, Amits dedication and expertise were recognized on a global scale. He was appointed as a Senior Advisor to McKinsey & Company, working on international projects involving supply chain transformation and go-to-market strategies. This role further solidified Madasky Consulting's reputation as a leading consulting firm. Additionally, Amit began expanding his team bringing in experts from various industries to enhance the firms consulting capabilities and broaden its service offerings.",
      // image: "assets/History/8.png",
      image: "/History8.png",
      altText: imgAltText[3],
      backgroundColor: '#ffffff',
      date: '2021',
    },
    {
      title: 'Partnership with ActionCOACH',
      description:
        "A significant milestone was achieved in 2020 when Madasky Consulting partnered with ActionCOACH. Amit became a certified Business and Executive Coach, enhancing his ability to support clients in achieving their business goals. This partnership aligned with his mission to create wealth for 20,000 businesses and 100,000 jobs, reinforcing Madasky Consulting's commitment to impactful business transformation.",
      // image: "assets/History/7.png",
      image: "/History7.png",
      altText: imgAltText[4],
      backgroundColor: '#ffffff',
      date: '2020',
    },
    {
      title: ' Expanding Services',
      description:
        'Madasky Consulting expanded its service offerings in 2019, introducing specialized programs for sales and management. The firm also began offering business progress memberships, providing clients with continuous support and access to exclusive resources and expertise. These new services significantly enhanced the value proposition of Madasky Consulting',
      image: "/Expanding services6969.png",
      altText: imgAltText[5],
      backgroundColor: '#ffffff',
      date: '2019',
    },
    {
      title: 'Founding Madasky Consulting',
      description:
        "In 2018, Amit officially founded Madasky Consulting. The firm aimed to provide transformative consulting services to both large corporations and MSMEs. Madasky Consulting focused on management consulting, business coaching, and advisory services, with a commitment to driving business growth and operational excellence.",
      image: "/2018.png",
      altText: imgAltText[6],
      backgroundColor: '#ffffff',
      date: '2018',
    },
    {
      title: 'The Genesis and Growth of Madasky Consulting',
      description:
        "Madasky Consulting was born out of Amit Mittal's vision to leverage business as a transformative force. As a student at Stern Business School, New York University, Amit began offering pro bono consulting services to the garments and home textile industry. His innovative solutions and strategic insights quickly earned him recognition and a reputation as a sought-after independent consultant.Building on this success Amit expanded his services to include workflow optimization, plant layout design, and manpower optimization, significantly improving operational efficiency for large garments and home textile companies . His expertise soon extended to various industries, including manufacturing and retail, broadening scope and establishing its credibility.",
      image: "/2018-2013.png",
      altText: imgAltText[7],
      backgroundColor: '#ffffff',
      date: '2013-2018',
    },
  ];

  return (
    <>
      <AboutNavbar />
      <AboutVideo vid1={"/assets/videos/Historyheader.mp4"} title={""} des={""} pageName={"Our History"} h1={PageMetadata?.data?.h1tag}/>

      <div className="flex items-center justify-center w-full py-10">
        <div className="max-w-6xl flex flex-col lg:flex-row gap-16 max-md:w-[90%] max-md:items-start max-md:justify-start">
          <div className="lg:w-2/5">
            <div>
              <h1 className="font-serif leading-tight text-center">
                <span className="block font-bold text-8xl max-md:text-6xl">
                  History
                </span>
                <span className="text-4xl">
                  of our{' '}
                  <span className="font-bold text-8xl max-md:text-6xl">
                    firm
                  </span>
                </span>
              </h1>
            </div>
          </div>
          <div className="lg:w-3/5">
            <div className="flex flex-col gap-6">
              <p className="text-xl font-light leading-snug text-justify text-gray-500">
                In January 2013, a classroom at Stern Business
                School sparked a vision in Amit Mittal: to
                harness business as a force for broader industry
                impact. Starting with pro bono consulting for
                the home textile industry, Amit’s expertise
                quickly gained recognition, leading him to
                become a sought-after independent management
                consultant.
              </p>
              <p className="text-xl font-light leading-snug text-justify text-gray-500">
                In 2018, he founded Madasky
                Consulting, aiming to extend his transformative
                services to both large corporations and MSMEs.
                His mission gained further momentum in 2020
                through a partnership with ActionCOACH, where he
                became a Business and Executive Coach, committed
                to creating wealth for 20,000 businesses and
                100,000 jobs.
              </p>
              <p className="text-xl leading-7 text-justify text-gray-500">
                Amit’s dedication was recognized globally in
                2021 when he was appointed Senior Advisor to
                McKinsey & Company. By 2024, Madasky Consulting
                had evolved into a Private Limited Company with
                a presence in eight countries, continuing to
                drive innovation and excellence across the
                globe. Amit’s journey from a classroom vision to
                a global consulting firm stands as a testament
                to the power of dedication and transformative
                impact.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <VerticalTimeline lineColor="#000000">
                {timelineData.map((item, index) => (
                    <VerticalTimelineElement
                        key={index}
                        className={`vertical-timeline-element--work ${index % 2 === 0 ? 'left' : 'right'
                            } animate-element`}
                        contentStyle={{
                            background: item.backgroundColor,
                            color: '#000',
                            boxShadow: 'none',
                            border: '1px solid #ddd',
                            padding: '20px 30px', // Adjusted padding for better alignment
                            borderRadius: '8px',
                            width: '100%',
                        }}
                        contentArrowStyle={{ display: 'none' }}
                        iconStyle={{ display: 'none' }}
                    >
                        <div
                            className={`content-wrapper flex ${index % 2 === 0
                                    ? 'flex-row'
                                    : 'flex-row-reverse'
                                } items-center gap-5`}
                        >
                            <div className="flex-1 text-content">
                                <h2 className="pb-4">{item.date}</h2>
                                <h3 className="text-2xl font-semibold">
                                    {item.title}
                                </h3>
                                <p>{item.description}</p>
                            </div>
                            <div className="relative flex-1 image-content" style={{ paddingBottom: '40%' }}> 
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="absolute top-0 left-0 object-cover w-full h-full rounded-lg"
                                />
                            </div>
                        </div>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline> */}



      {/* ***********updated code by harsh  */}
      <div className='flex flex-col items-center justify-center max-md:items-start '>
        <div className='flex justify-center mb-20 text-2xl animate-bounce-arrow'>
          <SlArrowDown className='' />
        </div>

        {/* this UI for mobile display  */}
        {timelineData.map((item, index) => (
          <ShortScreenHistory key={index} title={item.title} description={item.description} date={item.date} bg={item.backgroundColor} img={item.image} altText={item.altText} margin={"mr-7"} />


        ))}

        {/* <HistoryAnimation title={timelineData[0].title} description={timelineData[0].description} date={timelineData[0].date} bg={timelineData[0].backgroundColor} img={timelineData[0].image} margin={"mr-7"} flexDirection={'flex'} /> */}

        {/* this UI for laptop  or Tab display  */}
        <HistoryAnimation title={timelineData[0].title} description={timelineData[0].description} date={timelineData[0].date} altText={timelineData[0].title} bg={timelineData[0].backgroundColor} img={timelineData[0].image} margin={""} flexDirection={'flex'} animation1={'animate-slide-in-right'} animation2={'animate-slide-in-left'} hidden1={'visible'} hidden2={"hidden"} lineMargin={''} textAlign={"text-justify"} val1={''} />

        <HistoryAnimation title={timelineData[1].title} description={timelineData[1].description} date={timelineData[1].date} altText={timelineData[1].title} bg={timelineData[1].backgroundColor} img={timelineData[1].image} margin={"ml-14"} flexDirection={'flex-row-reverse'} animation1={'animate-slide-in-left'} animation2={'animate-slide-in-right'} hidden1={'opacity-0'} hidden2={"visible"} lineMargin={'ml-[40px]'} textAlign={"text-justify"} val1={''} />


        <HistoryAnimation title={timelineData[2].title} description={timelineData[2].description} date={timelineData[2].date} altText={timelineData[2].title} bg={timelineData[2].backgroundColor} img={timelineData[2].image} margin={""} flexDirection={'flex'} animation1={'animate-slide-in-right'} animation2={'animate-slide-in-left'} hidden1={'visible'} hidden2={"hidden"} lineMargin={''} textAlign={"text-justify"} val1={''} />


        <HistoryAnimation title={timelineData[3].title} description={timelineData[3].description} date={timelineData[3].date} altText={timelineData[3].title} bg={timelineData[3].backgroundColor} img={timelineData[3].image} margin={"ml-14"} flexDirection={'flex-row-reverse'} animation1={'animate-slide-in-left'} animation2={'animate-slide-in-right'} hidden1={'opacity-0'} hidden2={"visible"} lineMargin={'ml-[40px]'} textAlign={"text-justify"} val1={''} />



        <HistoryAnimation title={timelineData[4].title} description={timelineData[4].description} date={timelineData[4].date} altText={timelineData[4].title} bg={timelineData[4].backgroundColor} img={timelineData[4].image} margin={""} flexDirection={'flex'} animation1={'animate-slide-in-right'} animation2={'animate-slide-in-left'} hidden1={'visible'} hidden2={"hidden"} lineMargin={''} textAlign={"text-justify"} val1={''} />


        <HistoryAnimation title={timelineData[5].title} description={timelineData[5].description} date={timelineData[5].date} altText={timelineData[5].title} bg={timelineData[5].backgroundColor} img={timelineData[5].image} margin={"ml-14"} flexDirection={'flex-row-reverse'} animation1={'animate-slide-in-left'} animation2={'animate-slide-in-right'} hidden1={'opacity-0'} hidden2={"visible"} lineMargin={'ml-[40px]'} textAlign={"text-justify"} val1={''} />


        <HistoryAnimation title={timelineData[6].title} description={timelineData[6].description} date={timelineData[6].date} altText={timelineData[6].title} bg={timelineData[6].backgroundColor} img={timelineData[6].image} margin={""} flexDirection={'flex'} animation1={'animate-slide-in-right'} animation2={'animate-slide-in-left'} hidden1={'visible'} hidden2={"hidden"} lineMargin={''} textAlign={"text-justify"} val1={''} />


        <HistoryAnimation title={timelineData[7].title} description={timelineData[7].description} date={timelineData[7].date} altText={timelineData[7].title} bg={timelineData[7].backgroundColor} img={timelineData[7].image} margin={"ml-14 mb-10"} flexDirection={'flex-row-reverse'} animation1={'animate-slide-in-left'} animation2={'animate-slide-in-right'} hidden1={'opacity-0'} hidden2={"visible"} lineMargin={'ml-[40px]'} textAlign={"text-justify"} val1={''} />

        <div className='h-[4vh] bg-[#000000e0] rounded-full w-[4vh] mr-[0.4vw] mb-[4vh] max-md:ml-[1vw]'></div>

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
