"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import ArrowButton from "../ui/ArrowButton";

gsap.registerPlugin(ScrollTrigger);

// --- DATA ---
const projects = [
  // {
  //   title: "THE MARINA",
  //   location: "Surat, India",
  //   imageUrl: "https://i.postimg.cc/9XxRcJ1w/ASHWA-01-1.png",
  // },
  // {
  //   title: "SKYLINE TOWERS",
  //   location: "Mumbai, India",
  //   imageUrl: "https://i.postimg.cc/Fzn7GH1V/ASHWA-01-2.png",
  // },
  // {
  //   title: "EMERALD GARDENS",
  //   location: "Bangalore, India",
  //   imageUrl: "https://i.postimg.cc/02b6jDHW/ASHWA-01-3.png",
  // },
  // {
  //   title: "CRYSTAL PALMS",
  //   location: "Goa, India",
  //   imageUrl: "https://i.postimg.cc/254LmYXC/ASHWA-01-4.png",
  // },
  // {
  //   title: "GOLDEN HEIGHTS",
  //   location: "Delhi, India",
  //   imageUrl: "https://i.postimg.cc/sXsQgLt7/ASHWA-01-5.png",
  // },
  // {
  //   title: "AZURE RESIDENCY",
  //   location: "Chennai, India",
  //   imageUrl: "https://i.postimg.cc/FRpfdZ4q/ASHWA-01-6.png",
  // },
  // {
  //   title: "PLATINUM PLAZA",
  //   location: "Hyderabad, India",
  //   imageUrl: "https://i.postimg.cc/m2D990hS/ASHWA-01-7.png",
  // },
  // {
  //   title: "DIAMOND DISTRICT",
  //   location: "Pune, India",
  //   imageUrl: "https://i.postimg.cc/QxyTJ0TZ/ASHWA-01-8.png",
  // },
  // {
  //   title: "SAPPHIRE SQUARE",
  //   location: "Ahmedabad, India",
  //   imageUrl: "https://i.postimg.cc/gj0xvZc0/ASHWA-01-9.png",
  // },
  // {
  //   title: "RUBY RETREAT",
  //   location: "Kolkata, India",
  //   imageUrl: "https://i.postimg.cc/KcQLRZcz/ASHWA-01-10.png",
  // },
  // {
  //   title: "PEARL PAVILION",
  //   location: "Jaipur, India",
  //   imageUrl: "https://i.postimg.cc/MGkfhH5s/ASHWA-01-11.png",
  // },
  // {
  //   title: "OPAL OASIS",
  //   location: "Kochi, India",
  //   imageUrl: "https://i.postimg.cc/C5vft4rD/ASHWA-34-1.png",
  // },
  // {
  //   title: "JADE JUNCTION",
  //   location: "Lucknow, India",
  //   imageUrl: "https://i.postimg.cc/2yT4YYy1/ASHWA-34-2.png",
  // },
  // {
  //   title: "CORAL COURT",
  //   location: "Indore, India",
  //   imageUrl: "https://i.postimg.cc/13bDsJmr/ASHWA-34-3.png",
  // },
  // {
  //   title: "AMBER ARCADE",
  //   location: "Bhopal, India",
  //   imageUrl: "https://i.postimg.cc/NjKR3Wc0/ASHWA-34-4.png",
  // },
  // {
  //   title: "IVORY ISLE",
  //   location: "Chandigarh, India",
  //   imageUrl: "https://i.postimg.cc/gJWR6j6w/ASHWA-34-5.png",
  // },
  // {
  //   title: "ONYX OUTLOOK",
  //   location: "Vadodara, India",
  //   imageUrl: "https://i.postimg.cc/xC3mGQK6/ASHWA-34-6.png",
  // },
  // {
  //   title: "QUARTZ QUARTERS",
  //   location: "Nashik, India",
  //   imageUrl: "https://i.postimg.cc/zXXCjy2K/ASHWA-34-7.png",
  // },
  // {
  //   title: "GRANITE GROVE",
  //   location: "Coimbatore, India",
  //   imageUrl: "https://i.postimg.cc/xTxKF9B7/ASHWA-34-8.png",
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
  //   title: "BRICK BOULEVARD",
  //   location: "Nagpur, India",
  //   imageUrl: "https://i.postimg.cc/LXttyLMB/ASHWA-34-12.png",
  // },
  // {
  //   title: "TERRACOTTA TERRACE",
  //   location: "Patna, India",
  //   imageUrl: "https://i.postimg.cc/W3Lm6Sx1/ASHWA-34-13.png",
  // },
  // {
  //   title: "CLAY COURTYARD",
  //   location: "Agra, India",
  //   imageUrl: "https://i.postimg.cc/fRPfkMKX/ASHWA-34-14.png",
  // },
  // {
  //   title: "CONCRETE CITADEL",
  //   location: "Solapur, India",
  //   imageUrl: "https://i.postimg.cc/L4kDvK9K/ASHWA-34-15.png",
  // }
];

