'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaUser, FaEnvelope, FaPhone, FaMapMarker, FaCalendar, 
  FaLock, FaIdCard, FaVenusMars, FaGraduationCap, 
  FaBriefcase, FaTint, FaHashtag, FaLandmark, 
  FaBuilding, FaGlobeAsia, FaWhatsapp 
} from 'react-icons/fa';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    // Personal Information
    name: '',
    gender: '',
    dateOfBirth: '',
    age: '',
    religion: '',
    caste: '',
    educationalQualification: '',
    occupation: '',
    bloodGroup: '',
    
    // Address Information
    wardNo: '',
    boothNo: '',
    panchayat: '',
    zillaparisadZone: '',
    block: '',
    constituency: '',
    district: '',
    state: '',
    // address: '',
    // pincode: '',
    
    // Contact Information
    mobileNo: '',
    whatsappNo: '',
    email: '',
    
    // Referral Information
    referralId: '',
    referralName: '',
    
    // Account Information
    password: '',
    confirmPassword: '',
    role: 'member',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Calculate age when date of birth changes
  useEffect(() => {
    if (formData.dateOfBirth) {
      const birthDate = new Date(formData.dateOfBirth);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      
      setFormData(prev => ({
        ...prev,
        age: age.toString()
      }));
    }
  }, [formData.dateOfBirth]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setMessage({ type: 'error', text: 'Passwords do not match' });
      setLoading(false);
      return;
    }

    // Prepare data for API
    const submissionData = {
      name: formData.name,
      gender: formData.gender,
      dateOfBirth: formData.dateOfBirth,
      age: parseInt(formData.age),
      religion: formData.religion,
      caste: formData.caste,
      educationalQualification: formData.educationalQualification,
      occupation: formData.occupation,
      bloodGroup: formData.bloodGroup,
      wardNo: formData.wardNo,
      boothNo: formData.boothNo,
      panchayat: formData.panchayat,
      zillaparisadZone: formData.zillaparisadZone,
      block: formData.block,
      constituency: formData.constituency,
      district: formData.district,
      state: formData.state,
      // address: formData.address,
      // pincode: formData.pincode,
      mobileNo: formData.mobileNo,
      whatsappNo: formData.whatsappNo,
      email: formData.email,
      referralId: formData.referralId,
      referralName: formData.referralName,
      password: formData.password,
      role: formData.role,
    };

    console.log('Submitting data:', submissionData);

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData),
      });

      const data = await response.json();
      console.log('Registration response:', data);

      if (data.success) {
        setMessage({
          type: 'success',
          text: `Registration successful! Your User ID: ${data.userId}, Registration ID: ${data.registrationId}. Status: Inactive - Admin will activate your account.`,
        });
        // Reset form
        setFormData({
          name: '',
          gender: '',
          dateOfBirth: '',
          age: '',
          religion: '',
          caste: '',
          educationalQualification: '',
          occupation: '',
          bloodGroup: '',
          wardNo: '',
          boothNo: '',
          panchayat: '',
          zillaparisadZone: '',
          block: '',
          constituency: '',
          district: '',
          state: '',
          // address: '',
          // pincode: '',
          mobileNo: '',
          whatsappNo: '',
          email: '',
          referralId: '',
          referralName: '',
          password: '',
          confirmPassword: '',
          role: 'member',
        });
      } else {
        setMessage({ type: 'error', text: data.message });
      }
    } catch (error) {
      console.error('Registration error:', error);
      setMessage({ type: 'error', text: 'Registration failed. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  // Field configuration with bilingual labels
  const formFields:any = [
    // Personal Information Section
    { 
      section: 'Personal Information',
      fields: [
        { 
          name: 'name', 
          labelEng: 'Full Name', 
          labelOdia: 'ସମ୍ପୂର୍ଣ ନାମ',
          type: 'text', 
          icon: <FaUser />, 
          required: true 
        },
        { 
          name: 'gender', 
          labelEng: 'Gender', 
          labelOdia: 'ଲିଙ୍ଗ',
          type: 'select', 
          icon: <FaVenusMars />, 
          required: true,
          options: [
            { value: '', label: 'Select Gender' },
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
            { value: 'other', label: 'Other' }
          ]
        },
        { 
          name: 'dateOfBirth', 
          labelEng: 'Date of Birth', 
          labelOdia: 'ଜନ୍ମ ତାରିଖ',
          type: 'date', 
          icon: <FaCalendar />, 
          required: true 
        },
        { 
          name: 'age', 
          labelEng: 'Age', 
          labelOdia: 'ବୟସ',
          type: 'number', 
          icon: <FaUser />, 
          required: true,
          readOnly: true 
        },
        { 
          name: 'religion', 
          labelEng: 'Religion', 
          labelOdia: 'ସମ୍ପ୍ରଦାୟ',
          type: 'text', 
          icon: <FaUser />, 
          required: true 
        },
        { 
          name: 'caste', 
          labelEng: 'Caste', 
          labelOdia: 'ଜାତି',
          type: 'text', 
          icon: <FaUser />, 
          required: true 
        },
        { 
          name: 'educationalQualification', 
          labelEng: 'Educational Qualification', 
          labelOdia: 'ଶିକ୍ଷାଗତ ଯୋଗ୍ୟତା',
          type: 'text', 
          icon: <FaGraduationCap />, 
          required: true 
        },
        { 
          name: 'occupation', 
          labelEng: 'Occupation', 
          labelOdia: 'ବୃତ୍ତି',
          type: 'text', 
          icon: <FaBriefcase />, 
          required: true 
        },
        { 
          name: 'bloodGroup', 
          labelEng: 'Blood Group', 
          labelOdia: 'ରକ୍ତ ଶ୍ରେଣୀ',
          type: 'select', 
          icon: <FaTint />, 
          required: true,
          options: [
            { value: '', label: 'Select Blood Group' },
            { value: 'A+', label: 'A+' },
            { value: 'A-', label: 'A-' },
            { value: 'B+', label: 'B+' },
            { value: 'B-', label: 'B-' },
            { value: 'AB+', label: 'AB+' },
            { value: 'AB-', label: 'AB-' },
            { value: 'O+', label: 'O+' },
            { value: 'O-', label: 'O-' },
            { value: 'unknown', label: 'Unknown' }
          ]
        },
      ]
    },
    // Address Information Section
    { 
      section: 'Address Information',
      fields: [
        { 
          name: 'wardNo', 
          labelEng: 'Ward No.', 
          labelOdia: 'ୱାର୍ଡ ନଂ.',
          type: 'text', 
          icon: <FaHashtag />, 
          required: true 
        },
        { 
          name: 'boothNo', 
          labelEng: 'Booth No.', 
          labelOdia: 'ବୁଥ ନଂ.',
          type: 'text', 
          icon: <FaHashtag />, 
          required: true 
        },
        { 
          name: 'panchayat', 
          labelEng: 'Panchayat', 
          labelOdia: 'ପଂଚାୟତ',
          type: 'text', 
          icon: <FaLandmark />, 
          required: true 
        },
        { 
          name: 'zillaparisadZone', 
          labelEng: 'Zillaparisad Zone', 
          labelOdia: 'ଜିଲ୍ଲାପରିଷଦ ଜୋନ',
          type: 'text', 
          icon: <FaBuilding />, 
          required: true 
        },
        { 
          name: 'block', 
          labelEng: 'Block', 
          labelOdia: 'ବ୍ଲକ',
          type: 'text', 
          icon: <FaBuilding />, 
          required: true 
        },
        { 
          name: 'constituency', 
          labelEng: 'Constituency', 
          labelOdia: 'ନିର୍ବାଚନମଣ୍ଡଳୀ',
          type: 'text', 
          icon: <FaGlobeAsia />, 
          required: true 
        },
        { 
          name: 'district', 
          labelEng: 'District', 
          labelOdia: 'ଜିଲ୍ଲା',
          type: 'text', 
          icon: <FaGlobeAsia />, 
          required: true 
        },
        { 
          name: 'state', 
          labelEng: 'State', 
          labelOdia: 'ରାଜ୍ୟ',
          type: 'text', 
          icon: <FaGlobeAsia />, 
          required: true 
        },
        // { 
        //   name: 'address', 
        //   labelEng: 'Address', 
        //   labelOdia: 'ଠିକାଣା',
        //   type: 'textarea', 
        //   icon: <FaMapMarker />, 
        //   required: true,
        //   colSpan: 'full' 
        // },
        // { 
        //   name: 'pincode', 
        //   labelEng: 'Pincode', 
        //   labelOdia: 'ପିନକୋଡ୍',
        //   type: 'text', 
        //   icon: <FaMapMarker />, 
        //   required: true 
        // },
      ]
    },
    // Contact Information Section
    { 
      section: 'Contact Information',
      fields: [
        { 
          name: 'mobileNo', 
          labelEng: 'Mobile No.', 
          labelOdia: 'ମୋ. ନଂ.',
          type: 'tel', 
          icon: <FaPhone />, 
          required: true 
        },
        { 
          name: 'whatsappNo', 
          labelEng: 'WhatsApp No.', 
          labelOdia: 'ହ୍ୱାଟ୍ସପ ନଂ.',
          type: 'tel', 
          icon: <FaWhatsapp />, 
          required: true 
        },
        { 
          name: 'email', 
          labelEng: 'Email ID', 
          labelOdia: 'ଏମେଲ ଆଇଡି',
          type: 'email', 
          icon: <FaEnvelope />, 
          required: true 
        },
      ]
    },
    // Referral Information Section
    { 
      section: 'Referral Information',
      fields: [
        { 
          name: 'referralId', 
          labelEng: 'Senior Leader ID', 
          labelOdia: 'ବରିଷ୍ଠ ନେତା ଆଇଡି',
          type: 'text', 
          icon: <FaIdCard />, 
          required: true 
        },
        { 
          name: 'referralName', 
          labelEng: 'Senior Leader Name', 
          labelOdia: 'ବରିଷ୍ଠ ନେତା ନାମ',
          type: 'text', 
          icon: <FaUser />, 
          required: true 
        },
      ]
    },
    // Account Information Section
    { 
      section: 'Account Information',
      fields: [
        { 
          name: 'password', 
          labelEng: 'Password', 
          labelOdia: 'ପାସୱାର୍ଡ',
          type: 'password', 
          icon: <FaLock />, 
          required: true 
        },
        { 
          name: 'confirmPassword', 
          labelEng: 'Confirm Password', 
          labelOdia: 'ପାସୱାର୍ଡ ନିଶ୍ଚିତ କରନ୍ତୁ',
          type: 'password', 
          icon: <FaLock />, 
          required: true 
        },
        { 
          name: 'role', 
          labelEng: 'Role', 
          labelOdia: 'ଭୂମିକା',
          type: 'hidden', 
          icon: <FaUser />, 
          required: false,
          defaultValue: 'member' 
        },
      ]
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-6xl mx-auto bg-slate-400 rounded-2xl shadow-2xl overflow-hidden"
    >
      <div className="md:flex">
        {/* Left Side - Form */}
        <div className="md:w-2/3 p-8 overflow-y-auto max-h-screen">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold ">Join{' '}
              {/* Bharat Bikash Abhijan */}
<span className="text-orange-500">Bharat</span>{' '}
            <span className="text-white">Bikash</span>{' '}
            <span className="text-green-600">Abhijan</span>
            </h2>
            <p className="text-gray-600 mt-2">Registration with Senior Leader Referral Required</p>
            <p className="text-sm text-gray-500 mt-1">Default Role: Member | Status: Inactive (Admin will activate)</p>
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

          <form onSubmit={handleSubmit} className="space-y-8">
            {formFields.map((section:any, sectionIndex:any) => (
              <motion.div
                key={section.section}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: sectionIndex * 0.1 }}
                className="border border-gray-200 rounded-xl p-6 bg-gray-50"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-300">
                  {section.section}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {section.fields.map((field:any, fieldIndex:any) => (
                    <motion.div
                      key={field.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: (sectionIndex * 0.05) + (fieldIndex * 0.03) }}
                      className={field.colSpan === 'full' ? 'md:col-span-2' : ''}
                    >
                      {field.type === 'hidden' ? (
                        <input
                          type="hidden"
                          name={field.name}
                          value={field.defaultValue || ''}
                        />
                      ) : (
                        <>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            <span className="block">{field.labelEng}</span>
                            <span className="block text-xs text-gray-500 font-normal">
                              {field.labelOdia}
                            </span>
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
                                placeholder={`Enter ${field.labelEng.toLowerCase()}`}
                              />
                            ) : field.type === 'select' ? (
                              <select
                                name={field.name}
                                value={(formData as any)[field.name]}
                                onChange={handleChange}
                                required={field.required}
                                className="w-full pl-12 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 appearance-none bg-white"
                              >
                                {field.options?.map((option:any) => (
                                  <option key={option.value} value={option.value}>
                                    {option.label}
                                  </option>
                                ))}
                              </select>
                            ) : (
                              <input
                                type={field.type}
                                name={field.name}
                                value={(formData as any)[field.name]}
                                onChange={handleChange}
                                required={field.required}
                                readOnly={field.readOnly}
                                className={`w-full pl-12 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${
                                  field.readOnly ? 'bg-gray-100' : 'bg-white'
                                }`}
                                placeholder={`Enter ${field.labelEng.toLowerCase()}`}
                              />
                            )}
                          </div>
                        </>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}

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

            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800 text-center">
                <strong>Note:</strong> After registration, your account will be <strong>inactive</strong>. 
                Admin will activate it after verification. You will receive your User ID via email.
              </p>
            </div>

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
              <h4 className="font-bold mb-2">Registration Process:</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-2">1</div>
                  <span>Submit registration form</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-2">2</div>
                  <span>Account created as <strong>Inactive Member</strong></span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-2">3</div>
                  <span>Admin verifies and activates account</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-2">4</div>
                  <span>Receive activation confirmation</span>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white/10 rounded-xl">
              <h4 className="font-bold mb-2">Important Note:</h4>
              <p className="text-sm">
                Registration requires a valid Senior Leader referral ID and name.
                <br /><br />
                <strong>Default Role:</strong> Member<br />
                <strong>Default Status:</strong> Inactive
              </p>
            </div>

            <div className="mt-6 p-4 bg-white/10 rounded-xl">
              <h4 className="font-bold mb-2">Required Documents:</h4>
              <ul className="text-sm space-y-1">
                <li>• Valid ID Proof</li>
                <li>• Address Proof</li>
                <li>• Recent Photograph</li>
                <li>• Age Proof</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
