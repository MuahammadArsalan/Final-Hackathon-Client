// import React from 'react'

// const Navbar = () => {
//   return (
//     <>
   

//     {/* <div className="navbar bg-base-100">
//   <div className="flex-1">
//     <a className="btn btn-ghost text-xl">daisyUI</a>
//   </div>

//   <div className="flex-none">
//     <div className="dropdown dropdown-end">
//       <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
//         <div className="indicator">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor">
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//           </svg>
//           <span className="badge badge-sm indicator-item">8</span>
//         </div>
//       </div>
//       <div
//         tabIndex={0}
//         className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
//         <div className="card-body">
//           <span className="text-lg font-bold">8 Items</span>
//           <span className="text-info">Subtotal: $999</span>
//           <div className="card-actions">
//             <button className="btn btn-primary btn-block">View cart</button>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="dropdown dropdown-end">
//       <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
//         <div className="w-10 rounded-full">
//           <img
//             alt="Tailwind CSS Navbar component"
//             src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
//         </div>
//       </div>
//       <ul
//         tabIndex={0}
//         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
//         <li>
//           <a className="justify-between">
//             Profile
//             <span className="badge">New</span>
//           </a>
//         </li>
//         <li><a>Settings</a></li>
//         <li><a>Logout</a></li>
//       </ul>
//     </div>
//   </div>
// </div>
//     */}
   
//    <div className="navbar bg-primary text-primary-content">
//   <button className="btn btn-ghost text-xl">Beneficiary Management System</button>
// </div>
//     </>
//   )
// }

// export default Navbar 



import React, { useState } from 'react';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`drawer ${isSidebarOpen ? 'drawer-open' : ''}`}>
        <input
          id="admin-sidebar"
          type="checkbox"
          className="drawer-toggle"
          checked={isSidebarOpen}
          onChange={toggleSidebar}
        />
        <div className="drawer-content">
          {/* Navbar */}
          <div className="navbar bg-primary text-primary-content">
            <button className="btn btn-ghost text-xl">Beneficiary Management System</button>
            <div className="flex-none lg:hidden">
              <button
                onClick={toggleSidebar}
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Content Goes Here */}
          <div className="p-4">
            {/* Insert your admin dashboard components here */}
          </div>
        </div>

        {/* Sidebar content */}
        <div className="drawer-side">
          <label htmlFor="admin-sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-60 bg-base-200 text-base-content">
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/beneficiaries">Beneficiaries</a></li>
            <li><a href="/departments">Departments</a></li>
            <li><a href="/users">Users</a></li>
            <li><a href="/reports">Reports</a></li>
            <li><a href="/settings">Settings</a></li>
            <li><a href="/logout">Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
