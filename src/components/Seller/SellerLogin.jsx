import React, { useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import { useEffect } from 'react'

const SellerLogin = () => {

  const {isSeller, setIsSeller, navigate} = useAppContext()

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setIsSeller(true)
  }

  useEffect (()=>{
    if(isSeller){
      navigate('/seller')
    }
  },[isSeller])
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-md bg-white border border-gray-200 rounded-xl shadow-sm p-6 sm:p-8"
      >
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            Seller Login
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Login to manage your store
          </p>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seller@example.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-2.5 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition"
        >
          Login
        </button>

        {/* Footer */}
        <p className="text-xs text-gray-500 text-center mt-5">
          Only authorized sellers can access this panel
        </p>
      </form>
    </div>
  );
}

export default SellerLogin