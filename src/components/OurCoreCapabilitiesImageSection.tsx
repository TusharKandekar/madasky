"use client";
import type { NextPage } from "next";
// 🚀 Step 1: Import Slider and REQUIRED CSS files
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";

const TwitterIcon = () => (
  <svg
    className="w-10 h-10 text-red-600"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.76 2.8 1.91 3.56-.71 0-1.37-.22-1.95-.55v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.52 8.52 0 0 1-5.33 1.84c-.35 0-.69-.02-1.03-.06C3.44 20.29 5.7 21 8.12 21c7.34 0 11.35-6.08 11.35-11.35 0-.17 0-.34-.01-.51.78-.56 1.45-1.26 1.99-2.06z" />
  </svg>
);

const CalendarIcon = () => (
  <svg
    className="w-4 h-4 mr-2 text-gray-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const CommentIcon = () => (
  <svg
    className="w-4 h-4 mr-2 text-gray-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>
);

// --- Card Data (Example) ---
// const cardData = [
//   {
//     title: "Textile Exporter, Surat",
//     content:
//       "₹2.5 crore unlocked in just 4 weeks - we didn't realize how much cash was dormant in our operational systems. The impact was immediate and measurable.",
//     link: "https://covid19test.sananto.com",
//     comments: 25,
//   },
//   {
//     title: "Pharma Manufacturer, Bangalore",
//     content:
//       "Lead-times dropped 23% in five weeks. Our clients noticed the improvement immediately. Repeat orders increased significantly as a direct result.",
//     link: "https://covid19test.sananto.com",
//     comments: 1,
//   },
//   {
//     title: "Retail Group, Mumbai",
//     content:
//       "Sales accelerated dramatically, but operational chaos didn't follow. Our management team regained strategic control while driving growth.",
//     link: "#",
//     comments: 12,
//   },
//   {
//     title: "Paper Enterprise, Ahmedabad",
//     content:
//       "Executive stress decreased while performance metrics improved across all divisions. This represents what real consulting impact looks like.",
//     link: "#",
//     comments: 7,
//   },
// ];
const cardData = [
  {
    title: "Home Textile packaging line",
    content:
      "₹43 lakh annual overtime eliminated; OTIF 82% to 97%.",
    link: "https://covid19test.sananto.com",
    comments: 25,
  },
  {
    title: "Home Textile diagnostic",
    content:
      "approximately ₹145 lakh of avoidable losses identified and prioritized.",
    link: "https://covid19test.sananto.com",
    comments: 1,
  },
  {
    title: "Fabric intelligence case",
    content:
      "Integrated consumption, marker and roll planning. Use only internally validated saving figures in the card.",
    link: "#",
    comments: 12,
  },
  {
    title: "Digital sewing-floor / productivity transformation",
    content:
      " use only figures that can be substantiated.",
    link: "#",
    comments: 7,
  },
];
const SocialFeed: NextPage = () => {
  // Step 2: Configure the settings for the slider
  const settings = {
    dots: false,
    infinite: true, // Set to false if you have few items
    speed: 500,
    slidesToShow: 2, // Show 2 cards on desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Hides default arrows for a cleaner look
    responsive: [
      {
        breakpoint: 1024, // At 1024px wide
        settings: {
          slidesToShow: 1, // Show 1 card
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-md:flex-col max-md:w-full flex items-center min-h-[300px] mt-40 mb-20 w-[80%] mx-auto overflow-hidden bg-gray-100 shadow-lg rounded-xl">
      {/* --- Left Fixed Panel (No changes here) --- */}
      <aside className="flex justify-center w-1/3 max-md:w-full  p-8 text-white bg-[#00548f]">
        <div className="flex flex-col items-center justify-center h-full text-center">
          <div className="relative flex items-center justify-center h-32 bg-white border-4 border-red-400 rounded-full w-34">
            <div className="relative h-[48%] w-[60%] mx-auto max-md:w-full">
              <Image
                alt="madasky"
                fill
                src="/assets/images/newLogo2.jpg"
                className=""
              ></Image>
            </div>
          </div>
          <h2 className="mt-6 text-2xl font-bold text-center">
            Factory Transformation Stories
          </h2>

          <a
            rel="noopener noreferrer"
            href="/contact-us"
            target=""
          >
            <button className="px-10 py-3 mt-8 font-semibold text-red-600 transition-colors bg-white rounded-md hover:bg-gray-200">
              CONNECT WITH US
            </button>
          </a>
        </div>
      </aside>

      <main className="flex-1 w-full h-[80%] p-8 overflow-hidden ">
        <Slider {...settings}>
          {cardData.map((card, index) => (
            <div key={index} className="h-full px-3">
              <div className="flex flex-col justify-between h-[200px] p-6 bg-white rounded-lg shadow-md">
                <div>
                  <div className="flex items-center text-xl font-semibold text-gray-900">
                    <span>{card.title}</span>
                  </div>
                  <p className="mt-4  text-gray-700 ">{card.content}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </main>
    </div>
  );
};

export default SocialFeed;
