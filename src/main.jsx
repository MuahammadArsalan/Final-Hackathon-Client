
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from '../Layout.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Login from './Pages/Login.jsx'
import AdminDash from './Pages/AdminDash.jsx'
import Reception from './Pages/Reception.jsx'
import Register from './Pages/Home.jsx'



const router = createBrowserRouter([
  {
   path:"/",
   element:<Layout/>,
   children:[
    {
path:"",
element:<Home/>
    },
    
    {
path:"login",
element:<Login/>
    },
    {
path:"register",
element:<Register/>
    },
{
    path:"dashboard1",
    element:<AdminDash></AdminDash>
},
{
    path:"dashboard2",
    element:<Reception ></Reception >
}
   ]
  }
])

createRoot(document.getElementById('root')).render(
<RouterProvider router={router}><App></App></RouterProvider>

)
