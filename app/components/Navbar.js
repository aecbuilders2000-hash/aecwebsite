'use client';
import React, { useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import gsap from 'gsap';

// Reusable wave link (same hover behavior as Hero)
const WaveNavLink = ({ href, text, homeAnchor = false }) => {
  const linkRef = useRef(null);
  const router = useRouter();
  const letters = text.split('');

  const handleMouseEnter = () => {
    if (!linkRef.current) return;
    const spans = linkRef.current.querySelectorAll('.wave-letter');
    spans.forEach((span, i) => {
      gsap.to(span, { y: -10, scale: 1.2, rotation: (Math.random() - 0.5) * 8, duration: 0.4, ease: 'back.out(2.5)', delay: i * 0.04 });
      gsap.to(span, { y: 0, scale: 1, rotation: 0, duration: 0.8, delay: 0.1 + i * 0.04, ease: 'elastic.out(1,0.4)' });
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (homeAnchor) {
      // Navigate to home with hash so sections scroll
      router.push('/' + href);
    } else if (href.startsWith('#')) {
      const el = document.getElementById(href.slice(1));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      else router.push('/' + href); // fallback
    } else {
      router.push(href);
    }
  };

  return (
    <a
      href={href}
      ref={linkRef}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      className="select-none"
      style={{
        fontFamily: 'var(--font-century-gothic), Century Gothic, sans-serif',
        fontWeight: 600,
        fontSize: 'clamp(0.85rem,1.6vw,1rem)',
        color: '#000',
        letterSpacing: '0.12em',
        textDecoration: 'none',
        display: 'inline-block',
        cursor: 'pointer',
      }}
    >
      {letters.map((c, i) => (
        <span key={i} className="wave-letter" style={{ display: 'inline-block', pointerEvents: 'none', willChange: 'transform' }}>
          {c === ' ' ? '\u00A0' : c}
        </span>
      ))}
    </a>
  );
};

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/' || pathname === '';
  if (isHome) return null; // Hide on homepage

  return (
    <div className="fixed inset-x-0 top-0 z-[110] pointer-events-none">
      {/* Brand (matches final compact COLLECTIVE state) */}
      <div
        className="pointer-events-auto"
        style={{
          position: 'fixed',
            top: '5vh',
            left: '2.5vw',
            fontFamily: 'var(--font-bruno-ace-sc), sans-serif',
            fontSize: 'clamp(1.2rem, 2.5vw, 2rem)',
            letterSpacing: '0.3em',
            mixBlendMode: 'difference',
            color: '#000',
            zIndex: 111,
            userSelect: 'none'
        }}
      >
        COLLECTIVE
      </div>

      {/* Nav links bar */}
      <nav
        className="pointer-events-auto flex items-center justify-end gap-8 md:gap-12 pr-[2.5vw]"
        style={{
          position: 'fixed',
          top: '5vh',
          right: '0',
          fontFamily: 'var(--font-century-gothic), Century Gothic, sans-serif'
        }}
      >
        <WaveNavLink href="/" text="HOME" />
        <WaveNavLink href="#projects-section" text="PROJECTS" homeAnchor />
        <WaveNavLink href="#services-section" text="SERVICES" homeAnchor />
        <WaveNavLink href="#clients" text="CLIENTS" homeAnchor />
        <WaveNavLink href="/careers" text="CAREERS" />
      </nav>
    </div>
  );
}
