'use client';
import React, { useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import gsap from 'gsap';

// Reusable wave link (same hover behavior as Hero)
const WaveNavLink = ({ href, text, homeAnchor = false, scrollToVH = null }) => {
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
    // If a specific vh scroll amount is provided, scroll to that absolute position
    if (typeof scrollToVH === 'number') {
      const top = window.innerHeight * (scrollToVH / 100);
      window.scrollTo({ top, behavior: 'smooth' });
      return;
    }
    if (homeAnchor) {
      router.push('/' + href);
    } else if (href.startsWith('#')) {
      const el = document.getElementById(href.slice(1));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      else router.push('/' + href);
    }
  };

  return (
    <a
      href={href}
      ref={linkRef}
      className="select-none"
      style={{
        fontFamily: 'var(--font-century-gothic), Century Gothic, sans-serif',
        fontWeight: 400,
        fontSize: 'clamp(0.85rem,1.6vw,1rem)',
        letterSpacing: '0.08em',
        color: '#222',
        cursor: 'pointer',
        transition: 'color 0.2s',
        opacity: 1,
        textDecoration: 'none',
        padding: '0.2em 0.6em',
        borderRadius: '0.5em',
        background: 'transparent',
        outline: 'none',
        border: 'none',
        boxShadow: 'none',
        position: 'relative',
        zIndex: 1,
        display: 'inline-block',
      }}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
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
    <header
      className="fixed top-0 left-0 w-full z-[110] flex items-center justify-between"
      style={{
        background: 'rgba(255,255,255,0.18)',
        boxShadow: '0 4px 32px rgba(0,0,0,0.08)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.25)',
        padding: '0.75rem 2.5vw'
      }}
    >
      {/* Brand */}
      <div
        style={{
          fontFamily: 'var(--font-bruno-ace-sc), sans-serif',
          fontSize: 'clamp(1.1rem, 2.2vw, 1.8rem)',
          letterSpacing: '0.3em',
          color: '#000',
          userSelect: 'none'
        }}
      >
        COLLECTIVE
      </div>

      {/* Navigation */}
      <nav
        className="flex items-center gap-8 md:gap-12"
        style={{ fontFamily: 'var(--font-century-gothic), Century Gothic, sans-serif' }}
      >
        <WaveNavLink href="/" text="HOME" />
  <WaveNavLink href="#projects-section" text="PROJECTS" homeAnchor />
  <WaveNavLink href="#about-us" text="ABOUT US" scrollToVH={200} />
        <WaveNavLink href="#services-section" text="SERVICES" homeAnchor />
        <WaveNavLink href="#clients" text="CLIENTS" homeAnchor />
        <WaveNavLink href="/careers" text="CAREERS" />
      </nav>
    </header>
  );
}
