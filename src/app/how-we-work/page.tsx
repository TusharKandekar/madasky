import AboutNavbar from '@/components/Header/AboutNavbar';
import AboutVideo from '@/components/AboutVideo';
import BaseUrl from '@/components/BaseUrl';

import Footer from '@/components/Footer';
// import vid1 from "/assets/images/345.mp4";
import HelpYou from '@/components/HelpYou';
import Image from 'next/image';
import { Metadata } from "next";
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
import { getImageAltText, fetchMetaDataByPageName, getWebBlogs, getDataByPageName, filterByWebImage, getImageData, getTestimonialsByPageName, getEventByPageName } from "@/common/api";
import type { PageMetaDataResponse } from "@/common/types";




const title = "How We Work";
let PageMetadata : PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
  PageMetadata = await fetchMetaDataByPageName({ pageName: "How We Work" });
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
        `${BaseUrl().mainurl}how-we-work`
      },

  };
}

// import SlidingBlogs from '../components/SlidingBlogs';
// import VideoPlayer from '../components/VideoPlayer';
// import Imagetemplate from '../components/Imagesliders';
// import React, { useState, useEffect } from 'react';
// import { getImagesAltText } from '../components/CommonData';
export default async function HowWeWork() {
    // const [altText1, setAltText1] = useState({});
    // const [altText2, setAltText2] = useState("");
    // const [altText3, setAltText3] = useState("");
    // const [altText4, setAltText4] = useState("");
    // const [altText5, setAltText5] = useState("");
    // const [altText6, setAltText6] = useState("");
    // const [altText7, setAltText7] = useState("");
    // const [altText8, setAltText8] = useState("");
    // const [altText9, setAltText9] = useState("");
    // const [altText10, setAltText10] = useState("");

    // const image = "/assets/images/How we work  home.png"
    // const image1 = "/assets/images/howewoek1.png"

    const arr = ["howewoek1.png", "week1.png", "week2.png", "week3.png", "week4.png", "week5.png", "week6.png", "week7.png", "Howweengage.png"];


   let images;
   let blogData;
    let videoData;
    let galleryData;
    let testimonialData;
    let eventData;
  let serverError = false;

  try {
    images = await getImageAltText(arr);
    blogData = await getDataByPageName(["How We Work", "blogs"]);
    videoData = await getDataByPageName(["How We Work", "videos"]);
    galleryData = await getDataByPageName(["How We Work", "gallery"]);
    testimonialData = await getTestimonialsByPageName("How We Work");
    eventData = await getEventByPageName("How We Work");

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




    return (
        <>
            <AboutNavbar />
            {/* <AboutVideo vid1={vid1} title={""} des={""} /> */}





            <div className="w-full bg-[#71a0d7] flex items-end justify-center max-md:items-center">

                <div className="relative w-[70%] h-[80vh] max-md:h-[40vh]">
                    <Image
                        src="/assets/images/HowWeWorkHome.png"
                        alt="How we work home"
                        fill
                        className="object-cover max-md:object-contain"
                    />
                </div>
            </div>



            <div className='flex flex-col items-center justify-center w-full'>
                <div className="flex flex-col items-center justify-center w-full py-8">
                    <h2 className='text-5xl font-semibold text-center max-md:text-4xl'>{PageMetadata?.data?.h1tag || "How We Work"}</h2>
                    <div className="w-[15%] h-[3px] bg-blue-300 mt-4" style={{
                        background: 'linear-gradient(to right, #05528a 50%, #d02c22 50%)',

                    }}></div>
                </div>

                <div className='w-full flex items-center justify-center py-8 bg-[url("/assets/images/bggraphic.jpg")] bg-center bg-no-repeat bg-cover bg-fixed'>
                    <div className='w-[80%] flex flex-col items-center justify-center p-[4vh] bg-white max-md:w-[90%] max-md:p-0'>
                        <h2 className='w-full text-4xl font-semibold text-center max-md:mb-4'>Our Approach</h2>
                        <p className='text-xl text-gray-500 text-center py-4 w-[85%] max-md:w-full max-md:p-0'> At Madasky Consulting, our aspiration is to be the gold
                            At Madasky Consulting, our approach is designed to deliver exceptional value and ensure your success. We combine deep industry expertise with innovative methodologies to create tailored solutions that meet your unique needs.
                        </p>


                    </div>

                </div>
                <div className='flex items-center justify-center py-8 w-[50%] max-md:w-[100%] max-md:px-4'>
                    {/* <img src="/assets/images/howewoek1.png" className='w-full' alt={"Our Approach"}
                    /> */}

                    <div className='relative h-[65vh] max-md:h-[40vh] w-[100%]'>
                        <Image src={`${BaseUrl().imgurl}/howewoek1.png`}
                            priority
                            fill
                            className='object-cover object-center' alt={"Our Approach"}


                        />
                    </div>



                </div>
                <div className='w-full flex  items-center justify-center p-[10vh] bg-[#e0f1fe] max-md:w-full max-md:flex max-md:flex-col max-md:justify-center max-md:items-center max-md:p-4'>

                    <div className='w-[50%] items-center justify-center flex max-md:w-[100%]'>
                        <div className='relative h-[62vh] max-md:h-[40vh] max-md:w-[80%] w-[70%]'>
                            <Image fill src={`${BaseUrl().imgurl}/week1.png`} className='' alt={"week1"}

                            />
                        </div>
                    </div>
                    <div className='w-[50%] items-center justify-center flex flex-col max-md:w-[100%]'>
                        <h2 className='w-full text-2xl font-semibold text-left'>▶ &emsp;The idea or desire sharing: </h2>

                        <p className='text-xl text-gray-500 text-justify py-4 w-[90%]'>At Madasky Consulting, We know that sharing ideas leads to innovation and business success. We encourage a culture where everyone's ideas are heard and valued, helping turn those ideas into real, actionable plans.

                        </p>
                        <p className='text-xl text-black text-justify pt-4 font-bold w-[90%]'>Turning Ideas into Action</p>
                        <p className='text-xl text-gray-500 text-justify py-4 w-[90%]'>
                            We don’t just listen to your ideas—we work with you to make them happen. By supporting your team in sharing and refining their ideas, we help unlock your business’s full potential and drive growth.

                        </p>
                        <p className='text-xl text-black text-justify pt-4 font-bold w-[90%]'>Success Through Innovation</p>

                        <p className='text-xl text-gray-500 text-justify py-4 w-[90%]'>We make sure every shared idea contributes to your business’s success. By linking creativity to your goals, we help keep your business moving forward and staying competitive.</p>

                    </div>

                </div>
                <div className='w-full flex items-center justify-center p-[10vh] bg-white max-md:w-full max-md:flex max-md:flex-col-reverse max-md:justify-center max-md:items-center max-md:p-4'>

                    <div className='w-[50%] items-center justify-center flex flex-col max-md:w-[100%]'>

                        <h2 className='w-full text-2xl font-semibold text-left'> &emsp;Deeper Understanding: </h2>

                        <p className='text-xl text-gray-500 text-justify py-4 w-[90%]'>At Madasky Consulting, we believe that true success comes from a deeper understanding of your business. We focus on creating a solid foundation by building a conceptual framework that aligns with your goals. This framework guides our engagement structure, ensuring that every interaction and decision is purposeful and connected to your vision.

                        </p>
                        <p className='text-xl text-black text-justify pt-4 font-bold w-[90%]'>Strategic Engagement</p>
                        <p className='text-xl text-gray-500 text-justify py-4 w-[90%]'>
                            Our engagement structure is designed for collaboration and clarity. We work closely with your team to ensure that our strategies and solutions are fully integrated into your business, making the most of every opportunity.


                        </p>
                        <p className='text-xl text-black text-justify pt-4 font-bold w-[90%]'>Effective Project Activities</p>

                        <p className='text-xl text-gray-500 text-justify py-4 w-[90%]'>We meticulously plan and execute project activities, keeping them aligned with the conceptual framework. Each activity is targeted to achieve specific outcomes, driving your business forward with measurable success.</p>
                    </div>
                    <div className='w-[50%] items-center justify-center flex max-md:w-full '>

                        <div className='relative h-[62vh] max-md:h-[50vh] max-md:w-[80%] w-[70%]'>
                            <Image fill src={`${BaseUrl().imgurl}/week2.png`} className='' alt={"week1"}

                            />
                        </div>
                        {/* <img src='/assets/images/week2.png' className='w-[60%] max-md:' alt={"week2"} /> */}
                    </div>
                </div>
                <div className='w-full flex  items-center justify-center p-[10vh] bg-[#e0f1fe] max-md:w-full max-md:flex max-md:flex-col max-md:justify-center max-md:items-center max-md:p-4'>
                    <div className='w-[40%] items-center justify-center flex max-md:w-full'>
                        {/* <img src='/assets/images/week3.png' className='w-[70%] max-md:full' alt={"week4+"} /> */}
                        <div className='relative h-[55vh] max-md:h-[40vh] max-md:w-[80%] w-[80%]'>
                            <Image fill src={`${BaseUrl().imgurl}/week3.png`} className='' alt={"week1"}

                            />
                        </div>
                    </div>
                    <div className='w-[60%] items-center justify-center flex flex-col max-md:w-[100%]'>

                        <h2 className='w-full text-2xl font-semibold text-left'>▶ &emsp;Data Gathering: </h2>

                        <p className='text-xl text-gray-500 text-justify py-4 w-[90%]'>At Madasky Consulting, we know that the success of any strategy starts with the right data. That’s why our data gathering process is thorough, clear, and focused on helping your business grow. Here’s how we make sure we get it right:

                        </p>
                        <p className='text-xl text-black text-justify pt-4 font-bold w-[90%]'> Check and Summarize Data
                        </p>
                        <p className='text-xl text-gray-500 text-justify py-4 w-[90%]'>
                            We begin by carefully checking all the data we collect. This means going through information from different sources and summarizing it in a way that’s easy to understand. By doing this, we ensure that we’re working with the most accurate and relevant facts. This step helps us see the big picture and sets the stage for making informed decisions.


                        </p>
                        <p className='text-xl text-black text-justify pt-4 font-bold w-[90%]'> Gap Analysis</p>

                        <p className='text-xl text-gray-500 text-justify py-4 w-[90%]'>Once we have a clear understanding of your data, we conduct a gap analysis. This is where we compare your current situation to where you want to be. The gap analysis helps us identify areas that need improvement—whether it’s a part of your business that’s not performing as well as it could or a new opportunity that hasn’t been fully explored. By finding these gaps, we can create strategies that specifically address them, helping your business move closer to its goals.
                        </p>
                        <p className='text-xl text-black text-justify pt-4 font-bold w-[90%]'> Skill Analysis
                        </p>

                        <p className='text-xl text-gray-500 text-justify py-4 w-[90%]'>Finally, we assess your team’s skills. By analyzing strengths and weaknesses, we ensure your team has what it takes to succeed, or we identify areas that need a boost.
                        </p>
                        <p className='text-xl text-black text-justify pt-4 font-bold w-[90%]'>Turning Data into Action</p>

                        <p className='text-xl text-gray-500 text-justify py-4 w-[90%]'>At Madasky Consulting, we turn data into actionable insights that drive your business forward. By focusing on accurate data, identifying gaps, and understanding your team’s skills, we create a clear path for growth. Our process ensures that every decision is based on solid evidence, helping your business succeed. With the right data, we can help you reach new heights.
                        </p>

                    </div>
                </div>
                <div className='w-full flex  items-center justify-center p-[10vh] bg-white max-md:w-full max-md:flex max-md:flex-col-reverse max-md:justify-center max-md:items-center max-md:p-4'>


                    <div className='w-[60%] items-center justify-center flex flex-col max-md:w-full'>

                        <h2 className='w-full text-2xl font-semibold text-left'>▶ &emsp;Solution Shaping: </h2>

                        <p className='text-xl text-gray-500 text-justify py-4 w-[90%]'>Our approach starts with understanding your needs and crafting business solutions that fit. We dive deep into your operations to identify what’s working and what’s not, ensuring that the solutions we propose are practical and effective.


                        </p>
                        <p className='text-xl text-black text-justify pt-4 font-bold w-[90%]'> Process Re-Design
                        </p>
                        <p className='text-xl text-gray-500 text-justify py-4 w-[90%]'>
                            Sometimes, the path to success requires rethinking how things are done. We specialize in process redesign, streamlining your workflows to boost efficiency and eliminate bottlenecks. By re-engineering key processes, we help your business run smoother and faster.


                        </p>
                        <p className='text-xl text-black text-justify pt-4 font-bold w-[90%]'>Design Tools</p>

                        <p className='text-xl text-gray-500 text-justify py-4 w-[90%]'>Using the latest design tools, we create clear, actionable plans that guide your team through every step of the transformation. These tools help us visualize changes, test ideas, and ensure that the solutions we shape are both innovative and grounded in reality.</p>
                    </div>
                    <div className='w-[40%] items-center justify-center flex max-md:w-full'>
                        {/* <img src='/assets/images/week4.png' className='w-[70%] max-md:w-[70%]' alt={"week4+"} /> */}
                        <div className='relative h-[55vh] max-md:h-[40vh] max-md:w-[80%] w-[80%]'>
                            <Image fill src={`${BaseUrl().imgurl}/week4.png`} className='' alt={"week1"}

                            />
                        </div>
                    </div>

                </div>
                <div className='w-full flex  items-center justify-center p-[10vh] bg-[#e0f1fe] max-md:w-full max-md:flex max-md:flex-col max-md:justify-center max-md:items-center max-md:p-4'>
                    <div className='w-[40%] items-center justify-center flex max-md:w-full'>
                        {/* <img src='/assets/images/week5.png' className='w-[70%] max-md:w-[70%]' alt={"week6+"} /> */}
                        <div className='relative h-[55vh] max-md:h-[45vh] max-md:w-[80%] w-[80%]'>
                            <Image fill src={`${BaseUrl().imgurl}/week5.png`} className='' alt={"week1"}

                            />
                        </div>
                    </div>
                    <div className='w-[60%] items-center justify-center flex flex-col max-md:w-full'>

                        <h2 className='w-full text-2xl font-semibold text-left'>▶&emsp;Implementing Solutions </h2>
                        <p className='text-xl text-gray-500 text-justify py-4 w-[90%]'>At Madasky Consulting, we understand that successful implementation is the bridge between strategy and results. Our approach to implementing solutions is thorough, ensuring that every detail is covered to achieve seamless execution and lasting impact.
                        </p>

                        <p className='text-xl text-black text-justify pt-4 font-bold w-[90%]'> Implementation Trainings


                        </p>
                        <p className='text-xl text-gray-500 text-justify py-4 w-[90%]'>Subheading: Implementation Trainings
                            The first step in successful implementation is ensuring that your team is fully prepared. We provide comprehensive implementation trainings tailored to your specific solution. These sessions equip your team with the necessary knowledge and skills to execute the new strategy effectively. We cover everything from understanding the new processes to using any new tools, ensuring that everyone is confident and capable when its time to roll out the solution.


                        </p>
                        <p className='text-xl text-black text-justify pt-4 font-bold w-[90%]'>Set Up for Roll-Out</p>
                        <p className='text-xl text-gray-500 text-justify py-4 w-[90%]'>
                            With your team trained, the next step is setting up for roll-out. We meticulously organize all the elements needed for a smooth transition, from aligning internal processes to preparing the necessary resources. This setup phase includes ensuring that all systems and infrastructures are ready to support the new solution, reducing the risk of disruptions and ensuring a seamless transition.



                        </p>
                        <p className='text-xl text-black text-justify pt-4 font-bold w-[90%]'>Implementation Facilitation</p>

                        <p className='text-xl text-gray-500 text-justify py-4 w-[90%]'>Our role doesn’t end with planning; we actively facilitate the implementation process. We work closely with your team during the roll-out, providing guidance and support at every stage. Our experts are on hand to address any challenges that arise, ensuring that the solution is integrated into your operations smoothly and effectively.
                        </p>
                        <p className='text-xl text-black text-justify pt-4 font-bold w-[90%]'> Monitoring and Adjustments</p>

                        <p className='text-xl text-gray-500 text-justify py-4 w-[90%]'>After the solution is implemented, we don’t just walk away. We continuously monitor the solution’s performance, making adjustments as needed to ensure it delivers the expected results and supports long-term success.
                            With Madasky Consulting, your solutions are implemented smoothly and effectively, driving measurable success for your business.

                        </p>
                    </div>
                </div>
                <div className='w-full flex items-center justify-center p-[10vh] bg-white max-md:w-full max-md:flex max-md:flex-col-reverse max-md:justify-center max-md:items-center max-md:p-4'>
                    <div className='w-[50%] items-center justify-center flex flex-col max-md:w-full'>

                        <h2 className='w-full text-2xl font-semibold text-left'> &emsp;Evaluate Outcome
                        </h2>
                        <p className='text-xl text-gray-500 text-justify py-4 w-[90%]'>At Madasky Consulting, evaluating outcomes is crucial to ensuring that your business solutions deliver lasting success. Here’s how we approach it:
                        </p>

                        <p className='text-xl text-black text-justify pt-4 font-bold w-[90%]'>Assessment Team Training


                        </p>
                        <p className='text-xl text-gray-500 text-justify py-4 w-[90%]'>We train your assessment team to accurately measure and evaluate the performance of the implemented solution. This training equips them with the skills needed to identify gaps and assess the overall impact on your business.


                        </p>
                        <p className='text-xl text-black text-justify pt-4 font-bold w-[90%]'>Set Up for Roll-Out</p>
                        <p className='text-xl text-gray-500 text-justify py-4 w-[90%]'>
                            With your team trained, the next step is setting up for roll-out. We meticulously organize all the elements needed for a smooth transition, from aligning internal processes to preparing the necessary resources. This setup phase includes ensuring that all systems and infrastructures are ready to support the new solution, reducing the risk of disruptions and ensuring a seamless transition.



                        </p>
                        <p className='text-xl text-black text-justify pt-4 font-bold w-[90%]'> Audits and Corrective Action</p>

                        <p className='text-xl text-gray-500 text-justify py-4 w-[90%]'>Regular audits are conducted to review the solution's effectiveness. If issues arise, we take corrective action promptly to keep everything aligned with your business goals. This proactive approach ensures that the solution remains effective over time.

                        </p>
                        <p className='text-xl text-black text-justify pt-4 font-bold w-[90%]'> Success Indicators</p>

                        <p className='text-xl text-gray-500 text-justify py-4 w-[90%]'>We help you define clear success indicators—specific metrics that track the solution’s performance. These indicators provide a clear picture of whether the solution is meeting its objectives and driving your business forward.


                        </p>
                        <p className='text-xl text-black text-justify pt-4 font-bold w-[90%]'>Continuous Improvements
                        </p>

                        <p className='text-xl text-gray-500 text-justify py-4 w-[90%]'>We believe in continuous improvement. Even after implementation, we regularly review the solution’s performance and seek opportunities to optimize and enhance it. This ensures that your business continues to thrive and adapt to changing needs.
                        </p>
                    </div>
                    <div className='w-[50%] items-center justify-center flex max-md:w-full'>
                        {/* <img src='/assets/images/week6.png' className='w-[60%] max-md:w-[80%]' alt={"week2"} /> */}
                        <div className='relative h-[60vh] max-md:h-[45vh] max-md:w-[80%] w-[70%]'>
                            <Image fill src={`${BaseUrl().imgurl}/week6.png`} className='' alt={"week1"}

                            />
                        </div>

                    </div>
                </div>
                <div className='w-full flex items-center justify-center p-[10vh] bg-[#e0f1fe] max-md:w-full max-md:flex max-md:flex-col max-md:justify-center max-md:items-center max-md:p-4'>
                    <div className='w-[50%] items-center justify-center flex max-md:w-full'>
                        {/* <img src='/assets/images/week7.png' className='w-[60%] max-md:w-[80%]' alt={"Sustain"} /> */}
                        <div className='relative h-[50vh] max-md:h-[45vh] max-md:w-[80%] w-[60%]'>
                            <Image fill src={`${BaseUrl().imgurl}/week7.png`} className='' alt={"week1"}

                            />
                        </div>
                    </div>

                    <div className='w-[50%] items-center justify-center flex flex-col max-md:w-full'>

                        <h2 className='w-full text-2xl font-semibold text-left'>▶ &emsp;Sustain
                        </h2>
                        <p className='text-xl text-gray-500 text-justify py-4 w-[90%]'>At Madasky Consulting, we believe that true success is about more than just achieving immediate goals—it’s about sustaining that success over the long term. Our focus is on creating strategies that provide lasting value, ensuring that the improvements we make continue to benefit your business well into the future. We provide ongoing support to help your business adapt to new challenges and changing market conditions, keeping you competitive and resilient. By embedding sustainable practices into your operations, we help you build a foundation for continuous growth and success, ensuring that your business thrives not just today, but for years to come.

                        </p>
                    </div>
                </div>
                <div className='w-full flex items-center justify-center py-8 bg-[url("/assets/images/bggraphic.jpg")] bg-center bg-no-repeat bg-cover bg-fixed'>
                    <div className='w-[90%] flex flex-col items-center justify-center p-[10vh] bg-white max-md:w-full max-md:flex max-md:flex-col max-md:justify-center max-md:items-center max-md:p-4'>
                        <h2 className='w-full text-4xl font-semibold text-center'>How We Engage</h2>
                        <p className='w-full py-4 text-xl text-center text-gray-500'>At Madasky Consulting, we understand that every business has unique needs, so we offer flexible ways to work together. Whether you need quick solutions for immediate challenges, strategic support for medium-term growth, or comprehensive long-term guidance for transformational change, we’re here to help. Our approach is designed to fit your specific goals and deliver measurable results, ensuring that our partnership aligns with your business objectives and drives your success forward.

                        </p>
                        <div className='flex items-center justify-center bg-[#e0f1fe] py-8 w-[80%] max-md:w-[100%] max-md:px-4'>
                            {/* <img src="/assets/images/Howweengage.png" className='w-[70%] max-md:w-full' alt={"how-engage"} /> */}
                            <div className='relative h-[55vh] max-md:h-[35vh] max-md:w-[100%] w-[80%]'>
                                <Image fill src={`${BaseUrl().imgurl}/Howweengage.png`} className='' alt={"how-engage"}

                                />
                            </div>

                        </div>
                        <p className='text-xl text-black text-justify pt-9 font-bold w-[90%]'> Short-Term Engagements:

                        </p>

                        <p className='text-xl text-gray-500 text-justify py-4 w-[90%]'>Our short-term engagements are designed to deliver quick and effective solutions within 3 to 6 months. We focus on targeted areas such as process improvements, sales enhancements, or operational efficiencies to provide immediate results that can be quickly implemented and measured.

                        </p>
                        <p className='text-xl text-black text-justify pt-4 font-bold w-[90%]'>Medium-Term Engagements:
                        </p>

                        <p className='text-xl text-gray-500 text-justify py-4 w-[90%]'>If your business is looking to build momentum and grow steadily, our medium-term engagements, lasting 6 to 12 months, are a great option. We take a closer look at your business operations to create and put in place strategies that match your long-term goals. By working closely with your team, we make sure the changes we make are effective and last, helping your business succeed over time.

                        </p>
                        <p className='text-xl text-black text-justify pt-4 font-bold w-[90%]'>Long-Term Engagements:
                        </p>

                        <p className='text-xl text-gray-500 text-justify py-4 w-[90%]'>Our long-term engagements are designed for organizations seeking transformational change. These partnerships, lasting over 12-36 months, involve comprehensive support for large-scale initiatives such as organizational restructuring, leadership development, or digital transformation. We commit to guiding you through every stage of these complex projects, ensuring that you achieve significant and lasting impact.
                            Regardless of the duration, our approach is always focused on delivering measurable results that drive your business forward. At Madasky Consulting, we are dedicated to your success, whether you're seeking short-term solutions or long-term growth.

                        </p>

                    </div>

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
