import React from 'react'
import RestaurantCard from './RestaurantCard';

const Browse = () => {

    const restaurants = [
        {
          name: 'Paakashala',
          cuisines: 'South Indian, North Indian',
          price: '₹100 for one',
          rating: 4.4,
          time: '31 min',
          discount: '50% OFF',
          imageUrl: 'https://example.com/paakashala.jpg', // Replace with actual image URL
          promoted: true,
        },
        {
          name: 'S N Refreshments',
          cuisines: 'South Indian',
          price: '₹40 for one',
          rating: 4.6,
          time: '24 min',
          imageUrl: 'https://example.com/sn_refreshments.jpg', // Replace with actual image URL
          promoted: false,
        },
        {
          name: 'Namaste',
          cuisines: 'South Indian, North Indian',
          price: '₹150 for one',
          rating: 4.3,
          time: '36 min',
          discount: '40% OFF',
          imageUrl: 'https://example.com/namaste.jpg', // Replace with actual image URL
          promoted: true,
        },
        // Add more restaurants as needed
      ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-semibold mb-6 text-center">J P Nagar Phase 5, J. P. Nagar, Bengaluru Restaurants</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((restaurant, index) => (
          <RestaurantCard key={index} {...restaurant} />
        ))}
      </div>
    </div>
  );
}

export default Browse