'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaUserPlus, FaUsers, FaHome, FaInfoCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChairmanClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.location.pathname === '/') {
      // If on home page, scroll to chairman section
      const chairmanSection = document.getElementById('chairman');
      if (chairmanSection) {
        chairmanSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on other page, navigate to home page with hash
      router.push('/#chairman');
    }
    setIsOpen(false); // Close mobile menu if open
  };

  const navItems = [
    { name: 'Home', href: '/', icon: <FaHome />, onClick: null },
    { name: 'Register', href: '/register', icon: <FaUserPlus />, onClick: null },
    { name: 'Members', href: '/members', icon: <FaUsers />, onClick: null },
    { 
      name: 'Chairman', 
      href: '#chairman', 
      icon: <FaInfoCircle />, 
      onClick: handleChairmanClick 
    },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-effect shadow-lg py-3'
          : 'bg-gradient-to-r from-blue-600 to-green-600 py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-3"
          >
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg">
                <Image
                  src="/bva_logo.jpeg"
                  alt="Bharat Bikash Abhijan Logo"
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="text-white">
                {/* <div className="font-bold text-xl">Bharat Bikash Abhijan</div>
                <div className="text-sm text-yellow-300">Abhijan</div> */}
                <h3 className="text-2xl font-bold">
                  Bharat Bikash <span className="text-yellow-300">Abhijan</span>
                </h3>
                <div className="text-end text-xs mt-1 text-gray-300">
                  A social welfare initiative
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Tagline - Visible on desktop */}
          <div className="hidden md:block text-center">
            <div className="text-white font-semibold">
              <div className="text-2xl odiya-gradient font-bold" style={{ fontFamily: "'Noto Sans Odia', sans-serif" }}>
                ଭାରତ ବିକାଶ ଅଭିଯାନ
              </div>
              <div className="text-xs text-end mt-1" style={{ fontFamily: "'Noto Sans Odia', sans-serif" }}>
                ସମସ୍ତଙ୍କ ସାଥିରେ ସମସ୍ତଙ୍କ ହିତରେ...
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.onClick ? (
                  <button
                    onClick={item.onClick}
                    className="flex items-center space-x-2 text-white hover:text-yellow-300 transition-colors duration-300 group"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-semibold relative">
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center space-x-2 text-white hover:text-yellow-300 transition-colors duration-300 group"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-semibold relative">
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                )}
              </motion.div>
            ))}
            {/* Contact Button */}
            <motion.a
              href="tel:6371602387"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2"
            >
              <span>📞</span>
              <span>6371602387</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-4 pb-3 space-y-3">
                <div className="text-center mb-4 text-white">
                  <div className="font-bold odiya-gradient" style={{ fontFamily: "'Noto Sans Odia', sans-serif" }}>
                    ଭାରତ ବିକାଶ ଅଭିଯାନ
                  </div>
                  <div className="text-sm mt-1" style={{ fontFamily: "'Noto Sans Odia', sans-serif" }}>
                    ସମସ୍ତଙ୍କ ସାଥିରେ ସମସ୍ତଙ୍କ ହିତରେ...
                  </div>
                </div>
                
                {navItems.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ x: 10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {item.onClick ? (
                      <button
                        onClick={item.onClick}
                        className="flex items-center space-x-3 text-white hover:bg-white/20 px-4 py-3 rounded-lg transition-all duration-300 w-full text-left"
                      >
                        <span className="text-xl">{item.icon}</span>
                        <span className="font-semibold">{item.name}</span>
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center space-x-3 text-white hover:bg-white/20 px-4 py-3 rounded-lg transition-all duration-300"
                      >
                        <span className="text-xl">{item.icon}</span>
                        <span className="font-semibold">{item.name}</span>
                      </Link>
                    )}
                  </motion.div>
                ))}
                
                <motion.a
                  href="tel:6371602387"
                  className="flex items-center justify-center space-x-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 mt-4"
                >
                  <span>📞 Call Now</span>
                  <span>6371602387</span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { FaBars, FaTimes, FaUserPlus, FaUsers, FaHome, FaInfoCircle } from 'react-icons/fa';
