import React, { useState } from 'react';

const BeneficiaryRegister = () => {
  const [name, setName] = useState('');
  const [cnic, setCnic] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [purpose, setPurpose] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Track loading state

  const validateForm = () => {
    // Validate CNIC (should be 13 digits)
    const cnicRegex = /^[0-9]{13}$/;
    if (!cnicRegex.test(cnic)) {
      setError('CNIC must be exactly 13 digits');
      return false;
    }

    // Validate Contact (should be 11 digits)
    const contactRegex = /^[0-9]{11}$/;
    if (!contactRegex.test(contact)) {
      setError('Contact number must be exactly 11 digits');
      return false;
    }

    // Clear error if all fields are valid
    setError('');
    return true;
  };

  const register = (e) => {
    e.preventDefault();

    // Validate form before submitting
    if (!validateForm()) return;

    // Set loading state to true when submitting the form
    setLoading(true);

    // Simulate an API call or registration process
    setTimeout(() => {
      // Once the form is submitted, reset loading state
      setLoading(false);
      // Log the values of all input fields
      console.log('Full Name:', name);
      console.log('CNIC:', cnic);
      console.log('Contact Number:', contact);
      console.log('Email:', email);
      console.log('Address:', address);
      console.log('Purpose:', purpose);
    }, 2000); // Simulate a 2-second delay
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg mt-10 space-y-6">
        <form onSubmit={register}>
          {/* Header */}
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Beneficiary Registration</h2>

          {/* Full Name Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* CNIC Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">CNIC</label>
            <input
              type="number"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="CNIC (13 digits)"
              value={cnic}
              onChange={(e) => setCnic(e.target.value)}
              minLength={13}
              maxLength={13}
              required
            />
          </div>

          {/* Contact Number Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Contact Number</label>
            <input
              type="number"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Contact Number (11 digits)"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              minLength={11}
              maxLength={11}
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email (Optional)</label>
            <input
              type="email"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email (Optional)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Address Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <textarea
              className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          {/* Purpose Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Purpose</label>
            <textarea
              className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Purpose"
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              required
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={loading} // Disable button while loading
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

export default BeneficiaryRegister;
