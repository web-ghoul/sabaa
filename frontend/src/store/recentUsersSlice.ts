import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import {
  RecentUsersArgsTypes,
  RecentUsersValuesTypes,
} from "../types/store.types.ts";

export const getRecentUsers = createAsyncThunk(
  "/recentPros/getRecentUsers",
  async (args: RecentUsersArgsTypes) => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/user?limit=${
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

const initialState: RecentUsersValuesTypes = {
  isLoading: true,
  recentUsers: null,
};

export const recentUsersSlice = createSlice({
  name: "recentUsers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRecentUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getRecentUsers.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.recentUsers = payload;
    });
    builder.addCase(getRecentUsers.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export default recentUsersSlice.reducer;
