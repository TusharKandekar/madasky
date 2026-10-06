"use client";
import { useState, useEffect } from 'react';
interface UseCountUpProps {
  end: number;
  duration?: number;
  start?: boolean;
}
const useCountUp = ({ end, duration = 2000, start = false }: UseCountUpProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTimestamp: number | null = null;
    const step = (timestamp:number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration, start]);

  return count;
};

export default useCountUp;
