import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Contact from './contact';
import Navbar from './components/navbar';
import Reservation from './components/reservation';
import ScrollToTopButton from './components/scrollbutton';
import Spinner from './components/spinner' // Importing the spinner component

const App = () => {
  const [loading, setLoading] = useState(true); // State to manage the spinner

  // UseEffect to handle the spinner timing
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 3 seconds
    }, 1000);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Spinner />; // Display the spinner while loading is true
  }

  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
      </Router>
      <ScrollToTopButton />
    </div>
  );
};

export default App;
