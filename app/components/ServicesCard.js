"use client";
import { useState } from 'react';
import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';

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
                    }}
                >
                    {/* Intro Text */}
                    <p 
                        className="absolute font-poppins leading-relaxed text-gray-500 m-0 text-left"
                        style={{
                            fontFamily: 'var(--font-poppins), sans-serif',
                            top: "8vh", // Reduced from 10vh for more space
                            fontSize: 'clamp(0.73rem, 1.47vw, 1.13rem)', // Reduced by ~33% from clamp(1.1rem, 2.2vw, 1.7rem)
                            width: "30vw", // Reduced from 100% to 30vw
                        }}
                    >
                        {introText}
                    </p>

                    {/* Image */}
                    <div 
                        className="absolute"
                        style={{
                            top: "28vh", // Increased from 25vh for more space after intro text
                            width: "18.75vw", // Reduced by 25% (was 25vw)
                            height: "18.75vw", // Reduced by 25% (was 25vw) - maintains 1:1 ratio
                        }}
                    >
                        <Image
                            src={imageUrl}
                            alt="Architecture Service"
                            fill
                            sizes="18.75vw"
                            style={{
                                objectFit: "cover",
                            }}
                        />
                    </div>

                    {/* Service Name with Arrow - AFTER the image */}
                    <div 
                        className="absolute flex items-center"
                        style={{
                            top: "calc(28vh + 18.75vw + 10vh)", // Updated calculation: new image top + image height + larger gap
                            gap: "clamp(1rem, 2vw, 2rem)",
                        }}
                    >
                        <span 
                            className="font-bruno-ace-sc font-bold text-black leading-tight"
                            style={{
                                fontFamily: 'var(--font-bruno-ace-sc), sans-serif',
                                fontSize: 'clamp(1.28rem, 2.7vw, 2.13rem)', // Reduced by ~33% from clamp(1.92rem, 4vw, 3.2rem)
                                letterSpacing: '0.3em', // 30% character spacing like COLLECTIVE
                            }}
                        >
                            {serviceName}
                        </span>
                        
                        {/* Arrow Circle */}
                        <div
                            className="bg-black rounded-full flex items-center justify-center flex-shrink-0"
                            style={{
                                width: 'clamp(35px, 10vw, 60px)', // Increased by 25% (was clamp(28px, 8vw, 48px))
                                height: 'clamp(35px, 10vw, 60px)', // Increased by 25% (was clamp(28px, 8vw, 48px))
                            }}
                        >
                            <svg 
                                width="20" // Increased from 16 (25% increase)
                                height="20" // Increased from 16 (25% increase)
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="#fff" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                                style={{
                                    transform: 'rotate(-45deg)', // Top-right diagonal
                                    width: 'clamp(12.5px, 3.75vw, 20px)', // Increased by 25% (was clamp(10px, 3vw, 16px))
                                    height: 'clamp(12.5px, 3.75vw, 20px)', // Increased by 25% (was clamp(10px, 3vw, 16px))
                                }}
                            >
                                <path d="M7 7h10v10" />
                                <path d="M7 17L17 7" />
                            </svg>
                        </div>
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
                            className="font-poppins font-light text-gray-500 m-0"
                            style={{
                                fontFamily: 'var(--font-poppins), sans-serif',
                                fontSize: 'clamp(1rem, 2vw, 1.67rem)', // Reduced by ~33% from clamp(1.5rem, 3vw, 2.5rem)
                                letterSpacing: '0.15em',
                            }}
                        >
                            SERVICES
                        </h3>
                        <span 
                            className="font-poppins text-gray-500"
                            style={{
                                fontFamily: 'var(--font-poppins), sans-serif',
                                fontSize: 'clamp(0.67rem, 1.07vw, 0.93rem)', // Reduced by ~33% from clamp(1rem, 1.6vw, 1.4rem)
                                letterSpacing: '0.1em',
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
                                        padding: 'clamp(0.5rem, 1vw, 0.8rem)',
                                        paddingLeft: 'clamp(1rem, 2vw, 1.5rem)',
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
                                            color: isHovered ? '#000000' : '#CED4DA', // All start as #CED4DA, turn black on hover
                                            fontSize: 'clamp(1rem, 2vw, 1.67rem)', // Reduced by ~33% from clamp(1.5rem, 3vw, 2.5rem)
                                            letterSpacing: '0.15em',
                                            transform: isHovered ? 'translateX(clamp(1.5rem, 3vw, 2.5rem))' : 'translateX(0)', // Text shifts right on hover
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
};

export default CardServices;