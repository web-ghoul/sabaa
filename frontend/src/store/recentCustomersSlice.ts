import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import {
  RecentCustomersArgsTypes,
  RecentCustomersValuesTypes,
} from "../types/store.types.ts";

export const getRecentCustomers = createAsyncThunk(
  "/recentCustomers/getRecentCustomers",
  async (args: RecentCustomersArgsTypes) => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/customers?limit=${
        args?.limit || import.meta.env.VITE_RECENT_LIMIT_PAGES
      }&page=0&type=customer`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  }
);

const initialState: RecentCustomersValuesTypes = {
  isLoading: true,
  recentCustomers: null,
};

export const recentCustomersSlice = createSlice({
  name: "recentCustomers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRecentCustomers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getRecentCustomers.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.recentCustomers = payload;
    });
    builder.addCase(getRecentCustomers.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export default recentCustomersSlice.reducer;
