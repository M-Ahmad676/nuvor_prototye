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
      <div className='my-32 flex items-center justify-center gap-x-10'>
        <div className='basis-[40%] flex justify-center flex-col'>
          <div>
          <img src={product.thumbnail} alt={product.title} className='max-w-[70%] w-full mx-auto'/>
          </div>
          <div className='flex justify-evenly'>
          {product.images.map((image,index) => (
            <div className='max-w-[5rem] w-full cursor-pointer border border-gray-400 rounded-xl' key={index}>
              <img src={image} alt={`${product.title} ${index}`}/>
          </div>
            ))}
          </div>
        </div>
        <div className='basis-[60%] space-y-4'>
          <h1 className='text-[2rem] font-medium'>{product.title}</h1>
          <h3><span className='font-medium'>Brand: </span>{product.brand}</h3>
          <p className='text-gray-700'>{product.description}</p>
          <p><span className='font-medium'>Category: </span>{product.category}</p>
          <h4><span className='font-medium'>Rating: </span>{product.rating} / 5</h4>
          <p className='font-medium'>Availability: <span className={product.stock > 0 ? "text-green-500" : "text-red-500"}>{product.stock > 0 ? "InStock" : "Out of Stock"}</span></p>
          <p><span className='font-medium'>Price: </span>${product.price}</p>
          <div className='space-x-5 my-7'>
            {product.tags.map((tag,index) => (
              <span className='p-2 bg-gray-300 text-gray-800 text-sm font-medium rounded-lg' key={index}>{tag}</span>
            ))}
          </div>
          <button className='py-2 bg-black text-white rounded-lg px-5 hover:bg-gray-800 cursor-pointer'
            onClick={handleAddToCart}
          >Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
