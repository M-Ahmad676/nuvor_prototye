import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/cartSlice';

export default function ProductPage() {

    const {id} = useParams();
    const products = useSelector((state) => state.products?.items || [])
    const product = products.find((p) => p.id === Number(id))
    const dispatch = useDispatch()

    if(!product){
        return <h1 className='text-[1.5rem] text-center'>Product Not Found</h1>
    }

    const handleAddToCart = (product) => {     
    dispatch(addToCart(product))
    console.log(`${product.title},added to Cart`) 
    }
  return (
    <div className='max-w-screen-xl mx-auto'>
        
       <div className='my-20 flex items-center justify-center gap-x-5'>

        <div className='basis-[50%]'>
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <div className='basis-[50%]'>
           <h1>{product.title}</h1>
           <h3>{product.brand}</h3>
           <p>{product.description}</p>
           <p>{product.category}</p>
           <h4>Rating:{product.rating}</h4>
           <p>{product.price}</p>
           <button className='py-2 bg-black text-white rounded-lg px-5'
           onClick={() => handleAddToCart(product)}
           >Add to Cart</button>
        </div>
        
       </div> 
    </div>
  )
}
