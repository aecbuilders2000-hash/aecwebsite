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
      className="relative bg-gray-100 overflow-hidden border-t border-b border-gray-3"
      style={{
        minHeight: "100vh",
        width: "100vw",
        // background: "var(--gray-1)",
        color: "var(--gray-9)",
        zIndex: 10,
      }}
    >
      {/* Top Rectangle */}
      <div
        ref={topRectRef}
        className="absolute top-0 left-0 pl-16 flex items-end items-center overflow-hidden z-20 bg-[#E9ECEF]"
        style={{
          width: "100vw",
          height: "50vh",
          // background: "var(--gray-8)",
        }}
      >
        <span
          ref={topTextRef}
          className="text-4xl font-bold text-[#737272] text-left w-full opacity-0"
          style={{
            fontFamily: 'var(--font-bruno-ace-sc), sans-serif',
            transform: "translateY(40px)",
            marginBottom: "32px",
          }}
        >
          The Architects&apos;
        </span>
      </div>

      {/* Bottom Rectangle */}
      <div
        ref={bottomRectRef}
        className="absolute left-0 bottom-0 flex items-start pr-16 overflow-hidden z-20 bg-[#E9ECEF]"
        style={{
          width: "100vw",
          height: "50vh",
          // background: "var(--gray-7)",
        }}
      >
        <span
          ref={bottomTextRef}
          className="text-4xl font-bold text-[#737272] text-right w-full opacity-0"
          style={{
            fontFamily: 'var(--font-bruno-ace-sc), sans-serif',
            transform: "translateY(-40px)",
            marginTop: "32px",
          }}
        >
          Extended Studio.
        </span>
      </div>
      {/* Main Content (centered) */}
      <section className="bg-gray-100 py-24 px-[5%]">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Left Image */}
          <div className="flex-1 overflow-hidden">
            <div className="relative mt-5">
              <Image
                src="/ModernVilla.png"
                alt="Collective Building"
                width={300}   // required
                height={300}  // required
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 'clamp(0.3rem, 0.5vw, 0.6rem)',
                paddingLeft: 'clamp(0.6rem, 2vw, 1.5rem)',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: "transparent",
                fontFamily: 'var(--font-geist-sans), sans-serif',
                transition: 'all 0.3s ease',
                gap: 'clamp(0.4rem, 1.5vw, 1rem)',
              }}
              onMouseEnter={(e) => {
                const textSpan = e.target.querySelector('.button-text');
                const circle = e.target.querySelector('.arrow-circle');
                const arrow = e.target.querySelector('.arrow-icon');

                if (textSpan) {
                  textSpan.style.backgroundColor = 'transparent';
                }
                if (arrow) {
                  arrow.style.transform = 'rotate(0deg)'; // Right arrow on hover
                }
              }}
              onMouseLeave={(e) => {
                // e.target.style.backgroundColor = '#fff';
                const textSpan = e.target.querySelector('.button-text');
                const circle = e.target.querySelector('.arrow-circle');
                const arrow = e.target.querySelector('.arrow-icon');

                if (textSpan) textSpan.style.color = '#000';
                if (circle) {
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
                  fontSize: 'clamp(0.7rem, 1.8vw, 0.95rem)',
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
                  width: 'clamp(20px, 6vw, 36px)',
                  height: 'clamp(20px, 6vw, 36px)',
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

          {/* Right Text */}
          <div className="flex-1 text-center md:text-left my-auto">
            <p className="text-gray-700 leading-relaxed text-right my-auto">
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

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mt-8 text-center">
            <p className="text-gray-600">We are</p>
            <h2 className="text-2xl font-bold tracking-widest"
              style={{
                fontFamily: 'var(--font-bruno-ace-sc), sans-serif',
              }}>COLLECTIVE</h2>
          </div>

          {/* Stats Section */}
          <div className="mt-8 flex flex-wrap justify-center gap-10 text-center">
            {stats.map((item, index) => (
              <div key={index} className="min-w-[120px]">
                <h2 className="text-3xl font-bold"
                  style={{
                    fontFamily: 'var(--font-bruno-ace-sc), sans-serif',
                  }}>{item.number}</h2>
                <p className="text-gray-600 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>


        {/* Footer Branding */}

      </section>
    </section>
  );
}
