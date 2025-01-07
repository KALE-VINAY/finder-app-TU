// import React, { useState, useEffect } from 'react';
// import { db } from '../firebase/firebaseConfig.js';
// import { collection, query, onSnapshot, orderBy, where } from 'firebase/firestore';
// import ProductCard from './ProductCard';
// import { useAuth } from '../contexts/AuthContext';
// import { useNavigate } from 'react-router-dom';
// import { formatDistance } from 'date-fns';

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [requests, setRequests] = useState([]);
//   const [showUserListings, setShowUserListings] = useState(false);
//   const [viewMode, setViewMode] = useState('products'); // 'products' or 'requests'
//   const [loading, setLoading] = useState(true);
//   const { currentUser } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     let unsubscribe;
    
//     if (viewMode === 'products') {
//       const productsQuery = showUserListings && currentUser
//         ? query(
//             collection(db, 'products'),
//             where('userId', '==', currentUser.uid),
//             orderBy('createdAt', 'desc')
//           )
//         : query(collection(db, 'products'), orderBy('createdAt', 'desc'));

//       unsubscribe = onSnapshot(productsQuery, (snapshot) => {
//         const productsData = snapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data()
//         }));
//         setProducts(productsData);
//         setLoading(false);
//       });
//     } else {
//       const requestsQuery = showUserListings && currentUser
//         ? query(
//             collection(db, 'requests'),
//             where('userId', '==', currentUser.uid),
//             orderBy('createdAt', 'desc')
//           )
//         : query(collection(db, 'requests'), orderBy('createdAt', 'desc'));

//       unsubscribe = onSnapshot(requestsQuery, (snapshot) => {
//         const requestsData = snapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data()
//         }));
//         setRequests(requestsData);
//         setLoading(false);
//       });
//     }

//     return () => unsubscribe?.();
//   }, [viewMode, showUserListings, currentUser]);

//   const handleNavigate = (path) => {
//     if (!currentUser) {
//       navigate('/login');
//       return;
//     }
//     navigate(path);
//   };

//   const formatDate = (timestamp) => {
//     if (!timestamp) return 'Just now';
//     return formatDistance(timestamp.toDate(), new Date(), { addSuffix: true });
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
//         <h2 className="text-3xl font-bold">
//           {viewMode === 'products' ? 'Campus Marketplace' : 'Product Requests'}
//         </h2>
//         <div className="flex flex-wrap gap-4">
//           <button
//             onClick={() => setViewMode(viewMode === 'products' ? 'requests' : 'products')}
//             className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors"
//           >
//             {viewMode === 'products' ? 'View Requests' : 'View Products'}
//           </button>
//           {currentUser && (
//             <button
//               onClick={() => setShowUserListings(!showUserListings)}
//               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
//             >
//               {showUserListings ? 'Show All' : 'Your Listings'}
//             </button>
//           )}
//           <button
//             onClick={() => handleNavigate(viewMode === 'products' ? '/sell-product' : '/request-product')}
//             className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
//           >
//             {viewMode === 'products' ? 'Sell Product' : 'Request Product'}
//           </button>
//         </div>
//       </div>

//       {((viewMode === 'products' ? products : requests).length === 0) ? (
//         <div className="text-center py-10">
//           <p className="text-gray-600 text-lg">
//             {showUserListings 
//               ? `You haven't ${viewMode === 'products' ? 'listed' : 'requested'} any items yet`
//               : `No ${viewMode === 'products' ? 'products' : 'requests'} available`}
//           </p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {(viewMode === 'products' ? products : requests).map((item) => (
//             <ProductCard 
//               key={item.id} 
//               item={item} 
//               isOwner={currentUser?.uid === item.userId}
//               type={viewMode}
//               formatDate={formatDate}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductList;

import React, { useState, useEffect } from 'react';
import { db } from '../firebase/firebaseConfig.js';
import { collection, query, onSnapshot, orderBy, where } from 'firebase/firestore';
import ProductCard from './ProductCard';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { formatDistance } from 'date-fns';
import { Search } from 'lucide-react';

// Helper function to check if a date falls within a time range
const isWithinTimeRange = (createdAt, filter) => {
  if (!createdAt) return false;
  const now = new Date();
  const timestamp = createdAt.toDate();
  const differenceInMilliseconds = now - timestamp;

  if (filter === 'last3days') return differenceInMilliseconds <= 3 * 24 * 60 * 60 * 1000;
  if (filter === 'lastWeek') return differenceInMilliseconds <= 7 * 24 * 60 * 60 * 1000;
  if (filter === 'lastMonth') return differenceInMilliseconds <= 30 * 24 * 60 * 60 * 1000;

  return true; // Default case for "all"
};

