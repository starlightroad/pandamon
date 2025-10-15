"use client";

import { MutableRefObject, useEffect, useRef, useState } from "react";

type ReturnValue = [MutableRefObject<null>, boolean];

export default function useObserver(
  options?: IntersectionObserverInit
): ReturnValue {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);

    if (containerRef.current) observer.observe(containerRef.current);

    const current = containerRef.current;

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [options]);

  return [containerRef, isVisible];
}
