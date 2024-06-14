import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { CompaniesCounterValuesTypes } from "../types/store.types.ts";

export const getCompaniesCounter = createAsyncThunk(
  "/companiesCounter/getCompaniesCounter",
  async () => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/company/counters`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data.count;
  }
);

const initialState: CompaniesCounterValuesTypes = {
  isLoading: true,
  companiesCounter: 0,
};

export const companiesCounterSlice = createSlice({
  name: "companiesCounter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCompaniesCounter.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCompaniesCounter.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.companiesCounter = payload;
    });
    builder.addCase(getCompaniesCounter.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export default companiesCounterSlice.reducer;
