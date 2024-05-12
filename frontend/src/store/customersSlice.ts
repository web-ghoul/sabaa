import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { CustomersArgsTypes, CustomersValuesTypes } from "../types/store.types";

export const getCustomers = createAsyncThunk(
  "/customers/getCustomers",
  async (args: CustomersArgsTypes) => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/Employee?search=${
        (args && args.search) || ""
      }&sort=${args?.sort || ""}&nationality=${
        args?.nationality || ""
      }&cardType=${args?.cardType || ""}&status=${args?.status || ""}&gender=${
        args?.gender || ""
      }&limit=${
        args?.limit
          ? args.limit == -1
            ? ""
            : args.limit
          : import.meta.env.VITE_LIMIT_PAGES
      }&isCustomer=true`,
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
