'use client';
import React, { useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import gsap from 'gsap';
import MorphingButton from '../ui/MorphingButton';

// Wave link copied / aligned with HeroSection version for consistent hover animation & styling
function WaveNavLink({ href, text, onClick }) {
  const letters = text.split('');
  const linkRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();

  const handleMouseEnter = () => {
    if (!linkRef.current) return;
    const letterSpans = linkRef.current.querySelectorAll('.wave-letter');
    letterSpans.forEach((span, i) => {
      gsap.to(span, {
        y: -10,
        scale: 1.0,
        rotation: (Math.random() - 0.5) * 8,
        duration: 0.4,
        ease: 'back.out(2.5)',
        delay: i * 0.04,
      });
      gsap.to(span, {
        y: 0,
        scale: 1,
        rotation: 0,
        duration: 0.8,
        delay: 0.1 + i * 0.04,
        ease: 'elastic.out(1, 0.4)',
      });
    });
  };

  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick(e);
      return;
    }
    if (href.startsWith('#')) {
      e.preventDefault();
      // If we're already on home, smooth scroll; else navigate to home with hash
      if (pathname === '/' || pathname === '') {
        const targetId = href.replace('#', '');
        const target = document.getElementById(targetId);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      } else {
        router.push('/' + href);
      }
      return;
    }
    e.preventDefault();
    try {
      router.push(href);
    } catch {
      window.location.href = href;
    }
  };

  return (
    <a
      href={href}
      ref={linkRef}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      style={{
        fontFamily: 'var(--font-century-gothic), Century Gothic, sans-serif',
        fontWeight: 600,
        fontSize: 'clamp(0.5rem, 1vw, 1rem)',
        color: '#000',
        textDecoration: 'none',
        letterSpacing: '0.1em',
        marginRight: '0.5vw',
        transition: 'color 0.2s',
        display: 'inline-block',
        cursor: 'pointer',
      }}
    >
      {letters.map((char, i) => (
        <span
          key={i}
          className="wave-letter"
          style={{
            display: 'inline-block',
            willChange: 'transform',
            pointerEvents: 'none',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </a>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === '/' || pathname === '';
  if (isHome) return null; // Hide on homepage (HeroSection provides nav/branding there)

  const navItems = [
    {
      href: '#content-section-details',
      label: 'About Us',
      onClick: (e) => {
        e.preventDefault();
        // From non-home page, go to home then scroll logic handled by WaveNavLink
        router.push('/#content-section-details');
      },
    },
    { href: '#services-overview-section', label: 'Our Services' },
    { href: '#projects-section', label: 'Projects' },
    { href: '/news', label: 'News' },
    { href: '/careers', label: 'Careers' },
  ];

  return (
    <>
      {/* Fixed Logo (mirrors HeroSection final shrunken position) */}
      <img
        src="/COLLECTIVE AEC LOGO landscape.png"
        alt="Collective AEC Logo"
        style={{
          position: 'fixed',
          top: '1.5vh',
          left: '2.5vw',
            width: '8.5vw',
          maxWidth: '160px',
          height: 'auto',
          zIndex: 1002,
          cursor: 'pointer',
          userSelect: 'none',
        }}
        onClick={() => {
          router.push('/');
          if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
      />

      {/* Floating glass pill navigation (exact style from HeroSection) */}
      <div
        className="fixed w-full flex items-center justify-between"
        style={{
          top: '1.2vh',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'calc(100% - 2.5vw)',
          zIndex: 1001,
          display: 'flex',
          alignItems: 'center',
          gap: '5vw',
          background: 'rgba(255,255,255,0.18)',
          boxShadow: '0 6px 44px rgba(0,0,0,0.10)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255,255,255,0.12)',
          paddingLeft: '1.6vw',
          paddingRight: 0,
          borderRadius: '9999px',
        }}
      >
        <div
          className="font-bruno-ace-sc font-normal leading-tight select-none"
          style={{
            fontFamily: 'var(--font-bruno-ace-sc), sans-serif',
            fontSize: 'clamp(0.6rem, 1.1vw, 0.9rem)',
            color: '#000',
            letterSpacing: '0.3em',
            marginRight: '2vw',
          }}
        >
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5vw' }}>
          {navItems.map((item) => (
            <WaveNavLink
              key={item.label}
              href={item.href}
              text={item.label}
              onClick={item.onClick}
            />
          ))}
          <MorphingButton
            text="Let's Collaborate"
            fontFamily="var(--font-century-gothic), Century Gothic, sans-serif"
            style={{ margin: 0 }}
            onClick={() => {
              if (pathname === '/' || pathname === '') {
                const contactSection = document.getElementById('contact-us-section');
                if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
              } else {
                router.push('/#contact-us-section');
              }
            }}
          />
        </div>
      </div>
    </>
  );
}
