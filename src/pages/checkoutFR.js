// Home.js
import React from "react";
import Checkoutheader from "../components/checkoutheader";

function CheckoutFR() {
  return (
    <div>

        <div name='progress'>
        <Checkoutheader progress={95} next={'/checkoutFR'} back={'/productsFR'} lan={'/checkout'}/>
        </div>

        <div className="flex h-screen">
  <div name='services' className='flex-grow p-4 border border-gray-200' style={{ flexBasis: '75%' }}>
    <p>Informations personnelles</p>
  <div className="flex w-full">
  <div className="flex-1 ">
      <label for="first_name" class="block mb-2 text-sm font-medium text-black">Prénom</label>
      <input type="text" id="first_name" class="input" required />
      <label for="last_name" class="block mb-2 text-sm font-medium text-black">Nom de famille</label>
      <input type="text" id="last_name" class="input" required />
      <label for="address" class="block mb-2 text-sm font-medium text-black">Adresse</label>
      <input type="text" id="address" class="input" required />
      <label for="province" class="block mb-2 text-sm font-medium text-black">Province</label>
      <input type="text" id="province" class="input" required />

    </div>
    <div className="flex-1">
      <label for="email" class="block mb-2 text-sm font-medium text-black">Email</label>
      <input type="text" id="email" class="input" required />
      <label for="phone" class="block mb-2 text-sm font-medium text-black">Numéro de téléphone</label>
      <input type="tel" id="phone" class="input" required />
      <label for="postal" class="block mb-2 text-sm font-medium text-black">Code Postal</label>
      <input type="text" id="postal" class="input" required />
    </div>
    <div className="flex-1">
      <label for="credit" class="block mb-2 text-sm font-medium text-black">Numéro de Carte de Crédit</label>
      <input type="text" id="credit" class="input" required />
      <label for="exp" class="block mb-2 text-sm font-medium text-black">Date d'expiration de la carte de crédit</label>
      <input type="date" id="exp" class="input" required />
      <label for="security" class="block mb-2 text-sm font-medium text-black">Code de sécurité de la carte de crédit</label>
      <input type="text" id="security" class="input" required />
      <label for="card_name" class="block mb-2 text-sm font-medium text-black">Nom sur la carte</label>
      <input type="text" id="card_name" class="input" required />
    </div>
  </div>
  </div>

  <div name='stylists' className='flex-grow p-4 border border-gray-200' style={{ flexBasis: '25%' }}>
    <p>Price</p>
    <p className="text-left font-bold my-8">Frais de service:</p>
    <p className="text-left font-bold my-8">Frais de produits:</p>
    <p className="text-left font-bold my-8">Impôt:</p>
    <p className="text-left font-bold my-8">Total:</p>
    <button className="btn">Vérifier</button>

    <br/>
  </div>
</div>
    </div>
  )
  ;
}

export default CheckoutFR