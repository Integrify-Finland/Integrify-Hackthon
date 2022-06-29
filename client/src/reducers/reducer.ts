import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types/User";
// import { FetchProductsParams } from "../types/category";
// import { Product, updateActionType } from "../types/product";
import axios from "axios";

const initialState: User[] = [];

export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
  try {
    const data = await fetch(`http://localhost:5050/api/v1/users`);
    const result = await data.json();
    return result;
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
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      // console.log('users...:',action.payload);
      return action.payload;
    });
  },
});

export const userReducer = userSlice.reducer;
export const { calcUserSalary } = userSlice.actions;
