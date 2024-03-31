import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { CompaniesValuesTypes } from "../types/store.types.ts";

export const getCompanies = createAsyncThunk(
  "/companies/getCompanies",
  async () => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/company`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  }
);

const initialState: CompaniesValuesTypes = {
  isLoading: true,
  companies: null,
};

export const companiesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCompanies.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCompanies.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.companies = payload;
    });
    builder.addCase(getCompanies.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export default companiesSlice.reducer;
