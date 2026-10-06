import CapabilitiesMainCard from './CapabilitiesMainCard';
import CapabilitiesMainCard2 from './CapabilitiesMainCard2';

// import { Element } from 'react-scroll';
import BaseUrl from '@/components/BaseUrl';
import { getImageAltText, getWebBlogs, getDataByPageName, filterByWebImage, getImageData, getTestimonials } from "@/common/api";
import ServerError from './ServerError';

export default async function CoreServices() {
    const arr = ["Why Choose Madasky Consulting.png"];


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
                    // title: "Why Choose Madasky Consulting?",
                    // des: `Our Growth, Marketing, and Sales practice delivers tangible value by helping businesses:`,

                    updes: [

                        <div key="1" className="text-lg text-justify">

                            <p className='flex my-5 text-[45px] max-md:text-[28px] max-md:leading-8 max-md:flex max-md:justify-center leading-10 font-bold text-gray-800 text-left max-md:text-center'>Why Choose Madasky Consulting ?</p>


                            <p className='py-1 pl-5 text-lg font-normal text-gray-500 max-md:px-0'>Our sales and marketing consultancy services deliver tangible value by helping businesses:</p>


                            <ul key="1" className="pl-10 text-lg list-disc text-justify max-md:px-2">
                                <li className='py-3 text-lg font-normal text-gray-500'>
                                    <p className='max-md:block max-md:text-left'>
                                        <strong className='max-md:mr-2 max-md:inline-block'>Boost Revenue: </strong>Through proven marketing consulting services and customer-centric
                                        strategies.

                                    </p>

                                </li>
                                <li className='py-3 text-lg font-normal text-gray-500'>
                                    <p className='max-md:block max-md:text-left'>
                                        <strong className='max-md:mr-2 max-md:inline-block'>Engage Customers: </strong>
                                        Build loyalty with innovative campaigns powered by marketing
                                        consultant expertise.

                                    </p>

                                </li>
                                <li className='py-3 text-lg font-normal text-gray-500'>
                                    <p className='max-md:block max-md:text-left'>
                                        <span className='font-semibold max-md:mr-2 max-md:inline-block'>Adapt and Scale: </span>
                                        Leverage growth strategy consulting frameworks to thrive in dynamic
                                        markets.


                                    </p>

                                </li>
                                <li className='py-3 text-lg font-normal text-gray-500'>
                                    <p className='max-md:block max-md:text-left'>
                                        <span className='font-semibold max-md:mr-2 max-md:inline-block'>Stay Ahead: </span>
                                        Capture emerging opportunities with insights from our sales and marketing
                                        consulting methodologies.

                                    </p>

                                </li>

                            </ul>

                        </div>
                    ],


                    // hdes: [
                    //     <div className='flex flex-col gap-4 text-gray-500'>
                    //         <p className='text-2xl font-bold'>
                    //             Partner with Us
                    //         </p>

                    //         <p className='text-lg'>
                    //             At Madasky Consulting, our goal is to help businesses not just grow but thrive. By combining our industry expertise, innovative methodologies, and global perspective, we ensure that every client achieves measurable success. Whether you're an established organization or an emerging player, our Growth, Marketing, and Sales services provide the roadmap to achieving your full potential in today's dynamic marketplace.
                    //         </p>
                    //         <p className='text-lg'>

                    //             Let us help you redefine success.
                    //         </p>
                    //     </div>
                    // ],

                    img: 'Why Choose Madasky Consulting.png',
                    direction: '',
                    altText: imgAltText[0],
                    calendarButton: true,
                    btnText: "Book Your Free Strategy Call",
                }}
            />
        </div>
        // </Element>
    );
}
