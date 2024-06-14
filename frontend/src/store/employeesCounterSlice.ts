import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { EmployeesCounterValuesTypes } from "../types/store.types.ts";

export const getEmployeesCounter = createAsyncThunk(
  "/employeesCounter/getEmployeesCounter",
  async () => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/Employee/counters`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data.count;
  }
);

const initialState: EmployeesCounterValuesTypes = {
  isLoading: true,
  employeesCounter: 0,
};

export const employeesCounterSlice = createSlice({
  name: "employeesCounter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEmployeesCounter.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getEmployeesCounter.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.employeesCounter = payload;
    });
    builder.addCase(getEmployeesCounter.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export default employeesCounterSlice.reducer;
