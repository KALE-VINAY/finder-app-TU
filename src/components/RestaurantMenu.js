import React from 'react';
import { BookOpen, ChevronLeft, Share2, Bookmark, ChevronRight } from 'lucide-react';

const RestaurantMenu = () => {
  const tabs = [
    { id: 1, name: 'Walk-in offers' },
    { id: 2, name: 'Menu' },
    { id: 3, name: 'Photos' },
    { id: 4, name: 'Vibes' }
  ];

  const topDishes = [
    { id: 1, name: 'Salmon Nigiri' },
    { id: 2, name: 'Maki Rolls' },
    { id: 3, name: 'Shanghai C' }
  ];

  const menuCategories = [
    {
      id: 1,
      title: 'Sushi time box',
      pages: '1 pages',
      image: '/api/placeholder/400/300',
      bgColor: 'bg-red-200'
    },
    {
      id: 2,
      title: 'Food',
      pages: '19 pages',
      image: '/api/placeholder/400/300',
      bgColor: 'bg-red-200'
    },
    {
      id: 3,
      title: 'Beverages',
      pages: '2 pages',
      image: '/api/placeholder/400/300',
      bgColor: 'bg-red-200'
    }
  ];

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="p-4 flex items-center justify-between bg-white">
        <div className="flex items-center space-x-2">
          <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full">
            1 device
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xs">25%</span>
        </div>
      </header>

      {/* Restaurant Title Bar */}
      <div className="flex items-center justify-between p-4 bg-white">
        <ChevronLeft className="w-6 h-6" />
        <h1 className="text-lg font-semibold">Lucky Chan - Dimsum & S...</h1>
        <div className="flex space-x-4">
          <Bookmark className="w-6 h-6" />
          <Share2 className="w-6 h-6" />
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex justify-between px-4 py-2 bg-white">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 text-gray-600 ${
              tab.name === 'Menu' ? 'text-black border-b-2 border-black' : ''
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Menu Content */}
      <div className="p-4">
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-1">Menu</h2>
          <p className="text-yellow-600">Last updated 3 months ago</p>
        </div>

      

        {/* Menu Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {menuCategories.map((category) => (
            <div key={category.id} className="bg-white rounded-lg overflow-hidden shadow">
              <img
                src="public\srishti2.jpg"
                alt={category.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">{category.title}</h3>
                <p className="text-gray-500 text-sm">{category.pages}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

     

      {/* Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 flex justify-between p-4 bg-white border-t">
        <button className="p-2">
          <div className="w-6 h-1 bg-gray-400 mb-1"></div>
          <div className="w-6 h-1 bg-gray-400 mb-1"></div>
          <div className="w-6 h-1 bg-gray-400"></div>
        </button>
        <button className="p-2">
          <div className="w-6 h-6 border-2 border-gray-400 rounded"></div>
        </button>
        <button className="p-2">
          <ChevronLeft className="w-6 h-6 text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default RestaurantMenu;