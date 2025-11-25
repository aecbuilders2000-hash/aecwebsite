"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    title: "BIM Services",
    subtitle: "& Consulting",
    image: "https://i.postimg.cc/pLRdCNV7/BIMService.png",
    description: "Advanced Building Information Modeling solutions",
    position: "bottom",
  },
  {
    id: 2,
    title: "MEP Services",
    subtitle: "& Coordination",
    image: "https://i.postimg.cc/sxmY2YTD/MEPService.png",
    description: "Mechanical, Electrical, and Plumbing system design",
    position: "bottom",
  },
  {
    id: 3,
    title: "Architectural",
    subtitle: "Design Services",
    image: "/Architecture Service.png",
    description: "Complete architectural design from concept to construction",
    position: "bottom",
  },
  {
    id: 4,
    title: "Structural",
    subtitle: "Engineering",
    image: "/Structure Service.png",
    description: "Advanced structural analysis and engineering solutions",
    position: "bottom",
  },
  {
    id: 5,
    title: "3D Visualization",
    subtitle: "& Rendering",
    image: "https://i.postimg.cc/8CnPTjdQ/3d-Visualiser.png",
    description: "Photorealistic visualizations and architectural renderings",
    position: "bottom",
  },
];

export default function OurSevices() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const topCardsRef = useRef([]);
  const bottomCardsRef = useRef([]);

  // Split services into top and bottom arrays
  const topServices = services.filter((service) => service.position === "top");
  const bottomServices = services.filter(
    (service) => service.position === "bottom"
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup - softer initial states for seamless reveal
      gsap.set(textRef.current, {
        opacity: 0,
        y: 20,
      });

      gsap.set(topCardsRef.current, {
        opacity: 0,
        y: 15,
        scale: 0.98,
      });

      gsap.set(bottomCardsRef.current, {
        opacity: 0,
        y: 15,
        scale: 0.98,
      });

      // Set up letter reveal animation
      const titleLetters = titleRef.current?.querySelectorAll(".letter");
      if (titleLetters) {
        gsap.set(titleLetters, {
          rotationX: -90,
          transformOrigin: "50% 100%",
          opacity: 0,
        });
      }

      // Main timeline with improved sequencing
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate title letters first
      if (titleLetters) {
        tl.to(titleLetters, {
          rotationX: 0,
          opacity: 1,
          duration: 0.4, // Reduced from 0.6 to 0.4
          stagger: 0.03, // Reduced from 0.05 to 0.03 for faster reveal
          ease: "back.out(1.7)",
        });
      }

      // Then animate text
      tl.to(
        textRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.4, // Reduced from 0.6 to 0.4
          ease: "power2.out",
        },
        "-=0.3"
      ) // Increased overlap from -=0.4 to -=0.3
        // Then animate all 7 service cards as a unified group
        .to(
          [...topCardsRef.current, ...bottomCardsRef.current],
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.4, // Reduced from 1 to 0.4 (60% faster)
            stagger: {
              amount: 0.15, // Reduced from 0.4 to 0.15 (62.5% faster)
              from: "start",
              ease: "power2.inOut",
            },
            ease: "back.out(1.4)", // Changed to back.out for snappier feel
          },
          "-=0.1"
        ); // Reduced overlap from -=0.2 to -=0.1
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Array of vh values for each card
  const cardVhPositions = [400, 500, 610, 720, 880];

  // Scroll to a fixed vh for each service card
  const scrollToService = (index) => {
    const targetVh = cardVhPositions[index] || 500;
    const y = window.innerHeight * (targetVh / 100);
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  // On mount: if another page set a target in sessionStorage, scroll to it and clear the key
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      // legacy index-based key
      const raw = sessionStorage.getItem('servicesScrollTo');
      if (raw !== null) {
        const idx = parseInt(raw, 10);
        if (!Number.isNaN(idx)) {
          // Slight delay for layout/animations to settle
          setTimeout(() => scrollToService(idx), 120);
        }
        sessionStorage.removeItem('servicesScrollTo');
      }

      // vh-based key set by footer when navigating from other pages
      const rawVh = sessionStorage.getItem('servicesScrollToVh');
      if (rawVh !== null) {
        const vh = parseFloat(rawVh);
        if (!Number.isNaN(vh)) {
          setTimeout(() => {
            const y = Math.round(window.innerHeight * (vh / 100));
            window.scrollTo({ top: y - 40, behavior: 'smooth' });
          }, 140);
        }
        sessionStorage.removeItem('servicesScrollToVh');
      }

      // simple flag to scroll to the top of the services section
      const wantTop = sessionStorage.getItem('servicesScrollToTop');
      if (wantTop === '1') {
        setTimeout(() => {
          const el = document.getElementById('services-overview-section') || document.getElementById('services-section');
          if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 40;
            window.scrollTo({ top, behavior: 'smooth' });
          }
        }, 140);
        sessionStorage.removeItem('servicesScrollToTop');
      }
    } catch (e) {
      // ignore sessionStorage errors
    }
  }, []);

  return (
    <section
      id="services-overview-section"
      ref={sectionRef}
      className="relative text-gray-900 overflow-hidden"
        style={{
          height: "100vh",
          width: "100vw",
          paddingLeft: "2.5vw",
          paddingRight: "2.5vw",
          backgroundColor: '#f3f4f6',
          backgroundImage: "url('/ServicesBG.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover'
        }}
    >
      {/* Ambient background effects */}
      {/* <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-20 w-80 h-80 bg-purple-200 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div> */}

      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        {/* Top Section */}
        <div
          className="flex flex-col items-center justify-center"
          style={{ paddingTop: "8vh", height: "55vh" }}
        >
          {/* Centered Title and Description container (max width) */}
          <div className="w-full max-w-3xl flex flex-col items-center justify-center h-full">
            <h2
              ref={titleRef}
              className="font-bruno-ace-sc font-bold text-black leading-tight mb-6 text-center"
              style={{
                fontFamily: "var(--font-bruno-ace-sc), sans-serif",
                fontSize: "clamp(1.7rem, 3.3vw, 3.3rem)",
                letterSpacing: "0.3em",
                transformStyle: "preserve-3d",
                perspective: "1000px",
                whiteSpace: 'nowrap'
              }}
            >
              {"OUR SERVICES".split("").map((letter, letterIndex) => (
                <span
                  key={letterIndex}
                  className="letter"
                  style={{
                    display: "inline-block",
                    transformStyle: "preserve-3d",
                    lineHeight: 1
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </h2>

            {/* <p 
              ref={textRef}
              className="font-poppins text-gray-700 leading-relaxed mb-4"
              style={{
                fontFamily: 'var(--font-poppins), sans-serif',
                fontSize: 'clamp(0.9rem, 1.8vw, 1.4rem)',
                letterSpacing: '0.25em',
                maxWidth: '90%'
              }}
            >
              What we can do for you?
            </p> */}

            <p
              className="font-poppins text-gray-700 leading-relaxed text-center"
              style={{
                fontFamily: "var(--font-poppins), sans-serif",
                fontSize: "clamp(0.73rem, 1.47vw, 1.13rem)",
                maxWidth: "66ch",
              }}
            >
              From design conceptualization to construction documentation, we
              provide comprehensive AEC solutions tailored to your project
              needs. Our expert team delivers precision, innovation, and
              excellence in every detail.
            </p>
          </div>
        </div>

        {/* Mobile: stacked horizontal cards (one per row) */}
        <div
          className="w-full md:hidden flex flex-col"
          style={{ gap: "clamp(0.25rem, 1vw, 0.8rem)", height: "75vh" }}
        >
          {bottomServices.map((service, index) => (
            <div
              key={service.id}
              className="w-full flex items-stretch text-center bg-black text-white rounded-2xl overflow-hidden shadow-md"
              style={{ minHeight: "13vh" }}
              onClick={() => scrollToService(index)}
            >
              {/* Image - left (40%) */}
              {/* <div className="relative w-2/5" style={{ minHeight: 'auto' }}>
                <Image src={service.image} alt={service.title} fill className="object-cover" />
              </div> */}
              {/* Text - right (60%) */}
              <div
                className="w-full p-4 flex flex-col justify-center"
                style={{ padding: "clamp(0.5rem, 1.6vw, 0.9rem)" }}
              >
                <h3
                  className="font-bruno-ace-sc font-bold"
                  style={{
                    fontSize: "clamp(1rem, 2.6vw, 1.25rem)",
                    lineHeight: 1.1,
                    fontFamily: "var(--font-bruno-ace-sc), sans-serif",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="font-poppins mt-2"
                  style={{ fontSize: "clamp(0.85rem, 1.8vw, 1rem)" }}
                >
                  {service.subtitle}
                </p>
                <p
                  className="font-poppins mt-2 leading-relaxed"
                  style={{ fontSize: "clamp(0.8rem, 1.7vw, 0.95rem)" }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom: 5 Service Cards (desktop) */}
        <div
          className="hidden md:flex items-end justify-start w-full"
          style={{
            paddingBottom: "8vh",
            height: "45vh",
            gap: "clamp(0.5rem, 1.5vw, 1.5rem)",
          }}
        >
          {bottomServices.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => (bottomCardsRef.current[index] = el)}
              className="group relative rounded-2xl overflow-visible shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-200/50"
              style={{
                height: "clamp(25vh, 35vh, 40vh)",
                width: "17.5vw",
                minHeight: "25vh",
                maxHeight: "40vh",
                flexShrink: 0,
                flexGrow: 0,
              }}
              onClick={() => scrollToService(index)}
            
            >
              {/* Decorative background removed: keeping only white hover transition */}

              {/* Inner card (keeps overflow-hidden so rotator only shows when scaled) */}
              <div className="relative h-full overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm z-10">
                <div className="relative h-full">
                  {/* Curtain reveal text overlay */}
                  <div className="absolute inset-0 bg-black group-hover:invert backdrop-blur-sm transition-all duration-500 flex flex-col justify-center items-center p-6">
                    <h3
                      className="font-bruno-ace-sc font-bold text-white text-center mb-4"
                      style={{
                        fontFamily: "var(--font-bruno-ace-sc), sans-serif",
                        fontSize: "clamp(1.2rem, 1.8vw, 1.5rem)",
                      }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="font-poppins text-white text-sm text-center mb-3"
                      style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                    >
                      {service.subtitle}
                    </p>
                    <p
                      className="font-poppins text-white text-xs text-center leading-relaxed"
                      style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                    >
                      {service.description}
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

// Rotator styles are now provided globally in app/globals.css
