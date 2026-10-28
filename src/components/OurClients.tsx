"use client";
import Image from "next/image";

export default function OurClient() {
  const imagePaths = Array.from(
    { length: 28 },
    (_, i) => `/assets/images/clientLogos/${i + 1}.png`
  );

  return (
    <section className="bg-white py-5 sm:py-6" aria-label="Client logos">
      <h2 className="mx-auto mb-1 sm:mb-2 max-w-7xl px-6 text-center font-baskervville text-3xl font-bold leading-tight text-[#0E2C53] sm:px-8 sm:text-4xl">
        Trusted Across Manufacturing and Industry
      </h2>

      {/*
        Preserve the original 35vh logo sizing. Only crop the unused vertical
        space around the logo strip, keeping the heading and next section close.
        Apply vertical centering on the wrapper, not on the animated slide,
        so the slide animation's transform remains untouched.
      */}
      <div className="relative h-[155px] overflow-hidden sm:h-[180px]">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
          <div className="relative flex items-center justify-center">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-70 bg-gradient-to-l from-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-70 bg-gradient-to-r from-transparent" />
            <div className="flex w-full animate-slide space-x-4">
              {imagePaths.map((src, index) => (
                <Image
                  key={`logo-${index}`}
                  src={src}
                  alt={`Client Logo ${index + 1}`}
                  className="h-[35vh] min-w-[250px] object-contain"
                  width={800}
                  height={400}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
