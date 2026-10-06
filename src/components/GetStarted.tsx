"use client";
import React from "react";
// Make sure you have Lucide React installed: npm install lucide-react
import {
  CheckCircle2,
  Mail,
  MessageCircle, // Using MessageCircle as a generic chat icon (cleaner than brand logos sometimes) or keep FaWhatsapp
  ArrowRight,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"; // Keeping your requested WhatsApp icon

const ReadyToGetStarted = () => {
  const benefits = [
    "Practical insights based on real industry experience",
    "Reports that are simple to understand and act on",
    "No jargon, no complicated theories",
    "On-ground support, not just recommendations",
    "Trusted by MSMEs and large manufacturers",
    "Focus on real outcomes: revenue, cash, productivity, people",
  ];

  return (
    <section
      className="relative py-24 max-md:py-0 overflow-hidden font-sans bg-slate-50"
    >
      {/* Decorative background element */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full translate-x-20 -skew-x-12 pointer-events-none bg-blue-50/50"
      ></div>

      <div
        className="relative z-10 max-w-6xl mx-auto "
      >
        <div
          className="flex flex-col items-center lg:flex-row"
        >
          {/* --- Image Section (Left) --- */}
          <div
            className="relative z-0 w-full lg:w-1/2"
          >
            <div
              className="
                overflow-hidden
                rounded-2xl border border-slate-100
                shadow-2xl
                relative aspect-[4/5]
                lg:h-[500px] lg:aspect-auto max-md:h-[300px] max-md:w-full max-md:rounded-none
              "
            >
              {/* Overlay gradient for text readability if needed, though mostly for style here */}
              <div
                className="absolute inset-0 z-10 bg-gradient-to-t from-slate-900/40 to-transparent"
              ></div>

              <img
                src="/assets/images/getstarted.png"
                alt="Professional partnership in a modern factory setting"
                className="object-cover w-full h-full "
              />
            </div>
            {/* Decorative colored box behind image */}
            <div
              className="absolute hidden w-24 h-24 bg-[#152869] rounded-xl -bottom-6 -left-6 -z-10 lg:block"
            ></div>
          </div>

          {/* --- Content Card (Right - Overlapping) --- */}
          <div
            className="relative z-10 w-full lg:w-3/5"
          >
            <div
              className="p-8 rounded-2xl md:p-12"
            >
              {/* Header */}
              <div
                className="mb-6 "
              >
                <h2
                  className="mb-2 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-4xl"
                >
                  Ready to Get Started?
                </h2>
                <p
                  className="text-xl font-medium text-slate-500"
                >
                  Why Companies Choose Us
                </p>
              </div>

              {/* Benefits Grid */}
              <ul
                className="grid grid-cols-1 mb-10 gap-x-6 gap-y-2 md:grid-cols-2"
              >
                {benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 "
                  >
                    <CheckCircle2
                      strokeWidth={2.5}
                      className="flex-shrink-0 w-5 h-5 mt-1 text-blue-600 "
                    />
                    <span
                      className="
                        text-slate-600 text-[15px] leading-relaxed font-medium
                      "
                    >
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Call to Action Area */}
              <div
                className="pt-8 border-t border-slate-100"
              >
                <h3
                  className="mb-6 text-2xl font-bold text-slate-900 max-md:text-center" 
                >
                  Get the clarity you need to{" "}
                  <span
                    className="
                      text-[#152869]
                    "
                  >
                    drive real results.
                  </span>
                </h3>

                <div
                  className="flex flex-col gap-4 sm:flex-row"
                >
                  {/* Primary CTA - Email */}
                  <a
                    href="mailto:info@madasky.com"
                    className="
                      flex-1 inline-flex
                      px-6 py-4
                      text-base font-bold text-white
                      bg-[#152869]
                      rounded-xl
                      transition-all
                      items-center justify-center duration-200 hover:shadow-lg hover:-translate-y-0.5 group
                    "
                  >
                    <Mail
                      className="w-5 h-5 mr-3 transition-colors text-slate-100 group-hover:text-white"
                    />
                    <div
                      className="flex items-start leading-none "
                    >
                      <span>Email Us: info@madasky.com</span>
                    </div>
                  </a>

                  {/* Secondary CTA - WhatsApp */}
                  {/* <a
                    href="https://wa.me/918007370008" // Ideally use a real wa.me link
                    className="flex-1 inline-flex items-center justify-center px-6 py-4 text-base font-bold text-white transition-all duration-200 bg-[#25D366] rounded-xl hover:bg-[#20bd5a] hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <FaWhatsapp className="w-6 h-6 mr-3 text-white" />
                    <div className="flex flex-col items-start leading-none">
                      <span className="mb-1 text-xs font-medium text-green-100 uppercase">WhatsApp</span>
                      <span>+91 8007370008</span>
                    </div>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToGetStarted;
