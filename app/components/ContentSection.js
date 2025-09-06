"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContentSection() {
  const contentRef = useRef(null);
  const topRectRef = useRef(null);
  const bottomRectRef = useRef(null);
  const topTextRef = useRef(null);
  const bottomTextRef = useRef(null);

  useEffect(() => {
    if (
      contentRef.current &&
      topRectRef.current &&
      bottomRectRef.current &&
      topTextRef.current &&
      bottomTextRef.current
    ) {
      // Increase pin duration for smoother scrub effect
      const pinDuration =
        (topRectRef.current.offsetHeight || window.innerHeight * 0.5) * 2;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top top",
          end: "+=" + pinDuration,
          pin: true,
          pinSpacing: false,
          scrub: true,
        },
      });
      tl.to(topTextRef.current, { opacity: 1, y: 0, ease: "power2.out" }, 0)
        .to(bottomTextRef.current, { opacity: 1, y: 0, ease: "power2.out" }, 0)
        .to(topRectRef.current, { y: "-100%", ease: "power4.inOut" }, 0.3)
        .to(bottomRectRef.current, { y: "100%", ease: "power4.inOut" }, 0.3);
    }
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <section
      ref={contentRef}
      className="relative overflow-hidden border-t border-b border-gray-3"
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "var(--gray-1)",
        color: "var(--gray-9)",
        zIndex: 10,
      }}
    >
      {/* Top Rectangle */}
      <div
        ref={topRectRef}
        className="absolute top-0 left-0 flex items-end justify-center overflow-hidden z-20"
        style={{
          width: "100vw",
          height: "50vh",
          background: "var(--gray-8)",
        }}
      >
        <span
          ref={topTextRef}
          className="text-3xl font-bold text-white opacity-0"
          style={{
            transform: "translateY(40px)",
            marginBottom: "32px",
          }}
        >
          Top Reveal Text
        </span>
      </div>
      {/* Bottom Rectangle */}
      <div
        ref={bottomRectRef}
        className="absolute left-0 bottom-0 flex items-start justify-center overflow-hidden z-20"
        style={{
          width: "100vw",
          height: "50vh",
          background: "var(--gray-7)",
        }}
      >
        <span
          ref={bottomTextRef}
          className="text-3xl font-bold text-white opacity-0"
          style={{
            transform: "translateY(-40px)",
            marginTop: "32px",
          }}
        >
          Bottom Reveal Text
        </span>
      </div>
      {/* Main Content (centered) */}
      <div
        className="flex items-center justify-center z-10"
        style={{
          minHeight: "100vh",
        }}
      >
        <h2 className="text-4xl font-bold">
          Content Section
        </h2>
      </div>
    </section>
  );
}
