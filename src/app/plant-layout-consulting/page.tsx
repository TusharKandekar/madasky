import { Metadata } from 'next';
import ConsultingNavbar from '@/components/ConsultingNavbar';
import CapabilitiesHeader from '@/components/CapabilitiesHeader';
// import CapabilitiesHeader2 from '@/components/CapabilitiesHeader2';
import CapabilitiesContent1 from '@/components/CapabilitiesContent1';
// import CapabilitiesContent2 from '@/components/CapabilitiesContent2';
import TailoredSolutions from '@/components/TailoredSolutions'
// import CapabilitiesContent3 from '@/components/CapabilitiesContent3';
// import CapabilitiesContent4 from '@/components/CapabilitiesContent4';
import Footer from '@/components/Footer';
// import vid1 from "/assets/images/Projects.mp4";
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

const title = "Plant Layout";
let PageMetadata: PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
    PageMetadata = await fetchMetaDataByPageName({ pageName: "Plant Layout" });
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
                `${BaseUrl().mainurl}plant-layout-consulting`
        },

    };
}

import ServerError from '@/components/ServerError';
export default async function GrowthMarketingAndSales() {
    const arr = ["Key Challenges.png", "Tailored Solutions.png", "Why Choose Madasky Consulting.png"];


    // const images = await getImageAltText(arr);

    // if (!images || !images.success) {
    //     return <ServerError />
    // }

    let images;
    let blogData;
    let videoData;
    let galleryData;
    let testimonialData;
    let eventData;
    let serverError = false;

    try {
        images = await getImageAltText(arr);
        blogData = await getDataByPageName(["Plant Layout", "blogs"]);
        videoData = await getDataByPageName(["Plant Layout", "videos"]);
        galleryData = await getDataByPageName(["Plant Layout", "gallery"]);
        testimonialData = await getTestimonialsByPageName("Plant Layout");
        eventData = await getEventByPageName("Plant Layout");

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
            question: 'What is plant layout consulting and why is it important for factory efficiency?',
            answer: 'Plant layout consulting involves designing and optimizing factory layouts to improve workflow, maximize space utilization, and enhance safety, ultimately boosting productivity and reducing operational costs.'
        },
        {
            question: 'How does technical consulting support manufacturing operations?',
            answer: ' Technical consulting helps manufacturers integrate new technologies, optimize workflows, ensure regulatory compliance, and provide implementation support to improve efficiency and reduce costs.'
        },
        {
            question: 'What are the key challenges addressed by manpower planning consulting in manufacturing?',
            answer: 'Manpower planning consulting tackles skill shortages, high employee turnover, workforce upskilling for Industry 4.0, leadership pipeline gaps, and aligns workforce strategies with business goals.'
        },
        {
            question: `How can factory space utilization be improved through plant layout design?`,
            answer: ' Factory space utilization improves by strategically planning machinery, storage, and workstations to eliminate wasted space, allow scalability, and streamline production flow.'
        },
        {
            question: 'Why is succession planning important for manufacturing companies',
            answer: 'Succession planning ensures leadership continuity by identifying and preparing high-potential employees for future roles, minimizing disruptions and supporting long-term business success.'
        },
    ];
    return (
        <>


            <ConsultingNavbar
                url='/factory-technical-design-consulting'
                title='Project - Factory Technical Design'
                navItems={[
                    { title: 'Plant Layout', link: '/plant-layout-consulting' },
                    { title: 'Technical Consulting', link: '/technical-consulting' },
                    { title: 'Manpower Planning', link: '/manpower-planning-consulting' },
                    { title: 'Process & Material Flow', link: '/process-and-material-flow-consulting' },

                ]}
            />

            <AboutVideo vid1={"/assets/videos/Projects.mp4"} title={title} des={"Creating and accelerating critical advantages through cutting-edge strategy and operations"} h1={PageMetadata?.data?.h1tag} />

            <div className='w-[80vw] bg-white mx-auto'>

                <div className='w-full my-20'>

                    <CapabilitiesHeader details1={{
                        heading1: "Plant or Factory Design to Seamless Execution",
                        paragraph1: "In the ever-evolving world of manufacturing, challenges like inefficient workflows, space constraints, and high operational costs can cripple productivity. At Madasky Consulting, our Plant Layout Consulting expertise transforms these obstacles into opportunities, designing facilities that maximize Factory Space Utilization while aligning with your operational and strategic goals.",



                    }} border={"border-b"} />

                    <CapabilitiesContent1 details1={{
                        heading1: "Key Challenges Addressed by Our Plant Layout Consulting",



                        data:
                            [
                                {
                                    data1: "Inefficient Workflow",
                                    data2: "Disorganized layouts lead to delays, excessive material handling, and lower output.",
                                },
                                {
                                    data1: "Poor Factory Space Utilization",
                                    data2: "Congested floors hinder machinery integration, expansion, and employee mobility.",
                                },
                                {
                                    data1: "Safety & Compliance Risks",
                                    data2: "Poorly planned layouts compromise safety and regulatory adherence.",
                                },
                                {
                                    data1: "Scalability Limitations",
                                    data2: "Static designs struggle to adapt to changing production demands.",
                                },


                            ],



                        imgSrc: "Key Challenges.png",
                        altText: imgAltText[0],
                        calendarButton: true,
                        btnText: "Book Your Session",




                    }} border={"border-b"} />


                    {/* 
                    <CapabilitiesHeader2 details1={{
                        heading1: "Impact of These Challenges",
                        paragraph1: "These challenges lead to inefficiencies, reduced profit margins, and missed revenue opportunities. Manufacturers unable to adapt risk losing market share to competitors who can better navigate the e-commerce ecosystem.",
                        imgSrc: "/assets/images/398.png",


                    }} border={"border-b"} /> */}

                    <TailoredSolutions details={{
                        heading1: "Tailored Plant Layout Solutions",
                        paragraph1: "Our Plant Layout Consulting services deliver precision-engineered solutions for manufacturing excellence:",

                        Data1: {
                            subHeading: "Strategic Design & Optimization",
                            subData: [
                                {
                                    data1: "Greenfield & Brownfield Layouts",
                                    data2: "Customized designs for new facilities or upgrades to existing ones, prioritizing Factory Space Utilization and workflow efficiency.",
                                },
                                {
                                    data1: "Workflow Optimization",
                                    data2: "Logical process sequencing to minimize cycle times and material handling.",
                                },
                                {
                                    data1: "Production-Specific Design",
                                    data2: "Layouts tailored to your scale, product type, and throughput requirements.",
                                },
                            ]
                        },


                        Data2: {
                            subHeading: "Maximizing Factory Space Utilization",
                            subData: [
                                {
                                    data1: "Space Planning",
                                    data2: "Meticulous integration of machinery, storage, and workstations to eliminate wasted space.",
                                },
                                {
                                    data1: "Scalable Designs",
                                    data2: " Flexible layouts that adapt to future growth without costly overhauls.",
                                },
                                {
                                    data1: "Inventory Integration",
                                    data2: "Seamless storage solutions to enhance production flow and reduce delays.",
                                },
                            ]
                        },


                        Data3: {
                            subHeading: "Operational Excellence",
                            subData: [
                                {
                                    data1: "Energy & Utility Optimization",
                                    data2: "Strategic placement of utilities to cut energy costs and streamline operations.",
                                },
                                {
                                    data1: "Maintenance-Friendly Layouts",
                                    data2: "Easy equipment access to minimize downtime during repairs.",
                                },
                                {
                                    data1: "Environmental Comfort",
                                    data2: "Designs that optimize lighting, ventilation, and noise control for productivity and compliance.",
                                },
                            ]
                        },


                        Data4: {
                            subHeading: "Execution & Implementation",
                            subData: [
                                {
                                    data1: "Floor Marking & Precision",
                                    data2: "Accurate layout execution to ensure machinery and workstations align perfectly with plans.",
                                },
                                {
                                    data1: "Durable Material Guidance",
                                    data2: "Recommendations for flooring, tiles, and infrastructure that balance cost, safety, and longevity.",
                                },
                            ]
                        },












                        imgSrc: "Key Challenges.png",
                        altText: imgAltText[0],




                    }} border={"border-b"} />

                    {/* <CapabilitiesContent2 details1={{
                        heading1: "Tailored Plant Layout Solutions",


                        data:
                            [
                                {
                                    data1: "Greenfield and Brownfield Layouts",
                                    data2: "Whether you're building a facility from scratch or upgrading an existing one, we provide solutions that cater to both greenfield and brownfield projects with equal precision.",
                                },
                                {
                                    data1: "Workflow Optimization",
                                    data2: "We streamline operations by designing logical sequences of processes, minimizing material handling, and reducing production cycle times.",
                                },

                                {
                                    data1: "Space Maximization",
                                    data2: "We optimize every square foot of space, ensuring seamless integration of machinery, storage, and workstations with room for future growth.",
                                },
                                {
                                    data1: " Production-Specific Design",
                                    data2: "We design plant layouts tailored to your production requirements, ensuring space allocation aligns perfectly with the scale and type of production.",
                                },


                            ],

                        data2: [

                            {
                                data1: "Comprehensive Space Planning",
                                data2: "Every essential requirement, from storage and machinery placement to employee facilities, is meticulously planned to ensure no critical need is overlooked.",
                            },
                            {
                                data1: "Natural and Artificial Lighting",
                                data2: "Our designs prioritize the use of natural light to reduce energy consumption while integrating optimal artificial lighting to enhance productivity and create a well-lit workspace.",
                            },
                            {
                                data1: "Ventilation and Environmental Comfort",
                                data2: "We incorporate proper ventilation systems to ensure a comfortable and compliant working environment that fosters productivity. Our layouts account for factors like ventilation, temperature control, and noise reduction to create a comfortable and compliant workspace.",
                            },
                            {
                                data1: "Flooring and Tiles Recommendations",
                                data2: "We guide you in selecting durable, cost-effective, and suitable flooring and tiles to meet your operational needs and maintain a safe working environment.",
                            },
                            {
                                data1: "Accurate Layout Implementation",
                                data2: "Our team ensures flawless execution by marking the layout directly on the floor, ensuring every machine and workspace aligns precisely with the design drawings.",
                            },
                            {
                                data1: "Energy and Utility Optimization",
                                data2: "By strategically placing utilities like electricity, water, and compressed air systems, we help minimize energy consumption and operational expenses.",
                            },
                            {
                                data1: "Maintenance-Friendly Design",
                                data2: "We ensure that equipment is positioned for easy access, enabling quicker repairs and minimizing production downtime.",
                            },
                            {
                                data1: "Scalability and Flexibility",
                                data2: "We embed flexibility into our designs, allowing for easy modifications and expansions as your business grows.",
                            },
                            {
                                data1: "Integrated Inventory Management",
                                data2: "We incorporate efficient inventory systems into the layout, ensuring smooth production flow and cost-effective storage solutions.",
                            },

                        ],





                        imgSrc: "Tailored Solutions.png",
                        altText: imgAltText[1]




                    }} border={"border-b"} /> */}
                    {/* 
                    <CapabilitiesHeader2 details1={{
                        heading1: "Why Madasky Consulting?",
                        paragraph1: "With over 50 successfully completed projects in manufacturing—including large-scale home textile and garment plants—we bring unmatched expertise to every engagement. At Madasky Consulting, we don't just design layouts; we build the backbone of your operational success.",
                        paragraph2: "Ready to turn your manufacturing challenges into opportunities? Let us design your path to operational excellence.",
                        imgSrc: "/Why Choose Madasky Consulting.png",
                        altText: imgAltText[2]





                    }} border={"border-none"} /> */}


                    <CapabilitiesContent1 details1={{
                        heading1: "Why Choose Madasky Consulting?",



                        data:
                            [
                                {
                                    data1: "Proven Expertise",
                                    data2: "50+ successful projects in home textiles, apparel, and manufacturing, delivering measurable ROI.",
                                },
                                {
                                    data1: "Holistic Approach",
                                    data2: "Combining Plant Layout Consulting with Factory Space Utilization strategies to address cost, safety, and scalability.",
                                },
                                {
                                    data1: "Future-Ready Designs",
                                    data2: "Layouts that anticipate technological advancements and market shifts.",
                                },
                                {
                                    data1: "End-to-End Support",
                                    data2: "From concept to floor marking, we ensure flawless execution.",
                                },


                            ],



                        imgSrc: "Why Choose Madasky Consulting.png",
                        altText: imgAltText[0],
                        calendarButton: true,
                        btnText: "Plan Your Consultation",



                    }} border={"border-b"} />


                    <CapabilitiesHeader details1={{
                        heading1: "Transform your factory into a hub of efficiency and innovation.",
                        paragraph1: "Partner with Madasky Consulting's Plant Layout Consulting experts to unlock optimized Factory Space Utilization, reduced costs, and scalable growth. Let's build a facility designed for today's challenges and tomorrow's opportunities.",



                    }} border={"border-0"} />



                    <div className='border border-gray-300 w-full h-[1px]'></div>


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

