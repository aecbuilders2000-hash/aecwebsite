"use client";
import React, { useRef } from 'react'
import ArrowButton from '../../../ui/ArrowButton';
import Image from 'next/image';
import gsap from 'gsap';

const SubServicesHero = ({ subData, mainData }) => {
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

    const heroTitle = subData?.heroTitle || subData?.title || "Service Title";
    const descriptionText = subData?.heroDescription || subData?.subtitle || "Service description";
    const whiteSectionText = mainData?.description || "Main service description";

    return (
        <>
            {/* Hero Section - Image Background */}
            <section className="text-white py-16 lg:py-24 relative overflow-hidden min-h-[600px]">
                {/* Background Image */}
                <Image
                    src="https://i.postimg.cc/HnqbQ7Hs/IMG-20251009-WA0004.jpg"
                    alt="BIM Consulting Services Background"
                    fill
                    className="object-cover"
                    priority
                    style={{
                        filter: 'brightness(0.7) contrast(1.1)',
                    }}
                />
                
                {/* Dark Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40 z-[1]"></div>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left Content */}
                        <div className="space-y-8">
                            {/* Title */}
                            <div>
                                <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight mb-4"><span className="text-white">{heroTitle}</span>
                                </h1>
                            </div>

                            {/* Description */}
                            <div 
                                className="text-white text-base lg:text-lg leading-relaxed cursor-pointer"
                                onMouseMove={handleMouseMove}
                            >
                                {descriptionText.split(" ").map((word, wordIndex) => (
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

                            {/* Call to Action */}
                            <div className="flex pt-1 justify-start items-start gap-4">
                                <div className="flex pt-1 justify-end items-end gap-4">
                                    <ArrowButton
                                        style={{
                                            color: 'black',
                                            backgroundColor: 'white',
                                            // borderRadius: '0.375rem',
                                        }}
                                        label="Let's Collaborate"
                                        onClick={() => {
                                            const contactSection = typeof document !== 'undefined' && document.getElementById('contact-us-section');
                                            if (contactSection) {
                                                contactSection.scrollIntoView({ behavior: 'smooth' });
                                                return;
                                            }
                                            try { sessionStorage.setItem('scrollToContact', '1'); } catch (err) { }
                                            // navigate to home root without hash so URL stays clean
                                            if (typeof window !== 'undefined') window.location.href = '/';
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* White Section - Main Service Description */}
            <section className="bg-white py-8 lg:py-12">
                <div className="mx-auto px-6 lg:px-12">
                    <div className="max-w-7xl">
                        <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-bold text-gray-900 mb-8">
                            {mainData?.title || "Service"}
                        </h2>
                        <div 
                            className="text-gray-700 text-lg lg:text-xl leading-relaxed cursor-pointer"
                            onMouseMove={handleMouseMove}
                        >
                            {whiteSectionText.split(" ").map((word, wordIndex) => (
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
                </div>
            </section>
        </>
    )
}

export default SubServicesHero