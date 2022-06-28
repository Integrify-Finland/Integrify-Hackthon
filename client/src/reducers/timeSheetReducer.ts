import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Timesheet} from '../types/Timesheet'


const initialState: Timesheet[] = [];

export const fetchTimesheet = createAsyncThunk("fetchTimesheet", async () => {
  try {
    const data = await fetch(`http://localhost:5050/api/v1/timesheets`);
    const result = await data.json();
    return result;
  } catch (error: any) {
    console.log(error);
  }
});

const timesheetSlice = createSlice({
  name: "timesheetSlice",
  initialState: initialState,
  reducers: {
    // calcUserSalary: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTimesheet.fulfilled, (state, action) => {
      console.log('timesheet...:',action.payload);
      return action.payload
    });
  },
});


export const timesheetReducer = timesheetSlice.reducer;
export const {  } = timesheetSlice.actions;
