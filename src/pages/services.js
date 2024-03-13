// Home.js
import React from "react";
import Progress from "../components/progress";

function Services() {
  return (
    <div>
        <div name='progress'>
            <Progress value={35}/>
        </div>

        <div className="flex h-screen">
            <div name='services' className='flex-1 p-4 border border-gray-200'>
                <input type="checkbox" id="cut" name="service" value="cut"/>
                <label for="cut">Cut (25$)</label><br/>
                <input type="checkbox" id="color" name="service" value="color"/>
                <label for="color">Color (25$)</label><br/>
                <input type="checkbox" id="straighten" name="service" value="straighten"/>
                <label for="straighten">Straighten (15$)</label><br/>
                <input type="checkbox" id="curl" name="service" value="curl"/>
                <label for="curl">Curl (15$)</label><br/>
            </div>

            <div name='stylists' className='flex-1 p-4 border border-gray-200'>
                <input type="checkbox" id="rachel" name="stylist" value="rachel"/>
                <label for="rachel">Rachel</label><br/>
                <input type="checkbox" id="sarah" name="stylist" value="sarah"/>
                <label for="sarah">Sarah</label><br/>
                <input type="checkbox" id="jen" name="stylist" value="jen"/>
                <label for="jen">Jen</label><br/>
            </div>
        </div>
    </div>
  )
  ;
}

export default Services