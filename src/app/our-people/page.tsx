
import Footer from "@/components/Footer";
import { Metadata } from "next";
import AboutNavbar from "@/components/Header/AboutNavbar";
import AboutVideo from "@/components/AboutVideo";
import InfoCard from '@/components/InfoCard';
import Founder from '@/components/Founder';
import HelpYou from '@/components/HelpYou';
import NewCapabilities from '@/components/NewCapabilities';
import BaseUrl from '@/components/BaseUrl';
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
import { getImageAltText, fetchMetaDataByPageName, getWebBlogs, getDataByPageName, filterByWebImage, getImageData, getTestimonialsByPageName, getEventByPageName } from "@/common/api";
import type { PageMetaDataResponse } from "@/common/types";


const title = "Our Leadership and People";
let PageMetadata : PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
  PageMetadata = await fetchMetaDataByPageName({ pageName: "Our Leadership and People" });
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
        `${BaseUrl().mainurl}Our-People`
      }

  };
}

export default async function OurPeople() {

    const arr = ["mr.amitmittal.png", "343.png", "Allianceheader.png", "ourexpert.png", "Inspiration.png"];


    let images;

    let blogData;
    let videoData;
    let galleryData;
    let testimonialData;
    let eventData;

    let serverError = false;

    try {
        images = await getImageAltText(arr);

        blogData = await getDataByPageName(["Our Leadership and People", "blogs"]);
        videoData = await getDataByPageName(["Our Leadership and People", "videos"]);
        galleryData = await getDataByPageName(["Our Leadership and People", "gallery"]);
        testimonialData = await getTestimonialsByPageName("Our Leadership and People");
        eventData = await getEventByPageName("Our Leadership and People");


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
            <AboutVideo vid1={"assets/videos/HomePageWebsite.mp4"} title={"Madasky"} des={"Creating and accelerating critical advantages through cutting-edge strategy and operations"} h1={PageMetadata?.data?.h1tag}/>

            <div className="flex flex-col items-center max-md:overflow-hidden">
                <div className="w-full  text-center pt-[15vh] ">
                    <div className='flex flex-col items-center justify-center w-full'>
                        <h2 className='text-6xl font-bold text-center width-full max-md:text-4xl'>Our Leadership</h2>
                        <p className='text-center text-gray-500 text-lg py-4 pb-7 w-[70%] max-md:w-[90%] max-md:text-justify'>Our leadership team is composed of visionary individuals with deep industry expertise and a commitment to driving innovation. They lead with integrity and focus on creating a culture of collaboration, fostering growth and excellence across the organization. </p>
                    </div>
                    <Founder altText={imgAltText[0]} />
                    <div className='flex items-center justify-center w-full max-md:flex-col'>
                        <InfoCard
                            title="Our Team"
                            subtitle=""
                            order="flex-row-reverse items-center"
                            altText={imgAltText[1]}
                            image="/343.png"
                            description={[
                                'At Madasky Consulting, the foundation of our success lies in the unparalleled expertise and dedication of our people, along with the strategic strength of our associations. Our team serves as a beacon of excellence, driving us towards unmatched client service and fulfilling our mission to champion our people.',

                            ]}
                        />
                    </div>
                    <div className='flex flex-col items-start justify-center w-full h-auto gap-0 text-start max-md:flex-col max-md:p-0 max-md:items-center max-md:justify-center '>
                        <NewCapabilities
                            readMoreLink="#"
                            bgcolor="bg-[#f8fafc]"
                            altText={imgAltText[2]}

                            image="/Allianceheader.png"
                            order="flex-row-reverse"
                            title="Alliances"
                            description={[
                                'At Madasky Consulting, we leverage strategic partnerships with leading providers in Business Software, Manufacturing Execution Systems (MES), Product Lifecycle Management (PLM), Branding, Brand Positioning, and AI-based lead generation technology. These collaborations empower us to deliver cutting-edge solutions and unparalleled expertise, ensuring our clients stay ahead in a competitive landscape. Our alliances enable us to drive innovation, optimize operations, and enhance market presence, reinforcing our commitment to delivering transformative results and sustained success.',

                            ]} />
                        <NewCapabilities
                            readMoreLink="#"
                            bgcolor="bg-white"
                            altText={imgAltText[2]}

                            image="/ourexpert.png"
                            order="flex-row"
                            title="Our Experts- “ProXperts”"
                            description={[
                                'Our ProXperts are industry-specific specialists who bring a wealth of experience and knowledge to our clients. Each expert has many years of expertise in their particular field, enabling them to provide invaluable insights and strategies tailored to our clients unique needs. They collaborate closely with our team and clients,These collaborations empower us to deliver cutting-edge solutions and unparalleled expertise providing strategic  Our alliances enable us to drive innovation, guidance to address and resolve the most pressing challenges.',

                            ]}
                        />

                        <NewCapabilities
                            readMoreLink="#"
                            bgcolor="bg-[#f8fafc]"
                            altText={imgAltText[3]}

                            image="/Inspiration.png"
                            order="flex-row-reverse"
                            title="Our Inspiration”"
                            description={[
                                'Accelerating Sustainable and Inclusive Growth',
                                'Accelerating Sustainable and Inclusive Growth We’ve always been big believers in the growth potential of our clients. Today, we’re privileged to work with organizations that are on a new growth journey, one that pursues sustainability, inclusion, and economic growth, all at the same time.',
                            ]}
                        />
                    </div>
                    {/* <div className="flex justify-center gap-4">
                        <a
                            href="#"
                            className="flex items-center justify-center w-8 h-8 text-white bg-black rounded-full"
                        >
                            <FaLinkedinIn />
                        </a>
                        <a
                            href="#"
                            className="flex items-center justify-center w-8 h-8 text-white bg-black rounded-full"
                        >
                            <RiTwitterXFill />
                        </a>
                        <a
                            href="#"
                            className="flex items-center justify-center w-8 h-8 text-white bg-black rounded-full"
                        >
                            <FaFacebookF />
                        </a>
                    </div> */}
                </div>
                {/* <div className="flex justify-center">
                    <div className="grid w-4/5 max-w-5xl grid-cols-2 gap-8 p-5 mx-auto">
                        <FourGridItem
                            title={'About Amit Mittal'}
                            description={
                                'Amit has over 26 years of business & professional experience in go-to-market strategies, business growth, performance improvement, international supply chain and product sourcing, and operations excellence roles with international retail, brand, and manufacturing-centric businesses....'
                            }
                            link={'/about'}
                            linkText={'See About Amit Mittal'}
                        />
                        <FourGridItem
                            title="Enablement Team"
                            description={
                                'Our Enablement Team is a global leadership body that accelerates the delivery of our client service and people mission. The team connects leaders of regions and key capabilities, such as People & Diversity, Risk & Resilience, and Finance, to support our firm&apos;s performance and health.'
                            }
                            link={'/about'}
                            linkText={'See Members'}
                        />
                        <FourGridItem
                            title="Our Leadership"
                            description={
                                'Amit has over 26 years of business & professional experience in go-to-market strategies, business growth, performance improvement, international supply chain and product sourcing, and operations excellence roles with international retail, brand, and manufacturing-centric businesses.During these years, Amit has developed a passion for and played an important role in defining key business strategies to help companies aggressively.'
                            }
                            link={'/about'}
                            linkText={'See Members'}
                        />
                        <FourGridItem
                            title={'Practice Leadership'}
                            description={
                                'Our practices serve clients across most capabilities and industries. The global leaders of each are responsible for delivering client impact, developing knowledge and capabilities, innovating, and developing our people. They work closely with regional leaders and many others to deliver positive, enduring change to our clients and stakeholders.'
                            }
                            link={'/about'}
                            linkText={'See Members'}
                        />
                    </div>
                </div> */}


                {/* <InfoCard
                    title="Our Inspiration"
                    subtitle=""
                    order="flex-row items-center"
                    image="/assets/images/98.jpg"
                    description={[
                        'Accelerating Sustainable and Inclusive Growth',
                        'Accelerating Sustainable and Inclusive Growth We’ve always been big believers in the growth potential of our clients. Today, we’re privileged to work with organizations that are on a new growth journey, one that pursues sustainability, inclusion, and economic growth, all at the same time.',
                    ]}
                /> */}

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
