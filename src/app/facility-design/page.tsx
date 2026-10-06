import { Metadata } from 'next';
import ConsultingNavbar from '@/components/ConsultingNavbar';
import CapabilitiesHeader from '@/components/CapabilitiesHeader';
import CapabilitiesHeader2 from '@/components/CapabilitiesHeader2';
// import CapabilitiesContent1 from '../components/CapabilitiesContent1';
// import CapabilitiesContent2 from '../components/CapabilitiesContent2';
// import CapabilitiesContent3 from '../components/CapabilitiesContent3';
// import CapabilitiesContent4 from '../components/CapabilitiesContent4';
// import CapabilitiesContent5 from '../components/CapabilitiesContent5';

import Image from 'next/image';

import Footer from '@/components/Footer';
import AboutVideo from '@/components/AboutVideo';
import HelpYou from '@/components/HelpYou';
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
import BaseUrl from '@/components/BaseUrl';
import type { PageMetaDataResponse } from "@/common/types";

import { getImageAltText, getWebBlogs, fetchMetaDataByPageName, getDataByPageName, filterByWebImage, getImageData, getTestimonials, getTestimonialsByPageName, getEventByPageName } from "@/common/api";
import FaqComponent from '@/components/FaqComponent';

type Faq = {
    question: string;
    answer: string;
};
import ServerError from '@/components/ServerError';

const title = "Facility Design - Different types of Warehouses";
let PageMetadata: PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
    PageMetadata = await fetchMetaDataByPageName({ pageName: "Facility Design - Different types of Warehouses" });
    // console.log("Metaas: ", PageMetadata);

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
                `${BaseUrl().mainurl}facility-design`
        },

    };
}

