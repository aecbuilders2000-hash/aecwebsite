'use client';
import React, { useRef, useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import gsap from 'gsap';
import MorphingButton from '../ui/MorphingButton';

// Wave link copied / aligned with HeroSection version for consistent hover animation & styling
function WaveNavLink({ href, text, onClick, style: userStyle = {} }) {
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
        fontSize: 'clamp(0.45rem, 0.9vw, 0.9rem)',
        color: '#000',
        textDecoration: 'none',
        letterSpacing: '0.1em',
        marginRight: '0.3vw',
        transition: 'color 0.2s',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(0.32rem, 0.7vw, 0.55rem) clamp(0.45rem, 0.9vw, 0.8rem)',
        paddingBottom: 'clamp(0.5rem, 1vw, 0.8rem)',
        borderRadius: '0.45rem',
        lineHeight: 1,
        cursor: 'pointer',
        ...userStyle,
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

function NavbarInner() {
  const pathname = usePathname();
  const router = useRouter();
  // --- Responsive / mobile state mirroring HeroSection ---
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => { setIsMobile(window.innerWidth <= 820); };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onPointerDown = (e) => {
      if (!menuRef.current || !toggleRef.current) return;
      if (!menuRef.current.contains(e.target) && !toggleRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    const onKeyDown = (e) => { if (e.key === 'Escape') setIsMenuOpen(false); };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const navItems = [
    { href: '#content-section-details', label: 'About Us', onClick: (e) => { e.preventDefault(); try { sessionStorage.setItem('scrollToId', 'content-section-details'); } catch (err) { } router.push('/'); setIsMenuOpen(false); } },
    { href: '#services-overview-section', label: 'Our Services' },
    { href: '#projects-section', label: 'Projects' },
    { href: '/news', label: 'News' },
    { href: '/careers', label: 'Careers' },
  ];

  return (
    <>
      <div
        className="fixed flex items-center justify-between z-[1001]"
        style={{
          top: 0,
          left: 0, transform: 'none', width: '100%', gap: '5vw',
          background: isMobile ? 'rgba(255,255,255,0.36)' : 'rgba(255,255,255,0.18)',
          boxShadow: isMobile ? '0 10px 58px rgba(0,0,0,0.10)' : '0 6px 44px rgba(0,0,0,0.10)',
          backdropFilter: isMobile ? 'blur(20px)' : 'blur(16px)', WebkitBackdropFilter: isMobile ? 'blur(20px)' : 'blur(16px)',
          borderBottom: isMobile ? '1px solid rgba(0,0,0,0.06)' : '1px solid rgba(255,255,255,0.12)',
          paddingLeft: '1.6vw', paddingRight: 0,
          paddingTop: isMobile ? '0.4rem' : '0.3rem', paddingBottom: isMobile ? '0.4rem' : '0.3rem',
          minHeight: isMobile ? '7vh' : '6vh',
          borderRadius: 0, position: 'fixed',
        }}
      >
        <div style={{ marginLeft: isMobile ? '0.5rem' : '1rem' }} className="flex items-center justify-center">
          <img
            src="/COLLECTIVE AEC LOGO landscape.png"
            alt="Collective AEC Logo"
            style={{ width: isMobile ? '22vw' : '8vw', maxWidth: isMobile ? '180px' : '220px', height: 'auto', zIndex: 1002, cursor: 'pointer', userSelect: 'none' }}
            onClick={() => { router.push('/'); if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '2.5vw' : '1vw', position: 'relative', flex: 1, justifyContent: 'flex-end' }}>
          {!isMobile && navItems.map((item) => (
            <WaveNavLink key={item.label} href={item.href} text={item.label} onClick={item.onClick} />
          ))}
          <MorphingButton
            key={isMobile ? 'mobile' : 'desktop'} text="Let's Collaborate"
            fontFamily="var(--font-century-gothic), Century Gothic, sans-serif"
            style={{ margin: 0, fontSize: isMobile ? '0.72rem' : '1.0rem', height: isMobile ? 'clamp(1.8rem, 4vh, 2.4rem)' : undefined, padding: isMobile ? '0.2rem 0.5rem' : '0.4rem 0.8rem', marginLeft: isMobile ? '0.08rem' : undefined }}
            onClick={() => {
              if (pathname === '/' || pathname === '') {
                const contactSection = document.getElementById('contact-us-section');
                if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
              } else {
                try { sessionStorage.setItem('scrollToId', 'contact-us-section'); } catch (err) { }
                router.push('/');
              }
            }}
          />
        </div>

        {isMobile && (
          <button
            ref={toggleRef}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((s) => !s)}
            style={{ position: 'absolute', left: '50%', top: '60%', transform: isMenuOpen ? 'translate(-50%, -50%) rotate(180deg)' : 'translate(-50%, -50%) rotate(0deg)', zIndex: 1205, background: 'transparent', border: 'none', cursor: 'pointer', lineHeight: 1, padding: '0.08rem 0.28rem', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 200ms cubic-bezier(.2,.9,.2,1)' }}
          >
            <svg width="26" height="18" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" style={{ display: 'block' }}>
              <polyline points="4,6 18,20 32,6" stroke="#000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <polyline points="4,0 18,14 32,0" stroke="#000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.95" />
            </svg>
          </button>
        )}
      </div>

      {isMobile && (
        <div aria-hidden={!isMenuOpen} style={{ position: 'fixed', left: 0, top: 0, width: '100%', height: '100%', zIndex: 1150, pointerEvents: isMenuOpen ? 'auto' : 'none' }}>
          <div
            ref={menuRef}
            style={{ position: 'absolute', left: 0, top: 0, width: '100%', transform: isMenuOpen ? 'translateY(0%)' : 'translateY(-100%)', transition: 'transform 360ms cubic-bezier(.2,.9,.2,1), opacity 220ms ease', opacity: isMenuOpen ? 1 : 0, background: 'rgba(255,255,255,0.98)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', paddingTop: '6vh' }}
          >
            <nav style={{ width: '100%', textAlign: 'center', fontFamily: 'var(--font-century-gothic), Century Gothic, sans-serif', fontSize: 'clamp(0.72rem, 2.8vw, 1rem)' }}>
              {navItems.map((nav) => (
                <div key={nav.label} style={{ padding: '1rem 0', borderBottom: '1px solid rgba(0,0,0,0.04)' }}>
                  <WaveNavLink
                    href={nav.href}
                    text={nav.label}
                    style={{ fontSize: 'clamp(0.8rem, 3vw, 1rem)', padding: '0.3rem 0' }}
                    onClick={(e) => {
                      if (nav.onClick) nav.onClick(e); else if (nav.href.startsWith('#')) { e.preventDefault(); router.push('/' + nav.href); }
                      setIsMenuOpen(false);
                    }}
                  />
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default function Navbar() {
  const pathname = usePathname(); // hook always called
  const isHome = pathname === '/' || pathname === '';
  if (isHome) return null; // safe: no other hooks skipped
  return <NavbarInner />;
}
