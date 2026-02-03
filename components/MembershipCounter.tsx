'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaArrowUp, FaUserTie, FaUserCheck, FaUserClock } from 'react-icons/fa';

type CounterType = 'totalMembers' | 'activeMembers' | 'activeLeaders' | 'totalActive';

export default function MembershipCounter() {
  const [counts, setCounts] = useState({
    totalMembers: 0,
    activeMembers: 0,
    activeLeaders: 0,
    totalActive: 0
  });
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<CounterType>('totalMembers');

  useEffect(() => {
    fetchCounts();
    const interval = setInterval(fetchCounts, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const fetchCounts = async () => {
    try {
      const response = await fetch('/api/members/count');
      const data = await response.json();
      
      if (data.success) {
        setCounts(data.counts);
      }
    } catch (error) {
      console.error('Error fetching counts:', error);
    } finally {
      setLoading(false);
    }
  };

  const tabs = [
    // { 
    //   id: 'totalMembers' as CounterType, 
    //   label: 'Total Members', 
    //   icon: <FaUsers />, 
    //   color: 'from-blue-500 to-cyan-500',
    //   description: 'All registered members (active + inactive)'
    // },
    { 
      id: 'activeMembers' as CounterType, 
      label: 'Active Members', 
      icon: <FaUserCheck />, 
      color: 'from-green-500 to-emerald-500',
      description: 'Only active members'
    },
    { 
      id: 'activeLeaders' as CounterType, 
      label: 'Leaders', 
      icon: <FaUserTie />, 
      color: 'from-purple-500 to-pink-500',
      description: 'Only active leaders'
    },
       { 
      id: 'totalMembers' as CounterType, 
      label: 'Total Members', 
      icon: <FaUsers />, 
      color: 'from-blue-500 to-cyan-500',
      description: 'All registered members (active + inactive)'
    },
    // { 
    //   id: 'totalActive' as CounterType, 
    //   label: 'Total Active', 
    //   icon: <FaUsers />, 
    //   color: 'from-orange-500 to-red-500',
    //   description: 'All active users'
    // },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-2xl overflow-hidden"
    >
      {/* Tabs */}
      <div className="flex border-b border-gray-100">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-4 px-2 text-center transition-all duration-300 ${
              activeTab === tab.id
                ? 'border-b-2 border-blue-500'
                : 'hover:bg-gray-50'
            }`}
          >
            <div className={`text-lg ${activeTab === tab.id ? 'text-blue-600' : 'text-gray-500'}`}>
              {tab.icon}
            </div>
            <div className={`text-xs font-medium mt-1 ${activeTab === tab.id ? 'text-blue-600' : 'text-gray-600'}`}>
              {tab.label}
            </div>
          </button>
        ))}
      </div>

      {/* Counter Display */}
      <div className={`p-8 bg-gradient-to-br ${tabs.find(t => t.id === activeTab)?.color}`}>
        <div className="flex flex-col items-center justify-center text-white">
          <motion.div
            key={activeTab}
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="mb-6"
          >
            <div className="text-6xl opacity-80">
              {tabs.find(t => t.id === activeTab)?.icon}
            </div>
          </motion.div>
          
          <div className="text-center mb-4">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <FaArrowUp className="text-yellow-300 animate-pulse" />
              <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">
                Live Counter
              </span>
            </div>
            
            <div className="flex items-baseline justify-center">
              <span className="text-5xl md:text-6xl font-bold mr-2">
                {loading ? '...' : counts[activeTab].toLocaleString()}
              </span>
              <span className="text-xl">+</span>
            </div>
            
            <p className="text-xl mt-2 font-semibold">
              {tabs.find(t => t.id === activeTab)?.label}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-white/20 rounded-full h-2 mt-4 overflow-hidden">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ 
                width: `${Math.min((counts[activeTab] / 10000) * 100, 100)}%` 
              }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="h-full bg-yellow-300 rounded-full"
            />
          </div>
          
          <p className="text-sm mt-4 text-center opacity-90">
            {tabs.find(t => t.id === activeTab)?.description}
          </p>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="p-4 bg-gray-50 grid grid-cols-2 md:grid-cols-3 gap-4">
        {tabs.map((tab) => (
          <div key={tab.id} className="text-center">
            <div className="text-lg font-bold text-gray-800">
              {loading ? '...' : counts[tab.id].toLocaleString()}
            </div>
            <div className="text-xs text-gray-600 truncate">
              {tab.label}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// 'use client';

// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { FaUsers, FaArrowUp, FaUserTie, FaUserCheck } from 'react-icons/fa';

// type CounterType = 'members' | 'leaders' | 'active';

// export default function MembershipCounter() {
//   const [counts, setCounts] = useState({
//     members: 0,
//     leaders: 0,
//     active: 0
//   });
//   const [loading, setLoading] = useState(true);
//   const [activeTab, setActiveTab] = useState<CounterType>('members');

//   useEffect(() => {
//     fetchCounts();
//     const interval = setInterval(fetchCounts, 3000);
    
//     return () => clearInterval(interval);
//   }, []);

//   const fetchCounts = async () => {
//     try {
//       // In production, you'd fetch from different endpoints
//       const response = await fetch('/api/members/count');
//       const data = await response.json();
      
//       if (data.success) {
//         // Simulate different counts for demonstration
//         // In production, you'd have separate API endpoints
//         const totalMembers = data.count;
//         const leadersCount = Math.floor(totalMembers * 0.15); // 15% are leaders
//         const activeCount = Math.floor(totalMembers * 0.85); // 85% are active
        
//         animateCounts({
//           members: totalMembers,
//           leaders: leadersCount,
//           active: activeCount
//         });
//       }
//     } catch (error) {
//       console.error('Error fetching counts:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const animateCounts = (targetCounts: typeof counts) => {
//     setCounts(prev => {
//       const newCounts = { ...prev };
//       Object.keys(targetCounts).forEach((key) => {
//         let start = prev[key as CounterType];
//         const target = targetCounts[key as CounterType];
//         const duration = 2000;
//         const steps = 60;
//         const increment = (target - start) / steps;
//         let currentStep = 0;

//         const timer = setInterval(() => {
//           currentStep++;
//           start += increment;
//           newCounts[key as CounterType] = Math.floor(start);

//           if (currentStep >= steps) {
//             clearInterval(timer);
//             newCounts[key as CounterType] = target;
//           }
//         }, duration / steps);
//       });
//       return newCounts;
//     });
//   };

//   const tabs = [
//     { id: 'members' as CounterType, label: 'Total Members', icon: <FaUsers />, color: 'from-blue-500 to-cyan-500' },
//     { id: 'leaders' as CounterType, label: 'Leaders', icon: <FaUserTie />, color: 'from-purple-500 to-pink-500' },
//     { id: 'active' as CounterType, label: 'Active Members', icon: <FaUserCheck />, color: 'from-green-500 to-emerald-500' },
//   ];

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.5 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.5 }}
//       className="bg-white rounded-2xl shadow-2xl overflow-hidden"
//     >
//       {/* Tabs */}
//       <div className="flex border-b border-gray-100">
//         {tabs.map((tab) => (
//           <button
//             key={tab.id}
//             onClick={() => setActiveTab(tab.id)}
//             className={`flex-1 py-4 px-2 text-center transition-all duration-300 ${
//               activeTab === tab.id
//                 ? 'border-b-2 border-blue-500'
//                 : 'hover:bg-gray-50'
//             }`}
//           >
//             <div className={`text-lg ${activeTab === tab.id ? 'text-blue-600' : 'text-gray-500'}`}>
//               {tab.icon}
//             </div>
//             <div className={`text-sm font-medium mt-1 ${activeTab === tab.id ? 'text-blue-600' : 'text-gray-600'}`}>
//               {tab.label}
//             </div>
//           </button>
//         ))}
//       </div>

//       {/* Counter Display */}
//       <div className={`p-8 bg-gradient-to-br ${tabs.find(t => t.id === activeTab)?.color}`}>
//         <div className="flex flex-col items-center justify-center text-white">
//           <motion.div
//             key={activeTab}
//             initial={{ rotate: 0 }}
//             animate={{ rotate: 360 }}
//             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//             className="mb-6"
//           >
//             <div className="text-6xl opacity-80">
//               {tabs.find(t => t.id === activeTab)?.icon}
//             </div>
//           </motion.div>
          
//           <div className="text-center mb-4">
//             <div className="flex items-center justify-center space-x-2 mb-2">
//               <FaArrowUp className="text-yellow-300 animate-pulse" />
//               <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">
//                 Live Counter
//               </span>
//             </div>
            
//             <div className="flex items-baseline justify-center">
//               <span className="text-5xl md:text-6xl font-bold mr-2">
//                 {loading ? '...' : counts[activeTab].toLocaleString()}
//               </span>
//               <span className="text-xl">+</span>
//             </div>
            
//             <p className="text-xl mt-2 font-semibold">
//               {tabs.find(t => t.id === activeTab)?.label}
//             </p>
//           </div>

//           {/* Progress Bar */}
//           <div className="w-full bg-white/20 rounded-full h-2 mt-4 overflow-hidden">
//             <motion.div
//               initial={{ width: '0%' }}
//               animate={{ 
//                 width: `${Math.min((counts[activeTab] / 10000) * 100, 100)}%` 
//               }}
//               transition={{ duration: 2, ease: "easeOut" }}
//               className="h-full bg-yellow-300 rounded-full"
//             />
//           </div>
          
//           <p className="text-sm mt-4 text-center opacity-90">
//             {activeTab === 'members' && 'Join our growing community of changemakers'}
//             {activeTab === 'leaders' && 'Our dedicated leadership team'}
//             {activeTab === 'active' && 'Actively contributing members'}
//           </p>
//         </div>
//       </div>

//       {/* Stats Summary */}
//       <div className="p-4 bg-gray-50 grid grid-cols-3 gap-4">
//         {tabs.map((tab) => (
//           <div key={tab.id} className="text-center">
//             <div className="text-lg font-bold text-gray-800">
//               {loading ? '...' : counts[tab.id].toLocaleString()}
//             </div>
//             <div className="text-xs text-gray-600">
//               {tab.label}
//             </div>
//           </div>
//         ))}
//       </div>
//     </motion.div>
//   );
// }

// 'use client';

// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { FaUsers, FaArrowUp } from 'react-icons/fa';

// export default function MembershipCounter() {
//   const [count, setCount] = useState(0);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchCount();
//     const interval = setInterval(fetchCount, 30000); // Update every 30 seconds
    
//     return () => clearInterval(interval);
//   }, []);

//   const fetchCount = async () => {
//     try {
//       const response = await fetch('/api/members/count');
//       const data = await response.json();
//       if (data.success) {
//         animateCount(data.count);
//       }
//     } catch (error) {
//       console.error('Error fetching count:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const animateCount = (target: number) => {
//     let start = count;
//     const duration = 2000; // 2 seconds
//     const steps = 60;
//     const increment = (target - start) / steps;
//     let currentStep = 0;

//     const timer = setInterval(() => {
//       currentStep++;
//       start += increment;
//       setCount(Math.floor(start));

//       if (currentStep >= steps) {
//         clearInterval(timer);
//         setCount(target);
//       }
//     }, duration / steps);
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.5 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.5 }}
//       className="bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl p-8 shadow-2xl"
//     >
//       <div className="flex flex-col items-center justify-center text-white">
//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//           className="mb-6"
//         >
//           <FaUsers className="text-6xl opacity-80" />
//         </motion.div>
        
//         <div className="text-center mb-4">
//           <div className="flex items-center justify-center space-x-2 mb-2">
//             <FaArrowUp className="text-yellow-300 animate-pulse" />
//             <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">
//               Live Counter
//             </span>
//           </div>
          
//           <div className="flex items-baseline justify-center">
//             <span className="text-5xl md:text-6xl font-bold mr-2">
//               {loading ? '...' : count.toLocaleString()}
//             </span>
//             <span className="text-xl">+</span>
//           </div>
          
//           <p className="text-xl mt-2 font-semibold">Active Members</p>
//         </div>

//         <div className="w-full bg-white/20 rounded-full h-2 mt-4 overflow-hidden">
//           <motion.div
//             initial={{ width: '0%' }}
//             animate={{ width: `${Math.min((count / 10000) * 100, 100)}%` }}
//             transition={{ duration: 2, ease: "easeOut" }}
//             className="h-full bg-yellow-300 rounded-full"
//           />
//         </div>
        
//         <p className="text-sm mt-4 text-center opacity-90">
//           Join our growing community of changemakers
//         </p>
//       </div>
//     </motion.div>
//   );
// }