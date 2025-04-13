// task 2
import React, { useState, useEffect } from 'react'; // import react
import TourCard from './TourCard'; // import tour card

const url = "https://course-api.com/react-tours-project"; // api url

const Gallery = ({ tours, setTours, onRemove }) => { // gallery component
    const [loading, setLoading] = useState(true); // loading state
    const [error, setError] = useState(false); // error state
    
    useEffect(() => {
        const fetchTours = async () => {
          try {
            const response = await fetch('https://course-api.com/react-tours-project'); // fetch data from api
            if (!response.ok) throw new Error('Failed to fetch tours');
            const data = await response.json();
            setTours(data);
        };

        fetchTours();
  }, [setTours]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (tours.length === 0) return <div className="no-tours">No tours left. Refresh the page to see them again.</div>;

  return (
    <div className="gallery">
      {tours.map(tour => (
        <TourCard key={tour.id} {...tour} onRemove={onRemoveTour} />
      ))}
    </div>
  );
};

export default Gallery; // export gallery