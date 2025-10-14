"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const services = [
    {
        id: 1,
        title: "BIM Services",
        subtitle: "& Consulting",
        image: "https://i.postimg.cc/pLRdCNV7/BIMService.png",
        description: "Advanced Building Information Modeling solutions",
        position: "bottom"
    },
    {
        id: 2,
        title: "MEP Services",
        subtitle: "& Coordination",
        image: "https://i.postimg.cc/sxmY2YTD/MEPService.png",
        description: "Mechanical, Electrical, and Plumbing system design",
        position: "bottom"
    },
    {
        id: 3,
        title: "Architectural",
        subtitle: "Design Services",
        image: "/Architecture Service.png",
        description: "Complete architectural design from concept to construction",
        position: "bottom"
    },
    {
        id: 4,
        title: "Structural",
        subtitle: "Engineering",
        image: "/Structure Service.png",
        description: "Advanced structural analysis and engineering solutions",
        position: "bottom"
    },
    {
        id: 5,
        title: "3D Visualization",
        subtitle: "& Rendering",
        image: "https://i.postimg.cc/8CnPTjdQ/3d-Visualiser.png",
        description: "Photorealistic visualizations and architectural renderings",
        position: "bottom"
    },

];

const SquareCard = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const textRef = useRef(null);
    const topCardsRef = useRef([]);
    const bottomCardsRef = useRef([]);

    // Split services into top and bottom arrays
    const topServices = services.filter(service => service.position === "top");
    const bottomServices = services.filter(service => service.position === "bottom");

    // mobile tap-to-toggle state
    const [activeMobile, setActiveMobile] = useState(null);
    const activeTimeout = useRef(null);

    const mobileCardClick = (index) => {
        if (activeMobile === index) {
            setActiveMobile(null);
            if (activeTimeout.current) {
                clearTimeout(activeTimeout.current);
                activeTimeout.current = null;
            }
            // perform original click action
            handleServiceClick(index);
        } else {
            setActiveMobile(index);
            if (activeTimeout.current) clearTimeout(activeTimeout.current);
            activeTimeout.current = setTimeout(() => setActiveMobile(null), 3000);
        }
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial setup - softer initial states for seamless reveal
            gsap.set(textRef.current, {
                opacity: 0,
                y: 20
            });

            gsap.set(topCardsRef.current, {
                opacity: 0,
                y: 15,
                scale: 0.98
            });

            gsap.set(bottomCardsRef.current, {
                opacity: 0,
                y: 15,
                scale: 0.98
            });

            // Set up letter reveal animation
            const titleLetters = titleRef.current?.querySelectorAll('.letter');
            if (titleLetters) {
                gsap.set(titleLetters, {
                    rotationX: -90,
                    transformOrigin: "50% 100%",
                    opacity: 0
                });
            }

            // Main timeline with improved sequencing
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            });

            // Animate title letters first
            if (titleLetters) {
                tl.to(titleLetters, {
                    rotationX: 0,
                    opacity: 1,
                    duration: 0.4, // Reduced from 0.6 to 0.4
                    stagger: 0.03, // Reduced from 0.05 to 0.03 for faster reveal
                    ease: "back.out(1.7)"
                });
            }

            // Then animate text
            tl.to(textRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.4, // Reduced from 0.6 to 0.4
                ease: "power2.out"
            }, "-=0.3") // Increased overlap from -=0.4 to -=0.3
                // Then animate all 7 service cards as a unified group
                .to([...topCardsRef.current, ...bottomCardsRef.current], {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.4, // Reduced from 1 to 0.4 (60% faster)
                    stagger: {
                        amount: 0.15, // Reduced from 0.4 to 0.15 (62.5% faster)
                        from: "start",
                        ease: "power2.inOut"
                    },
                    ease: "back.out(1.4)" // Changed to back.out for snappier feel
                }, "-=0.1"); // Reduced overlap from -=0.2 to -=0.1

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Simple function to handle navigation to services section
    // If on homepage, scroll to the same vh positions used by OurSevices
    // If not on homepage, navigate to a hash like /#services-card-N so OurSevices can handle it on mount
    const handleServiceClick = (index = 0) => {
        // vh mapping copied from OurSevices
        const cardVhPositions = [400, 500, 600, 720, 850];

        if (typeof window !== 'undefined' && window.location.pathname === '/') {
            const targetVh = cardVhPositions[index] || 500;
            const y = window.innerHeight * (targetVh / 100);
            window.scrollTo({ top: y, behavior: 'smooth' });
            return;
        }

        // Store desired index in sessionStorage so the homepage can read it and scroll.
        try {
            sessionStorage.setItem('servicesScrollTo', String(index));
        } catch (e) {
            // sessionStorage may be unavailable in some environments; ignore errors
        }
        // Navigate to the homepage (no hash so URL stays clean)
        window.location.href = '/';
    };

    return (
        < section
            id="services-overview-section"
            ref={sectionRef}
            className="relative bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 overflow-hidden"
            style={{
                width: "100vw",
                paddingLeft: "2.5vw",
                paddingRight: "2.5vw"
            }}
        >
            {/* Mobile: stacked horizontal cards (one per row) - now start black and invert on hover like desktop */}
            < div className="w-full md:hidden flex flex-col" style={{ gap: 'clamp(0.25rem, 1vw, 0.8rem)', height: '75vh' }}>
                {
                    bottomServices.map((service, index) => (
                        <div key={service.id} className="group relative w-full flex items-stretch text-center rounded-2xl overflow-hidden shadow-md" style={{ minHeight: '13vh' }} onClick={() => mobileCardClick(index)}>
                            {/* Black overlay with white text, inverts on hover or when activeMobile === index */}
                            <div className={`absolute inset-0 bg-black backdrop-blur-sm transition-all duration-500 flex flex-col justify-center items-center p-4 ${activeMobile === index ? 'invert' : 'group-hover:invert'}`}>
                                <h3 className="font-bruno font-bruno-ace-sc font-bold text-white" style={{ fontSize: 'clamp(1rem, 2.6vw, 1.25rem)', lineHeight: 1.1, fontFamily: 'var(--font-bruno-ace-sc), sans-serif' }}>{service.title}</h3>
                                <p className="font-poppins text-white mt-2" style={{ fontSize: 'clamp(0.85rem, 1.8vw, 1rem)' }}>{service.subtitle}</p>
                                <p className="font-poppins text-white mt-2 leading-relaxed" style={{ fontSize: 'clamp(0.8rem, 1.7vw, 0.95rem)' }}>{service.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div >

            {/* Bottom: 5 Service Cards (desktop) */}
            < div className="hidden md:flex items-end justify-start w-full" style={{ paddingBottom: "2vh", height: "40vh", gap: 'clamp(0.5rem, 1.5vw, 1.5rem)' }}>
                {
                    bottomServices.map((service, index) => (
                        <div
                            key={service.id}
                            ref={el => bottomCardsRef.current[index] = el}
                            className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-200/50"
                            style={{
                                height: "clamp(25vh, 35vh, 40vh)",
                                width: "17.5vw",
                                minHeight: "25vh",
                                maxHeight: "40vh",
                                flexShrink: 0,
                                flexGrow: 0
                            }}
                            onClick={() => handleServiceClick(index)}
                        >
                            <div className="relative h-full overflow-hidden">
                                {/* <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                /> */}
                                {/* Curtain reveal text overlay */}
                                <div className="absolute inset-0 bg-black group-hover:invert backdrop-blur-sm transition-all duration-500 flex flex-col justify-center items-center p-6">
                                    <h3 className="font-bruno font-bruno-ace-sc font-bold text-white text-center mb-4"
                                        style={{
                                            fontFamily: 'var(--font-bruno-ace-sc), sans-serif',
                                            fontSize: 'clamp(1.2rem, 1.8vw, 1.5rem)'
                                        }}>
                                        {service.title}
                                    </h3>
                                    <p className="font-poppins text-white text-sm text-center mb-3" style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
                                        {service.subtitle}
                                    </p>
                                    <p className="font-poppins text-white text-xs text-center leading-relaxed" style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div >
        </section>
    )
}

export default SquareCard;