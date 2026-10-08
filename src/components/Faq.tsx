"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  questions: FAQItem[];
}

export default function FAQ({ questions }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-5xl px-6 mx-auto">

        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-[#0E2C53] font-baskervville max-md:text-3xl">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {questions.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="overflow-hidden border border-gray-200 rounded-sm"
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="flex items-center justify-between w-full gap-6 px-6 py-5 text-left transition-colors duration-300 hover:bg-gray-50"
                >
                  <span className="text-lg font-semibold text-[#0E2C53]">
                    {item.question}
                  </span>

                  <span className="flex-shrink-0 text-xl text-[#D72B0D]">
                    {isOpen ? <FiMinus /> : <FiPlus />}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-base leading-relaxed text-gray-600">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}