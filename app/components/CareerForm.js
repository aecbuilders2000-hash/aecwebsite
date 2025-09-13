import React, { useState } from 'react';
import { countries } from '../constants/CountryList';
import ArrowButton from '../ui/ArrowButton';

const CareerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: ''
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [fileError, setFileError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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

  const [selectedCountry, setSelectedCountry] = useState(
    countries.find((c) => c.value === 'IN') || countries[0]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!resumeFile) {
      setFileError('Please upload your resume (PDF or DOCX).');
      return;
    }
    setSubmitting(true);
    try {
      // TODO: integrate API submission
      // Placeholder UX feedback
      alert('Form submitted (placeholder).');
      // Reset minimal fields (keep resume intentionally optional to reattach)
      setFormData({ name: '', email: '', phone: '', experience: '' });
      setResumeFile(null);
    } catch (err) {
      console.error(err);
      alert('Submission failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-start md:items-center justify-center p-4 sm:p-8">
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

            {/* Row 2: Phone / Experience */}
          <div className="flex flex-col md:flex-row md:items-center w-full md:justify-between gap-8 md:gap-16">
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
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 w-full">
              <label className="block text-black text-xl md:text-2xl mb-3 md:mb-4 font-bold">Experience (in years):</label>
              <input
                type="number"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                placeholder="Your Experience"
                className="w-full text-black bg-transparent border-b-2 border-gray-300 pb-2 text-base md:text-lg placeholder-gray-400 focus:border-black outline-none transition-colors"
              />
            </div>
          </div>

          {/* Row 3: Resume */}
          <div className="flex flex-col lg:flex-row w-full gap-8 md:gap-16">
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
            <div className="flex-1" />
          </div>

          {/* Submit */}
          <div className="flex justify-center md:justify-end pt-2">
            <button type="submit" disabled={submitting} className="relative inline-flex">
              <ArrowButton label={submitting ? 'Submitting…' : 'Submit'} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CareerForm;