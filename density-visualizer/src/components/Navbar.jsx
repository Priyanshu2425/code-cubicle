import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
const Navbar = () => {
  return (
    <div className='flex justify-between px-2 py-4 shadow-lg items-center bg-white'>
      <div className='flex items-center gap-2 '>
        <img
          src={logo}
          className='w-8 h-8'
          alt=''
        />
        <h1 className='text-xl font-bold'>Eagle Eye</h1>
      </div>
      <div className='flex gap-2 items-center'>
        <button
          className='hover:underline px-2'
          to={'/events'}
        >
          Events
        </button>
        <button
          className='hover:underline px-2'
          to={'/my-events'}
        >
          My Events
        </button>

        <>
          <button className='border-2 border-white text-white rounded-xl bg-blue-600 hover:bg-blue-800 hover:text-white px-2 p-1'>
            Sign Up
          </button>
          <button className='border-2 border-white text-white rounded-xl bg-blue-600 hover:bg-blue-800 hover:text-white px-2 p-1'>
            Login
          </button>
        </>
      </div>
    </div>
  )
}

export default Navbar
