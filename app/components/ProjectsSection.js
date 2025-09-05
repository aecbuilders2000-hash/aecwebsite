"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NUM_PAGES = 5;

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const section = sectionRef.current;
    if (!container || !section) return;

    gsap.set(container, { x: 0 });

    const totalWidth = container.scrollWidth - window.innerWidth;


    const st = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: () => `+=${totalWidth}`,
      pin: true,
      scrub: 1,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      scroller: document.body,
    });

    gsap.to(container, {
      x: () => `-${totalWidth}`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${totalWidth}`,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        scroller: document.body,
      },
    });

    return () => {
      st.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gray-2 text-gray-9 overflow-hidden flex items-center justify-start border-t border-b border-gray-4"
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <div
        ref={containerRef}
        className="flex"
        style={{
          height: "100vh",
          width: `${NUM_PAGES * 100}vw`,
          willChange: "transform",
        }}
      >
        {Array.from({ length: NUM_PAGES }).map((_, i) => (
          <div
            key={i}
            className={`flex items-center justify-center text-5xl font-bold text-gray-9 border-r-2 border-gray-4 ${
              i % 2 === 0 ? "bg-gray-1" : "bg-gray-3"
            } ${i === 0 ? "border-l-2" : ""}`}
            style={{
              minWidth: "100vw",
              height: "100vh",
            }}
          >
            Project {i + 1}
          </div>
        ))}
      </div>
    </section>
  );
}
