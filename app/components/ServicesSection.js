"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ArchitectureServices from "./ArchitectureServices";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Architectural Design",
    description: "Innovative and sustainable architectural solutions",
    color: "#1a1a1a",
    accent: "#ff6b35",
    content: <ArchitectureServices 
      introText="Beyond sales, our expertise extends to tiling, screed work, interior plastering, and façade construction."
      imageUrl="/SanBridge.png"
      serviceName="ARCHITECTURAL"
      pageNumber="001/007"
      services={["Revit", "AutoCAD", "ArchiCAD", "BIM modeling"]}
      bottomText="Your brand's compass. It defines purpose, sharpens positioning, and ensures every decision you make resonates with your audience."
    />
  },
  {
    title: "Interior Design",
    description: "Transforming spaces with creative interior concepts",
    color: "#2d3748",
    accent: "#4299e1",
    content: <ArchitectureServices 
      introText="Creating beautiful, functional interior spaces that reflect your style and enhance daily living experiences."
      imageUrl="/ModernVilla.png"
      serviceName="INTERIOR"
      pageNumber="002/007"
      services={["SketchUp", "3ds Max", "V-Ray", "AutoCAD"]}
      bottomText="Interior design transforms spaces into personalized environments that inspire comfort and productivity while reflecting your unique aesthetic."
    />
  },
  {
    title: "Project Management",
    description: "End-to-end project coordination and delivery",
    color: "#1a202c",
    accent: "#38b2ac",
    content: <ArchitectureServices 
      introText="Comprehensive project oversight ensuring timely delivery, budget control, and quality standards throughout the construction process."
      imageUrl="/SanBridge.png"
      serviceName="PROJECT MANAGEMENT"
      pageNumber="003/007"
      services={["Primavera P6", "MS Project", "Procore", "Bluebeam"]}
      bottomText="Effective project management coordinates all stakeholders, resources, and timelines to deliver successful construction projects on time and within budget."
    />
  },
  {
    title: "3D Visualization",
    description: "Photorealistic renders and virtual walkthroughs",
    color: "#2c5282",
    accent: "#ed8936",
    content: <ArchitectureServices 
      introText="Bringing designs to life with stunning photorealistic visualizations and immersive virtual reality experiences."
      imageUrl="/ModernVilla.png"
      serviceName="3D VISUALIZATION"
      pageNumber="004/007"
      services={["3ds Max", "V-Ray", "Unreal Engine", "Lumion"]}
      bottomText="3D visualization bridges the gap between concept and reality, allowing clients to experience spaces before they're built."
    />
  },
  {
    title: "Landscape Design",
    description: "Harmonious outdoor spaces and garden planning",
    color: "#276749",
    accent: "#68d391",
    content: <ArchitectureServices 
      introText="Designing sustainable outdoor environments that complement architecture and enhance the natural landscape."
      imageUrl="/SanBridge.png"
      serviceName="LANDSCAPE"
      pageNumber="005/007"
      services={["AutoCAD", "SketchUp", "Lumion", "Adobe Creative"]}
      bottomText="Landscape design creates outdoor spaces that harmonize with architecture while promoting environmental sustainability and human well-being."
    />
  },
  {
    title: "Construction Supervision",
    description: "Quality assurance and construction oversight",
    color: "#744210",
    accent: "#f6e05e",
    content: <ArchitectureServices 
      introText="On-site supervision ensuring construction quality, safety compliance, and adherence to architectural specifications."
      imageUrl="/ModernVilla.png"
      serviceName="CONSTRUCTION"
      pageNumber="006/007"
      services={["Procore", "PlanGrid", "Safety Software", "Quality Control"]}
      bottomText="Construction supervision ensures projects meet design intent, quality standards, and safety regulations throughout the building process."
    />
  },
  {
    title: "Sustainable Solutions",
    description: "Eco-friendly and energy-efficient building systems",
    color: "#553c9a",
    accent: "#b794f6",
    content: <ArchitectureServices 
      introText="Implementing green building technologies and sustainable design practices for environmentally responsible construction."
      imageUrl="/SanBridge.png"
      serviceName="SUSTAINABLE"
      pageNumber="007/007"
      services={["Green Building", "LEED Certification", "Energy Modeling", "Renewable Systems"]}
      bottomText="Sustainable solutions reduce environmental impact while creating healthier, more efficient buildings for future generations."
    />
  },
];

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const cards = cardRefs.current;
    if (!cards.length) return;

    // Set initial positions
    cards.forEach((card, index) => {
      gsap.set(card, {
        y: index === 0 ? 0 : "100vh",
        scale: 1,
        opacity: 1,
        zIndex: index + 1,
        transformOrigin: "center center"
      });
    });

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${(services.length - 1) * window.innerHeight}`, // Exact scroll distance needed
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      }
    });

    // Animate each card (except first)
    services.forEach((_, index) => {
      if (index === 0) return;

      // Simple linear distribution: card 1 at 0.2, card 2 at 0.4, etc.
      const progress = index / services.length;

      // Current card slides up
      tl.fromTo(cards[index],
        { y: "100vh" },
        { y: 0, duration: 0.15, ease: "power2.out" },
        progress
      );

      // Previous cards shrink and fade
      for (let prevIndex = 0; prevIndex < index; prevIndex++) {
        const depth = index - prevIndex;
        tl.to(cards[prevIndex], {
          scale: Math.max(0.95 - depth * 0.03, 0.8),
          opacity: Math.max(1 - depth * 0.15, 0.2),
          y: -depth * 8,
          duration: 0.2,
          ease: "power1.inOut"
        }, progress);
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gray-100"
      style={{
        height: "100vh", // Just one viewport height for the visual content
        width: "100vw",
        backgroundColor: "#f7f7f7",
      }}
    >
      {services.map((service, index) => {
        return (
          service.content ? (
            <div 
              key={index} 
              ref={el => cardRefs.current[index] = el}
              className="absolute top-0 left-0 w-full h-screen"
            >
              {service.content}
            </div>
          ) : (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el
              }
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
          )
        )
      })}
    </section >
  );
}
