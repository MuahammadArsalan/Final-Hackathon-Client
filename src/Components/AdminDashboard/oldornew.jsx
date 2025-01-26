import React from 'react'
import { GrUserSettings } from "react-icons/gr";

const OldorNew = () => {
    return (
    <>
    <div className='flex justify-start'>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* New Visitors */}
        <div className="card bg-green-500 text-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between">
            <div>
              <h3 className="text-xl font-bold">New Visitors</h3>
              <p className="text-2xl font-bold">120</p>
            </div>
            <div className="text-5xl"><GrUserSettings /></div>
          </div>
        </div>
  
        {/* Returning Visitors */}
        <div className="card bg-yellow-500 text-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between">
            <div>
              <h3 className="text-xl font-bold">Returning Visitors</h3>
              <p className="text-2xl font-bold">80</p>
            </div>
            <div className="text-5xl">🔁</div>
          </div>
        </div>
      </div>
        
    </div>
      </>
    );
  };
export default OldorNew