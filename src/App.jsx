import React from 'react'
import Home from './Pages/Home.jsx'
import Login from './Pages/Login.jsx'
import VisitorsStats from './Components/AdminDashboard/VisitorsStats.jsx'
import Register from './Pages/Home.jsx'

const App = () => {
  return (
<>
<Register></Register>
<Login></Login>

<Home></Home>
{/* <VisitorsStats></VisitorsStats> */}

</>
  )
}

export default App