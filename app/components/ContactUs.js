'use client';
import React, { useState, useMemo, useEffect } from 'react';
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
  const [status, setStatus] = useState({ type: '', message: '' }); // type: 'success' | 'error'
  const [cooldownRemaining, setCooldownRemaining] = useState(0); // seconds
  // Cooldown countdown effect
  useEffect(() => {
    if (cooldownRemaining <= 0) return;
    const t = setInterval(() => {
      setCooldownRemaining((s) => (s > 1 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(t);
  }, [cooldownRemaining]);


  // E.164: max 15 digits total including country code (without +)
  // We'll derive country dial code length from countries list (phoneCode).
  const selectedDialCodeDigits = useMemo(() => {
    if (!selectedCountry?.phoneCode) return 0;
    return selectedCountry.phoneCode.replace(/[^0-9]/g, '').length; // e.g. '+91' -> 2
  }, [selectedCountry]);

  const maxTotalDigits = 15; // E.164 global cap
  const maxLocalDigits = Math.max(0, maxTotalDigits - selectedDialCodeDigits);
  const minLocalDigits = 6; // Reasonable lower bound for meaningful numbers (varies by country)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      // Keep digits only
      let digits = value.replace(/[^0-9]/g, '');
      if (digits.length > maxLocalDigits) digits = digits.slice(0, maxLocalDigits);
      setFormData((prev) => ({ ...prev, phone: digits }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setStatus({
        type: 'error',
        message: 'Please provide both your name and a valid email address before submitting.'
      });
      return;
    }
    // Optional phone validation: if provided, ensure length constraints.
    if (formData.phone) {
      if (formData.phone.length < minLocalDigits) {
        setStatus({
          type: 'error',
          message: `Phone number is too short. It should have at least ${minLocalDigits} digits (excluding country code).`
        });
        return;
      }
      if (formData.phone.length > maxLocalDigits) {
        setStatus({
          type: 'error',
          message: 'Phone number is too long for the selected country.'
        });
        return;
      }
    }
    setSubmitting(true);
    setStatus({ type: '', message: '' });
    
    try {
      // Get Google Script URL from environment variable
      const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_CONTACT_GOOGLE_SCRIPT_URL;
      
      if (!GOOGLE_SCRIPT_URL) {
        throw new Error('Google Script URL not configured');
      }
      
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone ? `${formData.phone}` : '',
        country: selectedCountry.label,
        message: formData.message
      };

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        mode: 'no-cors' // Required for Google Apps Script
      });

      console.log('Form submission response:', response);
      // Since we're using no-cors mode, we can't read the response
      // So we assume success if no error was thrown
      setStatus({
        type: 'success',
        message: '🎉 Thank you for reaching out! Your message has been successfully submitted. Our team will review your inquiry and get back to you within 24-48 hours. We appreciate your interest in Collective AEC!'
      });
      setCooldownRemaining(10); // start 10s cooldown only on success
      setFormData({ name: '', email: '', phone: '', message: '' });
      
    } catch (err) {
      console.error('Form submission error:', err);
      setStatus({
        type: 'error',
        message: 'We were unable to send your message just now. Please try again in a moment or email us directly.'
      });
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

        <form onSubmit={handleSubmit} className="space-y-12 text-black" noValidate>
          {status.message && (
            <div
              className={`rounded-md border px-4 py-3 text-sm md:text-base font-medium tracking-normal transition-colors ${
                status.type === 'success'
                  ? 'bg-green-50 border-green-300 text-green-800'
                  : status.type === 'error'
                  ? 'bg-red-50 border-red-300 text-red-800'
                  : 'hidden'
              }`}
              role={status.type === 'error' ? 'alert' : 'status'}
              aria-live="polite"
            >
              {status.message}
            </div>
          )}
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
                    if (country) {
                      setSelectedCountry(country);
                      // Re-trim phone to new max for new country
                      setFormData((prev) => {
                        const digits = prev.phone.slice(0, Math.max(0, 15 - (country.phoneCode || '+').replace(/[^0-9]/g, '').length));
                        return { ...prev, phone: digits };
                      });
                    }
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
                    inputMode="numeric"
                    aria-describedby="phone-help"
                  />
                </div>
              </div>
              <p id="phone-help" className="mt-2 text-xs md:text-sm text-gray-600 tracking-wide">
                {formData.phone
                  ? `${formData.phone.length}/${maxLocalDigits} digits (local).`
                  : `Up to ${maxLocalDigits} digits (local part) allowed. Total including country code must not exceed 15.`}
              </p>
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
            <div className="flex flex-col items-center md:items-end gap-2 w-full">
              <ArrowButton
                label={
                  submitting
                    ? 'Sending…'
                    : cooldownRemaining > 0
                    ? `Please wait (${cooldownRemaining}s)`
                    : 'Submit'
                }
                type="submit"
                disabled={submitting || cooldownRemaining > 0}
                style={{ opacity: submitting || cooldownRemaining > 0 ? 0.6 : 1 }}
              />
              {cooldownRemaining > 0 && status.type === 'success' && (
                <p className="text-xs md:text-sm text-gray-600" aria-live="polite">
                  For security and quality purposes, another message can be sent in {cooldownRemaining} second{cooldownRemaining !== 1 ? 's' : ''}.
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;