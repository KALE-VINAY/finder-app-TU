import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import RestaurantCard from './RestaurantCard';
import Header from './Header';
import Footer from './Footer';
import Hostel from './Hostel';

const Browse = () => {
  const restaurants = [
    {
      name: 'SRISHTI RESTAURANT',
      cuisines: 'South Indian, North Indian',
      price: '₹100 for one',
      rating: 4.4,
      time: '31 min',
      discount: '50% OFF',
      imageUrl: 'https://media.istockphoto.com/id/867909720/photo/food-for-indian-festival-diwali.jpg?s=612x612&w=0&k=20&c=NQdkQQo5dNSRgLJsaqPHJ1JiU_v2ob7D529i4A4mPjY=',
      promoted: true,
    },
    {
      name: 'Essential',
      cuisines: 'Fast food restaurant',
      price: '₹150 for one',
      rating: 4.3,
      time: '36 min',
      discount: '40% OFF',
      imageUrl: 'https://media.istockphoto.com/id/1442604378/photo/food-photos-various-entrees-appetizers-deserts-etc.jpg?s=612x612&w=0&k=20&c=WUCuJ2L2VKlrsIsXVnYX1HoG5rZM8K6ISeiE1liMBq4=',
      promoted: true,
    },
    {
      name: 'Amenityyy',
      cuisines: 'Indian restaurant',
      price: '₹40 for one',
      rating: 4.6,
      time: '24 min',
      imageUrl: 'https://media.istockphoto.com/id/1271604943/photo/assorted-indian-home-food-different-dishes-and-snacks-wooden-rustic-table-homemade-pilaf.jpg?s=612x612&w=0&k=20&c=f2aFRB_7ooZ01F3NA1grsLBwbXhnJuXj5VoalTKSYxo=',
      promoted: false,
    },
    {
      name: 'Varieties Restaurant',
      cuisines: 'South Indian, North Indian, Cafe',
      price: '₹150 for one',
      rating: 4.3,
      time: '36 min',
      discount: '40% OFF',
      imageUrl: 'https://media.istockphoto.com/id/1005630488/photo/thali.jpg?s=612x612&w=0&k=20&c=ufwOsc-f-c7ibq5vzsQ1y8VTC3o61RtgN3YhVa_U5ms=',
      promoted: true,
    },
    {
      name: "Soha's cafe",
      cuisines: 'Fast food restaurant',
      price: '₹150 for one',
      rating: 4.3,
      time: '36 min',
      discount: '40% OFF',
      imageUrl: 'https://media.istockphoto.com/id/1408964184/photo/chicken-tikka-masala-kadai-chicken-coconut-sabdji-indias-samosa-veg-curry-bainkar-bharta.jpg?s=612x612&w=0&k=20&c=hzCybSQollGMvUfvVTONbD7R96G63gCXgC5XPwdOkBo=',
      promoted: true,
    },
    {
      name: 'GS Hotel',
      cuisines: 'Family restaurant',
      price: '₹150 for one',
      rating: 4.3,
      time: '36 min',
      discount: '40% OFF',
      imageUrl: 'https://media.istockphoto.com/id/1490687071/photo/top-view-for-oriental-food.jpg?s=612x612&w=0&k=20&c=9yVib9aJvvzCPtKSpNTKavb6BUPFqe2pOr4LKRT4gPY=',
      promoted: true,
    },
    {
      name: 'Food Zone',
      cuisines: 'Fast food restaurant',
      price: '₹150 for one',
      rating: 4.3,
      time: '36 min',
      discount: '40% OFF',
      imageUrl: 'https://media.istockphoto.com/id/922783734/photo/assorted-indian-recipes-food-various.jpg?s=2048x2048&w=is&k=20&c=1B9sUUPUsoVBAMCsk461nPRix-YIo74i8LgSWSkhCOE=',
      promoted: true,
    },
    {
      name: 'SOE DHABA, Tezpur University',
      cuisines: 'Restaurant',
      price: '₹150 for one',
      rating: 4.3,
      time: '36 min',
      discount: '40% OFF',
      imageUrl: 'https://media.istockphoto.com/id/1442604378/photo/food-photos-various-entrees-appetizers-deserts-etc.jpg?s=612x612&w=0&k=20&c=WUCuJ2L2VKlrsIsXVnYX1HoG5rZM8K6ISeiE1liMBq4=',
      promoted: true,
    },
    
  ];

  const hostels = [
    {
      name: "Nilachal Men's Hostel",
      cuisines: 'South Indian, North Indian',
      price: '₹100 for one',
      rating: 4.4,
      time: '31 min',
      discount: '50% OFF',
      imageUrl: 'https://www.tezu.ernet.in/hostels/nmh/images/gallery/2.jpg',
      promoted: true,
    },
    {
      name: "Kanchenjungha Men's Hostel",
      cuisines: 'Fast food restaurant',
      price: '₹150 for one',
      rating: 4.3,
      time: '36 min',
      discount: '40% OFF',
      imageUrl: 'https://www.tezu.ernet.in/hostels/kmh/gallery/main.jpeg',
      promoted: true,
    },
    {
      name: "Charaideo Men's Hostel ",
      cuisines: 'Indian restaurant',
      price: '₹40 for one',
      rating: 4.6,
      time: '24 min',
      imageUrl: 'https://www.tezu.ernet.in/hostels/cmh/image/ht26.jpg',
      promoted: false,
    },
    {
      name: "Patkai Men's Hostel",
      cuisines: 'South Indian, North Indian, Cafe',
      price: '₹150 for one',
      rating: 4.3,
      time: '36 min',
      discount: '40% OFF',
      imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.nS_Igy3OUb8UrxhNEV0NlwHaFA&pid=Api&P=0&h=180',
      promoted: true,
    },
    {
      name: "Saraighat C.V. Raman Men's Hostel",
      cuisines: 'Fast food restaurant',
      price: '₹150 for one',
      rating: 4.3,
      time: '36 min',
      discount: '40% OFF',
      imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.Ug5xLjQwRsVGRsUT4jcOFwHaFj&pid=Api&P=0&h=180',
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
     
      <div className="min-h-screen bg-white p-2 ">
      
      <div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed mb-24 inset-0 w-full h-full object-cover opacity-80  "
      >
        <source src="https://videos.pexels.com/video-files/4253149/4253149-uhd_1440_2732_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
     
      </div>
      
      
        <div className='mt-40'>

        <h1 className="relative text-5xl my-5 text-black font-serif text-center">Restaurants near TU</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-5">
          {restaurants.map((restaurant, index) => (
            <RestaurantCard key={index} {...restaurant} />
          ))}
        </div>
      </div>
      
      <div className='relative my-5 font-serif text-center text-5xl  '>hostel canteens in TU</div>
      
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-5 my-10 ">
          {hostels.map((hostel, index) => (
            <Hostel key={index} {...hostel} />
          ))}
        </div>
      
      <Footer  />

        </div>
        
       
    </div>
  );
};

export default Browse;
