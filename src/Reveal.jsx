// src/components/Reveal.jsx
import React, { useEffect, useRef } from "react";

const Reveal = ({ children, className = "", as: Tag = "div", ...rest }) => {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("visible");
          // animate only once; remove this line if you want it to repeat
          observer.unobserve(node);
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${className}`} {...rest}>
      {children}
    </Tag>
  );
};

export default Reveal;
