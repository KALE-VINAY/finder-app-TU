import React, { useState } from 'react';
import {   Star,  Copy, Navigation } from 'lucide-react';
import Header from './Header';

const RestaurantWebsite = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [selectedDate, setSelectedDate] = useState('Today');
  const [selectedTime, setSelectedTime] = useState('1 guest');

  const tabs = ['Overview', 'Reviews', 'Photos', 'Menu', 'Book a Table'];
  
  return (
    <div className="min-h-screen bg-white">
    
   
      {/* Header */}
      {/* <header className="border-b">
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
      </header> */}
    {/* Restaurant Info */}
    <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between" >
          <div className="flex flex-col w-6/12 gap-4" >
            <h1 className="text-4xl font-bold font-serif mt-24">SRISHTI RESTAURANT</h1>
            <p className="text-gray-600 my-2">Modern Indian, North Indian</p>
            <p className="text-gray-600">Tezpur university, tezpur</p>
           
          </div>
                    {/* Map */}
                    <div className="mt-8 w-6/12">
                      <h3 className="font-semibold mb-4">Direction</h3>
                      <div className="bg-gray-200 h-48 rounded-lg mb-4">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.511878273082!2d92.8335486754745!3d26.696089476776873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744eb254a078c07%3A0x8ff094b13b51d188!2sSRISHTI%20RESTAURANT!5e0!3m2!1sen!2sin!4v1731004026537!5m2!1sen!2sin" 
                      className='w-full h-full'
                      ></iframe>
                       
                      </div>
                      <div className="flex justify-between">
                      
                        <button className="flex items-center text-red-500">
                          <Navigation className="w-4 h-4 mr-1" />
                          Direction
                        </button>
                      </div>
                    </div>
        </div>

        {/* Tabs */}
        <div className="border-b mt-8">
          {/* <div className="flex space-x-8">
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
          </div> */}
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Left Content */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-gray-600 text-lg">contact details :</span>        
            </div>

            {/* Menu Images */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="border rounded-lg p-4">
              
                <p className="text-gray-700 text-lg">9600774916
                </p>
                
              </div>
              <div className="border rounded-lg p-4">
              
                <p className="text-gray-700 text-lg">9365419001</p>
                
              </div>
            </div>

           
     
          </div>

      
        </div>
      </div>


      {/* Restaurant Hero Section */}
      <div className="relative">
        <div className="grid grid-cols-3 gap-0 mx-4 mb-4 ">
        
            <img 
              src="/srishti1.jpg" 
              alt="Restaurant" 
              className="w-full h-auto object-cover rounded "
            />
             <img 
                src="/srishti2.jpg" 
                alt="Interior" 
                className="w-full  h-auto object-cover rounded"
              />
            <img 
              src="/srishti2.jpg" 
              alt="Food" 
              className="w-full h-auto object-cover rounded"
            />
          
        </div>
      </div>

  
    </div>
  );
};

export default RestaurantWebsite;