// Helper function to check if a price falls within the selected range
const isWithinPriceRange = (item, range, type) => {
  if (type === 'products') {
    const price = item.price;
    if (range === '0-2000') return price <= 2000;
    if (range === '2001-5000') return price > 2000 && price <= 5000;
    if (range === '5000+') return price > 5000;
  } else {
    // For requests, check if the budget range overlaps with the filter range
    const { min, max } = item.priceRange;
    if (range === '0-2000') return min <= 2000;
    if (range === '2001-5000') return min <= 5000 && max > 2000;
    if (range === '5000+') return max > 5000;
  }
  return true; // Default case for "all"
};

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [requests, setRequests] = useState([]);
  const [showUserListings, setShowUserListings] = useState(false);
  const [viewMode, setViewMode] = useState('products');
  const [loading, setLoading] = useState(true);
  const [timeFilter, setTimeFilter] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    let unsubscribe;

    if (viewMode === 'products') {
      const productsQuery = showUserListings && currentUser
        ? query(
            collection(db, 'products'),
            where('userId', '==', currentUser.uid),
            orderBy('createdAt', 'desc')
          )
        : query(collection(db, 'products'), orderBy('createdAt', 'desc'));

      unsubscribe = onSnapshot(productsQuery, (snapshot) => {
        const productsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsData);
        setLoading(false);
      });
    } else {
      const requestsQuery = showUserListings && currentUser
        ? query(
            collection(db, 'requests'),
            where('userId', '==', currentUser.uid),
            orderBy('createdAt', 'desc')
          )
        : query(collection(db, 'requests'), orderBy('createdAt', 'desc'));

      unsubscribe = onSnapshot(requestsQuery, (snapshot) => {
        const requestsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRequests(requestsData);
        setLoading(false);
      });
    }

    return () => unsubscribe?.();
  }, [viewMode, showUserListings, currentUser]);

  const handleNavigate = (path) => {
    if (!currentUser) {
      navigate('/login');
      return;
    }
    navigate(path);
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'Just now';
    return formatDistance(timestamp.toDate(), new Date(), { addSuffix: true });
  };

  // Filter displayed items based on time filter, price filter, and search query
  const getFilteredItems = (items) => {
    return items.filter((item) => {
      const matchesTime = isWithinTimeRange(item.createdAt, timeFilter);
      const matchesPrice = isWithinPriceRange(item, priceFilter, viewMode);
      const matchesSearch = searchQuery === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesTime && matchesPrice && matchesSearch;
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  const displayedItems = getFilteredItems(
    viewMode === 'products'
      ? showUserListings
        ? products.filter((item) => item.userId === currentUser?.uid)
        : products
      : showUserListings
      ? requests.filter((item) => item.userId === currentUser?.uid)
      : requests
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-3xl font-bold">
          {viewMode === 'products' ? 'Campus Marketplace' : 'Product Requests by Students'}
        </h2>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => setViewMode(viewMode === 'products' ? 'requests' : 'products')}
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors"
          >
            {viewMode === 'products' ? 'View Requests' : 'View Products'}
          </button>
          {currentUser && (
            <button
              onClick={() => setShowUserListings(!showUserListings)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              {showUserListings ? 'Show All' : 'Your Listings'}
            </button>
          )}
          <button
            onClick={() =>
              handleNavigate(viewMode === 'products' ? '/product-form' : '/request-form')
            }
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
          >
            {viewMode === 'products' ? 'Sell Product' : 'Request Product'}
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
          placeholder="Search by name or description..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full sm:w-1/2 lg:w-1/3 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row justify-end items-center mb-4 gap-4">
        {/* Price Range Filter */}
        <div className="flex items-center">
          <label htmlFor="priceFilter" className="mr-2 text-gray-600">
            Price Range:
          </label>
          <select
            id="priceFilter"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All</option>
            <option value="0-2000">0-2000</option>
            <option value="2001-5000">2001-5000</option>
            <option value="5000+">5000+</option>
          </select>
        </div>

        {/* Time Filter */}
        <div className="flex items-center">
          <label htmlFor="timeFilter" className="mr-2 text-gray-600">
            Listed Time:
          </label>
          <select
            id="timeFilter"
            value={timeFilter}
            onChange={(e) => setTimeFilter(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All</option>
            <option value="last3days">Last 3 Days</option>
            <option value="lastWeek">Last Week</option>
            <option value="lastMonth">Last Month</option>
          </select>
        </div>
      </div>

      {displayedItems.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-600 text-lg">
            {showUserListings
              ? `You haven't ${
                  viewMode === 'products' ? 'listed any products' : 'made any requests'
                } yet.`
              : `No ${viewMode === 'products' ? 'products' : 'requests'} available.`}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedItems.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              isOwner={currentUser?.uid === item.userId}
              type={viewMode}
              formatDate={formatDate}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;