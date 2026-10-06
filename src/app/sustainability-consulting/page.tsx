import { Metadata } from 'next';
import ConsultingNavbar2 from '@/components/ConsultingNavbar2';
import CapabilitiesHeader from '@/components/CapabilitiesHeader';
import CapabilitiesContent1 from '@/components/CapabilitiesContent1';

import Footer from '@/components/Footer';
import AboutVideo from '@/components/AboutVideo';
import HelpYou from '@/components/HelpYou';
// import SlidingBlogs from '../components/SlidingBlogs.jsx';
// import VideoPlayer from '../components/VideoPlayer.jsx';
// import Imagetemplate from '../components/Imagesliders.jsx';
import BaseUrl from '@/components/BaseUrl';
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
import { getImageAltText, getWebBlogs, fetchMetaDataByPageName, getDataByPageName, filterByWebImage, getImageData, getTestimonialsByPageName, getEventByPageName } from "@/common/api";
import type { PageMetaDataResponse } from "@/common/types";

const title = "Sustainability";
let PageMetadata: PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
    PageMetadata = await fetchMetaDataByPageName({ pageName: "Sustainability" });
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
                `${BaseUrl().mainurl}sustainability-consulting`
        },

    };
}

export default async function GrowthMarketingAndSales() {
    const arr = ["Key Challenges.png", "ESG Strategy.png", "ESG Reporting.png", "Circular economy.png"];


    let images;
    let blogData;
    let videoData;
    let galleryData;
    let testimonialData;
    let eventData;
    let serverError = false;

    try {
        images = await getImageAltText(arr);
        blogData = await getDataByPageName(["Sustainability", "blogs"]);
        videoData = await getDataByPageName(["Sustainability", "videos"]);
        galleryData = await getDataByPageName(["Sustainability", "gallery"]);
        testimonialData = await getTestimonialsByPageName("Sustainability");
        eventData = await getEventByPageName("Sustainability");

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
    return (
        <>


            <ConsultingNavbar2
                url='/sustainability-consulting'
                title={'Sustainability'}

            />
            <AboutVideo vid1={"/assets/videos/Sustainability.mp4"} title={title} des={"Creating and accelerating critical advantages through cutting-edge strategy and operations"} h1={PageMetadata?.data?.h1tag} />

            <div className='w-[80vw] bg-white mx-auto'>

                <div className='w-full my-20'>

                    <CapabilitiesHeader details1={{
                        heading1: "Sustainability",
                        paragraph1: "In the dynamic landscape of sustainability consulting, Madasky Consulting has established itself as a trusted partner for manufacturers seeking to integrate Environmental, Social, and Governance (ESG) principles into their business operations. Our approach is rooted in strategic expertise, action-oriented solutions, and a deep understanding of industry challenges.",
                        paragraph2: "Sustainability in Manufacturing: Navigating Challenges with Strategic Expertise. The manufacturing industry in India is at a pivotal juncture, striving to harmonize rapid industrial advancement with the imperative of sustainable development. The confluence of stringent regulations, shifting consumer expectations, and global sustainability commitments necessitates a profound transformation in business strategies. Companies that do not embed ESG principles into their core operations risk diminishing market relevance, investor trust, and operational effectiveness.",
                        paragraph3: "However, the path to sustainability is fraught with challenges",




                    }} border={"border-b"} />

                    <CapabilitiesContent1 details1={{
                        heading1: "Key Challenges:",
                        // paragraph1: "If these challenges resonate with your experience, our Delivery Performance Program is designed to transform these obstacles into opportunities for growth and excellence.",
                        paragraph2: "To address these complexities, Madasky Consulting offers strategic, action-oriented sustainability solutions designed to build resilience, ensure compliance, and unlock new growth opportunities.",


                        data:
                            [
                                {
                                    data1: "Regulatory Complexity & Compliance Pressures",
                                    data2: "Navigating the evolving landscape of ESG mandates, such as the SEBI BRSR framework, while aligning with international standards, presents a significant challenge for Indian manufacturers.",
                                },
                                {
                                    data1: "High Initial Investment & ROI Uncertainty",
                                    data2: "The substantial capital required for energy-efficient technologies, waste valorization, and resource optimization often deters businesses due to uncertain financial returns.",
                                },

                                {
                                    data1: "Limited ESG Integration in Business Strategy",
                                    data2: "Many companies struggle to seamlessly incorporate sustainability into their core business models, leading to disjointed and ineffective green initiatives.",
                                },
                                {
                                    data1: "Supply Chain & Waste Management Challenges",
                                    data2: "Traditional linear supply chain models result in excessive waste and inefficiencies, underscoring the need for a shift toward circularity.",
                                },
                                {
                                    data1: "Stakeholder & Investor Expectations",
                                    data2: "There is an increasing demand from investors and customers for transparent sustainability commitments, necessitating clear ESG goals, impact measurement, and credible reporting.",
                                },
                                // {
                                //     data1: "Quality Control Challenges",
                                //     data2: "Manual inspection methods result in higher defect rates and inconsistencies in production.",
                                // },

                            ],

                        imgSrc: "Key Challenges.png",
                        altText: imgAltText[0],
                        calendarButton: true,
                        btnText: "Schedule Expert Call",




                    }} border={"border-b"} />

                    <CapabilitiesContent1 details1={{
                        heading1: "ESG Strategy:",
                        // paragraph1: "If these challenges resonate with your experience, our Delivery Performance Program is designed to transform these obstacles into opportunities for growth and excellence.",
                        paragraph2: "Crafting a Sustainable Growth Blueprint. We specialize in developing robust ESG-compliant business strategies, enabling manufacturers to integrate sustainability into their operational frameworks effectively.",


                        data:
                            [
                                {
                                    data1: "Stakeholder Engagement",
                                    data2: "Identify and collaborate with key stakeholders, including investors, customers, and regulatory bodies, to align sustainability goals with business priorities.",
                                },
                                {
                                    data1: "Current Audit & Assessment",
                                    data2: "Conduct a comprehensive ESG audit to evaluate current performance, carbon footprint, energy efficiency, and compliance gaps.",
                                },

                                {
                                    data1: "Strategy & Performance Benchmarking",
                                    data2: "Develop a customized ESG strategy based on industry best practices, global sustainability benchmarks, and competitor analysis.",
                                },
                                {
                                    data1: "Implementation of ESG Goals",
                                    data2: "Assist in integrating sustainability measures across operations, from renewable energy adoption to process optimization, ensuring measurable impact.",
                                },
                                {
                                    data1: "Business Expansion Plan",
                                    data2: "Align growth strategies with sustainability-driven innovation, facilitating entry into new markets with ESG-compliant practices.",
                                },


                            ],

                        imgSrc: "ESG Strategy.png",
                        altText: imgAltText[1],



                    }} border={"border-b"} />

                    <CapabilitiesContent1 details1={{
                        heading1: "ESG Reporting:",
                        paragraph1: "Structuring Transparent & Impactful Sustainability Disclosures. We assist manufacturing companies in establishing structured ESG reporting frameworks, ensuring compliance with national and international sustainability reporting standards.",
                        // paragraph2: "Structuring Transparent & Impactful Sustainability Disclosures. We assist manufacturing companies in establishing structured ESG reporting frameworks, ensuring compliance with national and international sustainability reporting standards.",


                        data:
                            [
                                {
                                    data1: "Materiality Analysis",
                                    data2: "Identify key sustainability issues impacting business and industry stakeholders, ensuring the reporting framework focuses on relevant ESG factors.",
                                },
                                {
                                    data1: "Reporting Requirements & Regulations",
                                    data2: "Align ESG disclosures with regulatory mandates such as SEBI BRSR, GRI, and SASB frameworks, preparing businesses for investor scrutiny.",
                                },

                                {
                                    data1: "Sustainability Report Development",
                                    data2: "Design data-driven sustainability reports that effectively communicate ESG performance and long-term sustainability vision.",
                                },
                                {
                                    data1: "Social Impact Report",
                                    data2: "Highlight corporate social responsibility initiatives, labor policies, and community-driven impact projects that enhance brand reputation.",
                                },


                            ],

                        imgSrc: "ESG Reporting.png",
                        altText: imgAltText[2],



                    }} border={"border-b"} />


                    <CapabilitiesContent1 details1={{
                        heading1: "Circular Economy & Resource Optimization - Driving Sustainable Efficiency:",
                        // paragraph1: "Structuring Transparent & Impactful Sustainability Disclosures. We assist manufacturing companies in establishing structured ESG reporting frameworks, ensuring compliance with national and international sustainability reporting standards.",
                        // paragraph2: "Structuring Transparent & Impactful Sustainability Disclosures. We assist manufacturing companies in establishing structured ESG reporting frameworks, ensuring compliance with national and international sustainability reporting standards.",


                        data:
                            [
                                {
                                    data1: "Supply Chain Mapping for Valorization of Textile Waste",
                                    data2: "Implement waste reduction strategies by integrating circular economy principles, helping manufacturers monetize textile waste.",
                                },
                                {
                                    data1: "Strategies for Circularity & Sustainable Practices",
                                    data2: "Develop frameworks for closed-loop production, eco-friendly sourcing, and zero-waste initiatives to enhance environmental efficiency.",
                                },

                                {
                                    data1: "Optimization of Raw Material Consumption",
                                    data2: " Implement resource efficiency strategies, ensuring manufacturers reduce material waste while improving operational cost efficiency.",
                                },



                            ],

                        imgSrc: "Circular economy.png",
                        altText: imgAltText[3],



                    }} border={"border-b"} />



                    {/* <div className={`flex w-full pb-8 mt-20 border-b border-gray-300`}>

                        <div className='flex flex-col w-full gap-8'>

                            <div className='text-black font-bold text-4xl leading-[1]'>
                                <h2>Madasky Consulting's Approach to Automation</h2>

                            </div>

                            <div className='text-gray-500 text-[20px] font-extralight flex flex-col gap-4' style={{ fontFamily: "Helvetica, Arial, sans-serif" }} >


                                <p className='text-gray-700'>At Madasky Consulting, we specialize in designing and implementing intelligent automation solutions to enhance manufacturing efficiency, minimize human dependency, and optimize operational costs. Our approach integrates cutting-edge automation, robotics, AI-driven analytics, and Industry 4.0 technologies to deliver scalable and future-proof solutions.</p>




                                <ul className='flex flex-col pl-5 text-justify list-disc'>


                                    <div className='grid grid-cols-2'>

                                        <div className='flex flex-col gap-2'>

                                            <p className='text-2xl font-semibold text-gray-600'>
                                                How We Help:
                                            </p>
                                            <ul className='pl-5 list-disc'>


                                                <li className=''>
                                                    <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>End-to-End Automation Strategy: </span>Assessing your current processes, identifying automation opportunities, and developing a customized roadmap.</p>
                                                </li>

                                                <li className=''>
                                                    <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Process Optimization & Digital Transformation: </span>Implementing automation technologies tailored to your industry and specific needs.</p>
                                                </li>

                                                <li className=''>
                                                    <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Technology Integration & Deployment: </span>Leveraging robotics, AI, IoT, and data-driven decision-making to enhance manufacturing performance.</p>
                                                </li>

                                                <li className=''>
                                                    <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Performance Monitoring & Continuous Improvement: </span>Ensuring automation solutions deliver long-term efficiency and ROI.</p>
                                                </li>


                                            </ul>
                                        </div>


                                        <div className='flex items-center justify-center w-full rounded-lg'>
                                            <img
                                                src={`/assets/images/398.png`}


                                                className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:"
                                            />
                                        </div>

                                    </div>








                                </ul>




                            </div>

                        </div>

                    </div> */}



                    {/* <div className={`flex w-full pb-8 mt-20 border-b border-gray-300`}>

                        <div className='flex flex-col w-full gap-8'>

                            <div className='text-black font-bold text-4xl leading-[1]'>
                                <h2>Key Areas of Automation Expertise</h2>

                            </div>

                            <div className='text-gray-500 text-[20px] font-extralight flex flex-col gap-2' style={{ fontFamily: "Helvetica, Arial, sans-serif" }} >


                                <ul className='flex flex-col pl-5 text-justify list-disc'>


                                    <div className='grid grid-cols-2'>

                                        <div className='flex flex-col gap-2'>


                                            <div className=''>


                                                <ul className='list-disc'>
                                                    <li>
                                                        <p className='text-2xl font-semibold text-left text-gray-600'>
                                                            Customized Automated Solutions for Various Manufacturing Processes:
                                                        </p>
                                                    </li>
                                                </ul>

                                                <p className='font-normal text-gray-700'>
                                                    We help manufacturing organizations transition from manual to automated or semi-automated workflows, ensuring improved productivity and quality. Our solutions focus on.
                                                </p>


                                                <ul className='pl-8 list-disc'>


                                                    <li className=''>
                                                        <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Material handling and movement automation </span> to minimize waste and maximize efficiency.</p>
                                                    </li>

                                                    <li className=''>
                                                        <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Process automation </span>for assembly lines, packaging, and inspection.</p>
                                                    </li>

                                                    <li className=''>
                                                        <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Integration of IoT sensors </span>to monitor real-time production data and predictive maintenance.</p>
                                                    </li>




                                                </ul>

                                            </div>

                                            <div className=''>

                                                <ul className='list-disc'>
                                                    <li>
                                                        <p className='text-2xl font-semibold text-left text-gray-600'>
                                                            Automated and Semi-Automated Sewing Solutions:
                                                        </p>
                                                    </li>
                                                </ul>

                                                <p className='font-normal text-gray-700'>
                                                    For the textile and apparel industries, we offer specialized automation solutions to enhance sewing and stitching efficiency.
                                                </p>


                                                <ul className='pl-8 list-disc'>


                                                    <li className=''>
                                                        <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Automated sewing machines </span>with AI-powered stitching precision.</p>
                                                    </li>

                                                    <li className=''>
                                                        <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Semi-automated setups </span>that reduce operator workload and increase output.</p>
                                                    </li>

                                                    <li className=''>
                                                        <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Workflow automation </span>to streamline production and reduce material wastage.</p>
                                                    </li>




                                                </ul>
                                            </div>



                                        </div>






                                        <div className='flex items-center justify-center w-full rounded-lg'>
                                            <img
                                                src={`/assets/images/398.png`}


                                                className="object-cover w-[80%] rounded-xl max-md:object-fit max-md:"
                                            />
                                        </div>

                                    </div>




                                </ul>



                                <div className='pl-5'>

                                    <ul className='list-disc'>
                                        <li>
                                            <p className='text-2xl font-semibold text-left text-gray-600'>
                                                Evaluation & Implementation of Robotics (e.g., AGVs, Cobots, AI-Driven Machines):
                                            </p>
                                        </li>
                                    </ul>

                                    <p className='font-normal text-gray-700'>
                                        We analyze and implement robotics-driven solutions to replace manual material handling and repetitive tasks.
                                    </p>


                                    <ul className='pl-8 list-disc'>


                                        <li className=''>
                                            <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Automated Guided Vehicles (AGVs): </span> For material transport within production facilities, reducing dependency on forklifts and manual labor.</p>
                                        </li>

                                        <li className=''>
                                            <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Collaborative Robots (Cobots): </span>Designed to work alongside human operators, improving accuracy and consistency in manufacturing tasks.</p>
                                        </li>

                                        <li className=''>
                                            <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>AI-powered robotic arms: </span>For assembly, welding, and quality inspection.</p>
                                        </li>




                                    </ul>
                                </div>


                                <div className='pl-5'>

                                    <ul className='list-disc'>
                                        <li>
                                            <p className='text-2xl font-semibold text-left text-gray-600'>
                                            Planning and Implementing Automated Warehouses & Logistical Solutions:
                                            </p>
                                        </li>
                                    </ul>

                                    <p className='font-normal text-gray-700'>
                                    Warehousing and logistics play a crucial role in supply chain efficiency. We assist in.
                                    </p>


                                    <ul className='pl-8 list-disc'>


                                        <li className=''>
                                            <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Automated storage and retrieval systems (ASRS) </span>to optimize warehouse space and reduce operational costs.</p>
                                        </li>

                                        <li className=''>
                                            <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Smart conveyors & sorting systems </span>for streamlined material flow.</p>
                                        </li>

                                        <li className=''>
                                            <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>AI-based inventory management </span>for real-time tracking and predictive stock replenishment.</p>
                                        </li>

                                        <li className=''>
                                            <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>Robotic palletizing & de-palletizing solutions </span>for handling bulk inventory with precision.</p>
                                        </li>




                                    </ul>
                                </div>






                            </div>

                        </div>

                    </div> */}

                    {/* <CapabilitiesContent1 details1={{
                        heading1: "Why Choose Madasky Consulting for Manufacturing Automation?",
                        // paragraph1: "If these challenges resonate with your experience, our Delivery Performance Program is designed to transform these obstacles into opportunities for growth and excellence.",


                        data:
                            [
                                {
                                    data1: "Industry Expertise",
                                    data2: " Deep knowledge across textiles, home furnishings, automotive, and other manufacturing sectors.",
                                },
                                {
                                    data1: "Bespoke Automation Strategies",
                                    data2: "Tailored solutions to align with business objectives and scalability.",
                                },

                                {
                                    data1: "End-to-End Implementation Support",
                                    data2: "From planning to execution and performance monitoring.",
                                },
                                {
                                    data1: "Proven Track Record",
                                    data2: "Successfully implemented automation solutions across mid to large-sized factories.",
                                },
                                {
                                    data1: "Global Perspective",
                                    data2: "Leveraging international best practices for optimized manufacturing automation.",
                                },


                            ],

                        imgSrc: "/assets/images/398.png"



                    }} border={"border-b"} /> */}

                    <CapabilitiesHeader details1={{
                        heading1: "Partner with Madasky Consulting for a Sustainable Future",
                        paragraph1: "Our consulting expertise empowers manufacturers to transform sustainability challenges into business opportunities. By implementing a structured ESG framework, companies can ensure compliance, enhance brand reputation, improve investor confidence, and drive long-term profitability.",
                        paragraph2: "Let's build a future where sustainability and business growth go hand in hand. Reach out to us today to develop a sustainability roadmap tailored to your business needs.",
                        // paragraph3: "This is not just about quick fixes, it's about creating a sustainable, cash-positive business that thrives in any market condition.",




                    }} border={"border-none"} />











                    {/* <CapabilitiesContent2 details1={{
                        heading1: "Key Challenges:",
                        // heading2: "At Madasky Consulting, we specialize in research and business intelligence tailored to the manufacturing sector, providing critical insights to help companies make informed, strategic decisions. Our expert-driven research methodologies ensure that our clients remain resilient, competitive, and future-ready.",
                        // paragraph1: "Strategic Research & Business Intelligence Solutions:",
                        // heading3: "At Madasky Consulting, we don't just offer advice we deliver measurable results. With deep industry expertise and a hands-on approach, we help manufacturing firms unlock cash flow, optimize efficiency, and drive profitability. Our tailored strategies, data-driven insights, and proven methodologies ensure that you see immediate financial impact and long-term business resilience.",
                        // heading4: "When you partner with us, you gain more than just solutions you gain a trusted advisor committed to your success. Let's turn your financial challenges into opportunities and position your business for sustainable growth. Ready to accelerate your cash flow? Let's talk.",


                        data:
                            [
                                {
                                    data1: "Skilled Workforce Shortage",
                                    data2: "Finding and retaining trained workers is becoming increasingly difficult, leading to production delays and quality inconsistencies.",
                                },
                                {
                                    data1: "Rising Labor Costs",
                                    data2: "As wages increase, dependency on manual labor impacts profitability.",
                                },

                                {
                                    data1: "Production Inefficiencies",
                                    data2: "Manual processes slow down production cycles, increase human errors, and create bottlenecks.",
                                },
                                {
                                    data1: "Scalability Issues",
                                    data2: "Traditional manufacturing processes struggle to meet growing market demands and fluctuating order volumes.",
                                },
                                {
                                    data1: "Inventory & Logistics Management",
                                    data2: "Inefficient warehouse operations and material movement impact supply chain effectiveness.",
                                },
                                {
                                    data1: "Quality Control Challenges",
                                    data2: "Manual inspection methods result in higher defect rates and inconsistencies in production.",
                                },


                            ],

                        data2: [





                        ],





                        imgSrc: "/assets/images/398.png"



                    }} border={"border-b"} /> */}


                    {/* <CapabilitiesHeader2 details1={{
                        heading1: "How We Help You Navigate and Capitalize on India's Business Potential",
                        paragraph1: "Our consulting expertise ensures a structured approach to entering and scaling in the Indian manufacturing sector. We provide end-to-end strategy, market intelligence, and execution support to help businesses build a strong foundation in India.",
                        imgSrc: "/assets/images/398.png",


                    }} border={"border-b"} /> */}



                    {/* 
                    <CapabilitiesContent2 details1={{
                        heading1: "Tailored Solutions for Manufacturing Success in India:",
                        // heading2: "At Madasky Consulting, we specialize in research and business intelligence tailored to the manufacturing sector, providing critical insights to help companies make informed, strategic decisions. Our expert-driven research methodologies ensure that our clients remain resilient, competitive, and future-ready.",
                        // paragraph1: "Strategic Research & Business Intelligence Solutions:",
                        heading3: "By leveraging our expertise, businesses can confidently navigate India's manufacturing ecosystem, mitigate risks, and position themselves for sustained growth. Are you ready to explore India's manufacturing potential? Let's build a roadmap together!",
                        // heading4: "When you partner with us, you gain more than just solutions you gain a trusted advisor committed to your success. Let's turn your financial challenges into opportunities and position your business for sustainable growth. Ready to accelerate your cash flow? Let's talk.",


                        data:
                            [
                                {
                                    data1: "Business Opportunity in India and South Asia",
                                    data2: "We analyze industry trends, government policies, and competitive landscapes to identify high-growth opportunities in India's manufacturing sector and emerging South Asian markets.",
                                },
                                {
                                    data1: "Aligning and Customizing for the Market",
                                    data2: "We tailor your go-to-market strategy by localizing pricing, branding, and operational frameworks to align with India's consumer behavior, industrial policies, and cost structures.",
                                },

                                {
                                    data1: "Make for India & Make for World Assessment and Strategy",
                                    data2: `We assess whether your business should focus on "Make for India" (localized production and consumption) or "Make for World" (leveraging India as a global manufacturing hub), and design a scalable strategy accordingly.`,
                                },



                            ],

                        data2: [
                            {
                                data1: "Partnerships and Alliances",
                                data2: "We identify potential joint ventures, distribution networks, and supply chain collaborations to accelerate your market entry while ensuring regulatory and operational efficiency.",
                            },
                            {
                                data1: "Workshops on India Opportunity",
                                data2: "We conduct executive workshops to equip leadership teams with in-depth knowledge of India’s business landscape, policy frameworks, and strategic roadmaps for long-term success.",
                            },




                        ],





                        imgSrc: "/assets/images/398.png"



                    }} border={"border-none"} /> */}





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

