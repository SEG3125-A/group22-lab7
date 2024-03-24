import './App.css';
import React from "react";
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/navbar';
import Home from './pages/home'
import Book from './pages/book'
import Services from './pages/services';
import Products from './pages/products';
import Checkout from './pages/checkout';
import HomeFR from './pages/homeFR'
import BookFR from './pages/bookFR'
import ServicesFR from './pages/servicesFR';
import ProductsFR from './pages/productsFR';
import CheckoutFR from './pages/checkoutFR';
import Confirmation from './pages/confirmation';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/Fr" element={<HomeFR />} />
        <Route path="/bookFR" element={<BookFR />} />
        <Route path="/servicesFR" element={<ServicesFR />} />
        <Route path="/productsFR" element={<ProductsFR />} />
        <Route path="/checkoutFR" element={<CheckoutFR />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
