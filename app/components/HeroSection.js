"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const collectiveTextRef = useRef(null);
  const topLeftTextRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // Performance optimization: Pause video when out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play().catch(console.log);
          } else {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    // GSAP reveal animation
    gsap.to(".reveal-column", {
      y: "-100%",
      duration: 1.2,
      stagger: 0.2,
      ease: "power4.inOut",
      delay: 0.2,
    });

    // Collective text scroll animation
    if (collectiveTextRef.current) {
      // Set initial state - bottom center, large size
      gsap.set(collectiveTextRef.current, {
        fontSize: "clamp(2rem, 9vw, 15.2rem)",
        x: "-50%",
        y: "0%",
        left: "50%",
        bottom: "2.5vh",
        position: "fixed",
        zIndex: 1000,
        transformOrigin: "left center"
      });

      // Create the scroll-triggered animation
      ScrollTrigger.create({
        trigger: "body",
        start: "top top",
        end: "300px top", // Adjust this value to control when the animation completes
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          
          // Calculate positions and sizes based on scroll progress
          const fontSize = gsap.utils.interpolate(
            "clamp(2rem, 9vw, 15.2rem)", 
            "clamp(1.2rem, 2.5vw, 2rem)", 
            progress
          );
          
          // Move from center to left
          const xPos = gsap.utils.interpolate(-50, 0, progress);
          
          // Move from bottom to top
          const bottomPos = gsap.utils.interpolate(2.5, 95, progress);
          const leftPos = gsap.utils.interpolate(50, 2, progress);
          
          gsap.set(collectiveTextRef.current, {
            fontSize: fontSize,
            x: `${xPos}%`,
            left: `${leftPos}%`,
            bottom: `${bottomPos}vh`,
          });
        }
      });

      // Create a second ScrollTrigger for the sticky behavior
      ScrollTrigger.create({
        trigger: "body",
        start: "300px top",
        end: "bottom bottom",
        onEnter: () => {
          // Stick to top-left corner when entering this zone
          gsap.set(collectiveTextRef.current, {
            position: "fixed",
            top: "2vh",
            left: "2vw",
            bottom: "auto",
            fontSize: "clamp(1.2rem, 2.5vw, 2rem)",
            x: "0%",
            zIndex: 1000
          });
        },
        onLeaveBack: () => {
          // Only reset to bottom when scrolling back up past 300px
          gsap.set(collectiveTextRef.current, {
            position: "fixed",
            bottom: "2.5vh",
            top: "auto",
            left: "50%",
            fontSize: "clamp(2rem, 9vw, 15.2rem)",
            x: "-50%",
            zIndex: 1000
          });
        }
      });
    }

    // Top-left text scroll animation
    if (topLeftTextRef.current) {
      ScrollTrigger.create({
        trigger: "body",
        start: "top top",
        end: "200px top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          // Fade out and move up slightly as user scrolls
          const opacity = gsap.utils.interpolate(1, 0, progress);
          const yPos = gsap.utils.interpolate(0, -30, progress);
          
          gsap.set(topLeftTextRef.current, {
            opacity: opacity,
            y: yPos,
          });
        }
      });
    }

    // ScrollTrigger for pinning hero section
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

    return () => {
      observer.disconnect();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Video event handlers for optimization
  const handleVideoLoad = () => {
    console.log('Video loaded successfully');
    setIsVideoLoaded(true);
  };

  const handleVideoError = (e) => {
    console.warn('Video loading failed:', e);
    setIsVideoLoaded(false);
  };

  const handleCanPlay = () => {
    console.log('Video can play');
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Auto-play failed:', error);
      });
    }
  };

  return (
    <>
      {/* COLLECTIVE text - positioned outside hero section for global scroll effect */}
      <div
        ref={collectiveTextRef}
        style={{
          fontFamily: 'var(--font-bruno-ace-sc), sans-serif',
          fontWeight: 400,
          color: '#fff',
          textShadow: '0 4px 20px rgba(0,0,0,0.8)',
          letterSpacing: '0.05em',
          userSelect: 'none',
          pointerEvents: 'none',
          mixBlendMode: 'difference', // Cool effect over different backgrounds
          padding: '0 4vw', // Increased horizontal padding
          textAlign: 'center', // Center align the text
          maxWidth: '92vw', // More conservative max width
          overflow: 'hidden', // Hide any potential overflow
          whiteSpace: 'nowrap', // Keep text on one line
          boxSizing: 'border-box', // Include padding in width calculation
        }}
      >
        COLLECTIVE
      </div>

      {/* Top Right Collaboration Button */}
      <button
        style={{
          position: 'fixed',
          top: '3vh',
          right: '3vw',
          zIndex: 1001,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 'clamp(0.3rem, 1vw, 0.6rem)',
          paddingLeft: 'clamp(0.6rem, 2vw, 1.5rem)',
          backgroundColor: '#fff',
          border: 'none',
          borderRadius: '50px',
          cursor: 'pointer',
          fontFamily: 'var(--font-geist-sans), sans-serif',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          gap: 'clamp(0.4rem, 1.5vw, 1rem)',
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#000';
          const textSpan = e.target.querySelector('.button-text');
          const circle = e.target.querySelector('.arrow-circle');
          const arrow = e.target.querySelector('.arrow-icon');
          
          if (textSpan) {
            textSpan.style.color = '#fff';
            textSpan.style.backgroundColor = 'transparent';
          }
          if (circle) circle.style.backgroundColor = '#fff';
          if (arrow) {
            arrow.style.stroke = '#000';
            arrow.style.transform = 'rotate(0deg)'; // Right arrow on hover
          }
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#fff';
          const textSpan = e.target.querySelector('.button-text');
          const circle = e.target.querySelector('.arrow-circle');
          const arrow = e.target.querySelector('.arrow-icon');
          
          if (textSpan) textSpan.style.color = '#000';
          if (circle){
            circle.style.backgroundColor = '#000';
          }
          if (arrow) {
            arrow.style.stroke = '#fff';
            arrow.style.backgroundColor = "transparent";
            arrow.style.transform = 'rotate(-45deg)'; // Top-right arrow initially
          }
        }}
      >
        {/* Text */}
        <span
          className="button-text"
          style={{
            color: '#000',
            backgroundColor: 'transparent',
            fontSize: 'clamp(0.7rem, 1.8vw, 0.95rem)',
            fontWeight: '500',
            transition: 'color 0.3s ease',
            whiteSpace: 'nowrap',
          }}
        >
          Let&apos;s collaborate
        </span>
        
        {/* Circle inside the button */}
        <div
          className="arrow-circle"
          style={{
            width: 'clamp(20px, 6vw, 36px)',
            height: 'clamp(20px, 6vw, 36px)',
            backgroundColor: '#000',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
            flexShrink: 0,
          }}
        >
          <svg 
            className="arrow-icon"
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#fff" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={{
              transform: 'rotate(-45deg)', // Top-right diagonal initially
              transition: 'all 0.3s ease',
              width: 'clamp(10px, 3vw, 16px)',
              height: 'clamp(10px, 3vw, 16px)',
            }}
          >
            <path d="M7 7h10v10" />
            <path d="M7 17L17 7" />
          </svg>
        </div>
      </button>

      <section
        ref={heroRef}
        style={{
          minHeight: "100vh",
          width: "100vw",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          backgroundColor: "#000", // Fallback background
          color: "#fff",
          borderBottom: "1px solid var(--gray-3)",
        }}
      >
        {/* Top Left Text - Part of hero section */}
        <div
          ref={topLeftTextRef}
          style={{
            position: 'absolute',
            top: '3vh',
            left: '3vw',
            zIndex: 2,
            color: '#fff',
            fontFamily: 'var(--font-bruno-ace-sc), sans-serif',
            fontSize: 'clamp(1.2rem, 2.5vw, 2rem)',
            fontWeight: 400,
            lineHeight: '1.2',
            textShadow: '0 2px 8px rgba(0,0,0,0.6)',
            userSelect: 'none',
            letterSpacing: '0.05em',
          }}
        >
          <div>Design more</div>
          <div>Manage Less</div>
        </div>
      {/* Hero Video Background with Awwwards-level optimizations */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onLoadedData={handleVideoLoad}
        onCanPlay={handleCanPlay}
        onError={handleVideoError}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          minWidth: "100%",
          minHeight: "100%",
          width: "auto",
          height: "auto",
          zIndex: 0,
          transform: "translate(-50%, -50%)",
          objectFit: "cover",
          // Performance optimizations
          backfaceVisibility: "hidden",
          perspective: 1000,
          willChange: "transform",
          // Show video by default
          opacity: 1,
        }}
        // Accessibility
        aria-label="Hero background video"
        // Additional performance attributes
        disablePictureInPicture
        disableRemotePlayback
      >
        {/* MP4 - Your specific video file */}
        <source src="/CollectiveAEC_Hero_Video.mp4" type="video/mp4" />
        {/* Fallback text */}
        Your browser does not support the video tag.
      </video>

      {/* Loading placeholder/fallback image - only show if video fails */}
      {!isVideoLoaded && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: `url('/Gemini_Generated_Image_yba538yba538yba5 1.png') center/cover no-repeat`,
            zIndex: -1, // Behind video
          }}
        />
      )}

      {/* Enhanced video overlay for better text readability */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          // Gradient overlay for better text contrast
          background: "rgba(0,0,0,0.4)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* GSAP Reveal Columns */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          zIndex: 3,
        }}
      >
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`reveal-column reveal-column-${i}`}
            style={{
              flex: 1,
              background: "#000",
              height: "100%",
              transform: "translateY(0)", // GSAP will animate this
              willChange: "transform",
            }}
          />
        ))}
      </div>
    </section>
    </>
  );
}
