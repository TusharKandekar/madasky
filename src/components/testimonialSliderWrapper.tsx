// components/BlogSliderWrapper.tsx
'use client'

import dynamic from 'next/dynamic';
import type { Testimonial } from '@/common/types'; // make sure you have a Blog type

const TestimonialSlider = dynamic(() => import('./Testimonial'), {
  ssr: false,
});

export default function testimonialSliderWrapper({ testimonials }: { testimonials: Testimonial[] }) {
  return <TestimonialSlider testimonialData={testimonials} />
  ;
}
