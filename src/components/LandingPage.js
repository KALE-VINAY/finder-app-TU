import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
// import GoogleAd from './GoogleAd';
import Modal from './Modal';
import TermsOfService from './TermsOfService';
import PrivacyPolicy from './PrivacyPolicy';

import { 
  Utensils, 
  Plane, 
  Car, 
  Stethoscope, 
  Shirt, 
  ArrowRight,
  // MapPin,
  // Phone,
  // Clock,
  // UserPlus,
  
  UsersRound,Bike,Bus,
  // Tag, 
  DollarSign
} from 'lucide-react';
import Mainheader from './Mainheader';
import ContactModal from './ContactModal';

const LandingPage = () => {
    // Add state for modals
    const [showTerms, setShowTerms] = useState(false);
    const [showPrivacy, setShowPrivacy] = useState(false);
  const services = [
    {
      title: "Restaurants & Hostel Canteens",
      description: "Discover local restaurants menu and contact details",
      icon: <Utensils className="w-6 h-6" />,
      path: "/browse",
      color: "bg-orange-500"
    },
    {
      title: "Vehicle Rentals",
      description: "cars, bikes, Autos and Travellers are available for booking ",
      icon: <Car className="w-6 h-6" />,
      path: "/car-and-bike-rentals",
      color: "bg-red-500"
    },
    {
      title: "TU Medical Services",
      description: "Medicine hostel delivery and healthcare support",
      icon: <Stethoscope className="w-6 h-6" />,
      path: "/medical-services",
      color: "bg-green-500"
    },
    {
      title: "Bus Timings",
      description: "University Bus Timings",
      icon: <Bus className="w-6 h-6" />,
      path: "/bus-timings",
      color: "bg-red-500"
    },
    
    {
      title: "Cycles for Sale ",
      description: "Get the best priced cycles for sale in TU",
      icon: <Bike className="w-6 h-6" />,
      path: "/cycle-sale",
      color: "bg-orange-500"
    },
    {
      title: "Buy and Sell ",
      description: "Buy, sell, or request items within the TU student community!",
      icon: <DollarSign className="w-6 h-6" />,
      path: "/buy-sell",
      color: "bg-green-500"
    },
    {
      title: "University Clubs  ",
      description: "Join TU's vibrant clubs for events, skills, and connections!",
      icon: <UsersRound className="w-6 h-6" />,
      path: "/tu-clubs",
      color: "bg-red-500"
    },
    {
      title: "Sports Jersey & Department T-Shirts",
      description: "Custom jerseys and college merchandise",
      icon: <Shirt className="w-6 h-6" />,
      path: "/sports-jersey",
      color: "bg-purple-500"
    },
     {
      title: "Travel & Tours",
      description: "Explore exciting destinations and tour packages",
      icon: <Plane className="w-6 h-6" />,
      path: "/travel-and-tours",
      color: "bg-blue-500"
    },
    {
      title: "Student Businesses",
      description: "Explore the Businesses from the University Students",
      icon: <Bike className="w-6 h-6" />,
      path: "/listing-business",
      color: "bg-green-500"
    },
    // {
    //   title: "request sell form ",
    //   description: "Buy and Request an item from the University Students",
    //   icon: <Bike className="w-6 h-6" />,
    //   path: "/request-form",
    //   color: "bg-green-500"
    // },  this ====>  "min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
    
  ];

  return (
    <div className="min-h-screen  bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <Mainheader/>
      {/* Hero Section */}
      <div className="relative">
        {/* Background Pattern - Using CSS grid pattern instead of image */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="absolute inset-0 opacity-10 z-0 bg-grid-pattern"></div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600">
              Welcome 
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Your one-stop destination for all campus services
            </p>
            {/* <div className="flex items-center justify-center space-x-4">
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
            </div> */}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              
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
             
            ))}
          </div>
        </div>
      </div>

     

      {/* Footer
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
      </footer> */}
        {/* Footer */}
        <footer className="border-t border-gray-800 mt-20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Campus Services. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button 
                onClick={() => setShowTerms(true)} 
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => setShowPrivacy(true)} 
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                Privacy Policy
              </button>
              {/* <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors"> */}
              <ContactModal/>
              {/* </a> */}
            </div>
          </div>
        </div>
      </footer>
        {/* Add Modals */}
        <Modal 
            isOpen={showTerms} 
            onClose={() => setShowTerms(false)}
          >
            <TermsOfService />
          </Modal>

          <Modal 
            isOpen={showPrivacy} 
            onClose={() => setShowPrivacy(false)}
          >
            <PrivacyPolicy />
          </Modal>


    </div>
  );
};

export default LandingPage;