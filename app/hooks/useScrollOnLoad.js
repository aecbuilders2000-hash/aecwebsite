"use client";
import { useEffect } from 'react';

export default function useScrollOnLoad() {
  useEffect(() => {
    // Prefer explicit sessionStorage signal, but fall back to legacy key or URL hash.
    let idFromStorage = null;
    try {
      const id = sessionStorage.getItem('scrollToId');
      if (id) idFromStorage = id;
      // legacy key used in some places
      if (!idFromStorage) {
        const legacy = sessionStorage.getItem('scrollToContact');
        if (legacy) idFromStorage = 'contact-us-section';
      }
    } catch (err) {
      // ignore
    }

    // If no sessionStorage key, check URL hash (e.g., navigation used '/#contact-us-section')
    if (!idFromStorage && typeof window !== 'undefined' && window.location && window.location.hash) {
      const h = window.location.hash.replace(/^#/, '');
      if (h) idFromStorage = h;
    }

    if (!idFromStorage) return;

    let attempts = 0;
    const maxAttempts = 40; // 40 * 150ms = 6s max wait

    const pollAndScroll = async () => {
      attempts += 1;
      const el = document.getElementById(idFromStorage);

      // Dynamic import of GSAP + plugin to avoid server bundling issues
      let gsapLib = null;
      let ScrollToPlugin = null;
      let ScrollTrigger = null;
      try {
        const mod = await import('gsap');
        gsapLib = mod.default || mod.gsap || mod;
      } catch (e) {
        gsapLib = null;
      }

      try {
        const p = await import('gsap/ScrollToPlugin');
        ScrollToPlugin = p.ScrollToPlugin || p.default || p;
      } catch (e) {
        ScrollToPlugin = null;
      }

      try {
        const tr = await import('gsap/ScrollTrigger');
        ScrollTrigger = tr.ScrollTrigger || tr.default || tr;
      } catch (e) {
        ScrollTrigger = null;
      }

      const scrollNow = async () => {
        const waitRaf = () => new Promise((res) => requestAnimationFrame(() => res()));
        try {
          if (gsapLib && ScrollToPlugin) {
            try { gsapLib.registerPlugin(ScrollToPlugin); } catch (e) { }

            // If ScrollTrigger is available, refresh to ensure layout is final
            try {
              const globalST = (ScrollTrigger && ScrollTrigger.refresh) ? ScrollTrigger : (window && window.ScrollTrigger ? window.ScrollTrigger : null);
              if (globalST && typeof globalST.refresh === 'function') {
                globalST.refresh();
              }
            } catch (e) { }

            // Wait a couple of frames so any layout changes caused by refresh/pinning settle
            await waitRaf();
            await waitRaf();

            // Helper: compute header height / fixed top offset dynamically
            const computeHeaderOffset = () => {
              try {
                // Prefer semantic elements
                const headerEl = document.querySelector('header, nav, [data-navbar], [role="banner"], .fixed-navbar');
                if (headerEl && headerEl.offsetHeight) return headerEl.offsetHeight;

                // Fallback: find first visible fixed/sticky element at top
                const candidates = Array.from(document.body.querySelectorAll('*')).filter((node) => {
                  const cs = window.getComputedStyle(node);
                  if (!cs) return false;
                  const pos = cs.position;
                  const top = parseFloat(cs.top || '0');
                  const vis = cs.visibility !== 'hidden' && cs.display !== 'none' && node.offsetHeight > 8;
                  return (pos === 'fixed' || pos === 'sticky') && Math.abs(top) < 2 && vis;
                });
                if (candidates.length) return candidates[0].offsetHeight;

                // Last resort: use a percentage of viewport as approximate header (8% default)
                return Math.round(window.innerHeight * 0.08);
              } catch (e) {
                return 86;
              }
            };

            const isMobileDevice = typeof window !== 'undefined' && window.innerWidth <= 820;
            const headerOffset = computeHeaderOffset();
            // Mobile tweak: add a small extra gap so sections are not obscured by sticky headers
            const extraAdjustment = Math.round(window.innerHeight * (isMobileDevice ? 0.04 : 0.02));
            // const finalOffset = headerOffset + extraAdjustment;
            const finalOffset = 0;

            // perform numeric scroll and verify final position to avoid partial visibility on mobile
            const performScrollToTop = (topVal) => new Promise((resolve) => {
              gsapLib.to(window, {
                duration: 0.85,
                scrollTo: { y: topVal },
                ease: 'power2.inOut',
                onComplete: async () => {
                  // Small delay + RAF to allow any late layout/pin changes
                  await new Promise((r) => setTimeout(r, 140));
                  await waitRaf();
                  // verify and nudge if still off
                  const diff = Math.abs(window.pageYOffset - topVal);
                  if (diff > Math.max(6, Math.round(window.innerHeight * 0.01))) {
                    try {
                      gsapLib.to(window, { duration: 0.6, scrollTo: { y: topVal }, ease: 'power2.out' });
                    } catch (e) { }
                  }
                  resolve();
                }
              });
            });

            if (idFromStorage === 'projects-section' && el) {
              const top = el.getBoundingClientRect().top + window.pageYOffset - finalOffset;
              await performScrollToTop(top);
            } else if (el) {
              const top = el.getBoundingClientRect().top + window.pageYOffset - finalOffset;
              await performScrollToTop(top);
            } else {
              const selector = `#${idFromStorage}`;
              try {
                gsapLib.to(window, { duration: 0.85, scrollTo: { y: selector, offsetY: finalOffset }, ease: 'power2.inOut' });
                await new Promise((r) => setTimeout(r, 260));
                const el2 = document.getElementById(idFromStorage);
                if (el2) {
                  const top2 = el2.getBoundingClientRect().top + window.pageYOffset - finalOffset;
                  await performScrollToTop(top2);
                }
              } catch (e) {
                // fallback handled below
              }
            }
          } else if (el) {
            // Fallback: native scrollIntoView
            el.scrollIntoView({ behavior: 'smooth' });
          }
        } catch (err) {
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        } finally {
          try { sessionStorage.removeItem('scrollToId'); } catch (e) { }
          try { sessionStorage.removeItem('scrollToContact'); } catch (e) { }
          // Remove hash from URL to keep the address clean (if present)
          try {
            if (typeof window !== 'undefined' && window.location && window.location.hash) {
              const clean = window.location.pathname + (window.location.search || '');
              history.replaceState(null, '', clean);
            }
          } catch (e) { }
        }
      };

      // If we have an element and either no ScrollTrigger exists or GSAP is ready, scroll
      const scrollTriggerAvailable = (ScrollTrigger || (window && window.ScrollTrigger));
      if (el && (!scrollTriggerAvailable || (gsapLib && ScrollToPlugin))) {
        await scrollNow();
        return;
      }

      // If element not found yet or ScrollTrigger still initializing, retry until maxAttempts
      if (attempts < maxAttempts) {
        setTimeout(pollAndScroll, 150);
      } else {
        // Give up politely and remove the key
        try { sessionStorage.removeItem('scrollToId'); } catch (e) { }
        try { sessionStorage.removeItem('scrollToContact'); } catch (e) { }
      }
    };

    // Start polling (do it on next tick so other mounts can initialize)
    setTimeout(pollAndScroll, 80);
  }, []);
}
