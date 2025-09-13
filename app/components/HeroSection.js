"use client";

import React, { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MorphingButton from "../ui/MorphingButton";

gsap.registerPlugin(ScrollTrigger);

function WaveNavLink({ href, text, onClick }) {
  const letters = text.split("");
  const linkRef = useRef(null);
  const router = useRouter();

  const handleMouseEnter = () => {
    if (!linkRef.current) return;
    const letterSpans = linkRef.current.querySelectorAll(".wave-letter");
    letterSpans.forEach((span, i) => {
      gsap.to(span, {
        y: -10,
        scale: 1.0,
        rotation: (Math.random() - 0.5) * 8,
        duration: 0.4,
        ease: "back.out(2.5)",
        delay: i * 0.04,
      });
      gsap.to(span, {
        y: 0,
        scale: 1,
        rotation: 0,
        duration: 0.8,
        delay: 0.1 + i * 0.04,
        ease: "elastic.out(1, 0.4)",
      });
    });
  };

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
      return;
    }
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      let target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }
    e.preventDefault();
    try {
      router.push(href);
    } catch {
      window.location.href = href;
    }
  };

  return (
    <a
      href={href}
      ref={linkRef}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      style={{
        fontFamily: "var(--font-century-gothic), Century Gothic, sans-serif",
        fontWeight: 600,
        fontSize: "clamp(0.5rem, 1vw, 1rem)",
        color: "#000",
        textDecoration: "none",
        letterSpacing: "0.1em",
        marginRight: "0.5vw",
        transition: "color 0.2s",
        display: "inline-block",
        cursor: "pointer",
      }}
    >
      {letters.map((char, i) => (
        <span
          key={i}
          className="wave-letter"
          style={{ display: "inline-block", willChange: "transform", pointerEvents: "none" }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </a>
  );
}

export default function HeroSection() {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const logoRef = useRef(null);
  const topLeftTextRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    gsap.to(".reveal-column", { y: "-100%", duration: 1.2, stagger: 0.2, ease: "power4.inOut", delay: 0.2 });

    if (logoRef.current) {
      gsap.set(logoRef.current, {
        width: "70vw",
        scale: 1,
        left: "50%",
        x: "-50%",
        bottom: "5vh",
        position: "fixed",
        zIndex: 1002,
        // ✅ FIX 1: Change transform origin to the top-left corner.
        transformOrigin: "left top", 
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "30vh", 
          scrub: 1,
        },
      });

      tl.to(logoRef.current, {
        scale: 0.18,
        left: "2.5vw",
        x: "0%",
        // ✅ FIX 2: Set final top position to exactly 2.5vh.
        top: "2.5vh", 
        bottom: "auto",
        ease: "none",
      });
    }

    if (topLeftTextRef.current) {
      ScrollTrigger.create({
        trigger: "body",
        start: "top top",
        end: "20vh",
        scrub: 1,
        onUpdate: (self) => {
          gsap.set(topLeftTextRef.current, {
            opacity: 1 - self.progress,
            y: -30 * self.progress,
            marginRight: "2vw",
          });
        },
      });
    }

    if (heroRef.current) {
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        scrub: false,
      });
    }

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play().catch(() => {});
          } else {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.1 }
    );
    document.addEventListener("click", () => videoRef.current?.play(), { once: true });
    if (heroRef.current) observer.observe(heroRef.current);

    return () => {
      observer.disconnect();
      document.removeEventListener("click", () => videoRef.current?.play());
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleVideoLoad = () => setIsVideoLoaded(true);

  return (
    <>
      <img
        ref={logoRef}
        src="/COLLECTIVE AEC LOGO landscape.png"
        alt="Collective AEC Logo"
        className="select-none cursor-pointer"
        style={{
          maxWidth: "none",
          zIndex: 1002,
          position: "fixed",
        }}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          if (window.location.pathname !== "/") {
            window.location.href = "/";
          }
        }}
      />

      <div
        className="fixed w-full flex items-center justify-between"
        style={{
          // float slightly below the top and center with reduced width so it appears floating
          top: "1.2vh",
          left: "50%",
          transform: "translateX(-50%)",
            width: "calc(100% - 2.5vw)",
          zIndex: 1001,
          display: "flex",
          alignItems: "center",
          gap: "5vw",
          background: "rgba(255,255,255,0.18)",
          boxShadow: "0 6px 44px rgba(0,0,0,0.10)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,0.12)",
            padding: "0.35vw 1.6vw",
            borderRadius: "9999px", // fully pill-shaped (rounded-full)
        }}
      >
        <div
          ref={topLeftTextRef}
          className="font-bruno-ace-sc font-normal leading-tight select-none"
          style={{
            fontFamily: "var(--font-bruno-ace-sc), sans-serif",
            fontSize: "clamp(0.8rem, 1.5vw, 1.2rem)",
            color: "#000",
            letterSpacing: "0.3em",
            marginRight: "2vw",
          }}
        >
          <div>DESIGN MORE</div>
          <div>MANAGE LESS</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "5vw" }}>
          {[
            {
              href: "#content-section-details",
              label: "About Us",
              onClick: (e) => {
                e.preventDefault();
                // Scroll to 200vh (two viewports down)
                const top = window.innerHeight * 2;
                window.scrollTo({ top, behavior: "smooth" });
              },
            },
            { href: "#services-overview-section", label: "Our Services" },
            { href: "#projects-section", label: "Projects" },
            { href: "/news", label: "News" },
            { href: "/careers", label: "Careers" },
          ].map((nav) => (
            <WaveNavLink key={nav.label} href={nav.href} text={nav.label} onClick={nav.onClick} />
          ))}
          <MorphingButton
            text="Let's Collaborate"
            fontFamily="var(--font-century-gothic), Century Gothic, sans-serif"
            style={{ margin: "0" }}
            onClick={() => {
              const contactSection = document.getElementById("contact-us-section");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          />
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          display: "flex",
          zIndex: 1003,
          pointerEvents: "none",
        }}
      >
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`reveal-column reveal-column-${i}`}
            style={{ flex: 1, background: "#000", height: "100%", transform: "translateY(0)", willChange: "transform" }}
          />
        ))}
      </div>

      <section
        ref={heroRef}
        className="relative flex items-center justify-center overflow-hidden bg-black text-white"
        style={{ minHeight: "100vh", width: "100vw", borderBottom: "1px solid var(--gray-3)" }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={handleVideoLoad}
          webkit-playsinline="true"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 0,
            objectFit: "cover",
            pointerEvents: "none",
          }}
        >
    <source src="/WhatsApp Video 2025-09-13 at 11.40.17_6e976e94.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {!isVideoLoaded && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: `url('/image.png') center/cover no-repeat`,
              zIndex: -1,
            }}
          />
        )}
      </section>
    </>
  );
}