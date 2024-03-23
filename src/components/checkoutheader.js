import React from "react";
import { useNavigate } from 'react-router-dom';


function Checkoutheader({progress, back, next, lan}) {
  let navigate = useNavigate();

  const goNext = () => {
    navigate(next); // Replace '/book' with the path you want to navigate to
  };

  const goBack = () => {
    navigate(back); // Replace '/book' with the path you want to navigate to
  };

  const goHome = () => {
    if (lan.toString().includes('FR')){
      navigate('/');
    }
    else{
      navigate('/FR'); // Replace '/book' with the path you want to navigate to
    }
  };

  const changeLanguage = () => {
    navigate(lan); // Replace '/book' with the path you want to navigate to
  };

  return (  
  <div>
    <div className="flex justify-start w-full">
      <button onClick={goHome}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded-full m-2">
        <img src='home.png' alt="home/Accueil" width={50} height={50}></img>
      </button>
      <button onClick={changeLanguage}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded-full m-2">Change Language</button>
    </div>
    <div className="flex items-center mx-4 space-x-2"> {/* Adjust mx-4 to control the spacing from the screen edges */}
      <button className="nav-btn" onClick={goBack}>
      <img src='back.png' alt="back/retour" width={50} height={50}></img>
      </button>
      <div className="flex-1 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
      </div>
      <button className="nav-btn" onClick={goNext}>
      <img src='next.png' alt="next/avant" width={50} height={50}></img>
      </button>
    </div>
  </div>

  );
}

export default Checkoutheader;
