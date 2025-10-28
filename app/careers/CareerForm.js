import React, { useState, useMemo, useEffect } from 'react';
import { countries } from '../constants/CountryList';
import ArrowButton from '../ui/ArrowButton';

const CareerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '0'
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [fileError, setFileError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' }); // success | error
  const [cooldownRemaining, setCooldownRemaining] = useState(0);

  // Phone constraints (E.164): total digits (country code + local) <= 15
  const [selectedCountry, setSelectedCountry] = useState(
    countries.find((c) => c.value === 'IN') || countries[0]
  );

  const selectedDialCodeDigits = useMemo(() => {
    if (!selectedCountry?.phoneCode) return 0;
    return selectedCountry.phoneCode.replace(/[^0-9]/g, '').length;
  }, [selectedCountry]);
  const maxTotalDigits = 15;
  const maxLocalDigits = Math.max(0, maxTotalDigits - selectedDialCodeDigits);
  const minLocalDigits = 6;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      let digits = value.replace(/[^0-9]/g, '');
      if (digits.length > maxLocalDigits) digits = digits.slice(0, maxLocalDigits);
      setFormData(prev => ({ ...prev, phone: digits }));
    } else if (name === 'experience') {
      // Simple constraint: non-negative years
      const cleaned = value.replace(/[^0-9.]/g, '');
      setFormData(prev => ({ ...prev, experience: cleaned }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  // Cooldown effect
  useEffect(() => {
    if (cooldownRemaining <= 0) return;
    const t = setInterval(() => {
      setCooldownRemaining(s => (s > 1 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(t);
  }, [cooldownRemaining]);

  // Debug: Override alert to catch any alerts
  useEffect(() => {
    const originalAlert = window.alert;
    window.alert = function(message) {
      console.error('🚨 ALERT DETECTED:', message);
      console.trace('Alert called from:', new Error().stack);
      // Optionally show the message in our status instead
      setStatus({ type: 'error', message: `Alert detected: ${message}` });
      // Uncomment the next line if you want to see the actual alert
      // originalAlert(message);
    };
    
    return () => {
      window.alert = originalAlert;
    };
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const validTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    if (!validTypes.includes(file.type)) {
      setFileError('Only PDF or DOCX files are allowed.');
      e.target.value = '';
      setResumeFile(null);
      return;
    }
    // Basic size limit ~5MB for responsiveness/performance
    if (file.size > 5 * 1024 * 1024) {
      setFileError('File must be under 5MB.');
      e.target.value = '';
      setResumeFile(null);
      return;
    }
    setFileError('');
    setResumeFile(file);
  };

  // Convert file to base64
  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        // Remove the data:mime/type;base64, prefix
        const base64 = reader.result.split(',')[1];
        resolve(base64);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  // Test function to check if Google Apps Script is responding
  const testGoogleScript = async () => {
    // console.log('🧪 Testing Google Apps Script connection...');
    try {
      const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_CAREER_GOOGLE_SCRIPT_URL;
      // console.log('🧪 Testing Google Apps Script URL:', GOOGLE_SCRIPT_URL);
      
      if (!GOOGLE_SCRIPT_URL) {
        console.error('❌ No Google Apps Script URL configured!');
        setStatus({ type: 'error', message: 'Google Apps Script URL not configured' });
        return;
      }
      
      // Test with a simple GET request
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'GET'
      });
      
      const text = await response.text();
      // console.log('🧪 Google Apps Script GET test response:', text);
      // console.log('🧪 Response status:', response.status);
      // console.log('🧪 Response ok:', response.ok);
      
      if (response.ok) {
        setStatus({ type: 'success', message: `✅ Google Apps Script is working! Response: ${text}` });
      } else {
        setStatus({ type: 'error', message: `❌ Google Apps Script test failed. Status: ${response.status}` });
      }
      
    } catch (error) {
      console.error('🧪 Google Apps Script test failed:', error);
      setStatus({ type: 'error', message: `❌ Google Apps Script test failed: ${error.message}` });
    }
  };

  const handleSubmit = async (e) => {
    // console.log('🚀 handleSubmit function called!', e);
    // console.log('🚀 Event listeners on form:', e.target.getEventListeners ? e.target.getEventListeners() : 'Cannot check listeners');
    
    // Prevent all form submission behaviors
    e.preventDefault();
    e.stopPropagation();
    
    // console.log('🚀 preventDefault and stopPropagation called');
    
    // Check if we're already submitting
    if (submitting) {
      // console.log('⚠️ Already submitting, ignoring duplicate submission');
      return;
    }
    
    // console.log('🚀 Form submission handling begins');
    
    // Basic validations
    if (!formData.name || !formData.email) {
      // console.log('❌ Validation failed: missing name or email');
      setStatus({ type: 'error', message: 'Please provide both your name and a valid email address.' });
      return;
    }
    
    if (!resumeFile) {
      // console.log('❌ Validation failed: no resume file');
      setFileError('Please upload your resume (PDF or DOCX).');
      setStatus({ type: 'error', message: 'Attach a resume to proceed.' });
      return;
    }
    
    if (formData.phone) {
      if (formData.phone.length < minLocalDigits) {
        setStatus({ type: 'error', message: `Phone number is too short (min ${minLocalDigits} digits local).` });
        return;
      }
      if (formData.phone.length > maxLocalDigits) {
        setStatus({ type: 'error', message: 'Phone number exceeds allowed length for the selected country.' });
        return;
      }
    }
    
    if (cooldownRemaining > 0) {
      setStatus({ type: 'error', message: 'Please wait for the cooldown to finish before submitting again.' });
      return;
    }

    setSubmitting(true);
    setStatus({ type: '', message: '' });
    // console.log('✅ All validations passed, starting submission process');

    try {
      // Get Google Script URL from environment variable
      const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_CAREER_GOOGLE_SCRIPT_URL;
      // console.log('🔗 Google Script URL:', GOOGLE_SCRIPT_URL);
      
      if (!GOOGLE_SCRIPT_URL) {
        throw new Error('Career Google Script URL not configured');
      }

      // Convert file to base64
      // console.log('📄 Starting file conversion to base64...');
      const fileBase64 = await fileToBase64(resumeFile);
      // console.log('✅ File converted to base64, length:', fileBase64.length, 'characters');
      
      // Format phone number to prevent Google Sheets formula interpretation
      let phoneForSheet = '';
      if (formData.phone) {
        // Remove the + and format without it to prevent #ERROR! in sheets
        phoneForSheet = `${selectedCountry.phoneCode} ${formData.phone}`.replace(/^\+/, '');
      }

      const payload = {
        name: formData.name,
        email: formData.email,
        phone: phoneForSheet,
        country: selectedCountry.label,
        experience: formData.experience,
        resumeFile: fileBase64,
        fileName: resumeFile.name,
        fileType: resumeFile.type
      };

      // console.log('📦 Payload prepared:', {
      //   name: payload.name,
      //   email: payload.email,
      //   fileName: payload.fileName,
      //   fileType: payload.fileType,
      //   fileSize: `${(resumeFile.size / 1024).toFixed(1)} KB`,
      //   hasResumeFile: !!payload.resumeFile,
      //   payloadSize: `${JSON.stringify(payload).length} characters`
      // });

      // console.log('🚀 Sending request to Google Apps Script...');
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        mode: 'no-cors' // Required for Google Apps Script
      });

      // console.log('📨 Response received from Google Apps Script:', response);
      // console.log('📊 Response details:', {
      //   status: response.status,
      //   statusText: response.statusText,
      //   type: response.type,
      //   ok: response.ok,
      //   redirected: response.redirected
      // });

      // Note: With no-cors mode, we can't read the response body
      // But we can assume success if no error was thrown
      // console.log('✅ Request sent successfully (no-cors mode)');
      
      // Since we can't read the response in no-cors mode, 
      // we assume success if no error was thrown

      // console.log('🎉 Setting success status and resetting form...');
      setStatus({
        type: 'success',
        message: '🎉 Your application has been successfully submitted! Your resume has been uploaded to our system. Our team will review your profile and get back to you if there is a potential match. Thank you for your interest in joining Collective AEC!'
      });
      setCooldownRemaining(10); // 10s cooldown after success
      
      // Reset form
      setFormData({ name: '', email: '', phone: '', experience: '0' });
      setResumeFile(null);
      // Clear file input
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = '';
      // console.log('✅ Form reset complete');
      
    } catch (err) {
      console.error('❌ Career form submission error:', err);
      console.error('❌ Error details:', {
        message: err.message,
        stack: err.stack,
        name: err.name
      });
      setStatus({ 
        type: 'error', 
        message: err.message.includes('not configured') 
          ? 'Career form is not properly configured. Please try again later or contact us directly.'
          : 'We were unable to submit your application just now. Please try again shortly or contact us directly.' 
      });
    } finally {
      // console.log('🏁 Setting submitting to false');
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen text-black bg-gray-50 flex items-start md:items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="mb-10 sm:mb-16">
          <h1
            className="font-bruno-ace-sc text-black font-bold tracking-widest leading-tight mb-5 text-[clamp(1.6rem,5.5vw,2.5rem)]"
            style={{
              fontFamily: 'var(--font-bruno-ace-sc), sans-serif',
              letterSpacing: '0.3em'
            }}
          >
            CAREER WITH US!
          </h1>
          <div className="w-full h-px bg-gray-700" />
        </div>

        {/* Temporary Test Button */}
        {/* <div className="mb-4">
          <button 
            type="button"
            onClick={testGoogleScript}
            className="px-4 py-2 text-black bg-blue-500 rounded hover:bg-blue-600"
          >
            🧪 Test Google Script Connection
          </button>
        </div> */}

        <form onSubmit={handleSubmit} className="space-y-12 text-black" noValidate autoComplete="off">
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

            {/* Row 2: Phone / Experience */}
          <div className="flex flex-col md:flex-row md:items-center w-full md:justify-between gap-8 md:gap-16">
            <div className="flex-1 w-full">
              <label className="block text-black text-xl md:text-2xl mb-3 md:mb-4 font-bold">Phone:</label>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <select
                  value={selectedCountry.value}
                  onChange={(e) => {
                    const country = countries.find((c) => c.value === e.target.value);
                    if (country) {
                      setSelectedCountry(country);
                      // Re-trim phone for new country limit
                      setFormData(prev => {
                        const digits = prev.phone.slice(0, Math.max(0, 15 - (country.phoneCode || '+').replace(/[^0-9]/g, '').length));
                        return { ...prev, phone: digits };
                      });
                    }
                  }}
                  className="px-2 py-2 border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-black w-full sm:w-auto"
                >
                  {countries.map((country) =>
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
                    aria-describedby="career-phone-help"
                  />
                </div>
              </div>
              <p id="career-phone-help" className="mt-2 text-xs md:text-sm text-gray-600 tracking-wide">
                {formData.phone
                  ? `${formData.phone.length}/${maxLocalDigits} digits (local).`
                  : `Up to ${maxLocalDigits} digits (local part) allowed. Total including country code must not exceed 15.`}
              </p>
            </div>
            <div className="flex-1 w-full">
              <label className="block text-black text-xl md:text-2xl mb-3 md:mb-4 font-bold">Experience (in years):</label>
              <div className="flex items-stretch gap-2 max-w-xs">
                <button
                  type="button"
                  onClick={() => {
                    setFormData(prev => {
                      const current = parseFloat(prev.experience) || 0;
                      const next = Math.max(0, current - 1);
                      return { ...prev, experience: String(next) };
                    });
                  }}
                  className="px-3 py-2 border border-gray-300 rounded-md text-black hover:bg-gray-100 transition disabled:opacity-40"
                  aria-label="Decrease experience"
                  disabled={Number(formData.experience || 0) <= 0}
                >
                  -
                </button>
                <input
                  type="text"
                  name="experience"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={formData.experience}
                  onChange={handleInputChange}
                  placeholder="Years"
                  className="flex-1 text-center text-black bg-transparent border-b-2 border-gray-300 pb-2 text-base md:text-lg placeholder-gray-400 focus:border-black outline-none transition-colors"
                  aria-describedby="experience-help"
                />
                <button
                  type="button"
                  onClick={() => {
                    setFormData(prev => {
                      const current = prev.experience === '' ? -1 : (parseFloat(prev.experience) || 0);
                      const next = current + 1; // first click from blank becomes 0
                      return { ...prev, experience: String(next) };
                    });
                  }}
                  className="px-3 py-2 border border-gray-300 rounded-md text-black hover:bg-gray-100 transition"
                  aria-label="Increase experience"
                >
                  +
                </button>
              </div>
              <p id="experience-help" className="mt-2 text-xs md:text-sm text-gray-600 tracking-wide">
                Use the + / - controls or enter a number. Leave blank if not applicable.
              </p>
            </div>
          </div>

          {/* Row 3: Resume + Submit */}
          <div className="flex flex-col lg:flex-row w-full gap-8 md:gap-16 items-start">
            <div className="flex-1 w-full">
              <label className="block text-black text-xl md:text-2xl mb-3 md:mb-4 font-bold">Resume (PDF / DOCX):</label>
              <div className="flex flex-col gap-3">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  onChange={handleFileChange}
                  className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-gray-800 cursor-pointer"
                />
                {resumeFile && !fileError && (
                  <p className="text-xs text-gray-600 break-all">Selected: {resumeFile.name} ({(resumeFile.size / 1024).toFixed(1)} KB)</p>
                )}
                {fileError && <p className="text-xs text-red-600">{fileError}</p>}
              </div>
            </div>
            <div className="flex-1 w-full flex lg:justify-end">
              <div className="flex flex-col items-center lg:items-end gap-3 w-full max-w-xs">
                <ArrowButton
                  label={
                    submitting
                      ? 'Submitting…'
                      : cooldownRemaining > 0
                      ? `Please wait (${cooldownRemaining}s)`
                      : 'Submit'
                  }
                  type="submit"
                  disabled={submitting || cooldownRemaining > 0}
                  style={{ opacity: submitting || cooldownRemaining > 0 ? 0.6 : 1 }}
                  onClick={(e) => {
                    // console.log('🎯 ArrowButton clicked, will trigger form submission');
                    // Let the form handle the submission, don't prevent default here
                  }}
                />
                {cooldownRemaining > 0 && status.type === 'success' && (
                  <p className="text-xs md:text-sm text-gray-600" aria-live="polite">
                    You can submit another application in {cooldownRemaining} second{cooldownRemaining !== 1 ? 's' : ''}.
                  </p>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CareerForm;