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
      className="relative bg-gray-1 text-gray-9 overflow-hidden border-t border-b border-gray-3"
      style={{
        minHeight: "100vh",
        width: "100vw",
        zIndex: 10,
      }}
    >
      {/* Top Rectangle */}
      <div
        ref={topRectRef}
        className="absolute top-0 left-0 bg-gray-8 flex items-end justify-center overflow-hidden"
        style={{
          width: "100vw",
          height: "50vh",
          zIndex: 2,
        }}
      >
        <span
          ref={topTextRef}
          className="text-2xl font-bold text-white opacity-0 transition-all duration-300"
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
        className="absolute left-0 bottom-0 bg-gray-7 flex items-start justify-center overflow-hidden"
        style={{
          width: "100vw",
          height: "50vh",
          zIndex: 2,
        }}
      >
        <span
          ref={bottomTextRef}
          className="text-2xl font-bold text-white opacity-0 transition-all duration-300"
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
        className="flex items-center justify-center"
        style={{
          minHeight: "100vh",
          zIndex: 1,
        }}
      >
        <h2 className="text-4xl font-bold">
          Content Section
        </h2>
      </div>
    </section>
  );
}
