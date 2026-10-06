import Footer from '@/components/Footer';
import ManfucaturingCompo from '@/components/ManfucaturingCompo'
import HelpYou from '@/components/HelpYou';
import { Metadata } from "next";
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
import { getImageAltText, fetchMetaDataByPageName, getWebBlogs, getDataByPageName, filterByWebImage, getImageData, getTestimonialsByPageName, getEventByPageName } from "@/common/api";
import type { PageMetaDataResponse } from "@/common/types";
import BaseUrl from '@/components/BaseUrl';


const title = "Manufacturing";
let PageMetadata : PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
  PageMetadata = await fetchMetaDataByPageName({ pageName: "Manufacturing" });
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
        `${BaseUrl().mainurl}manufacturing-consulting`
      },

  };
}

// import SlidingBlogs from '@/components/SlidingBlogs';
// import VideoPlayer from '@/components/VideoPlayer';
// import Imagetemplate from '@/components/Imagesliders';
export default async function Manufaturing() {



    let blogData;
    let videoData;
    let galleryData;


    let serverError = false;

    try {


        blogData = await getDataByPageName(["Home", "blogs"]);
        videoData = await getDataByPageName(["Home", "videos"]);
        galleryData = await getDataByPageName(["Home", "gallery"]);



    }
    catch (error) {
        // console.error("Server Error:", error);
        serverError = true;
    }

    // console.log("Images", images);
    if (serverError) {
        return <div>Server Error</div>
    }






    return (
        <div>
            <ManfucaturingCompo h1={PageMetadata?.data?.h1tag}/>
            {/* <div className="px-4 py-12 mx-auto bg-gray-100 max-w-7xl sm:px-6 lg:px-8">
        <h1 className="mb-4 text-5xl font-bold text-gray-800 from-neutral-500">
       Blogs
        </h1>
        <p className="mb-8 text-xl text-gray-600 ">
            Accelerating sustainable and inclusive growth is vital for
            people and economies to prosper. This can only happen if
            every person, regardless of their background or level of
            education, has an opportunity to thrive in the economy and
            workforce.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 ">
            {opportunityItems1.map((item, index) => (
                <Opportunity {...item} key={index} />
            ))}
        </div>
    </div>{' '} */}
            <div className="p-6 flex h-auto flex-col w-full py-[1vh] bg-[#bce1fd75] bg-[url('/assets/images/homeblogbg.png')] bg-center bg-no-repeat bg-cover  items-center justify-center">

                <VideoSliderWrapper videos={videoData.data} />
                <div className="w-[90%] h-[2px] bg-gray-300"></div>

                <BlogSliderWrapper blogs={blogData.data} />
                <div className="w-[90%] h-[2px] bg-gray-300"></div>

                <GallerySliderWrapper gallery={galleryData.data} />




            </div>
            <HelpYou />
            <Footer />
        </div>
    )
}
