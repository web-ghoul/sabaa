import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import {
  CustomersArgsTypes,
  CustomersValuesTypes,
} from "../types/store.types.ts";

export const getCustomers = createAsyncThunk(
  "/customers/getCustomers",
  async (args: CustomersArgsTypes) => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/owner?search=${
        (args && args.search) || ""
      }&sort=${args?.sort || ""}&limit=${
        args?.limit
          ? args.limit == -1
            ? ""
            : args.limit
          : import.meta.env.VITE_LIMIT_PAGES
      }&dobTo=${args?.dobTo || ""}&dobFrom=${args?.dobFrom || ""}&state=${
        args?.state || ""
      }&nationality=${args?.nationality || ""}&page=${
        args?.page || 0
      }&isPro=true`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  }
);

const initialState: CustomersValuesTypes = {
  isLoading: true,
  customers: null,
};

export const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    reverseCustomers: (state) => {
      if (state.customers) {
        state.customers = state.customers.reverse();
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCustomers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCustomers.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.customers = payload;
    });
    builder.addCase(getCustomers.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export const { reverseCustomers } = customersSlice.actions;
export default customersSlice.reducer;
