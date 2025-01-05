// import React, { useState } from 'react';
// import { db } from '../firebase/firebaseConfig';
// import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
// import { useAuth } from '../contexts/AuthContext';
// import { useNavigate } from 'react-router-dom';

// const RequestProductForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     priceRange: {
//       min: '',
//       max: ''
//     },
//     contactNumber: '',
//     email: ''
//   });
//   const [loading, setLoading] = useState(false);
//   const { currentUser } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       await addDoc(collection(db, 'requests'), {
//         ...formData,
//         priceRange: {
//           min: Number(formData.priceRange.min),
//           max: Number(formData.priceRange.max)
//         },
//         userId: currentUser.uid,
//         createdAt: serverTimestamp()
//       });
//       navigate('/');
//     } catch (error) {
//       console.error('Error adding request:', error);
//       alert('Failed to post request. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name.startsWith('priceRange.')) {
//       const key = name.split('.')[1];
//       setFormData(prev => ({
//         ...prev,
//         priceRange: {
//           ...prev.priceRange,
//           [key]: value
//         }
//       }));
//     } else {
//       setFormData(prev => ({
//         ...prev,
//         [name]: value
//       }));
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h2 className="text-3xl font-bold mb-6">Request a Product</h2>
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
//             placeholder="Describe the product you're looking for..."
//           />
//         </div>

//         <div className="mb-4 flex gap-4">
//           <div className="flex-1">
//             <label className="block text-gray-700 text-sm font-bold mb-2">
//               Minimum Price (₹)
//             </label>
//             <input
//               type="number"
//               name="priceRange.min"
//               value={formData.priceRange.min}
//               onChange={handleChange}
//               required
//               min="0"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             />
//           </div>
//           <div className="flex-1">
//             <label className="block text-gray-700 text-sm font-bold mb-2">
//               Maximum Price (₹)
//             </label>
//             <input
//               type="number"
//               name="priceRange.max"
//               value={formData.priceRange.max}
//               onChange={handleChange}
//               required
//               min="0"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             />
//           </div>
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
//             pattern="[0-9]{10}"
//             placeholder="10-digit mobile number"
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
//             placeholder="your.email@campus.edu"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors w-full disabled:bg-gray-400"
//         >
//           {loading ? 'Posting Request...' : 'Post Request'}
//         </button>

//         {/* Form validation message */}
//         <div className="mt-4 text-sm text-gray-600">
//           <p>* Required fields must be filled</p>
//           <p>* Price range maximum must be greater than minimum</p>
//           <p>* Contact number must be a valid 10-digit number</p>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default RequestProductForm;

import React, { useState } from 'react';
import { db, storage } from '../firebase/firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const RequestProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    priceRange: {
      min: '',
      max: '',
    },
    contactNumber: '',
    email: '',
    image: null, // For image input
  });
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Validate form inputs
      if (Number(formData.priceRange.max) <= Number(formData.priceRange.min)) {
        throw new Error('Maximum price must be greater than minimum price');
      }

      if (!formData.contactNumber.match(/^\d{10}$/)) {
        throw new Error('Please enter a valid 10-digit contact number');
      }

      // Upload image to Firebase Storage
      let imageUrl = '';
      if (formData.image) {
        const imageRef = ref(storage, `requests/${Date.now()}-${formData.image.name}`);
        const snapshot = await uploadBytes(imageRef, formData.image);
        imageUrl = await getDownloadURL(snapshot.ref);
      }

      // Prepare request data for Firestore
      const requestData = {
        name: formData.name,
        description: formData.description,
        priceRange: {
          min: Number(formData.priceRange.min),
          max: Number(formData.priceRange.max),
        },
        contactNumber: formData.contactNumber,
        email: formData.email,
        imageUrl, // Store the uploaded image URL
        userId: currentUser.uid,
        createdAt: serverTimestamp(),
      };

      // Save to Firestore
      await addDoc(collection(db, 'requests'), requestData);

      alert('Request posted successfully!');
      navigate('/');

      // Reset form
      setFormData({
        name: '',
        description: '',
        priceRange: { min: '', max: '' },
        contactNumber: '',
        email: '',
        image: null,
      });
    } catch (error) {
      console.error('Error posting request:', error);
      alert(error.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name.startsWith('priceRange.')) {
      const key = name.split('.')[1];
      setFormData((prev) => ({
        ...prev,
        priceRange: {
          ...prev.priceRange,
          [key]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: files ? files[0] : value,
      }));
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Request a Product</h2>
      <form onSubmit={handleSubmit} className="max-w-lg">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Product Name</label>
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
          <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
            placeholder="Describe the product you're looking for..."
          />
        </div>

        <div className="mb-4 flex gap-4">
          <div className="flex-1">
            <label className="block text-gray-700 text-sm font-bold mb-2">Minimum Price (₹)</label>
            <input
              type="number"
              name="priceRange.min"
              value={formData.priceRange.min}
              onChange={handleChange}
              required
              min="0"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700 text-sm font-bold mb-2">Maximum Price (₹)</label>
            <input
              type="number"
              name="priceRange.max"
              value={formData.priceRange.max}
              onChange={handleChange}
              required
              min="0"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Contact Number</label>
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
            placeholder="10-digit mobile number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Campus Email (Optional)</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@campus.edu"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Upload Product Image</label>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors w-full disabled:bg-gray-400"
        >
          {loading ? 'Posting Request...' : 'Post Request'}
        </button>
      </form>
    </div>
  );
};

export default RequestProductForm;
