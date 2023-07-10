/* eslint-disable import/no-extraneous-dependencies */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import State from './types/State';
import * as productsApi from './api';

const initialState: State = {
  products: [],
  error: undefined,
  check: 0,
  basketDish: [],
  score: 1,
};

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    const allProducts = await productsApi.getProducts();

    return allProducts;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    plusDish: (state, action) => {
      state.check = +state.check + +action.payload.price;
      state.basketDish = [...state.basketDish, action.payload];
    },
    scorePlus: (state, action) => {
      state.score = +state.score + +action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { plusDish, scorePlus } = productSlice.actions;
export default productSlice.reducer;
