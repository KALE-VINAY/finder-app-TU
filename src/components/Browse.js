import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import RestaurantCard from './RestaurantCard';
import Header from './Header';
import Footer from './Footer';

const Browse = () => {
  const restaurants = [
    {
      name: 'Paakashala',
      cuisines: 'South Indian, North Indian',
      price: '₹100 for one',
      rating: 4.4,
      time: '31 min',
      discount: '50% OFF',
      imageUrl: 'https://media.istockphoto.com/id/867909720/photo/food-for-indian-festival-diwali.jpg?s=612x612&w=0&k=20&c=NQdkQQo5dNSRgLJsaqPHJ1JiU_v2ob7D529i4A4mPjY=',
      promoted: true,
    },
    {
      name: 'S N Refreshments',
      cuisines: 'South Indian',
      price: '₹40 for one',
      rating: 4.6,
      time: '24 min',
      imageUrl: 'https://media.istockphoto.com/id/1271604943/photo/assorted-indian-home-food-different-dishes-and-snacks-wooden-rustic-table-homemade-pilaf.jpg?s=612x612&w=0&k=20&c=f2aFRB_7ooZ01F3NA1grsLBwbXhnJuXj5VoalTKSYxo=',
      promoted: false,
    },
    {
      name: 'Namaste',
      cuisines: 'South Indian, North Indian',
      price: '₹150 for one',
      rating: 4.3,
      time: '36 min',
      discount: '40% OFF',
      imageUrl: 'https://media.istockphoto.com/id/1005630488/photo/thali.jpg?s=612x612&w=0&k=20&c=ufwOsc-f-c7ibq5vzsQ1y8VTC3o61RtgN3YhVa_U5ms=',
      promoted: true,
    },
    {
      name: 'Namaste',
      cuisines: 'South Indian, North Indian',
      price: '₹150 for one',
      rating: 4.3,
      time: '36 min',
      discount: '40% OFF',
      imageUrl: 'https://media.istockphoto.com/id/1408964184/photo/chicken-tikka-masala-kadai-chicken-coconut-sabdji-indias-samosa-veg-curry-bainkar-bharta.jpg?s=612x612&w=0&k=20&c=hzCybSQollGMvUfvVTONbD7R96G63gCXgC5XPwdOkBo=',
      promoted: true,
    },
    {
      name: 'Namaste',
      cuisines: 'South Indian, North Indian',
      price: '₹150 for one',
      rating: 4.3,
      time: '36 min',
      discount: '40% OFF',
      imageUrl: 'https://media.istockphoto.com/id/1490687071/photo/top-view-for-oriental-food.jpg?s=612x612&w=0&k=20&c=9yVib9aJvvzCPtKSpNTKavb6BUPFqe2pOr4LKRT4gPY=',
      promoted: true,
    },
    {
      name: 'Namaste',
      cuisines: 'South Indian, North Indian',
      price: '₹150 for one',
      rating: 4.3,
      time: '36 min',
      discount: '40% OFF',
      imageUrl: 'https://media.istockphoto.com/id/922783734/photo/assorted-indian-recipes-food-various.jpg?s=2048x2048&w=is&k=20&c=1B9sUUPUsoVBAMCsk461nPRix-YIo74i8LgSWSkhCOE=',
      promoted: true,
    },
    {
      name: 'Namaste',
      cuisines: 'South Indian, North Indian',
      price: '₹150 for one',
      rating: 4.3,
      time: '36 min',
      discount: '40% OFF',
      imageUrl: 'https://media.istockphoto.com/id/1442604378/photo/food-photos-various-entrees-appetizers-deserts-etc.jpg?s=612x612&w=0&k=20&c=WUCuJ2L2VKlrsIsXVnYX1HoG5rZM8K6ISeiE1liMBq4=',
      promoted: true,
    },
  ];

  const carouselImages = [
    'https://media.istockphoto.com/id/854033828/photo/collage-of-food-products.webp?a=1&b=1&s=612x612&w=0&k=20&c=UlsaFrbeoA1GWsBB2zdAxa2ftskWPCb_0Ixrkc4-6ys=',
    'https://tse4.mm.bing.net/th?id=OIP.KiXKWwQ4bjHKjYGdGAhOQwHaCU&pid=Api&P=0&h=180',
    'https://media.istockphoto.com/id/922783734/photo/assorted-indian-recipes-food-various.jpg?s=2048x2048&w=is&k=20&c=1B9sUUPUsoVBAMCsk461nPRix-YIo74i8LgSWSkhCOE=',
  ];

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-white p-2 mb-10">
        <Carousel
          showThumbs={false}
          showStatus={false}
          autoPlay
          infiniteLoop
          className="rounded-xl mt-28"
        >
          {carouselImages.map((src, index) => (
            <div key={index}>
              <img src={src} alt={`Carousel ${index + 1}`} className="min-w-full h-96 rounded-xl" />
            </div>
          ))}
        </Carousel>
        
        <h1 className="text-5xl font-serif my-14 text-center">Restaurants near TU</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-5">
          {restaurants.map((restaurant, index) => (
            <RestaurantCard key={index} {...restaurant} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Browse;
