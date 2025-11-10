"use client";

import React, { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MorphingButton from "../ui/MorphingButton";
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

function WaveNavLink({ href, text, onClick, style: userStyle = {} }) {
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
  fontSize: "clamp(0.45rem, 0.9vw, 0.9rem)",
        color: "#000",
        textDecoration: "none",
        letterSpacing: "0.1em",
  marginRight: "0.3vw",
        transition: "color 0.2s",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(0.35rem, 0.8vw, 0.6rem) clamp(0.5rem, 1vw, 0.9rem)",
        paddingBottom: "clamp(0.6rem, 1.2vw, 0.9rem)",
        marginBottom: "calc(-1 * clamp(0.15rem, 0.4vw, 0.35rem))",
        borderRadius: "0.5rem",
        lineHeight: 1,
        cursor: "pointer",
        ...userStyle,
      }}
    >
      {letters.map((char, i) => (
        <span
          key={i}
          className="wave-letter"
          style={{
            display: "inline-block",
            willChange: "transform",
            pointerEvents: "none",
            padding: "0 0.08rem",
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
  const logoRef = useRef(null);
  const topLeftTextRef = useRef(null);
  const navRef = useRef(null);
  
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const heroBgRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      const m = typeof window !== "undefined" && window.innerWidth <= 768;
      setIsMobile(m);
      if (!m) setIsMenuOpen(false);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    gsap.to(".reveal-column", {
      y: "-100%",
      duration: 1.2,
      stagger: 0.2,
      ease: "power4.inOut",
      delay: 0.2,
    });

    if (logoRef.current) {
      const isSmall = typeof window !== "undefined" && window.innerWidth <= 768;
      gsap.set(logoRef.current, {
        width: isSmall ? "70vw" : "70vw",
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

      // On mobile we want a larger final scale so the logo doesn't become nearly invisible
      // increase mobile final scale/position so logo remains legible on small screens
      const finalScale = isSmall ? 0.28 : 0.12;
      const finalLeft = isSmall ? "4vw" : "2.5vw";
      const finalTop = isSmall ? "3vh" : "1.5vh";

      tl.to(logoRef.current, {
        scale: finalScale,
        left: finalLeft,
        x: "0%",
        // ✅ FIX 2: Set final top position to exactly 2.5vh.
        top: finalTop,
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

    // No video playback handling for the image slider. Clean up ScrollTrigger and resize.
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Single hero background image
  const heroImage = '/BG1.jpeg';

  // Pixel distortion effect (Three.js) - initialize without any GUI controls
  React.useEffect(() => {
    if (!heroBgRef.current) return;

    let rafId;
    const container = heroBgRef.current;

    // --- Shaders (copied & minimal) ---
    const fragmentShader = `
      uniform float time;
      uniform sampler2D uDataTexture;
      uniform sampler2D uTexture;
      uniform vec4 resolution;
      varying vec2 vUv;
      void main() {
        vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);
        vec4 offset = texture2D(uDataTexture, vUv);
        gl_FragColor = texture2D(uTexture, newUV - 0.02 * offset.rg);
      }
    `;

    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
      }
    `;

    // --- Sketch implementation (adapted) ---
    const sketch = {
      renderer: null,
      scene: null,
      camera: null,
      material: null,
      plane: null,
      texture: null,
      dataTexture: null,
      size: 32,
      time: 0,
      mouse: { x: 0, y: 0, prevX: 0, prevY: 0, vX: 0, vY: 0 },
      settings: { grid: 32, mouse: 0.13, strength: 0.15, relaxation: 0.9 },
      init() {
        this.scene = new THREE.Scene();
        const width = container.offsetWidth;
        const height = container.offsetHeight;
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.setSize(width, height);
        this.renderer.setClearColor(0x000000, 0);
        container.appendChild(this.renderer.domElement);

        const frustumSize = 1;
        this.camera = new THREE.OrthographicCamera(frustumSize / -2, frustumSize / 2, frustumSize / 2, frustumSize / -2, -1000, 1000);
        this.camera.position.set(0, 0, 2);

        this.regenerateGrid();

        // load texture image
        const img = new Image();
        img.src = heroImage;
        img.crossOrigin = 'anonymous';
        img.onload = () => {
          const tex = new THREE.Texture(img);
          tex.needsUpdate = true;
          this.texture = tex;
          this.createMaterial();
          this.render();
        };

        window.addEventListener('resize', this.onResize.bind(this));
        window.addEventListener('mousemove', (e) => {
          const rect = container.getBoundingClientRect();
          this.mouse.x = (e.clientX - rect.left) / rect.width;
          this.mouse.y = (e.clientY - rect.top) / rect.height;
          this.mouse.vX = this.mouse.x - this.mouse.prevX;
          this.mouse.vY = this.mouse.y - this.mouse.prevY;
          this.mouse.prevX = this.mouse.x;
          this.mouse.prevY = this.mouse.y;
        });
      },
      regenerateGrid() {
        this.size = Math.max(4, Math.floor(this.settings.grid));
        const width = this.size;
        const height = this.size;
        const size = width * height;
        const data = new Float32Array(4 * size);
        for (let i = 0; i < size; i++) {
          const stride = i * 4;
          data[stride] = (Math.random() * 2 - 1) * 125;
          data[stride + 1] = (Math.random() * 2 - 1) * 125;
          data[stride + 2] = 0;
          data[stride + 3] = 1;
        }
        this.dataTexture = new THREE.DataTexture(data, width, height, THREE.RGBAFormat, THREE.FloatType);
        this.dataTexture.magFilter = this.dataTexture.minFilter = THREE.NearestFilter;
        this.dataTexture.needsUpdate = true;
      },
      createMaterial() {
        this.material = new THREE.ShaderMaterial({
          uniforms: {
            time: { value: 0 },
            resolution: { value: new THREE.Vector4(container.offsetWidth, container.offsetHeight, 1, 1) },
            uTexture: { value: this.texture },
            uDataTexture: { value: this.dataTexture }
          },
          vertexShader,
          fragmentShader,
          transparent: true,
        });

        const geometry = new THREE.PlaneGeometry(1, 1, 1, 1);
        this.plane = new THREE.Mesh(geometry, this.material);
        this.scene.add(this.plane);
      },
      updateDataTexture() {
        if (!this.dataTexture) return;
        const data = this.dataTexture.image.data;
        for (let i = 0; i < data.length; i += 4) {
          data[i] *= this.settings.relaxation;
          data[i + 1] *= this.settings.relaxation;
        }
        const gridMouseX = this.size * this.mouse.x;
        const gridMouseY = this.size * (1 - this.mouse.y);
        const maxDist = this.size * this.settings.mouse;
        const aspect = container.offsetHeight / container.offsetWidth;
        for (let i = 0; i < this.size; i++) {
          for (let j = 0; j < this.size; j++) {
            const dx = gridMouseX - i;
            const dy = gridMouseY - j;
            const distance = (dx * dx) / aspect + (dy * dy);
            const maxDistSq = maxDist * maxDist;
            if (distance < maxDistSq) {
              const index = 4 * (i + this.size * j);
              let power = maxDist / Math.sqrt(distance || 1);
              power = Math.max(0, Math.min(power, 10));
              data[index] += this.settings.strength * 100 * this.mouse.vX * power;
              data[index + 1] -= this.settings.strength * 100 * this.mouse.vY * power;
            }
          }
        }
        this.mouse.vX *= 0.9;
        this.mouse.vY *= 0.9;
        this.dataTexture.needsUpdate = true;
      },
      onResize() {
        const w = container.offsetWidth;
        const h = container.offsetHeight;
        this.renderer.setSize(w, h);
        if (this.material && this.material.uniforms && this.material.uniforms.resolution) {
          const a1 = 1; const a2 = 1; // simplified aspect factors
          this.material.uniforms.resolution.value.set(w, h, a1, a2);
        }
      },
      render() {
        this.time += 0.05;
        this.updateDataTexture();
        if (this.material && this.material.uniforms) this.material.uniforms.time.value = this.time;
        this.renderer.render(this.scene, this.camera);
        rafId = requestAnimationFrame(this.render.bind(this));
      },
      destroy() {
        cancelAnimationFrame(rafId);
        window.removeEventListener('resize', this.onResize.bind(this));
        if (this.renderer) {
          this.renderer.dispose();
          if (this.renderer.domElement && this.renderer.domElement.parentNode) {
            this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
          }
        }
      }
    };

    sketch.init();

    return () => {
      sketch.destroy();
    };
  }, [heroBgRef]);

  // Close menu when clicking outside or pressing Escape (includes centered toggle)
  useEffect(() => {
    if (!isMenuOpen) return;
    const onPointerDown = (e) => {
      const menuEl = menuRef.current;
      const navEl = navRef.current;
      const togEl = toggleRef.current;
      if (!menuEl) return;
      if (
        menuEl.contains(e.target) ||
        (navEl && navEl.contains(e.target)) ||
        (togEl && togEl.contains(e.target))
      )
        return;
      setIsMenuOpen(false);
    };
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

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
        ref={navRef}
        className="fixed w-full flex items-center justify-between"
        style={{
          // full width at the very top
          top: 0,
          left: 0,
          transform: "none",
          width: "100%",
          zIndex: 1001,
          display: "flex",
          alignItems: "center",
          gap: "5vw",
          // stronger translucency on mobile so the glass effect is visible
          background: isMobile
            ? "rgba(255,255,255,0.36)"
            : "rgba(255,255,255,0.18)",
          boxShadow: isMobile
            ? "0 10px 58px rgba(0,0,0,0.10)"
            : "0 6px 44px rgba(0,0,0,0.10)",
          backdropFilter: isMobile ? "blur(20px)" : "blur(16px)",
          WebkitBackdropFilter: isMobile ? "blur(20px)" : "blur(16px)",
          borderBottom: isMobile
            ? "1px solid rgba(0,0,0,0.06)"
            : "1px solid rgba(255,255,255,0.12)",
          paddingLeft: "1.6vw",
          paddingRight: 0,
          paddingTop: isMobile ? "0.4rem" : "0.3rem",
          paddingBottom: isMobile ? "0.4rem" : "0.3rem",
          minHeight: isMobile ? "7vh" : "7vh",
          borderRadius: 0, // no rounded corners for full width
        }}
      >
        <div
          ref={topLeftTextRef}
          className="font-bruno-ace-sc font-normal leading-tight select-none"
          style={{
            fontFamily: "var(--font-bruno-ace-sc), sans-serif",
            fontSize: isMobile
              ? "clamp(0.5rem, 1.8vw, 0.75rem)"
              : "clamp(0.6rem, 1.1vw, 0.9rem)",
            color: "#000",
            letterSpacing: "0.3em",
            marginRight: "1.2vw",
            marginLeft: isMobile ? "1.2vw" : 0,
          }}
        >
          <div>DESIGN MORE</div>
          <div>MANAGE LESS</div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: isMobile ? "3vw" : "0.5vw",
            position: "relative",
          }}
        >
          {/* Wave links: hide on mobile - mobile will use toggle/menu */}
          {!isMobile &&
            [
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
              { href: "#services-overview-section", label: "Our Services", onClick: (e) => { e.preventDefault(); const top = window.innerHeight * 3.25; window.scrollTo({ top, behavior: 'smooth' }); } },
              { href: "#projects-section", label: "Projects" },
              { href: "/news", label: "News" },
              { href: "/careers", label: "Careers" },
            ].map((nav) => (
              <WaveNavLink
                key={nav.label}
                href={nav.href}
                text={nav.label}
                onClick={nav.onClick}
              />
            ))}

          {/* mobile toggle moved outside nav for centering */}
          <MorphingButton
            key={isMobile ? "mobile" : "desktop"}
            text="Let's Collaborate"
            fontFamily="var(--font-century-gothic), Century Gothic, sans-serif"
            style={{
              margin: "0",
              fontSize: isMobile ? "0.72rem" : "1.0rem",
              // on mobile match the navbar height/padding using clamp and rems (slimmer)
              height: isMobile ? "clamp(1.8rem, 4vh, 2.4rem)" : undefined,
              padding: isMobile ? "0.2rem 0.5rem" : "0.4rem 0.8rem",
              marginLeft: isMobile ? "0.08rem" : undefined,
              minWidth: isMobile ? "6.5rem" : undefined,
            }}
            onClick={() => {
              const contactSection =
                document.getElementById("contact-us-section");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          />
          {/* mobile toggle moved out of this flex; rendered at nav-level so it centers inside the navbar */}
        </div>
        {/* NAV-LEVEL TOGGLE - centers inside the navbar pill */}
        {isMobile && (
          <button
            ref={toggleRef}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((s) => !s)}
            style={{
              position: "absolute",
              left: "50%",
              top: "60%",
              transform: isMenuOpen
                ? "translate(-50%, -50%) rotate(180deg)"
                : "translate(-50%, -50%) rotate(0deg)",
              zIndex: 1205,
              background: "transparent",
              border: "none",
              cursor: "pointer",
              lineHeight: 1,
              padding: "0.08rem 0.28rem",
              minWidth: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "auto",
              transition: "transform 200ms cubic-bezier(.2,.9,.2,1)",
            }}
          >
            {/* Wider double-chevron SVG pointing down */}
            <svg
              width="26"
              height="18"
              viewBox="0 0 36 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
              style={{ display: "block" }}
            >
              <polyline
                points="4,6 18,20 32,6"
                stroke="#000"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <polyline
                points="4,0 18,14 32,0"
                stroke="#000"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.95"
              />
            </svg>
          </button>
        )}
      </div>

      {/* mobile toggle is now inside the navbar so no separate fixed toggle here */}

      {/* Mobile full-screen sliding panel */}
      {isMobile && (
        <div
          aria-hidden={!isMenuOpen}
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            zIndex: 1150,
            pointerEvents: isMenuOpen ? "auto" : "none",
          }}
        >
          <div
            ref={menuRef}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              // slide using transform for smooth GPU-accelerated animation
              transform: isMenuOpen ? "translateY(0%)" : "translateY(-100%)",
              transition:
                "transform 360ms cubic-bezier(.2,.9,.2,1), opacity 220ms ease",
              opacity: isMenuOpen ? 1 : 0,
              background: "rgba(255,255,255,0.98)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              paddingTop: "6vh",
            }}
          >
            <nav
              style={{
                width: "100%",
                textAlign: "center",
                fontFamily:
                  "var(--font-century-gothic), Century Gothic, sans-serif",
              }}
            >
              {[
                {
                  href: "#content-section-details",
                  label: "About Us",
                  onClick: (e) => {
                    e.preventDefault();
                    const top = window.innerHeight * 2;
                    window.scrollTo({ top, behavior: "smooth" });
                    setIsMenuOpen(false);
                  },
                },
                { href: "#services-overview-section", label: "Our Services" },
                { href: "#projects-section", label: "Projects" },
                { href: "/news", label: "News" },
                { href: "/careers", label: "Careers" },
              ].map((nav) => (
                <div
                  key={nav.label}
                  style={{
                    padding: "1rem 0",
                    borderBottom: "1px solid rgba(0,0,0,0.04)",
                  }}
                >
                  <WaveNavLink
                    href={nav.href}
                    text={nav.label}
                    onClick={(e) => {
                      if (nav.onClick) return nav.onClick(e);
                      setIsMenuOpen(false);
                    }}
                    // ensure larger text inside the menu
                    style={{ fontSize: "clamp(0.5rem, 3vw, 1rem)" }}
                  />
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}

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
            style={{
              flex: 1,
              background: "#000",
              height: "100%",
              transform: "translateY(0)",
              willChange: "transform",
            }}
          />
        ))}
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
        {/* Background image slider (horizontal wipe - GSAP driven) */}
        <div
          ref={heroBgRef}
          aria-hidden="true"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 0,
            pointerEvents: 'none',
            overflow: 'hidden',
          }}
        />
      </section>
    </>
  );
}
