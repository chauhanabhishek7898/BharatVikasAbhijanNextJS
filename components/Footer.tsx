'use client';

import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaInfoCircle } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Footer() {
  const router = useRouter();
  const contactNumber = "6371602387";

  const handleChairmanClick = () => {
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
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Register', href: '/register' },
    { name: 'Members', href: '/members' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src="/bva_logo.jpeg"
                  alt="Bharat Bikash Abhijan Logo"
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">
                  Bharat Bikash <span className="text-yellow-300">Abhijan</span>
                </h3>
                <div className="text-xs mt-1 text-gray-300">
                  A social welfare initiative
                </div>
              </div>
            </motion.div>
            
            <div className="mt-2">
              <div className="text-sm font-bold odiya-gradient" style={{ fontFamily: "'Noto Sans Odia', sans-serif" }}>
                ଭାରତ ବିକାଶ ଅଭିଯାନ
              </div>
              <div className="text-xs text-gray-300" style={{ fontFamily: "'Noto Sans Odia', sans-serif" }}>
                ସମସ୍ତଙ୍କ ସାଥିରେ ସମସ୍ତଙ୍କ ହିତରେ...
              </div>
            </div>
            
            <p className="text-gray-300 text-sm">
              Empowering communities, transforming lives. Join us in the mission for a developed Bharat.
            </p>
            <div className="flex space-x-4">
              {[FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaWhatsapp].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-colors duration-300"
                >
                  <Icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-yellow-300">Quick Links</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:w-4 transition-all duration-300"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
              {/* Chairman Link */}
              <li>
                <button
                  onClick={handleChairmanClick}
                  className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 flex items-center group w-full text-left"
                >
                  <FaInfoCircle className="text-blue-500 mr-3" />
                  Chairman&apos;s Message
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-yellow-300">Contact Us</h4>
            <div className="space-y-4">
              <motion.a
                href={`tel:${contactNumber}`}
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 group"
              >
                <div className="p-2 bg-green-500/20 rounded-lg group-hover:bg-green-500/30 transition-colors">
                  <FaPhone className="text-green-400 text-xl" />
                </div>
                <div>
                  <span className="text-gray-300 group-hover:text-white">{contactNumber}</span>
                  <div className="text-xs text-gray-400">SEBA ENTERPRISES</div>
                </div>
              </motion.a>
              
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <FaMapMarkerAlt className="text-blue-400 text-xl" />
                </div>
                <span className="text-gray-300">New Delhi, India</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-red-500/20 rounded-lg">
                  <FaEnvelope className="text-red-400 text-xl" />
                </div>
                <span className="text-gray-300">info@bbaindia.org</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-yellow-300">Newsletter</h4>
            <p className="text-gray-300 mb-4 text-sm">Subscribe for updates and announcements</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold py-3 rounded-lg transition-all duration-300"
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
          className="border-t border-white/20 mt-12 pt-8 text-center text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} Bharat Bikash Abhijan. All rights reserved.</p>
          <p className="mt-2 text-sm">Designed with ❤️ for a better Bharat</p>
          <div className="mt-4 text-xs opacity-75">
            Registration: SEBA ENTERPRISES | Contact: {contactNumber}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

// 'use client';

// import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import Image from 'next/image';

// export default function Footer() {
//   const contactNumber = "6371602387";

//   return (
//     <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white pt-12 pb-8">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Organization Info */}
//           <div className="space-y-4">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               className="flex items-center space-x-2"
//             >
//               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden">
//                 <Image
//                   src="/bva_logo.jpeg"
//                   alt="Bharat Bikash Abhijan Logo"
//                   width={48}
//                   height={48}
//                   className="object-cover w-full h-full"
//                 />
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold">
//                   Bharat Bikash <span className="text-yellow-300">Abhijan</span>
//                 </h3>
//                 <div className="text-xs mt-1 text-gray-300">
//                   A social welfare initiative
//                 </div>
//               </div>
//             </motion.div>
            
//             <div className="mt-2">
//               <div className="text-sm font-bold odiya-gradient" style={{ fontFamily: "'Noto Sans Odia', sans-serif" }}>
//                 ଭାରତ ବିକାଶ ଅଭିଯାନ
//               </div>
//               <div className="text-xs text-gray-300" style={{ fontFamily: "'Noto Sans Odia', sans-serif" }}>
//                 ସମସ୍ତଙ୍କ ସାଥିରେ ସମସ୍ତଙ୍କ ହିତରେ...
//               </div>
//             </div>
            
//             <p className="text-gray-300 text-sm">
//               Empowering communities, transforming lives. Join us in the mission for a developed Bharat.
//             </p>
//             <div className="flex space-x-4">
//               {[FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaWhatsapp].map((Icon, index) => (
//                 <motion.a
//                   key={index}
//                   href="#"
//                   whileHover={{ scale: 1.1, rotate: 5 }}
//                   className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-colors duration-300"
//                 >
//                   <Icon className="text-lg" />
//                 </motion.a>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-xl font-bold mb-6 text-yellow-300">Quick Links</h4>
//             <ul className="space-y-3">
//               {['Home', 'Register', 'Members', 'Chairman', 'Contact'].map((item) => (
//                 <li key={item}>
//                   <Link
//                     href={`/${item.toLowerCase().replace(' ', '-')}`}
//                     className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 flex items-center group"
//                   >
//                     <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:w-4 transition-all duration-300"></span>
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h4 className="text-xl font-bold mb-6 text-yellow-300">Contact Us</h4>
//             <div className="space-y-4">
//               <motion.a
//                 href={`tel:${contactNumber}`}
//                 whileHover={{ x: 5 }}
//                 className="flex items-center space-x-3 group"
//               >
//                 <div className="p-2 bg-green-500/20 rounded-lg group-hover:bg-green-500/30 transition-colors">
//                   <FaPhone className="text-green-400 text-xl" />
//                 </div>
//                 <div>
//                   <span className="text-gray-300 group-hover:text-white">{contactNumber}</span>
//                   <div className="text-xs text-gray-400">SEBA ENTERPRISES</div>
//                 </div>
//               </motion.a>
              
//               <div className="flex items-center space-x-3">
//                 <div className="p-2 bg-blue-500/20 rounded-lg">
//                   <FaMapMarkerAlt className="text-blue-400 text-xl" />
//                 </div>
//                 <span className="text-gray-300">New Delhi, India</span>
//               </div>
              
//               <div className="flex items-center space-x-3">
//                 <div className="p-2 bg-red-500/20 rounded-lg">
//                   <FaEnvelope className="text-red-400 text-xl" />
//                 </div>
//                 <span className="text-gray-300">info@bbaindia.org</span>
//               </div>
//             </div>
//           </div>

//           {/* Newsletter */}
//           <div>
//             <h4 className="text-xl font-bold mb-6 text-yellow-300">Newsletter</h4>
//             <p className="text-gray-300 mb-4 text-sm">Subscribe for updates and announcements</p>
//             <form className="space-y-3">
//               <input
//                 type="email"
//                 placeholder="Your email"
//                 className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
//               />
//               <motion.button
//                 type="submit"
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold py-3 rounded-lg transition-all duration-300"
//               >
//                 Subscribe
//               </motion.button>
//             </form>
//           </div>
//         </div>

//         {/* Copyright */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="border-t border-white/20 mt-12 pt-8 text-center text-gray-400"
//         >
//           <p>&copy; {new Date().getFullYear()} Bharat Bikash Abhijan. All rights reserved.</p>
//           <p className="mt-2 text-sm">Designed with ❤️ for a better Bharat</p>
//           <div className="mt-4 text-xs opacity-75">
//             Registration: SEBA ENTERPRISES | Contact: {contactNumber}
//           </div>
//         </motion.div>
//       </div>
//     </footer>
//   );
// }

// 'use client';

// import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
// import Link from 'next/link';
// import { motion } from 'framer-motion';

// export default function Footer() {
//   const contactNumber = "6371602387";

//   return (
//     <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white pt-12 pb-8">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Organization Info */}
//           <div className="space-y-4">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               className="flex items-center space-x-2"
//             >
//               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden">
//                 <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
//                   BBA
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold">
//                   Bharat Bikash <span className="text-yellow-300">Abhijan</span>
//                 </h3>
//                 <div className="text-xs mt-1 text-gray-300">
//                   A social welfare initiative
//                 </div>
//               </div>
//             </motion.div>
            
//             <div className="mt-2">
//               <div className="text-sm font-bold odiya-gradient">
//                 ଭାରତ ବିକାଶ ଅଭିଯାନ
//               </div>
//               <div className="text-xs text-gray-300">
//                 ସମସ୍ତଙ୍କ ସାଥିରେ ସମସ୍ତଙ୍କ ହିତରେ...
//               </div>
//             </div>
            
//             <p className="text-gray-300 text-sm">
//               Empowering communities, transforming lives. Join us in the mission for a developed Bharat.
//             </p>
//             <div className="flex space-x-4">
//               {[FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaWhatsapp].map((Icon, index) => (
//                 <motion.a
//                   key={index}
//                   href="#"
//                   whileHover={{ scale: 1.1, rotate: 5 }}
//                   className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-colors duration-300"
//                 >
//                   <Icon className="text-lg" />
//                 </motion.a>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-xl font-bold mb-6 text-yellow-300">Quick Links</h4>
//             <ul className="space-y-3">
//               {['Home', 'Register', 'Members', 'Chairman', 'Contact'].map((item) => (
//                 <li key={item}>
//                   <Link
//                     href={`/${item.toLowerCase().replace(' ', '-')}`}
//                     className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 flex items-center group"
//                   >
//                     <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:w-4 transition-all duration-300"></span>
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h4 className="text-xl font-bold mb-6 text-yellow-300">Contact Us</h4>
//             <div className="space-y-4">
//               <motion.a
//                 href={`tel:${contactNumber}`}
//                 whileHover={{ x: 5 }}
//                 className="flex items-center space-x-3 group"
//               >
//                 <div className="p-2 bg-green-500/20 rounded-lg group-hover:bg-green-500/30 transition-colors">
//                   <FaPhone className="text-green-400 text-xl" />
//                 </div>
//                 <div>
//                   <span className="text-gray-300 group-hover:text-white">{contactNumber}</span>
//                   <div className="text-xs text-gray-400">SEBA ENTERPRISES</div>
//                 </div>
//               </motion.a>
              
//               <div className="flex items-center space-x-3">
//                 <div className="p-2 bg-blue-500/20 rounded-lg">
//                   <FaMapMarkerAlt className="text-blue-400 text-xl" />
//                 </div>
//                 <span className="text-gray-300">New Delhi, India</span>
//               </div>
              
//               <div className="flex items-center space-x-3">
//                 <div className="p-2 bg-red-500/20 rounded-lg">
//                   <FaEnvelope className="text-red-400 text-xl" />
//                 </div>
//                 <span className="text-gray-300">info@bbaindia.org</span>
//               </div>
//             </div>
//           </div>

//           {/* Newsletter */}
//           <div>
//             <h4 className="text-xl font-bold mb-6 text-yellow-300">Newsletter</h4>
//             <p className="text-gray-300 mb-4 text-sm">Subscribe for updates and announcements</p>
//             <form className="space-y-3">
//               <input
//                 type="email"
//                 placeholder="Your email"
//                 className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
//               />
//               <motion.button
//                 type="submit"
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold py-3 rounded-lg transition-all duration-300"
//               >
//                 Subscribe
//               </motion.button>
//             </form>
//           </div>
//         </div>

//         {/* Copyright */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="border-t border-white/20 mt-12 pt-8 text-center text-gray-400"
//         >
//           <p>&copy; {new Date().getFullYear()} Bharat Bikash Abhijan. All rights reserved.</p>
//           <p className="mt-2 text-sm">Designed with ❤️ for a better Bharat</p>
//           <div className="mt-4 text-xs opacity-75">
//             Registration: SEBA ENTERPRISES | Contact: {contactNumber}
//           </div>
//         </motion.div>
//       </div>
//     </footer>
//   );
// }

// import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
// import Link from 'next/link';

// export default function Footer() {
//   return (
//     <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white pt-12 pb-8">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Organization Info */}
//           <div className="space-y-4">
//             <div className="flex items-center space-x-2">
//               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
//                 <span className="text-blue-600 font-bold text-2xl">BBA</span>
//               </div>
//               <h3 className="text-2xl font-bold">
//                 Bharat Bikas <span className="text-yellow-300">Abhijan</span>
//               </h3>
//             </div>
//             <p className="text-gray-300">
//               Empowering communities, transforming lives. Join us in the mission for a developed Bharat.
//             </p>
//             <div className="flex space-x-4">
//               {[FaFacebook, FaTwitter, FaInstagram, FaYoutube].map((Icon, index) => (
//                 <a
//                   key={index}
//                   href="#"
//                   className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-colors duration-300"
//                 >
//                   <Icon className="text-lg" />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-xl font-bold mb-6 text-yellow-300">Quick Links</h4>
//             <ul className="space-y-3">
//               {['Home', 'Register', 'Members', 'About Us', 'Contact'].map((item) => (
//                 <li key={item}>
//                   <Link
//                     href={`/${item.toLowerCase().replace(' ', '-')}`}
//                     className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 flex items-center"
//                   >
//                     <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h4 className="text-xl font-bold mb-6 text-yellow-300">Contact Us</h4>
//             <div className="space-y-4">
//               <div className="flex items-center space-x-3">
//                 <FaMapMarkerAlt className="text-blue-400 text-xl" />
//                 <span className="text-gray-300">New Delhi, India</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <FaPhone className="text-blue-400 text-xl" />
//                 <span className="text-gray-300">+91 9876543210</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <FaEnvelope className="text-blue-400 text-xl" />
//                 <span className="text-gray-300">info@bbaindia.org</span>
//               </div>
//             </div>
//           </div>

//           {/* Newsletter */}
//           <div>
//             <h4 className="text-xl font-bold mb-6 text-yellow-300">Newsletter</h4>
//             <p className="text-gray-300 mb-4">Subscribe for updates and announcements</p>
//             <form className="space-y-3">
//               <input
//                 type="email"
//                 placeholder="Your email"
//                 className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-blue-500"
//               />
//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
//               >
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="border-t border-white/20 mt-12 pt-8 text-center text-gray-400">
//           <p>&copy; {new Date().getFullYear()} Bharat Bikas Abhijan. All rights reserved.</p>
//           <p className="mt-2">Designed with ❤️ for a better Bharat</p>
//         </div>
//       </div>
//     </footer>
//   );
// }