"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const services = [
  { title: "Service 1", color: "var(--gray-2)" },
  { title: "Service 2", color: "var(--gray-3)" },
  { title: "Service 3", color: "var(--gray-4)" },
  { title: "Service 4", color: "var(--gray-5)" },
  { title: "Service 5", color: "var(--gray-6)" },
];

export default function ServicesSection() {
  // Refs for all outer boxes and inner content wrappers
  const boxRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const contentRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const sectionRef = useRef(null);

  // Final heights for animation
  const row1Heights = ["54vh", "80vh", "44vh"];
  const row2Heights = ["48vh", "64vh"];

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    
    // Set initial transform based on screen size
    contentRefs.forEach((ref, index) => {
      if (ref.current) {
        if (isMobile) {
          // Horizontal curtain effect for mobile - alternating directions
          const slideDirection = index % 2 === 0 ? "-100%" : "100%";
          ref.current.style.transform = `translateX(${slideDirection})`;
        } else {
          // Vertical curtain effect for desktop
          ref.current.style.transform = "translateY(-100%)";
        }
      }
    });

    // Animate first row when section top reaches top
    const row1Trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top center",
      onEnter: () => {
        [0, 1, 2].forEach(i => {
          if (isMobile) {
            // Horizontal slide-in for mobile
            gsap.to(contentRefs[i].current, {
              x: "0%",
              duration: 1.1,
              ease: "expo.out",
            });
          } else {
            // Vertical drop for desktop
            gsap.to(contentRefs[i].current, {
              y: "0%",
              duration: 1.1,
              ease: "expo.out",
            });
          }
        });
      },
      once: true,
    });

    // Animate second row when section reaches center
    const row2Trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "center center",
      onEnter: () => {
        [0, 1].forEach(i => {
          if (isMobile) {
            // Horizontal slide-in for mobile
            gsap.to(contentRefs[i + 3].current, {
              x: "0%",
              duration: 1.1,
              ease: "expo.out",
            });
          } else {
            // Vertical drop for desktop
            gsap.to(contentRefs[i + 3].current, {
              y: "0%",
              duration: 1.1,
              ease: "expo.out",
            });
          }
        });
      },
      once: true,
    });

    return () => {
      row1Trigger.kill();
      row2Trigger.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        height: "200vh",
        width: "100vw",
        background: "var(--gray-0)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        paddingTop: "6vh",
        borderTop: "1px solid var(--gray-3)",
        borderBottom: "1px solid var(--gray-3)",
      }}
    >
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            height: 100vh !important;
            padding: 0 !important;
          }
          .desktop-layout {
            display: none !important;
          }
          .mobile-layout {
            display: flex !important;
            flex-direction: column;
            width: 100vw;
            height: 100vh;
          }
          .mobile-row {
            width: 100vw;
            height: 20vh; /* Equal heights: 100vh / 5 = 20vh each */
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
            border-bottom: 1px solid var(--gray-3);
          }
          .mobile-content {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            will-change: transform;
          }
        }
        @media (min-width: 769px) {
          .mobile-layout {
            display: none;
          }
        }
      `}</style>

      <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "3rem", color: "var(--gray-8)" }}>Our Services</h2>
      
      {/* Desktop Layout */}
      <div className="desktop-layout">
        {/* First row: 3 boxes */}
        <div
          style={{
            display: "flex",
            gap: "2vw",
            width: "100vw",
            justifyContent: "flex-start",
            marginBottom: "5vh",
            marginLeft: "4vw",
          }}
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              ref={boxRefs[i]}
              style={{
                width: ["20vw", "36vw", "32vw"][i],
                height: ["54vh", "80vh", "44vh"][i],
                background: "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
                border: "1px solid var(--gray-3)",
              }}
            >
              <div
                ref={contentRefs[i]}
                style={{
                  width: "100%",
                  height: "100%",
                  background: services[i].color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  willChange: "transform",
                }}
              >
                <span style={{ color: "var(--gray-9)", fontWeight: 700, fontSize: 28 }}>{services[i].title}</span>
              </div>
            </div>
          ))}
        </div>
        {/* Second row: 2 boxes */}
        <div
          style={{
            display: "flex",
            gap: "3vw",
            width: "100vw",
            justifyContent: "flex-end",
            marginRight: "12vw",
          }}
        >
          {[0, 1].map((i) => (
            <div
              key={i}
              ref={boxRefs[i + 3]}
              style={{
                width: ["36vw", "24vw"][i],
                height: ["48vh", "64vh"][i],
                background: "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
                border: "1px solid var(--gray-3)",
              }}
            >
              <div
                ref={contentRefs[i + 3]}
                style={{
                  width: "100%",
                  height: "100%",
                  background: services[i + 3].color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  willChange: "transform",
                }}
              >
                <span style={{ color: "var(--gray-9)", fontWeight: 700, fontSize: 28 }}>{services[i + 3].title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Layout - 5 full-width rows */}
      <div className="mobile-layout">
        {services.map((service, i) => (
          <div key={`mobile-${i}`} className="mobile-row" ref={boxRefs[i]}>
            <div
              ref={contentRefs[i]}
              className="mobile-content"
              style={{
                background: service.color,
              }}
            >
              <span style={{ color: "var(--gray-9)", fontWeight: 700, fontSize: 24 }}>{service.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
