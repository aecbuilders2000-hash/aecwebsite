'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

// Testimonial sample data
const testimonials = [
  {
    id: 1,
    name: 'Aarav Mehta',
    role: 'Head of Design',
    company: 'StudioForma',
    avatar: 'https://i.postimg.cc/k4Tq0pcw/K1-2.webp',
    quote: 'Their collaborative approach transformed our design delivery speed.',
    fullText: 'Collective AEC re-engineered our entire BIM workflow. Turnaround time on complex coordination sets dropped by 42%. Their team embedded directly with ours, proactively flagging design conflicts long before clash detection. The partnership felt genuinely integrated—transparent, accountable, and relentlessly quality-focused.'
  },
  {
    id: 2,
    name: 'Sahana Iyer',
    role: 'Project Director',
    company: 'UrbanMesh',
    avatar: 'https://i.postimg.cc/ZKM0BC6j/K6-3.webp',
    quote: 'Exceptionally precise modeling and documentation standards.',
    fullText: 'The precision of their structural modeling saved us from cascading RFIs downstream. Every deliverable was audit-ready. Their documentation hierarchy and naming discipline alone are worth the engagement. We re-used their standards on two other projects.'
  },
  {
    id: 3,
    name: 'Liam Carter',
    role: 'Development Manager',
    company: 'CrestWorks',
    avatar: 'https://i.postimg.cc/qRJpZT8z/K11-1.webp',
    quote: 'Our fastest entitlement package submission to date.',
    fullText: 'From schematic massing to entitlement-ready BIM exports, the pipeline was seamless. Their rapid iteration cycles let us test façade and core options in parallel. That parallelization shaved weeks off our municipal submission schedule.'
  },
  {
    id: 4,
    name: 'Elena Rodriguez',
    role: 'BIM Coordinator',
    company: 'AxisGrid',
    avatar: 'https://i.postimg.cc/VNBYR60x/K12-3.webp',
    quote: 'Flawless cross-discipline coordination under tight deadlines.',
    fullText: 'MEP, structural, and architectural packages aligned cleanly with almost zero clash fallout in Navisworks. Their proactive issue tagging workflow fed straight into our internal tracker. It felt like having an extension of our core team rather than an external vendor.'
  },
  {
    id: 5,
    name: 'Noah Patel',
    role: 'Operations Lead',
    company: 'ConstructiveLayer',
    avatar: 'https://i.postimg.cc/VktsJ4fL/K13-3.webp',
    quote: 'They improved our internal QA benchmarks in under a month.',
    fullText: 'We brought them in for overflow, but they elevated our process maturity: custom Revit templates, view filters, parametric families, and a QC checklist pipeline that now forms our standard operating baseline.'
  },
  {
    id: 6,
    name: 'Maya Singh',
    role: 'Technical Architect',
    company: 'FormAxis',
    avatar: 'https://i.postimg.cc/Zqhbp3nP/K14-6.webp',
    quote: 'Consistent, dependable, and deeply detail oriented.',
    fullText: 'Even under compressed milestone phases they held drawing fidelity and parametric integrity. Their approach to level-of-development staging minimized over-modeling while preserving downstream flexibility.'
  },
  {
    id: 7,
    name: 'Daniel Wu',
    role: 'Innovation Lead',
    company: 'ParametricLab',
    avatar: 'https://i.postimg.cc/zvPDgcH3/K17-1.webp',
    quote: 'Real-time iteration changed our feasibility studies.',
    fullText: 'They wired up a live parametric pipeline for early massing + energy exposure. Our feasibility pass cycles went from days to hours. Huge multiplier on strategic optioning.'
  }
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
            <p className="text-neutral-400 text-xs uppercase tracking-wider">{testimonial.role} • {testimonial.company}</p>
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