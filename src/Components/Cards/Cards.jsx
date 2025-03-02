import React, { useContext } from 'react'
import { ProductContext } from '../ProductContext/ProductContext'

export default function Cards() {

  const {products, loading} = useContext(ProductContext)

  if(loading){
    return <p className='text-[1.5rem] font-medium text-gray-400'>Loading . . . </p>
  }
    
  return (
    <div className='w-full grid grid-cols-4 gap-5 '>
      {products.map((product) => (
      <div className='border-1 border-gray-400 rounded-2xl shadow-sm shadow-gray-400 cursor-pointer transition-all duration-300 ease-in-out hover:scale-95'>
         <div key={product.id}>
            <img src={product.thumbnail} alt={product.title} /> 
          </div>  
          <div className='h-[9rem] p-5 space-y-3 rounded-b-2xl'>
            <h2 className='text-[1.2rem] font-medium'>{product.title}</h2>
            <p className='text-gray-500'>{product.price}$</p>
            <button className='py-1.5 px-4 bg-gray-900 text-white rounded-md hover:bg-black cursor-pointer'>Add to Cart</button>
          </div>
      </div>
      ))}
    </div>
  )
}
