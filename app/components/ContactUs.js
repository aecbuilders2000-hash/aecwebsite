'use client';
import React, { useState } from 'react';
import { countries } from '../constants/CountryList';
import ArrowButton from '../ui/ArrowButton';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [selectedCountry, setSelectedCountry] = useState(
    countries.find((c) => c.value === 'IN') || countries[0]
  );
  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('Please fill in required fields (Name & Email).');
      return;
    }
    setSubmitting(true);
    try {
      // TODO: integrate API endpoint (e.g., /api/contact)
      alert('Message sent (placeholder).');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      console.error(err);
      alert('Failed to send. Please retry.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      id="contact-us-section"
      className="min-h-screen bg-gray-50 flex items-start md:items-center justify-center p-4 sm:p-8"
    >
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="mb-10 sm:mb-16">
          <h1
            className="font-bruno-ace-sc text-black font-bold tracking-widest leading-tight mb-5 text-[clamp(1.6rem,5.5vw,2.5rem)]"
            style={{ fontFamily: 'var(--font-bruno-ace-sc), sans-serif', letterSpacing: '0.3em' }}
          >
            CONTACT US!
          </h1>
          <div className="w-full h-px bg-gray-700" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Row 1: Name / Email */}
          <div className="flex flex-col md:flex-row md:items-center w-full md:justify-between gap-8 md:gap-16">
            <div className="flex-1 w-full">
              <label className="block text-black text-xl md:text-2xl mb-3 md:mb-4 font-bold">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full text-black bg-transparent border-b-2 border-gray-300 pb-2 text-base md:text-lg placeholder-gray-400 focus:border-black outline-none transition-colors"
              />
            </div>
            <div className="flex-1 w-full">
              <label className="block text-black text-xl md:text-2xl mb-3 md:mb-4 font-bold">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="w-full text-black bg-transparent border-b-2 border-gray-300 pb-2 text-base md:text-lg placeholder-gray-400 focus:border-black outline-none transition-colors"
              />
            </div>
          </div>

          {/* Row 2: Phone / Message */}
          <div className="flex flex-col md:flex-row md:items-start w-full md:justify-between gap-8 md:gap-16">
            <div className="flex-1 w-full">
              <label className="block text-black text-xl md:text-2xl mb-3 md:mb-4 font-bold">Phone:</label>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <select
                  value={selectedCountry.value}
                  onChange={(e) => {
                    const country = countries.find((c) => c.value === e.target.value);
                    setSelectedCountry(country);
                  }}
                  className="px-2 py-2 border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-black w-full sm:w-auto"
                >
                  {countries.map(
                    (country) =>
                      country?.phoneCode && (
                        <option key={country.value} value={country.value}>
                          {country.value} ({country.phoneCode})
                        </option>
                      )
                  )}
                </select>
                <div className="flex-1 flex items-center border-b-2 border-gray-300 focus-within:border-black transition-colors">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Your Phone"
                    className="flex-1 text-black bg-transparent pb-2 text-base md:text-lg placeholder-gray-400 outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 w-full">
              <label className="block text-black text-xl md:text-2xl mb-3 md:mb-4 font-bold">Message:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message ..."
                rows={3}
                className="w-full text-black bg-transparent border-b-2 border-gray-300 pb-2 text-base md:text-lg placeholder-gray-400 focus:border-black outline-none transition-colors resize-y min-h-[120px]"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-center md:justify-end pt-2">
            <button type="submit" disabled={submitting} className="relative inline-flex">
              <ArrowButton label={submitting ? 'Sending…' : 'Submit'} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;