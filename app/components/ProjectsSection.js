"use client";
// Define projects array
  const projects = [
    {
      title: "IVORY ISLE",
      location: "Chandigarh, India",
      imageUrl: "https://i.postimg.cc/gJWR6j6w/ASHWA-34-5.png",
    },
    {
      title: "ONYX OUTLOOK",
      location: "Vadodara, India",
      imageUrl: "https://i.postimg.cc/xC3mGQK6/ASHWA-34-6.png",
    },
    {
      title: "QUARTZ QUARTERS",
      location: "Nashik, India",
      imageUrl: "https://i.postimg.cc/zXXCjy2K/ASHWA-34-7.png",
    },
    {
      title: "GRANITE GROVE",
      location: "Coimbatore, India",
      imageUrl: "https://i.postimg.cc/xTxKF9B7/ASHWA-34-8.png",
    },
    {
      title: "MARBLE MANOR",
      location: "Mysore, India",
      imageUrl: "https://i.postimg.cc/qBGcyswp/ASHWA-34-9.png",
    },
    {
      title: "LIMESTONE LODGE",
      location: "Vijayawada, India",
      imageUrl: "https://i.postimg.cc/25vh6h3R/ASHWA-34-10.png",
    },
    {
      title: "SANDSTONE SANCTUARY",
      location: "Guwahati, India",
      imageUrl: "https://i.postimg.cc/Y0t1T0rc/ASHWA-34-11.png",
    },
    {
      title: "BRICK BOULEVARD",
      location: "Nagpur, India",
      imageUrl: "https://i.postimg.cc/LXttyLMB/ASHWA-34-12.png",
    },
    {
      title: "TERRACOTTA TERRACE",
      location: "Patna, India",
      imageUrl: "https://i.postimg.cc/W3Lm6Sx1/ASHWA-34-13.png",
    },
    {
      title: "CLAY COURTYARD",
      location: "Agra, India",
      imageUrl: "https://i.postimg.cc/fRPfkMKX/ASHWA-34-14.png",
    },
    {
      title: "CONCRETE CITADEL",
      location: "Solapur, India",
      imageUrl: "https://i.postimg.cc/L4kDvK9K/ASHWA-34-15.png",
    },
  ];
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import ArrowButton from '../ui/ArrowButton';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// ...existing code...
  //   title: "IVORY ISLE",
  //   location: "Chandigarh, India",
  //   imageUrl: "https://i.postimg.cc/gJWR6j6w/ASHWA-34-5.png",
  // },
  // {
  //   title: "MARBLE MANOR",
  //   location: "Mysore, India",
  //   imageUrl: "https://i.postimg.cc/qBGcyswp/ASHWA-34-9.png",
  // },
  // {
  //   title: "LIMESTONE LODGE",
  //   location: "Vijayawada, India",
  //   imageUrl: "https://i.postimg.cc/25vh6h3R/ASHWA-34-10.png",
  // },
  // {
  //   title: "SANDSTONE SANCTUARY",
  //   location: "Guwahati, India",
  //   imageUrl: "https://i.postimg.cc/Y0t1T0rc/ASHWA-34-11.png",
  // },
  // {
  const IntroScene = React.forwardRef(({ weTextRef, areTextRef, collectiveTextRef }, ref) => {
    // --- START: SLIDESHOW LOGIC ---
    const slideshowImages = ["/K6 (3).webp", "/K17 (1).webp", "/K12 (3).webp"];
    const imageSet = [...slideshowImages, slideshowImages[0]];

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
      function onResize() {
        setIsMobile(typeof window !== 'undefined' && window.innerWidth <= 767);
      }
      onResize();
      window.addEventListener('resize', onResize);
      return () => window.removeEventListener('resize', onResize);
    }, []);

    useEffect(() => {
      const items = gsap.utils.toArray('.intro-slideshow-item');
      const images = gsap.utils.toArray('.intro-slideshow-item img');
      if (items.length <= 1) return;

      items.forEach((item, index) => {
        if (index !== 0) {
          gsap.set(item, { yPercent: 100 });
          gsap.set(images[index], { yPercent: -100 });
        }
      });

      const tl = gsap.timeline({ repeat: -1, defaults: { ease: 'power3.inOut', duration: 1.5 } });
      items.forEach((item, index) => {
        if (index < items.length - 1) {
          tl.to(item, { yPercent: -100 })
            .to(images[index], { yPercent: 100 }, '<')
            .to(items[index + 1], { yPercent: 0 }, '<')
            .to(images[index + 1], { yPercent: 0 }, '<')
            .to({}, { duration: 2 });
        }
      });

      return () => tl.kill();
    }, []);

    // Desktop layout (unchanged)
    if (!isMobile) {
      return (
        <div className="relative bg-gray-2 flex" style={{ minWidth: '125vw', height: '100vh' }}>
          {/* Left Side */}
          <div className="relative w-[50vw] min-w-[300px] flex flex-col justify-start items-start py-0">
            <div className="relative h-[75vh] w-full max-w-[35vw] mb-6 overflow-hidden">
              {imageSet.map((src, index) => (
                <div key={index} className="intro-slideshow-item" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
                  <Image src={src} alt={`Slideshow image ${index + 1}`} fill style={{ objectFit: 'cover', objectPosition: 'center' }} priority={index === 0} />
                </div>
              ))}
            </div>

            <div className="mb-2 px-6 flex items-center gap-4">
              <h2 role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); const contactSection = document.getElementById('contact-us-section'); if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' }); } }} className="font-bruno-ace-sc text-black font-bold tracking-widest leading-tight" style={{ fontFamily: 'var(--font-bruno-ace-sc), sans-serif', fontSize: 'clamp(1.28rem, 2.7vw, 3rem)', letterSpacing: '0.3em', cursor: 'default' }}>OUR <br /> PROJECTS</h2>
              <div className="flex items-center justify-center bg-transparent group cursor-default" aria-hidden="true" title="Decorative arrow">
                <div className="bg-black rounded-full flex items-center justify-center w-12 h-12 transition-colors duration-300 ease-in-out">
                  <svg className="stroke-white transform -rotate-45 transition-transform duration-300 ease-in-out group-hover:rotate-0" width="28" height="28" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M13 5l7 7-7 7" /></svg>
                </div>
              </div>
            </div>

            <div className="absolute top-0 right-0 h-full flex items-start">
              <div className="flex flex-col gap-8 pr-4 items-end justify-between h-full py-8">
                <span className="font-bruno-ace-sc text-black font-bold tracking-widest leading-tight" style={{ fontFamily: 'var(--font-bruno-ace-sc), sans-serif', fontSize: 'clamp(1rem, 2vw, 1.5rem)', letterSpacing: '0.3em', writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>COLLECTIVE</span>
                {['Residential', 'Commercial'].map((item, index) => (
                  <span key={index} className="text-sm" style={{ letterSpacing: '0.3em', writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>{item}</span>
                ))}
              </div>
              <div className="w-[2px] bg-gray-500 h-full"></div>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative w-[75vw] mt-[5%]">
            <div className="text-3xl ml-[5%]" style={{ fontFamily: 'var(--font-bruno-ace-sc), sans-serif', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', letterSpacing: '0.2em', lineHeight: '1.2' }}>FROM HERE, <br /> IT&apos;S ONLY UP</div>
            <div className="ml-[5%] mt-4 md:mt-8 mb-8 flex items-center gap-4">
              <div className="flex items-center gap-4">
                <h2 role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); const contactSection = document.getElementById('contact-us-section'); if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' }); else window.location.href = '/#contact-us-section'; } }} onClick={() => { const contactSection = document.getElementById('contact-us-section'); if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' }); else window.location.href = '/#contact-us-section'; }} className="font-normal cursor-pointer" style={{ fontFamily: 'var(--font-century-gothic), Century Gothic, sans-serif', fontSize: 'clamp(1.2rem, 1.5vw, 2rem)', fontWeight: '400', letterSpacing: '0.05em' }}>Let&apos;s Collaborate</h2>
                <div className="flex items-center justify-center bg-transparent group cursor-default" aria-hidden="true" title="Decorative arrow">
                  <div className="bg-black rounded-full flex items-center justify-center w-12 h-12 transition-colors duration-300 ease-in-out"><svg className="stroke-white transform rotate-0 transition-transform duration-300 ease-in-out group-hover:-rotate-45" width="28" height="28" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M13 5l7 7-7 7" /></svg></div>
                </div>
              </div>
            </div>
            <div className="font-bruno-ace-sc text-black font-bold text-right tracking-widest leading-tight" style={{ fontFamily: 'var(--font-bruno-ace-sc), sans-serif', fontSize: 'clamp(2rem, 7vw, 5rem)', letterSpacing: '0.3em' }}>
              <div ref={weTextRef}>WE</div>
              <div ref={areTextRef}>ARE</div>
              <div ref={collectiveTextRef}>COLLECTIVE</div>
            </div>
          </div>
        </div>
      );
    }

    // Mobile IntroScene
    return (
      <div className="relative bg-gray-2 flex flex-col items-center" style={{ height: '100vh', width: '100vw', minWidth: '100vw' }}>
        {/* Top image: full width, 40% height */}
        <div style={{ position: 'relative', width: '100%', height: '40vh', overflow: 'hidden' }}>
          <Image src={imageSet[0]} alt="Project top image" fill style={{ objectFit: 'cover', objectPosition: 'center' }} priority />
        </div>

        {/* Center horizontal line with centered text (mobile) */}
        <div style={{ position: 'relative', width: '100%', height: '30vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          {/* Horizontal centered line */}
          <div style={{ position: 'absolute', height: '2px', width: '80%', background: '#737272' }} />

          {/* Text block centered on/around the line */}
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', zIndex: 2 }}>
            <span style={{ fontFamily: 'var(--font-bruno-ace-sc), sans-serif', fontSize: 'clamp(1rem, 4vw, 1.6rem)', letterSpacing: '0.25em' }}>COLLECTIVE</span>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: 'var(--font-century-gothic), Century Gothic, sans-serif', fontSize: 'clamp(0.8rem, 2.7vw, 1rem)', letterSpacing: '0.2em' }}>COMMERCIAL</span>
              <span style={{ fontFamily: 'var(--font-century-gothic), Century Gothic, sans-serif', fontSize: 'clamp(0.8rem, 2.7vw, 1rem)', letterSpacing: '0.2em' }}>RESIDENTIAL</span>
            </div>
          </div>
        </div>

        {/* Remaining content below the vertical line */}
        <div style={{ width: '100%', padding: '4vw 6vw', textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-bruno-ace-sc), sans-serif', fontSize: 'clamp(1rem, 4vw, 1.6rem)', letterSpacing: '0.15em' }}>FROM HERE, <br /> IT&apos;S ONLY UP</div>
          <div style={{ marginTop: '2vh', fontFamily: 'var(--font-bruno-ace-sc), sans-serif', fontSize: 'clamp(1.6rem, 6vw, 3rem)', letterSpacing: '0.3em' }}>
            <div ref={weTextRef}>WE</div>
            <div ref={areTextRef}>ARE</div>
            <div ref={collectiveTextRef}>COLLECTIVE</div>
          </div>
        </div>
      </div>
    );
  });
  IntroScene.displayName = 'IntroScene';

const AboutScene = () => {
  const lastHoveredIndex = useRef(-1);
  const waveTimeouts = useRef([]);

  // --- START: Slideshow Logic ---
  // Define two separate image sets. They MUST have the same number of images.
  const mainSlideshowImages = [
    "https://i.postimg.cc/VktsJ4fL/K13-3.webp",
    "https://i.postimg.cc/TwfPMmX2/K26-2.webp",
    "https://i.postimg.cc/5twtRgTk/K29-8.webp",
  ];
  const collageSlideshowImages = [
    "https://i.postimg.cc/qRJpZT8z/K11-1.webp",
    "https://i.postimg.cc/VktsJ4fL/K13-3.webp",
    "https://i.postimg.cc/vTmHDsBp/K24-4.webp",
  ];

  // Create the looping image sets for rendering
  const mainImageSet = [...mainSlideshowImages, mainSlideshowImages[0]];
  const collageImageSet = [...collageSlideshowImages, collageSlideshowImages[0]];

  // A single useEffect to control both slideshows in sync
  useEffect(() => {
    const mainItems = gsap.utils.toArray(".main-slideshow-item");
    const mainImages = gsap.utils.toArray(".main-slideshow-item img");
    const collageItems = gsap.utils.toArray(".collage-slideshow-item");
    const collageImages = gsap.utils.toArray(".collage-slideshow-item img");

    if (mainItems.length <= 1 || collageItems.length <= 1) return;

    // Set initial positions for both slideshows based on their direction
    mainItems.forEach((item, index) => {
      if (index !== 0) {
        gsap.set(item, { xPercent: -100 }); // Main: Starts left
        gsap.set(mainImages[index], { xPercent: 100 });
      }
    });
    collageItems.forEach((item, index) => {
      if (index !== 0) {
        gsap.set(item, { xPercent: 100 }); // Collage: Starts right
        gsap.set(collageImages[index], { xPercent: -100 });
      }
    });

    // A single timeline to animate both sets of items together
    const tl = gsap.timeline({
      repeat: -1,
      defaults: { ease: "power3.inOut", duration: 1.2 },
    });

    // Loop through and create synced tweens
    for (let i = 0; i < mainItems.length - 1; i++) {
      tl
        .to([mainItems[i], collageItems[i]], {
          xPercent: (index) => (index === 0 ? 100 : -100),
        })
        .to(
          [mainImages[i], collageImages[i]],
          {
            xPercent: (index) => (index === 0 ? -100 : 100),
          },
          "<"
        )
        .to([mainItems[i + 1], collageItems[i + 1]], { xPercent: 0 }, "<")
        .to([mainImages[i + 1], collageImages[i + 1]], { xPercent: 0 }, "<")
        .to({}, { duration: 2 });
    }

    return () => {
      tl.kill();
    };
  }, []);
  // --- END: Slideshow Logic ---


  const createWaveEffect = (
    centerIndex,
    allLetters,
    mouseX,
    mouseY,
    containerRect
  ) => {
    waveTimeouts.current.forEach((timeout) => clearTimeout(timeout));
    waveTimeouts.current = [];

    const maxDistance = 120;
    const maxDelay = 150;

    allLetters.forEach((letter, index) => {
      const letterRect = letter.getBoundingClientRect();
      const letterCenterX =
        letterRect.left + letterRect.width / 2 - containerRect.left;
      const letterCenterY =
        letterRect.top + letterRect.height / 2 - containerRect.top;

      const deltaX = mouseX - letterCenterX;
      const deltaY = mouseY - letterCenterY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      if (distance <= maxDistance) {
        const delay = (distance / maxDistance) * maxDelay;
        const intensity = 1 - distance / maxDistance;

        const timeout = setTimeout(() => {
          gsap.to(letter, {
            y: -25 * intensity,
            scale: 1.1 + 0.4 * intensity,
            rotation: (Math.random() - 0.5) * 8 * intensity,
            duration: 0.4,
            ease: "back.out(2.5)",
          });

          gsap.to(letter, {
            y: 0,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            delay: 0.1,
            ease: "elastic.out(1, 0.4)",
          });
        }, delay);

        waveTimeouts.current.push(timeout);
      }
    });
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const allLetters = Array.from(
      e.currentTarget.querySelectorAll(".bounce-letter")
    );

    if (Date.now() - (lastHoveredIndex.current || 0) > 50) {
      lastHoveredIndex.current = Date.now();
      createWaveEffect(0, allLetters, mouseX, mouseY, rect);
    }
  };

  return (
    <div className="w-[140vw] flex">
      <div className="w-[100vw] flex">
        {/* Static Parent Container */}
        <div
          className="relative h-[100vh]"
          style={{
            aspectRatio: "1/1",
            transform: "translateX(10vw)",
          }}
        >
          {/* SIBLING 1: Main Background Slideshow (uses mainImageSet) */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            {mainImageSet.map((src, index) => (
              <div
                key={`main-${index}`}
                className="main-slideshow-item"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={src}
                  alt={`Main Slideshow image ${index + 1}`}
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          {/* SIBLING 2: Overlaid Collage Slideshow (uses collageImageSet) */}
          <div
            className="absolute overflow-hidden"
            style={{ width: "60%", height: "40%", top: "12%", left: "20%" }}
          >
            {collageImageSet.map((src, index) => (
              <div
                key={`collage-${index}`}
                className="collage-slideshow-item"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={src}
                  alt={`Collage Slideshow image ${index + 1}`}
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    filter: "grayscale(100%) contrast(120%)",
                  }}
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[55%] mx-auto pb-8 pt-8 ml-[5%] text-black">
        <div className="w-full text-left flex flex-col items-start gap-8">
          <div
            className="w-[80%] text-xl cursor-pointer"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontWeight: 400,
              transform: "translateX(-4vw)",
              lineHeight: "1.7",
              marginTop: "4rem", // Shift paragraph down
            }}
            onMouseMove={handleMouseMove}
          >
            {firstParagraphText.split(" ").map((word, wordIndex) => (
              <span
                key={wordIndex}
                style={{ display: "inline-block", marginRight: "0.4em" }}
              >
                {word.split("").map((letter, letterIndex) => (
                  <span
                    key={`${wordIndex}-${letterIndex}`}
                    className="bounce-letter"
                    style={{
                      display: "inline-block",
                      transformOrigin: "center bottom",
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
        <div className="w-full text-right mt-24 flex flex-col items-end gap-8">
          <div
            className="w-[60%] text-xl mr-[5%] text-[#737272] cursor-pointer"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontWeight: 400,
              lineHeight: "1.7",
            }}
            onMouseMove={handleMouseMove}
          >
            {secondParagraphText.split(" ").map((word, wordIndex) => (
              <span
                key={wordIndex}
                style={{ display: "inline-block", marginRight: "0.4em" }}
              >
                {word.split("").map((letter, letterIndex) => (
                  <span
                    key={`${wordIndex}-${letterIndex}`}
                    className="bounce-letter"
                    style={{
                      display: "inline-block",
                      transformOrigin: "center bottom",
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactUs = () => {
  return (
    <div
      className="p-8 pl-48 sm:pl-8 text-center"
      style={{
        width: "100vw",
        height: "100vh",
        background: "#E9ECEF",
        color: "#111",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2
        style={{
          fontFamily: "var(--font-bruno-ace-sc), sans-serif",
          fontSize: "clamp(2rem, 5vw, 4rem)",
          letterSpacing: "0.1em",
          marginBottom: "1.5rem",
        }}
        className="font-bold"
      >
        LET&apos;S BUILD TOGETHER
      </h2>
      <p
        style={{
          fontFamily: "var(--font-poppins), sans-serif",
          maxWidth: "600px",
          marginBottom: "3rem",
          fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
          lineHeight: "1.75",
        }}
        className="text-gray-600"
      >
        Have a project in mind or just want to learn more about our process? We
        would love to connect with you.
      </p>
      <div className="flex pt-1 justify-end items-end gap-4">
        <ArrowButton
          label="Let's Collaborate"
          onClick={() => {
            const contactSection = document.getElementById('contact-us-section');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            } else {
              // fallback: navigate to home with hash
              window.location.href = '/#contact-us-section';
            }
          }}
        />
      </div>
    </div>
  );
};

const ProjectsScene = ({ projects, verticalProjectsWidth }) => {
  const numColumns = Math.ceil(projects.length / 2);

  return (
    <>
      <div
        style={{
          background: "#E9ECEF",
          width: `${verticalProjectsWidth}vw`,
          height: "100vh",
          display: "flex",
          position: "relative",
        }}
      >
        {Array.from({ length: numColumns }).map((_, idx) => {
          const project1 = projects[idx * 2];
          const project2 = projects[idx * 2 + 1];
          return (
            <div
              key={idx}
              style={{
                height: "100%",
                width: "20vw",
                borderLeft: "2px solid #737272",
                background: "transparent",
                boxSizing: "border-box",
                position: "absolute",
                top: 0,
                left: `${4 + idx * 20}vw`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: "90%",
                  margin: "0 auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: 0,
                }}
              >
                <div
                  style={{
                    flex: 1,
                    background: "transparent",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    padding: "0.7vw 1vw",
                  }}
                >
                  {/* Intentionally left empty as requested */}
                </div>
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "1/1",
                    background: "#E3F2FD",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {project1 && (
                    <>
                      <img
                        src={project1.imageUrl}
                        alt={project1.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          left: 0,
                          bottom: 0,
                          width: "100%",
                          height: "32%",
                          background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "flex-end",
                          padding: "1vw 1.2vw",
                          zIndex: 2,
                        }}
                      >
                        <span
                          style={{
                            color: "#fff",
                            fontFamily: "var(--font-bruno-ace-sc), sans-serif",
                            fontWeight: 700,
                            fontSize: "1.1vw",
                            letterSpacing: "0.12em",
                            textShadow: "0 2px 8px rgba(0,0,0,0.5)",
                            alignSelf: "flex-end",
                          }}
                        >
                          {project1.title}
                        </span>
                        <span
                          style={{
                            color: "#fff",
                            fontFamily: "var(--font-century-gothic), Century Gothic, sans-serif",
                            fontSize: "0.8vw",
                            textShadow: "0 2px 8px rgba(0,0,0,0.5)",
                            alignSelf: "flex-end",
                            textAlign: "right",
                            width: "40%",
                          }}
                        >
                          {project1.location}
                        </span>
                      </div>
                    </>
                  )}
                </div>
                <div
                  style={{
                    flex: 1,
                    background: "transparent",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    padding: "0.7vw 1vw",
                  }}
                >
                  {/* Intentionally left empty as requested */}
                </div>
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "1/1",
                    background: "#E3F2FD",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {project2 && (
                    <>
                      <img
                        src={project2.imageUrl}
                        alt={project2.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          left: 0,
                          bottom: 0,
                          width: "100%",
                          height: "32%",
                          background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "flex-end",
                          padding: "1vw 1.2vw",
                          zIndex: 2,
                        }}
                      >
                        <span
                          style={{
                            color: "#fff",
                            fontFamily: "var(--font-bruno-ace-sc), sans-serif",
                            fontWeight: 700,
                            fontSize: "1.1vw",
                            letterSpacing: "0.12em",
                            textShadow: "0 2px 8px rgba(0,0,0,0.5)",
                            alignSelf: "flex-end",
                          }}
                        >
                          {project2.title}
                        </span>
                        <span
                          style={{
                            color: "#fff",
                            fontFamily: "var(--font-century-gothic), Century Gothic, sans-serif",
                            fontSize: "0.8vw",
                            textShadow: "0 2px 8px rgba(0,0,0,0.5)",
                            alignSelf: "flex-end",
                            textAlign: "right",
                            width: "40%",
                          }}
                        >
                          {project2.location}
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </>
  );
};

const mosaicImages = [
  // Add your image URLs here
  "https://i.postimg.cc/NfTDPLRM/K29-7.webp",
  "https://i.postimg.cc/HLmxmvJ5/K46-4.webp",
  "https://i.postimg.cc/85tstdzv/K47-2.webp",
  "https://i.postimg.cc/fRDc2Cw2/K27-5.webp",
  "https://i.postimg.cc/BQtP7zDn/K50-3.webp",
  "https://i.postimg.cc/VNBYR60x/K12-3.webp",
  "https://i.postimg.cc/gk68k50B/K31-1.webp",
  "https://i.postimg.cc/zB6Yz3dM/K62-1.webp",
  "https://i.postimg.cc/yNCPHKXP/K35-1.webp",
  "https://i.postimg.cc/T3sPL2HV/K23-3.webp",
  "https://i.postimg.cc/854z151R/K29-5.webp",
  "https://i.postimg.cc/VvhqHPkX/K33-8.webp",
  "https://i.postimg.cc/QdLwYRPQ/K58.jpg",
  "https://i.postimg.cc/nLnHgs5G/K43-4.webp",
  "https://i.postimg.cc/Vk2CyF1P/K1-4.webp",
  "https://i.postimg.cc/DZNV5mL6/K66-1.webp",
  "https://i.postimg.cc/Nf5jcBZX/K13-4.webp",
  "https://i.postimg.cc/fL31rDwv/K60-2.webp",
  "https://i.postimg.cc/wxnFVDyZ/K29-2.webp",
  "https://i.postimg.cc/TwfPMmX2/K26-2.webp",
  "https://i.postimg.cc/bJK4XWrf/K59-4.webp",
  "https://i.postimg.cc/k4Tq0pcw/K1-2.webp",
  "https://i.postimg.cc/mrhFJ6Kw/K26-3.webp",
  "https://i.postimg.cc/5tgr0jtg/K64-4.webp",
  "https://i.postimg.cc/jdG6HT9b/K33-3.webp",
  "https://i.postimg.cc/g0j7xm6P/K59-3.webp",
  "https://i.postimg.cc/pd5g0PVJ/K39-2.webp",
  "https://i.postimg.cc/xTxKF9B7/ASHWA-34-8.png",
  // Add more if needed
];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const ProjectsMosaicPage = () => {
  const [sideItems, setSideItems] = useState([[], [], [], []]);
  const [hoveredSrc, setHoveredSrc] = useState(null);
  const [failedImages, setFailedImages] = useState([]);

  useEffect(() => {
    // This useEffect logic for calculating positions remains the same
    const paddingTop = 10;
    const overlap = 0.5;
    const imageCountFactor = 0.85;

    const usedImages = mosaicImages.slice(
      0,
      Math.ceil(mosaicImages.length * imageCountFactor)
    );

    const imagesPerSide = Math.ceil(usedImages.length / 4);
    const sides = [
      usedImages.slice(0, imagesPerSide),
      usedImages.slice(imagesPerSide, imagesPerSide * 2),
      usedImages.slice(imagesPerSide * 2, imagesPerSide * 3),
      usedImages.slice(imagesPerSide * 3),
    ];

        const newSideItems = sides.map((sideImgs, i) =>
          sideImgs.map((src, idx) => {
            let w, h;
            const shapeType = getRandomInt(0, 2);
            if (shapeType === 0) {
              w = getRandomInt(20, 28);
              h = getRandomInt(12, 18);
            } else if (shapeType === 1) {
              w = getRandomInt(12, 18);
              h = getRandomInt(20, 28);
            } else {
              const size = getRandomInt(15, 22);
              w = size;
              h = size;
            }
            const zIndex = getRandomInt(1, 5);
            // Hide if image failed to load
            if (failedImages.includes(src)) return null;
            if (i === 0) {
              const left = (idx * (100 - w * overlap)) / sideImgs.length;
              return { src, w, h, left, top: paddingTop, zIndex };
            } else if (i === 1) {
              const top = (idx * (100 - h * overlap)) / sideImgs.length;
              return { src, w, h, left: 100 - w, top, zIndex };
            } else if (i === 2) {
              const left = (idx * (100 - w * overlap)) / sideImgs.length;
              return { src, w, h, left, top: 100 - h, zIndex };
            } else {
              const top = (idx * (100 - h * overlap)) / sideImgs.length;
              return { src, w, h, left: 0, top, zIndex };
            }
          })
        );
        setSideItems(newSideItems);
  }, []);

  return (
    <div
      style={{
        width: "140vw",
        height: "100vh",
        background: "#E9ECEF",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {sideItems.map((sideImgs, i) => {
        // Determine the single index on this side closest to the equator (50vh)
        let closestIndex = -1;
        if (Array.isArray(sideImgs) && sideImgs.length > 0) {
          let best = { idx: -1, dist: Infinity };
          sideImgs.forEach((it, k) => {
            if (!it) return;
            const itTop = it.top || 50;
            const d = Math.abs(itTop - 50);
            if (d < best.dist) best = { idx: k, dist: d };
          });
          closestIndex = best.idx;
        }

        return (
          <React.Fragment key={i}>
            {sideImgs.map((item, idx) => {
            if (!item) return null;
            // compute a global index across all side arrays so labels/keys are unique
            const priorCount = sideItems.slice(0, i).reduce((sum, arr) => sum + (arr ? arr.length : 0), 0);
            const globalIndex = priorCount + idx;
            const srcName = item.src ? item.src.split('/').pop().split('?')[0] : `img-${globalIndex}`;
            // scale coordinates from original 100vw system to 140vw container
            const containerScale = 140 / 100; // 1.4
            const scaledLeft = (item.left || 0) * containerScale;
            const scaledWidth = (item.w || 0) * containerScale;
            // Apply explicit per-index margin overrides (1-based indexes)
            const oneBasedIndex = globalIndex + 1;
            let extraLeftVW = 0;
            let extraRightVW = 0;
            // Special nudge inward for image #1 if it ended up pinned too close to the corner
            let cornerNudgeVW = 0;
            // As requested: indexes 13 and 19 get a left margin (increased), index 7 gets a right margin (increased)
            if (oneBasedIndex === 13 || oneBasedIndex === 19) {
              extraLeftVW = 14; // increased from 10
            }
            if (oneBasedIndex === 7) {
              extraRightVW = 14; // increased from 10
            }
            if (oneBasedIndex === 1) {
              // move it inward by 12vw from the corner — direction depends on which side the item is on
              cornerNudgeVW = 12; // increased from 8
            }
            // Apply corner nudge: for right-side items (i===1) we move left, otherwise move right
            const adjustedLeft = i === 1
              ? scaledLeft - cornerNudgeVW + extraLeftVW - extraRightVW
              : scaledLeft + cornerNudgeVW + extraLeftVW - extraRightVW;
            // Convex curvature: for left (i===3) and right (i===1) sides,
            // compute a translateX inward proportional to distance from vertical equator (50vh)
            let dynamicBorderRadius = 12; // base px
            let translateVW = 0;
            if (i === 1 || i === 3) {
              const itemTop = item.top || 50; // in vh
              const itemLeft = item.left || 50; // in vw-like units
              const distFromEquator = Math.abs(itemTop - 50); // 0..50
              // Only one item per side (closest to equator) will have zero margin
              const isClosestToEquator = idx === closestIndex;

              // Map margins for non-closest items to a range [5, 30]vw based on distance
              const minMarginVW = 5;
              const maxMarginVW = 30;

              // boost for corner items (first/last in column)
              const isCorner = idx === 0 || idx === (sideImgs.length - 1);
              // boost for items near absolute top/bottom (extremes)
              const isExtremePos = itemTop <= 12 || itemTop >= 88;
              // detect positional corners by both top/left extremes
              const isTop = itemTop <= 12;
              const isBottom = itemTop >= 88;
              const isLeft = itemLeft <= 12;
              const isRight = itemLeft >= 88;
              const isPosCorner = (isTop && isLeft) || (isTop && isRight) || (isBottom && isLeft) || (isBottom && isRight);

              let edgeBoost = 1.0;
              if (isCorner) edgeBoost = 1.6;
              if (isExtremePos) edgeBoost = Math.max(edgeBoost, 1.9);
              if (isPosCorner) edgeBoost = Math.max(edgeBoost, 2.2);

              if (isClosestToEquator) {
                translateVW = 0;
                dynamicBorderRadius = 12;
              } else {
                const normalized = Math.min(1, distFromEquator / 50);
                // linear mapping to [minMarginVW, maxMarginVW], then apply edgeBoost
                translateVW = +((minMarginVW + normalized * (maxMarginVW - minMarginVW)) * edgeBoost).toFixed(2);
                dynamicBorderRadius = 12 + Math.round(normalized * 36 * edgeBoost);
              }

              // If it's a positional corner, add rotation and stronger shadow later
              if (isPosCorner) {
                // mark via adding small properties we can pick up below
                item._isPosCorner = true;
                item._cornerDir = isTop ? (isLeft ? 'top-left' : 'top-right') : isLeft ? 'bottom-left' : 'bottom-right';
              }
            }
            // 2. Determine styles based on hover state
            const isHovered = hoveredSrc === item.src;
            const isAnyHovered = hoveredSrc !== null;

            const baseScale = isHovered ? "scale(1.1)" : "scale(1)";
            // apply translate for side curvature and then scale for hover
            const translateStr = i === 3 ? `translateX(${translateVW}vw)` : i === 1 ? `translateX(-${translateVW}vw)` : "";

            // corner visuals
            const isPosCornerFlag = item._isPosCorner === true;
            const cornerShadow = isPosCornerFlag ? '0 12px 40px rgba(0,0,0,0.28)' : '0 4px 18px rgba(0,0,0,0.13)';

            const style = {
              position: "absolute",
              left: `${adjustedLeft}vw`,
              top: `${item.top}vh`,
              width: `${scaledWidth}vw`,
              height: `${item.h}vh`,
              borderRadius: `${dynamicBorderRadius}px`,
              // No rotation: only translate (for curvature) and scale (for hover)
              transform: `${translateStr} ${baseScale}`,
              overflow: "hidden",
              boxShadow: cornerShadow,
              background: "#eee",
              // --- Dynamic styles for the hover effect ---
              transition: "transform 0.3s ease, filter 0.3s ease, opacity 0.3s ease",
              zIndex: isHovered ? 20 : isPosCornerFlag ? 15 : item.zIndex,
              filter: isAnyHovered && !isHovered ? "grayscale(100%)" : "grayscale(0%)",
              opacity: isAnyHovered && !isHovered ? "0.6" : "1",
            };

            return (
              <div
                key={`${globalIndex}-${srcName}`}
                style={style}
                // 3. Add event handlers to update the state
                onMouseEnter={() => setHoveredSrc(item.src)}
                onMouseLeave={() => setHoveredSrc(null)}
                data-mosaic-index={globalIndex + 1}
              >
                {/* Index badge: keep in DOM for debugging but hidden visually */}
                <div
                  style={{
                    position: "absolute",
                    top: "6px",
                    left: "6px",
                    background: "rgba(0,0,0,0.65)",
                    color: "#fff",
                    padding: "4px 6px",
                    borderRadius: "6px",
                    fontSize: "0.75rem",
                    zIndex: 40,
                    pointerEvents: "none",
                    opacity: 0,
                    width: 0,
                    height: 0,
                    overflow: "hidden",
                  }}
                >
                  {globalIndex + 1}
                </div>
                {/* Apply special corner fixes for indexes 7, 13, 19 (1-based) */}
                {(() => {
                  const oneBased = globalIndex + 1;
                  const isProblemCorner = oneBased === 1 || oneBased === 7 || oneBased === 13 || oneBased === 19;
                  const cornerOverrides = isProblemCorner
                    ? {
                        // only adjust shadow and zIndex for problem corners; no rotation
                        boxShadow: '0 22px 64px rgba(0,0,0,0.44)',
                        zIndex: (style.zIndex || 20) + 18,
                      }
                    : {};

                  return (
                    <div style={{ width: '100%', height: '100%', position: 'relative', ...cornerOverrides }}>
                      <Image
                        src={item.src}
                        alt={`${srcName} ${globalIndex}`}
                        width={600}
                        height={600}
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: 'block' }}
                      />
                    </div>
                  );
                })()}
              </div>
            );
          })}
        </React.Fragment>
          );
        })}
      {/* Center text */}
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
        }}
      >
        <h1
          style={{
            fontSize: "3vw",
            fontWeight: 700,
            letterSpacing: "0.08em",
            color: "#222",
            textAlign: "center",
            fontFamily: "var(--font-bruno-ace-sc), sans-serif",
          }}
        >
          We Build the <br/> Extraordinary
        </h1>
      </div>
    </div>
  );
};


export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const weTextRef = useRef(null);
  const areTextRef = useRef(null);
  const collectiveTextRef = useRef(null);

  // Only include widths for rendered scenes: IntroScene (125vw), ProjectsMosaicPage (140vw), ContactUs (100vw)
  const totalContainerWidth = 125 + 140 + 100;

  useEffect(() => {
    const container = containerRef.current;
    const section = sectionRef.current;
    if (!container || !section) return;

    const totalScrollDistance =
      (totalContainerWidth * window.innerWidth) / 100 - window.innerWidth;

    gsap.to(container, {
      x: () => `-${totalScrollDistance}`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${totalScrollDistance}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    const textScrollDistance = window.innerHeight;
    gsap.to(weTextRef.current, {
      x: "-400px",
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${textScrollDistance}`,
        scrub: 1,
      },
    });
    gsap.to(areTextRef.current, {
      x: "-160px",
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${textScrollDistance}`,
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [totalContainerWidth]);

  return (
    <section
      id="projects-section"
      ref={sectionRef}
      className="relative bg-gray-2 text-gray-9 overflow-hidden"
      style={{ height: "100vh", width: "100vw" }}
    >
      <div
        ref={containerRef}
        className="flex"
        style={{ height: "100vh", width: `${totalContainerWidth}vw`, willChange: "transform" }}
      >
        <IntroScene
          weTextRef={weTextRef}
          areTextRef={areTextRef}
          collectiveTextRef={collectiveTextRef}
        />
        {/* <AboutScene /> */}
        {/* <ProjectsScene
          projects={projects}
          verticalProjectsWidth={verticalProjectsWidth}
        /> */}
        <ProjectsMosaicPage />
        <ContactUs />
      </div>
    </section>
  );
}
