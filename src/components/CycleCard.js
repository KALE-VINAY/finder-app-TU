// components/CycleCard.js
import React from 'react';
// import { db, storage } from '../firebase/config';
import { db , storage } from '../firebase/firebaseConfig';
import { deleteDoc, doc } from 'firebase/firestore';
import { ref, deleteObject } from 'firebase/storage';

const CycleCard = ({ cycle, isOwner }) => {
  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this listing?')) {
      try {
        // Delete the image from Storage
        const imageRef = ref(storage, cycle.imageUrl);
        await deleteObject(imageRef);

        // Delete the document from Firestore
        await deleteDoc(doc(db, 'cycles', cycle.id));
      } catch (error) {
        console.error('Error deleting cycle:', error);
        alert('Error deleting cycle. Please try again.');
      }
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={cycle.imageUrl}
        alt={cycle.modelName}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{cycle.modelName}</h3>
        <p className="text-gray-600 mb-2">Brand: {cycle.brand}</p>
        <p className="text-gray-600 mb-2">Price: ₹{cycle.price}</p>
        <p className="text-gray-600">Contact: {cycle.contactNumber}</p>
        {isOwner && (
          <button
            onClick={handleDelete}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Delete Listing
          </button>
        )}
      </div>
    </div>
  );
};

export default CycleCard;