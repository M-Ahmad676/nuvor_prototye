import React, { useContext } from 'react'
import { ProductContext } from '../ProductContext/ProductContext'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../Redux/cartSlice'
import {Link} from 'react-router-dom'

export default function Cards() {

  const {products, loading} = useContext(ProductContext)
  const dispatch = useDispatch()

  const handleAddToCart = (product,e) => {
    e.stopPropagation()
    e.preventDefault()
    console.log("Adding product to cart:", product); // Debugging Log
    dispatch(addToCart(product));
  };


  if(loading){
    return <p className='text-[1.5rem] font-medium text-gray-400'>Loading . . . </p>
  }
    
  return (
    <div className='w-full grid grid-cols-4 gap-5 '>
      {products.map((product) => (
      <Link to={`/Product/${product.id}`} key={product.id} className='block'>
      <div className='border border-gray-400 rounded-2xl shadow-sm shadow-gray-400 cursor-pointer transition-all duration-300 ease-in-out hover:scale-95'>
         <div >
            <img src={product.thumbnail} alt={product.title} /> 
          </div>  
          <div className='h-[9rem] p-5 space-y-3 rounded-b-2xl'>
            <h2 className='text-[1.2rem] font-medium'>{product.title}</h2>
            <p className='text-gray-500'>{product.price}$</p>
            <button className='py-1.5 px-4 bg-gray-900 text-white rounded-md hover:bg-black cursor-pointer'
            onClick={(e) => handleAddToCart(product,e)}
            >Add to Cart</button>
          </div>
      </div>
      </Link>
      ))}
    </div>
  )
}
