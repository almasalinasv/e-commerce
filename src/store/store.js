import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice';
import { cartSlice } from './carrito/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer
  },
});