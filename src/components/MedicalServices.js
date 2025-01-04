// import React ,{useEffect}from 'react';
// import { Phone, Clock, Truck, AlertCircle,Navigation } from 'lucide-react';
// import HeaderRent from './HeaderRent';
// import HeaderMedical from './HeaderMedical';
// // import { Star, Copy,  } from 'lucide-react';

// const MedicalServices = () => {

//    // Add this useEffect to scroll to top when component mounts or id changes
//    useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
  
//     const map ={
//       maplink : 'https://maps.app.goo.gl/6cjLknRXx7Zw4AiZ8',
//     }
//   const medicalShops = [
//     {
//       name: "Standard Medical",
//       location: "Near Tezpur University",
//       contact: "6003474635 , 8876918416",
//       deliveryHours: "9:00 AM - 9:00 PM",
//       deliveryNote: "Free delivery for orders",
//       imgURL: '/medical_standard_medical.png',
//     },
//     {
//       name: "M/S Anirudha Medicos",
//       location: "Near Tezpur Gate, Napaam",
//       contact: "8723015310",
//       deliveryHours: "08:00 AM - 9:30 PM",
//       deliveryNote: "Free delivery for orders",
//       imgURL: '/medical_anirudha1.png',
//     }
//   ];

//   const healthCenterTimings = {
//     weekdays: "8:30 AM - 12:30 PM , 4:00 PM - 6:00 PM",
//     weekends: "8:30 AM - 12:30 PM , 3:00 PM - 6:00 PM",
//     holidays: "10:00 AM - 12:00 PM"
//   };

//   const emergencyContacts = [
//     { title: "TU Campus Ambulance", number: "7002366254", number2:" 8927913848 " },
//     { title: "Emergency Doctor TU", number: "9957184358 " ,number2:" 9864340580" },
//     { title: "Emergency Contacts TU", number: " 9601835117 ", number2:"   9954449470" },

//     { title: "Kanaklata Civil Hospital", number: "03712221494" },
//     { title: "Tezpur Fire Service", number: " 101  ",number2: " 20101" }
//   ];

//   return (
//     <>
//      <HeaderMedical/>
//     <div className="min-h-screen bg-green-50 py-8 px-4">
     
//      <div className="max-w-6xl mx-auto space-y-6">
//        {/* Header */}
//        <div className="text-center mb-8">
//          <h1 className="text-3xl font-bold text-green-800 mb-2">Campus Medical Services</h1>
//          <p className="text-green-600">Your health is our priority</p>
//        </div>

//        {/* Emergency Contacts Section */}
//        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
//          <div className="flex items-center text-red-800 text-xl font-semibold mb-4">
//            <AlertCircle className="mr-2" />
//            Emergency Contacts
//          </div>
//          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//            {emergencyContacts.map((contact, index) => (
//              <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
//                <span className="font-medium text-gray-700">{contact.title}</span>
//                <a href={`tel:${contact.number}`} className="flex items-center text-red-600 hover:text-red-800">
//                  <Phone className="w-4 h-4 mx-1 " />
//                  {contact.number}
//                  {/* <Phone className="w-4 h-4 mr-2" /> */}
//                  {/* {contact.number2} */}
//                </a>
               
//                <a href={`tel:${contact.number2}`} className="flex items-center text-red-600 hover:text-red-800">
//                  <Phone className="w-4 h-4 mx-2 " />
//                  {/* {contact.number} */}
//                  {/* <Phone className="w-4 h-4 mr-2" /> */}
//                  {contact.number2}
//                </a>
//              </div>
//            ))}
//          </div>
//        </div>

//        {/* Health Center Timings */}
//        <div className="bg-white rounded-lg p-6 shadow-sm">
//          <div className="flex items-center text-green-800 text-xl font-semibold mb-4">
//            <Clock className="mr-2" />
//            Health Center Timings
//            <a 
//            href={map.maplink} 
//            target="_blank" 
//            rel="noopener noreferrer"
//            className="flex items-center justify-center ml-5 text-green-900 hover:text-red-600 transition-colors"
//          >
//            <Navigation className="w-4 h-4 mr-2" />
//            Get Directions
//          </a>
//          </div>
//          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//            <div className="p-4 bg-green-50 rounded-lg">
//              <div className="font-semibold mb-2 text-green-700">April - September  weekdays</div>
//              <div className="flex items-center text-green-600">
//                <Clock className="w-4 h-4 mr-2" />
//                {healthCenterTimings.weekdays}
//              </div>
//            </div>
//            <div className="p-4 bg-green-50 rounded-lg">
//              <div className="font-semibold mb-2 text-green-700">October - March  weekdays </div>
//              <div className="flex items-center text-green-600">
//                <Clock className="w-4 h-4 mr-2" />
//                {healthCenterTimings.weekends}
//              </div>
//            </div>
//            <div className="p-4 bg-green-50 rounded-lg">
//              <div className="font-semibold mb-2 text-green-700">Weekends - Sat,Sun </div>
//              <div className="flex items-center text-green-600">
//                <Clock className="w-4 h-4 mr-2" />
//                {healthCenterTimings.holidays}
//              </div>
//            </div>
//          </div>
//        </div>

//        {/* Medical Shops */}
//        <div className="bg-white rounded-lg p-6 shadow-sm">
//          <div className="flex items-center text-green-800 text-xl font-semibold mb-4">
//            <Truck className="mr-2" />
//            Medical Shops with Hostel Delivery
//          </div>
//          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//            {medicalShops.map((shop, index) => (
//              <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-green-100">
//                <h3 className="text-lg font-semibold text-green-800 mb-2">{shop.name}</h3>
//                <div className="space-y-2 text-gray-600">
//                  <p className="text-sm">📍 {shop.location}</p>
//                  <p className="text-sm flex items-center">
//                    <Phone className="w-4 h-4 mr-2" />
//                    <a href={`tel:${shop.contact}`} className="hover:text-green-700">
//                      {shop.contact}
//                    </a>
//                  </p>
//                  <p className="text-sm flex items-center">
//                    <Clock className="w-4 h-4 mr-2" />
//                    {shop.deliveryHours}
//                  </p>
//                  <p className="text-sm text-green-600 font-medium">{shop.deliveryNote}</p>
//                </div>
//                <img src={shop.imgURL} className='aspect-square overflow-hidden rounded-lg mt-5'/>
//              </div>
//            ))}
//          </div>
//        </div>

//        {/* Footer Note */}
//        <div className="text-center text-sm text-gray-600 mt-8">
//          <p>For non-emergency medical advice, please visit the health center during operating hours.</p>
//          <p className="mt-2">Remember to carry your student ID card when visiting the health center or medical shops.</p>
//        </div>
//      </div>
//    </div>
//     </>
    
//   );
// };

// export default MedicalServices;
import React, { useEffect } from 'react';
import { Phone, Clock, Truck, AlertCircle, Navigation } from 'lucide-react';
import HeaderMedical from './HeaderMedical';

const MedicalServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const map = {
    maplink: 'https://maps.app.goo.gl/6cjLknRXx7Zw4AiZ8',
  };

  const medicalShops = [
    {
      name: "Standard Medical",
      location: "Near Tezpur University",
      contact: "6003474635 , 8876918416",
      deliveryHours: "9:00 AM - 9:00 PM",
      deliveryNote: "Free delivery for orders",
      imgURL: '/medical_standard_medical.png',
    },
    {
      name: "M/S Anirudha Medicos",
      location: "Near Tezpur Gate, Napaam",
      contact: "8723015310",
      deliveryHours: "08:00 AM - 9:30 PM",
      deliveryNote: "Free delivery for orders",
      imgURL: '/medical_anirudha1.png',
    }
  ];

  const healthCenterTimings = {
    weekdays: "8:30 AM - 12:30 PM , 4:00 PM - 6:00 PM",
    weekends: "8:30 AM - 12:30 PM , 3:00 PM - 6:00 PM",
    holidays: "10:00 AM - 12:00 PM"
  };

  const emergencyContacts = [
    { title: "TU Campus Ambulance", number: "7002366254", number2: "8927913848" },
    { title: "Emergency Doctor TU", number: "9957184358", number2: "9864340580" },
    { title: "Emergency Contacts TU", number: "9601835117", number2: "9954449470" },
    { title: "Kanaklata Civil Hospital", number: "03712221494" },
    { title: "Tezpur Fire Service", number: "101", number2: "20101" }
  ];

  return (
    <>
      <HeaderMedical />
      <div className="min-h-screen bg-green-50 py-4 sm:py-8 px-2 sm:px-4">
        <div className="max-w-6xl mx-auto space-y-4 sm:space-y-6">
          {/* Header */}
          <div className="text-center mb-4 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-green-800 mb-2">Campus Medical Services</h1>
            <p className="text-sm sm:text-base text-green-600">Your health is our priority</p>
          </div>

          {/* Emergency Contacts Section */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 sm:p-6">
            <div className="flex items-center text-red-800 text-lg sm:text-xl font-semibold mb-4">
              <AlertCircle className="mr-2 w-5 h-5 sm:w-6 sm:h-6" />
              Emergency Contacts
            </div>
            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                  <span className="font-medium text-gray-700 text-sm sm:text-base mb-2 sm:mb-0">{contact.title}</span>
                  <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                    <a href={`tel:${contact.number}`} className="flex items-center text-red-600 hover:text-red-800 text-sm sm:text-base">
                      <Phone className="w-4 h-4 mr-1" />
                      {contact.number}
                    </a>
                    {contact.number2 && (
                      <a href={`tel:${contact.number2}`} className="flex items-center text-red-600 hover:text-red-800 text-sm sm:text-base">
                        <Phone className="w-4 h-4 mr-1" />
                        {/* {contact.number2} */}Call
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Health Center Timings */}
          <div className="bg-white rounded-lg p-3 sm:p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center text-green-800 text-lg sm:text-xl font-semibold mb-4">
              <div className="flex items-center mb-2 sm:mb-0">
                <Clock className="mr-2 w-5 h-5 sm:w-6 sm:h-6" />
                Health Center Timings
              </div>
              <a 
                href={map.maplink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-green-900 hover:text-red-600 transition-colors text-sm sm:text-base sm:ml-5"
              >
                <Navigation className="w-4 h-4 mr-2" />
                Get Directions
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {[
                { title: "April - September weekdays", timing: healthCenterTimings.weekdays },
                { title: "October - March weekdays", timing: healthCenterTimings.weekends },
                { title: "Weekends - Sat,Sun", timing: healthCenterTimings.holidays }
              ].map((item, index) => (
                <div key={index} className="p-3 sm:p-4 bg-green-50 rounded-lg">
                  <div className="font-semibold mb-2 text-green-700 text-sm sm:text-base">{item.title}</div>
                  <div className="flex items-center text-green-600 text-sm sm:text-base">
                    <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
                    {item.timing}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Medical Shops */}
          <div className="bg-white rounded-lg p-3 sm:p-6 shadow-sm">
            <div className="flex items-center text-green-800 text-lg sm:text-xl font-semibold mb-4">
              <Truck className="mr-2 w-5 h-5 sm:w-6 sm:h-6" />
              Medical Shops with Hostel Delivery
            </div>
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              {medicalShops.map((shop, index) => (
                <div key={index} className="bg-white p-3 sm:p-4 rounded-lg shadow-sm border border-green-100">
                  <h3 className="text-base sm:text-lg font-semibold text-green-800 mb-2">{shop.name}</h3>
                  <div className="space-y-2 text-gray-600">
                    <p className="text-xs sm:text-sm">📍 {shop.location}</p>
                    <p className="text-xs sm:text-sm flex items-center">
                      <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                      <a href={`tel:${shop.contact}`} className="hover:text-green-700">
                        {shop.contact}
                      </a>
                    </p>
                    <p className="text-xs sm:text-sm flex items-center">
                      <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
                      {shop.deliveryHours}
                    </p>
                    <p className="text-xs sm:text-sm text-green-600 font-medium">{shop.deliveryNote}</p>
                  </div>
                  {/* <img src={shop.imgURL} alt={shop.name} className="w-full aspect-square object-cover rounded-lg mt-4" /> */}
                </div>
              ))}
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-center text-xs sm:text-sm text-gray-600 mt-6 sm:mt-8">
            <p>For non-emergency medical advice, please visit the health center during operating hours.</p>
            <p className="mt-2">Remember to carry your student ID card when visiting the health center or medical shops.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MedicalServices;