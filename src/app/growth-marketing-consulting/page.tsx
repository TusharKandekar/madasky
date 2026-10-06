import { Metadata } from 'next'
import GrowthMarketingAndSalesCard1 from '@/components/GrowthMarketingAndSalesCard1'
import GrowthMarketingAndSalesCard2 from '@/components/GrowthMarketingAndSalesCard2'
import GrowthMarketingAndSalesCard3 from '@/components/GrowthMarketingAndSalesCard3'
import GrowthMarketingAndSalesCard4 from '@/components/GrowthMarketingAndSalesCard4'
import GrowthMarketingAndSalesCard5 from '@/components/GrowthMarketingAndSalesCard5'
// import GoToMarketStrategy from '@/components/GoToMarketStrategy';
import ConsultingNavbar from '@/components/ConsultingNavbar';
import Footer from '@/components/Footer';
// import vid1 from "/assets/images/GROWTH MARKETING AND SALES69.mp4";
import AboutVideo from '@/components/AboutVideo';
import HelpYou from '@/components/HelpYou';
import FaqComponent from '@/components/FaqComponent';



import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
import type { PageMetaDataResponse } from "@/common/types";
import BaseUrl from '@/components/BaseUrl';


const title = "Growth Marketing & Sales";
// const PageMetadata = await fetchMetaDataByPageName({ pageName: "Growth Marketing & Sales" });

import { getImageAltText, getWebBlogs, fetchMetaDataByPageName, getDataByPageName, filterByWebImage, getImageData, getTestimonials, getTestimonialsByPageName, getEventByPageName } from "@/common/api";

// console.log(PageMetadata);
let PageMetadata: PageMetaDataResponse;

type Faq = {
    question: string;
    answer: string;
};

export async function generateMetadata(): Promise<Metadata> {
    PageMetadata = await fetchMetaDataByPageName({ pageName: "Growth Marketing & Sales" });
    console.log("Metaas: ", PageMetadata);

    return {
        title: PageMetadata.data.meta_title,
        description: PageMetadata.data.meta_desc,
        keywords: PageMetadata.data.meta_keyword,
        authors: {
            name: `${PageMetadata?.data?.author || 'Madasky'}`,
            url: "https://madasky.com",
        },
        alternates: {
            canonical:
                `${BaseUrl().mainurl}growth-marketing-consulting`
        },

    };
}

export default async function GrowthMarketingAndSales() {

    let blogData;
    let videoData;
    let galleryData;
    let testimonialData;
    let eventData;
    let serverError = false;

    try {

        blogData = await getDataByPageName(["Growth Marketing & Sales", "blogs"]);
        videoData = await getDataByPageName(["Growth Marketing & Sales", "videos"]);
        galleryData = await getDataByPageName(["Growth Marketing & Sales", "gallery"]);
        testimonialData = await getTestimonialsByPageName("Growth Marketing & Sales");
        eventData = await getEventByPageName("Growth Marketing & Sales");

    }
    catch (error) {
        // console.error("Server Error:", error);
        serverError = true;
    }

    // console.log("Images", images);
    if (serverError) {
        return <div>Server Error</div>
    }

    const faqs: Faq[] = [
        {
            question: 'What is growth, marketing, and sales consulting for manufacturing businesses?',
            answer: `It's a strategic service that helps manufacturers balance operational efficiency with growth by analyzing markets, creating plans, and implementing sales and marketing strategies.`
        },
        {
            question: 'How does Madasky Consulting approach growth and sales consulting?',
            answer: 'We analyze market dynamics, strategize customized plans, and implement effective marketing and sales solutions to drive revenue and growth.'
        },
        {
            question: 'What specific services does Madasky offer in marketing and sales consulting?',
            answer: 'We provide go-to-market strategy consulting, new age marketing, sales accelerator programs, 5X business multiplier programs, and e-commerce consulting.'
        },
        {
            question: `Why should a business choose Madasky Consulting for
marketing and sales?`,
            answer: 'We help boost revenue, engage customers, adapt to changing markets, and stay ahead with data-driven strategies and proven methodologies.'
        },
        {
            question: 'Can Madasky Consulting help both new and established businesses?',
            answer: 'Yes, we tailor our marketing consultant services to fit businesses at all stages to maximize growth and market success.'
        },
    ];


    return (
        <>
           

            <ConsultingNavbar
                url={'/growth-marketing-consulting'}
                title={'Growth Marketing & Sales'}
                navItems={[
                    { title: 'Go to Market Strategy', link: '/go-to-market-strategy' },
                    { title: 'New Age Marketing', link: '/new-age-marketing' },
                    { title: 'Sales Accelerator Program', link: '/sales-accelerator-program' },
                    { title: 'The 5X Business Multiplier Program', link: '/5x-business-multiplier-program' },
                    { title: 'E-Commerce', link: '/growth-marketing-e-commerce' },


                ]}
            />

            <AboutVideo vid1={`/assets/videos/GROWTH MARKETING AND SALES69.mp4`} title={title} des={"Creating and accelerating critical advantages through cutting-edge strategy and operations"} h1={PageMetadata?.data?.h1tag} />

            <GrowthMarketingAndSalesCard1 />
            <GrowthMarketingAndSalesCard2 />
            <GrowthMarketingAndSalesCard3 />
            <GrowthMarketingAndSalesCard4 />
            <GrowthMarketingAndSalesCard5 />


            <div className='border w-[80%] mx-auto border-gray-300 h-[1px]'></div>


            <FaqComponent faqs={faqs} />



         
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
    )
}

