// Home.js
import React, { useState } from 'react';
import Checkoutheader from "../components/checkoutheader";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import AlwaysOpenDatePicker from '../components/alwaysopendatepicker';




function BookFR() {
  return (
    <div className="h-screen">
        <div name='header'> 
        <Checkoutheader progress={10} next={'/servicesFR'} back={'/FR'} lan={'/book'}/>
        </div>



        <div name='body'lang='en' className="flex h-screen">
            <div name='calander' className='flex-1 p-4 border border-gray-200'>
            <h1 className="text-lg">Choisissez un jour</h1>
                <AlwaysOpenDatePicker/>
            </div>
            <div name='times' className='flex-1 p-4 border border-gray-200'>
                <h1 className="text-lg">Choisissez une heure</h1>
                    <div name='times-1'>
                    <input type="radio" id="time1" name="time" value="9:00 AM" className=" my-8" />
                    <label htmlFor="time1" className="btn peer-checked:bg-blue-300">9:00 AM</label>

                    <input type="radio" id="time2" name="time" value="10:00 AM" className=" " />
                    <label htmlFor="time2" className="btn peer-checked:bg-blue-300">10:00 AM</label>

                    <input type="radio" id="time3" name="time" value="11:00 AM" className=" " />
                    <label htmlFor="time3" className="btn peer-checked:bg-blue-300">11:00 AM</label>

                    <input type="radio" id="time4" name="time" value="12:00 PM" className=" " />
                    <label htmlFor="time4" className="btn peer-checked:bg-blue-300">12:00 PM</label>

                    <input type="radio" id="time5" name="time" value="1:00 PM" className=" " />
                    <label htmlFor="time5" className="btn peer-checked:bg-blue-300">1:00 PM</label>
                </div>
                <div name='times-2'>
                    <input type="radio" id="time6" name="time" value="2:00 PM" className=" " />
                    <label htmlFor="time6" className="btn peer-checked:bg-blue-300">9:00 AM</label>

                    <input type="radio" id="time7" name="time" value="3:00 PM" className=" " />
                    <label htmlFor="time7" className="btn peer-checked:bg-blue-300">10:00 AM</label>

                    <input type="radio" id="time8" name="time" value="4:00 PM" className=" " />
                    <label htmlFor="time8" className="btn peer-checked:bg-blue-300">11:00 AM</label>

                    <input type="radio" id="time9" name="time" value="5:00 PM" className=" " />
                    <label htmlFor="time9" className="btn peer-checked:bg-blue-300">12:00 PM</label>

                    <input type="radio" id="time10" name="time" value="6:00 PM" className=" " />
                    <label htmlFor="time10" className="btn peer-checked:bg-blue-300">1:00 PM</label>
                </div>
            </div>

        </div>
    </div>
  )
  ;
}

export default BookFR