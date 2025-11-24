"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Process({ steps = [], points = [], title = '' }) {
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

  // Mobile uses static title+text (no toggle). Hover interactions are desktop-only.

  // GSAP reveal
  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = topCardsRef.current;
      gsap.set(cards, { opacity: 0, y: 30 });
      cards.forEach((card) => {
        if (!card) return;
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative text-gray-900 overflow-hidden min-h-screen"
      style={{
        backgroundImage: `url('/BG4.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'multiply'
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12 pt-12 lg:pt-16 relative z-10">
        {/* Title - centered at the top (dynamic when `title` prop is provided) */}
        <div className="w-full text-center mb-8">
          <h2 className="font-bruno-ace-sc font-bold text-black leading-tight mx-auto" style={{ fontSize: 'clamp(1.5rem, 2.2vw, 2.5rem)', letterSpacing: '0.04em', fontFamily: 'var(--font-bruno-ace-sc), sans-serif' }}>
            {title ? `How we deliver ${title}` : 'PROCESS'}
          </h2>
          <div className="mt-3 text-gray-600">
            <p>{title ? `We tailor our process to deliver ${title} with efficiency and clarity.` : 'We tailor our process to deliver projects with efficiency and clarity.'}</p>
            <p className="mt-2">{title ? `From concept to completion — focused on outcomes, coordination and constructability for ${title}.` : 'From concept to completion — focused on outcomes, coordination and constructability.'}</p>
          </div>
        </div>

        {/* Mobile stacked boxes */}
        <div className="w-full md:hidden flex flex-col" style={{ gap: '0.8rem', maxHeight: '80vh', overflow: 'auto' }}>
          {items.map((item, index) => (
            <div
              key={item.id || index}
              className="relative w-full flex items-stretch text-left rounded-2xl overflow-hidden shadow-md bg-black text-white p-4"
              style={{ minHeight: '12vh' }}
            >
              <div className="w-full">
                <h3
                  className="font-bruno-ace-sc font-bold mb-2"
                  style={{
                    fontSize: "clamp(1rem, 2.6vw, 1.1rem)",
                    lineHeight: 1.15,
                    fontFamily: 'var(--font-bruno-ace-sc), sans-serif',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="font-poppins text-white text-sm leading-relaxed"
                  style={{ fontSize: "clamp(0.85rem, 1.8vw, 0.95rem)", fontFamily: 'var(--font-poppins), sans-serif' }}
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
              className="group relative bg-black rounded-2xl overflow-hidden shadow-lg m-0"
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
                {/* Title layer: always visible */}
                <div className="absolute inset-0 bg-black flex items-center justify-center p-6">
                  <h3
                    className="font-bruno-ace-sc font-bold text-white text-center"
                    style={{
                      fontFamily: 'var(--font-bruno-ace-sc), sans-serif',
                      fontSize: 'clamp(1.2rem, 1.8vw, 1.5rem)',
                    }}
                  >
                    {item.title}
                  </h3>
                </div>

                {/* Sliding description: hidden by translateY, slides up on group-hover */}
                <div className="absolute inset-0 bg-black transform translate-y-full md:group-hover:translate-y-0 transition-transform duration-400 ease-[cubic-bezier(.2,.9,.2,1)] flex items-end p-6">
                  <div className="w-full">
                    <div className="border-t border-gray-700 mb-3" />
                    <p
                      className="font-poppins text-white text-sm leading-relaxed"
                      style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                    >
                      {item.desc || item.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
