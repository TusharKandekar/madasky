// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { FaStarHalf, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
// import { JSX, useEffect, useState } from "react";
// import { truncateText } from "@/common/api";

// // TestimonialCard Component
// export default function TestimonialCard({ text, rating, name, position, image }: { text: string, rating: string, name: string, position: string, image: string }): JSX.Element {
  
//   const [isTruncated, setIsTruncated] = useState(true);

//   const fullStar = (
//     <FaStar className="text-yellow" />
//   );

//   const halfStar = (
//     <FaStarHalfAlt className="text-yellow" />
//   );

//   const stars = Array(Math.floor(parseInt(rating))).fill(fullStar);
//   if (parseInt(rating) % 1 !== 0) stars.push(halfStar);


//   const handleReadMoreClick = () => {
//     setIsTruncated(!isTruncated);
//   };

//   return (
//     <div className="bg-white p-6 w-full h-[50vh] relative max-md:h-[60vh] max-md:p-1">
//       {/* <div className="mb-4 text-[#7e8a8d] text-2xl">
//         <i className="fa-solid fa-message"></i>
//       </div>
//       <p className="text-[#7e8a8d] mb-4">{text}</p>
//       <div className="flex mt-4">
//       {stars}
//         {[...Array(5 - stars.length)].map((_, i) => (
//           <FaRegStar key={`stststs${i}`} className="text-yellow"/>
//         ))}
//       </div>
//       <div className="flex items-center py-8">
//         <img className="w-12 h-12 mr-4 rounded-full" src={image} alt={name} />
//         <div>
//           <p className="text-[#7e8a8d] font-semibold">{name}</p>
//           <p className="text-sm text-gray-500">{position}</p>
//         </div>
//       </div> */}
//       <div className="flex items-center flex-col gap-4 justify-center h-full bg-[#f6f6f6] p-6 shadow-xl">
//         {image && (
//           <img src={image} alt="" className="w-[80px] rounded-full absolute top-[-1vh] border-white border-[7px] max-md:top-[-5vh]" />
//         )}
//         <div className="flex mt-9">
//           {stars}
//           {[...Array(5 - stars.length)].map((_, i) => (
//             // <FaRegStar key={`stststs${i}`} className="text-yellow" />
//             // <FaRegStar className="text-yellow" />
//             <FaRegStar key={`empty-star-${name}-${i}`} className="text-yellow" />

//           ))}
//         </div>

//         {/* <p className="text-[#7e8a8d]  text-center text-xl"><span className="text-[#e63611] text-3xl">"</span>{truncateText(text)}<span className="text-sm text-blue-500">Read More</span><span className="text-[#e63611] text-3xl">"</span></p>
//         <p className="text-[#e63611] text-xl font-bold">{name}<spn className="text-[#7e8a8d] text-sm">, {position}</spn></p> */}


//         <div style={{ maxHeight: '200px', overflow: 'auto' }} className="custom-scrollbar">
//           <p className="text-[#7e8a8d] text-center text-xl">
//             <span className="text-[#e63611] text-2xl">"</span>
//             {isTruncated ? truncateText(text, 65) : text}
//             <span
//               className="text-sm text-blue-500 cursor-pointer"
//               onClick={handleReadMoreClick}
//             >
//               {isTruncated ? 'Read More' : 'Show Less'}
//             </span>
//             <span className="text-[#e63611] text-3xl">"</span>
//           </p>
//         </div>


//         <p className="text-[#e63611] text-xl font-bold">
//           {name}
//           <span className="text-[#7e8a8d] text-sm">, {position}</span>
//         </p>

//       </div>
//     </div>
//   );
// };

// // Prop Validation for TestimonialCard


// *****************************************************



