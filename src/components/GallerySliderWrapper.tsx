// components/BlogSliderWrapper.tsx
'use client'

import dynamic from 'next/dynamic';
import type { Gallery } from '@/common/types'; // make sure you have a Blog type

const GallerySlider = dynamic(() => import('./ImageSlider'), {
  ssr: false,
});

export default function GallerySliderWrapper({ gallery }: { gallery: Gallery[] }) {
  return <GallerySlider galleryData={{ gallery}} />
  ;
}
