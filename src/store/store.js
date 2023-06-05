//COMUNICARSE CON LOS SLICES PARA ADMINISTRAR LA INFO

import  cartReducer  from '../features/cart/cartSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
})