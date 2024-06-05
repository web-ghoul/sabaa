import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { EmployeesArgsTypes, EmployeesValuesTypes } from "../types/store.types";

export const getEmployees = createAsyncThunk(
  "/employees/getEmployees",
  async (args: EmployeesArgsTypes) => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/Employee?search=${
        (args && args.search) || ""
      }&sort=${args?.sort || ""}&nationality=${
        args?.nationality || ""
      }&cardType=${args?.cardType || ""}&status=${args?.status || ""}&gender=${
        args?.gender || ""
      }&limit=${
        args?.limit
          ? args.limit == -1
            ? ""
            : args.limit
          : import.meta.env.VITE_LIMIT_PAGES
      }&page=${args?.page || 0}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  }
);

const initialState: EmployeesValuesTypes = {
  isLoading: true,
  employees: null,
};

export const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    reverseEmployees: (state) => {
      if (state.employees) {
        state.employees = state.employees.reverse();
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getEmployees.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getEmployees.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.employees = payload;
    });
    builder.addCase(getEmployees.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export const { reverseEmployees } = employeesSlice.actions;
export default employeesSlice.reducer;
