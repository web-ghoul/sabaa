import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import {
  RecentEmployeesArgsTypes,
  RecentEmployeesValuesTypes,
} from "../types/store.types.ts";

export const getRecentEmployees = createAsyncThunk(
  "/recentEmployees/getRecentEmployees",
  async (args: RecentEmployeesArgsTypes) => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/Employees?limit=${
        args?.limit || import.meta.env.VITE_RECENT_LIMIT_PAGES
      }&page=0`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  }
);

const initialState: RecentEmployeesValuesTypes = {
  isLoading: true,
  recentEmployees: null,
};

export const recentEmployeesSlice = createSlice({
  name: "recentEmployees",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRecentEmployees.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getRecentEmployees.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.recentEmployees = payload;
    });
    builder.addCase(getRecentEmployees.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export default recentEmployeesSlice.reducer;
