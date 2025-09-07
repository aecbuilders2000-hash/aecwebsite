"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

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

    // Calculate total width including the intro section + all project pages
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
          width: `${(NUM_PAGES + 2) * 100 + 100}vw`, // +1 for intro (150vw), +1 for contact form, +50vw for intro extra width
          willChange: "transform",
        }}
      >
        {/* Intro Section - "Our Projects" */}
        <div
          className="relative bg-gray-2 border-r-2 border-gray-4 flex"
          style={{
            minWidth: "150vw",
            height: "100vh",
          }}
        >
          {/* Left Side - Image and Our Projects */}
          <div className="relative w-[50vw] min-w-[300px] flex flex-col justify-center px-8">
            {/* Image */}
            <div className="relative h-[40vh] w-full max-w-[35vw] mb-6">
              <Image
                src="/ModernVilla.png"
                alt="Modern Villa"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            {/* Text */}
            <div className="mb-6">
              <h2
                className="font-bruno-ace-sc text-black font-bold tracking-widest leading-tight"
                style={{
                  fontFamily: "var(--font-bruno-ace-sc), sans-serif",
                  fontSize: "clamp(1.28rem, 2.7vw, 3rem)",
                  letterSpacing: "0.3em",
                }}
              >
                OUR <br /> PROJECTS
              </h2>
            </div>

            {/* Button */}
            <div className="flex justify-end max-w-[35vw]">
              <button className="flex items-center justify-center cursor-pointer bg-transparent font-geist-sans group">
                <div className="bg-black rounded-full flex items-center justify-center w-12 h-12 transition-colors duration-300 ease-in-out">
                  <svg
                    className="stroke-white transform transition-transform duration-300 ease-in-out rotate-0 group-hover:-rotate-45"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M13 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            </div>
            {/* Vertical Text + Line - Right Edge */}
            <div className="absolute top-0 right-0 h-full flex items-start">
              {/* Text Block */}
              <div className="flex flex-col gap-8 pr-4 items-end justify-between h-full py-8">
                <span
                  className="font-bruno-ace-sc text-black font-bold tracking-widest leading-tight"
                  style={{
                    fontFamily: "var(--font-bruno-ace-sc), sans-serif",
                    fontSize: "clamp(1rem, 2vw, 1.5rem)",
                    letterSpacing: "0.3em",
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                  }}
                >
                  COLLECTIVE
                </span>
                {["Automation", "Commercial"].map((item, index) => (
                  <span
                    key={index}
                    className="text-sm"
                    style={{
                      letterSpacing: "0.3em",
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Vertical Line */}
              <div className="w-[2px] bg-gray-500 h-full"></div>
            </div>
          </div>

          {/* Right Side - Large Text */}
          <div className="relative w-[100vw] flex items-center justify-center">
            <div
              className="font-bruno-ace-sc text-black font-bold text-right tracking-widest leading-tight"
              style={{
                fontFamily: "var(--font-bruno-ace-sc), sans-serif",
                fontSize: "clamp(2rem, 7vw, 5rem)",
                letterSpacing: "0.3em",
              }}
            >
              WE <br /> ARE
              <br /> COLLECTIVE
            </div>
          </div>

        </div>

        {/* Project Pages */}
        {Array.from({ length: NUM_PAGES }).map((_, i) => (
          <div
            key={i}
            className={`flex items-center justify-center text-5xl font-bold text-gray-9 border-r-2 border-gray-4 ${i % 2 === 0 ? "bg-gray-1" : "bg-gray-3"
              }`}
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