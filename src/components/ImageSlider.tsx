import Slider from "react-slick";
import Imagetemplate from "./Imagetemplate"; // Make sure to import your Card component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Imagetemplate1 from "./Imagetemplate1";
import { Gallery } from "@/common/types";
import BaseUrl from "@/components/BaseUrl";

interface SlidingGalleryProps {
  gallery: Gallery[];
}

function PauseOnHover({ galleryData }: { galleryData: SlidingGalleryProps }) {
  const { gallery } = galleryData;

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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full py-[10vh] max-md:py-[5vh]">
      <div className="flex w-full flex-col items-center justify-center pb-[10vh] max-md:pb-[1vh]">
        <h2 className="py-3 text-5xl font-bold text-center width-full max-md:text-4xl">
          Image Gallery
        </h2>
        <div
          className="w-[20%] h-[3px] bg-blue-300"
          style={{
            background: "linear-gradient(to right, #05528a 50%, #d02c22 50%)",
          }}
        ></div>
        <p className="text-center text-gray-500 py-4 w-[40%] max-md:w-full text-lg max-md:text-justify">
          Explore the latest updates, trends, and news with our curated
          selection of insightful blogs and articles, keeping you informed
          daily.
        </p>
      </div>
      {gallery.length < 2 ? (
        <div className="flex justify-center gap-20 max-md:flex-col">
          {gallery.map((g, index) => (
            <Imagetemplate1
              key={index}
              image={g.gallery_image}
              altText={g.gallery_img_alt}
            />
          ))}
        </div>
      ) : (
        <div className="px-8 overflow-hidden ">
          <Slider {...settings}>
            {gallery.map((g, index) => (
              <Imagetemplate
                key={index}
                image={g.gallery_image}
                altText={g.gallery_img_alt}
              />
            ))}

            {/* Add more Card components as needed */}
          </Slider>
        </div>
      )}

      {/* < Slider {...settings}>
{
  imagesWithAlt.map((g, index) => (
    <Imagetemplate
      key={index}
      image={g.blogImage ? `${getBaseURL()}/uploads/${g.blogImage}` : "/assets/images/default_image.png"}
      altText={g.alt}
    />
  ))
}

{/* Add more Card components as needed */}
      {/* </Slider> */}
    </div>
  );
}

export default PauseOnHover;
