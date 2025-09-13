'use client';

import React, { useEffect, useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// Enhanced news data with more variety
const newsItems = [
    {
        id: 1,
        headline: `Isn't this the time to upgrade?`,
        paragraphs: [
            'Traditional CAD vs. Optimized BIM: Who Wins on Speed & Scale?'
        ],
        bullets: [
            "As projects grow in size and complexity, the tools we choose can make or break delivery timelines. CAD has been the industry standard for decades - but can it really keep pace with today's demands?",
            "Our latest article breaks down why it's not just CAD vs. BIM - it's CAD vs. optimized BIM and how the right workflows unlock faster iterations, smoother collaboration and true scalability.",
            "Read the full breakdown and see which approach gives firms the edge."
        ],
        hashtags: ['#Architecture', '#BIM', '#CAD', '#AEC', '#ConstructionInnovation', '#DesignEfficiency', '#Revisit', '#ParametricDesign'],
        date: 'Sept 2025',
    },
    {
        id: 2,
        headline: `Sustainable Design Breakthrough`,
        paragraphs: [
            'Revolutionary Carbon-Neutral Building Materials Hit the Market'
        ],
        bullets: [
            "A new generation of bio-based construction materials is transforming how we think about sustainable architecture. These innovative solutions offer 80% lower carbon footprint compared to traditional materials.",
            "From mycelium-based insulation to recycled plastic structural components, these materials don't compromise on performance while dramatically reducing environmental impact.",
            "Early adopters report cost savings of up to 25% over traditional materials when factoring in long-term energy efficiency gains."
        ],
        hashtags: ['#Sustainability', '#GreenBuilding', '#Innovation', '#CarbonNeutral', '#EcoFriendly', '#FutureOfConstruction'],
        date: 'Aug 2025',
    },
    {
        id: 3,
        headline: `AI-Powered Design Optimization`,
        paragraphs: [
            'Machine Learning Transforms Architectural Workflows in Real-Time'
        ],
        bullets: [
            "Artificial intelligence is no longer just a buzzword in architecture - it's becoming an essential tool for optimizing building performance and design efficiency.",
            "New AI algorithms can analyze thousands of design variations in minutes, optimizing for energy efficiency, cost, and structural integrity simultaneously.",
            "Case studies show 40% reduction in design iteration time and 30% improvement in building performance metrics when AI tools are integrated into the design process."
        ],
        hashtags: ['#AI', '#MachineLearning', '#DesignOptimization', '#SmartBuildings', '#TechInnovation', '#ArchTech'],
        date: 'Aug 2025',
    },
    {
        id: 4,
        headline: `Virtual Reality Collaboration`,
        paragraphs: [
            'Immersive Design Reviews Change Client Engagement Forever'
        ],
        bullets: [
            "Virtual and augmented reality technologies are revolutionizing how architects collaborate with clients and stakeholders throughout the design process.",
            "Real-time immersive walkthroughs allow clients to experience spaces before construction begins, reducing change orders by up to 60%.",
            "Multi-user VR environments enable global teams to collaborate as if they're in the same room, breaking down geographical barriers in design."
        ],
        hashtags: ['#VirtualReality', '#AR', '#ImmersiveDesign', '#ClientEngagement', '#Collaboration', '#DigitalTwin'],
        date: 'July 2025',
    },
    {
        id: 5,
        headline: `Smart Cities Initiative Launch`,
        paragraphs: [
            'IoT Integration Shapes the Future of Urban Planning'
        ],
        bullets: [
            "The integration of Internet of Things (IoT) sensors and smart city technologies is creating unprecedented opportunities for data-driven urban design.",
            "Real-time monitoring of traffic patterns, air quality, and energy usage provides architects with crucial data for designing more responsive urban environments.",
            "Pilot projects show 45% improvement in energy efficiency and 35% reduction in urban heat island effects when IoT data informs design decisions."
        ],
        hashtags: ['#SmartCities', '#IoT', '#UrbanPlanning', '#DataDriven', '#SustainableUrban', '#TechIntegration'],
        date: 'July 2025',
    }
];

// Helper to normalize legacy items that still have a raw HTML 'content' field.
function normalizeItem(item) {
    if (item.paragraphs || item.bullets) return item; // already structured
    if (item.content) {
        const raw = item.content;
        // Extract list items
        const bulletMatches = [...raw.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)].map(m =>
            m[1].replace(/<[^>]+>/g, '').trim()
        );
        // Remove ul/li and get paragraph-like text inside <p>
        const paragraphMatches = [...raw.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)].map(m =>
            m[1].replace(/<[^>]+>/g, '').trim()
        ).filter(Boolean);
        return {
            ...item,
            paragraphs: paragraphMatches.length ? paragraphMatches : undefined,
            bullets: bulletMatches.length ? bulletMatches : undefined,
        };
    }
    return item;
}

