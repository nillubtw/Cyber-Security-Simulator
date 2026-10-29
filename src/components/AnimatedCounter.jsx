import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

export const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  const formatted =
    end >= 1000 ? `${(count / 1000).toFixed(count >= 10000 ? 0 : 1)}K` : count;

  return (
    <span ref={ref}>
      {end >= 1000 ? formatted : count.toLocaleString()}
      {suffix}
    </span>
  );
};
