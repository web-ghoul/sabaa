import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { ProsCounterValuesTypes } from "../types/store.types.ts";

export const getProsCounter = createAsyncThunk(
  "/prosCounter/getProsCounter",
  async () => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/owner/counters`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data.count;
  }
);

const initialState: ProsCounterValuesTypes = {
  isLoading: true,
  prosCounter: 0,
};

export const prosCounterSlice = createSlice({
  name: "prosCounter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProsCounter.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProsCounter.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.prosCounter = payload;
    });
    builder.addCase(getProsCounter.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export default prosCounterSlice.reducer;
