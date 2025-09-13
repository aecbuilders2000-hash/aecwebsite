'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

// Testimonial sample data
const testimonials = [
  {
    id: 1,
    name: 'Reaz P.',
    role: 'Owner',
    company: '',
    address: '',
    avatar: 'https://i.postimg.cc/k4Tq0pcw/K1-2.webp',
    quote: 'Quickly understood the requirement',
    fullText: 'Kenil has created several Grasshopper scripts for my projects. He is very skilled in Rhino and Grasshopper. He quickly understood the requirement, communicated very well and delivered the work on time and with great quality. He added features not requested, but very helpful to the project.'
  },
  {
    id: 2,
    name: 'Suzie W.',
    role: 'Director',
    company: 'High End Residential',
    address: 'JIA DESIGNS, VIC, AUSTRALIA',
    avatar: 'https://i.postimg.cc/ZKM0BC6j/K6-3.webp',
    quote: 'His ability to take direction is excellent',
    fullText: 'I have hired Kenil for multiple projects and he consistently delivers a high: standard of work in a timely fashion.His ability to take direction is excellent, and nothing is ever a problem.Kenil has helped us meet very tight deadlines by being available when we need him, which has been incredibly valuable.Kenil has provided a combination of services for our interior design studio, from architectural design, elevation and shop drawings, SketchUp modelling and 3D photorealistic rendering.I highly recommend him'
  },
  {
    id: 3,
    name: 'Borinquen G.',
    role: 'Artist',
    company: 'Public Art, PRATT INSTITUTE',
    address: 'NY, USA',
    avatar: 'https://i.postimg.cc/qRJpZT8z/K11-1.webp',
    quote: 'I endorse him wholeheartedly and highly recommend him!',
    fullText: 'I hired Kenil to work on detailed shop drawings for the fabrication of a public art project. he produced stunning drawings, communicated effectively, he was always punctual in delivering milestones, consistently efficient, and significantly resourceful. His extensive digital literacy and strong set of skills make him a real asset. He was always professional, a persistent problem solver with remarkable work ethic. I endorse him wholeheartedly and highly recommend him!'
  },
  {
    id: 4,
    name: 'Lily D.',
    role: 'CEO',
    company: 'Carson Curtis Design LLC',
    address: '',
    avatar: 'https://i.postimg.cc/VNBYR60x/K12-3.webp',
    quote: 'Very highly recommend working with him!',
    fullText: 'I have worked with Kenil on projects ranging from 3D modeling for a home remodel to business services and manufacturing and design and he has consistently delivered results above and beyond my expectations. He is great at problem solving and coming up with solutions for whatever challenges you may have. I very highly recommend working with him!'
  },
];

const TestimonialCard = ({ data, onOpen }) => {
  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`Open testimonial from ${data.name}, ${data.role} at ${data.company}`}
      onClick={() => onOpen(data)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen(data); } }}
      className="group flex-shrink-0 w-[320px] md:w-[360px] lg:w-[400px] cursor-pointer px-5 py-6 rounded-2xl bg-neutral-900/60 backdrop-blur border border-neutral-700/40 hover:border-neutral-500 transition-colors mr-10"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-neutral-700 group-hover:ring-neutral-400 transition">
          <Image src={data.avatar} alt={`${data.name} avatar`} fill sizes="56px" className="object-cover" />
        </div>
        <div className="min-w-0">
          <p className="text-white font-medium tracking-wide text-sm md:text-base">{data.name}</p>
          <p className="text-[11px] md:text-xs text-neutral-400 uppercase tracking-wider font-light">{data.role} • {data.company}</p>
        </div>
      </div>
      <p className="text-neutral-300 text-sm md:text-[15px] leading-relaxed line-clamp-4 group-hover:text-neutral-100 transition-colors">“{data.quote}”</p>
      <div className="mt-4 text-[11px] tracking-wider text-neutral-500 group-hover:text-neutral-300 transition-colors">Read full</div>
    </div>
  );
};

