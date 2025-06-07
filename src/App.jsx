import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import CategoryListing from './pages/CategoryListing';
import PhotographerProfile from './pages/PhotographerProfile';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photographer/:id" element={<PhotographerProfile/>} />
      </Routes>
    </Router>
  );
};

export default App;
