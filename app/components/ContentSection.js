"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { number: "10+", label: "Years of Experience" },
  { number: "20+", label: "Countries Served" },
  { number: "1000+", label: "Successful Projects" },
  { number: "200+", label: "Happy Clients" },
];

export default function ContentSection() {
  const contentRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const topRectRef = useRef(null);
  const bottomRectRef = useRef(null);
  const topTextRef = useRef(null);
  const bottomTextRef = useRef(null);

  // Ref for text reveal container
  const textRevealContainerRef = useRef(null);

  // Ref for right side text bounce effect
  const rightTextRef = useRef(null);
  const lastHoveredIndex = useRef(-1);
  const waveTimeouts = useRef([]);

  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));

  // Wave effect function for sequential letter bounce
  const createWaveEffect = (centerIndex, allLetters, mouseX, mouseY, containerRect) => {
    // Clear existing timeouts
    waveTimeouts.current.forEach(timeout => clearTimeout(timeout));
    waveTimeouts.current = [];

    const maxDistance = 120; // Maximum pixel distance to affect letters
    const maxDelay = 150; // Maximum delay in ms

    allLetters.forEach((letter, index) => {
      const letterRect = letter.getBoundingClientRect();
      const letterCenterX = letterRect.left + letterRect.width / 2 - containerRect.left;
      const letterCenterY = letterRect.top + letterRect.height / 2 - containerRect.top;

      // Calculate actual distance between mouse and letter center
      const deltaX = mouseX - letterCenterX;
      const deltaY = mouseY - letterCenterY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      if (distance <= maxDistance) {
        const delay = (distance / maxDistance) * maxDelay; // Closer = faster
        const intensity = 1 - (distance / maxDistance); // Closer = stronger

        const timeout = setTimeout(() => {
          // Strong bounce effect based on actual proximity
          gsap.to(letter, {
            y: -25 * intensity, // Strong bounce
            scale: 1.1 + (0.4 * intensity), // Dynamic scale
            rotation: (Math.random() - 0.5) * 8 * intensity, // Slight rotation
            duration: 0.4,
            ease: "back.out(2.5)"
          });

          // Return animation with elastic
          gsap.to(letter, {
            y: 0,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            delay: 0.1,
            ease: "elastic.out(1, 0.4)"
          });
        }, delay);

        waveTimeouts.current.push(timeout);
      }
    });
  };

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
      // Set initial state for letter reveal elements
      if (textRevealContainerRef.current) {
        const letters = textRevealContainerRef.current.querySelectorAll('.letter');
        gsap.set(letters, {
          y: '1.5em', // Move letters down by 1.5 times their height
          rotateX: 90, // Rotate forward (positive rotation)
          transformOrigin: 'bottom center',
          opacity: 1 // Keep opacity at 1, mask will handle visibility
        });
      }

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
          onUpdate: (self) => {
            // When scrub progress reaches the point where boxes finish opening
            if (self.progress >= 0.6 && !tl.textRevealTriggered) {
              tl.textRevealTriggered = true;

              // Create separate non-scrub timeline for letter reveal
              tl.textRevealTl = gsap.timeline();

              if (textRevealContainerRef.current) {
                const letters = textRevealContainerRef.current.querySelectorAll('.letter');
                tl.textRevealTl.to(letters, {
                  y: '0em',
                  rotateX: 0,
                  duration: 0.8,
                  stagger: 0.04,
                  ease: "power3.out"
                });
              }

              // Create separate non-scrub timeline for metrics animation
              tl.metricsTimeline = gsap.timeline({ delay: 0.2 }); // Small delay after text starts

              stats.forEach((item, index) => {
                const targetNumber = parseInt(item.number);
                const statObject = { value: 0 };

                tl.metricsTimeline.to(statObject, {
                  value: targetNumber,
                  duration: 1.5,
                  ease: "power1.out",
                  onUpdate: () => {
                    setAnimatedStats(prev => {
                      const newStats = [...prev];
                      newStats[index] = Math.floor(statObject.value);
                      return newStats;
                    });
                  }
                }, 0); // Start all at the same time
              });
            }

            // Retract when scrolling back up
            if (self.progress < 0.6 && tl.textRevealTriggered) {
              tl.textRevealTriggered = false;

              // Kill any ongoing animations
              if (tl.textRevealTl) {
                tl.textRevealTl.kill();
              }
              if (tl.metricsTimeline) {
                tl.metricsTimeline.kill();
              }

              tl.textRetractTl = gsap.timeline();

              if (textRevealContainerRef.current) {
                const letters = textRevealContainerRef.current.querySelectorAll('.letter');
                tl.textRetractTl.to(letters, {
                  y: '1.5em',
                  rotateX: 90,
                  duration: 0.5,
                  stagger: 0.02,
                  ease: "power2.in"
                });
              }

              // Reset metrics to 0
              setAnimatedStats(stats.map(() => 0));
            }
          }
        },
      });

      tl.to(topTextRef.current, { opacity: 1, x: 0, ease: "power2.out" }, 0)
        .to(bottomTextRef.current, { opacity: 1, x: 0, ease: "power2.out" }, 0)
        .to(topRectRef.current, { y: "-100%", ease: "power4.inOut" }, 0.3)
        .to(bottomRectRef.current, { y: "100%", ease: "power4.inOut" }, 0.3);
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Simple mobile detection to adjust layout values without using px
  useEffect(() => {
    const handleResize = () => setIsMobile(typeof window !== 'undefined' && window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      ref={contentRef}
      className="relative bg-black h-fit min-h-screen overflow-hidden border-t border-b border-gray-3"
      style={{
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

      {/* Main Content Section */}
      <section
        id="content-section"
        className="w-full h-fit overflow-hidden flex flex-col box-border"
        style={{
          paddingTop: "5vh", // 5vh gap from navbar
          paddingLeft: "2.5vw", // 2.5% from left
          paddingRight: "2.5vw", // 2.5% from right
        }}
      >
        {/* Top Row - Left and Right Boxes */}
        <div
          className="flex h-fit lg:h-[60vh] flex-col md:flex-row absolute left-0 justify-between items-center right-0 box-border m-0"
          style={{
            top: "12.5vh", // 12.5% from top of screen
            width: "100%",
            // height: "60vh", // 60% height
            paddingLeft: "2.5vw", // Left padding instead of left margin
            paddingRight: "2.5vw", // Right padding instead of right margin
            gap: "clamp(1rem, 2.5vw, 2rem)", // Gap between left and right boxes
            alignItems: "center",
            justifyContent: "center"
          }}
        >

          {/* We are Collective - Left side, stacked */}
          <div className="text-reveal-container px-5 md:px-0 relative md:w-[50vw] h-full flex flex-col justify-center"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              perspective: '1000px',
              // transform: 'translateY(5vh)', // Shift down
            }}
          >
            <div
              ref={textRevealContainerRef}
              className="font-bruno-ace-sc text-black font-bold tracking-widest leading-tight"
              style={{
                fontFamily: 'var(--font-bruno-ace-sc), sans-serif',
                fontSize: 'clamp(1.28rem, 5vw, 3.5rem)',
                letterSpacing: '0.3em',
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              {/* Each word gets its own masked container */}
              <div className="mask-line" style={{
                overflow: 'hidden',
                height: '1.2em',
                marginBottom: '0.1em',
                position: 'relative'
              }}>
                {"WE".split('').map((letter, index) => (
                  <span
                    key={`we-${index}`}
                    className="letter"
                    style={{
                      display: 'inline-block',
                      transformStyle: 'preserve-3d',
                      position: 'relative'
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </div>

              <div className="mask-line" style={{
                overflow: 'hidden',
                height: '1.2em',
                marginBottom: '0.1em',
                position: 'relative'
              }}>
                {"ARE".split('').map((letter, index) => (
                  <span
                    key={`are-${index}`}
                    className="letter"
                    style={{
                      display: 'inline-block',
                      transformStyle: 'preserve-3d',
                      position: 'relative'
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </div>

              <div className="mask-line" style={{
                overflow: 'hidden',
                height: '1.2em',
                position: 'relative'
              }}>
                {"COLLECTIVE".split('').map((letter, index) => (
                  <span
                    key={`collective-${index}`}
                    className="letter"
                    style={{
                      display: 'inline-block',
                      transformStyle: 'preserve-3d',
                      position: 'relative'
                    }}
                  >
                    COLLECTIVE
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Box 2: Right - Text Paragraph */}
          <div
            className="flex md:w-[50vw] md:pr-[1.25vw] px-5 md:px-0 items-center justify-center h-full" // vertically center content
            style={{
              paddingRight: "1.25vw", // Align with navbar spacing
              position: "relative", // Remove absolute positioning
              boxSizing: "border-box",
              zIndex: 5,
              height: "100%"
            }}
          >
            <div
              ref={rightTextRef}
              className="font-poppins text-gray-700 text-justify md:text-right leading-relaxed m-0 p-0 border-0 box-border outline-none cursor-pointer"
              style={{
                fontFamily: 'var(--font-poppins), sans-serif',
                fontSize: 'clamp(1rem, 2.1vw, 1.25rem)',
                maxWidth: '100%',
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const mouseX = e.clientX - rect.left;
                const mouseY = e.clientY - rect.top;
                const allLetters = Array.from(e.currentTarget.querySelectorAll('.bounce-letter'));
                if (Date.now() - (lastHoveredIndex.current || 0) > 50) {
                  lastHoveredIndex.current = Date.now();
                  createWaveEffect(0, allLetters, mouseX, mouseY, rect);
                }
              }}
            >
              {`Collective AEC is a specialized collaborative studio offering end-to-end backend support for design firms. We are not an outsourcing company. We are your extended in-house team of architects, designers, visualizers, computational experts, and problem solvers. Our mission is to free design firms from the time-consuming burdens of drafting, automation, and visualization, so they can focus on what matters most: designing, innovating and winning clients.`
                .split(' ')
                .map((word, wordIndex) => (
                  <span key={wordIndex} style={{ display: 'inline-block', marginRight: '0.3em' }}>
                    {word.split('').map((letter, letterIndex) => (
                      <span
                        key={`${wordIndex}-${letterIndex}`}
                        className="bounce-letter text-sm sm:text-lg"
                        style={{
                          display: 'inline-block',
                          transformOrigin: 'center bottom',
                          cursor: 'pointer'
                        }}
                      >
                        {letter}
                      </span>
                    ))}
                  </span>
                ))
              }
            </div>
          </div>
        </div>

        {/* Box 3: Bottom - Stats */}
        <div
          className="w-full md:px-10 h-fit absolute left-0 flex items-center justify-center"
          id="content-section-details"
          style={{
            // Shift metrics slightly up on mobile using responsive units (no px)
            bottom: isMobile ? '15vh' : '2vw',
            transition: 'bottom 220ms ease'
          }}
        >
          <div
            className="w-full grid grid-cols-2 md:grid-cols-4 m-0 p-0 box-border"
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