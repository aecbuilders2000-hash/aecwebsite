"use client"
import React, { useState } from 'react'
import CareerForm from './CareerForm'

const jobOpenings = [
    {
        id: 'junior-architect',
        position: 'Junior Architect',
        description: 'Assists in design, drafting, model creation, and documentation under supervision. Focus on learning and technical execution.',
        skills: 'AutoCAD, Revit, SketchUp, Adobe Suite',
        experience: '0-2 Years'
    },
    {
        id: 'senior-architect',
        position: 'Senior Architect',
        description: 'Leads complex projects, manages teams, handles client communication, and ensures high-level design and technical quality.',
        skills: 'Revit, AutoCAD, Rhino, Project Management Software',
        experience: '5-8+ Years'
    },
    {
        id: 'computational-designer',
        position: 'Computational Designer',
        description: 'Develops algorithms and custom tools to automate design, optimize forms, and analyze building performance.',
        skills: 'Rhino, Grasshopper, Python/C#, Revit, Ladybug Tools',
        experience: '2-5+ Years'
    },
    {
        id: 'bim-architect',
        position: 'BIM Architect',
        description: 'Specializes in BIM model maintaining, and coordinating project using Building Information Model (BIM).',
        skills: 'Revit, Navisworks, BIM 360/Collaborate Platforms',
        experience: '3-5+ Years'
    },
    {
        id: 'mep-architect',
        position: 'MEP Architect',
        description: 'Integrates and coordinates the Mechanical, Electrical, and Plumbing (MEP) systems within the architectural design.',
        skills: 'Revit MEP, AutoCAD MEP, HAP, ETAP, Navisworks',
        experience: '3-7+ Years'
    },
    {
        id: 'bim-manager',
        position: 'BIM Manager',
        description: 'Leads the firm\'s BIM strategy, sets standards, manages infrastructure, and provides training and quality control for BIM models.',
        skills: 'Revit, Navisworks, BIM 360, Dynamo, Project Management Software',
        experience: '7-10+ Years'
    },
    {
        id: '3d-visualizer',
        position: '3D Visualizer',
        description: 'Creates high-quality, photorealistic still renderings, animations, and virtual reality content from architectural models.',
        skills: '3ds Max/Blender/Cinema 4D, V-Ray/Corona/Enscape, Photoshop, Lumion/Twinmotion',
        experience: '2-5+ Years'
    }
];

