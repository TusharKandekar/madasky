// import CapabilitiesMainCard from './CapabilitiesMainCard';
import CapabilitiesMainCard2 from './CapabilitiesMainCard2';
// import { Element } from 'react-scroll';
import { Link as ScrollLink } from "react-scroll";
import BaseUrl from '@/components/BaseUrl';
import { getImageAltText, getWebBlogs, getDataByPageName, filterByWebImage, getImageData, getTestimonials } from "@/common/api";
import ServerError from './ServerError';

export default async function CoreServices() {
    const arr = ["Growth Marketing & Sales.png"];


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
                    // title: "Growth, Marketing & Sales",
                    // des: `The manufacturing industry is undergoing a transformation, driven by rapid technological advancements, shifting customer expectations, and increasing global competition. Amid these changes, manufacturers are finding it challenging to balance operational efficiency with the need for robust growth strategies. Marketing and sales, once considered secondary to production, are now pivotal in shaping the future of manufacturing business`,
                    // des2: `At Madasky Consulting, our Growth, Marketing, and Sales services help businesses unlock their full potential through strategic insights, innovative execution, and a focus on sustainable growth. We offer a comprehensive approach that combines analysis, planning, and implementation to drive measurable results.`,
                    updes: [
                        <div key="1" className="text-lg text-justify">
                            <p className='flex max-md:flex max-md:justify-center my-5 text-[45px] max-md:text-3xl leading-10 font-bold text-gray-800 text-left max-md:text-center'>Growth, Marketing & Sales</p>

                            <p className='py-1 pl-5 text-lg font-normal text-gray-500 max-md:px-0'>The manufacturing industry is undergoing a transformation, driven by rapid technological
                                advancements, shifting customer expectations, and increasing global competition. Amid these
                                changes, manufacturers are finding it challenging to balance operational efficiency with the need
                                for growth strategy consulting that aligns with evolving market demands. Marketing and sales,
                                once considered secondary to production, are now pivotal in shaping the future of
                                manufacturing businesses.</p>

                            <p className='py-1 pl-5 text-lg font-normal text-gray-500 max-md:px-0'>At Madasky Consulting, our Growth Sales and Marketing Consulting services help businesses
                                unlock their full potential through strategic insights, innovative execution, and a focus on
                                sustainable growth. We offer a comprehensive approach that combines analysis, planning, and
                                implementation to drive measurable results.
                            </p>




                        </div>

                    ],
                    // hdes: [
                    //     <div key="1" className="pl-5 text-lg text-justify">
                    //         <p className='py-3 text-lg font-normal text-justify text-gray-500'>The traditional 4Ps and the customer-focused 4Cs models are essential for designing a resonant marketing strategy. Implementation plans and 90-day goals ensure smooth execution of projects and transitions. Investing in CRM systems and utilizing analytics are vital for enhancing customer interaction and optimizing marketing strategies. Multi-channel and omni-channel marketing approaches maximize customer engagement, and careful budgeting ensures resources are well-allocated.
                    //         </p>

                    //         <p className='py-3 text-lg font-normal text-justify text-gray-500'>Effective time management and a balanced marketing team, skilled in creative, analytical, and promotional areas, are critical for executing a comprehensive marketing strategy successfully.
                    //         </p>


                    //     </div>
                    // ],
                    img: 'Growth Marketing & Sales.png',
                    direction: '',
                    altText: imgAltText[0],
                    calendarButton: true,
                    btnText: "Plan Your Consultation",
                }}
            />
        </div>
        // </Element>
    );
}
