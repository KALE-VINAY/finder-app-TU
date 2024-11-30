import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HostelCanteenList = () => {
  const [hostels, setHostels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch hostel data from backend
  useEffect(() => {
    const fetchHostelData = async () => {
      try {
        // Replace with your actual backend API endpoint
        const response = await axios.get('https://your-backend-api.com/books');
        
        // Assuming the backend returns an array of hostel objects
        setHostels(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch hostel data');
        setLoading(false);
        console.error('Fetching hostel data error:', err);
      }
    };

    // Initial fetch
    fetchHostelData();

    // Optional: Set up real-time updates via WebSocket or periodic polling
    const intervalId = setInterval(fetchHostelData, 30000); // Fetch every 30 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Render loading state
  if (loading) {
    return <div>Loading hostel canteens...</div>;
  }

  // Render error state
  if (error) {
    return <div>{error}</div>;
  }

  // Render hostel list
  return (
    <div className="hostel-canteen-list">
      {hostels.map((hostel, index) => (
        <div 
          key={index} 
          className={`hostel-card ${hostel.status === 'Open' ? 'border-green-500' : 'border-red-500'}`}
        >
          <div className="hostel-image">
            <img src={hostel.imageUrl} alt={hostel.name} />
            {hostel.promoted && (
              <span className="promoted-badge">Promoted</span>
            )}
          </div>
          
          <div className="hostel-details">
            <h3>{hostel.name}</h3>
            <div className="status-badge">
              <span 
                className={`
                  status-indicator 
                  ${hostel.status === 'Open' ? 'bg-green-500' : 'bg-red-500'}
                `}
              >
                {hostel.status}
              </span>
            </div>
            
            <div className="hostel-info">
              <p>{hostel.cuisines}</p>
              <div className="info-row">
                <span>⭐ {hostel.rating}</span>
                <span>• {hostel.time}</span>
                <span>• {hostel.price}</span>
              </div>
              
              {hostel.discount && (
                <div className="discount-badge">
                  {hostel.discount}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HostelCanteenList;