import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { TransactionsCounterValuesTypes } from "../types/store.types.ts";

export const getTransactionsCounter = createAsyncThunk(
  "/transactionsCounter/getTransactionsCounter",
  async () => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/transactions/counters`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(res.data);
    return res.data.count;
  }
);

const initialState: TransactionsCounterValuesTypes = {
  isLoading: true,
  transactionsCounter: 0,
};

export const transactionsCounterSlice = createSlice({
  name: "transactionsCounter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTransactionsCounter.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTransactionsCounter.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.transactionsCounter = payload;
    });
    builder.addCase(getTransactionsCounter.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export default transactionsCounterSlice.reducer;
