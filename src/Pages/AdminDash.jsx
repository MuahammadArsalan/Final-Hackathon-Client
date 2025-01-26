import React from 'react'
import VisitorsStats from '../Components/AdminDashboard/VisitorsStats.jsx'
import Navbar from '../Components/Navabar/Navbar.jsx'
import OldorNew from '../Components/AdminDashboard/oldornew.jsx'
import DepartmentActivity from '../Components/AdminDashboard/deptstats.jsx'
const AdminDash = () => {
  return (
    <>
    <Navbar></Navbar>
    <h1 className="text-3xl font-bold text-center">Admin Dashboard</h1>

<div className='mt-6'>
    <VisitorsStats/>
</div>

<div className='mt-6'>
<OldorNew/>

</div>

    <DepartmentActivity/>


    
    </>
  )
}

export default AdminDash