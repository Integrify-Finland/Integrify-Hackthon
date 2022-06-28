import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Customer} from '../types/Customer'
// import { FetchProductsParams } from "../types/category";
// import { Product, updateActionType } from "../types/product";

const initialState: Customer[] = [];

export const fetchCustomers = createAsyncThunk("fetchCustomers", async () => {
  try {
    const data = await fetch(`http://localhost:5050/api/v1/customers`);
    const result = await data.json();
    return result;
  } catch (error: any) {
    console.log(error);
  }
});

const customerSlice = createSlice({
  name: "customerSlice",
  initialState: initialState,
  reducers: {
    // calcUserSalary: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCustomers.fulfilled, (state, action) => {
      // console.log('customers...:',action.payload);
      return action.payload
    });
  },
});


export const customerReducer = customerSlice.reducer;
export const {  } = customerSlice.actions;
