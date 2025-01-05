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

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [requests, setRequests] = useState([]);
  const [showUserListings, setShowUserListings] = useState(false);
  const [viewMode, setViewMode] = useState('products'); // 'products' or 'requests'
  const [loading, setLoading] = useState(true);
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
          {viewMode === 'products' ? 'Campus Marketplace' : 'Product Requests  by Students'}
        </h2>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => setViewMode(viewMode === 'products' ? 'requests' : 'products')}
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors"
          >
            {viewMode === 'products' ? 'Product Requests ' : 'Campus Marketplace'}
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

      {(viewMode === 'products' ? products : requests).length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-600 text-lg">
            {showUserListings
              ? `You haven't ${viewMode === 'products' ? 'listed' : 'requested'} any items yet`
              : `No ${viewMode === 'products' ? 'products' : 'requests'} available`}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(viewMode === 'products' ? products : requests).map((item) => (
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
