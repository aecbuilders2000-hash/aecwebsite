"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
    id: 1,
    title: "BIM Services",
    subtitle: "& Consulting",
    image: "/BIM Service .png",
    description: "Advanced Building Information Modeling solutions",
    position: "bottom"
  },
  {
    id: 2,
    title: "MEP Services",
    subtitle: "& Coordination",
    image: "/MEP Service .png",
    description: "Mechanical, Electrical, and Plumbing system design",
    position: "bottom"
  },
  {
    id: 3,
    title: "Architectural",
    subtitle: "Design Services",
    image: "/Architecture Service.png",
    description: "Complete architectural design from concept to construction",
    position: "bottom"
  },
    {
    id: 4,
    title: "Structural",
    subtitle: "Engineering",
    image: "/Structure Service .png", 
    description: "Advanced structural analysis and engineering solutions",
    position: "bottom"
  },
  {
    id: 5,
    title: "3D Visualization",
    subtitle: "& Rendering",
    image: "/3D Visualiser .png",
    description: "Photorealistic visualizations and architectural renderings",
    position: "bottom"
  },

];

export default function ServicesOverview() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const topCardsRef = useRef([]);
  const bottomCardsRef = useRef([]);

  // Split services into top and bottom arrays
  const topServices = services.filter(service => service.position === "top");
  const bottomServices = services.filter(service => service.position === "bottom");

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup - softer initial states for seamless reveal
      gsap.set(textRef.current, { 
        opacity: 0, 
        y: 20
      });
      
      gsap.set(topCardsRef.current, { 
        opacity: 0, 
        y: 15, 
        scale: 0.98
      });
      
      gsap.set(bottomCardsRef.current, { 
        opacity: 0, 
        y: 15, 
        scale: 0.98
      });

      // Set up letter reveal animation
      const titleLetters = titleRef.current?.querySelectorAll('.letter');
      if (titleLetters) {
        gsap.set(titleLetters, {
          rotationX: -90,
          transformOrigin: "50% 100%",
          opacity: 0
        });
      }

      // Main timeline with improved sequencing
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Animate title letters first
      if (titleLetters) {
        tl.to(titleLetters, {
          rotationX: 0,
          opacity: 1,
          duration: 0.4, // Reduced from 0.6 to 0.4
          stagger: 0.03, // Reduced from 0.05 to 0.03 for faster reveal
          ease: "back.out(1.7)"
        });
      }

      // Then animate text
      tl.to(textRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.4, // Reduced from 0.6 to 0.4
        ease: "power2.out"
      }, "-=0.3") // Increased overlap from -=0.4 to -=0.3
      // Then animate all 7 service cards as a unified group
      .to([...topCardsRef.current, ...bottomCardsRef.current], {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.4, // Reduced from 1 to 0.4 (60% faster)
        stagger: {
          amount: 0.15, // Reduced from 0.4 to 0.15 (62.5% faster)
          from: "start",
          ease: "power2.inOut"
        },
        ease: "back.out(1.4)" // Changed to back.out for snappier feel
      }, "-=0.1"); // Reduced overlap from -=0.2 to -=0.1

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Array of vh values for each card
  const cardVhPositions = [400, 500, 600, 720, 850];

  // Scroll to a fixed vh for each service card
  const scrollToService = (index) => {
    const targetVh = cardVhPositions[index] || 500;
    const y = window.innerHeight * (targetVh / 100);
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section
      id="services-overview-section"
      ref={sectionRef}
      className="relative bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 overflow-hidden"
      style={{
        height: "100vh",
        width: "100vw",
        paddingLeft: "2.5vw",
        paddingRight: "2.5vw"
      }}
    >
      {/* Ambient background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-200 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        
        {/* Top Section */}
        <div className="flex justify-between items-start" style={{ paddingTop: "17vh", height: "55vh" }}>
          
          {/* Left: Title and Description - Using 60% width */}
          <div className="w-3/5 pr-8 flex flex-col justify-start h-full">
            <h2 
              ref={titleRef}
              className="font-bruno-ace-sc font-bold text-black leading-tight mb-6"
              style={{
                fontFamily: 'var(--font-bruno-ace-sc), sans-serif',
                fontSize: 'clamp(1.7rem, 3.3vw, 3.3rem)',
                letterSpacing: '0.3em',
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              {"OUR SERVICES".split(' ').map((word, wordIndex) => (
                <div key={wordIndex} className="word" style={{ 
                  display: wordIndex === 0 ? 'block' : 'block',
                  overflow: 'hidden',
                  height: '1.2em',
                  marginBottom: wordIndex < 1 ? '0.1em' : '0'
                }}>
                  {word.split('').map((letter, letterIndex) => (
                    <span 
                      key={letterIndex} 
                      className="letter" 
                      style={{ 
                        display: 'inline-block',
                        transformStyle: 'preserve-3d'
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </div>
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
              className="font-poppins text-gray-700 leading-relaxed"
              style={{
                fontFamily: 'var(--font-poppins), sans-serif',
                fontSize: 'clamp(0.73rem, 1.47vw, 1.13rem)',
                maxWidth: '90%'
              }}
            >
              From design conceptualization to construction documentation, 
              we provide comprehensive AEC solutions tailored to your project needs. 
              Our expert team delivers precision, innovation, and excellence in every detail.
            </p>
          </div>

          {/* Right: Top 2 Service Cards */}
          <div className="w-2/5 flex items-start h-full justify-start" style={{ paddingTop: "0" }}>
            <div className="flex" style={{ gap: 'clamp(0.5rem, 1.5vw, 1.5rem)' }}>
              {topServices.map((service, index) => (
                <div
                  key={service.id}
                  ref={el => topCardsRef.current[index] = el}
                  className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-200/50"
                  style={{ 
                    height: "clamp(25vh, 35vh, 40vh)",
                    width: "17.5vw",
                    minHeight: "25vh",
                    maxHeight: "40vh",
                    flexShrink: 0,
                    flexGrow: 0
                  }}
                >
                  <div className="relative h-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Curtain reveal text overlay */}
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center p-6">
                      <h3 className="font-bruno-ace-sc font-bold text-black text-center mb-4" 
                          style={{ 
                            fontFamily: 'var(--font-bruno-ace-sc), sans-serif',
                            fontSize: 'clamp(1.2rem, 1.8vw, 1.5rem)' 
                          }}>
                        {service.title}
                      </h3>
                      <p className="font-poppins text-white/90 text-sm text-center mb-3" style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
                        {service.subtitle}
                      </p>
                      <p className="font-poppins text-white/80 text-xs text-center leading-relaxed" style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
                        {service.description}
                      </p>
                    </div>

                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white font-bold text-lg">{service.id}</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 group-hover:opacity-0 transition-opacity duration-300">
                      <h3 className="font-bruno-ace-sc font-bold text-white mb-1" 
                          style={{ 
                            fontFamily: 'var(--font-bruno-ace-sc), sans-serif',
                            fontSize: 'clamp(1rem, 1.5vw, 1.2rem)' 
                          }}>
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom: 5 Service Cards */}
        <div className="flex items-end justify-start w-full" style={{ paddingBottom: "8vh", height: "45vh", gap: 'clamp(0.5rem, 1.5vw, 1.5rem)' }}>
          {bottomServices.map((service, index) => (
            <div
              key={service.id}
              ref={el => bottomCardsRef.current[index] = el}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-200/50"
              style={{ 
                height: "clamp(25vh, 35vh, 40vh)",
                width: "17.5vw",
                minHeight: "25vh",
                maxHeight: "40vh",
                flexShrink: 0,
                flexGrow: 0
              }}
              onClick={() => scrollToService(index)}
            >
              <div className="relative h-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Curtain reveal text overlay */}
                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center p-6">
                  <h3 className="font-bruno-ace-sc font-bold text-white text-center mb-4" 
                      style={{ 
                        fontFamily: 'var(--font-bruno-ace-sc), sans-serif',
                        fontSize: 'clamp(1.2rem, 1.8vw, 1.5rem)' 
                      }}>
                    {service.title}
                  </h3>
                  <p className="font-poppins text-white/90 text-sm text-center mb-3" style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
                    {service.subtitle}
                  </p>
                  <p className="font-poppins text-white/80 text-xs text-center leading-relaxed" style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
                    {service.description}
                  </p>
                </div>

                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-bold text-lg">{service.id}</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="font-bruno-ace-sc font-bold text-black mb-1" 
                      style={{ 
                        fontFamily: 'var(--font-bruno-ace-sc), sans-serif',
                        fontSize: 'clamp(1rem, 1.5vw, 1.3rem)' 
                      }}>
                    {service.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
