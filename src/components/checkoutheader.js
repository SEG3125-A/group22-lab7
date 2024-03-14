import React from "react";


function Checkoutheader({progress}) {
  return (  
<div className="flex items-center mx-4 space-x-2"> {/* Adjust mx-4 to control the spacing from the screen edges */}
  <button className="px-4 py-2 bg-blue-500 text-white rounded">Left</button>
  <div className="flex-1 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
  </div>
  <button className="px-4 py-2 bg-blue-500 text-white rounded">Right</button>
</div>

  );
}

export default Checkoutheader;
