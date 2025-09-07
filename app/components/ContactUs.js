import React, { useState } from 'react';
import Button from '../ui/Button';
import { countries } from '../constants/CountryList';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const services = ["Revit", "AutoCAD", "ArchiCAD", "BIM modeling"];

    // index 1 selected by default
    const [selected, setSelected] = useState(services[1]);
    const [hoveredIndex, setHoveredIndex] = useState(1);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const [selectedCountry, setSelectedCountry] = useState(
        countries.find((c) => c.value === "IN") || countries[0] // Default India
    );

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        // Handle form submission here
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
            <div className="w-full max-w-6xl">
                {/* Header */}
                <div className="mb-16">
                    <h1 className="font-bruno-ace-sc text-black font-bold tracking-widest leading-tight mb-5"
                        style={{
                            fontFamily: 'var(--font-bruno-ace-sc), sans-serif',
                            fontSize: 'clamp(1.28rem, 2.7vw, 2.5rem)', // Reduced by ~33% from clamp(1.92rem, 4vw, 3.2rem)
                            letterSpacing: '0.3em', // 30% character spacing
                        }}
                    >
                        CONTACT US!
                    </h1>
                    <div className="w-full h-px bg-gray-700"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-rows-2 gap-16">
                    {/* Left Side - Contact Form */}
                    <div className="flex items-center w-full justify-between gap-16">
                        {/* Name Field */}
                        <div className='flex-1'>
                            <label className="block text-black text-2xl mb-4 font-bold">
                                Name:
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Your Name"
                                className="w-full text-black bg-transparent border-b-2 border-gray-300 pb-2 text-lg placeholder-gray-400 focus:border-black outline-none transition-colors"
                            />
                        </div>
                        {/* Email Field */}
                        <div className='flex-1'>
                            <label className="block text-black text-2xl mb-4 font-bold">
                                Email:
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Your Email"
                                className="w-full text-black bg-transparent border-b-2 border-gray-300 pb-2 text-lg placeholder-gray-400 focus:border-black outline-none transition-colors"
                            />
                        </div>
                    </div>

                    <div className="flex items-center w-full justify-between gap-16">

                        {/* Phone Field */}
                        <div className='flex-1'>
                            <label className="block text-black text-2xl mb-4 font-bold">Phone:</label>
                            <div className="flex items-center space-x-3">
                                {/* Country Dropdown */}
                                <select
                                    value={selectedCountry.value}
                                    onChange={(e) => {
                                        const country = countries.find((c) => c.value === e.target.value);
                                        setSelectedCountry(country);
                                    }}
                                    className="px-1 py-2 border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
                                >
                                    {countries.map((country) =>
                                        country?.phoneCode && (
                                            <option key={country.value} value={country.value}>
                                                {country.value} ({country.phoneCode})
                                            </option>
                                        )
                                    )}
                                </select>

                                {/* Phone Input */}
                                <div className="flex-1 flex items-center border-b-2 border-gray-300 focus-within:border-black transition-colors">
                                    {/* <span className="mr-2 text-black">{selectedCountry.phoneCode}</span> */}
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="Your Phone"
                                        className="flex-1 text-black bg-transparent pb-2 text-lg placeholder-gray-400 outline-none"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Message Field */}
                        <div className='flex-1'>
                            <label className="block text-black text-2xl mb-4 font-bold">
                                Message:
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="Your Message ..."
                                rows={1}
                                className="w-full text-black bg-transparent border-b-2 border-gray-300 pb-2 text-lg placeholder-gray-400 focus:border-black outline-none transition-colors resize-none"
                            />
                        </div>

                    </div>
                    {/* Submit Button */}
                    <div className="flex pt-4 justify-end">
                        <button
                            className="flex items-center justify-between bg-white border-none rounded-full cursor-pointer font-century-gothic transition-all duration-300 ease-in-out shadow-lg"
                            style={{
                                fontFamily: 'var(--font-century-gothic), Century Gothic, sans-serif',
                                top: '5vh', // Changed from 3vh to 5vh
                                right: '2.5vw', // Changed from 3vw to 2.5vw
                                zIndex: 1001,
                                padding: 'clamp(0.3rem, 1vw, 0.6rem)',
                                paddingLeft: 'clamp(0.6rem, 2vw, 1.5rem)',
                                gap: 'clamp(0.4rem, 1.5vw, 1rem)',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#000';
                                const textSpan = e.target.querySelector('.button-text');
                                const circle = e.target.querySelector('.arrow-circle');
                                const arrow = e.target.querySelector('.arrow-icon');

                                if (textSpan) {
                                    textSpan.style.color = '#fff';
                                    textSpan.style.backgroundColor = 'transparent';
                                }
                                if (circle) circle.style.backgroundColor = '#fff';
                                if (arrow) {
                                    arrow.style.stroke = '#000';
                                    arrow.style.transform = 'rotate(0deg)'; // Right arrow on hover
                                }
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = '#fff';
                                const textSpan = e.target.querySelector('.button-text');
                                const circle = e.target.querySelector('.arrow-circle');
                                const arrow = e.target.querySelector('.arrow-icon');

                                if (textSpan) textSpan.style.color = '#000';
                                if (circle) {
                                    circle.style.backgroundColor = '#000';
                                }
                                if (arrow) {
                                    arrow.style.stroke = '#fff';
                                    arrow.style.backgroundColor = "transparent";
                                    arrow.style.transform = 'rotate(-45deg)'; // Top-right arrow initially
                                }
                            }}
                        >
                            {/* Text */}
                            <span
                                className="button-text bg-transparent text-black whitespace-nowrap transition-colors duration-300 ease-in-out font-bold"
                                style={{
                                    fontSize: 'clamp(0.7rem, 1.8vw, 0.95rem)',
                                }}
                            >
                                Submit
                            </span>

                            {/* Circle inside the button */}
                            <div
                                className="arrow-circle bg-black rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ease-in-out"
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
            </div>
        </div >
    );
};

export default ContactForm;