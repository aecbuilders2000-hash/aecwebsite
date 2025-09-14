'use client';

import React, { useRef, useEffect } from 'react'
import {
    FaInstagram, FaLinkedin, FaFacebookF, FaYoutube,
    FaWhatsapp
} from 'react-icons/fa';
import ArrowButton from '../ui/ArrowButton';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const socialMedia = [
    {
        icon: <FaInstagram size="20" />,
        link: 'https://www.instagram.com/collective_aec',
    },
    {
        icon: <FaWhatsapp size="20" />,
        link: 'https://api.whatsapp.com/send/?phone=919106878832&text&type=phone_number&app_absent=0',
    },
    {
        icon: <FaLinkedin size="20" />,
        link: 'https://www.linkedin.com/company/collective-aec/',
    },
    {
        icon: <FaYoutube size="20" />,
        link: 'https://www.youtube.com/@CollectiveAEC',
    }
];

const Footer = () => {
    const footerRef = useRef(null);
    const scrollContainerRef = useRef(null);
    const serviceLinks = [
        { label: 'BIM Services', slug: 'bim-services' },
        { label: 'MEP Design', slug: 'mep-services' },
        { label: 'Architectural Design', slug: 'architectural-design' },
        { label: 'Structural Design', slug: 'structural-design' },
        { label: '3D Visualization', slug: '3d-visualization' },
        { label: 'Project Management', slug: 'project-management' },
    ];

    const expertise = [
        'Architecture',
        'Master Planning',
        'Engineering',
        'Project Management',
        'Site Supervision',
        'Interior Design',
    ];

    const projectTypes = [
        'Residential',
        'Commercial',
        'Mixed Use',
        'Healthcare',
        'Interiors',
        'Industrial'
    ];

    const goService = (slug) => {
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('go-to-service', { detail: { slug } }));
            const servicesSection = document.getElementById('services-section') || document.getElementById('services-overview-section');
            if (servicesSection) {
                const top = servicesSection.getBoundingClientRect().top + window.scrollY - 40;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        }
    };

    // Horizontal scroll pin effect
    useEffect(() => {
        const footer = footerRef.current;
        const scrollContainer = scrollContainerRef.current;

        if (!footer || !scrollContainer) return;

        // Calculate total width of scrollable content
        const totalWidth = scrollContainer.scrollWidth;
        const containerWidth = scrollContainer.offsetWidth;
        const scrollDistance = totalWidth - containerWidth;

        // Only apply horizontal scroll if content is wider than container
        if (scrollDistance > 0) {
            const scrollTrigger = ScrollTrigger.create({
                trigger: footer,
                start: "top bottom",
                end: `+=${scrollDistance}`,
                scrub: 1,
                pin: true,
                anticipatePin: 1,
                onUpdate: (self) => {
                    const progress = self.progress;
                    gsap.set(scrollContainer, {
                        x: -scrollDistance * progress
                    });
                }
            });

            return () => {
                scrollTrigger.kill();
            };
        }
    }, []);

    return (
        <footer className='text-white bg-black pt-12 pb-8 px-[5%] border-t border-neutral-800'>
            <div className='flex flex-col md:flex-row items-center justify-between mx-auto gap-6'>
                <h2
                    className='font-bold'
                    style={{
                        fontFamily: "var(--font-bruno-ace-sc), sans-serif",
                        fontSize: "clamp(1.28rem, 2.7vw, 2rem)",
                        letterSpacing: "0.3em",
                    }}
                >
                    COLLECTIVE
                </h2>

                <div className="flex py-1 justify-end items-end gap-4">
                    <ArrowButton
                        label="Let's Collaborate"
                        onClick={() => {
                            const contactSection = document.getElementById('contact-us-section');
                            if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                            else window.location.href = '/#contact-us-section';
                        }}
                    />
                </div>
            </div>

            <div className='w-full mt-8 flex flex-col md:flex-row justify-between gap-8'>
                <div className='flex flex-col gap-8 w-full md:w-2/5'>
                    <div
                        style={{
                            fontFamily: "var(--font-bruno-ace-sc), sans-serif",
                            fontSize: "clamp(1.2rem, 1.8vw, 1.6rem)",
                            letterSpacing: "0.3em",
                            lineHeight: "1.15",
                        }}
                        className='tracking-wide w-full'
                    >
                        DESIGN MORE<br />MANAGE LESS
                    </div>
                    <div className='mt-6 text-sm text-gray-300 flex flex-col'>
                        <p className='m-0'>144 Avadh Viceroy, Sarthana Jakat Naka,</p>
                        <p className='m-0'>Varachha, Surat, Gujarat 395010</p>
                        <p className='mt-5'>Phone: +91 910 687 8832</p>
                        <p className='m-0'>Email: info@collectiveaec.com</p>
                    </div>
                </div>
                <div className='w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-16'>
                    <div className='flex flex-col'>
                        <h3 className='text-sm tracking-[0.25em] text-gray-400 mb-4 uppercase'>Expertise</h3>
                        <ul className='space-y-2 text-sm flex-1'>
                            {expertise.map(item => (
                                <li key={item} className='text-gray-300 hover:text-white transition-colors cursor-pointer'>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className='flex flex-col'>
                        <h3 className='text-sm tracking-[0.25em] text-gray-400 mb-4 uppercase'>Services</h3>
                        <ul className='space-y-2 text-sm flex-1'>
                            {serviceLinks.map(s => (
                                <li
                                    key={s.slug}
                                    onClick={() => goService(s.slug)}
                                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goService(s.slug); } }}
                                    tabIndex={0}
                                    role='link'
                                    aria-label={`Jump to ${s.label}`}
                                    className='text-gray-300 hover:text-white transition-colors cursor-pointer focus:outline-none focus:text-white'
                                >
                                    {s.label}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='flex flex-col'>
                        <h3 className='text-sm tracking-[0.25em] text-gray-400 mb-4 uppercase'>Projects</h3>
                        <ul className='space-y-2 text-sm flex-1'>
                            {projectTypes.map(p => (
                                <li
                                    key={p}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const projectsSection = document.getElementById('projects-section');
                                        if (projectsSection) projectsSection.scrollIntoView({ behavior: 'smooth' });
                                        else window.location.href = '/#projects-section';
                                    }}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            const projectsSection = document.getElementById('projects-section');
                                            if (projectsSection) projectsSection.scrollIntoView({ behavior: 'smooth' });
                                            else window.location.href = '/#projects-section';
                                        }
                                    }}
                                    tabIndex={0}
                                    role='link'
                                    aria-label={`Jump to ${p} projects`}
                                    className='text-gray-300 hover:text-white transition-colors cursor-pointer focus:outline-none focus:text-white'
                                >
                                    {p}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className='mt-2 pt-3 border-t border-neutral-800 flex flex-col-reverse gap-2 md:flex-row items-center justify-between text-xs tracking-widest text-gray-500'>
                <p className='m-0'>&copy; 2025 Collective AEC. All rights reserved.</p>
                <div>
                    <h4 className='text-xs text-center tracking-[0.25em] text-gray-400 mb-2 uppercase'>Follow Us</h4>
                    <div className='flex space-x-4 items-center justify-center text-xl'>
                        {socialMedia.map((social, index) => (
                            <button
                                key={index}
                                onClick={() => window.open(social.link, '_blank', 'noopener,noreferrer')}
                                className='text-gray-400 hover:text-white hover:scale-125 transition-colors cursor-pointer focus:outline-none focus:text-white'
                            >
                                {social.icon}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer