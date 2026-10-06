// import CapabilitiesMainCard from './CapabilitiesMainCard';
import CapabilitiesMainCard2 from './CapabilitiesMainCard2';
// import { Element } from 'react-scroll';
import { Link as ScrollLink } from "react-scroll";
import BaseUrl from '@/components/BaseUrl';
import { getImageAltText, getWebBlogs, getDataByPageName, filterByWebImage, getImageData, getTestimonials } from "@/common/api";
import ServerError from './ServerError';


export default async function CoreServices() {
    const arr = ["Our Approach.png"];


    let images;
    let serverError = false;

    try {
        images = await getImageAltText(arr);

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
        // <Element name="NewAgeMarketing">
        <div className="px-4 mx-auto max-w-8xl Plant-Layout">
            <CapabilitiesMainCard2
                details1={{
                    // title: "Our Approach",
                    // des: `We focus on three core phases to ensure your success:`,

                    updes: [

                        <div key="1" className='text-lg text-justify'>

                            <p className='flex max-md:flex max-md:justify-center my-5 text-[45px] max-md:text-3xl leading-10 font-bold text-gray-800 text-left'>Our Approach</p>

                            <p className='py-1 pl-5 text-lg font-normal text-gray-500 max-md:px-0'>We focus on three core phases to ensure your success:</p>


                            <ul key="1" className="pl-10 text-lg text-justify list-disc max-md:px-2 max-md:text-left">
                                <li className='py-3 text-lg font-normal text-gray-500'>
                                    <strong className='max-md:text-left'>Analyze: Uncover Opportunities</strong>
                                    <ul className="pl-5 text-justify list-disc">
                                        <li>Dive deep into market dynamics, customer preferences, and business performance
                                            using sales and marketing consulting frameworks to identify growth opportunities.</li>
                                        <li>Leverage advanced tools to generate actionable insights for data-driven
                                            decision-making.</li>
                                    </ul>
                                </li>
                                <li className='py-3 text-lg font-normal text-justify text-gray-500'>
                                    <strong>Strategize: Build Customized Plans</strong>
                                    <ul className="pl-5 list-disc">
                                        <li>Develop tailored growth strategy consulting plans that address your unique
                                            challenges, aligning sales, marketing, and operational goals.</li>
                                        <li>Prioritize customer-centric solutions through marketing consultant services to ensure
                                            relevance and impact.</li>
                                    </ul>
                                </li>

                            </ul>
                        </div>
                    ],


                    hdes: [
                        <ul key="1" className="pl-0 text-lg text-justify list-disc max-md:text-left max-md:px-6">

                            <li className='py-3 text-lg font-normal text-gray-500'>
                                <strong>Implement: Drive Results
                                </strong>
                                <ul className="pl-5 text-justify list-disc">
                                    <li>Execute strategies with precision, combining marketing sales consulting expertise with industry
                                        best practices to accelerate revenue and market share.
                                    </li>

                                </ul>
                            </li>
                        </ul>
                    ],

                    img: 'Our Approach.png',
                    direction: '',
                    altText: imgAltText[0],
                }}
            />
        </div>
        // </Element>
    );
}
