import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const HeaderRent = () => {
  const user = useSelector((store) => store.user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-gradient-to-r from-red-500 via-red-600 to-red-500 shadow-md  sticky top-0 z-50  text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo or Title */}
        <h1 className="text-3xl md:text-5xl font-serif font-bold">
         Rentals Services
        </h1>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
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
            isMenuOpen ? 'block bg-gradient-to-r from-red-500 via-red-600 to-red-500 rounded-lg ' : 'hidden'
          } absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto   md:bg-transparent md:flex flex-col md:flex-row gap-4 items-center md:gap-6 px-6 md:px-0`}
        >
          <Link
            className="text-lg block  font-semibold hover:bg-red-400 px-4 py-2 rounded-md"
            to="/landing-page"
          >
            Home
          </Link>
          <Link
            className="text-lg  block font-semibold hover:bg-red-600 px-4 py-2 rounded-md"
            to="/car-and-bike-rentals"
          >
            Vehicle Rentals
          </Link>
          <Link
            className="text-lg  block font-semibold hover:bg-red-600 px-4 py-2 rounded-md"
            to="/medical-services"
          >
            Medical Services
          </Link>
          <Link
            className="text-lg  block font-semibold hover:bg-red-600 px-4 py-2 rounded-md"
            to="/bus-timings"
          >
            Bus Schedule
          </Link>
          <Link
            className="text-lg block  font-semibold hover:bg-red-600 px-4 py-2 rounded-md"
            to="/Browse"
          >
            Restaurants & Canteens
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default HeaderRent;
