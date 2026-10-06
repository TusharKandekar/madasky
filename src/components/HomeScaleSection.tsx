"use client";
import Image from "next/image";
import Button from "@/components/Button";

export default function HomeScaleSection() {
  return (
    <section className="relative h-auto bg-[#f5f5f6] py-12 overflow-hidden">
      {/* <h2 className="hidden w-full text-3xl font-bold font-baskervville max-md:block max-md:text-center">
        Scale Without Losing Control
      </h2> */}
      <div className="flex flex-row items-center justify-between gap-12 px-8 py-16 mx-auto max-w-7xl max-md:flex-col max-md:gap-6">
        {/* Left Image Section */}
        <div className="w-1/2 max-lg:w-[45%] max-md:w-full relative">
          <Image
            src="/assets/images/scaling.png"
            alt="Business Meeting"
            width={600}
            height={450}
            className="object-cover w-[80%] ml-auto  h-[24rem] max-md:h-[18rem] rounded-lg max-md:ml-0 max-md:w-full"
          />



        </div>

        {/* Right Content Section */}
        <div className="w-1/2 pl-4 max-lg:w-[55%] max-md:w-full max-md:pl-0 max-md:mt-0 max-md:flex max-md:flex-col max-md:items-center">
          <h2 className="w-full text-4xl font-bold max-md:text-3xl font-baskervville max-md:block max-md:text-center">
            Scale Without Losing Control
          </h2>

          <p className="max-w-xl mt-6 mb-5 text-lg leading-relaxed text-gray-600 max-md:mt-10 max-md:text-justify max-lg:text-base max-md:text-lg">
            Mid- and large-scale companies face a unique challenge: as you grow,
            small inefficiencies magnify exponentially. Cash gets locked in
            systems. Delivery cycles lag behind market demands. Leadership
            becomes reactive instead of strategic.
          </p>

          <p className="max-w-xl mb-8 text-lg leading-relaxed text-gray-600 max-md:text-justify max-lg:text-base max-md:text-lg">
            We partner with companies like yours to unlock working capital,
            optimize operations, and synchronize sales with
            execution-transforming growth from chaotic to predictable, scalable,
            and manageable.
          </p>

          {/* <button className="inline-block px-6 py-3 text-base font-semibold text-white transition-all duration-300 bg-[#e63410] rounded-md hover:bg-[#e63410]/90 max-md:text-sm">
                        Schedule Expert Call
                    </button> */}

          <Button text={"Schedule Expert Call"} />
        </div>
      </div>



      <div className="absolute bottom-0 w-[260px] h-[80%] left-0">
        <Image
          src="/assets/images/what-we-solve-man.png"
          alt="Business Meeting"
          fill
          className="w-full h-full rounded-lg opacity-30">
        </Image>
      </div>


      {/* <div className="absolute z-0 -top-20 -right-40 opacity-30 h-[300px] w-[330px]">
        <Image
          src="/assets/images/shape-6.png"
          alt="madasky"
          fill
          className="object-cover rounded-sm max-md:rounded-2xl"
        />
      </div> */}
    </section>
  );
}
