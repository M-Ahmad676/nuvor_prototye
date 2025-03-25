import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../Redux/cartSlice";

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="py-28">
        <h1 className="text-[2rem] font-semibold">Your Cart</h1>
        <div className="h-1 w-[6rem] bg-black rounded-full"></div>

        <hr className="my-10" />

        {cartItems.length === 0 ? (
          <h4 className="text-[1.4rem] font-medium text-center">
            Your Cart is Empty
          </h4>
        ) : (
          <div className="grid grid-cols-4 gap-x-5">
            {cartItems.map((items) => (
              <div
                key={items.id}
                className="border border-gray-400 rounded-2xl shadow-sm shadow-gray-400"
              >
                <div>
                  <img src={items.thumbnail} alt={items.title} />
                </div>
                <div className="h-[11rem] p-5 space-y-3 rounded-b-2xl">
                  <h2 className="text-[1.2rem] font-medium">{items.title}</h2>
                  <p className="text-gray-500">{items.price}$</p>
                  <p className="font-medium">Quantity: {items.quantity}</p>
                  <div className="flex gap-x-5 w-full">
                   <button className="bg-black w-[30px] py-1 text-white font-bold rounded-lg hover:bg-gray-900 cursor-pointer"
                   onClick={() => dispatch(addToCart(items))}>
                    +
                   </button>
                   <button className="bg-black w-[30px] py-1 text-white font-bold rounded-lg hover:bg-gray-900 cursor-pointer"
                   onClick={() => dispatch(removeFromCart(items.id))}>
                    -
                   </button>
                   </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
