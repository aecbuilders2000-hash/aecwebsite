"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ClientsSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, contentRef.current], { opacity: 0, y: 30 });

      // Create timeline for entrance animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      })
      .to(contentRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out"
      }, 0.2);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center justify-center bg-gray-50 text-gray-900 border-t border-b border-gray-300"
      style={{
        height: "100vh",
        width: "100vw",
        padding: "32px 0",
      }}
    >
      <h2 
        ref={titleRef} 
        className="font-bold text-gray-900"
        style={{ 
          fontSize: "2rem", 
          marginBottom: 24 
        }}
      >
        Trusted by Clients
      </h2>
      <div 
        ref={contentRef} 
        className="text-gray-600 italic"
        style={{ 
          fontSize: 18 
        }}
      >
        {/* Client logos or names will go here */}
        Client logos coming soon...
      </div>
    </section>
  );
}
