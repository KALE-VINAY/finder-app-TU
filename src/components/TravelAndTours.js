import React, { useState ,useEffect } from 'react';
import { Plane, Map, Phone, Mail, Clock, Star, ChevronRight } from 'lucide-react';
import Mainheader from './Mainheader';

const TravelAndTours = () => {
  const [selectedDestination, setSelectedDestination] = useState(0);

    // Add this useEffect to scroll to top when component mounts or id changes
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const destinations = [
    {
      title: "TAWANG",
      price: "$1,299",
      duration: "3 days",
      description: "Discover the breathtaking snow mountain landscapes",
      imgUrl: '/tours/tawang2.jpg',
      phContact1:'9101962877',
      // phContact2:'',
    },
    // {
    //   title: "Meghalaya ",
    //   price: "$2,499",
    //   duration: "10 days",
    //   description: "Discover the breathtaking mountain landscapes",
    //   imgUrl: '/tours/meghalaya.jpg'
    // },
    {
      title: "ROING",
      price: "$1,799",
      duration: "8 days",
      description: "Discover the breathtaking mountain landscapes",
      imgUrl: '/tours/roing.jpg',
      phContact1:'9706218186',
      // phContact2:'',
    },
    // {
    //   title: "DZUKOU VALLY",
    //   price: "$1,799",
    //   duration: "8 days",
    //   description: "Island hopping in crystal clear waters",
    //   imgUrl: '/tours/DZUKOU.jpg',
    //   phContact1:'',
    //   // phContact2:'',
    // }
    {
      title: "CHIGU CAMP ANINI",
      price: "$1,799",
      duration: "8 days",
      description: "Discover the breathtaking mountain landscapes",
      imgUrl: '/tours/Anini.jpg',
      phContact1:'7099036358',
      // phContact2:'',
    },
  ];

  const services = [
    {
      icon: <Plane className="mb-2" />,
      title: "Flight Booking",
      description: "International & domestic flights"
    },
    {
      icon: <Map className="mb-2" />,
      title: "Tour Packages",
      description: "Customized & group tours"
    },
    {
      icon: <Clock className="mb-2" />,
      title: "24/7 Support",
      description: "Round the clock assistance"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800">

      {/* <Mainheader/> */}
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Your Next Adventure</h1>
          <p className="text-xl mb-8">Explore the world with our premium travel packages</p>
          {/* <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
            Start Planning
          </button> */}
        </div>
      </div>

      {/* Featured Destinations */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              onMouseEnter={() => setSelectedDestination(index)}
            >
              <div className="h-96 bg-gray-200 relative">
                <img 
                  src={dest.imgUrl}
                  alt={dest.title}
                  className="w-full h-full object-cover"
                />
                {/* <div className="absolute top-4 right-4 bg-white px-4 py-1 rounded-full font-semibold">
                  {dest.price}
                </div> */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{dest.title}</h3>
                <p className="text-gray-600 mb-4">{dest.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{dest.duration}</span>
                  <button className="flex items-center text-blue-600 hover:text-blue-700">
                    <a href={`tel:${dest.phContact1}`} className="flex items-center text-blue-700 hover:text-red-500">
                      <Phone className="w-4 h-4 mr-2" />
                      {dest.phContact1}
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section
      <div className="bg-blue-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl text-center hover:shadow-md transition-shadow">
                <div className="text-blue-600 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold my-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Contact Section
      <div className="max-w-6xl mx-auto py-16 px-4">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-600 mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-3" />
                  <span>info@traveltours.com</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-blue-600 mr-3" />
                  <span>24/7 Customer Support</span>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div> */}

      {/* Footer */}
      {/* <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 Travel & Tours. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
  );
};

export default TravelAndTours;