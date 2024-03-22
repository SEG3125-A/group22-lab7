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

  return (  

  <div className="flex items-center mx-4 space-x-2"> {/* Adjust mx-4 to control the spacing from the screen edges */}
    <button className="nav-btn" onClick={goBack}>Back</button>
    <div className="flex-1 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
    </div>
    <button className="nav-btn" onClick={goNext}>Next</button>
  </div>


  );
}

export default Checkoutheader;