const CareerPage = () => {
    const [activeTab, setActiveTab] = useState('current-openings');

    return (
        <div className='min-h-screen bg-white pt-24 pb-16'>
            <div className='max-w-7xl mx-auto px-[5%]'>
                {/* Header */}
                <h1 
                    className='font-bold text-black mb-6'
                    style={{
                        fontFamily: "var(--font-bruno-ace-sc), sans-serif",
                        fontSize: "clamp(2rem, 4vw, 3rem)",
                        letterSpacing: "0.2em"
                    }}
                >
                    CAREERS
                </h1>
                
                <p 
                    className='text-gray-600 mb-12 leading-relaxed'
                    style={{
                        fontFamily: "var(--font-poppins), sans-serif",
                        fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)",
                        maxWidth: "70ch"
                    }}
                >
                    Join our team of architects, designers, and innovators. We're looking for passionate professionals who want to shape the future of AEC industry.
                </p>

                {/* Tabs */}
                <div className='flex flex-wrap gap-3 mb-8 border-b border-gray-200'>
                    <button
                        onClick={() => setActiveTab('current-openings')}
                        className={`px-6 py-3 transition-all duration-300 ${
                            activeTab === 'current-openings'
                                ? 'border-b-2 border-black text-black'
                                : 'text-gray-500 hover:text-black'
                        }`}
                        style={{
                            fontFamily: "var(--font-bruno-ace-sc), sans-serif",
                            fontSize: "clamp(0.9rem, 1.2vw, 1rem)",
                            letterSpacing: "0.1em"
                        }}
                    >
                        CURRENT OPENINGS
                    </button>
                    {jobOpenings.map((job) => (
                        <button
                            key={job.id}
                            onClick={() => setActiveTab(job.id)}
                            className={`px-6 py-3 transition-all duration-300 ${
                                activeTab === job.id
                                    ? 'border-b-2 border-black text-black'
                                    : 'text-gray-500 hover:text-black'
                            }`}
                            style={{
                                fontFamily: "var(--font-poppins), sans-serif",
                                fontSize: "clamp(0.85rem, 1vw, 0.95rem)"
                            }}
                        >
                            {job.position}
                        </button>
                    ))}
                </div>

                {/* Content */}
                {activeTab === 'current-openings' ? (
                    <div className='space-y-6'>
                        {jobOpenings.map((job) => (
                            <div
                                key={job.id}
                                className='border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer'
                                onClick={() => setActiveTab(job.id)}
                            >
                                <h3
                                    className='font-bold text-black mb-3'
                                    style={{
                                        fontFamily: "var(--font-bruno-ace-sc), sans-serif",
                                        fontSize: "clamp(1.2rem, 1.8vw, 1.5rem)",
                                        letterSpacing: "0.1em"
                                    }}
                                >
                                    {job.position}
                                </h3>
                                <p
                                    className='text-gray-700 mb-4 leading-relaxed'
                                    style={{
                                        fontFamily: "var(--font-poppins), sans-serif",
                                        fontSize: "clamp(0.9rem, 1vw, 1rem)"
                                    }}
                                >
                                    {job.description}
                                </p>
                                <div className='flex flex-wrap gap-4 text-sm'>
                                    <div>
                                        <span
                                            className='font-semibold text-gray-600'
                                            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                                        >
                                            Experience:
                                        </span>{' '}
                                        <span
                                            className='text-gray-800'
                                            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                                        >
                                            {job.experience}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className='border border-gray-200 rounded-lg p-8'>
                        {jobOpenings.find(job => job.id === activeTab) && (
                            <>
                                <h2
                                    className='font-bold text-black mb-6'
                                    style={{
                                        fontFamily: "var(--font-bruno-ace-sc), sans-serif",
                                        fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                                        letterSpacing: "0.15em"
                                    }}
                                >
                                    {jobOpenings.find(job => job.id === activeTab).position}
                                </h2>
                                
                                <div className='mb-6'>
                                    <h3
                                        className='font-semibold text-black mb-3'
                                        style={{
                                            fontFamily: "var(--font-poppins), sans-serif",
                                            fontSize: "clamp(1.1rem, 1.4vw, 1.25rem)"
                                        }}
                                    >
                                        Description Summary
                                    </h3>
                                    <p
                                        className='text-gray-700 leading-relaxed'
                                        style={{
                                            fontFamily: "var(--font-poppins), sans-serif",
                                            fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)"
                                        }}
                                    >
                                        {jobOpenings.find(job => job.id === activeTab).description}
                                    </p>
                                </div>

                                <div className='mb-6'>
                                    <h3
                                        className='font-semibold text-black mb-3'
                                        style={{
                                            fontFamily: "var(--font-poppins), sans-serif",
                                            fontSize: "clamp(1.1rem, 1.4vw, 1.25rem)"
                                        }}
                                    >
                                        Key Software Skills
                                    </h3>
                                    <p
                                        className='text-gray-700 leading-relaxed'
                                        style={{
                                            fontFamily: "var(--font-poppins), sans-serif",
                                            fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)"
                                        }}
                                    >
                                        {jobOpenings.find(job => job.id === activeTab).skills}
                                    </p>
                                </div>

                                <div className='mb-8'>
                                    <h3
                                        className='font-semibold text-black mb-3'
                                        style={{
                                            fontFamily: "var(--font-poppins), sans-serif",
                                            fontSize: "clamp(1.1rem, 1.4vw, 1.25rem)"
                                        }}
                                    >
                                        Years of Experience
                                    </h3>
                                    <p
                                        className='text-gray-700 leading-relaxed'
                                        style={{
                                            fontFamily: "var(--font-poppins), sans-serif",
                                            fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)"
                                        }}
                                    >
                                        {jobOpenings.find(job => job.id === activeTab).experience}
                                    </p>
                                </div>

                                <div className='pt-6 border-t border-gray-200'>
                                    <h3
                                        className='font-semibold text-black mb-4'
                                        style={{
                                            fontFamily: "var(--font-poppins), sans-serif",
                                            fontSize: "clamp(1.1rem, 1.4vw, 1.25rem)"
                                        }}
                                    >
                                        Apply for this position
                                    </h3>
                                    <CareerForm position={jobOpenings.find(job => job.id === activeTab).position} />
                                </div>
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default CareerPage