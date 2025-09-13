"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CardServices from "./ServicesCard";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "BIM Services",
    description: "Advanced Building Information Modeling solutions",
    color: "#744210",
    accent: "#f6e05e",
    content: (
      <CardServices
        introText="Comprehensive BIM services leveraging cutting-edge technology for enhanced project coordination, clash detection, and lifecycle management."
        imageUrl="https://i.postimg.cc/pLRdCNV7/BIMService.png"
        serviceName="BIM SERVICES"
        pageNumber="001/005"
        services={[
          "BIM Consulting Services",
          "Scan to BIM",
          "BIM Coordination",
          "BIM Clash Detection",
          "4D BIM Services",
          "Quantity Takeoff",
        ]}
        bottomText="Our BIM services empower your project with advanced coordination, clash detection, and data-driven decision making."
      />
    ),
  },
  {
    title: "MEP Design",
    description: "Integrated mechanical, electrical, and plumbing solutions",
    color: "#2c5282",
    accent: "#ed8936",
    content: (
      <CardServices
        introText="Complete MEP design and coordination services ensuring seamless integration of building systems through advanced BIM technology."
        imageUrl="https://i.postimg.cc/sxmY2YTD/MEPService.png"
        serviceName="MEP"
        pageNumber="002/005"
        services={[
          "MEP BIM Services",
          "MEP BIM Coordination",
          "Clash Detection",
          "MEP Shop Drawings",
          "MEP CAD Drafting",
          "HVAC Design",
        ]}
        bottomText="Our MEP services deliver integrated building systems for optimal performance, comfort, and sustainability."
      />
    ),
  },
  {
    title: "Architectural Design",
    description: "Innovative and sustainable architectural solutions",
    color: "#1a1a1a",
    accent: "#ff6b35",
    content: (
      <CardServices
        introText="Comprehensive architectural design services from concept to construction documentation, creating innovative spaces that balance aesthetics with functionality."
        imageUrl="https://i.postimg.cc/1tkmN2Yv/Architecture-Service.png"
        serviceName="ARCHITECTURAL"
        pageNumber="003/005"
        services={[
          "Architectural Design Services",
          "Architectural BIM Services",
          "Architectural CAD Drafting",
          "Construction Drawings",
        ]}
        bottomText="We transform your vision into buildable reality through detailed architectural solutions that meet both creative aspirations and technical requirements."
      />
    ),
  },
  {
    title: "Structural Design",
    description: "Robust structural engineering and detailing",
    color: "#1a202c",
    accent: "#38b2ac",
    content: (
      <CardServices
        introText="Specialized structural engineering services providing detailed steel and rebar solutions for safe, efficient construction projects."
        imageUrl="https://i.postimg.cc/qRhBq4Qt/Structure-Service.png"
        serviceName="STRUCTURAL"
        pageNumber="004/005"
        services={[
          "Structural Steel Detailing",
          "Rebar Detailing Services",
          "Structural CAD Drafting",
          "Steel Shop Drawings",
          "Structural BIM Services",
          "Connection Design",
        ]}
        bottomText="Our structural solutions ensure safety, efficiency, and compliance, supporting your project from design through construction."
      />
    ),
  },
  {
    title: "3D Visualization",
    description: "Photorealistic renders and virtual experiences",
    color: "#276749",
    accent: "#68d391",
    content: (
      <CardServices
        introText="Stunning 3D visualizations and renderings that bring your designs to life, helping clients visualize spaces before construction begins."
        imageUrl="https://i.postimg.cc/8CnPTjdQ/3d-Visualiser.png"
        serviceName="3D VISUALIZATION"
        pageNumber="005/005"
        services={["3D Rendering", "3D Floor Plan Services"]}
        bottomText="Our visualization services bridge the gap between imagination and reality, making complex designs accessible to all stakeholders."
      />
    ),
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
        transformOrigin: "center bottom",
        perspective: "1000px",
        transformStyle: "preserve-3d",
      });
    });

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${services.length * window.innerHeight}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Animate each card (except first)
    services.forEach((_, index) => {
    if (index === 0) return;
    const progress = (index - 1) / (services.length - 1);
      tl.fromTo(
        cards[index],
        { y: "100vh" },
        { y: 0, duration: 0.15, ease: "power2.out" },
        progress
      );
      for (let prevIndex = 0; prevIndex < index; prevIndex++) {
        const depth = index - prevIndex;
        tl.to(
          cards[prevIndex],
          {
            scale: Math.max(0.85 - depth * 0.08, 0.6),
            opacity: Math.max(1 - depth * 0.25, 0.15),
            y: -depth * 15,
            z: -depth * 30,
            rotationX: depth * 2,
            transformOrigin: "center bottom",
            duration: 0.2,
            ease: "power1.inOut",
          },
          progress
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="services-section"
      ref={sectionRef}
      className="relative overflow-hidden bg-gray-100 w-screen"
      style={{
        height: "100vh", // Just one viewport height for the visual content
        perspective: "1200px",
        transformStyle: "preserve-3d",
      }}
    >
      {services.map((service, index) => {
        return service.content ? (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="absolute top-0 left-0 w-full h-screen"
          >
            {service.content}
          </div>
        ) : (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
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
                className="font-bruno-ace-sc font-bold mb-6 leading-tight text-6xl md:text-8xl"
                style={{
                  fontFamily: "var(--font-bruno-ace-sc), sans-serif",
                  color: service.accent,
                }}
              >
                {service.title}
              </h2>

              <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
                {service.description}
              </p>

              <div className="flex items-center justify-center space-x-4">
                <span className="text-gray-400 text-lg">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="w-16 h-px bg-gray-600" />
                <span className="text-gray-400 text-lg">
                  {String(services.length).padStart(2, "0")}
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
        );
      })}
    </section>
  );
}
