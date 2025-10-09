"use client";
import React from 'react'
import ArrowButton from '../../../ui/ArrowButton';
import Image from 'next/image';

const SubServicesHero = () => {
    return (
        <>
            {/* Hero Section - Dark Background */}
            <section className="bg-gradient-to-br from-gray-900 to-black text-white py-16 lg:py-24 relative overflow-hidden">

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left Content */}
                        <div className="space-y-8">
                            {/* Title */}
                            <div>
                                <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight mb-4"><span className="text-gray-300">BIM Consulting Services</span>
                                </h1>
                            </div>

                            {/* Description */}
                            <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                                Redefining precision through intelligent BIM. At Collective AEC, we turn design data into dynamics, buildable realities through innovations and collaborations.
                            </p>

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

                        {/* Right Image */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
                                <Image
                                    src="https://i.postimg.cc/HnqbQ7Hs/IMG-20251009-WA0004.jpg"
                                    alt="BIM Consulting Services"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto object-contain"
                                    priority
                                    style={{
                                        filter: 'brightness(1.1) contrast(1.1)',
                                        backgroundColor: 'transparent'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* White Section - BIM Consulting Services */}
            <section className="bg-white py-8 lg:py-12">
                <div className="mx-auto px-6 lg:px-12">
                    <div className="max-w-7xl">
                        <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-bold text-gray-900 mb-8">
                            BIM Consulting Services
                        </h2>
                        <p className="text-gray-700 text-lg lg:text-xl leading-relaxed">
                            At Collective AEC, we redefine precision through intelligent BIM solutions. From establishing
                            seamless Common Data Environments to crafting customized BIM Execution Plans (BEP), our
                            approach ensures every project begins with clarity and innovation. Our expert team transforms
                            your BIM goals into built realities delivering accuracy, collaboration, and forward-thinking
                            results through advanced BIM modelling, Revit drafting, and parametric design expertise.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SubServicesHero