import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {User} from '../types/User'
// import { FetchProductsParams } from "../types/category";
// import { Product, updateActionType } from "../types/product";
import axios from "axios";

const initialState: User[] = [];

export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
  try {
    const data = await axios.get(`http://localhost:5050/api/v1/users`);
    // const result = await data.json();
<<<<<<< HEAD
    console.log(data);
    return data;
=======
    return await data;
>>>>>>> d7afff2f9ba8f77c9d4ec87054e6b4c676688812
  } catch (error: any) {
    console.log(error);
  }
});

const userSlice = createSlice({
  name: "userSlice",
  initialState: initialState,
  reducers: {
    calcUserSalary: (state, action) => {
      // let employeeSalary = state.internalRate * state.duration;
      // return employeeSalary;
    },
  },
  extraReducers: (builder) => {
<<<<<<< HEAD
    builder.addCase(fetchUsers.fulfilled, (state, payload) => {
      console.log(state);
      return state;
=======
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
>>>>>>> d7afff2f9ba8f77c9d4ec87054e6b4c676688812
    });
  },
});

export const userReducer = userSlice.reducer;
export const { calcUserSalary } = userSlice.actions;
