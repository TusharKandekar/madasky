import { Metadata } from 'next';
import ConsultingNavbar from '@/components/ConsultingNavbar';
import CapabilitiesHeader from '@/components/CapabilitiesHeader';
// import CapabilitiesHeader2 from '@/components/CapabilitiesHeader2';
import CapabilitiesContent1 from '@/components/CapabilitiesContent1';
// import CapabilitiesContent2 from '@/components/CapabilitiesContent2';
// import TailoredSolutions from '@/components/TailoredSolutions';
// import CapabilitiesContent3 from '@/components/CapabilitiesContent3';
// import CapabilitiesContent4 from '@/components/CapabilitiesContent4';
import Footer from '@/components/Footer';
// import vid1 from "/assets/images/GROWTH MARKETING AND SALES69.mp4";
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
const title = "Technical Consulting";
let PageMetadata: PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
    PageMetadata = await fetchMetaDataByPageName({ pageName: "Technical Consulting" });
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
                `${BaseUrl().mainurl}technical-consulting`
        },

    };
}

import ServerError from '@/components/ServerError';
export default async function GrowthMarketingAndSales() {
    const arr = ["Key Challenges.png", "Tailored Solutions.png"];


    let images;
    let blogData;
    let videoData;
    let galleryData;
    let testimonialData;
    let eventData;
    let serverError = false;

    try {
        images = await getImageAltText(arr);
        blogData = await getDataByPageName(["Technical Consulting", "blogs"]);
        videoData = await getDataByPageName(["Technical Consulting", "videos"]);
        galleryData = await getDataByPageName(["Technical Consulting", "gallery"]);
        testimonialData = await getTestimonialsByPageName("Technical Consulting");
        eventData = await getEventByPageName("Technical Consulting");

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
            question: `What challenges do manufacturers face in today's dynamic landscape?`,
            answer: `Manufacturers today face challenges such as rising production costs, technological disruption, skilled workforce shortages, and evolving regulatory compliance requirements.`
        },
        {
            question: 'How can technical consulting help reduce production costs?',
            answer: `Technical consulting helps manufacturers optimize workflows, reduce downtime, and streamline processes, which can lead to significant cost savings and improved efficiency.`
        },
        {
            question: 'What technologies can be integrated into manufacturing through technical consulting?',
            answer: 'Technical consulting facilitates the integration of advanced technologies like IoT, AI, and automation, helping manufacturers improve operations and stay competitive.'
        },
        {
            question: `How does Madasky Consulting assist with regulatory compliance in manufacturing?`,
            answer: 'Madasky Consulting provides audits and frameworks to ensure operations align with environmental and safety regulations, reducing the risk of penalties.'
        },
        {
            question: 'What is the role of upskilling in technical consulting for manufacturing companies?',
            answer: 'Madasky Consulting helps bridge skill gaps through tailored upskilling programs, ensuring the workforce is equipped to operate advanced technologies and drive continuous improvement.'
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

            <AboutVideo vid1={"/assets/videos/GROWTH MARKETING AND SALES69.mp4"} title={title} des={"Creating and accelerating critical advantages through cutting-edge strategy and operations"} h1={PageMetadata?.data?.h1tag} />

            <div className='w-[80vw] bg-white mx-auto'>

                <div className='w-full my-20'>

                    {/* <CapabilitiesHeader details1={{
                        heading1: "Technical Consulting",
                        paragraph1: "In today's dynamic manufacturing landscape, companies face an array of challenges that directly impact their operations and profitability. Rising production costs, evolving customer demands, and rapid advancements in technology compel manufacturers to adopt innovative strategies to stay competitive. However, navigating these changes without a structured approach can lead to inefficiencies, reduced productivity, and a loss of market share.",
                        paragraph2: "At Madasky Consulting, we understand the intricacies of these challenges. Our Technical Consulting services are tailored to help manufacturers identify and overcome critical pain points, empowering them to drive operational excellence and achieve sustainable growth.",



                    }} border={"border-b"} />

                    <CapabilitiesContent1 details1={{
                        heading1: "Key Challenges Faced by the Industry",
                       

                        data:
                            [
                                {
                                    data1: "Rising Production Costs",
                                    data2: "Escalating raw material prices, labor costs, and energy expenses increase financial strain, requiring a proactive approach to cost management and efficiency.",
                                },
                                {
                                    data1: "Technological Disruption",
                                    data2: "Rapid advancements in technologies such as automation, IoT, and AI create a need for integration, yet many manufacturers struggle with where to start.",
                                },
                                {
                                    data1: "Market Volatility and Fluctuating Demand",
                                    data2: "Changing consumer preferences and economic uncertainty make it difficult to maintain optimal production levels and inventory management.",
                                },
                                {
                                    data1: "Skilled Workforce Shortages",
                                    data2: "The increasing adoption of advanced machinery and software highlights a gap in skilled labor to operate and manage these technologies effectively.",
                                },
                                {
                                    data1: "Regulatory Compliance",
                                    data2: "Stricter environmental and safety regulations can disrupt operations if not adhered to, leading to financial penalties and reputational risks.",
                                },

                            ],

                        imgSrc: "Key Challenges.png",
                        altText: imgAltText[0]



                    }} border={"border-b"} />


                   

                    <CapabilitiesContent2 details1={{
                        heading1: "Madasky Consulting's Tailored Solutions",
                        heading2: "Here are some of the transformative strategies we provide to address these challenges:",


                        data:
                            [
                                {
                                    data1: "Customized Workflow Optimization",
                                    data2: "We evaluate your production processes to identify inefficiencies and implement streamlined workflows, reducing downtime and maximizing throughput.",
                                },
                                {
                                    data1: "Advanced Technology Integration",
                                    data2: "Our experts guide you in adopting cutting-edge technologies such as IoT, AI, and smart manufacturing tools, ensuring seamless implementation for enhanced operational efficiency.",
                                },

                                {
                                    data1: "Scalable Automation Solutions",
                                    data2: "We design automation strategies tailored to your facility, enabling reduced labor dependency, consistent product quality, and faster production cycles.",
                                },
                                {
                                    data1: "Sustainable Manufacturing Practices",
                                    data2: "From energy-efficient solutions to waste reduction strategies, we help you incorporate green technologies, aligning your operations with sustainability goals.",
                                },


                            ],

                        data2: [

                            {
                                data1: "Real-Time Data Utilization",
                                data2: "Leverage actionable insights from production data to enhance decision-making, predict maintenance needs, and optimize resource allocation.",
                            },
                            {
                                data1: "Workforce Upskilling and Training",
                                data2: "Our programs empower your employees with the knowledge and skills needed to operate advanced machinery and adopt new systems seamlessly.",
                            },
                            {
                                data1: "Compliance and Risk Mitigation",
                                data2: "We ensure your operations align with industry standards and regulations, minimizing risks and fostering a culture of safety and reliability.",
                            },
                            {
                                data1: "Future-Proof Solutions",
                                data2: "We help you stay ahead of market trends by implementing flexible and adaptive strategies that position your business for long-term success.",
                            },
                            {
                                data1: "Enhanced Supply Chain Collaboration",
                                data2: "Optimize your supply chain with integrated systems that improve communication, reduce lead times, and foster better collaboration with suppliers and partners.",
                            },
                            {
                                data1: "Performance Monitoring and Continuous Improvement",
                                data2: "Our solutions include tools and methodologies for tracking performance metrics, ensuring continuous improvement and sustained excellence.",
                            },


                        ],





                        imgSrc: "Tailored Solutions.png",
                        altText: imgAltText[1]




                    }} border={"border-b"} />

                    <CapabilitiesHeader details1={{
                        heading1: "Discover the Difference with Madasky Consulting",
                        paragraph1: "Our expertise lies in delivering results that resonate with your business goals. With a focus on innovative solutions, operational excellence, and measurable impact, Madasky Consulting is your partner in overcoming the challenges of modern manufacturing.",
                        paragraph2: "Let's shape the future of your operations together. Reach out to explore how we can empower your business to thrive in today's ever-evolving industrial landscape.",



                    }} border={"border-none"} /> */}



                    {/* **********************************************************************************  */}
                    <CapabilitiesHeader details1={{
                        heading1: "Technical Consulting",
                        paragraph1: "In today's dynamic manufacturing landscape, companies face challenges that directly impact operations and profitability. Rising costs, evolving customer demands, and rapid technological advancements compel manufacturers to adopt innovative strategies. At Madasky Consulting, our Technical Consulting expertise empowers businesses to navigate these complexities, driving operational excellence and sustainable growth through actionable Implementation Support.",



                    }} border={"border-b"} />


                    {/* key challenges  */}
                    <CapabilitiesContent1 details1={{
                        heading1: "Key Challenges Addressed by Technical Consulting",


                        data:
                            [
                                {
                                    data1: "Rising Production Costs",
                                    data2: "Escalating material, labor, and energy expenses strain budgets.",
                                },
                                {
                                    data1: "Technological Disruption",
                                    data2: "Difficulty integrating automation, IoT, and AI without structured Implementation Support.",
                                },
                                {
                                    data1: "Skilled Workforce Shortages",
                                    data2: "Gaps in operating advanced technologies hinder efficiency.",
                                },
                                {
                                    data1: "Regulatory Compliance",
                                    data2: " Risks of penalties from evolving environmental and safety standards.",
                                },


                            ],

                        imgSrc: "Key Challenges.png",
                        altText: imgAltText[0],
                        calendarButton: true,
                        btnText: "Unlock Your Next Chapter",



                    }} border={"border-b"} />





                    {/* Tailored Solutions  */}
                    <div className="px-4 py-12 pb-8 border-b border-gray-300 text-gray-800 w-[100%] mx-auto">
                        <h1 className="mb-6 text-3xl font-bold text-center md:text-4xl">
                            Madasky Consulting's Tailored Solutions
                        </h1>
                        <p className="mb-12 text-lg text-center">
                            Our Technical Consulting services combine strategic insight with hands-on Implementation Support to deliver transformative results:
                        </p>

                        <div className="flex flex-col justify-center w-full gap-8">

                            <div className='flex flex-row justify-between w-full gap-10'>



                                <div className="w-[50%] p-6 text-black bg-white shadow-lg cursor-pointer rounded-2xl hover:bg-gray-100">
                                    <h2 className="mb-4 text-xl font-semibold">Operational Excellence</h2>
                                    <ul className="pl-4 space-y-2 list-disc">



                                        <li className="!text-gray-700"><strong>Workflow Optimization:</strong>  Streamline processes to reduce downtime and maximize throughput, backed by Implementation Support for seamless adoption.</li>

                                        <li className="!text-gray-700"><strong>Real-Time Data Utilization:</strong> Deploy analytics tools to enhance decision-making, with Technical Consulting guiding integration and training.</li>

                                    </ul>
                                </div>


                                <div className="w-[50%] p-6 text-black bg-white shadow-lg cursor-pointer rounded-2xl hover:bg-gray-100">
                                    <h2 className="mb-4 text-xl font-semibold">Technology & Automation</h2>
                                    <ul className="pl-4 space-y-2 list-disc">



                                        <li className="!text-gray-700"><strong>Advanced Technology Integration:</strong> Adopt IoT, AI, and smart tools with end-to-end Implementation Support, ensuring minimal disruption.</li>


                                        <li className="!text-gray-700"><strong>Scalable Automation:</strong> Design and execute automation strategies tailored to your facility, supported by Technical Consulting expertise.</li>

                                    </ul>
                                </div>

                            </div>


                            <div className='flex flex-row justify-between w-full gap-10'>



                                <div className="w-[50%] p-6 text-black bg-white shadow-lg cursor-pointer rounded-2xl hover:bg-gray-100">
                                    <h2 className="mb-4 text-xl font-semibold">Sustainability & Compliance</h2>
                                    <ul className="pl-4 space-y-2 list-disc">



                                        <li className="!text-gray-700"><strong>Green Manufacturing:</strong>  Implement energy-efficient solutions and waste reduction strategies through Technical Consulting frameworks.</li>

                                        <li className="!text-gray-700"><strong>Risk Mitigation:</strong> Align operations with regulations via audits and Implementation Support for compliance workflows.</li>

                                    </ul>
                                </div>


                                <div className="w-[50%] p-6 text-black bg-white shadow-lg cursor-pointer rounded-2xl hover:bg-gray-100">
                                    <h2 className="mb-4 text-xl font-semibold">Workforce & Supply Chain</h2>
                                    <ul className="pl-4 space-y-2 list-disc">



                                        <li className="!text-gray-700"><strong>Upskilling Programs:</strong> Bridge skill gaps with training programs reinforced by Implementation Support for sustained adoption.</li>


                                        <li className="!text-gray-700"><strong>Supply Chain Collaboration:</strong> Optimize logistics and supplier partnerships with integrated systems and Technical Consulting insights.</li>

                                    </ul>
                                </div>

                            </div>


                            <div className='flex flex-row justify-between w-full gap-10'>


                                <div className="w-[50%] mx-auto p-6 text-black bg-white shadow-lg cursor-pointer rounded-2xl hover:bg-gray-100">
                                    <h2 className="mb-4 text-xl font-semibold">Continuous Improvement</h2>
                                    <ul className="pl-4 space-y-2 list-disc">



                                        <li className="!text-gray-700"><strong>Performance Monitoring:</strong> Track metrics and refine processes with Technical Consulting methodologies and Implementation Support for iterative growth.</li>




                                    </ul>
                                </div>

                            </div>









                        </div>
                    </div>

                    {/* Why Partner With Us  */}
                    <CapabilitiesContent1 details1={{
                        heading1: "Why Choose Madasky Consulting?",



                        data:
                            [
                                {
                                    data1: "End-to-End Expertise",
                                    data2: "From Technical Consulting strategy to Implementation Support, we ensure seamless execution.",
                                },
                                {
                                    data1: "Proven Results",
                                    data2: "Measurable improvements in efficiency, cost savings, and compliance.",
                                },
                                {
                                    data1: "Future-Ready Solutions",
                                    data2: "Adaptive strategies to stay ahead of market shifts.",
                                },


                            ],



                        imgSrc: "Why Choose Madasky Consulting.png",
                        altText: imgAltText[0],
                        calendarButton: true,
                        btnText: "Book Your Session",



                    }} border={"border-b"} />


                    <CapabilitiesHeader details1={{
                        heading1: "Discover the Difference with Madasky Consulting",
                        paragraph1: "Our Technical Consulting services, paired with robust Implementation Support, deliver innovation, operational excellence, and measurable impact. Let's shape the future of your manufacturing operations together.",



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

