import CapabilitiesMainCard from './CapabilitiesMainCard';
import CapabilitiesMainCard2 from './CapabilitiesMainCard2';
import { Link as ScrollLink } from "react-scroll";
import BaseUrl from '@/components/BaseUrl';
import { getImageAltText, getWebBlogs, getDataByPageName, filterByWebImage, getImageData, getTestimonials } from "@/common/api";
import ServerError from './ServerError';

import { Element } from 'react-scroll';

export default async function CoreServices() {
    const arr = [ "What we do_.png"];


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

                            <div key="1" className="text-lg text-justify max-md:text-left">

                                <p className='flex max-md:flex max-md:justify-center my-5 text-[45px] max-md:text-3xl leading-10 font-bold text-gray-800 text-left max-md:text-center'>What We Do</p>


                                <div className='pl-10 w-full text-[24px] max-md:text-xl font-normal text-[#6B7280] font-times'>

                                    <ul className='flex flex-col gap-8 list-disc'>
                                        <li>

                                            <a href="./go-to-market-strategy">
                                                {/* <Link to='/go-to-market-strategy'> */}
                                                <p className='flex items-center font-semibold cursor-pointer hover:underline'>Go-To-Market Strategy</p>
                                                {/* </Link> */}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="./new-age-marketing">

                                                {/* <Link to='/new-age-marketing'> */}
                                                <p className='flex items-center font-semibold cursor-pointer hover:underline'>New Age Marketing</p>
                                                {/* </Link> */}
                                            </a>


                                        </li>
                                        <li>
                                            <a href="./sales-accelerator-program">

                                                {/* <Link to='/sales-accelerator-program'> */}

                                                <p className='flex items-center font-semibold cursor-pointer hover:underline'>Sales Accelerator Program</p>
                                                {/* </Link> */}
                                            </a>

                                        </li>
                                        <li>
                                            <a href="./5x-business-multiplier-program">

                                                {/* <Link to='/5x-business-multiplier-program'> */}

                                                <p className='flex items-center font-semibold cursor-pointer hover:underline'>The 5X Business Multiplier Program</p>
                                                {/* </Link> */}
                                            </a>

                                        </li>
                                        <li>
                                            <a href="./growth-marketing-e-commerce">

                                                {/* <Link to='/growth-marketing-e-commerce'> */}

                                                <p className='flex items-center font-semibold cursor-pointer hover:underline'>E-commerce</p>
                                                {/* </Link> */}
                                            </a>


                                        </li>
                                    </ul>






                                </div>
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

                        img: 'What we do_.png',
                        direction: '',
                        altText: imgAltText[0],
                    }}
                />
            </div>
        // </Element>
    );
}
