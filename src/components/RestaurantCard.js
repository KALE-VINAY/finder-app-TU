// RestaurantCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantCard = ({ name, cuisines, price, rating, time, discount, imageUrl, promoted }) => {
  return (
    <a href='/restaurant' >
    
<div className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {/* {promoted && (
        <div className="absolute top-2 left-2 bg-gray-700 text-white text-xs font-semibold px-2 py-1 rounded">
          Promoted
        </div>
      )} */}
      <img src={imageUrl} alt={name} className="w-full h-40 object-cover" />
      <div className="p-4">
        {/* {discount && (
          <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
            {discount}
          </span>
        )} */}
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500">{cuisines}</p>
        
        
      </div>
    </div>
    </a>
    
  );
};

export default RestaurantCard;
