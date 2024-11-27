import React, { useState ,useEffect} from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import RestaurantCard from './RestaurantCard';
import Header from './Header';
import Footer from './Footer';
import Hostel from './Hostel';
import { Link } from 'react-router-dom';
import RestaurantWebsite from './RestaurantWebsite';

const Browse = () => {

  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    // Add this useEffect to scroll to top when component mounts or id changes
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const restaurants = [
    {
      id:1,
      name: 'SRISHTI RESTAURANT',
      cuisines: 'South Indian, North Indian',
      price: '₹100 for one',
      rating: 4.4,
      time: '31 min',
      discount: '50% OFF',
      imageUrl: 'https://media.istockphoto.com/id/867909720/photo/food-for-indian-festival-diwali.jpg?s=612x612&w=0&k=20&c=NQdkQQo5dNSRgLJsaqPHJ1JiU_v2ob7D529i4A4mPjY=',
      promoted: true,
      iframe : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.511878273082!2d92.8335486754745!3d26.696089476776873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744eb254a078c07%3A0x8ff094b13b51d188!2sSRISHTI%20RESTAURANT!5e0!3m2!1sen!2sin!4v1731004026537!5m2!1sen!2sin",
      maplink: 'https://maps.app.goo.gl/gLiTcH5XEii5tBUS9',
      contact1: 9600774916,
      contact2: 9365419001,
      imageUrl1: "/srishti1.jpg" ,
      imageUrl2: "/srishti2.jpg",
      imageUrl3 : "/srishti2.jpg",
    },
    {
      id:2,
      name: 'Essential',
      cuisines: 'Fast food restaurant',
      price: '₹150 for one',
      rating: 4.3,
      time: '36 min',
      discount: '40% OFF',
      imageUrl: 'https://media.istockphoto.com/id/1442604378/photo/food-photos-various-entrees-appetizers-deserts-etc.jpg?s=612x612&w=0&k=20&c=WUCuJ2L2VKlrsIsXVnYX1HoG5rZM8K6ISeiE1liMBq4=',
      promoted: false,
      iframe : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.511878273082!2d92.8335486754745!3d26.696089476776873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744eb254a078c07%3A0x8ff094b13b51d188!2sSRISHTI%20RESTAURANT!5e0!3m2!1sen!2sin!4v1731004026537!5m2!1sen!2sin",
      maplink: 'https://maps.app.goo.gl/gLiTcH5XEii5tBUS9',
      contact1: 9600774916,
      contact2: 9365419001,
      imageUrl1: "/srishti1.jpg" ,
      imageUrl2: "/srishti2.jpg",
      imageUrl3 : "/srishti2.jpg",
    },
    { id:3,
      name: 'VRL',
      cuisines: 'Indian hotel',
      price: '₹40 for one',
      rating: 4.6,
      time: '24 min',
      imageUrl: 'https://media.istockphoto.com/id/1271604943/photo/assorted-indian-home-food-different-dishes-and-snacks-wooden-rustic-table-homemade-pilaf.jpg?s=612x612&w=0&k=20&c=f2aFRB_7ooZ01F3NA1grsLBwbXhnJuXj5VoalTKSYxo=',
      promoted: false,
      iframe : "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1968.6291083407486!2d92.83511937358017!3d26.696472705960026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1732034471128!5m2!1sen!2sin",
      maplink: 'https://maps.app.goo.gl/r67P3fW6EyAj2Bh68',
      contact1: 9600774916,
      contact2: 9365419001,
      imageUrl1: "/VRL1.jpg" ,
      imageUrl2: "/VRL3.jpg",
      imageUrl3 : "/VRL1.jpg",
    },
    { id:4,
      name: 'Spice Delight',
      cuisines: 'restaurant',
      price: '₹40 for one',
      rating: 4.6,
      time: '24 min',
      imageUrl: 'https://media.istockphoto.com/id/1271604943/photo/assorted-indian-home-food-different-dishes-and-snacks-wooden-rustic-table-homemade-pilaf.jpg?s=612x612&w=0&k=20&c=f2aFRB_7ooZ01F3NA1grsLBwbXhnJuXj5VoalTKSYxo=',
      promoted: false,
      iframe : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1782.245944895408!2d92.83499500000002!3d26.696728399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744ebbef08f81db%3A0xade8999b5075ba4b!2sCentral%20university!5e0!3m2!1sen!2sin!4v1732035437308!5m2!1sen!2sin",
      maplink: 'https://maps.app.goo.gl/rgm7u417p3VCsTXC7',
      contact1: 9365768276,
      contact2: 9365768276,
      imageUrl1: "/spice_delight3.jpg" ,
      imageUrl2: "/spice_delight2.jpg",
      imageUrl3 : "/spice_delight3.jpg",
    },
    {id:5,
      name: 'Food Zone',
      cuisines: 'Fast food restaurant',
      price: '₹150 for one',
      rating: 4.3,
      time: '36 min',
      discount: '40% OFF',
      imageUrl: 'https://media.istockphoto.com/id/922783734/photo/assorted-indian-recipes-food-various.jpg?s=2048x2048&w=is&k=20&c=1B9sUUPUsoVBAMCsk461nPRix-YIo74i8LgSWSkhCOE=',
      promoted: true,
      iframe : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.511878273082!2d92.8335486754745!3d26.696089476776873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744eb254a078c07%3A0x8ff094b13b51d188!2sSRISHTI%20RESTAURANT!5e0!3m2!1sen!2sin!4v1731004026537!5m2!1sen!2sin",
      maplink: 'https://maps.app.goo.gl/gLiTcH5XEii5tBUS9',
      contact1: 9600774916,
      contact2: 9365419001,
      imageUrl1: "/srishti1.jpg" ,
      imageUrl2: "/srishti2.jpg",
      imageUrl3 : "/srishti2.jpg",
    },
    {id:6,
      name: 'SOE DHABA, Tezpur University',
      cuisines: 'Restaurant',
      price: '₹150 for one',
      rating: 4.3,
      time: '36 min',
      discount: '40% OFF',
      imageUrl: 'https://media.istockphoto.com/id/1442604378/photo/food-photos-various-entrees-appetizers-deserts-etc.jpg?s=612x612&w=0&k=20&c=WUCuJ2L2VKlrsIsXVnYX1HoG5rZM8K6ISeiE1liMBq4=',
      promoted: true,
      iframe : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.511878273082!2d92.8335486754745!3d26.696089476776873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744eb254a078c07%3A0x8ff094b13b51d188!2sSRISHTI%20RESTAURANT!5e0!3m2!1sen!2sin!4v1731004026537!5m2!1sen!2sin",
      maplink: 'https://maps.app.goo.gl/gLiTcH5XEii5tBUS9',
      contact1: 9600774916,
      contact2: 9365419001,
      imageUrl1: "/srishti1.jpg" ,
      imageUrl2: "/srishti2.jpg",
      imageUrl3 : "/srishti2.jpg",
    },
    {id:7,
      name: 'Diksha food restaurant ',
      cuisines: 'Restaurant',
      price: '₹150 for one',
      rating: 4.3,
      time: '36 min',
      discount: '40% OFF',
      imageUrl: 'https://media.istockphoto.com/id/1442604378/photo/food-photos-various-entrees-appetizers-deserts-etc.jpg?s=612x612&w=0&k=20&c=WUCuJ2L2VKlrsIsXVnYX1HoG5rZM8K6ISeiE1liMBq4=',
      promoted: true,
      iframe : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.511878273082!2d92.8335486754745!3d26.696089476776873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744eb254a078c07%3A0x8ff094b13b51d188!2sSRISHTI%20RESTAURANT!5e0!3m2!1sen!2sin!4v1731004026537!5m2!1sen!2sin",
      maplink: 'https://maps.app.goo.gl/gLiTcH5XEii5tBUS9',
      contact1: 9600774916,
      contact2: 9365419001,
      imageUrl1: "/srishti1.jpg" ,
      imageUrl2: "/srishti2.jpg",
      imageUrl3 : "/srishti2.jpg",
    },
    { id:8,
      name: 'Amenityyy',
      cuisines: 'Indian restaurant',
      price: '₹40 for one',
      rating: 4.6,
      time: '24 min',
      imageUrl: 'https://media.istockphoto.com/id/1271604943/photo/assorted-indian-home-food-different-dishes-and-snacks-wooden-rustic-table-homemade-pilaf.jpg?s=612x612&w=0&k=20&c=f2aFRB_7ooZ01F3NA1grsLBwbXhnJuXj5VoalTKSYxo=',
      promoted: false,
      iframe : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.511878273082!2d92.8335486754745!3d26.696089476776873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744eb254a078c07%3A0x8ff094b13b51d188!2sSRISHTI%20RESTAURANT!5e0!3m2!1sen!2sin!4v1731004026537!5m2!1sen!2sin",
      maplink: 'https://maps.app.goo.gl/gLiTcH5XEii5tBUS9',
      contact1: 9600774916,
      contact2: 9365419001,
      imageUrl1: "/srishti1.jpg" ,
      imageUrl2: "/srishti2.jpg",
      imageUrl3 : "/srishti2.jpg",
    },
    {id:9,
      name: 'Varieties Restaurant',
      cuisines: 'South Indian, North Indian, Cafe',
      price: '₹150 for one',
      rating: 4.3,
      time: '36 min',
      discount: '40% OFF',
      imageUrl: 'https://media.istockphoto.com/id/1005630488/photo/thali.jpg?s=612x612&w=0&k=20&c=ufwOsc-f-c7ibq5vzsQ1y8VTC3o61RtgN3YhVa_U5ms=',
      promoted: true,
      iframe : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.511878273082!2d92.8335486754745!3d26.696089476776873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744eb254a078c07%3A0x8ff094b13b51d188!2sSRISHTI%20RESTAURANT!5e0!3m2!1sen!2sin!4v1731004026537!5m2!1sen!2sin",
      maplink: 'https://maps.app.goo.gl/gLiTcH5XEii5tBUS9',
      contact1: 9600774916,
      contact2: 9365419001,
      imageUrl1: "/srishti1.jpg" ,
      imageUrl2: "/srishti2.jpg",
      imageUrl3 : "/srishti2.jpg",
    },
    {id:10,
      name: "Soha's cafe",
      cuisines: 'Fast food restaurant',
      price: '₹150 for one',
      rating: 4.3,
      time: '36 min',
      discount: '40% OFF',
      imageUrl: 'https://media.istockphoto.com/id/1408964184/photo/chicken-tikka-masala-kadai-chicken-coconut-sabdji-indias-samosa-veg-curry-bainkar-bharta.jpg?s=612x612&w=0&k=20&c=hzCybSQollGMvUfvVTONbD7R96G63gCXgC5XPwdOkBo=',
      promoted: true,
      iframe : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.511878273082!2d92.8335486754745!3d26.696089476776873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744eb254a078c07%3A0x8ff094b13b51d188!2sSRISHTI%20RESTAURANT!5e0!3m2!1sen!2sin!4v1731004026537!5m2!1sen!2sin",
      maplink: 'https://maps.app.goo.gl/gLiTcH5XEii5tBUS9',
      contact1: 9600774916,
      contact2: 9365419001,
      imageUrl1: "/srishti1.jpg" ,
      imageUrl2: "/srishti2.jpg",
      imageUrl3 : "/srishti2.jpg",
    },
    {id:11,
      name: 'GS Hotel',
      cuisines: 'Family restaurant',
      price: '₹150 for one',
      rating: 4.3,
      time: '36 min',
      discount: '40% OFF',
      imageUrl: 'https://media.istockphoto.com/id/1490687071/photo/top-view-for-oriental-food.jpg?s=612x612&w=0&k=20&c=9yVib9aJvvzCPtKSpNTKavb6BUPFqe2pOr4LKRT4gPY=',
      promoted: true,
      iframe : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.511878273082!2d92.8335486754745!3d26.696089476776873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744eb254a078c07%3A0x8ff094b13b51d188!2sSRISHTI%20RESTAURANT!5e0!3m2!1sen!2sin!4v1731004026537!5m2!1sen!2sin",
      maplink: 'https://maps.app.goo.gl/gLiTcH5XEii5tBUS9',
      contact1: 9600774916,
      contact2: 9365419001,
      imageUrl1: "/srishti1.jpg" ,
      imageUrl2: "/srishti2.jpg",
      imageUrl3 : "/srishti2.jpg",
    },
   
    
  ];

// console.log(restaurant_details[0]);
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
    <div >
      {/* <Header /> */}
      
      {/* Video Background with Overlay */}
      
        
          <video
            autoPlay
            loop
            muted
            playsInline
            className="fixed mb-24 inset-0 w-full h-full object-cover opacity-80"
          >
            <source src="https://videos.pexels.com/video-files/4253149/4253149-uhd_1440_2732_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
       
        
        <div className="relative z-10 container mx-auto px-4 py-8">
          {/* Carousel Section
          <div className="mb-8 shadow-lg rounded-lg overflow-hidden">
            <Carousel 
              showThumbs={false} 
              autoPlay 
              infiniteLoop 
              interval={3000} 
              className="max-h-[400px]"
            >
              {carouselImages.map((image, index) => (
                <div key={index} className="h-[300px] md:h-[400px]">
                  <img 
                    src={image} 
                    alt={`Carousel ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </Carousel>
          </div> */}
          

          {/* Restaurants Section */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-8 uppercase tracking-wider">
            Restaurants near TU
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {restaurants.map((restaurant) => (
              <Link key={restaurant.id} to={`/restaurant/${restaurant.id}`} className="transform transition-all hover:scale-105">
                <RestaurantCard {...restaurant} />
              </Link>
            ))}
          </div>

          {/* Hostels Section */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 my-12 uppercase tracking-wider">
            Hostel Canteens in TU
          </h2>
          <h2 className='font-serif font-bold text-gray-800 mb-5 text-2xl text-center'>Coming Soon ... </h2>
          <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
            {hostels.map((hostel, index) => (
              <Hostel key={index} {...hostel} />
            ))}
          </div>
        </div>
      
      
      {/* <Footer /> */}
    </div>
  );
};

export default Browse;
