import React, { useRef, useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../../.firebase/firebase.config.js';
import { doc, setDoc } from "firebase/firestore"; 
import axios from 'axios';

const Register = () => {
  const [Username, setUserName] = useState('');
  const [Email, setemail] = useState('');
  const [Password, setpassword] = useState('');
  
  // Refs (still used for direct DOM manipulation if needed)
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const registerUser = async (e) => {
    e.preventDefault(); // Prevent default form submit behavior

    const usernameValue = usernameRef.current.value;
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;

    console.log(usernameValue, emailValue, passwordValue);

    try {
      // Create user with Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, emailValue, passwordValue);
      const user = userCredential.user;

      // Add user data to Firestore
      await setDoc(doc(db, "users", user.uid), {
        name: usernameValue,
        password: passwordValue,  // It's not recommended to store plain passwords in Firestore
        email: emailValue,
      });

      // Call your API to register the user
      try {
        const response = await axios.post('http://localhost:3000/api/v1/register', {
          username: usernameValue,
          email: emailValue,
          password: passwordValue,  // Consider sending only the hashed password for security
        });

        // Handle API response
        console.log('API Response:', response.data);

  setUserName('');
  setemail('');
  setpassword('');
  
  usernameRef.current.value = '';
  emailRef.current.value = '';
  passwordRef.current.value = '';

      } catch (apiError) {
        console.error('API error:', apiError);
alert(error)
      }

      console.log("User registered successfully");

    } catch (error) {
      console.log('Firebase error:', error.message);
alert(error)
    }


          
  }

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-lg mt-10">
          <form>
            {/* Username Input */}
            <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
            <label className="input input-bordered flex items-center gap-2 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                ref={usernameRef}
                type="text"
                className="grow p-2 border border-gray-300 rounded-md"
                placeholder="Username"
                value={Username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </label>

            {/* Email Input */}
            <label className="input input-bordered flex items-center gap-2 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                ref={emailRef}
                type="email"
                className="grow p-2 border border-gray-300 rounded-md"
                placeholder="Email"
                value={Email}
                onChange={(e) => setemail(e.target.value)}
              />
            </label>

            {/* Password Input */}
            <label className="input input-bordered flex items-center gap-2 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                <path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" />
              </svg>
              <input
                type="password"
                ref={passwordRef}
                className="grow p-2 border border-gray-300 rounded-md"
                placeholder="Password"
                value={Password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </label>

            {/* Register Button */}
            <button onClick={registerUser}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
              type="submit"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
