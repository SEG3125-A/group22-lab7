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
    {/* Services content */}
  </div>

  <div name='stylists' className='flex-grow p-4 border border-gray-200' style={{ flexBasis: '25%' }}>
    {/* Stylists content */}
    <br/>
  </div>
</div>
    </div>
  )
  ;
}

export default Checkout