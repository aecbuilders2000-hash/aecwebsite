import React, { useState } from 'react';
import Button from '../ui/Button';
import { countries } from '../constants/CountryList';
import ArrowButton from '../ui/ArrowButton';

const CareerForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        experience: ''
    });

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
                        CAREER WITH US!
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

                        {/* Experience Field */}
                        <div className='flex-1'>
                            <label className="block text-black text-2xl mb-4 font-bold">
                                Experience (in years):
                            </label>
                            <input
                                type="number"
                                name="experience"
                                value={formData.experience}
                                onChange={handleInputChange}
                                placeholder="Your Experience"
                                className="w-full text-black bg-transparent border-b-2 border-gray-300 pb-2 text-lg placeholder-gray-400 focus:border-black outline-none transition-colors"
                            />
                        </div>

                    </div>
                    {/* Submit Button */}
                    <div className="flex pt-4 justify-end">
                        {/* Use ArrowButton component for consistency */}
                        <ArrowButton label="Submit" style={{ top: '5vh', right: '2.5vw' }} />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CareerForm;