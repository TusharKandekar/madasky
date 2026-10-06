import HelpYou from "@/components/HelpYou";
import Footer from "@/components/Footer";
import AboutNavbar from "@/components/Header/AboutNavbar";
import { getBlogById } from "@/common/api";
import BaseUrl from "@/components/BaseUrl";
import { Metadata } from "next";
import Image from "next/image";
import EventClientReload from "@/components/EventClientReload";

export const runtime = "nodejs";

// Type definition for dynamic route parameters
// type Params = {
//   params: {
//     id: string;
//   };
// };

type Params = Promise<{ id: string }>;

// Generate page metadata (SEO)
export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { id } = await params;

  const decodedId = decodeURIComponent(id);
  console.log("Deco:", decodedId);
  const event = await getBlogById([decodedId, "title", "events"]);

  return {
    title: event.event_title,
    description: event.event_desc,
    keywords: `${event.event_img_alt || "Madasky, Consulting"}`,
    authors: { name: "Madasky", url: "https://madasky.com" },
    alternates: {
      canonical: `${BaseUrl().mainurl}event-details/${decodedId}`,
    },
    icons: { icon: "/hai.svg" },
  };
}

// Server component
export default async function ViewEvent({ params }: { params: Params }) {
  const { id } = await params;

  const decodedId = decodeURIComponent(id);
  const response = await getBlogById([decodedId, "title", "events"]);

  return (
    <>
      <EventClientReload />
      <AboutNavbar />

      {/* Banner Image */}
      <div className="w-full h-[80vh] max-md:h-[50vh] max-md:mt-10 relative">
        <Image
          src={`${BaseUrl().baseurl}/${response.event_image}`}
          alt="Event Image"
          fill
          className="object-fill max-md:object-cover"
        />
      </div>

      {/* Event Content */}
      <div className="relative flex flex-col items-center justify-center mb-8 overflow-hidden h-fit">
        <div className="w-[90%] flex flex-col items-center justify-center py-[8vh] max-md:py-6">
          <h2 className="text-5xl font-thin max-md:text-4xl">
            {response?.event_title}
          </h2>
          <p className="text-xl text-gray-400 text-center py-7 w-[70%] max-md:w-full max-md:text-justify">
            {response?.event_desc}
          </p>

          {/* Desktop Layout */}
          <div className="flex items-center justify-between w-[70%] max-md:w-full max-md:hidden">
            <div className="flex items-center justify-center">
              <i className="text-xl text-gray-500 fa-regular fa-clock"></i>
              &emsp; <span>{response?.event_time}</span>
            </div>
            <div className="bg-gray-300 h-[17px] w-[2px]"></div>
            <div className="flex items-center justify-center">
              <i className="text-gray-500 fa-solid fa-calendar-days"></i>
              &emsp; <span>{response?.event_date}</span>
            </div>
            <div className="bg-gray-300 h-[17px] w-[2px]"></div>
            <div className="flex items-center justify-center">
              <i className="text-gray-500 fa-solid fa-location-dot"></i>
              &emsp; <span>{response?.event_location}</span>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="hidden flex-col w-[70%] max-md:w-full max-md:flex">
            <div className="flex items-center justify-between w-[80%]">
              <div className="flex items-center justify-center">
                <i className="text-xl text-gray-500 fa-regular fa-clock"></i>
                &emsp; <span>{response?.event_time}</span>
              </div>
              <div className="bg-gray-300 h-[17px] w-[2px]"></div>
              <div className="flex items-center justify-center">
                <i className="text-gray-500 fa-solid fa-calendar-days"></i>
                &emsp; <span>{response?.event_date}</span>
              </div>
            </div>
            <div className="bg-gray-200 h-[2px] w-[50%] my-6"></div>
            <div className="flex items-center justify-center">
              <i className="text-gray-500 fa-solid fa-location-dot"></i>
              &emsp; <span>{response?.event_location}</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="w-[40%] h-[2px]"
          style={{
            background: "linear-gradient(to right, #05528a 50%, #d02c22 50%)",
          }}
        ></div>

        {/* HTML content */}
        <div
          className="w-[70%] flex flex-col items-center justify-center py-[8vh] prose max-md:w-[90%]"
          dangerouslySetInnerHTML={{ __html: response?.event_content }}
        />

        {/* Registration Button */}
        {response?.event_register_link && (
          <a
            href={response.event_register_link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-lg bg-[#01528d] py-3 px-10 rounded-full mt-4 hover:bg-[#152869]"
          >
            Register Now
          </a>
        )}
      </div>

      <HelpYou />
      <Footer />
    </>
  );
}

// **************************************************

// import AboutNavbar from "@/components/Header/AboutNavbar";
// import HelpYou from "@/components/HelpYou";
// import Footer from "@/components/Footer";
// import BaseUrl from "@/components/BaseUrl";
// import Link from "next/link";
// import {
//   getBlogById,
//   decodeSpaces,
//   getAllBlogs,
//   decodeAllCharacters,
// } from "@/common/api";
// import Image from "next/image";
// import { Blog } from "@/common/types";
// import { Metadata } from "next";

// export const runtime = "nodejs";
// type Params = Promise<{ id: string }>;

// export async function generateMetadata({
//   params,
// }: {
//   params: Params;
// }): Promise<Metadata> {
//   const { id } = await params;
// //   console.log("id", id)
//   const decodedId = decodeURIComponent(id);
// //  console.log("decodedId", decodedId);
//   const blog = await getBlogById([decodedId, "title", "blogs"]);
// //   console.log("Blog: ", blog);
//   return {
//     title: blog.event_title,
//     description: blog.event_desc,
//     keywords: `${blog.event_img_alt || 'Madasky, Consulting'}`,
//     authors: {
//       name: "Madasky",
//       url: "https://madasky.com",
//     },
//     alternates: {
//       canonical: `${BaseUrl().mainurl}show-blog/${decodedId}`,
//     },

//     icons: {
//       icon: "/hai.svg", // put your favicon in public folder
//     },
//   };
// }

// export default async function BlogContent({ params }: { params: Params }) {
//   const { id } = await params;
//   const decodedId = decodeURIComponent(id);

//   const response = await getBlogById([decodedId, "title", "events"]);
//   // const recentBlogs = await getAllBlogs({ pageName: "blogs" });
//   console.log("yele", response);
//   // console.log("data2", recentBlogs);

//   return (
//     <>
//       <AboutNavbar />
//       <div className="flex items-center justify-center w-full p-2 mt-10 max-md:p-0">
//         {/* left side  */}
//         <div className="w-[90%]  flex p-2 items-start justify-center gap-[4%] max-md:flex-col">
//           <div className="w-[70%] flex items-center flex-col justify-center max-md:w-full">
//             <div className="flex flex-col w-full gap-3 mt-6">
//               <h2 className="text-5xl font-semibold max-md:text-3xl">
//                 {response.event_title}
//               </h2>
//               {/* <p className="text-xl text-gray-500 max-md:text-justify">
//                 {response.event_desc}
//               </p> */}
//               <div className="w-full p-3 text-xl font-bold text-black bg-gray-100">
//                 {response.event_date}
//               </div>
//             </div>

//             <div className="flex flex-col w-full gap-10 mt-4">
//               <div className="w-full">
//                 {/* <img className='rounded-2xl h-[70vh] w-[86%] object-cover max-md:w-full max-md:h-auto' src={`${BaseURL()}/uploads/${image}`} alt="" /> */}

//                 <div className="relative w-full h-[70vh]">
//                   <Image
//                     fill
//                     src={`${BaseUrl().baseurl}/${response.event_image}`}
//                     alt=""
//                     className="object-cover rounded-2xl"
//                   />
//                 </div>
//               </div>
//               <div
//                 className="w-full prose max-w-none blogcontent"
//                 dangerouslySetInnerHTML={{ __html: response?.event_content }}
//               ></div>
//             </div>
//           </div>

//           {/* right side  */}
//           {/* <div className="w-full hidden h-[2px] bg-slate-200 max-md:flex"></div> */}
// {/*
//           <div className="w-[20%] items-start justify-start sticky top-0 max-md:w-full">
//             <div className="items-start justify-start w-full py-9">
//               <h2 className="font-bold">RECENT BLOGS</h2>
//               <div
//                 className="w-[15%] h-[3px] bg-blue-300 mt-4"
//                 style={{
//                   background:
//                     "linear-gradient(to right, #05528a 50%, #d02c22 50%)",
//                 }}
//               ></div>
//               <ul className="list-disc w-full py-[5vh]">
//                 {recentBlogs.data.map((blog: Blog, index: number) => (
//                   <li key={index} className="py-3">
//                     <Link
//                       href={`/show-blog/${blog.id}`}
//                       key={index}
//                       className="text-sm font-bold uppercase hover:text-[#e63410] text-black w-full py-4"
//                     >
//                       {blog.event_title}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div> */}
//         </div>
//       </div>

//       <HelpYou />
//       <Footer />
//     </>
//   );
// }
