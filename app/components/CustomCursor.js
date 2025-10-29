"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const lastMousePos = useRef({ x: 0, y: 0 });
  const velocity = useRef(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Check if screen is large (≥1024px)
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    // Initial check
    checkScreenSize();

    // Listen for resize
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  useEffect(() => {
    // Only run cursor logic on large screens
    if (!isLargeScreen) return;
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Initial setup - Simplified approach
    gsap.set(cursor, {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      display: 'block',
      transformOrigin: 'center center'
    });

    // console.log('CustomCursor initialized'); // Debug log

    let animationId;
    let lastTime = Date.now();

    const handleMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      // console.log('Mouse position:', e.clientX, e.clientY); // Debug log

      // Show cursor when mouse moves (removed conditional)
      gsap.to(cursor, {
        opacity: 1,
        duration: 0.1
      });
    };

    const updateCursor = () => {
      const currentTime = Date.now();
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      // Calculate velocity (distance moved per frame) - Fixed calculation
      const deltaX = mousePos.current.x - lastMousePos.current.x;
      const deltaY = mousePos.current.y - lastMousePos.current.y;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      // Smooth velocity calculation - Fixed scaling
      velocity.current = velocity.current * 0.8 + distance * 0.1;

      // Clamp velocity for reasonable scaling - Responsive range
      const clampedVelocity = Math.min(Math.max(velocity.current, 0), window.innerWidth * 0.02);

      // Scale based on velocity: slow = normal (1), fast = large (3.2)
      const targetScale = 1 + (clampedVelocity / (window.innerWidth * 0.02)) * 2.2;

      // Update cursor position with lag using GSAP - Responsive positioning
      gsap.to(cursor, {
        x: mousePos.current.x - window.innerWidth * 0.015, // Center for responsive cursor
        y: mousePos.current.y - window.innerWidth * 0.015, // Center for responsive cursor
        scale: targetScale,
        duration: 0.8, // Lag effect
        ease: "power2.out"
      });

      lastMousePos.current.x = mousePos.current.x;
      lastMousePos.current.y = mousePos.current.y;

      animationId = requestAnimationFrame(updateCursor);
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    // Event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Start animation loop
    updateCursor();

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isLargeScreen]);

  // Don't render cursor on small screens
  if (!isLargeScreen) return null;

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 'clamp(1rem, 2vw, 1.6rem)', // Reduced base size
        height: 'clamp(1rem, 2vw, 1.6rem)', // Reduced base size
        backgroundColor: '#FFFFFF', // White fill
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'difference', // Enable difference blend mode
        willChange: 'transform, opacity, scale'
      }}
    />
  );
}
