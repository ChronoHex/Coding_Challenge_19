// task 1
import React, { useState } from 'react'; // import react
import Gallary from './components/Gallery'; // import gallery
import './styles/styles.css'; // import styles

//app component
function App() {
  const [tours, setTours] = useState([]); // holding states of tour's data

  const removeTour = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id)); // removes tours by id
  };

  return (
    <main>
      <h1>Current Tours available</h1>
      <Gallary tours={tours} setTours={setTours} onRemove={removeTour} /> 
    </main>
  ); // return component
}

export default App; // exports app
