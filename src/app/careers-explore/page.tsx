import React from 'react'
import { Metadata } from "next";

// import { Link } from 'react-router-dom';
import AboutNavbar from '@/components/Header/AboutNavbar';
import AboutVideo from '@/components/AboutVideo';
// import JobCard from '../components/JobCard';
import Footer from '@/components/Footer';
import CareerButton from '@/components/CareerButton';
// import SlidingBlogs from '../components/SlidingBlogs';
// import VideoPlayer from '../components/VideoPlayer';
// import Imagetemplate from '../components/Imagesliders';
import HelpYou from '@/components/HelpYou';
// import NewCapabilities from '../components/NewCapabilities';
import NewCapabilities2 from '@/components/NewCapabilities2';
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
import { getImageAltText, getWebBlogs, fetchMetaDataByPageName, getDataByPageName, filterByWebImage, getImageData, getTestimonialsByPageName, getEventByPageName } from "@/common/api";
import BaseUrl from '@/components/BaseUrl';
import type { PageMetaDataResponse } from "@/common/types";


const title = "";
let PageMetadata : PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
  PageMetadata = await fetchMetaDataByPageName({ pageName: "Explore" });
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
        `${BaseUrl().mainurl}careers-explore`
      },

  };
}

const CareerJobs = async () => {
    const arr = ["career4.png", "career5.png", "career6.png", "personal growth.png", "career999.png"];


    let images;
    let blogData;
    let videoData;
    let galleryData;
    let testimonialData;
    let eventData;
    let serverError = false;

    try {
        images = await getImageAltText(arr);
        blogData = await getDataByPageName(["Explore", "blogs"]);
        videoData = await getDataByPageName(["Explore", "videos"]);
        galleryData = await getDataByPageName(["Explore", "gallery"]);
        testimonialData = await getTestimonialsByPageName("Explore");
        eventData = await getEventByPageName("Explore");

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
        <div>
            {/* <Link to="/careers/jobs"> */}
            <AboutNavbar />
            <AboutVideo vid1={'assets/videos/Careers69.mp4'} title={title} des={""} pageName={"Explore"}/>

            <div className='w-full bg-[#e0f1fe] flex items-center justify-center flex-col pb-20 pt-10 mb-14'>
                <h1 className='mb-5 text-5xl font-bold text-center text-black max-md:text-3xl'>{PageMetadata?.data?.h1tag || "Explore"}</h1>
                <div className="w-[33%] h-[5px] bg-[#bce1fd] my-7" style={{
                    background: 'linear-gradient(to right, #05528a 50%, #d02c22 50%)',

                }}></div>
                <div className='w-[90%] mx-auto border-2 bg-white border-gray-200 rounded-3xl flex flex-col items-center py-10  h-auto'>
                    <NewCapabilities2
                        readMoreLink="#"
                        bgcolor="bg-white"
                        altText={imgAltText[0]}

                        image="/career4.png"
                        order="flex-row-reverse"
                        title="What It's Really Like to Work Here at Madasky Consulting"
                        description={[
                            "At Madasky Consulting, you'll join a team that thrives on intellectual challenge, creativity, and a deep commitment to making a lasting impact. Our work environment is built on collaboration and mutual respect, where the synergy between smart, driven individuals leads to innovative solutions for our clients. Here, you won't just be solving problems—you'll be part of a mission to drive growth, transformation, and success for businesses around the world.",

                        ]} />


                    <NewCapabilities2
                        readMoreLink="#"
                        bgcolor="bg-[#f8fafc]"
                        altText={imgAltText[1]}

                        image="/career5.png"
                        order="-reverse"
                        title="A Culture of Collaboration and Excellence"
                        description={[
                            " Working at Madasky Consulting means becoming part of a community where teamwork is not just a buzzword but the essence of our success. We believe that the best ideas are born from diverse perspectives, and that's why collaboration is at the heart of everything we do. You'll find yourself working alongside colleagues who are not only experts in their fields but also genuinely supportive, always ready to share their knowledge and help you grow. Our culture is one of continuous learning and improvement. You'll be encouraged to push boundaries, think critically, and explore new ways of solving complex problems. We take pride in fostering an environment where every team member feels valued and empowered to contribute their unique insights. This collaborative spirit extends beyond our internal teams to our relationships with clients, where we work hand-in-hand to achieve their goals.",

                        ]} />

                    <NewCapabilities2
                        readMoreLink="#"
                        bgcolor="bg-white"
                        altText={imgAltText[2]}
                        image="/career6.png"
                        order="flex-row-reverse"
                        title="Choosing Your Path: Tailored Career Development"
                        description={[
                            "At Madasky Consulting, you'll join a team that thrives on intellectual challenge, creativity, and a deep commitment to making a lasting impact. Our work environment is built on collaboration and mutual respect, where the synergy between smart, driven individuals leads to innovative solutions for our clients. Here, you won't just be solving problems—you'll be part of a mission to drive growth, transformation, and success for businesses around the world.",

                        ]} />


                    <NewCapabilities2
                        readMoreLink="#"
                        bgcolor="bg-[#f8fafc]"
                        altText={imgAltText[3]}
                        image="/personal growth.png"
                        order=""
                        title="The Madasky Consulting Experience: Intellectual Rigour and Personal Growth"
                        description={[
                            "  Our clients come to us with some of the most challenging and complex problems in their industries, and they expect us to deliver results that matter. To meet these expectations, we foster a culture of intellectual rigour and curiosity. You'll be encouraged to ask tough questions, think deeply about solutions, and never settle for the status quo. This environment is ideal for those who love to be challenged and who find satisfaction in solving the most intricate problems.",
                            "But it's not just about the work. At Madasky Consulting, we believe that personal growth is just as important as professional development. We are committed to supporting your journey, offering continuous learning opportunities, mentorship, and a strong network of colleagues who are invested in your success. Whether you're developing new skills, taking on leadership roles, or exploring different areas of interest, we are here to help you grow and succeed.",

                        ]} />

                    <NewCapabilities2
                        readMoreLink="#"
                        bgcolor="bg-white"
                        altText={imgAltText[4]}
                        image="/career999.png"
                        order="flex-row-reverse"
                        title="Making a Meaningful Impact"
                        description={[
                            " When you join Madasky Consulting, you become part of something bigger than just a job—you become part of a mission to create positive change. Our work has a real impact on the businesses and communities we serve. Whether you're helping a client navigate a major transformation, driving innovation in an industry, or contributing to the growth of our firm, you'll see the results of your efforts in the real world.",
                            "You'll have the opportunity to work on projects that matter, tackling issues that are at the forefront of today's business landscape. Your work will help reshape industries, drive sustainable growth, and create lasting value for our clients. And as you do, you'll be supported by a team that values your contributions and is dedicated to your success.",

                        ]} />


                    <div className='flex flex-col gap-5 py-9'>
                        <CareerButton text={"Explore Our Job"} path={"/careers-jobs"}></CareerButton>
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
            {/* </Link> */}
        </div>
    )
}

export default CareerJobs