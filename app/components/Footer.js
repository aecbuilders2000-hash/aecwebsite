'use client';

import React from 'react'
import {
    FaInstagram, FaLinkedin, FaFacebookF, FaYoutube
} from 'react-icons/fa';
import ArrowButton from '../ui/ArrowButton';

const Footer = () => {
    const serviceLinks = [
        { label: 'BIM Services', slug: 'bim-services' },
        { label: 'MEP Design', slug: 'mep-services' },
        { label: 'Architectural Design', slug: 'architectural-design' },
        { label: 'Structural Design', slug: 'structural-design' },
        { label: '3D Visualization', slug: '3d-visualization' },
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
        'Interiors'
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
                    <div>
                        <h3 className='text-sm tracking-[0.25em] text-gray-400 mb-4 uppercase'>Expertise</h3>
                        <ul className='space-y-2 text-sm'>
                            {expertise.map(item => (
                                <li key={item} className='text-gray-300 hover:text-white transition-colors cursor-pointer'>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className='text-sm tracking-[0.25em] text-gray-400 mb-4 uppercase'>Services</h3>
                        <ul className='space-y-2 text-sm'>
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

                    <div>
                        <h3 className='text-sm tracking-[0.25em] text-gray-400 mb-4 uppercase'>Projects</h3>
                        <ul className='space-y-2 text-sm'>
                            {projectTypes.map(p => (
                                <li key={p} className='text-gray-300 hover:text-white transition-colors cursor-pointer'>{p}</li>
                            ))}
                        </ul>

                    </div>
                </div>
            </div>

            <div className='mt-2 pt-3 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between text-xs tracking-widest text-gray-500'>
                <p className='m-0'>&copy; 2025 Collective AEC. All rights reserved.</p>
                <div>
                    <h4 className='text-xs text-center tracking-[0.25em] text-gray-400 mb-2 uppercase'>Follow Us</h4>
                    <div className='flex space-x-4 text-xl'>
                        <FaInstagram className='cursor-pointer hover:text-white text-gray-400 transition-colors' />
                        <FaLinkedin className='cursor-pointer hover:text-white text-gray-400 transition-colors' />
                        <FaFacebookF className='cursor-pointer hover:text-white text-gray-400 transition-colors' />
                        <FaYoutube className='cursor-pointer hover:text-white text-gray-400 transition-colors' />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer