import React, { useState } from 'react';
import { MapPin, Search, Phone, Share2, Star, ChevronDown, Copy, Navigation } from 'lucide-react';

const RestaurantWebsite = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [selectedDate, setSelectedDate] = useState('Today');
  const [selectedTime, setSelectedTime] = useState('1 guest');

  const tabs = ['Overview', 'Reviews', 'Photos', 'Menu', 'Book a Table'];
  
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-4 flex-1">
            <img src="/api/placeholder/100/40" alt="Zomato" className="h-6" />
            <div className="hidden md:flex items-center flex-1 max-w-2xl">
              <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 flex-1">
                <MapPin className="w-5 h-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="JP Nagar Phase 5" 
                  className="bg-transparent outline-none ml-2 flex-1"
                />
                <Search className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-700">Log in</button>
            <button className="text-gray-700">Sign up</button>
          </div>
        </div>
      </header>

      {/* Restaurant Hero Section */}
      <div className="relative">
        <div className="grid grid-cols-3 gap-2 max-h-96">
          <div className="col-span-2">
            <img 
              src="/api/placeholder/800/400" 
              alt="Restaurant" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-rows-2 gap-2">
            <img 
              src="/api/placeholder/400/200" 
              alt="Food" 
              className="w-full h-full object-cover"
            />
            <div className="relative">
              <img 
                src="/api/placeholder/400/200" 
                alt="Interior" 
                className="w-full h-full object-cover"
              />
              <button className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center">
                View Gallery
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Restaurant Info */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">The Palms Brew & Kitchen</h1>
            <p className="text-gray-600 mb-2">Modern Indian, North Indian</p>
            <p className="text-gray-600">JP Nagar, Bangalore</p>
            <div className="flex items-center space-x-4 mt-4">
              <span className="flex items-center bg-green-100 text-green-700 px-2 py-1 rounded">
                <Star className="w-4 h-4 mr-1" fill="currentColor" />
                4.2
              </span>
              <button className="border rounded-full px-4 py-1">Direction</button>
              <button className="border rounded-full px-4 py-1">Share</button>
              <button className="border rounded-full px-4 py-1">Reviews</button>
              <button className="border rounded-full px-4 py-1">Book a Table</button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b mt-8">
          <div className="flex space-x-8">
            {tabs.map(tab => (
              <button
                key={tab}
                className={`pb-4 ${
                  activeTab === tab 
                    ? 'text-red-500 border-b-2 border-red-500' 
                    : 'text-gray-600'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Left Content */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-gray-600">Modern Indian</span>
              <span className="text-gray-600">North Indian</span>
            </div>

            {/* Menu Images */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="border rounded-lg p-4">
                <img src="/api/placeholder/200/300" alt="Food Menu" className="w-full mb-2" />
                <p className="text-gray-700">Food Menu</p>
                <p className="text-gray-500 text-sm">5 pages</p>
              </div>
              <div className="border rounded-lg p-4">
                <img src="/api/placeholder/200/300" alt="Bar Menu" className="w-full mb-2" />
                <p className="text-gray-700">Bar Menu</p>
                <p className="text-gray-500 text-sm">3 pages</p>
              </div>
            </div>

            {/* More Info */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">More Info</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['Air Conditioning', 'Parking', 'Outdoor Seating', 'Serves Alcohol', 'Smoking Area'].map(info => (
                  <div key={info} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-gray-600">{info}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="bg-gray-50 p-4 rounded-lg h-fit">
            <h3 className="font-semibold mb-4">Table reservation</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <select 
                  className="bg-white border rounded px-4 py-2 w-[48%]"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                >
                  <option>Today</option>
                </select>
                <select 
                  className="bg-white border rounded px-4 py-2 w-[48%]"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                >
                  <option>1 guest</option>
                </select>
              </div>
              <button className="w-full bg-red-500 text-white rounded py-2">
                Book a table
              </button>
            </div>

            {/* Map */}
            <div className="mt-8">
              <h3 className="font-semibold mb-4">Direction</h3>
              <div className="bg-gray-200 h-48 rounded-lg mb-4">
                <img src="/api/placeholder/400/200" alt="Map" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="flex justify-between">
                <button className="flex items-center text-red-500">
                  <Copy className="w-4 h-4 mr-1" />
                  Copy
                </button>
                <button className="flex items-center text-red-500">
                  <Navigation className="w-4 h-4 mr-1" />
                  Direction
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantWebsite;