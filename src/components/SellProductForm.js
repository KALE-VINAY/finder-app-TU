// import React, { useState } from 'react';
// import { db } from '../firebase/firebaseConfig';
// import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
// import { useAuth } from '../contexts/AuthContext';
// import { useNavigate } from 'react-router-dom';

// const SellProductForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     price: '',
//     contactNumber: '',
//     email: ''
//   });
//   const [loading, setLoading] = useState(false);
//   const { currentUser } = useAuth();
//   const navigate = useNavigate();

//  // In your SellProductForm.js
// const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       // Validate data before submission
//       if (formData.price <= 0) {
//         throw new Error('Price must be greater than 0');
//       }

//       if (!formData.contactNumber.match(/^\d{10}$/)) {
//         throw new Error('Please enter a valid 10-digit contact number');
//       }

//       const productData = {
//         ...formData,
//         price: Number(formData.price),
//         userId: currentUser.uid,
//         createdAt: serverTimestamp()
//       };

//       console.log('Attempting to add product:', productData); // Debug log

//       const docRef = await addDoc(collection(db, 'products'), productData);
//       console.log('Document written with ID: ', docRef.id); // Debug log
      
//       navigate('/');
//     } catch (error) {
//       console.error('Detailed error:', error); // Detailed error logging
      
//       // More specific error messages based on the error type
//       if (error.code === 'permission-denied') {
//         alert('Permission denied. Please make sure you are logged in.');
//       } else if (error.code === 'unavailable') {
//         alert('Service temporarily unavailable. Please check your internet connection and try again.');
//       } else {
//         alert(`Error: ${error.message || 'Failed to list product. Please try again.'}`);
//       }
//     } finally {
//       setLoading(false);
//     }
// };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h2 className="text-3xl font-bold mb-6">Sell Your Product</h2>
//       <form onSubmit={handleSubmit} className="max-w-lg">
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Product Name
//           </label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Description
//           </label>
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             required
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Price (₹)
//           </label>
//           <input
//             type="number"
//             name="price"
//             value={formData.price}
//             onChange={handleChange}
//             required
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Contact Number
//           </label>
//           <input
//             type="tel"
//             name="contactNumber"
//             value={formData.contactNumber}
//             onChange={handleChange}
//             required
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>

//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Campus Email (Optional)
//           </label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors w-full disabled:bg-gray-400"
//         >
//           {loading ? 'Listing Product...' : 'List Product'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SellProductForm;
// import React, { useState } from 'react';
// import { db, storage } from '../firebase/firebaseConfig';
// import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
// import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
// import { useAuth } from '../contexts/AuthContext';
// import { useNavigate } from 'react-router-dom';

// const SellProductForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     price: '',
//     contactNumber: '',
//     email: '',
//     image: null
//   });
//   const [loading, setLoading] = useState(false);
//   const { currentUser } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       // Validate data before submission
//       if (formData.price <= 0) {
//         throw new Error('Price must be greater than 0');
//       }

//       if (!formData.contactNumber.match(/^\d{10}$/)) {
//         throw new Error('Please enter a valid 10-digit contact number');
//       }

//       if (!formData.image) {
//         throw new Error('Please upload an image of the product');
//       }

//       // Upload the image to Firebase Storage
//       const imageRef = ref(storage, `products/${formData.image.name}-${Date.now()}`);
//       const uploadTask = uploadBytesResumable(imageRef, formData.image);

//       uploadTask.on(
//         'state_changed',
//         null,
//         (error) => {
//           console.error('Error uploading image:', error);
//           throw error;
//         },
//         async () => {
//           const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

//           const productData = {
//             ...formData,
//             price: Number(formData.price),
//             userId: currentUser.uid,
//             createdAt: serverTimestamp(),
//             imageUrl: downloadURL
//           };

//           console.log('Attempting to add product:', productData); // Debug log

//           const docRef = await addDoc(collection(db, 'products'), productData);
//           console.log('Document written with ID: ', docRef.id); // Debug log

//           navigate('/');
//         }
//       );
//     } catch (error) {
//       console.error('Detailed error:', error); // Detailed error logging

//       if (error.code === 'permission-denied') {
//         alert('Permission denied. Please make sure you are logged in.');
//       } else if (error.code === 'unavailable') {
//         alert('Service temporarily unavailable. Please check your internet connection and try again.');
//       } else {
//         alert(`Error: ${error.message || 'Failed to list product. Please try again.'}`);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === 'image') {
//       setFormData((prev) => ({ ...prev, image: files[0] }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h2 className="text-3xl font-bold mb-6">Sell Your Product</h2>
//       <form onSubmit={handleSubmit} className="max-w-lg">
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Product Name
//           </label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Description
//           </label>
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             required
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Price (₹)
//           </label>
//           <input
//             type="number"
//             name="price"
//             value={formData.price}
//             onChange={handleChange}
//             required
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Contact Number
//           </label>
//           <input
//             type="tel"
//             name="contactNumber"
//             value={formData.contactNumber}
//             onChange={handleChange}
//             required
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Product Image
//           </label>
//           <input
//             type="file"
//             name="image"
//             accept="image/*"
//             onChange={handleChange}
//             required
//             className="block w-full text-gray-700"
//           />
//         </div>

//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Campus Email (Optional)
//           </label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors w-full disabled:bg-gray-400"
//         >
//           {loading ? 'Listing Product...' : 'List Product'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SellProductForm;
import React, { useState } from 'react';
import { db, storage } from '../firebase/firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const SellProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    contactNumber: '',
    email: '',
    image: null, // For image file
  });
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       if (formData.price <= 0) {
//         throw new Error('Price must be greater than 0');
//       }

//       if (!formData.contactNumber.match(/^\d{10}$/)) {
//         throw new Error('Please enter a valid 10-digit contact number');
//       }

//       // Upload image to Firebase Storage
//       let imageUrl = '';
//       if (formData.image) {
//         const imageRef = ref(storage, `products/${formData.image.name}-${Date.now()}`);
//         const snapshot = await uploadBytes(imageRef, formData.image);
//         imageUrl = await getDownloadURL(snapshot.ref);
//       }

//       // Add product data to Firestore
//       const productData = {
//         ...formData,
//         image: imageUrl, // Store image URL instead of the file
//         price: Number(formData.price),
//         userId: currentUser.uid,
//         createdAt: serverTimestamp(),
//       };

//       delete productData.image; // Remove the `File` object before saving
//       const docRef = await addDoc(collection(db, 'products'), productData);

//       console.log('Product successfully added with ID:', docRef.id);
//       navigate('/');
//     } catch (error) {
//       console.error('Error adding product:', error);
//       alert(error.message || 'An error occurred. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: files ? files[0] : value,
//     }));
//   };
const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      // Validate inputs
      if (formData.price <= 0) {
        throw new Error('Price must be greater than 0');
      }
  
      if (!formData.contactNumber.match(/^\d{10}$/)) {
        throw new Error('Please enter a valid 10-digit contact number');
      }
  
      // Upload image to Firebase Storage
      let imageUrl = '';
      if (formData.image) {
        const imageRef = ref(storage, `products/${Date.now()}-${formData.image.name}`);
        const snapshot = await uploadBytes(imageRef, formData.image);
        imageUrl = await getDownloadURL(snapshot.ref);
      }
  
      // Prepare product data for Firestore
      const productData = {
        name: formData.name,
        description: formData.description,
        price: Number(formData.price),
        contactNumber: formData.contactNumber,
        email: formData.email,
        imageUrl, // Store the URL of the uploaded image
        userId: currentUser.uid,
        createdAt: serverTimestamp(),
      };
  
      // Save to Firestore
      const docRef = await addDoc(collection(db, 'products'), productData);
  
      console.log('Product successfully added with ID:', docRef.id);
      alert('Product listed successfully!');
      navigate('/');
  
      // Reset form
      setFormData({
        name: '',
        description: '',
        price: '',
        contactNumber: '',
        email: '',
        image: null,
      });
    } catch (error) {
      console.error('Error adding product:', error);
      alert(error.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value, // Handle file input correctly
    }));
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Sell Your Product</h2>
      <form onSubmit={handleSubmit} className="max-w-lg">


        {/* Other fields */}
         <div className="mb-4">
           <label className="block text-gray-700 text-sm font-bold mb-2">
             Product Name
           </label>
           <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Price (₹)
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Contact Number
          </label>
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-6">
           <label className="block text-gray-700 text-sm font-bold mb-2">
             Campus Email (Optional)
           </label>
           <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Upload Product Image</label>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            required
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors w-full disabled:bg-gray-400"
        >
          {loading ? 'Listing Product...' : 'List Product'}
        </button>
      </form>
    </div>
  );
};

export default SellProductForm;
