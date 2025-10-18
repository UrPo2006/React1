import React from 'react'

export default function Contact() {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
  <form className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
    <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Contact section</h2>

   
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">Name</label>
      <input
        type="text"
        placeholder="Enter your name"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>

  
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">Age</label>
      <input
        type="number"
        placeholder="Enter your age"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>

  
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">Email</label>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>

  
    <div className="mb-6">
      <label className="block text-gray-700 mb-2">Password</label>
      <input
        type="password"
        placeholder="Enter your password"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>

    <button
      type="submit"
      className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300 font-semibold"
    >
      Send
    </button>
  </form>
</div>

    </div>
  )
}
