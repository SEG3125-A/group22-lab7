import './App.css';
import React from "react";
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from './pages/home'
import Navbar from './components/navbar';
import Book from './pages/book'
import Services from './pages/services';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
