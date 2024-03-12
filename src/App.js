import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from './pages/home'
import About from './pages/about'
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
