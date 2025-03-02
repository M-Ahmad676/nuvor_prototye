import React from 'react'
import Cards from '../Components/Cards/Cards'

export default function StorePage() {
  return (
    <div className='min-h-screen mx-auto max-w-screen-xl my-32'>
       
      <h1 className='text-[2rem] pb-10 font-medium'>Featured Shirts</h1> 
      <Cards/>
      
    </div>
  )
}
