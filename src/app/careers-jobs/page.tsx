import React from 'react'
import { Metadata } from "next";

// import { Link } from 'react-router-dom';
import AboutNavbar from '@/components/Header/AboutNavbar';
import AboutVideo from '@/components/AboutVideo';
import JobCard from '@/components/JobCard';
import Footer from '@/components/Footer';
// import CareerButton from '../components/CareerButton';
// import vid1 from "/assets/images/Careers69.mp4";
// import SlidingBlogs from '../components/SlidingBlogs';
// import VideoPlayer from '../components/VideoPlayer';
// import Imagetemplate from '../components/Imagesliders';
import HelpYou from '@/components/HelpYou';
// import NewCapabilities from '../components/NewCapabilities';
// import KeyResponsibilities from '../components/KeyResponsibilities';
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
import { getImageAltText, getWebBlogs, fetchMetaDataByPageName, getDataByPageName, filterByWebImage, getImageData, getTestimonials, getEventData, getTestimonialsByPageName, getEventByPageName } from "@/common/api";
import type { PageMetaDataResponse } from "@/common/types";
import BaseUrl from '@/components/BaseUrl';



const title = "";
let PageMetadata: PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
  PageMetadata = await fetchMetaDataByPageName({ pageName: "Jobs" });
  console.log("Metaas: ", PageMetadata);

  return {
    title: PageMetadata.data.meta_title,
    description: PageMetadata.data.meta_desc,
    keywords: PageMetadata.data.meta_keyword,
    authors: {
      name: `${PageMetadata?.data?.author || 'Madasky'}`,
      url: "https://madasky.com",
    },
    alternates:{
      canonical:
      `${BaseUrl().mainurl}careers-jobs`
    },

  };
}


