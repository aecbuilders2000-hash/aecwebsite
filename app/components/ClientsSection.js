'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  SiPorsche, 
  SiCocacola, 
  SiSony, 
  SiHyundai, 
  SiGoogle, 
  SiApple, 
  SiMeta, 
  SiNvidia 
} from 'react-icons/si';
import { 
  FaAward,
  FaCar,
  FaDesktop,
  FaMobile,
  FaPalette,
  FaRocket,
  FaCode,
  FaGlobe
} from 'react-icons/fa';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ScrollMarquee = () => {
  const sectionRef = useRef(null);
  const marquee1Ref = useRef(null);
  const marquee2Ref = useRef(null);
  const marquee3Ref = useRef(null);

  // Client logo data with icons
  const clientRows = [
    // Row 1 - Top row with automotive and luxury brands
    [
      { icon: SiPorsche, name: "PORSCHE", size: "text-5xl" },
      { icon: FaPalette, name: "Wallpaper*", size: "text-5xl" },
      { icon: SiCocacola, name: "Coca-Cola", size: "text-5xl" },
      { icon: FaCar, name: "MaxMara", size: "text-5xl" },
      { icon: FaDesktop, name: "Calvin Klein", size: "text-5xl" },
      { icon: SiPorsche, name: "PORSCHE", size: "text-5xl" },
      { icon: FaPalette, name: "Wallpaper*", size: "text-5xl" },
      { icon: SiCocacola, name: "Coca-Cola", size: "text-5xl" },
      { icon: FaCar, name: "MaxMara", size: "text-5xl" },
      { icon: FaDesktop, name: "Calvin Klein", size: "text-5xl" },
    ],
    // Row 2 - Middle row with tech giants (fastest moving)
    [
      { icon: SiSony, name: "SONY", size: "text-5xl" },
      { icon: SiHyundai, name: "HYUNDAI", size: "text-5xl" },
      { icon: SiGoogle, name: "Google", size: "text-5xl" },
      { icon: SiApple, name: "Apple", size: "text-5xl" },
      { icon: FaAward, name: "WEBBY AWARDS", size: "text-5xl" },
      { icon: SiSony, name: "SONY", size: "text-5xl" },
      { icon: SiHyundai, name: "HYUNDAI", size: "text-5xl" },
      { icon: SiGoogle, name: "Google", size: "text-5xl" },
      { icon: SiApple, name: "Apple", size: "text-5xl" },
      { icon: FaAward, name: "WEBBY AWARDS", size: "text-5xl" },
    ],
    // Row 3 - Bottom row with creative and tech
    [
      { icon: SiMeta, name: "META", size: "text-5xl" },
      { icon: SiCocacola, name: "Coca-Cola", size: "text-5xl" },
      { icon: FaGlobe, name: "awwwards.", size: "text-5xl" },
      { icon: SiNvidia, name: "NVIDIA", size: "text-5xl" },
      { icon: FaRocket, name: "AKQA", size: "text-5xl" },
      { icon: SiMeta, name: "META", size: "text-5xl" },
      { icon: SiCocacola, name: "Coca-Cola", size: "text-5xl" },
      { icon: FaGlobe, name: "awwwards.", size: "text-5xl" },
      { icon: SiNvidia, name: "NVIDIA", size: "text-5xl" },
      { icon: FaRocket, name: "AKQA", size: "text-5xl" },
    ]
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const marquee1 = marquee1Ref.current;
    const marquee2 = marquee2Ref.current;
    const marquee3 = marquee3Ref.current;

    if (!section || !marquee1 || !marquee2 || !marquee3) return;

    // Set initial positions
    gsap.set([marquee1, marquee2, marquee3], { xPercent: 0 });

    // Simple, smooth continuous animations without scroll interference
    const baseAnim1 = gsap.to(marquee1, {
      xPercent: -50,
      duration: 30,
      ease: 'none',
      repeat: -1
    });

    const baseAnim2 = gsap.to(marquee2, {
      xPercent: -50,
      duration: 20,
      ease: 'none',
      repeat: -1
    });

    const baseAnim3 = gsap.to(marquee3, {
      xPercent: -50,
      duration: 25,
      ease: 'none',
      repeat: -1
    });

    // Simple fade in animation for the section
    gsap.fromTo(section, 
      { 
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 90%',
          scrub: 2,
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Cleanup function
    return () => {
      baseAnim1.kill();
      baseAnim2.kill();
      baseAnim3.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const ClientLogo = ({ icon: Icon, name, size }) => (
    <div className="flex items-center gap-4 px-8 py-2 hover:scale-105 transition-transform duration-200">
      <Icon className={`${size} text-white opacity-90 hover:opacity-100 transition-opacity duration-200`} />
      <span className="text-white font-light tracking-wider whitespace-nowrap text-sm md:text-base">
        {name}
      </span>
    </div>
  );

  return (
    <>
      {/* Main Marquee Section */}
      <section 
        ref={sectionRef}
        className="relative bg-black py-20 md:py-32 overflow-hidden"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform rotate-12 -translate-x-full animate-pulse"></div>
        </div>

        {/* Gradient overlays for seamless effect */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-48 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 md:w-48 bg-gradient-to-l from-black to-transparent z-10"></div>

        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 px-4">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-thin text-white mb-6 tracking-wide">
            CLIENTS WE WORK WITH
          </h2>
          <p className="text-sm md:text-base text-gray-400 tracking-widest uppercase">
            We can't wait to show you what we can do for you and your brand
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative h-80 md:h-96 flex flex-col justify-between">
          {/* Row 1 - Top row (slow) */}
          <div className="flex items-center h-24 md:h-28 overflow-hidden">
            <div 
              ref={marquee1Ref}
              className="flex items-center gap-8 md:gap-16 whitespace-nowrap"
              style={{ willChange: 'transform' }}
            >
              {/* duplicate the items to create seamless loop */}
              {[...clientRows[0], ...clientRows[0]].map((client, index) => (
                <ClientLogo 
                  key={`r1-${index}`} 
                  icon={client.icon}
                  // name={client.name}
                  size={client.size}
                />
              ))}
            </div>
          </div>

          {/* Row 2 - Middle row (fastest) */}
          <div className="flex items-center h-28 md:h-32 overflow-hidden">
            <div 
              ref={marquee2Ref}
              className="flex items-center gap-8 md:gap-16 whitespace-nowrap"
              style={{ willChange: 'transform' }}
            >
              {[...clientRows[1], ...clientRows[1]].map((client, index) => (
                <ClientLogo 
                  key={`r2-${index}`} 
                  icon={client.icon}
                  // name={client.name}
                  size={client.size}
                />
              ))}
            </div>
          </div>

          {/* Row 3 - Bottom row (medium) */}
          <div className="flex items-center h-24 md:h-28 overflow-hidden">
            <div 
              ref={marquee3Ref}
              className="flex items-center gap-8 md:gap-16 whitespace-nowrap"
              style={{ willChange: 'transform' }}
            >
              {[...clientRows[2], ...clientRows[2]].map((client, index) => (
                <ClientLogo 
                  key={`r3-${index}`} 
                  icon={client.icon}
                  // name={client.name}
                  size={client.size}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
      </section>
    </>
  );
};

export default ScrollMarquee;