// --- TEXT CONTENT ---
const firstParagraphText = `Collective AEC specializes in delivering exceptional commercial and residential projects, blending creativity with technical expertise. Our team of architects, designers, and project managers collaborates closely with clients to turn ideas into reality. From concept development to final execution, we handle every detail, ensuring each project is completed with precision, innovation, and a commitment to quality that sets us apart in the industry.`;
const secondParagraphText = `Your project’s blueprint. It defines vision, guides execution, and ensures every decision you make shapes a space that truly resonates with its users.`;

// --- SCENE COMPONENTS ---

const IntroScene = React.forwardRef(
  ({ weTextRef, areTextRef, collectiveTextRef }, ref) => {
    // --- START: SLIDESHOW LOGIC ---
    // Use three different images for the GSAP slideshow
    const slideshowImages = [
      "/K6 (3).webp",
      "/K17 (1).webp",
      "/K12 (3).webp",
    ];
    const imageSet = [...slideshowImages, slideshowImages[0]];

    useEffect(() => {
      const items = gsap.utils.toArray(".intro-slideshow-item");
      const images = gsap.utils.toArray(".intro-slideshow-item img");
      if (items.length <= 1) return;

      items.forEach((item, index) => {
        if (index !== 0) {
          gsap.set(item, { yPercent: 100 });
          gsap.set(images[index], { yPercent: -100 });
        }
      });

      const tl = gsap.timeline({
        repeat: -1,
        defaults: { ease: "power3.inOut", duration: 1.5 },
      });

      items.forEach((item, index) => {
        if (index < items.length - 1) {
          tl.to(item, { yPercent: -100 })
            .to(images[index], { yPercent: 100 }, "<")
            .to(items[index + 1], { yPercent: 0 }, "<")
            .to(images[index + 1], { yPercent: 0 }, "<")
            .to({}, { duration: 2 });
        }
      });

      return () => {
        tl.kill();
      };
    }, []);
    // --- END: SLIDESHOW LOGIC ---

    return (
      <div
        className="relative bg-gray-2 flex"
        style={{ minWidth: "125vw", height: "100vh" }}
      >
        {/* Left Side */}
        {/* --- START: CODE CORRECTION FOR ALIGNMENT --- */}
        <div className="relative w-[50vw] min-w-[300px] flex flex-col justify-start items-start py-0">
          {/* SUMMARY OF CHANGES:
            1. Parent container now uses `justify-start` to align children to the top.
            2. The slideshow container below no longer has `max-w-[35vw]`, allowing it to fill the full width.
            3. `mt-0` is removed as it's no longer necessary.
          */}
          <div className="relative h-[75vh] w-full max-w-[35vw] mb-6 overflow-hidden">
            {imageSet.map((src, index) => (
              <div
                key={index}
                className="intro-slideshow-item"
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
                  alt={`Slideshow image ${index + 1}`}
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
          {/* --- END: CODE CORRECTION FOR ALIGNMENT --- */}

          <div className="mb-2 px-6 flex items-center gap-4">
            <h2
              className="font-bruno-ace-sc text-black font-bold tracking-widest leading-tight"
              style={{
                fontFamily: "var(--font-bruno-ace-sc), sans-serif",
                fontSize: "clamp(1.28rem, 2.7vw, 3rem)",
                letterSpacing: "0.3em",
              }}
            >
              OUR <br /> PROJECTS
            </h2>
            <button className="flex items-center justify-center cursor-pointer bg-transparent font-geist-sans group">
              <div className="bg-black rounded-full flex items-center justify-center w-12 h-12 transition-colors duration-300 ease-in-out">
                <svg
                  className="stroke-white transform transition-transform duration-300 ease-in-out rotate-0 group-hover:-rotate-45"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M13 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>
          <div className="absolute top-0 right-0 h-full flex items-start">
            <div className="flex flex-col gap-8 pr-4 items-end justify-between h-full py-8">
              <span
                className="font-bruno-ace-sc text-black font-bold tracking-widest leading-tight"
                style={{
                  fontFamily: "var(--font-bruno-ace-sc), sans-serif",
                  fontSize: "clamp(1rem, 2vw, 1.5rem)",
                  letterSpacing: "0.3em",
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                COLLECTIVE
              </span>
              {["Residential", "Commercial"].map((item, index) => (
                <span
                  key={index}
                  className="text-sm"
                  style={{
                    letterSpacing: "0.3em",
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="w-[2px] bg-gray-500 h-full"></div>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative w-[75vw] mt-[5%]">
          <div
            className="text-3xl ml-[5%]"
            style={{
              fontFamily: "var(--font-bruno-ace-sc), sans-serif",
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
              letterSpacing: "0.2em",
              lineHeight: "1.2",
            }}
          >
            FROM HERE, <br /> IT&apos;S ONLY UP
          </div>
          <div className="ml-[5%] mt-4 md:mt-8 mb-8 flex items-center gap-4">
            <h2
              className="font-normal"
              style={{
                fontFamily:
                  "var(--font-century-gothic), Century Gothic, sans-serif",
                fontSize: "clamp(1.2rem, 1.5vw, 2rem)",
                fontWeight: "400",
                letterSpacing: "0.05em",
              }}
            >
              Let&apos;s Collaborate
            </h2>
            <button className="flex items-center justify-center cursor-pointer bg-transparent font-geist-sans group">
              <div className="bg-black rounded-full flex items-center justify-center w-12 h-12 transition-colors duration-300 ease-in-out">
                <svg
                  className="stroke-white transform transition-transform duration-300 ease-in-out -rotate-45 group-hover:rotate-0"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M13 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>
          <div
            className="font-bruno-ace-sc text-black font-bold text-right tracking-widest leading-tight"
            style={{
              fontFamily: "var(--font-bruno-ace-sc), sans-serif",
              fontSize: "clamp(2rem, 7vw, 5rem)",
              letterSpacing: "0.3em",
            }}
          >
            <div ref={weTextRef}>WE</div>
            <div ref={areTextRef}>ARE</div>
            <div ref={collectiveTextRef}>COLLECTIVE</div>
          </div>
        </div>
      </div>
    );
  }
);
IntroScene.displayName = "IntroScene";

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
    <div className="w-[120vw] flex">
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
      style={{
        width: "100vw",
        height: "100vh",
        background: "#E9ECEF",
        color: "#111",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        textAlign: "center",
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
        <ArrowButton label="Let's Collaborate" />
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

      <ContactUs />
    </>
  );
};

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const weTextRef = useRef(null);
  const areTextRef = useRef(null);
  const collectiveTextRef = useRef(null);

  const numColumns = Math.ceil(projects.length / 2);
  const verticalProjectsWidth = numColumns * 20 + 8;
  const totalContainerWidth = 125 + 120 + verticalProjectsWidth + 100;

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
        style={{
          height: "100vh",
          width: `${totalContainerWidth}vw`,
          willChange: "transform",
        }}
      >
        <IntroScene
          weTextRef={weTextRef}
          areTextRef={areTextRef}
          collectiveTextRef={collectiveTextRef}
        />
        <AboutScene />
        <ProjectsScene
          projects={projects}
          verticalProjectsWidth={verticalProjectsWidth}
        />
      </div>
    </section>
  );
}
