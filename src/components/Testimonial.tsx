
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";  

// import TestimonialCard from "./TestimonialCard";

// import { Testimonial } from "@/common/types";

// // Testimonials Component
// const Testimonials = ({ testimonialData }: { testimonialData: Testimonial[] }) => {

//   // testimonialData is already an array, no need to destructure
//   const testimonials = testimonialData;

//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 3, // Adjust this number based on your design
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     pauseOnHover: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           initialSlide: 1
//         }
//       }
//     ]
//   };

//   return (
//     <section className="w-full py-12 bg-white">
//       <div className="container px-4 mx-auto max-md:px-0">
//         <Slider {...settings}>
//           {testimonials.map((testimonial:Testimonial, index:number) => (
//             // <TestimonialCard key={id} text={testimonial.testimonial_content} rating={testimonial.testimonial_stars} name={testimonial.testimonial_by} position={testimonial.testimonial_position} image={testimonial.profile_image} />

//             <TestimonialCard 
//             key={testimonial.testimonial_id} 
//             text={testimonial.testimonial_content || ''} 
//             rating={String(testimonial.testimonial_stars || 0)}
//             name={testimonial.testimonial_by || ''}
//             position={testimonial.testimonial_position || ''} 
//             image={testimonial.profile_image || ''}
//           />

//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

// **********************************************



import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useEffect, useState } from "react";
import { FaStarHalf, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { truncateText } from "@/common/api";
import { Testimonial } from "@/common/types";
import BaseUrl from "./BaseUrl";


// TestimonialCard Component
const TestimonialCard = ({ text, rating, name, position, image }: { text: string, rating: string, name: string, position: string, image: string }) => {
    const fullStar = (
        <FaStar className="text-yellow" />
    );

    const halfStar = (
        <FaStarHalfAlt className="text-yellow" />
    );

    const stars = Array(Math.floor(parseInt(rating))).fill(fullStar);
    if (parseInt(rating) % 1 !== 0) stars.push(halfStar);

    const [isTruncated, setIsTruncated] = useState(true);

    const handleReadMoreClick = () => {
        setIsTruncated(!isTruncated);
    };


    const fullStars = Math.floor(parseFloat(rating));
    const hasHalfStar = parseFloat(rating) % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);


    return (
        <div className="bg-white p-6 w-full h-[50vh] max-2xl:h-[60vh] relative max-md:h-[60vh] max-md:p-1">

            <div className="relative flex items-center flex-col gap-4 justify-center h-full bg-[#f6f6f6] p-6 shadow-xl">
                {image && (
                    // <img src={image} alt="" className="w-[80px] rounded-full absolute top-[-1vh] border-white border-[7px] max-md:top-[-5vh]" />
                    <Image src={`${BaseUrl().baseurl}/${image}`} alt="" className="w-[80px] rounded-full absolute top-[-1vh] border-white border-[7px] max-md:top-[-5vh]" fill />
                )}
                <div className="w-[80px] h-[80px] rounded-full absolute top-[-1vh] border-white border-[5px] max-md:top-[-2vh]">

                    <Image src={`${BaseUrl().imgurl}/defaultuser.jpg`} alt="" className="w-[80px] object-fill rounded-full absolute top-[-1vh] border-white border-[7px] max-md:top-[-5vh]" fill />

                </div>

                <div className="flex mt-9 max-2xl:mt-14">
                    {[...Array(fullStars)].map((_, i) => (
                        <FaStar key={`full-${i}`} className="text-yellow-500" />
                    ))}

                    {hasHalfStar && <FaStarHalfAlt key="half" className="text-yellow-500" />}

                    {[...Array(emptyStars)].map((_, i) => (
                        <FaRegStar key={`empty-${i}`} className="text-yellow-500" />
                    ))}
                </div>





                <div style={{ maxHeight: '200px', overflow: 'auto' }} className="custom-scrollbar">
                    <p className="text-[#7e8a8d] text-center text-xl">
                        <span className="text-[#e63611] text-2xl">"</span>
                        {isTruncated ? truncateText(text, 65) : text}
                        <span
                            className="text-sm text-blue-500 cursor-pointer"
                            onClick={handleReadMoreClick}
                        >
                            {isTruncated ? 'Read More' : 'Show Less'}
                        </span>
                        <span className="text-[#e63611] text-3xl">"</span>
                    </p>
                </div>


                <p className="text-[#e63611] text-xl font-bold">
                    {name}
                    <span className="text-[#7e8a8d] text-sm">, {position}</span>
                </p>

            </div>
        </div>
    );
};

// Testimonials Component
const Testimonials = ({ testimonialData }: { testimonialData: Testimonial[] }) => {


    const testimonials = testimonialData;

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3, // Adjust this number based on your design
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <section className="w-full py-12 bg-white">
            <div className="container px-4 mx-auto max-md:px-0">
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={testimonial.testimonial_id} text={testimonial.testimonial_content || ''} rating={String(testimonial.testimonial_stars || 0)} name={testimonial.testimonial_by || ''} position={testimonial.testimonial_position || ''} image={testimonial.profile_image || ''} />
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Testimonials;
