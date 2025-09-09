import React from 'react'
import {
    FaInstagram, FaLinkedin, FaFacebookF, FaTwitter, FaYoutube
} from 'react-icons/fa'; // Example for FontAwesome icons
import ArrowButton from '../ui/ArrowButton';

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
                    <ArrowButton label="Let's Collaborate" />
                </div>
            </div>
            {/* Address moved here so it appears on the right side under the button */}
            <div className='mt-8 mr-11 text-medium text-gray-300 flex flex-col items-end text-right text-wrap'>
                <p className='m-0 w-96 text-wrap'>144 Avadh Viceroy, Sarthana Jakat Naka, Varachha, Surat, Gujarat 395010</p>
                <p className='m-0 w-96'>+91 910 687 8832</p>
                <p className='m-0 w-96'>info@collectiveaec.com</p>
            </div>

            <div className='flex items-center flex-col md:flex-row justify-between max-w-7xl mx-auto mt-4'>
                <div className='text-4xl text-left' style={{
                    fontFamily: "var(--font-bruno-ace-sc), sans-serif",
                    fontSize: "clamp(1.5rem, 3.5vw, 2rem)",
                    letterSpacing: "0.3em",
                    lineHeight: "1.2",
                }}>
                    DESIGN MORE
                    <br />
                    MANAGE LESS
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