/* eslint-disable import/no-extraneous-dependencies */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PelmeniState } from './types/PelmeniState';
import { PelmeniType, PelmenId } from './types/PelmeniType';
import * as apiPelmeni from './apiPelmeni';

const initialState: PelmeniState = {
  pelmeni: [],
  error: undefined,
  message: undefined,
};

export const getPelmeni = createAsyncThunk('pelmeni/getPelmeni', async () => {
  const allPelmeni = await apiPelmeni.getPelmeni();

  return allPelmeni;
});

export const deletePelmen = createAsyncThunk(
  'pelmeni/deletePelmen',
  async (pelId: number) => {
    const delPel = await apiPelmeni.deletePelmen(pelId);
    console.log(delPel);
    return delPel;
  }
);

const pelmeniSlice = createSlice({
  name: 'pelmeni',
  initialState,
  reducers: {
    // getTodos: (state) => state,
    // removeTodo: (state, action) => {
    //   state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    // },
    // addTodo: (state, action) => {
    //   state.todos.push(action.payload);
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPelmeni.fulfilled, (state, action) => {
        state.pelmeni = action.payload;
      })
      .addCase(getPelmeni.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deletePelmen.fulfilled, (state, action) => {
        console.log(action.payload);
        state.pelmeni = state.pelmeni.filter(
          (pelmen) => pelmen.id !== +action.payload
        );
      })
      .addCase(deletePelmen.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

//export const { getTodos, removeTodo, addTodo } = todosSlice.actions;

export default pelmeniSlice.reducer;
