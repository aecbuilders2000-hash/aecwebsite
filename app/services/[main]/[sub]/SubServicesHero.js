"use client";
import React, { useRef } from 'react'
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
            <section className="text-white py-8 lg:py-24 relative overflow-hidden">
                {/* Background Image */}
                <Image
                    src={mainData?.image || "https://i.postimg.cc/P5Z3fZ6r/BIMBG.jpg"}
                    alt="BIM Consulting Services Background"
                    fill
                    className="object-cover"
                />

                {/* Dark Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40 z-[1]"></div>

                <div className="mx-auto px-6 lg:px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left Content */}
                        <div className="space-y-8">
                            {/* Title */}
                            <div>
                                <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bruno font-bold leading-tight mb-4"><span className="text-white">{heroTitle}</span>
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
                                    <ArrButton />
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
                        {/* <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-bruno font-bold text-gray-900 mb-8">
                            {mainData?.title || "Service"}
                        </h2> */}
                        <div className="text-gray-700 text-lg lg:text-xl leading-relaxed" aria-hidden="true">
                            {/* content intentionally removed but height preserved */}
                            <div style={{ visibility: 'hidden', pointerEvents: 'none' }}>
                                {whiteSectionText}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


const ArrButton = () => (
    <button
        className="flex items-center justify-between bg-black border-none rounded-full cursor-pointer font-century-gothic transition-all duration-300 ease-in-out shadow-lg"
        style={{
            fontFamily: 'var(--font-century-gothic), Century Gothic, sans-serif',
            zIndex: 1001,
            padding: 'clamp(0.3rem, 1vw, 0.6rem)',
            paddingLeft: 'clamp(0.6rem, 2vw, 1.5rem)',
            gap: 'clamp(0.4rem, 1.5vw, 1rem)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        }}
        onMouseEnter={e => {
            e.target.style.backgroundColor = '#fff';
            const textSpan = e.target.querySelector('.button-text');
            const circle = e.target.querySelector('.arrow-circle');
            const arrow = e.target.querySelector('.arrow-icon');
            if (textSpan) {
                textSpan.style.color = '#000';
                textSpan.style.backgroundColor = 'transparent';
            }
            if (circle) circle.style.backgroundColor = '#000';
            if (arrow) {
                arrow.style.stroke = '#fff';
                arrow.style.transform = 'rotate(0deg)';
            }
        }}
        onMouseLeave={e => {
            e.target.style.backgroundColor = '#000';
            const textSpan = e.target.querySelector('.button-text');
            const circle = e.target.querySelector('.arrow-circle');
            const arrow = e.target.querySelector('.arrow-icon');
            if (textSpan) textSpan.style.color = '#fff';
            if (circle) circle.style.backgroundColor = '#fff';
            if (arrow) {
                arrow.style.stroke = '#000';
                arrow.style.backgroundColor = 'transparent';
                arrow.style.transform = 'rotate(-45deg)';
            }
        }}
    >
        <span
            className="button-text bg-transparent text-white whitespace-nowrap transition-colors duration-300 ease-in-out font-bold"
            style={{ fontSize: 'clamp(0.7rem, 1.8vw, 0.95rem)' }}
        >
            Let&apos;s collaborate
        </span>
        <div
            className="arrow-circle bg-white rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ease-in-out"
            style={{ width: 'clamp(20px, 6vw, 36px)', height: 'clamp(20px, 6vw, 36px)' }}
        >
            <svg
                className="arrow-icon stroke-black transition-all duration-300 ease-in-out"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ transform: 'rotate(-45deg)', width: 'clamp(10px, 3vw, 16px)', height: 'clamp(10px, 3vw, 16px)' }}
            >
                <path d="M7 7h10v10" />
                <path d="M7 17L17 7" />
            </svg>
        </div>
    </button>
);

export default SubServicesHero