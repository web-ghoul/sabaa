import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import {
  RecentActivitiesArgsTypes,
  RecentActivitiesValuesTypes,
} from "../types/store.types.ts";

export const getRecentActivities = createAsyncThunk(
  "/recentActivities/getRecentActivities",
  async (args: RecentActivitiesArgsTypes) => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/activity?limit=${
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

const initialState: RecentActivitiesValuesTypes = {
  isLoading: true,
  recentActivities: null,
};

export const recentActivitiesSlice = createSlice({
  name: "recentActivities",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRecentActivities.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getRecentActivities.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.recentActivities = payload;
    });
    builder.addCase(getRecentActivities.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export default recentActivitiesSlice.reducer;
