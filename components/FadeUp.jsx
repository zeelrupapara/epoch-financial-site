"use client";
import { useEffect, useRef, useState } from "react";

export default function FadeUp({ children, delay = 0, className = "", as: Tag = "div" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Reset on every mount (fires fresh on each page navigation)
    setVisible(false);
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.unobserve(el);
        }
      },
      // threshold 0: reveal as soon as any part of the element enters the
      // viewport. A ratio threshold (formerly 0.12) can never be satisfied by
      // elements much taller than the viewport (e.g. long article bodies),
      // which left them permanently invisible.
      { threshold: 0, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <Tag ref={ref} className={`fade-up${visible ? " in-view" : ""} ${className}`}>
      {children}
    </Tag>
  );
}
