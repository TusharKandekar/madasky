import CapabilitiesMainCard from './CapabilitiesMainCard';
import CapabilitiesMainCard2 from './CapabilitiesMainCard2';

// import { Element } from 'react-scroll';
import BaseUrl from '@/components/BaseUrl';
import { getImageAltText, getWebBlogs, getDataByPageName, filterByWebImage, getImageData, getTestimonials } from "@/common/api";
import ServerError from './ServerError';

export default async function CoreServices() {
    const arr = ["Partner with Us.png"];


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

                    // title: "Productivity and Efficiency Improvement: Unleashing Operational Excellence",
                    // des: `At Madasky Consulting, we understand that in today's dynamic business landscape, organizations must constantly adapt and evolve to maintain a competitive edge. Enhancing productivity and efficiency is not just about optimizing processes; it's about creating an ecosystem where people, systems, and strategies work cohesively to deliver outstanding performance. We partner with businesses to unlock their true potential through innovative solutions, expert insights, and a relentless focus on results.`,

                    updes: [
                        <div key="1" className="text-lg text-justify">



                            <p className='flex max-md:flex max-md:justify-center max-md:text-center my-5 text-[45px] max-md:text-3xl leading-10 font-bold text-gray-800 text-left'>Partner with Us</p>

                            <p className='py-1 pl-5 text-lg font-normal text-gray-500 max-md:px-0'>At Madasky Consulting, our goal is to help businesses not just grow but thrive. By combining
                                growth sales and marketing consulting expertise, innovative methodologies, and a global
                                perspective, we ensure measurable success. Whether you're an established organization or an
                                emerging player, our marketing consultant services provide the roadmap to achieving your full
                                potential in today's dynamic marketplace.</p>

                            



                            {/* <ul className='pl-10 mt-4 list-disc'>
           
                                                   <li className='text-xl font-bold text-gray-500'>How We Help Clients</li>
           
                                                   <p className='font-normal text-gray-500'>
                                                       Our Productivity and Efficiency Improvement Practice is designed to address the unique challenges of modern manufacturing and operations. We work closely with you to identify inefficiencies, streamline workflows, and create sustainable systems that drive long-term success. Here's how we empower organizations:
                                                   </p>
           
                                                   <ul className="pl-8 list-disc">
                                                       <li className='py-1 text-lg font-normal text-gray-500'>
           
                                                           <p><span className='font-semibold'>Process Flow Design: </span>We ensure smooth transitions between production stages, creating a streamlined workflow that minimizes disruptions and delays.</p>
           
                                                       </li>
           
                                                       <li className='py-1 text-lg font-normal text-gray-500'>
           
                                                           <p><span className='font-semibold'>Workstation Placement: </span>Workstations are strategically positioned to enhance productivity and reduce unnecessary material movement.</p>
           
                                                       </li>
           
           
                                                       <li className='py-1 text-lg font-normal text-gray-500'>
           
                                                           <p><span className='font-semibold'>Material Handling Solutions: </span>We recommend and implement appropriate material handling equipment to facilitate efficient movement while maintaining safety and accuracy.</p>
           
                                                       </li>
           
           
           
           
           
           
           
           
           
                                                   </ul>
                                               </ul> */}



                        </div>

                    ],


                    // hdes: [

                    //     <div className='ml-[-10px]'>

                    //         <ul className="pl-7 list-disc">
                    //             <li className='py-1 text-lg font-normal text-gray-500'>

                    //                 <p><span className='font-semibold'>Storage and Inventory Management: </span>Optimizing storage areas and inventory processes to lower costs, improve accessibility, and prevent overstocking or shortages.</p>

                    //             </li>

                    //             <li className='py-1 text-lg font-normal text-gray-500'>

                    //                 <p><span className='font-semibold'>Traffic Flow and Aisle Design: </span>Designing clear and organized pathways to eliminate congestion and improve overall movement within the facility.</p>

                    //             </li>


                    //             <li className='py-1 text-lg font-normal text-gray-500'>

                    //                 <p><span className='font-semibold'>Material Flow Analysis: </span>Conducting regular assessments to identify inefficiencies and provide actionable insights for continuous improvement.</p>

                    //             </li>


                    //             <li className='py-1 text-lg font-normal text-gray-500'>

                    //                 <p><span className='font-semibold'>Ergonomics and Safety Integration: </span>Prioritizing worker safety and comfort by incorporating ergonomic principles into the material flow design.</p>

                    //             </li>

                    //             <li className='py-1 text-lg font-normal text-gray-500'>

                    //                 <p><span className='font-semibold'>Lean Manufacturing Principles: </span>Applying lean methodologies to eliminate waste, enhance resource utilization, and increase efficiency.</p>

                    //             </li>

                    //             <li className='py-1 text-lg font-normal text-gray-500'>

                    //                 <p><span className='font-semibold'>Flexibility and Scalability: </span>Designing layouts that accommodate future expansion and adapt to changing business needs.</p>

                    //             </li>

                    //             <li className='py-1 text-lg font-normal text-gray-500'>

                    //                 <p><span className='font-semibold'>Feedback and Continuous Improvement: </span>Engaging employees and supervisors to gather insights, monitor progress, and implement necessary adjustments for sustained optimization.</p>

                    //             </li>










                    //         </ul>

                    //     </div>


                    // ],
                    img: 'Partner with Us.png',
                    direction: '',
                    altText: imgAltText[0],
                    calendarButton: true,
                    btnText: "Unlock Your Next Chapter",
                }}
            />
        </div>
        // </Element>
    );
}
