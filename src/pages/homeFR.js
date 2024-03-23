// Home.js
import React from "react";
import '../index.css'
import { useNavigate } from 'react-router-dom';

function HomeFR() {
  let navigate = useNavigate();

  const goToBook = () => {
    navigate('/bookFR'); // Replace '/book' with the path you want to navigate to
  };
  return (
    
    <div>
      <div name="header">
        <h1 class="font-bold text-left mx-2 my-8 text-3xl">Bienvenue chez Haircare</h1>
      </div>

<img src='banner.jpg' className="mx-auto block"/>

      <div name="Booking">
      <h2 className="text-2xl">Book an Appointment</h2>
        <button className='btn' onClick={goToBook}>Prenez rendez-vous</button>
      </div>
      
      <div name="Services">
      <h2 className="text-2xl mt-4">Nos services</h2>
        <h4>Coupe: 25$</h4>
        <h4>Couleur: 25$</h4>
        <h4>Redresser: 15$</h4>
        <h4>Boucle: 15$</h4>
      </div>
      
      <div name="Contact">
        <h2 className="text-2xl mt-4">Contactez-nous</h2>
        <h4>Téléphone: 613-XXX-XXX</h4>
        <h4>Email: contact@haircare.com</h4>
        <h4>Adresse: 19 Neverwinter Drive, Ottawa, Canada</h4>
      </div>
    </div>
  )
  ;
}



export default HomeFR