// import React from 'react';
// import { Link } from 'react-router-dom';

// const ProductCard = ({ item, isOwner, type, formatDate }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden">
//       <div className="p-4">
//         <div className="flex justify-between items-start mb-2">
//           <h3 className="text-xl font-semibold">{item.name}</h3>
//           <span className="text-sm text-gray-500">
//             {formatDate(item.createdAt)}
//           </span>
//         </div>
//         <p className="text-gray-600 mb-2">{item.description}</p>
//         {type === 'products' ? (
//           <p className="text-lg font-bold text-green-600">₹{item.price}</p>
//         ) : (
//           <p className="text-lg font-bold text-blue-600">
//             Budget: ₹{item.priceRange.min} - ₹{item.priceRange.max}
//           </p>
//         )}
//         <div className="mt-4">
//           <p className="text-sm text-gray-500">Contact: {item.contactNumber}</p>
//           {item.email && (
//             <p className="text-sm text-gray-500">Email: {item.email}</p>
//           )}
//         </div>
//         {isOwner && (
//           <div className="mt-4">
//             <span className="text-sm text-purple-600 font-medium">Your Listing</span>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
// import React from 'react';
// import { Link } from 'react-router-dom';

// const ProductCard = ({ item, isOwner, type, formatDate }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden">
//       {/* Display the product image */}
//       {item.imageUrl && (
//         <img
//           src={item.imageUrl
//           }
//           alt={item.name}
//           className="w-full h-48 object-cover"
//         />
//       )}
//       <div className="p-4">
//         <div className="flex justify-between items-start mb-2">
//           <h3 className="text-xl font-semibold">{item.name}</h3>
//           <span className="text-sm text-gray-500">
//             {formatDate(item.createdAt)}
//           </span>
//         </div>
//         <p className="text-gray-600 mb-2">{item.description}</p>
//         {type === 'products' ? (
//           <p className="text-lg font-bold text-green-600">₹{item.price}</p>
//         ) : (
//           <p className="text-lg font-bold text-blue-600">
//             Budget: ₹{item.priceRange.min} - ₹{item.priceRange.max}
//           </p>
//         )}
//         <div className="mt-4">
//           <p className="text-sm text-gray-500">Contact: {item.contactNumber}</p>
//           {item.email && (
//             <p className="text-sm text-gray-500">Email: {item.email}</p>
//           )}
//         </div>
//         {isOwner && (
//           <div className="mt-4">
//             <span className="text-sm text-purple-600 font-medium">Your Listing</span>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
import React, { useState, useEffect } from 'react';
import { db } from '../firebase/firebaseConfig';
import { doc, deleteDoc } from 'firebase/firestore';
import { Phone, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const ProductCard = ({ item, isOwner, type, formatDate }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!imageLoaded) {
        setImageError(true);
      }
    }, 40000);

    return () => clearTimeout(timeout);
  }, [imageLoaded]);

  const handleDelete = async () => {
    const confirmation = window.confirm('Are you sure you want to delete this item?');
    if (confirmation) {
      try {
        await deleteDoc(doc(db, type, item.id));
        alert('Item deleted successfully.');
      } catch (error) {
        console.error('Error deleting document:', error);
        alert('Failed to delete the item. Please try again.');
      }
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Skeleton Loader */}
      {!imageLoaded && !imageError && (
        <div className="w-full h-48 bg-gray-400 animate-pulse"></div>
      )}

      {/* Product Image or Fallback */}
      {item.imageUrl && !imageError ? (
        <img
          src={item.imageUrl}
          alt={item.name}
          className={`w-full h-48 object-fill ${imageLoaded ? '' : 'hidden'}`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="w-full h-48 flex items-center justify-center bg-gray-200 text-gray-500 text-lg font-medium">
          {item.name} image fails to load
        </div>
      )}

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{item.name}</h3>
          <span className="text-sm text-gray-500">{formatDate(item.createdAt)}</span>
        </div>
        <p className="text-gray-600 text-sm mb-2">{item.description}</p>
        {type === 'products' ? (
          <p className="text-lg font-bold text-green-600">₹{item.price}</p>
        ) : (
          <p className="text-lg font-bold text-green-600">
            Budget: ₹{item.priceRange.min} - ₹{item.priceRange.max}
          </p>
        )}

        {/* Contact Buttons in a Single Row */}
        {!isOwner && (
          <div className="flex items-center mt-4 space-x-2">
            {/* Call Now Button */}
            <a
              href={`tel:${item.contactNumber}`}
              className="flex items-center text-red-600 px-2 py-1 rounded-md hover:bg-red-200 "
            >
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              Call
            </a>

            {/* Mail Button */}
            <a
              href={`mailto:${item.email}`}
              className="flex items-center text-blue-600 px-2 py-1 rounded-md hover:bg-blue-200 "
            >
              <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              Email
            </a>

            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/91${item.contactNumber}?text=Hello%20there,%20I%27m%20interested%20in%20your%20product%20${item.name}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-green-600 px-2 py-1 rounded-md hover:bg-green-200 "
            >
              <FaWhatsapp className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              WhatsApp
            </a>
          </div>
        )}

        {isOwner && (
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-purple-600 font-medium">Your Listing</span>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
