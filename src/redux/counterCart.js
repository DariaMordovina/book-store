import { createSlice } from '@reduxjs/toolkit'
import CartItem from '../cart/CartItem'

export const counterCart = createSlice({
    name: 'cart',
    initialState:{
        cartItems:[],
        
    },
    reducers: {
addItemToCart:(state,action) => {
    const timeId= new Date().getTime()
    state.cartItems.push({
        ...action.payload.books,
        id:timeId,
    bookId:action.payload.books.id,
    quantity:action.payload.quantity,
    totalPrice:action.payload.quantity*action.payload.books.price,
    totalQuantity:action.payload.quantity
    })
},

removeItemFromCart:(state,action)=>{
    state.cartItems=state.cartItems.filter(
        cartItem=> cartItem.id!== action.payload.cartItemId
    )
}
    }
})

export const getTotalPrice=state=>{
    return state.cart.cartItems.reduce((total,cartItems)=>{
        return cartItems.totalPrice+total
    },0)
}
export const getTotalQuantity=state=>{
    return state.cart.cartItems.reduce((total,cartItems)=>{
        return cartItems.totalQuantity+total
    },0)
}

export const getCartItems=state=>state.cart.cartItems;

export const { addItemToCart, removeItemFromCart}=counterCart.actions;
export default counterCart.reducer