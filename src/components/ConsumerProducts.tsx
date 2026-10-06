
import ConsultingNavbar2 from '@/components/ConsultingNavbar2.jsx';
import CapabilitiesHeader from '@/components/CapabilitiesHeader.jsx';
// import CapabilitiesHeader2 from '@/components/CapabilitiesHeader2.jsx';
import CapabilitiesContent1 from '@/components/CapabilitiesContent1.jsx';
import CapabilitiesContent2 from '@/components/CapabilitiesContent2.jsx';
// import CapabilitiesContent3 from '@/components/CapabilitiesContent3.jsx';
// import CapabilitiesContent4 from '@/components/CapabilitiesContent4.jsx';
import Banner2 from "@/components/Banner2.jsx"
import Footer from '@/components/Footer.jsx';
// import vid1 from "/assets/images/GROWTH MARKETING AND SALES69.mp4";
// import vid1 from "/assets/images/314.mp4";
// import AboutVideo from './AboutVideo.jsx';
import HelpYou from './HelpYou.jsx';
// import SlidingBlogs from '../components/SlidingBlogs.jsx';
// import VideoPlayer from '../components/VideoPlayer.jsx';
// import Imagetemplate from '../components/Imagesliders.jsx';
export default function GrowthMarketingAndSales() {
    return (
        <>
            <ConsultingNavbar2
                url='/consumer-products'
                title={'Consumer Products'}

            />
            {/* <Banner2
                // img="bg-[url('/assets/images/Solutionheader.png')]"
                img='/assets/images/Consumer Products Industry Header .png'
                title='Consumer Products'
            /> */}
            {/* <AboutVideo vid1={vid1} title={"Madasky"} des={"Creating and accelerating critical advantages through cutting-edge strategy and operations"} /> */}

            <div className='w-[80vw] bg-white mx-auto'>

                <div className='w-full my-20'>

                    <CapabilitiesHeader details1={{
                        heading1: "Consumer Products Industry",
                        paragraph1: "Today's consumer products companies face constant disruptions, shifting consumer demands, technological advances, and fierce competition. Challenges like digital transformation, sustainability, regulatory changes, and global uncertainties require agility and innovation. At Madasky Consulting, we help companies turn these disruptions into opportunities for sustainable growth and success.",
                        // paragraph2: "As businesses expand, the complexity of managing working capital grows, leading to increased financial stress, strained vendor relationships, and missed opportunities for reinvestment. Without an optimized strategy, manufacturers may find themselves constantly firefighting liquidity issues rather than strategically driving growth.",
                        // paragraph3: "This is not just about quick fixes, it's about creating a sustainable, cash-positive business that thrives in any market condition.",




                    }} border={"border-b"} />

                    <CapabilitiesContent1 details1={{
                        heading1: "How We Help Consumer Products Companies",
                        paragraph1: "Madasky Consulting offers tailored solutions to help consumer products companies build lasting value. Our experienced team combines strategic insight with operational expertise, enabling clients to turn challenges into competitive advantages.",


                        data:
                            [
                                {
                                    data1: "Practical Results, Real Impact",
                                    data2: "We deliver actionable solutions and measurable outcomes, emphasizing immediate and lasting improvements through rigorous execution.",
                                },
                                {
                                    data1: "End-to-End Transformation",
                                    data2: "We provide comprehensive transformation services covering strategy, operations, digital capabilities, organization, and customer-centric marketing.",
                                },

                                {
                                    data1: "Mutual Success through Collaboration",
                                    data2: "We build partnerships based on shared success, aligning closely with client's goals through innovative commercial models.",
                                },


                            ],

                        imgSrc: "/assets/images/What we do_.png"



                    }} border={"border-b"} />



                    <CapabilitiesContent2 details1={{
                        heading1: "Comprehensive Solutions for Every Challenge",
                        heading2: "Madasky Consulting offers deep expertise tailored to your unique needs, enabling rapid growth, improved profitability, and stronger cash flow.",
                        paragraph1: "Our Expertise Areas Include:",
                        heading3: "Partner with Madasky Consulting to turn uncertainty into strategic advantage, ensuring continued resilience and growth.",
                        // heading4: "When you partner with us, you gain more than just solutions you gain a trusted advisor committed to your success. Let's turn your financial challenges into opportunities and position your business for sustainable growth. Ready to accelerate your cash flow? Let's talk.",


                        data:
                            [
                                {
                                    data1: "Digital Transformation",
                                    data2: "Embracing digital technologies, optimizing e-commerce, enhancing customer engagement, and streamlining operations.",
                                },
                                {
                                    data1: "Marketing Excellence",
                                    data2: "Data-driven strategies to boost brand positioning, customer value, and market share.",
                                },

                                {
                                    data1: "Growth Strategy Development",
                                    data2: "Actionable growth plans based on market analysis and consumer insights.",
                                },
                                {
                                    data1: "Organizational Optimization",
                                    data2: "Improving structures, leadership, talent development, and culture for high performance.",
                                },



                            ],

                        data2: [



                            {
                                data1: "Operational Efficiency",
                                data2: "Optimizing supply chains, reducing costs, and improving production processes.",
                            },
                            {
                                data1: "Advanced Analytics",
                                data2: "Data-driven insights to forecast trends, optimize pricing, and enhance decision-making.",
                            },


                        ],





                        imgSrc: "/assets/images/Consumer Products Industry Comprehensive Solutions for Every Challenge.png"



                    }} border={"border-none"} />


                    {/* <CapabilitiesHeader2 details1={{
                        heading1: "How We Help You Navigate and Capitalize on India's Business Potential",
                        paragraph1: "Our consulting expertise ensures a structured approach to entering and scaling in the Indian manufacturing sector. We provide end-to-end strategy, market intelligence, and execution support to help businesses build a strong foundation in India.",
                        imgSrc: "/assets/images/398.png",


                    }} border={"border-b"} /> */}




                </div>







            </div >






            <div className="p-6 flex h-auto flex-col w-full py-[1vh] bg-[#bce1fd75] bg-[url('/assets/images/homeblogbg.png')] bg-center bg-no-repeat bg-cover  items-center justify-center">

                {/* <VideoPlayer

                />
                <div className="w-[90%] h-[2px] bg-gray-300"></div>
                <SlidingBlogs />
                <div className="w-[90%] h-[2px] bg-gray-300"></div>

                <Imagetemplate

                /> */}


            </div>
            <HelpYou />
            <Footer />
        </>
    )
}

