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
import { Link } from 'react-router-dom';
import { db } from '../firebase/firebaseConfig';
import { doc, deleteDoc } from 'firebase/firestore';
import { Phone, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa'; // Importing WhatsApp icon


const ProductCard = ({ item, isOwner, type, formatDate }) => {
  const [imageLoaded, setImageLoaded] = useState(false); // Track image loading state
  const [imageError, setImageError] = useState(false); // Track image load error

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!imageLoaded) {
        setImageError(true); // Trigger error state if image does not load within 40 seconds
      }
    }, 40000); // 40 seconds timeout

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [imageLoaded]);

  const handleDelete = async () => {
    const confirmation = window.confirm('Are you sure you want to delete this item?');
    if (confirmation) {
      try {
        await deleteDoc(doc(db, type, item.id)); // `type` determines if it's "products" or "requests"
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
          onLoad={() => setImageLoaded(true)} // Set image as loaded when it finishes loading
          onError={() => setImageError(true)} // Set error state if image fails to load
        />
      ) : (
        // Fallback: Display alt text when image fails to load
        <div className="w-full h-48 flex items-center justify-center bg-gray-200 text-gray-500 text-lg font-medium">
          {item.name} image fails to load
        </div>
      )}

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{item.name}</h3>
          <span className="text-sm text-gray-500">
            {formatDate(item.createdAt)}
          </span>
        </div>
        <p className="text-gray-600 mb-2">{item.description}</p>
        {type === 'products' ? (
          <p className="text-lg font-bold text-green-600">₹{item.price}</p>
        ) : (
          <p className="text-lg font-bold text-green-600">
            Budget: ₹{item.priceRange.min} - ₹{item.priceRange.max}
          </p>
        )}
        {/* <div className="mt-4">
          <p className="text-sm text-gray-500">Contact: {item.contactNumber}</p>
          {item.email && (
            <p className="text-sm text-gray-500">Email: {item.email}</p>
          )}
        </div> */}

        <div className="flex items-center mt-4 space-x-4">
          {/* Call Now Button */}
          <a
            href={`tel:${item.contactNumber}`}
            className="flex items-center text-red-600 hover:text-red-800 text-sm sm:text-base"
          >
            <Phone className="w-4 h-4 mr-1" />
            Call Now
          </a>
          {/* Call Now Button */}
          <a
            href={`tel:${item.email}`}
            className="flex items-center text-blue-600 hover:text-violet-800 text-sm sm:text-base"
          >
            <Mail className="w-4 h-4 mr-1" />
            Call Now
          </a>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/91${item.contactNumber}?text=Hello%20there,%20I%27m%20interested%20in%20your%20product%20${item.name}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-green-600 hover:text-green-800 text-sm sm:text-base"
          >
            <FaWhatsapp className="w-4 h-4 mr-1" />
            Message
          </a>
        </div>

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