// import { motion, AnimatePresence } from 'framer-motion';
// import Image from 'next/image';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { name: 'Home', href: '/', icon: <FaHome /> },
//     { name: 'Register', href: '/register', icon: <FaUserPlus /> },
//     { name: 'Members', href: '/members', icon: <FaUsers /> },
//     { name: 'Chairman', href: '#chairman', icon: <FaInfoCircle /> },
//   ];

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//         scrolled
//           ? 'glass-effect shadow-lg py-3'
//           : 'bg-gradient-to-r from-blue-600 to-green-600 py-4'
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="flex items-center space-x-3"
//           >
//             <Link href="/" className="flex items-center space-x-3">
//               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg">
//                 <Image
//                   src="/bva_logo.jpeg"
//                   alt="Bharat Bikash Abhijan Logo"
//                   width={48}
//                   height={48}
//                   className="object-cover w-full h-full"
//                   priority
//                 />
//               </div>
//               <div className="text-white">
//                 <div className="font-bold text-xl">Bharat Bikash</div>
//                 <div className="text-sm text-yellow-300">Abhijan</div>
//               </div>
//             </Link>
//           </motion.div>

//           {/* Tagline - Visible on desktop */}
//           <div className="hidden md:block text-center">
//             <div className="text-white font-semibold">
//               <div className="text-sm odiya-gradient font-bold" style={{ fontFamily: "'Noto Sans Odia', sans-serif" }}>
//                 ଭାରତ ବିକାଶ ଅଭିଯାନ
//               </div>
//               <div className="text-xs mt-1" style={{ fontFamily: "'Noto Sans Odia', sans-serif" }}>
//                 ସମସ୍ତଙ୍କ ସାଥିରେ ସମସ୍ତଙ୍କ ହିତରେ...
//               </div>
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-6">
//             {navItems.map((item, index) => (
//               <motion.div
//                 key={item.name}
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <Link
//                   href={item.href}
//                   className="flex items-center space-x-2 text-white hover:text-yellow-300 transition-colors duration-300 group"
//                 >
//                   <span className="text-lg">{item.icon}</span>
//                   <span className="font-semibold relative">
//                     {item.name}
//                     <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
//                   </span>
//                 </Link>
//               </motion.div>
//             ))}
//             {/* Contact Button */}
//             <motion.a
//               href="tel:6371602387"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2"
//             >
//               <span>📞</span>
//               <span>6371602387</span>
//             </motion.a>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden text-white text-2xl focus:outline-none"
//           >
//             {isOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               className="md:hidden overflow-hidden"
//             >
//               <div className="pt-4 pb-3 space-y-3">
//                 <div className="text-center mb-4 text-white">
//                   <div className="font-bold odiya-gradient" style={{ fontFamily: "'Noto Sans Odia', sans-serif" }}>
//                     ଭାରତ ବିକାଶ ଅଭିଯାନ
//                   </div>
//                   <div className="text-sm mt-1" style={{ fontFamily: "'Noto Sans Odia', sans-serif" }}>
//                     ସମସ୍ତଙ୍କ ସାଥିରେ ସମସ୍ତଙ୍କ ହିତରେ...
//                   </div>
//                 </div>
                
//                 {navItems.map((item) => (
//                   <motion.div
//                     key={item.name}
//                     whileHover={{ x: 10 }}
//                     transition={{ type: 'spring', stiffness: 300 }}
//                   >
//                     <Link
//                       href={item.href}
//                       onClick={() => setIsOpen(false)}
//                       className="flex items-center space-x-3 text-white hover:bg-white/20 px-4 py-3 rounded-lg transition-all duration-300"
//                     >
//                       <span className="text-xl">{item.icon}</span>
//                       <span className="font-semibold">{item.name}</span>
//                     </Link>
//                   </motion.div>
//                 ))}
                
//                 <motion.a
//                   href="tel:6371602387"
//                   className="flex items-center justify-center space-x-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 mt-4"
//                 >
//                   <span>📞 Call Now</span>
//                   <span>6371602387</span>
//                 </motion.a>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.nav>
//   );
// }

// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { FaBars, FaTimes, FaUserPlus, FaUsers, FaHome, FaInfoCircle } from 'react-icons/fa';
// import { motion, AnimatePresence } from 'framer-motion';
// import Image from 'next/image';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { name: 'Home', href: '/', icon: <FaHome /> },
//     { name: 'Register', href: '/register', icon: <FaUserPlus /> },
//     { name: 'Members', href: '/members', icon: <FaUsers /> },
//     { name: 'Chairman', href: '#chairman', icon: <FaInfoCircle /> },
//   ];

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//         scrolled
//           ? 'glass-effect shadow-lg py-3'
//           : 'bg-gradient-to-r from-blue-600 to-green-600 py-4'
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="flex items-center space-x-3"
//           >
//             <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg">
//               {/* Replace with your logo */}
//               <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
//                 BBA
//               </div>
//             </div>
//             <Link href="/" className="text-white">
//               <div className="font-bold text-xl">Bharat Bikash</div>
//               <div className="text-sm text-yellow-300">Abhijan</div>
//             </Link>
//           </motion.div>

