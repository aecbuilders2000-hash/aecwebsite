"use client";
import React from "react";
import HeroSection from "./components/HeroSection";
import useScrollOnLoad from './hooks/useScrollOnLoad';
import { useLenis } from "../lib/lenis";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import ClientsSection from "./components/ClientsSection";
import ContentSection from "./components/ContentSection";
import ServicesOverview from "./components/ServicesOverview";
import ContactUs from "./contact-us/ContactUsForm";
import TestinomialSection from "./components/TestinomialSection";
import Services2 from "./components/Services2";

export default function Home() {
  // useLenis();
  useScrollOnLoad();

  return (
    <div>
      <HeroSection />
      {/* Content Section with GSAP pin/reveal animation (self-contained) */}
      <ContentSection />
      <section className="bg-gray-100"
        style={{
          minHeight: "125vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--gray-9)",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
          {/* Buffer Section */}
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
