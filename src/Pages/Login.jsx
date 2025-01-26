import React, { useRef, useState } from 'react';

const Login = () => {
  let email = useRef();
  let password = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const loginUser = (e) => {
    e.preventDefault(); // Prevent form submission to keep the page from refreshing

    // Reset any previous errors
    setError('');

    // Validate if both fields are filled
    if (!email.current.value || !password.current.value) {
      setError('Both fields are required');
      return;
    }

    // Validate email format using regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email.current.value)) {
      setError('Please enter a valid email');
      return;
    }

    // Simulate loading and form submission
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log('Email:', email.current.value);
      console.log('Password:', password.current.value);

      // Clear the input fields after submission
      email.current.value = '';
      password.current.value = '';
    }, 2000); // Simulate a 2-second delay for form submission
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg mt-10 space-y-4">
        <form onSubmit={loginUser}>
          {/* Header */}
          <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              ref={email}
              type="email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input
              ref={password}
              type="password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Register Link */}
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="/register" className="text-blue-500 hover:underline">
              Register here
            </a>
          </p>

          {/* Submit Button */}
          <button
            className="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
            type="submit"
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
              'Login'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