//           {/* Tagline - Visible on desktop */}
//           <div className="hidden md:block text-center">
//             <div className="text-white font-semibold">
//               <div className="text-sm odiya-gradient font-bold">
//                 ଭାରତ ବିକାଶ ଅଭିଯାନ
//               </div>
//               <div className="text-xs mt-1">
//                 ସମସ୍ତଙ୍କ ସାଥିରେ ସମସ୍ତଙ୍କ ହିତରେ...
//               </div>
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-6">
//             {navItems.map((item, index) => (
//               <motion.div
//                 key={item.name}
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <Link
//                   href={item.href}
//                   className="flex items-center space-x-2 text-white hover:text-yellow-300 transition-colors duration-300 group"
//                 >
//                   <span className="text-lg">{item.icon}</span>
//                   <span className="font-semibold relative">
//                     {item.name}
//                     <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
//                   </span>
//                 </Link>
//               </motion.div>
//             ))}
//             {/* Contact Button */}
//             <motion.a
//               href="tel:6371602387"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2"
//             >
//               <span>📞</span>
//               <span>6371602387</span>
//             </motion.a>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden text-white text-2xl focus:outline-none"
//           >
//             {isOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               className="md:hidden overflow-hidden"
//             >
//               <div className="pt-4 pb-3 space-y-3">
//                 <div className="text-center mb-4 text-white">
//                   <div className="font-bold odiya-gradient">
//                     ଭାରତ ବିକାଶ ଅଭିଯାନ
//                   </div>
//                   <div className="text-sm mt-1">
//                     ସମସ୍ତଙ୍କ ସାଥିରେ ସମସ୍ତଙ୍କ ହିତରେ...
//                   </div>
//                 </div>
                
//                 {navItems.map((item) => (
//                   <motion.div
//                     key={item.name}
//                     whileHover={{ x: 10 }}
//                     transition={{ type: 'spring', stiffness: 300 }}
//                   >
//                     <Link
//                       href={item.href}
//                       onClick={() => setIsOpen(false)}
//                       className="flex items-center space-x-3 text-white hover:bg-white/20 px-4 py-3 rounded-lg transition-all duration-300"
//                     >
//                       <span className="text-xl">{item.icon}</span>
//                       <span className="font-semibold">{item.name}</span>
//                     </Link>
//                   </motion.div>
//                 ))}
                
//                 <motion.a
//                   href="tel:6371602387"
//                   className="flex items-center justify-center space-x-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 mt-4"
//                 >
//                   <span>📞 Call Now</span>
//                   <span>6371602387</span>
//                 </motion.a>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.nav>
//   );
// }

// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { FaBars, FaTimes, FaUserPlus, FaUsers, FaHome } from 'react-icons/fa';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { name: 'Home', href: '/', icon: <FaHome /> },
//     { name: 'Register', href: '/register', icon: <FaUserPlus /> },
//     { name: 'Members', href: '/members', icon: <FaUsers /> },
//   ];

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//         scrolled
//           ? 'glass-effect shadow-lg py-3'
//           : 'bg-gradient-to-r from-blue-600 to-green-600 py-4'
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="flex items-center space-x-2"
//           >
//             <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
//               <span className="text-blue-600 font-bold text-xl">BBA</span>
//             </div>
//             <Link href="/" className="text-white font-bold text-2xl">
//               Bharat Bikas <span className="text-yellow-300">Abhijan</span>
//             </Link>
//           </motion.div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navItems.map((item, index) => (
//               <motion.div
//                 key={item.name}
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <Link
//                   href={item.href}
//                   className="flex items-center space-x-2 text-white hover:text-yellow-300 transition-colors duration-300 group"
//                 >
//                   <span className="text-lg">{item.icon}</span>
//                   <span className="font-semibold relative">
//                     {item.name}
//                     <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
//                   </span>
//                 </Link>
//               </motion.div>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden text-white text-2xl focus:outline-none"
//           >
//             {isOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               className="md:hidden overflow-hidden"
//             >
//               <div className="pt-4 pb-3 space-y-3">
//                 {navItems.map((item) => (
//                   <motion.div
//                     key={item.name}
//                     whileHover={{ x: 10 }}
//                     transition={{ type: 'spring', stiffness: 300 }}
//                   >
//                     <Link
//                       href={item.href}
//                       onClick={() => setIsOpen(false)}
//                       className="flex items-center space-x-3 text-white hover:bg-white/20 px-4 py-3 rounded-lg transition-all duration-300"
//                     >
//                       <span className="text-xl">{item.icon}</span>
//                       <span className="font-semibold">{item.name}</span>
//                     </Link>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.nav>
//   );
// }