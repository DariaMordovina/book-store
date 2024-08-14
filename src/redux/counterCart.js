import { createSlice } from '@reduxjs/toolkit'

export const counterCart = createSlice({
    name: 'cart',
    initialState:{
        cartItems:[]
    },
    reducers: {
addItemToCart:(state,action) => {
    state.cartItems.push({
    bookId:action.payload.books.id,
    quantity:action.payload.quantity,
    pictureId:action.payload.image
    })
}
    }
})

export const getCartItems=state=>state.cart.cartItems;
export const { addItemToCart }=counterCart.actions;
export default counterCart.reducer