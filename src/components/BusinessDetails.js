import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Plus, Trash2 } from 'lucide-react';
import { collection, addDoc, getDocs, query, where, deleteDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage, auth } from '../firebase/firebaseConfig';
import { FaWhatsapp } from 'react-icons/fa';

const BusinessDetails = () => {
  const { state: business } = useLocation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [products, setProducts] = useState([]);
  const [isOwner, setIsOwner] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState({});
  const [productImagesLoaded, setProductImagesLoaded] = useState({});
  const [productForm, setProductForm] = useState({
    name: '',
    price: '',
    image: null
  });

  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, [ ]);

  useEffect(() => {
    // Check if current user is the business owner
    setIsOwner(auth.currentUser?.uid === business.ownerId);
    fetchProducts();
  }, [business.ownerId]);

  const handleImageLoad = (index) => {
    setImagesLoaded(prev => ({
      ...prev,
      [index]: true
    }));
  };

  const handleProductImageLoad = (productId) => {
    setProductImagesLoaded(prev => ({
      ...prev,
      [productId]: true
    }));
  };


  const fetchProducts = async () => {
    try {
      const productsRef = collection(db, 'business-products');
      const q = query(productsRef, where("businessId", "==", business.id));
      const snapshot = await getDocs(q);
      const productList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProducts(productList);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleProductInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setProductForm(prev => ({
        ...prev,
        image: files[0]
      }));
    } else {
      setProductForm(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Upload product image
      const imageRef = ref(storage, `product-images/${Date.now()}-${productForm.image.name}`);
      await uploadBytes(imageRef, productForm.image);
      const imageUrl = await getDownloadURL(imageRef);

      // Add product to Firestore
      await addDoc(collection(db, 'business-products'), {
        businessId: business.id,
        name: productForm.name,
        price: parseFloat(productForm.price),
        imageUrl: imageUrl,
        createdAt: new Date()
      });

      // Reset form and refresh products
      setProductForm({ name: '', price: '', image: null });
      setShowAddProduct(false);
      fetchProducts();
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Error adding product. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProduct = async (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteDoc(doc(db, 'business-products', productId));
        fetchProducts();
      } catch (error) {
        console.error("Error deleting product:", error);
        alert("Error deleting product. Please try again.");
      }
    }
  };

  // Existing functions remain the same...
  const getGridClass = (imageCount) => {
    switch (imageCount) {
      case 1: return 'md:grid-cols-1 max-w-2xl mx-auto';
      case 2: return 'md:grid-cols-2';
      default: return 'md:grid-cols-3';
    }
  };

  const getImageClass = (imageCount) => {
    if (imageCount === 1) return 'aspect-w-16 aspect-h-9';
    if (imageCount === 2) return 'aspect-w-16 aspect-h-12';
    return 'aspect-w-16 aspect-h-9';
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      setSelectedImage(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 animate-fadeIn">
      {/* Hero Section - remains the same */}
      <div className="relative h-96">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 animate-gradientFlow">
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl font-serif font-bold text-white mb-4 animate-slideInDown">
            {business.name}
          </h1>
          <p className="text-xl my-2 text-white/90 font-light animate-slideInUp">
            {business.category}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container  mx-auto px-4  -mt-28 relative z-10">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden animate-slideInUp">
       
                     {/* Business Details */}
          <div className="p-6 bg-gray-50 mt-4">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold mb-6 animate-fadeIn">About Us</h2>
              <p className="text-gray-600 font-sans leading-relaxed mb-8 animate-fadeIn">
                {business.description}
              </p>

              <div className="flex flex-wrap gap-6">
                {/* Contact */}
                <div className="flex flex-col items-center hover:translate-x-2 transition-transform duration-300 animate-slideInRight">
                  <a
                    href={`tel:${business.contactNumber}`}
                    className="text-sm md:text-lg font-medium text-blue-600 hover:text-blue-700"
                  >
                    <div className="p-4 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors duration-300">
                      <Phone className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-blue-600" />
                    </div>
                  </a>
                  <a
                    href={`tel:${business.contactNumber}`}
                    className="text-sm md:text-lg font-medium text-blue-600 hover:text-blue-700"
                  >
                  <p className="mt-2 text-sm md:text-lg text-gray-500">Contact</p>
                  </a>
                </div>

                {/* Email */}
                <div
                  className="flex flex-col items-center hover:translate-x-2 transition-transform duration-300 animate-slideInRight"
                  style={{ animationDelay: '100ms' }}
                >
                  <a
                    href={`mailto:${business.email}`}
                    className="text-sm md:text-lg  font-medium text-purple-600 hover:text-purple-700"
                  >
                    <div className="p-4 rounded-full bg-purple-100 hover:bg-purple-200 transition-colors duration-300">
                      <Mail className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-purple-600" />
                    </div>
                  </a>
                  <a
                    href={`mailto:${business.email}`}
                    className="text-sm md:text-lg  font-medium text-purple-600 hover:text-purple-700"
                  >
                  <p className="mt-2 text-sm md:text-lg text-gray-500">Email</p>
                  </a>

                </div>

                {/* Instagram */}
                {business.instagramLink && (
                  <div
                    className="flex flex-col items-center hover:translate-x-2 transition-transform duration-300 animate-slideInRight"
                    style={{ animationDelay: '200ms' }}
                  >
                    <a
                      href={business.instagramLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm md:text-lg font-medium text-pink-600 hover:text-pink-700"
                    >
                      <div className="p-4 rounded-full bg-pink-100 hover:bg-pink-200 transition-colors duration-300">
                        <Instagram className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-pink-600" />
                      </div>
                    </a>
                    <a
                      href={business.instagramLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm md:text-lg font-medium text-pink-600 hover:text-pink-700"
                    >
                    <p className="mt-2 text-sm md:text-lg text-gray-500">Instagram</p>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

      {/* Products Section */}
      <div className="p-4 sm:p-6 border-t">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold animate-fadeIn">Products</h2>
          {isOwner && (
            <button
              onClick={() => setShowAddProduct(true)}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm sm:text-base"
            >
              <Plus className="w-4 h-4" /> Add Product ( or Service)
            </button>
          )}
        </div>

        {/* Add Product Form */}
        {isOwner && showAddProduct && (
          <div className="mb-6 p-3 sm:p-4 bg-gray-50 rounded-lg">
            <form onSubmit={handleAddProduct} className="space-y-3 sm:space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">Product Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter product name"
                  value={productForm.name}
                  onChange={handleProductInputChange}
                  required
                  className="w-full px-3 py-2 text-sm sm:text-base border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="price" className="text-sm font-medium text-gray-700">Price</label>
                <input
                  id="price"
                  type="number"
                  name="price"
                  placeholder="Enter price"
                  value={productForm.price}
                  onChange={handleProductInputChange}
                  required
                  step="0.01"
                  min="0"
                  className="w-full px-3 py-2 text-sm sm:text-base border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="image" className="text-sm font-medium text-gray-700">Product Image</label>
                <input
                  id="image"
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleProductInputChange}
                  required
                  className="w-full px-3 py-2 text-sm sm:text-base border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className={`flex-1 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm sm:text-base ${
                    loading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {loading ? 'Adding...' : 'Add Product (or Service)'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddProduct(false)}
                  className="flex-1 py-2 px-4 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors text-sm sm:text-base"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

       {/* Products Grid with Loading State */}
       <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative pt-[75%]">
                  {!productImagesLoaded[product.id] && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                  )}
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${
                      productImagesLoaded[product.id] ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => handleProductImageLoad(product.id)}
                  />
                </div>
                <div className="p-3 sm:p-4">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <h3 className="text-base sm:text-lg font-serif font-semibold line-clamp-2">{product.name}</h3>
                      <div className='flex items-center space-x-2'> 
                      <p className="text-blue-600 font-medium text-sm sm:text-base">
                        ₹{parseFloat(product.price).toFixed(2)}
                      </p>
                       {/* WhatsApp Button */}
                                  <a
                                    href={`https://wa.me/91${business.contactNumber}?text=Hello%20there,%20I%27m%20interested%20in%20your%20product%20${product.name}.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex text-sm items-center text-green-600 px-2 py-1 rounded-md hover:bg-green-200 "
                                  >
                                    <FaWhatsapp className="w-4 h-4 sm:w-2 sm:h-4 mr-1" />
                                    {/* WhatsApp */}
                                  </a>
                                  </div>
                    </div>
                    {isOwner && (
                      <button
                        onClick={() => handleDeleteProduct(product.id)}
                        className="-p-1 text-red-500 hover:text-red-700 rounded-full  hover:bg-red-200 transition-colors"
                      >
                        <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        {/* Empty state */}
        {products.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500 text-sm sm:text-base">No products available yet.</p>
          </div>
        )}
            </div>

       {/* Gallery with Loading State */}
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
                    {!imagesLoaded[index] && (
                      <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                    )}
                    <img
                      src={image}
                      alt={`Gallery ${index + 1}`}
                      className={`w-full h-full object-cover transform group-hover:scale-110 transition-all duration-500 ${
                        imagesLoaded[index] ? 'opacity-100' : 'opacity-0'
                      }`}
                      onLoad={() => handleImageLoad(index)}
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




































































// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

// const BusinessDetails = () => {
//   const { state: business } = useLocation();
//   const [selectedImage, setSelectedImage] = useState(null);

//   // Function to determine grid columns based on image count
//   const getGridClass = (imageCount) => {
//     switch (imageCount) {
//       case 1:
//         return 'md:grid-cols-1 max-w-2xl mx-auto';
//       case 2:
//         return 'md:grid-cols-2';
//       default:
//         return 'md:grid-cols-3';
//     }
//   };

//   // Function to determine image width class based on count
//   const getImageClass = (imageCount) => {
//     if (imageCount === 1) {
//       return 'aspect-w-16 aspect-h-9';
//     } else if (imageCount === 2) {
//       return 'aspect-w-16 aspect-h-12';
//     }
//     return 'aspect-w-16 aspect-h-9';
//   };

//   // Handle modal click events
//   const handleModalClick = (e) => {
//     e.stopPropagation();
//     if (e.target === e.currentTarget) {
//       setSelectedImage(null);
//     }
//   };

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
//       <div className="container mx-auto px-4 -mt-32 relative z-10 ">
//         <div className="bg-white rounded-xl shadow-xl overflow-hidden animate-slideInUp">

//             {/* Business Details */}
//           <div className="p-6 bg-gray-50 mt-4">
//             <div className="max-w-3xl">
//               <h2 className="text-2xl font-semibold mb-6 animate-fadeIn">About Us</h2>
//               <p className="text-gray-600 leading-relaxed mb-8 animate-fadeIn">
//                 {business.description}
//               </p>

//               <div className="flex flex-row md:flex-row gap-6 md:gap-6">
//                 <div className="flex flex-col  items-center md:space-x-4 hover:translate-x-2 transition-transform duration-300 animate-slideInRight">
//                 <a
//                       href={`tel:${business.contactNumber}`}
//                       className="text-sm md:text-lg font-medium text-blue-600 hover:text-blue-700"
//                     >
//                   <div className=" p-3 rounded-full transform hover:rotate-12 transition-transform duration-300">
//                     <Phone className="w-3 h-3 md:w-6 md:h-6 text-blue-600" />
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500 "></p>
                   
//                       {/* {business.contactNumber} */}Contact
                   
//                   </div> </a>
//                 </div>

//                 <div className="flex flex-col items-center md:space-x-4 hover:translate-x-2 transition-transform duration-300 animate-slideInRight" 
//                      style={{ animationDelay: '100ms' }}>
//                   <a
//                       href={`mailto:${business.email}`}
//                       className="text-sm md:text-lg font-medium text-purple-600 hover:text-purple-700"
//                     >
//                   <div className=" p-3 rounded-full transform hover:rotate-12 transition-transform duration-300">
//                     <Mail className="w-3 h-3 md:w-6 md:h-6 text-purple-600" />
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500 "></p>
                    
//                       {/* {business.email} */}Email
                   
//                   </div> </a>
//                 </div>

//                 {business.instagramLink && (
//                   <div className="flex flex-col items-center md:space-x-4 hover:translate-x-2 transition-transform duration-300 animate-slideInRight"
//                        style={{ animationDelay: '200ms' }}>
//                        <a
//                         href={business.instagramLink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-sm md:text-lg justify-center font-medium text-pink-600 hover:text-pink-700"
//                       >
//                     <div className=" p-3  rounded-full transform hover:rotate-12 transition-transform duration-300">
//                       <Instagram className="w-3 h-3 md:w-6 md:h-6 text-pink-600" />
//                     </div>
//                     <div >
//                       <p className="text-sm text-gray-500 "></p>
                   
//                         {/* Follow Us */}Instagram
                      
//                     </div></a>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

          // {/* Image Gallery */}
          // <div className="p-6">
          //   <h2 className="text-2xl font-semibold mb-6 animate-fadeIn">Gallery</h2>
          //   <div className={`grid grid-cols-1 gap-6 ${getGridClass(business.images.length)}`}>
          //     {business.images.map((image, index) => (
          //       <div 
          //         key={index} 
          //         className={`group relative ${getImageClass(business.images.length)} overflow-hidden rounded-lg cursor-pointer hover:shadow-2xl transition-all duration-300 animate-scaleIn`}
          //         style={{ animationDelay: `${index * 150}ms` }}
          //         onClick={() => setSelectedImage(image)}
          //       >
          //         <div className="w-full h-full">
          //           <img
          //             src={image}
          //             alt={`Gallery ${index + 1}`}
          //             className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          //           />
          //           <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          //         </div>
          //       </div>
          //     ))}
          //   </div>
          // </div>

 
//         </div>
//       </div>

//       {/* Image Modal */}
//       {selectedImage && (
//         <div 
//           className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fadeIn"
//           onClick={handleModalClick}
//         >
//           <div 
//             className="relative max-w-4xl w-full mx-auto animate-scaleIn"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <img 
//               src={selectedImage} 
//               alt="Selected gallery image" 
//               className="w-full h-auto rounded-lg"
//             />
//             <button
//               className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
//               onClick={() => setSelectedImage(null)}
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
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