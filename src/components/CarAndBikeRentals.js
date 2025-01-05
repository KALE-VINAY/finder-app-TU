import React, { useState , useEffect } from 'react';
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
import Mainheader from './Mainheader';
import HeaderRent from './HeaderRent';

const CarAndBikeRentals = () => {
  const [activeTab, setActiveTab] = useState('cars');

   // Add this useEffect to scroll to top when component mounts or id changes
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    
    // {
    //   name: "Mercedes C-Class",
    //   category: "Luxury",
    //   price: "$120/day",
    //   features: ["5 Seats", "Automatic", "Premium Audio", "GPS"],
    //   available: false ,
    //   contact:'',
    //   imgURL:"https://tse4.mm.bing.net/th?id=OIP.Nz-6xNa6rBQR0dC641EogAAAAA&pid=Api&P=0&h=180",
    // }
    // ,
    // {
    //   name: "Mercedes C-Class",
    //   category: "Luxury",
    //   price: "$120/day",
    //   features: ["5 Seats", "Automatic", "Premium Audio", "GPS"],
    //   available: false ,
    //   contact:'',
    //   imgURL:"https://tse3.mm.bing.net/th?id=OIP.QEthQt0VZO561CKHw7mBFwHaEh&pid=Api&P=0&h=180",
    // }
    // ,
    // {
    //   name: "Mercedes C-Class",
    //   category: "Luxury",
    //   price: "$120/day",
    //   features: ["5 Seats", "Automatic", "Premium Audio", "GPS"],
    //   available: false ,
    //   contact:'',
    //   imgURL:"https://tse3.mm.bing.net/th?id=OIP.kqbwEYB0r6iqjj72yXmaiQHaFj&pid=Api&P=0&h=180",
    // }
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
    // {
    //   name: "Mercedes C-Class",
    //   category: "Luxury",
    //   price: "$120/day",
    //   features: ["5 Seats", "Automatic", "Premium Audio", "GPS"],
    //   available: false ,
    //   contact:'',
    //   imgURL:"https://tse2.mm.bing.net/th?id=OIP.N2AUzQrnZPN0gyBvOyPs2AHaEj&pid=Api&P=0&h=180",
    // }
    // ,
    // {
    //   name: "Mercedes C-Class",
    //   category: "Luxury",
    //   price: "$120/day",
    //   features: ["5 Seats", "Automatic", "Premium Audio", "GPS"],
    //   available: false ,
    //   contact:'',
    //   imgURL:"https://tse4.mm.bing.net/th?id=OIP.niwv-TXiVl1RN_cSpWv_mQHaEa&pid=Api&P=0&h=180",
    // }
    // ,
    // {
    //   name: "Mercedes C-Class",
    //   category: "Luxury",
    //   price: "$120/day",
    //   features: ["5 Seats", "Automatic", "Premium Audio", "GPS"],
    //   available: false ,
    //   contact:'',
    //   imgURL:"https://tse2.mm.bing.net/th?id=OIP.hNa-zjopEP8wUSYCvFFKlgHaEj&pid=Api&P=0&h=180",
    // }
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

      {/* <Mainheader/> */}
      <HeaderRent/>

      {/* Hero Section */}
      <div className="bg-red-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Vehicle Rentals</h1>
          <p className="text-xl mb-8">Explore our fleet of cars, auto, travellers and bikes for your next journey</p>
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
              4 & 3 wheeler
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
              2 wheeler
            </button>
          </div>
        </div>
      </div>
      {/* 4 wheeler Vehicle Listings */}
      {activeTab === 'cars' && (
        <>
          <div className='text-center mt-5 text-gray-700 font-bold font-serif text-4xl'>Cars</div>
          <div className="max-w-6xl mx-auto py-16 px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cars.map((vehicle, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-white">
                    <img 
                      src={vehicle.imgURL}
                      alt={vehicle.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold">{vehicle.name}</h3>
                      <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
                        {/* {vehicle.category} */}
                      </span>
                    </div>
                    {/* <ul className="space-y-2 mb-4">
                      {vehicle.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-600 Version 1 of 2flex items-center">
                          <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul> */}
                    <div className="flex justify-between items-center">
                      {/* <span className="text-2xl font-bold text-red-600">{vehicle.price}</span> */}
                      {/* <button 
                        className={`px-4 py-2 rounded-lg font-semibold ${
                          vehicle.available 
                            ? 'bg-red-600 text-white hover:bg-red-700' 
                            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        }`}
                        disabled={!vehicle.available}
                      >
                        {vehicle.available ? 'Book Now' : 'Not Available'}
                      </button> */}
                      <a href={`tel:${vehicle.contact}`} className="flex items-center text-red-600 hover:text-red-800">
                  <Phone className="w-4 h-4 mr-2" />
                  {/* {vehicle.contact} */}
                  Call Now
                </a>
                      
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='text-center mt-5 text-gray-700 font-bold font-serif text-4xl'>Tom-Tom & Autos</div>
          <div className="max-w-6xl mx-auto py-16 px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {auto.map((vehicle, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-white">
                    <img 
                      src={vehicle.imgURL}
                      alt={vehicle.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold">{vehicle.name}</h3>
                      <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
                        {/* {vehicle.category} */}
                      </span>
                    </div>
                    {/* <ul className="space-y-2 mb-4">
                      {vehicle.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-600 flex items-center">
                          <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul> */}
                    <div className="flex justify-between items-center">
                      {/* <span className="text-2xl font-bold text-red-600">{vehicle.price}</span> */}
                      {/* <button 
                        className={`px-4 py-2 rounded-lg font-semibold ${
                          vehicle.available 
                            ? 'bg-red-600 text-white hover:bg-red-700' 
                            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        }`}
                        disabled={!vehicle.available}
                      >
                        {vehicle.available ? 'Book Now' : 'Not Available'}
                      </button> */}
                      <a href={`tel:${vehicle.contact}`} className="flex items-center text-red-600 hover:text-red-800">
                        <Phone className="w-4 h-4 mr-2" />
                        {/* {vehicle.contact} */}
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='text-center mt-5 text-gray-700 font-bold font-serif text-4xl'>Travellers</div>
          <div className="max-w-6xl mx-auto py-16 px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {traveller.map((vehicle, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-white">
                    <img 
                      src={vehicle.imgURL}
                      alt={vehicle.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold">{vehicle.name}</h3>
                      <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
                        {/* {vehicle.category} */}
                      </span>
                    </div>
                    {/* <ul className="space-y-2 mb-4">
                      {vehicle.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-600 flex items-center">
                          <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul> */}
                    <div className="flex justify-between items-center">
                      {/* <span className="text-2xl font-bold text-red-600">{vehicle.price}</span> */}
                      {/* <button 
                        className={`px-4 py-2 rounded-lg font-semibold ${
                          vehicle.available 
                            ? 'bg-red-600 text-white hover:bg-red-700' 
                            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        }`}
                        disabled={!vehicle.available}
                      >
                        {vehicle.available ? 'Book Now' : 'Not Available'}
                      </button> */}
                      <a href={`tel:${vehicle.contact}`} className="flex items-center text-red-600 hover:text-red-800">
                        <Phone className="w-4 h-4 mr-2" />
                        {/* {vehicle.contact} */}
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

         {/* 2 wheeler Vehicle Listings */}
         {activeTab === 'bikes' && (
        <div className="max-w-6xl mx-auto py-16 px-4">
          <div className='text-center mt-5 text-gray-700 font-bold font-serif text-4xl mb-12'>2 Wheeler Bikes</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bikes.map((vehicle, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-white">
                  <img 
                    src={vehicle.imgURL}
                    alt={vehicle.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">{vehicle.name}</h3>
                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
                      {/* {vehicle.category} */}
                    </span>
                  </div>
                  {/* <ul className="space-y-2 mb-4">
                    {vehicle.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul> */}
                  <div className="flex justify-between items-center">
                    {/* <span className="text-2xl font-bold text-red-600">{vehicle.price}</span> */}
                    {/* <button 
                      className={`px-4 py-2 rounded-lg font-semibold ${
                        vehicle.available 
                          ? 'bg-red-600 text-white hover:bg-red-700' 
                          : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      }`}
                      disabled={!vehicle.available}
                    >
                      {vehicle.available ? 'Book Now' : 'Not Available'}
                    </button> */}
                      <a href={`tel:${vehicle.contact}`} className="flex items-center text-red-600 hover:text-red-800">
                        <Phone className="w-4 h-4 mr-2" />
                        {/* {vehicle.contact} */}
                        Call Now
                      </a>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Services Section */}
      {/* <div className="bg-red-50 py-16 px-4">
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
      </div> */}

      {/* Booking Process */}
      <div className="max-w-6xl bg-red-50 mb-10 mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How to Book</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: <Calendar />, title: "Choose Date" },
            { icon: <Car />, title: "Select Vehicle" },
            { icon: <DollarSign />, title: "Make a Best Deal" },
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
      {/* <div className="bg-gray-900 text-white py-16 px-4">
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
      </div> */}

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