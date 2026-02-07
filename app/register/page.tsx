import RegistrationForm from '@/components/RegistrationForm';
import AnimatedSection from '@/components/AnimatedSection';
import { FaInfoCircle, FaShieldAlt, FaUserCheck } from 'react-icons/fa';
import Image from 'next/image';

export default function RegisterPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-12">
            <div className="mb-6 flex justify-center">
              <div className="relative w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src="/bva_logo.jpeg"
                  alt="BVA Logo"
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Member Registration
            </h1>
            <p className="text-xl bg-slate-400 text-gray-600 p-4 rounded-lg max-w-3xl mx-auto">
              Join{' '}
  <span className="text-orange-500">Bharat</span>{' '}
  <span className="text-white">Bikash</span>{' '}
  <span className="text-green-600">Abhijan</span>{' '} community. Fill in your details below to register.
              Registration requires valid senior leader referral.
            </p>
          </div>
        </AnimatedSection>

        {/* Important Notes */}
        <AnimatedSection delay={0.2}>
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <FaInfoCircle className="text-blue-600 text-2xl mr-3" />
                  <h3 className="font-bold text-lg text-blue-800">Referral Required</h3>
                </div>
                <p className="text-blue-700">
                  You must have a senior leader&apos;s referral ID and name to complete registration.
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <FaShieldAlt className="text-green-600 text-2xl mr-3" />
                  <h3 className="font-bold text-lg text-green-800">Secure Registration</h3>
                </div>
                <p className="text-green-700">
                  Your information is protected with enterprise-grade security measures.
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <FaUserCheck className="text-purple-600 text-2xl mr-3" />
                  <h3 className="font-bold text-lg text-purple-800">Instant ID</h3>
                </div>
                <p className="text-purple-700">
                  Receive your unique registration ID immediately after successful registration.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Registration Form */}
        {/* <AnimatedSection delay={0.4}> */}
          <RegistrationForm />
        {/* </AnimatedSection> */}

        {/* Additional Info */}
        <AnimatedSection delay={0.6}>
          <div className="max-w-4xl mx-auto mt-16 p-8 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 text-center gradient-text">
              Registration Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Fill Form', desc: 'Complete all required fields accurately' },
                { step: '02', title: 'Referral Verification', desc: 'Senior leader details verification' },
                { step: '03', title: 'ID Generation', desc: 'Automatic unique ID generation' },
                { step: '04', title: 'Confirmation', desc: 'Registration confirmation email/SMS' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

// import RegistrationForm from '@/components/RegistrationForm';
// import AnimatedSection from '@/components/AnimatedSection';
// import { FaInfoCircle, FaShieldAlt, FaUserCheck } from 'react-icons/fa';

// export default function RegisterPage() {
//   return (
//     <div className="py-12">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <AnimatedSection>
//           <div className="text-center mb-12">
//             <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
//               Member Registration
//             </h1>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Join Bharat Bikas Abhijan community. Fill in your details below to register.
//               Registration requires valid senior leader referral.
//             </p>
//           </div>
//         </AnimatedSection>

//         {/* Important Notes */}
//         <AnimatedSection delay={0.2}>
//           <div className="max-w-4xl mx-auto mb-12">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
//                 <div className="flex items-center mb-4">
//                   <FaInfoCircle className="text-blue-600 text-2xl mr-3" />
//                   <h3 className="font-bold text-lg text-blue-800">Referral Required</h3>
//                 </div>
//                 <p className="text-blue-700">
//                   You must have a senior leader&apos;s referral ID and name to complete registration.
//                 </p>
//               </div>

//               <div className="bg-green-50 border border-green-200 rounded-xl p-6">
//                 <div className="flex items-center mb-4">
//                   <FaShieldAlt className="text-green-600 text-2xl mr-3" />
//                   <h3 className="font-bold text-lg text-green-800">Secure Registration</h3>
//                 </div>
//                 <p className="text-green-700">
//                   Your information is protected with enterprise-grade security measures.
//                 </p>
//               </div>

//               <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
//                 <div className="flex items-center mb-4">
//                   <FaUserCheck className="text-purple-600 text-2xl mr-3" />
//                   <h3 className="font-bold text-lg text-purple-800">Instant ID</h3>
//                 </div>
//                 <p className="text-purple-700">
//                   Receive your unique registration ID immediately after successful registration.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </AnimatedSection>

//         {/* Registration Form */}
//         <AnimatedSection delay={0.4}>
//           <RegistrationForm />
//         </AnimatedSection>

//         {/* Additional Info */}
//         <AnimatedSection delay={0.6}>
//           <div className="max-w-4xl mx-auto mt-16 p-8 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl">
//             <h3 className="text-2xl font-bold mb-6 text-center gradient-text">
//               Registration Process
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//               {[
//                 { step: '01', title: 'Fill Form', desc: 'Complete all required fields accurately' },
//                 { step: '02', title: 'Referral Verification', desc: 'Senior leader details verification' },
//                 { step: '03', title: 'ID Generation', desc: 'Automatic unique ID generation' },
//                 { step: '04', title: 'Confirmation', desc: 'Registration confirmation email/SMS' },
//               ].map((item, index) => (
//                 <div key={index} className="text-center">
//                   <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
//                     {item.step}
//                   </div>
//                   <h4 className="font-bold text-lg mb-2">{item.title}</h4>
//                   <p className="text-gray-600 text-sm">{item.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </AnimatedSection>
//       </div>
//     </div>
//   );
// }