import React from 'react'
import { GiSewingNeedle } from "react-icons/gi"
import { FaUserCircle } from "react-icons/fa"
import { IoIosCart } from "react-icons/io"

export default function Navbar() {
  return (
    <nav className='flex items-center w-full h-[5rem] justify-between px-14 bg-[#000000ce] shadow-sm shadow-gray-400'>
        <div className='text-white'>
            <GiSewingNeedle className='text-[2rem]'/>
            <h5 className='font-medium'>Nuvor</h5>
        </div>

        <ul className='flex gap-x-16 text-sm text-white'>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>Categories</a></li>
            <li><a href='/'>Services</a></li>
            <li><a href='/'>About Us</a></li>
            <li><a href='/'>Contact Us</a></li>
        </ul>

        <div className='flex gap-x-10 items-center text-white'>
            <FaUserCircle className='text-[1.7rem]'/>
            <IoIosCart className='text-[2rem]'/>
        </div>
      
    </nav>
  )
}
