import CapabilitiesMainCard from '@/components/CapabilitiesMainCard';
import BaseUrl from '@/components/BaseUrl'
import { getImageAltText, getWebBlogs, getDataByPageName, filterByWebImage, getImageData } from "@/common/api";



export default async function AdvisoryComponents() {
    const arr = ["AmitApproach.png", "Amit's approach6969.png"];

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
    return (
        <div className='w-full'>
            <div className='w-[90%] mx-auto gap-5 mt-20 max-md:mt-0'>
                <div className='flex flex-col items-center justify-center'>
                    <h2 className='pb-2 text-5xl font-semibold text-center text-black pt-9 max-md:text-4xl'>Advisory Services</h2>
                    <div className="w-[40%] h-[3px] bg-blue-300" style={{
                        background: 'linear-gradient(to right, #05528a 50%, #d02c22 50%)',

                    }}></div>
                </div>

                <div className='border-[1.8px] border-gray-200 rounded-2xl my-20 py-20 '>
                    <div className='w-[80%] mx-auto space-y-4 h-auto flex flex-col items-center'>
                        <p className='text-xl text-justify'>
                            At <span className='text-red-600'>Madasky Consulting</span>, a premier management consulting firm, we pride ourselves on providing unparalleled management consulting services, guided by the exceptional expertise and dedication of our founder, Amit Mittal. Amit's journey in the advisory domain has been marked by remarkable achievements and global recognition, making him a sought-after advisor by some of the world's leading organizations.

                        </p>

                        <h2 className='text-black text-3xl font-semibold text-center max-md:py-[4vh]'>
                            Global Recognition and Prestigious Appointments
                        </h2>

                        <p className='text-xl text-justify'>
                            Amit's dedication and proficiency in strategic management consulting have not gone unnoticed. His exceptional skills and strategic insights earned him the prestigious role of Senior Advisor to several Big Four management consulting firms and other prominent global entities. This role has allowed Amit to work on high-impact international projects, where he has been instrumental in driving supply chain transformations, developing robust go-to-market strategies, and delivering corporate management consulting solutions.

                        </p>

                        <p className='text-xl text-justify'>
                            Amit's advisory approach is characterized by his ability to navigate complex challenges and provide comprehensive solutions. He has guided numerous organizations through intricate corporate management consulting challenges and problem-solving processes, helping them achieve operational excellence and strategic growth.

                        </p>
                    </div>

                </div>
            </div>

            <div className='w-full py-10'>
                <div className='w-[100%] h-auto  bg-white rounded-2xl py-10 mx-auto flex flex-col gap-10'>
                    <div className='flex items-center justify-center w-full'>
                        <div className='w-full'>
                            <CapabilitiesMainCard
                                details1={{
                                    title: "Amit's Approach",
                                    des: "Amit's methodology is deeply client-centric, focusing on understanding the unique needs of each organization. He collaborates closely with clients to develop actionable strategies that align with management consulting best practices and deliver measurable results. His commitment to excellence and relentless pursuit of innovation ensure that clients receive the highest caliber of strategic management consulting services.",
                                    updes: [


                                    ],
                                    hdes: [

                                    ],
                                    img: `${BaseUrl().imgurl}/AmitApproach.png`,
                                    altText: `${imgAltText[0]}`,
                                    direction: '',
                                }}
                            />
                        </div>

                    </div>

                    <div className='flex flex-col items-start w-full mx-auto'>
                        <CapabilitiesMainCard
                            details1={{
                                title: "Why Choose Amit Mittal for Advisory Services?",
                                updes: [
                                    <ul key='1' className='ml-5 text-lg font-medium text-gray-700 list-disc'>
                                        <li><strong>Global Expertise:</strong> Proven track record of success with management consulting firms and multinational organizations worldwide.</li>
                                        <li><strong>Tailored Solutions:</strong> Customized management consulting services designed to address specific business objectives.
                                        </li>
                                        <li><strong>Strategic Insight:</strong> Deep understanding of market dynamics and industry trends, backed by strategic management consulting insights.</li>
                                        <li><strong>Commitment to Excellence: </strong>Dedication to fostering long-term corporate management consulting relationships and driving sustainable outcomes.</li>
                                        <h3 className='text-lg font-semibold ml-[-4vh] mt-4 text-gray-700'>
                                            Amit Mittal's management consulting services are designed to empower businesses to navigate complexities, seize opportunities, and achieve their strategic objectives. Partner with Amit to unlock your organization's full potential through strategic management consulting expertise and elevate your growth trajectory.
                                        </h3>
                                    </ul>


                                ],
                                hdes: [

                                ],
                                img: `${BaseUrl().imgurl}/Amit's approach6969.png`,
                                altText: `${imgAltText[1]}`,

                                // direction: 'flex-row-reverse',
                                calendarButton: true,
                                btnText: "Book Your Free Strategy Call",
                            }}
                        />

                    </div>


                </div>
            </div>


        </div>
    )
}
