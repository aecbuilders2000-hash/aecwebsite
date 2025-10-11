"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";

const stats = [
    { number: "10+", label: "Years of Experience" },
    { number: "20+", label: "Countries Served" },
    { number: "1000+", label: "Successful Projects" },
    { number: "200+", label: "Happy Clients" },
];

const AboutUsPage = () => {
    const [isMobile, setIsMobile] = useState(false);

    // Ref for right side text bounce effect
    const rightTextRef = useRef(null);
    const lastHoveredIndex = useRef(-1);
    const waveTimeouts = useRef([]);

    const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));

    // Wave effect function for sequential letter bounce
    const createWaveEffect = (allLetters, mouseX, mouseY, containerRect) => {
        // Clear existing timeouts
        waveTimeouts.current.forEach(timeout => clearTimeout(timeout));
        waveTimeouts.current = [];

        const maxDistance = 120; // Maximum pixel distance to affect letters
        const maxDelay = 150; // Maximum delay in ms

        allLetters.forEach((letter) => {
            const letterRect = letter.getBoundingClientRect();
            const letterCenterX = letterRect.left + letterRect.width / 2 - containerRect.left;
            const letterCenterY = letterRect.top + letterRect.height / 2 - containerRect.top;

            // Calculate actual distance between mouse and letter center
            const deltaX = mouseX - letterCenterX;
            const deltaY = mouseY - letterCenterY;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

            if (distance <= maxDistance) {
                const delay = (distance / maxDistance) * maxDelay; // Closer = faster
                const intensity = 1 - (distance / maxDistance); // Closer = stronger

                const timeout = setTimeout(() => {
                    // Strong bounce effect based on actual proximity
                    gsap.to(letter, {
                        y: -25 * intensity, // Strong bounce
                        scale: 1.1 + (0.4 * intensity), // Dynamic scale
                        rotation: (Math.random() - 0.5) * 8 * intensity, // Slight rotation
                        duration: 0.4,
                        ease: "back.out(2.5)"
                    });

                    // Return animation with elastic
                    gsap.to(letter, {
                        y: 0,
                        scale: 1,
                        rotation: 0,
                        duration: 0.8,
                        delay: 0.1,
                        ease: "elastic.out(1, 0.4)"
                    });
                }, delay);

                waveTimeouts.current.push(timeout);
            }
        });
    };

    // Function to animate stats with whole numbers only
    const animateStats = () => {
        stats.forEach((item, index) => {
            const targetNumber = parseInt(item.number);
            const statObject = { value: 0 };

            gsap.to(statObject, {
                value: targetNumber,
                duration: 1.5,
                ease: "power1.out",
                onUpdate: () => {
                    setAnimatedStats(prev => {
                        const newStats = [...prev];
                        newStats[index] = Math.floor(statObject.value); // Use Math.floor to ensure whole numbers
                        return newStats;
                    });
                },
            });
        });
    };

    // Animate stats immediately after page opens
    useEffect(() => {
        animateStats();
        // Cleanup: clear any pending timeouts for the wave effect on unmount
        return () => {
            waveTimeouts.current.forEach((t) => clearTimeout(t));
            waveTimeouts.current = [];
        };
    }, []);

    // Simple mobile detection to adjust layout values without using px
    useEffect(() => {
        const handleResize = () => setIsMobile(typeof window !== 'undefined' && window.innerWidth <= 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section
            className="relative h-fit min-h-screen overflow-hidden"
            style={{
                width: "100vw",
                color: "var(--gray-9)",
                zIndex: 10,
            }}
        >
            {/* Main Content Section */}
            <section
                id="content-section"
                className="w-full h-fit overflow-hidden flex flex-col box-border"
                style={{
                    paddingTop: "5vh", // 5vh gap from navbar
                    paddingLeft: "2.5vw", // 2.5% from left
                    paddingRight: "2.5vw", // 2.5% from right
                }}
            >
                {/* Top Row - Left and Right Boxes */}
                <div
                    className="flex h-fit lg:h-[60vh] flex-col md:flex-row absolute left-0 justify-between items-center right-0 box-border m-0"
                    style={{
                        top: "12.5vh", // 12.5% from top of screen
                        width: "100%",
                        // height: "60vh", // 60% height
                        paddingLeft: "2.5vw", // Left padding instead of left margin
                        paddingRight: "2.5vw", // Right padding instead of right margin
                        gap: "clamp(1rem, 2.5vw, 2rem)", // Gap between left and right boxes
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    {/* We are Collective - Left side simple heading */}
                    <div className="px-5 md:px-0 relative md:w-[50vw] h-full flex items-center">
                        <h1
                            className="font-bruno-ace-sc text-black font-bold tracking-widest leading-tight"
                            style={{
                                fontFamily: 'var(--font-bruno-ace-sc), sans-serif',
                                fontSize: 'clamp(1.28rem, 5vw, 3.5rem)',
                                letterSpacing: '0.3em',
                                lineHeight: 1.1
                            }}
                        >
                            WE<br />
                            ARE<br />
                            COLLECTIVE
                        </h1>
                    </div>

                    {/* Box 2: Right - Text Paragraph */}
                    <div
                        className="w-full flex md:w-[50vw] md:pr-[1.25vw] px-5 md:px-0 items-center justify-center h-full" // vertically center content
                        style={{
                            paddingRight: "1.25vw", // Align with navbar spacing
                            position: "relative", // Remove absolute positioning
                            boxSizing: "border-box",
                            zIndex: 5,
                            height: "100%"
                        }}
                    >
                        <div
                            ref={rightTextRef}
                            className="font-poppins text-gray-700 leading-relaxed m-0 p-0 border-0 box-border outline-none cursor-pointer"
                            style={{
                                fontFamily: 'var(--font-poppins), sans-serif',
                                fontSize: 'clamp(1rem, 2.1vw, 1.25rem)',
                                maxWidth: isMobile ? '100%' : 'min(60ch, 54vw)',
                                width: '100%',
                                textAlign: 'justify',
                                // Keep main text justified, but left-align the final (last) line
                                textAlignLast: 'left',
                                WebkitTextAlignLast: 'left',
                                MozTextAlignLast: 'left',
                                textJustify: 'inter-word',
                                wordSpacing: isMobile ? '0.10em' : '0.22em',
                                hyphens: 'auto',
                                lineHeight: 1.6,
                                padding: isMobile ? '0' : '0.25rem'
                            }}
                            onMouseMove={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const mouseX = e.clientX - rect.left;
                                const mouseY = e.clientY - rect.top;
                                const allLetters = Array.from(e.currentTarget.querySelectorAll('.bounce-letter'));
                                if (Date.now() - (lastHoveredIndex.current || 0) > 50) {
                                    lastHoveredIndex.current = Date.now();
                                    createWaveEffect(allLetters, mouseX, mouseY, rect);
                                }
                            }}
                        >
                            {`Collective AEC is a specialized collaborative studio offering end-to-end backend support for design firms. We are not an outsourcing company. We are your extended in-house team of architects, designers, visualizers, computational experts, and problem solvers. Our mission is to free design firms from the time-consuming burdens of drafting, automation, and visualization, so they can focus on what matters most: designing, innovating and winning clients.`
                                .split(' ')
                                .map((word, wordIndex) => (
                                    <React.Fragment key={wordIndex}>
                                        <span style={{ display: 'inline-block', whiteSpace: 'nowrap', verticalAlign: 'bottom' }}>
                                            {word.split('').map((letter, letterIndex) => (
                                                <span
                                                    key={`${wordIndex}-${letterIndex}`}
                                                    className="bounce-letter text-sm sm:text-lg"
                                                    style={{
                                                        display: 'inline-block',
                                                        verticalAlign: 'bottom',
                                                        transformOrigin: 'center bottom',
                                                        cursor: 'pointer'
                                                    }}
                                                >
                                                    {letter}
                                                </span>
                                            ))}
                                        </span>
                                        {' '}
                                    </React.Fragment>
                                ))}
                            {/* Removed the forced full-width spacer so the real last line can be left-aligned */}
                        </div>
                    </div>
                </div>

                {/* Box 3: Bottom - Stats */}
                <div
                    className="w-full md:px-10 h-fit absolute left-0 flex items-center justify-center"
                    id="content-section-details"
                    style={{
                        // Shift metrics slightly up on mobile using responsive units (no px)
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
                                    {animatedStats[index] + (item.number.endsWith("+") ? "+" : "")}
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
            </section>
        </section>
    );
}

export default AboutUsPage