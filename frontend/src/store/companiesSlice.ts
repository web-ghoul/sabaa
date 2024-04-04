import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import {
  CompaniesArgsTypes,
  CompaniesValuesTypes,
} from "../types/store.types.ts";

export const getCompanies = createAsyncThunk(
  "/companies/getCompanies",
  async (args: CompaniesArgsTypes) => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/company?search=${
        (args && args.search) || ""
      }&sort=${args?.sort || ""}&limit=${args?.limit || ""}&page=${
        args?.page || 0
      }&state=${args?.state || ""}&status=${args?.status || ""}&molCategory=${
        args?.molCategory || ""
      }&establishmentType=${args?.establishmentType || ""}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
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
  reducers: {
    reverseCompanies: (state) => {
      if (state.companies) {
        state.companies = state.companies.reverse();
      }
    },
  },
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

export const { reverseCompanies } = companiesSlice.actions;
export default companiesSlice.reducer;
