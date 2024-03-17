import React from "react";
import Checkoutheader from "../components/checkoutheader";
// <img src={productPlaceholder} alt="Head & Shoulders Image" />

function Products() {
  return (
    <div>
        <h2>Select your products</h2>
        <div name='progress'>
            <Checkoutheader progress={55}/>
        </div>
      

        <div class="container" className="flex h-screen">
            <div className='flex-1 p-4 border border-gray-200'>
                <h3>Shampoo</h3>
                <div class="shampoo1">
                    <input type="checkbox" id="h&s" name="shampoo_selection"/>
                    <label for="h&s">Head & Shoulders</label><br/>
                    <div class="shampoo_price1">$14.99</div>
                </div>
                <div class="shampoo2">
                    <input type="checkbox" id="pantene" name="shampoo_selection"/>
                    <label for="pantene">Pantene</label><br/>
                    <div class="shampoo_price2">$12.99</div>
                </div>
                <div class="shampoo3">
                    <input type="checkbox" id="dove" name="shampoo_selection"/>
                    <label for="dove">Dove</label><br/>
                    <div class="shampoo_price3">$12.99</div>
                </div>
            </div>


            <div className='flex-1 p-4 border border-gray-200'>
                <h3>Conditioner</h3>
                <div class="product1">
                    <input type="checkbox" id="tresemme" name="conditioner_selection"/>
                    <label for="tresemme">TRESemmé</label><br/>
                    <div class="price1">$16.99</div>
                </div>
                <div class="product2">
                    <input type="checkbox" id="pantene_pro" name="conditioner_selection"/>
                    <label for="pantene_pro">Pantene Pro-V</label><br/>
                    <div class="price2">$11.99</div>
                </div>
                <div class="product3">
                    <input type="checkbox" id="ogx" name="conditioner_selection"/>
                    <label for="ogx">OGX</label><br/>
                    <div class="price3">$16.99</div>
                </div>
            </div>

            <div className='flex-1 p-4 border border-gray-200'>
                <h3>Styling</h3>
                <div class="styling1">
                    <input type="checkbox" id="hairspray" name="styling_selection"/>
                    <label for="hairspray">Hairspray</label><br/>
                    <div class="styling_price1">$15.99</div>
                </div>
                <div class="styling2">
                    <input type="checkbox" id="mousse" name="styling_selection"/>
                    <label for="mousse">Mousse</label><br/>
                    <div class="styling_price2">$8.99</div>
                </div>
                <div class="styling3">
                    <input type="checkbox" id="serum" name="styling_selection"/>
                    <label for="serum">Serum</label><br/>
                    <div class="styling_price3">$7.99</div>
                </div>
            </div>
        </div>
    </div>
  )
  ;
}

export default Products