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
      style={{
        height: "100vh",
        width: "100vw",
        background: "var(--gray-1)",
        color: "var(--gray-9)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderTop: "1px solid var(--gray-3)",
        borderBottom: "1px solid var(--gray-3)",
        padding: "32px 0",
      }}
    >
      <h2 ref={titleRef} style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: 24 }}>
        Trusted by Clients
      </h2>
      <div ref={contentRef} style={{ fontSize: 18, color: "var(--gray-6)" }}>
        {/* Client logos or names will go here */}
        <em>Client logos coming soon...</em>
      </div>
    </section>
  );
}
