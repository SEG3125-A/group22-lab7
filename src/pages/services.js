// Home.js
import React from "react";
import Checkoutheader from "../components/checkoutheader";

function Services() {
  return (
    <div>
        <div name='progress'>
        <Checkoutheader progress={35}/>
        </div>

        <div className="flex h-screen">
            <div name='services' className='flex-1 p-4 border border-gray-200'>
                <input type="checkbox" id="cut" name="service" value="cut"/>
                <label for="cut">Cut (25$)
                <img src="cut.jpg" className="max-w-48"/>
                </label><br/>
                <input type="checkbox" id="color" name="service" value="color"/>
                <label for="color">Color (25$)
                <img src="color.jpg" className="max-w-48"/></label><br/>
                <input type="checkbox" id="straighten" name="service" value="straighten"/>
                <label for="straighten">Straighten (15$)
                <img src="straight.jpg" className="max-w-48"/></label><br/>
                <input type="checkbox" id="curl" name="service" value="curl"/>
                <label for="curl">Curl (15$)
                <img src="curl.jpg" className="max-w-48"/></label><br/>
            </div>

            <div name='stylists' className='flex-1 p-4 border border-gray-200'>
                <input type="radio" id="rachel" name="stylist" value="rachel"/>
                <label for="rachel">Rachel
                <img src="rachel.jpg" className="max-w-48"/></label><br/>
                <input type="radio" id="sarah" name="stylist" value="sarah"/>
                <label for="sarah">Sarah
                <img src="sarah.webp" className="max-w-48"/>
                </label><br/>
                <input type="radio" id="jen" name="stylist" value="jen"/>
                <label for="jen">Jen
                <img src="jen.jpg" className="max-w-48"/>
                </label><br/>
            </div>
        </div>
    </div>
  )
  ;
}

export default Services