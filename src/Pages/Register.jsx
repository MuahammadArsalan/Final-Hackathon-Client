import axios from 'axios';
import React, { useState } from 'react';

const Register = () => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectVal, setSelectVal] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  


  const reg = async () => {
    let res =await axios.post('http://localhost:3000/api/v1/register')
    console.log(res.data);
  
    
  
  }

const register = async (e) => {


  e.preventDefault();

    setError('');

    if (!username || !email || !password || !selectVal) {
      setError('Please fill out all fields');
      return;
    }


    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email');
      return;
    }

    // Validate password (min 6 characters)
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    setLoading(true);

    

      setUserName('');
      setEmail('');
      setPassword('');
      setSelectVal('');
      setLoading(false);
      

    
      setLoading(false);
    
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg mt-10 space-y-6">
        <form onSubmit={register}>
          {/* Header */}
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Register</h2>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {/* Username Input */}
          <div className="mb-4">
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Select Dropdown */}
          <div className="mb-6">
            <select
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectVal}
              onChange={(e) => setSelectVal(e.target.value)}
            >
              <option disabled value="">
                Select your role
              </option>
              <option value="Admin">Admin</option>
              <option value="Receptionist">Receptionist</option>
              <option value="Department Staff">Department Staff</option>
              <option value="Seeker">Seeker</option>
            </select>
          </div>

          {/* Login Link */}
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-blue-500 hover:underline">
              Login
            </a>
          </p>

          {/* Register Button */}
          <button onClick={()=>{register(),reg()}}
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="w-5 h-5 animate-spin mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4v1h16V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2z"
                  />
                </svg>
                Loading...
              </span>
            ) : (
              'Register'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;




// import axios from 'axios';
// import React, { useState } from 'react';

// const Register = () => {
//   const [username, setUserName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [selectVal, setSelectVal] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

// async  function register(event){
//   event.preventDefault();
//   console.log(username);
//   console.log(email);
//   console.log(password);
//   console.log(selectVal);
  
// try {
//   let res = await axios.post('http://localhost:3000/api/v1/register',{username,email,password,selectVal})
//   console.log(res);
  
// } catch (error) {
//   console.log(error);
  
// }



//  }

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
//       <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg mt-10 space-y-6">
//         <form>
//           {/* Header */}
//           <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Register</h2>

//           {/* Error Message */}
//           {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

//           {/* Username Input */}
//           <div className="mb-4">
//             <input
//               type="text"
//               className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUserName(e.target.value)}
//             />
//           </div>

//           {/* Email Input */}
//           <div className="mb-4">
//             <input
//               type="email"
//               className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           {/* Password Input */}
//           <div className="mb-4">
//             <input
//               type="password"
//               className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           {/* Select Dropdown */}
//           <div className="mb-6">
//             <select
//               className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={selectVal}
//               onChange={(e) => setSelectVal(e.target.value)}
//             >
//               <option disabled value="">
//                 Select your role
//               </option>
//               <option value="Admin">Admin</option>
//               <option value="Receptionist">Receptionist</option>
//               <option value="Department Staff">Department Staff</option>
//               <option value="Seeker">Seeker</option>
//             </select>
//           </div>

//           {/* Login Link */}
//           <p className="text-sm text-gray-600">
//             Already have an account?{' '}
//             <a href="/login" className="text-blue-500 hover:underline">
//               Login
//             </a>
//           </p>

//           {/* Register Button */}
//           <button  onClick={register}
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
//             disabled={loading}
//           >
//             {loading ? (
//               <span className="flex items-center justify-center">
//                 <svg
//                   className="w-5 h-5 animate-spin mr-3"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 4v1h16V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2z"
//                   />
//                 </svg>
//                 Loading...
//               </span>
//             ) : (
//               'Register'
//             )}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;
