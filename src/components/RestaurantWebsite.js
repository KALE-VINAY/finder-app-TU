import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import {  Navigation, Phone , X} from 'lucide-react';
import RestaurantRating from './RestaurantRating';

const RestaurantWebsite = () => {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  // const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const openModal = (index) => {
    // setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Example restaurant data
  const restaurantData = {
    1: {
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
    2: {
      name: 'GS Cake Shop',
      cuisines: 'Cake and Juice Shop',
      price: '₹150 for one',
      rating: 4.3,
      time: '36 min',
      discount: '40% OFF',
      imageUrl: 'https://media.istockphoto.com/id/1490687071/photo/top-view-for-oriental-food.jpg?s=612x612&w=0&k=20&c=9yVib9aJvvzCPtKSpNTKavb6BUPFqe2pOr4LKRT4gPY=',
      promoted: true,
      iframe : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d417.76148856370247!2d92.83581686710843!3d26.696146310871683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744eba78a8a1aad%3A0x14795f9d6e59bb1c!2sGS%20Cake%20Shop!5e0!3m2!1sen!2sin!4v1732818454579!5m2!1sen!2sin",
      maplink: 'https://maps.app.goo.gl/wDC6ojiwbzfMUvXr5',
      contact1: 6003929375,
      contact2: 6003929375,
      imageUrl1: "/GS_cake2.png" ,
      imageUrl2: "/GS_Cake1.png",
      imageUrl3 : "/cake1.png",
      
    },
    3: {
      name: 'VRL',
      cuisines: 'Indian hotel',
      price: '₹40 for one',
      rating: 4.6,
      time: '24 min',
      imageUrl: 'https://media.istockphoto.com/id/1271604943/photo/assorted-indian-home-food-different-dishes-and-snacks-wooden-rustic-table-homemade-pilaf.jpg?s=612x612&w=0&k=20&c=f2aFRB_7ooZ01F3NA1grsLBwbXhnJuXj5VoalTKSYxo=',
      promoted: false,
      iframe : "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1968.6291083407486!2d92.83511937358017!3d26.696472705960026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1732034471128!5m2!1sen!2sin",
      maplink: 'https://maps.app.goo.gl/r67P3fW6EyAj2Bh68',
      contact1: 8822002423,
      contact2: 8822002423,
      imageUrl1: "/VRL1.jpg" ,
      imageUrl2: "/VRL3.jpg",
      imageUrl3 : "/VRL1.jpg",
    },
    4: {
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
      imageUrl1: "/spice_delight2.jpg" ,
      imageUrl2: "/spice_delight3.jpg",
      imageUrl3 : "/spice_delight2.jpg",
    },
    
    5: {
      name: 'Food Zone',
      cuisines: 'Fast food restaurant',
      price: '₹150 for one',
      rating: 4.3,
      time: '36 min',
      discount: '40% OFF',
      imageUrl: 'https://media.istockphoto.com/id/922783734/photo/assorted-indian-recipes-food-various.jpg?s=2048x2048&w=is&k=20&c=1B9sUUPUsoVBAMCsk461nPRix-YIo74i8LgSWSkhCOE=',
      promoted: true,
      iframe : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3564.4692516909095!2d92.83417089999999!3d26.697452!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744eb0008638aff%3A0x31f1bd15b43729e3!2sFood%20Zone!5e0!3m2!1sen!2sin!4v1731344254739!5m2!1sen!2sin",
      maplink: 'https://maps.app.goo.gl/TG2hDGZdUKXLrCnp6',
      contact1: 9365804980 ,
      contact2: 9706612728,
      imageUrl1: "/foodZone.jpg" ,
      imageUrl2: "/foodZone1.jpg",
      imageUrl3 : "/foodZone.jpg",
    },
    6: {
      name: 'SOE DHABA, Tezpur University',
      cuisines: 'Restaurant',
      price: '₹150 for one',
      rating: 4.3,
      time: '36 min',
      discount: '40% OFF',
      imageUrl: 'https://media.istockphoto.com/id/1442604378/photo/food-photos-various-entrees-appetizers-deserts-etc.jpg?s=612x612&w=0&k=20&c=WUCuJ2L2VKlrsIsXVnYX1HoG5rZM8K6ISeiE1liMBq4=',
      promoted: true,
      iframe : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7128.603887622549!2d92.82347775048457!3d26.702799234523354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744eb00031e52f3%3A0x6c9f285d2982504!2sSOE%20DHABA%2C%20Tezpur%20University!5e0!3m2!1sen!2sin!4v1731344746937!5m2!1sen!2sin",
      maplink: 'https://maps.app.goo.gl/jjWe7c7Q29ewBjBu8',
      contact1: 6001410995,
      contact2: 9678465767,
      imageUrl1: "/soe_dabha.jpg" ,
      imageUrl2: "/soe_dabha1.jpg",
      imageUrl3 :"/soe_dabha.jpg" ,
    },
    7: {
      name: 'Diksha Food Restaurant ',
      cuisines: 'Restaurant',
      price: '₹150 for one',
      rating: 4.3,
      time: '36 min',
      discount: '40% OFF',
      imageUrl: 'https://media.istockphoto.com/id/1442604378/photo/food-photos-various-entrees-appetizers-deserts-etc.jpg?s=612x612&w=0&k=20&c=WUCuJ2L2VKlrsIsXVnYX1HoG5rZM8K6ISeiE1liMBq4=',
      promoted: true,
      iframe : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239.90312596450133!2d92.83413454279547!3d26.69736269807302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744ebc098948463%3A0x6435bd0ca8ce1315!2sDiksha%20Fast%20Food!5e0!3m2!1sen!2sin!4v1731345847362!5m2!1sen!2sin",
      maplink: 'https://maps.app.goo.gl/EJrbryNd3u1LniY79',
      contact1: 6003770622,
      contact2: null,
      imageUrl1: "/Diksha_food.jpg" ,
      imageUrl2: "/Diksha_food2.jpg",
      imageUrl3 :"/Diksha_food.jpg" ,
    },
    8: {
      name: 'Amenityyy',
      cuisines: 'Indian restaurant',
      price: '₹40 for one',
      rating: 4.6,
      time: '24 min',
      imageUrl: 'https://media.istockphoto.com/id/1271604943/photo/assorted-indian-home-food-different-dishes-and-snacks-wooden-rustic-table-homemade-pilaf.jpg?s=612x612&w=0&k=20&c=f2aFRB_7ooZ01F3NA1grsLBwbXhnJuXj5VoalTKSYxo=',
      promoted: false,
      iframe : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d656.1298495007186!2d92.83236191981491!3d26.69779216017308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744ebea3538a4f7%3A0x7617598a4d939c18!2sAmenityyy!5e0!3m2!1sen!2sin!4v1731346516340!5m2!1sen!2sin",
      maplink: 'https://maps.app.goo.gl/rgm7u417p3VCsTXC7',
      contact1: 8822993538,
      contact2: 8822993538,
      imageUrl1: "/amenity1.jpg" ,
      imageUrl2: "/amenity2.jpg",
      imageUrl3 : "/amenity1.jpg",
    },
    9: {
      name: 'Varieties Restaurant',
      cuisines: 'South Indian, North Indian, Cafe',
      price: '₹150 for one',
      rating: 4.3,
      time: '36 min',
      discount: '40% OFF',
      imageUrl: 'https://media.istockphoto.com/id/1005630488/photo/thali.jpg?s=612x612&w=0&k=20&c=ufwOsc-f-c7ibq5vzsQ1y8VTC3o61RtgN3YhVa_U5ms=',
      promoted: true,
      iframe : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1782.260656668083!2d92.83590185342128!3d26.695787884128276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744eb38e8b50c37%3A0x96bcd15978b7eac2!2sVarieties%20Restaurant!5e0!3m2!1sen!2sin!4v1731346796876!5m2!1sen!2sin",
      maplink: 'https://maps.app.goo.gl/TL5cvqKW5jWYeke88',
      contact1: 8876763895,
      contact2: 8876763895,
      imageUrl1: "/varieties1.jpg" ,
      imageUrl2: "/varieties2.jpg",
      imageUrl3 : "/varieties1.jpg",
    },
    10: {
      name: "Soha's cafe",
      cuisines: 'Fast food restaurant',
      price: '₹150 for one',
      rating: 4.3,
      time: '36 min',
      discount: '40% OFF',
      imageUrl: 'https://media.istockphoto.com/id/1408964184/photo/chicken-tikka-masala-kadai-chicken-coconut-sabdji-indias-samosa-veg-curry-bainkar-bharta.jpg?s=612x612&w=0&k=20&c=hzCybSQollGMvUfvVTONbD7R96G63gCXgC5XPwdOkBo=',
      promoted: true,
      iframe : "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d458.70435617654186!2d92.83673925778622!3d26.69558122669966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1731346935848!5m2!1sen!2sin",
      maplink: 'https://maps.app.goo.gl/NwyBRKxNykBDcadY9',
      contact1: 9531020513,
      contact2: 8638511618,
      imageUrl1: "/soha_menu1.jpg" ,
      imageUrl2: "/soha_menu2.jpg",
      imageUrl3 : "/soha_menu1.jpg",
    },
    11: {
      name: 'GS Hotel',
      cuisines: 'Family restaurant',
      price: '₹150 for one',
      rating: 4.3,
      time: '36 min',
      discount: '40% OFF',
      imageUrl: 'https://media.istockphoto.com/id/1490687071/photo/top-view-for-oriental-food.jpg?s=612x612&w=0&k=20&c=9yVib9aJvvzCPtKSpNTKavb6BUPFqe2pOr4LKRT4gPY=',
      promoted: true,
      iframe : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d408.3734726976119!2d92.83475698355481!3d26.696319415879397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744ebc74cb9ea6d%3A0x50ca25f7d090df40!2sGS%20Hotel!5e0!3m2!1sen!2sin!4v1731345993140!5m2!1sen!2sin",
      maplink: 'https://maps.app.goo.gl/7wGZdkk5eKapkRccA',
      contact1: 9707525721,
      contact2: 9365419001,
      imageUrl1: "/GShotel1.png" ,
      imageUrl2: "/GShotel.png",
      imageUrl3 : "/GShotel1.png",
    },
    12: {
      name: 'Essential',
      cuisines: 'Fast food restaurant',
      price: '₹150 for one',
      rating: 4.3,
      time: '36 min',
      discount: '40% OFF',
      imageUrl: 'https://media.istockphoto.com/id/1442604378/photo/food-photos-various-entrees-appetizers-deserts-etc.jpg?s=612x612&w=0&k=20&c=WUCuJ2L2VKlrsIsXVnYX1HoG5rZM8K6ISeiE1liMBq4=',
      promoted: true,
      iframe : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254.37841906027188!2d92.83256059686357!3d26.701910049820047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744ebb932f795b1%3A0x4d0311ca2d4fad53!2sEssential!5e0!3m2!1sen!2sin!4v1731346205626!5m2!1sen!2sin",
      maplink: 'https://maps.app.goo.gl/TUwH6pfnBjst6mfh9',
      contact1: 6026914370,
      contact2: 6026914370,
      imageUrl1: "/essential_food.jpg" ,
      imageUrl2: "/essential_food1.jpg",
      imageUrl3 : "/essential_food.jpg",
    },
    13: {
      name: 'Chetry Catering',
      cuisines: 'Fast food restaurant',
      price: '₹150 for one',
      rating: 4.3,
      time: '36 min',
      discount: '40% OFF',
      imageUrl: 'https://media.istockphoto.com/id/1442604378/photo/food-photos-various-entrees-appetizers-deserts-etc.jpg?s=612x612&w=0&k=20&c=WUCuJ2L2VKlrsIsXVnYX1HoG5rZM8K6ISeiE1liMBq4=',
      promoted: false,
      iframe : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.511878273082!2d92.8335486754745!3d26.696089476776873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744eb254a078c07%3A0x8ff094b13b51d188!2sSRISHTI%20RESTAURANT!5e0!3m2!1sen!2sin!4v1731004026537!5m2!1sen!2sin",
      maplink: 'https://maps.app.goo.gl/gLiTcH5XEii5tBUS9',
      contact1: 7635850112,
      contact2: 9707525721,
      imageUrl1: "/chetry1.jpg" ,
      imageUrl2: "/chetry2.jpg",
      imageUrl3 : "/chetry1.jpg",
    },
  
    14: {
      name: 'Gobin Hotel',
      cuisines: 'Fast food restaurant',
      price: '₹150 for one',
      rating: 4.3,
      time: '36 min',
      discount: '40% OFF',
      imageUrl: 'https://media.istockphoto.com/id/1442604378/photo/food-photos-various-entrees-appetizers-deserts-etc.jpg?s=612x612&w=0&k=20&c=WUCuJ2L2VKlrsIsXVnYX1HoG5rZM8K6ISeiE1liMBq4=',
      promoted: false,
      iframe : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.511878273082!2d92.8335486754745!3d26.696089476776873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744eb254a078c07%3A0x8ff094b13b51d188!2sSRISHTI%20RESTAURANT!5e0!3m2!1sen!2sin!4v1731004026537!5m2!1sen!2sin",
      maplink: 'https://maps.app.goo.gl/gLiTcH5XEii5tBUS9',
      contact1: 9085375391,
      contact2: 6002705354,
      imageUrl1: "/gobin1.jpg" ,
      imageUrl2: "/gobin2.jpg",
      imageUrl3 : "/gobin1.jpg",
    },
    15: {
      name: 'Cafetera',
      cuisines: 'Fast food restaurant',
      price: '₹150 for one',
      rating: 4.3,
      time: '36 min',
      discount: '40% OFF',
      imageUrl: 'https://media.istockphoto.com/id/1442604378/photo/food-photos-various-entrees-appetizers-deserts-etc.jpg?s=612x612&w=0&k=20&c=WUCuJ2L2VKlrsIsXVnYX1HoG5rZM8K6ISeiE1liMBq4=',
      promoted: false,
      iframe : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.412008420524!2d92.83142725751979!3d26.6992816321456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744eb349bc648f9%3A0xfa19eed9afcb503d!2sCafeteria%20Tezpur%20University!5e0!3m2!1sen!2sin!4v1737203353833!5m2!1sen!2sin",
      maplink: 'https://maps.app.goo.gl/E2UwjbpTXdkHLTgR8',
      contact1: 9678826309,
      contact2: 9678826309,
      imageUrl1: "/cafetera1.jpg" ,
      imageUrl2: "/cafetera2.jpg",
      imageUrl3 : "/cafetera3.jpg",
    },
    16: {
      name: 'Shraddha hotel (prakash restaurant)',
      cuisines: 'Fast food restaurant',
      price: '₹150 for one',
      rating: 4.3,
      time: '36 min',
      discount: '40% OFF',
      imageUrl: 'https://media.istockphoto.com/id/1442604378/photo/food-photos-various-entrees-appetizers-deserts-etc.jpg?s=612x612&w=0&k=20&c=WUCuJ2L2VKlrsIsXVnYX1HoG5rZM8K6ISeiE1liMBq4=',
      promoted: false,
      iframe : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d445.56230138785946!2d92.83363580703738!3d26.69651995062705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744eb1a798799f3%3A0xfc135c98caf7e672!2sDear%20Restaurant!5e0!3m2!1sen!2sin!4v1737203088658!5m2!1sen!2sin",
      maplink: 'https://maps.app.goo.gl/MJmhZQ9eXiiTph6q8',
      contact1: 8638983958,
      contact2: 8638174185,
      imageUrl1: "/shraddha1.jpg" ,
      imageUrl2: "/shraddha2.jpg",
      imageUrl3 : "/shraddha3.jpg",
    },

  };

  const restaurant = restaurantData[id];
  const images = [
    restaurant.imageUrl1,
    restaurant.imageUrl2,
    restaurant.imageUrl3
  ];

  if (!restaurant) {
    return <p>Restaurant not found.</p>;
  }

  const { name, cuisines, iframe, maplink, contact1, contact2 } = restaurant;

  return (
    <div className="min-h-screen bg-white">
      {/* Restaurant Info */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8">
          {/* Restaurant Details */}
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold font-serif mb-4">{name}</h1>
            
           <div className=" mb-6">
              <p className="text-gray-600 mb-2">{cuisines}</p>
              <p className="text-gray-600 mb-2 md:mb-8 ">Tezpur University, Tezpur</p>
              <RestaurantRating restaurantId={id} />
            </div>

            {/* Contact Details for Mobile */}
            <div className="md:hidden mb-6">
              <h2 className="text-lg font-semibold mb-4">Contact Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="border rounded-lg p-3 text-center">
                  <a href={`tel:${contact1}`} className="flex items-center text-red-600 hover:text-red-800">
                    <Phone className="w-4 h-4 mr-2" />
                    {contact1}
                  </a>
                </div>
                {contact2 && (
                  <div className="border rounded-lg p-3 text-center">
                    <a href={`tel:${contact2}`} className="flex items-center text-red-600 hover:text-red-800">
                      <Phone className="w-4 h-4 mr-2" />
                      {contact2}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="w-full md:w-1/2">
            <div className="bg-gray-200 h-48 md:h-64 rounded-lg mb-4 overflow-hidden">
              <iframe
                src={iframe}
                className="w-full h-full"
                title="Restaurant Location"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <a
              href={maplink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-red-500 hover:text-red-600 transition-colors"
            >
              <Navigation className="w-4 h-4 mr-2" />
              Get Directions
            </a>
          </div>
        </div>

        {/* Contact Details for Desktop */}
        <div className="hidden md:block mt-8">
          <h2 className="text-lg font-semibold mb-4">Contact Details</h2>
          <div className="grid grid-cols-2 gap-4 max-w-xl">
            <div className="border rounded-lg p-4">
              <a href={`tel:${contact1}`} className="flex items-center text-red-600 hover:text-red-800">
                <Phone className="w-4 h-4 mr-2" />
                {contact1}
              </a>
            </div>
            {contact2 && (
              <div className="border rounded-lg p-4">
                <a href={`tel:${contact2}`} className="flex items-center text-red-600 hover:text-red-800">
                  <Phone className="w-4 h-4 mr-2" />
                  {contact2}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

  {/* Restaurant Images Grid */}
  <div className="container mx-auto px-4 mb-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg"
            >
              <img
                src={img}
                alt={`Restaurant Image ${index + 1}`}
                onClick={() => openModal(index)}
                className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>
      </div>

       {/* Updated Modal Popup with Repositioned Close Button */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-full max-h-full w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div 
              className="relative w-full h-[80vh] flex items-center"
            >
              <div 
                ref={scrollContainerRef}
                className="flex overflow-x-auto scroll-smooth hide-scrollbar"
                style={{
                  scrollSnapType: 'x mandatory',
                  WebkitOverflowScrolling: 'touch',
                }}
              >
                {images.map((img, index) => (
                  <div 
                    key={index}
                    className="relative flex-none w-full h-[80vh] flex items-center justify-center px-4"
                    style={{ scrollSnapAlign: 'start' }}
                  >
                    <div className="relative max-w-4xl w-full">
                      <button
                        className="absolute top-4 right-4 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all z-50"
                        onClick={closeModal}
                      >
                        <X className="w-6 h-6" />
                      </button>
                      <img
                        src={img}
                        alt={`Menu Image ${index + 1}`}
                        className="max-h-[70vh] max-w-full mx-auto object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="absolute left-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
                onClick={() => handleScroll('left')}
              >
                &#10094;
              </button>
              <button
                className="absolute right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
                onClick={() => handleScroll('right')}
              >
                &#10095;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantWebsite;


























// import React , { useState ,useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { Star, Copy, Navigation , Phone} from 'lucide-react';
// import Header from './Header';
// import Footer from './Footer';

// const RestaurantWebsite = () => {
//   const { id } = useParams();
//   const [isOpen, setIsOpen] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Add this useEffect to scroll to top when component mounts or id changes
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [id]);

//   const openModal = (index) => {
//     setCurrentIndex(index);
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   const goToPrevious = () => {
//     setCurrentIndex((currentIndex - 1 + images.length) % images.length);
//   };

//   const goToNext = () => {
//     setCurrentIndex((currentIndex + 1) % images.length);
//   };
//   // Example restaurant data
//   const restaurantData = {
//     1: {
//       name: 'SRISHTI RESTAURANT',
//       cuisines: 'South Indian, North Indian',
//       price: '₹100 for one',
//       rating: 4.4,
//       time: '31 min',
//       discount: '50% OFF',
//       imageUrl: 'https://media.istockphoto.com/id/867909720/photo/food-for-indian-festival-diwali.jpg?s=612x612&w=0&k=20&c=NQdkQQo5dNSRgLJsaqPHJ1JiU_v2ob7D529i4A4mPjY=',
//       promoted: true,
//       iframe : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.511878273082!2d92.8335486754745!3d26.696089476776873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744eb254a078c07%3A0x8ff094b13b51d188!2sSRISHTI%20RESTAURANT!5e0!3m2!1sen!2sin!4v1731004026537!5m2!1sen!2sin",
//       maplink: 'https://maps.app.goo.gl/gLiTcH5XEii5tBUS9',
//       contact1: 9600774916,
//       contact2: 9365419001,
//       imageUrl1: "/srishti1.jpg" ,
//       imageUrl2: "/srishti2.jpg",
//       imageUrl3 : "/srishti2.jpg",
//     },
//     2: {
//       name: 'GS Cake Shop',
//       cuisines: 'Cake and Juice Shop',
//       price: '₹150 for one',
//       rating: 4.3,
//       time: '36 min',
//       discount: '40% OFF',
//       imageUrl: 'https://media.istockphoto.com/id/1490687071/photo/top-view-for-oriental-food.jpg?s=612x612&w=0&k=20&c=9yVib9aJvvzCPtKSpNTKavb6BUPFqe2pOr4LKRT4gPY=',
//       promoted: true,
//       iframe : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d417.76148856370247!2d92.83581686710843!3d26.696146310871683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744eba78a8a1aad%3A0x14795f9d6e59bb1c!2sGS%20Cake%20Shop!5e0!3m2!1sen!2sin!4v1732818454579!5m2!1sen!2sin",
//       maplink: 'https://maps.app.goo.gl/wDC6ojiwbzfMUvXr5',
//       contact1: 6003929375,
//       contact2: 6003929375,
//       imageUrl1: "/GS_cake2.png" ,
//       imageUrl2: "/GS_Cake1.png",
//       imageUrl3 : "/cake1.png",
      
//     },
//     3: {
//       name: 'VRL',
//       cuisines: 'Indian hotel',
//       price: '₹40 for one',
//       rating: 4.6,
//       time: '24 min',
//       imageUrl: 'https://media.istockphoto.com/id/1271604943/photo/assorted-indian-home-food-different-dishes-and-snacks-wooden-rustic-table-homemade-pilaf.jpg?s=612x612&w=0&k=20&c=f2aFRB_7ooZ01F3NA1grsLBwbXhnJuXj5VoalTKSYxo=',
//       promoted: false,
//       iframe : "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1968.6291083407486!2d92.83511937358017!3d26.696472705960026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1732034471128!5m2!1sen!2sin",
//       maplink: 'https://maps.app.goo.gl/r67P3fW6EyAj2Bh68',
//       contact1: 8822002423,
//       contact2: 8822002423,
//       imageUrl1: "/VRL1.jpg" ,
//       imageUrl2: "/VRL3.jpg",
//       imageUrl3 : "/VRL1.jpg",
//     },
//     4: {
//       name: 'Spice Delight',
//       cuisines: 'restaurant',
//       price: '₹40 for one',
//       rating: 4.6,
//       time: '24 min',
//       imageUrl: 'https://media.istockphoto.com/id/1271604943/photo/assorted-indian-home-food-different-dishes-and-snacks-wooden-rustic-table-homemade-pilaf.jpg?s=612x612&w=0&k=20&c=f2aFRB_7ooZ01F3NA1grsLBwbXhnJuXj5VoalTKSYxo=',
//       promoted: false,
//       iframe : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1782.245944895408!2d92.83499500000002!3d26.696728399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744ebbef08f81db%3A0xade8999b5075ba4b!2sCentral%20university!5e0!3m2!1sen!2sin!4v1732035437308!5m2!1sen!2sin",
//       maplink: 'https://maps.app.goo.gl/rgm7u417p3VCsTXC7',
//       contact1: 9365768276,
//       contact2: 9365768276,
//       imageUrl1: "/spice_delight2.jpg" ,
//       imageUrl2: "/spice_delight3.jpg",
//       imageUrl3 : "/spice_delight2.jpg",
//     },
    
//     5: {
//       name: 'Food Zone',
//       cuisines: 'Fast food restaurant',
//       price: '₹150 for one',
//       rating: 4.3,
//       time: '36 min',
//       discount: '40% OFF',
//       imageUrl: 'https://media.istockphoto.com/id/922783734/photo/assorted-indian-recipes-food-various.jpg?s=2048x2048&w=is&k=20&c=1B9sUUPUsoVBAMCsk461nPRix-YIo74i8LgSWSkhCOE=',
//       promoted: true,
//       iframe : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3564.4692516909095!2d92.83417089999999!3d26.697452!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744eb0008638aff%3A0x31f1bd15b43729e3!2sFood%20Zone!5e0!3m2!1sen!2sin!4v1731344254739!5m2!1sen!2sin",
//       maplink: 'https://maps.app.goo.gl/TG2hDGZdUKXLrCnp6',
//       contact1: 9365804980 ,
//       contact2: 9706612728,
//       imageUrl1: "/foodZone.jpg" ,
//       imageUrl2: "/foodZone1.jpg",
//       imageUrl3 : "/foodZone.jpg",
//     },
//     6: {
//       name: 'SOE DHABA, Tezpur University',
//       cuisines: 'Restaurant',
//       price: '₹150 for one',
//       rating: 4.3,
//       time: '36 min',
//       discount: '40% OFF',
//       imageUrl: 'https://media.istockphoto.com/id/1442604378/photo/food-photos-various-entrees-appetizers-deserts-etc.jpg?s=612x612&w=0&k=20&c=WUCuJ2L2VKlrsIsXVnYX1HoG5rZM8K6ISeiE1liMBq4=',
//       promoted: true,
//       iframe : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7128.603887622549!2d92.82347775048457!3d26.702799234523354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744eb00031e52f3%3A0x6c9f285d2982504!2sSOE%20DHABA%2C%20Tezpur%20University!5e0!3m2!1sen!2sin!4v1731344746937!5m2!1sen!2sin",
//       maplink: 'https://maps.app.goo.gl/jjWe7c7Q29ewBjBu8',
//       contact1: 6001410995,
//       contact2: 9678465767,
//       imageUrl1: "/soe_dabha.jpg" ,
//       imageUrl2: "/soe_dabha1.jpg",
//       imageUrl3 :"/soe_dabha.jpg" ,
//     },
//     7: {
//       name: 'Diksha Food Restaurant ',
//       cuisines: 'Restaurant',
//       price: '₹150 for one',
//       rating: 4.3,
//       time: '36 min',
//       discount: '40% OFF',
//       imageUrl: 'https://media.istockphoto.com/id/1442604378/photo/food-photos-various-entrees-appetizers-deserts-etc.jpg?s=612x612&w=0&k=20&c=WUCuJ2L2VKlrsIsXVnYX1HoG5rZM8K6ISeiE1liMBq4=',
//       promoted: true,
//       iframe : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239.90312596450133!2d92.83413454279547!3d26.69736269807302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744ebc098948463%3A0x6435bd0ca8ce1315!2sDiksha%20Fast%20Food!5e0!3m2!1sen!2sin!4v1731345847362!5m2!1sen!2sin",
//       maplink: 'https://maps.app.goo.gl/EJrbryNd3u1LniY79',
//       contact1: 6003770622,
//       contact2: null,
//       imageUrl1: "/Diksha_food.jpg" ,
//       imageUrl2: "/Diksha_food2.jpg",
//       imageUrl3 :"/Diksha_food.jpg" ,
//     },
//     8: {
//       name: 'Amenityyy',
//       cuisines: 'Indian restaurant',
//       price: '₹40 for one',
//       rating: 4.6,
//       time: '24 min',
//       imageUrl: 'https://media.istockphoto.com/id/1271604943/photo/assorted-indian-home-food-different-dishes-and-snacks-wooden-rustic-table-homemade-pilaf.jpg?s=612x612&w=0&k=20&c=f2aFRB_7ooZ01F3NA1grsLBwbXhnJuXj5VoalTKSYxo=',
//       promoted: false,
//       iframe : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d656.1298495007186!2d92.83236191981491!3d26.69779216017308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744ebea3538a4f7%3A0x7617598a4d939c18!2sAmenityyy!5e0!3m2!1sen!2sin!4v1731346516340!5m2!1sen!2sin",
//       maplink: 'https://maps.app.goo.gl/rgm7u417p3VCsTXC7',
//       contact1: 8822993538,
//       contact2: 8822993538,
//       imageUrl1: "/amenity1.jpg" ,
//       imageUrl2: "/amenity2.jpg",
//       imageUrl3 : "/amenity1.jpg",
//     },
//     9: {
//       name: 'Varieties Restaurant',
//       cuisines: 'South Indian, North Indian, Cafe',
//       price: '₹150 for one',
//       rating: 4.3,
//       time: '36 min',
//       discount: '40% OFF',
//       imageUrl: 'https://media.istockphoto.com/id/1005630488/photo/thali.jpg?s=612x612&w=0&k=20&c=ufwOsc-f-c7ibq5vzsQ1y8VTC3o61RtgN3YhVa_U5ms=',
//       promoted: true,
//       iframe : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1782.260656668083!2d92.83590185342128!3d26.695787884128276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744eb38e8b50c37%3A0x96bcd15978b7eac2!2sVarieties%20Restaurant!5e0!3m2!1sen!2sin!4v1731346796876!5m2!1sen!2sin",
//       maplink: 'https://maps.app.goo.gl/TL5cvqKW5jWYeke88',
//       contact1: 8876763895,
//       contact2: 8876763895,
//       imageUrl1: "/srishti1.jpg" ,
//       imageUrl2: "/srishti2.jpg",
//       imageUrl3 : "/srishti2.jpg",
//     },
//     10: {
//       name: "Soha's cafe",
//       cuisines: 'Fast food restaurant',
//       price: '₹150 for one',
//       rating: 4.3,
//       time: '36 min',
//       discount: '40% OFF',
//       imageUrl: 'https://media.istockphoto.com/id/1408964184/photo/chicken-tikka-masala-kadai-chicken-coconut-sabdji-indias-samosa-veg-curry-bainkar-bharta.jpg?s=612x612&w=0&k=20&c=hzCybSQollGMvUfvVTONbD7R96G63gCXgC5XPwdOkBo=',
//       promoted: true,
//       iframe : "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d458.70435617654186!2d92.83673925778622!3d26.69558122669966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1731346935848!5m2!1sen!2sin",
//       maplink: 'https://maps.app.goo.gl/NwyBRKxNykBDcadY9',
//       contact1: 9531020513,
//       contact2: 8638511618,
//       imageUrl1: "/soha_menu1.jpg" ,
//       imageUrl2: "/soha_menu2.jpg",
//       imageUrl3 : "/soha_menu1.jpg",
//     },
//     11: {
//       name: 'GS Hotel',
//       cuisines: 'Family restaurant',
//       price: '₹150 for one',
//       rating: 4.3,
//       time: '36 min',
//       discount: '40% OFF',
//       imageUrl: 'https://media.istockphoto.com/id/1490687071/photo/top-view-for-oriental-food.jpg?s=612x612&w=0&k=20&c=9yVib9aJvvzCPtKSpNTKavb6BUPFqe2pOr4LKRT4gPY=',
//       promoted: true,
//       iframe : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d408.3734726976119!2d92.83475698355481!3d26.696319415879397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744ebc74cb9ea6d%3A0x50ca25f7d090df40!2sGS%20Hotel!5e0!3m2!1sen!2sin!4v1731345993140!5m2!1sen!2sin",
//       maplink: 'https://maps.app.goo.gl/7wGZdkk5eKapkRccA',
//       contact1: 9707525721,
//       contact2: 9365419001,
//       imageUrl1: "/GShotel1.png" ,
//       imageUrl2: "/GShotel.png",
//       imageUrl3 : "/GShotel1.png",
//     },
//     12: {
//       name: 'Essential',
//       cuisines: 'Fast food restaurant',
//       price: '₹150 for one',
//       rating: 4.3,
//       time: '36 min',
//       discount: '40% OFF',
//       imageUrl: 'https://media.istockphoto.com/id/1442604378/photo/food-photos-various-entrees-appetizers-deserts-etc.jpg?s=612x612&w=0&k=20&c=WUCuJ2L2VKlrsIsXVnYX1HoG5rZM8K6ISeiE1liMBq4=',
//       promoted: true,
//       iframe : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254.37841906027188!2d92.83256059686357!3d26.701910049820047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744ebb932f795b1%3A0x4d0311ca2d4fad53!2sEssential!5e0!3m2!1sen!2sin!4v1731346205626!5m2!1sen!2sin",
//       maplink: 'https://maps.app.goo.gl/TUwH6pfnBjst6mfh9',
//       contact1: 6026914370,
//       contact2: 9864934599,
//       imageUrl1: "/essential_food.jpg" ,
//       imageUrl2: "/essential_food1.jpg",
//       imageUrl3 : "/essential_food.jpg",
//     },
//     13: {
//       name: 'Chetry Catering',
//       cuisines: 'Fast food restaurant',
//       price: '₹150 for one',
//       rating: 4.3,
//       time: '36 min',
//       discount: '40% OFF',
//       imageUrl: 'https://media.istockphoto.com/id/1442604378/photo/food-photos-various-entrees-appetizers-deserts-etc.jpg?s=612x612&w=0&k=20&c=WUCuJ2L2VKlrsIsXVnYX1HoG5rZM8K6ISeiE1liMBq4=',
//       promoted: false,
//       iframe : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.511878273082!2d92.8335486754745!3d26.696089476776873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744eb254a078c07%3A0x8ff094b13b51d188!2sSRISHTI%20RESTAURANT!5e0!3m2!1sen!2sin!4v1731004026537!5m2!1sen!2sin",
//       maplink: 'https://maps.app.goo.gl/gLiTcH5XEii5tBUS9',
//       contact1: 7635850112,
//       contact2: 9707525721,
//       imageUrl1: "/srishti1.jpg" ,
//       imageUrl2: "/srishti2.jpg",
//       imageUrl3 : "/srishti2.jpg",
//     },
  
//     14: {
//       name: 'Gobin Hotel',
//       cuisines: 'Fast food restaurant',
//       price: '₹150 for one',
//       rating: 4.3,
//       time: '36 min',
//       discount: '40% OFF',
//       imageUrl: 'https://media.istockphoto.com/id/1442604378/photo/food-photos-various-entrees-appetizers-deserts-etc.jpg?s=612x612&w=0&k=20&c=WUCuJ2L2VKlrsIsXVnYX1HoG5rZM8K6ISeiE1liMBq4=',
//       promoted: false,
//       iframe : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.511878273082!2d92.8335486754745!3d26.696089476776873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744eb254a078c07%3A0x8ff094b13b51d188!2sSRISHTI%20RESTAURANT!5e0!3m2!1sen!2sin!4v1731004026537!5m2!1sen!2sin",
//       maplink: 'https://maps.app.goo.gl/gLiTcH5XEii5tBUS9',
//       contact1: 9085375391,
//       contact2: 6002705354,
//       imageUrl1: "/srishti1.jpg" ,
//       imageUrl2: "/srishti2.jpg",
//       imageUrl3 : "/srishti2.jpg",
//     },

//   };

//   // Fetch the restaurant data based on ID
//   const restaurant = restaurantData[id];
//   const images = [
//     restaurant.imageUrl1,
//     restaurant.imageUrl2,
//     restaurant.imageUrl3
//   ];
  
//   if (!restaurant) {
//     return <p>Restaurant not found.</p>;
//   }

//   const { name, cuisines, iframe, maplink, contact1, contact2, imageUrl1, imageUrl2, imageUrl3 } = restaurant;
  

//   return (
//     <div className="min-h-screen bg-white">
//     {/* Restaurant Info */}
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8">
//         {/* Restaurant Details */}
//         <div className="w-full md:w-1/2">
//           <h1 className="text-3xl md:text-4xl font-bold font-serif mb-4">{name}</h1>
//           <div className="space-y-2 mb-6">
//             <p className="text-gray-600">{cuisines}</p>
//             <p className="text-gray-600">Tezpur University, Tezpur</p>
//           </div>

//           {/* Contact Details for Mobile */}
//           <div className="md:hidden mb-6">
//             <h2 className="text-lg font-semibold mb-4">Contact Details</h2>
//             <div className="grid grid-cols-2 gap-4">
//               <div className="border rounded-lg p-3 text-center">
//               <a href={`tel:${contact1}`} className="flex items-center text-red-600 hover:text-red-800">
//                   <Phone className="w-4 h-4 mr-2" />
//                   {contact1}
//                 </a>
//               </div>
//               {contact2 && (
//                 <div className="border rounded-lg p-3 text-center">
//                   <a href={`tel:${contact2}`} className="flex items-center text-red-600 hover:text-red-800">
//                     <Phone className="w-4 h-4 mr-2" />
//                     {contact2}
//                   </a>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Map Section */}
//         <div className="w-full md:w-1/2">
//           <div className="bg-gray-200 h-48 md:h-64 rounded-lg mb-4 overflow-hidden">
//             <iframe 
//               src={iframe} 
//               className="w-full h-full"
//               title="Restaurant Location"
//               allowFullScreen=""
//               loading="lazy"
//             ></iframe>
//           </div>
//           <a 
//             href={maplink} 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="flex items-center justify-center text-red-500 hover:text-red-600 transition-colors"
//           >
//             <Navigation className="w-4 h-4 mr-2" />
//             Get Directions
//           </a>
//         </div>
//       </div>

//       {/* Contact Details for Desktop */}
//       <div className="hidden md:block mt-8">
//         <h2 className="text-lg font-semibold mb-4">Contact Details</h2>
//         <div className="grid grid-cols-2 gap-4 max-w-xl">
//           <div className="border rounded-lg p-4">
//           <a href={`tel:${contact1}`} className="flex items-center text-red-600 hover:text-red-800">
//                   <Phone className="w-4 h-4 mr-2" />
//                   {contact1}
//                 </a>
//           </div>
//           {contact2 && (
//             <div className="border rounded-lg p-4">
//               <a href={`tel:${contact2}`} className="flex items-center text-red-600 hover:text-red-800">
//                   <Phone className="w-4 h-4 mr-2" />
//                   {contact2}
//                 </a>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>

//     {/* Restaurant Images */}
//     <div className="container mx-auto px-4 mb-8">
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
//         {images.map((img, index) => (
//           <div 
//             key={index} 
//             className="aspect-square overflow-hidden rounded-lg"
//           >
//             <img
//               src={img}
//               alt={`Restaurant Image ${index + 1}`}
//               onClick={() => openModal(index)}
//               className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform"
//             />
//           </div>
//         ))}
//       </div>
//     </div>

//     {/* Modal Popup */}
//     {isOpen && (
//       <div
//         className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
//         onClick={closeModal}
//       >
//         <div className="relative max-w-full max-h-full" onClick={(e) => e.stopPropagation()}>
//           <button
//             className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-gray-300 z-10"
//             onClick={closeModal}
//           >
//             &times;
//           </button>
//           <button
//             className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold hover:text-gray-300 z-10"
//             onClick={goToPrevious}
//           >
//             &#10094;
//           </button>
//           <img
//             src={images[currentIndex]}
//             alt={`Enlarged Image ${currentIndex + 1}`}
//             className="max-w-full max-h-[80vh] object-contain mx-auto"
//           />
//           <button
//             className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold hover:text-gray-300 z-10"
//             onClick={goToNext}
//           >
//             &#10095;
//           </button>
//         </div>
//       </div>
//     )}

//     {/* Footer
//     <Footer /> */}
//   </div>
//   );
// };

// export default RestaurantWebsite;



























// import React, { useState } from 'react';
// import {   Star,  Copy, Navigation } from 'lucide-react';
// import Header from './Header';
// import Footer from './Footer';

// const RestaurantWebsite = ({ name, cuisines, iframe, maplink, contact1, contact2, imageUrl1, imageUrl2,imageUrl3 }) => {
 

  
//   return (
//     <div className="min-h-screen bg-white">
    
   
//       {/* Header */}
//       {/* <header className="border-b">
//         <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
//           <div className="flex items-center space-x-4 flex-1">
//             <img src="/api/placeholder/100/40" alt="Zomato" className="h-6" />
//             <div className="hidden md:flex items-center flex-1 max-w-2xl">
//               <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 flex-1">
//                 <MapPin className="w-5 h-5 text-gray-400" />
//                 <input 
//                   type="text" 
//                   placeholder="JP Nagar Phase 5" 
//                   className="bg-transparent outline-none ml-2 flex-1"
//                 />
//                 <Search className="w-5 h-5 text-gray-400" />
//               </div>
//             </div>
//           </div>
//           <div className="flex items-center space-x-4">
//             <button className="text-gray-700">Log in</button>
//             <button className="text-gray-700">Sign up</button>
//           </div>
//         </div>
//       </header> */}
//     {/* Restaurant Info */}
//     <div className="max-w-7xl mx-auto px-4 py-8">
//         <div className="flex flex-col md:flex-row justify-between" >
//           <div className="flex flex-col w-6/12 gap-4" >
//             <h1 className="text-4xl font-bold font-serif mt-14">{name}</h1>
//             <p className="text-gray-600 my-2">{cuisines}</p>
//             <p className="text-gray-600">Tezpur university, tezpur</p>
           
//           </div>
//                     {/* Map */}
//                     <div className="mt-8 w-6/12">
                    
//                       <div className="bg-gray-200 h-48 rounded-lg mb-4">
                        
//                       <iframe src={iframe} 
//                       className='w-full h-full'
//                       ></iframe>
                       
//                       </div>
//                       <a href={maplink} className="flex items-center text-red-500">
//                           <Navigation className="w-4 h-4 mr-1" />
//                           Direction
//                         </a>
                      
                      
//                     </div>
//         </div>

//         {/* Tabs */}
//         <div className="border-b mt-8">
//           {/* <div className="flex space-x-8">
//             {tabs.map(tab => (
//               <button
//                 key={tab}
//                 className={`pb-4 ${
//                   activeTab === tab 
//                     ? 'text-red-500 border-b-2 border-red-500' 
//                     : 'text-gray-600'
//                 }`}
//                 onClick={() => setActiveTab(tab)}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div> */}
//         </div>

//         {/* Main Content Area */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
//           {/* Left Content */}
//           <div className="md:col-span-2">
//             <div className="flex items-center space-x-4 mb-4">
//               <span className="text-gray-600 text-lg">contact details :</span>        
//             </div>

//             {/* Menu Images */}
//             <div className="grid grid-cols-2 gap-4 mb-8">
//               <div className="border rounded-lg p-4">
              
//                 <p className="text-gray-700 text-lg">{contact1}
//                 </p>
                
//               </div>
//               <div className="border rounded-lg p-4">
              
//                 <p className="text-gray-700 text-lg">{contact2}</p>
                
//               </div>
//             </div>

           
     
//           </div>

      
//         </div>
//       </div>


//       {/* Restaurant Hero Section */}
//       <div className="relative">
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-0 mx-4 mb-4 ">
        
//             <img 
//               src={imageUrl1} 
//               alt="Restaurant" 
//               className="w-full h-auto object-cover rounded "
//             />
//              <img 
//                 src={imageUrl2} 
//                 alt="Interior" 
//                 className="w-full  h-auto object-cover rounded"
//               />
//             <img 
//               src={imageUrl2} 
//               alt="Food" 
//               className="w-full h-auto object-cover rounded"
//             />
          
//         </div>
//       </div>
//     {/* <Footer/> */}
  
//     </div>
//   );
// };

// export default RestaurantWebsite;