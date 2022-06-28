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
<<<<<<< HEAD
    return data;
=======
    return result;
>>>>>>> 65abbb525bdf566d3d709b239f9edf7d8d178926
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
<<<<<<< HEAD
      console.log("users...:", state);
      // return action.payload;
      // return action.payload
=======
      console.log('users...:',action.payload);
      return action.payload
>>>>>>> 65abbb525bdf566d3d709b239f9edf7d8d178926
    });
  },
});

export const userReducer = userSlice.reducer;
export const { calcUserSalary } = userSlice.actions;
