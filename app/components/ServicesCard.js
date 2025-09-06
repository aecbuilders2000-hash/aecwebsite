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
            style={{
                width: "100vw",
                minHeight: "100vh",
                backgroundColor: "#E9ECEF", // Added requested background color
                overflow: "hidden",
                paddingTop: "5vh",
                paddingLeft: "2.5vw",
                paddingRight: "2.5vw",
                boxSizing: "border-box",
            }}
        >
            {/* Main Content Row */}
            <div 
                style={{
                    display: "flex",
                    width: "100%",
                    minHeight: "80vh",
                    gap: "clamp(2rem, 4vw, 4rem)",
                }}
            >
                {/* Left Column - 40% */}
                <div 
                    style={{
                        width: "40%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start", // Changed from center to start
                        alignItems: "flex-start",
                        position: "relative",
                    }}
                >
                    {/* Intro Text */}
                    <p 
                        style={{
                            position: "absolute",
                            top: "8vh", // Reduced from 10vh for more space
                            fontFamily: 'var(--font-poppins), sans-serif',
                            fontSize: 'clamp(0.73rem, 1.47vw, 1.13rem)', // Reduced by ~33% from clamp(1.1rem, 2.2vw, 1.7rem)
                            lineHeight: '1.6',
                            color: '#737272', // Requested color
                            margin: 0,
                            textAlign: 'left',
                            width: "30vw", // Reduced from 100% to 30vw
                        }}
                    >
                        {introText}
                    </p>

                    {/* Image */}
                    <div 
                        style={{
                            position: "absolute",
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
                        style={{
                            position: "absolute",
                            top: "calc(28vh + 18.75vw + 10vh)", // Updated calculation: new image top + image height + larger gap
                            display: "flex",
                            alignItems: "center",
                            gap: "clamp(1rem, 2vw, 2rem)",
                        }}
                    >
                        <span 
                            style={{
                                fontFamily: 'var(--font-bruno-ace-sc), sans-serif',
                                fontSize: 'clamp(1.28rem, 2.7vw, 2.13rem)', // Reduced by ~33% from clamp(1.92rem, 4vw, 3.2rem)
                                fontWeight: 'bold',
                                letterSpacing: '0.3em', // 30% character spacing like COLLECTIVE
                                color: '#000000',
                                lineHeight: '1.2',
                            }}
                        >
                            {serviceName}
                        </span>
                        
                        {/* Arrow Circle */}
                        <div
                            style={{
                                width: 'clamp(35px, 10vw, 60px)', // Increased by 25% (was clamp(28px, 8vw, 48px))
                                height: 'clamp(35px, 10vw, 60px)', // Increased by 25% (was clamp(28px, 8vw, 48px))
                                backgroundColor: '#000',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
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
                    style={{
                        width: "60%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        position: "relative",
                    }}
                >
                    {/* White Box Container */}
                    <div 
                        style={{
                            position: "absolute",
                            top: "8vh", // Start from same level as intro text
                            right: "1.25vw", // Align to the right
                            width: "80%", // 60% of right side width
                            height: "calc(100vh - 8vh)", // Extend till end of page
                            backgroundColor: "#FFFFFF",
                            borderTopLeftRadius: "2rem",
                            borderTopRightRadius: "2rem",
                            borderBottomLeftRadius: "0",
                            borderBottomRightRadius: "0",
                            padding: "clamp(3rem, 6vw, 4rem) clamp(3rem, 6vw, 4rem)", // Reduced padding to prevent bottom text touching
                            boxSizing: "border-box",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            gap: "clamp(2rem, 4vh, 3rem)",
                        }}
                    >
                    {/* Services Header */}
                    <div 
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "baseline", // Changed from flex-start to baseline for same baseline alignment
                            marginBottom: "clamp(1rem, 2vh, 2rem)",
                        }}
                    >
                        <h3 
                            style={{
                                fontFamily: 'var(--font-poppins), sans-serif',
                                fontSize: 'clamp(1rem, 2vw, 1.67rem)', // Reduced by ~33% from clamp(1.5rem, 3vw, 2.5rem)
                                fontWeight: '300',
                                letterSpacing: '0.15em',
                                color: '#737272',
                                margin: 0,
                            }}
                        >
                            SERVICES
                        </h3>
                        <span 
                            style={{
                                fontFamily: 'var(--font-poppins), sans-serif',
                                fontSize: 'clamp(0.67rem, 1.07vw, 0.93rem)', // Reduced by ~33% from clamp(1rem, 1.6vw, 1.4rem)
                                color: '#737272',
                                letterSpacing: '0.1em',
                            }}
                        >
                            {pageNumber}
                        </span>
                    </div>

                    {/* Software Stack */}
                    <div 
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "clamp(0.5rem, 1vh, 0.8rem)", // Reduced gap between features
                        }}
                    >
                        {services.map((option, index) => {
                            const isHovered = hoveredIndex === index;
                            return (
                                <button
                                    key={index}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        padding: 'clamp(0.5rem, 1vw, 0.8rem)',
                                        paddingLeft: 'clamp(1rem, 2vw, 1.5rem)',
                                        border: 'none',
                                        cursor: 'pointer',
                                        backgroundColor: "transparent",
                                        fontFamily: 'var(--font-poppins), sans-serif',
                                        transition: 'all 0.3s ease',
                                        width: '100%',
                                        position: 'relative',
                                    }}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    onClick={() => setSelected(selected === option ? null : option)}
                                >
                                    {/* Bouncy Black Ball - appears on hover */}
                                    <div
                                        style={{
                                            width: 'clamp(12px, 2.5vw, 20px)',
                                            height: 'clamp(12px, 2.5vw, 20px)',
                                            backgroundColor: '#000',
                                            borderRadius: '50%',
                                            position: 'absolute',
                                            left: 'clamp(0.5rem, 1vw, 0.8rem)',
                                            opacity: isHovered ? 1 : 0,
                                            transform: isHovered ? 'scale(1)' : 'scale(0)',
                                            transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)', // Bouncy animation
                                        }}
                                    />

                                    {/* Text */}
                                    <span
                                        style={{
                                            color: isHovered ? '#000000' : '#CED4DA', // All start as #CED4DA, turn black on hover
                                            backgroundColor: 'transparent',
                                            fontFamily: 'var(--font-poppins), sans-serif',
                                            fontSize: 'clamp(1rem, 2vw, 1.67rem)', // Reduced by ~33% from clamp(1.5rem, 3vw, 2.5rem)
                                            fontWeight: '300',
                                            letterSpacing: '0.15em',
                                            transition: 'all 0.3s ease',
                                            whiteSpace: 'nowrap',
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
                            style={{
                                fontFamily: 'var(--font-poppins), sans-serif',
                                fontSize: 'clamp(0.73rem, 1.47vw, 1.13rem)', // Reduced by ~33% from clamp(1.1rem, 2.2vw, 1.7rem)
                                lineHeight: '1.6',
                                color: '#737272', // Changed to match intro text color
                                margin: 0,
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