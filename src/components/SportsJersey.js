import { Phone } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { collection, addDoc, query, orderBy, onSnapshot,deleteDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebase/firebaseConfig';
import { useAuth } from '../contexts/AuthContext';

// Form Component
const ListApparelForm = ({ onClose }) => {
  const initialFormState = {
    title: '',
    description: '',
    sizeAvailability: '',
    material: '',
    price: '',
    orderDeadline: '',
    deliveryDetails: '',
    contactInfo: '',
    googleFormLink: '',
    images: [],
  };
  const { currentUser } = useAuth(); // Add this line to get current user
  const [formData, setFormData] = useState(initialFormState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
    setError(null);

    try {
      const imageUrls = await Promise.all(
        formData.images.map(async (image) => {
          const imageRef = ref(storage, `apparel-images/${Date.now()}-${image.name}`);
          const snapshot = await uploadBytes(imageRef, image);
          return await getDownloadURL(snapshot.ref);
        })
      );

      // Include user information in the document
      await addDoc(collection(db, 'apparel'), {
        ...formData,
        images: imageUrls,
        createdAt: new Date().toISOString(),
        userId: currentUser.uid,           // Add user ID
        userEmail: currentUser.email,      // Add user email
        contactInfo: currentUser.email     // Set contact info to user email
      });

      setFormData(initialFormState);
      alert('Apparel listed successfully!');
      onClose();
    } catch (error) {
      console.error('Error listing apparel:', error);
      setError('Failed to list apparel. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">List Your Apparel</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && <div className="text-red-600 text-sm">{error}</div>}
          
          <div className="space-y-4">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
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
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="sizeAvailability"
                placeholder="Sizes Available (S, M, L, XL)"
                value={formData.sizeAvailability}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />

              <input
                type="text"
                name="material"
                placeholder="Material"
                value={formData.material}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="number"
                name="price"
                placeholder="Price (₹)"
                value={formData.price}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />

              <input
                type="date"
                name="orderDeadline"
                value={formData.orderDeadline}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <textarea
              name="deliveryDetails"
              placeholder="Delivery Details"
              value={formData.deliveryDetails}
              onChange={handleInputChange}
              rows="2"
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />

            <input
              type="url"
              name="googleFormLink"
              placeholder="Google Form Link"
              value={formData.googleFormLink}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />

            <input
              type="file"
              multiple
              onChange={handleImageChange}
              accept="image/*"
              required
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />

            <div className="flex gap-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-300"
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

// Display Component
const DisplayApparel = () => {
  const [apparelList, setApparelList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showUserListings, setShowUserListings] = useState(false);
  const { currentUser } = useAuth();

  useEffect(() => {
    const q = query(collection(db, 'apparel'), orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const apparel = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setApparelList(apparel);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching apparel:", error);
        setError("Failed to load apparel items");
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'apparel', id));
    } catch (error) {
      console.error("Error deleting apparel:", error);
      setError("Failed to delete apparel item");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center py-8 text-red-600">{error}</div>;
  }

  const filteredApparelList =
    showUserListings && currentUser
      ? apparelList.filter(
          (item) =>
            item.userId === currentUser.uid ||
            item.userEmail === currentUser.email ||
            item.contactInfo === currentUser.email
        )
      : apparelList;

  const canDeleteItem = (item) => {
    return (
      currentUser &&
      (item.userId === currentUser.uid ||
        item.userEmail === currentUser.email ||
        item.contactInfo === currentUser.email)
    );
  };

  if (filteredApparelList.length === 0) {
    return (
      <div>
        {currentUser && (
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setShowUserListings(!showUserListings)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              {showUserListings ? 'Show All' : 'Your Listings'}
            </button>
          </div>
        )}
        <div className="text-center py-8 text-gray-600">
          {showUserListings
            ? "You haven't listed any apparel items yet."
            : "No apparel items found."}
        </div>
      </div>
    );
  }

  return (
    <div>
      {currentUser && (
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setShowUserListings(!showUserListings)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            {showUserListings ? 'Show All' : 'Your Listings'}
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredApparelList.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            <div className="relative w-full overflow-x-scroll flex space-x-4 rounded-t-lg">
              {item.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={item.title}
                  className="w-full h-auto object-cover rounded-t-lg flex-shrink-0"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/placeholder-image.jpg';
                  }}
                  style={{ minWidth: "100%" }}
                />
              ))}
            </div>


            <div className="p-4 space-y-3 flex-grow">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2">
                {item.description}
              </p>

              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  Sizes: {item.sizeAvailability}
                </p>
                <p className="text-sm text-gray-600">Material: {item.material}</p>
                <p className="text-xl font-bold text-blue-600">₹{item.price}</p>
              </div>
            </div>

            <div className="p-4 flex items-center justify-between border-t">
              <a
                href={item.googleFormLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-1/3 text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Order Now
              </a>

              {canDeleteItem(item) && (
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-600 w-1/3 text-white px-2 py-2  rounded-md hover:bg-red-700 transition-colors"
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


// Product Card Component
const ProductCard = ({ title, description, imagePlaceholder, phNumber }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
    <div className="aspect-square">
      <img
        src={imagePlaceholder}
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-4 space-y-3">
      <h4 className="font-semibold text-lg text-gray-800">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
      <a
        href={`tel:${phNumber}`}
        className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
      >
        <Phone className="w-4 h-4" />
        Call Now
      </a>
    </div>
  </div>
);

// Main Component
const SportsJersey = () => {

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    {
      title: "Sports Jerseys",
      items: [
        {
          title: "NB Sports Jersey",
          description: "Premium quality sports jerseys for all teams and athletes.",
          imagePlaceholder: "https://tse2.mm.bing.net/th?id=OIP.uL1o9UiXA3E8JSMhxAAmLgHaIj&pid=Api&P=0&h=180",
          phNumber: '9435119142',
        },
        {
          title: "SD Sports Jersey",
          description: "Top-tier custom sports jerseys crafted with premium materials.",
          imagePlaceholder: "https://tse1.mm.bing.net/th?id=OIP.amxWuPg3tjksQ8MttjF6KwHaHa&pid=Api&P=0&h=180",
          phNumber: '9864070455',
        },
        {
          title: "Champion Sports",
          description: "Complete range of premium sportswear and performance gear.",
          imagePlaceholder: "https://www.thechampioninternational.com/wp-content/uploads/2023/11/Untitled-design-2023-11-06T094527.268-300x300.jpg",
          phNumber: '7988428729',
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">University Store</h1>
              <p className="text-blue-100">Your one-stop shop for university apparel and sports gear</p>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="bg-white text-blue-600 px-6 py-2 rounded-md hover:bg-blue-50 transition-colors"
            >
              List Your Apparel
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto py-8 px-4 space-y-12">
        {showForm && <ListApparelForm onClose={() => setShowForm(false)} />}

        <section id="university-apparel">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">University Apparel</h2>
          <DisplayApparel />
        </section>

        {categories.map((category, index) => (
          <section key={index}>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 border-b-2 border-blue-100 pb-2">
              {category.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, itemIndex) => (
                <ProductCard key={itemIndex} {...item} />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export { ListApparelForm, DisplayApparel };
export default SportsJersey;












































// import { Phone } from 'lucide-react';
// import React, { useState, useEffect } from 'react';
// import { collection, addDoc, getDocs, query, orderBy, onSnapshot } from 'firebase/firestore';
// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { db, storage } from '../firebase/firebaseConfig';




// const ListApparelForm = () => {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     sizeAvailability: '',
//     material: '',
//     price: '',
//     orderDeadline: '',
//     deliveryDetails: '',
//     contactInfo: '',
//     googleFormLink: '',
//     images: [],
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleImageChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       images: [...prev.images, ...Array.from(e.target.files)],
//     }));
//   };

 
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       // First upload images
//       const imageUrls = await Promise.all(
//         formData.images.map(async (image) => {
//           try {
//             const imageRef = ref(storage, `apparel-images/${Date.now()}-${image.name}`);
//             const snapshot = await uploadBytes(imageRef, image);
//             return await getDownloadURL(snapshot.ref);
//           } catch (error) {
//             console.error('Error uploading image:', error);
//             throw new Error('Failed to upload image');
//           }
//         })
//       );

//       // Then add document to Firestore
//       const docRef = await addDoc(collection(db, 'apparel'), {
//         ...formData,
//         images: imageUrls,
//         createdAt: new Date().toISOString(),
//       });

//       console.log('Document written with ID: ', docRef.id);
//       alert('Apparel listed successfully!');
      
//       // Reset form
//       setFormData({
//         title: '',
//         description: '',
//         sizeAvailability: '',
//         material: '',
//         price: '',
//         orderDeadline: '',
//         deliveryDetails: '',
//         contactInfo: '',
//         googleFormLink: '',
//         images: [],
//       });

//     } catch (error) {
//       console.error('Error listing apparel:', error);
//       setError(error.message || 'Error listing apparel. Please try again.');
//       alert('Error: ' + (error.message || 'Failed to list apparel. Please try again.'));
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg space-y-4">
//       <h2 className="text-2xl font-bold">List Your Apparel</h2>
//       <input
//         type="text"
//         name="title"
//         placeholder="Title"
//         value={formData.title}
//         onChange={handleInputChange}
//         required
//         className="w-full px-4 py-2 border rounded-md"
//       />
//       <textarea
//         name="description"
//         placeholder="Description"
//         value={formData.description}
//         onChange={handleInputChange}
//         rows="4"
//         required
//         className="w-full px-4 py-2 border rounded-md"
//       ></textarea>
//       <input
//         type="text"
//         name="sizeAvailability"
//         placeholder="Sizes Available (e.g., S, M, L, XL)"
//         value={formData.sizeAvailability}
//         onChange={handleInputChange}
//         required
//         className="w-full px-4 py-2 border rounded-md"
//       />
//       <input
//         type="text"
//         name="material"
//         placeholder="Material (e.g., 100% cotton)"
//         value={formData.material}
//         onChange={handleInputChange}
//         required
//         className="w-full px-4 py-2 border rounded-md"
//       />
//       <input
//         type="number"
//         name="price"
//         placeholder="Price (incl. taxes)"
//         value={formData.price}
//         onChange={handleInputChange}
//         required
//         className="w-full px-4 py-2 border rounded-md"
//       />
//       <input
//         type="date"
//         name="orderDeadline"
//         placeholder="Order Deadline"
//         value={formData.orderDeadline}
//         onChange={handleInputChange}
//         required
//         className="w-full px-4 py-2 border rounded-md"
//       />
//       <textarea
//         name="deliveryDetails"
//         placeholder="Delivery Details"
//         value={formData.deliveryDetails}
//         onChange={handleInputChange}
//         rows="2"
//         required
//         className="w-full px-4 py-2 border rounded-md"
//       ></textarea>
//       <input
//         type="url"
//         name="googleFormLink"
//         placeholder="Google Form Link"
//         value={formData.googleFormLink}
//         onChange={handleInputChange}
//         required
//         className="w-full px-4 py-2 border rounded-md"
//       />
//       <input
//         type="file"
//         multiple
//         onChange={handleImageChange}
//         accept="image/*"
//         required
//         className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md cursor-pointer"
//       />
//       <button
//         type="submit"
//         className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
//         disabled={loading}
//       >
//         {loading ? 'Submitting...' : 'Submit'}
//       </button>
//     </form>
//   );
// };

// const DisplayApparel = () => {
//   const [apparelList, setApparelList] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Create a query to order by createdAt timestamp
//     const q = query(
//       collection(db, 'apparel'),
//       orderBy('createdAt', 'desc')
//     );

//     // Set up real-time listener
//     const unsubscribe = onSnapshot(q, 
//       (querySnapshot) => {
//         const apparel = querySnapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data()
//         }));
//         console.log("Fetched apparel:", apparel); // Debugging log
//         setApparelList(apparel);
//         setLoading(false);
//       },
//       (error) => {
//         console.error("Error fetching apparel:", error);
//         setError("Failed to load apparel items");
//         setLoading(false);
//       }
//     );

//     // Cleanup subscription on unmount
//     return () => unsubscribe();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center py-8">
//         <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="text-center py-8 text-red-600">
//         {error}
//       </div>
//     );
//   }

//   if (apparelList.length === 0) {
//     return (
//       <div className="text-center py-8 text-gray-600">
//         No apparel items found.
//       </div>
//     );
//   }

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
//       {apparelList.map((item) => (
//         <div key={item.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
//           <div className="relative aspect-w-16 aspect-h-9 mb-4">
//             <img
//               src={item.images[0]}
//               alt={item.title}
//               className="w-full h-40 object-cover rounded-lg"
//               onError={(e) => {
//                 e.target.onerror = null;
//                 e.target.src = '/placeholder-image.jpg'; // Add a placeholder image
//               }}
//             />
//           </div>
//           <h3 className="text-lg font-semibold line-clamp-1">{item.title}</h3>
//           <p className="text-sm text-gray-600 line-clamp-2 h-10 mb-2">{item.description}</p>
//           <div className="space-y-1">
//             <p className="text-sm text-gray-600">Sizes: {item.sizeAvailability}</p>
//             <p className="text-sm text-gray-600">Material: {item.material}</p>
//             <p className="font-bold text-lg">₹{item.price}</p>
//           </div>
          
//           <div className="mt-4 space-y-2">
//             <a
//               href={item.googleFormLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block w-full text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
//             >
//               Order Now
//             </a>
//             <p className="text-sm text-gray-500">
//               Order Deadline: {new Date(item.orderDeadline).toLocaleDateString()}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };
// export { ListApparelForm, DisplayApparel };


// const ProductCard = ({ title, price, description, imagePlaceholder, phNumber }) => (
//   <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
//     <div className="aspect-square w-full bg-gray-100">
//       <img
//         src={`${imagePlaceholder}`}
//         alt={title}
//         className="w-full h-full object-cover"
//       />
//     </div>
//     <div className="p-4">
//       <h4 className="font-semibold text-lg mb-2">{title}</h4>
//       <p className="text-gray-600 text-sm mb-2">{description}</p>
//       {/* <p className="text-yellow-800 font-bold">${price}</p> */}
//       <button className="mt-3 w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition-colors flex items-center justify-center gap-2">
//         {/* <ShoppingCart size={16} /> */}
//        <a href={`tel:${phNumber}`} className="flex items-center text-red-600 hover:text-red-800">
//                         <Phone className="w-4 h-4 mr-2" />
//                         {/* {phNumber} */} Call Now
//                       </a>

//       </button>
//     </div>
//   </div>
// );

// const SportsJersey = () => {

//    // Add this useEffect to scroll to top when component mounts or id changes
//    useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
  
//   const categories = [
//     {
//       title: "Sports Jerseys",
//       items: [
//         {
//           title: "NB Sports Jersey",
//           price: "49.99",
//           description: "Premium quality sports jerseys for all teams and athletes, delivering excellence in every stitch - call now to place your order.",
//           imagePlaceholder: "https://tse2.mm.bing.net/th?id=OIP.uL1o9UiXA3E8JSMhxAAmLgHaIj&pid=Api&P=0&h=180",
//           phNumber:'9435119142',
//         },
//         {
//           title: "SD Sports Jersey",
//           price: "54.99",
//           description: "Top-tier custom sports jerseys crafted with premium materials, perfect for teams seeking professional-grade uniforms and apparel.",
//           imagePlaceholder: "https://tse1.mm.bing.net/th?id=OIP.amxWuPg3tjksQ8MttjF6KwHaHa&pid=Api&P=0&h=180",
//           phNumber:'9864070455',
//         },
//         {
//           title: "Champion Sports",
//           price: "54.99",
//           description: "Complete range of premium sportswear including track suits, team jerseys, t-shirts, shorts, training bottoms, and performance gear for athletes and teams.",
//           imagePlaceholder: "https://www.thechampioninternational.com/wp-content/uploads/2023/11/Untitled-design-2023-11-06T094527.268-300x300.jpg",
//           phNumber:'7988428729',
//         }
//       ]
//     },
//     {
//       title: "Department T-Shirts",
//       items: [
//         {
//           title: "Engineering Dept",
//           price: "24.99",
//           description: "Computer Science department special edition",
//           imagePlaceholder: "https://tse2.mm.bing.net/th?id=OIP.Emyz1F6OlL_1XRGF0bkAdQHaHa&pid=Api&P=0&h=180"
//         },
//         {
//           title: "Business School",
//           price: "24.99",
//           description: "Business administration department t-shirt",
//           imagePlaceholder: "https://tse4.mm.bing.net/th?id=OIP.YpGZOXxgwZSfXUEMC5G6dAHaHa&pid=Api&P=0&h=180"
//         }
//       ]
//     },
//     // {
//     //   title: "University Apparel",
//     //   items: [
//     //     {
//     //       title: "Classic Hoodie",
//     //       price: "39.99",
//     //       description: "Comfortable university logo hoodie",
//     //       imagePlaceholder: "400/400"
//     //     },
//     //     {
//     //       title: "Campus T-Shirt",
//     //       price: "19.99",
//     //       description: "Classic university logo t-shirt",
//     //       imagePlaceholder: "400/400"
//     //     }
//     //   ]
//     // }
//   ];

//   return (
//     <div className="min-h-screen bg-yellow-50">
//       {/* Header */}
//       <header className="bg-yellow-500 text-white py-6 px-4 shadow-md">
//         <div className="max-w-6xl mx-auto">
//           <h1 className="text-3xl font-bold mb-2">University Store</h1>
//           <p className="text-yellow-100">Your one-stop shop for university apparel and sports gear</p>
//         </div>
//       </header>
//               {/* List Your Apparel Section */}
//               <section id="list-apparel" className="p-8 bg-gray-100">
//                 <h2 className="text-3xl font-bold mb-4">List Your Apparel</h2>
//                 <ListApparelForm />
//               </section>

//               {/* University Apparel Section */}
//               <section id="university-apparel" className="p-8 bg-white">
//                 <h2 className="text-3xl font-bold mb-4">University Apparel</h2>
//                 <DisplayApparel />
//               </section>
//       {/* Main Content */}
//       <main className="max-w-6xl mx-auto py-8 px-4">
//         {/* Categories */}
//         {categories.map((category, index) => (
//           <section key={index} className="mb-12">
//             <h2 className="text-2xl font-semibold mb-6 text-yellow-900 border-b-2 border-yellow-200 pb-2">
//               {category.title}
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {category.items.map((item, itemIndex) => (
//                 <ProductCard key={itemIndex} {...item} />
//               ))}
//             </div>
//           </section>
//         ))}
// {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSct-jXYMXjnrUMEnLO5ZUDqf7yg0gocBtdIqMRNrwuFoLTUTg/viewform?embedded=true" width="640" height="381" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
//         {/* Contact Information
//         <section className="bg-white rounded-lg shadow-md p-6 mt-8">
//           <h2 className="text-2xl font-semibold mb-6 text-yellow-900 border-b-2 border-yellow-200 pb-2">
//             Contact Information
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             <div className="flex items-center gap-3">
//               <Phone className="text-yellow-500" />
//               <div>
//                 <h3 className="font-semibold">Phone</h3>
//                 <p className="text-gray-600">(555) 123-4567</p>
//               </div>
//             </div>
//             <div className="flex items-center gap-3">
//               <Mail className="text-yellow-500" />
//               <div>
//                 <h3 className="font-semibold">Email</h3>
//                 <p className="text-gray-600">store@university.edu</p>
//               </div>
//             </div>
//             <div className="flex items-center gap-3">
//               <MapPin className="text-yellow-500" />
//               <div>
//                 <h3 className="font-semibold">Location</h3>
//                 <p className="text-gray-600">Student Center, Room 101</p>
//               </div>
//             </div>
//           </div>
//           <div className="mt-6 text-gray-600">
//             <p className="mb-2">Store Hours:</p>
//             <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
//             <p>Saturday: 10:00 AM - 4:00 PM</p>
//             <p>Sunday: Closed</p>
//           </div>
//         </section> */}
//       </main>

//       {/* Footer */}
//       {/* <footer className="bg-yellow-800 text-yellow-100 py-6 px-4 mt-12">
//         <div className="max-w-6xl mx-auto text-center">
//           <p>© 2024 University Store. All rights reserved.</p>
//           <p className="mt-2 text-sm">
//             Questions? Contact our support team for assistance.
//           </p>
//         </div>
//       </footer> */}
//     </div>
//   );
// };

// export default SportsJersey;