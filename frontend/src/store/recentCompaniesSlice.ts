import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import {
  RecentCompaniesArgsTypes,
  RecentCompaniesValuesTypes,
} from "../types/store.types.ts";

export const getRecentCompanies = createAsyncThunk(
  "/recentCompanies/getRecentCompanies",
  async (args: RecentCompaniesArgsTypes) => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/companies?limit=${
        args?.limit || import.meta.env.VITE_RECENT_LIMIT_PAGES
      }&page=0&search=&sort=&state=&status=&molCategory=&establishmentType=&IMMGFrom=&IMMGTo=&licenseFrom=&licenseTo=`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  }
);

const initialState: RecentCompaniesValuesTypes = {
  isLoading: true,
  recentCompanies: null,
};

export const recentCompaniesSlice = createSlice({
  name: "recentCompanies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRecentCompanies.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getRecentCompanies.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.recentCompanies = payload;
    });
    builder.addCase(getRecentCompanies.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export default recentCompaniesSlice.reducer;
