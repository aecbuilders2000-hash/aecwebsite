"use client";
import { useState } from 'react';
import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';

const ArchitectureServices = () => {

    const options = ["Revit", "AutoCAD", "ArchiCAD", "BIM modeling"]
    const [selected, setSelected] = useState("AutoCAD");

    return (
        <div className="bg-transparent md:px-[5%] py-24">
            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                {/* Left Column */}
                <div className="space-y-12">
                    {/* Description */}
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-md">
                        Beyond sales, our expertise extends to tiling, screed work, interior plastering, and façade construction.
                    </p>

                    {/* Bridge Image */}
                    <div className="relative group cursor-pointer">
                        <div className="overflow-hidden rounded-lg">
                            <div className="w-full h-64 md:h-80 bg-gray-800 relative transform group-hover:scale-105 transition-transform duration-700 ease-out">
                                {/* Placeholder for bridge image - replace with actual image */}
                                <Image
                                    src="/SanBridge.png"
                                    alt="Bridge"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Architectural Label */}
                    <Button text={"ARCHITECTURAL"} fontFamily={"var(--font-bruno-ace-sc), sans-serif"} />
                </div>

                {/* Right Column */}
                <div className="space-y-12">
                    {/* Services Header */}
                    <div className="flex justify-between items-start">
                        <h3 className="text-2xl md:text-3xl font-light tracking-[0.15em] text-gray-400">
                            SERVICES
                        </h3>
                        <span className="text-sm text-gray-400 tracking-wider">001/007</span>
                    </div>

                    {/* Software Stack */}
                    <div className="space-y-8">
                        {options.map((option, index) => {
                            const isSelected = selected === option; // ✅ check if THIS option is selected
                            return (
                                <button
                                    key={index}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        padding: 'clamp(0.3rem, 0.5vw, 0.6rem)',
                                        paddingLeft: 'clamp(0.6rem, 2vw, 1.5rem)',
                                        border: 'none',
                                        cursor: 'pointer',
                                        backgroundColor: "transparent",
                                        fontFamily: 'var(--font-geist-sans), sans-serif',
                                        transition: 'all 0.3s ease',
                                        gap: 'clamp(0.4rem, 1.5vw, 1rem)',
                                    }}
                                    onClick={() => setSelected(isSelected ? null : option)} // toggle selection
                                >
                                    {/* Text */}
                                    <span
                                        className="button-text"
                                        style={{
                                            color: isSelected ? '#000' : '#B9B9B9',
                                            backgroundColor: 'transparent',
                                            fontFamily: 'var(--font-geist-sans), sans-serif',
                                            fontSize: 'clamp(0.7rem, 2vw, 1.5rem)',
                                            fontWeight: '500',
                                            transition: 'color 0.3s ease',
                                            whiteSpace: 'nowrap',
                                        }}
                                    >
                                        {option}
                                    </span>

                                    {/* Circle inside the button */}
                                    <div
                                        className="arrow-circle"
                                        style={{
                                            width: 'clamp(20px, 6vw, 36px)',
                                            height: 'clamp(20px, 6vw, 36px)',
                                            backgroundColor: isSelected ? '#000' : 'transparent',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0,
                                            transition: 'all 0.3s ease',
                                            opacity: isSelected ? 1 : 0,
                                            transform: isSelected ? 'scale(1)' : 'scale(0.5)',
                                        }}
                                    >
                                        <svg
                                            className="arrow-icon"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke={isSelected ? "#fff" : "#000"}
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            style={{
                                                transform: isSelected ? 'rotate(0deg)' : 'rotate(-45deg)',
                                                transition: 'all 0.3s ease',
                                                width: 'clamp(10px, 3vw, 16px)',
                                                height: 'clamp(10px, 3vw, 16px)',
                                                opacity: isSelected ? 1 : 0,
                                            }}
                                        >
                                            <path d="M7 7h10v10" />
                                            <path d="M7 17L17 7" />
                                        </svg>
                                    </div>

                                </button>
                            )
                        })}

                    </div>

                    {/* Brand Description */}
                    <div className="pt-8">
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Your brand's compass. It defines purpose, sharpens positioning, and ensures every decision you make resonates with your audience.
                        </p>
                    </div>
                </div>
            </div>

            {/* Custom CSS for additional styling */}
            <style jsx>{`
        .tracking-wider {
          letter-spacing: 0.1em;
        }
        
        @media (max-width: 768px) {
          .tracking-wide {
            letter-spacing: 0.05em;
          }
        }
      `}</style>
        </div>
    );
};

export default ArchitectureServices;