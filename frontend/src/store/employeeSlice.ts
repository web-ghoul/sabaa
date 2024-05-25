import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { EmployeeValuesTypes } from "../types/store.types.ts";

export const getEmployee = createAsyncThunk(
  "/employee/getEmployee",
  async (args: { id: string }) => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/Employee/${args.id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  }
);

const initialState: EmployeeValuesTypes = {
  isLoading: true,
  employee: null,
  companies: null,
  activities: null,
};

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEmployee.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getEmployee.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.employee = payload.employee;
      state.activities = payload.activities;
    });
    builder.addCase(getEmployee.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export default employeeSlice.reducer;
