import React from "react";
import { useNavigate } from 'react-router-dom';


function Checkoutheader({progress, back, next}) {
  let navigate = useNavigate();

  const goNext = () => {
    navigate(next); // Replace '/book' with the path you want to navigate to
  };

  const goBack = () => {
    navigate(back); // Replace '/book' with the path you want to navigate to
  };

  const goHome = () => {
    navigate('/'); // Replace '/book' with the path you want to navigate to
  };

  return (  
  <div>
    <div className="flex justify-start w-full">
      <button onClick={goHome}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded-full m-2">Home</button>
    </div>
    <div className="flex items-center mx-4 space-x-2"> {/* Adjust mx-4 to control the spacing from the screen edges */}
      <button className="nav-btn" onClick={goBack}>Back</button>
      <div className="flex-1 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
      </div>
      <button className="nav-btn" onClick={goNext}>Next</button>
    </div>
  </div>

  );
}

export default Checkoutheader;
