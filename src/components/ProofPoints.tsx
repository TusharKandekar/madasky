"use client";
import Image from "next/image";
import Button from "@/components/Button";

export default function ProofPoints() {
  return (
    <section className="relative bg-white">
      <h2 className="hidden mt-20 text-4xl font-bold leading-tight text-gray-900 max-md:block font-baskervville max-xl:text-4xl max-lg:text-center">
        Proof Points: Real Impact, Fast
      </h2>
      <div className="relative flex items-center justify-between px-6 py-20 mx-auto overflow-hidden max-w-7xl max-md:p-8 max-md:mb-10 max-lg:flex-col max-lg:gap-12">
        {/* Left Content */}

        <div className="flex relative justify-end w-[40%] h-[24rem] max-md:h-[16rem] max-lg:w-full">
          <Image
            src="/assets/images/proof-points2.png"
            alt="Performance Chart"
            fill
            className="z-0 object-cover w-full h-full max-md:rounded-2xl"
          />

           <div className="absolute -bottom-50 left-5 w-[50%] h-[150px]">
            <Image src="/assets/images/shape-3.png" alt="madasky" fill className="object-cover"></Image>

          </div>




          {/* <div className="absolute z-0 bg-[#152869] h-[80%] w-[80%] top-10 -left-70"></div> */}
        </div>

        {/* Right Image Section */}
        <div className="relative z-10 w-1/2 max-lg:w-full max-md:flex max-md:flex-col max-md:items-center">
          <h2 className="mb-10 text-4xl font-bold leading-tight text-gray-900 max-md:mb-20 font-baskervville max-xl:text-4xl max-md:hidden max-lg:text-center">
            Proof Points: Real Impact, Fast
          </h2>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-6 mb-10 text-center max-md:grid-cols-1 max-lg:grid-cols-2">
            {/* Metric 1 */}
            <div>
              <h3 className="mb-2 text-3xl font-bold text-gray-900">₹3‑5Cr</h3>
              <p className="mb-1 text-xl font-semibold text-gray-800">
                Cash Freed
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Released in working capital within 30‑45 days across
                manufacturing, pharma, and retail sectors
              </p>
            </div>

            {/* Metric 2 */}
            <div>
              <h3 className="mb-2 text-3xl font-bold text-gray-900">20‑25%</h3>
              <p className="mb-1 text-xl font-semibold text-gray-800">
                Lead‑Time Reduction
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Operational efficiency gains achieved within six weeks without
                heavy capital investment
              </p>
            </div>

            {/* Metric 3 */}
            <div>
              <h3 className="mb-2 text-3xl font-bold text-gray-900">20%+</h3>
              <p className="mb-1 text-xl font-semibold text-gray-800">
                Pipeline Growth
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Revenue acceleration with zero new headcount additions through
                strategic alignment
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="max-w-2xl mb-8 text-lg leading-relaxed text-gray-600 max-md:w-full max-md:text-justify">
            These aren’t theoretical projections or consulting promises. They’re
            verified results delivered for companies across manufacturing,
            pharmaceutical, export, and retail sectors operating at scale.
          </p>


          <div className="absolute -top-30 -right-5 rotate-90 w-[150px] h-[200px]">
            <Image src="/assets/images/shape-2.png" alt="madasky" fill className=""></Image>

          </div>

         

          <Button text={"Book Your Session"} />
        </div>
      </div>


    </section>
  );
}
