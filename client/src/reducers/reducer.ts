import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { FetchProductsParams } from "../types/category";
// import { Product, updateActionType } from "../types/product";
import axios from "axios";

const initialState: [] = [];

export const fetchAllUsers = createA;

export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
  try {
    const data = await axios.get(`https://api.escuelajs.co/api/v1/products/`);
    const result = await data.json();
    return result;
  } catch (error: any) {
    console.log(error);
  }
});

const companySlice = createSlice({
  name: "companySlice",
  initialState: initialState,
  reducers: {
    calcUserSalary: (state, action) => {},
  },
  extraReducers: (build) => {
    build.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const companyReducer = companySlice.reducer;
export const { calcUserSalary } = companySlice.actions;
