import React from 'react';
import { db, storage } from '../firebase/firebaseConfig';
import { deleteDoc, doc } from 'firebase/firestore';
import { ref, deleteObject } from 'firebase/storage';
import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa'; // Importing WhatsApp icon

// Utility function to calculate "time ago"
const calculateTimeAgo = (createdAt) => {
  let timestamp;

  // Check if createdAt is a Firestore Timestamp
  if (createdAt?.toDate) {
    timestamp = createdAt.toDate(); // Convert Firestore Timestamp to JavaScript Date
  } else {
    timestamp = new Date(createdAt); // Assume it's an ISO string or standard Date
  }

  const now = new Date();
  const differenceInSeconds = Math.floor((now - timestamp) / 1000);

  if (differenceInSeconds < 60) {
    return `${differenceInSeconds} seconds ago`;
  } else if (differenceInSeconds < 3600) {
    const minutes = Math.floor(differenceInSeconds / 60);
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else if (differenceInSeconds < 86400) {
    const hours = Math.floor(differenceInSeconds / 3600);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else {
    const days = Math.floor(differenceInSeconds / 86400);
    return `${days} day${days > 1 ? 's' : ''} ago`;
  }
};

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

  // Calculate time ago
  const timeAgo = calculateTimeAgo(cycle.createdAt);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={cycle.imageUrl}
        alt={cycle.modelName}
        className="w-full h-48 object-fill"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold">{cycle.modelName}</h3>
          <p className="text-gray-600 mb-2"> {timeAgo}</p>
        </div>
        <div className="flex flex-wrap">
          <p className="text-gray-600 mr-2 mb-0">Description: </p>
          <p className="text-gray-600 mb-2">{cycle.brand}</p>
        </div>
        <p className="text-gray-600 mb-2">Price: ₹{cycle.price}</p>

        <div className="flex items-center space-x-4">
          {/* Call Now Button */}
          <a
            href={`tel:${cycle.contactNumber}`}
            className="flex items-center text-red-600 hover:text-red-800 text-sm sm:text-base"
          >
            <Phone className="w-4 h-4 mr-1" />
            Call Now
          </a>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/91${cycle.contactNumber}?text=Hello%20there,%20I%27m%20interested%20in%20your%20product%20${cycle.modelName}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-green-600 hover:text-green-800 text-sm sm:text-base"
          >
            <FaWhatsapp className="w-4 h-4 mr-1" />
            Message
          </a>
        </div>

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