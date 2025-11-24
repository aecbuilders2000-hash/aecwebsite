"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ClientsMarquee = () => {
  const sectionRef = useRef(null);
  const marquee1Ref = useRef(null);
  const marquee2Ref = useRef(null);

  // Only two rows now
  const imageRows = [
    [
      "https://i.postimg.cc/GmMykHwC/Gemini_Generated_Image_84uxsf84uxsf84ux.jpg",
      "https://i.postimg.cc/N05rbBBc/Gemini_Generated_Image_8cni4j8cni4j8cni_(1).jpg",
      "https://i.postimg.cc/MGvjtqq8/Gemini_Generated_Image_9lja669lja669lja_(1).jpg",
      "https://i.postimg.cc/mgdHQtf4/Gemini_Generated_Image_e4fjbve4fjbve4fj.jpg",
      "https://i.postimg.cc/DwCXq8kn/Gemini_Generated_Image_jkv9bsjkv9bsjkv9.jpg",
      "https://i.postimg.cc/GmMykHwC/Gemini_Generated_Image_84uxsf84uxsf84ux.jpg",
      "https://i.postimg.cc/N05rbBBc/Gemini_Generated_Image_8cni4j8cni4j8cni_(1).jpg",
      "https://i.postimg.cc/MGvjtqq8/Gemini_Generated_Image_9lja669lja669lja_(1).jpg",
      "https://i.postimg.cc/mgdHQtf4/Gemini_Generated_Image_e4fjbve4fjbve4fj.jpg",
      "https://i.postimg.cc/DwCXq8kn/Gemini_Generated_Image_jkv9bsjkv9bsjkv9.jpg",
    ],
    [
      "https://i.postimg.cc/K89MnRXs/Gemini_Generated_Image_ng572cng572cng57.jpg",
      "https://i.postimg.cc/htCd9fFy/Gemini_Generated_Image_pl53hdpl53hdpl53.jpg",
      "https://i.postimg.cc/wjWmh7K4/Gemini_Generated_Image_rw1o3vrw1o3vrw1o.jpg",
      "https://i.postimg.cc/g2MZvn9M/Gemini_Generated_Image_z90gnz90gnz90gnz.jpg",
      "https://i.postimg.cc/rwy405Hj/image_(1).jpg",
      "https://i.postimg.cc/K89MnRXs/Gemini_Generated_Image_ng572cng572cng57.jpg",
      "https://i.postimg.cc/htCd9fFy/Gemini_Generated_Image_pl53hdpl53hdpl53.jpg",
      "https://i.postimg.cc/wjWmh7K4/Gemini_Generated_Image_rw1o3vrw1o3vrw1o.jpg",
      "https://i.postimg.cc/g2MZvn9M/Gemini_Generated_Image_z90gnz90gnz90gnz.jpg",
      "https://i.postimg.cc/rwy405Hj/image_(1).jpg",
    ],
  ];

  useEffect(() => {
    const marquee1 = marquee1Ref.current;
    const marquee2 = marquee2Ref.current;
    if (!marquee1 || !marquee2) return;

    gsap.set([marquee1, marquee2], { xPercent: 0 });

    const baseAnim1 = gsap.to(marquee1, {
      xPercent: -50,
      duration: 30,
      ease: "none",
      repeat: -1,
    });

    const baseAnim2 = gsap.to(marquee2, {
      xPercent: -50,
      duration: 22,
      ease: "none",
      repeat: -1,
    });

    return () => {
      baseAnim1.kill();
      baseAnim2.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const ClientLogo = ({ src, alt }) => (
    <div className="flex items-center px-10 py-3 hover:scale-105 transition-transform duration-200">
      <div className="relative w-36 h-16 md:w-48 md:h-20 lg:w-56 lg:h-24 opacity-90 hover:opacity-100 transition-opacity duration-200 overflow-hidden">
        <Image
          src={src}
          alt={alt || "Client logo"}
          fill
          sizes="(max-width:768px) 150px, (max-width:1024px) 200px, 240px"
          style={{
            objectFit: "contain",
            transform: "scale(1.05)",
            transformOrigin: "left",
          }}
          draggable={false}
        />
      </div>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-black py-20 overflow-hidden"
    >
      <div className="text-center mb-16 md:mb-24 px-4">
        <h2
          className="text-3xl md:text-5xl lg:text-6xl font-thin text-white mb-6 tracking-wide font-bruno-ace-sc"
          style={{ fontFamily: "var(--font-bruno-ace-sc), sans-serif" }}
        >
          CLIENTS WE WORK WITH
        </h2>
        <p
          className="text-sm md:text-base text-gray-400 tracking-widest uppercase font-century-gothic"
          style={{
            fontFamily:
              "var(--font-century-gothic), Century Gothic, sans-serif",
          }}
        >
          We can&apos;t wait to show you what we can do for you and your brand
        </p>
      </div>

      {/* Only two marquee rows now */}
      <div className="relative h-72 md:h-80 flex flex-col justify-between">
        {/* Row 1 */}
        <div className="flex items-center h-32 md:h-36 overflow-hidden">
          <div
            ref={marquee1Ref}
            className="flex items-center gap-12 md:gap-20 whitespace-nowrap"
            style={{ willChange: "transform" }}
          >
            {[...imageRows[0], ...imageRows[0]].map((src, index) => (
              <ClientLogo key={`r1-${index}`} src={src} />
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex items-center h-32 md:h-36 overflow-hidden">
          <div
            ref={marquee2Ref}
            className="flex items-center gap-12 md:gap-20 whitespace-nowrap"
            style={{ willChange: "transform" }}
          >
            {[...imageRows[1], ...imageRows[1]].map((src, index) => (
              <ClientLogo key={`r2-${index}`} src={src} />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
    </section>
  );
};

export default ClientsMarquee;
