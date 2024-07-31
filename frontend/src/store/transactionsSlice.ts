import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import {
  TransactionsArgsTypes,
  TransactionsValuesTypes,
} from "../types/store.types.ts";

export const getTransactions = createAsyncThunk(
  "/transactions/getTransactions",
  async (args: TransactionsArgsTypes) => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/transaction?search=${
        (args && args.search) || ""
      }&sort=${args?.sort || ""}&limit=${
        args?.limit
          ? args.limit == -1
            ? ""
            : args.limit
          : import.meta.env.VITE_LIMIT_PAGES
      }&page=${args?.page || 0}&type=${args?.type || ""}&status=${
        args?.status || ""
      }&expireWorkPermitTo=${
        args?.expireWorkPermitTo || ""
      }&expireWorkPermitFrom=${args?.expireWorkPermitFrom || ""}&residenceTo=${
        args?.residenceTo || ""
      }&residenceFrom=${args?.residenceFrom || ""}&changeStatusDateTo=${
        args?.changeStatusDateTo || ""
      }&changeStatusDateFrom=${args?.changeStatusDateFrom || ""}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  }
);

const initialState: TransactionsValuesTypes = {
  isLoading: true,
  transactions: null,
};

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    reverseTransactions: (state) => {
      if (state.transactions) {
        state.transactions = state.transactions.reverse();
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTransactions.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTransactions.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.transactions = payload;
    });
    builder.addCase(getTransactions.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export const { reverseTransactions } = transactionsSlice.actions;
export default transactionsSlice.reducer;
