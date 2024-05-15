import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import {
  RecentProsArgsTypes,
  RecentProsValuesTypes,
} from "../types/store.types.ts";

export const getRecentPros = createAsyncThunk(
  "/recentPros/getRecentPros",
  async (args: RecentProsArgsTypes) => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/owner?limit=${
        args?.limit || import.meta.env.VITE_RECENT_LIMIT_PAGES
      }&page=0&isPro=true`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  }
);

const initialState: RecentProsValuesTypes = {
  isLoading: true,
  recentPros: null,
};

export const recentProsSlice = createSlice({
  name: "recentPros",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRecentPros.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getRecentPros.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.recentPros = payload;
    });
    builder.addCase(getRecentPros.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export default recentProsSlice.reducer;
