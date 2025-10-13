"use client";
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LiquidShader from '../ui/LiquidShader';

gsap.registerPlugin(ScrollTrigger);

const frameworkSteps = [
  {
    num: "01.",
    title: "Proven Digital Intelligence",
    text: "Our team brings a wealth of experience across diverse project typologies commercial, residential, and institutional. We understand the nuances of BIM modelling across architectural, structural, and MEP disciplines, ensuring every model supports real-world constructability and coordination."
  },
  {
    num: "02.",
    title: "Future-Ready Tech Stack",
    text: "We leverage the latest tools such as Autodesk Revit, Navisworks, and advanced parametric design workflows to create data-rich, intelligent 3D environments. This approach not only enhances design visualization but also minimizes errors, reduces rework, and enables smarter decision-making at every stage."
  },
  {
    num: "03.",
    title: "Customize BIM Frameworks",
    text: "Every project demands a unique approach. At Collective AEC, we craft tailored BIM Revit and Revit drafting workflows that adapt to your project's scale, objectives, and technical requirements. Our customized frameworks ensure seamless collaboration and consistent project delivery."
  },
  {
    num: "04.",
    title: "Partnership Through Collaboration",
    text: "We believe collaboration fuels innovation. Our client partnerships are built on open communication, transparency, and mutual frust. From kickoff to completion, we integrate your feedback and insights, ensuring outcomes that align perfectly with your design and business goals."
  }
];

const WhyCollectiveIsRightPartner = ({title}) => {
  // console.log(title);
  const waveTimeouts = useRef([]);
  const lastHoveredIndex = useRef(-1);
  const containerRef = useRef(null);

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

  allLetters.forEach((letter) => {
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

  // Slide-in animations: left columns from left, right columns from right
  useEffect(() => {
    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray('.wcrp-row');
      rows.forEach((row) => {
        const col = row.querySelector('.wcrp-col');
        if (!col) return;
        const dir = col.getAttribute('data-dir') || 'left';
        gsap.set(col, { opacity: 0, x: dir === 'left' ? -60 : 60 });

        gsap.to(col, {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: row,
            start: 'top 80%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse',
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-8 lg:py-12 bg-gray-50 relative overflow-hidden">
      {/* Ripple shader background (pointer-events-none so it doesn't block interactions) */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <LiquidShader />
      </div>
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 border border-gray-400 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-gray-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-gray-400 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 border border-gray-400 rounded-full"></div>
      </div>

      <div className="mx-auto px-6 lg:px-12 relative z-10">
        {/* Title */}
        <div className="mb-4 text-center px-6 lg:mb-6">
          <h2 className='text-3xl' style={{ fontFamily: 'var(--font-bruno-ace-sc), sans-serif' }}>
            Why Collective AEC is the Right Partner for Your {title}
          </h2>
        </div>

        {/* Alternating steps: Understand, Analyse, Optimize, Automate */}
        <section className="py-12 lg:py-20">
          <div className="mx-auto px-6 lg:px-12 max-w-7xl">
            <div className="space-y-12">
              {
                frameworkSteps.map((step, i) => (
                  <div key={i} className="flex flex-col md:flex-row items-center wcrp-row">
                    {/* text column */}
                    <div
                      className={`${i % 2 === 0 ? 'md:order-1 md:pr-8 text-left' : 'md:order-2 md:pl-8 text-right'} md:w-1/2 w-full wcrp-col will-change-transform`}
                      data-dir={i % 2 === 0 ? 'left' : 'right'}
                    >
                      <div className="max-w-xl mx-auto md:mx-0" onMouseMove={handleMouseMove}>
                        <span className="text-sm tracking-widest text-gray-500">{step.num}</span>
                        <h3 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-bruno-ace-sc), sans-serif' }}>{step.title}</h3>
                        <div className="mt-4 text-gray-700 leading-relaxed">
                          {step.text.split(' ').map((word, wordIndex) => (
                            <span key={wordIndex} style={{ display: 'inline-block', marginRight: '0.4em' }}>
                              {word.split('').map((letter, letterIndex) => (
                                <span
                                  key={`${wordIndex}-${letterIndex}`}
                                  className="bounce-letter"
                                  style={{ display: 'inline-block', transformOrigin: 'center bottom' }}
                                >
                                  {letter}
                                </span>
                              ))}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* spacer / visual column - empty on purpose to push text left/right */}
                    <div className={`${i % 2 === 0 ? 'md:order-2' : 'md:order-1'} md:w-1/2 w-full`}>
                      {/* optional space for visuals or to keep alignment */}
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default WhyCollectiveIsRightPartner