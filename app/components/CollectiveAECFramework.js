"use client";
import React, { useRef } from 'react'
import gsap from 'gsap';
import LiquidShader from '../ui/LiquidShader';

const frameworkSteps = [
    {
        number: "01",
        title: "Understand",
        description: "We begin by immersing ourselves in your project vision understanding goals, workflows, and existing BIM practices to identify alignment and improvement opportunities."
    },
    {
        number: "02",
        title: "Analyse",
        description: "Our team conducts a detailed review of your current BIM processes, models, and coordination methods to uncover inefficiencies and performance gaps across design and construction stages."
    },
    {
        number: "03",
        title: "Optimize",
        description: "We refine and restructure workflows for precision and scalability—standardizing Revit drafting templates, enhancing collaboration models, and integrating parametric design strategies that drive smarter project delivery."
    },
    {
        number: "04",
        title: "Automate",
        description: "Leveraging automation within BIM Revit, we streamline repetitive tasks, improve modelling accuracy, and accelerate documentation empowering your team to focus on creativity, innovation, and better project outcomes."
    }
];

const CollectiveAECFramework = () => {
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

    return (
        <section className="py-8 lg:py-12 bg-gray-50 relative overflow-hidden">
            {/* Ripple shader background (pointer-events-none so it doesn't block interactions) */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <LiquidShader />
            </div>

            <div className="mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center mb-6 lg:mb-12">
                    <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-bruno text-gray-900 leading-tight">
                        Collective AEC Framework
                    </h2>
                </div>

                {/* Framework Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
                    {frameworkSteps.map((step, index) => (
                        <div key={step.number} className="space-y-4">
                            {/* Step Number and Title */}
                            <div className="flex items-baseline gap-3">
                                <span className="text-2xl lg:text-3xl font-bold text-gray-900">
                                    {step.number}.
                                </span>
                                <h3 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-bruno-ace-sc), sans-serif' }}>
                                    {step.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <div
                                className="text-gray-700 text-base lg:text-lg leading-relaxed pl-12 cursor-pointer"
                                onMouseMove={handleMouseMove}
                            >
                                {step.description.split(" ").map((word, wordIndex) => (
                                    <span key={wordIndex} style={{ display: 'inline-block', marginRight: '0.4em' }}>
                                        {word.split('').map((letter, letterIndex) => (
                                            <span
                                                key={`${wordIndex}-${letterIndex}`}
                                                className="bounce-letter"
                                                style={{ display: 'inline-block', transformOrigin: 'center bottom' }}
                                            >
                                                {letter}
                                            </span>
                                        ))}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CollectiveAECFramework