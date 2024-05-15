import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import {
  RecentNationalitiesArgsTypes,
  RecentNationalitiesValuesTypes,
} from "../types/store.types.ts";

export const getRecentNationalities = createAsyncThunk(
  "/recentNationalities/getRecentNationalities",
  async (args: RecentNationalitiesArgsTypes) => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/nationality?limit=${
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

const initialState: RecentNationalitiesValuesTypes = {
  isLoading: true,
  recentNationalities: null,
};

export const recentNationalitiesSlice = createSlice({
  name: "recentNationalities",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRecentNationalities.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getRecentNationalities.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.recentNationalities = payload;
    });
    builder.addCase(getRecentNationalities.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export default recentNationalitiesSlice.reducer;
