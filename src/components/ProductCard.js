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


import React from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase/firebaseConfig';
import { doc, deleteDoc } from 'firebase/firestore';

const ProductCard = ({ item, isOwner, type, formatDate }) => {
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
      {/* Display the product image */}
      {item.imageUrl && (
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-full h-48 object-cover"
        />
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
          <p className="text-lg font-bold text-blue-600">
            Budget: ₹{item.priceRange.min} - ₹{item.priceRange.max}
          </p>
        )}
        <div className="mt-4">
          <p className="text-sm text-gray-500">Contact: {item.contactNumber}</p>
          {item.email && (
            <p className="text-sm text-gray-500">Email: {item.email}</p>
          )}
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
