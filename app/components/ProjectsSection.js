"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

// --- DATA ---
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


// --- SCENE COMPONENTS ---

const IntroScene = React.forwardRef(({ weTextRef, areTextRef, collectiveTextRef }, ref) => {
  return (
    <div className="relative bg-gray-2 flex" style={{ minWidth: "125vw", height: "100vh" }}>
      {/* Left Side */}
      <div className="relative w-[50vw] min-w-[300px] flex flex-col justify-center py-0">
        <div className="relative h-[75vh] w-full max-w-[35vw] mb-6 mt-0">
          <Image src="/ModernVilla.png" alt="Modern Villa" fill className="object-cover" />
        </div>
        <div className="mb-2 px-6">
          <h2 className="font-bruno-ace-sc text-black font-bold tracking-widest leading-tight" style={{ fontFamily: "var(--font-bruno-ace-sc), sans-serif", fontSize: "clamp(1.28rem, 2.7vw, 3rem)", letterSpacing: "0.3em" }}>
            OUR <br /> PROJECTS
          </h2>
        </div>
        <div className="flex justify-end max-w-[35vw] items-end -mb-2">
            <button className="flex items-center justify-center cursor-pointer bg-transparent font-geist-sans group">
                <div className="bg-black rounded-full flex items-center justify-center w-16 h-16 transition-colors duration-300 ease-in-out">
                    <svg className="stroke-white transform transition-transform duration-300 ease-in-out rotate-0 group-hover:-rotate-45" width="36" height="36" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" /><path d="M13 5l7 7-7 7" />
                    </svg>
                </div>
            </button>
        </div>
        <div className="absolute top-0 right-0 h-full flex items-start">
          <div className="flex flex-col gap-8 pr-4 items-end justify-between h-full py-8">
            <span className="font-bruno-ace-sc text-black font-bold tracking-widest leading-tight" style={{ fontFamily: "var(--font-bruno-ace-sc), sans-serif", fontSize: "clamp(1rem, 2vw, 1.5rem)", letterSpacing: "0.3em", writingMode: "vertical-rl", transform: "rotate(180deg)" }}>COLLECTIVE</span>
            {["Automation", "Commercial"].map((item, index) => (
              <span key={index} className="text-sm" style={{ letterSpacing: "0.3em", writingMode: "vertical-rl", transform: "rotate(180deg)" }}>{item}</span>
            ))}
          </div>
          <div className="w-[2px] bg-gray-500 h-full"></div>
        </div>
      </div>
      {/* Right Side */}
      <div className="relative w-[75vw] mt-[5%]">
        <div className="text-3xl ml-[5%]" style={{ fontFamily: "var(--font-bruno-ace-sc), sans-serif", fontSize: "clamp(1.5rem, 3vw, 2.5rem)", letterSpacing: "0.2em", lineHeight: "1.2" }}>
          FROM HERE, <br /> IT&apos;S ONLY UP
        </div>
        <div className="ml-[5%] mt-4 md:mt-8 mb-8 flex items-center gap-4">
          <h2 className="font-normal" style={{ fontFamily: "var(--font-century-gothic), Century Gothic, sans-serif", fontSize: "clamp(1.2rem, 1.5vw, 2rem)", fontWeight: "400", letterSpacing: "0.05em" }}>Let&apos;s Collaborate</h2>
          <button className="flex items-center justify-center cursor-pointer bg-transparent font-geist-sans group">
            <div className="bg-black rounded-full flex items-center justify-center w-12 h-12 transition-colors duration-300 ease-in-out">
              <svg className="stroke-white transform transition-transform duration-300 ease-in-out -rotate-45 group-hover:rotate-0" width="28" height="28" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="M13 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>
        <div className="font-bruno-ace-sc text-black font-bold text-right tracking-widest leading-tight" style={{ fontFamily: "var(--font-bruno-ace-sc), sans-serif", fontSize: "clamp(2rem, 7vw, 5rem)", letterSpacing: "0.3em" }}>
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
  return (
    <div className="w-[120vw] flex">
      <div className="w-[100vw] flex">
        <div className="relative h-[100vh]" style={{ aspectRatio: "1/1", transform: 'translateX(3vw)' }}>
          <Image src="/ModernVilla.png" alt="Modern Villa" fill className="object-cover" />
          <div className="absolute" style={{ width: "60%", height: "40%", top: "12%", left: "20%" }}>
            <Image src="/SanBridge.png" alt="San Bridge" fill className="object-cover" style={{ filter: "grayscale(100%) contrast(120%)" }} />
          </div>
        </div>
      </div>
      <div className="w-[55%] mx-auto pb-8 pt-8 ml-[5%] text-black">
        <div className="w-full text-left flex flex-col items-start gap-8">
          <p className="w-[80%] text-xl" style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 400, transform: 'translateX(-4vw)' }}>
            Collective AEC is a specialized collaborative studio offering end-to-end backend support for design firms. We are not an outsourcing company. We are your extended in-house team of architects, designers, visualizers, computational experts, and problem solvers. Our mission is to free design firms from the time-consuming burdens of drafting, automation, and visualization, so they can focus on what matters most: designing, innovating and winning clients.
          </p>
        </div>
        <div className="w-full text-right mt-48 flex flex-col items-end gap-8">
          <p className="w-[60%] text-xl mr-[5%] text-[#737272]" style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 400 }}>
            Your brand&apos;s compass. It defines purpose, sharpens positioning, and ensures every decision you make resonates with your audience.
          </p>
        </div>
      </div>
    </div>
  );
};

