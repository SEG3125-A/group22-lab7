// Home.js
import React from "react";
import Progress from "../components/progress";

function Book() {
  return (
    <div className="h-screen">
        <div name='progress'>
        <Progress value={10}/>
        </div>




        <div name='body' className="flex h-screen">
            <div name='calander' className='flex-1 p-4 border border-gray-200'>
                <input type="date"/>
            </div>
            <div name='times' className='flex-1 p-4 border border-gray-200'>
                <div name='times-1'>
                    <button className="btn">9:00 AM</button>
                    <button className="btn">10:00 AM</button>
                    <button className="btn">11:00 AM</button>
                    <button className="btn">12:00 PM</button>
                    <button className="btn">1:00 PM</button>
                </div>
                <div name='times-2'>
                    <button className="btn">2:00 PM</button>
                    <button className="btn">3:00 PM</button>
                    <button className="btn">4:00 PM</button>
                    <button className="btn">5:00 PM</button>
                    <button className="btn">6:00 PM</button>
                </div>
            </div>

        </div>
    </div>
  )
  ;
}

export default Book