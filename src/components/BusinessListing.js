import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { auth, firestore } from '../firebase/firebaseConfig'; // Ensure you import correctly
const BusinessListing = () => {
  const [businesses, setBusinesses] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    contactNumber: '',
    instagramLink: '',
    email: '',
    images: [],
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBusinesses();
  }, []);

  const fetchBusinesses = async () => {
    const businessCollection = collection(db, 'businesses');
    const snapshot = await getDocs(businessCollection);
    const businessList = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setBusinesses(businessList);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...Array.from(e.target.files)],
    }));
  };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const imageUrls = await Promise.all(
//       formData.images.map(async (image) => {
//         const imageRef = ref(storage, `business-images/${Date.now()}-${image.name}`);
//         await uploadBytes(imageRef, image);
//         return await getDownloadURL(imageRef);
//       })
//     );

//     await addDoc(collection(db, 'businesses'), {
//       ...formData,
//       images: imageUrls,
//       createdAt: new Date(),
//     });

//     fetchBusinesses();
//     setFormData({
//       name: '',
//       description: '',
//       category: '',
//       contactNumber: '',
//       instagramLink: '',
//       email: '',
//       images: [],
//     });
//     setLoading(false);
//   };


const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    // Upload images to Firebase Storage
    const imageUrls = await Promise.all(
      formData.images.map(async (image) => {
        const imageRef = ref(storage, `business-images/${Date.now()}-${image.name}`);
        await uploadBytes(imageRef, image);
        return await getDownloadURL(imageRef);
      })
    );

    // Add business data to Firestore
    await addDoc(collection(db, 'businesses'), {
      ...formData,
      images: imageUrls,
      ownerId: auth.currentUser?.uid,
      createdAt: new Date(),
    });

    alert('Business added successfully!');
    setFormData({
      name: '',
      description: '',
      category: '',
      contactNumber: '',
      instagramLink: '',
      email: '',
      images: [],
    });
    fetchBusinesses();
  } catch (error) {
    console.error('Error adding business:', error.message);
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">University Businesses</h1>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
          onClick={() => document.getElementById('business-form').scrollIntoView()}
        >
          List Your Business
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {businesses.map((business) => (
          <div
            key={business.id}
            className="bg-white rounded-lg shadow-lg p-4 cursor-pointer"
            onClick={() => navigate(`/business/${business.id}`, { state: business })}
          >
            {business.images[0] && (
              <img
                src={business.images[0]}
                alt={business.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
            )}
            <h2 className="text-xl font-semibold">{business.name}</h2>
            <p className="text-gray-500">{business.category}</p>
          </div>
        ))}
      </div>

      <div id="business-form" className="bg-white rounded-lg shadow-lg p-6 mt-8">
        <h2 className="text-2xl font-bold mb-4">List Your Business</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Business Name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border rounded-md"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleInputChange}
            rows="4"
            required
            className="w-full px-4 py-2 border rounded-md"
          ></textarea>
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            type="text"
            name="contactNumber"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            type="url"
            name="instagramLink"
            placeholder="Instagram Link"
            value={formData.instagramLink}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-4 py-2 border rounded-md"
          />
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 bg-blue-600 text-white rounded-md ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BusinessListing;