const Modal = ({ open, onClose, testimonial }) => {
  const overlayRef = useRef(null);
  const previouslyFocused = useRef(null);

  useEffect(() => {
    if (open) {
      previouslyFocused.current = document.activeElement;
      document.documentElement.style.overflow = 'hidden';
      const firstFocusable = overlayRef.current?.querySelector('button');
      firstFocusable?.focus();
    } else {
      document.documentElement.style.overflow = '';
      previouslyFocused.current && previouslyFocused.current.focus?.();
    }
  }, [open]);

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape' && open) onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, onClose]);

  if (!open || !testimonial) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[120] flex items-center justify-center px-4 py-10 bg-black/70 backdrop-blur-sm"
      aria-modal="true"
      role="dialog"
      aria-label={`Full testimonial from ${testimonial.name}`}
      onMouseDown={(e) => { if (e.target === overlayRef.current) onClose(); }}
    >
      <div className="relative w-full max-w-2xl bg-neutral-900 rounded-3xl border border-neutral-700/60 shadow-2xl max-h-full overflow-hidden flex flex-col">
        <div className="flex items-center gap-4 px-6 pt-6">
          <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-neutral-700">
            <Image src={testimonial.avatar} alt={testimonial.name} fill sizes="64px" className="object-cover" />
          </div>
          <div>
            <h3 className="text-white text-lg font-medium tracking-wide">{testimonial.name}</h3>
            <p className="text-neutral-400 text-xs uppercase tracking-wider">{testimonial.role}{" "}
              {testimonial.company && `• ${testimonial.company}`}
              {testimonial.address && `, ${testimonial.address}`}
            </p>
          </div>
          <div className="ml-auto">
            <button
              onClick={onClose}
              className="rounded-full w-10 h-10 grid place-items-center bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition"
            >
              <span className="sr-only">Close modal</span>
              ✕
            </button>
          </div>
        </div>
        <div className="px-6 py-6 overflow-y-auto custom-scrollbar">
          <p className="text-neutral-200 leading-relaxed text-[15px] whitespace-pre-line">{testimonial.fullText}</p>
        </div>
      </div>
    </div>
  );
};

const TestinomialSection = () => {
  const trackRef = useRef(null);
  const dupRef = useRef(null);
  const animRef = useRef(null);
  const [active, setActive] = useState(null);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const startAnimation = useCallback(() => {
    if (reducedMotion.current) return; // skip if user prefers reduced motion
    const track = trackRef.current;
    const dup = dupRef.current;
    if (!track || !dup) return;

    gsap.set([track, dup], { x: 0 });
    const totalWidth = track.scrollWidth; // width of original set

    animRef.current = gsap.to([track, dup], {
      x: () => `-=${totalWidth}`,
      duration: 50,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth)
      }
    });
  }, []);

  useEffect(() => {
    startAnimation();
    return () => { animRef.current && animRef.current.kill(); };
  }, [startAnimation]);

  const pause = () => animRef.current && animRef.current.pause();
  const play = () => animRef.current && animRef.current.play();

  return (
    <section className="relative bg-black py-24 md:py-32 overflow-hidden">
      <div className="text-center mb-14 px-4">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-thin text-white mb-6 tracking-wide font-bruno-ace-sc" style={{ fontFamily: 'var(--font-bruno-ace-sc), sans-serif' }}>WHAT OUR PARTNERS SAY</h2>
        <p className="text-sm md:text-base text-gray-400 tracking-widest uppercase font-century-gothic" style={{ fontFamily: 'var(--font-century-gothic), Century Gothic, sans-serif' }}>
          Insights from teams we build with
        </p>
      </div>

      <div
        className="relative select-none"
        onMouseEnter={pause}
        onMouseLeave={play}
        onFocus={pause}
        onBlur={play}
      >
        <div className="absolute inset-y-0 left-0 w-32 pointer-events-none bg-gradient-to-r from-black to-transparent" />
        <div className="absolute inset-y-0 right-0 w-32 pointer-events-none bg-gradient-to-l from-black to-transparent" />

        <div className="flex items-stretch" aria-label="Scrolling testimonials" role="list">
          <div ref={trackRef} className="flex items-stretch" style={{ willChange: 'transform' }}>
            {testimonials.map(t => (
              <div role="listitem" key={t.id} className="flex">
                <TestimonialCard data={t} onOpen={setActive} />
              </div>
            ))}
          </div>
          {/* duplicate for seamless loop */}
          <div ref={dupRef} className="flex items-stretch" aria-hidden="true" style={{ willChange: 'transform' }}>
            {testimonials.map(t => (
              <div key={`dup-${t.id}`} className="flex">
                <TestimonialCard data={t} onOpen={setActive} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal open={!!active} testimonial={active} onClose={() => setActive(null)} />
    </section>
  );
};

export default TestinomialSection;