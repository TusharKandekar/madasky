import Image from "next/image";
import BaseUrl from "@/components/BaseUrl";

type HomepageExperienceProps = { image: string; altText?: string };

// Homepage Block 11: retain the existing founder image without publishing
// unverified numeric counters. Text is exactly as supplied by the Word handoff.
export default function HomepageExperience({ image, altText }: HomepageExperienceProps) {
  return (
    <section className="bg-[#f8fafc] py-16 md:py-20" aria-labelledby="homepage-experience-heading">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-2 md:gap-14 lg:px-8">
        <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:min-h-[420px]">
          <Image
            src={`${BaseUrl().imgurl}${image}`}
            alt={altText || "Madasky Consulting manufacturing experience"}
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
            className="object-contain"
          />
        </div>
        <div>
          <h2 id="homepage-experience-heading" className="font-baskervville text-3xl font-bold leading-tight text-[#102e55] md:text-4xl">
            Experience That Connects Strategy to the Factory Floor
          </h2>
          <p className="mt-7 text-lg leading-relaxed text-slate-700">
            Madasky brings decades of manufacturing experience across Home Textiles, Apparel and industrial operations. Our work combines factory setup, operations improvement, project execution and practical adoption of digital manufacturing.
          </p>
        </div>
      </div>
    </section>
  );
}
