"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { 
    title: "Architectural Design", 
    description: "Innovative and sustainable architectural solutions",
    color: "#1a1a1a",
    accent: "#ff6b35"
  },
  { 
    title: "Interior Design", 
    description: "Transforming spaces with creative interior concepts",
    color: "#2d3748",
    accent: "#4299e1"
  },
  { 
    title: "Project Management", 
    description: "End-to-end project coordination and delivery",
    color: "#1a202c",
    accent: "#38b2ac"
  },
  { 
    title: "3D Visualization", 
    description: "Photorealistic renders and virtual walkthroughs",
    color: "#2c5282",
    accent: "#ed8936"
  },
  { 
    title: "Landscape Design", 
    description: "Harmonious outdoor spaces and garden planning",
    color: "#276749",
    accent: "#68d391"
  },
  { 
    title: "Construction Supervision", 
    description: "Quality assurance and construction oversight",
    color: "#744210",
    accent: "#f6e05e"
  },
  { 
    title: "Sustainable Solutions", 
    description: "Eco-friendly and energy-efficient building systems",
    color: "#553c9a",
    accent: "#b794f6"
  },
];

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const cards = cardRefs.current;
    if (!cards.length) return;

    // Set initial positions - all cards stacked at the same position
    cards.forEach((card, index) => {
      gsap.set(card, {
        y: 0,
        scale: 1,
        opacity: 1,
        zIndex: services.length - index,
        transformOrigin: "center center"
      });
    });

    // Create the main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      }
    });

    // Animate each card stacking effect
    cards.forEach((card, index) => {
      if (index === 0) return; // Skip first card as it's the base

      // Calculate when this card should start its animation
      const startProgress = (index - 1) / (services.length - 1);
      
      // Animate the current card coming in
      tl.fromTo(card, 
        { 
          y: "100vh",
          scale: 1,
          opacity: 1
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.3,
          ease: "power2.out"
        },
        startProgress
      );

      // Animate previous cards shrinking and fading
      for (let prevIndex = 0; prevIndex < index; prevIndex++) {
        const prevCard = cards[prevIndex];
        const shrinkAmount = 0.95 - (index - prevIndex) * 0.05; // Progressive shrinking
        const opacityAmount = 0.7 - (index - prevIndex) * 0.1; // Progressive fading
        
        tl.to(prevCard,
          {
            scale: shrinkAmount,
            opacity: Math.max(opacityAmount, 0.2),
            y: -(index - prevIndex) * 20, // Slight upward offset
            duration: 0.3,
            ease: "power2.out"
          },
          startProgress
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black overflow-hidden"
      style={{
        height: "700vh", // 7 cards * 100vh each
        width: "100vw",
      }}
    >
      {services.map((service, index) => (
        <div
          key={index}
          ref={el => cardRefs.current[index] = el}
          className="absolute top-0 left-0 w-full h-screen flex items-center justify-center"
          style={{
            backgroundColor: service.color,
          }}
        >
          <div className="text-center text-white px-8 max-w-4xl">
            <div 
              className="w-20 h-1 mx-auto mb-8"
              style={{ backgroundColor: service.accent }}
            />
            
            <h2 
              className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
              style={{ 
                fontFamily: 'var(--font-bruno-ace-sc), sans-serif',
                color: service.accent 
              }}
            >
              {service.title}
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              {service.description}
            </p>
            
            <div className="flex items-center justify-center space-x-4">
              <span className="text-gray-400 text-lg">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="w-16 h-px bg-gray-600" />
              <span className="text-gray-400 text-lg">
                {String(services.length).padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* Background pattern */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              background: `radial-gradient(circle at 20% 80%, ${service.accent} 0%, transparent 50%), 
                          radial-gradient(circle at 80% 20%, ${service.accent} 0%, transparent 50%)`,
            }}
          />

          {/* Corner decorations */}
          <div 
            className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2"
            style={{ borderColor: service.accent }}
          />
          <div 
            className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2"
            style={{ borderColor: service.accent }}
          />
          <div 
            className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2"
            style={{ borderColor: service.accent }}
          />
          <div 
            className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2"
            style={{ borderColor: service.accent }}
          />
        </div>
      ))}
    </section>
  );
}
