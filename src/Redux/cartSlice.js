import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({

    name:"cart",
    initialState: {
        cartItems:[],
    },
    reducers: {
        addToCart: (state,action) => {
            const product = action.payload;
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
        
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state,action) => {
            const existingItem = state.cartItems.find(item => item.id === action.payload)
            if(existingItem && existingItem.quantity > 1){
                existingItem.quantity -= 1
            }
            else{
                state.cartItems = state.cartItems.filter(item => item.id !== action.payload)
            }
        },
    },
})

export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer