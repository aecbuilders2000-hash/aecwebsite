"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MorphingButton from "../ui/MorphingButton";


gsap.registerPlugin(ScrollTrigger);

// WaveNavLink component for animated navbar links
function WaveNavLink({ href, text }) {
  const linkRef = React.useRef(null);

  // Split text into spans for each letter
  const letters = text.split("");

  // Animate wave on hover
  const handleMouseEnter = () => {
    if (!linkRef.current) return;
    const letterSpans = linkRef.current.querySelectorAll(".wave-letter");
    letterSpans.forEach((span, i) => {
      gsap.to(span, {
        y: -10,
        scale: 1.2,
        rotation: (Math.random() - 0.5) * 8,
        duration: 0.4,
        ease: "back.out(2.5)",
        delay: i * 0.04
      });
      gsap.to(span, {
        y: 0,
        scale: 1,
        rotation: 0,
        duration: 0.8,
        delay: 0.1 + i * 0.04,
        ease: "elastic.out(1, 0.4)"
      });
    });
  };

  // Smooth scroll to section on click
  const handleClick = (e) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a
      href={href}
      ref={linkRef}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      style={{
        fontFamily: 'var(--font-century-gothic), Century Gothic, sans-serif',
        fontWeight: 600,
        fontSize: 'clamp(1rem, 2vw, 1.125rem)',
        color: '#000',
        textDecoration: 'none',
        letterSpacing: '0.1em',
        marginRight: '0.5vw',
        transition: 'color 0.2s',
        display: 'inline-block',
        cursor: 'pointer',
      }}
    >
      {letters.map((char, i) => (
        <span
          key={i}
          className="wave-letter"
          style={{
            display: 'inline-block',
            willChange: 'transform',
            pointerEvents: 'none',
          }}
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
  const collectiveTextRef = useRef(null);
  const topLeftTextRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // Enhanced video management with power-saving workaround
    const startVideo = async () => {
      if (videoRef.current) {
        try {
          console.log('Loading new video...');
          const video = videoRef.current;
          
          // Reset video properties to bypass power-saving restrictions
          video.load(); // Force reload of new video
          
          // Add a small delay to ensure video is ready
          await new Promise(resolve => setTimeout(resolve, 100));
          
          // Try to play with retry mechanism
          let retryCount = 0;
          const maxRetries = 3;
          
          const attemptPlay = async () => {
            try {
              // Ensure video is ready before playing
              if (video.readyState >= 2) { // HAVE_CURRENT_DATA or higher
                await video.play();
                console.log('New video playing successfully');
                return true;
              } else {
                // Wait for video to be ready
                return new Promise((resolve, reject) => {
                  const onCanPlay = () => {
                    video.removeEventListener('canplay', onCanPlay);
                    video.play().then(() => {
                      console.log('New video playing successfully after waiting');
                      resolve(true);
                    }).catch(reject);
                  };
                  video.addEventListener('canplay', onCanPlay);
                  
                  // Timeout after 2 seconds
                  setTimeout(() => {
                    video.removeEventListener('canplay', onCanPlay);
                    reject(new Error('Video ready timeout'));
                  }, 2000);
                });
              }
            } catch (error) {
              if (retryCount < maxRetries) {
                retryCount++;
                console.log(`Video play attempt ${retryCount} failed, retrying...`);
                await new Promise(resolve => setTimeout(resolve, 500));
                return attemptPlay();
              }
              throw error;
            }
          };
          
          await attemptPlay();
          
        } catch (error) {
          console.error('Video autoplay failed after retries:', error);
          // Fallback: show the background image
          setIsVideoLoaded(false);
        }
      }
    };

    // Start video after component mounts with longer delay for stability
    const timer = setTimeout(startVideo, 500);

    // Performance optimization: Pause video when out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            console.log('Hero in view - starting video');
            videoRef.current.play().catch((error) => {
              console.log('Video play from intersection failed:', error);
            });
          } else {
            console.log('Hero out of view - pausing video');
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.1 }
    );

    // User interaction handler to ensure video plays (similar to audio)
    const handleUserInteraction = async () => {
      if (videoRef.current && videoRef.current.paused) {
        try {
          console.log('User interaction detected, attempting to start video');
          await videoRef.current.play();
          console.log('Video started successfully after user interaction');
        } catch (error) {
          console.log('Video play after interaction failed:', error);
        }
      }
    };

    // Add interaction listeners to overcome power-saving restrictions
    document.addEventListener('click', handleUserInteraction, { once: true });
    document.addEventListener('touchstart', handleUserInteraction, { once: true });
    document.addEventListener('keydown', handleUserInteraction, { once: true });

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
          
          // Move from center to position "C" exactly at 2.5vw
          const xPos = gsap.utils.interpolate(-50, 0, progress);
          
          // Move from bottom to final position - changed 95 to 87 so it doesn't touch the very top
          const bottomPos = gsap.utils.interpolate(2.5, 87, progress); // Changed to 87 to align with 5vh from top
          const leftPos = gsap.utils.interpolate(50, 2.5, progress); // Position directly at 2.5vw
          
          gsap.set(collectiveTextRef.current, {
            fontSize: fontSize,
            x: `${xPos}%`,
            left: `${leftPos}vw`, // Use vw instead of % so 2.5vw = 2.5% of viewport width
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
            top: "5vh", // 5% from top
            left: "2.5vw", // Position "C" exactly at 2.5% from left
            bottom: "auto",
            fontSize: "clamp(1.2rem, 2.5vw, 2rem)",
            x: "0%", // No transform - text starts exactly at left position
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
      clearTimeout(timer);
      observer.disconnect();
      // Remove user interaction listeners
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
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
        className="font-bruno-ace-sc font-normal text-white select-none pointer-events-none text-left overflow-hidden whitespace-nowrap box-border p-0 m-0"
        style={{
          fontFamily: 'var(--font-bruno-ace-sc), sans-serif',
          textShadow: '0 4px 20px rgba(0,0,0,0.8)',
          letterSpacing: '0.3em', // Increased to 0.3em for better width coverage
          mixBlendMode: 'difference', // Cool effect over different backgrounds
          width: '95vw', // 95% width to align with navbar
          paddingLeft: '0', // Explicitly no left padding
          marginLeft: '0', // Explicitly no left margin
        }}
      >
        COLLECTIVE
      </div>

      {/* Top Right Collaboration Button Container */}
      <div
        className="fixed"
        style={{
          top: '5vh',
          right: '2.5vw',
          zIndex: 1001,
          display: 'flex',
          alignItems: 'center',
          gap: '5vw', // Increased gap to shift links left
        }}
      >
        {/* Navigation Links with Wave Effect */}
        {[
          { href: "#projects-section", label: "Projects" },
          { href: "#services-section", label: "Our Services" },
          { href: "#careers-section", label: "Careers" }
        ].map((nav, idx) => (
          <WaveNavLink key={nav.label} href={nav.href} text={nav.label} />
        ))}
        <MorphingButton 
          text="Let's Collaborate"
          fontFamily="var(--font-century-gothic), Century Gothic, sans-serif"
          style={{
            margin: '0', // Remove default margin
          }}
        />
      </div>

      <section
        ref={heroRef}
        className="relative flex items-center justify-center overflow-hidden bg-black text-white"
        style={{
          minHeight: "100vh",
          width: "100vw",
          borderBottom: "1px solid var(--gray-3)",
        }}
      >
        {/* Top Left Text - Part of hero section */}
        <div
          ref={topLeftTextRef}
          className="absolute text-white font-bruno-ace-sc font-normal leading-tight select-none"
          style={{
            fontFamily: 'var(--font-bruno-ace-sc), sans-serif',
            top: '5vh', // Changed from 3vh to 5vh
            left: '2.5vw', // Changed from 3vw to 2.5vw
            zIndex: 2,
            fontSize: 'clamp(1.2rem, 2.5vw, 2rem)',
            mixBlendMode: 'difference', // Cool effect over different backgrounds - same as COLLECTIVE
            letterSpacing: '0.3em', // Increased to 0.3em to match COLLECTIVE text
          }}
        >          <div>DESIGN MORE</div>
          <div>MANAGE LESS</div>

        </div>
      {/* Hero Video Background with power-saving optimizations */}
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
        // Additional attributes to prevent power-saving interruptions
        webkit-playsinline="true"
        x-webkit-airplay="allow"
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
          // Prevent power-saving interference
          pointerEvents: "none", // Ensures it's treated as background
        }}
        // Accessibility
        aria-label="Hero background video"
        // Additional performance attributes
        disablePictureInPicture
        disableRemotePlayback
        // Prevent browser from pausing for power saving
        controlsList="nodownload nofullscreen noremoteplayback"
      >
        {/* MP4 - Your specific video file */}
        <source src="/9150545-hd_1920_1080_24fps.mp4" type="video/mp4" />
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
            background: `url('/image.png') center/cover no-repeat`,
            zIndex: -1, // Behind video
          }}
        />
      )}

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
