import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import {
  RecentJobsArgsTypes,
  RecentJobsValuesTypes,
} from "../types/store.types.ts";

export const getRecentJobs = createAsyncThunk(
  "/recentJobs/getRecentJobs",
  async (args: RecentJobsArgsTypes) => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/jobs?limit=${
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

const initialState: RecentJobsValuesTypes = {
  isLoading: true,
  recentJobs: null,
};

export const recentJobsSlice = createSlice({
  name: "recentJobs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRecentJobs.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getRecentJobs.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.recentJobs = payload;
    });
    builder.addCase(getRecentJobs.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export default recentJobsSlice.reducer;
