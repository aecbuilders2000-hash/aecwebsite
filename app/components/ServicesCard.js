"use client";
import { useState, useRef, useEffect } from 'react';
import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CardServices = ({
    introText = "Beyond sales, our expertise extends to tiling, screed work, interior plastering, and façade construction.",
    imageUrl = "/SanBridge.png",
    serviceName = "ARCHITECTURAL",
    pageNumber = "001/007",
    services = ["Revit", "AutoCAD", "ArchiCAD", "BIM modeling"],
    bottomText = "Your brand's compass. It defines purpose, sharpens positioning, and ensures every decision you make resonates with your audience."
}) => {

    const [selected, setSelected] = useState(services[1]); // Default to second service
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [arrowHovered, setArrowHovered] = useState(false);
    const titleRef = useRef(null);
    const cardRef = useRef(null); // Add ref for the entire card

    useEffect(() => {
        if (!titleRef.current || !cardRef.current) return;

        const ctx = gsap.context(() => {
            // Get all letters in this specific title instance
            const titleLetters = titleRef.current.querySelectorAll('.letter');
            
            if (titleLetters.length > 0) {
                // Set initial state for letters
                gsap.set(titleLetters, {
                    rotationX: -90,
                    transformOrigin: "50% 100%",
                    opacity: 0
                });

                // Create a more robust scroll trigger tied to the card
                ScrollTrigger.create({
                    trigger: cardRef.current, // Use entire card as trigger
                    start: "top 70%", // More generous trigger area
                    end: "bottom 30%",
                    onEnter: () => {
                        // Add a small delay to ensure proper sequencing
                        gsap.delayedCall(0.1, () => {
                            gsap.to(titleLetters, {
                                rotationX: 0,
                                opacity: 1,
                                duration: 0.8,
                                stagger: 0.06,
                                ease: "back.out(1.7)"
                            });
                        });
                    },
                    once: true,
                    // Add markers for debugging (remove in production)
                    // markers: true,
                    id: `card-${Date.now()}-${Math.random()}` // Unique ID for each instance
                });
            }
        }, cardRef);

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <section 
            className="w-screen overflow-hidden bg-gray-100 box-border"
            style={{
                minHeight: "100vh",
                paddingTop: "5vh",
                paddingLeft: "2.5vw",
                paddingRight: "2.5vw",
            }}
        >
            {/* Main Content Row */}
            <div 
                className="flex w-full"
                style={{
                    minHeight: "80vh",
                    gap: "clamp(2rem, 4vw, 4rem)",
                }}
            >
                {/* Left Column - 40% */}
                <div 
                    className="flex flex-col justify-start items-start relative"
                    style={{
                        width: "40%",
                        marginTop: "5%"
                    }}
                >
                    {/* Service Name with Arrow - AFTER the image */}
                    <div 
                        className="flex items-center"
                        style={{
                            // top: "calc(28vh + 18.75vw + 10vh)", // Updated calculation: new image top + image height + larger gap
                            gap: "clamp(1rem, 2vw, 2rem)",
                        }}
                    >
                        <span 
                            ref={titleRef}
                            className="font-bruno-ace-sc font-bold text-black leading-tight"
                            style={{
                                fontFamily: 'var(--font-bruno-ace-sc), sans-serif',
                                fontSize: 'clamp(1.28rem, 2.7vw, 2.13rem)',
                                letterSpacing: '0.3em',
                                transformStyle: 'preserve-3d',
                                perspective: '1000px',
                                display: 'inline-block',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            {serviceName.split('').map((letter, index) => (
                                <span 
                                    key={index} 
                                    className="letter" 
                                    style={{ 
                                        display: 'inline-block',
                                        transformStyle: 'preserve-3d'
                                    }}
                                >
                                    {letter === ' ' ? '\u00A0' : letter}
                                </span>
                            ))}
                        </span>
                        
                        {/* Arrow Circle */}
                        <button className="flex items-center justify-center cursor-pointer bg-transparent group" style={{padding: 0, border: 'none', background: 'none'}}>
                            <div className="bg-black rounded-full flex items-center justify-center flex-shrink-0" style={{width: 'clamp(35px, 10vw, 60px)', height: 'clamp(35px, 10vw, 60px)'}}>
                                <svg className="stroke-white transform transition-transform duration-300 ease-in-out rotate-0 group-hover:-rotate-45" width="36" height="36" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14" /><path d="M13 5l7 7-7 7" />
                                </svg>
                            </div>
                        </button>
                    </div>
                    {/* Intro Text */}
                    <p 
                        className="relative font-poppins leading-relaxed text-gray-500 m-0 text-left"
                        style={{
                            fontFamily: 'var(--font-poppins), sans-serif',
                            // top: "8vh", // Reduced from 10vh for more space
                            marginTop: "2vh",
                            fontSize: 'clamp(0.73rem, 1.47vw, 1.13rem)', // Reduced by ~33% from clamp(1.1rem, 2.2vw, 1.7rem)
                            width: "30vw", // Reduced from 100% to 30vw
                        }}
                    >
                        {introText}
                    </p>

                    {/* Image */}
                    <div 
                        className="relative"
                        style={{
                            top: "8vh", // Increased from 25vh for more space after intro text
                            width: "30vw", // Reduced by 25% (was 25vw)
                            height: "20vw", // Reduced by 25% (was 25vw) - maintains 1:1 ratio
                            overflow: "hidden",
                            borderRadius: "1.5rem", // rounded-3xl
                        }}
                    >
                            <Image
                                src={imageUrl}
                                alt="Architecture Service"
                                fill
                                sizes="18.75vw"
                                style={{
                                    objectFit: "cover",
                                    objectPosition: "center center",
                                    background: '#fff',
                                }}
                        />
                    </div>

                </div>

                {/* Right Column - 60% */}
                <div 
                    className="flex flex-col justify-center relative"
                    style={{
                        width: "60%",
                    }}
                >
                    {/* White Box Container */}
                    <div 
                        className="absolute bg-white rounded-t-3xl rounded-b-none box-border flex flex-col justify-start"
                        style={{
                            top: "8vh", // Start from same level as intro text
                            right: "1.25vw", // Align to the right
                            width: "80%", // 60% of right side width
                            height: "calc(100vh - 8vh)", // Extend till end of page
                            padding: "clamp(3rem, 6vw, 4rem) clamp(3rem, 6vw, 4rem)", // Reduced padding to prevent bottom text touching
                            gap: "clamp(2rem, 4vh, 3rem)",
                        }}
                    >
                    {/* Services Header */}
                    <div 
                        className="flex justify-between items-baseline"
                        style={{
                            marginBottom: "clamp(1rem, 2vh, 2rem)",
                        }}
                    >
                        <h3 
                            className="font-poppins font-light m-0"
                            style={{
                                fontFamily: 'var(--font-poppins), sans-serif',
                                fontSize: 'clamp(1rem, 2vw, 1.67rem)',
                                letterSpacing: '0.15em',
                                color: '#737272',
                            }}
                        >
                            SERVICES
                        </h3>
                        <span 
                            className="font-poppins"
                            style={{
                                fontFamily: 'var(--font-poppins), sans-serif',
                                fontSize: 'clamp(0.67rem, 1.07vw, 0.93rem)',
                                letterSpacing: '0.1em',
                                color: '#737272',
                            }}
                        >
                            {pageNumber}
                        </span>
                    </div>

                    {/* Software Stack */}
                    <div 
                        className="flex flex-col"
                        style={{
                            gap: "clamp(0.5rem, 1vh, 0.8rem)", // Reduced gap between features
                        }}
                    >
                        {services.map((option, index) => {
                            const isHovered = hoveredIndex === index;
                            return (
                                <button
                                    key={index}
                                    className="flex items-center justify-start border-none cursor-pointer bg-transparent font-poppins w-full relative transition-all duration-300 ease-in-out"
                                    style={{
                                        padding: 'clamp(0.2rem, 0.5vw, 0.4rem)', // Reduced line height
                                        paddingLeft: 'clamp(1rem, 2vw, 1.5rem)',
                                        lineHeight: 1.0, // Bring lines closer
                                    }}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    onClick={() => setSelected(selected === option ? null : option)}
                                >
                                    {/* Bouncy Black Ball - appears on hover */}
                                    <div
                                        className="bg-black rounded-full absolute"
                                        style={{
                                            width: 'clamp(12px, 2.5vw, 20px)',
                                            height: 'clamp(12px, 2.5vw, 20px)',
                                            left: 'clamp(0.5rem, 1vw, 0.8rem)',
                                            opacity: isHovered ? 1 : 0,
                                            transform: isHovered ? 'scale(1)' : 'scale(0)',
                                            transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)', // Bouncy animation
                                        }}
                                    />

                                    {/* Text */}
                                    <span
                                        className="bg-transparent font-poppins font-light whitespace-nowrap transition-all duration-300 ease-in-out"
                                        style={{
                                            fontFamily: 'var(--font-poppins), sans-serif',
                                            color: '#000000', // Always black
                                            fontSize: 'clamp(1rem, 1.5vw, 1.67rem)',
                                            letterSpacing: '0.03em', // Decreased letter spacing
                                            fontWeight: '400',
                                            transform: isHovered ? 'translateX(clamp(1.5rem, 3vw, 2.5rem))' : 'translateX(0)',
                                        }}
                                    >
                                        {option}
                                    </span>
                                </button>
                            )
                        })}
                    </div>

                    {/* Brand Description */}
                    <div 
                        style={{
                            paddingTop: "clamp(1rem, 2vh, 2rem)",
                            width: "85%", // Increased from 70% to 85% to give more space
                        }}
                    >
                        <p 
                            className="font-poppins leading-relaxed text-gray-500 m-0"
                            style={{
                                fontFamily: 'var(--font-poppins), sans-serif',
                                fontSize: 'clamp(0.73rem, 1.47vw, 1.13rem)', // Reduced by ~33% from clamp(1.1rem, 2.2vw, 1.7rem)
                            }}
                        >
                            {bottomText}
                        </p>
                    </div>
                    </div> {/* Close White Box Container */}
                </div>
            </div>

        </section>
    );
// Add CSS for arrow rotation
const style = document.createElement('style');
style.innerHTML = `
.arrow-rest {
    transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transform: rotate(-45deg);
}
.arrow-rotate {
    transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transform: rotate(-90deg);
}
`;
if (typeof window !== 'undefined' && !document.head.querySelector('style[data-arrow-rotate]')) {
    style.setAttribute('data-arrow-rotate', 'true');
    document.head.appendChild(style);
}
}

export default CardServices;