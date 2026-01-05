'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaMapMarker, FaCalendar, FaLock, FaIdCard } from 'react-icons/fa';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    dateOfBirth: '',
    referralId: '',
    referralName: '',
    password: '',
    confirmPassword: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    if (formData.password !== formData.confirmPassword) {
      setMessage({ type: 'error', text: 'Passwords do not match' });
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setMessage({
          type: 'success',
          text: `Registration successful! Your ID: ${data.registrationId}`,
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          state: '',
          pincode: '',
          dateOfBirth: '',
          referralId: '',
          referralName: '',
          password: '',
          confirmPassword: '',
        });
      } else {
        setMessage({ type: 'error', text: data.message });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Registration failed. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const formFields = [
    { name: 'name', label: 'Full Name', type: 'text', icon: <FaUser />, required: true },
    { name: 'email', label: 'Email Address', type: 'email', icon: <FaEnvelope />, required: true },
    { name: 'phone', label: 'Phone Number', type: 'tel', icon: <FaPhone />, required: true },
    { name: 'address', label: 'Address', type: 'textarea', icon: <FaMapMarker />, required: true },
    { name: 'city', label: 'City', type: 'text', icon: <FaMapMarker />, required: true },
    { name: 'state', label: 'State', type: 'text', icon: <FaMapMarker />, required: true },
    { name: 'pincode', label: 'Pincode', type: 'text', icon: <FaMapMarker />, required: true },
    { name: 'dateOfBirth', label: 'Date of Birth', type: 'date', icon: <FaCalendar />, required: true },
    { name: 'referralId', label: 'Senior Leader ID', type: 'text', icon: <FaIdCard />, required: true },
    { name: 'referralName', label: 'Senior Leader Name', type: 'text', icon: <FaUser />, required: true },
    { name: 'password', label: 'Password', type: 'password', icon: <FaLock />, required: true },
    { name: 'confirmPassword', label: 'Confirm Password', type: 'password', icon: <FaLock />, required: true },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden"
    >
      <div className="md:flex">
        {/* Left Side - Form */}
        <div className="md:w-2/3 p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold gradient-text">Join Bharat Bikas Abhijan</h2>
            <p className="text-gray-600 mt-2">Registration with Senior Leader Referral Required</p>
          </div>

          {message && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-6 p-4 rounded-lg ${
                message.type === 'success'
                  ? 'bg-green-50 text-green-800 border border-green-200'
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}
            >
              {message.text}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {formFields.map((field, index) => (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={field.name === 'address' ? 'md:col-span-2' : ''}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {field.label}
                    {field.required && <span className="text-red-500 ml-1">*</span>}
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-3 text-gray-400">
                      {field.icon}
                    </div>
                    {field.type === 'textarea' ? (
                      <textarea
                        name={field.name}
                        value={(formData as any)[field.name]}
                        onChange={handleChange}
                        required={field.required}
                        className="w-full pl-12 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                        rows={3}
                        placeholder={`Enter ${field.label.toLowerCase()}`}
                      />
                    ) : (
                      <input
                        type={field.type}
                        name={field.name}
                        value={(formData as any)[field.name]}
                        onChange={handleChange}
                        required={field.required}
                        className="w-full pl-12 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                        placeholder={`Enter ${field.label.toLowerCase()}`}
                      />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Registering...
                </span>
              ) : (
                'Complete Registration'
              )}
            </motion.button>

            <p className="text-center text-gray-600 text-sm">
              By registering, you agree to our Terms & Conditions
            </p>
          </form>
        </div>

        {/* Right Side - Info */}
        <div className="md:w-1/3 bg-gradient-to-b from-blue-600 to-green-600 p-8 text-white">
          <div className="h-full flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6">Why Join Us?</h3>
            <ul className="space-y-4">
              {[
                'Community Development Programs',
                'Leadership Training',
                'Networking Opportunities',
                'Social Impact Projects',
                'Skill Development',
                'National Contribution',
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 p-4 bg-white/10 rounded-xl">
              <h4 className="font-bold mb-2">Important Note:</h4>
              <p className="text-sm">
                Registration requires a valid Senior Leader referral ID and name.
                Without proper referral, registration cannot be completed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}