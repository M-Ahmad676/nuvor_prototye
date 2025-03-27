import React, { useContext } from 'react'
import { ProductContext } from '../Components/ProductContext/ProductContext'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Redux/cartSlice'

export default function ProductPage() {
  const { id } = useParams();
  const { products } = useContext(ProductContext); // Use Context API
  const dispatch = useDispatch();

  // Ensure `id` is correctly converted to a number
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <h1 className='text-[1.5rem] text-center'>Product Not Found</h1>
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    console.log(`${product.title}, added to Cart`);
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
          <h4>Rating: {product.rating}</h4>
          <p>${product.price}</p>
          <button className='py-2 bg-black text-white rounded-lg px-5'
            onClick={handleAddToCart}
          >Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
