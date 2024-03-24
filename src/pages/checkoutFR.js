import React, { useState } from "react";
import Checkoutheader from "../components/checkoutheader";
import { useNavigate } from 'react-router-dom';

function CheckoutFR() {

  let navigate = useNavigate();
  // For the following validation steps I learned from this site: https://leanylabs.com/blog/form-validation-in-react/

  // This is to store users’ input
  const [formFields, setFormFields] = useState({
    email: '',
    phone: '',
    credit: ''
  });
  const [errors, setErrors] = useState({});

  // Update the state every time a user enters (or deletes) values in the field
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormFields({ ...formFields, [id]: value });
  };

  // Validate all fields
  const validateFields = () => {
    const newErrors = {};
    if (!formFields.email.includes('@gmail.com')) {
      newErrors.email = 'Email must be an @example.com address.';
    }
    if (!formFields.phone.match(/^\d{3}-\d{3}-\d{4}$/)) {
      newErrors.phone = 'Phone format must be XXX-XXX-XXXX.';
    }
    if (formFields.credit.length < 8 || formFields.credit.length > 19) {
      newErrors.credit = 'Credit card number length is invalid.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Only submit form if valid
  const goToConfirmation = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const isValid = validateFields();
    if (isValid) {
      navigate('/confirmation');
    }
  }  

  return (
    <div>

        <div name='progress'>
        <Checkoutheader progress={95} next={'/checkoutFR'} back={'/productsFR'} lan={'/checkout'}/>
        </div>

        <form onSubmit={goToConfirmation}>
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
      <input type="email" id="email" value={formFields.email} onChange={handleChange} class="input" required />
      {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
      <label for="phone" class="block mb-2 text-sm font-medium text-black">Numéro de téléphone<small>Format: 123-456-7890</small></label>
      <input type="tel" id="phone" value={formFields.phone} onChange={handleChange} class="input" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
      {errors.phone && <div style={{ color: 'red' }}>{errors.phone}</div>}
      <label for="postal" class="block mb-2 text-sm font-medium text-black">Code Postal</label>
      <input type="text" id="postal" class="input" required />
    </div>
    <div className="flex-1">
      <label for="credit" class="block mb-2 text-sm font-medium text-black">Numéro de Carte de Crédit</label>
      <input type="number" id="credit" value={formFields.credit} onChange={handleChange} class="input" required />
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
    <button type="submit" className="btn">Vérifier</button>

    <br/>
  </div>
</div>
</form>
    </div>
  )
  ;
}

export default CheckoutFR