const CareerJobs = async () => {
  // let images;

  let blogData;
  let videoData;
  let galleryData;
  let testimonialData;
  let eventData;

  let serverError = false;

  try {
    // images = await getImageAltText(arr);

    blogData = await getDataByPageName(["Jobs", "blogs"]);
    videoData = await getDataByPageName(["Jobs", "videos"]);
    galleryData = await getDataByPageName(["Jobs", "gallery"]);
    testimonialData = await getTestimonialsByPageName("Jobs");
    eventData = await getEventByPageName("Jobs");


  }
  catch (error) {
    // console.error("Server Error:", error);
    serverError = true;
  }

  // console.log("Images", images);
  if (serverError) {
    return <div>Server Error</div>
  }





  // const imgAltText = await getImageData(images);
  return (
    <div>
      {/* <Link to="/careers/jobs"> */}
      <AboutNavbar />
      <AboutVideo vid1={'assets/videos/Careers69.mp4'} title={title} des={""} pageName={"Jobs"}
      />



      <div className='w-full bg-[#e0f1fe] pb-20 pt-10 mb-14 flex flex-col items-center justify-center'>
        <h1 className='mb-5 text-5xl font-bold text-center text-black max-md:text-3xl'>{PageMetadata?.data?.h1tag || "Jobs"}</h1>

        <div className="w-[15%] h-[5px] bg-[#bce1fd] mt-0" style={{
          background: 'linear-gradient(to right, #05528a 50%, #d02c22 50%)',

        }}></div>

        {/* <div className='w-[90%] mx-auto border-2 bg-white border-gray-200 rounded-3xl flex flex-col items-center overflow-hidden  h-auto mt-[4vh]'>
                    <NewCapabilities
                        readMoreLink="#"
                        bgcolor="bg-[#f8fafc]"

                        image="/assets/images/ourexpert.png"
                        order="flex-row-reverse"
                        title="ProXperts"
                        description={[
                            "At Madasky Consulting, ProXperts is our elite team of carefully selected and groomed professionals who are dedicated to delivering transformative solutions to our clients. Our ProXperts consist of both seasoned industry veterans and dynamic freelancers who bring diverse expertise and innovative perspectives to the table.",

                        ]} />
                    <NewCapabilities
                        readMoreLink="#"
                        bgcolor="bg-[#f8fafc]"

                        image="/assets/images/Allianceheader.png"
                        order=""
                        title="Experienced Professionals"
                        description={[
                            "The backbone of our consulting services, experienced professionals bring years of industry knowledge, strategic insight, and leadership to every project. Their deep understanding of market trends, operational challenges, and business strategies enables them to provide clients with actionable solutions that lead to measurable improvements and sustained success.",

                        ]} />


                    <NewCapabilities
                        readMoreLink="#"
                        bgcolor="bg-[#f8fafc]"

                        image="/assets/images/Allianceheader.png"
                        order="flex-row-reverse"
                        title="Freelancers"
                        description={[
                            "Our freelancers are carefully selected for their specialized skills and flexibility. They complement our core team by providing additional capacity and niche expertise, allowing us to scale quickly and adapt to the unique demands of each project. Freelancers bring fresh perspectives and innovative ideas, contributing to the overall success of our client engagements.",

                        ]} />







                </div> */}
      </div>


      {/* <JobCard
  title={"Advisor"}
  description={
    "The advisor provides strategic guidance and high-level expertise to clients and internal teams. They are typically seasoned industry professionals with extensive experience and a deep understanding of business strategy, market trends, and industry-specific challenges."
  }
  border={"border-y-0"}
  path={"/advisor"}
  keypoints={[
    <ul key="1" className="py-4 pl-5 text-justify list-disc">
        <h2 className='text-2xl font-bold text-black'>Key Responsibilities</h2>
      <li className='py-2 text-lg font-normal text-gray-500'>
        Offer strategic advice on complex business issues.
      </li>
      <li className='py-2 text-lg font-normal text-gray-500'>
        Assist in the development of long-term strategies and vision for clients.
      </li>
      <li className='py-2 text-lg font-normal text-gray-500'>
       Lead the client projects and responsible for client deliverable as needed
      </li>
      <li className='py-2 text-lg font-normal text-gray-500'>
      Provide mentorship to senior consultants and other team members.
      </li>
      <li className='py-2 text-lg font-normal text-gray-500'>
      Lead high-stakes client meetings and presentations.
        </li>
        <li className='py-2 text-lg font-normal text-gray-500'>
        Stay updated on industry trends and innovations to provide cutting-edge advice.
        </li>
        <p className='py-2 text-lg font-normal text-gray-500'>
  <strong>Experience:</strong> 15+ years in a relevant industry with a proven track record in executive leadership or senior advisory roles.
</p>
<p className='py-2 text-lg font-normal text-gray-500'>
  <strong>Qualification:</strong> Advanced degree (e.g., MBA, PhD) preferred; extensive experience may substitute for formal education.
</p>

    </ul>
  ]}
/> */}


      <JobCard title={"Senior Consultant"} description={"Senior consultants lead client engagements, managing the consulting process from start to finish. They play a crucial role in developing strategies, overseeing implementation, and ensuring the delivery of results."} border={"border-y-0"} path={"/senior-consultant"}

        keypoints={[
          <ul key="1" className="py-4 pl-5 text-justify list-disc">
            <h2 className='text-2xl font-bold text-black'>Key Responsibilities</h2>
            <li className='py-2 text-lg font-normal text-gray-500'>
              Lead consulting projects, ensuring timely and successful delivery.
            </li>
            <li className='py-2 text-lg font-normal text-gray-500'>
              Develop and present strategic recommendations to clients.</li>
            <li className='py-2 text-lg font-normal text-gray-500'>
              Manage relationships with key client stakeholders.
            </li>
            <li className='py-2 text-lg font-normal text-gray-500'>
              Mentor and guide junior consultants and associates.</li>
            <li className='py-2 text-lg font-normal text-gray-500'>
              Ensure the quality and effectiveness of deliverables.</li>

            <p className='py-2 text-lg font-normal text-gray-500'>
              <strong>Experience:</strong> 8-12 years in consulting or relevant industry roles.
            </p>
            <p className='py-2 text-lg font-normal text-gray-500'>
              <strong>Qualification:</strong> MBA or equivalent; strong analytical and leadership skills are essential.
            </p>

          </ul>
        ]}
      />



      <JobCard title={"Consultant"} description={"Consultants are responsible for managing specific project tasks, conducting research, analyzing data, and developing solutions to meet client needs. They work closely with senior consultants and advisors to ensure project success."
      } border={"border-y-1"} path={"/consultant"}

        keypoints={[
          <ul key="1" className="py-4 pl-5 text-justify list-disc">
            <h2 className='text-2xl font-bold text-black'>Key Responsibilities</h2>
            <li className='py-2 text-lg font-normal text-gray-500'>
              Conduct in-depth research and data analysis.
            </li>
            <li className='py-2 text-lg font-normal text-gray-500'>
              Develop solutions and recommendations based on analysis.
            </li>
            <li className='py-2 text-lg font-normal text-gray-500'>
              Support the implementation of strategic initiatives.
            </li>
            <li className='py-2 text-lg font-normal text-gray-500'>
              Prepare reports, presentations, and other client-facing documents.                  </li>
            <li className='py-2 text-lg font-normal text-gray-500'>
              Collaborate with clients and internal teams to ensure alignment on project objectives.
            </li>

            <p className='py-2 text-lg font-normal text-gray-500'>
              <strong>Experience:</strong> 4-7 years in consulting or a related field.
            </p>
            <p className='py-2 text-lg font-normal text-gray-500'>
              <strong>Qualification:</strong> Bachelor’s degree in business, economics, or a related field; an MBA is preferred.
            </p>

          </ul>
        ]}
      />


      <JobCard title={"Associate Consultant"} description={"Associate consultants support the consulting team by conducting research, assisting in data analysis, and helping with the preparation of client deliverables. They are typically early in their consulting careers and are focused on building their skills."} border={"border-y-1"} path={"/associate-consultant"}

        keypoints={[
          <ul key="1" className="py-4 pl-5 text-justify list-disc">
            <h2 className='text-2xl font-bold text-black'>Key Responsibilities</h2>
            <li className='py-2 text-lg font-normal text-gray-500'>
              Assist in gathering and analyzing data.
            </li>
            <li className='py-2 text-lg font-normal text-gray-500'>
              Support the development of client presentations and reports.
            </li>
            <li className='py-2 text-lg font-normal text-gray-500'>
              Conduct market research and benchmarking studies.
            </li>
            <li className='py-2 text-lg font-normal text-gray-500'>
              Participate in client meetings and contribute to discussions.
            </li>
            <li className='py-2 text-lg font-normal text-gray-500'>
              Assist in project management tasks as needed.
            </li>

            <p className='py-2 text-lg font-normal text-gray-500'>
              <strong>Experience:</strong> 2-3 years of experience in consulting or a related field.
            </p>
            <p className='py-2 text-lg font-normal text-gray-500'>
              <strong>Qualification:</strong>  Strong research and analytical skills and Excellent written and verbal communication abilities.
            </p>

          </ul>
        ]}
      />


      <JobCard title={"Business Analyst"} description={"Analysts play a critical role in data-driven projects, providing the quantitative and qualitative analysis necessary to support strategic decisions. They are responsible for collecting, analyzing, and interpreting data to inform project recommendations."} border={"border-y-0"} path={"/business-analyst"}

        keypoints={[
          <ul key="1" className="py-4 pl-5 text-justify list-disc">
            <h2 className='text-2xl font-bold text-black'>Key Responsibilities</h2>
            <li className='py-2 text-lg font-normal text-gray-500'>
              Collect and analyze data to support client projects.
            </li>
            <li className='py-2 text-lg font-normal text-gray-500'>
              Develop models and simulations to explore potential solutions.
            </li>
            <li className='py-2 text-lg font-normal text-gray-500'>
              Prepare detailed reports and dashboards for internal and client use.
            </li>
            <li className='py-2 text-lg font-normal text-gray-500'>
              Collaborate with consultants to integrate data findings into strategic recommendations.
            </li>
            <li className='py-2 text-lg font-normal text-gray-500'>
              Stay informed on industry trends and best practices in data analysis.
            </li>

            <p className='py-2 text-lg font-normal text-gray-500'>
              <strong>Experience:</strong>2-5 years in data analysis or research roles.
            </p>
            <p className='py-2 text-lg font-normal text-gray-500'>
              <strong>Qualification:</strong> Bachelor’s degree in business, economics, statistics, or a related field; proficiency in data analysis tools is a plus
            </p>

          </ul>
        ]}
      />









      <div className="p-6 flex h-auto flex-col w-full py-[1vh] bg-[#bce1fd75] bg-[url('/assets/images/homeblogbg.png')] bg-center bg-no-repeat bg-cover  items-center justify-center">

        <VideoSliderWrapper videos={videoData.data} />
        <div className="w-[90%] h-[2px] bg-gray-300"></div>

        <BlogSliderWrapper blogs={blogData.data} />
        <div className="w-[90%] h-[2px] bg-gray-300"></div>

        <GallerySliderWrapper gallery={galleryData.data} />




      </div>
      <HelpYou />
      <Footer />
      {/* </Link> */}
    </div>
  )
}

export default CareerJobs