export default async function GrowthMarketingAndSales() {
    const arr = ["Block Stacking Warehouses.png", "Pallet Racking Warehouses.png", "Automated Storage and Retrieval System (ASRS) Warehouses.png", "Mezzanine Floor Warehouses.png", "Cantilever Racking Warehouses.png", "Cold Storage Warehouses.png", "Multi-Tier Warehouses.png", "Narrow Aisle Warehouses.png", "Ground Storage Warehouses.png", "Mixed Storage Warehouses.png", "Vertical Carousel Warehouses.png"];


    let images;
    let blogData;
    let videoData;
    let galleryData;
    let testimonialData;
    let eventData;
    let serverError = false;

    try {
        images = await getImageAltText(arr);
        blogData = await getDataByPageName(["Facility Design - Different types of Warehouses", "blogs"]);
        videoData = await getDataByPageName(["Facility Design - Different types of Warehouses", "videos"]);
        galleryData = await getDataByPageName(["Facility Design - Different types of Warehouses", "gallery"]);
        testimonialData = await getTestimonialsByPageName("Facility Design - Different types of Warehouses");
        eventData = await getEventByPageName("Facility Design - Different types of Warehouses");

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
    // console.log("Image Alt Text", imgAltText);
    const faqs: Faq[] = [
        {
            question: `What challenges do inefficient plant layouts create for manufacturers?`,
            answer: `Inefficient plant layouts lead to workflow delays, poor space utilization, safety risks, and scalability limitations, impacting overall productivity and operational costs.`
        },
        {
            question: `How can Madasky Consulting improve factory space utilization?`,
            answer: `Madasky Consulting maximizes factory space by integrating machinery, storage, and workstations to eliminate wasted space, and designing scalable layouts that adapt to future growth.`
        },
        {
            question: `What is the importance of workflow optimization in plant layout design?`,
            answer: `Workflow optimization minimizes cycle times, reduces material handling, and improves production efficiency by logically sequencing processes and arranging workstations.`
        },
        {
            question: `How does Madasky Consulting ensure safety and compliance in plant layouts?`,
            answer: `Madasky Consulting designs layouts with safety in mind, ensuring compliance with regulations, optimal lighting, ventilation, and noise control to maintain a safe and productive environment.`
        },
        {
            question: `What is the role of energy and utility optimization in plant layout?`,
            answer: `Madasky Consulting optimizes energy and utility placement within the plant layout to reduce costs, streamline operations, and enhance sustainability.`
        },
    ];
    return (
        <>


            <ConsultingNavbar
                url='/warehousing-solutions-consulting'
                title={'Warehousing Solutions'}
                navItems={[
                    { title: 'Facility Design - Different types of Warehouses', link: '/facility-design' },
                    { title: 'Material Handling Equipment', link: '/material-handling-equipment' },
                    { title: 'Logistics and Supply Chain Services', link: '/logistics-and-supply-chain-services' },

                ]}
            />

            <AboutVideo vid1={"/assets/videos/Warehousing solutions.mp4"} title={title} des={"Creating and accelerating critical advantages through cutting-edge strategy and operations"} h1={PageMetadata?.data?.h1tag} />

            <div className='w-[80vw] bg-white mx-auto'>

                <div className='w-full my-20'>

                    <CapabilitiesHeader details1={{
                        heading1: "Facility design - Types of Warehouses",
                        paragraph1: "Warehouses are designed based on storage needs, operational requirements, and product characteristics. At Madasky Consulting, our Facility Design Consulting expertise ensures the right warehouse type is selected and optimized for your business, while our Logistics Supply Chain Consulting services align storage solutions with broader supply chain efficiency. Below are key warehouse types categorized by their storage systems:",




                    }} border={"border-b"} />

                    {/* Block Stacking Warehouses.png  */}
                    <div className={`flex w-full pb-8 mt-20 border-b border-gray-300 `}>

                        <div className='flex flex-col gap-8 w-[60%] max-md:w-full'>

                            <div className='text-black font-bold text-4xl max-md:text-3xl leading-[1]'>
                                <h2>Block Stacking Warehouses</h2>
                            </div>


                            {/* <div className='hidden w-full rounded-lg max-md:block'>
                                <img
                                    src='/assets/images/Block Stacking Warehouses.png'


                                    className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:mx-auto"
                                />
                            </div> */}

                            <div className='w-[40%] max-md:w-[100%] rounded-lg hidden max-md:block max-md:h-[15rem] relative'>
                                <Image

                                    fill
                                    alt={imgAltText[0] ? imgAltText[0] : "Madasky Consulting"}
                                    className="rounded-xl w-[80%] object-fill"
                                    src={`${BaseUrl().imgurl}Block Stacking Warehouses.png`}

                                />
                            </div>

                            {/* style={{ fontFamily: "Helvetica, Arial, sans-serif" }} */}
                            <div className='text-gray-500 text-[20px] font-extralight flex flex-col gap-4 text-justify'  >


                                <ul className='pl-8 list-disc text-gray-800 leading-[24px] space-y-2'>

                                    <li>
                                        <span className='font-semibold text-gray-800 list-disc text-[22px]'>Description: </span><span className='font-normal text-gray-700'>Goods stacked directly on the floor without racks.</span>
                                    </li>
                                    <li>
                                        <span className='font-semibold text-gray-800 list-disc text-[22px]'>Role of Facility Design Consulting: </span><span className='font-normal text-gray-700'>Optimizes floor space for bulk storage.</span>
                                    </li>
                                    <li>
                                        <p className='font-normal text-gray-700'><span className='font-semibold text-gray-800 text-[22px]'>Best For: </span>Homogeneous products like heavy machinery or seasonal inventory.</p>
                                    </li>



                                </ul>



                            </div>

                        </div>

                        <div className='w-[40%] rounded-lg flex items-center justify-center max-md:hidden'>


                            <div className='relative w-[80%] min-h-[30vh]'>


                                <Image
                                    fill
                                    alt={imgAltText[0] ? imgAltText[0] : "Madasky Consulting"}
                                    src={`${BaseUrl().imgurl}Block Stacking Warehouses.png`}
                                    className="object-fill rounded-xl max-md:object-fit max-md:"
                                />
                            </div>

                        </div>




                    </div>


                    {/* Pallet Racking Warehouses.png  */}
                    <div className={`flex w-full pb-8 mt-20 border-b border-gray-300 `}>

                        <div className='flex flex-col gap-8 w-[60%] max-md:w-full'>

                            <div className='text-black font-bold text-4xl max-md:text-3xl leading-[1]'>
                                <h2>Pallet Racking Warehouses</h2>
                            </div>


                            <div className='hidden w-full rounded-lg max-md:block'>
                                {/* <img
                                    src='/assets/images/Pallet Racking Warehouses.png'


                                    className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:mx-auto"
                                /> */}

                                <div className='w-[40%] max-md:w-[100%] rounded-lg hidden max-md:block max-md:h-[15rem] relative'>
                                    <Image

                                        fill
                                        alt={imgAltText[1] ? imgAltText[1] : "Madasky Consulting"}
                                        className="rounded-xl w-[80%] object-fill"
                                        src={`${BaseUrl().imgurl}Pallet Racking Warehouses.png`}

                                    />
                                </div>

                            </div>
                            {/* style={{ fontFamily: "Helvetica, Arial, sans-serif" }} */}
                            <div className='text-gray-500 text-[20px] font-extralight flex flex-col gap-4 text-justify'  >


                                <ul className='pl-8 list-disc text-gray-800 leading-[24px] space-y-2'>

                                    <li>
                                        {/* <span className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Description: </span>Uses pallet racks to store goods in vertical columns.</span> */}

                                        <span className='font-semibold text-gray-800 list-disc text-[22px]'>Description: </span><span className='font-normal text-gray-700'>Uses vertical racks for organized storage</span>
                                    </li>

                                    <li>


                                        <span className='font-semibold text-gray-800 list-disc text-[22px]'>Logistics Supply Chain Consulting Insight: </span><span className='font-normal text-gray-700'>Ensures compatibility with forklifts and inventory rotation strategies.</span>
                                    </li>

                                    <li>


                                        <span className='font-semibold text-gray-800 list-disc text-[22px]'>Types: </span><span className='font-normal text-gray-700'>Selective, Double-Deep, Drive-In, Push-Back racking</span>
                                    </li>

                                    {/* <li>
                                        <p className='font-semibold text-gray-800 text-[22px]'>Advantages:</p>

                                        <ul className='pl-8 list-disc'>
                                            <li className='font-normal text-gray-700'>Allows for easy access and organization.</li>
                                            <li className='font-normal text-gray-700'>Compatible with forklifts and reach trucks for efficient handling.</li>
                                        </ul>
                                    </li>
                                    <li className='space-y-1'>
                                        <p className='font-semibold text-gray-800 text-[22px]'>Types of Pallet Racking:</p>
                                        <ul className='pl-8 list-disc'>
                                            <li>
                                               

                                                <span className='font-semibold text-gray-700 list-disc'>Selective Racking: </span><span className='font-normal text-gray-700'>Direct access to every pallet, suitable for high SKU diversity.</span>
                                            </li>
                                            <li>
                                               

                                                <span className='font-semibold text-gray-700 list-disc'>Double-Deep Racking: </span><span className='font-normal text-gray-700'>Increases storage density by placing pallets two rows deep.</span>
                                            </li>
                                            <li>
                                               
                                                <span className='font-semibold text-gray-700 list-disc'>Drive-In/Drive-Through Racking: </span><span className='font-normal text-gray-700'>High-density storage for uniform products with limited SKU variety.</span>
                                            </li>
                                            <li>
                                                

                                                <span className='font-semibold text-gray-700 list-disc'>Push-Back Racking: </span><span className='font-normal text-gray-700'>Dynamic racking for storing multiple pallets in a lane, accessed on a first-in, last-out (FILO) basis.</span>
                                            </li>
                                        </ul>
                                    </li> */}



                                </ul>



                            </div>

                        </div>

                        <div className='w-[40%] rounded-lg flex items-center justify-center max-md:hidden'>
                            {/* <img
                                src='/assets/images/Pallet Racking Warehouses.png'


                                className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:"
                            /> */}
                            <div className='relative w-[80%] min-h-[30vh]'>


                                <Image
                                    fill
                                    alt={imgAltText[1] ? imgAltText[1] : "Madasky Consulting"}
                                    src={`${BaseUrl().imgurl}Pallet Racking Warehouses.png`}
                                    className="object-fill rounded-xl max-md:object-fit max-md:"
                                />
                            </div>

                        </div>


                    </div>


                    {/* Automated Storage and Retrieval System (ASRS) Warehouses.png  */}
                    <div className={`flex w-full pb-8 mt-20 border-b border-gray-300 `}>

                        <div className='flex flex-col gap-8 w-[60%] max-md:w-full'>

                            <div className='text-black font-bold text-4xl max-md:text-3xl leading-[1]'>
                                <h2>Automated Storage and Retrieval System (ASRS) Warehouses</h2>
                            </div>


                            <div className='hidden w-full rounded-lg max-md:block'>
                                {/* <img
                                    src='/assets/images/Automated Storage and Retrieval System (ASRS) Warehouses.png'


                                    className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:mx-auto"
                                /> */}
                                <div className='w-[40%] max-md:w-[100%] rounded-lg hidden max-md:block max-md:h-[15rem] relative'>
                                    <Image

                                        fill
                                        alt={imgAltText[2] ? imgAltText[2] : "Madasky Consulting"}
                                        className="rounded-xl w-[80%] object-fill"
                                        src={`${BaseUrl().imgurl}Automated Storage and Retrieval System (ASRS) Warehouses.png`}

                                    />
                                </div>
                            </div>
                            {/* style={{ fontFamily: "Helvetica, Arial, sans-serif" }} */}
                            <div className='text-gray-500 text-[20px] font-extralight flex flex-col gap-4 text-justify'  >


                                <ul className='pl-8 list-disc text-gray-800 leading-[24px] space-y-2'>

                                    <li>
                                        {/* <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Description: </span>Fully automated systems that use cranes or shuttles to retrieve and store goods.</p> */}

                                        <span className='font-semibold text-gray-800 list-disc text-[22px]'>Description: </span><span className='font-normal text-gray-700'>Fully automated systems with cranes/shuttles.</span>
                                    </li>

                                    <li>


                                        <span className='font-semibold text-gray-800 list-disc text-[22px]'>Facility Design Consulting Focus: </span><span className='font-normal text-gray-700'> Seamless integration of automation for high-volume operations like e-commerce fulfillment.</span>
                                    </li>



                                </ul>



                            </div>

                        </div>

                        <div className='w-[40%] rounded-lg flex items-center justify-center max-md:hidden'>
                            {/* <img
                                src='/assets/images/Automated Storage and Retrieval System (ASRS) Warehouses.png'


                                className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:"
                            /> */}
                            <div className='relative w-[80%] min-h-[30vh]'>


                                <Image
                                    fill
                                    alt={imgAltText[2] ? imgAltText[2] : "Madasky Consulting"}
                                    src={`${BaseUrl().imgurl}Automated Storage and Retrieval System (ASRS) Warehouses.png`}
                                    className="object-fill rounded-xl max-md:object-fit max-md:"
                                />
                            </div>
                        </div>


                    </div>

                    {/* Mezzanine Floor Warehouses  */}
                    <div className={`flex w-full pb-8 mt-20 border-b border-gray-300 `}>

                        <div className='flex flex-col gap-8 w-[60%] max-md:w-full'>

                            <div className='text-black font-bold text-4xl max-md:text-3xl leading-[1]'>
                                <h2>Mezzanine Floor Warehouses</h2>
                            </div>


                            <div className='hidden w-full rounded-lg max-md:block'>
                                {/* <img
                                    src='/assets/images/Mezzanine Floor Warehouses.png'


                                    className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:mx-auto"
                                /> */}
                                <div className='w-[40%] max-md:w-[100%] rounded-lg hidden max-md:block max-md:h-[15rem] relative'>
                                    <Image

                                        fill
                                        alt={imgAltText[3] ? imgAltText[3] : "Madasky Consulting"}
                                        className="rounded-xl w-[80%] object-fill"
                                        src={`${BaseUrl().imgurl}Mezzanine Floor Warehouses.png`}

                                    />
                                </div>

                            </div>
                            {/* style={{ fontFamily: "Helvetica, Arial, sans-serif" }} */}
                            <div className='text-gray-500 text-[20px] font-extralight flex flex-col gap-4 text-justify'  >


                                <ul className='pl-8 list-disc text-gray-800 leading-[24px] space-y-2'>

                                    <li>
                                        {/* <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Description: </span>Incorporates elevated platforms within the warehouse to add additional storage space.</p> */}

                                        <span className='font-semibold text-gray-800 list-disc text-[22px]'>Description: </span><span className='font-normal text-gray-700'>Elevated platforms for added storage.</span>
                                    </li>

                                    <li>
                                        <p className='font-normal text-gray-700'><span className='font-semibold text-gray-800 text-[22px]'>Best For: </span>Businesses with limited space, supported by Logistics Supply Chain Consulting to balance inventory flow.</p>
                                    </li>



                                </ul>



                            </div>

                        </div>

                        <div className='w-[40%] rounded-lg flex items-center justify-center max-md:hidden'>
                            {/* <img
                                src='/assets/images/Mezzanine Floor Warehouses.png'


                                className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:"
                            /> */}
                            <div className='relative w-[80%] min-h-[30vh]'>


                                <Image
                                    fill
                                    alt={imgAltText[3] ? imgAltText[3] : "Madasky Consulting"}
                                    src={`${BaseUrl().imgurl}Mezzanine Floor Warehouses.png`}
                                    className="object-fill rounded-xl max-md:object-fit max-md:"
                                />
                            </div>
                        </div>


                    </div>


                    {/* Cantilever Racking Warehouses  */}
                    <div className={`flex w-full pb-8 mt-20 border-b border-gray-300 `}>

                        <div className='flex flex-col gap-8 w-[60%] max-md:w-full'>

                            <div className='text-black font-bold text-4xl max-md:text-3xl leading-[1]'>
                                <h2>Cantilever Racking Warehouses</h2>
                            </div>


                            <div className='hidden w-full rounded-lg max-md:block'>
                                {/* <img
                                    src='/assets/images/Cantilever Racking Warehouses.png'


                                    className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:mx-auto"
                                /> */}
                                <div className='w-[40%] max-md:w-[100%] rounded-lg hidden max-md:block max-md:h-[15rem] relative'>
                                    <Image

                                        fill
                                        alt={imgAltText[4] ? imgAltText[4] : "Madasky Consulting"}
                                        className="rounded-xl w-[80%] object-fill"
                                        src={`${BaseUrl().imgurl}Cantilever Racking Warehouses.png`}

                                    />
                                </div>
                            </div>
                            {/* style={{ fontFamily: "Helvetica, Arial, sans-serif" }}  */}
                            <div className='text-gray-500 text-[20px] font-extralight flex flex-col gap-4 text-justify'  >


                                <ul className='pl-8 list-disc text-gray-800 leading-[24px] space-y-2'>

                                    <li>
                                        {/* <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Description: </span>Racking system with arms extending out from a central column, designed for long or irregularly shaped items.</p> */}

                                        <span className='font-semibold text-gray-800 list-disc text-[22px]'>Description: </span><span className='font-normal text-gray-700'>Arms for long/irregular items (e.g., pipes, lumber).</span>
                                    </li>

                                    <li>
                                        <p className='font-normal text-gray-700'><span className='font-semibold text-gray-800 text-[22px]'>Facility Design Consulting Benefit: </span>Prevents damage and simplifies access.</p>
                                    </li>



                                </ul>



                            </div>

                        </div>

                        <div className='w-[40%] rounded-lg flex items-center justify-center max-md:hidden'>
                            {/* <img
                                src='/assets/images/Cantilever Racking Warehouses.png'


                                className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:"
                            /> */}
                            <div className='relative w-[80%] min-h-[30vh]'>


                                <Image
                                    fill
                                    alt={imgAltText[4] ? imgAltText[4] : "Madasky Consulting"}
                                    src={`${BaseUrl().imgurl}Cantilever Racking Warehouses.png`}
                                    className="object-fill rounded-xl max-md:object-fit max-md:"
                                />
                            </div>
                        </div>


                    </div>

                    {/* Cold Storage Warehouses  */}
                    <div className={`flex w-full pb-8 mt-20 border-b border-gray-300 `}>

                        <div className='flex flex-col gap-8 w-[60%] max-md:w-full'>

                            <div className='text-black font-bold text-4xl max-md:text-3xl leading-[1]'>
                                <h2>Cold Storage Warehouses</h2>
                            </div>


                            <div className='hidden w-full rounded-lg max-md:block'>
                                {/* <img
                                    src='/assets/images/Cold Storage Warehouses.png'


                                    className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:mx-auto"
                                /> */}
                                <div className='w-[40%] max-md:w-[100%] rounded-lg hidden max-md:block max-md:h-[15rem] relative'>
                                    <Image

                                        fill
                                        alt={imgAltText[5] ? imgAltText[5] : "Madasky Consulting"}
                                        className="rounded-xl w-[80%] object-fill"
                                        src={`${BaseUrl().imgurl}Cold Storage Warehouses.png`}

                                    />
                                </div>
                            </div>
                            {/* style={{ fontFamily: "Helvetica, Arial, sans-serif" }}  */}
                            <div className='text-gray-500 text-[20px] font-extralight flex flex-col gap-4 text-justify'  >


                                <ul className='pl-8 list-disc text-gray-800 leading-[24px] space-y-2'>

                                    <li>
                                        {/* <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Description: </span>Temperature-controlled facilities designed to store perishable goods.</p> */}

                                        <span className='font-semibold text-gray-800 list-disc text-[22px]'>Description: </span><span className='font-normal text-gray-700'>Temperature-controlled for perishables.</span>
                                    </li>

                                    <li>
                                        <p className='font-normal text-gray-700'><span className='font-semibold text-gray-800 text-[22px]'>Logistics Supply Chain Consulting Role: </span> Integrates cold chain management with transportation and distribution.</p>
                                    </li>



                                </ul>



                            </div>

                        </div>

                        <div className='w-[40%] rounded-lg flex items-center justify-center max-md:hidden'>
                            {/* <img
                                src='/assets/images/Cold Storage Warehouses.png'


                                className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:"
                            /> */}
                            <div className='relative w-[80%] min-h-[30vh]'>


                                <Image
                                    fill
                                    alt={imgAltText[5] ? imgAltText[5] : "Madasky Consulting"}
                                    src={`${BaseUrl().imgurl}Cold Storage Warehouses.png`}
                                    className="object-fill rounded-xl max-md:object-fit max-md:"
                                />
                            </div>
                        </div>


                    </div>

                    {/* Multi-Tier Warehouses  */}
                    <div className={`flex w-full pb-8 mt-20 border-b border-gray-300 `}>

                        <div className='flex flex-col gap-8 w-[60%] max-md:w-full'>

                            <div className='text-black font-bold text-4xl max-md:text-3xl leading-[1]'>
                                <h2>Multi-Tier Warehouses</h2>
                            </div>


                            <div className='hidden w-full rounded-lg max-md:block'>
                                {/* <img
                                    src='/assets/images/Multi-Tier Warehouses.png'


                                    className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:mx-auto"
                                /> */}
                                <div className='w-[40%] max-md:w-[100%] rounded-lg hidden max-md:block max-md:h-[15rem] relative'>
                                    <Image

                                        fill
                                        alt={imgAltText[6] ? imgAltText[6] : "Madasky Consulting"}
                                        className="rounded-xl w-[80%] object-fill"
                                        src={`${BaseUrl().imgurl}Multi-Tier Warehouses.png`}

                                    />
                                </div>
                            </div>
                            {/* style={{ fontFamily: "Helvetica, Arial, sans-serif" }}  */}
                            <div className='text-gray-500 text-[20px] font-extralight flex flex-col gap-4 text-justify'  >


                                <ul className='pl-8 list-disc text-gray-800 leading-[24px] space-y-2'>

                                    <li>
                                        {/* <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Description: </span>Incorporates multiple levels of shelving to maximize vertical space.</p> */}

                                        <span className='font-semibold text-gray-800 list-disc text-[22px]'>Description: </span><span className='font-normal text-gray-700'>Vertical shelving for high-SKU inventory.</span>
                                    </li>

                                    <li>
                                        <p className='font-normal text-gray-700'><span className='font-semibold text-gray-800 text-[22px]'>Facility Design Consulting Advantage: </span>Maximizes density for retail/fashion sectors.</p>
                                    </li>



                                </ul>



                            </div>

                        </div>

                        <div className='w-[40%] rounded-lg flex items-center justify-center max-md:hidden'>
                            {/* <img
                                src='/assets/images/Multi-Tier Warehouses.png'


                                className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:"
                            /> */}
                            <div className='relative w-[80%] min-h-[30vh]'>


                                <Image
                                    fill
                                    alt={imgAltText[6] ? imgAltText[6] : "Madasky Consulting"}
                                    src={`${BaseUrl().imgurl}Multi-Tier Warehouses.png`}
                                    className="object-fill rounded-xl max-md:object-fit max-md:"
                                />
                            </div>
                        </div>


                    </div>

                    {/* Narrow Aisle Warehouses      */}
                    <div className={`flex w-full pb-8 mt-20 border-b border-gray-300 `}>

                        <div className='flex flex-col gap-8 w-[60%] max-md:w-full'>

                            <div className='text-black font-bold text-4xl max-md:text-3xl leading-[1]'>
                                <h2>Narrow Aisle Warehouses</h2>
                            </div>


                            <div className='hidden w-full rounded-lg max-md:block'>
                                {/* <img
                                    src='/assets/images/Narrow Aisle Warehouses.png'


                                    className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:mx-auto"
                                /> */}
                                <div className='w-[40%] max-md:w-[100%] rounded-lg hidden max-md:block max-md:h-[15rem] relative'>
                                    <Image

                                        fill
                                        alt={imgAltText[7] ? imgAltText[7] : "Madasky Consulting"}
                                        className="rounded-xl w-[80%] object-fill"
                                        src={`${BaseUrl().imgurl}Narrow Aisle Warehouses.png`}

                                    />
                                </div>
                            </div>
                            {/* style={{ fontFamily: "Helvetica, Arial, sans-serif" }}  */}
                            <div className='text-gray-500 text-[20px] font-extralight flex flex-col gap-4 text-justify' >


                                <ul className='pl-8 list-disc text-gray-800 leading-[24px] space-y-2'>

                                    <li>
                                        {/* <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Description: </span>Designed with slim aisles to maximize storage space while using specialized MHE for navigation.</p>
                                         */}

                                        <span className='font-semibold text-gray-800 list-disc text-[22px]'>Description: </span><span className='font-normal text-gray-700'>Slim aisles with specialized MHE.</span>
                                    </li>

                                    <li>
                                        <p className='font-normal text-gray-700'><span className='font-semibold text-gray-800 text-[22px]'>Best For: </span>High-density storage, optimized via Facility Design Consulting.</p>
                                    </li>



                                </ul>



                            </div>

                        </div>

                        <div className='w-[40%] rounded-lg flex items-center justify-center max-md:hidden'>
                            {/* <img
                                src='/assets/images/Narrow Aisle Warehouses.png'


                                className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:"
                            /> */}
                            <div className='relative w-[80%] min-h-[30vh]'>


                                <Image
                                    fill
                                    alt={imgAltText[7] ? imgAltText[7] : "Madasky Consulting"}
                                    src={`${BaseUrl().imgurl}Narrow Aisle Warehouses.png`}
                                    className="object-fill rounded-xl max-md:object-fit max-md:"
                                />
                            </div>
                        </div>


                    </div>


                    {/* Ground Storage Warehouses  */}
                    <div className={`flex w-full pb-8 mt-20 border-b border-gray-300 `}>

                        <div className='flex flex-col gap-8 w-[60%] max-md:w-full'>

                            <div className='text-black font-bold text-4xl max-md:text-3xl leading-[1]'>
                                <h2>Ground Storage Warehouses</h2>
                            </div>


                            <div className='hidden w-full rounded-lg max-md:block'>
                                {/* <img
                                    src='/assets/images/Ground Storage Warehouses.png'


                                    className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:mx-auto"
                                /> */}

                                <div className='w-[40%] max-md:w-[100%] rounded-lg hidden max-md:block max-md:h-[15rem] relative'>
                                    <Image

                                        fill
                                        alt={imgAltText[8] ? imgAltText[8] : "Madasky Consulting"}
                                        className="rounded-xl w-[80%] object-fill"
                                        src={`${BaseUrl().imgurl}Ground Storage Warehouses.png`}

                                    />
                                </div>
                            </div>

                            {/* style={{ fontFamily: "Helvetica, Arial, sans-serif" }}  */}
                            <div className='text-gray-500 text-[20px] font-extralight flex flex-col gap-4 text-justify'  >


                                <ul className='pl-8 list-disc text-gray-800 leading-[24px] space-y-2'>

                                    <li>
                                        {/* <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Description: </span>Goods are stored directly on the floor without racks, typically in designated zones.</p> */}

                                        <span className='font-semibold text-gray-800 list-disc text-[22px]'>Description: </span><span className='font-normal text-gray-700'>Floor storage for bulky/non-stackable goods.</span>
                                    </li>

                                    <li>
                                        <p className='font-normal text-gray-700'><span className='font-semibold text-gray-800 text-[22px]'>Logistics Supply Chain Consulting Insight: </span>Simplifies handling for cost-sensitive operations.</p>
                                    </li>



                                </ul>



                            </div>

                        </div>

                        <div className='w-[40%] rounded-lg flex items-center justify-center max-md:hidden'>
                            {/* <img
                                src='/assets/images/Ground Storage Warehouses.png'


                                className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:"
                            /> */}
                            <div className='relative w-[80%] min-h-[30vh]'>


                                <Image
                                    fill
                                    alt={imgAltText[8] ? imgAltText[8] : "Madasky Consulting"}
                                    src={`${BaseUrl().imgurl}Ground Storage Warehouses.png`}
                                    className="object-fill rounded-xl max-md:object-fit max-md:"
                                />
                            </div>
                        </div>


                    </div>


                    {/* Mixed Storage Warehouses  */}
                    <div className={`flex w-full pb-8 mt-20 border-b border-gray-300 `}>

                        <div className='flex flex-col gap-8 w-[60%] max-md:w-full'>

                            <div className='text-black font-bold text-4xl max-md:text-3xl leading-[1]'>
                                <h2>Mixed Storage Warehouses</h2>
                            </div>


                            <div className='hidden w-full rounded-lg max-md:block'>
                                {/* <img
                                    src='/assets/images/Mixed Storage Warehouses.png'


                                    className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:mx-auto"
                                /> */}
                                <div className='w-[40%] max-md:w-[100%] rounded-lg hidden max-md:block max-md:h-[15rem] relative'>
                                    <Image

                                        fill
                                        alt={imgAltText[9] ? imgAltText[9] : "Madasky Consulting"}
                                        className="rounded-xl w-[80%] object-fill"
                                        src={`${BaseUrl().imgurl}Mixed Storage Warehouses.png`}

                                    />
                                </div>
                            </div>
                            {/* style={{ fontFamily: "Helvetica, Arial, sans-serif" }}  */}
                            <div className='text-gray-500 text-[20px] font-extralight flex flex-col gap-4 text-justify'  >


                                <ul className='pl-8 list-disc text-gray-800 leading-[24px] space-y-2'>

                                    <li>
                                        {/* <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Description: </span>Combines two or more storage systems, such as ASRS with manual racking or pallet racking with block stacking.</p> */}

                                        <span className='font-semibold text-gray-800 list-disc text-[22px]'>Description: </span><span className='font-normal text-gray-700'>Hybrid systems (e.g., ASRS + manual racking).</span>
                                    </li>

                                    <li>
                                        <p className='font-normal text-gray-700'><span className='font-semibold text-gray-800 text-[22px]'>Facility Design Consulting Value: </span>Balances automation and flexibility for diverse inventory.</p>
                                    </li>



                                </ul>



                            </div>

                        </div>

                        <div className='w-[40%] rounded-lg flex items-center justify-center max-md:hidden'>
                            {/* <img
                                src='/assets/images/Mixed Storage Warehouses.png'


                                className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:"
                            /> */}
                            <div className='relative w-[80%] min-h-[30vh]'>


                                <Image
                                    fill
                                    alt={imgAltText[9] ? imgAltText[9] : "Madasky Consulting"}
                                    src={`${BaseUrl().imgurl}Mixed Storage Warehouses.png`}
                                    className="object-fill rounded-xl max-md:object-fit max-md:"
                                />
                            </div>
                        </div>


                    </div>


                    {/* Vertical Carousel Warehouses  */}
                    <div className={`flex w-full pb-8 mt-20 border-b border-gray-300 `}>

                        <div className='flex flex-col gap-8 w-[60%] max-md:w-full'>

                            <div className='text-black font-bold text-4xl max-md:text-3xl leading-[1]'>
                                <h2>Vertical Carousel Warehouses</h2>
                            </div>


                            <div className='hidden w-full rounded-lg max-md:block'>
                                {/* <img
                                    src='/assets/images/Vertical Carousel Warehouses.png'


                                    className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:mx-auto"
                                /> */}

                                <div className='w-[40%] max-md:w-[100%] rounded-lg hidden max-md:block max-md:h-[15rem] relative'>
                                    <Image

                                        fill
                                        alt={imgAltText[10] ? imgAltText[10] : "Madasky Consulting"}
                                        className="rounded-xl w-[80%] object-fill"
                                        src={`${BaseUrl().imgurl}Vertical Carousel Warehouses.png`}

                                    />
                                </div>
                            </div>
                            {/* style={{ fontFamily: "Helvetica, Arial, sans-serif" }}  */}
                            <div className='text-gray-500 text-[20px] font-extralight flex flex-col gap-4 text-justify'  >


                                <ul className='pl-8 list-disc text-gray-800 leading-[24px] space-y-2'>

                                    <li>
                                        {/* <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Description: </span>Uses rotating shelves or trays to store goods in a compact vertical structure.</p> */}

                                        <span className='font-semibold text-gray-800 list-disc text-[22px]'>Description: </span><span className='font-normal text-gray-700'>Rotating shelves for small parts.</span>
                                    </li>

                                    <li>
                                        <p className='font-normal text-gray-700'><span className='font-semibold text-gray-800 text-[22px]'>Best For: </span>Automotive/electronics, enhanced by Logistics Supply Chain Consulting for JIT workflows.</p>
                                    </li>



                                </ul>



                            </div>

                        </div>

                        <div className='w-[40%] rounded-lg flex items-center justify-center max-md:hidden'>
                            {/* <img
                                src='/assets/images/Vertical Carousel Warehouses.png'


                                className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:"
                            /> */}

                            <div className='relative w-[80%] min-h-[30vh]'>


                                <Image
                                    fill
                                    alt={imgAltText[10] ? imgAltText[10] : "Madasky Consulting"}
                                    src={`${BaseUrl().imgurl}Vertical Carousel Warehouses.png`}
                                    className="object-fill rounded-xl max-md:object-fit max-md:"
                                />
                            </div>
                        </div>


                    </div>

                    <CapabilitiesHeader2 details1={{
                        heading1: "Why Partner with Madasky Consulting?",
                        paragraph1: "Our Facility Design Consulting tailors warehouse systems to your operational needs, while our Logistics Supply Chain Consulting ensures seamless integration with transportation, inventory management, and distribution. Together, these services create warehouses that drive efficiency, scalability, and supply chain synergy.",
                        paragraph2: "Transform your storage strategy with Madasky's expertise in Facility Design Consulting and Logistics Supply Chain Consulting. Let's build a warehouse ecosystem that powers your business growth.",
                        imgSrc: "Why Choose Madasky Consulting.png",
                        calendarButton: true,
                        btnText: "Plan Your Consultation",






                    }} border={"border-b"} />

                    <FaqComponent faqs={faqs} />








                </div>







            </div >






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

