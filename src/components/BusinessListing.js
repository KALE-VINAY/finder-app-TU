import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, deleteDoc, doc, query, where } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebaseConfig';
import { Trash2, Filter } from 'lucide-react';

const BusinessListing = () => {
  const [businesses, setBusinesses] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState({});
  const [showUserBusinesses, setShowUserBusinesses] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
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
  const [deleteLoading, setDeleteLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBusinesses();
    window.scrollTo(0, 0);
  }, []);

  const fetchBusinesses = async () => {
    try {
      let businessQuery;
      if (showUserBusinesses && auth.currentUser) {
        businessQuery = query(
          collection(db, 'businesses'),
          where('ownerId', '==', auth.currentUser.uid)
        );
      } else if (selectedCategory) {
        businessQuery = query(
          collection(db, 'businesses'),
          where('category', '==', selectedCategory)
        );
      } else {
        businessQuery = collection(db, 'businesses');
      }

      const snapshot = await getDocs(businessQuery);
      const businessList = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setBusinesses(businessList);

      // Extract unique categories
      const uniqueCategories = [...new Set(businessList.map(business => business.category))];
      setCategories(uniqueCategories);
    } catch (error) {
      console.error('Error fetching businesses:', error);
    }
  };

  const handleDeleteBusiness = async (e, businessId) => {
    e.stopPropagation(); // Prevent navigation when clicking delete
    if (window.confirm('Are you sure you want to delete this business?')) {
      setDeleteLoading(true);
      try {
        await deleteDoc(doc(db, 'businesses', businessId));
        await fetchBusinesses();
      } catch (error) {
        console.error('Error deleting business:', error);
        alert('Error deleting business. Please try again.');
      } finally {
        setDeleteLoading(false);
      }
    }
  };

  const handleImageLoad = (businessId) => {
    setImagesLoaded(prev => ({
      ...prev,
      [businessId]: true
    }));
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const imageUrls = await Promise.all(
        formData.images.map(async (image) => {
          const imageRef = ref(storage, `business-images/${Date.now()}-${image.name}`);
          await uploadBytes(imageRef, image);
          return await getDownloadURL(imageRef);
        })
      );

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
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-3xl mb-3 font-serif font-bold">Student Businesses</h1>
        <div className="flex flex-row sm:flex-row gap-4 w-full sm:w-auto">
          {/* Filter Dropdown
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 cursor-pointer hover:border-blue-500 transition-colors"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <Filter className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
          </div> */}

          {/* View Your Businesses Button */}
          {auth.currentUser && (
            <button
              onClick={() => setShowUserBusinesses(!showUserBusinesses)}
              className={` px-3 py-2 md:px-4 md:py-2 rounded-md transition-colors ${
                showUserBusinesses
                  ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {showUserBusinesses ? 'Show All Businesses' : 'View Your Businesses'}
            </button>
          )}

          {/* List Your Business Button */}
          <button
            className="bg-blue-600 text-white px-3 py-2 md:px-4 md:py-2 rounded-md hover:bg-blue-700 transition-colors"
            onClick={() => document.getElementById('business-form').scrollIntoView({ behavior: 'smooth' })}
          >
            List Your Business
          </button>
        </div>
      </div>

      {/* Businesses Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {businesses.length === 0 ? (
          <div className="col-span-full text-center py-8 text-gray-500">
            No businesses found.
          </div>
        ) : (
          businesses.map((business) => (
            <div
              key={business.id}
              className="bg-white rounded-lg shadow-lg p-4 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl relative group"
              onClick={() => navigate(`/business/${business.id}`, { state: business })}
            >
              <div className="relative h-40 mb-4">
                {!imagesLoaded[business.id] && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-md" />
                )}
                {business.images[0] && (
                  <img
                    src={business.images[0]}
                    alt={business.name}
                    className={`w-full h-full object-cover rounded-md transition-opacity duration-300 ${
                      imagesLoaded[business.id] ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => handleImageLoad(business.id)}
                  />
                )}
              </div>
              <div className={`transition-opacity duration-300 ${imagesLoaded[business.id] ? 'opacity-100' : 'opacity-70'}`}>
                <h2 className="text-xl font-semibold">{business.name}</h2>
                <p className="text-gray-500">{business.category}</p>
              </div>

              {/* Delete Button - Only visible for business owner */}
              {auth.currentUser?.uid === business.ownerId && (
                <button
                  onClick={(e) => handleDeleteBusiness(e, business.id)}
                  disabled={deleteLoading}
                  className="absolute top-2 right-2 p-2 mb-2 bg-red-100 rounded-full opacity-100 transition-opacity hover:bg-red-200"
                  title="Delete business"
                >
                  <Trash2 className="w-4 h-4 text-red-600" />
                </button>
              )}
            </div>
          ))
        )}
      </div>

      {/* Business Form */}
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
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleInputChange}
            rows="4"
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          ></textarea>
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="text"
            name="contactNumber"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="url"
            name="instagramLink"
            placeholder="Instagram Link"
            value={formData.instagramLink}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <div className="w-full px-4    " 
            >
              <p className='text-sm text-blue-500'>can upload upto three images</p>
              </div>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors ${
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