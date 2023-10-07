import React, { useState } from 'react';
import img1 from "../assets/ramakrishnan-nataraj-SzMR1Vcf5aw-unsplash.jpg"

export default function Username() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='bg-blue-200 min-h-screen flex justify-center items-center'>
      <div className='container mx-auto flex w-4/5 h-96 bg-white shadow-lg rounded-lg overflow-hidden'>
        {/* Left Column (Image) */}
        <div className='w-1/2'>
          <img src={img1} alt='avatar' className='w-full h-full object-cover' />
        </div>

        {/* Right Column (Username and Password) */}
        <div className='w-1/2 p-6 flex flex-col justify-between'>
          <div className='text-center'>
            <h4 className='text-2xl font-semibold text-gray-800'>Hello! Welcome Back</h4>
            <p className='text-gray-500'>Explore more by connecting with us.</p>
          </div>

          <form className='mt-6'>
            {/* Username Input */}
            <div className='mb-4'>
              <input
                type='text'
                placeholder='Username'
                className='w-3/4 px-3 py-2 flex justify-center items-center mx-auto border rounded-lg focus:outline-none focus:border-blue-500'
              />
            </div>
            
            {/* Password Input */}
            <div className='mb-4 relative'>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
                className='w-3/4 px-3 py-2 flex justify-center items-center mx-auto border rounded-lg focus:outline-none focus:border-blue-500'
              />
              <span
                className='absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer'
                onClick={togglePasswordVisibility}
              >
                {showPassword ? '🙈' : '👁️'}
              </span>
            </div>
          </form>

          {/* Submit Button */}
          <div className='text-center mt-4'>
            <button
              type='submit'
              className='w-3/4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none'
            >
              Let's Go
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
