import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-lg font-medium mb-4">TU Food</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#">Home</a></li>
            <li><a href="#">Restaurants</a></li>
            <li><a href="#">Order</a></li>
            <li><a href="#">Account</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-medium mb-4">Popular Cuisines</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#">Indian</a></li>
            <li><a href="#">Chinese</a></li>
            <li><a href="#">Italian</a></li>
            <li><a href="#">Mexican</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-medium mb-4">About</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-medium mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-gray-400 text-sm">
        <p>&copy; 2023 TU Food. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;