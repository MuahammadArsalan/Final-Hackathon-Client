import React, { useRef } from 'react';
import { auth } from '../../.firebase/firebase.config';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {

let email = useRef();
let password = useRef();
const navigate = useNavigate()


const LoginUser = (e)=>{
e.preventDefault();

signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    
    navigate('/')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });


}



  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-lg mt-10">
     
     <form>     <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

          {/* Email Input */}
          <label className="input input-bordered flex items-center gap-2 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
              />
              <path
                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
              />
            </svg>
            <input ref={email}
              type="text"
              className="grow p-2 border border-gray-300 rounded-md"
              placeholder="Email"
            />
          </label>

          {/* Password Input */}
          <label className="input input-bordered flex items-center gap-2 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input ref={password}
              type="password"
              className="grow p-2 border border-gray-300 rounded-md"
              placeholder="Password"
            />
          </label>

          {/* Login Button */}
          <button onClick={LoginUser}
            className= "w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
            type="submit"
          >
            Login
          </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
