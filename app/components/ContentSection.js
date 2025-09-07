"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { number: "10+", label: "Years of Experience" },
  { number: "5+", label: "Countries Served" },
  { number: "456+", label: "Successful Projects" },
  { number: "127+", label: "Happy Clients" },
];

export default function ContentSection() {
  const contentRef = useRef(null);
  const topRectRef = useRef(null);
  const bottomRectRef = useRef(null);
  const topTextRef = useRef(null);
  const bottomTextRef = useRef(null);

  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));

  // Function to animate stats with whole numbers only
  const animateStats = () => {
    stats.forEach((item, index) => {
      const targetNumber = parseInt(item.number);
      const statObject = { value: 0 };
      
      gsap.to(statObject, {
        value: targetNumber,
        duration: 1.5,
        ease: "power1.out",
        onUpdate: () => {
          setAnimatedStats(prev => {
            const newStats = [...prev];
            newStats[index] = Math.floor(statObject.value); // Use Math.floor to ensure whole numbers
            return newStats;
          });
        },
      });
    });
  };

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
      
      tl.to(topTextRef.current, { opacity: 1, x: 0, ease: "power2.out" }, 0)
        .to(bottomTextRef.current, { opacity: 1, x: 0, ease: "power2.out" }, 0)
        .to(topRectRef.current, { y: "-100%", ease: "power4.inOut" }, 0.3)
        .to(bottomRectRef.current, { y: "100%", ease: "power4.inOut" }, 0.3)
        .call(animateStats); // Start stats animation after rectangle animations complete
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
        background: "var(--gray-2)", // Using E9ECEF from your color palette
        color: "var(--gray-9)",
        zIndex: 10,
      }}
    >
      {/* Top Rectangle */}
      <div
        ref={topRectRef}
        className="absolute top-0 left-0 flex items-end overflow-hidden z-20 bg-gray-2"
        style={{
          width: "100vw",
          height: "50vh",
          // borderBottomWidth: "0.5vw",
          paddingLeft: "2.5vw", // 2.5% from left
          paddingBottom: "2.5vh", // 2.5vh from the split line
        }}
      >
        <span
          ref={topTextRef}
          className="font-bold text-left opacity-0 text-gray-7"
          style={{
            fontFamily: 'var(--font-bruno-ace-sc), sans-serif',
            fontSize: "clamp(1.7rem, 3.3vw, 3.3rem)",
            transform: "translateX(-40px)",
          }}
        >
          THE ARCHITECTS&apos;
        </span>
      </div>

      {/* Bottom Rectangle */}
      <div
        ref={bottomRectRef}
        className="absolute left-0 bottom-0 flex items-start overflow-hidden z-20 bg-gray-2"
        style={{
          width: "100vw",
          height: "50vh",
          // borderTopWidth: "0.5vw",
          paddingRight: "3.75vw", // 2.5vw + 1.25vw to align with navbar
          paddingTop: "2.5vh", // 2.5vh from the split line
          justifyContent: "flex-end", // Right align content
        }}
      >
        <span
          ref={bottomTextRef}
          className="font-bold text-right opacity-0 text-gray-7"
          style={{
            fontFamily: 'var(--font-bruno-ace-sc), sans-serif',
            fontSize: "clamp(1.7rem, 3.3vw, 3.3rem)",
            transform: "translateX(40px)",
          }}
        >
          EXTENDED STUDIO.
        </span>
      </div>
      {/* Main Content (centered) */}
      {/* Main Content Section */}
      <section
        className="w-full min-h-screen bg-white overflow-hidden flex flex-col box-border"
        style={{
          paddingTop: "5vh", // 5vh gap from navbar
          paddingLeft: "2.5vw", // 2.5% from left
          paddingRight: "2.5vw", // 2.5% from right
        }}
      >
        {/* Top Row - Left and Right Boxes */}
        <div
          className="flex absolute left-0 right-0 box-border m-0"
          style={{
            top: "12.5vh", // 12.5% from top of screen
            width: "100%",
            height: "60vh", // 60% height
            paddingLeft: "2.5vw", // Left padding instead of left margin
            paddingRight: "2.5vw", // Right padding instead of right margin
            gap: "clamp(1rem, 2.5vw, 2rem)", // Gap between left and right boxes
          }}
        >

          {/* We are Collective - Left side, stacked */}
          <div className="relative w-[50vw] h-full flex flex-col justify-center"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <span
              className="font-bruno-ace-sc text-black font-bold tracking-widest leading-tight"
              style={{
                fontFamily: 'var(--font-bruno-ace-sc), sans-serif',
                fontSize: 'clamp(1.28rem, 5vw, 3.5rem)', // Reduced by ~33% from clamp(1.92rem, 4vw, 3.2rem)
                letterSpacing: '0.3em', // 30% character spacing
              }}
            >
              WE
              <br />
              ARE
              <br />
              COLLECTIVE
            </span>
          </div>
          {/* Box 2: Right - Text Paragraph */}
          <div
            style={{
              width: "50vw", // Reduced to 50% of screen
              height: "100%",
              position: "absolute",
              right: "2.5vw", // Position from right edge to align with navbar
              top: "0", // Align with top of container
              margin: 0, // Remove any default margin
              padding: 0, // Remove any default padding
              boxSizing: "border-box",
              zIndex: 5, // Lower z-index than left box to avoid overlap
            }}
          >
            <p
              className="absolute font-poppins text-gray-700 text-right leading-relaxed m-0 p-0 border-0 box-border outline-none"
              style={{
                fontFamily: 'var(--font-poppins), sans-serif',
                top: "10vh",
                right: "1.25vw", // Add 1.25vw to align with navbar button
                left: "0", // Ensure it takes full width of container
                fontSize: 'clamp(1rem, 2.1vw, 1.25rem)', // Reduced by ~33% from clamp(1.5rem, 3.2vw, 2.5rem)
              }}
            >
              Collective AEC is a specialized collaborative studio offering
              end-to-end backend support for design firms. We are not an
              outsourcing company. We are your extended in-house team of
              architects, designers, visualizers, computational experts, and
              problem solvers. Our mission is to free design firms from the
              time-consuming burdens of drafting, automation, and visualization,
              so they can focus on what matters most: designing, innovating and
              winning clients.
            </p>
          </div>
        </div>

        {/* Box 3: Bottom - We are Collective and Stats */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "calc(100vh - 12.5vh - 60vh)", // Remaining height after top position and middle height
            width: "100%", // Full width
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between", // Space between left tagline and right metrics
            paddingLeft: "2.5vw", // Left padding instead of left margin
            paddingRight: "3.75vw", // Right padding (2.5vw + 1.25vw to align with navbar)
            boxSizing: "border-box",
            margin: 0, // Remove any default margin
            zIndex: 1, // Lower z-index to stay below other content
          }}
        >
          <div
            className="w-full flex items-center justify-between flex-nowrap m-0 p-0 box-border"
            style={{
              gap: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            {stats.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
                style={{
                  minWidth: 'clamp(6rem, 8vw, 8rem)',
                }}
              >
                <h3
                  className="font-bruno-ace-sc font-bold text-black leading-tight"
                  style={{
                    fontFamily: 'var(--font-bruno-ace-sc), sans-serif',
                    fontSize: 'clamp(1.67rem, 3.67vw, 3rem)',
                    marginBottom: 'clamp(0.25rem, 0.5vh, 0.5rem)',
                  }}
                >
                  {animatedStats[index] + (item.number.endsWith("+") ? "+" : "")}
                </h3>
                <p
                  className="font-century-gothic text-gray-600 m-0 leading-tight"
                  style={{
                    fontFamily: 'var(--font-century-gothic), Century Gothic, sans-serif',
                    fontSize: 'clamp(0.8rem, 1.67vw, 1.33rem)',
                  }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}