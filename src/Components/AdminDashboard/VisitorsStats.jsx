
  import React from 'react'
  import { GrUser } from "react-icons/gr";

  const VisitorsStats = () => {
    return (


<>
<div className='flex justify-start'> 

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Visitors */}
        <div className="card bg-blue-500 text-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between">
            <div>
              <h3 className="text-xl font-bold">Total Visitors</h3>
              <p className="text-2xl font-bold">200</p>
            </div>
            <div className="text-5xl"><GrUser/>
            </div>
          </div>
        </div>
      </div>
      </div>

</>
    )
  }
  
  export default VisitorsStats
  