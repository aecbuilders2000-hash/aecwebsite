import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined' && !gsap.plugins.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
}

export default function NewsCard({ item, index = 0 }) {
    const cardRef = useRef(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        if (!cardRef.current) return;

        const direction = index % 2 === 0 ? -1 : 1; // even => from left (-1), odd => from right (1)

        const ctx = gsap.context(() => {
            // start further off-screen for a more visible slide
            gsap.set(cardRef.current, { autoAlpha: 0, x: 80 * direction });

            const st = ScrollTrigger.create({
                trigger: cardRef.current,
                start: 'top 90%', // reveal a bit later so the slide is visible
                onEnter: () => {
                    gsap.to(cardRef.current, { autoAlpha: 1, x: 0, duration: 1.05, delay: 0.12, ease: 'power3.out' });
                },
                // make it animate again if the user scrolls back up and then down
                onEnterBack: () => {
                    gsap.to(cardRef.current, { autoAlpha: 1, x: 0, duration: 0.95, delay: 0.08, ease: 'power3.out' });
                },
                onLeaveBack: () => {
                    // reset slightly faster when scrolling up
                    gsap.to(cardRef.current, { autoAlpha: 0, x: 80 * direction, duration: 0.6, ease: 'power2.in' });
                },
                once: false
            });

            return () => {
                if (st) st.kill();
            };
        }, cardRef);

        return () => ctx.revert();
    }, [index]);

    return (
        <article
            ref={cardRef}
            className="group relative flex flex-col rounded-3xl overflow-hidden shadow-[0_4px_24px_-6px_rgba(0,0,0,0.08)] bg-gray-100 backdrop-blur-md border border-black/5 p-5 sm:p-6 lg:p-7 hover:shadow-[0_6px_42px_-4px_rgba(0,0,0,0.14)] transition-shadow duration-400"
        >
            <div className="flex items-center justify-between mb-4">
                <span
                    className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-neutral-500 font-medium"
                    style={{ fontFamily: 'Bruno Ace SC, sans-serif' }}
                >
                    {item.date}
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-black via-neutral-700 to-neutral-400 shadow-inner" />
            </div>

            <h3
                className="text-[clamp(0.95rem,0.55vw+0.85rem,1.15rem)] font-semibold leading-snug mb-3 group-hover:translate-x-[2px] text-black transition-transform"
                style={{ fontFamily: 'Century Gothic, sans-serif' }}
            >
                {item.headline}
            </h3>

            {/* Image Section - Left Aligned */}
            {item.image && (
                <div className="mb-5 rounded-2xl overflow-hidden shadow-md">
                    <img
                        src={item.image}
                        alt={item.headline}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
            )}

            <div className="news-rich text-[clamp(0.78rem,0.5vw+0.65rem,0.92rem)] text-neutral-700 leading-relaxed flex-1" style={{ fontFamily: 'Century Gothic, sans-serif' }}>
                {item.paragraphs && item.paragraphs.map((p, i) => (
                    <p key={i} className="mb-3 last:mb-0">{p}</p>
                ))}
                {item.bullets && (
                    <ul className="list-disc pl-5 mb-3 last:mb-0 space-y-2">
                        {item.bullets.map((b, i) => (
                            <li key={i}>{b}</li>
                        ))}
                    </ul>
                )}
                {item.bottom && item.bottom.map((p, i) => (
                    <p key={`bottom-${i}`} className="mb-3 last:mb-0 font-medium">{p}</p>
                ))}
                {item.bullets2 && (
                    <ul className="list-disc pl-5 mb-3 last:mb-0 space-y-2">
                        {item.bullets2.map((b, i) => (
                            <li key={`bullets2-${i}`}>{b}</li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="mt-5 flex flex-wrap gap-2.5 max-sm:gap-2">
                {item.hashtags && item.hashtags.map((t, i) => (
                    <span
                        key={i}
                        className="px-2 py-1 rounded-full text-[10px] sm:text-[11px] font-medium tracking-wide bg-black text-white/95 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.4)] hover:bg-neutral-800 transition-colors break-words whitespace-nowrap"
                        style={{ fontFamily: 'Century Gothic, sans-serif' }}
                    >
                        {t}
                    </span>
                ))}
            </div>
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.08),transparent_70%)]" />

            <style jsx>{`
                .news-rich p { margin: 0 0 0.75rem; }
                .news-rich p:last-child { margin-bottom: 0; }
                .news-rich ul { margin: 0 0 0.85rem; }
            `}</style>
        </article>
    );
}
