"use client";
import { useRef } from 'react';
import SERVICES from '../../../constants/ServicesData';
import Image from 'next/image';
import Link from 'next/link';
import ArrowButton from '../../../ui/ArrowButton';
import SquareCard from './SquareCard.js';
import WhyCollective from '../../../components/WhyCollective.js';
import CollectiveAECFramework from '../../../components/CollectiveAECFramework.js';
import SubServicesHero from './SubServicesHero.js';
import gsap from 'gsap';
import { use } from 'react';

export default function SubservicePage({ params }) {
  const resolvedParams = use(params);
  const { main, sub } = resolvedParams;

  const waveTimeouts = useRef([]);
  const lastHoveredIndex = useRef(-1);

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

  const mainData = SERVICES[main];
  if (!mainData) return <div style={{ padding: '2rem' }}>Service not found</div>;
  const subData = mainData.subs?.[sub];
  if (!subData) return <div style={{ padding: '2rem' }}>Subservice not found</div>;

  const sectionDescription = subData?.sectionDescription || subData?.description || "Service description";
  const trustText = "Trusted by 300+ Leading Architectural and Engineering Companies";

  return (
    <main className='text-black min-h-screen pt-12 pb-8'>
      {/* <div className='w-full px-4 max-w-7xl mx-auto'>
        <section className='grid grid-cols-1 gap-8 lg:gap-12'>
          <header className='text-center lg:text-left'>
            <h1
              className='text-black font-bold mb-4'
              style={{
                fontFamily: 'var(--font-bruno-ace-sc), sans-serif',
                fontSize: 'clamp(1.5rem, 4.5vw, 2.6rem)',
                letterSpacing: '0.1em'
              }}
            >
              {subData.title}
            </h1>
            {subData.subtitle && (
              <p className='text-gray-600 text-lg sm:text-xl'>
                {subData.subtitle}
              </p>
            )}
          </header>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start'>
            <div className='w-full'>
              <div className='w-full max-w-2xl mx-auto lg:mx-0 aspect-video rounded-lg overflow-hidden bg-gray-50 shadow-sm'>
                <Image
                  src={subData.image}
                  alt={subData.title}
                  width={800}
                  height={450}
                  className='w-full h-full object-contain'
                  style={{ backgroundColor: 'rgba(0,0,0,0.02)' }}
                />
              </div>
            </div>

            <div className='space-y-6'>
              <p className='text-gray-800 text-base sm:text-lg leading-relaxed'>
                {subData.description}
              </p>

              {Array.isArray(subData.features) && subData.features.length > 0 && (
                <div>
                  <h3 className='text-lg font-semibold text-gray-900 mb-4'>Key Features:</h3>
                  <ul className='space-y-2 text-gray-700 list-disc ml-5'>
                    {subData.features.map((f) => (
                      <li key={f} className='text-base'>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      </div> */}

      <SubServicesHero subData={subData} mainData={mainData} />

      <section className="py-16 lg:py-24">
        <div className="mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Title */}
              <div>
                <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bruno font-bold text-gray-900 leading-tight mb-4">
                  {subData.title}
                </h2>
                <div className="w-24 h-1 bg-black"></div>
              </div>

              {/* Description */}
              <div
                className="text-gray-700 text-base lg:text-lg leading-relaxed cursor-pointer"
                onMouseMove={handleMouseMove}
              >
                {sectionDescription.split(" ").map((word, wordIndex) => (
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

              {/* Trust Statement */}
              <div className="pt-4">
                <div
                  className="text-gray-900 text-lg lg:text-xl font-medium cursor-pointer"
                  onMouseMove={handleMouseMove}
                >
                  {trustText.split(" ").map((word, wordIndex) => {
                    // Check if word contains "300+"
                    const isBold = word.includes("300+");
                    return (
                      <span
                        key={wordIndex}
                        style={{
                          display: "inline-block",
                          marginRight: "0.4em",
                          fontWeight: isBold ? "bold" : "medium"
                        }}
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
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
                <img
                  src={subData.image || "https://i.postimg.cc/sxQ296Dc/IMG-20251009-WA0001.jpg"}
                  alt={`${subData.title} Illustration`}
                  className="w-full h-auto object-contain rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>        </div>
        </div>
      </section>

      <WhyCollective />

      <CollectiveAECFramework />

      <SquareCard />

      <div className='flex justify-center mt-12'>
        <Link className='no-underline' href="/#contact-us-section" style={{ textDecoration: 'none' }}>
          <ArrowButton label="Contact us" />
        </Link>
      </div>
    </main>
  );
}
