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
      onUpdate: self => {
        // nothing needed here, gsap.to handles it
      },
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
      style={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        position: "relative",
        background: "var(--gray-2)",
        color: "var(--gray-9)",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        borderTop: "1px solid var(--gray-4)",
        borderBottom: "1px solid var(--gray-4)",
      }}
    >
      <div
        ref={containerRef}
        style={{
          display: "flex",
          height: "100vh",
          width: `${NUM_PAGES * 100}vw`,
          willChange: "transform",
        }}
      >
        {Array.from({ length: NUM_PAGES }).map((_, i) => (
          <div
            key={i}
            style={{
              minWidth: "100vw",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 48,
              fontWeight: 700,
              background: i % 2 === 0 ? "var(--gray-1)" : "var(--gray-3)",
              color: "var(--gray-9)",
              borderRight: "2px solid var(--gray-4)",
              borderLeft: i === 0 ? "2px solid var(--gray-4)" : undefined,
            }}
          >
            Project {i + 1}
          </div>
        ))}
      </div>
    </section>
  );
}
