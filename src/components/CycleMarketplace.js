// CycleMarketplace.js
import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { db } from '../firebase'; // Adjust this path to your firebase config file
import { db } from '../utils/firebase';
const CycleMarketplace = () => {
  const [cycles, setCycles] = useState([]);
  const [formData, setFormData] = useState({
    ownerName: '',
    contactNumber: '',
    cycleBrand: '',
    cycleModel: '',
    price: '',
    description: '',
    image: null
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const storage = getStorage();

  useEffect(() => {
    fetchCycles();
  }, []);

  const fetchCycles = async () => {
    try {
      const cyclesCollection = collection(db, 'cycles');
      const cyclesSnapshot = await getDocs(cyclesCollection);
      const cyclesList = cyclesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setCycles(cyclesList);
    } catch (err) {
      setError('Failed to fetch cycles. Please try again.');
      console.error('Error fetching cycles:', err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setFormData(prev => ({
        ...prev,
        image: file
      }));
      setError('');
    } else {
      setError('Please select a valid image file.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      let imageUrl = '';
      if (formData.image) {
        console.log('Uploading image...');
        const storageRef = ref(storage, `cycle-images/${Date.now()}-${formData.image.name}`);
        try {
          await uploadBytes(storageRef, formData.image);
          imageUrl = await getDownloadURL(storageRef);
          console.log('Image uploaded successfully:', imageUrl);
        } catch (imageError) {
          console.error('Image upload error:', imageError);
          throw new Error(`Image upload failed: ${imageError.message}`);
        }
      }

      console.log('Adding to Firestore...');
      const cyclesCollection = collection(db, 'cycles');
      await addDoc(cyclesCollection, {
        ownerName: formData.ownerName,
        contactNumber: formData.contactNumber,
        cycleBrand: formData.cycleBrand,
        cycleModel: formData.cycleModel,
        price: parseFloat(formData.price),
        description: formData.description,
        imageUrl,
        createdAt: new Date().toISOString(),
      });

      console.log('Document added successfully');
      // ... rest of the success handling
    } catch (err) {
      console.error('Detailed error:', err);
      setError(`Failed to list cycle: ${err.message}`);
    } finally {
      setLoading(false);
    }
};

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Sell Your Cycle Form */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Sell Your Cycle</h2>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Number
              </label>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleInputChange}
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit phone number"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cycle Brand
                </label>
                <input
                  type="text"
                  name="cycleBrand"
                  value={formData.cycleBrand}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cycle Model
                </label>
                <input
                  type="text"
                  name="cycleModel"
                  value={formData.cycleModel}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price (₹)
              </label>
              <input
                type="number"
                name="price"
                min="0"
                step="0.01"
                value={formData.price}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Cycle Image
              </label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 px-4 rounded-md text-white font-medium ${
                loading 
                  ? 'bg-blue-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {loading ? 'Listing Cycle...' : 'List Cycle for Sale'}
            </button>
          </form>
        </div>

        {/* Available Cycles List */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold mb-4">Available Cycles</h2>
          {cycles.length === 0 ? (
            <div className="bg-white rounded-lg shadow-lg p-6 text-center text-gray-500">
              No cycles available for sale at the moment.
            </div>
          ) : (
            cycles.map((cycle) => (
              <div key={cycle.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="p-6">
                  {cycle.imageUrl && (
                    <img
                      src={cycle.imageUrl}
                      alt={`${cycle.cycleBrand} ${cycle.cycleModel}`}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                  )}
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">
                      {cycle.cycleBrand} {cycle.cycleModel}
                    </h3>
                    <p className="text-green-600 font-semibold">
                      ₹{cycle.price.toLocaleString()}
                    </p>
                    <p className="text-gray-600">{cycle.description}</p>
                    <div className="pt-2 border-t mt-2">
                      <p className="mb-1">
                        <span className="font-semibold">Seller:</span> {cycle.ownerName}
                      </p>
                      <p>
                        <span className="font-semibold">Contact:</span>{' '}
                        <a 
                          href={`tel:${cycle.contactNumber}`}
                          className="text-blue-600 hover:underline"
                        >
                          {cycle.contactNumber}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CycleMarketplace;