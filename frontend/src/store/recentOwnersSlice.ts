import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import {
  RecentOwnersArgsTypes,
  RecentOwnersValuesTypes,
} from "../types/store.types.ts";

export const getRecentOwners = createAsyncThunk(
  "/recentOwners/getRecentOwners",
  async (args: RecentOwnersArgsTypes) => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/owner?limit=${
        args?.limit || import.meta.env.VITE_RECENT_LIMIT_PAGES
      }&page=0&type=owner`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  }
);

const initialState: RecentOwnersValuesTypes = {
  isLoading: true,
  recentOwners: null,
};

export const recentOwnersSlice = createSlice({
  name: "recentOwners",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRecentOwners.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getRecentOwners.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.recentOwners = payload;
    });
    builder.addCase(getRecentOwners.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export default recentOwnersSlice.reducer;
