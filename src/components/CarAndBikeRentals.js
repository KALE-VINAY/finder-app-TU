import React, { useState } from 'react';
import { 
  Car, 
  Bike, 
  Calendar, 
  Phone, 
  Mail, 
  Clock, 
  Shield, 
  Wrench, // Changed from Tool
  DollarSign, 
  MapPin 
} from 'lucide-react';

const CarAndBikeRentals = () => {
  const [activeTab, setActiveTab] = useState('cars');

  const cars = [
    {
      name: "Toyota Camry",
      category: "Sedan",
      price: "$60/day",
      features: ["5 Seats", "Automatic", "AC", "GPS"],
      available: true
    },
    {
      name: "Honda CR-V",
      category: "SUV",
      price: "$80/day",
      features: ["7 Seats", "Automatic", "AC", "GPS"],
      available: true
    },
    {
      name: "Mercedes C-Class",
      category: "Luxury",
      price: "$120/day",
      features: ["5 Seats", "Automatic", "Premium Audio", "GPS"],
      available: false
    }
  ];

  const bikes = [
    {
      name: "Honda CBR",
      category: "Sports",
      price: "$40/day",
      features: ["300cc", "ABS", "Digital Console"],
      available: true
    },
    {
      name: "Royal Enfield Classic",
      category: "Cruiser",
      price: "$35/day",
      features: ["350cc", "Classic Style", "Comfortable"],
      available: true
    },
    {
      name: "Yamaha MT",
      category: "Street",
      price: "$45/day",
      features: ["250cc", "ABS", "LED Lights"],
      available: true
    }
  ];

  const services = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Insurance Coverage",
      description: "Comprehensive insurance for worry-free rides"
    },
    {
      icon: <Wrench className="w-6 h-6" />, // Changed from Tool to Wrench
      title: "24/7 Maintenance",
      description: "Round-the-clock technical support"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Pickup & Drop",
      description: "Convenient doorstep delivery"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      {/* Hero Section */}
      <div className="bg-red-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Premium Vehicle Rentals</h1>
          <p className="text-xl mb-8">Explore our fleet of cars and bikes for your next journey</p>
          <div className="flex justify-center gap-4">
            <button 
              className={`px-8 py-3 rounded-full font-semibold transition-colors ${
                activeTab === 'cars' 
                  ? 'bg-white text-red-600' 
                  : 'bg-transparent border-2 border-white'
              }`}
              onClick={() => setActiveTab('cars')}
            >
              <Car className="inline-block mr-2 w-5 h-5" />
              Cars
            </button>
            <button 
              className={`px-8 py-3 rounded-full font-semibold transition-colors ${
                activeTab === 'bikes' 
                  ? 'bg-white text-red-600' 
                  : 'bg-transparent border-2 border-white'
              }`}
              onClick={() => setActiveTab('bikes')}
            >
              <Bike className="inline-block mr-2 w-5 h-5" />
              Bikes
            </button>
          </div>
        </div>
      </div>

      {/* Vehicle Listings */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(activeTab === 'cars' ? cars : bikes).map((vehicle, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200">
                <img 
                  src={`/api/placeholder/400/320`}
                  alt={vehicle.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">{vehicle.name}</h3>
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
                    {vehicle.category}
                  </span>
                </div>
                <ul className="space-y-2 mb-4">
                  {vehicle.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-600">{vehicle.price}</span>
                  <button 
                    className={`px-4 py-2 rounded-lg font-semibold ${
                      vehicle.available 
                        ? 'bg-red-600 text-white hover:bg-red-700' 
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={!vehicle.available}
                  >
                    {vehicle.available ? 'Book Now' : 'Not Available'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-red-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                <div className="text-red-600 flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Process */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How to Book</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: <Calendar />, title: "Choose Date" },
            { icon: <Car />, title: "Select Vehicle" },
            { icon: <DollarSign />, title: "Make Payment" },
            { icon: <MapPin />, title: "Get Vehicle" }
          ].map((step, index) => (
            <div key={index} className="text-center">
              <div className="text-red-600 flex justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="font-semibold">{step.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <div className="space-y-4">
                <p className="flex items-center justify-center md:justify-start">
                  <Phone className="w-5 h-5 mr-3" />
                  +1 (555) 123-4567
                </p>
                <p className="flex items-center justify-center md:justify-start">
                  <Mail className="w-5 h-5 mr-3" />
                  rentals@example.com
                </p>
                <p className="flex items-center justify-center md:justify-start">
                  <Clock className="w-5 h-5 mr-3" />
                  24/7 Support Available
                </p>
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-4">Business Hours</h3>
              <div className="space-y-2">
                <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                <p>Saturday: 9:00 AM - 6:00 PM</p>
                <p>Sunday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-4">Location</h3>
              <p>123 Rental Street</p>
              <p>Downtown Area</p>
              <p>City, State 12345</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-4 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 Car & Bike Rentals. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CarAndBikeRentals;