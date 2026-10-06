// // components/FaqSection.tsx
'use client'

import { useState } from 'react';

type Faq = {
  question: string;
  answer: string;
};

type FaqListProps = {
  faqs: Faq[];
};

const faqs: Faq[] = [
  {
    question: 'What challenges do manufacturing companies face today?',
    answer: 'They face issues like misjudging market trends, poor investment strategies, and regulatory compliance risks.'
  },
  {
    question: 'How does Madasky Consulting support manufacturers?',
    answer: 'We provide business consulting and research-based insights to help make data-driven, strategic decisions.'
  },
  {
    question: 'What services do you offer for public market listing?',
    answer: 'We offer financial benchmarking, competitor analysis, and market sentiment research for a smooth listing process.'
  },
  {
    question: `What are the main challenges in India's manufacturing sector?`,
    answer: 'Key challenges include regulatory complexity, cost-quality balance, and supply chain bottlenecks.'
  },
  {
    question: 'How can Madasky help companies enter the Indian market?',
    answer: 'We provide market opportunity analysis, go-to-market customization, partnership support, and leadership workshops.'
  },
];

export default function FaqComponent({faqs}: FaqListProps) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(prev => (prev === index ? -1 : index));
  };

  return (
    <div className="px-4 py-12 mx-auto max-w-7xl">
      <h2 className="mb-4 text-4xl font-bold text-center text-gray-800">FAQ</h2>


      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="bg-gray-100 border rounded-lg hover:cursor-pointer">
              <button
                onClick={() => toggleFaq(index)}
                className="flex items-center justify-between w-full p-4 font-medium text-left"
              >
                <span className='text-xl font-semibold hover:cursor-pointer'>{faq.question}</span>
                <span className="text-xl">{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen && (
                <div className="px-4 pb-4 text-lg text-gray-900">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}


// ***********************************************************************


// components/FaqSection.tsx
// 'use client'

// import { useState } from 'react';
// import { FiChevronDown } from 'react-icons/fi';

// type Faq = {
//   question: string;
//   answer: string;
// };

// const faqs: Faq[] = [
//   {
//     question: "What's included in the quoted daily rate?",
//     answer: "Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum..."
//   },
//   {
//     question: "What is the rental's mileage plan?",
//     answer: "Answer. The rental includes a limited number of miles per day. Additional mileage is charged at a standard rate."
//   },
//   {
//     question: "What are your extra insurance options?",
//     answer: "Answer. You can opt for collision damage waiver, personal accident insurance, and roadside assistance."
//   },
//   {
//     question: "Do I need to return the rental with a full tank?",
//     answer: "Answer. Yes, rentals should be returned with a full tank to avoid refueling charges."
//   }
// ];

// export default function FaqComponent() {
//   const [openIndex, setOpenIndex] = useState(0);

//   const toggle = (index: number) => {
//     setOpenIndex(prev => (prev === index ? -1 : index));
//   };

//   return (
//     <div className="max-w-3xl px-4 py-16 mx-auto">
//       <h2 className="mb-12 text-6xl font-light text-center">FAQ</h2>

//       <div className="space-y-2">
//         {faqs.map((faq, index) => {
//           const isOpen = index === openIndex;
//           return (
//             <div key={index} className="bg-gray-100 border">
//               <button
//                 onClick={() => toggle(index)}
//                 className="flex items-center justify-between w-full px-6 py-4 font-semibold text-left"
//               >
//                 <span>{faq.question}</span>
//                 <FiChevronDown
//                   className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
//                 />
//               </button>

//               {isOpen && (
//                 <div className="px-6 pb-4 text-sm leading-relaxed text-gray-700">
//                   {faq.answer}
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
