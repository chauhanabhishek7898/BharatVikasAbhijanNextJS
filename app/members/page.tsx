'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaFilter, FaUser, FaEnvelope, FaPhone, FaCalendar, FaIdCard, FaCrown, FaUserCheck } from 'react-icons/fa';
import AnimatedSection from '@/components/AnimatedSection';
import Image from 'next/image';

interface Member {
  _id: string;
  userId: number;
  name: string;
  email: string;
  phone: string;
  registrationId: string;
  city: string;
  state: string;
  registrationDate: string;
  referralName: string;
  role: 'member' | 'leader';
  roleId: number;
  status: 'active' | 'inactive' | 'pending';
}

export default function MembersPage() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [stateFilter, setStateFilter] = useState('all');
  const [roleFilter, setRoleFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchMembers();
  }, [currentPage, stateFilter, roleFilter, statusFilter]);

  const fetchMembers = async () => {
    try {
      setLoading(true);
      let url = `/api/members?page=${currentPage}&limit=12`;
      
      if (stateFilter !== 'all') url += `&state=${stateFilter}`;
      if (roleFilter !== 'all') url += `&role=${roleFilter}`;
      if (statusFilter !== 'all') url += `&status=${statusFilter}`;
      
      const response = await fetch(url);
      const data = await response.json();
      
      if (data.success) {
        setMembers(data.data);
        setTotalPages(data.pagination.pages);
      }
    } catch (error) {
      console.error('Error fetching members:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredMembers = members.filter(member => {
    if (search) {
      const searchLower = search.toLowerCase();
      return (
        member.name.toLowerCase().includes(searchLower) ||
        member.email.toLowerCase().includes(searchLower) ||
        member.registrationId.toLowerCase().includes(searchLower) ||
        member.city.toLowerCase().includes(searchLower) ||
        member.userId.toString().includes(searchLower)
      );
    }
    return true;
  });

  const states = ['all', ...Array.from(new Set(members.map(m => m.state)))];

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
              Our Community Members and Leaders
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our growing family of changemakers and leaders from across India
            </p>
          </div>
        </AnimatedSection>

        {/* Search and Filter */}
        <AnimatedSection delay={0.2}>
          <div className="max-w-6xl mx-auto mb-12">
            {/* Search */}
            <div className="relative mb-6">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, ID, userId, or city..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
              />
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* State Filter */}
              <div className="relative">
                <FaFilter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <select
                  value={stateFilter}
                  onChange={(e) => setStateFilter(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
                >
                  <option value="all">All States</option>
                  {states.filter(s => s !== 'all').map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>

              {/* Role Filter */}
              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <select
                  value={roleFilter}
                  onChange={(e) => setRoleFilter(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
                >
                  <option value="all">All Roles</option>
                  <option value="member">Members</option>
                  <option value="leader">Leaders</option>
                </select>
              </div>

              {/* Status Filter */}
              <div className="relative">
                <FaUserCheck className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
                >
                  <option value="all">All Status</option>
                  <option value="active">Active Members</option>
                  <option value="inactive">Inactive Members</option>
                  <option value="pending">Pending</option>
                </select>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Members Grid */}
        <AnimatedSection delay={0.4}>
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <AnimatePresence>
                  {filteredMembers.map((member, index) => (
                    <motion.div
                      key={member._id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="flex justify-between flex-col bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                    >
                      <div className="p-6">
                        {/* Header with Role Badge */}
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex items-center">
                            {/* <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-green-500">
                              <div className="w-full h-full flex items-center justify-center">
                                <div className="relative w-12 h-12">
                                  <Image
                                    src="/bva_logo.jpeg"
                                    alt="BVA Logo"
                                    fill
                                    className="object-cover rounded-full"
                                  />
                                </div>
                              </div>
                            </div> */}
                            <div className="">
                              <h3 className="font-bold text-xl">{member.name}</h3>
                              <p className="text-gray-600">{member.city}, {member.state}</p>
                            </div>
                          </div>
                          
                          {/* Role Badge */}
                          <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                            member.role === 'leader' 
                              ? 'bg-yellow-100 text-yellow-800' 
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {member.role === 'leader' ? (
                              <div className="flex items-center">
                                <FaCrown className="mr-1" /> Leader
                              </div>
                            ) : (
                              'Member'
                            )}
                          </div>
                        </div>

                        {/* Member Info */}
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-gray-700">
                              <FaIdCard className="text-blue-500 mr-3" />
                              <span>ID: {member.userId}</span>
                            </div>
                            <div className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">
                              {member.registrationId}
                            </div>
                          </div>
                          
                          <div className="flex items-center text-gray-700">
                            <FaEnvelope className="text-blue-500 mr-3" />
                            <span className="truncate">{member.email}</span>
                          </div>
                          <div className="flex items-center text-gray-700">
                            <FaPhone className="text-blue-500 mr-3" />
                            <span>{member.phone}</span>
                          </div>
                          <div className="flex items-center text-gray-700">
                            <FaUser className="text-blue-500 mr-3" />
                            <span>Ref: {member.referralName}</span>
                          </div>
                          <div className="flex items-center text-gray-700">
                            <FaCalendar className="text-blue-500 mr-3" />
                            <span>{new Date(member.registrationDate).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>

                      {/* Status Badge */}
                      <div className="px-6 py-3 bg-gradient-to-r from-blue-50 to-green-50 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Member Since</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            member.status === 'active'
                              ? 'bg-green-100 text-green-800'
                              : member.status === 'inactive'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {member.status.charAt(0).toUpperCase() + member.status.slice(1)}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center mt-12 space-x-4">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="px-6 py-3 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                  >
                    Previous
                  </button>
                  
                  <div className="flex items-center space-x-2">
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let pageNum;
                      if (totalPages <= 5) {
                        pageNum = i + 1;
                      } else if (currentPage <= 3) {
                        pageNum = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i;
                      } else {
                        pageNum = currentPage - 2 + i;
                      }
                      
                      return (
                        <button
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          className={`w-10 h-10 rounded-lg ${
                            currentPage === pageNum
                              ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white'
                              : 'border border-gray-300 hover:bg-gray-50'
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className="px-6 py-3 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </AnimatedSection>
      </div>
    </div>
  );
}

// 'use client';

// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaSearch, FaFilter, FaUser, FaEnvelope, FaPhone, FaCalendar, FaIdCard } from 'react-icons/fa';
// import AnimatedSection from '@/components/AnimatedSection';
// import Image from 'next/image';

// interface Member {
//   _id: string;
//   name: string;
//   email: string;
//   phone: string;
//   registrationId: string;
//   city: string;
//   state: string;
//   registrationDate: string;
//   referralName: string;
// }

// export default function MembersPage() {
//   const [members, setMembers] = useState<Member[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState('');
//   const [filter, setFilter] = useState('all');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   useEffect(() => {
//     fetchMembers();
//   }, [currentPage, filter]);

//   const fetchMembers = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch(`/api/members?page=${currentPage}&limit=12`);
//       const data = await response.json();
      
//       if (data.success) {
//         setMembers(data.data);
//         setTotalPages(data.pagination.pages);
//       }
//     } catch (error) {
//       console.error('Error fetching members:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const filteredMembers = members.filter(member => {
//     if (filter !== 'all' && member.state !== filter) return false;
//     if (search) {
//       const searchLower = search.toLowerCase();
//       return (
//         member.name.toLowerCase().includes(searchLower) ||
//         member.email.toLowerCase().includes(searchLower) ||
//         member.registrationId.toLowerCase().includes(searchLower) ||
//         member.city.toLowerCase().includes(searchLower)
//       );
//     }
//     return true;
//   });

//   const states = ['all', ...Array.from(new Set(members.map(m => m.state)))];

//   return (
//     <div className="py-12">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <AnimatedSection>
//           <div className="text-center mb-12">
//             <div className="mb-6 flex justify-center">
//               <div className="relative w-16 h-16 rounded-full overflow-hidden">
//                 <Image
//                   src="/bva_logo.jpeg"
//                   alt="BVA Logo"
//                   width={64}
//                   height={64}
//                   className="object-cover w-full h-full"
//                 />
//               </div>
//             </div>
//             <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
//               Our Community Members
//             </h1>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Meet our growing family of changemakers and leaders from across India
//             </p>
//           </div>
//         </AnimatedSection>

//         {/* Search and Filter */}
//         <AnimatedSection delay={0.2}>
//           <div className="max-w-6xl mx-auto mb-12">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {/* Search */}
//               <div className="relative">
//                 <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="Search members by name, ID, or city..."
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                   className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
//                 />
//               </div>

//               {/* Filter */}
//               <div className="relative">
//                 <FaFilter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                 <select
//                   value={filter}
//                   onChange={(e) => setFilter(e.target.value)}
//                   className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
//                 >
//                   {states.map((state) => (
//                     <option key={state} value={state}>
//                       {state === 'all' ? 'All States' : state}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//           </div>
//         </AnimatedSection>

//         {/* Members Grid */}
//         <AnimatedSection delay={0.4}>
//           {loading ? (
//             <div className="flex justify-center items-center h-64">
//               <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//             </div>
//           ) : (
//             <>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//                 <AnimatePresence>
//                   {filteredMembers.map((member, index) => (
//                     <motion.div
//                       key={member._id}
//                       initial={{ opacity: 0, scale: 0.9 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       exit={{ opacity: 0, scale: 0.9 }}
//                       transition={{ delay: index * 0.1 }}
//                       whileHover={{ y: -5 }}
//                       className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
//                     >
//                       <div className="p-6">
//                         {/* Avatar with BVA Logo */}
//                         <div className="flex items-center mb-6">
//                           <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-green-500">
//                             <div className="w-full h-full flex items-center justify-center">
//                               <div className="relative w-12 h-12">
//                                 <Image
//                                   src="/bva_logo.jpeg"
//                                   alt="BVA Logo"
//                                   fill
//                                   className="object-cover rounded-full"
//                                 />
//                               </div>
//                             </div>
//                           </div>
//                           <div className="ml-4">
//                             <h3 className="font-bold text-xl">{member.name}</h3>
//                             <p className="text-gray-600">{member.city}, {member.state}</p>
//                           </div>
//                         </div>

//                         {/* Member Info */}
//                         <div className="space-y-3">
//                           <div className="flex items-center text-gray-700">
//                             <FaIdCard className="text-blue-500 mr-3" />
//                             <span className="font-mono">{member.registrationId}</span>
//                           </div>
//                           <div className="flex items-center text-gray-700">
//                             <FaEnvelope className="text-blue-500 mr-3" />
//                             <span className="truncate">{member.email}</span>
//                           </div>
//                           <div className="flex items-center text-gray-700">
//                             <FaPhone className="text-blue-500 mr-3" />
//                             <span>{member.phone}</span>
//                           </div>
//                           <div className="flex items-center text-gray-700">
//                             <FaUser className="text-blue-500 mr-3" />
//                             <span>Ref: {member.referralName}</span>
//                           </div>
//                           <div className="flex items-center text-gray-700">
//                             <FaCalendar className="text-blue-500 mr-3" />
//                             <span>{new Date(member.registrationDate).toLocaleDateString()}</span>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Status Badge */}
//                       <div className="px-6 py-3 bg-gradient-to-r from-blue-50 to-green-50 border-t border-gray-100">
//                         <div className="flex items-center justify-between">
//                           <span className="text-sm text-gray-600">Member Since</span>
//                           <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
//                             Active
//                           </span>
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </AnimatePresence>
//               </div>

//               {/* Pagination */}
//               {totalPages > 1 && (
//                 <div className="flex justify-center items-center mt-12 space-x-4">
//                   <button
//                     onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
//                     disabled={currentPage === 1}
//                     className="px-6 py-3 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
//                   >
//                     Previous
//                   </button>
                  
//                   <div className="flex items-center space-x-2">
//                     {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
//                       let pageNum;
//                       if (totalPages <= 5) {
//                         pageNum = i + 1;
//                       } else if (currentPage <= 3) {
//                         pageNum = i + 1;
//                       } else if (currentPage >= totalPages - 2) {
//                         pageNum = totalPages - 4 + i;
//                       } else {
//                         pageNum = currentPage - 2 + i;
//                       }
                      
//                       return (
//                         <button
//                           key={pageNum}
//                           onClick={() => setCurrentPage(pageNum)}
//                           className={`w-10 h-10 rounded-lg ${
//                             currentPage === pageNum
//                               ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white'
//                               : 'border border-gray-300 hover:bg-gray-50'
//                           }`}
//                         >
//                           {pageNum}
//                         </button>
//                       );
//                     })}
//                   </div>

//                   <button
//                     onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
//                     disabled={currentPage === totalPages}
//                     className="px-6 py-3 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
//                   >
//                     Next
//                   </button>
//                 </div>
//               )}
//             </>
//           )}
//         </AnimatedSection>
//       </div>
//     </div>
//   );
// }

// 'use client';

// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaSearch, FaFilter, FaUser, FaEnvelope, FaPhone, FaCalendar, FaIdCard } from 'react-icons/fa';
// import AnimatedSection from '@/components/AnimatedSection';

// interface Member {
//   _id: string;
//   name: string;
//   email: string;
//   phone: string;
//   registrationId: string;
//   city: string;
//   state: string;
//   registrationDate: string;
//   referralName: string;
// }

// export default function MembersPage() {
//   const [members, setMembers] = useState<Member[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState('');
//   const [filter, setFilter] = useState('all');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   useEffect(() => {
//     fetchMembers();
//   }, [currentPage, filter]);

//   const fetchMembers = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch(`/api/members?page=${currentPage}&limit=12`);
//       const data = await response.json();
      
//       if (data.success) {
//         setMembers(data.data);
//         setTotalPages(data.pagination.pages);
//       }
//     } catch (error) {
//       console.error('Error fetching members:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const filteredMembers = members.filter(member => {
//     if (filter !== 'all' && member.state !== filter) return false;
//     if (search) {
//       const searchLower = search.toLowerCase();
//       return (
//         member.name.toLowerCase().includes(searchLower) ||
//         member.email.toLowerCase().includes(searchLower) ||
//         member.registrationId.toLowerCase().includes(searchLower) ||
//         member.city.toLowerCase().includes(searchLower)
//       );
//     }
//     return true;
//   });

// const states = ['all', ...Array.from(new Set(members.map(m => m.state)))];
//   return (
//     <div className="py-12">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <AnimatedSection>
//           <div className="text-center mb-12">
//             <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
//               Our Community Members
//             </h1>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Meet our growing family of changemakers and leaders from across India
//             </p>
//           </div>
//         </AnimatedSection>

//         {/* Search and Filter */}
//         <AnimatedSection delay={0.2}>
//           <div className="max-w-6xl mx-auto mb-12">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {/* Search */}
//               <div className="relative">
//                 <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="Search members by name, ID, or city..."
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                   className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
//                 />
//               </div>

//               {/* Filter */}
//               <div className="relative">
//                 <FaFilter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                 <select
//                   value={filter}
//                   onChange={(e) => setFilter(e.target.value)}
//                   className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
//                 >
//                   {states.map((state) => (
//                     <option key={state} value={state}>
//                       {state === 'all' ? 'All States' : state}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//           </div>
//         </AnimatedSection>

//         {/* Members Grid */}
//         <AnimatedSection delay={0.4}>
//           {loading ? (
//             <div className="flex justify-center items-center h-64">
//               <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//             </div>
//           ) : (
//             <>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//                 <AnimatePresence>
//                   {filteredMembers.map((member, index) => (
//                     <motion.div
//                       key={member._id}
//                       initial={{ opacity: 0, scale: 0.9 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       exit={{ opacity: 0, scale: 0.9 }}
//                       transition={{ delay: index * 0.1 }}
//                       whileHover={{ y: -5 }}
//                       className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
//                     >
//                       <div className="p-6">
//                         {/* Avatar */}
//                         <div className="flex items-center mb-6">
//                           <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
//                             {member.name.charAt(0)}
//                           </div>
//                           <div className="ml-4">
//                             <h3 className="font-bold text-xl">{member.name}</h3>
//                             <p className="text-gray-600">{member.city}, {member.state}</p>
//                           </div>
//                         </div>

//                         {/* Member Info */}
//                         <div className="space-y-3">
//                           <div className="flex items-center text-gray-700">
//                             <FaIdCard className="text-blue-500 mr-3" />
//                             <span className="font-mono">{member.registrationId}</span>
//                           </div>
//                           <div className="flex items-center text-gray-700">
//                             <FaEnvelope className="text-blue-500 mr-3" />
//                             <span className="truncate">{member.email}</span>
//                           </div>
//                           <div className="flex items-center text-gray-700">
//                             <FaPhone className="text-blue-500 mr-3" />
//                             <span>{member.phone}</span>
//                           </div>
//                           <div className="flex items-center text-gray-700">
//                             <FaUser className="text-blue-500 mr-3" />
//                             <span>Ref: {member.referralName}</span>
//                           </div>
//                           <div className="flex items-center text-gray-700">
//                             <FaCalendar className="text-blue-500 mr-3" />
//                             <span>{new Date(member.registrationDate).toLocaleDateString()}</span>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Status Badge */}
//                       <div className="px-6 py-3 bg-gradient-to-r from-blue-50 to-green-50 border-t border-gray-100">
//                         <div className="flex items-center justify-between">
//                           <span className="text-sm text-gray-600">Member Since</span>
//                           <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
//                             Active
//                           </span>
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </AnimatePresence>
//               </div>

//               {/* Pagination */}
//               {totalPages > 1 && (
//                 <div className="flex justify-center items-center mt-12 space-x-4">
//                   <button
//                     onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
//                     disabled={currentPage === 1}
//                     className="px-6 py-3 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
//                   >
//                     Previous
//                   </button>
                  
//                   <div className="flex items-center space-x-2">
//                     {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
//                       let pageNum;
//                       if (totalPages <= 5) {
//                         pageNum = i + 1;
//                       } else if (currentPage <= 3) {
//                         pageNum = i + 1;
//                       } else if (currentPage >= totalPages - 2) {
//                         pageNum = totalPages - 4 + i;
//                       } else {
//                         pageNum = currentPage - 2 + i;
//                       }
                      
//                       return (
//                         <button
//                           key={pageNum}
//                           onClick={() => setCurrentPage(pageNum)}
//                           className={`w-10 h-10 rounded-lg ${
//                             currentPage === pageNum
//                               ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white'
//                               : 'border border-gray-300 hover:bg-gray-50'
//                           }`}
//                         >
//                           {pageNum}
//                         </button>
//                       );
//                     })}
//                   </div>

//                   <button
//                     onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
//                     disabled={currentPage === totalPages}
//                     className="px-6 py-3 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
//                   >
//                     Next
//                   </button>
//                 </div>
//               )}
//             </>
//           )}
//         </AnimatedSection>
//       </div>
//     </div>
//   );
// }