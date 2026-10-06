// import React, { useState, useEffect } from 'react'
import { Metadata } from 'next';
import AboutNavbar from '@/components/Header/AboutNavbar';
import HelpYou from '@/components/HelpYou';
import Footer from '@/components/Footer';
import Videotemplate from "@/components/Videotemplate"; // Make sure to import your Card component
// import { getVideos } from '@/components/CommonData';
// const [videos, setVideos] = useState([]);
// getVideos
import BaseUrl from '@/components/BaseUrl'
import { getAllBlogs, fetchMetaDataByPageName } from "@/common/api";
import type { PageMetaDataResponse } from "@/common/types";


const title = "Videos";

let PageMetadata : PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
  PageMetadata = await fetchMetaDataByPageName({ pageName: "Videos" });
//   console.log("Metaas: ", PageMetadata);

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
        `${BaseUrl().mainurl}video`
      },

  };
}

// const PageMetadata = await fetchMetaDataByPageName({ pageName: "Videos" });


// // console.log(PageMetadata);
// const rawKeywords: string = PageMetadata?.data?.meta_keyword || '';
// const formattedKeywords: string[] = rawKeywords
//     .split(',')
//     .map((kw: string) => kw.trim());



// export const metadata: Metadata = {
//     title: `Madasky | ${PageMetadata?.data?.meta_title || 'Videos'}`,
//     description: `${PageMetadata?.data?.meta_desc || 'Driving transformation and innovation across industries.'}`,
//     keywords: formattedKeywords,

// }
export default async function Video  () {
     const title = "videos";
        const videos = await getAllBlogs({ pageName: title });
    
    
        // console.log(videos);
        interface videosItem {
            id: 1;
            video_title: string;
            video_link: string;
            video_desc: string;
       
        }
    

    return (
        <div className='w-full'>
            <AboutNavbar />
            <div className='w-full bg-white flex justify-center items-center h-auto py-10'>
                <div className='w-[80%]  grid grid-cols-3 h-auto max-md:grid max-md:grid-cols-1 max-md:h-auto gap-y-4 max-md:w-[95%]'>






                {Array.isArray(videos?.data) &&
                            videos.data.map((video: videosItem, index: number) => (

                            <Videotemplate
                                key={index}
                                url={video.video_link || ""}
                                title={video.video_title || "Video"}
                                description={video.video_desc || ""}
                                
                            />

                        ))
                    }











                </div>

            </div>
            <HelpYou />
            <Footer />
        </div>
    )
}

