"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

// ProjectCard component
const ProjectCard = ({
    title = "THE MARINA",
    location = "Surat, India",
    imageUrl = "ModernVilla.png",
}) => {
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 w-full">
            {/* Header */}
            <div className="p-4 pb-3">
                <h2 className="text-lg font-bold text-gray-900 tracking-wider mb-1">
                    {title}
                </h2>
                <p className="text-gray-600 text-xs font-light tracking-wide">
                    {location}
                </p>
            </div>

            {/* Image Container */}
            <div className="px-4 pb-4">
                <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-[4/3]">
                    {!imageError ? (
                        <img
                            src={imageUrl}
                            alt={title}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                            onError={handleImageError}
                        />
                    ) : (
                        // Placeholder when image fails to load
                        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-white rounded-lg mx-auto mb-2 flex items-center justify-center shadow-sm">
                                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <p className="text-gray-500 text-xs">Project Image</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  // Sample project data - 20 projects
  const projects = [
    { title: "THE MARINA", location: "Surat, India", imageUrl: "/ModernVilla.png" },
    { title: "SKYLINE TOWERS", location: "Mumbai, India", imageUrl: "/ModernVilla.png" },
    { title: "EMERALD GARDENS", location: "Bangalore, India", imageUrl: "/ModernVilla.png" },
    { title: "CRYSTAL PALMS", location: "Goa, India", imageUrl: "/ModernVilla.png" },
    { title: "GOLDEN HEIGHTS", location: "Delhi, India", imageUrl: "/ModernVilla.png" },
    { title: "AZURE RESIDENCY", location: "Chennai, India", imageUrl: "/ModernVilla.png" },
    { title: "PLATINUM PLAZA", location: "Hyderabad, India", imageUrl: "/ModernVilla.png" },
    { title: "DIAMOND DISTRICT", location: "Pune, India", imageUrl: "/ModernVilla.png" },
    { title: "SAPPHIRE SQUARE", location: "Ahmedabad, India", imageUrl: "/ModernVilla.png" },
    { title: "RUBY RETREAT", location: "Kolkata, India", imageUrl: "/ModernVilla.png" },
    { title: "PEARL PAVILION", location: "Jaipur, India", imageUrl: "/ModernVilla.png" },
    { title: "OPAL OASIS", location: "Kochi, India", imageUrl: "/ModernVilla.png" },
    { title: "JADE JUNCTION", location: "Lucknow, India", imageUrl: "/ModernVilla.png" },
    { title: "CORAL COURT", location: "Indore, India", imageUrl: "/ModernVilla.png" },
    { title: "AMBER ARCADE", location: "Bhopal, India", imageUrl: "/ModernVilla.png" },
    { title: "IVORY ISLE", location: "Chandigarh, India", imageUrl: "/ModernVilla.png" },
    { title: "ONYX OUTLOOK", location: "Vadodara, India", imageUrl: "/ModernVilla.png" },
    { title: "QUARTZ QUARTERS", location: "Nashik, India", imageUrl: "/ModernVilla.png" },
    { title: "GRANITE GROVE", location: "Coimbatore, India", imageUrl: "/ModernVilla.png" },
    { title: "MARBLE MANOR", location: "Mysore, India", imageUrl: "/ModernVilla.png" }
  ];

  useEffect(() => {
    const container = containerRef.current;
    const section = sectionRef.current;
    if (!container || !section) return;

    gsap.set(container, { x: 0 });

    // Calculate total width including the intro section + all project pages
    // Each project page is 100vw, so 10 pages = 1000vw + 125vw intro = 1125vw total
    const projectPagesCount = Math.ceil(projects.length / 4); // 4 projects per page (2x2 grid)
    const totalWidth = (125 + (projectPagesCount * 100)) * window.innerWidth / 100 - window.innerWidth;

    const st = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: () => `+=${totalWidth}`,
      pin: true,
      scrub: 1,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      scroller: document.body,
    });

    gsap.to(container, {
      x: () => `-${totalWidth}`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${totalWidth}`,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        scroller: document.body,
      },
    });

    return () => {
      st.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [projects.length]);

  // Create project pages (4 projects per page in 2x2 grid)
  const createProjectPages = () => {
    const pages = [];
    const projectsPerPage = 4;
    const totalPages = Math.ceil(projects.length / projectsPerPage);

    for (let i = 0; i < totalPages; i++) {
      const startIndex = i * projectsPerPage;
      const pageProjects = projects.slice(startIndex, startIndex + projectsPerPage);
      
      pages.push(
        <div key={i} className="w-[100vw] h-[100vh] flex items-center justify-center bg-gray-1 border-r-2 border-gray-4">
          <div className="w-full h-full p-8 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-8 max-w-4xl w-full">
              {pageProjects.map((project, index) => (
                <div key={startIndex + index} className="w-full">
                  <ProjectCard
                    title={project.title}
                    location={project.location}
                    imageUrl={project.imageUrl}
                  />
                </div>
              ))}
              {/* Fill empty slots if less than 4 projects on last page */}
              {pageProjects.length < projectsPerPage && 
                Array(projectsPerPage - pageProjects.length).fill(null).map((_, emptyIndex) => (
                  <div key={`empty-${emptyIndex}`} className="w-full opacity-0"></div>
                ))
              }
            </div>
          </div>
        </div>
      );
    }
    return pages;
  };

  const projectPagesCount = Math.ceil(projects.length / 4);
  const totalContainerWidth = 125 + (projectPagesCount * 100); // 125vw intro + project pages

  return (
    <section
      ref={sectionRef}
      className="relative bg-gray-2 text-gray-9 overflow-hidden flex items-center justify-start border-t border-b border-gray-4"
      style={{
        height: "100vh",
        width: "100vw",
      }}
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
        {/* Intro Section - "Our Projects" */}
        <div
          className="relative bg-gray-2 border-r-2 border-gray-4 flex"
          style={{
            minWidth: "125vw",
            height: "100vh",
          }}
        >
          {/* Left Side - Image and Our Projects */}
          <div className="relative w-[50vw] min-w-[300px] flex flex-col justify-center py-0">
            {/* Image */}
            <div className="relative h-[75vh] w-full max-w-[35vw] mb-6 mt-0">
              <Image
                src="/ModernVilla.png"
                alt="Modern Villa"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            {/* Text */}
            <div className="mb-2 px-6">
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
            </div>

            {/* Button */}
            <div className="flex justify-end max-w-[35vw]">
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
            {/* Vertical Text + Line - Right Edge */}
            <div className="absolute top-0 right-0 h-full flex items-start">
              {/* Text Block */}
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
                {["Automation", "Commercial"].map((item, index) => (
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

              {/* Vertical Line */}
              <div className="w-[2px] bg-gray-500 h-full"></div>
            </div>
          </div>

          {/* Right Side - Large Text */}
          <div className="relative w-[75vw] mt-[5%]">
            <div className="text-3xl ml-[5%]"
              style={{
                fontFamily: "var(--font-bruno-ace-sc), sans-serif",
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                letterSpacing: "0.2em",
                lineHeight: "1.2",
              }}>
              FROM HERE,
              <br />
              IT&apos;S ONLY UP
            </div>

            <div className="text-3xl ml-[5%] mt-4 md:mt-8 mb-8 flex items-center gap-4">
              <h2>Let&apos;s Collaborate</h2>
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
              WE <br /> ARE
              <br /> COLLECTIVE
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="w-[100vw] flex border-r-2 border-gray-4">
          <div className="w-[50%] mx-auto flex justify-center">
            <div style={{ width: "100%", height: "100vh", position: "relative" }}>
              <Image
                src="/ModernVilla.png"
                alt="Modern Villa"
                fill
                className="w-full h-full object-fill"
                style={{ objectFit: "fill" }}
              />
            </div>
          </div>
          <div className="w-[50%] mx-auto pb-8 pt-8 ml-[5%] text-black">
            <div className="w-full text-left flex flex-col items-start gap-8">
              <p className="w-[60%] text-xl">
                Collective AEC is a specialized collaborative studio offering end-to-end backend support for design firms. We are not an outsourcing company. We are your extended in-house team of architects, designers, visualizers, computational experts, and problem solvers. Our mission is to free design firms from the time-consuming burdens of drafting, automation, and visualization, so they can focus on what matters most: designing, innovating and winning clients.
              </p>
            </div>
            <div className="w-full text-right mt-48 flex flex-col items-end gap-8">
              <p className="w-[40%] text-xl mr-[5%] text-[#737272]">
                Your brand&apos;s compass. It defines purpose, sharpens positioning, and ensures every decision you make resonates with your audience.
              </p>
            </div>
          </div>
        </div>

        {/* Single Projects Section - All 20 projects in 2 rows */}
        {
          createProjectPages()
        }
      </div>
    </section>
  );
}