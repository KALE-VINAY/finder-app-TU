// components/CycleList.js
import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebaseConfig.js';
// import { db } from '../firebase/firebaseConfig.js';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import CycleCard from './CycleCard';
import { useAuth } from '../contexts/AuthContext';

const CycleList = () => {
  const [cycles, setCycles] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    const q = query(collection(db, 'cycles'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const cyclesData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setCycles(cyclesData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Available Cycles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cycles.map((cycle) => (
          <CycleCard 
            key={cycle.id} 
            cycle={cycle} 
            isOwner={currentUser?.uid === cycle.userId}
          />
        ))}
      </div>
    </div>
  );
};

export default CycleList;