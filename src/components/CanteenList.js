import React, { useEffect, useState } from 'react';
import { fetchCanteens } from '../api/fetchCanteens';

const CanteenList = () => {
  const [canteens, setCanteens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCanteens();
        setCanteens(data);
      } catch (err) {
        setError('Failed to fetch canteen data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {canteens.map((canteen, index) => (
        <div
          key={canteen.id}
          className="p-4 border border-gray-200 rounded shadow"
        >
          <h2 className="text-lg font-bold">{canteen.name}</h2>
          <p>Status: {canteen.status}</p>
        </div>
      ))}
    </div>
  );
};

export default CanteenList;
