import React from 'react'

const DepartmentActivity = () => {
    return (

        <>
    <div className='flex justify-start mt-10'>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card bg-teal-500 text-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Medical Department</h3>
          <p className="text-2xl">150 Visitors</p>
        </div>
  
        <div className="card bg-purple-500 text-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Financial Aid</h3>
          <p className="text-2xl">50 Visitors</p>
        </div>
  
        <div className="card bg-pink-500 text-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Other Departments</h3>
          <p className="text-2xl">30 Visitors</p>
        </div>
      </div>
        
    </div>
      </>
    
    );
  };

export default DepartmentActivity