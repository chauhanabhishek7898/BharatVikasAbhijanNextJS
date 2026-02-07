'use client';

import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaInfoCircle } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Footer() {
  const router = useRouter();
  const contactNumber = "6371602387";
  const bbaContactNumber = "7750006089";
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 550);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleChairmanClick = () => {
    if (window.location.pathname === '/') {
      const chairmanSection = document.getElementById('chairman');
      if (chairmanSection) {
        chairmanSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push('/#chairman');
    }
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Register', href: '/register' },
    { name: 'Members', href: '/members' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    {
      icon: FaEnvelope,
      href: 'mailto:brpalai@gmail.com',
      label: 'Email',
      color: 'hover:bg-red-500'
    },
    {
      icon: FaFacebook,
      href: 'https://facebook.com/brpalai',
      label: 'Facebook',
      color: 'hover:bg-blue-600'
    },
    {
      icon: FaTwitter,
      href: 'https://twitter.com/brpalai',
      label: 'Twitter',
      color: 'hover:bg-sky-500'
    },
    {
      icon: FaInstagram,
      href: 'https://instagram.com/brpalai',
      label: 'Instagram',
      color: 'hover:bg-pink-600'
    },
    {
      icon: FaYoutube,
      href: 'https://www.youtube.com/@bhaktisir',
      label: 'YouTube',
      color: 'hover:bg-red-600'
    },
    {
      icon: FaWhatsapp,
      href: 'https://wa.me/916371602387',
      label: 'WhatsApp',
      color: 'hover:bg-green-600'
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white pt-8 md:pt-12 pb-6 md:pb-8">
      <div className="container mx-auto px-3 md:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex justify-between items-center space-x-2 md:space-x-3"
            >
              <div className={`${isSmallScreen ? 'w-10 h-10' : 'w-12 h-12'} bg-white rounded-full flex items-center justify-center overflow-hidden flex-shrink-0`}>
                <Image
                  src="/bva_logo.jpeg"
                  alt="Bharat Bikash Abhijan Logo"
                  width={isSmallScreen ? 40 : 48}
                  height={isSmallScreen ? 40 : 48}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-shrink-0">
                {/* <h3 className={`${isSmallScreen ? 'text-lg' : 'text-xl'} md:text-2xl font-bold leading-tight`}>
                  Bharat Bikash <span className="text-yellow-300">Abhijan</span>
                </h3> */}

                <h3 className={`${isSmallScreen ? 'text-lg' : 'text-xl'} md:text-xl font-bold leading-tight`}>
                  <span className="text-orange-500">Bharat</span>{' '}
                  <span className="text-white px-2 py-1 rounded-md">Bikash</span>{' '}
                  <span className="text-green-500">Abhijan</span>
                </h3>                <div className={`text-end ${isSmallScreen ? 'text-[10px]' : 'text-xs'} mt-0.5 text-gray-300 whitespace-nowrap`}>
                  A social welfare initiative...
                </div>
              </div>
            </motion.div>

            <div className="flex flex-col items-end mt-2">
              {/* <div className={`${isSmallScreen ? 'text-lg' : 'text-xl'} md:text-2xl font-bold odiya-gradient leading-tight`} style={{ fontFamily: "'Noto Sans Odia', sans-serif" }}>
                ଭାରତ ବିକାଶ ଅଭିଯାନ
              </div> */}
              <div className={`${isSmallScreen ? 'text-lg' : 'text-xl'} md:text-xl font-bold leading-tight`} style={{ fontFamily: "'Noto Sans Odia', sans-serif" }}>
                <span className="text-orange-500">ଭାରତ</span>{' '}
                <span className="text-white px-2 py-1 rounded-md">ବିକାଶ</span>{' '}
                <span className="text-green-500">ଅଭିଯାନ</span>
              </div>
              <div className={`text-end ${isSmallScreen ? 'text-[10px]' : 'text-xs'} text-gray-300 mt-0.5`} style={{ fontFamily: "'Noto Sans Odia', sans-serif" }}>
                ସମସ୍ତଙ୍କ ସାଥିରେ ସମସ୍ତଙ୍କ ହିତରେ...
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering communities, transforming lives. Join us in the mission for a developed Bharat.
            </p>
            <div className="flex flex-wrap gap-2 md:gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${isSmallScreen ? 'w-8 h-8' : 'w-10 md:w-12 h-10 md:h-12'} rounded-full bg-white/10 ${link.color} flex items-center justify-center transition-all duration-300 cursor-pointer`}
                >
                  <link.icon className={`${isSmallScreen ? 'text-sm' : 'text-base md:text-xl'}`} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`${isSmallScreen ? 'text-lg' : 'text-xl'} font-bold mb-4 md:mb-6 text-yellow-300`}>Quick Links</h4>
            <ul className="space-y-2 md:space-y-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 flex items-center group text-sm md:text-base"
                  >
                    <span className={`${isSmallScreen ? 'w-1.5 h-1.5' : 'w-2 h-2'} bg-blue-500 rounded-full mr-2 md:mr-3 group-hover:w-3 md:group-hover:w-4 transition-all duration-300`}></span>
                    {item.name}
                  </Link>
                </li>
              ))}
              {/* Chairman Link */}
              <li>
                <button
                  onClick={handleChairmanClick}
                  className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 flex items-center group w-full text-left text-sm md:text-base"
                >
                  <FaInfoCircle className={`text-blue-500 mr-2 md:mr-3 ${isSmallScreen ? 'text-sm' : ''}`} />
                  Chairman&apos;s Message
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className={`${isSmallScreen ? 'text-lg' : 'text-xl'} font-bold mb-4 md:mb-6 text-yellow-300`}>Contact Us</h4>
            <div className="space-y-3 md:space-y-4">
              <motion.a
                href={`tel:${bbaContactNumber}`}
                whileHover={{ x: 5 }}
                className="flex items-center space-x-2 md:space-x-3 group"
              >
                <div className={`p-1.5 md:p-2 bg-green-500/20 rounded-lg group-hover:bg-green-500/30 transition-colors flex-shrink-0`}>
                  <FaPhone className={`text-green-400 ${isSmallScreen ? 'text-base' : 'text-lg md:text-xl'}`} />
                </div>
                <div className="min-w-0">
                  <span className="text-gray-300 group-hover:text-white text-sm md:text-base whitespace-nowrap">{bbaContactNumber}</span>
                  {/* <div className="text-xs text-gray-400">SEBA Enterprises</div> */}
                  <div className="text-xs font-medium">
                    <span className="text-orange-500">Bharat</span>{' '}
                    <span className="text-white">Bikash</span>{' '}
                    <span className="text-green-600">Abhijan</span>
                  </div>
                </div>
              </motion.a>

              <div className="flex items-start space-x-2 md:space-x-3">
                <div className={`p-1.5 md:p-2 bg-blue-500/20 rounded-lg flex-shrink-0 mt-0.5`}>
                  <FaMapMarkerAlt className={`text-blue-400 ${isSmallScreen ? 'text-base' : 'text-lg md:text-xl'}`} />
                </div>
                <span className="text-gray-300 text-sm leading-relaxed">Plot No.-629, Sahid Nagar, Bhubaneswar-751007, India</span>
              </div>

              <div className="flex items-center space-x-2 md:space-x-3">
                <div className={`p-1.5 md:p-2 bg-red-500/20 rounded-lg flex-shrink-0`}>
                  <FaEnvelope className={`text-red-400 ${isSmallScreen ? 'text-base' : 'text-lg md:text-xl'}`} />
                </div>
                <span className="text-gray-300 text-sm md:text-base whitespace-nowrap">brpalai@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className={`${isSmallScreen ? 'text-lg' : 'text-xl'} font-bold mb-4 md:mb-6 text-yellow-300`}>Newsletter</h4>
            <p className="text-gray-300 mb-3 md:mb-4 text-sm">Subscribe for updates and announcements</p>
            <form className="space-y-2 md:space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-blue-500 text-white placeholder-gray-400 text-sm md:text-base"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold py-2 md:py-3 rounded-lg transition-all duration-300 text-sm md:text-base"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="border-t border-white/20 mt-8 md:mt-12 pt-6 md:pt-8 text-center text-gray-400"
        >
          {/* <p className="text-sm md:text-base">&copy; {new Date().getFullYear()} Bharat Bikash Abhijan. All rights reserved.</p> */}
          <p className="text-sm md:text-base">
            &copy; {new Date().getFullYear()}{' '}
            <span className="text-orange-500">Bharat</span>{' '}
            <span className="text-white">Bikash</span>{' '}
            <span className="text-green-600">Abhijan</span>
            . All rights reserved.
          </p>
          <p className="mt-2 text-xs md:text-sm">Designed with ❤️ for a better Bharat</p>
          <div className="mt-3 md:mt-4 text-xs opacity-75">
            Registration: BBA | Contact: {bbaContactNumber}
          </div>
          <div className="mt-3 md:mt-4 text-xl opacity-75">
            Powered by -{' '} 
            <a 
      href="https://maedesa.com" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-blue-400 hover:text-blue-300 hover:underline transition-all duration-300 cursor-pointer"
    >
      Maedesa
    </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
