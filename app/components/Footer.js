import React from 'react'
import {
    FaInstagram, FaLinkedin, FaFacebookF, FaTwitter, FaYoutube
} from 'react-icons/fa'; // Example for FontAwesome icons

const Footer = () => {
    return (
        <div className='text-white bg-black p-6 pl-[5%] pr-[5%]'>
            <div className='flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto'>
                <h2 className='text-2xl font-bold mb-4'
                    style={{
                        fontFamily: "var(--font-bruno-ace-sc), sans-serif",
                        fontSize: "clamp(1.28rem, 2.7vw, 2rem)",
                        letterSpacing: "0.3em",
                    }}>
                    COLLECTIVE
                </h2>

                <div className="flex pt-1 justify-end items-end gap-4">
                    <button
                        className="flex items-center justify-between bg-white border-none rounded-full cursor-pointer font-century-gothic transition-all duration-300 ease-in-out shadow-lg"
                        style={{
                            fontFamily: 'var(--font-century-gothic), Century Gothic, sans-serif',
                            zIndex: 1001,
                            padding: 'clamp(0.3rem, 1vw, 0.6rem)',
                            paddingLeft: 'clamp(0.6rem, 2vw, 1.5rem)',
                            gap: 'clamp(0.4rem, 1.5vw, 1rem)',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                        }}
                    >
                        {/* Text */}
                        <span
                            className="button-text bg-transparent text-black whitespace-nowrap transition-colors duration-300 ease-in-out font-bold"
                            style={{
                                fontSize: 'clamp(0.7rem, 1.8vw, 0.95rem)',
                            }}
                        >
                            Let&apos; Collaborate
                        </span>

                        {/* Circle inside the button */}
                        <div
                            className="arrow-circle bg-black rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ease-in-out rotate-45"
                            style={{
                                width: 'clamp(20px, 6vw, 36px)',
                                height: 'clamp(20px, 6vw, 36px)',
                            }}
                        >
                            <svg
                                className="arrow-icon stroke-white transition-all duration-300 ease-in-out"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                style={{
                                    transform: 'rotate(-45deg)', // Top-right diagonal initially
                                    width: 'clamp(10px, 3vw, 16px)',
                                    height: 'clamp(10px, 3vw, 16px)',
                                }}
                            >
                                <path d="M7 7h10v10" />
                                <path d="M7 17L17 7" />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
            {/* Address moved here so it appears on the right side under the button */}
            <div className='mt-8 text-medium text-gray-300 flex flex-col items-end text-right text-wrap'>
                <p className='m-0 w-96 text-wrap'>144 Avadh Viceroy, Sarthana Jakat Naka, Varachha, Surat, Gujarat 395010</p>
                <p className='m-0 w-96'>+91 910 687 8832</p>
                <p className='m-0 w-96'>info@collectiveaec.com</p>
            </div>

            <div className='flex items-center flex-col md:flex-row justify-between max-w-7xl mx-auto mt-4'>
                <div className='text-4xl text-center' style={{
                    fontFamily: "var(--font-bruno-ace-sc), sans-serif",
                    fontSize: "clamp(1.5rem, 3.5vw, 2rem)",
                    letterSpacing: "0.3em",
                    lineHeight: "1.2",
                }}>
                    MANAGE LESS
                    <br />
                    DESIGN MORE
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h2 className='text-2xl font-bold mb-4'>
                        Follow Us On
                    </h2>
                    <div className='flex space-x-4 text-3xl'>
                        <FaInstagram className='cursor-pointer' />
                        <FaLinkedin className='cursor-pointer' />
                        <FaFacebookF className='cursor-pointer' />
                        <FaYoutube className='cursor-pointer' />
                    </div>
                </div>
            </div>

            <p className='mt-8 text-center text-gray-400 text-sm'>
                &copy; 2016-2025 COLLECTIVE AEC PVT. LTD. CIN U74999GJ2016PTC092222
            </p>
        </div>
    )
}

export default Footer