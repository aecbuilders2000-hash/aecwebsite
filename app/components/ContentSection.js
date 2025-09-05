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
      style={{
        minHeight: "100vh",
        width: "100vw",
        position: "relative",
        background: "var(--gray-1)",
        color: "var(--gray-9)",
        zIndex: 10,
        overflow: "hidden",
        borderTop: "1px solid var(--gray-3)",
        borderBottom: "1px solid var(--gray-3)",
      }}
    >
      {/* Top Rectangle */}
      <div
        ref={topRectRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "50vh",
          background: "var(--gray-8)",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          overflow: "hidden",
          zIndex: 2,
        }}
      >
        <span
          ref={topTextRef}
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "var(--gray-0)",
            opacity: 0,
            transform: "translateY(40px)",
            transition: "opacity 0.3s, transform 0.3s",
            marginBottom: "32px",
          }}
        >
          Top Reveal Text
        </span>
      </div>
      {/* Bottom Rectangle */}
      <div
        ref={bottomRectRef}
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "100vw",
          height: "50vh",
          background: "var(--gray-7)",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          overflow: "hidden",
          zIndex: 2,
        }}
      >
        <span
          ref={bottomTextRef}
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "var(--gray-0)",
            opacity: 0,
            transform: "translateY(-40px)",
            transition: "opacity 0.3s, transform 0.3s",
            marginTop: "32px",
          }}
        >
          Bottom Reveal Text
        </span>
      </div>
      {/* Main Content (centered) */}
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
        }}
      >
        <h2 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
          Content Section
        </h2>
      </div>
    </section>
  );
}
