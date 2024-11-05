// RestaurantCard.js
import React from 'react';

const RestaurantCard = ({ name, cuisines, price, rating, time, discount, imageUrl, promoted }) => {
  return (
    <a href='/restaurant'>
<div className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {promoted && (
        <div className="absolute top-2 left-2 bg-gray-700 text-white text-xs font-semibold px-2 py-1 rounded">
          Promoted
        </div>
      )}
      <img src={imageUrl} alt={name} className="w-full h-40 object-cover" />
      <div className="p-4">
        {discount && (
          <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
            {discount}
          </span>
        )}
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500">{cuisines}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-gray-800 font-semibold">{price}</span>
          <span className="text-sm text-gray-500">{time}</span>
        </div>
        <div className="flex items-center mt-2">
          <div className="flex items-center text-sm text-green-700 font-semibold">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15l-3.09 1.636.588-3.424-2.491-2.427 3.451-.502L10 7l1.552 3.283 3.451.502-2.491 2.427.588 3.424L10 15z" />
            </svg>
            {rating}
          </div>
        </div>
      </div>
    </div>
    </a>
    
  );
};

export default RestaurantCard;
