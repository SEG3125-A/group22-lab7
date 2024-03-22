// Home.js
import React from "react";
import '../index.css'
import { useNavigate } from 'react-router-dom';

function Home() {
  let navigate = useNavigate();

  const goToBook = () => {
    navigate('/book'); // Replace '/book' with the path you want to navigate to
  };
  return (
    
    <div>
      <div name="header">
        <h1 class="font-bold text-left mx-2 my-8 text-3xl">Welcome to Haircare</h1>
      </div>

<img src='banner.jpg' className="mx-auto block"/>

      <div name="Booking">
      <h2 className="text-2xl">Book an Appointment</h2>
        <button className='btn' onClick={goToBook}>Book</button>
      </div>
      
      <div name="Services">
      <h2 className="text-2xl mt-4">Our Services</h2>
        <h4>Cut: 25$</h4>
        <h4>Color: 25$</h4>
        <h4>Straighten: 15$</h4>
        <h4>Curl: 15$</h4>
      </div>
      
      <div name="Contact">
        <h2 className="text-2xl mt-4">Contact Us</h2>
        <h4>Phone: 613-XXX-XXX</h4>
        <h4>Email: contact@haircare.com</h4>
        <h4>Address: 19 Neverwinter Drive, Ottawa, Canada</h4>
      </div>
    </div>
  )
  ;
}



export default Home