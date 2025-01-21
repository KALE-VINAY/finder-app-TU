import React, { useState, useEffect } from 'react';
import { db } from '../firebase/firebaseConfig.js';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import CycleCard from './CycleCard';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

// Helper function to check if a date falls within a time range
const isWithinTimeRange = (createdAt, filter) => {
  const now = new Date();
  let timestamp;

  if (createdAt?.toDate) {
    timestamp = createdAt.toDate(); // Convert Firestore Timestamp to JavaScript Date
  } else {
    timestamp = new Date(createdAt); // Assume it's an ISO string or standard Date
  }

  const differenceInMilliseconds = now - timestamp;

  if (filter === 'last3days') return differenceInMilliseconds <= 3 * 24 * 60 * 60 * 1000;
  if (filter === 'lastWeek') return differenceInMilliseconds <= 7 * 24 * 60 * 60 * 1000;
  if (filter === 'lastMonth') return differenceInMilliseconds <= 30 * 24 * 60 * 60 * 1000;

  return true; // Default case for "all"
};

// Helper function to check if a price falls within the selected range
const isWithinPriceRange = (price, range) => {
  if (range === '0-2000') return price <= 2000;
  if (range === '2001-5000') return price > 2000 && price <= 5000;
  if (range === '5000+') return price > 5000;

  return true; // Default case for "all"
};

const CycleList = () => {
  const [cycles, setCycles] = useState([]);
  const [userCycles, setUserCycles] = useState([]);
  const [showUserCycles, setShowUserCycles] = useState(false);
  const [loading, setLoading] = useState(true);
  const [timeFilter, setTimeFilter] = useState('all'); // Time filter state
  const [priceFilter, setPriceFilter] = useState('all'); // Price filter state
  const [searchQuery, setSearchQuery] = useState(''); // Search query state
  const { currentUser } = useAuth();
  const navigate = useNavigate();

 useEffect(() => {
    
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const allCyclesQuery = query(collection(db, 'cycles'), orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(allCyclesQuery, (snapshot) => {
      const allCycles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCycles(allCycles);

      if (currentUser) {
        const userOwnedCycles = allCycles.filter(
          (cycle) => cycle.userId === currentUser.uid
        );
        setUserCycles(userOwnedCycles);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, [currentUser]);

  const handleSellCycle = () => {
    if (!currentUser) {
      navigate('/login');
      return;
    }
    navigate('/cycle-sell');
  };

  // Filter displayed cycles based on time filter, price filter, and search query
  const getFilteredCycles = (cyclesToFilter) => {
    let filteredCycles = cyclesToFilter;

    if (timeFilter !== 'all') {
      filteredCycles = filteredCycles.filter((cycle) =>
        isWithinTimeRange(cycle.createdAt, timeFilter)
      );
    }

    if (priceFilter !== 'all') {
      filteredCycles = filteredCycles.filter((cycle) =>
        isWithinPriceRange(cycle.price, priceFilter)
      );
    }

    if (searchQuery) {
      filteredCycles = filteredCycles.filter(
        (cycle) =>
          cycle.modelName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          cycle.brand.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filteredCycles;
  };

  const displayedCycles = getFilteredCycles(showUserCycles ? userCycles : cycles);

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
        <h2 className="text-4xl font-bold text-center sm:text-left">
          {showUserCycles ? 'Your Listed Cycles' : 'Available Cycles for Sale'}
        </h2>
        <div className="flex gap-4 mt-2">
          {currentUser && (
            <button
              onClick={() => setShowUserCycles(!showUserCycles)}
              className="bg-blue-500 text-white text-xs sm:text-sm md:text-base px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              {showUserCycles ? 'Show All Cycles' : 'Your Listed Cycles'}
            </button>
          )}
          <button
            onClick={handleSellCycle}
            className="bg-green-500 text-white text-xs sm:text-sm md:text-base px-4 py-2 rounded hover:bg-green-600 transition-colors"
          >
            Sell Your Cycle
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative mb-4 flex justify-center sm:justify-start">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="text-gray-500 w-5 h-5" />
        </div>
        <input
          type="text"
          placeholder="Search cycles by name or description..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full sm:w-1/2 lg:w-1/3 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Filters */}
<div className="flex flex-row justify-end items-center mb-4 gap-2 sm:gap-4 w-full overflow-x-auto px-2 sm:px-0">
  {/* Price Range Filter */}
  <div className="flex items-center flex-shrink-0">
    <label htmlFor="priceFilter" className="mr-1 sm:mr-2 text-gray-600 text-xs sm:text-sm md:text-base whitespace-nowrap">
      Price :
    </label>
    <select
      id="priceFilter"
      value={priceFilter}
      onChange={(e) => setPriceFilter(e.target.value)}
      className="border border-gray-300 rounded px-2 sm:px-3 md:px-4 py-1 sm:py-2 text-xs sm:text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-gray-500 min-w-[80px] sm:min-w-[100px]"
    >
      <option value="all">All</option>
      <option value="0-2000">0-2000</option>
      <option value="2001-5000">2001-5000</option>
      <option value="5000+">5000+</option>
    </select>
  </div>

  {/* Time Filter */}
  <div className="flex items-center flex-shrink-0">
    <label htmlFor="timeFilter" className="mr-1 sm:mr-2 text-gray-600 text-xs sm:text-sm md:text-base whitespace-nowrap">
      Time:
    </label>
    <select
      id="timeFilter"
      value={timeFilter}
      onChange={(e) => setTimeFilter(e.target.value)}
      className="border border-gray-300 rounded px-2 sm:px-3 md:px-4 py-1 sm:py-2 text-xs sm:text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-gray-500 min-w-[90px] sm:min-w-[120px]"
    >
      <option value="all">All</option>
      <option value="last3days">Last 3 Days</option>
      <option value="lastWeek">Last Week</option>
      <option value="lastMonth">Last Month</option>
    </select>
  </div>
</div>

      {displayedCycles.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-600 text-lg">
            {showUserCycles
              ? "You haven't listed any cycles yet"
              : 'No cycles available for sale'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCycles.map((cycle) => (
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
