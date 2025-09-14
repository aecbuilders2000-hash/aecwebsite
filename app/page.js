"use client";
import React from "react";
import HeroSection from "./components/HeroSection";
import { useLenis } from "../lib/lenis";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import ClientsSection from "./components/ClientsSection";
import ContentSection from "./components/ContentSection";
import ServicesOverview from "./components/ServicesOverview";
import ContactUs from "./components/ContactUs";
import TestinomialSection from "./components/TestinomialSection";

export default function Home() {
  useLenis();

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
      {/* <CardServices /> */}
      <ServicesOverview />
      <ServicesSection />
      <ClientsSection />
      <ProjectsSection />
      <TestinomialSection />
      <ContactUs />
    </div>
  );
}
