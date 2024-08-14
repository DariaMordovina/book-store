import { configureStore } from '@reduxjs/toolkit';
import cart from './counterCart';

export const store = configureStore({
    reducer: {
      cart
    },
  })