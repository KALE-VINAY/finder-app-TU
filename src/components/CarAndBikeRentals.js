import React, { useState, useEffect } from 'react';
import { 
  Car, 
  Bike,
  Calendar, 
  Phone,
  DollarSign, 
  MapPin,
  ChevronUp,
  Bus,Truck
} from 'lucide-react';

import HeaderRent from './HeaderRent';

const CarAndBikeRentals = () => {
  const [activeTab, setActiveTab] = useState('cars');
  const [showScrollButton, setShowScrollButton] = useState(false);
   
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
   
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 300; 
      setShowScrollButton(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
    
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const cars = [
    {
      name: "Innova",
      category: "Sedan",
      price: "₹/day",
      features: ["5 Seats", "Automatic", "AC", "GPS"],
      available: true ,
      contact:'9706218186',
      imgURL:"https://tse1.mm.bing.net/th?id=OIP.QCO6nYNKoEEQN2uMmMio6wHaEx&pid=Api&P=0&h=180",
    },
    {
      name: "Huyndai Venue",
      category: "SUV",
      price: "₹1800/day",
      features: ["7 Seats", "Automatic", "AC", "GPS"],
      available: true ,
      contact:'9127011121',
      imgURL:"https://www.motortrend.com/uploads/sites/10/2020/07/2020-hyundai-venue-denim-suv-angular-front.png",
    },
    {
      name: "Tata Altroz",
      category: "Luxury",
      price: "$120/day",
      features: ["5 Seats", "Automatic", "Premium Audio", "GPS"],
      available: false ,
      contact:'9085748140',
      imgURL:"https://tse1.mm.bing.net/th?id=OIP.2C-W4iRD975uYU5S2acZ0wHaEW&pid=Api&P=0&h=180",
    }
    ,
    {
      name: "Tata nexon",
      category: "Luxury",
      price: "$120/day",
      features: ["5 Seats", "Automatic", "Premium Audio", "GPS"],
      available: false ,
      contact:'9127011121',
      imgURL:"https://tse4.mm.bing.net/th?id=OIP.T2zUKgzmNPWdlPj1Z5venwHaE8&pid=Api&P=0&h=180",
    }
    ,
    {
      name: "Swift",
      category: "Luxury",
      price: "$120/day",
      features: ["5 Seats", "Automatic", "Premium Audio", "GPS"],
      available: false ,
      contact:'9127011121',
      imgURL:"https://tse4.mm.bing.net/th?id=OIP.asBr7ZFfLqOGyCSazjuVbQHaFP&pid=Api&P=0&h=180",
    }
    ,
    {
      name: "Dzire",
      category: "Luxury",
      price: "$120/day",
      features: ["5 Seats", "Automatic", "Premium Audio", "GPS"],
      available: false ,
      contact:'9864182962',
      imgURL:"https://tse2.mm.bing.net/th?id=OIP.8IFfAwBtKUK6W6vkjozOCgHaEk&pid=Api&P=0&h=180",
    }
    ,
    {
      name: "Altroz",
      category: "Luxury",
      price: "$120/day",
      features: ["5 Seats", "Automatic", "Premium Audio", "GPS"],
      available: false ,
      contact:'9127011121',
      imgURL:"https://tse1.mm.bing.net/th?id=OIP.okvJpQydsrL6ieg3HKxRRQHaFL&pid=Api&P=0&h=180",
    }
    ,
    {
      name: "mahindra",
      category: "Luxury",
      price: "$120/day",
      features: ["5 Seats", "Automatic", "Premium Audio", "GPS"],
      available: false ,
      contact:'9600774916',
      imgURL:"https://tse4.mm.bing.net/th?id=OIP.knZtz2tqCxmyKf3_SmrjNgHaE8&pid=Api&P=0&h=180",
    }
    
  ];


  const auto = [
    {
      name: "Hasiku Islam Tom Tom TU",
      category: "Luxury",
      price: "$120/day",
      features: ["5 Seats", "Automatic", "Premium Audio", "GPS"],
      available: false ,
      contact:'6900782852',
      imgURL:"https://tse4.mm.bing.net/th?id=OIP.SxvGoj3jsfuYk4RYObogdQHaHa&pid=Api&P=0&h=180",
    },
    {
      name: "Kalam Auto",
      category: "Sedan",
      price: "₹/day",
      features: ["5 Seats", "Automatic", "AC", "GPS"],
      available: true ,
      contact:'8402978782',
      imgURL:"https://tse1.mm.bing.net/th?id=OIP.sXfCAfFwcKj0xVqn3Sc59gHaEK&pid=Api&P=0&h=180",
    },
    {
      name: "Noor Ahmed",
      category: "SUV",
      price: "₹1800/day",
      features: ["7 Seats", "Automatic", "AC", "GPS"],
      available: true ,
      contact:'9707262042',
      imgURL:"https://tse4.mm.bing.net/th?id=OIP.zGT21lCFfHa93ECFW36B2AHaHa&pid=Api&P=0&h=180",
    },
    {
      name: "Nekib da ",
      category: "Luxury",
      price: "$120/day",
      features: ["5 Seats", "Automatic", "Premium Audio", "GPS"],
      available: false ,
      contact:'8486851308',
      imgURL:"https://tse4.mm.bing.net/th?id=OIP.NkY4s1yBwV74XzyGYWU-5gHaEd&pid=Api&P=0&h=180",
    }
    ,
    {
      name: "Billai da",
      category: "Luxury",
      price: "$120/day",
      features: ["5 Seats", "Automatic", "Premium Audio", "GPS"],
      available: false ,
      contact:'7896701818',
      imgURL:"https://tse4.mm.bing.net/th?id=OIP.SxvGoj3jsfuYk4RYObogdQHaHa&pid=Api&P=0&h=180",
    }
    ,
    
  ];


  
  const traveller = [
    {
      name: "force traveller",
      category: "Sedan",
      price: "₹/day",
      features: ["5 Seats", "Automatic", "AC", "GPS"],
      available: true ,
      contact:'7099036358',
      imgURL:"https://tse2.mm.bing.net/th?id=OIP.IikCZ6gIzyDq0Y8MzJGsXAHaFu&pid=Api&P=0&h=180",
    },
    {
      name: "force traveller",
      category: "SUV",
      price: "₹1800/day",
      features: ["7 Seats", "Automatic", "AC", "GPS"],
      available: true ,
      contact:'9706638636',
      imgURL:"https://tse2.mm.bing.net/th?id=OIP.ii7yAMLtMGKY6W2chi-jagHaEK&pid=Api&P=0&h=180",
    },
    {
      name: "force traveller",
      category: "Luxury",
      price: "$120/day",
      features: ["5 Seats", "Automatic", "Premium Audio", "GPS"],
      available: false ,
      contact:'9706159569',
      imgURL:"https://tse2.mm.bing.net/th?id=OIP.BjmJOl0I2T17aFaC8aiNnwHaE8&pid=Api&P=0&h=180",
    }
    ,
    {
      name: "force traveller (GTS Traveller)",
      category: "Luxury",
      price: "$120/day",
      features: ["5 Seats", "Automatic", "Premium Audio", "GPS"],
      available: false ,
      contact:'6901812251',
      imgURL:"https://tse3.mm.bing.net/th?id=OIP.Lfz8yaFZ3YLRmV03g4NvsgHaEM&pid=Api&P=0&h=180",
    }
    ,
  ];



  const bikes = [
    {
      name: "KTM Duke",
      category: "Sports",
      price: "$40/day",
      features: ["300cc", "ABS", "Digital Console"],
      available: true ,
      contact:'9127011121',
      imgURL:"https://tse3.mm.bing.net/th?id=OIP.SCrHuq5klYi5EXS_5dUd8wHaEK&pid=Api&P=0&h=180",
    },
    {
      name: "Ntorq scooty",
      category: "Sports",
      price: "$40/day",
      features: ["300cc", "ABS", "Digital Console"],
      available: true ,
      contact:'8876057961',
      imgURL:"https://tse4.mm.bing.net/th?id=OIP.k9upQd40jih0M56dBUHu1wHaE8&pid=Api&P=0&h=180",
    },
    {
      name: "scooty(Near TU)",
      category: "Sports",
      price: "$40/day",
      features: ["300cc", "ABS", "Digital Console"],
      available: true ,
      contact:'9085112235',
      imgURL:"https://tse3.mm.bing.net/th?id=OIP.Z3msQ-LtqXGop03wp2LBjwHaGo&pid=Api&P=0&h=180",
    },
    {
      name: "Access scooty",
      category: "Sports",
      price: "$40/day",
      features: ["300cc", "ABS", "Digital Console"],
      available: true ,
      contact:'8876057961',
      imgURL:"https://tse4.mm.bing.net/th?id=OIP.c336dwbyrc1XOUwkweG7TwHaE3&pid=Api&P=0&h=180",
    },
    {
      name: "Ntorq scooty",
      category: "Sports",
      price: "$40/day",
      features: ["300cc", "ABS", "Digital Console"],
      available: true ,
      contact:'7575984658',
      imgURL:"https://tse2.mm.bing.net/th?id=OIP.9x7m3CUUqVjweZkex7jBYgAAAA&pid=Api&P=0&h=180",
    },
    
    {
      name: "Royal Enfield Himalayan",
      category: "Cruiser",
      price: "$35/day",
      features: ["350cc", "Classic Style", "Comfortable"],
      available: true ,
      contact:'9127011121',
      imgURL:"https://tse4.mm.bing.net/th?id=OIP.h2pmVAtuAtAgX8wSoCBLaQHaFv&pid=Api&P=0&h=180",
    },
    {
      name: "Himalayan",
      category: "Street",
      price: "$45/day",
      features: ["250cc", "ABS", "LED Lights"],
      available: true ,
      contact:'9127011121',
      imgURL:"https://tse3.mm.bing.net/th?id=OIP.bpwWKvJgR3NZYFsyTRfHcAHaFW&pid=Api&P=0&h=180",
    }
  ];

//   const services = [
//     {
//       icon: <Shield className="w-6 h-6" />,
//       title: "Insurance Coverage",
//       description: "Comprehensive insurance for worry-free rides"
//     },
//     {
//       icon: <Wrench className="w-6 h-6" />, // Changed from Tool to Wrench
//       title: "24/7 Maintenance",
//       description: "Round-the-clock technical support"
//     },
//     {
//       icon: <MapPin className="w-6 h-6" />,
//       title: "Pickup & Drop",
//       description: "Convenient doorstep delivery"
//     }
//   ];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <HeaderRent/>

   {/* Hero Section with Updated Navigation */}
<div className="bg-red-600 text-white py-8 md:py-12 px-4">
  <div className="max-w-6xl mx-auto text-center">
    <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Vehicle Rentals</h1>
    <p className="text-lg md:text-xl mb-6 md:mb-8">Choose from our wide range of vehicles for your next journey</p>
    
    {/* Updated Navigation Buttons with Responsive Sizing */}
    <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-3 md:gap-4 max-w-sm md:max-w-none mx-auto">
      <button 
        className={`px-3 md:px-6 py-2 md:py-3 text-sm md:text-base rounded-full font-semibold transition-all transform hover:scale-105 ${
          activeTab === 'cars' 
            ? 'bg-white text-red-600 shadow-lg' 
            : 'bg-transparent border-2 border-white hover:bg-white/10'
        }`}
        onClick={() => setActiveTab('cars')}
      >
        <Car className="inline-block mr-1 md:mr-2 w-4 h-4 md:w-5 md:h-5" />
        <span className="whitespace-nowrap">Cars</span>
      </button>
      
      <button 
        className={`px-3 md:px-6 py-2 md:py-3 text-sm md:text-base rounded-full font-semibold transition-all transform hover:scale-105 ${
          activeTab === 'auto' 
            ? 'bg-white text-red-600 shadow-lg' 
            : 'bg-transparent border-2 border-white hover:bg-white/10'
        }`}
        onClick={() => setActiveTab('auto')}
      >
        <Truck className="inline-block mr-1 md:mr-2 w-4 h-4 md:w-5 md:h-5" />
        <span className="whitespace-nowrap">Auto</span>
      </button>
      
      <button 
        className={`px-3 md:px-6 py-2 md:py-3 text-sm md:text-base rounded-full font-semibold transition-all transform hover:scale-105 ${
          activeTab === 'traveller' 
            ? 'bg-white text-red-600 shadow-lg' 
            : 'bg-transparent border-2 border-white hover:bg-white/10'
        }`}
        onClick={() => setActiveTab('traveller')}
      >
        <Bus className="inline-block mr-1 md:mr-2 w-4 h-4 md:w-5 md:h-5" />
        <span className="whitespace-nowrap">Travellers</span>
      </button>
      
      <button 
        className={`px-3 md:px-6 py-2 md:py-3 text-sm md:text-base rounded-full font-semibold transition-all transform hover:scale-105 ${
          activeTab === 'bikes' 
            ? 'bg-white text-red-600 shadow-lg' 
            : 'bg-transparent border-2 border-white hover:bg-white/10'
        }`}
        onClick={() => setActiveTab('bikes')}
      >
        <Bike className="inline-block mr-1 md:mr-2 w-4 h-4 md:w-5 md:h-5" />
        <span className="whitespace-nowrap">Bikes</span>
      </button>
    </div>
  </div>
</div>

      {/* Vehicle Listings */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        {/* Cars Section */}
        {activeTab === 'cars' && (
          <div>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Available Cars</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {cars.map((vehicle, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="h-48 bg-white">
                    <img 
                      src={vehicle.imgURL}
                      alt={vehicle.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4">{vehicle.name}</h3>
                    <a href={`tel:${vehicle.contact}`} className="inline-flex items-center text-red-600 hover:text-red-800 font-medium">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Auto & Tom-Tom Section */}
        {activeTab === 'auto' && (
          <div>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Available Autos & Tom-Toms</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {auto.map((vehicle, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="h-48 bg-white">
                    <img 
                      src={vehicle.imgURL}
                      alt={vehicle.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4">{vehicle.name}</h3>
                    <a href={`tel:${vehicle.contact}`} className="inline-flex items-center text-red-600 hover:text-red-800 font-medium">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Traveller Section */}
        {activeTab === 'traveller' && (
          <div>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Available Travellers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {traveller.map((vehicle, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="h-48 bg-white">
                    <img 
                      src={vehicle.imgURL}
                      alt={vehicle.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4">{vehicle.name}</h3>
                    <a href={`tel:${vehicle.contact}`} className="inline-flex items-center text-red-600 hover:text-red-800 font-medium">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bikes Section */}
        {activeTab === 'bikes' && (
          <div>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Available Bikes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {bikes.map((vehicle, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="h-48 bg-white">
                    <img 
                      src={vehicle.imgURL}
                      alt={vehicle.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4">{vehicle.name}</h3>
                    <a href={`tel:${vehicle.contact}`} className="inline-flex items-center text-red-600 hover:text-red-800 font-medium">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Booking Process */}
      <div className="max-w-6xl mx-auto py-16 px-4 bg-red-50 rounded-xl mb-10">
        <h2 className="text-3xl font-bold text-center mb-12">How to Book</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: <Calendar className="w-6 h-6" />, title: "Choose Date" },
            { icon: <Car className="w-6 h-6" />, title: "Contact Vehicle" },
            { icon: <DollarSign className="w-6 h-6" />, title: "Make a Best Deal" },
            { icon: <MapPin className="w-6 h-6" />, title: "Get Vehicle" }
          ].map((step, index) => (
            <div key={index} className="text-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="text-red-600 flex justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="font-semibold">{step.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-4 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 Vehicle Rentals. All rights reserved.</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default CarAndBikeRentals;