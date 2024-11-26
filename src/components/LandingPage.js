import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAd from './GoogleAd';
import { 
  Utensils, 
  Plane, 
  Car, 
  Stethoscope, 
  Shirt, 
  ArrowRight,
  MapPin,
  Phone,
  Clock
} from 'lucide-react';

const LandingPage = () => {
  const services = [
    {
      title: "Restaurants & Hostel Canteens",
      description: "Discover local cuisines and campus dining options",
      icon: <Utensils className="w-6 h-6" />,
      path: "/browse",
      color: "bg-orange-500"
    },
    {
      title: "Travel & Tours",
      description: "Explore exciting destinations and tour packages",
      icon: <Plane className="w-6 h-6" />,
      path: "/travel-and-tours",
      color: "bg-blue-500"
    },
    {
      title: "Car & Bike Rentals",
      description: "Rent vehicles for your convenience",
      icon: <Car className="w-6 h-6" />,
      path: "/car-and-bike-rentals",
      color: "bg-red-500"
    },
    {
      title: "TU Medical Services",
      description: "24/7 healthcare support and assistance",
      icon: <Stethoscope className="w-6 h-6" />,
      path: "/medical-services",
      color: "bg-green-500"
    },
    {
      title: "Sports Jersey & Department T-Shirts",
      description: "Custom jerseys and college merchandise",
      icon: <Shirt className="w-6 h-6" />,
      path: "/sports-jersey",
      color: "bg-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <div className="relative">
        {/* Background Pattern - Using CSS grid pattern instead of image */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="absolute inset-0 opacity-10 z-0 bg-grid-pattern"></div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600">
              Welcome to Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Your one-stop destination for all campus services
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>Campus Wide</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Clock className="w-5 h-5" />
                <span>24/7 Available</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="w-5 h-5" />
                <span>Support</span>
              </div>
            </div>
          </div>

          {/* Add an Ad after Hero Section */}
            <div className="container mx-auto px-4 my-8">
              <GoogleAd 
                adClient="ca-pub-4690888267077588"
                adSlot="YOUR_AD_SLOT_ID"
                fullWidth={true}
              />
            </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <React.Fragment key={index}>
              <Link key={index} to={service.path} className="group">
                <div className="bg-gray-800 backdrop-blur-lg bg-opacity-50 rounded-xl p-6 hover:bg-opacity-70 transition-all duration-300 border border-gray-700 hover:border-gray-600">
                  <div className={`${service.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-orange-400 group-hover:translate-x-2 transition-transform duration-300">
                    <span className="mr-2">Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>

              {/* Insert an ad every 3 service cards */}
              {(index + 1) % 3 === 0 && (
                  <div className="col-span-full my-4">
                    <GoogleAd 
                      adClient="ca-pub-4690888267077588"
                      adSlot="ANOTHER_AD_SLOT_ID"
                      fullWidth={true}
                    />
                  </div>
                )}

              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Footer with Ad */}
      <div className="container mx-auto px-4 my-8">
        <GoogleAd 
          adClient="ca-pub-4690888267077588"
          adSlot="FOOTER_AD_SLOT_ID"
          fullWidth={true}
        />
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Campus Services. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;