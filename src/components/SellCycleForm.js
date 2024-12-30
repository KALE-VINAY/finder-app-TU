// components/SellCycleForm.js
import React, { useState } from 'react';
import { storage, db } from '../firebase/firebaseConfig.js';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const SellCycleForm = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    brand: '',
    modelName: '',
    price: '',
    contactNumber: '',
  });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentUser) {
      alert('Please login to sell a cycle');
      navigate('/login');
      return;
    }

    setLoading(true);

    try {
      // Upload image to Firebase Storage
      const imageRef = ref(storage, `cycles/${Date.now()}-${image.name}`);
      const uploadResult = await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(uploadResult.ref);

      // Add document to Firestore
      await addDoc(collection(db, 'cycles'), {
        ...formData,
        imageUrl,
        userId: currentUser.uid,
        createdAt: serverTimestamp(),
      });

      alert('Cycle listed successfully!');
      setFormData({
        brand: '',
        modelName: '',
        price: '',
        contactNumber: '',
      });
      setImage(null);
      navigate('/');
    } catch (error) {
      console.error('Error listing cycle:', error);
      alert('Error listing cycle. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Sell Your Cycle</h2>
      <form onSubmit={handleSubmit} className="max-w-lg">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Brand</label>
          <input
            type="text"
            value={formData.brand}
            onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Model Name</label>
          <input
            type="text"
            value={formData.modelName}
            onChange={(e) => setFormData({ ...formData, modelName: e.target.value })}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Price</label>
          <input
            type="number"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Contact Number</label>
          <input
            type="tel"
            value={formData.contactNumber}
            onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Cycle Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
        >
          {loading ? 'Listing...' : 'List Cycle'}
        </button>
      </form>
    </div>
  );
};

export default SellCycleForm;