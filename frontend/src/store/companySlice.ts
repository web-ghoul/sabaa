import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { CompanyValuesTypes } from "../types/store.types.ts";

export const getCompany = createAsyncThunk(
  "/company/getCompany",
  async (args: { id: string }) => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/companies/${args.id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  }
);

const initialState: CompanyValuesTypes = {
  isLoading: true,
  company: null,
  activities: null,
};

export const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCompany.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCompany.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.company = payload.data;
      state.activities = payload.activities;
    });
    builder.addCase(getCompany.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export default companySlice.reducer;
