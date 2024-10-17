import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CarDetail from './components/CarDetail';
import Home from './Pages/Home';
import About from './Pages/About';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/civic" element={<CarDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
