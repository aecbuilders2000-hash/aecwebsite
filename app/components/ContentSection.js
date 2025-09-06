"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { number: "10+", label: "Years of Experience" },
  { number: "5+", label: "Countries Served" },
  { number: "456", label: "Successful Projects" },
  { number: "127", label: "Happy Clients" },
];

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
        background: "var(--gray-2)", // Using E9ECEF from your color palette
        color: "var(--gray-9)",
        zIndex: 10,
      }}
    >
      {/* Top Rectangle */}
      <div
        ref={topRectRef}
        className="absolute top-0 left-0 flex items-end overflow-hidden z-20"
        style={{
          width: "100vw",
          height: "50vh",
          background: "var(--gray-2)", // Using E9ECEF from your color palette
          borderBottom: "0.5vw solid white", // White center line
          paddingLeft: "2.5vw", // 2.5% from left
          paddingBottom: "2.5vh", // 2.5vh from the split line
        }}
      >
        <span
          ref={topTextRef}
          className="font-bold text-left opacity-0"
          style={{
            fontFamily: 'Bruno Ace, monospace', // Changed to Bruno Ace
            color: "#737272",
            fontSize: "clamp(1.7rem, 3.3vw, 3.3rem)", // Reduced by ~33% from clamp(2.5rem, 5vw, 5rem)
            transform: "translateY(40px)",
          }}
        >
          The Architects&apos;
        </span>
      </div>

      {/* Bottom Rectangle */}
      <div
        ref={bottomRectRef}
        className="absolute left-0 bottom-0 flex items-start overflow-hidden z-20"
        style={{
          width: "100vw",
          height: "50vh",
          background: "var(--gray-2)", // Using E9ECEF from your color palette
          borderTop: "0.5vw solid white", // White center line
          paddingRight: "3.75vw", // 2.5vw + 1.25vw to align with navbar
          paddingTop: "2.5vh", // 2.5vh from the split line
          justifyContent: "flex-end", // Right align content
        }}
      >
        <span
          ref={bottomTextRef}
          className="font-bold text-right opacity-0"
          style={{
            fontFamily: 'Bruno Ace, monospace', // Changed to Bruno Ace
            color: "#737272",
            fontSize: "clamp(1.7rem, 3.3vw, 3.3rem)", // Reduced by ~33% from clamp(2.5rem, 5vw, 5rem)
            transform: "translateY(-40px)",
          }}
        >
          Extended Studio.
        </span>
      </div>
      {/* Main Content (centered) */}
      {/* Main Content Section */}
      <section 
        style={{
          width: "100vw", // Full viewport width
          minHeight: "100vh", // Full viewport height
          backgroundColor: "#FFFFFF", // White background
          overflow: "hidden", // No overflow
          paddingTop: "5vh", // 5vh gap from navbar
          paddingLeft: "2.5vw", // 2.5% from left
          paddingRight: "2.5vw", // 2.5% from right
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Top Row - Left and Right Boxes */}
        <div 
          style={{
            display: "flex",
            position: "absolute",
            top: "12.5vh", // 12.5% from top of screen
            left: "0",
            right: "0",
            width: "100%",
            height: "60vh", // 60% height
            paddingLeft: "2.5vw", // Left padding instead of left margin
            paddingRight: "2.5vw", // Right padding instead of right margin
            boxSizing: "border-box",
            gap: "clamp(1rem, 2.5vw, 2rem)", // Gap between left and right boxes
            margin: 0, // Remove any default margin
          }}
        >
          {/* Box 1: Left - Image and Learn More Button */}
          <div 
            style={{
              width: "25vw", // Made smaller (was 30vw)
              height: "100%",
              position: "relative",
              zIndex: 10, // Ensure button is clickable
            }}
          >
            {/* Grouped Image and Button Container */}
            <div
              style={{
                position: "absolute",
                top: "5vh", // Start at 15vh from top
                left: "0",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start", // Keep left alignment for content
                gap: "clamp(1rem, 2vh, 1.5rem)", // Gap between image and button
              }}
            >
              <div 
                style={{
                  position: "relative",
                  width: "25vw", // Increased from 20vw
                  height: "25vw", // Increased from 20vw for 1:1 ratio
                }}
              >
                <Image
                  src="/ModernVilla.png"
                  alt="Collective Building"
                  fill
                  sizes="25vw"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            
              {/* Navbar-style button */}
              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: 'clamp(0.3rem, 1vw, 0.6rem)', // Reduced padding to make it sleeker
                  paddingLeft: 'clamp(0.8rem, 2vw, 1.2rem)', // Reduced left padding
                  backgroundColor: '#FFFFFF', // Transparent background
                  border: 'none', // Removed border
                  borderRadius: '50px',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-century-gothic), Century Gothic, sans-serif',
                  transition: 'all 0.3s ease',
                  gap: 'clamp(0.3rem, 1vw, 0.8rem)', // Reduced gap
                  width: 'fit-content', // Make button only as wide as needed
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#000';
                  const textSpan = e.target.querySelector('.button-text');
                  const circle = e.target.querySelector('.arrow-circle');
                  const arrow = e.target.querySelector('.arrow-icon');
                  
                  if (textSpan) {
                    textSpan.style.color = '#fff';
                    textSpan.style.backgroundColor = 'transparent';
                  }
                  if (circle) circle.style.backgroundColor = '#fff';
                  if (arrow) {
                    arrow.style.stroke = '#000';
                    arrow.style.transform = 'rotate(0deg)'; // Right arrow on hover
                  }
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  const textSpan = e.target.querySelector('.button-text');
                  const circle = e.target.querySelector('.arrow-circle');
                  const arrow = e.target.querySelector('.arrow-icon');
                  
                  if (textSpan) textSpan.style.color = '#000';
                  if (circle){
                    circle.style.backgroundColor = '#000';
                  }
                  if (arrow) {
                    arrow.style.stroke = '#fff';
                    arrow.style.backgroundColor = "transparent";
                    arrow.style.transform = 'rotate(-45deg)'; // Top-right arrow initially
                  }
                }}
              >
                {/* Text */}
                <span
                  className="button-text"
                  style={{
                    color: '#000',
                    backgroundColor: 'transparent',
                    fontSize: 'clamp(0.67rem, 1.7vw, 0.87rem)', // Reduced by ~33% from clamp(1rem, 2.5vw, 1.3rem)
                    fontWeight: '500',
                    transition: 'color 0.3s ease',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Learn More
                </span>
                
                {/* Circle inside the button */}
                <div
                  className="arrow-circle"
                  style={{
                    width: 'clamp(24px, 6vw, 40px)', // Reduced circle size to match sleeker button
                    height: 'clamp(24px, 6vw, 40px)', // Reduced circle size to match sleeker button
                    backgroundColor: '#000',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    flexShrink: 0,
                  }}
                >
                  <svg 
                    className="arrow-icon"
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="#fff" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    style={{
                      transform: 'rotate(-45deg)', // Top-right diagonal initially
                      transition: 'all 0.3s ease',
                      width: 'clamp(10px, 3vw, 16px)',
                      height: 'clamp(10px, 3vw, 16px)',
                    }}
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17L17 7" />
                  </svg>
                </div>
              </button>
            </div>
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
              style={{
                position: "absolute",
                top: "5vh", // Start at 5vh from top - same as image
                right: "1.25vw", // Add 1.25vw to align with navbar button
                left: "0", // Ensure it takes full width of container
                fontFamily: 'var(--font-poppins), sans-serif',
                fontSize: 'clamp(1rem, 2.1vw, 1.67rem)', // Reduced by ~33% from clamp(1.5rem, 3.2vw, 2.5rem)
                lineHeight: '1.6',
                color: '#333333',
                textAlign: 'right', // Right align text
                margin: 0, // Remove all margins
                padding: 0, // Remove all padding
                border: 0, // Remove any border
                boxSizing: "border-box",
                outline: "none", // Remove any outline
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
          {/* We are Collective - Left side, stacked */}
          <div 
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <span 
              style={{
                fontFamily: 'var(--font-century-gothic), Century Gothic, sans-serif',
                fontSize: 'clamp(1.28rem, 2.7vw, 2.13rem)', // Reduced by ~33% from clamp(1.92rem, 4vw, 3.2rem)
                color: '#000000',
                fontWeight: 'normal',
                lineHeight: '1.2',
              }}
            >
              We are
            </span>
            <span 
              style={{
                fontFamily: 'var(--font-bruno-ace-sc), sans-serif',
                fontSize: 'clamp(1.28rem, 2.7vw, 2.13rem)', // Reduced by ~33% from clamp(1.92rem, 4vw, 3.2rem)
                fontWeight: 'bold',
                letterSpacing: '0.3em', // 30% character spacing
                color: '#000000',
                lineHeight: '1.2',
              }}
            >
              COLLECTIVE
            </span>
          </div>

          {/* Stats Section - Right aligned to match navbar button */}
          <div 
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(2rem, 4vw, 3rem)",
              flexWrap: "nowrap", // Keep in single line for desktop
              margin: 0, // Remove any default margin
              padding: 0, // Remove any default padding
              boxSizing: "border-box",
            }}
          >
            {stats.map((item, index) => (
              <div 
                key={index} 
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  minWidth: 'clamp(6rem, 8vw, 8rem)',
                }}
              >
                <h3 
                  style={{
                    fontFamily: 'var(--font-bruno-ace-sc), sans-serif',
                    fontSize: 'clamp(1.67rem, 3.67vw, 3rem)', // Reduced by ~33% from clamp(2.5rem, 5.5vw, 4.5rem)
                    fontWeight: 'bold',
                    marginBottom: 'clamp(0.25rem, 0.5vh, 0.5rem)',
                    color: '#000000',
                    lineHeight: '1.2',
                  }}
                >
                  {item.number}
                </h3>
                <p 
                  style={{
                    fontFamily: 'var(--font-century-gothic), Century Gothic, sans-serif', // Same font as "We are"
                    fontSize: 'clamp(0.8rem, 1.67vw, 1.33rem)', // Reduced by ~33% from clamp(1.2rem, 2.5vw, 2rem)
                    color: '#666666',
                    margin: 0,
                    lineHeight: '1.2',
                  }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>


        {/* Footer Branding */}

      </section>
    </section>
  );
}
