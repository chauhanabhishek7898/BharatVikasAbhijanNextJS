'use client';

import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa';
import AnimatedSection from '@/components/AnimatedSection';
import Image from 'next/image';

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Phone Number',
      details: ['6371602387'],
      link: 'tel:6371602387',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <FaWhatsapp />,
      title: 'WhatsApp',
      details: ['6371602387'],
      link: 'https://wa.me/916371602387',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      details: ['brpalai@gmail.com'],
      link: 'mailto:brpalai@gmail.com',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Address',
      details: ['Plot No.-629, Sahid Nagar, Bhubaneswar-751007, India', 'SEBA ENTERPRISES'],
      link: '#',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <FaClock />,
      title: 'Working Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM'],
      link: '#',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-12">
            <div className="mb-6 flex justify-center">
              <div className="relative w-20 h-20 rounded-full overflow-hidden">
                <Image
                  src="/bva_logo.jpeg"
                  alt="BVA Logo"
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with Bharat Bikash Abhijan. We're here to help and answer any questions you might have.
            </p>
          </div>
        </AnimatedSection>

        {/* Contact Information */}
        <AnimatedSection delay={0.2}>
          <div className="max-w-6xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target={info.title === 'WhatsApp' ? '_blank' : '_self'}
                  rel={info.title === 'WhatsApp' ? 'noopener noreferrer' : ''}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`bg-gradient-to-br ${info.color} text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300`}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                      <div className="text-2xl">{info.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold">{info.title}</h3>
                  </div>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-white/90">{detail}</p>
                    ))}
                  </div>
                  {info.title === 'Phone Number' && (
                    <div className="mt-4 text-sm opacity-90">
                      SEBA ENTERPRISES
                    </div>
                  )}
                    {info.title === 'WhatsApp' && (
                    <div className="mt-4 text-sm opacity-90">
                      SEBA ENTERPRISES
                    </div>
                  )}
                </motion.a>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Contact Form */}
        <AnimatedSection delay={0.4}>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-gradient-to-r from-blue-600 to-green-600 p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                <p className="mb-6">
                  Have questions about registration, membership, or our programs? 
                  We're here to help you every step of the way.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold mb-2">Why Contact Us?</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-yellow-300 rounded-full mr-2"></span>
                        Registration assistance and guidance
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-yellow-300 rounded-full mr-2"></span>
                        Membership queries and support
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-yellow-300 rounded-full mr-2"></span>
                        Program information and participation
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-yellow-300 rounded-full mr-2"></span>
                        Partnership and collaboration opportunities
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder="Type your message here..."
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Map Section */}
        <AnimatedSection delay={0.6}>
          <div className="max-w-6xl mx-auto mt-16">
            <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
              Our Location
            </h3>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-4">
              <div className="h-64 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <FaMapMarkerAlt className="text-4xl text-blue-500 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-800">Plot No.-629, Sahid Nagar, Bhubaneswar-751007, India</h4>
                  <p className="text-gray-600 mt-2">SEBA ENTERPRISES</p>
                  <p className="text-gray-500 text-sm mt-1">Contact: 6371602387</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}