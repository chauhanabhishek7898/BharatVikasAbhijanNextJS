'use client';

import { motion } from 'framer-motion';
import { FaHandshake, FaChartLine, FaUsers, FaFlag, FaLightbulb, FaHeart, FaPhone } from 'react-icons/fa';
import MembershipCounter from '@/components/MembershipCounter';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';
import ChairmanCard from '@/components/ChairmanCard';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 550);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const features = [
    {
      icon: <FaHandshake />,
      title: 'Community Partnership',
      description: 'Building strong community networks for collective growth',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <FaChartLine />,
      title: 'Sustainable Development',
      description: 'Creating long-term solutions for community challenges',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <FaUsers />,
      title: 'Leadership Training',
      description: 'Developing next-generation community leaders',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <FaFlag />,
      title: 'National Mission',
      description: 'Contributing to the vision of Developed Bharat',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: <FaLightbulb />,
      title: 'Innovation Hub',
      description: 'Fostering innovative solutions for social issues',
      color: 'from-yellow-500 to-amber-500',
    },
    {
      icon: <FaHeart />,
      title: 'Social Welfare',
      description: 'Implementing impactful welfare programs',
      color: 'from-rose-500 to-pink-500',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-600/20 z-0" />
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 z-0" />

        <div className="container mx-auto px-4 py-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <AnimatedSection direction="right">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left"
              >
                {/* English Text */}
                <div className="flex align mb-6">
                  <div className="flex flex-col items-end w-full">
                    <div
                      className={`${isSmallScreen ? 'text-2xl' : 'text-4xl md:text-5xl'} font-bold  text-right leading-tight whitespace-nowrap`}
                      style={{ fontFamily: "'Noto Sans Odia', sans-serif" }}
                    >
                      {/* Bharat Bikash Abhijan */}
                      <span className="text-orange-500">Bharat</span>{' '}
                      <span className="text-white">Bikash</span>{' '}
                      <span className="text-green-600">Abhijan</span>
                    </div>
                    <div
                      className={`text-right mt-2 ${isSmallScreen ? 'text-sm' : 'text-lg'} text-gray-700 whitespace-nowrap`}
                      style={{ fontFamily: "'Noto Sans Odia', sans-serif" }}
                    >
                      A social welfare initiative...
                    </div>
                  </div>
                </div>

                {/* Odia Text */}
                <div className="flex mb-6">
                  <div className="flex flex-col items-end w-full">
                    <div
                      className={`${isSmallScreen ? 'text-xl' : 'text-3xl md:text-4xl'} font-bold text-right leading-tight whitespace-nowrap`}
                      style={{ fontFamily: "'Noto Sans Odia', sans-serif" }}
                    >
                      {/* ଭାରତ ବିକାଶ ଅଭିଯାନ */}
                      <span className="text-orange-500">ଭାରତ</span>{' '}
                      <span className="text-white">ବିକାଶ</span>{' '}
                      <span className="text-green-600">ଅଭିଯାନ</span>
                    </div>
                    <div
                      className={`text-right mt-2 ${isSmallScreen ? 'text-xs' : 'text-base md:text-lg'} text-gray-700 whitespace-nowrap`}
                      style={{ fontFamily: "'Noto Sans Odia', sans-serif" }}
                    >
                      ସମସ୍ତଙ୍କ ସାଥିରେ ସମସ୍ତଙ୍କ ହିତରେ...
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <div className={`${isSmallScreen ? 'text-base' : 'text-xl'} text-gray-600 mt-4`}>
                    Social Welfare Implementing impactful welfare programmes.
                  </div>
                </div>

                <p className={`${isSmallScreen ? 'text-base' : 'text-xl'} text-gray-600 mb-8 max-w-2xl`}>
                  Empowering communities, transforming lives. Join our national movement for
                  sustainable development and social empowerment across India.
                </p>

                {/* Contact Info */}
                <div className="flex justify-between mb-8 p-4 bg-slate-400 rounded-xl w-full max-w-md">
                  <div className="flex items-center space-x-3 ">
                    <FaPhone className={`text-green-600 ${isSmallScreen ? 'text-lg' : 'text-xl'}`} />
                    <div className="min-w-0">
                      <div className={`font-bold text-gray-800 ${isSmallScreen ? 'text-sm' : 'text-base'}`}>Contact Number:</div>
                      <a href="tel:6371602387" className={`${isSmallScreen ? 'text-xl' : 'text-2xl'} font-bold gradient-text hover:underline whitespace-nowrap block`}>
                        7750006089
                      </a>
                      <div className={`text-gray-600  ${isSmallScreen ? 'text-xs' : 'text-sm'}`}>
                        <span className="text-orange-500">Bharat</span>{' '}
                        <span className="text-white">Bikash</span>{' '}
                        <span className="text-green-600">Abhijan</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <FaPhone className={`text-green-600 ${isSmallScreen ? 'text-lg' : 'text-xl'}`} />
                    <div className="min-w-0">
                      <div className={`font-bold text-gray-800 ${isSmallScreen ? 'text-sm' : 'text-base'}`}>
                        Contact Number:
                      </div>
                      <a href="tel:6371602387" className={`${isSmallScreen ? 'text-xl' : 'text-2xl'} font-bold gradient-text hover:underline whitespace-nowrap block`}>
                        6371602387
                      </a>
                      <div className={`text-gray-600 ${isSmallScreen ? 'text-xs' : 'text-sm'}`}>SEBA Enterprises</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="/register">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold ${isSmallScreen ? 'text-base' : 'text-lg'} shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto text-center`}
                    >
                      Join Now
                    </motion.button>
                  </Link>
                  <Link href="/members">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`glass-effect px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold ${isSmallScreen ? 'text-base' : 'text-lg'} border border-blue-200 hover:border-blue-300 transition-all duration-300 w-full sm:w-auto text-center`}
                    >
                      View Members
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.3}>
              <div className="relative">
                <MembershipCounter />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Chairman Section */}
      <section id="chairman" className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <ChairmanCard />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12 md:mb-16">
              <div className="mb-6 flex justify-center">
                <div className={`relative ${isSmallScreen ? 'w-12 h-12' : 'w-16 h-16'} rounded-full overflow-hidden`}>
                  <Image
                    src="/bva_logo.jpeg"
                    alt="BVA Logo"
                    width={isSmallScreen ? 48 : 64}
                    height={isSmallScreen ? 48 : 64}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <h2 className={`${isSmallScreen ? 'text-3xl' : 'text-4xl md:text-5xl'} font-bold mb-6 gradient-text`}>
                Our Mission & Vision
              </h2>
              <p className={`${isSmallScreen ? 'text-base' : 'text-xl'} text-gray-600 max-w-3xl mx-auto`}>
                We are committed to creating a developed Bharat through community empowerment,
                sustainable development, and inclusive growth.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 md:mb-6`}>
                    <div className="text-white text-xl md:text-2xl">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className={`${isSmallScreen ? 'text-xl' : 'text-2xl'} font-bold mb-3 md:mb-4 text-gray-800`}>
                    {feature.title}
                  </h3>
                  <p className={`${isSmallScreen ? 'text-sm' : 'text-base'} text-gray-600`}>
                    {feature.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <div className="mb-6 md:mb-8 flex justify-center">
                <div className={`relative ${isSmallScreen ? 'w-16 h-16' : 'w-20 h-20'} rounded-full overflow-hidden border-4 border-white`}>
                  <Image
                    src="/bva_logo.jpeg"
                    alt="BVA Logo"
                    width={isSmallScreen ? 64 : 80}
                    height={isSmallScreen ? 64 : 80}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <h2 className={`${isSmallScreen ? 'text-2xl' : 'text-3xl md:text-4xl'} font-bold text-white mb-4 md:mb-6`}>
                Ready to Make a Difference?
              </h2>
              <p className={`${isSmallScreen ? 'text-base' : 'text-xl'} text-blue-100 mb-8 md:mb-10 max-w-2xl mx-auto`}>
                Join thousands of changemakers who are transforming communities across India.
                Your journey with Bharat Bikash Abhijan starts here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
                <Link href="/register">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`bg-white text-blue-600 px-6 md:px-10 py-3 md:py-4 rounded-xl font-bold ${isSmallScreen ? 'text-base' : 'text-lg'} shadow-2xl hover:shadow-3xl transition-all duration-300 w-full sm:w-auto`}
                  >
                    Register Now
                  </motion.button>
                </Link>
                <p className={`text-white/80 ${isSmallScreen ? 'text-xs' : 'text-sm'} max-w-sm`}>
                  * Requires referral from existing senior leader member
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
