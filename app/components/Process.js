"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";

export default function Process({ steps = [], points = [] }) {
  // Use steps if provided, otherwise fallback to points or placeholder points
  const defaultPoints = [
    { id: 'p-1', title: 'Understand', desc: 'We begin by understanding the project goals, constraints and context.' },
    { id: 'p-2', title: 'Analyse', desc: 'We analyze site, codes, and functional requirements to shape the technical approach.' },
    { id: 'p-3', title: 'Optimize', desc: 'We optimize systems for performance, cost and constructability.' },
    { id: 'p-4', title: 'Automate', desc: 'We deliver automated workflows to streamline project delivery.' },
  ];

  const items = steps && steps.length ? steps : (points && points.length ? points : defaultPoints);

  const sectionRef = useRef(null);
  const topCardsRef = useRef([]);

  // Mobile tap-to-toggle behavior
  const [activeMobile, setActiveMobile] = useState(null);
  const activeTimeout = useRef(null);

  const mobileCardClick = (index) => {
    if (activeMobile === index) {
      setActiveMobile(null);
      if (activeTimeout.current) {
        clearTimeout(activeTimeout.current);
        activeTimeout.current = null;
      }
    } else {
      setActiveMobile(index);
      if (activeTimeout.current) clearTimeout(activeTimeout.current);
      activeTimeout.current = setTimeout(() => setActiveMobile(null), 3000);
    }
  };

  useEffect(() => {
    return () => {
      if (activeTimeout.current) clearTimeout(activeTimeout.current);
    };
  }, []);

  // GSAP reveal
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(topCardsRef.current, { opacity: 0, y: 15, scale: 0.98 });
      gsap.to(topCardsRef.current, { opacity: 1, y: 0, scale: 1, stagger: 0.06, duration: 0.45, ease: 'power2.out' });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white text-gray-900 overflow-hidden min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 pt-12 lg:pt-16">
        {/* Title - centered at the top */}
        <div className="w-full text-center mb-8">
          <h2 className="font-bruno-ace-sc font-bold text-black leading-tight mx-auto" style={{ fontSize: 'clamp(1.5rem, 2.2vw, 2.5rem)', letterSpacing: '0.2em', fontFamily: 'var(--font-bruno-ace-sc), sans-serif' }}>
            PROCESS
          </h2>
          <p className="mt-3 text-gray-600">Our approach to delivering projects.</p>
        </div>

        {/* Mobile stacked boxes */}
        <div className="w-full md:hidden flex flex-col" style={{ gap: 'clamp(0.25rem, 1vw, 0.8rem)', height: '75vh' }}>
          {items.map((item, index) => (
            <div
              key={item.id || index}
              className="group relative w-full flex items-stretch text-center rounded-2xl overflow-hidden shadow-md bg-black text-white"
              style={{ minHeight: '13vh' }}
              onClick={() => mobileCardClick(index)}
            >
              {/* Black overlay with white text, inverts on hover or when activeMobile === index (for touch) */}
              <div className={`absolute inset-0 z-10 backdrop-blur-sm transition-all duration-500 flex flex-col justify-center items-center p-4 ${activeMobile === index ? 'bg-white text-black' : 'bg-black text-white'} group-hover:bg-white group-hover:text-black`}>
                <h3
                  className="font-bruno-ace-sc font-bold"
                  style={{
                    fontSize: "clamp(1rem, 2.6vw, 1.25rem)",
                    lineHeight: 1.1,
                    fontFamily: 'var(--font-bruno-ace-sc), sans-serif',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="font-poppins mt-2"
                  style={{ fontSize: "clamp(0.85rem, 1.8vw, 1rem)", fontFamily: 'var(--font-poppins), sans-serif' }}
                >
                  {item.desc || item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: responsive row of square boxes (wrap to next row when >5) */}
        <div className="hidden md:flex md:flex-wrap md:justify-center w-full" style={{ paddingBottom: '6rem', gap: 'clamp(0.5rem, 1.5vw, 1.5rem)', alignItems: 'flex-end' }}>
          {items.map((item, index) => (
            <div
              key={item.id || index}
              ref={(el) => (topCardsRef.current[index] = el)}
              className="group relative bg-black rounded-2xl overflow-hidden shadow-lg border border-gray-200/50 m-0"
              style={{
                height: 'clamp(25vh, 35vh, 40vh)',
                width: '17.5vw',
                minHeight: '25vh',
                maxHeight: '40vh',
                margin: '0.5rem',
                flexShrink: 0,
                flexGrow: 0,
              }}
            >
              <div className="relative h-full overflow-hidden">
                <div className="absolute inset-0 bg-black group-hover:invert backdrop-blur-sm transition-all duration-500 flex flex-col justify-center items-center p-6">
                  <h3
                    className="font-bruno-ace-sc font-bold text-white text-center mb-4"
                    style={{
                      fontFamily: 'var(--font-bruno-ace-sc), sans-serif',
                      fontSize: 'clamp(1.2rem, 1.8vw, 1.5rem)',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="font-poppins text-white text-xs text-center leading-relaxed"
                    style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                  >
                    {item.desc || item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
