import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const HeaderMedical = () => {
  const user = useSelector((store) => store.user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md  sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-green-700">
            TU Services
          </h1>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-green-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        {/* Navbar Links */}
        <nav
          className={`${
            isMenuOpen ? "block p-4" : "hidden"
          } absolute md:relative  top-16 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent md:flex flex-col md:flex-row items-center`}
        >
          <Link
            className="text-lg  block font-medium text-green-700 hover:text-green-900 px-4 py-2"
            to="/landing-page"
          >
            Home
          </Link>
          <Link
            className="text-lg  block font-medium text-green-700 hover:text-green-900 px-4 py-2"
            to="/car-and-bike-rentals"
          >
            Vehicle Rentals
          </Link>
          <Link
            className="text-lg  block font-medium text-green-700 hover:text-green-900 px-4 py-2"
            to="/medical-services"
          >
            Medical Services
          </Link>
          <Link
            className="text-lg block  font-medium text-green-700 hover:text-green-900 px-4 py-2"
            to="/bus-timings"
          >
            Bus Schedule
          </Link>
          <Link
            className="text-lg block font-medium text-green-700 hover:text-green-900 px-4 py-2"
            to="/Browse"
          >
            Restaurants & Canteens
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default HeaderMedical;
