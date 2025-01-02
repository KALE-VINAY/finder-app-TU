import React, { useState, useEffect } from 'react';
import { db } from '../firebase/firebaseConfig.js';
import { collection, query, onSnapshot, orderBy, where } from 'firebase/firestore';
import CycleCard from './CycleCard';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const CycleList = () => {
 const [cycles, setCycles] = useState([]);
 const [showUserCycles, setShowUserCycles] = useState(false);
 const [loading, setLoading] = useState(true);
 const { currentUser } = useAuth();
 const navigate = useNavigate();

 useEffect(() => {
   let cyclesQuery;
   if (showUserCycles && currentUser) {
     cyclesQuery = query(
       collection(db, 'cycles'),
       where('userId', '==', currentUser.uid),
       orderBy('createdAt', 'desc')
     );
   } else {
     cyclesQuery = query(
       collection(db, 'cycles'), 
       orderBy('createdAt', 'desc')
     );
   }

   const unsubscribe = onSnapshot(cyclesQuery, (snapshot) => {
     const cyclesData = snapshot.docs.map(doc => ({
       id: doc.id,
       ...doc.data()
     }));
     setCycles(cyclesData);
     setLoading(false);
   });

   return () => unsubscribe();
 }, [showUserCycles, currentUser]);

 const handleSellCycle = () => {
   if (!currentUser) {
     navigate('/login');
     return;
   }
   navigate('/cycle-sell');
 };

 if (loading) {
   return (
     <div className="flex justify-center items-center h-screen">
       <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
     </div>
   );
 }

 return (
   <div className="container mx-auto px-4 py-8">
     <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
       <h2 className="text-3xl font-bold">
         {showUserCycles ? 'Your Listed Cycles' : 'Available Cycles for Sale'}
       </h2>
       <div className="flex gap-4">
         {currentUser && (
           <button
             onClick={() => setShowUserCycles(!showUserCycles)}
             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
           >
             {showUserCycles ? 'Show All Cycles' : 'Your Listed Cycles'}
           </button>
         )}
         <button
           onClick={handleSellCycle}
           className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
         >
           Sell Your Cycle
         </button>
       </div>
     </div>

     {cycles.length === 0 ? (
       <div className="text-center py-10">
         <p className="text-gray-600 text-lg">
           {showUserCycles 
             ? "You haven't listed any cycles yet" 
             : "No cycles available for sale"}
         </p>
       </div>
     ) : (
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {cycles.map((cycle) => (
           <CycleCard 
             key={cycle.id} 
             cycle={cycle} 
             isOwner={currentUser?.uid === cycle.userId}
           />
         ))}
       </div>
     )}
   </div>
 );
};

export default CycleList;