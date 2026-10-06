import AboutNavbar from "@/components/Header/AboutNavbar";
import HelpYou from "@/components/HelpYou";
import Footer from "@/components/Footer";
import BaseUrl from "@/components/BaseUrl";
import Link from "next/link";
import {
  getBlogById,
  decodeSpaces,
  getAllBlogs,
  decodeAllCharacters,
} from "@/common/api";
import Image from "next/image";
import { Blog } from "@/common/types";
import { Metadata } from "next";

export const runtime = "nodejs";
type Params = Promise<{ id: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { id } = await params;
//   console.log("id", id)
  const decodedId = decodeURIComponent(id);
//  console.log("decodedId", decodedId);
  const blog = await getBlogById([decodedId, "title", "blogs"]);
//   console.log("Blog: ", blog);
  return {
    title: blog.blog_title,
    description: blog.blog_desc,
    keywords: `${blog.blog_img_alt || 'Madasky, Consulting'}`,
    authors: {
      name: "Madasky",
      url: "https://madasky.com",
    },
    alternates: {
      canonical: `${BaseUrl().mainurl}show-blog/${decodedId}`,
    },

    icons: {
      icon: "/hai.svg", // put your favicon in public folder
    },
  };
}

export default async function BlogContent({ params }: { params: Params }) {
  const { id } = await params;
  const decodedId = decodeURIComponent(id);

  const response = await getBlogById([decodedId, "title", "blogs"]);
  const recentBlogs = await getAllBlogs({ pageName: "blogs" });
  console.log("yele", response);
  // console.log("data2", recentBlogs);

  return (
    <>
      <AboutNavbar />
      <div className="flex items-center justify-center w-full p-2 mt-10 max-md:p-0">
        {/* left side  */}
        <div className="w-[90%]  flex p-2 items-start justify-center gap-[4%] max-md:flex-col">
          <div className="w-[70%] flex items-center flex-col justify-center max-md:w-full">
            <div className="flex flex-col w-full gap-3 mt-6 max-md:mt-10">
              <h2 className="text-5xl font-semibold max-md:text-3xl">
                {response.blog_title}
              </h2>
              <p className="text-xl text-gray-500 max-md:text-justify">
                {response.blog_desc}
              </p>
              <div className="w-full p-3 text-xl font-bold text-black bg-gray-100">
                {response.blog_date}
              </div>
            </div>

            <div className="flex flex-col w-full gap-10 mt-4">
              <div className="w-full">
                {/* <img className='rounded-2xl h-[70vh] w-[86%] object-cover max-md:w-full max-md:h-auto' src={`${BaseURL()}/uploads/${image}`} alt="" /> */}

                <div className="relative w-full h-[70vh] max-md:h-[30vh]">
                  <Image
                    fill
                    src={`${BaseUrl().baseurl}/${response.blog_image}`}
                    alt=""
                    className="object-cover rounded-2xl"
                  />
                </div>
              </div>
              <div
                className="w-full prose max-w-none blogcontent"
                dangerouslySetInnerHTML={{ __html: response?.blog_content }}
              ></div>
            </div>
          </div>

          {/* right side  */}
          <div className="w-full hidden h-[2px] bg-slate-200 max-md:flex"></div>

          <div className="w-[20%] items-start justify-start sticky top-0 max-md:w-full">
            <div className="items-start justify-start w-full py-9">
              <h2 className="font-bold">RECENT BLOGS</h2>
              <div
                className="w-[15%] h-[3px] bg-blue-300 mt-4"
                style={{
                  background:
                    "linear-gradient(to right, #05528a 50%, #d02c22 50%)",
                }}
              ></div>
              <ul className="list-disc w-full py-[5vh]">
                {recentBlogs.data.map((blog: Blog, index: number) => (
                  <li key={index} className="py-3">
                    <Link
                      href={`/show-blog/${blog.id}`}
                      key={index}
                      className="text-sm font-bold uppercase hover:text-[#e63410] text-black w-full py-4"
                    >
                      {blog.blog_title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <HelpYou />
      <Footer />
    </>
  );
}
