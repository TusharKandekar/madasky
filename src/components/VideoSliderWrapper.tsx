// components/BlogSliderWrapper.tsx
'use client'

import dynamic from 'next/dynamic';
import type { Video } from '@/common/types'; // make sure you have a Blog type

const VideoSlider = dynamic(() => import('./VideoPlayer'), {
  ssr: false,
});

export default function BlogSliderWrapper({ videos }: { videos: Video[] }) {
  return <VideoSlider videoData={{ videos }} />;
}
