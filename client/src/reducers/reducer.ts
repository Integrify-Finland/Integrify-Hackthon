import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { FetchProductsParams } from "../types/category";
// import { Product, updateActionType } from "../types/product";
import axios from "axios";

const initialState: [] = [];

export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
  try {
    const data = await axios.get(`http://localhost:5050/api/v1/users`);
    // const result = await data.json();
    return data;
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
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, payload) => {
      return state.duration;
    });
  },
});

export const companyReducer = companySlice.reducer;
export const { calcUserSalary } = companySlice.actions;