export default function NewsSlider({ items }) {
    const containerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    // Touch swipe refs for mobile responsiveness
    const touchStartX = useRef(null);
    const touchDeltaX = useRef(0);

    // Prefer passed items; fall back to internal newsItems constant
    const list = (items && items.length ? items : newsItems).map(normalizeItem);

    const nextSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev + 1) % list.length);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const prevSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev - 1 + list.length) % list.length);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const goToSlide = (index) => {
        if (isAnimating || index === currentIndex) return;
        setIsAnimating(true);
        setCurrentIndex(index);
        setTimeout(() => setIsAnimating(false), 500);
    };

    useEffect(() => {
        if (!containerRef.current) return;
        const card = containerRef.current.querySelector('[data-news-card]');
        if (card) {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 50);
        }
    }, [currentIndex]);

    const currentItem = list[currentIndex];

    // Touch handlers for swipe navigation (mobile)
    const handleTouchStart = (e) => {
        if (e.touches && e.touches.length === 1) {
            touchStartX.current = e.touches[0].clientX;
            touchDeltaX.current = 0;
        }
    };
    const handleTouchMove = (e) => {
        if (touchStartX.current !== null && e.touches && e.touches.length === 1) {
            touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
        }
    };
    const handleTouchEnd = () => {
        const threshold = 40; // px
        if (Math.abs(touchDeltaX.current) > threshold) {
            if (touchDeltaX.current < 0) nextSlide(); else prevSlide();
        }
        touchStartX.current = null;
        touchDeltaX.current = 0;
    };

    return (
        <section
            id="news-section"
            ref={containerRef}
            className="w-full px-[clamp(1rem,5vw,5%)] py-[clamp(2.5rem,7vw,5rem)] bg-white relative"
            style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}
        >
            <div className="max-w-7xl mx-auto">
                <header className="mb-10 md:mb-14">
                    <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                        <div className="flex-1 min-w-0">
                            <h2
                                className="text-[clamp(1.55rem,4.2vw,2.8rem)] text-black font-semibold tracking-wide leading-[1.05]"
                                style={{ fontFamily: 'Bruno Ace SC, sans-serif' }}
                            >
                                Latest News
                            </h2>
                            <p
                                className="text-neutral-600 max-w-2xl text-[clamp(0.82rem,1.05vw,0.95rem)] md:text-[clamp(0.9rem,0.9vw+0.4rem,1.05rem)] leading-relaxed mt-3"
                                style={{ fontFamily: 'Century Gothic, sans-serif' }}
                            >
                                Updates, milestones and research highlights from the Collective AEC studio.
                            </p>
                        </div>

                        {/* Navigation Controls */}
                        <div className="flex w-full md:w-auto items-center justify-between md:justify-end gap-6 flex-wrap">
                            <div className="flex items-center gap-2 flex-wrap" aria-label="Slide indicators">
                                {list.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex
                                                ? 'bg-black scale-125'
                                                : 'bg-neutral-300 hover:bg-neutral-400'} focus:outline-none focus:ring-2 focus:ring-black/40`}
                                        aria-label={`Go to slide ${index + 1}`}
                                        aria-current={index === currentIndex ? 'true' : 'false'}
                                    />
                                ))}
                            </div>

                            <div className="flex items-center gap-2 shrink-0">
                                <button
                                    onClick={prevSlide}
                                    disabled={isAnimating}
                                    className="p-2 rounded-full bg-black hover:bg-neutral-800 text-white transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-black/40"
                                    aria-label="Previous news item"
                                >
                                    <FiChevronLeft size={18} />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    disabled={isAnimating}
                                    className="p-2 rounded-full bg-black hover:bg-neutral-800 text-white transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-black/40"
                                    aria-label="Next news item"
                                >
                                    <FiChevronRight size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                {/* News Slider */}
                <div className="relative overflow-hidden" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
                    <div className="flex transition-transform duration-500 ease-in-out">
                        <article
                            data-news-card
                            className="group w-full flex-shrink-0 relative flex flex-col rounded-3xl overflow-hidden shadow-[0_4px_24px_-6px_rgba(0,0,0,0.08)] bg-gray-100 backdrop-blur-md border border-black/5 p-5 sm:p-6 lg:p-7 hover:shadow-[0_6px_42px_-4px_rgba(0,0,0,0.14)] transition-shadow duration-400"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span
                                    className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-neutral-500 font-medium"
                                    style={{ fontFamily: 'Bruno Ace SC, sans-serif' }}
                                >
                                    {currentItem.date}
                                </span>
                                <div className="flex items-center gap-3">
                                    <span className="text-[10px] sm:text-[11px] text-neutral-400 font-medium">
                                        {currentIndex + 1} / {list.length}
                                    </span>
                                    <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-black via-neutral-700 to-neutral-400 shadow-inner" />
                                </div>
                            </div>

                            <h3
                                className="text-[clamp(0.95rem,0.55vw+0.85rem,1.15rem)] font-semibold leading-snug mb-3 group-hover:translate-x-[2px] text-black transition-transform"
                                style={{ fontFamily: 'Century Gothic, sans-serif' }}
                            >
                                {currentItem.headline}
                            </h3>

                            <div className="news-rich text-[clamp(0.78rem,0.5vw+0.65rem,0.92rem)] text-neutral-700 leading-relaxed flex-1" style={{ fontFamily: 'Century Gothic, sans-serif' }}>
                                {currentItem.paragraphs && currentItem.paragraphs.map((p, i) => (
                                    <p key={i} className="mb-3 last:mb-0">{p}</p>
                                ))}
                                {currentItem.bullets && (
                                    <ul className="list-disc pl-5 mb-3 last:mb-0 space-y-2">
                                        {currentItem.bullets.map((b, i) => (
                                            <li key={i}>{b}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            <div className="mt-5 flex flex-wrap gap-2.5 max-sm:gap-2 scrollbar-thin">
                                {currentItem.hashtags.map((t, i) => (
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
                        </article>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .news-rich p { margin: 0 0 0.75rem; }
                .news-rich p:last-child { margin-bottom: 0; }
                .news-rich ul { margin: 0 0 0.85rem; }
                @media (max-width:640px){
                  /* Improve touch targets on very small screens */
                  [aria-label='Previous news item'], [aria-label='Next news item'] { padding: 0.65rem; }
                }
                @media (max-width:420px){
                    .scrollbar-thin{ scrollbar-width:none; }
                    .scrollbar-thin::-webkit-scrollbar{ display:none; }
                }
            `}</style>
        </section>
    );
}