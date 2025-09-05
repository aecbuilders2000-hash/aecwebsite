"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const testimonialsRef = useRef(null);

  const baseTestimonials = [
    { id: 1, text: "Amazing work!", width: "18vw", height: "38vh" },
    { id: 2, text: "Professional and reliable.", width: "26vw", height: "28vh" },
    { id: 3, text: "Exceeded expectations!", width: "32vw", height: "44vh" },
    { id: 4, text: "Great communication.", width: "22vw", height: "28vh" },
    { id: 5, text: "Would hire again!", width: "20vw", height: "38vh" },
    { id: 6, text: "Superb design!", width: "24vw", height: "32vh" },
    { id: 7, text: "Fast delivery!", width: "18vw", height: "28vh" },
    { id: 8, text: "Creative solutions.", width: "26vw", height: "28vh" },
    { id: 9, text: "Top-notch support.", width: "20vw", height: "34vh" },
    { id: 10, text: "Highly recommended!", width: "24vw", height: "32vh" },
  ];
  const testimonials = baseTestimonials;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(titleRef.current, { opacity: 0, y: 30 });
      gsap.set(".testimonial-card", { opacity: 0, y: 50, scale: 0.9 });

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
      .to(".testimonial-card", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: {
          amount: 1.2,
          from: "start"
        },
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
        background: "var(--gray-0)",
        color: "var(--gray-9)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderTop: "1px solid var(--gray-3)",
        borderBottom: "1px solid var(--gray-3)",
        padding: "48px 0 32px 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <h2 ref={titleRef} style={{ fontSize: "2.2rem", fontWeight: "bold", marginBottom: 32 }}>
        Testimonials
      </h2>
      <div
        style={{
          width: "100vw",
          overflowX: "auto",
          overflowY: "hidden",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div
          className="testimonial-scroll-row"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 40,
            width: "max-content",
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testimonial-card"
              style={{
                flex: "0 0 auto",
                width: t.width,
                height: t.height,
                background: "var(--gray-2)",
                border: "2px solid var(--gray-4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
                fontWeight: 500,
                color: "var(--gray-7)",
                boxShadow: "0 2px 8px 0 rgba(0,0,0,0.04)",
                marginLeft: i === 0 ? 0 : 24,
                marginRight: i === testimonials.length - 1 ? 0 : 24,
              }}
            >
              {t.text}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .testimonial-scroll-row {
          scrollbar-width: none;
        }
        .testimonial-scroll-row::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for the parent scroll container as well */
        section > div {
          scrollbar-width: none;
        }
        section > div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
