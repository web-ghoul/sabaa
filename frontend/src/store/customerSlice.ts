import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { CustomerValuesTypes } from "../types/store.types.ts";

export const getCustomer = createAsyncThunk(
  "/customer/getCustomer",
  async (args: { id: string }) => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/owner/${args.id}?isCustomer=true`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return res.data;
  }
);

const initialState: CustomerValuesTypes = {
  isLoading: true,
  customer: null,
  companies: null,
  activities: null,
};

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCustomer.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCustomer.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.customer = payload.owner;
      state.companies = payload.companies;
      state.activities = payload.activities;
    });
    builder.addCase(getCustomer.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export default customerSlice.reducer;
