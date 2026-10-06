// import { useEffect, useState } from "react";
// "use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeBlog from "./HomeBlog"; // Make sure to import your Card component

// import { useLocation } from 'react-router-dom';

import SmallHomeBlog from "./SmallHomeBlog";
import BaseUrl from "@/components/BaseUrl";
import axios from "axios";
import { getImageAltText, getWebBlogs, getDataByPageName, filterByWebImage, getImageData } from "@/common/api";
import { Blog } from "@/common/types";

// interface BlogCardsProps {
//     blog_img_alt: string;
//     blog_date: string;
//     blog_title: string;
//     blog_image: string;
//     blog_desc: string;
//     // link: string;
//     // url: string;
//     // index: number;
//     comments?: string;
//     blog_id: number;
// }

interface SlidingBlogsProps {
    blogs: Blog[];
}

function PauseOnHover({ blogData }: { blogData: SlidingBlogsProps }) {

    const { blogs } = blogData;

    // console.log("blogs", blogs);


    // let serverError = false;
    // let blogData;
    // try {
    //     blogData = await getDataByPageName(["Home", "blogs"]);

    //     console.log("blogData", blogData);

    // }
    // catch (error) {
    //     // console.error("Server Error:", error);
    //     serverError = true;
    // }

    // // console.log("Images", images);
    // if (serverError) {
    //     return <div>Server Error</div>
    // }



    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
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
                    dots: false
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
        <div className="w-full py-[10vh] max-md:py-[5vh]">
            <div className="flex w-full flex-col items-center justify-center pb-[10vh] max-md:pb-[1vh]">

                <h2 className='py-5 text-5xl font-bold text-center width-full max-md:text-4xl'>Latest Blogs & News</h2>
                <div className="w-[20%] h-[3px] bg-blue-300" style={{
                    background: 'linear-gradient(to right, #05528a 50%, #d02c22 50%)',

                }}></div>
                <p className='text-center text-gray-500 py-4 w-[40%] max-md:w-full text-lg max-md:text-justify'>Explore the latest updates, trends, and news with our curated selection of insightful blogs and articles, keeping you informed daily.</p>
            </div>
            {
                blogs.length > 0 ? (

                    blogs.length < 2 ? (
                        <div className="flex justify-center gap-20 max-md:flex-col">
                            {
                                blogs.map((blog: Blog, index: number) => (
                                    <SmallHomeBlog
                                        key={index}
                                        image={blog.blog_image}
                                        title={blog.blog_title || "Default Title"} // Replace with dynamic title or fallback
                                        description={blog.blog_desc || "Default Description"} // Replace with dynamic description or fallback
                                        date={(blog.blog_date)} // Replace with dynamic date or fallback
                                        comments={blog.comments || "0"} // Replace with dynamic comments count or fallback
                                        readMoreLink={`/show-blog/${blog.blog_title.replace(/ /g, '-')}` || "#"} // Replace with dynamic read more link or fallback
                                        altText={blog.blog_img_alt}
                                    />

                                ))
                            }
                        </div>
                    ) :
                        (
                            <div className="px-8 overflow-hidden ">
                                <Slider {...settings}>
                                    {
                                        blogs.map((blog, index: number) => (
                                            <HomeBlog
                                                key={index}
                                                image={blog.blog_image}
                                                title={blog.blog_title || "Default Title"} // Replace with dynamic title or fallback
                                                description={blog.blog_desc || "Default Description"} // Replace with dynamic description or fallback
                                                date={(blog.blog_date)} // Replace with dynamic date or fallback
                                                comments={blog.comments || "0"} // Replace with dynamic comments count or fallback
                                                // readMoreLink={`/show-blog/${blog.blog_id}` || "#"} // Replace with dynamic read more link or fallback
                                              
                                                // readMoreLink={`/show-blog/${blog.blog_title
                                                //     .replace(/[.:, ']/g, match => (match === "'" || match === "." || match === ";" || match === ',' || match === ':' ? '' : '-'))
                                                //     .toLowerCase()}` || "#"}

                                                readMoreLink={`/show-blog/${blog.blog_title
                                                    .replace(/[.:&%;,']/g, '') // Remove . : ; , '
                                                    .replace(/\s+/g, '-')     // Replace multiple spaces with a single hyphen
                                                    .toLowerCase()}` || "#"}
                                                  
                                                  

                                                altText={blog.blog_img_alt}
                                            />

                                        ))
                                    }
                                </Slider>
                            </div>
                        )
                ) : (
                    <p className="text-lg text-center text-gray-500">No blogs available at the moment.</p>
                )
            }
        </div>
    );
}

export default PauseOnHover;

// *********************************************************************


// 'use client';

// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import HomeBlog from "./HomeBlog";
// import SmallHomeBlog from "./SmallHomeBlog";
// import BaseUrl from "@/components/BaseUrl";
// import type { Blog } from "@/common/types";

// interface SlidingBlogsProps {
//   blogs: Blog[];
// }

// function PauseOnHover({ blogData }: { blogData: SlidingBlogsProps }) {
//   const { blogs } = blogData;

//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 3,
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
//     <div className="w-full py-[10vh] max-md:py-[5vh]">
//       <div className="flex w-full flex-col items-center justify-center pb-[10vh] max-md:pb-[1vh]">
//         <h2 className='py-5 text-5xl font-bold text-center max-md:text-4xl'>Latest Blogs & News</h2>
//         <div className="w-[20%] h-[3px]" style={{ background: 'linear-gradient(to right, #05528a 50%, #d02c22 50%)' }}></div>
//         <p className='text-center text-gray-500 py-4 w-[40%] max-md:w-full text-lg max-md:text-justify'>
//           Explore the latest updates, trends, and news with our curated selection of insightful blogs and articles, keeping you informed daily.
//         </p>
//       </div>

//       {blogs && blogs.length > 0 ? (
//         blogs.length < 2 ? (
//           <div className="flex justify-center gap-20 max-md:flex-col">
//             {blogs.map((blog, index) => (
//               <SmallHomeBlog
//                 key={index}
//                 image={blog.blog_image ? `${BaseUrl().baseurl}/${blog.blog_image}` : "/assets/images/default_image.png"}
//                 title={blog.blog_title || "Default Title"}
//                 description={blog.blog_desc || "Default Description"}
//                 date={blog.blog_date}
//                 comments={blog.comments || "0"}
//                 readMoreLink={`/show-blog/${blog.blog_id}` || "#"}
//                 altText={blog.blog_img_alt}
//               />
//             ))}
//           </div>
//         ) : (
//           <Slider {...settings}>
//             {blogs.map((blog, index) => (
//               <HomeBlog
//                 key={index}
//                 image={blog.blog_image ? `${BaseUrl().baseurl}/${blog.blog_image}` : "/assets/images/default_image.png"}
//                 title={blog.blog_title || "Default Title"}
//                 description={blog.blog_desc || "Default Description"}
//                 date={blog.blog_date}
//                 comments={blog.comments || "0"}
//                 readMoreLink={`/show-blog/${blog.blog_id}` || "#"}
//                 altText={blog.blog_img_alt}
//               />
//             ))}
//           </Slider>
//         )
//       ) : (
//         <p className="text-lg text-center text-gray-500">No blogs available at the moment.</p>
//       )}
//     </div>
//   );
// }

// export default PauseOnHover;
