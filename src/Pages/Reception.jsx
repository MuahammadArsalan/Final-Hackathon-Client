import React from 'react'
import BeneficiaryRegister from '../Components/ReceptionDash/RecepDash'
import Navbar from '../Components/Navabar/Navbar.jsx'

const Reception = () => {
  return (
<><div>

<Navbar/>
<h1 className="text-3xl font-bold text-center">Reception Dashboard</h1>
<BeneficiaryRegister />


</div>

</>
  )
}

export default Reception