// **NEW**: A stylish placeholder for your ContactUs component.
const ContactUs = () => {
    return (
      <div style={{ width: '100vw', height: '100vh', background: '#E9ECEF', color: '#111', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center' }}>
        <h2 
          style={{ fontFamily: 'var(--font-bruno-ace-sc), sans-serif', fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '0.1em', marginBottom: '1.5rem' }}
          className="font-bold"
        >
          LET&spos;S BUILD TOGETHER
        </h2>
        <p 
          style={{ fontFamily: 'var(--font-poppins), sans-serif', maxWidth: '600px', marginBottom: '3rem', fontSize: 'clamp(1rem, 1.5vw, 1.125rem)', lineHeight: '1.75' }}
          className="text-gray-600"
        >
          Have a project in mind or just want to learn more about our process? We would love to connect with you.
        </p>
        <button className="flex items-center justify-center cursor-pointer bg-black text-white rounded-full group transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl" style={{ padding: '1rem 2.5rem', fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '1rem', letterSpacing: '0.1em' }}>
          <span>GET IN TOUCH</span>
          <svg className="stroke-white transform transition-transform duration-300 ease-in-out ml-3 rotate-0 group-hover:-rotate-45" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" /><path d="M13 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    );
};

const ProjectsScene = ({ projects, verticalProjectsWidth }) => {
  const numColumns = Math.ceil(projects.length / 2);

  return (
    <>
      <div style={{ background: '#E9ECEF', width: `${verticalProjectsWidth}vw`, height: '100vh', display: 'flex', position: 'relative' }}>
        {Array.from({ length: numColumns }).map((_, idx) => {
          const project1 = projects[idx * 2];
          const project2 = projects[idx * 2 + 1];
          return (
            <div key={idx} style={{ height: '100%', width: '20vw', borderLeft: '2px solid #737272', background: 'transparent', boxSizing: 'border-box', position: 'absolute', top: 0, left: `${4 + idx * 20}vw`, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ height: '100%', width: '90%', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 0 }}>
                <div style={{ flex: 1, background: 'transparent', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '0.7vw 1vw' }}>
                  {project1 && (<><span style={{ fontFamily: 'var(--font-bruno-ace-sc), sans-serif', fontWeight: 700, fontSize: '1.1vw', letterSpacing: '0.12em', maxWidth: '60%', wordBreak: 'break-word' }}>{project1.title}</span><span style={{ fontFamily: 'var(--font-century-gothic), Century Gothic, sans-serif', color: '#737272', fontSize: '0.8vw', maxWidth: '35%', textAlign: 'right' }}>{project1.location}</span></>)}
                </div>
                <div style={{ width: '100%', aspectRatio: '1/1', background: '#E3F2FD' }}>{project1 && <img src={project1.imageUrl} alt={project1.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}</div>
                <div style={{ flex: 1, background: 'transparent', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '0.7vw 1vw' }}>
                  {project2 && (<><span style={{ fontFamily: 'var(--font-bruno-ace-sc), sans-serif', fontWeight: 700, fontSize: '1.1vw', letterSpacing: '0.12em', maxWidth: '60%', wordBreak: 'break-word' }}>{project2.title}</span><span style={{ fontFamily: 'var(--font-century-gothic), Century Gothic, sans-serif', color: '#737272', fontSize: '0.8vw', maxWidth: '35%', textAlign: 'right' }}>{project2.location}</span></>)}
                </div>
                <div style={{ width: '100%', aspectRatio: '1/1', background: '#E3F2FD' }}>{project2 && <img src={project2.imageUrl} alt={project2.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}</div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* **CHANGE**: Replaced the blank page div with the ContactUs component */}
      <ContactUs />
    </>
  );
};


// --- MAIN EXPORTED COMPONENT ---

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const weTextRef = useRef(null);
  const areTextRef = useRef(null);
  const collectiveTextRef = useRef(null);

  const numColumns = Math.ceil(projects.length / 2);
  const verticalProjectsWidth = (numColumns * 20) + 8;
  const totalContainerWidth = 125 + 120 + verticalProjectsWidth + 100; // The final 100 is for the ContactUs page

  useEffect(() => {
    const container = containerRef.current;
    const section = sectionRef.current;
    if (!container || !section) return;
    
    const totalScrollDistance = (totalContainerWidth * window.innerWidth / 100) - window.innerWidth;
    
    // Main horizontal scroll animation
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

    // Intro text parallax animation
    const textScrollDistance = window.innerHeight;
    gsap.to(weTextRef.current, {
      x: "-400px", ease: "none",
      scrollTrigger: { trigger: section, start: "top top", end: `+=${textScrollDistance}`, scrub: 1 },
    });
    gsap.to(areTextRef.current, {
      x: "-160px", ease: "none",
      scrollTrigger: { trigger: section, start: "top top", end: `+=${textScrollDistance}`, scrub: 1 },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [totalContainerWidth]); // Re-run effect if total width changes

  return (
    <section ref={sectionRef} className="relative bg-gray-2 text-gray-9 overflow-hidden" style={{ height: "100vh", width: "100vw" }}>
      <div ref={containerRef} className="flex" style={{ height: "100vh", width: `${totalContainerWidth}vw`, willChange: "transform" }}>
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