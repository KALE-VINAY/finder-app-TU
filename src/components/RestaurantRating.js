import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { db } from '../firebase/firebaseConfig';
import { 
  collection, 
  addDoc, 
  query, 
  where, 
  getDocs 
} from 'firebase/firestore';

const RestaurantRating = ({ restaurantId }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [totalRatings, setTotalRatings] = useState(0);
  const [hasRated, setHasRated] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [thankYouMessage, setThankYouMessage] = useState(false);

  useEffect(() => {
    const fetchRatings = async () => {
      const ratingsRef = collection(db, 'ratings');
      const q = query(ratingsRef, where('restaurantId', '==', restaurantId));
      const querySnapshot = await getDocs(q);
      
      let total = 0;
      let count = 0;
      
      querySnapshot.forEach((doc) => {
        total += doc.data().rating;
        count++;
      });

      setTotalRatings(count);
      setAverageRating(count > 0 ? (total / count).toFixed(1) : 0);
    };

    fetchRatings();
  }, [restaurantId]);

  useEffect(() => {
    const checkUserRating = async () => {
      const userId = localStorage.getItem('userId');
      if (userId) {
        const ratingsRef = collection(db, 'ratings');
        const q = query(
          ratingsRef, 
          where('restaurantId', '==', restaurantId),
          where('userId', '==', userId)
        );
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          setHasRated(true);
          setRating(querySnapshot.docs[0].data().rating);
        }
      }
    };

    checkUserRating();
  }, [restaurantId]);

  const handleSubmitRating = async () => {
    if (hasRated || userRating === 0) return;

    let userId = localStorage.getItem('userId');
    if (!userId) {
      userId = Math.random().toString(36).substr(2, 9);
      localStorage.setItem('userId', userId);
    }

    try {
      await addDoc(collection(db, 'ratings'), {
        restaurantId,
        userId,
        rating: userRating,
        timestamp: new Date()
      });

      setHasRated(true);
      setRating(userRating);

      // Recalculate ratings
      const ratingsRef = collection(db, 'ratings');
      const q = query(ratingsRef, where('restaurantId', '==', restaurantId));
      const querySnapshot = await getDocs(q);
      
      let total = 0;
      let count = 0;
      
      querySnapshot.forEach((doc) => {
        total += doc.data().rating;
        count++;
      });

      setTotalRatings(count);
      setAverageRating(count > 0 ? (total / count).toFixed(1) : 0);
      setThankYouMessage(true);

      // Hide thank-you message after 3 seconds
      setTimeout(() => setThankYouMessage(false), 3000);
    } catch (error) {
      console.error("Error adding rating:", error);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-lg p-4 bg-white rounded-lg shadow md:max-w-md sm:max-w-sm">
      {/* Overall Rating */}
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex items-center space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-6 h-6 sm:w-5 sm:h-5 ${
                averageRating >= star ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
              }`}
            />
          ))}
          <span className="text-lg sm:text-base font-bold">{averageRating}</span>
          <span className="text-gray-500 text-sm sm:text-xs">({totalRatings} ratings)</span>
        </div>
      </div>

      {/* User Rating */}
      {!hasRated && (
        <div className="mt-4">
          <p className="text-gray-600 text-sm mb-2">Rate this restaurant:</p>
          <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                className="focus:outline-none cursor-pointer"
                onClick={() => setUserRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
              >
                <Star
                  className={`w-6 h-6 sm:w-5 sm:h-5 ${
                    (hover || userRating) >= star
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              </button>
            ))}
          </div>
          <button
            onClick={handleSubmitRating}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      )}

      {/* Thank You Message */}
      {thankYouMessage && (
        <p className="text-green-600 text-sm sm:text-xs mt-2">
          Thank you for rating this restaurant!
        </p>
      )}
    </div>
  );
};

export default RestaurantRating;
