'use client';

import { motion } from 'framer-motion';
import { FaQuoteLeft, FaQuoteRight, FaAward, FaGraduationCap } from 'react-icons/fa';
import AnimatedSection from '@/components/AnimatedSection';
import Image from 'next/image';

export default function ChairmanCard() {
  return (
    <AnimatedSection>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 odiya-gradient" style={{ fontFamily: "'Noto Sans Odia', sans-serif" }}>
            ଅଧ୍ୟକ୍ଷଙ୍କ ସନ୍ଦେଶ
          </h2>
          <p className="text-2xl font-bold gradient-text">Message from Chairman</p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="md:flex">
            {/* Left Side - Photo & Info */}
            <div className="md:w-1/3 bg-gradient-to-b from-blue-50 to-green-50 p-8">
              <div className="flex flex-col items-center">
                {/* Photo Frame */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="relative mb-6"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
                  <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <Image
                      src="/bva_chairman.jpeg"
                      alt="Prof. Bhakti Ranjan - Chairman"
                      width={256}
                      height={256}
                      className="object-cover w-full h-full"
                      priority
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-center"
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Prof. Bhakti Ranjan
                  </h3>
                  
                  {/* Qualifications */}
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold flex items-center">
                      <FaGraduationCap className="mr-1" /> M.Sc
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold flex items-center">
                      <FaGraduationCap className="mr-1" /> M.Phil
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold flex items-center">
                      <FaAward className="mr-1" /> Ph.D
                    </span>
                  </div>

                  {/* Signature */}
                  <div className="mt-6 p-4 bg-white rounded-xl shadow-inner">
                    <div className="text-gray-500 text-sm mb-2 text-center">Signature</div>
                    <div className="relative h-12 w-48 mx-auto">
                      <Image
                        src="/bva_digisign.jpeg"
                        alt="Prof. Bhakti Ranjan Signature"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="text-center text-sm text-gray-600 mt-2">
                      Prof. Bhakti Ranjan
                    </div>
                  </div>

                  {/* Visiting Card */}
                  {/* <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-6"
                  >
                    <div className="text-gray-500 text-sm mb-2 text-center">Visiting Card</div>
                    <div className="relative h-40 w-64 mx-auto rounded-lg overflow-hidden shadow-lg border border-gray-200">
                      <Image
                        src="/bva_chairman_visitingcard.jpeg"
                        alt="Prof. Bhakti Ranjan Visiting Card"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </motion.div> */}
                </motion.div>
              </div>
            </div>

            {/* Right Side - Message */}
            <div className="md:w-2/3 p-8 md:p-12">
              <div className="relative">
                <FaQuoteLeft className="text-blue-200 text-4xl mb-4" />
                
                <div className="space-y-6">
                  {/* Odia Message */}
                  <div>
                    {/* <h4 className="text-xl font-bold mb-3 odiya-gradient" style={{ fontFamily: "'Noto Sans Odia', sans-serif" }}>
                      ଓଡ଼ିଆ ସନ୍ଦେଶ:
                    </h4> */}
                    <p className="text-gray-700 text-lg leading-relaxed" style={{ fontFamily: "'Noto Sans Odia', sans-serif" }}>
                      ଭାରତ ବିକାଶ ଅଭିଯାନ ଏକ ସାମାଜିକ ସଂଘଠନ! ରାଷ୍ଟ୍ରବାଦୀ ନାଗରିକ ଶୃଷ୍ଟି କରି ସେମାନଙ୍କୁ ବିଭିନ୍ନ ଦିଗରେ ଆର୍ଥିକ ସ୍ୱଚ୍ଛଳ କରି ଭାରତ ମା ସେବାରେ ଲଗାଇ ଭାରତ କୁ ଆଗାମୀ ଦିନରେ ବିଶ୍ଵଗୁରୁ କରାଇବା ହିଁ ଆମର ମୁଖ୍ୟ ଏବଂ ଏକମାତ୍ର ଲକ୍ଷ୍ୟ.. ଜୟ ମା ଭାରତୀ...ଜୟ ଜଗନ୍ନାଥ 🙏🏻
                    </p>
                  </div>

                  {/* English Message */}
                  <div>
                    {/* <h4 className="text-xl font-bold mb-3 gradient-text">
                      English Message:
                    </h4> */}
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Bharat Bikash Abhijan is a social organization. Our main and only goal is to create patriotic citizens, make them financially prosperous in various fields, engage them in the service of Mother India, and make India a world leader in the coming days.. Jay Maa Bharati... Jay Jagannath 🙏🏻
                    </p>
                  </div>

                  {/* Vision Statement */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl border-l-4 border-blue-500"
                  >
                    <div className="font-bold text-gray-800 mb-2">Our Vision:</div>
                    <div className="text-gray-600">
                      &quot;Empowering every citizen, enriching every community, elevating the nation.&quot;
                    </div>
                  </motion.div>
                </div>

                <FaQuoteRight className="text-green-200 text-4xl mt-4 ml-auto" />
              </div>

              {/* Contact Card */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8 p-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl text-white"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold">Bharat Bikash Abhijan</div>
                    <div className="text-sm opacity-90">Contact: 6371602387</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm opacity-90">SEBA ENTERPRISES</div>
                    <div className="text-xs opacity-75">A Social Welfare Initiative</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

// 'use client';

// import { motion } from 'framer-motion';
// import { FaQuoteLeft, FaQuoteRight, FaAward, FaGraduationCap } from 'react-icons/fa';
// import AnimatedSection from '@/components/AnimatedSection';

// export default function ChairmanCard() {
//   return (
//     <AnimatedSection>
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 odiya-gradient">
//             ଅଧ୍ୟକ୍ଷଙ୍କ ସନ୍ଦେଶ
//           </h2>
//           <p className="text-2xl font-bold gradient-text">Message from Chairman</p>
//         </div>

//         <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
//           <div className="md:flex">
//             {/* Left Side - Photo & Info */}
//             <div className="md:w-1/3 bg-gradient-to-b from-blue-50 to-green-50 p-8">
//               <div className="flex flex-col items-center">
//                 {/* Photo Frame */}
//                 <motion.div
//                   initial={{ scale: 0.8, opacity: 0 }}
//                   whileInView={{ scale: 1, opacity: 1 }}
//                   transition={{ duration: 0.8 }}
//                   className="relative mb-6"
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
//                   <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
//                     {/* Replace with actual chairman photo */}
//                     <div className="w-full h-full bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center text-white">
//                       <div className="text-center">
//                         <div className="text-4xl font-bold">BR</div>
//                         <div className="text-sm mt-2">Chairman</div>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>

//                 <motion.div
//                   initial={{ y: 20, opacity: 0 }}
//                   whileInView={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.2 }}
//                   className="text-center"
//                 >
//                   <h3 className="text-2xl font-bold text-gray-800 mb-2">
//                     Prof. Bhakti Ranjan
//                   </h3>
                  
//                   {/* Qualifications */}
//                   <div className="flex flex-wrap justify-center gap-2 mb-4">
//                     <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold flex items-center">
//                       <FaGraduationCap className="mr-1" /> M.Sc
//                     </span>
//                     <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold flex items-center">
//                       <FaGraduationCap className="mr-1" /> M.Phil
//                     </span>
//                     <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold flex items-center">
//                       <FaAward className="mr-1" /> Ph.D
//                     </span>
//                   </div>

//                   {/* Signature */}
//                   <div className="mt-6 p-4 bg-white rounded-xl shadow-inner">
//                     <div className="text-gray-500 text-sm mb-2">Signature</div>
//                     <div className="font-signature text-2xl text-blue-700">
//                       Prof. Bhakti Ranjan
//                     </div>
//                   </div>
//                 </motion.div>
//               </div>
//             </div>

//             {/* Right Side - Message */}
//             <div className="md:w-2/3 p-8 md:p-12">
//               <div className="relative">
//                 <FaQuoteLeft className="text-blue-200 text-4xl mb-4" />
                
//                 <div className="space-y-6">
//                   {/* Odia Message */}
//                   <div>
//                     <h4 className="text-xl font-bold mb-3 odiya-gradient">
//                       ଓଡ଼ିଆ ସନ୍ଦେଶ:
//                     </h4>
//                     <p className="text-gray-700 text-lg leading-relaxed">
//                       ଭାରତ ବିକାଶ ଅଭିଯାନ ଏକ ସାମାଜିକ ସଂଘଠନ! ରାଷ୍ଟ୍ରବାଦୀ ନାଗରିକ ଶୃଷ୍ଟି କରି ସେମାନଙ୍କୁ ବିଭିନ୍ନ ଦିଗରେ ଆର୍ଥିକ ସ୍ୱଚ୍ଛଳ କରି ଭାରତ ମା ସେବାରେ ଲଗାଇ ଭାରତ କୁ ଆଗାମୀ ଦିନରେ ବିଶ୍ଵଗୁରୁ କରାଇବା ହିଁ ଆମର ମୁଖ୍ୟ ଏବଂ ଏକମାତ୍ର ଲକ୍ଷ୍ୟ.. ଜୟ ମା ଭାରତୀ...ଜୟ ଜଗନ୍ନାଥ 🙏🏻
//                     </p>
//                   </div>

//                   {/* English Message */}
//                   <div>
//                     <h4 className="text-xl font-bold mb-3 gradient-text">
//                       English Message:
//                     </h4>
//                     <p className="text-gray-700 text-lg leading-relaxed">
//                       Bharat Bikash Abhijan is a social organization. Our main and only goal is to create patriotic citizens, make them financially prosperous in various fields, engage them in the service of Mother India, and make India a world leader in the coming days.. Jay Maa Bharati... Jay Jagannath 🙏🏻
//                     </p>
//                   </div>

//                   {/* Vision Statement */}
//                   <motion.div
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{ delay: 0.4 }}
//                     className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl border-l-4 border-blue-500"
//                   >
//                     <div className="font-bold text-gray-800 mb-2">Our Vision:</div>
//                     <div className="text-gray-600">
//                       &quot;Empowering every citizen, enriching every community, elevating the nation.&quot;
//                     </div>
//                   </motion.div>
//                 </div>

//                 <FaQuoteRight className="text-green-200 text-4xl mt-4 ml-auto" />
//               </div>

//               {/* Contact Card */}
//               <motion.div
//                 initial={{ y: 20, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.6 }}
//                 className="mt-8 p-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl text-white"
//               >
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <div className="font-bold">Bharat Bikash Abhijan</div>
//                     <div className="text-sm opacity-90">Contact: 6371602387</div>
//                   </div>
//                   <div className="text-right">
//                     <div className="text-sm opacity-90">SEBA ENTERPRISES</div>
//                     <div className="text-xs opacity-75">A Social Welfare Initiative</div>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </AnimatedSection>
//   );
// }