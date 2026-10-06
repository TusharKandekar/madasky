// components/BlogSliderWrapper.tsx
'use client'

import dynamic from 'next/dynamic';
import type { Blog } from '@/common/types'; // make sure you have a Blog type

const BlogSlider = dynamic(() => import('./SlidingBlogs'), {
  ssr: false,
});

export default function BlogSliderWrapper({ blogs }: { blogs: Blog[] }) {
  return <BlogSlider blogData={{ blogs }} />
  ;
}
