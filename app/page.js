"use client";
import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import { useLenis } from "../lib/lenis";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ClientsSection from "./components/ClientsSection";
import ContentSection from "./components/ContentSection";
import SplashLoader from "./components/SplashLoader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  
  useLenis();

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  // Show loader until complete
//   if (isLoading) {
//     return <SplashLoader onComplete={handleLoaderComplete} />;
//   }

  return (
    <div>
      <HeroSection />
      {/* Content Section with GSAP pin/reveal animation (self-contained) */}
      <ContentSection />
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--gray-2)",
          color: "var(--gray-9)",
          borderTop: "1px solid var(--gray-3)",
          borderBottom: "1px solid var(--gray-3)",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
          Buffer Section
        </h2>
      </section>
      <ServicesSection/>
      {/* <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#3a7bd5",
          color: "#fff",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Text Section</h2>
      </section>
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#00c6ff",
          color: "#222",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
          Services Section
        </h2>
      </section> */}
  {/* ProjectsSection restored below */}
  <ClientsSection />
  <ProjectsSection />
  <TestimonialsSection />
      <footer
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--gray-9)",
          color: "var(--gray-0)",
          borderTop: "1px solid var(--gray-3)",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
          Footer Section
        </h2>
      </footer>
    </div>
  );
}
