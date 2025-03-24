import React from 'react'
import { GiSewingNeedle } from "react-icons/gi"
import { FaUserCircle } from "react-icons/fa"
import { IoIosCart } from "react-icons/io"
import { useSelector } from 'react-redux'

export default function Navbar() {
      
  const cartItems = useSelector((state) => state.cart.cartItems)
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

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
            <div className='relative'>
            <IoIosCart className='text-[2rem]'/>
            {cartItems.length > 0 && (
              
              <span className='absolute -top-1 -right-2 bg-red-500 text-white text-[0.7rem] rounded-full h-[18px] w-[18px] flex items-center justify-center font-bold'>
                {totalItems}
              </span>

              )}
            </div>
        </div>
      
    </nav>
  )
}
