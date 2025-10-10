"use client";
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';

const stats = [
    { number: "10+", label: "Years of Experience" },
    { number: "20+", label: "Countries Served" },
    { number: "1000+", label: "Successful Projects" },
    { number: "200+", label: "Happy Clients" },
];

const parseTarget = (str) => {
    const digits = String(str).replace(/[^0-9]/g, '');
    return digits ? parseInt(digits, 10) : 0;
}

const WhyCollective = () => {
    const containerRef = useRef(null);
    const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));
    const [hasAnimated, setHasAnimated] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    
    const waveTimeouts = useRef([]);
    const lastHoveredIndex = useRef(-1);

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

        allLetters.forEach((letter, index) => {
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

    useEffect(() => {
        const onResize = () => setIsMobile(window.innerWidth < 768);
        onResize();
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    // start count-up animation
                    const startTime = performance.now();
                    const duration = 1400; // ms

                    const targets = stats.map(s => parseTarget(s.number));

                    const raf = (now) => {
                        const t = Math.min(1, (now - startTime) / duration);
                        const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
                        const newVals = targets.map((target) => Math.round(target * eased));
                        setAnimatedStats(newVals);
                        if (t < 1) requestAnimationFrame(raf);
                    };

                    requestAnimationFrame(raf);
                }
            });
        }, { threshold: 0.25 });

        observer.observe(el);
        return () => observer.disconnect();
    }, [hasAnimated]);

    const paragraphLine1 = "Selecting the right BIM consulting partner defines how efficiently your vision becomes reality.";
    const paragraphLine2 = "At Collective AEC, we merge design intelligence with advanced technology to deliver integrated BIM solutions that enhance precision, collaboration, and project performance from concept to completion.";

    return (
        <section className="py-20 min-h-screen flex items-center justify-center bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12 text-center" ref={containerRef}>
                <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold text-gray-900 mb-6 leading-tight transition-transform">
                    Why <span className="text-black">Collective AEC</span> is the Right Partner for BIM Consulting
                </h2>

                <div className="max-w-3xl mx-auto text-gray-600 mb-12 text-base lg:text-lg">
                    <div 
                        className="cursor-pointer mb-2"
                        onMouseMove={handleMouseMove}
                    >
                        {paragraphLine1.split(" ").map((word, wordIndex) => (
                            <span
                                key={wordIndex}
                                style={{ display: "inline-block", marginRight: "0.4em" }}
                            >
                                {word.split("").map((letter, letterIndex) => (
                                    <span
                                        key={`${wordIndex}-${letterIndex}`}
                                        className="bounce-letter"
                                        style={{
                                            display: "inline-block",
                                            transformOrigin: "center bottom",
                                        }}
                                    >
                                        {letter}
                                    </span>
                                ))}
                            </span>
                        ))}
                    </div>
                    <div 
                        className="cursor-pointer"
                        onMouseMove={handleMouseMove}
                    >
                        {paragraphLine2.split(" ").map((word, wordIndex) => (
                            <span
                                key={wordIndex}
                                style={{ display: "inline-block", marginRight: "0.4em" }}
                            >
                                {word.split("").map((letter, letterIndex) => (
                                    <span
                                        key={`${wordIndex}-${letterIndex}`}
                                        className="bounce-letter"
                                        style={{
                                            display: "inline-block",
                                            transformOrigin: "center bottom",
                                        }}
                                    >
                                        {letter}
                                    </span>
                                ))}
                            </span>
                        ))}
                    </div>
                </div>

                <div
                    className="w-full md:px-10 h-fit flex items-center justify-center"
                    id="content-section-details"
                    style={{
                        bottom: isMobile ? '15vh' : '2vw',
                        transition: 'bottom 220ms ease'
                    }}
                >
                    <div
                        className="w-full grid grid-cols-2 md:grid-cols-4 m-0 p-0 box-border"
                        style={{
                            gap: "clamp(2rem, 4vw, 3rem)",
                        }}
                    >
                        {stats.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center"
                                style={{
                                    minWidth: 'clamp(6rem, 8vw, 8rem)',
                                }}
                            >
                                <h3
                                    className="font-bruno-ace-sc font-bold text-black leading-tight"
                                    style={{
                                        fontFamily: 'var(--font-bruno-ace-sc), sans-serif',
                                        fontSize: 'clamp(1.67rem, 3.67vw, 3rem)',
                                        marginBottom: 'clamp(0.25rem, 0.5vh, 0.5rem)',
                                    }}
                                >
                                    {animatedStats[index].toLocaleString()}{item.number.endsWith("+") ? "+" : ""}
                                </h3>
                                <p
                                    className="font-century-gothic text-gray-600 m-0 leading-tight"
                                    style={{
                                        fontFamily: 'var(--font-century-gothic), Century Gothic, sans-serif',
                                        fontSize: 'clamp(0.8rem, 1.67vw, 1.33rem)',
                                    }}
                                >
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyCollective