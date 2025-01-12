import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

const BusinessDetails = () => {
  const { state: business } = useLocation();
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to determine grid columns based on image count
  const getGridClass = (imageCount) => {
    switch (imageCount) {
      case 1:
        return 'md:grid-cols-1 max-w-2xl mx-auto';
      case 2:
        return 'md:grid-cols-2';
      default:
        return 'md:grid-cols-3';
    }
  };

  // Function to determine image width class based on count
  const getImageClass = (imageCount) => {
    if (imageCount === 1) {
      return 'aspect-w-16 aspect-h-9';
    } else if (imageCount === 2) {
      return 'aspect-w-16 aspect-h-12';
    }
    return 'aspect-w-16 aspect-h-9';
  };

  // Handle modal click events
  const handleModalClick = (e) => {
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      setSelectedImage(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 animate-fadeIn">
      {/* Hero Section */}
      <div className="relative h-96">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 animate-gradientFlow">
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-white mb-4 animate-slideInDown">
            {business.name}
          </h1>
          <p className="text-xl text-white/90 font-light animate-slideInUp">
            {business.category}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 -mt-32 relative z-10 ">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden animate-slideInUp">

            {/* Business Details */}
          <div className="p-6 bg-gray-50 mt-4">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold mb-6 animate-fadeIn">About Us</h2>
              <p className="text-gray-600 leading-relaxed mb-8 animate-fadeIn">
                {business.description}
              </p>

              <div className="flex flex-row md:flex-row gap-6 md:gap-6">
                <div className="flex flex-col  items-center md:space-x-4 hover:translate-x-2 transition-transform duration-300 animate-slideInRight">
                  <div className="bg-blue-100 p-3 rounded-full transform hover:rotate-12 transition-transform duration-300">
                    <Phone className="w-3 h-3 md:w-6 md:h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Contact</p>
                    <a
                      href={`tel:${business.contactNumber}`}
                      className="text-sm md:text-lg font-medium text-blue-600 hover:text-blue-700"
                    >
                      {/* {business.contactNumber} */}
                    </a>
                  </div>
                </div>

                <div className="flex flex-col items-center md:space-x-4 hover:translate-x-2 transition-transform duration-300 animate-slideInRight" 
                     style={{ animationDelay: '100ms' }}>
                  <div className="bg-purple-100 p-3 rounded-full transform hover:rotate-12 transition-transform duration-300">
                    <Mail className="w-3 h-3 md:w-6 md:h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <a
                      href={`mailto:${business.email}`}
                      className="text-sm md:text-lg font-medium text-purple-600 hover:text-purple-700"
                    >
                      {/* {business.email} */}
                    </a>
                  </div>
                </div>

                {business.instagramLink && (
                  <div className="flex flex-col items-center md:space-x-4 hover:translate-x-2 transition-transform duration-300 animate-slideInRight"
                       style={{ animationDelay: '200ms' }}>
                    <div className="bg-pink-100 p-3 rounded-full transform hover:rotate-12 transition-transform duration-300">
                      <Instagram className="w-3 h-3 md:w-6 md:h-6 text-pink-600" />
                    </div>
                    <div >
                      <p className="text-sm text-gray-500 mb-1">Instagram</p>
                      <a
                        href={business.instagramLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm md:text-lg  font-medium text-pink-600 hover:text-pink-700"
                      >
                        {/* Follow Us */}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-6 animate-fadeIn">Gallery</h2>
            <div className={`grid grid-cols-1 gap-6 ${getGridClass(business.images.length)}`}>
              {business.images.map((image, index) => (
                <div 
                  key={index} 
                  className={`group relative ${getImageClass(business.images.length)} overflow-hidden rounded-lg cursor-pointer hover:shadow-2xl transition-all duration-300 animate-scaleIn`}
                  style={{ animationDelay: `${index * 150}ms` }}
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="w-full h-full">
                    <img
                      src={image}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>

 
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={handleModalClick}
        >
          <div 
            className="relative max-w-4xl w-full mx-auto animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage} 
              alt="Selected gallery image" 
              className="w-full h-auto rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInDown {
          from {
            transform: translateY(-20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideInUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          from {
            transform: translateX(-20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }

        .animate-slideInDown {
          animation: slideInDown 0.5s ease-out;
        }

        .animate-slideInUp {
          animation: slideInUp 0.5s ease-out;
        }

        .animate-slideInRight {
          animation: slideInRight 0.5s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out;
        }

        .animate-gradientFlow {
          background-size: 200% 200%;
          animation: gradientFlow 15s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default BusinessDetails;

// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { Phone, Mail, Instagram } from 'lucide-react';

// const ImageLoader = ({ src, alt, className, onLoad }) => {
//   const [isLoaded, setIsLoaded] = useState(false);

//   return (
//     <div className="relative w-full h-full">
//       {/* Loading skeleton */}
//       {!isLoaded && (
//         <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
//       )}
//       <img
//         src={src}
//         alt={alt}
//         className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
//         onLoad={() => {
//           setIsLoaded(true);
//           onLoad?.();
//         }}
//       />
//     </div>
//   );
// };

// const LoadingSkeleton = () => (
//   <div className="animate-pulse">
//     {/* Hero Section Skeleton */}
//     <div className="h-96 bg-gradient-to-r from-gray-200 to-gray-300" />
    
//     {/* Content Skeleton */}
//     <div className="container mx-auto px-4 -mt-32 relative z-10 pb-16">
//       <div className="bg-white rounded-xl shadow-xl overflow-hidden">
//         <div className="p-6">
//           {/* Gallery Title Skeleton */}
//           <div className="h-8 w-32 bg-gray-200 rounded mb-6" />
          
//           {/* Gallery Images Skeleton */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {[1, 2, 3].map((item) => (
//               <div key={item} className="aspect-w-16 aspect-h-9">
//                 <div className="w-full h-full bg-gray-200 rounded-lg animate-pulse" />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Details Skeleton */}
//         <div className="p-6 bg-gray-50">
//           <div className="space-y-4">
//             <div className="h-6 w-48 bg-gray-200 rounded" />
//             <div className="h-24 bg-gray-200 rounded" />
//             <div className="space-y-4">
//               {[1, 2, 3].map((item) => (
//                 <div key={item} className="flex items-center space-x-4">
//                   <div className="w-12 h-12 bg-gray-200 rounded-full" />
//                   <div className="flex-1">
//                     <div className="h-4 w-24 bg-gray-200 rounded mb-2" />
//                     <div className="h-6 w-48 bg-gray-200 rounded" />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// const BusinessDetails = () => {
//   const { state: business } = useLocation();
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [loadedImages, setLoadedImages] = useState(0);
//   const [isFullyLoaded, setIsFullyLoaded] = useState(false);

//   useEffect(() => {
//     // Reset loaded state when business changes
//     setLoadedImages(0);
//     setIsFullyLoaded(false);
//   }, [business]);

//   const handleImageLoad = () => {
//     setLoadedImages(prev => {
//       const newCount = prev + 1;
//       if (newCount === business.images.length) {
//         setIsFullyLoaded(true);
//       }
//       return newCount;
//     });
//   };

//   const getGridClass = (imageCount) => {
//     switch (imageCount) {
//       case 1: return 'md:grid-cols-1 max-w-2xl mx-auto';
//       case 2: return 'md:grid-cols-2';
//       default: return 'md:grid-cols-3';
//     }
//   };

//   if (!isFullyLoaded) {
//     return <LoadingSkeleton />;
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 animate-fadeIn">
//       {/* Hero Section */}
//       <div className="relative h-96">
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 animate-gradientFlow">
//           <div className="absolute inset-0 bg-black/30" />
//         </div>
//         <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
//           <h1 className="text-5xl font-bold text-white mb-4 animate-slideInDown">
//             {business.name}
//           </h1>
//           <p className="text-xl text-white/90 font-light animate-slideInUp">
//             {business.category}
//           </p>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="container mx-auto px-4 -mt-32 relative z-10 pb-16">
//         <div className="bg-white rounded-xl shadow-xl overflow-hidden animate-slideInUp">
//           {/* Image Gallery */}
//           <div className="p-6">
//             <h2 className="text-2xl font-semibold mb-6 animate-fadeIn">Gallery</h2>
//             <div className={`grid grid-cols-1 gap-6 ${getGridClass(business.images.length)}`}>
//               {business.images.map((image, index) => (
//                 <div 
//                   key={index} 
//                   className="group aspect-w-16 aspect-h-9 overflow-hidden rounded-lg cursor-pointer hover:shadow-2xl transition-all duration-300 animate-scaleIn"
//                   style={{ animationDelay: `${index * 150}ms` }}
//                   onClick={() => setSelectedImage(image)}
//                 >
//                   <ImageLoader
//                     src={image}
//                     alt={`Gallery ${index + 1}`}
//                     className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
//                     onLoad={handleImageLoad}
//                   />
//                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Business Details Section - Same as before */}
//           <div className="p-6 bg-gray-50 mt-4">
//             <div className="max-w-3xl">
//               <h2 className="text-2xl font-semibold mb-6 animate-fadeIn">About Us</h2>
//               <p className="text-gray-600 leading-relaxed mb-8 animate-fadeIn">
//                 {business.description}
//               </p>

//               <div className="space-y-6">
//                 <div className="flex items-center space-x-4 hover:translate-x-2 transition-transform duration-300 animate-slideInRight">
//                   <div className="bg-blue-100 p-3 rounded-full transform hover:rotate-12 transition-transform duration-300">
//                     <Phone className="w-6 h-6 text-blue-600" />
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500 mb-1">Contact Number</p>
//                     <a href={`tel:${business.contactNumber}`} className="text-lg font-medium text-blue-600 hover:text-blue-700">
//                       {business.contactNumber}
//                     </a>
//                   </div>
//                 </div>

//                 <div className="flex items-center space-x-4 hover:translate-x-2 transition-transform duration-300 animate-slideInRight"
//                      style={{ animationDelay: '100ms' }}>
//                   <div className="bg-purple-100 p-3 rounded-full transform hover:rotate-12 transition-transform duration-300">
//                     <Mail className="w-6 h-6 text-purple-600" />
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500 mb-1">Email Address</p>
//                     <a href={`mailto:${business.email}`} className="text-lg font-medium text-purple-600 hover:text-purple-700">
//                       {business.email}
//                     </a>
//                   </div>
//                 </div>

//                 {business.instagramLink && (
//                   <div className="flex items-center space-x-4 hover:translate-x-2 transition-transform duration-300 animate-slideInRight"
//                        style={{ animationDelay: '200ms' }}>
//                     <div className="bg-pink-100 p-3 rounded-full transform hover:rotate-12 transition-transform duration-300">
//                       <Instagram className="w-6 h-6 text-pink-600" />
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500 mb-1">Instagram</p>
//                       <a
//                         href={business.instagramLink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-lg font-medium text-pink-600 hover:text-pink-700"
//                       >
//                         Follow Us
//                       </a>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Image Modal */}
//       {selectedImage && (
//         <div 
//           className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center animate-fadeIn"
//           onClick={() => setSelectedImage(null)}
//         >
//           <div className="max-w-4xl w-full mx-4 animate-scaleIn">
//             <ImageLoader 
//               src={selectedImage} 
//               alt="Selected gallery image" 
//               className="w-full h-auto rounded-lg"
//             />
//           </div>
//         </div>
//       )}

//       <style jsx>{`
//         @keyframes gradientFlow {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }

//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }

//         @keyframes slideInDown {
//           from {
//             transform: translateY(-20px);
//             opacity: 0;
//           }
//           to {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }

//         @keyframes slideInUp {
//           from {
//             transform: translateY(20px);
//             opacity: 0;
//           }
//           to {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }

//         @keyframes slideInRight {
//           from {
//             transform: translateX(-20px);
//             opacity: 0;
//           }
//           to {
//             transform: translateX(0);
//             opacity: 1;
//           }
//         }

//         @keyframes scaleIn {
//           from {
//             transform: scale(0.9);
//             opacity: 0;
//           }
//           to {
//             transform: scale(1);
//             opacity: 1;
//           }
//         }

//         .animate-fadeIn {
//           animation: fadeIn 0.5s ease-out;
//         }

//         .animate-slideInDown {
//           animation: slideInDown 0.5s ease-out;
//         }

//         .animate-slideInUp {
//           animation: slideInUp 0.5s ease-out;
//         }

//         .animate-slideInRight {
//           animation: slideInRight 0.5s ease-out;
//         }

//         .animate-scaleIn {
//           animation: scaleIn 0.5s ease-out;
//         }

//         .animate-gradientFlow {
//           background-size: 200% 200%;
//           animation: gradientFlow 15s ease infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default BusinessDetails;