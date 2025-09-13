"use client";

import React, { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MorphingButton from "../ui/MorphingButton";

gsap.registerPlugin(ScrollTrigger);

function WaveNavLink({ href, text }) {
  const letters = text.split("");
  const linkRef = useRef(null);
  // ...existing code...
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
              console.log('WaveNavLink clicked:', { text, href });
              if (href.startsWith("#")) {
                e.preventDefault();
                const targetId = href.replace("#", "");
                // Special handling for Why Us? navigation
                if (targetId === "content-section-details") {
                  window.scrollTo({ top: window.innerHeight * 2, behavior: "smooth" });
                  return;
                }
                // Default behavior for other anchors
                let target = document.getElementById(targetId);
                if (!target) {
                  target = document.querySelector(`[id='${targetId}'], [name='${targetId}']`);
                }
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                }
                else if (window.pageYOffset > 0) {
                  window.scrollTo({ top: 0, behavior: "smooth" });
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
                fontSize: "clamp(1rem, 2vw, 1.125rem)",
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
          const collectiveTextRef = useRef(null);
          const topLeftTextRef = useRef(null);
          const [isVideoLoaded, setIsVideoLoaded] = useState(false);

          useEffect(() => {
            // GSAP Reveal Columns
            gsap.to(".reveal-column", { y: "-100%", duration: 1.2, stagger: 0.2, ease: "power4.inOut", delay: 0.2 });

            // COLLECTIVE scroll animation
            if (collectiveTextRef.current) {
              gsap.set(collectiveTextRef.current, {
                fontSize: "clamp(2rem, 9vw, 15.2rem)",
                x: "-50%",
                y: "0%",
                left: "50%",
                bottom: "2.5vh",
                position: "fixed",
                zIndex: 1002,
                transformOrigin: "left center",
              });
              ScrollTrigger.create({
                trigger: "body",
                start: "top top",
                end: "300px top",
                scrub: 1,
                onUpdate: (self) => {
                  const progress = self.progress;
                  const fontSize = gsap.utils.interpolate("clamp(2rem, 9vw, 15.2rem)", "clamp(1.2rem, 2.5vw, 2rem)", progress);
                  const xPos = gsap.utils.interpolate(-50, 0, progress);
                  const bottomPos = gsap.utils.interpolate(2.5, 89, progress);
                  const leftPos = gsap.utils.interpolate(50, 2.5, progress);
                  gsap.set(collectiveTextRef.current, {
                    fontSize,
                    x: `${xPos}%`,
                    left: `${leftPos}vw`,
                    bottom: `${bottomPos}vh`,
                  });
                },
              });
              ScrollTrigger.create({
                trigger: "body",
                start: "300px top",
                end: "bottom bottom",
                onEnter: () => {
                  gsap.set(collectiveTextRef.current, {
                    position: "fixed",
                    top: "2vh",
                    left: "2.5vw",
                    bottom: "auto",
                    fontSize: "clamp(1.2rem, 2.5vw, 2rem)",
                    x: "0%",
                    zIndex: 1002,
                  });
                },
                onLeaveBack: () => {
                  gsap.set(collectiveTextRef.current, {
                    position: "fixed",
                    bottom: "2.5vh",
                    top: "auto",
                    left: "50%",
                    fontSize: "clamp(2rem, 9vw, 15.2rem)",
                    x: "-50%",
                    zIndex: 1002,
                  });
                },
              });
            }

            // DESIGN MORE MANAGE LESS GSAP animation (inside navbar)
            if (topLeftTextRef.current) {
              ScrollTrigger.create({
                trigger: "body",
                start: "top top",
                end: "200px top",
                scrub: 1,
                onUpdate: (self) => {
                  const progress = self.progress;
                  const opacity = gsap.utils.interpolate(1, 0, progress);
                  const yPos = gsap.utils.interpolate(0, -30, progress);
                  gsap.set(topLeftTextRef.current, {
                    opacity,
                    y: yPos,
                    marginRight: "2vw"
                  });
                },
              });
            }

            // Pin hero section
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

            // Video autoplay workaround
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
            document.addEventListener("touchstart", () => videoRef.current?.play(), { once: true });
            document.addEventListener("keydown", () => videoRef.current?.play(), { once: true });
            if (heroRef.current) observer.observe(heroRef.current);

            return () => {
              observer.disconnect();
              document.removeEventListener("click", () => videoRef.current?.play());
              document.removeEventListener("touchstart", () => videoRef.current?.play());
              document.removeEventListener("keydown", () => videoRef.current?.play());
              ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            };
          }, []);

          const handleVideoLoad = () => setIsVideoLoaded(true);
          const handleVideoError = () => setIsVideoLoaded(false);
          const handleCanPlay = () => videoRef.current?.play();

          return (
            <>
              {/* COLLECTIVE text - always above navbar */}
              <div
                ref={collectiveTextRef}
                className="font-bruno-ace-sc font-normal select-none text-left overflow-hidden whitespace-nowrap box-border p-0 m-0 cursor-pointer"
                  style={{
                    fontFamily: "var(--font-bruno-ace-sc), sans-serif",
                    textShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    letterSpacing: "0.3em",
                    color: "#fff",
                    mixBlendMode: "difference",
                    fontSize: "clamp(2rem, 9vw, 15.2rem)",
                    left: "50%",
                    // transform: "translateX(-50%)",
                    position: "fixed",
                    maxWidth: "100vw",
                    width: "auto",
                    overflow: "hidden",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    padding: 0,
                    margin: 0,
                    zIndex: 1002,
                    boxSizing: "border-box"
                  }}
                onClick={() => {
                  console.log('COLLECTIVE clicked');
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  if (window.location.pathname !== "/") {
                    window.location.href = "/";
                  }
                }}
              >
                COLLECTIVE
              </div>

              {/* Glassmorphism Navbar with DESIGN MORE MANAGE LESS inside */}
              <div
                className="fixed w-full flex items-center justify-between"
                style={{
                  top: "0vh",
                  left: 0,
                  right: 0,
                  zIndex: 1001,
                  display: "flex",
                  alignItems: "center",
                  gap: "5vw",
                  background: "rgba(255,255,255,0.18)",
                  boxShadow: "0 4px 32px rgba(0,0,0,0.08)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  borderBottom: "1px solid rgba(255,255,255,0.25)",
                  padding: "0.5vw 2.5vw"
                }}
              >
                {/* DESIGN MORE MANAGE LESS - now inside navbar */}
                <div
                  ref={topLeftTextRef}
                  className="font-bruno-ace-sc font-normal leading-tight select-none"
                  style={{
                    fontFamily: "var(--font-bruno-ace-sc), sans-serif",
                    fontSize: "clamp(0.8rem, 1.5vw, 1.2rem)",
                    color: "#000",
                    letterSpacing: "0.3em",
                    marginRight: "2vw"
                  }}
                >
                  <div>DESIGN MORE</div>
                  <div>MANAGE LESS</div>
                </div>
                <div style={{display: "flex", alignItems: "center", gap: "5vw"}}>
                    {[
                      { href: "#content-section-details", label: "Why Us?", onClick: (e) => {
                        e.preventDefault();
                        const target = document.getElementById("content-section-details");
                        if (target) {
                          const yOffset = -80 + window.innerHeight * 0.20; // navbar height + 20vh
                          const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
                          window.scrollTo({ top: y, behavior: "smooth" });
                        }
                      }},
                      { href: "#projects-section", label: "Projects" },
                      { href: "#services-overview-section", label: "Our Services" },
                      { href: "/careers", label: "Careers" },
                    ].map((nav) => (
                      <WaveNavLink key={nav.label} href={nav.href} text={nav.label} onClick={nav.onClick} />
                    ))}
                  <MorphingButton
                    text="Let's Collaborate"
                    fontFamily="var(--font-century-gothic), Century Gothic, sans-serif"
                    style={{ margin: "0" }}
                    onClick={() => {
                      setTimeout(() => {
                        const contactSection = document.getElementById("contact-us-section");
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: "smooth" });
                        }
                      }, 50);
                    }}
                  />
                </div>
              </div>

              {/* Curtain Columns - moved outside hero section for highest stacking */}
              <div
                style={{ position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh", display: "flex", zIndex: 1003, pointerEvents: "none" }}
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
                {/* Hero Video Background */}
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
                  webkit-playsinline="true"
                  x-webkit-airplay="allow"
                  style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    zIndex: 0,
                    objectFit: "cover",
                    objectPosition: "top",
                    transform: "scale(1.00)",
                    backfaceVisibility: "hidden",
                    perspective: 1000,
                    willChange: "transform",
                    opacity: 1,
                    pointerEvents: "none",
                  }}
                  aria-label="Hero background video"
                  disablePictureInPicture
                  disableRemotePlayback
                  controlsList="nodownload nofullscreen noremoteplayback"
                >
                  <source src="/DesertBG.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Fallback image if video fails */}
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
