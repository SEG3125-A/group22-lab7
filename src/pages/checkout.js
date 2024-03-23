// Home.js
import React from "react";
import Checkoutheader from "../components/checkoutheader";

function Checkout() {
  return (
    <div>

        <div name='progress'>
        <Checkoutheader progress={95} next={'/checkout'} back={'/products'}/>
        </div>

        <div className="flex h-screen">
  <div name='services' className='flex-grow p-4 border border-gray-200' style={{ flexBasis: '75%' }}>
    <p>Personal Information</p>
  <div className="flex w-full">
  <div className="flex-1 ">
      <label for="first_name" class="block mb-2 text-sm font-medium text-black">First name</label>
      <input type="text" id="first_name" class="input" required />
      <label for="last_name" class="block mb-2 text-sm font-medium text-black">Last name</label>
      <input type="text" id="last_name" class="input" required />
      <label for="address" class="block mb-2 text-sm font-medium text-black">Address</label>
      <input type="text" id="address" class="input" required />
      <label for="province" class="block mb-2 text-sm font-medium text-black">Province</label>
      <input type="text" id="province" class="input" required />

    </div>
    <div className="flex-1">
      <label for="email" class="block mb-2 text-sm font-medium text-black">Email</label>
      <input type="text" id="email" class="input" required />
      <label for="phone" class="block mb-2 text-sm font-medium text-black">Phone Number</label>
      <input type="tel" id="phone" class="input" required />
      <label for="postal" class="block mb-2 text-sm font-medium text-black">Postal Code</label>
      <input type="text" id="postal" class="input" required />
    </div>
    <div className="flex-1">
      <label for="credit" class="block mb-2 text-sm font-medium text-black">Credit Card Number</label>
      <input type="text" id="credit" class="input" required />
      <label for="exp" class="block mb-2 text-sm font-medium text-black">Credit Card Expiration Date</label>
      <input type="date" id="exp" class="input" required />
      <label for="security" class="block mb-2 text-sm font-medium text-black">Credit Card Security Code</label>
      <input type="text" id="security" class="input" required />
      <label for="card_name" class="block mb-2 text-sm font-medium text-black">Name on Card</label>
      <input type="text" id="card_name" class="input" required />
    </div>
  </div>
  </div>

  <div name='stylists' className='flex-grow p-4 border border-gray-200' style={{ flexBasis: '25%' }}>
    <p>Price</p>
    <p className="text-left font-bold my-8">Service Fee:</p>
    <p className="text-left font-bold my-8">Products Fee:</p>
    <p className="text-left font-bold my-8">Tax:</p>
    <p className="text-left font-bold my-8">Total:</p>
    <button className="btn">Checkout</button>

    <br/>
  </div>
</div>
    </div>
  )
  ;
}

export default Checkout